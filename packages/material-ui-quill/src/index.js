import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
} from '@material-ui/core'
import filledClasses from '@material-ui/core/FilledInput/filledInputClasses'
import inputClasses from '@material-ui/core/Input/inputClasses'
import NotchedOutline from '@material-ui/core/OutlinedInput/NotchedOutline'
import outlinedClasses from '@material-ui/core/OutlinedInput/outlinedInputClasses'
import { muiFormControlProps, useFilteredProps } from '@react-corn/material-ui'
import { BaseQuill } from '@react-corn/quill'
import clsx from 'clsx'
import React, { memo, useCallback, useState } from 'react'

const useStyles = makeStyles(theme => ({
  label: {},
  quill: {
    // Can't use margin here since it collapses
    padding: ({ variant }) =>
      ['filled', 'outlined'].includes(variant) && theme.spacing(1),
    paddingTop: ({ variant }) =>
      variant === 'filled' ? theme.spacing(4) : theme.spacing(2),
    color: ({ modified }) =>
      modified ? theme.palette.text.primary : theme.palette.text.secondary,
    '& .ql-container': {
      border: 'none',
    },
  },
  control: {
    display: 'block',
    margin: theme.spacing(4),
  },
  fakeInput: {
    border: 'none !important',
  },
}))

export const Quill = memo(function Quill({
  children,
  variant,
  className,
  ...props
}) {
  const { modified, error } = props
  const classes = useStyles({ modified, variant })

  const baseClasses =
    { filled: filledClasses, outlined: outlinedClasses }[variant] ||
    inputClasses

  const [focused, setFocused] = useState(false)

  const [fcProps, quillProps] = useFilteredProps(props, muiFormControlProps)

  const handleBlur = useCallback(
    (...args) => {
      quillProps.onBlur?.(...args)
      setFocused(false)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [quillProps.onBlur]
  )
  const handleFocus = useCallback(
    (...args) => {
      quillProps.onFocus?.(...args)
      setFocused(true)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [quillProps.onFocus]
  )

  return (
    <FormControl
      {...fcProps}
      variant={variant}
      focused={focused}
      className={clsx(className, classes.control)}
      error={!!error}
    >
      <InputLabel disableAnimation shrink variant={variant}>
        {children}
      </InputLabel>
      <div
        className={clsx(
          classes.quill,
          baseClasses.root,
          baseClasses.input,
          baseClasses.underline,
          {
            [baseClasses.focused]: focused,
          },
          className
        )}
      >
        <BaseQuill {...quillProps} onFocus={handleFocus} onBlur={handleBlur} />
        {variant === 'outlined' && (
          <NotchedOutline
            className={baseClasses.notchedOutline}
            label={children}
            labelWidth={0}
            notched
          />
        )}
      </div>
      {error && (
        <FormHelperText className={classes.label} variant={variant}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  )
})
