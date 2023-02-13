/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { ButtonRow, Number, Text } from '@react-corn/simple'
import { memo, useCallback, useState } from 'react';
import { Story } from '../helpers/Story'

export default {
  title: 'Overview/server-errors',
  parameters: {
    options: { showPanel: true },
  },
}

const CornForm = memo(({ item, onItem, onTransient, onDelta, onErrors }) => {
  const [loading, setLoading] = useState(false)
  const handleChange = useCallback(
    (transient, delta, errors) => {
      onTransient(transient)
      onErrors(errors)
    },
    [onErrors, onTransient]
  )
  const handleSubmit = useCallback(
    async (item, delta) => {
      // Simulate an async wait
      setLoading(true)
      await new Promise(resolve => setTimeout(() => resolve(), 1000))
      setLoading(false)
      if (item.text !== 'okay') {
        // Return an object containing the form errors that may come from a server side validation
        return {
          text: `${item.text} for text has been denied by the server, please change it to "okay".`,
        }
      }
      onItem(item)
      onDelta(delta)
    },
    [onDelta, onItem]
  )

  const { form, field, modified, onReset } = useCorn({
    item,
    onChange: handleChange,
    onSubmit: handleSubmit,
  })

  return (
    <form
      {...form}
      style={loading ? { pointerEvents: 'none', opacity: 0.5 } : undefined}
    >
      <Text required {...field('text')}>
        Text
      </Text>

      <Number required {...field('number')}>
        Number
      </Number>

      <ButtonRow>
        <button disabled={!modified}>
          Submit <small>(simulated 1s delay)</small>
        </button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRow>
    </form>
  )
})

export const CornStory = () => {
  return <Story Chapter={CornForm} initialItem={{}} />
}
