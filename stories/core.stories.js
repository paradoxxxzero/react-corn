/* eslint-disable jsx-a11y/label-has-associated-control */
import { Checkbox, Number, Text, useCorn } from '@react-corn/core'
import React, { useState } from 'react'

export default {
  title: '@react-corn/core',
  parameters: {
    options: { showPanel: true },
  },
}

export const BasicUsage = () => {
  const [item, setItem] = useState({
    name: 'Foo',
    value: 42,
    ok: false,
  })
  const corn = useCorn({
    item,
    onSubmit: newItem => {
      const accepted = window.confirm(
        `You submitted "${newItem.name}" and ${newItem.value} with ok ${
          newItem.ok ? '✓' : '✗'
        }`
      )
      accepted && setItem(newItem)
    },
  })
  return (
    <form {...corn.form}>
      <Text required {...corn.field('name')} />
      <Number required {...corn.field('value')} />
      <label>
        <Checkbox {...corn.field('ok')} />
        ok
      </label>
      &nbsp;
      <button disabled={!corn.modified}>Submit</button>
      <button type="button" disabled={!corn.modified} onClick={corn.reset}>
        Reset
      </button>
    </form>
  )
}
