import{a as h,j as S}from"./bundle.esm-afd8ca76.js";import{r as y}from"./index-f1f749bf.js";import{s as k}from"./styled-components.browser.esm-f779b45b.js";import{c as m}from"./_commonjsHelpers-042e6b4d.js";import{h as X}from"./highlight-5656cd5b.js";import{a as ee,T as te,u as ne,b as re,c as oe}from"./createTheme-d1a7bf13.js";import{_ as ie}from"./extends-98964cd2.js";const ae=typeof Symbol=="function"&&Symbol.for,se=ae?Symbol.for("mui.nested"):"__THEME_NESTED__";function le(r,o){return typeof o=="function"?o(r):ie({},r,o)}function ce(r){const{children:o,theme:t}=r,e=ee(),n=y.useMemo(()=>{const i=e===null?t:le(e,t);return i!=null&&(i[se]=e!==null),i},[t,e]);return h(te.Provider,{value:n,children:o})}const ue={};function fe(r){const o=ne();return h(re.Provider,{value:typeof o=="object"?o:ue,children:r.children})}function de(r){const{children:o,theme:t}=r;return h(ce,{theme:t,children:h(fe,{children:o})})}var Q={},he=m&&m.__extends||function(){var r=function(o,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},r(o,t)};return function(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(o,t);function e(){this.constructor=o}o.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),f=m&&m.__assign||function(){return f=Object.assign||function(r){for(var o,t=1,e=arguments.length;t<e;t++){o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])}return r},f.apply(this,arguments)},pe=m&&m.__createBinding||(Object.create?function(r,o,t,e){e===void 0&&(e=t);var n=Object.getOwnPropertyDescriptor(o,t);(!n||("get"in n?!o.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return o[t]}}),Object.defineProperty(r,e,n)}:function(r,o,t,e){e===void 0&&(e=t),r[e]=o[t]}),ye=m&&m.__setModuleDefault||(Object.create?function(r,o){Object.defineProperty(r,"default",{enumerable:!0,value:o})}:function(r,o){r.default=o}),ge=m&&m.__importStar||function(r){if(r&&r.__esModule)return r;var o={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&pe(o,r,t);return ye(o,r),o},ve=m&&m.__rest||function(r,o){var t={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&o.indexOf(e)<0&&(t[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)o.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(t[e[n]]=r[e[n]]);return t};Object.defineProperty(Q,"__esModule",{value:!0});var I=ge(y),me=13,_e=9,be=8,Ee=89,L=90,Se=77,U=57,J=219,V=222,q=192,Ce=27,G=100,Oe=3e3,xe=typeof window<"u"&&"navigator"in window&&/Win/i.test(navigator.platform),W=typeof window<"u"&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),B="npm__react-simple-code-editor__textarea",Ke=`
/**
 * Reset the text fill color so that placeholder is visible
 */
.`.concat(B,`:empty {
  -webkit-text-fill-color: inherit !important;
}

/**
 * Hack to apply on some CSS on IE10 and IE11
 */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /**
    * IE doesn't support '-webkit-text-fill-color'
    * So we use 'color: transparent' to make the text transparent on IE
    * Unlike other browsers, it doesn't affect caret color in IE
    */
  .`).concat(B,` {
    color: transparent !important;
  }

  .`).concat(B,`::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`),ke=function(r){he(o,r);function o(){var t=r!==null&&r.apply(this,arguments)||this;return t.state={capture:!0},t._recordCurrentState=function(){var e=t._input;if(e){var n=e.value,i=e.selectionStart,a=e.selectionEnd;t._recordChange({value:n,selectionStart:i,selectionEnd:a})}},t._getLines=function(e,n){return e.substring(0,n).split(`
`)},t._recordChange=function(e,n){var i,a,g;n===void 0&&(n=!1);var d=t._history,p=d.stack,l=d.offset;if(p.length&&l>-1){t._history.stack=p.slice(0,l+1);var s=t._history.stack.length;if(s>G){var c=s-G;t._history.stack=p.slice(c,s),t._history.offset=Math.max(t._history.offset-c,0)}}var u=Date.now();if(n){var v=t._history.stack[t._history.offset];if(v&&u-v.timestamp<Oe){var x=/[^a-z0-9]([a-z0-9]+)$/i,C=(i=t._getLines(v.value,v.selectionStart).pop())===null||i===void 0?void 0:i.match(x),E=(a=t._getLines(e.value,e.selectionStart).pop())===null||a===void 0?void 0:a.match(x);if(C!=null&&C[1]&&(!((g=E==null?void 0:E[1])===null||g===void 0)&&g.startsWith(C[1]))){t._history.stack[t._history.offset]=f(f({},e),{timestamp:u});return}}}t._history.stack.push(f(f({},e),{timestamp:u})),t._history.offset++},t._updateInput=function(e){var n=t._input;n&&(n.value=e.value,n.selectionStart=e.selectionStart,n.selectionEnd=e.selectionEnd,t.props.onValueChange(e.value))},t._applyEdits=function(e){var n=t._input,i=t._history.stack[t._history.offset];i&&n&&(t._history.stack[t._history.offset]=f(f({},i),{selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})),t._recordChange(e),t._updateInput(e)},t._undoEdit=function(){var e=t._history,n=e.stack,i=e.offset,a=n[i-1];a&&(t._updateInput(a),t._history.offset=Math.max(i-1,0))},t._redoEdit=function(){var e=t._history,n=e.stack,i=e.offset,a=n[i+1];a&&(t._updateInput(a),t._history.offset=Math.min(i+1,n.length-1))},t._handleKeyDown=function(e){var n=t.props,i=n.tabSize,a=n.insertSpaces,g=n.ignoreTabKey,d=n.onKeyDown;if(!(d&&(d(e),e.defaultPrevented))){e.keyCode===Ce&&e.currentTarget.blur();var p=e.currentTarget,l=p.value,s=p.selectionStart,c=p.selectionEnd,u=(a?" ":"	").repeat(i);if(e.keyCode===_e&&!g&&t.state.capture)if(e.preventDefault(),e.shiftKey){var v=t._getLines(l,s),x=v.length-1,C=t._getLines(l,c).length-1,E=l.split(`
`).map(function(j,A){return A>=x&&A<=C&&j.startsWith(u)?j.substring(u.length):j}).join(`
`);if(l!==E){var O=v[x];t._applyEdits({value:E,selectionStart:O!=null&&O.startsWith(u)?s-u.length:s,selectionEnd:c-(l.length-E.length)})}}else if(s!==c){var v=t._getLines(l,s),w=v.length-1,M=t._getLines(l,c).length-1,O=v[w];t._applyEdits({value:l.split(`
`).map(function(H,$){return $>=w&&$<=M?u+H:H}).join(`
`),selectionStart:O&&/\S/.test(O)?s+u.length:s,selectionEnd:c+u.length*(M-w+1)})}else{var b=s+u.length;t._applyEdits({value:l.substring(0,s)+u+l.substring(c),selectionStart:b,selectionEnd:b})}else if(e.keyCode===be){var R=s!==c,F=l.substring(0,s);if(F.endsWith(u)&&!R){e.preventDefault();var b=s-u.length;t._applyEdits({value:l.substring(0,s-u.length)+l.substring(c),selectionStart:b,selectionEnd:b})}}else if(e.keyCode===me){if(s===c){var D=t._getLines(l,s).pop(),K=D==null?void 0:D.match(/^\s+/);if(K!=null&&K[0]){e.preventDefault();var T=`
`+K[0],b=s+T.length;t._applyEdits({value:l.substring(0,s)+T+l.substring(c),selectionStart:b,selectionEnd:b})}}}else if(e.keyCode===U||e.keyCode===J||e.keyCode===V||e.keyCode===q){var _=void 0;e.keyCode===U&&e.shiftKey?_=["(",")"]:e.keyCode===J?e.shiftKey?_=["{","}"]:_=["[","]"]:e.keyCode===V?e.shiftKey?_=['"','"']:_=["'","'"]:e.keyCode===q&&!e.shiftKey&&(_=["`","`"]),s!==c&&_&&(e.preventDefault(),t._applyEdits({value:l.substring(0,s)+_[0]+l.substring(s,c)+_[1]+l.substring(c),selectionStart:s,selectionEnd:c+2}))}else(W?e.metaKey&&e.keyCode===L:e.ctrlKey&&e.keyCode===L)&&!e.shiftKey&&!e.altKey?(e.preventDefault(),t._undoEdit()):(W?e.metaKey&&e.keyCode===L&&e.shiftKey:xe?e.ctrlKey&&e.keyCode===Ee:e.ctrlKey&&e.keyCode===L&&e.shiftKey)&&!e.altKey?(e.preventDefault(),t._redoEdit()):e.keyCode===Se&&e.ctrlKey&&(!W||e.shiftKey)&&(e.preventDefault(),t.setState(function(j){return{capture:!j.capture}}))}},t._handleChange=function(e){var n=e.currentTarget,i=n.value,a=n.selectionStart,g=n.selectionEnd;t._recordChange({value:i,selectionStart:a,selectionEnd:g},!0),t.props.onValueChange(i)},t._history={stack:[],offset:-1},t._input=null,t}return o.prototype.componentDidMount=function(){this._recordCurrentState()},Object.defineProperty(o.prototype,"session",{get:function(){return{history:this._history}},set:function(t){this._history=t.history},enumerable:!1,configurable:!0}),o.prototype.render=function(){var t=this,e=this.props,n=e.value,i=e.style,a=e.padding,g=e.highlight,d=e.textareaId,p=e.textareaClassName,l=e.autoFocus,s=e.disabled,c=e.form,u=e.maxLength,v=e.minLength,x=e.name,C=e.placeholder,E=e.readOnly,O=e.required,w=e.onClick,M=e.onFocus,b=e.onBlur,R=e.onKeyUp;e.onKeyDown,e.onValueChange,e.tabSize,e.insertSpaces,e.ignoreTabKey;var F=e.preClassName,D=ve(e,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),K={paddingTop:typeof a=="object"?a.top:a,paddingRight:typeof a=="object"?a.right:a,paddingBottom:typeof a=="object"?a.bottom:a,paddingLeft:typeof a=="object"?a.left:a},T=g(n);return I.createElement("div",f({},D,{style:f(f({},P.container),i)}),I.createElement("pre",f({className:F,"aria-hidden":"true",style:f(f(f({},P.editor),P.highlight),K)},typeof T=="string"?{dangerouslySetInnerHTML:{__html:T+"<br />"}}:{children:T})),I.createElement("textarea",{ref:function(_){return t._input=_},style:f(f(f({},P.editor),P.textarea),K),className:B+(p?" ".concat(p):""),id:d,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:w,onKeyUp:R,onFocus:M,onBlur:b,disabled:s,form:c,maxLength:u,minLength:v,name:x,placeholder:C,readOnly:E,required:O,autoFocus:l,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),I.createElement("style",{dangerouslySetInnerHTML:{__html:Ke}}))},o.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},o}(I.Component),Te=Q.default=ke,P={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}};const we=k.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
`,De=k.label`
  flex: 1;
  margin: 0.5em;
`,je=k.div`
  padding: 0.5em;
  color: ${r=>r.syntaxError?"red":"black"};
  background-color: ${r=>r.syntaxError?"rgba(255, 0, 0, 0.025)":"inherit"};

  border: ${r=>r.editable?"1px solid hsl(0,0%,50%)":"none"};
  font-family: 'Fira Code', monospace;
  font-size: 13px;

  textarea {
    outline: none;
  }
`,Ie=k.h4`
  margin: 0.25em;
`,N=k.small`
  color: rgba(0, 0, 0, 0.2);
`,Pe=r=>X(r,"json"),z=({item:r,onItemEdited:o,children:t})=>{const[e,n]=y.useState(Y(r)),[i,a]=y.useState(!1);y.useEffect(()=>{n(d=>{const p=Y(r);return p!==Y(JSON.parse(d))?p:d})},[r]),y.useEffect(()=>{if(o)try{const d=JSON.parse(e);a(!1),o(d)}catch{a(!0)}},[o,e]);const g=y.useCallback(()=>{n(d=>Y(JSON.parse(d)))},[]);return S(De,{syntaxError:i,children:[S(Ie,{children:[t,o&&S("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",style:{float:"right"},children:[h("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})]})]}),h(je,{syntaxError:i,editable:!!o,children:h(Te,{readOnly:!o,value:e,onValueChange:n,onBlur:g,highlight:Pe})})]})},Y=r=>JSON.stringify(r,null,2);function Z({item:r,transient:o,delta:t,errors:e,onItemEdited:n}){return S(we,{children:[S(z,{item:o,children:["Transient item ",h(N,{children:"(onChange)"})]}),S(z,{item:r,onItemEdited:n,children:["Item ",h(N,{children:"(onSubmit)"})]}),S(z,{item:t,children:["Delta ",h(N,{children:"(onSubmit)"})]}),S(z,{item:e,children:["Current errors ",h(N,{children:"(onChange)"})]})]})}Z.__docgenInfo={description:"",methods:[],displayName:"StoryItem"};function Me(r,o){let t;return function(){clearTimeout(t),t=setTimeout(()=>r.apply(this,arguments),o)}}const Le=(r,o=50)=>{const t=y.useRef(),e=y.useRef(o),[n,i]=y.useState(r);return(!t.current||e.current!==o)&&(t.current=Me(i,o)),[n,t.current]},Ne=k.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  min-height: 100%;

  form {
    flex: 1;
  }
`,ze=k.hr`
  border-color: hsla(0, 50%, 50%, 0.1);
`,Ye=oe(),Be=({Chapter:r,initialItem:o})=>{const[t,e]=y.useState(o||{}),[n,i]=Le({}),[a,g]=y.useState({}),[d,p]=y.useState({}),l=y.useCallback(s=>{e(s)},[]);return h(de,{theme:Ye,children:S(Ne,{children:[h(r,{item:t,onItem:e,onTransient:i,onDelta:g,onErrors:p}),h(ze,{}),h(Z,{item:t,transient:n,delta:a,errors:d,onItemEdited:l})]})})};Be.__docgenInfo={description:"",methods:[],displayName:"Story"};export{ze as D,Be as S};
//# sourceMappingURL=Story-1c52c0f8.js.map
