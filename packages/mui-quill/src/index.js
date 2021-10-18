import {
  FilledInput,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import filledClasses from '@mui/material/FilledInput/filledInputClasses'
import inputClasses from '@mui/material/Input/inputClasses'
import NotchedOutline from '@mui/material/OutlinedInput/NotchedOutline'
import outlinedClasses from '@mui/material/OutlinedInput/outlinedInputClasses'
import makeStyles from '@mui/styles/makeStyles'
import { muiFormControlProps, useFilteredProps } from '@react-corn/mui'
import { BaseQuill } from '@react-corn/quill'
import clsx from 'clsx'
import React, { memo, useCallback, useState } from 'react'

const variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
}

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
    width: '100%',
    '& .quill': {
      width: '100%',
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
  // This is now broken:
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
  const InputComponent = variantComponent[variant]
  const [textFieldClasses, setTextFieldClasses] = useState('')
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

      <InputComponent
        style={{ display: 'none' }}
        type="hidden"
        ref={e => {
          e && setTextFieldClasses([...e.classList].join(' '))
        }}
      />
      <div
        className={clsx(
          classes.quill,
          {
            [baseClasses.focused]: focused,
          },
          textFieldClasses,
          className
        )}
      >
        <BaseQuill {...quillProps} onFocus={handleFocus} onBlur={handleBlur} />
        {variant === 'outlined' && (
          <NotchedOutline
            className={baseClasses.notchedOutline}
            label={children}
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
