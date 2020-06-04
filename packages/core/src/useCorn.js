import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'

import { get, merge } from './object'

// Normalize the value on field exit (defaults to removing extra spaces)
const normalizer = v => (v && v.trim ? v.trim() : v)

const reducer = (state, action) => {
  // eslint-disable-next-line no-unused-vars
  let _
  let transient
  switch (action.type) {
    case 'change':
      if (action.value === action.itemValue) {
        ;({ [action.name]: _, ...transient } = state)
        return transient
      }
      return { ...state, [action.name]: action.value }
    case 'plant':
      return { ...state, [action.name]: '' }
    case 'unplant':
      ;({ [action.name]: _, ...transient } = state)
      return transient
    case 'reset':
      return {}
    default:
      throw new Error()
  }
}

export default ({
  // The item to edit:
  item,
  // onChange will be called with the name, the current item state and its diff
  // with the original item at each field change
  onChange: propagateChange,
  // onSubmit will be called with the current item state and its diff
  // with the original item on form submit
  onSubmit: propagateSubmit,
}) => {
  // transient hold the currently edited item
  const [transient, dispatch] = useReducer(reducer, {})

  // errors is a mapping of all fields with theirs errors
  const [errors, setErrors] = useState({})

  // names hold all field names that this form is handling
  const names = useRef([])

  // touched keep track of touched fields to prevent displaying errors
  const [touched, setTouched] = useState([])

  // Modified is true if any field contains a different value from the original item
  const modified = !!Object.keys(transient).length

  // Pre compute the modified item for field function calls
  const mergedItem = useMemo(() => merge(item, transient, names.current), [
    item,
    transient,
  ])

  // On form submit, call the super onSubmit function and prevent browser form submition
  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      if (Object.values(errors).some(x => x)) {
        // Should not happen as the form should prevent submit
        window.alert(
          `Please fix errors in the following fields: ${Object.entries(errors)
            // eslint-disable-next-line no-unused-vars
            .filter(([_, v]) => v)
            .map(([k]) => k)
            .join(', ')}`
        )
        return
      }
      if (Object.keys(transient).length) {
        propagateSubmit?.(
          merge(item, transient),
          merge({}, transient),
          mergedItem
        )
      }
    },
    [errors, transient, propagateSubmit, item, mergedItem]
  )

  // On transient changes, call the super onChange
  useEffect(() => {
    propagateChange?.(
      merge(item, transient),
      merge({}, transient),
      merge({}, Object.fromEntries(Object.entries(errors).filter(([, v]) => v)))
    )
    // We voluntarly omit everything except transient because it's only
    // transient changes that should initiate onChange
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transient, errors])

  const plant = useCallback(
    name => {
      names.current = [...names.current, name]
      dispatch({ type: 'plant', name, value: get(item, name) })
    },
    [item]
  )

  const unplant = useCallback(
    name => {
      names.current = names.current.filter(n => n !== name)
      setTouched(touched =>
        touched.includes(name) ? touched.filter(n => n !== name) : touched
      )
      setErrors(errors =>
        Object.keys(errors).includes(name)
          ? Object.fromEntries(
              Object.entries(errors).filter(([k]) => k !== name)
            )
          : errors
      )
      dispatch({ type: 'unplant', name, value: get(item, name) })
    },
    [item]
  )

  // Update transient object on field change
  // Fields must call this with the value (and not the event)
  const onChange = useCallback(
    (name, value) => {
      dispatch({ type: 'change', name, value, itemValue: get(item, name) })
    },
    [item]
  )

  // Normalize value on blur
  const onBlur = useCallback(
    (name, value) => {
      if (!touched.includes(name)) {
        setTouched([...touched, name])
      }
      const normalized = normalizer(value)
      if (normalized !== value) {
        dispatch({
          type: 'change',
          name,
          value: normalized,
          oldValue: get(item, value),
        })
      }
    },
    [item, touched]
  )

  // Update the error holder on value change
  // Fields should call this functions when there's an error in the field
  // value (and then with null when there's no more error).
  const onError = useCallback((name, error) => {
    setErrors(e => (e[name] !== error ? { ...e, [name]: error } : e))
  }, [])

  // This function generate field props from a field name and corn options
  const field = useCallback(
    (name, customValidator, options) => {
      // customValidator is not required, options can be passed as second arg
      if (
        customValidator &&
        typeof customValidator !== 'function' &&
        !options
      ) {
        options = customValidator
        customValidator = null
      }

      // If there is a transient entry for this field, it's modified
      const modified = Object.keys(transient).includes(name)
      // This field current value is stored in transient
      const value = modified ? transient[name] : get(item, name)
      // If there's an error, pass it
      const error = touched.includes(name) && errors[name]

      const dynamicProps = Object.entries(options || {}).reduce(
        (acc, [k, v]) => {
          acc[k] = typeof v === 'function' ? v(mergedItem) : v
          return acc
        },
        {}
      )

      const customError =
        customValidator && customValidator(value, mergedItem, name)
      return {
        name,
        value,
        modified,
        error,
        customError,
        plant,
        unplant,
        onChange,
        onError,
        onBlur,
        ...dynamicProps,
      }
    },
    [
      transient,
      item,
      touched,
      errors,
      mergedItem,
      plant,
      unplant,
      onChange,
      onError,
      onBlur,
    ]
  )

  const current = useCallback(
    getter => {
      return getter(merge(item, transient))
    },
    [item, transient]
  )

  // Reset the transient item to the orginal one, resetting all field to item values
  const reset = useCallback(() => {
    dispatch({ type: 'reset' })
  }, [])

  // When the item is externally modified, update the transient values
  // We lose the pending changes here.
  useEffect(() => {
    dispatch({ type: 'reset' })
  }, [item])

  return {
    form: {
      onSubmit,
    },
    field,
    current,
    modified,
    reset,
  }
}
