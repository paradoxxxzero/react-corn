/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useCorn } from '@react-corn/core'
import {
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
} from '@react-corn/material-ui'
import React, { memo, useCallback } from 'react'

import { Story } from './helpers/Story'

export default {
  title: '@react-corn/material-ui',
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
          style={{ width: '6ch' }}
          {...field('address.number', {
            InputProps: ({ address: { number: num } }) =>
              num
                ? {
                    endAdornment: (
                      <InputAdornment>
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
        <Text size={8} {...field('address.street')}>
          Street name
        </Text>
      </Inline>
      <Text {...field('address.city')}>City</Text>
      <Select
        choices={[
          'Africa',
          'Antarctica',
          'Asia',
          'Europe',
          'North America',
          'Australia/Oceania',
          'South America',
        ]}
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
          InputProps={{ endAdornment: <InputAdornment>$</InputAdornment> }}
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
