import{a as s,j as C,u as z}from"./bundle.esm-afd8ca76.js";import{s as G,e as J,c as H,C as V,u as X,a as Y,F as Z,I as ee,b as te,m as re,d as ne,f as oe,O as ae}from"./bundle.esm-343362ed.js";import{BaseQuill as ie}from"./bundle.esm-c196e5ad.js";import{r as d}from"./index-f1f749bf.js";import{s as le,u as se,_ as ue,c as ce}from"./createTheme-d1a7bf13.js";import{_ as de}from"./extends-98964cd2.js";/* empty css                   */import{F as me,B as _}from"./muiForm-4aedca28.js";import{S as pe}from"./Story-1c52c0f8.js";import"./styled-components.browser.esm-f779b45b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./assertThisInitialized-e784747a.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./isEqual-f10db94b.js";import"./_baseIsEqual-48836dd4.js";import"./_getTag-6b57983a.js";import"./Button-23a313bf.js";import"./highlight-5656cd5b.js";const fe=["className","component"];function he(e={}){const{defaultTheme:r,defaultClassName:t="MuiBox-root",generateClassName:n}=e,o=G("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(le);return d.forwardRef(function(u,i){const h=se(r),m=J(u),{className:b,component:v="div"}=m,g=ue(m,fe);return s(o,de({as:v,ref:i,className:H(b,n?n(t):t),theme:h},g))})}const ye=ce(),be=he({defaultTheme:ye,defaultClassName:"MuiBox-root",generateClassName:V.generate}),ve=be;function ge(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n,o,a,l,u=[],i=!0,h=!1;try{if(a=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);i=!0);}catch(m){h=!0,o=m}finally{try{if(!i&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(h)throw o}}return u}}function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?B(Object(t),!0).forEach(function(n){Se(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Se(e,r,t){return r=Te(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Oe(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}function xe(e,r){if(e==null)return{};var t=Oe(e,r),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function P(e,r){return Ce(e)||ge(e,r)||L(e,r)||Ie()}function Pe(e){return je(e)||we(e)||L(e)||Fe()}function je(e){if(Array.isArray(e))return w(e)}function Ce(e){if(Array.isArray(e))return e}function we(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L(e,r){if(e){if(typeof e=="string")return w(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,r)}}function w(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Fe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(e,r){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Te(e){var r=Ae(e,"string");return typeof r=="symbol"?r:String(r)}var _e=["children","variant","className"],Be={standard:ne,filled:oe,outlined:ae},j=d.memo(function(r){var t=r.children,n=r.variant,o=r.className,a=xe(r,_e);n=n||"outlined";var l=a.modified,u=a.error,i=X(),h=d.useState(!1),m=P(h,2),b=m[0],v=m[1],g=Y(a,re),F=P(g,2),$=F[0],S=F[1],Q=d.useCallback(function(){for(var c,p=arguments.length,y=new Array(p),f=0;f<p;f++)y[f]=arguments[f];(c=S.onBlur)===null||c===void 0||c.call.apply(c,[S].concat(y)),v(!1)},[S.onBlur]),W=d.useCallback(function(){for(var c,p=arguments.length,y=new Array(p),f=0;f<p;f++)y[f]=arguments[f];(c=S.onFocus)===null||c===void 0||c.call.apply(c,[S].concat(y)),v(!0)},[S.onFocus]),D=Be[n],E=d.useState(""),I=P(E,2),R=I[0],U=I[1],K=d.useState(""),A=P(K,2),T=A[0],k=A[1];return C(Z,x(x({modified:l},$),{},{variant:n,focused:b,className:o,error:!!u,children:[s(ee,{disableAnimation:!0,shrink:!0,variant:n,children:t}),s(D,{style:{display:"none"},label:t,type:"hidden",notched:n==="outlined"?!0:void 0,ref:function(p){if(p&&(U(Pe(p.classList).join(" ")),n==="outlined")){var y=p.querySelector(".MuiOutlinedInput-notchedOutline");y&&k(y.outerHTML)}}}),C(ve,{className:H({"Mui-focused":b},R,o),sx:{padding:["filled","outlin ed"].includes(n)&&i.spacing(1),paddingTop:n==="filled"?i.spacing(4):i.spacing(2),color:l?"text.primary":"text.secondary","& .ql-container":{border:"none"},width:1,"& .quill":{width:1}},children:[s(ie,x(x({},S),{},{onFocus:W,onBlur:Q})),T&&s("div",{dangerouslySetInnerHTML:{__html:T}})]}),u&&s(te,{variant:n,children:u})]}))});const Ne=e=>e.length>250?`This field must be shorter than 250 characters html tags included (${e.length-250} extraneous chars).`:"",qe=d.memo(({item:e,onItem:r,onTransient:t,onDelta:n,onErrors:o})=>{const a=d.useCallback((b,v,g)=>{t(b),o(g)},[o,t]),l=d.useCallback((b,v,g)=>{r(g),n(v)},[n,r]),{form:u,field:i,modified:h,onReset:m}=z({item:e,onChange:a,onSubmit:l});return C(me,{...u,children:[s(j,{required:!0,variant:"standard",...i("html",Ne),children:"Html"}),s(j,{variant:"filled",...i("html-filled"),children:"Filled"}),s(j,{variant:"outlined",...i("html-outlined"),children:"Outlined"}),s(_,{type:"submit",disabled:!h,color:"primary",variant:"contained",children:"Submit"}),s(_,{onClick:m,children:"Reset"})]})}),O=()=>s(pe,{Chapter:qe,initialItem:{html:"<h1>HTML Sample</h1><p><br></p><p>Here’s a simple html text in the quill editor.</p><p><br></p><p>react-corn handles simple field validation (this field has <strong>required</strong> and <em>a custom 250 characters </em>validator).</p>","html-filled":"<h2>With filled variant</h2>","html-outlined":"<h3>And outlined</h3>"}}),et={title:"@react-corn/mui-quill",parameters:{options:{showPanel:!0}}};var N,q,M;O.parameters={...O.parameters,docs:{...(N=O.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Story Chapter={CornForm} initialItem={{
    html: '<h1>HTML Sample</h1><p><br></p><p>Here’s a simple html text in the quill editor.</p><p><br></p><p>react-corn handles simple field validation (this field has <strong>required</strong> and <em>a custom 250 characters </em>validator).</p>',
    'html-filled': '<h2>With filled variant</h2>',
    'html-outlined': '<h3>And outlined</h3>'
  }} />;
}`,...(M=(q=O.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};O.__docgenInfo={description:"",methods:[],displayName:"MaterialUIQuillDemo"};const tt=["MaterialUIQuillDemo"];export{O as MaterialUIQuillDemo,tt as __namedExportsOrder,et as default};
//# sourceMappingURL=mui-quill.stories-e540631e.js.map