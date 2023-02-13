import{a as c,C as M,b as W,D as F,c as q,E as H,F as z,H as B,I as K,N as Y,M as G,d as J,R as Q,e as V,S as X,f as Z,P as ee,T as re,g as ne,h as te,i as oe,U as ae,W as ie,j as L,k as le}from"./bundle.esm-afd8ca76.js";import{r as g}from"./index-f1f749bf.js";import{s,C as se}from"./styled-components.browser.esm-f779b45b.js";function ce(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t,i,o,u,p=[],d=!0,b=!1;try{if(o=(n=n.call(e)).next,r===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(t=o.call(n)).done)&&(p.push(t.value),p.length!==r);d=!0);}catch(m){b=!0,i=m}finally{try{if(!d&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(b)throw i}}return p}}function y(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function f(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?y(Object(n),!0).forEach(function(t){ue(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ue(e,r,n){return r=he(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function de(e,r){if(e==null)return{};var n={},t=Object.keys(e),i,o;for(o=0;o<t.length;o++)i=t[o],!(r.indexOf(i)>=0)&&(n[i]=e[i]);return n}function h(e,r){if(e==null)return{};var n=de(e,r),t,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function l(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function fe(e,r){return me(e)||ce(e,r)||be(e,r)||pe()}function me(e){if(Array.isArray(e))return e}function be(e,r){if(e){if(typeof e=="string")return O(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,r)}}function O(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(e,r){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,r||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function he(e){var r=ve(e,"string");return typeof r=="symbol"?r:String(r)}var ge={color:{base:"hsl(0, 0%, 50%)",modified:"hsl(0, 0%, 25%)",error:"hsl(0, 100%, 50%)",suggestion:"hsl(180, 100%, 30%)"},backgroundColor:{base:"transparent"}},v=function(r){return r.defaultProps={theme:ge},r},ye=["label","className","children"],Oe=["children"],we=["noUncover","score","suggestion","children"],w,j,P,x,$,S,k,T,_,C,A,E,I,je=v(s.div(w||(w=l([`
  border-color: `,`;
  transition: border-color 0.2s;

  input,
  textarea,
  select {
    padding: 0.75em;
    font: inherit;
    border: solid 1px;
    border-color: inherit;
    color: inherit;
    margin: 0.5em 0;
    background-color: `,`;
    border-radius: 0.15em;
    max-width: 100%;

    &[type='range'] {
      padding: 0;
    }

    &[readonly],
    &[disabled] {
      opacity: 0.5;
    }
  }
`])),function(e){return e.error?e.theme.color.error:e.modified?e.theme.color.modified:e.theme.color.base},function(e){return e.theme.backgroundColor.base})),Pe=s.fieldset(j||(j=l([`
  display: flex;
  flex-wrap: wrap;
  border: none;
  label {
    margin: 1em;
  }
  input {
    margin: 4px;
  }
`]))),xe=s.div(P||(P=l([""]))),$e=v(s.div(x||(x=l([`
  color: `,`;
`])),function(e){return e.theme.color.suggestion})),Le=s.div($||($=l([`
  button {
    margin: 1em;
    padding: 0.25em 0.75em;
    font: inherit;
    cursor: pointer;
    &[disabled] {
      cursor: not-allowed;
    }

    &[type='button'] {
      background: none;
      border: none;
    }
  }
`]))),R=v(s.label(S||(S=l([`
  display: block;
  margin: 1.5em;
  transition: color 0.2s;
  color: `,`;

  `,`
`])),function(e){return e.error?e.theme.color.error:e.modified?e.theme.color.modified:e.theme.color.base},function(e){return e.required&&se(k||(k=l([`
      &::before {
        content: '* ';
      }
    `])))})),Re=s.div(T||(T=l([`
  display: flex;
  flex-wrap: wrap;
  margin: 0.75em;

  `,` {
    margin: 0.75em;
  }
`])),R),D=function(r){var n=r.label,t=r.className,i=r.children,o=h(r,ye);return L(R,f(f({className:t},o),{},{children:[n,c(je,f(f({},o),{},{children:i})),o.error&&c(xe,{children:o.error}),o.suggestion&&c($e,{children:o.suggestion})]}))},a=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.labelProps,i=t===void 0?{}:t,o=n.componentProps,u=o===void 0?{}:o;return function(d){var b=d.children,m=h(d,Oe);return c(D,f(f({label:b,modified:m.modified,required:m.required,error:m.error},i),{},{children:c(r,f(f({},u),m))}))}},De=a(M),Ne=a(W),Ue=a(F),Me=a(q),We=a(H),Fe=a(z),qe=a(B);a(K);var He=a(Y),ze=a(G),Be=a(J),Ke=a(Q),Ye=a(V),Ge=a(X),Je=a(Z),Qe=a(ee,{componentProps:{Root:Pe},labelProps:{htmlFor:"nothing"}}),Ve=a(re),Xe=a(ne),Ze=a(te),er=a(oe),rr=a(ae),nr=a(ie),Se=s.button(_||(_=l([`
  position: absolute;
  top: 50%;
  right: 0.25em;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  opacity: 0.75;
  padding: 0;
  transition: opacity 0.2s;
  transform: translateY(-50%);
  z-index: 2;
  font-size: 3em;
  display: flex;
`]))),ke=s.div(C||(C=l([`
  position: relative;
  width: fit-content;
`]))),Te=s.svg(A||(A=l([`
  width: 0.5em;
`]))),_e=s("circle")(E||(E=l([`
  fill: `,`;
  stroke: black;
  transition: fill 250ms;
`])),function(e){return e.uncovered?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 1)"}),Ce=v(s.div(I||(I=l([`
  height: 0.15em;
  transition: background-color 250ms, width 250ms;
  width: `,`%;
  background-color: hsl(`,`, 100%, 50%);
`])),function(e){return 100*(e.score+1)/5},function(e){return Math.pow(e.score,2)*12})),tr=function(r){var n=r.noUncover,t=r.score,i=r.suggestion,o=r.children,u=h(r,we),p=g.useState(!1),d=fe(p,2),b=d[0],m=d[1],N=g.useCallback(function(){m(function(U){return!U})},[]);return c(D,{label:o,modified:u.modified,required:u.required,error:u.error,suggestion:i,children:L(ke,{children:[c(le,f(f({},u),{},{type:b?"text":"password",autoComplete:"off"})),!n&&c(Se,{type:"button",onClick:N,children:c(Te,{version:"1.1",baseProfile:"full",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 10",children:c(_e,{r:"4",cx:"5",cy:"5",uncovered:b})})}),(t||t===0)&&c(Ce,{score:t})]})})};export{Le as B,De as C,Ue as D,We as E,Fe as F,qe as H,Re as I,Be as M,He as N,Qe as P,Ke as R,Je as S,Xe as T,rr as U,nr as W,tr as a,Ze as b,Ne as c,Me as d,Ye as e,Ge as f,Ve as g,er as h,ze as i};
//# sourceMappingURL=bundle.esm-6042a324.js.map
