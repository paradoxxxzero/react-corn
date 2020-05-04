import React, { useCallback } from 'react'

const black = '#000'
const blue = '#00f'

const Labelled = ({ label, children, modified, required }) => {
  return (
    <label
      style={{
        display: 'block',
        margin: '1em',
        color: modified ? blue : black,
      }}
    >
      {label}
      {required ? '*' : ''}
      <div>{children}</div>
    </label>
  )
}

export const Input = ({ onChange, children, modified, ...props }) => {
  const handleChange = useCallback(
    e =>
      onChange(
        e.target[
          ['radio', 'checkbox'].includes(props.type) ? 'checked' : 'value'
        ]
      ),
    [onChange, props.type]
  )

  return (
    <Labelled label={children} modified={modified} required={props.required}>
      <input onChange={handleChange} {...props} />
    </Labelled>
  )
}

export const Number = ({ onChange, ...props }) => {
  const handleChange = useCallback(
    v => onChange(isNaN(parseFloat(v)) ? null : parseFloat(v)),
    [onChange]
  )
  return <Input type="number" onChange={handleChange} {...props} />
}

export const TextArea = ({ onChange, children, modified, ...props }) => {
  const handleChange = useCallback(e => onChange(e.target.value), [onChange])

  return (
    <Labelled label={children} modified={modified} required={props.required}>
      <textarea onChange={handleChange} {...props} />
    </Labelled>
  )
}
