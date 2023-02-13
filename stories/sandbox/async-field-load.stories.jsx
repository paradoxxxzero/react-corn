/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { ButtonRow, TextArea } from '@react-corn/simple'
import { lazy, memo, Suspense, useCallback } from 'react';
import 'react-quill/dist/quill.snow.css'
import { Story } from '../helpers/Story'

const Quill = lazy(() =>
  import(/* webpackChunkName: "quill" */ '@react-corn/quill').then(module => ({
    default: module.Quill,
  }))
)

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
    <form {...form}>
      <Suspense fallback="Loading...">
        <Quill {...field('html')}>Html</Quill>
      </Suspense>
      <TextArea {...field('html')}>Raw html</TextArea>

      <ButtonRow>
        <button disabled={!modified}>Submit</button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRow>
    </form>
  )
})

export const AsyncDemo = () => {
  return (
    <Story
      Chapter={CornForm}
      initialItem={{
        html: '<p>Here I am, async as possible</p>',
      }}
    />
  )
}

export default {
  title: 'Sandbox/async-field-load',
  parameters: {
    options: { showPanel: true },
  },
}
