"use strict";(self.webpackChunkarco_design_pro=self.webpackChunkarco_design_pro||[]).push([[6084,7553],{86129:function(e,t,n){var r=n(70885),a=n(4519),i=n(5813),o=n(31850);function l(e){return a.isValidElement(e)?e:a.createElement(a.Fragment,null,e)}t.Z=function(e){var t=e.backup,n=e.requiredPermissions,c=e.oneOfPerm,s=(0,a.useState)(!1),u=(0,r.Z)(s,2),f=u[0],d=u[1],m=(0,i.v9)((function(e){return e.userInfo}));return(0,a.useEffect)((function(){var e=(0,o.Z)({requiredPermissions:n,oneOfPerm:c},m.permissions);d(e)}),[n,c,m.permissions]),f?a.createElement(a.Fragment,null,l(e.children)):t?a.createElement(a.Fragment,null,l(t)):null}},34201:function(e,t,n){n.r(t),n.d(t,{ContentType:function(){return S},FilterType:function(){return C},Status:function(){return P}});var r=n(1413),a=n(70885),i=n(15861),o=n(87757),l=n.n(o),c=(n(47872),n(82357)),s=(n(9544),n(21680)),u=n(75800),f=(n(58186),n(3024)),d=(n(35749),n(29413)),m=n(25633),p=(n(74450),n(13961)),v=n(4519),y=n(86129),g=n(56787),h=n.n(g),b=n(5001),E=n(69218),O=n(34763),Z=n(78278),w=(n(93380),n(30277)),N=p.Z.Title,S=["\u56fe\u6587","\u6a2a\u7248\u77ed\u89c6\u9891","\u7ad6\u7248\u77ed\u89c6\u9891"],C=["\u89c4\u5219\u7b5b\u9009","\u4eba\u5de5"],P=["\u5df2\u4e0a\u7ebf","\u672a\u4e0a\u7ebf"];t.default=function(){var e=(0,b.Z)(O.default),t=function(){var e=(0,i.Z)(l().mark((function e(t,n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t,n);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n=(0,v.useMemo)((function(){return(0,w.getColumns)(e,t)}),[e]),o=(0,v.useState)([]),p=(0,a.Z)(o,2),g=p[0],S=p[1],C=(0,v.useState)({sizeCanChange:!0,showTotal:!0,pageSize:10,current:1,pageSizeChangeResetCurrent:!0}),P=(0,a.Z)(C,2),j=P[0],x=P[1],T=(0,v.useState)(!0),k=(0,a.Z)(T,2),z=k[0],D=k[1],R=(0,v.useState)({}),_=(0,a.Z)(R,2),I=_[0],M=_[1];return(0,v.useEffect)((function(){!function(){var e=j.current,t=j.pageSize;D(!0),h().get("/api/list",{params:(0,r.Z)({page:e,pageSize:t},I)}).then((function(n){S(n.data.list),x((0,r.Z)((0,r.Z)({},j),{},{current:e,pageSize:t,total:n.data.total})),D(!1)}))}()}),[j.current,j.pageSize,JSON.stringify(I)]),v.createElement(c.Z,null,v.createElement(N,{heading:6},e["menu.list.searchTable"]),v.createElement(E.default,{onSearch:function(e){M(e)}}),v.createElement(y.Z,{requiredPermissions:[{resource:"menu.list.searchTable",actions:["write"]}]},v.createElement("div",{className:Z.default["button-group"]},v.createElement(f.Z,null,v.createElement(d.Z,{type:"primary",icon:v.createElement(m.Z,null)},e["searchTable.operations.add"]),v.createElement(d.Z,null,e["searchTable.operations.upload"])),v.createElement(f.Z,null,v.createElement(d.Z,{icon:v.createElement(u.Z,null)},e["searchTable.operation.download"])))),v.createElement(s.Z,{rowKey:"id",loading:z,onChange:function(e){x(e)},pagination:j,columns:n,data:g}))}},93380:function(e,t,n){n.r(t);var r=n(45987),a=n(70885),i=n(42982),o=n(70782),l=n.n(o),c=n(27927),s=n(99517),u=n.n(s),f=n(52239),d=["page","pageSize"],m=l().mock({"list|100":[{id:/[0-9]{8}[-][0-9]{4}/,name:function(){return l().Random.pick(["\u6bcf\u65e5\u63a8\u8350\u89c6\u9891\u96c6","\u6296\u97f3\u77ed\u89c6\u9891\u5019\u9009\u96c6","\u56fd\u9645\u65b0\u95fb\u96c6\u5408"])},"contentType|0-2":0,"filterType|0-1":0,"count|0-2000":0,"createdTime|1-60":0,"status|0-1":0}]}).list;(0,f.Z)({setup:function(){l().mock(new RegExp("/api/list"),(function(e){var t=c.parseUrl(e.url).query,n=t.page,o=void 0===n?1:n,l=t.pageSize,s=o,f=void 0===l?10:l,p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.name,r=e["contentType[]"],o=e["filterType[]"],l=e["createdTime[]"],c=e["status[]"];if(t)return m.filter((function(e){return e.id===t}));var s=(0,i.Z)(m);if(n&&(s=s.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))),r&&(s=s.filter((function(e){return r.includes(e.contentType.toString())}))),o&&(s=s.filter((function(e){return o.includes(e.filterType.toString())}))),l&&2===l.length){var f=(0,a.Z)(l,2),d=f[0],p=f[1];s=s.filter((function(e){var t=u()().subtract(e.createdTime,"days").format("YYYY-MM-DD HH:mm:ss");return!u()(t).isBefore(u()(d))&&!u()(t).isAfter(u()(p))}))}return c&&c.length&&(s=s.filter((function(e){return c.includes(e.status.toString())}))),s}((0,r.Z)(t,d));return{list:p.slice((s-1)*f,s*f),total:p.length}}))}})},82357:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(4519),a=n(18707),i=n(42385),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var c=r.forwardRef((function(e,t){var n,c=e.className,s=e.title,u=e.avatar,f=e.description,d=e.actionList,m=l(e,["className","title","avatar","description","actionList"]),p=(0,(0,r.useContext)(i.E_).getPrefixCls)("card-meta"),v=(0,a.Z)(p,c);return r.createElement("div",o({},m,{ref:t,className:v}),s||f?r.createElement("div",{className:p+"-content"},s&&r.createElement("div",{className:p+"-title"},s),f&&r.createElement("div",{className:p+"-description"},f)):null,u||d?r.createElement("div",{className:(0,a.Z)(p+"-footer ",(n={},n[p+"-footer-only-actions"]=!u,n))},u?r.createElement("div",{className:p+"-avatar"},u):null,d):null)}));c.displayName="CardMeta";var s=c;var u=r.forwardRef((function(e,t){var n,o=e.children,l=e.style,c=e.className,s=e.hoverable,u=(0,(0,r.useContext)(i.E_).getPrefixCls)("card-grid");return r.createElement("div",{ref:t,style:l,className:(0,a.Z)(u,(n={},n[u+"-hoverable"]=s,n),c)},o)}));u.displayName="CardGrid";var f=u,d=n(120),m=n(6431),p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y={size:"default",bordered:!0};var g=r.forwardRef((function(e,t){var n,o,l=(0,r.useContext)(i.E_),c=l.getPrefixCls,u=l.loadingElement,g=l.componentConfig,h=(0,m.Z)(e,y,null===g||void 0===g?void 0:g.Card),b=h.className,E=h.children,O=h.bordered,Z=h.loading,w=h.hoverable,N=h.size,S=h.title,C=h.extra,P=h.cover,j=h.actions,x=h.headerStyle,T=h.bodyStyle,k=v(h,["className","children","bordered","loading","hoverable","size","title","extra","cover","actions","headerStyle","bodyStyle"]),z=c("card"),D=j&&j.length?r.createElement("div",{className:z+"-actions"},r.createElement("div",{className:z+"-actions-right"},j.map((function(e,t){return r.createElement("span",{key:"action-"+t,className:z+"-actions-item"},e)})))):null,R=!1,_=!1,I=r.Children.map(E,(function(e){if(e&&e.type)if(e.type===f)R=!0;else if(e.type===s)return _=!0,r.cloneElement(e,{actionList:D});return e}));return r.createElement("div",p({},k,{ref:t,className:(0,a.Z)(z,z+"-size-"+N,(n={},n[z+"-loading"]=Z,n[z+"-bordered"]=O,n[z+"-hoverable"]=w,n[z+"-contain-grid"]=R,n),b)}),S||C?r.createElement("div",{className:(0,a.Z)(z+"-header",(o={},o[z+"-header-no-title"]=!S,o)),style:x},S&&r.createElement("div",{className:z+"-header-title"},S),C&&r.createElement("div",{className:z+"-header-extra"},C)):null,P?r.createElement("div",{className:z+"-cover"},P):null,r.createElement("div",{className:z+"-body",style:T},Z?u||r.createElement(d.Z,null):I,_?null:D))}));g.Meta=s,g.Grid=f,g.displayName="Card";var h=g},47872:function(e,t,n){n(75009),n(49214)},75800:function(e,t,n){var r=n(87462),a=n(4942),i=n(4519),o=n(41506);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){var n=(0,i.useContext)(o.P).prefixCls,a=e.spin,l=e.className,s=c(c({ref:t},e),{},{className:"".concat(l?l+" ":"").concat(n,"-icon ").concat(n,"-icon-download")});return a&&(s.className="".concat(s.className," ").concat(n,"-icon-loading")),delete s.spin,delete s.isIcon,i.createElement("svg",(0,r.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",width:"1em",height:"1em"},s),i.createElement("path",{d:"m33.072 22.071-9.07 9.071-9.072-9.07M24 5v26m16 4v6H8v-6"}))}var u=i.forwardRef(s);u.defaultProps={isIcon:!0},u.displayName="IconDownload",t.Z=u}}]);
//# sourceMappingURL=6084.e2d8ba8d.chunk.js.map