import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import { useDebouncedState } from '../../src/hooks'
import StoryItem from './StoryItem'

const Root = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  min-height: 100%;

  form {
    flex: 1;
  }
`
const Divider = styled.hr`
  border-color: hsla(0, 50%, 50%, 0.1);
`

export const Story = ({ Chapter, initialItem }) => {
  const [item, setItem] = useState(initialItem)
  const [transient, setTransient] = useDebouncedState({})
  const [delta, setDelta] = useState({})
  const [errors, setErrors] = useState({})

  const handleItemEdited = useCallback(it => {
    setItem(it)
  }, [])

  return (
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
}
