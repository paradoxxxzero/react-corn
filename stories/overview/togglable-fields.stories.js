import { Button, makeStyles } from '@material-ui/core'
import { useCorn } from '@react-corn/core'
import { Switch, Text } from '@react-corn/material-ui'
import React, { memo, useCallback } from 'react'

import { Story } from '../helpers/Story'

export default {
  title: 'Overview/togglable-fields',
}

const useStyles = makeStyles(theme => ({
  form: {
    '& .MuiFormControl-root': {
      display: 'block',
      margin: theme.spacing(4),
    },
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
}))

const CornForm = memo(({ item, onItem, onTransient, onDelta, onErrors }) => {
  const classes = useStyles()

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

  const { form, field, modified, reset, current } = useCorn({
    item,
    onChange: handleChange,
    onSubmit: handleSubmit,
  })

  return (
    <form className={classes.form} {...form}>
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
        className={classes.button}
        type="submit"
        disabled={!modified}
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      <Button className={classes.button} disabled={!modified} onClick={reset}>
        Reset
      </Button>
    </form>
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
