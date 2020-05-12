import { useMemo, useRef, useState } from 'react'

import { debounce } from './utils'

export const useOptions = choices => {
  const options = useMemo(() => {
    return Array.isArray(choices)
      ? choices.map(c => (Array.isArray(c) ? c : [c, c]))
      : Object.entries(choices || {})
  }, [choices])

  return options
}

export const useMaybeMultipleValue = (multiple, value) => {
  const multipleValue = useMemo(() => {
    if (!multiple && Array.isArray(value)) {
      return value.length ? value[0] : ''
    }
    if (multiple && !Array.isArray(value)) {
      return value !== null && value !== void 0 && value !== '' ? [value] : []
    }
    return value
  }, [multiple, value])

  return multipleValue
}

export const useDebouncedState = (initial, wait = 50) => {
  const setStateDebouncedRef = useRef()
  const currentWaitRef = useRef(wait)
  const [state, setState] = useState(initial)

  if (!setStateDebouncedRef.current || currentWaitRef.current !== wait) {
    setStateDebouncedRef.current = debounce(setState, wait)
  }

  return [state, setStateDebouncedRef.current]
}
