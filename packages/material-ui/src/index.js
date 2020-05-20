import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Slider as MuiSlider,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  useCornField,
  useMaybeMultipleValue,
  useOptions,
} from '@react-corn/core'
import clsx from 'clsx'
import React, { memo, useCallback, useMemo } from 'react'

import {
  muiFormControlProps,
  muiSliderProps,
  muiTextFieldProps,
  useFilteredProps,
} from './attributes'

export const VALUE_DELIMITER = '/--/'

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
  hidden: {
    top: '50%',
    height: 0,
    left: 0,
    margin: 'auto !important',
    opacity: 0,
    position: 'absolute',
    right: 0,
    width: 0,
    zIndex: -1,
  },
  sliderControl: {
    display: 'block',
    margin: theme.spacing(4),
    maxWidth: '200px',
  },
  slider: {
    top: '1.75em',
  },
  sliderLabel: {
    top: '1.75em',
    position: 'relative',
  },
}))
export const Input = memo(function Input({ children, muiSize, ...props }) {
  const classes = useStyles()
  const { modified, error } = props
  const { ref, ...cornProps } = useCornField(props)

  const [textFieldProps, inputProps] = useFilteredProps(
    cornProps,
    muiTextFieldProps
  )

  return (
    <TextField
      {...textFieldProps}
      size={muiSize}
      className={clsx(textFieldProps.className, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
      inputRef={ref}
      label={textFieldProps.label || children}
      error={!!error}
      helperText={error || textFieldProps.helperText}
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
  children,
  multiple,
  className,
  ...props
}) {
  const classes = useStyles()
  const { modified, error, onChange } = props
  const { ref, ...cornProps } = useCornField(props)
  const { name, value } = cornProps

  const options = useOptions(choices)
  const multipleValue = useMaybeMultipleValue(multiple, value)
  const handleChange = useCallback(
    e => {
      onChange(name, e.target.value)
    },
    [name, onChange]
  )

  const [textFieldProps, inputProps] = useFilteredProps(
    cornProps,
    muiTextFieldProps
  )

  const InputProps = useMemo(
    () => ({
      ...(textFieldProps.InputProps || {}),
      endAdornment: (
        <>
          {textFieldProps.InputProps || null}
          <input
            ref={ref}
            name={`${name}-corn-control`}
            required={textFieldProps.required}
            disabled={textFieldProps.disabled}
            defaultValue={
              multiple ? multipleValue.join(VALUE_DELIMITER) : multipleValue
            }
            className={classes.hidden}
          />
        </>
      ),
    }),
    [
      classes.hidden,
      textFieldProps.InputProps,
      textFieldProps.disabled,
      textFieldProps.required,
      multiple,
      multipleValue,
      name,
      ref,
    ]
  )

  const SelectProps = useMemo(
    () => ({
      ...(textFieldProps.SelectProps || {}),
      multiple,
    }),
    [textFieldProps.SelectProps, multiple]
  )

  return (
    <TextField
      {...textFieldProps}
      select
      SelectProps={SelectProps}
      className={clsx(className, classes.select, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
      onChange={handleChange}
      value={multipleValue}
      label={textFieldProps.label || children}
      error={!!error}
      helperText={error || textFieldProps.helperText}
      InputProps={InputProps}
      inputProps={inputProps}
    >
      {!multiple && options.every(([k]) => k) && (
        <MenuItem value="">&nbsp;</MenuItem>
      )}
      {options.map(([label, key]) => (
        <MenuItem key={key} value={key}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  )
})

export const Slider = memo(function Slider({ children, ...props }) {
  const { modified, error, onChange } = props
  const { ref, className, ...cornProps } = useCornField(props)
  const { name, value } = cornProps
  const classes = useStyles()

  const handleChange = useCallback(
    (e, v) => onChange(name, isNaN(parseFloat(v)) ? '' : parseFloat(v)),
    [name, onChange]
  )
  const [sliderProps, fcProps, inputProps] = useFilteredProps(
    cornProps,
    muiSliderProps,
    muiFormControlProps
  )

  return (
    <FormControl
      {...fcProps}
      className={clsx(className, classes.sliderControl, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
      error={!!error}
      fullWidth
    >
      <InputLabel disableAnimation shrink>
        {children}
      </InputLabel>
      <MuiSlider
        {...sliderProps}
        className={clsx(classes.slider, className)}
        onChange={handleChange}
      />
      {error && (
        <FormHelperText className={classes.sliderLabel}>{error}</FormHelperText>
      )}
      <input
        {...inputProps}
        ref={ref}
        name={`${name}-corn-control`}
        type="number"
        defaultValue={value}
        className={classes.hidden}
        value={undefined}
      />
    </FormControl>
  )
})