import { makeStyles } from '@material-ui/core/styles'
import {
  DatePicker,
  DateTimePicker,
  KeyboardDatePicker,
  KeyboardDateTimePicker,
  KeyboardTimePicker,
  MuiPickersContext,
  TimePicker,
} from '@material-ui/pickers'
import { useCornField } from '@react-corn/core'
import { useFilteredProps } from '@react-corn/material-ui'
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

export const Picker = ({
  children,
  NormalComponent,
  KeyboardComponent,
  ComponentProps,
  format,
  displayFormat,
  defaultFormat,
  defaultDisplayFormat,
  masked,
  ...props
}) => {
  displayFormat =
    displayFormat || format || defaultDisplayFormat || defaultFormat
  format = format || defaultFormat

  const utils = useContext(MuiPickersContext)
  if (!utils) {
    throw new Error(
      'To use material-ui pickers you have to use @date-io and its context ' +
        'more info: https://material-ui-pickers.dev/getting-started/installation'
    )
  }

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
        v && (masked && !utils.isValid(v) ? s : utils.format(v, format))
      ),
    [onChange, name, masked, utils, format]
  )
  const handleError = useCallback(error => onError(name, error), [
    name,
    onError,
  ])

  const dateValue = value ? utils.parse(value, format) : null

  useEffect(() => {
    if (masked) {
      if (dateValue && !utils.isValid(dateValue)) {
        onError(name, dateValue.toString())
      } else {
        onError(name, null)
      }
    }
    // Compare on string value instead of date object:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, onError, value, masked, utils])

  const MaybeMaskedDatePicker = masked ? KeyboardComponent : NormalComponent

  return (
    <MaybeMaskedDatePicker
      clearable={
        (componentProps.variant && componentProps.variant === 'dialog') ||
        undefined
      }
      {...componentProps}
      format={displayFormat || format}
      onChange={handleChange}
      value={dateValue}
      inputProps={{ ref, readOnly: false, autoComplete: 'off', ...inputProps }}
      className={clsx(className, classes.field, {
        [classes.base]: !modified,
        [classes.modified]: modified,
      })}
      label={children}
      helperText={error || cornProps.helperText}
      error={!!error}
      onError={handleError}
    />
  )
}

export const Date = memo(function Date(props) {
  return (
    <Picker
      NormalComponent={DatePicker}
      KeyboardComponent={KeyboardDatePicker}
      ComponentProps={muiDatePickerOnlyProps}
      defaultFormat="yyyy-MM-dd"
      {...props}
    />
  )
})

export const Time = memo(function Time({ withSeconds, ...props }) {
  return (
    <Picker
      NormalComponent={TimePicker}
      KeyboardComponent={KeyboardTimePicker}
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
      NormalComponent={DateTimePicker}
      KeyboardComponent={KeyboardDateTimePicker}
      ComponentProps={muiDateTimePickerOnlyProps}
      defaultFormat="yyyy-MM-dd'T'HH:mm:ss'Z'"
      defaultDisplayFormat={`yyyy-MM-dd HH:mm${withSeconds ? ':ss' : ''}`}
      views={[
        'year',
        'month',
        'date',
        'hours',
        'minutes',
        ...(withSeconds ? ['seconds'] : []),
      ]}
      ampm={false}
      {...props}
    />
  )
})
