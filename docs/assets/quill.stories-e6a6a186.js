import{u as v,j as i,p as H,a as e}from"./bundle.esm-866780ab.js";import{Quill as u}from"./bundle.esm-af1de7b1.js";import{b as w,B as y}from"./bundle.esm-f2769dc9.js";import{r as a}from"./index-f1f749bf.js";/* empty css                   */import{s as _}from"./styled-components.browser.esm-f779b45b.js";import{D as Q,S as R}from"./Story-d2591278.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./isEqual-f10db94b.js";import"./_baseIsEqual-48836dd4.js";import"./_getTag-6b57983a.js";import"./prism-855b1552.js";import"./createTheme-d1a7bf13.js";import"./extends-98964cd2.js";const T={toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},j=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],D=_.div`
  max-width: 30%;
  margin: 1em;
`,b=t=>t.length>250?`This field must be shorter than 250 characters html tags included (${t.length-250} extraneous chars).`:"",F=a.memo(({item:t,onItem:s,onTransient:n,onDelta:m,onErrors:d})=>{const C=a.useCallback((c,p,o)=>{n(c),d(o)},[d,n]),S=a.useCallback((c,p,o)=>{s(o),m(p)},[m,s]),{form:q,field:r,modified:h,onReset:k}=v({item:t,onChange:C,onSubmit:S});return i(H,{children:[i("form",{...q,children:[e(u,{required:!0,...r("html",b),children:"Html"}),e(w,{required:!0,...r("html",b),children:"Raw html"}),e(u,{modules:T,formats:j,...r("other-html"),children:"Custom Quill modules and formats"}),i(y,{children:[e("button",{disabled:!h,children:"Submit"}),e("button",{type:"button",disabled:!h,onClick:k,children:"Reset"})]})]}),e(Q,{}),i(D,{children:[e("h1",{children:"Generated html:"}),e("div",{dangerouslySetInnerHTML:{__html:r("html").value}})]})]})}),l=()=>e(R,{Chapter:F,initialItem:{html:"<h1>HTML Sample</h1><p><br></p><p>Here’s a simple html text in the quill editor.</p><p><br></p><p>react-corn handles simple field validation (this field has <strong>required</strong> and <em>a custom 250 characters </em>validator).</p>"}}),V={title:"@react-corn/quill",parameters:{options:{showPanel:!0}}};var f,g,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Story Chapter={CornForm} initialItem={{
    html: '<h1>HTML Sample</h1><p><br></p><p>Here’s a simple html text in the quill editor.</p><p><br></p><p>react-corn handles simple field validation (this field has <strong>required</strong> and <em>a custom 250 characters </em>validator).</p>'
  }} />;
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const W=["QuillDemo"];export{l as QuillDemo,W as __namedExportsOrder,V as default};
//# sourceMappingURL=quill.stories-e6a6a186.js.map