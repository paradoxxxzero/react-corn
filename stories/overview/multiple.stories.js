import { Button, makeStyles } from '@material-ui/core'
import { Picker as CorePicker, useCorn } from '@react-corn/core'
import { Picker as MuiPicker } from '@react-corn/material-ui'
import { Picker as SimplePicker } from '@react-corn/simple'
import React, { memo, useCallback } from 'react'

import { Story } from '../helpers/Story'

export default {
  title: 'Overview/multiple',
  parameters: {
    options: { showPanel: true },
  },
}

const useStyles = makeStyles(theme => ({
  form: {
    '& .MuiFormControl-root': {
      display: 'block',
      margin: theme.spacing(4),
    },
  },
  inline: {
    margin: theme.spacing(2),

    '& .MuiFormControl-root': {
      display: 'inline-flex',
      margin: theme.spacing(2),
    },
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
}))

const continents = {
  Africa: 'AF',
  Antarctica: 'AN',
  Asia: 'AS',
  Europe: 'EU',
  'North America': 'NA',
  'Australia/Oceania': 'AU',
  'South America': 'SA',
}

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
    (item, delta, cleanItem) => {
      onItem(cleanItem)
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
    <form className={classes.form} {...form}>
      <h2>core</h2>
      <CorePicker choices={continents} {...field('continent')} />
      <CorePicker
        multiple
        choices={continents}
        required
        {...field('continents')}
      />
      <h2>simple</h2>
      <SimplePicker choices={continents} {...field('continent')}>
        Continent
      </SimplePicker>
      <SimplePicker
        multiple
        choices={continents}
        required
        {...field('continents')}
      >
        Continents
      </SimplePicker>
      <h2>mui</h2>
      <MuiPicker choices={continents} {...field('continent')}>
        Continent
      </MuiPicker>
      <MuiPicker
        multiple
        choices={continents}
        required
        {...field('continents')}
      >
        Continents
      </MuiPicker>

      <Button
        className={classes.button}
        type="submit"
        disabled={!modified}
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      <Button className={classes.button} onClick={onReset}>
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
        continent: 'EU',
        continents: ['EU', 'AS', 'SA'],
      }}
    />
  )
}
