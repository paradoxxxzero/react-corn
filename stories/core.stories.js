/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'

import { useCorn } from '../src'
import { Number, Text } from '../src/fields/core'

export default {
  title: '@react-corn/core',
}

export const ControlledCoreForm = () => {
  const [item, setItem] = useState({
    name: 'Foo',
    value: 42,
  })
  const corn = useCorn({
    item,
    onSubmit: newItem => {
      const accepted = window.confirm(
        `You submitted "${newItem.name}" and ${newItem.value}`
      )
      accepted && setItem(newItem)
    },
  })
  return (
    <form {...corn.form}>
      <Text required {...corn.field('name')} />
      <Number required {...corn.field('value')} />

      <button disabled={!corn.modified}>Submit</button>
      <button type="button" disabled={!corn.modified} onClick={corn.reset}>
        Reset
      </button>
    </form>
  )
}
