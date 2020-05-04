/* eslint-disable jsx-a11y/label-has-associated-control */
import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'

import { useCorn } from '../src'
import { Input, TextArea } from '../src/fields/core'

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
    onSubmit: item => {
      action('submit')(item)
      setItem(item)
    },
  })

  return (
    <form {...corn.form}>
      <label>
        string
        <Input type="text" {...corn.field('string')} />
      </label>
      <label>
        int
        <Input type="number" {...corn.field('int')} />
      </label>
      <label>
        Long String
        <TextArea {...corn.field('long string')} />
      </label>
      <button type="button" disabled={!corn.modified} onClick={corn.reset}>
        Reset
      </button>
      <button disabled={!corn.modified}>Submit</button>
      <button
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
