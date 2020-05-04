import fastDeepEqual from 'fast-deep-equal'
import { useCallback, useEffect, useMemo, useState } from 'react'

export const useCorn = ({ item, onSubmit: superOnSubmit }) => {
  const [transient, setTransient] = useState(item)

  const modified = useMemo(() => {
    return !fastDeepEqual(item, transient)
  }, [item, transient])

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      superOnSubmit && superOnSubmit(transient)
    },
    [transient, superOnSubmit]
  )

  const field = useCallback(
    name => ({
      name,
      value: transient[name],
      onChange: value => {
        setTransient(o => ({
          ...o,
          [name]: value,
        }))
      },
    }),
    [transient]
  )

  const reset = useCallback(() => {
    setTransient(item)
  }, [item, setTransient])

  useEffect(() => {
    setTransient(item)
  }, [item])

  return {
    form: {
      onSubmit,
    },
    field,
    modified,
    reset,
  }
}
