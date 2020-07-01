import * as core from '@react-corn/core'
import React, { useCallback, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import theme, { withTheme } from './theme'

export { theme, withTheme }
export const Field = withTheme(styled.div`
  border-color: ${props =>
    props.error
      ? props.theme.color.error
      : props.modified
      ? props.theme.color.modified
      : props.theme.color.base};
  transition: border-color 0.2s;

  input,
  textarea,
  select {
    padding: 0.75em;
    font: inherit;
    border: solid 1px;
    border-color: inherit;
    color: inherit;
    margin: 0.5em 0;
    background-color: ${props => props.theme.backgroundColor.base};
    border-radius: 0.15em;
    max-width: 100%;

    &[type='range'] {
      padding: 0;
    }

    &[readonly],
    &[disabled] {
      opacity: 0.5;
    }
  }
`)

export const Error = styled.div``

export const ButtonRow = styled.div`
  button {
    margin: 1em;
    padding: 0.25em 0.75em;
    font: inherit;
    cursor: pointer;
    &[disabled] {
      cursor: not-allowed;
    }

    &[type='button'] {
      background: none;
      border: none;
    }
  }
`

export const Label = withTheme(styled.label`
  display: block;
  margin: 1.5em;
  transition: color 0.2s;
  color: ${props =>
    props.error
      ? props.theme.color.error
      : props.modified
      ? props.theme.color.modified
      : props.theme.color.base};

  ${props =>
    props.required &&
    css`
      &::before {
        content: '* ';
      }
    `}
`)

export const Inline = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.75em;

  ${Label} {
    margin: 0.75em;
  }
`
export const Labelled = ({ label, className, children, ...props }) => {
  return (
    <Label className={className} {...props}>
      {label}
      <Field {...props}>{children}</Field>
      {props.error && <Error>{props.error}</Error>}
    </Label>
  )
}

export const withLabel = Component => ({ children, ...props }) => {
  return (
    <Labelled
      label={children}
      modified={props.modified}
      required={props.required}
      error={props.error}
    >
      <Component {...props} />
    </Labelled>
  )
}

export const Checkbox = withLabel(core.Checkbox)
export const Color = withLabel(core.Color)
export const Date = withLabel(core.Date)
export const DatetimeLocal = withLabel(core.DatetimeLocal)
export const Email = withLabel(core.Email)
export const File = withLabel(core.File)
export const Hidden = withLabel(core.Hidden)
export const Input = withLabel(core.Input)
export const Number = withLabel(core.Number)
export const Money = withLabel(core.Money)
export const Month = withLabel(core.Month)
export const Radio = withLabel(core.Radio)
export const Range = withLabel(core.Range)
export const Search = withLabel(core.Search)
export const Select = withLabel(core.Select)
export const Tel = withLabel(core.Tel)
export const Text = withLabel(core.Text)
export const TextArea = withLabel(core.TextArea)
export const Time = withLabel(core.Time)
export const Url = withLabel(core.Url)
export const Week = withLabel(core.Week)

const PasswordToggler = styled.button`
  position: absolute;
  top: 50%;
  right: 0.25em;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  opacity: 0.75;
  padding: 0;
  transition: opacity 0.2s;
  transform: translateY(-50%);
  z-index: 2;
  font-size: 3em;
  display: flex;
`
const Relativist = styled.div`
  position: relative;
`
const SvgIcon = styled.svg`
  width: 0.5em;
`
const SvgCircle = styled('circle')`
  fill: ${props => (props.uncovered ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 1)')};
  stroke: black;
  transition: fill 250ms;
`

export const Password = ({ noUncover, children, ...props }) => {
  const toggler = useRef()
  const [uncovered, setUncovered] = useState(false)

  const inputProps = core.useCornField({
    type: uncovered ? 'text' : 'password',
    ...props,
  })

  const { ref, onBlur } = inputProps

  const handleClick = useCallback(() => {
    setUncovered(currentUncovered => !currentUncovered)
  }, [])

  const handleBlur = useCallback(
    e => {
      onBlur(e)
      if (
        e.relatedTarget !== toggler.current &&
        e.relatedTarget !== ref.current
      ) {
        setUncovered(false)
      }
    },
    [ref, onBlur]
  )

  return (
    <Labelled
      label={children}
      modified={props.modified}
      required={props.required}
      error={props.error}
    >
      {noUncover ? (
        <input {...inputProps} />
      ) : (
        <Relativist>
          <input {...inputProps} onBlur={handleBlur} />
          <PasswordToggler
            type="button"
            onClick={handleClick}
            ref={toggler}
            onBlur={handleBlur}
          >
            <SvgIcon
              version="1.1"
              baseProfile="full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
            >
              <SvgCircle r="4" cx="5" cy="5" uncovered={uncovered} />
            </SvgIcon>
          </PasswordToggler>
        </Relativist>
      )}
    </Labelled>
  )
}
