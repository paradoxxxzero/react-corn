/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { ButtonRow, Select, Text } from '@react-corn/simple'
import React, { memo, useCallback } from 'react'

import { Story } from '../helpers/Story'

export default {
  title: 'Overview/dynamic-props',
  parameters: {
    options: { showPanel: true },
  },
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

  const choices = Object.entries(item).filter(([k]) => k.startsWith('choice'))

  return (
    <form {...form}>
      {choices.map(([k]) => (
        <Text key={k} required {...field(k)}>
          {k}
        </Text>
      ))}
      <Text {...field(`choice${choices.length + 1}`)}>New choice</Text>
      <Select
        {...field('dynamic-select', {
          choices: currentItem =>
            Object.entries(currentItem)
              .filter(([k]) => k.startsWith('choice'))
              .map(([k, v]) => [v, k]),
        })}
      >
        Dynamic select
      </Select>
      <ButtonRow>
        <button disabled={!modified}>Submit</button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRow>
    </form>
  )
})

export const CornStory = () => {
  return (
    <Story
      Chapter={CornForm}
      initialItem={{
        choice1: 'One',
        choice2: 'Two',
      }}
    />
  )
}
