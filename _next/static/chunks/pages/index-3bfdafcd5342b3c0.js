(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2717:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),c=(o=r(1585))&&o.__esModule?o:{default:o},s=r(8e3),d=r(5850),u=r(5646);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,d=p.length;s<d;s++){var u=p[s];if(a.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?o=!1:r.add(u);else{var l=a.props[u],f=n[u]||new Set;"name"===u&&i||!f.has(l)?(f.add(l),n[u]=f):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,r=i.useContext(s.AmpStateContext),n=i.useContext(d.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:n,inAmpMode:u.isInAmpMode(r)},t)};t.default=m},1585:function(e,t,r){"use strict";var n=r(7980),a=r(3227),o=r(8361),i=(r(2191),r(5971)),c=r(2715),s=r(1193);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var l=function(e){i(r,e);var t=d(r);function r(e){var o;return a(this,r),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=l},597:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(9499),a=r(6687),o=r(29),i=r(6690),c=r(7794),s=r.n(c),d=r(3680),u=r(5147),l=r(2914),f=r(6968),p=r(7294),h=r(4893),m=r(2125),v=r(8865),x=r(5553),y=r(9485),g=r(5261),b=r(5893);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=(0,m.ZP)("div").withConfig({displayName:"batchQuery__ButtonBox",componentId:"sc-ir3ze6-0"})(["display:flex;align-items:center;.example{margin-left:20px;}.rht{margin-right:20px;}.query{margin-left:20px;}"]),P=m.ZP.div.withConfig({displayName:"batchQuery__TableBox",componentId:"sc-ir3ze6-1"})(["margin-top:40px;.tableStyle{border-top:1px solid #eee;color:#666666;th{height:60px;line-height:60px;}.first{display:flex;justify-content:center;align-items:stretch;.form-check-inline{margin-right:0;display:flex;margin-top:13px;}}td{line-height:50px;word-break:break-all;&:nth-child(4){width:30%;}}tr:nth-child(2n+1) td{background:rgba(255,255,255,0.3)!important;color:#666666!important;}tr:hover td{background:rgba(0,0,0,0.01)!important;}}"]);function k(){var e,t=(0,h.ds)().CSVReader,r=(0,p.useState)([]),n=r[0],c=r[1],m=(0,p.useState)(),j=m[0],k=m[1],_=(0,p.useState)([]),C=_[0],N=_[1],Z=(0,p.useState)([]),S=Z[0],M=Z[1],E=(0,p.useState)([]),A=E[0],B=E[1],D=(0,p.useState)(!1),I=D[0],R=D[1];(0,p.useEffect)((function(){var e=new v.Q(window.ethereum);k(e)}),[]),(0,p.useEffect)((function(){var e=n.filter((function(e){return!0===e.checked}));M(e)}),[I,n]),(0,p.useEffect)((function(){if(S.length){var e=JSON.parse(JSON.stringify(S));e.map((function(e){delete e.checked})),B(e)}}),[S]);var $=function(){var e=(0,o.Z)(s().mark((function e(){var t,r,o,d,u,l,f,p;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.length?(t=(0,a.Z)(S),r=(0,a.Z)(Array(n.length)).fill(!0),n.map((function(e,t){r[t]=e.checked}))):(t=(0,a.Z)(n),r=(0,a.Z)(Array(n.length)).fill(!0)),N(r),o=!1,d=!1,e.prev=4,l=s().mark((function e(){var r,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.value,o=(0,a.Z)(n),e.next=4,null===j||void 0===j?void 0:j.getBalance(r.address);case 4:i=e.sent,t.filter((function(e){return e.address===r.address}))[0].amount=x.dF(i.toString()),c(o);case 8:case"end":return e.stop()}}),e)})),f=(0,i.Z)(t);case 7:return e.next=9,f.next();case 9:if(!(o=!(p=e.sent).done)){e.next=14;break}return e.delegateYield(l(),"t0",11);case 11:o=!1,e.next=7;break;case 14:e.next=20;break;case 16:e.prev=16,e.t1=e.catch(4),d=!0,u=e.t1;case 20:if(e.prev=20,e.prev=21,!o||null==f.return){e.next=25;break}return e.next=25,f.return();case 25:if(e.prev=25,!d){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(20);case 30:case"end":return e.stop()}}),e,null,[[4,16,20,30],[21,,25,29]])})));return function(){return e.apply(this,arguments)}}(),H=function(e){var t=e.target,r=Number(t.value);n[r].checked=!0,R(!I)};return(0,b.jsxs)("div",{children:[(0,b.jsxs)(w,{children:[(0,b.jsx)(t,{onUploadAccepted:function(e){var t=function(e){var t={};return e.reduce((function(e,r){return!t[r.address]&&(t[r.address]=e.push(r)),e}),[])}(e.data.map((function(e){return y.UJ(e[0])?{address:e[0],amount:null,checked:!1}:null})).filter((function(e){return null!=e}))),r=(0,a.Z)(Array(t.length)).fill(!1);N(r),c(t)},children:function(e){var t=e.getRootProps;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",O(O({},t()),{},{className:"rht",children:(0,b.jsx)(d.Z,{variant:"flat",children:"Import CSV"})}))})}}),(0,b.jsx)(d.Z,{variant:"dark",onClick:function(){return $()},children:" Query"}),(0,b.jsx)("div",{className:"query",children:!!A.length&&(0,b.jsxs)(g.Z,{datas:A,filename:"myWallets_".concat(null===(e=A[0])||void 0===e?void 0:e.address),extension:".csv",children:[" ",(0,b.jsx)(d.Z,{variant:"dark",children:"  Download"})]})}),(0,b.jsx)("a",{className:"example",href:"/batch-query/example.csv",children:"example"})]}),(0,b.jsx)(P,{children:(0,b.jsxs)(u.Z,{striped:!0,borderless:!0,hover:!0,className:"tableStyle",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"#"}),(0,b.jsx)("th",{children:"index"}),(0,b.jsx)("th",{children:"Address"}),(0,b.jsx)("th",{children:"Amount"})]})}),(0,b.jsx)("tbody",{children:n.map((function(e,t){return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:(0,b.jsx)("div",{className:"first",children:(0,b.jsx)(l.Z.Check,{inline:!0,type:"checkbox",id:"default-checkbox_".concat(t),value:t,name:"selectValue",onChange:H})})}),(0,b.jsx)("td",{children:t+1}),(0,b.jsx)("td",{children:e.address}),(0,b.jsxs)("td",{children:[null==e.amount&&C[t]&&(0,b.jsx)(f.Z,{animation:"border",variant:"dark"}),e.amount]})]},t)}))})]})})]})}},3047:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7294),a=r(682),o=r(1608),i=r(1555),c=r(5893);function s(){return(0,n.useEffect)((function(){window.ethereum.on("chainChanged",(function(){window.location.reload()}))}),[]),(0,c.jsx)("div",{className:"header",children:(0,c.jsx)(a.Z,{children:(0,c.jsxs)(o.Z,{children:[(0,c.jsx)(i.Z,{className:"headerTxt",md:8,xs:12,children:"Native Token Batch Query"}),(0,c.jsx)(i.Z,{className:"headetRht",md:4,xs:12,children:"\xa9 Web3 Camp"})]})})})}},6931:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(9008),a=r(4184),o=r.n(a),i=r(7294),c=r(6792),s=r(6611),d=r(5893),u=e=>i.forwardRef(((t,r)=>(0,d.jsx)("div",{...t,ref:r,className:o()(t.className,e)})));const l=i.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...a},i)=>{const s=(0,c.vE)(e,"card-img");return(0,d.jsx)(n,{ref:i,className:o()(r?`${s}-${r}`:s,t),...a})}));l.displayName="CardImg";var f=l;const p=i.createContext(null);p.displayName="CardHeaderContext";var h=p;const m=i.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},a)=>{const s=(0,c.vE)(e,"card-header"),u=(0,i.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,d.jsx)(h.Provider,{value:u,children:(0,d.jsx)(r,{ref:a,...n,className:o()(t,s)})})}));m.displayName="CardHeader";var v=m;const x=u("h5"),y=u("h6"),g=(0,s.Z)("card-body"),b=(0,s.Z)("card-title",{Component:x}),j=(0,s.Z)("card-subtitle",{Component:y}),O=(0,s.Z)("card-link",{Component:"a"}),w=(0,s.Z)("card-text",{Component:"p"}),P=(0,s.Z)("card-footer"),k=(0,s.Z)("card-img-overlay"),_=i.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:a,body:i,children:s,as:u="div",...l},f)=>{const p=(0,c.vE)(e,"card");return(0,d.jsx)(u,{ref:f,...l,className:o()(t,p,r&&`bg-${r}`,n&&`text-${n}`,a&&`border-${a}`),children:i?(0,d.jsx)(g,{children:s}):s})}));_.displayName="Card",_.defaultProps={body:!1};var C=Object.assign(_,{Img:f,Title:b,Subtitle:j,Body:g,Link:O,Text:w,Header:v,Footer:P,ImgOverlay:k}),N=r(682),Z=r(1608),S=r(1555),M=r(2125),E=r(3047),A=r(597),B=M.ZP.div.withConfig({displayName:"pages__MainBox",componentId:"sc-dd44gu-0"})(["display:flex;"]),D=(0,M.ZP)(N.Z).withConfig({displayName:"pages__BgBox",componentId:"sc-dd44gu-1"})(["margin-top:30px;"]),I=(0,M.ZP)(C).withConfig({displayName:"pages__CardBox",componentId:"sc-dd44gu-2"})(["border:0;box-shadow:0 0 5px #ccc;border-radius:6px;"]),R=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.default,{children:[(0,d.jsx)("title",{children:"Batch Query"}),(0,d.jsx)("meta",{name:"description",content:"Batch Query"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsxs)("main",{children:[(0,d.jsx)(E.default,{}),(0,d.jsx)(B,{children:(0,d.jsx)(D,{children:(0,d.jsx)(Z.Z,{children:(0,d.jsx)(S.Z,{md:12,xs:12,children:(0,d.jsx)(I,{body:!0,children:(0,d.jsx)(A.default,{})})})})})})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6931)}])},9008:function(e,t,r){e.exports=r(2717)},682:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294),i=r(6792),c=r(5893);const s=o.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:n,...o},s)=>{const d=(0,i.vE)(e,"container"),u="string"===typeof t?`-${t}`:"-fluid";return(0,c.jsx)(r,{ref:s,...o,className:a()(n,t?`${d}${u}`:d)})}));s.displayName="Container",s.defaultProps={fluid:!1},t.Z=s},1608:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294),i=r(6792),c=r(5893);const s=o.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},o)=>{const s=(0,i.vE)(e,"row"),d=(0,i.pi)(),u=`${s}-cols`,l=[];return d.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const a="xs"!==e?`-${e}`:"";null!=r&&l.push(`${u}${a}-${r}`)})),(0,c.jsx)(r,{ref:o,...n,className:a()(t,s,...l)})}));s.displayName="Row",t.Z=s},6601:function(){}},function(e){e.O(0,[858,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);