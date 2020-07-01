/* eslint-disable jsx-a11y/label-has-associated-control */
import 'react-quill/dist/quill.snow.css'

import { useCorn } from '@react-corn/core'
import { Quill } from '@react-corn/quill'
import { ButtonRow, TextArea } from '@react-corn/simple'
import React, { memo, useCallback } from 'react'
import styled from 'styled-components'

import { Divider, Story } from './helpers/Story'

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
}

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
]

const Preview = styled.div`
  max-width: 30%;
  margin: 1em;
`

const maxSize = html =>
  html.length > 250
    ? 'This field must be shorter than 250 characters html tags included ' +
      `(${html.length - 250} extraneous chars).`
    : ''

const CornForm = memo(({ item, onItem, onTransient, onDelta, onErrors }) => {
  const handleChange = useCallback(
    (transient, delta, errors) => {
      onTransient(transient)
      onErrors(errors)
    },
    [onErrors, onTransient]
  )
  const handleSubmit = useCallback(
    (item, delta, cleanItem) => {
      onItem(cleanItem)
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
    <>
      <form {...form}>
        <Quill required {...field('html', maxSize)}>
          Html
        </Quill>
        <TextArea required {...field('html', maxSize)}>
          Raw html
        </TextArea>

        <Quill modules={modules} formats={formats} {...field('other-html')}>
          Custom Quill modules and formats
        </Quill>

        <ButtonRow>
          <button disabled={!modified}>Submit</button>
          <button type="button" disabled={!modified} onClick={onReset}>
            Reset
          </button>
        </ButtonRow>
      </form>
      <Divider />
      <Preview>
        <h1>Generated html:</h1>
        <div dangerouslySetInnerHTML={{ __html: field('html').value }} />
      </Preview>
    </>
  )
})

export const QuillDemo = () => {
  return (
    <Story
      Chapter={CornForm}
      initialItem={{
        html:
          '<h1>HTML Sample</h1><p><br></p><p>Here’s a simple html text in the quill editor.</p><p><br></p><p>react-corn handles simple field validation (this field has <strong>required</strong> and <em>a custom 250 characters </em>validator).</p>',
      }}
    />
  )
}

export default {
  title: '@react-corn/quill',
  parameters: {
    options: { showPanel: true },
  },
}
