import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab'
import {
  useControlField,
  useCornField,
  useMaybeMultipleValue,
  useOptions,
} from '@react-corn/core'
import { muiTextFieldProps, useFilteredProps } from '@react-corn/material-ui'
import clsx from 'clsx'
import React, { useCallback, useMemo } from 'react'

import { muiAutocompleteProps } from './attributes'

export * from './attributes'

const getOptionLabel = option => option.title

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
  wrapper: {
    position: 'relative',
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
}))

export const Autocomplete = ({
  choices,
  meta,
  width = 200,
  children,
  ...props
}) => {
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

  const value = useMaybeMultipleValue(multiple, originalValue)
  const controlProps = useControlField(name, value)

  const options = useOptions(choices)
  const autocompleteOptions = useMemo(
    () =>
      options.map(([title, value]) => ({
        title,
        value,
        ...(meta && meta[value] ? { meta: meta[value] } : {}),
      })),
    [options, meta]
  )
  const optionValue = multiple
    ? autocompleteOptions.filter(({ value: v }) => value.includes(v)) || []
    : autocompleteOptions.find(({ value: v }) => value === v) || null

  const [textFieldProps, autocompleteProps, inputProps] = useFilteredProps(
    cornProps,
    muiTextFieldProps,
    muiAutocompleteProps
  )

  return (
    <div className={classes.wrapper} style={width && { width }}>
      <MuiAutocomplete
        autoHighlight
        {...autocompleteProps}
        getOptionLabel={getOptionLabel}
        onChange={handleChange}
        value={optionValue}
        options={autocompleteOptions}
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
}
