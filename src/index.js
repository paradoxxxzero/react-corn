import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { diff, get, insert } from './object'

export const useCorn = ({
  // The item to edit:
  item,
  // onChange will be called with the current item state and its diff
  // with the original item at each field change
  onChange: propagateChange = () => {},
  // onSubmit will be called with the current item state and its diff
  // with the original item on form submit
  onSubmit: propagateSubmit = () => {},
}) => {
  // transient hold the currently edited item
  const [transient, setTransient] = useState(item)

  // errors is a mapping of all fields with theirs errors
  const [errors, setErrors] = useState({})

  // names hold all field names that this form is handling
  const names = useRef([])

  // The current computed delta between the original item and the currently modified one
  const delta = useMemo(() => diff(item, transient, names.current), [
    item,
    transient,
  ])

  // Modified is true if any field contains a different value from the original item
  const modified = !!Object.keys(delta).length

  // On form submit, call the super onSubmit function and prevent browser form submition
  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      propagateSubmit(transient, delta)
    },
    [transient, delta, propagateSubmit]
  )

  // On transient changes, call the super onChange
  useEffect(() => {
    propagateChange(transient)
  }, [transient, propagateChange])

  // This function generate field props from a field name and corn options
  const field = useCallback(
    (
      // The field name, can be composed with a dot to edit sub objects
      // i.e.: key or key.0.subkey.subsubkey
      name,
      {
        // Normalize the value on field exit (defaults to removing extra spaces)
        normalizer = v => (v && v.trim ? v.trim() : v),
      } = {}
    ) => {
      if (!names.current.includes(name)) {
        names.current.push(name)
      }
      // This field current value is stored in transient
      const value = get(transient, name)
      // If there is a delta for this field, it's modified
      const modified = !!get(delta, name)
      // If there's an error, pass it
      const error = errors[name]

      return {
        name,
        value,
        modified,
        error,
        // Update transient object on field change
        // Fields must call this with the value (and not the event)
        onChange: value => {
          setTransient(o => insert(o, name, value, names.current))
        },
        // Normalize value on blur
        onBlur: () => {
          const normalized = normalizer(value)
          if (normalized !== value) {
            setTransient(o => insert(o, name, normalized, names.current))
          }
        },
        // Update the error holder on value change
        // Fields should call this functions when there's an error in the field
        // value (and then with null when there's no more error).
        onError: error => {
          setErrors(e => (e[name] !== error ? { ...e, [name]: error } : e))
        },
      }
    },
    [delta, transient, errors]
  )

  // Reset the transient item to the orginal one, resetting all field to item values
  const reset = useCallback(() => {
    if (modified) {
      setTransient(item)
    }
  }, [item, setTransient, modified])

  // When the item is externally modified, update the transient values
  // We lose the pending changes here.
  useEffect(() => {
    setTransient(item)
  }, [item])

  return {
    form: {
      onSubmit,
    },
    field,
    modified,
    reset,
  }
}
