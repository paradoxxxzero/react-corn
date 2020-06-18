import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Slider as MuiSlider,
  Switch as MuiSwitch,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  useControlField,
  useCornField,
  useMaybeMultipleValue,
  useOptions,
} from '@react-corn/core'
import clsx from 'clsx'
import React, { memo, useCallback, useMemo } from 'react'

import {
  muiFormControlProps,
  muiSliderProps,
  muiSwitchProps,
  muiTextFieldProps,
  useFilteredProps,
} from './attributes'

export * from './attributes'

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
  field: {
    '& input[type="checkbox"], & input[type="radio"]': {
      minWidth: '1em',
    },
    '& input[type="color"]': {
      minWidth: '3em',
      minHeight: '2em',
    },
  },
  select: {
    '& .MuiInput-root': {
      minWidth: '200px',
    },
  },
  wrapper: {
    position: 'relative',
    width: 'fit-content',
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
  sliderUnmodified: {
    opacity: 0.75,
  },
  sliderModified: {
    opacity: 1,
  },
  switch: {},
  switchControl: {
    minHeight: '2em',
  },
  switchUnmodified: {
    opacity: 0.75,
  },
  switchModified: {
    opacity: 1,
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
      className={clsx(textFieldProps.className, classes.field, {
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

export const Checkbox = props => (
  <Input type="checkbox" InputLabelProps={{ shrink: true }} {...props} />
)
export const Color = props => <Input type="color" {...props} />
export const Date = props => (
  <Input type="date" InputLabelProps={{ shrink: true }} {...props} />
)
export const DatetimeLocal = props => (
  <Input type="datetime-local" InputLabelProps={{ shrink: true }} {...props} />
)
export const Email = props => {
  const avoidSpacesThatBreakReact = useCallback(e => {
    // https://github.com/facebook/react/issues/6368
    if (e.key === ' ') {
      e.preventDefault()
    }
  }, [])
  return <Input type="email" onKeyDown={avoidSpacesThatBreakReact} {...props} />
}
export const File = props => (
  <Input type="file" InputLabelProps={{ shrink: true }} {...props} />
)
export const Hidden = props => <Input type="hidden" {...props} />
export const Month = props => (
  <Input type="month" InputLabelProps={{ shrink: true }} {...props} />
)
export const Password = props => <Input type="password" {...props} />
export const Radio = props => (
  <Input type="radio" InputLabelProps={{ shrink: true }} {...props} />
)
export const Range = props => <Input type="range" {...props} />
export const Search = props => <Input type="search" {...props} />
export const Tel = props => <Input type="tel" {...props} />
export const Text = props => <Input type="text" {...props} />
export const Time = props => (
  <Input
    type="time"
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />
)
export const Url = props => <Input type="url" {...props} />
export const Week = props => (
  <Input
    type="week"
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />
)

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
  const { name, value: originalValue } = cornProps

  const options = useOptions(choices)
  const value = useMaybeMultipleValue(multiple, originalValue)
  const controlProps = useControlField(name, value)

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

  const SelectProps = useMemo(
    () => ({
      ...(textFieldProps.SelectProps || {}),
      multiple,
    }),
    [textFieldProps.SelectProps, multiple]
  )

  return (
    <div className={classes.wrapper}>
      <TextField
        {...textFieldProps}
        select
        SelectProps={SelectProps}
        className={clsx(className, classes.select, {
          [classes.base]: !modified,
          [classes.modified]: modified,
        })}
        onChange={handleChange}
        value={value}
        label={textFieldProps.label || children}
        error={!!error}
        helperText={error || textFieldProps.helperText}
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
      <input
        {...inputProps}
        ref={ref}
        className={classes.hidden}
        {...controlProps}
      />
    </div>
  )
})

export const Slider = memo(function Slider({ children, ...props }) {
  const { modified, error, onChange } = props
  const { ref, className, ...cornProps } = useCornField(props)
  const { name, value } = cornProps
  const classes = useStyles()

  const controlProps = useControlField(name, value)

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
        [classes.sliderUnmodified]: !modified,
        [classes.sliderModified]: modified,
      })}
      error={!!error}
      fullWidth
    >
      <InputLabel disableAnimation shrink>
        {children}
      </InputLabel>
      <MuiSlider
        {...sliderProps}
        value={sliderProps.value === '' ? undefined : sliderProps.value}
        className={clsx(classes.slider, className)}
        onChange={handleChange}
      />
      {error && (
        <FormHelperText className={classes.sliderLabel}>{error}</FormHelperText>
      )}
      <input
        {...inputProps}
        ref={ref}
        type="number"
        className={classes.hidden}
        {...controlProps}
      />
    </FormControl>
  )
})

export const Switch = memo(function Switch({ children, onLabel, ...props }) {
  const { modified, error } = props
  const { ref, className, ...cornProps } = useCornField({
    ...props,
    type: 'checkbox',
  })
  const { name, value } = cornProps
  const classes = useStyles()
  const controlProps = useControlField(name, value, true)

  const [switchProps, fcProps, inputProps] = useFilteredProps(
    cornProps,
    muiSwitchProps,
    muiFormControlProps
  )
  switchProps.checked = switchProps.value
  delete switchProps.value

  return (
    <FormControl
      {...fcProps}
      className={clsx(className, classes.switchControl, {
        [classes.switchUnmodified]: !modified,
        [classes.switchModified]: modified,
      })}
      error={!!error}
      fullWidth
    >
      <InputLabel disableAnimation shrink>
        {children}
        <MuiSwitch
          {...switchProps}
          checked={switchProps.checked === '' ? undefined : switchProps.checked}
          className={clsx(classes.switch, className)}
        />
        {onLabel}
      </InputLabel>

      {error && (
        <FormHelperText className={classes.switchLabel}>{error}</FormHelperText>
      )}
      <input
        {...inputProps}
        ref={ref}
        className={classes.hidden}
        {...controlProps}
      />
    </FormControl>
  )
})
