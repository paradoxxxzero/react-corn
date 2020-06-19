/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useCorn } from '@react-corn/core'
import {
  Email,
  Money,
  Number,
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
      <div className={classes.inline}>
        <Text required maxLength={25} {...field('name')}>
          Name
        </Text>
        <Email disabled {...field('mail')}>
          Mail
        </Email>
      </div>
      <div className={classes.inline}>
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
        <Text size={5} {...field('address.street')}>
          Street name
        </Text>
      </div>
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
      <TextArea {...field('message')}>Message</TextArea>
      <Money
        InputProps={{ endAdornment: <InputAdornment>$</InputAdornment> }}
        {...field('price')}
      >
        Price
      </Money>

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
