import { useMemo } from 'react'

export const useOptions = choices => {
  const options = useMemo(() => {
    return Array.isArray(choices)
      ? choices.map(c => (Array.isArray(c) ? c : [c, c]))
      : Object.entries(choices || {})
  }, [choices])

  return options
}
