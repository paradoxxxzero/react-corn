import{u as j,j as o,a as e}from"./bundle.esm-866780ab.js";import{I as u,T as t,E as z,a as I,S as q,N as B,b as E,i as F,B as H}from"./bundle.esm-f2769dc9.js";import{r as s}from"./index-f1f749bf.js";import{S as M}from"./Story-d2591278.js";import"./styled-components.browser.esm-f779b45b.js";import"./_commonjsHelpers-042e6b4d.js";import"./prism-855b1552.js";import"./createTheme-d1a7bf13.js";import"./extends-98964cd2.js";const N=s.memo(({item:f,onItem:c,onTransient:m,onDelta:l,onErrors:d})=>{const C=s.useCallback((a,h,n)=>{m(a),d(n)},[d,m]),S=s.useCallback((a,h,n)=>{c(n),l(h)},[l,c]),{form:x,field:r,modified:p,onReset:w,current:A}=j({item:f,onChange:C,onSubmit:S});return o("form",{...x,children:[o(u,{children:[e(t,{required:!0,maxLength:25,...r("name"),children:"Name"}),e(z,{...r("mail"),children:"Mail"}),e(I,{...r("password"),children:"Mot de passe"})]}),o(u,{children:[e(t,{size:5,maxLength:5,...r("address.zipcode"),children:"Zip code"}),e(t,{...r("address.city",{required:({address:{zipcode:a}})=>!!a}),children:"City"})]}),A(({address:a})=>a.zipcode||a.city)&&e(q,{choices:["Africa","Antarctica","Asia","Europe","North America","Australia/Oceania","South America"],...r("address.continent"),children:"Continent"}),e(B,{min:12,...r("age"),children:"Age"}),e(E,{...r("message"),children:"Message"}),e(F,{...r("price"),children:"Price"}),o(H,{children:[e("button",{disabled:!p,children:"Submit"}),e("button",{type:"button",disabled:!p,onClick:w,children:"Reset"})]})]})}),i=()=>e(M,{Chapter:N,initialItem:{name:"John Foo",mail:"john.foo@example.com",password:"qwerty",address:{zipcode:"Z4755A",city:"Barville",continent:null},age:25,message:`Hello,
How are you?`,price:"12.25"}}),T={title:"@react-corn/simple",parameters:{options:{showPanel:!0}}};var g,y,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Story Chapter={CornForm} initialItem={{
    name: 'John Foo',
    mail: 'john.foo@example.com',
    password: 'qwerty',
    address: {
      zipcode: 'Z4755A',
      city: 'Barville',
      continent: null
    },
    age: 25,
    message: 'Hello,\\nHow are you?',
    price: '12.25'
  }} />;
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const U=["SimpleUIDemo"];export{i as SimpleUIDemo,U as __namedExportsOrder,T as default};
//# sourceMappingURL=simple.stories-6a715c63.js.map
