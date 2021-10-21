// eslint-disable-next-line import/no-unresolved
import ExampleSource from '!!raw-loader!./index-example.js'
import { addParameters } from '@storybook/react'
import {} from 'prismjs/components/prism-clike'
import { highlight, languages } from 'prismjs/components/prism-core'
import {} from 'prismjs/components/prism-javascript'
import {} from 'prismjs/components/prism-jsx'
import {} from 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-coy.css'
import React from 'react'
import styled from 'styled-components'
import { version } from '../packages/core/package.json'
import { ExampleCorn } from './index-example'

addParameters({ options: { showPanel: false } })

export default {
  title: 'Home',
  parameters: {
    options: { showPanel: false },
  },
}

const Root = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 800px;
  margin: auto;
`
const Header = styled.header`
  display: flex;
`
const CornLogo = styled.span`
  font-size: 5em;
  margin: 0.25em;
`
const Title = styled.h1`
  font-size: 4em;
  display: flex;
  flex-direction: column;
`
const Version = styled.strong`
  font-size: 0.33em;
  color: hsl(0, 0%, 25%);
`

const SubTitle = styled.small`
  font-size: 0.25em;
  color: hsl(0, 0%, 50%);
`

const List = styled.ul`
  list-style: circle;
  margin-left: 8em;
`
const Item = styled.li`
  margin: 0.5em 0;
`
const Section = styled.section`
  margin: 1em;
`
const SectionTitle = styled.h2`
  margin-left: -1em;
  font-size: 2em;
`
const Code = styled.code`
  display: block;
  white-space: pre-wrap;
  background-color: hsl(0, 0%, 96%);
  padding: 1em;
  margin: 1.5em;

  .token.operator {
    background-color: transparent;
  }
`

const MoreSpace = styled.div`
  height: 150;
`

export const Index = () => {
  return (
    <Root>
      <Header>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <CornLogo role="img">🌽</CornLogo>
        <Title>
          <div>
            react-corn <Version>{version}</Version>
          </div>
          <SubTitle>
            Controlled forms with hooks for advanced object editing.
          </SubTitle>
        </Title>
      </Header>
      <List>
        <Item>Lightweight core</Item>
        <Item>Advanced forms features for complex object editing</Item>
        <Item>Minimal but efficient styling with @react-corn/simple</Item>
        <Item>Easy integration with ui libs @react-corn/mui</Item>
        <Item>Easy integration with external form components</Item>
      </List>
      <Section>
        <SectionTitle>Installation</SectionTitle>
        <Code>$ yarn add @react-corn/core @react-corn/simple</Code>
        Or for material-ui integration:
        <Code>$ yarn add @react-corn/core @react-corn/mui</Code>
      </Section>
      <Section>
        <SectionTitle>Usage</SectionTitle>
        Typical usage should be as simple as:
        <Code
          dangerouslySetInnerHTML={{
            __html: highlight(ExampleSource, languages.jsx),
          }}
        />
        Resulting in:
        <ExampleCorn />
      </Section>
      <Section>
        <SectionTitle>Features</SectionTitle>
        Browse the storybook to the left to see more features in action. You can
        read any story source by pressing «&nbsp;A&nbsp;».
      </Section>
      <Section>
        <SectionTitle>Contribute</SectionTitle>
        This library is licensed under the MIT license. Please have a look at
        the source on{' '}
        <a href="https://github.com/paradoxxxzero/react-corn">github</a>.
      </Section>
      <MoreSpace />
    </Root>
  )
}
