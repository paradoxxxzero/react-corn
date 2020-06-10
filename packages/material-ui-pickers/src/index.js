import { makeStyles } from '@material-ui/core/styles'
import { DatePicker } from '@material-ui/pickers'
import { useCornField } from '@react-corn/core'
import clsx from 'clsx'
import React, { memo, useCallback } from 'react'

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
  ...props
}) {
  const { modified, error, onChange } = props
  const { ref, className, ...cornProps } = useCornField({
    ...props,
  })
  const { name } = cornProps
  const classes = useStyles()
  const [datePickerProps, inputProps] = useFilteredProps(
    cornProps,
    muiDatePickerOnlyProps
  )
  const handleChange = useCallback(
    v => onChange(name, v && v.toISOString().split('T')[0]),
    [name, onChange]
  )
  console.log(datePickerProps, inputProps)
  cornProps.value = cornProps.value || null
  return (
    <DatePicker
      clearable
      {...datePickerProps}
      format={format}
      onChange={handleChange}
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
