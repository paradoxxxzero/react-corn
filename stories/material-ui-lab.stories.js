import { Button, Chip, makeStyles } from '@material-ui/core'
import { useCorn } from '@react-corn/core'
import { Autocomplete } from '@react-corn/material-ui-lab'
import React, { memo, useCallback } from 'react'

import { Story } from './helpers/Story'

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

const colors = {
  White: '#ffffff',
  Silver: '#c0c0c0',
  Gray: '#808080',
  Black: '#000000',
  Red: '#ff0000',
  Maroon: '#800000',
  Yellow: '#ffff00',
  Olive: '#808000',
  Lime: '#00ff00',
  Green: '#008000',
  Aqua: '#00ffff',
  Teal: '#008080',
  Blue: '#0000ff',
  Navy: '#000080',
  Fuchsia: '#ff00ff',
  Purple: '#800080',
}

const getContrast = rgb =>
  [299, 587, 114].reduce(
    (s, k, i) => s + parseInt(rgb.substring(1 + i * 2, 1 + (i + 1) * 2), 16) * k
  ) >=
  2 ** 7 * 1000

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
      <Autocomplete choices={continents} {...field('continent')}>
        Continent
      </Autocomplete>
      <Autocomplete
        required
        pattern="^.?U$"
        width={400}
        choices={continents}
        {...field('continent-validation')}
      >
        Continent with value ending with U validation
      </Autocomplete>
      <Autocomplete
        required
        multiple
        meta={colors}
        width={250}
        choices={Object.keys(colors)}
        renderOption={option => (
          <span style={{ color: option.meta }}>{option.title}</span>
        )}
        {...field('colors')}
      >
        Color label (custom style)
      </Autocomplete>
      <Autocomplete
        required
        multiple
        width={400}
        choices={colors}
        renderOption={option => (
          <span style={{ color: option.value }}>{option.title}</span>
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            // eslint-disable-next-line react/jsx-key
            <Chip
              variant="outlined"
              label={option.title}
              {...getTagProps({ index })}
              style={{
                color: getContrast(option.value) ? 'black' : 'white',
                backgroundColor: option.value,
              }}
            />
          ))
        }
        {...field('colors-value')}
      >
        Color value (custom tag)
      </Autocomplete>
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

export const MaterialUIAutocompleteDemo = () => {
  return (
    <Story
      Chapter={CornForm}
      initialItem={{
        continent: 'EU',
        'colors-value': ['#008080', '#800080', '#000000'],
      }}
    />
  )
}

export default {
  title: '@react-corn/material-ui-lab',
  parameters: {
    options: { showPanel: true },
  },
}
