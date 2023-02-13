import{a as i,u as F,j as s}from"./bundle.esm-866780ab.js";import{L as j,A as x}from"./bundle.esm-abdf4d1b.js";import{n as C}from"./bundle.esm-32557132.js";import{I as S,B as A}from"./bundle.esm-f2769dc9.js";import{s as p}from"./styled-components.browser.esm-f779b45b.js";import{s as f,m as $}from"./fields-28a76a27.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./createTheme-d1a7bf13.js";import"./Button-d4c72dc6.js";import"./assertThisInitialized-e784747a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./index-96c5f47c.js";const H={title:"Sandbox/inline",parameters:{options:{showPanel:!0}}},O=p.form`
  display: flex;
  flex-wrap: wrap;
`,w=p.div``,I=p.div`
  .MuiFormControl-root {
    display: block;
    margin: 1em;
  }
`,a={Red:"#ff0000",Yellow:"#ffff00",Olive:"#808000",Lime:"#00ff00",Green:"#008000",Aqua:"#00ffff",Teal:"#008080",Blue:"#0000ff",Navy:"#000080",Fuchsia:"#ff00ff",Purple:"#800080"},u=(...c)=>c.reduce((e,n)=>e.flatMap(m=>n.map(r=>[m,r].flat()))),L={},P=()=>{const{form:c,field:e,modified:n,onReset:m}=F({item:L});return s(O,{...c,children:[s(w,{children:[i("h1",{children:"Simple"}),u(Object.entries(f),Object.entries(f)).filter(([r,,t])=>r!==t).map(([r,t,o,d])=>s(S,{children:[i(t,{choices:r==="select"?a:void 0,...e(`simple.${r}-of-${r}--${o}`),children:r},`simple.${r}-of-${r}--${o}`),i(d,{choices:o==="select"?a:void 0,...e(`simple.${o}-of-${r}--${o}`),children:o},`simple.${o}-of-${r}--${o}`)]},`${r}--${o}`))]}),s(I,{children:[i("h1",{children:"MaterialUI"}),u(Object.entries($),Object.entries($)).filter(([r,,t])=>r!==t).map(([r,t,o,d])=>s(C,{children:[i(t,{choices:r==="select"?a:void 0,...e(`mui.${r}-of-${r}--${o}`),children:r},`mui.${r}-of-${r}--${o}`),i(d,{choices:o==="select"?a:void 0,...e(`mui.${o}-of-${r}--${o}`),children:o},`mui.${o}-of-${r}--${o}`)]},`${r}--${o}`))]}),s(A,{children:[i("button",{disabled:!n,children:"Submit"}),i("button",{type:"button",disabled:!n,onClick:m,children:"Reset"})]})]})},l=()=>i(j,{dateAdapter:x,children:i(P,{})});var h,b,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CornForm />
    </LocalizationProvider>;
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const J=["CornStory"];export{l as CornStory,J as __namedExportsOrder,H as default};
//# sourceMappingURL=inline.stories-defe0134.js.map
