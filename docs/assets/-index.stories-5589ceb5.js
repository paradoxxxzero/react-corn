import{u as g,j as o,a as e}from"./bundle.esm-afd8ca76.js";import{s as t}from"./styled-components.browser.esm-f779b45b.js";import{h as S}from"./highlight-5656cd5b.js";import{T as x,S as y}from"./bundle.esm-6042a324.js";import{r as T}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const C="1.8.1",I={name:"John"},h=()=>{const u=T.useCallback(b=>alert(JSON.stringify(b)),[]),{form:f,field:a,modified:p}=g({item:I,onSubmit:u});return o("form",{...f,children:[e(x,{required:!0,...a("name"),children:"What’s your name?"}),e(y,{choices:{One:1,Two:2,Three:3},...a("number-select"),children:"Choose a number:"}),e("button",{disabled:!p,children:"Submit"})]})};h.__docgenInfo={description:"",methods:[],displayName:"ExampleCorn"};const A={title:"Home",parameters:{options:{showPanel:!1}}},w=t.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 800px;
  margin: auto;
`,k=t.header`
  display: flex;
`,v=t.span`
  font-size: 5em;
  margin: 0.25em;
`,j=t.h1`
  font-size: 4em;
  display: flex;
  flex-direction: column;
`,E=t.strong`
  font-size: 0.33em;
  color: hsl(0, 0%, 25%);
`,_=t.small`
  font-size: 0.25em;
  color: hsl(0, 0%, 50%);
`,L=t.ul`
  list-style: circle;
  margin-left: 8em;
`,r=t.li`
  margin: 0.5em 0;
`,n=t.section`
  margin: 1em;
`,s=t.h2`
  margin-left: -1em;
  font-size: 2em;
`,c=t.code`
  display: block;
  white-space: pre-wrap;
  background-color: hsl(0, 0%, 96%);
  padding: 1em;
  margin: 1.5em;

  .token.operator {
    background-color: transparent;
  }
`,O=t.div`
  height: 150;
`,i=()=>o(w,{children:[o(k,{children:[e(v,{role:"img",children:"🌽"}),o(j,{children:[o("div",{children:["react-corn ",e(E,{children:C})]}),e(_,{children:"Controlled forms with hooks for advanced object editing."})]})]}),o(L,{children:[e(r,{children:"Lightweight core"}),e(r,{children:"Advanced forms features for complex object editing"}),e(r,{children:"Minimal but efficient styling with @react-corn/simple"}),e(r,{children:"Easy integration with ui libs @react-corn/mui"}),e(r,{children:"Easy integration with external form components"})]}),o(n,{children:[e(s,{children:"Installation"}),e(c,{children:"$ yarn add @react-corn/core @react-corn/simple"}),"Or for material-ui integration:",e(c,{children:"$ yarn add @react-corn/core @react-corn/mui"})]}),o(n,{children:[e(s,{children:"Usage"}),"Typical usage should be as simple as:",e(c,{dangerouslySetInnerHTML:{__html:S(`import { useCorn } from '@react-corn/core'
import { Select, Text } from '@react-corn/simple'
import { useCallback } from 'react'

const item = {
  name: 'John',
}

export const ExampleCorn = () => {
  const onSubmit = useCallback(newItem => alert(JSON.stringify(newItem)), [])

  const { form, field, modified } = useCorn({ item, onSubmit })

  return (
    <form {...form}>
      <Text required {...field('name')}>
        What’s your name?
      </Text>

      <Select
        choices={{ One: 1, Two: 2, Three: 3 }}
        {...field('number-select')}
      >
        Choose a number:
      </Select>

      <button disabled={!modified}>Submit</button>
    </form>
  )
}`,"jsx")}}),"Resulting in:",e(h,{})]}),o(n,{children:[e(s,{children:"Features"}),"Browse the storybook to the left to see more features in action. You can read any story source by pressing « A »."]}),o(n,{children:[e(s,{children:"Contribute"}),"This library is licensed under the MIT license. Please have a look at the source on"," ",e("a",{href:"https://github.com/paradoxxxzero/react-corn",children:"github"}),"."]}),e(O,{})]});var l,m,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Root>
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
        <Code dangerouslySetInnerHTML={{
        __html: highlight(\`\\
import { useCorn } from '@react-corn/core'
import { Select, Text } from '@react-corn/simple'
import { useCallback } from 'react'

const item = {
  name: 'John',
}

export const ExampleCorn = () => {
  const onSubmit = useCallback(newItem => alert(JSON.stringify(newItem)), [])

  const { form, field, modified } = useCorn({ item, onSubmit })

  return (
    <form {...form}>
      <Text required {...field('name')}>
        What’s your name?
      </Text>

      <Select
        choices={{ One: 1, Two: 2, Three: 3 }}
        {...field('number-select')}
      >
        Choose a number:
      </Select>

      <button disabled={!modified}>Submit</button>
    </form>
  )
}\`, 'jsx')
      }} />
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
    </Root>;
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};i.__docgenInfo={description:"",methods:[],displayName:"Index"};const $=["Index"];export{i as Index,$ as __namedExportsOrder,A as default};
//# sourceMappingURL=-index.stories-5589ceb5.js.map
