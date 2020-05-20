/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { ButtonRow, Number, Select, Text } from '@react-corn/simple'
import React, { memo, useCallback } from 'react'

import { Story } from './helpers/Story'

export default {
  title: '@react-corn/features',
}

const DynamicPropsForm = memo(
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

    const choices = Object.entries(item).filter(([k]) => k.startsWith('choice'))

    return (
      <form {...form}>
        {choices.map(([k]) => (
          <Text key={k} required {...field(k)}>
            {k}
          </Text>
        ))}
        <Text {...field(`choice${choices.length + 1}`)}>New choice</Text>
        <Select
          {...field('dynamic-select', {
            choices: currentItem =>
              Object.entries(currentItem)
                .filter(([k]) => k.startsWith('choice'))
                .map(([k, v]) => [v, k]),
          })}
        >
          Dynamic select
        </Select>
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

export const DynamicProps = () => {
  return (
    <Story
      Chapter={DynamicPropsForm}
      initialItem={{
        choice1: 'One',
        choice2: 'Two',
      }}
    />
  )
}

const isPrime = n =>
  ![...Array(n).keys()]
    .slice(2)
    .map(i => !(n % i))
    .includes(true) && ![0, 1].includes(n)

const CustomErrorsForm = memo(
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
        <Number
          required
          min={0}
          max={1000}
          {...field(
            'prime',
            ({ prime }) => !isPrime(prime) && `${prime} is not a prime number`
          )}
        >
          Prime number
        </Number>
        <Number
          required
          min={0}
          max={1000}
          {...field(
            'bigger',
            ({ prime, bigger }) =>
              prime >= bigger && `${bigger} is not bigger than a ${prime}`
          )}
        >
          Bigger number
        </Number>

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

export const CustomErrors = () => {
  return <Story Chapter={CustomErrorsForm} />
}
