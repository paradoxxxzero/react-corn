import{u as x,j as F,a as t,P as u}from"./bundle.esm-afd8ca76.js";import{a5 as d}from"./bundle.esm-343362ed.js";import{P as h}from"./bundle.esm-6042a324.js";import{r as o}from"./index-f1f749bf.js";import{F as _,B as C}from"./muiForm-4aedca28.js";import{S as g}from"./Story-1c52c0f8.js";import"./createTheme-d1a7bf13.js";import"./extends-98964cd2.js";import"./styled-components.browser.esm-f779b45b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./assertThisInitialized-e784747a.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-23a313bf.js";import"./highlight-5656cd5b.js";const M={title:"Overview/multiple",parameters:{options:{showPanel:!0}}},r={Africa:"AF",Antarctica:"AN",Asia:"AS",Europe:"EU","North America":"NA","Australia/Oceania":"AU","South America":"SA"},N=o.memo(({item:y,onItem:c,onTransient:s,onDelta:a,onErrors:m})=>{const b=o.useCallback((l,p,i)=>{s(l),m(i)},[m,s]),E=o.useCallback((l,p,i)=>{c(i),a(p)},[a,c]),{form:k,field:e,modified:P,onReset:U}=x({item:y,onChange:b,onSubmit:E});return F(_,{...k,children:[t("h2",{children:"core"}),t(u,{choices:r,...e("continent")}),t(u,{multiple:!0,choices:r,required:!0,...e("continents")}),t("h2",{children:"simple"}),t(h,{choices:r,...e("continent"),children:"Continent"}),t(h,{multiple:!0,choices:r,required:!0,...e("continents"),children:"Continents"}),t("h2",{children:"mui"}),t(d,{choices:r,...e("continent"),children:"Continent"}),t(d,{multiple:!0,choices:r,required:!0,...e("continents"),children:"Continents"}),t(C,{type:"submit",disabled:!P,color:"primary",variant:"contained",children:"Submit"}),t(C,{onClick:U,children:"Reset"})]})}),n=()=>t(g,{Chapter:N,initialItem:{continent:"EU",continents:["EU","AS","SA"]}});var S,A,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Story Chapter={CornForm} initialItem={{
    continent: 'EU',
    continents: ['EU', 'AS', 'SA']
  }} />;
}`,...(f=(A=n.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};n.__docgenInfo={description:"",methods:[],displayName:"CornStory"};const Q=["CornStory"];export{n as CornStory,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=multiple.stories-4826d134.js.map