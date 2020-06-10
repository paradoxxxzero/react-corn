import { makeStyles } from '@material-ui/core/styles'
import {
  DatePicker,
  KeyboardDatePicker,
  MuiPickersContext,
} from '@material-ui/pickers'
import { useCornField } from '@react-corn/core'
import clsx from 'clsx'
import React, { memo, useCallback, useContext, useEffect } from 'react'

import { useFilteredProps } from '../../material-ui/src/attributes'
import { muiDatePickerOnlyProps } from './attributes'

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

export const Date = memo(function Date({
  children,
  format = 'yyyy-MM-dd',
  displayFormat,
  masked,
  ...props
}) {
  const utils = useContext(MuiPickersContext)

  const { modified, error, onChange, onError } = props
  const { ref, className, ...cornProps } = useCornField({
    ...props,
  })
  const { name, value } = cornProps
  const classes = useStyles()
  const [datePickerProps, inputProps] = useFilteredProps(
    cornProps,
    muiDatePickerOnlyProps
  )
  const handleChange = useCallback(
    (v, s) =>
      onChange(
        name,
        v && (masked && !utils.isValid(v) ? s : utils.format(v, format))
      ),
    [onChange, name, masked, utils, format]
  )

  const dateValue = value ? utils.parse(value, format) : null

  useEffect(() => {
    if (masked) {
      if (dateValue && !utils.isValid(dateValue)) {
        onError(name, dateValue.toString())
      } else {
        onError(name, null)
      }
    }
  }, [name, onError, dateValue, masked, utils])

  const MaybeMaskedDatePicker = masked ? KeyboardDatePicker : DatePicker

  return (
    <MaybeMaskedDatePicker
      clearable={
        (datePickerProps.variant && datePickerProps.variant === 'dialog') ||
        undefined
      }
      {...datePickerProps}
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
    />
  )
})
