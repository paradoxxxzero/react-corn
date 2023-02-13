import{C as U,b as M,D as N,c as W,E as D,F,H as q,I as H,N as z,M as B,d as Y,R as G,e as J,S as K,f as Q,P as V,T as X,g as Z,h as ee,i as re,U as ne,W as te,k as ae}from"./bundle.esm-866780ab.js";import{r as g}from"./index-f1f749bf.js";import{s as c,C as oe}from"./styled-components.browser.esm-f779b45b.js";function ie(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t,i,a,s,b=[],u=!0,m=!1;try{if(a=(n=n.call(e)).next,r===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(t=a.call(n)).done)&&(b.push(t.value),b.length!==r);u=!0);}catch(d){m=!0,i=d}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(m)throw i}}return b}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f.apply(this,arguments)}function le(e,r){if(e==null)return{};var n={},t=Object.keys(e),i,a;for(a=0;a<t.length;a++)i=t[a],!(r.indexOf(i)>=0)&&(n[i]=e[i]);return n}function p(e,r){if(e==null)return{};var n=le(e,r),t,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function l(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function ce(e,r){return se(e)||ie(e,r)||ue(e,r)||de()}function se(e){if(Array.isArray(e))return e}function ue(e,r){if(e){if(typeof e=="string")return h(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,r)}}function h(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var me={color:{base:"hsl(0, 0%, 50%)",modified:"hsl(0, 0%, 25%)",error:"hsl(0, 100%, 50%)",suggestion:"hsl(180, 100%, 30%)"},backgroundColor:{base:"transparent"}},v=function(r){return r.defaultProps={theme:me},r},be=["label","className","children"],fe=["children"],ve=["noUncover","score","suggestion","children"],y,w,O,j,x,P,$,k,R,E,S,T,C,pe=v(c.div(y||(y=l([`
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
`])),function(e){return e.error?e.theme.color.error:e.modified?e.theme.color.modified:e.theme.color.base},function(e){return e.theme.backgroundColor.base})),ge=c.fieldset(w||(w=l([`
  display: flex;
  flex-wrap: wrap;
  border: none;
  label {
    margin: 1em;
  }
  input {
    margin: 4px;
  }
`]))),he=c.div(O||(O=l([""]))),ye=v(c.div(j||(j=l([`
  color: `,`;
`])),function(e){return e.theme.color.suggestion})),Ee=c.div(x||(x=l([`
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
`]))),_=v(c.label(P||(P=l([`
  display: block;
  margin: 1.5em;
  transition: color 0.2s;
  color: `,`;

  `,`
`])),function(e){return e.error?e.theme.color.error:e.modified?e.theme.color.modified:e.theme.color.base},function(e){return e.required&&oe($||($=l([`
      &::before {
        content: '* ';
      }
    `])))})),Se=c.div(k||(k=l([`
  display: flex;
  flex-wrap: wrap;
  margin: 0.75em;

  `,` {
    margin: 0.75em;
  }
`])),_),A=function(r){var n=r.label,t=r.className,i=r.children,a=p(r,be);return React.createElement(_,f({className:t},a),n,React.createElement(pe,a,i),a.error&&React.createElement(he,null,a.error),a.suggestion&&React.createElement(ye,null,a.suggestion))},o=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.labelProps,i=t===void 0?{}:t,a=n.componentProps,s=a===void 0?{}:a;return function(u){var m=u.children,d=p(u,fe);return React.createElement(A,f({label:m,modified:d.modified,required:d.required,error:d.error},i),React.createElement(r,f({},s,d)))}},Te=o(U),Ce=o(M),_e=o(N),Ae=o(W),Ie=o(D),Le=o(F),Ue=o(q);o(H);var Me=o(z),Ne=o(B),We=o(Y),De=o(G),Fe=o(J),qe=o(K),He=o(Q),ze=o(V,{componentProps:{Root:ge},labelProps:{htmlFor:"nothing"}}),Be=o(X),Ye=o(Z),Ge=o(ee),Je=o(re),Ke=o(ne),Qe=o(te),we=c.button(R||(R=l([`
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
`]))),Oe=c.div(E||(E=l([`
  position: relative;
  width: fit-content;
`]))),je=c.svg(S||(S=l([`
  width: 0.5em;
`]))),xe=c("circle")(T||(T=l([`
  fill: `,`;
  stroke: black;
  transition: fill 250ms;
`])),function(e){return e.uncovered?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 1)"}),Pe=v(c.div(C||(C=l([`
  height: 0.15em;
  transition: background-color 250ms, width 250ms;
  width: `,`%;
  background-color: hsl(`,`, 100%, 50%);
`])),function(e){return 100*(e.score+1)/5},function(e){return Math.pow(e.score,2)*12})),Ve=function(r){var n=r.noUncover,t=r.score,i=r.suggestion,a=r.children,s=p(r,ve),b=g.useState(!1),u=ce(b,2),m=u[0],d=u[1],I=g.useCallback(function(){d(function(L){return!L})},[]);return React.createElement(A,{label:a,modified:s.modified,required:s.required,error:s.error,suggestion:i},React.createElement(Oe,null,React.createElement(ae,f({},s,{type:m?"text":"password",autoComplete:"off"})),!n&&React.createElement(we,{type:"button",onClick:I},React.createElement(je,{version:"1.1",baseProfile:"full",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 10"},React.createElement(xe,{r:"4",cx:"5",cy:"5",uncovered:m}))),(t||t===0)&&React.createElement(Pe,{score:t})))};export{Ee as B,Te as C,_e as D,Ie as E,Le as F,Ue as H,Se as I,We as M,Me as N,ze as P,De as R,He as S,Ye as T,Ke as U,Qe as W,Ve as a,Ge as b,Ce as c,Ae as d,Fe as e,qe as f,Be as g,Je as h,Ne as i};
//# sourceMappingURL=bundle.esm-f2769dc9.js.map
