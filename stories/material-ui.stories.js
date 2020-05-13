/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useCorn } from '@react-corn/core'
import { Email, Number, Select, Text, TextArea } from '@react-corn/material-ui'
import React, { memo, useCallback } from 'react'

import { Story } from './helpers/Story'

export default {
  title: '@react-corn/material-ui',
}

const useStyles = makeStyles(theme => ({
  form: {
    '& .MuiTextField-root': {
      display: 'block',
      margin: theme.spacing(4),
    },
  },
  inline: {
    margin: theme.spacing(2),

    '& .MuiTextField-root': {
      display: 'inline-flex',
      margin: theme.spacing(2),
    },
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
}))

const MaterialUiCornForm = memo(
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
      <form className={classes.form} {...form}>
        <div className={classes.inline}>
          <Text required maxLength={25} {...field('name')}>
            Name
          </Text>
          <Email {...field('mail')}>Mail</Email>
        </div>
        <Text size={5} {...field('address.zipcode')}>
          Zip code
        </Text>
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
          {...field('address.continent')}
        >
          Continent
        </Select>
        <Number min={12} {...field('age')}>
          Age
        </Number>
        <TextArea {...field('message')}>Message</TextArea>

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
  }
)

export const MaterialUiCornStory = () => {
  return (
    <Story
      Chapter={MaterialUiCornForm}
      initialItem={{
        name: 'John Foo',
        mail: 'john.foo@example.com',
        address: {
          zipcode: 'Z4755A',
          city: 'Barville',
          continent: null,
        },
        age: 25,
        message: 'Hello,\nHow are you?',
      }}
    />
  )
}
