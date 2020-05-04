import React, { useCallback } from 'react'

export const Input = ({ onChange, ...props }) => {
  const handleChange = useCallback(
    e =>
      onChange(
        e.target[
          ['radio', 'checkbox'].includes(props.type) ? 'checked' : 'value'
        ]
      ),
    [onChange, props.type]
  )

  return <input onChange={handleChange} {...props} />
}

export const TextArea = ({ onChange, ...props }) => {
  const handleChange = useCallback(e => onChange(e.target.value), [onChange])

  return <textarea onChange={handleChange} {...props} />
}
