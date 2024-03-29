import{u as m,j as r,a as o,g as u,N as l,C as b}from"./bundle.esm-afd8ca76.js";import{r as f}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const x={title:"@react-corn/core",parameters:{options:{showPanel:!0}}},n=()=>{const[c,d]=f.useState({name:"Foo",value:42,ok:!1}),e=m({item:c,onSubmit:t=>{window.confirm(`You submitted "${t.name}" and ${t.value} with ok ${t.ok?"✓":"✗"}`)&&d(t)}});return r("form",{...e.form,children:[o(u,{required:!0,...e.field("name")}),o(l,{required:!0,...e.field("value")}),r("label",{children:[o(b,{...e.field("ok")}),"ok"]})," ",o("button",{disabled:!e.modified,children:"Submit"}),o("button",{type:"button",disabled:!e.modified,onClick:e.onReset,children:"Reset"})]})};var s,a,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [item, setItem] = useState({
    name: 'Foo',
    value: 42,
    ok: false
  });
  const corn = useCorn({
    item,
    onSubmit: newItem => {
      const accepted = window.confirm(\`You submitted "\${newItem.name}" and \${newItem.value} with ok \${newItem.ok ? '✓' : '✗'}\`);
      accepted && setItem(newItem);
    }
  });
  return <form {...corn.form}>
      <Text required {...corn.field('name')} />
      <Number required {...corn.field('value')} />
      <label>
        <Checkbox {...corn.field('ok')} />
        ok
      </label>
      &nbsp;
      <button disabled={!corn.modified}>Submit</button>
      <button type="button" disabled={!corn.modified} onClick={corn.onReset}>
        Reset
      </button>
    </form>;
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};n.__docgenInfo={description:"",methods:[],displayName:"BasicUsage"};const C=["BasicUsage"];export{n as BasicUsage,C as __namedExportsOrder,x as default};
//# sourceMappingURL=core.stories-eb840810.js.map
