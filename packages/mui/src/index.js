import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Autocomplete as MuiAutocomplete,
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  MenuItem,
  Radio as MuiRadio,
  Slider as MuiSlider,
  Switch as MuiSwitch,
  TextField,
  useFormControl,
} from '@mui/material'
import { createFilterOptions } from '@mui/material/useAutocomplete'
import { withStyles } from '@mui/styles'
import makeStyles from '@mui/styles/makeStyles'
import {
  useControlField,
  useCornField,
  useMaybeMultipleValue,
  useOptions,
} from '@react-corn/core'
import clsx from 'clsx'
import React, { memo, useCallback, useMemo, useState } from 'react'

import {
  muiAutocompleteProps,
  muiFormControlProps,
  muiSliderProps,
  muiSwitchProps,
  muiTextFieldProps,
  useFilteredProps,
} from './attributes'

export * from './attributes'

const useStyles = makeStyles(theme => ({
  base: {
    '& .MuiInput-root,.MuiOutlinedInput-root,.MuiFilledInput-root,.MuiFormControlLabel-label,.MuiButtonBase-root.MuiCheckbox-root,.MuiSlider-root':
      {
        color: theme.palette.text.secondary,
      },
  },
  modified: {
    '& .MuiInput-root,.MuiOutlinedInput-root,.MuiFilledInput-root,.MuiFormControlLabel-label':
      {
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
  formControlLabel: {
    marginTop: theme.spacing(2),
  },
  sliderControl: {
    display: 'block',
    margin: theme.spacing(4),
    maxWidth: '200px',
  },
  slider: {
    top: '1.75em',
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
  switchLabel: {},
  sliderLabel: {
    top: '1.75em',
    position: 'relative',
  },
  suggestion: {
    color: theme.palette.info.main,
    display: 'block',
  },
}))
export const Input = memo(function Input({ children, ...props }) {
  const classes = useStyles()
  const { modified, error } = props

  // Handle size property collision between mui and input
  let muiSize
  if (props.size && typeof props.size === 'string') {
    muiSize = props.size
    delete props.size
  }

  const { ref, ...cornProps } = useCornField(props)

  const [textFieldProps, inputProps] = useFilteredProps(
    cornProps,
    muiTextFieldProps
  )

  return (
    <TextField
      {...textFieldProps}
      className={clsx(textFieldProps.className, classes.field, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
      inputRef={ref}
      label={textFieldProps.label || children}
      error={!!error}
      helperText={error || textFieldProps.helperText}
      inputProps={inputProps}
      size={muiSize}
    />
  )
})

export const Checkbox = memo(function Checkbox({
  children,
  option,
  noIndeterminate,
  ...props
}) {
  const { modified, error } = props
  const { ref, ...cornProps } = useCornField({
    ...props,
    type: 'checkbox',
  })
  const classes = useStyles()

  const [checkboxProps, fcProps] = useFilteredProps(
    cornProps,
    muiFormControlProps
  )
  const indeterminate = ![true, false].includes(cornProps.value)
  checkboxProps.checked = !!cornProps.value

  return (
    <FormControl
      {...fcProps}
      error={!!error}
      className={clsx(fcProps.className, classes.field, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
    >
      {option && (
        <InputLabel disableAnimation shrink>
          {children}
        </InputLabel>
      )}
      <FormControlLabel
        className={clsx({ [classes.formControlLabel]: option })}
        control={
          <MuiCheckbox
            {...checkboxProps}
            inputRef={ref}
            indeterminate={!noIndeterminate && indeterminate}
          />
        }
        label={option || children}
      />

      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
})

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

export const Money = ({ precision = 2, onChange, onBlur, ...props }) => {
  const order =
    !precision && precision !== 0 ? props.i18n.money.precision : precision
  if (!props.min) {
    props.min = 0
  }

  const handleChange = useCallback(
    (n, v) =>
      onChange(n, v && v.includes('e') ? parseFloat(v).toFixed(order) : v),
    [onChange, order]
  )
  const handleBlur = useCallback(
    (n, v) => {
      let value = v || null
      if (v && v.includes('.') && ![...v].every(c => '0.'.includes(c))) {
        const decimalLength = v.split('.')[1].length
        if (decimalLength > precision) {
          value = v.slice(0, precision - decimalLength)
        } else if (decimalLength < precision) {
          value = v + '0'.repeat(precision - decimalLength)
        }
      }
      onBlur(n, value)
    },
    [onBlur, precision]
  )

  return (
    <Input
      type="number"
      onChange={handleChange}
      onBlur={handleBlur}
      step={order === 0 ? 1 : `0.${'0'.repeat(order - 1)}1`}
      {...props}
    />
  )
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
  const { modified, error } = props
  const { ref, ...cornProps } = useCornField(props)
  const { name, value: originalValue } = cornProps

  const options = useOptions(choices)
  const value = useMaybeMultipleValue(multiple, originalValue)
  const controlProps = useControlField(name, value)

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
      className={clsx(fcProps.className, classes.sliderControl, {
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
    >
      <InputLabel disableAnimation shrink>
        {children}
        <MuiSwitch
          {...switchProps}
          checked={switchProps.checked === '' ? false : switchProps.checked}
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
const StyledLinearProgress = withStyles(() => ({
  root: {
    position: 'absolute',
    height: props => (props.hasfocus ? '2px' : '1px'),
    bottom: 0,
    zIndex: 15,
    width: props => (props.inputvariant === 'outlined' ? '96%' : '100%'),
    left: props => (props.inputvariant === 'outlined' ? '2%' : '0'),
  },
  colorPrimary: {
    backgroundColor: 'rgba(255, 255, 255, .75)',
  },
  bar: {
    backgroundColor: props => `hsl(${props.score ** 2 * 12}, 100%, 50%)`,
  },
}))(LinearProgress)

const PasswordLinearProgress = props => {
  const { focused } = useFormControl()
  return (
    <StyledLinearProgress hasfocus={focused ? 'y' : undefined} {...props} />
  )
}

export const Password = ({
  noUncover,
  score,
  error,
  suggestion,
  InputProps,
  ...props
}) => {
  const classes = useStyles()
  const [uncovered, setUncovered] = useState(false)
  const handleClick = useCallback(() => {
    setUncovered(currentUncovered => !currentUncovered)
  }, [])

  const InputPropsWithVisibility = useMemo(() => {
    if (noUncover) {
      return InputProps
    }
    return {
      ...InputProps,
      endAdornment: (
        <>
          <InputAdornment position="end">
            <IconButton onClick={handleClick} size="large">
              {uncovered ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
          {(score || score === 0) && (
            <PasswordLinearProgress
              score={score}
              inputvariant={props.variant || 'outlined'}
              variant="determinate"
              value={(100 * (score + 1)) / 5}
            />
          )}
        </>
      ),
    }
  }, [noUncover, InputProps, handleClick, uncovered, score, props.variant])

  return (
    <Input
      {...props}
      type={uncovered ? 'text' : 'password'}
      autoComplete="off"
      InputProps={InputPropsWithVisibility}
      error={
        (error || suggestion) && (
          <>
            {error}
            {suggestion && (
              <span className={classes.suggestion}>{suggestion}</span>
            )}
          </>
        )
      }
    />
  )
}

export const Picker = memo(function Picker({
  choices,
  multiple,
  children,
  ...props
}) {
  const { onChange, modified, error } = props
  const { ref, ...cornProps } = useCornField(props)
  const { name, value } = cornProps
  const classes = useStyles()

  const options = useOptions(choices)
  const multipleValue = useMaybeMultipleValue(multiple, value)
  const controlProps = useControlField(name, value)
  const handleChange = useCallback(
    e => {
      const { key } = e.target.dataset
      onChange(
        name,
        multiple
          ? e.target.checked
            ? [...multipleValue, key]
            : multipleValue.filter(v => v !== key)
          : key
      )
    },
    [onChange, name, multiple, multipleValue]
  )
  const [typeProps, fcProps] = useFilteredProps(cornProps, muiFormControlProps)
  const Type = multiple ? MuiCheckbox : MuiRadio

  return (
    <FormControl
      component="fieldset"
      error={!!error}
      className={clsx(fcProps.className, classes.field, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
      {...fcProps}
      onChange={undefined}
    >
      <FormLabel component="legend">{children}</FormLabel>
      {options.map(([label, key]) => (
        <FormControlLabel
          key={key}
          control={
            <Type
              checked={
                multiple ? multipleValue.includes(key) : key === multipleValue
              }
              onChange={handleChange}
              inputProps={{
                'data-key': key,
              }}
            />
          }
          data-key={key}
          label={label}
        />
      ))}
      {error && <FormHelperText>{error}</FormHelperText>}
      <input
        {...typeProps}
        ref={ref}
        className={classes.hidden}
        {...controlProps}
      />
    </FormControl>
  )
})

const getOptionLabel = option => option.title
const filter = createFilterOptions()
export const Autocomplete = memo(function Autocomplete({
  choices,
  meta,
  width = 200,
  free,
  addText = 'Add',
  children,
  ...props
}) {
  const { modified, error, multiple, onChange } = props
  const { ref, className, ...cornProps } = useCornField({
    ...props,
  })
  const { name, value: originalValue } = cornProps
  const classes = useStyles()

  const handleChange = useCallback(
    (_, option) =>
      onChange(
        name,
        option && (multiple ? option.map(o => o.value) : option.value)
      ),
    [name, multiple, onChange]
  )

  const handleFilterOptions = useCallback(
    (options, params) => {
      const filtered = filter(options, params)
      if (params.inputValue !== '') {
        filtered.push({
          value: params.inputValue,
          title: `${addText} "${params.inputValue}"`,
        })
      }

      return filtered
    },
    [addText]
  )

  const value = useMaybeMultipleValue(multiple, originalValue)
  const controlProps = useControlField(name, value)

  const options = useOptions(choices)
  const autocompleteOptions = useMemo(
    () =>
      options.map(([title, value]) => ({
        title,
        value,
        ...(meta && meta[title] ? { meta: meta[title] } : {}),
      })),
    [options, meta]
  )
  const optionValue = multiple
    ? free
      ? value.map(
          v =>
            autocompleteOptions.find(
              ({ value: optionValue }) => v === optionValue
            ) || {
              title: v,
              value: v,
            }
        )
      : autocompleteOptions.filter(({ value: v }) => value.includes(v))
    : autocompleteOptions.find(({ value: v }) => value === v) ||
      (free && value ? { title: value, value } : null)

  const [textFieldProps, autocompleteProps, inputProps] = useFilteredProps(
    cornProps,
    muiTextFieldProps,
    muiAutocompleteProps
  )

  return (
    <div className={classes.wrapper}>
      <MuiAutocomplete
        autoHighlight
        {...autocompleteProps}
        freeSolo={free}
        getOptionLabel={getOptionLabel}
        onChange={handleChange}
        value={optionValue}
        options={autocompleteOptions}
        filterOptions={
          autocompleteProps.filterOptions || (free && handleFilterOptions)
        }
        selectOnFocus={autocompleteProps.selectOnFocus || free}
        clearOnBlur={autocompleteProps.clearOnBlur || free}
        className={clsx(className, classes.field, {
          [classes.base]: !modified,
          [classes.modified]: modified,
        })}
        renderInput={params => (
          <TextField
            {...textFieldProps}
            value={undefined}
            onChange={undefined}
            {...params}
            style={width && { width }}
            label={textFieldProps.label || params.label || children}
            error={!!error}
            helperText={error || textFieldProps.helperText || params.helperText}
            inputProps={{
              ...textFieldProps.inputProps,
              ...params.inputProps,
              required: false,
            }}
          />
        )}
      />
      <input
        {...inputProps}
        ref={ref}
        className={classes.hidden}
        {...controlProps}
      />
    </div>
  )
})

const useInlineStyles = makeStyles(theme => ({
  inline: {
    margin: [theme.spacing(2), '!important'],

    '& > *': {
      display: ['inline-flex', '!important'],
    },
    '& .MuiFormControl-root': {
      margin: [theme.spacing(2), '!important'],
    },
  },
}))

export const Inline = ({ children }) => {
  const classes = useInlineStyles()
  return <div className={classes.inline}>{children}</div>
}
