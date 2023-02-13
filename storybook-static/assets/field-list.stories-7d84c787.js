import{u as w,j as o,a as t}from"./bundle.esm-866780ab.js";import{L as A,A as L}from"./bundle.esm-abdf4d1b.js";import{B as O}from"./bundle.esm-f2769dc9.js";import{r as c}from"./index-f1f749bf.js";import{s}from"./styled-components.browser.esm-f779b45b.js";import{c as P,s as z,m as M}from"./fields-28a76a27.js";import{S as R}from"./Story-d2591278.js";import"./_commonjsHelpers-042e6b4d.js";import"./bundle.esm-32557132.js";import"./createTheme-d1a7bf13.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./assertThisInitialized-e784747a.js";import"./index-96c5f47c.js";import"./Button-d4c72dc6.js";import"./prism-855b1552.js";const k={title:"Sandbox/field-list",parameters:{options:{showPanel:!0}}},U=s.form`
  display: flex;
  flex-wrap: wrap;
`,B=s.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  label {
    input,
    select,
    textarea {
      margin: 0.5em;
    }
  }
`,_=s.div``,$=s.div`
  .MuiFormControl-root {
    display: block;
    margin: 1em;
  }
`,m={Red:"#ff0000",Yellow:"#ffff00",Olive:"#808000",Lime:"#00ff00",Green:"#008000",Aqua:"#00ffff",Teal:"#008080",Blue:"#0000ff",Navy:"#000080",Fuchsia:"#ff00ff",Purple:"#800080"},d=l=>l.replace(/\b\w/,i=>i.toUpperCase()),I=c.memo(({item:l,onItem:i,onTransient:p,onDelta:f,onErrors:h})=>{const v=c.useCallback((e,r,j)=>{p(e),h(j)},[h,p]),x=c.useCallback((e,r)=>{i(e),f(r)},[f,i]),{form:F,field:n,modified:u,onReset:g}=w({item:l,onChange:v,onSubmit:x});return o(U,{...F,children:[o(B,{children:[t("h1",{children:"Core"}),Object.entries(P).map(([e,r])=>o("label",{children:["Core ",d(e),t(r,{choices:e==="select"?m:void 0,...n(`core.${e}`)})]},e))]}),o(_,{children:[t("h1",{children:"Simple"}),Object.entries(z).map(([e,r])=>o(r,{choices:e==="select"?m:void 0,...n(`simple.${e}`),children:["Simple ",d(e)]},e))]}),o($,{children:[t("h1",{children:"MaterialUI"}),Object.entries(M).map(([e,r])=>o(r,{choices:e==="select"?m:void 0,...n(`mui.${e}`),children:["Material-UI ",d(e)]},e))]}),o(O,{children:[t("button",{disabled:!u,children:"Submit"}),t("button",{type:"button",disabled:!u,onClick:g,children:"Reset"})]})]})}),a=()=>t(A,{dateAdapter:L,children:t(R,{Chapter:I})});var b,C,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Story Chapter={CornForm} />
    </LocalizationProvider>;
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const ee=["CornStory"];export{a as CornStory,ee as __namedExportsOrder,k as default};
//# sourceMappingURL=field-list.stories-7d84c787.js.map
