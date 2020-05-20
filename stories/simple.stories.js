/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import {
  ButtonRow,
  Email,
  Inline,
  Number,
  Select,
  Text,
  TextArea,
} from '@react-corn/simple'
import React, { memo, useCallback } from 'react'

import { Story } from './helpers/Story'

const LabelledCornForm = memo(
  ({ item, onItem, onTransient, onDelta, onErrors }) => {
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

    const { form, field, modified, reset, current } = useCorn({
      item,
      onChange: handleChange,
      onSubmit: handleSubmit,
    })

    return (
      <form {...form}>
        <Inline>
          <Text required maxLength={25} {...field('name')}>
            Name
          </Text>
          <Email {...field('mail')}>Mail</Email>
        </Inline>
        <Inline>
          <Text size={5} maxLength={5} {...field('address.zipcode')}>
            Zip code
          </Text>
          <Text
            {...field('address.city', {
              required: ({ address: { zipcode } }) => !!zipcode,
            })}
          >
            City
          </Text>
        </Inline>
        {current(({ address }) => address.zipcode || address.city) && (
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
            // multiple
            {...field('address.continent')}
          >
            Continent
          </Select>
        )}
        <Number min={12} {...field('age')}>
          Age
        </Number>
        <TextArea {...field('message')}>Message</TextArea>

        <ButtonRow>
          <button disabled={!modified}>Submit</button>
          <button type="button" disabled={!modified} onClick={reset}>
            Reset
          </button>
        </ButtonRow>
      </form>
    )
  }
)

export const LabelledCornStory = () => {
  return (
    <Story
      Chapter={LabelledCornForm}
      initialItem={{
        name: 'John Foo',
        mail: 'john.foo@example.com',
        address: {
          zipcode: 'Z4755A',
          city: 'Barville',
          continent: null,
        },
        age: 25,
        message: 'Hello,\nHow are you?',
      }}
    />
  )
}

export default {
  title: '@react-corn/simple',
}
