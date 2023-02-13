import{u as I,j as i,a as e}from"./bundle.esm-afd8ca76.js";import{I as u,T as t,E as j,a as z,S as N,N as _,b as q,i as B,B as E}from"./bundle.esm-6042a324.js";import{r as s}from"./index-f1f749bf.js";import{S as F}from"./Story-1c52c0f8.js";import"./styled-components.browser.esm-f779b45b.js";import"./_commonjsHelpers-042e6b4d.js";import"./highlight-5656cd5b.js";import"./createTheme-d1a7bf13.js";import"./extends-98964cd2.js";const H=s.memo(({item:S,onItem:c,onTransient:m,onDelta:l,onErrors:d})=>{const b=s.useCallback((o,h,n)=>{m(o),d(n)},[d,m]),C=s.useCallback((o,h,n)=>{c(n),l(h)},[l,c]),{form:x,field:r,modified:p,onReset:w,current:A}=I({item:S,onChange:b,onSubmit:C});return i("form",{...x,children:[i(u,{children:[e(t,{required:!0,maxLength:25,...r("name"),children:"Name"}),e(j,{...r("mail"),children:"Mail"}),e(z,{...r("password"),children:"Mot de passe"})]}),i(u,{children:[e(t,{size:5,maxLength:5,...r("address.zipcode"),children:"Zip code"}),e(t,{...r("address.city",{required:({address:{zipcode:o}})=>!!o}),children:"City"})]}),A(({address:o})=>o.zipcode||o.city)&&e(N,{choices:["Africa","Antarctica","Asia","Europe","North America","Australia/Oceania","South America"],...r("address.continent"),children:"Continent"}),e(_,{min:12,...r("age"),children:"Age"}),e(q,{...r("message"),children:"Message"}),e(B,{...r("price"),children:"Price"}),i(E,{children:[e("button",{disabled:!p,children:"Submit"}),e("button",{type:"button",disabled:!p,onClick:w,children:"Reset"})]})]})}),a=()=>e(F,{Chapter:H,initialItem:{name:"John Foo",mail:"john.foo@example.com",password:"qwerty",address:{zipcode:"Z4755A",city:"Barville",continent:null},age:25,message:`Hello,
How are you?`,price:"12.25"}}),L={title:"@react-corn/simple",parameters:{options:{showPanel:!0}}};var g,y,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};a.__docgenInfo={description:"",methods:[],displayName:"SimpleUIDemo"};const O=["SimpleUIDemo"];export{a as SimpleUIDemo,O as __namedExportsOrder,L as default};
//# sourceMappingURL=simple.stories-44d43467.js.map
