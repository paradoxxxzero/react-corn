import{u as h,j as m,a as r}from"./bundle.esm-afd8ca76.js";import{Quill as C}from"./bundle.esm-c196e5ad.js";import{T as x,N as I,S as w,B as S}from"./bundle.esm-6042a324.js";import{r as d}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./isEqual-f10db94b.js";import"./_baseIsEqual-48836dd4.js";import"./_getTag-6b57983a.js";import"./styled-components.browser.esm-f779b45b.js";const T={text:"text",int:84,html:"<p>H<strong>T</strong><u>M</u><em>L</em></p>",select:1/0},y={one:"I",two:"II",three:"III",four:"IV",five:"V"},s=c=>d.memo(({children:u,...e})=>{const t=d.useRef(0),o=d.useRef(e),l=Object.keys(o.current).concat(Object.keys(e)).filter((n,a,p)=>p.indexOf(n)===a).filter(n=>o.current[n]!==e[n]);return o.current=e,t.current++,m(c,{...e,children:[u,"[render count: ",t.current," (",l.join(", "),")]"]})}),j=s(x),q=s(I),N=s(C),B=s(w),k=s(S),O={display:"inline-block"},i=()=>{const[c,u]=d.useState(T),{form:e,field:t,modified:o,onReset:l}=h({item:c,onSubmit:n=>{window.confirm(`You submitted "${Object.values(n).join(", ")}"`)&&u(n)}});return m("form",{...e,children:[r(j,{required:!0,...t("text"),children:"Text"}),r(q,{required:!0,...t("int"),children:"Number"}),r(N,{style:O,required:!0,...t("html"),children:"HTML"}),r(B,{required:!0,choices:y,...t("select"),children:"Select"}),r("div",{style:{width:"100%"}}),m(k,{children:[r("button",{disabled:!o,children:"Submit"}),r("button",{type:"button",disabled:!o,onClick:l,children:"Reset"})]})]})},V={title:"Sandbox/rerender-test",parameters:{options:{showPanel:!1}}};var f,R,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(b=(R=i.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};i.__docgenInfo={description:"",methods:[],displayName:"ReRenderTest"};const Y=["ReRenderTest"];export{i as ReRenderTest,Y as __namedExportsOrder,V as default};
//# sourceMappingURL=rerender-test.stories-69aa5592.js.map
