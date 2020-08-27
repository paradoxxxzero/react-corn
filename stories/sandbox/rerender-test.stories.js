/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { Quill } from '@react-corn/quill'
import { ButtonRow, Number, Select, Text } from '@react-corn/simple'
import React, { memo, useRef, useState } from 'react'

const initialItem = {
  text: 'text',
  int: 84,
  html: '<p>H<strong>T</strong><u>M</u><em>L</em></p>',
  select: Infinity,
}

// const choices = {
//   infinity: Infinity,
//   nan: NaN,
//   'negative infinity': -Infinity,
// }

const choices = {
  one: 'I',
  two: 'II',
  three: 'III',
  four: 'IV',
  five: 'V',
}

const withRenderCount = Field =>
  // eslint-disable-next-line react/display-name
  memo(({ children, ...props }) => {
    const rc = useRef(0)
    const lastProps = useRef(props)
    const changedProps = Object.keys(lastProps.current)
      .concat(Object.keys(props))
      .filter((k, i, array) => array.indexOf(k) === i)
      .filter(k => lastProps.current[k] !== props[k])
    // console.log(
    //   ...changedProps.map(k => [props.name, k, lastProps.current[k], props[k]])
    // )
    lastProps.current = props
    rc.current++
    return (
      <Field {...props}>
        {children}
        [render count: {rc.current} ({changedProps.join(', ')})]
      </Field>
    )
  })

const TextRenderCount = withRenderCount(Text)
const NumberRenderCount = withRenderCount(Number)
const QuillRenderCount = withRenderCount(Quill)
const SelectRenderCount = withRenderCount(Select)
const ButtonRowRenderCount = withRenderCount(ButtonRow)
const inlineBlock = { display: 'inline-block' }
export const ReRenderTest = () => {
  const [item, setItem] = useState(initialItem)
  const { form, field, modified, onReset } = useCorn({
    item,
    onSubmit: newItem => {
      const accepted = window.confirm(
        `You submitted "${Object.values(newItem).join(', ')}"`
      )
      accepted && setItem(newItem)
    },
  })

  return (
    <form {...form}>
      <TextRenderCount required {...field(`text`)}>
        Text
      </TextRenderCount>
      <NumberRenderCount required {...field(`int`)}>
        Number
      </NumberRenderCount>
      <QuillRenderCount style={inlineBlock} required {...field(`html`)}>
        HTML
      </QuillRenderCount>
      <SelectRenderCount required choices={choices} {...field(`select`)}>
        Select
      </SelectRenderCount>

      <div style={{ width: '100%' }} />
      <ButtonRowRenderCount>
        <button disabled={!modified}>Submit</button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRowRenderCount>
    </form>
  )
}

export default {
  title: 'Sandbox/rerender-test',
  parameters: {
    options: { showPanel: false },
  },
}
