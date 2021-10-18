/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Chip, InputAdornment } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useCorn } from '@react-corn/core'
import {
  Autocomplete,
  Checkbox,
  Email,
  Inline,
  Money,
  Number,
  Password,
  Select,
  Slider,
  Text,
  TextArea,
} from '@react-corn/mui'
import React, { memo, useCallback } from 'react'

import { Story } from './helpers/Story'

export default {
  title: '@react-corn/mui',
  parameters: {
    options: { showPanel: true },
  },
}

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
    (item, delta) => {
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
    <form className={classes.form} {...form}>
      <Inline>
        <Text required maxLength={25} {...field('name')}>
          Name
        </Text>
        <Email disabled {...field('mail')}>
          Mail
        </Email>
        <Password {...field('password')}>Mot de passe</Password>
      </Inline>
      <Inline>
        <Number
          variant="standard"
          style={{ width: '6ch' }}
          {...field('address.number', {
            InputProps: ({ address: { number: num } }) =>
              num
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        {num > 20 || num < 10
                          ? { 1: 'st', 2: 'nd', 3: 'rd' }[num % 10] || 'th'
                          : 'th'}
                      </InputAdornment>
                    ),
                  }
                : undefined,
          })}
        >
          Num
        </Number>
        <Text variant="standard" size={8} {...field('address.street')}>
          Street name
        </Text>
      </Inline>
      <Text {...field('address.city')} variant="filled">
        City
      </Text>
      <Select
        choices={Object.keys(continents)}
        // multiple
        {...field(
          'address.continent',
          continent =>
            continent === 'Australia/Oceania' &&
            'Sorry but choose a closest continent'
        )}
      >
        Continent
      </Select>
      <Slider
        min={12}
        max={100}
        valueLabelDisplay="auto"
        {...field(
          'age',
          v => v > 90 && 'You might be too old for that, sorry.'
        )}
      >
        Age
      </Slider>
      <Inline>
        <TextArea {...field('message')}>Message</TextArea>
        <Checkbox option="Away" {...field('away')} required>
          Status
        </Checkbox>
      </Inline>
      <Inline>
        <Money
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
          {...field('price')}
        >
          Price
        </Money>
        <Checkbox noIndeterminate {...field('taxes')}>
          Incl. taxes
        </Checkbox>
      </Inline>

      <Button
        className={classes.button}
        type="submit"
        disabled={!modified}
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      <Button className={classes.button} disabled={!modified} onClick={onReset}>
        Reset
      </Button>
    </form>
  )
})

const getContrast = rgb =>
  [299, 587, 114].reduce(
    (s, k, i) => s + parseInt(rgb.substring(1 + i * 2, 1 + (i + 1) * 2), 16) * k
  ) >=
  2 ** 7 * 1000

const AutocompleteCornForm = memo(
  ({ item, onItem, onTransient, onDelta, onErrors }) => {
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
          renderOption={(props, option) => (
            <li {...props}>
              <span style={{ color: option.meta }}>{option.title}</span>
            </li>
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
          renderOption={(props, option) => (
            <li {...props}>
              <span style={{ color: option.value }}>{option.title}</span>
            </li>
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
        <Inline>
          <Autocomplete free choices={continents} {...field('free-continent')}>
            Free Continent
          </Autocomplete>
          <Autocomplete
            free
            multiple
            choices={colors}
            {...field('free-colors')}
          >
            Free Colors
          </Autocomplete>
        </Inline>
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
  }
)

export const MaterialUIDemoAutocomplete = () => {
  return (
    <Story
      Chapter={AutocompleteCornForm}
      initialItem={{
        continent: 'EU',
        'colors-value': ['#008080', '#800080', '#000000'],
      }}
    />
  )
}

export const MaterialUIDemo = () => {
  return (
    <Story
      Chapter={CornForm}
      initialItem={{
        name: 'John Foo',
        mail: 'john.foo@example.com',
        password: 'qwerty',
        address: {
          zipcode: 'Z4755A',
          city: 'Barville',
          continent: 'Europe',
        },
        age: 25,
        message: 'Hello,\nHow are you?',
        price: '12.25',
      }}
    />
  )
}
