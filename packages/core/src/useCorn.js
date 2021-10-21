import { useCallback, useEffect, useMemo, useReducer } from 'react'
import { get, merge } from './object'

// Normalize the value on field exit (defaults to removing extra spaces)
const normalizer = v => (v && v.trim ? v.trim() : v)

const isPromise = v => v && v.then !== undefined

const reducer = (state, action) => {
  let _
  let transient, errors

  switch (action.type) {
    case 'change':
      if (action.value === action.itemValue) {
        if (Object.keys(state.transient).includes(action.name)) {
          ;({ [action.name]: _, ...transient } = state.transient)
        } else {
          ;({ transient } = state)
        }
        return { ...state, transient }
      }

      return {
        ...state,
        transient: {
          ...state.transient,
          [action.name]: action.value,
        },
        lastChangeReason: action.reason,
      }
    case 'plant':
      return {
        ...state,
        names: [...state.names, action.name],
      }
    case 'unplant':
      ;({ [action.name]: _, ...transient } = state.transient)
      ;({ [action.name]: _, ...errors } = state.errors)
      return {
        ...state,
        transient,
        names: state.names.filter(name => name !== action.name),
        touched: state.touched.filter(name => name !== action.name),
        errors,
      }
    case 'submit':
      if (
        action.result === null ||
        action.result === undefined ||
        action.result === true
      ) {
        // Reset the form as the submit has been accepted
        return { ...state, transient: {}, touched: [] }
      } else if (typeof action.result === 'object') {
        // Set server side errors
        return {
          ...state,
          errors: {
            ...state.errors,
            ...Object.fromEntries(
              Object.entries(action.result).filter(([name]) =>
                state.names.includes(name)
              )
            ),
          },
        }
      }
      return state
    case 'reset':
      return { ...state, transient: {}, touched: [] }
    case 'error':
      if (state.errors[action.name] !== action.error) {
        return {
          ...state,
          errors: { ...state.errors, [action.name]: action.error },
        }
      }
      return state
    case 'blur':
      if (!state.touched.includes(action.name)) {
        return { ...state, touched: [...state.touched, action.name] }
      }
      return state
    default:
      throw new Error()
  }
}

const emptyItem = {}

export default ({
  // The item to edit:
  item = emptyItem,
  // onChange will be called with the name, the current item state, its diff
  // with the original item at each field change and the fields errors
  onChange: propagateChange,
  // onBlur will be called with the same parameters as onChange but only when
  // a field lose focus
  onBlur: propagateBlur,
  // onSubmit will be called with the current item state and its diff
  // with the original item on form submit.
  // This method can return a boolean or a promise resolving to a boolean
  // to specify whether to reset the form or not (ie if it's valid or not)
  // It can also return an object mapping field names with their respective
  // error strings (in case of server side validation for example).
  onSubmit: propagateSubmit,
  // Default method to post to avoid creating GET url with parameters when no js
  method = 'POST',
}) => {
  // transient hold the currently edited item
  // errors is a mapping of all fields with theirs errors
  // touched keep track of touched fields to prevent displaying errors
  // names hold all field names that this form is handling
  const [{ transient, errors, touched, names, lastChangeReason }, dispatch] =
    useReducer(reducer, {
      transient: {},
      errors: {},
      touched: [],
      names: [],
      lastChangeReason: null,
    })

  // Modified is true if any field contains a different value from the original item
  const modified = !!Object.keys(transient).length

  // Pre compute the modified item for field function calls
  const mergedItem = useMemo(
    () => merge(item, transient, names),
    [item, transient, names]
  )

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
      const result = propagateSubmit?.(
        merge(item, transient),
        merge({}, transient),
        mergedItem,
        names
      )
      if (isPromise(result)) {
        return new Promise((resolve, reject) => {
          result
            .then(asyncResult => {
              dispatch({ type: 'submit', result: asyncResult })
              resolve()
            })
            .catch(reject)
        })
      }
      dispatch({ type: 'submit', result })
      return Promise.resolve()
    },
    [errors, transient, propagateSubmit, item, mergedItem, names]
  )

  // On transient changes, call the super onChange
  useEffect(() => {
    if (propagateChange || (propagateBlur && lastChangeReason === 'blur')) {
      const newItem = merge(item, transient)
      const itemDiff = merge({}, transient)
      const currentErrors = merge(
        {},
        Object.fromEntries(Object.entries(errors).filter(([, v]) => v))
      )

      propagateChange &&
        propagateChange(newItem, itemDiff, currentErrors, names)
      propagateBlur &&
        lastChangeReason === 'blur' &&
        propagateBlur(newItem, itemDiff, currentErrors, names)
    }

    // We voluntarly omit everything except transient because it's only
    // transient changes that should initiate onChange
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transient, errors])

  const plant = useCallback(name => {
    dispatch({ type: 'plant', name })
  }, [])

  const unplant = useCallback(name => {
    dispatch({ type: 'unplant', name })
  }, [])

  // Update transient object on field change
  // Fields must call this with the value (and not the event)
  const onChange = useCallback(
    (name, value) => {
      dispatch({
        type: 'change',
        name,
        value,
        itemValue: get(item, name),
        reason: 'change',
      })
    },
    [item]
  )

  // Normalize value on blur
  const onBlur = useCallback(
    (name, value) => {
      dispatch({ type: 'blur', name })

      const normalized = normalizer(value)
      dispatch({
        type: 'change',
        name,
        value: normalized,
        itemValue: get(item, name),
        reason: 'blur',
      })
    },
    [item]
  )

  // Update the error holder on value change
  // Fields should call this functions when there's an error in the field
  // value (and then with null when there's no more error).
  const onError = useCallback((name, error) => {
    dispatch({
      type: 'error',
      name,
      error,
    })
  }, [])

  // This function generate field props from a field name and corn options
  const field = useCallback(
    (name, customValidator, props) => {
      // customValidator is not required, field props can be passed as second arg
      if (customValidator && typeof customValidator !== 'function' && !props) {
        props = customValidator
        customValidator = null
      }

      // If there is a transient entry for this field, it's modified
      const modified = Object.keys(transient).includes(name)
      // This field current value is stored in transient
      const value = modified ? transient[name] : get(item, name)
      // If there's an error, pass it
      const error = touched.includes(name) ? errors[name] : null

      const dynamicProps = Object.entries(props || {}).reduce((acc, [k, v]) => {
        acc[k] = typeof v === 'function' ? v(mergedItem) : v
        return acc
      }, {})

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
  const onReset = useCallback(() => {
    dispatch({ type: 'reset' })
  }, [])

  // When the item is externally modified, update the transient values
  // We lose the pending changes here.
  useEffect(() => {
    dispatch({ type: 'reset' })
  }, [item])

  return {
    form: {
      method,
      onSubmit,
    },
    field,
    current,
    modified,
    onReset,
  }
}
