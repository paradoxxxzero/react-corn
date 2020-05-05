import React from 'react'
import styled, { css } from 'styled-components'

import * as core from './core'
import { withTheme } from './theme'

const Field = withTheme(styled.div`
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
    background-color: ${props => props.theme.backgroundColor};
  }
`)
const Error = styled.div``
const Label = withTheme(styled.label`
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

const Labelled = ({ label, children, ...props }) => {
  return (
    <Label {...props}>
      {label}
      <Field {...props}>{children}</Field>
      {props.error && <Error>{props.error}</Error>}
    </Label>
  )
}

const withLabel = Component => ({ children, modified, error, ...props }) => {
  return (
    <Labelled
      label={children}
      modified={modified}
      required={props.required}
      error={error}
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
export const Month = withLabel(core.Month)
export const Password = withLabel(core.Password)
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
