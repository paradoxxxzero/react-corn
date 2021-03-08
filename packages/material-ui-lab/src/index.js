import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  Autocomplete as MuiAutocomplete,
  createFilterOptions,
} from '@material-ui/lab'
import {
  useControlField,
  useCornField,
  useMaybeMultipleValue,
  useOptions,
} from '@react-corn/core'
import { muiTextFieldProps, useFilteredProps } from '@react-corn/material-ui'
import clsx from 'clsx'
import React, { memo, useCallback, useMemo } from 'react'

import { muiAutocompleteProps } from './attributes'

export * from './attributes'

const getOptionLabel = option =>
  typeof option === 'string' ? option : option.title

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
        option &&
          (multiple
            ? option.map(o => o.value)
            : (free && option.inputValue) || option.value)
      ),
    [name, multiple, free, onChange]
  )

  const handleFilterOptions = useCallback(
    (options, params) => {
      const filtered = filter(options, params)
      if (params.inputValue !== '') {
        filtered.push({
          inputValue: params.inputValue,
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
    ? autocompleteOptions.filter(({ value: v }) => value.includes(v)) || []
    : autocompleteOptions.find(({ value: v }) => value === v) ||
      (free ? value : null)

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
        filterOptions={handleFilterOptions}
        selectOnFocus={free || autocompleteProps.selectOnFocus}
        clearOnBlur={free || autocompleteProps.clearOnBlur}
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
