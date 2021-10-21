/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { Password as materialUIPassword } from '@react-corn/mui'
import { ButtonRow, Password as simplePassword } from '@react-corn/simple'
import React, { lazy, memo, Suspense, useCallback } from 'react'
import 'react-quill/dist/quill.snow.css'
import { Story } from './helpers/Story'

const PasswordStrength = lazy(() =>
  import(
    /* webpackChunkName: "password-strength" */ '@react-corn/password-strength'
  ).then(module => ({
    default: module.PasswordStrength,
  }))
)

const CornForm = memo(({ item, onItem, onTransient, onDelta, onErrors }) => {
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
    <form {...form}>
      <Suspense fallback="Loading…">
        <PasswordStrength
          Component={simplePassword}
          required
          {...field('password')}
        >
          Simple Password Strength
        </PasswordStrength>
        <div style={{ margin: '32px 16px' }}>
          <PasswordStrength
            Component={materialUIPassword}
            required
            {...field('password')}
          >
            Material-ui Password Strength
          </PasswordStrength>
        </div>
        <div style={{ margin: '32px 16px' }}>
          <PasswordStrength
            variant="outlined"
            Component={materialUIPassword}
            required
            {...field('password')}
          >
            Material-ui Password Strength
          </PasswordStrength>
        </div>
        <div style={{ margin: '32px 16px' }}>
          <PasswordStrength
            variant="filled"
            Component={materialUIPassword}
            required
            {...field('password')}
          >
            Material-ui Password Strength
          </PasswordStrength>
        </div>
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
