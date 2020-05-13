/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from '@material-ui/core'
import { useCorn } from '@react-corn/core'
import { Email, Number, Select, Text, TextArea } from '@react-corn/material-ui'
import React, { memo, useCallback } from 'react'

import { Story } from './helpers/Story'

export default {
  title: '@react-corn/simple',
}

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
      (item, delta) => {
        onItem(item)
        onDelta(delta)
      },
      [onDelta, onItem]
    )

    const { form, field, modified, reset } = useCorn({
      item,
      onChange: handleChange,
      onSubmit: handleSubmit,
    })

    return (
      <form {...form}>
        <Text required maxLength={25} {...field('name')}>
          Name
        </Text>
        <Email {...field('mail')}>Mail</Email>
        <Text size={5} {...field('address.zipcode')}>
          Zip code
        </Text>
        <Text {...field('address.city')}>City</Text>
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
        <Number min={12} {...field('age')}>
          Age
        </Number>
        <TextArea {...field('message')}>Message</TextArea>

        <Button disabled={!modified}>Submit</Button>
        <Button
          type="button"
          color="primary"
          variant="contained"
          disabled={!modified}
          onClick={reset}
        >
          Reset
        </Button>
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
