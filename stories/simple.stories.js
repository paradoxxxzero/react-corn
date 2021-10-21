/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import {
  ButtonRow,
  Email,
  Inline,
  Money,
  Number,
  Password,
  Select,
  Text,
  TextArea,
} from '@react-corn/simple'
import React, { memo, useCallback } from 'react'
import { Story } from './helpers/Story'

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

  const { form, field, modified, onReset, current } = useCorn({
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
        <Password {...field('password')}>Mot de passe</Password>
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
      <Money {...field('price')}>Price</Money>

      <ButtonRow>
        <button disabled={!modified}>Submit</button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRow>
    </form>
  )
})

export const SimpleUIDemo = () => {
  return (
    <Story
      Chapter={CornForm}
      initialItem={{
        name: 'John Foo',
        mail: 'john.foo@example.com',
        password: 'qwerty',
        address: {
          zipcode: 'Z4755A',
          city: 'Barville',
          continent: null,
        },
        age: 25,
        message: 'Hello,\nHow are you?',
        price: '12.25',
      }}
    />
  )
}

export default {
  title: '@react-corn/simple',
  parameters: {
    options: { showPanel: true },
  },
}
