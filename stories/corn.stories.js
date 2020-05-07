/* eslint-disable jsx-a11y/label-has-associated-control */
import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import styled from 'styled-components'

import { useCorn } from '../src'
import {
  Email,
  Inline,
  Number,
  Select,
  Text,
  TextArea,
} from '../src/fields/labelled'
import StoryItem from './story.item'

export default {
  title: 'react-corn',
}

const Story = styled.div`
  font-family: 'Nunito', sans-serif;
`

export const LabelledCornForm = () => {
  const [item, setItem] = useState({
    name: 'John Foo',
    mail: 'john.foo@example.com',
    address: {
      zipcode: 'Z4755A',
      city: 'Barville',
      continent: null,
    },
    age: 25,
    message: 'Hello,\nHow are you?',
  })

  const [transient, setTransient] = useState({})
  const { form, field, modified, reset } = useCorn({
    item,
    onChange: item => {
      setTransient(item)
    },
    onSubmit: item => {
      action('onSubmit')(item)
      setItem(item)
    },
  })

  return (
    <Story>
      <StoryItem item={item} transient={transient} onItemEdited={setItem} />
      <form {...form}>
        <Inline>
          <Text required maxLength={25} {...field('name')}>
            Name
          </Text>
          <Email {...field('mail')}>Mail</Email>
        </Inline>
        <Inline>
          <Text size={5} {...field('address.zipcode')}>
            Zip code
          </Text>
          <Text {...field('address.city')}>City</Text>
        </Inline>
        <Select
          choices={[
            'Africa',
            'Antarctica',
            'Asia',
            'Europe',
            'North America',
            'Australia/Oceania',
            'South America',
          ]}
          multiple
          {...field('address.continent')}
        >
          Continent
        </Select>
        <Number min={12} {...field('age')}>
          Age
        </Number>
        <TextArea {...field('message')}>Message</TextArea>

        <button type="button" disabled={!modified} onClick={reset}>
          Reset
        </button>
        <button disabled={!modified}>Submit</button>
      </form>
    </Story>
  )
}
