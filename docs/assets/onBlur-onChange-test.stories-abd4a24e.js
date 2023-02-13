import{a as e,j as m,u as S,p as y}from"./bundle.esm-afd8ca76.js";import{Quill as x}from"./bundle.esm-c196e5ad.js";import{T,N as C,S as B,B as O}from"./bundle.esm-6042a324.js";import{r as d}from"./index-f1f749bf.js";import{s as I}from"./styled-components.browser.esm-f779b45b.js";import{h as f}from"./highlight-5656cd5b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./isEqual-f10db94b.js";import"./_baseIsEqual-48836dd4.js";import"./_getTag-6b57983a.js";const v={text:"text",int:84,html:"<p>H<strong>T</strong><u>M</u><em>L</em></p>",select:1/0},L={one:"I",two:"II",three:"III",four:"IV",five:"V"},j=I.ul`
  list-style: none;
  overflow: auto;
  max-height: 300px;
`,N=I.li`
  margin: 0.5em;
  > div {
    margin-left: 1em;
    font-size: 13px;
    font-family: 'Fira Code', monospace;
  }
`,_=d.memo(function({changes:l}){return e(j,{children:l.slice().reverse().map(({stamp:t,type:o,newItem:a,errors:n})=>m(N,{children:[e("small",{children:t.toISOString().split("T")[1].replace("Z","")})," ","- ",e("strong",{children:o}),e("div",{dangerouslySetInnerHTML:{__html:"<i> item: </i>"+f(JSON.stringify(a),"json")}}),e("div",{dangerouslySetInnerHTML:{__html:"<i> errors: </i>"+f(JSON.stringify(n),"json")}})]},t.getTime()))})}),q={display:"inline-block"},r=()=>{const[u,l]=d.useState(v),[t,o]=d.useState([]),{form:a,field:n,modified:h,onReset:w}=S({item:u,onSubmit:i=>{window.confirm(`You submitted "${Object.values(i).join(", ")}"`)&&l(i)},onChange:(i,s,c)=>{o([...t,{stamp:new Date,type:"change",newItem:i,itemDiff:s,errors:c}])},onBlur:(i,s,c)=>{o([...t,{stamp:new Date,type:"blur",newItem:i,itemDiff:s,errors:c}])}});return m(y,{children:[m("form",{...a,children:[e(T,{required:!0,...n("text"),children:"Text"}),e(C,{required:!0,...n("int"),children:"Number"}),e(x,{style:q,required:!0,...n("html"),children:"HTML"}),e(B,{required:!0,choices:L,...n("select"),children:"Select"}),e("div",{style:{width:"100%"}}),m(O,{children:[e("button",{disabled:!h,children:"Submit"}),e("button",{type:"button",disabled:!h,onClick:w,children:"Reset"})]})]}),e(_,{changes:t})]})},Y={title:"Sandbox/onBlur-onChange-test",parameters:{options:{showPanel:!1}}};var p,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};r.__docgenInfo={description:"",methods:[],displayName:"OnChangeOnBlurTest"};const z=["OnChangeOnBlurTest"];export{r as OnChangeOnBlurTest,z as __namedExportsOrder,Y as default};
//# sourceMappingURL=onBlur-onChange-test.stories-abd4a24e.js.map
