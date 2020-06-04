import React, { memo, useCallback } from 'react'

import { useCornField } from '.'
import { useMaybeMultipleValue, useOptions } from './hooks'

export const Input = memo(function Input({ Component = 'input', ...props }) {
  const inputProps = useCornField(props)
  if (['checkbox', 'radio'].includes(inputProps.type)) {
    inputProps.checked = !!inputProps.value
    delete inputProps.value
  }
  return <Component {...inputProps} />
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
    (n, v) => onChange(n, isNaN(parseFloat(v)) ? '' : parseFloat(v)),
    [onChange]
  )
  return <Input type="number" onChange={handleChange} {...props} />
}

export const TextArea = props => <Input Component="textarea" {...props} />

export const Select = memo(function Select({ choices, multiple, ...props }) {
  const { onChange } = props
  const selectProps = useCornField(props)
  const { name, value } = selectProps

  const options = useOptions(choices)
  const multipleValue = useMaybeMultipleValue(multiple, value)
  const handleChange = useCallback(
    e => {
      onChange(
        name,
        multiple
          ? [...e.target.options].filter(o => o.selected).map(o => o.value)
          : e.target.value
      )
    },
    [name, onChange, multiple]
  )

  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select
      {...selectProps}
      multiple={multiple}
      onChange={handleChange}
      value={multipleValue}
    >
      {!multiple && options.every(([k]) => k) && <option value="" />}
      {options.map(([label, key]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  )
})
