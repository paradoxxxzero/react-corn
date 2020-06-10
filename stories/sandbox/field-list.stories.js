/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import * as core from '@react-corn/core'
import * as materialUI from '@react-corn/material-ui'
import * as materialUIPickers from '@react-corn/material-ui-pickers'
import * as simple from '@react-corn/simple'
import React, { memo, useCallback } from 'react'
import styled from 'styled-components'

import { ButtonRow } from '../../packages/simple/src'
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
const MaterialUIPickerForm = styled.div``

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
        <label>
          Core Checkbox
          <core.Checkbox {...field('core.checkbox')} />
        </label>
        <label>
          Core Color
          <core.Color {...field('core.color')} />
        </label>
        <label>
          Core Date
          <core.Date {...field('core.date')} />
        </label>
        <label>
          Core DatetimeLocal
          <core.DatetimeLocal {...field('core.datetimelocal')} />
        </label>
        <label>
          Core Email
          <core.Email {...field('core.email')} />
        </label>
        <label>
          Core File
          <core.File {...field('core.file')} />
        </label>
        <label>
          Core Hidden
          <core.Hidden {...field('core.hidden')} />
        </label>
        <label>
          Core Month
          <core.Month {...field('core.month')} />
        </label>
        <label>
          Core Password
          <core.Password {...field('core.password')} />
        </label>
        <label>
          Core Radio
          <core.Radio {...field('core.radio')} />
        </label>
        <label>
          Core Range
          <core.Range {...field('core.range')} />
        </label>
        <label>
          Core Search
          <core.Search {...field('core.search')} />
        </label>
        <label>
          Core Tel
          <core.Tel {...field('core.tel')} />
        </label>
        <label>
          Core Text
          <core.Text {...field('core.text')} />
        </label>
        <label>
          Core Time
          <core.Time {...field('core.time')} />
        </label>
        <label>
          Core Url
          <core.Url {...field('core.url')} />
        </label>
        <label>
          Core Week
          <core.Week {...field('core.week')} />
        </label>
        <label>
          Core Number
          <core.Number {...field('core.number')} />
        </label>
        <label>
          Core TextArea
          <core.TextArea {...field('core.textarea')} />
        </label>
        <label>
          Core Select
          <core.Select choices={choices} {...field('core.select')} />
        </label>
      </CoreForm>
      <SimpleForm>
        <h1>Simple</h1>
        <simple.Checkbox {...field('simple.checkbox')}>
          Simple Checkbox
        </simple.Checkbox>
        <simple.Color {...field('simple.color')}>Simple Color</simple.Color>
        <simple.Date {...field('simple.date')}>Simple Date</simple.Date>
        <simple.DatetimeLocal {...field('simple.datetimelocal')}>
          Simple DatetimeLocal
        </simple.DatetimeLocal>
        <simple.Email {...field('simple.email')}>Simple Email</simple.Email>
        <simple.File {...field('simple.file')}>Simple File</simple.File>
        <simple.Hidden {...field('simple.hidden')}>Simple Hidden</simple.Hidden>
        <simple.Month {...field('simple.month')}>Simple Month</simple.Month>
        <simple.Password {...field('simple.password')}>
          Simple Password
        </simple.Password>
        <simple.Radio {...field('simple.radio')}>Simple Radio</simple.Radio>
        <simple.Range {...field('simple.range')}>Simple Range</simple.Range>
        <simple.Search {...field('simple.search')}>Simple Search</simple.Search>
        <simple.Tel {...field('simple.tel')}>Simple Tel</simple.Tel>
        <simple.Text {...field('simple.text')}>Simple Text</simple.Text>
        <simple.Time {...field('simple.time')}>Simple Time</simple.Time>
        <simple.Url {...field('simple.url')}>Simple Url</simple.Url>
        <simple.Week {...field('simple.week')}>Simple Week</simple.Week>
        <simple.Number {...field('simple.number')}>Simple Number</simple.Number>
        <simple.TextArea {...field('simple.textarea')}>
          Simple TextArea
        </simple.TextArea>
        <simple.Select choices={choices} {...field('simple.select')}>
          Simple Select
        </simple.Select>
      </SimpleForm>
      <MaterialUIForm>
        <h1>MaterialUI</h1>
        <materialUI.Checkbox {...field('material-ui.checkbox')}>
          Material-UI Checkbox
        </materialUI.Checkbox>
        <materialUI.Color {...field('material-ui.color')}>
          Material-UI Color
        </materialUI.Color>
        <materialUI.Date {...field('material-ui.date')}>
          Material-UI Date
        </materialUI.Date>
        <materialUI.DatetimeLocal {...field('material-ui.datetimelocal')}>
          Material-UI DatetimeLocal
        </materialUI.DatetimeLocal>
        <materialUI.Email {...field('material-ui.email')}>
          Material-UI Email
        </materialUI.Email>
        <materialUI.File {...field('material-ui.file')}>
          Material-UI File
        </materialUI.File>
        <materialUI.Hidden {...field('material-ui.hidden')}>
          Material-UI Hidden
        </materialUI.Hidden>
        <materialUI.Month {...field('material-ui.month')}>
          Material-UI Month
        </materialUI.Month>
        <materialUI.Password {...field('material-ui.password')}>
          Material-UI Password
        </materialUI.Password>
        <materialUI.Radio {...field('material-ui.radio')}>
          Material-UI Radio
        </materialUI.Radio>
        <materialUI.Range {...field('material-ui.range')}>
          Material-UI Range
        </materialUI.Range>
        <materialUI.Search {...field('material-ui.search')}>
          Material-UI Search
        </materialUI.Search>
        <materialUI.Tel {...field('material-ui.tel')}>
          Material-UI Tel
        </materialUI.Tel>
        <materialUI.Text {...field('material-ui.text')}>
          Material-UI Text
        </materialUI.Text>
        <materialUI.Time {...field('material-ui.time')}>
          Material-UI Time
        </materialUI.Time>
        <materialUI.Url {...field('material-ui.url')}>
          Material-UI Url
        </materialUI.Url>
        <materialUI.Week {...field('material-ui.week')}>
          Material-UI Week
        </materialUI.Week>
        <materialUI.Number {...field('material-ui.number')}>
          Material-UI Number
        </materialUI.Number>
        <materialUI.TextArea {...field('material-ui.textarea')}>
          Material-UI TextArea
        </materialUI.TextArea>
        <materialUI.Select choices={choices} {...field('material-ui.select')}>
          Material-UI Select
        </materialUI.Select>
        <materialUI.Slider {...field('material-ui.slider')}>
          Material-UI Slider
        </materialUI.Slider>
        <materialUI.Switch {...field('material-ui.switch')}>
          Material-UI Switch
        </materialUI.Switch>
      </MaterialUIForm>
      <MaterialUIPickerForm>
        <materialUIPickers.Date {...field('material-ui-pickers.date')}>
          Material-UI Pickers Date
        </materialUIPickers.Date>
      </MaterialUIPickerForm>

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
  return <Story Chapter={CornForm} />
}
