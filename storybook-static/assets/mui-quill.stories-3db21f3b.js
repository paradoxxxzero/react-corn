import{a as x,u as z,j as D}from"./bundle.esm-866780ab.js";import{s as G,e as J,c as R,C as K,u as V,a as X,F as Y,I as Z,b as ee,m as te,d as re,f as ae,O as ne}from"./bundle.esm-32557132.js";import{BaseQuill as oe}from"./bundle.esm-af1de7b1.js";import{r as c}from"./index-f1f749bf.js";import{s as ie,u as le,_ as se,c as ue}from"./createTheme-d1a7bf13.js";import{_ as ce}from"./extends-98964cd2.js";/* empty css                   */import{F as de,B}from"./muiForm-36341b89.js";import{S as me}from"./Story-d2591278.js";import"./styled-components.browser.esm-f779b45b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./assertThisInitialized-e784747a.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./isEqual-f10db94b.js";import"./_baseIsEqual-48836dd4.js";import"./_getTag-6b57983a.js";import"./Button-d4c72dc6.js";import"./prism-855b1552.js";const pe=["className","component"];function fe(e={}){const{defaultTheme:a,defaultClassName:t="MuiBox-root",generateClassName:r}=e,n=G("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(ie);return c.forwardRef(function(s,i){const f=le(a),d=J(s),{className:v,component:b="div"}=d,y=se(d,pe);return x(n,ce({as:b,ref:i,className:R(v,r?r(t):t),theme:f},y))})}const he=ue(),ve=fe({defaultTheme:he,defaultClassName:"MuiBox-root",generateClassName:K.generate}),be=ve;function ye(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,n,o,l,s=[],i=!0,f=!1;try{if(o=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;i=!1}else for(;!(i=(r=o.call(t)).done)&&(s.push(r.value),s.length!==a);i=!0);}catch(d){f=!0,n=d}finally{try{if(!i&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw n}}return s}}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},F.apply(this,arguments)}function ge(e,a){if(e==null)return{};var t={},r=Object.keys(e),n,o;for(o=0;o<r.length;o++)n=r[o],!(a.indexOf(n)>=0)&&(t[n]=e[n]);return t}function xe(e,a){if(e==null)return{};var t=ge(e,a),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function S(e,a){return Fe(e)||ye(e,a)||q(e,a)||Ae()}function Se(e){return Ce(e)||Oe(e)||q(e)||je()}function Ce(e){if(Array.isArray(e))return j(e)}function Fe(e){if(Array.isArray(e))return e}function Oe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function q(e,a){if(e){if(typeof e=="string")return j(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,a)}}function j(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ie=["children","variant","className"],Te={standard:re,filled:ae,outlined:ne},O=c.memo(function(a){var t=a.children,r=a.variant,n=a.className,o=xe(a,Ie);r=r||"outlined";var l=o.modified,s=o.error,i=V(),f=c.useState(!1),d=S(f,2),v=d[0],b=d[1],y=X(o,te),A=S(y,2),M=A[0],g=A[1],E=c.useCallback(function(){for(var u,m=arguments.length,h=new Array(m),p=0;p<m;p++)h[p]=arguments[p];(u=g.onBlur)===null||u===void 0||u.call.apply(u,[g].concat(h)),b(!1)},[g.onBlur]),H=c.useCallback(function(){for(var u,m=arguments.length,h=new Array(m),p=0;p<m;p++)h[p]=arguments[p];(u=g.onFocus)===null||u===void 0||u.call.apply(u,[g].concat(h)),b(!0)},[g.onFocus]),L=Te[r],$=c.useState(""),I=S($,2),W=I[0],Q=I[1],U=c.useState(""),T=S(U,2),P=T[0],k=T[1];return React.createElement(Y,F({modified:l},M,{variant:r,focused:v,className:n,error:!!s}),React.createElement(Z,{disableAnimation:!0,shrink:!0,variant:r},t),React.createElement(L,{style:{display:"none"},label:t,type:"hidden",notched:r==="outlined"?!0:void 0,ref:function(m){if(m&&(Q(Se(m.classList).join(" ")),r==="outlined")){var h=m.querySelector(".MuiOutlinedInput-notchedOutline");h&&k(h.outerHTML)}}}),React.createElement(be,{className:R({"Mui-focused":v},W,n),sx:{padding:["filled","outlin ed"].includes(r)&&i.spacing(1),paddingTop:r==="filled"?i.spacing(4):i.spacing(2),color:l?"text.primary":"text.secondary","& .ql-container":{border:"none"},width:1,"& .quill":{width:1}}},React.createElement(oe,F({},g,{onFocus:H,onBlur:E})),P&&React.createElement("div",{dangerouslySetInnerHTML:{__html:P}})),s&&React.createElement(ee,{variant:r},s))});const Pe=e=>e.length>250?`This field must be shorter than 250 characters html tags included (${e.length-250} extraneous chars).`:"",Be=c.memo(({item:e,onItem:a,onTransient:t,onDelta:r,onErrors:n})=>{const o=c.useCallback((v,b,y)=>{t(v),n(y)},[n,t]),l=c.useCallback((v,b,y)=>{a(y),r(b)},[r,a]),{form:s,field:i,modified:f,onReset:d}=z({item:e,onChange:o,onSubmit:l});return D(de,{...s,children:[x(O,{required:!0,variant:"standard",...i("html",Pe),children:"Html"}),x(O,{variant:"filled",...i("html-filled"),children:"Filled"}),x(O,{variant:"outlined",...i("html-outlined"),children:"Outlined"}),x(B,{type:"submit",disabled:!f,color:"primary",variant:"contained",children:"Submit"}),x(B,{onClick:d,children:"Reset"})]})}),C=()=>x(me,{Chapter:Be,initialItem:{html:"<h1>HTML Sample</h1><p><br></p><p>Here’s a simple html text in the quill editor.</p><p><br></p><p>react-corn handles simple field validation (this field has <strong>required</strong> and <em>a custom 250 characters </em>validator).</p>","html-filled":"<h2>With filled variant</h2>","html-outlined":"<h3>And outlined</h3>"}}),Ve={title:"@react-corn/mui-quill",parameters:{options:{showPanel:!0}}};var w,N,_;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Story Chapter={CornForm} initialItem={{
    html: '<h1>HTML Sample</h1><p><br></p><p>Here’s a simple html text in the quill editor.</p><p><br></p><p>react-corn handles simple field validation (this field has <strong>required</strong> and <em>a custom 250 characters </em>validator).</p>',
    'html-filled': '<h2>With filled variant</h2>',
    'html-outlined': '<h3>And outlined</h3>'
  }} />;
}`,...(_=(N=C.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const Xe=["MaterialUIQuillDemo"];export{C as MaterialUIQuillDemo,Xe as __namedExportsOrder,Ve as default};
//# sourceMappingURL=mui-quill.stories-3db21f3b.js.map