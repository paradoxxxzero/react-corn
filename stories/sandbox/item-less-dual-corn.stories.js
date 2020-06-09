/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { ButtonRow, Date, Text } from '@react-corn/simple'
import React, { useState } from 'react'
import styled from 'styled-components'

const Spinner = styled.div`
  pointer-events: none;
  margin: 1.25em 0 0 1.25em;
  width: 2em;
  height: 2em;
  border: 0.4em solid transparent;
  border-color: rgba(0, 0, 0, 0.15);
  border-top-color: rgba(0, 0, 0, 0.95);
  border-radius: 100%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`

export const ItemLessDualCorn = () => {
  const [loading, setLoading] = useState(false)
  const corn1 = useCorn({
    onSubmit: item => {
      return window.confirm(
        `You submitted in form 1 "${Object.values(item).join(', ')}"`
      )
    },
  })
  const corn2 = useCorn({
    onSubmit: async item => {
      let result = window.confirm(
        `You submitted in form 2 "${Object.values(item).join(', ')}"`
      )
      setLoading(true)
      await new Promise(resolve => setTimeout(() => resolve(), 5000))
      setLoading(false)
      return result
    },
  })
  const extraProps = {
    disabled: loading,
  }

  return (
    <div>
      <h1>Form 1</h1>
      <form {...corn1.form} style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Text required {...corn1.field(`text`)}>
          Text
        </Text>
        <Date {...corn1.field(`date`)}>Date (not working)</Date>
        <div style={{ width: '100%' }} />
        <ButtonRow>
          <button disabled={!corn1.modified}>Submit</button>
          <button
            type="button"
            disabled={!corn1.modified}
            onClick={corn1.onReset}
          >
            Reset
          </button>
        </ButtonRow>
      </form>
      <h1>Form 2</h1>
      <h4>With a simulated loading of 5s</h4>
      <form
        {...corn2.form}
        style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
      >
        <Text required {...corn2.field(`text`, extraProps)}>
          Text
        </Text>
        <Date {...corn2.field(`date`, extraProps)}>Date (not working)</Date>
        {loading && <Spinner />}
        <div style={{ width: '100%' }} />
        <ButtonRow>
          <button disabled={!corn2.modified}>Submit</button>
          <button
            type="button"
            disabled={!corn2.modified}
            onClick={corn2.onReset}
          >
            Reset
          </button>
        </ButtonRow>
      </form>
    </div>
  )
}

export default {
  title: 'Sandbox/item-less-dual-corn',
  parameters: {
    options: { showPanel: true },
  },
}
