import{u as b,j as o,a as i}from"./bundle.esm-afd8ca76.js";import{T as w,B as x}from"./bundle.esm-6042a324.js";import{r as y}from"./index-f1f749bf.js";import"./styled-components.browser.esm-f779b45b.js";import"./_commonjsHelpers-042e6b4d.js";const c=1e3,S=Object.fromEntries(new Array(c).fill().map((r,t)=>[`field-${t}`,`value-${t}`])),e=()=>{const[r,t]=y.useState(S),{form:u,field:f,modified:d,onReset:p}=b({item:r,onSubmit:s=>{window.confirm(`You submitted "${Object.values(s).join(", ")}"`)&&t(s)}});return o("form",{...u,style:{display:"flex",flexWrap:"wrap"},children:[new Array(c).fill().map((s,n)=>o(w,{required:!0,...f(`field-${n}`),children:["Field ",n]},n)),i("div",{style:{width:"100%"}}),o(x,{children:[i("button",{disabled:!d,children:"Submit"}),i("button",{type:"button",disabled:!d,onClick:p,children:"Reset"})]})]})},_={title:"Sandbox/simple-stress-test",parameters:{options:{showPanel:!1}}};var a,l,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
  return <form {...form} style={{
    display: 'flex',
    flexWrap: 'wrap'
  }}>
      {new Array(fields).fill().map((_, i) => <Text key={i} required {...field(\`field-\${i}\`)}>
          Field {i}
        </Text>)}
      <div style={{
      width: '100%'
    }} />
      <ButtonRow>
        <button disabled={!modified}>Submit</button>
        <button type="button" disabled={!modified} onClick={onReset}>
          Reset
        </button>
      </ButtonRow>
    </form>;
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};e.__docgenInfo={description:"",methods:[],displayName:"StressTest"};const $=["StressTest"];export{e as StressTest,$ as __namedExportsOrder,_ as default};
//# sourceMappingURL=stress-test.stories-ab44ae0d.js.map
