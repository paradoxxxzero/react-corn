import { MenuItem, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useMaybeMultipleValue, useOptions } from '@react-corn/core'
import clsx from 'clsx'
import React, { memo, useCallback, useEffect, useRef } from 'react'

const muiTextFieldProps = [
  // TextField
  'autoComplete',
  'autoFocus',
  'children',
  'classes',
  'className',
  'color',
  'defaultValue',
  'disabled',
  'error',
  'FormHelperTextProps',
  'fullWidth',
  'helperText',
  'hiddenLabel',
  'id',
  'InputLabelProps',
  'inputProps',
  'InputProps',
  'inputRef',
  'label',
  'multiline',
  'name',
  'onBlur',
  'onChange',
  'onFocus',
  'placeholder',
  'required',
  'rows',
  'rowsMax',
  'select',
  'SelectProps',
  'type',
  'value',
  'variant',
  // FormControl
  'children',
  'classes',
  'className',
  'color',
  'component',
  'disabled',
  'error',
  'fullWidth',
  'focused',
  'hiddenLabel',
  'margin',
  'required',
  // 'size',
  'variant',
]

const useStyles = makeStyles(theme => ({
  base: {
    '& .MuiInput-root': {
      color: theme.palette.text.secondary,
    },
  },
  modified: {
    '& .MuiInput-root': {
      color: theme.palette.text.primary,
    },
  },
  select: {
    '& .MuiInput-root': {
      minWidth: '200px',
    },
  },
}))
export const Input = memo(function Input({
  onChange,
  onBlur,
  onError,
  error,
  plant,
  unplant,
  name,
  value,
  children,
  modified,
  muiSize,
  ...props
}) {
  const classes = useStyles()
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

  const { muiProps, inputProps } = Object.entries(props).reduce(
    (acc, [k, v]) => {
      acc[muiTextFieldProps.includes(k) ? 'muiProps' : 'inputProps'][k] = v
      return acc
    },
    { muiProps: {}, inputProps: {} }
  )

  return (
    <TextField
      {...muiProps}
      size={muiSize}
      className={clsx(muiProps.className, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
      inputRef={inputRef}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      label={muiProps.label || children}
      error={!!error}
      helperText={error || muiProps.helperText}
      inputProps={inputProps}
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

export const TextArea = props => <Input multiline {...props} />

export const Select = memo(function Select({
  choices,
  onChange,
  onBlur,
  onError,
  error,
  plant,
  unplant,
  name,
  value,
  children,
  modified,
  multiple,
  SelectProps = {},

  ...props
}) {
  const classes = useStyles()
  const inputRef = useRef()

  useEffect(() => {
    plant(name)
    return () => {
      unplant(name)
    }
  }, [name, plant, unplant])

  const options = useOptions(choices)
  const multipleValue = useMaybeMultipleValue(multiple, value)
  const handleChange = useCallback(
    e => {
      onChange(name, e.target.value)
    },
    [name, onChange]
  )

  const handleBlur = useCallback(() => {
    onBlur(value)
  }, [value, onBlur])

  useEffect(() => {
    onError(
      name,
      inputRef.current.node.checkValidity()
        ? null
        : inputRef.current.node.validationMessage
    )
  }, [name, onError, props.value])

  const { muiProps, inputProps } = Object.entries(props).reduce(
    (acc, [k, v]) => {
      acc[muiTextFieldProps.includes(k) ? 'muiProps' : 'inputProps'][k] = v
      return acc
    },
    { muiProps: {}, inputProps: {} }
  )

  return (
    <TextField
      {...muiProps}
      select
      SelectProps={{
        multiple,
        ...SelectProps,
      }}
      className={clsx(muiProps.className, classes.select, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
      inputRef={inputRef}
      name={name}
      value={multipleValue}
      onChange={handleChange}
      onBlur={handleBlur}
      label={muiProps.label || children}
      error={!!error}
      helperText={error || muiProps.helperText}
      inputProps={inputProps}
    >
      {!multiple && options.every(([k]) => k) && <option value="" />}
      {options.map(([label, key]) => (
        <MenuItem key={key} value={key}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  )
})
