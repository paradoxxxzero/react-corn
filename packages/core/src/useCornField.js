import { useCallback, useEffect, useRef } from 'react'

export default ({
  name,
  value,
  type,
  modified,
  error,
  customError,
  plant,
  unplant,
  onChange,
  onError,
  onBlur,
  ...props
}) => {
  // The form element ref
  const elementRef = useRef()

  // Registering/Unregistering this field on mount/unmount
  useEffect(() => {
    plant(name)
    return () => {
      unplant(name)
    }
  }, [name, plant, unplant])

  // Default onChange behavior: get value or checked from event and call onChange
  // with name and value
  const handleChange = useCallback(
    e =>
      onChange(
        name,
        e.target[['radio', 'checkbox'].includes(type) ? 'checked' : 'value']
      ),
    [name, onChange, type]
  )

  // On blur call super onBlur with current value
  const handleBlur = useCallback(() => onBlur(value), [value, onBlur])

  // After render check for field errors and dispatch them
  useEffect(() => {
    // Assign a custom error to the field or remove it
    elementRef.current.setCustomValidity(customError || '')
    // Dispatch the name and the custom error or the native one.
    onError(
      name,
      elementRef.current.checkValidity()
        ? null
        : elementRef.current.validationMessage
    )
  }, [name, customError, onError, value, props])

  return {
    ref: elementRef,
    name,
    value,
    type,
    onChange: handleChange,
    onBlur: handleBlur,
    ...props,
  }
}
