import{a as e,j as m,u as y,p as x}from"./bundle.esm-866780ab.js";import{Quill as T}from"./bundle.esm-af1de7b1.js";import{T as C,N as B,S as O,B as v}from"./bundle.esm-f2769dc9.js";import{P as f}from"./prism-855b1552.js";import{r as d}from"./index-f1f749bf.js";import{s as w}from"./styled-components.browser.esm-f779b45b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./isEqual-f10db94b.js";import"./_baseIsEqual-48836dd4.js";import"./_getTag-6b57983a.js";const p=r=>f.highlight(r,f.languages.json,"json"),L={text:"text",int:84,html:"<p>H<strong>T</strong><u>M</u><em>L</em></p>",select:1/0},j={one:"I",two:"II",three:"III",four:"IV",five:"V"},q=w.ul`
  list-style: none;
  overflow: auto;
  max-height: 300px;
`,D=w.li`
  margin: 0.5em;
  > div {
    margin-left: 1em;
    font-size: 13px;
    font-family: 'Fira Code', monospace;
  }
`,N=d.memo(function({changes:a}){return e(q,{children:a.slice().reverse().map(({stamp:t,type:o,newItem:c,errors:n})=>m(D,{children:[e("small",{children:t.toISOString().split("T")[1].replace("Z","")})," ","- ",e("strong",{children:o}),e("div",{dangerouslySetInnerHTML:{__html:"<i> item: </i>"+p(JSON.stringify(c))}}),e("div",{dangerouslySetInnerHTML:{__html:"<i> errors: </i>"+p(JSON.stringify(n))}})]},t.getTime()))})}),R={display:"inline-block"},l=()=>{const[r,a]=d.useState(L),[t,o]=d.useState([]),{form:c,field:n,modified:h,onReset:S}=y({item:r,onSubmit:i=>{window.confirm(`You submitted "${Object.values(i).join(", ")}"`)&&a(i)},onChange:(i,s,u)=>{o([...t,{stamp:new Date,type:"change",newItem:i,itemDiff:s,errors:u}])},onBlur:(i,s,u)=>{o([...t,{stamp:new Date,type:"blur",newItem:i,itemDiff:s,errors:u}])}});return m(x,{children:[m("form",{...c,children:[e(C,{required:!0,...n("text"),children:"Text"}),e(B,{required:!0,...n("int"),children:"Number"}),e(T,{style:R,required:!0,...n("html"),children:"HTML"}),e(O,{required:!0,choices:j,...n("select"),children:"Select"}),e("div",{style:{width:"100%"}}),m(v,{children:[e("button",{disabled:!h,children:"Submit"}),e("button",{type:"button",disabled:!h,onClick:S,children:"Reset"})]})]}),e(N,{changes:t})]})},$={title:"Sandbox/onBlur-onChange-test",parameters:{options:{showPanel:!1}}};var g,b,I;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [item, setItem] = useState(initialItem);
  const [changes, setChanges] = useState([]);
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
    },
    onChange: (newItem, itemDiff, errors) => {
      setChanges([...changes, {
        stamp: new Date(),
        type: 'change',
        newItem,
        itemDiff,
        errors
      }]);
    },
    onBlur: (newItem, itemDiff, errors) => {
      setChanges([...changes, {
        stamp: new Date(),
        type: 'blur',
        newItem,
        itemDiff,
        errors
      }]);
    }
  });
  return <>
      <form {...form}>
        <Text required {...field(\`text\`)}>
          Text
        </Text>
        <Number required {...field(\`int\`)}>
          Number
        </Number>
        <Quill style={inlineBlock} required {...field(\`html\`)}>
          HTML
        </Quill>
        <Select required choices={choices} {...field(\`select\`)}>
          Select
        </Select>

        <div style={{
        width: '100%'
      }} />
        <ButtonRow>
          <button disabled={!modified}>Submit</button>
          <button type="button" disabled={!modified} onClick={onReset}>
            Reset
          </button>
        </ButtonRow>
      </form>
      <Log changes={changes} />
    </>;
}`,...(I=(b=l.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const z=["OnChangeOnBlurTest"];export{l as OnChangeOnBlurTest,z as __namedExportsOrder,$ as default};
//# sourceMappingURL=onBlur-onChange-test.stories-611acc8d.js.map
