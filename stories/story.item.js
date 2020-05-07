import 'prismjs/themes/prism-coy.css'

import { highlight, languages } from 'prismjs/components/prism-core'
import {} from 'prismjs/components/prism-json'
import React, { useCallback, useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor'
import styled from 'styled-components'

const Objects = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ObjectWithTitle = styled.div`
  flex: 1;
  margin: 0.5em;
`

const EditorContainer = styled.div`
  padding: 0.5em;
  color: ${props => (props.syntaxError ? 'red' : 'black')};
  background-color: ${props =>
    props.syntaxError ? 'rgba(255, 0, 0, 0.025)' : 'inherit'};

  pre {
    font-family: Menlo, monospace;
    font-size: 11px;
  }

  textarea {
    outline: none;
  }
`
const Icon = styled.span`
  font-size: 1.5em;
  font-weight: normal;
`

const Title = styled.h4`
  margin: 0.25em;
`

const Mute = styled.small`
  color: rgba(0, 0, 0, 0.2);
`

const highlightJson = code => highlight(code, languages.json)

const Object = ({ item, onItemEdited, children }) => {
  const [strItem, setStrItem] = useState(prettyJson(item))
  const [syntaxError, setSyntaxError] = useState(false)

  useEffect(() => {
    setStrItem(oldStr => {
      const newStr = prettyJson(item)

      if (newStr !== prettyJson(JSON.parse(oldStr))) {
        return newStr
      }

      return oldStr
    })
  }, [item])

  useEffect(() => {
    if (!onItemEdited) {
      return
    }
    try {
      const parsed = JSON.parse(strItem)
      setSyntaxError(false)
      onItemEdited(parsed)
    } catch (e) {
      setSyntaxError(true)
    }
  }, [onItemEdited, strItem])

  const reprettify = useCallback(() => {
    setStrItem(oldStr => {
      return prettyJson(JSON.parse(oldStr))
    })
  }, [])
  return (
    <ObjectWithTitle syntaxError={syntaxError}>
      <Title>
        {children}
        {onItemEdited && <Icon> &#128393;</Icon>}
      </Title>
      <EditorContainer syntaxError={syntaxError}>
        <Editor
          readOnly={!onItemEdited}
          value={strItem}
          onValueChange={setStrItem}
          onBlur={reprettify}
          highlight={highlightJson}
        />
      </EditorContainer>
    </ObjectWithTitle>
  )
}

export const prettyJson = json => JSON.stringify(json, null, 2)
export default function StoryItem({
  item,
  transient,
  delta,
  errors,
  onItemEdited,
}) {
  return (
    <Objects>
      <Object item={transient}>
        Transient item <Mute>(onChange)</Mute>
      </Object>
      <Object item={errors}>
        Current errors <Mute>(onChange)</Mute>
      </Object>
      <Object item={item} onItemEdited={onItemEdited}>
        Item <Mute>(onSubmit)</Mute>
      </Object>
      <Object item={delta}>
        Delta <Mute>(onSubmit)</Mute>
      </Object>
    </Objects>
  )
}
