import {
  Box,
  FilledInput,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  FormControlRoot,
  muiFormControlProps,
  useFilteredProps,
} from '@react-corn/mui'
import { BaseQuill } from '@react-corn/quill'
import clsx from 'clsx'
import React, { memo, useCallback, useState } from 'react'

const variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
}

export const Quill = memo(function Quill({
  children,
  variant,
  className,
  ...props
}) {
  variant = variant || 'outlined'
  const { modified, error } = props
  const theme = useTheme()

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
  const [notch, setNotch] = useState('')
  return (
    <FormControlRoot
      modified={modified}
      {...fcProps}
      variant={variant}
      focused={focused}
      className={className}
      error={!!error}
    >
      <InputLabel disableAnimation shrink variant={variant}>
        {children}
      </InputLabel>

      <InputComponent
        style={{ display: 'none' }}
        label={children}
        type="hidden"
        notched={variant === 'outlined' ? true : undefined}
        ref={e => {
          // This may be a gore hack, hmm yeah it is
          if (!e) {
            return
          }
          setTextFieldClasses([...e.classList].join(' '))
          if (variant === 'outlined') {
            setNotch(
              e.querySelector('.MuiOutlinedInput-notchedOutline').outerHTML
            )
          }
        }}
      />
      <Box
        className={clsx(
          {
            'Mui-focused': focused,
          },
          textFieldClasses,
          className
        )}
        sx={{
          // Can't use margin here since it collapses
          padding:
            ['filled', 'outlin ed'].includes(variant) && theme.spacing(1),
          paddingTop:
            variant === 'filled' ? theme.spacing(4) : theme.spacing(2),
          color: modified ? 'text.primary' : 'text.secondary',
          '& .ql-container': {
            border: 'none',
          },
          width: 1,
          '& .quill': {
            width: 1,
          },
        }}
      >
        <BaseQuill {...quillProps} onFocus={handleFocus} onBlur={handleBlur} />
        {notch && <div dangerouslySetInnerHTML={{ __html: notch }} />}
      </Box>
      {error && <FormHelperText variant={variant}>{error}</FormHelperText>}
    </FormControlRoot>
  )
})
