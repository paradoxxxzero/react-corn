/* eslint-disable jsx-a11y/label-has-associated-control */
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useCorn } from '@react-corn/core'
import { Inline } from '@react-corn/mui'
import { Date, DateTime, Time } from '@react-corn/mui-x'
import { memo, useCallback } from 'react';
import { Button, Form } from './helpers/muiForm'
import { Story } from './helpers/Story'

export default {
  title: '@react-corn/mui-x',
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
    <Form {...form}>
      <Inline>
        <Date required {...field('date')}>
          Date
        </Date>
        <Date displayFormat="PP" autoOk variant="inline" {...field('date')}>
          Date with display format
        </Date>
      </Inline>

      <Inline>
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
      </Inline>
      <Inline>
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
      </Inline>
      <Inline>
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
      </Inline>

      <Button
        type="submit"
        disabled={!modified}
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      <Button onClick={onReset}>Reset</Button>
    </Form>
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
