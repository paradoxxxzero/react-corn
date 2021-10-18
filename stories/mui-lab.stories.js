/* eslint-disable jsx-a11y/label-has-associated-control */
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Button } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useCorn } from '@react-corn/core'
import { Date, DateTime, Time } from '@react-corn/mui-lab'
import React, { memo, useCallback } from 'react'

import { Story } from './helpers/Story'

export default {
  title: '@react-corn/mui-lab',
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
        <Date required {...field('date')}>
          Date
        </Date>
        <Date displayFormat="PP" autoOk variant="inline" {...field('date')}>
          Date with display format
        </Date>
      </div>

      <div className={classes.inline}>
        <Time required withSeconds {...field('time')}>
          Time
        </Time>
        <Time
          displayFormat="pp"
          autoOk
          withSeconds
          variant="inline"
          {...field('time')}
        >
          Time with display format
        </Time>
      </div>
      <div className={classes.inline}>
        <DateTime required {...field('dateTime')}>
          DateTime
        </DateTime>
        <DateTime
          displayFormat="PP p"
          autoOk
          ampm
          variant="inline"
          {...field('dateTime')}
        >
          DateTime with display fmt
        </DateTime>
      </div>
      <div className={classes.inline}>
        <Date
          format="dd/MM/yyyy"
          displayFormat="MM/dd/yyyy"
          autoOk
          disableFuture
          {...field('date-other')}
        >
          Date with custom formats
        </Date>
        <Time ampm format="hh' -- 'mm' // 'a" {...field('time-ampm')}>
          Time ampm custom format
        </Time>
      </div>

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

export const MaterialUIPickerDemo = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Story
        Chapter={CornForm}
        initialItem={{
          date: '2020-02-13',
        }}
      />
    </LocalizationProvider>
  )
}
