import React, { useCallback, useEffect, useRef } from 'react'

import { useOptions } from '../hooks'

export const Input = ({ onChange, onError, error, ...props }) => {
  const inputRef = useRef()
  const handleChange = useCallback(
    e =>
      onChange(
        e.target[
          ['radio', 'checkbox'].includes(props.type) ? 'checked' : 'value'
        ]
      ),
    [onChange, props.type]
  )

  useEffect(() => {
    onError(
      inputRef.current.checkValidity()
        ? null
        : inputRef.current.validationMessage
    )
  }, [onError, props.value])

  return <input ref={inputRef} onChange={handleChange} {...props} />
}

export const Checkbox = props => <Input type="checkbox" {...props} />
export const Color = props => <Input type="color" {...props} />
export const Date = props => <Input type="date" {...props} />
export const DatetimeLocal = props => <Input type="datetime-local" {...props} />
export const Email = props => <Input type="email" {...props} />
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
    v => onChange(isNaN(parseFloat(v)) ? null : parseFloat(v)),
    [onChange]
  )
  return <Input type="number" onChange={handleChange} {...props} />
}

export const TextArea = ({ onChange, ...props }) => {
  const handleChange = useCallback(e => onChange(e.target.value), [onChange])

  return <textarea onChange={handleChange} {...props} />
}

export const Select = ({ onChange, choices, ...props }) => {
  const options = useOptions(choices)
  const handleChange = useCallback(
    e =>
      onChange(
        props.multiple
          ? [...e.target.options].filter(o => o.selected).map(o => o.value)
          : e.target.value
      ),
    [onChange, props.multiple]
  )

  return (
    <select onChange={handleChange} {...props}>
      {!props.multiple && options.every(([k]) => k) && <option value="" />}
      {options.map(([label, key]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  )
}
