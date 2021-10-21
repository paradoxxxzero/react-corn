/* eslint-disable jsx-a11y/label-has-associated-control */
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { useCorn } from '@react-corn/core'
import { Inline as MuiInline } from '@react-corn/mui'
import { ButtonRow } from '@react-corn/simple'
import React from 'react'
import styled from 'styled-components'
import { mui } from '../helpers/fields'

export default {
  title: 'Sandbox/inline',
  parameters: {
    options: { showPanel: true },
  },
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
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

const product = (...a) =>
  a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())))

const item = {}
const CornForm = () => {
  const { form, field, modified, onReset } = useCorn({ item })

  return (
    <Form {...form}>
      {/* <SimpleForm>
        <h1>Simple</h1>
        {product(Object.entries(simple), Object.entries(simple))
          .filter(([k1, , k2]) => k1 !== k2)
          .map(([key1, Field1, key2, Field2]) => (
            <Inline key={`${key1}--${key2}`}>
              <Field1
                key={`simple.${key1}-of-${key1}--${key2}`}
                choices={key1 === 'select' ? choices : undefined}
                {...field(`simple.${key1}-of-${key1}--${key2}`)}
              >
                {key1}
              </Field1>
              <Field2
                key={`simple.${key2}-of-${key1}--${key2}`}
                choices={key2 === 'select' ? choices : undefined}
                {...field(`simple.${key2}-of-${key1}--${key2}`)}
              >
                {key2}
              </Field2>
            </Inline>
          ))}
      </SimpleForm> */}
      <MaterialUIForm>
        <h1>MaterialUI</h1>
        {product(Object.entries(mui), Object.entries(mui))
          .filter(([k1, , k2]) => k1 !== k2)
          .map(([key1, Field1, key2, Field2]) => (
            <MuiInline key={`${key1}--${key2}`}>
              <Field1
                key={`mui.${key1}-of-${key1}--${key2}`}
                choices={key1 === 'select' ? choices : undefined}
                {...field(`mui.${key1}-of-${key1}--${key2}`)}
              >
                {key1}
              </Field1>
              <Field2
                key={`mui.${key2}-of-${key1}--${key2}`}
                choices={key2 === 'select' ? choices : undefined}
                {...field(`mui.${key2}-of-${key1}--${key2}`)}
              >
                {key2}
              </Field2>
            </MuiInline>
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
}

export const CornStory = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CornForm />
    </LocalizationProvider>
  )
}
