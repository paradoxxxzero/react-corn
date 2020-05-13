import React, { memo, useCallback, useEffect, useRef } from 'react'

import { useMaybeMultipleValue, useOptions } from './hooks'

export const Input = memo(function Input({
  onChange,
  onBlur,
  onError,
  error,
  plant,
  unplant,
  name,
  value,
  Component = 'input',
  // Unused extra props in core:
  modified,
  ...props
}) {
  const inputRef = useRef()
  useEffect(() => {
    plant(name)
    return () => {
      unplant(name)
    }
  }, [name, plant, unplant])

  const handleChange = useCallback(
    e =>
      onChange(
        name,
        e.target[
          ['radio', 'checkbox'].includes(props.type) ? 'checked' : 'value'
        ]
      ),
    [name, onChange, props.type]
  )

  const handleBlur = useCallback(() => onBlur(value), [value, onBlur])

  useEffect(() => {
    onError(
      name,
      inputRef.current.checkValidity()
        ? null
        : inputRef.current.validationMessage
    )
  }, [name, onError, value])

  return (
    <Component
      ref={inputRef}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  )
})

export const Checkbox = props => <Input type="checkbox" {...props} />
export const Color = props => <Input type="color" {...props} />
export const Date = props => <Input type="date" {...props} />
export const DatetimeLocal = props => <Input type="datetime-local" {...props} />
export const Email = props => {
  const avoidSpacesThatBreakReact = useCallback(e => {
    // https://github.com/facebook/react/issues/6368
    if (e.key === ' ') {
      e.preventDefault()
    }
  }, [])
  return <Input type="email" onKeyDown={avoidSpacesThatBreakReact} {...props} />
}
export const File = props => <Input type="file" {...props} />
export const Hidden = props => <Input type="hidden" {...props} />
export const Month = props => <Input type="month" {...props} />
export const Password = props => <Input type="password" {...props} />
export const Radio = props => <Input type="radio" {...props} />
export const Range = props => <Input type="range" {...props} />
export const Search = props => <Input type="search" {...props} />
export const Tel = props => <Input type="tel" {...props} />
export const Text = props => <Input type="text" {...props} />
export const Time = props => <Input type="time" {...props} />
export const Url = props => <Input type="url" {...props} />
export const Week = props => <Input type="week" {...props} />

export const Number = ({ onChange, ...props }) => {
  const handleChange = useCallback(
    (n, v) => onChange(n, isNaN(parseFloat(v)) ? null : parseFloat(v)),
    [onChange]
  )
  return <Input type="number" onChange={handleChange} {...props} />
}

export const TextArea = props => <Input Component="textarea" {...props} />

export const Select = memo(function Select({
  onChange,
  onBlur,
  onError,
  choices,
  plant,
  unplant,
  name,
  value,
  // Unused extra props in core:
  modified,
  ...props
}) {
  const inputRef = useRef()

  useEffect(() => {
    plant(name)
    return () => {
      unplant(name)
    }
  }, [name, plant, unplant])

  const options = useOptions(choices)
  const multipleValue = useMaybeMultipleValue(props.multiple, value)
  const handleChange = useCallback(
    e => {
      onChange(
        name,
        props.multiple
          ? [...e.target.options].filter(o => o.selected).map(o => o.value)
          : e.target.value
      )
    },
    [name, onChange, props.multiple]
  )

  const handleBlur = useCallback(() => {
    onBlur(value)
  }, [value, onBlur])

  useEffect(() => {
    onError(
      name,
      inputRef.current.checkValidity()
        ? null
        : inputRef.current.validationMessage
    )
  }, [name, onError, props.value])

  return (
    <select
      ref={inputRef}
      onChange={handleChange}
      onBlur={handleBlur}
      value={multipleValue}
      {...props}
    >
      {!props.multiple && options.every(([k]) => k) && <option value="" />}
      {options.map(([label, key]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  )
})
