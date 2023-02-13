import React, { memo, useMemo } from 'react'
import zxcvbn from 'zxcvbn'

export const PasswordStrength = memo(function PasswordStrength({
  Component,
  userInputs,
  minScore = 3,
  lowScoreMessage = 'Password too weak',
  customError,
  suggest = false,
  ...props
}) {
  const { value } = props
  const result = useMemo(() => {
    return zxcvbn(value, userInputs)
  }, [value, userInputs])

  return (
    <Component
      {...props}
      score={result.score}
      suggestion={suggest && result.feedback.suggestions.join(', ')}
      customError={
        value && result.score < minScore ? lowScoreMessage : customError
      }
    />
  )
})
