import { useCorn } from '@react-corn/core'
import { Select, Text } from '@react-corn/simple'
import React, { useCallback } from 'react'

const item = {
  name: 'John',
}

export const ExampleCorn = () => {
  const onSubmit = useCallback(newItem => alert(JSON.stringify(newItem)), [])

  const { form, field, modified } = useCorn({ item, onSubmit })

  return (
    <form {...form}>
      <Text required {...field('name')}>
        What’s your name?
      </Text>

      <Select
        choices={{ One: 1, Two: 2, Three: 3 }}
        {...field('number-select')}
      >
        Choose a number:
      </Select>

      <button disabled={!modified}>Submit</button>
    </form>
  )
}
