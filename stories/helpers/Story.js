import { StylesProvider } from '@material-ui/styles'
import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'

import StoryItem from './StoryItem'

function debounce(fn, wait) {
  let t
  return function () {
    clearTimeout(t)
    t = setTimeout(() => fn.apply(this, arguments), wait)
  }
}

const useDebouncedState = (initial, wait = 50) => {
  const setStateDebouncedRef = useRef()
  const currentWaitRef = useRef(wait)
  const [state, setState] = useState(initial)

  if (!setStateDebouncedRef.current || currentWaitRef.current !== wait) {
    setStateDebouncedRef.current = debounce(setState, wait)
  }

  return [state, setStateDebouncedRef.current]
}

const Root = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  min-height: 100%;

  form {
    flex: 1;
  }
`
export const Divider = styled.hr`
  border-color: hsla(0, 50%, 50%, 0.1);
`

const generateClassName = (rule, styleSheet) => {
  return `${styleSheet.options.classNamePrefix}-${rule.key}`
}

export const Story = ({ Chapter, initialItem }) => {
  const [item, setItem] = useState(initialItem || {})
  const [transient, setTransient] = useDebouncedState({})
  const [delta, setDelta] = useState({})
  const [errors, setErrors] = useState({})

  const handleItemEdited = useCallback(it => {
    setItem(it)
  }, [])

  const innerStory = (
    <Root>
      <Chapter
        item={item}
        onItem={setItem}
        onTransient={setTransient}
        onDelta={setDelta}
        onErrors={setErrors}
      />
      <Divider />
      <StoryItem
        item={item}
        transient={transient}
        delta={delta}
        errors={errors}
        onItemEdited={handleItemEdited}
      />
    </Root>
  )
  if (process.env.NODE_ENV === 'test') {
    return (
      <StylesProvider
        generateClassName={
          process.env.NODE_ENV === 'test' ? generateClassName : undefined
        }
      >
        {innerStory}
      </StylesProvider>
    )
  }
  return innerStory
}
