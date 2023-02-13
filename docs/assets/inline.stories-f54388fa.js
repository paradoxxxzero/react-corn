import{a as i,u as F,j as s}from"./bundle.esm-afd8ca76.js";import{L as C,A as S}from"./bundle.esm-8c2a32ef.js";import{n as j}from"./bundle.esm-343362ed.js";import{I as x,B as A}from"./bundle.esm-6042a324.js";import{s as p}from"./styled-components.browser.esm-f779b45b.js";import{s as f,m as $}from"./fields-f2efc33c.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./createTheme-d1a7bf13.js";import"./Button-23a313bf.js";import"./assertThisInitialized-e784747a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./index-96c5f47c.js";const H={title:"Sandbox/inline",parameters:{options:{showPanel:!0}}},I=p.form`
  display: flex;
  flex-wrap: wrap;
`,O=p.div``,w=p.div`
  .MuiFormControl-root {
    display: block;
    margin: 1em;
  }
`,l={Red:"#ff0000",Yellow:"#ffff00",Olive:"#808000",Lime:"#00ff00",Green:"#008000",Aqua:"#00ffff",Teal:"#008080",Blue:"#0000ff",Navy:"#000080",Fuchsia:"#ff00ff",Purple:"#800080"},u=(...c)=>c.reduce((e,a)=>e.flatMap(m=>a.map(o=>[m,o].flat()))),L={},P=()=>{const{form:c,field:e,modified:a,onReset:m}=F({item:L});return s(I,{...c,children:[s(O,{children:[i("h1",{children:"Simple"}),u(Object.entries(f),Object.entries(f)).filter(([o,,t])=>o!==t).map(([o,t,r,d])=>s(x,{children:[i(t,{choices:o==="select"?l:void 0,...e(`simple.${o}-of-${o}--${r}`),children:o},`simple.${o}-of-${o}--${r}`),i(d,{choices:r==="select"?l:void 0,...e(`simple.${r}-of-${o}--${r}`),children:r},`simple.${r}-of-${o}--${r}`)]},`${o}--${r}`))]}),s(w,{children:[i("h1",{children:"MaterialUI"}),u(Object.entries($),Object.entries($)).filter(([o,,t])=>o!==t).map(([o,t,r,d])=>s(j,{children:[i(t,{choices:o==="select"?l:void 0,...e(`mui.${o}-of-${o}--${r}`),children:o},`mui.${o}-of-${o}--${r}`),i(d,{choices:r==="select"?l:void 0,...e(`mui.${r}-of-${o}--${r}`),children:r},`mui.${r}-of-${o}--${r}`)]},`${o}--${r}`))]}),s(A,{children:[i("button",{disabled:!a,children:"Submit"}),i("button",{type:"button",disabled:!a,onClick:m,children:"Reset"})]})]})},n=()=>i(C,{dateAdapter:S,children:i(P,{})});var h,b,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CornForm />
    </LocalizationProvider>;
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};n.__docgenInfo={description:"",methods:[],displayName:"CornStory"};const J=["CornStory"];export{n as CornStory,J as __namedExportsOrder,H as default};
//# sourceMappingURL=inline.stories-f54388fa.js.map
