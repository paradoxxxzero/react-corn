import Prism from 'prismjs'
import { useCallback, useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor'
import styled from 'styled-components'

const Objects = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
`

const ObjectWithTitle = styled.label`
  flex: 1;
  margin: 0.5em;
`

const EditorContainer = styled.div`
  padding: 0.5em;
  color: ${props => (props.syntaxError ? 'red' : 'black')};
  background-color: ${props =>
    props.syntaxError ? 'rgba(255, 0, 0, 0.025)' : 'inherit'};

  border: ${props => (props.editable ? '1px solid hsl(0,0%,50%)' : 'none')};
  font-family: 'Fira Code', monospace;
  font-size: 13px;

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

const highlightJson = code =>
  Prism.highlight(code, Prism.languages.json, 'json')

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
        {onItemEdited && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            style={{ float: 'right' }}
          >
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        )}
      </Title>
      <EditorContainer syntaxError={syntaxError} editable={!!onItemEdited}>
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
      <Object item={item} onItemEdited={onItemEdited}>
        Item <Mute>(onSubmit)</Mute>
      </Object>
      <Object item={delta}>
        Delta <Mute>(onSubmit)</Mute>
      </Object>
      <Object item={errors}>
        Current errors <Mute>(onChange)</Mute>
      </Object>
    </Objects>
  )
}
