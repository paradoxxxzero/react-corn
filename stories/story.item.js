import { highlight, languages } from 'prismjs/components/prism-core'
import {} from 'prismjs/components/prism-json'
import React, { useEffect, useState } from 'react'
import Inspector, { chromeLight } from 'react-inspector'
import Editor from 'react-simple-code-editor'
import styled, { css } from 'styled-components'

const Objects = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Object = styled.div`
  margin: 1em;
  flex: 1;
  word-break: break-all;
`

const ObjectEditor = styled(Editor).withConfig({
  shouldForwardProp: prop => prop !== 'syntaxError',
})`
  margin: 1em;
  padding: 1em;
  flex: 1;
  font-family: Menlo, monospace;
  font-size: 11px;

  textarea {
    outline: none;
  }

  .token.punctuation {
    color: ${props => (props.syntaxError ? 'red' : chromeLight.BASE_COLOR)};
  }
  .token.property {
    color: ${chromeLight.OBJECT_NAME_COLOR};
  }
  ${[
    'null',
    'undefined',
    'regexp',
    'string',
    'symbol',
    'number',
    'boolean',
  ].map(
    k => css`
      .token.${k} {
        color: ${chromeLight[`OBJECT_VALUE_${k.toUpperCase()}_COLOR`]};
      }
    `
  )}
`
export default function StoryItem({ item, transient, onItemEdited }) {
  const [strItem, setStrItem] = useState(JSON.stringify(item, null, 2))
  const [syntaxError, setSyntaxError] = useState(false)

  useEffect(() => {
    onItemEdited(it => {
      if (JSON.stringify(it, null, 2) !== strItem) {
        try {
          const parsed = JSON.parse(strItem)
          setSyntaxError(false)
          return parsed
        } catch (e) {
          setSyntaxError(true)
        }
      }
      return it
    })
  }, [onItemEdited, strItem])

  return (
    <Objects>
      <Object>
        <Inspector name="Item" data={[item]} expandLevel={99} />
      </Object>
      <Object>
        <Inspector name="Transient Item" data={[transient]} expandLevel={99} />
      </Object>
      <ObjectEditor
        syntaxError={syntaxError}
        value={strItem}
        onValueChange={code => setStrItem(code)}
        highlight={code => highlight(code, languages.json)}
      />
    </Objects>
  )
}
