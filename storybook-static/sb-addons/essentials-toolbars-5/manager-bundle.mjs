try{
var r=__REACT__,{Children:Q,Component:X,Fragment:ee,Profiler:te,PureComponent:oe,StrictMode:re,Suspense:ae,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:le,cloneElement:ne,createContext:ie,createElement:se,createFactory:ce,createRef:ue,forwardRef:me,isValidElement:pe,lazy:de,memo:be,useCallback:O,useContext:Se,useDebugValue:fe,useEffect:R,useImperativeHandle:ye,useLayoutEffect:Te,useMemo:Oe,useReducer:_e,useRef:L,useState:ve,version:Ce}=__REACT__;var Re=__STORYBOOKAPI__,{ActiveTabs:he,Consumer:ke,ManagerContext:Ae,Provider:Le,addons:h,combineParameters:Be,controlOrMetaKey:Pe,controlOrMetaSymbol:Ne,eventMatchesShortcut:Me,eventToShortcut:we,isMacLike:Ge,isShortcutTaken:He,keyToSymbol:De,merge:Ke,mockChannel:Fe,optionOrAltSymbol:Ve,shortcutMatchesShortcut:We,shortcutToHumanString:Ye,types:B,useAddonState:$e,useArgTypes:Ue,useArgs:ze,useChannel:je,useGlobalTypes:P,useGlobals:g,useParameter:qe,useSharedState:Ze,useStoryPrepared:Je,useStorybookApi:N,useStorybookState:Qe}=__STORYBOOKAPI__;var rt=__STORYBOOKCOMPONENTS__,{A:at,ActionBar:lt,AddonPanel:nt,Badge:it,Bar:st,Blockquote:ct,Button:ut,Code:mt,DL:pt,Div:dt,DocumentWrapper:bt,FlexBar:St,Form:ft,H1:yt,H2:Tt,H3:Ot,H4:_t,H5:vt,H6:Ct,HR:It,IconButton:M,IconButtonSkeleton:gt,Icons:E,Img:Et,LI:xt,Link:Rt,ListItem:ht,Loader:kt,OL:At,P:Lt,Placeholder:Bt,Pre:Pt,ResetWrapper:Nt,ScrollArea:Mt,Separator:w,Spaced:wt,Span:Gt,StorybookIcon:Ht,StorybookLogo:Dt,Symbols:Kt,SyntaxHighlighter:Ft,TT:Vt,TabBar:Wt,TabButton:Yt,TabWrapper:$t,Table:Ut,Tabs:zt,TabsState:jt,TooltipLinkList:G,TooltipMessage:qt,TooltipNote:Zt,UL:Jt,WithTooltip:H,WithTooltipPure:Qt,Zoom:Xt,codeCommon:eo,components:to,createCopyToClipboardFunction:oo,getStoryHref:ro,icons:ao,interleaveSeparators:lo,nameSpaceClassNames:no,resetComponents:io,withReset:so}=__STORYBOOKCOMPONENTS__;var bo=__STORYBOOKCLIENTLOGGER__,{deprecate:k,logger:So,once:fo,pretty:yo}=__STORYBOOKCLIENTLOGGER__;var K=({active:o,title:t,icon:e,description:a,onClick:l})=>r.createElement(M,{active:o,title:a,onClick:l},e&&r.createElement(E,{icon:e}),t?`\xA0${t}`:null),F=["reset"],V=o=>o.filter(t=>!F.includes(t.type)).map(t=>t.value),_="addon-toolbars",W=async(o,t,e)=>{e&&e.next&&await o.setAddonShortcut(_,{label:e.next.label,defaultShortcut:e.next.keys,actionName:`${t}:next`,action:e.next.action}),e&&e.previous&&await o.setAddonShortcut(_,{label:e.previous.label,defaultShortcut:e.previous.keys,actionName:`${t}:previous`,action:e.previous.action}),e&&e.reset&&await o.setAddonShortcut(_,{label:e.reset.label,defaultShortcut:e.reset.keys,actionName:`${t}:reset`,action:e.reset.action})},Y=o=>t=>{let{id:e,toolbar:{items:a,shortcuts:l}}=t,d=N(),[b,s]=g(),i=L([]),u=b[e],v=O(()=>{s({[e]:""})},[s]),m=O(()=>{let c=i.current,n=c.indexOf(u),S=n===c.length-1?0:n+1,p=i.current[S];s({[e]:p})},[i,u,s]),C=O(()=>{let c=i.current,n=c.indexOf(u),S=n>-1?n:0,p=S===0?c.length-1:S-1,x=i.current[p];s({[e]:x})},[i,u,s]);return R(()=>{l&&W(d,e,{next:{...l.next,action:m},previous:{...l.previous,action:C},reset:{...l.reset,action:v}})},[d,e,l,m,C,v]),R(()=>{i.current=V(a)},[]),r.createElement(o,{cycleValues:i.current,...t})},D=({currentValue:o,items:t})=>o!=null&&t.find(e=>e.value===o),$=({currentValue:o,items:t})=>{let e=D({currentValue:o,items:t});if(e)return e.icon},U=({currentValue:o,items:t})=>{let e=D({currentValue:o,items:t});if(e)return e.title},z=({left:o,right:t,title:e,value:a,icon:l,hideIcon:d,onClick:b,currentValue:s})=>{let i=l&&r.createElement(E,{style:{opacity:1},icon:l}),u={id:a||s,active:s===a,right:t,title:e,left:o,onClick:b};return l&&!d&&(u.left=i),u},j=Y(({id:o,name:t,description:e,toolbar:{icon:a,items:l,title:d,showName:b,preventDynamicIcon:s,dynamicTitle:i}})=>{let[u,v]=g(),m=u[o],C=!!m,c=a,n=d;s||(c=$({currentValue:m,items:l})||c),b&&!n?(n=t,k("`showName` is deprecated as `name` will stop having dual purposes in the future. Please specify a `title` in `globalTypes` instead.")):!b&&!c&&!n&&(n=t,k(`Using the \`name\` "${t}" as toolbar title for backward compatibility. \`name\` will stop having dual purposes in the future. Please specify either a \`title\` or an \`icon\` in \`globalTypes\` instead.`)),i&&(n=U({currentValue:m,items:l})||n);let S=O(p=>{v({[o]:p})},[m,v]);return r.createElement(H,{placement:"top",tooltip:({onHide:p})=>{let x=l.filter(({type:I})=>{let A=!0;return I==="reset"&&!m&&(A=!1),A}).map(I=>z({...I,currentValue:m,onClick:()=>{S(I.value),p()}}));return r.createElement(G,{links:x})},closeOnOutsideClick:!0},r.createElement(K,{active:C,description:e||"",icon:c,title:n||""}))}),q={type:"item",value:""},Z=(o,t)=>({...t,name:t.name||o,description:t.description||o,toolbar:{...t.toolbar,items:t.toolbar.items.map(e=>{let a=typeof e=="string"?{value:e,title:e}:e;return a.type==="reset"&&t.toolbar.icon&&(a.icon=t.toolbar.icon,a.hideIcon=!0),{...q,...a}})}}),J=()=>{let o=P(),t=Object.keys(o).filter(e=>!!o[e].toolbar);return t.length?r.createElement(r.Fragment,null,r.createElement(w,null),t.map(e=>{let a=Z(e,o[e]);return r.createElement(j,{key:e,id:e,...a})})):null};h.register(_,()=>h.add(_,{title:_,type:B.TOOL,match:()=>!0,render:()=>r.createElement(J,null)}));
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map