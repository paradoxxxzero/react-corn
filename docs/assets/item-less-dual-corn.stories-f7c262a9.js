import{u as l,j as o,a as e}from"./bundle.esm-afd8ca76.js";import{T as m,D as u,B as c}from"./bundle.esm-6042a324.js";import{r as x}from"./index-f1f749bf.js";import{s as g}from"./styled-components.browser.esm-f779b45b.js";import"./_commonjsHelpers-042e6b4d.js";const y=g.div`
  pointer-events: none;
  margin: 1.25em 0 0 1.25em;
  width: 2em;
  height: 2em;
  border: 0.4em solid transparent;
  border-color: rgba(0, 0, 0, 0.15);
  border-top-color: rgba(0, 0, 0, 0.95);
  border-radius: 100%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`,r=()=>{const[s,d]=x.useState(!1),n=l({onSubmit:i=>window.confirm(`You submitted in form 1 "${Object.values(i).join(", ")}"`)}),t=l({onSubmit:async i=>{let h=window.confirm(`You submitted in form 2 "${Object.values(i).join(", ")}"`);return d(!0),await new Promise(w=>setTimeout(()=>w(),5e3)),d(!1),h}}),a={disabled:s};return o("div",{children:[e("h1",{children:"Form 1"}),o("form",{...n.form,style:{display:"flex",flexWrap:"wrap"},children:[e(m,{required:!0,...n.field("text"),children:"Text"}),e(u,{...n.field("date"),children:"Date (not working)"}),e("div",{style:{width:"100%"}}),o(c,{children:[e("button",{disabled:!n.modified,children:"Submit"}),e("button",{type:"button",disabled:!n.modified,onClick:n.onReset,children:"Reset"})]})]}),e("h1",{children:"Form 2"}),e("h4",{children:"With a simulated loading of 5s"}),o("form",{...t.form,style:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[e(m,{required:!0,...t.field("text",a),children:"Text"}),e(u,{...t.field("date",a),children:"Date (not working)"}),s&&e(y,{}),e("div",{style:{width:"100%"}}),o(c,{children:[e("button",{disabled:!t.modified,children:"Submit"}),e("button",{type:"button",disabled:!t.modified,onClick:t.onReset,children:"Reset"})]})]})]})},j={title:"Sandbox/item-less-dual-corn",parameters:{options:{showPanel:!0}}};var f,b,p;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [loading, setLoading] = useState(false);
  const corn1 = useCorn({
    onSubmit: item => {
      return window.confirm(\`You submitted in form 1 "\${Object.values(item).join(', ')}"\`);
    }
  });
  const corn2 = useCorn({
    onSubmit: async item => {
      let result = window.confirm(\`You submitted in form 2 "\${Object.values(item).join(', ')}"\`);
      setLoading(true);
      await new Promise(resolve => setTimeout(() => resolve(), 5000));
      setLoading(false);
      return result;
    }
  });
  const extraProps = {
    disabled: loading
  };
  return <div>
      <h1>Form 1</h1>
      <form {...corn1.form} style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
        <Text required {...corn1.field(\`text\`)}>
          Text
        </Text>
        <Date {...corn1.field(\`date\`)}>Date (not working)</Date>
        <div style={{
        width: '100%'
      }} />
        <ButtonRow>
          <button disabled={!corn1.modified}>Submit</button>
          <button type="button" disabled={!corn1.modified} onClick={corn1.onReset}>
            Reset
          </button>
        </ButtonRow>
      </form>
      <h1>Form 2</h1>
      <h4>With a simulated loading of 5s</h4>
      <form {...corn2.form} style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        <Text required {...corn2.field(\`text\`, extraProps)}>
          Text
        </Text>
        <Date {...corn2.field(\`date\`, extraProps)}>Date (not working)</Date>
        {loading && <Spinner />}
        <div style={{
        width: '100%'
      }} />
        <ButtonRow>
          <button disabled={!corn2.modified}>Submit</button>
          <button type="button" disabled={!corn2.modified} onClick={corn2.onReset}>
            Reset
          </button>
        </ButtonRow>
      </form>
    </div>;
}`,...(p=(b=r.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};r.__docgenInfo={description:"",methods:[],displayName:"ItemLessDualCorn"};const C=["ItemLessDualCorn"];export{r as ItemLessDualCorn,C as __namedExportsOrder,j as default};
//# sourceMappingURL=item-less-dual-corn.stories-f7c262a9.js.map
