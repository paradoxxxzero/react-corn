import{u as I,j as s,a as t}from"./bundle.esm-866780ab.js";import{P as C}from"./prism-855b1552.js";import{s as a}from"./styled-components.browser.esm-f779b45b.js";import{T as E,S as R}from"./bundle.esm-f2769dc9.js";import{R as A,r as B}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(n){var d=n.util.clone(n.languages.javascript),g=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,S=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function p(e,r){return e=e.replace(/<S>/g,function(){return g}).replace(/<BRACES>/g,function(){return S}).replace(/<SPREAD>/g,function(){return l}),RegExp(e,r)}l=p(l).source,n.languages.jsx=n.languages.extend("markup",d),n.languages.jsx.tag.pattern=p(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=d.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:p(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:p(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var c=function(e){return e?typeof e=="string"?e:typeof e.content=="string"?e.content:e.content.map(c).join(""):""},y=function(e){for(var r=[],i=0;i<e.length;i++){var o=e[i],T=!1;if(typeof o!="string"&&(o.type==="tag"&&o.content[0]&&o.content[0].type==="tag"?o.content[0].content[0].content==="</"?r.length>0&&r[r.length-1].tagName===c(o.content[0].content[1])&&r.pop():o.content[o.content.length-1].content==="/>"||r.push({tagName:c(o.content[0].content[1]),openedBraces:0}):r.length>0&&o.type==="punctuation"&&o.content==="{"?r[r.length-1].openedBraces++:r.length>0&&r[r.length-1].openedBraces>0&&o.type==="punctuation"&&o.content==="}"?r[r.length-1].openedBraces--:T=!0),(T||typeof o=="string")&&r.length>0&&r[r.length-1].openedBraces===0){var u=c(o);i<e.length-1&&(typeof e[i+1]=="string"||e[i+1].type==="plain-text")&&(u+=c(e[i+1]),e.splice(i+1,1)),i>0&&(typeof e[i-1]=="string"||e[i-1].type==="plain-text")&&(u=c(e[i-1])+u,e.splice(i-1,1),i--),e[i]=new n.Token("plain-text",u,null,u)}o.content&&typeof o.content!="string"&&y(o.content)}};n.hooks.add("after-tokenize",function(e){e.language!=="jsx"&&e.language!=="tsx"||y(e.tokens)})})(Prism);const L="1.7.0";window.React=A;const O={name:"John"},z=()=>{const n=B.useCallback(l=>alert(JSON.stringify(l)),[]),{form:d,field:g,modified:S}=I({item:O,onSubmit:n});return s("form",{...d,children:[t(E,{required:!0,...g("name"),children:"What’s your name?"}),t(R,{choices:{One:1,Two:2,Three:3},...g("number-select"),children:"Choose a number:"}),t("button",{disabled:!S,children:"Submit"})]})},G={title:"Home",parameters:{options:{showPanel:!1}}},M=a.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 800px;
  margin: auto;
`,$=a.header`
  display: flex;
`,_=a.span`
  font-size: 5em;
  margin: 0.25em;
`,H=a.h1`
  font-size: 4em;
  display: flex;
  flex-direction: column;
`,J=a.strong`
  font-size: 0.33em;
  color: hsl(0, 0%, 25%);
`,N=a.small`
  font-size: 0.25em;
  color: hsl(0, 0%, 50%);
`,q=a.ul`
  list-style: circle;
  margin-left: 8em;
`,m=a.li`
  margin: 0.5em 0;
`,f=a.section`
  margin: 1em;
`,h=a.h2`
  margin-left: -1em;
  font-size: 2em;
`,x=a.code`
  display: block;
  white-space: pre-wrap;
  background-color: hsl(0, 0%, 96%);
  padding: 1em;
  margin: 1.5em;

  .token.operator {
    background-color: transparent;
  }
`,D=a.div`
  height: 150;
`,b=()=>s(M,{children:[s($,{children:[t(_,{role:"img",children:"🌽"}),s(H,{children:[s("div",{children:["react-corn ",t(J,{children:L})]}),t(N,{children:"Controlled forms with hooks for advanced object editing."})]})]}),s(q,{children:[t(m,{children:"Lightweight core"}),t(m,{children:"Advanced forms features for complex object editing"}),t(m,{children:"Minimal but efficient styling with @react-corn/simple"}),t(m,{children:"Easy integration with ui libs @react-corn/mui"}),t(m,{children:"Easy integration with external form components"})]}),s(f,{children:[t(h,{children:"Installation"}),t(x,{children:"$ yarn add @react-corn/core @react-corn/simple"}),"Or for material-ui integration:",t(x,{children:"$ yarn add @react-corn/core @react-corn/mui"})]}),s(f,{children:[t(h,{children:"Usage"}),"Typical usage should be as simple as:",t(x,{dangerouslySetInnerHTML:{__html:C.highlight(`
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
              }
              `,C.languages.jsx,"jsx")}}),"Resulting in:",t(z,{})]}),s(f,{children:[t(h,{children:"Features"}),"Browse the storybook to the left to see more features in action. You can read any story source by pressing « A »."]}),s(f,{children:[t(h,{children:"Contribute"}),"This library is licensed under the MIT license. Please have a look at the source on"," ",t("a",{href:"https://github.com/paradoxxxzero/react-corn",children:"github"}),"."]}),t(D,{})]});var w,j,v;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
        __html: Prism.highlight(\`
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
              }
              \`, Prism.languages.jsx, 'jsx')
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
}`,...(v=(j=b.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const K=["Index"];export{b as Index,K as __namedExportsOrder,G as default};
//# sourceMappingURL=-index.stories-95da6b3c.js.map
