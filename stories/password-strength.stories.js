/* eslint-disable jsx-a11y/label-has-associated-control */
import 'react-quill/dist/quill.snow.css'

import makeStyles from '@mui/styles/makeStyles'
import { useCorn } from '@react-corn/core'
import { Password as materialUIPassword } from '@react-corn/mui'
import { ButtonRow, Password as simplePassword } from '@react-corn/simple'
import React, { lazy, memo, Suspense, useCallback } from 'react'

import { Story } from './helpers/Story'

const PasswordStrength = lazy(() =>
  import(
    /* webpackChunkName: "password-strength" */ '@react-corn/password-strength'
  ).then(module => ({
    default: module.PasswordStrength,
  }))
)

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
      <Suspense fallback="Loading…">
        <PasswordStrength
          Component={simplePassword}
          required
          {...field('password')}
        >
          Simple Password Strength
        </PasswordStrength>
        <PasswordStrength
          Component={materialUIPassword}
          required
          {...field('password')}
        >
          Material-ui Password Strength
        </PasswordStrength>
        <PasswordStrength
          variant="outlined"
          Component={materialUIPassword}
          required
          {...field('password')}
        >
          Material-ui Password Strength
        </PasswordStrength>
        <PasswordStrength
          variant="filled"
          Component={materialUIPassword}
          required
          {...field('password')}
        >
          Material-ui Password Strength
        </PasswordStrength>
        <PasswordStrength
          Component={simplePassword}
          minScore={4}
          lowScoreMessage="This password is still too weak"
          {...field('password-very-strong')}
        >
          Strong requirement
        </PasswordStrength>
      </Suspense>
      <ButtonRow>
        <button disabled={!modified}>Submit</button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRow>
    </form>
  )
})

export const PasswordStrengthDemo = () => {
  return (
    <Story
      Chapter={CornForm}
      initialItem={{
        password: 'qL5w%ïp.k)@*',
      }}
    />
  )
}

export default {
  title: '@react-corn/password-strength',
  parameters: {
    options: { showPanel: true },
  },
}
