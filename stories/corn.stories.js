/* eslint-disable jsx-a11y/label-has-associated-control */
import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'

import { useCorn } from '../src'
import { Input, Number, TextArea } from '../src/fields/core'

export default {
  title: 'react-corn',
}

export const CornForm = () => {
  const [item, setItem] = useState({
    string: 'String',
    int: 12,
    'long string': 'Long\nString',
  })

  const corn = useCorn({
    item,
    onChange: item => {
      action('change')(item)
    },
    onSubmit: item => {
      action('submit')(item)
      setItem(item)
    },
  })

  return (
    <form {...corn.form}>
      <Input type="text" required {...corn.field('string')}>
        String
      </Input>
      <Number min={12} {...corn.field('int')}>
        Int
      </Number>
      <TextArea {...corn.field('long string')}>Long String</TextArea>

      <button type="button" disabled={!corn.modified} onClick={corn.reset}>
        Reset
      </button>
      <button disabled={!corn.modified}>Submit</button>
      <button
        type="button"
        onClick={() => {
          let newItem = prompt('Object json', JSON.stringify(item))
          if (newItem === null) {
            return
          }
          try {
            newItem = JSON.parse(newItem)
          } catch (e) {
            alert('Invalid json ' + e)
            return
          }
          setItem(newItem)
        }}
      >
        Edit object json
      </button>
    </form>
  )
}
