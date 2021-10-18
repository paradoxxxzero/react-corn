/* eslint-disable jsx-a11y/label-has-associated-control */
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import { useCorn } from '@react-corn/core'
import { ButtonRow } from '@react-corn/simple'
import React, { memo, useCallback } from 'react'
import styled from 'styled-components'

import { core, mui, simple } from '../helpers/fields'
import { Story } from '../helpers/Story'

export default {
  title: 'Sandbox/field-list',
  parameters: {
    options: { showPanel: true },
  },
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const CoreForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  label {
    input,
    select,
    textarea {
      margin: 0.5em;
    }
  }
`
const SimpleForm = styled.div``
const MaterialUIForm = styled.div`
  .MuiFormControl-root {
    display: block;
    margin: 1em;
  }
`

const choices = {
  Red: '#ff0000',
  Yellow: '#ffff00',
  Olive: '#808000',
  Lime: '#00ff00',
  Green: '#008000',
  Aqua: '#00ffff',
  Teal: '#008080',
  Blue: '#0000ff',
  Navy: '#000080',
  Fuchsia: '#ff00ff',
  Purple: '#800080',
}

const capitalize = s => s.replace(/\b\w/, match => match.toUpperCase())
const CornForm = memo(({ item, onItem, onTransient, onDelta, onErrors }) => {
  const handleChange = useCallback(
    (transient, delta, errors) => {
      onTransient(transient)
      onErrors(errors)
    },
    [onErrors, onTransient]
  )
  const handleSubmit = useCallback(
    (item, delta) => {
      onItem(item)
      onDelta(delta)
    },
    [onDelta, onItem]
  )

  const { form, field, modified, onReset } = useCorn({
    item,
    onChange: handleChange,
    onSubmit: handleSubmit,
  })

  return (
    <Form {...form}>
      <CoreForm>
        <h1>Core</h1>
        {Object.entries(core).map(([key, Field]) => (
          <label key={key}>
            Core {capitalize(key)}
            <Field
              choices={key === 'select' ? choices : undefined}
              {...field(`core.${key}`)}
            />
          </label>
        ))}
      </CoreForm>
      <SimpleForm>
        <h1>Simple</h1>
        {Object.entries(simple).map(([key, Field]) => (
          <Field
            key={key}
            choices={key === 'select' ? choices : undefined}
            {...field(`simple.${key}`)}
          >
            Simple {capitalize(key)}
          </Field>
        ))}
      </SimpleForm>
      <MaterialUIForm>
        <h1>MaterialUI</h1>
        {Object.entries(mui).map(([key, Field]) => (
          <Field
            key={key}
            choices={key === 'select' ? choices : undefined}
            {...field(`material-ui.${key}`)}
          >
            Material-UI {capitalize(key)}
          </Field>
        ))}
      </MaterialUIForm>

      <ButtonRow>
        <button disabled={!modified}>Submit</button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRow>
    </Form>
  )
})

export const CornStory = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Story Chapter={CornForm} />
    </LocalizationProvider>
  )
}
