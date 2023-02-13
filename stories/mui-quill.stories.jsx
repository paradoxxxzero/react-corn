/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { Quill } from '@react-corn/mui-quill'
import { memo, useCallback } from 'react';
import 'react-quill/dist/quill.snow.css'
import { Button, Form } from './helpers/muiForm'
import { Story } from './helpers/Story'

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
    <Form {...form}>
      <Quill required variant="standard" {...field('html', maxSize)}>
        Html
      </Quill>

      <Quill variant="filled" {...field('html-filled')}>
        Filled
      </Quill>
      <Quill variant="outlined" {...field('html-outlined')}>
        Outlined
      </Quill>

      <Button
        type="submit"
        disabled={!modified}
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      <Button onClick={onReset}>Reset</Button>
    </Form>
  )
})

export const MaterialUIQuillDemo = () => {
  return (
    <Story
      Chapter={CornForm}
      initialItem={{
        html: '<h1>HTML Sample</h1><p><br></p><p>Here’s a simple html text in the quill editor.</p><p><br></p><p>react-corn handles simple field validation (this field has <strong>required</strong> and <em>a custom 250 characters </em>validator).</p>',
        'html-filled': '<h2>With filled variant</h2>',
        'html-outlined': '<h3>And outlined</h3>',
      }}
    />
  )
}

export default {
  title: '@react-corn/mui-quill',
  parameters: {
    options: { showPanel: true },
  },
}
