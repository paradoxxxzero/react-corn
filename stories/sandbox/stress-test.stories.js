/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { ButtonRow, Text } from '@react-corn/simple'
import React, { useState } from 'react'

const fields = 1000

const initialItem = Object.fromEntries(
  new Array(fields).fill().map((_, i) => [`field-${i}`, `value-${i}`])
)

export const StressTest = () => {
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
    <form {...form} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {new Array(fields).fill().map((_, i) => (
        <Text key={i} required {...field(`field-${i}`)}>
          Field {i}
        </Text>
      ))}
      <div style={{ width: '100%' }} />
      <ButtonRow>
        <button disabled={!modified}>Submit</button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRow>
    </form>
  )
}

export default {
  title: 'Sandbox/simple-stress-test',
  parameters: {
    options: { showPanel: false },
  },
}
