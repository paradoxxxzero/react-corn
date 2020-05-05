/* eslint-disable jsx-a11y/label-has-associated-control */
import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'

import { useCorn } from '../src'
import { Input, Number, TextArea } from '../src/fields/core'
import StoryItem from './story.item'

export default {
  title: 'react-corn',
}

export const CornForm = () => {
  const [item, setItem] = useState({
    string: 'String',
    int: 12,
    'long string': 'Long\nString',
  })

  const [transient, setTransient] = useState({})
  const corn = useCorn({
    item,
    onChange: item => {
      action('onChange')(item)
      setTransient(item)
    },
    onSubmit: item => {
      action('onSubmit')(item)
      setItem(item)
    },
  })

  return (
    <>
      <StoryItem item={item} transient={transient} onItemEdited={setItem} />
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
      </form>
    </>
  )
}
