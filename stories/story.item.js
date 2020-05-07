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

const Object = styled.div`
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
const Title = styled.h4`
  margin: 0.25em;
`
const Mute = styled.small`
  color: rgba(0, 0, 0, 0.2);
`

const highlightJson = code => highlight(code, languages.json)

const ObjectEditor = ({ item, readOnly, onItemEdited, children }) => {
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
    !readOnly &&
      onItemEdited(it => {
        try {
          const parsed = JSON.parse(strItem)
          setSyntaxError(false)
          return parsed
        } catch (e) {
          setSyntaxError(true)
        }
        return it
      })
  }, [readOnly, onItemEdited, strItem])

  const reprettify = useCallback(() => {
    setStrItem(oldStr => {
      return prettyJson(JSON.parse(oldStr))
    })
  }, [])
  return (
    <ObjectWithTitle syntaxError={syntaxError}>
      <Title>{children}</Title>
      <Object syntaxError={syntaxError}>
        <Editor
          readOnly={readOnly}
          value={strItem}
          onValueChange={setStrItem}
          onBlur={reprettify}
          highlight={highlightJson}
        />
      </Object>
    </ObjectWithTitle>
  )
}

export const prettyJson = json => JSON.stringify(json, null, 2)
export default function StoryItem({ item, transient, onItemEdited }) {
  return (
    <Objects>
      <ObjectEditor item={transient} readOnly highlight={highlightJson}>
        Transient item <Mute>(onChange)</Mute>
      </ObjectEditor>
      <ObjectEditor item={item} onItemEdited={onItemEdited}>
        Item <Mute>(onSubmit)</Mute>
      </ObjectEditor>
    </Objects>
  )
}
