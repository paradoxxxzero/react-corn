import { useCornField } from '@react-corn/core'
import React, { memo, useCallback } from 'react'
import ReactQuill from 'react-quill'
import styled, { css } from 'styled-components'

const theme = {
  color: {
    base: 'hsl(0, 0%, 50%)',
    modified: 'hsl(0, 0%, 25%)',
    error: 'hsl(0, 100%, 50%)',
  },
  backgroundColor: {
    base: 'transparent',
  },
}

export const withTheme = Component => {
  Component.defaultProps = { theme }
  return Component
}

const Field = withTheme(styled.div`
  display: block;
  margin: 1.5em;
  position: relative;
  transition: color 0.2s;
  color: ${props =>
    props.error
      ? props.theme.color.error
      : props.modified
      ? props.theme.color.modified
      : props.theme.color.base};

  .quill {
    margin: 0.5em 0;
  }
`)

export const Hidden = styled.input`
  top: 50%;
  height: 0;
  left: 0;
  margin: auto !important;
  opacity: 0;
  position: absolute;
  right: 0;
  width: 0;
  z-index: -1;
`
export const Error = styled.div``
export const Label = withTheme(styled.label`
  ${props =>
    props.required &&
    css`
      &::before {
        content: '* ';
      }
    `}
`)

export const BaseQuill = ({
  disabled,
  readOnly,
  placeholder,
  modules,
  formats,
  theme = 'snow',
  tabIndex,
  bounds,
  onChange,
  onChangeSelection,
  onFocus,
  onBlur,
  onKeyPress,
  onKeyDown,
  onKeyUp,
  preserveWhitespace,
  children,
  ...props
}) => {
  const { ref, className, ...cornProps } = useCornField({
    disabled,
    readOnly,
    placeholder,
    tabIndex,
    onChange,
    onFocus,
    onBlur,
    ...props,
  })
  const { name, value } = cornProps

  const handleChange = useCallback(
    content => {
      onChange(name, content)
    },
    [name, onChange]
  )
  const handleBlur = useCallback(() => {
    onBlur(name, value === '<p><br></p>' ? '' : value ? value.trim() : '')
  }, [name, value, onBlur])

  return (
    <>
      <ReactQuill
        className={className}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={handleBlur}
        readOnly={readOnly || disabled}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        theme={theme}
        tabIndex={tabIndex}
        bounds={bounds}
        onChangeSelection={onChangeSelection}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        preserveWhitespace={preserveWhitespace}
      >
        {children}
      </ReactQuill>
      <Hidden
        {...cornProps}
        ref={ref}
        name={`${name}-corn-control`}
        onChange={() => {}}
        value={value}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
      />
    </>
  )
}

export const Quill = memo(function Quill({ children, className, ...props }) {
  const { required, modified, error } = props

  return (
    <Field modified={modified} error={error} className={className}>
      <Label required={required}>{children}</Label>
      <BaseQuill {...props} />
      {error && <Error>{error}</Error>}
    </Field>
  )
})
