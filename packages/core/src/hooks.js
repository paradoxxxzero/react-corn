import { useMemo } from 'react'

export const useOptions = choices => {
  const options = useMemo(
    () =>
      Array.isArray(choices)
        ? choices.map(c => (Array.isArray(c) ? c : [c, c]))
        : Object.entries(choices || {}),
    [choices]
  )

  return options
}

export const useMaybeMultipleValue = (multiple, value) => {
  const multipleValue = useMemo(() => {
    if (!multiple && Array.isArray(value)) {
      return value.length ? value[0] : ''
    }
    if (multiple && !Array.isArray(value)) {
      return value !== null && value !== void 0 && value !== '' ? [value] : []
    }
    return value
  }, [multiple, value])

  return multipleValue
}

export const noOp = () => {}
export const VALUE_DELIMITER = '/--/'
export const useControlField = (name, value, checkboxType) => {
  const props = useMemo(
    () => ({
      name: `${name}-corn-control`,
      [checkboxType ? 'checked' : 'value']: checkboxType
        ? !!value
        : Array.isArray(value)
        ? value.join(VALUE_DELIMITER)
        : value === null || value === undefined
        ? ''
        : typeof value === 'object'
        ? Object.keys(value).length
          ? JSON.stringify(value)
          : ''
        : value,
      onChange: noOp,
    }),
    [checkboxType, name, value]
  )

  return props
}
