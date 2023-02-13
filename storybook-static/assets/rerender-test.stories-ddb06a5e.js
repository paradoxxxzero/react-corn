import{u as h,j as m,a as r}from"./bundle.esm-866780ab.js";import{Quill as C}from"./bundle.esm-af1de7b1.js";import{T as x,N as w,S as I,B as S}from"./bundle.esm-f2769dc9.js";import{r as u}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./isEqual-f10db94b.js";import"./_baseIsEqual-48836dd4.js";import"./_getTag-6b57983a.js";import"./styled-components.browser.esm-f779b45b.js";const T={text:"text",int:84,html:"<p>H<strong>T</strong><u>M</u><em>L</em></p>",select:1/0},j={one:"I",two:"II",three:"III",four:"IV",five:"V"},i=d=>u.memo(({children:c,...e})=>{const t=u.useRef(0),o=u.useRef(e),l=Object.keys(o.current).concat(Object.keys(e)).filter((n,a,p)=>p.indexOf(n)===a).filter(n=>o.current[n]!==e[n]);return o.current=e,t.current++,m(d,{...e,children:[c,"[render count: ",t.current," (",l.join(", "),")]"]})}),y=i(x),q=i(w),B=i(C),N=i(I),k=i(S),O={display:"inline-block"},s=()=>{const[d,c]=u.useState(T),{form:e,field:t,modified:o,onReset:l}=h({item:d,onSubmit:n=>{window.confirm(`You submitted "${Object.values(n).join(", ")}"`)&&c(n)}});return m("form",{...e,children:[r(y,{required:!0,...t("text"),children:"Text"}),r(q,{required:!0,...t("int"),children:"Number"}),r(B,{style:O,required:!0,...t("html"),children:"HTML"}),r(N,{required:!0,choices:j,...t("select"),children:"Select"}),r("div",{style:{width:"100%"}}),m(k,{children:[r("button",{disabled:!o,children:"Submit"}),r("button",{type:"button",disabled:!o,onClick:l,children:"Reset"})]})]})},Y={title:"Sandbox/rerender-test",parameters:{options:{showPanel:!1}}};var f,R,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [item, setItem] = useState(initialItem);
  const {
    form,
    field,
    modified,
    onReset
  } = useCorn({
    item,
    onSubmit: newItem => {
      const accepted = window.confirm(\`You submitted "\${Object.values(newItem).join(', ')}"\`);
      accepted && setItem(newItem);
    }
  });
  return <form {...form}>
      <TextRenderCount required {...field(\`text\`)}>
        Text
      </TextRenderCount>
      <NumberRenderCount required {...field(\`int\`)}>
        Number
      </NumberRenderCount>
      <QuillRenderCount style={inlineBlock} required {...field(\`html\`)}>
        HTML
      </QuillRenderCount>
      <SelectRenderCount required choices={choices} {...field(\`select\`)}>
        Select
      </SelectRenderCount>

      <div style={{
      width: '100%'
    }} />
      <ButtonRowRenderCount>
        <button disabled={!modified}>Submit</button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRowRenderCount>
    </form>;
}`,...(b=(R=s.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};const $=["ReRenderTest"];export{s as ReRenderTest,$ as __namedExportsOrder,Y as default};
//# sourceMappingURL=rerender-test.stories-ddb06a5e.js.map
