/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCorn } from '@react-corn/core'
import { Quill } from '@react-corn/quill'
import { ButtonRow, Number, Select, Text } from '@react-corn/simple'
import Prism from 'prismjs'
import { memo, useState } from 'react';
import styled from 'styled-components'

const highlightJson = code => Prism.highlight(code, Prism.languages.json)

const initialItem = {
  text: 'text',
  int: 84,
  html: '<p>H<strong>T</strong><u>M</u><em>L</em></p>',
  select: Infinity,
}

const choices = {
  one: 'I',
  two: 'II',
  three: 'III',
  four: 'IV',
  five: 'V',
}
const List = styled.ul`
  list-style: none;
  overflow: auto;
  max-height: 300px;
`
const ListItem = styled.li`
  margin: 0.5em;
  > div {
    margin-left: 1em;
    font-size: 13px;
    font-family: 'Fira Code', monospace;
  }
`

const Log = memo(function Log({ changes }) {
  return (
    <List>
      {changes
        .slice()
        .reverse()
        .map(({ stamp, type, newItem, errors }) => (
          <ListItem key={stamp.getTime()}>
            <small>{stamp.toISOString().split('T')[1].replace('Z', '')}</small>{' '}
            - <strong>{type}</strong>
            {
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<i> item: </i>' + highlightJson(JSON.stringify(newItem)),
                }}
              />
            }
            {
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<i> errors: </i>' + highlightJson(JSON.stringify(errors)),
                }}
              />
            }
          </ListItem>
        ))}
    </List>
  )
})

const inlineBlock = { display: 'inline-block' }
export const OnChangeOnBlurTest = () => {
  const [item, setItem] = useState(initialItem)
  const [changes, setChanges] = useState([])

  const { form, field, modified, onReset } = useCorn({
    item,
    onSubmit: newItem => {
      const accepted = window.confirm(
        `You submitted "${Object.values(newItem).join(', ')}"`
      )
      accepted && setItem(newItem)
    },
    onChange: (newItem, itemDiff, errors) => {
      setChanges([
        ...changes,
        { stamp: new Date(), type: 'change', newItem, itemDiff, errors },
      ])
    },
    onBlur: (newItem, itemDiff, errors) => {
      setChanges([
        ...changes,
        { stamp: new Date(), type: 'blur', newItem, itemDiff, errors },
      ])
    },
  })

  return (
    <>
      <form {...form}>
        <Text required {...field(`text`)}>
          Text
        </Text>
        <Number required {...field(`int`)}>
          Number
        </Number>
        <Quill style={inlineBlock} required {...field(`html`)}>
          HTML
        </Quill>
        <Select required choices={choices} {...field(`select`)}>
          Select
        </Select>

        <div style={{ width: '100%' }} />
        <ButtonRow>
          <button disabled={!modified}>Submit</button>
          <button type="button" disabled={!modified} onClick={onReset}>
            Reset
          </button>
        </ButtonRow>
      </form>
      <Log changes={changes} />
    </>
  )
}

export default {
  title: 'Sandbox/onBlur-onChange-test',
  parameters: {
    options: { showPanel: false },
  },
}
