import{u as w,j as o,a as t}from"./bundle.esm-afd8ca76.js";import{L as A,A as L}from"./bundle.esm-8c2a32ef.js";import{B as O}from"./bundle.esm-6042a324.js";import{r as c}from"./index-f1f749bf.js";import{s}from"./styled-components.browser.esm-f779b45b.js";import{c as P,s as _,m as z}from"./fields-f2efc33c.js";import{S as M}from"./Story-1c52c0f8.js";import"./_commonjsHelpers-042e6b4d.js";import"./bundle.esm-343362ed.js";import"./createTheme-d1a7bf13.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./assertThisInitialized-e784747a.js";import"./index-96c5f47c.js";import"./Button-23a313bf.js";import"./highlight-5656cd5b.js";const k={title:"Sandbox/field-list",parameters:{options:{showPanel:!0}}},R=s.form`
  display: flex;
  flex-wrap: wrap;
`,U=s.div`
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
`,y=s.div``,B=s.div`
  .MuiFormControl-root {
    display: block;
    margin: 1em;
  }
`,m={Red:"#ff0000",Yellow:"#ffff00",Olive:"#808000",Lime:"#00ff00",Green:"#008000",Aqua:"#00ffff",Teal:"#008080",Blue:"#0000ff",Navy:"#000080",Fuchsia:"#ff00ff",Purple:"#800080"},d=l=>l.replace(/\b\w/,a=>a.toUpperCase()),I=c.memo(({item:l,onItem:a,onTransient:p,onDelta:f,onErrors:h})=>{const v=c.useCallback((e,r,j)=>{p(e),h(j)},[h,p]),x=c.useCallback((e,r)=>{a(e),f(r)},[f,a]),{form:F,field:n,modified:u,onReset:g}=w({item:l,onChange:v,onSubmit:x});return o(R,{...F,children:[o(U,{children:[t("h1",{children:"Core"}),Object.entries(P).map(([e,r])=>o("label",{children:["Core ",d(e),t(r,{choices:e==="select"?m:void 0,...n(`core.${e}`)})]},e))]}),o(y,{children:[t("h1",{children:"Simple"}),Object.entries(_).map(([e,r])=>o(r,{choices:e==="select"?m:void 0,...n(`simple.${e}`),children:["Simple ",d(e)]},e))]}),o(B,{children:[t("h1",{children:"MaterialUI"}),Object.entries(z).map(([e,r])=>o(r,{choices:e==="select"?m:void 0,...n(`mui.${e}`),children:["Material-UI ",d(e)]},e))]}),o(O,{children:[t("button",{disabled:!u,children:"Submit"}),t("button",{type:"button",disabled:!u,onClick:g,children:"Reset"})]})]})}),i=()=>t(A,{dateAdapter:L,children:t(M,{Chapter:I})});var b,C,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Story Chapter={CornForm} />
    </LocalizationProvider>;
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};i.__docgenInfo={description:"",methods:[],displayName:"CornStory"};const ee=["CornStory"];export{i as CornStory,ee as __namedExportsOrder,k as default};
//# sourceMappingURL=field-list.stories-30f13f40.js.map
