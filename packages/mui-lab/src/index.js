import { DatePicker, DateTimePicker, TimePicker } from '@mui/lab'
import { MuiPickersAdapterContext } from '@mui/lab/LocalizationProvider'
import { TextField } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useCornField } from '@react-corn/core'
import { useFilteredProps } from '@react-corn/mui'
import clsx from 'clsx'
import React, { memo, useCallback, useContext, useEffect } from 'react'

import {
  muiDatePickerOnlyProps,
  muiDateTimePickerOnlyProps,
  muiTimePickerOnlyProps,
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
  field: {},
}))

export const generateMaskFromFormat = format => {
  // This is broken enough but can be useful for non localized simple formats
  let escape = false
  return format.replace(/./g, c => {
    if (c === "'") {
      escape = !escape
      return ''
    }
    return !escape && c.match(/[a-z]/i) ? '_' : c
  })
}

export const Picker = ({
  children,
  Component,
  ComponentProps,
  format,
  displayFormat,
  defaultFormat,
  defaultDisplayFormat,
  mask,
  ...props
}) => {
  displayFormat =
    displayFormat || format || defaultDisplayFormat || defaultFormat
  format = format || defaultFormat
  const inputFormat = displayFormat || format
  const maskForFormat = mask || generateMaskFromFormat(inputFormat)

  const utilsContext = useContext(MuiPickersAdapterContext)
  if (!utilsContext) {
    throw new Error(
      'To use material-ui pickers you have to use a LocalizationProvider ' +
        'more info: https://next.material-ui.com/components/pickers/'
    )
  }
  const { utils } = utilsContext

  const { modified, error, onChange, onError } = props
  const { ref, className, ...cornProps } = useCornField({
    ...props,
  })
  const { name, value } = cornProps
  const classes = useStyles()
  const [componentProps, inputProps] = useFilteredProps(
    cornProps,
    ComponentProps
  )
  const handleChange = useCallback(
    (v, s) =>
      onChange(
        name,
        v && (!utils.isValid(v) ? s : utils.formatByString(v, format))
      ),
    [onChange, name, utils, format]
  )
  const handleError = useCallback(
    error => onError(name, error),
    [name, onError]
  )

  const dateValue = value ? utils.parse(value, format) : null

  useEffect(() => {
    if (dateValue && !utils.isValid(dateValue)) {
      onError(name, dateValue.toString())
    } else {
      onError(name, null)
    }
    // Compare on string value instead of date object:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, onError, value, utils])

  return (
    <Component
      clearable={
        (componentProps.variant && componentProps.variant === 'dialog') ||
        undefined
      }
      {...componentProps}
      inputFormat={inputFormat}
      mask={maskForFormat}
      onChange={handleChange}
      value={dateValue}
      className={clsx(className, classes.field, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
      label={children}
      helperText={error || cornProps.helperText}
      error={!!error}
      onError={handleError}
      renderInput={props => (
        <TextField
          ref={ref}
          readOnly={false}
          autoComplete="off"
          {...inputProps}
          {...props}
        />
      )}
    />
  )
}

export const Date = memo(function Date(props) {
  return (
    <Picker
      Component={DatePicker}
      ComponentProps={muiDatePickerOnlyProps}
      defaultFormat="yyyy-MM-dd"
      {...props}
    />
  )
})

export const Time = memo(function Time({ withSeconds, ...props }) {
  return (
    <Picker
      Component={TimePicker}
      ComponentProps={muiTimePickerOnlyProps}
      defaultFormat={`HH:mm${withSeconds ? ':ss' : ''}`}
      views={['hours', 'minutes', ...(withSeconds ? ['seconds'] : [])]}
      ampm={false}
      {...props}
    />
  )
})

export const DateTime = memo(function DateTime({ withSeconds, ...props }) {
  return (
    <Picker
      Component={DateTimePicker}
      ComponentProps={muiDateTimePickerOnlyProps}
      defaultFormat="yyyy-MM-dd'T'HH:mm:ss'Z'"
      defaultDisplayFormat={`yyyy-MM-dd HH:mm${withSeconds ? ':ss' : ''}`}
      views={[
        'year',
        'month',
        'day',
        'hours',
        'minutes',
        ...(withSeconds ? ['seconds'] : []),
      ]}
      ampm={false}
      {...props}
    />
  )
})
