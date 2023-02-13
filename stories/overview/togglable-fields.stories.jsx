import { useCorn } from '@react-corn/core'
import { Switch, Text } from '@react-corn/mui'
import { memo, useCallback } from 'react';
import { Button, Form } from '../helpers/muiForm'
import { Story } from '../helpers/Story'

export default {
  title: 'Overview/togglable-fields',
  parameters: {
    options: { showPanel: true },
  },
}

const CornForm = memo(({ item, onItem, onTransient, onDelta, onErrors }) => {
  const handleChange = useCallback(
    (transient, delta, errors) => {
      onTransient(transient)
      onErrors(errors)
    },
    [onErrors, onTransient]
  )
  const handleSubmit = useCallback(
    (item, delta, cleanedItem) => {
      // We use cleanedItem here to remove unwanted value
      onItem(cleanedItem)
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
    <Form {...form}>
      <Switch {...field('night')} onLabel="Night">
        Day
      </Switch>
      {current(({ night }) => night) && (
        <Text required {...field('night-text')}>
          Night Text
        </Text>
      )}
      {current(({ night }) => !night) && (
        <Text required {...field('day-text')}>
          Day Text
        </Text>
      )}
      <Button
        type="submit"
        disabled={!modified}
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      <Button disabled={!modified} onClick={onReset}>
        Reset
      </Button>
    </Form>
  )
})

export const CornStory = () => {
  return (
    <Story
      Chapter={CornForm}
      initialItem={{
        night: true,
      }}
    />
  )
}
