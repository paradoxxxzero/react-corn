import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { diff, get, insert } from './object'

export const useCorn = ({
  item,
  onChange: propagateChange = () => {},
  onSubmit: propagateSubmit = () => {},
}) => {
  const [transient, setTransient] = useState(item)
  const names = useRef([])

  const delta = useMemo(() => diff(item, transient, names.current), [
    item,
    transient,
  ])

  const modified = !!Object.keys(delta).length

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      propagateSubmit(transient)
    },
    [transient, propagateSubmit]
  )

  const field = useCallback(
    name => {
      if (!names.current.includes(name)) {
        names.current.push(name)
      }
      return {
        name,
        value: get(transient, name),
        modified: !!get(delta, name),
        onChange: value => {
          setTransient(o => insert(o, name, value, names.current))
        },
      }
    },
    [transient, delta]
  )

  const reset = useCallback(() => {
    if (modified) {
      setTransient(item)
    }
  }, [item, setTransient, modified])

  useEffect(() => {
    setTransient(item)
  }, [item])

  useEffect(() => {
    propagateChange(transient)
  }, [transient, propagateChange])

  return {
    form: {
      onSubmit,
    },
    field,
    modified,
    reset,
  }
}
