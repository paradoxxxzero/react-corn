/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { ButtonRow, Number } from '@react-corn/simple'
import React, { memo, useCallback } from 'react'

import { Story } from '../helpers/Story'

export default {
  title: 'Overview/custom-validation',
}

const isPrime = n =>
  ![...Array(n).keys()]
    .slice(2)
    .map(i => !(n % i))
    .includes(true) && ![0, 1].includes(n)

const CornForm = memo(({ item, onItem, onTransient, onDelta, onErrors }) => {
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
        {...field('prime', v => !isPrime(v) && `${v} is not a prime number`)}
      >
        Prime number
      </Number>
      <Number
        min={0}
        max={1000}
        {...field(
          'bigger',
          (bigger, { prime }) =>
            window.Number.isInteger(bigger) &&
            prime >= bigger &&
            `${bigger} is not bigger than a ${prime}`
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
})

export const CornStory = () => {
  return <Story Chapter={CornForm} />
}
