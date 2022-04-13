"use strict";(self.webpackChunkarco_design_pro=self.webpackChunkarco_design_pro||[]).push([[8908],{8908:function(e,t,r){r.r(t);var a=r(4942),n=r(35619),l=r(92955),i=(r(63915),r(19050)),o=(r(30874),r(96182)),c=(r(74450),r(13961)),s=r(4519),u=r(43270),f=r.n(u),m=r(35544),d=r(20361);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}var v=c.Z.Title,h=c.Z.Text,y={pure:!0,autoFit:!0,height:80,padding:[10,10,0,10]};function E(e){var t=e.chartData;return s.createElement(m.Chart,p({data:t},y),s.createElement(m.Line,{position:"x*y",size:3,shape:"smooth",color:["name",["#165DFF","rgba(106,161,255,0.3)"]],style:{fields:["name"],callback:function(e){return"\u7c7b\u76ee2"===e?{lineDash:[8,10]}:{}}}}))}function g(e){var t=e.chartData;return m.G2.registerShape("interval","border-radius",{draw:function(e,t){var r=e.points,a=[];a.push(["M",r[0].x,r[0].y]),a.push(["L",r[1].x,r[1].y]),a.push(["L",r[2].x,r[2].y]),a.push(["L",r[3].x,r[3].y]),a.push("Z"),a=this.parsePath(a);var n=t.addGroup();return n.addShape("rect",{attrs:{x:a[1][1],y:a[1][2],width:a[2][1]-a[1][1],height:a[0][2]-a[1][2],fill:e.color,radius:(a[2][1]-a[1][1])/2}}),n}}),s.createElement(m.Chart,p({data:t},y),s.createElement(m.Interval,{position:"x*y",color:["x",function(e){return Number(e)%2===0?"#2CAB40":"#86DF6C"}],shape:"border-radius"}))}function b(e){var t=e.chartData;return s.createElement(m.Chart,p({data:t},y,{padding:[0,20,0,0]}),s.createElement(m.Coordinate,{type:"theta",radius:.8,innerRadius:.7}),s.createElement(m.Interval,{adjust:"stack",position:"count",shape:"sliceShape",color:["name",["#8D4EDA","#00B2FF","#165DFF"]],label:!1}),s.createElement(m.Tooltip,{visible:!0}),s.createElement(m.Legend,{position:"right"}),s.createElement(m.Interaction,{type:"element-single-selected"}))}t.default=function(e){var t=e.chartType,r=e.title,c=e.count,u=e.increment,m=e.diff,p=e.chartData,y=e.loading,N=f()(d.default.card,d.default["card-".concat(t)]);return s.createElement("div",{className:N},s.createElement("div",{className:d.default.statistic},s.createElement(o.Z,{title:s.createElement(v,{heading:6,className:d.default.title},r),loading:y,value:c,groupSeparator:!0}),s.createElement("div",{className:d.default["compare-yesterday"]},s.createElement(h,{type:"secondary",className:d.default["compare-yesterday-text"]},e.compareTime),s.createElement("span",{className:f()(d.default.diff,(0,a.Z)({},d.default["diff-increment"],u))},y?s.createElement(i.Z,{text:{rows:1},animation:!0}):s.createElement(s.Fragment,null,m,u?s.createElement(l.Z,null):s.createElement(n.Z,null))))),s.createElement("div",{className:d.default.chart},y?s.createElement(i.Z,{text:{rows:3,width:Array(3).fill("100%")},animation:!0}):s.createElement(s.Fragment,null,"interval"===t&&s.createElement(g,{chartData:p}),"line"===t&&s.createElement(E,{chartData:p}),"pie"===t&&s.createElement(b,{chartData:p}))))}},19050:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(4519),n=r(18707),l=r(34799);function i(e){var t,r=e.style,i=e.width,o=void 0===i?"60%":i,c=e.rows,s=void 0===c?3:c,u=e.className,f=e.prefixCls,m=(0,n.Z)(f+"-text",u),d=[];for(var p=0;p<s;p++)d.push(a.createElement("li",{className:f+"-text-row",key:p,style:{width:(t=p,(0,l.kJ)(o)?o[t]:s-1===t?o:void 0)}}));return a.createElement("ul",{className:m,style:r},d)}function o(e){var t,r=e.style,l=e.shape,i=void 0===l?"square":l,o=e.size,c=e.position,s=void 0===c?"left":c,u=e.className,f=e.prefixCls,m=(0,n.Z)(f+"-image",((t={})[f+"-image-"+s]=s,t[f+"-image-"+i]=i,t[f+"-image-"+o]=o,t),u);return a.createElement("div",{className:m,style:r})}var c=r(42385),s=r(6431),u=function(){return u=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},u.apply(this,arguments)};function f(e){return(0,l.Kn)(e)?e:{}}var m={text:!0,loading:!0};var d=(0,a.forwardRef)((function(e,t){var r,l=(0,a.useContext)(c.E_),d=l.getPrefixCls,p=l.componentConfig,v=(0,s.Z)(e,m,null===p||void 0===p?void 0:p.Skeleton),h=v.style,y=v.className,E=v.animation,g=v.loading,b=v.image,N=v.text,w=v.children,x=f(b),O=f(N),C=d("skeleton"),j=(0,n.Z)(C,((r={})[C+"-animate"]=E,r),y);function S(){return b&&a.createElement("div",{className:C+"-header"},a.createElement(o,u({prefixCls:C},x)))}return a.createElement(a.Fragment,null,g?a.createElement("div",{className:j,style:h,ref:t},"right"!==x.position&&S(),N&&a.createElement("div",{className:C+"-content"},a.createElement(i,u({prefixCls:C},O))),"right"===x.position&&S()):w)}));d.displayName="Skeleton";var p=d},63915:function(e,t,r){r(75009)},96182:function(e,t,r){r.d(t,{Z:function(){return x}});var a=r(4519),n=r(2030),l=r(99517),i=r.n(l),o=r(18707),c=r(41651),s=r(78820),u=function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,l=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)i.push(a.value)}catch(o){n={error:o}}finally{try{a&&!a.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return i},f=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function m(e,t){var r=e;return f.reduce((function(e,t){var a=u(t,2),n=a[0],l=a[1];if(-1!==e.indexOf(n)){var i=Math.floor(r/l);return r-=i*l,e.replace(new RegExp(n+"+","g"),(function(e){var t=e.length;return(0,s.S)(i.toString(),t,"0")}))}return e}),t)}var d=r(42385),p=function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,l=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)i.push(a.value)}catch(o){n={error:o}}finally{try{a&&!a.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return i};var v=(0,a.forwardRef)((function(e,t){var r=(0,a.useContext)(d.E_).getPrefixCls,n=e.className,l=e.style,s=e.title,u=e.styleValue,f=e.value,v=e.start,h=e.format,y=e.onFinish,E=(0,c.p3)(f,h)||i()(),g=(0,c.p3)(e.now,h),b=r("statistic"),N=p((0,a.useState)(m(Math.max(E.diff(g,"millisecond"),0),h)),2),w=N[0],x=N[1],O=(0,a.useRef)(null),C=function(){clearInterval(O.current),O.current=null};return(0,a.useEffect)((function(){return!O.current&&v&&E.valueOf()>=Date.now()&&(O.current=setInterval((function(){var e=E.diff((0,c.Iz)(),"millisecond");e<=0&&(C(),y&&y());var t=m(Math.max(e,0),h);x(t)}),1e3/30)),function(){C()}}),[e.start]),a.createElement("div",{ref:t,className:(0,o.Z)(""+b,b+"-countdown",n),style:l},s&&a.createElement("div",{className:b+"-title"},s),a.createElement("div",{className:b+"-content"},a.createElement("div",{className:b+"-value",style:u},w)))}));v.displayName="StatisticCountdown",v.defaultProps={format:"HH:mm:ss",start:!0};var h=v,y=r(34799),E=r(19050),g=r(6431),b=function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,l=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)i.push(a.value)}catch(o){n={error:o}}finally{try{a&&!a.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return i},N={countFrom:0,countDuration:2e3};var w=(0,a.forwardRef)((function(e,t){var r=(0,a.useContext)(d.E_),l=r.getPrefixCls,c=r.componentConfig,s=(0,g.Z)(e,N,null===c||void 0===c?void 0:c.Statistic),u=s.className,f=s.style,m=s.title,p=s.extra,v=s.groupSeparator,h=s.precision,w=s.prefix,x=s.suffix,O=s.format,C=s.styleValue,j=s.loading,S=(0,a.useRef)(),Z=b((0,a.useState)("value"in s?s.value:void 0),2),P=Z[0],D=Z[1],k=l("statistic"),F=function(e,t){void 0===e&&(e=s.countFrom),void 0===t&&(t=s.value);var r=s.countDuration;e!==t&&(S.current=new n.Z({from:{value:e},to:{value:t},duration:r,easing:"quartOut",onUpdate:function(e){D(e.value.toFixed(h))},onFinish:function(){D(t)}}),S.current.start())};(0,a.useEffect)((function(){return s.countUp?(S.current&&S.current.stop(),P!==s.value?F(Number(P),s.value):F()):D(s.value),function(){S.current&&S.current.stop(),S.current=null}}),[s.value]),(0,a.useImperativeHandle)(t,(function(){return{countUp:F}}));var H=(0,a.useMemo)((function(){var e=P;O&&(e=i()(P).format(O)),h&&(e=Number(P).toFixed(h));var t=String(e).split(".")[0],r=String(e).split(".")[1];return v&&(0,y.hj)(Number(P))&&(t=Number(t).toLocaleString("en-US")),{int:t,decimal:r}}),[O,v,h,P]),I=H.int,M=H.decimal;return a.createElement("div",{className:(0,o.Z)(""+k,u),style:f},m&&a.createElement("div",{className:k+"-title"},m),a.createElement("div",{className:k+"-content"},a.createElement(E.Z,{animation:!0,loading:!!j,text:{rows:1,width:"100%"}},a.createElement("div",{className:k+"-value",style:C},(0,y.hj)(Number(P))?a.createElement("span",{className:k+"-value-int"},a.createElement("span",{className:k+"-value-prefix"},w)," ",I):P,void 0!==M||x?a.createElement("span",{className:k+"-value-decimal"},(0,y.hj)(Number(P))&&void 0!==M&&"."+M," ",x&&a.createElement("span",{className:k+"-value-suffix"},x)):null)),p&&a.createElement("div",{className:k+"-extra"},p)))}));w.displayName="Statistic",w.Countdown=h;var x=w},30874:function(e,t,r){r(75009),r(63915)},35619:function(e,t,r){var a=r(87462),n=r(4942),l=r(4519),i=r(41506);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r=(0,l.useContext)(i.P).prefixCls,n=e.spin,o=e.className,s=c(c({ref:t},e),{},{className:"".concat(o?o+" ":"").concat(r,"-icon ").concat(r,"-icon-arrow-fall")});return n&&(s.className="".concat(s.className," ").concat(r,"-icon-loading")),delete s.spin,delete s.isIcon,l.createElement("svg",(0,a.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",width:"1em",height:"1em"},s),l.createElement("path",{d:"M24.008 41.99a.01.01 0 0 1-.016 0l-9.978-11.974A.01.01 0 0 1 14.02 30H33.98a.01.01 0 0 1 .007.016l-9.978 11.975Z"}),l.createElement("path",{fill:"currentColor",stroke:"none",d:"M24 42 14 30h20L24 42Z"}),l.createElement("path",{d:"M22 6H26V32H22z"}),l.createElement("path",{fill:"currentColor",stroke:"none",d:"M22 6H26V32H22z"}))}var u=l.forwardRef(s);u.defaultProps={isIcon:!0},u.displayName="IconArrowFall",t.Z=u},92955:function(e,t,r){var a=r(87462),n=r(4942),l=r(4519),i=r(41506);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r=(0,l.useContext)(i.P).prefixCls,n=e.spin,o=e.className,s=c(c({ref:t},e),{},{className:"".concat(o?o+" ":"").concat(r,"-icon ").concat(r,"-icon-arrow-rise")});return n&&(s.className="".concat(s.className," ").concat(r,"-icon-loading")),delete s.spin,delete s.isIcon,l.createElement("svg",(0,a.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",width:"1em",height:"1em"},s),l.createElement("path",{d:"M23.992 6.01a.01.01 0 0 1 .016 0l9.978 11.974a.01.01 0 0 1-.007.016H14.02a.01.01 0 0 1-.007-.016l9.978-11.975Z"}),l.createElement("path",{fill:"currentColor",stroke:"none",d:"m24 6 10 12H14L24 6Z"}),l.createElement("path",{d:"M26 42H30V68H26z",transform:"rotate(-180 26 42)"}),l.createElement("path",{fill:"currentColor",stroke:"none",d:"M26 42H30V68H26z",transform:"rotate(-180 26 42)"}))}var u=l.forwardRef(s);u.defaultProps={isIcon:!0},u.displayName="IconArrowRise",t.Z=u},20361:function(e,t,r){r.r(t),t.default={card:"card--EEC9I","card-line":"card-line--wvsB8","card-interval":"card-interval--jsi_7","card-pie":"card-pie--auaoz",statistic:"statistic--y51PN",chart:"chart--dOKDL",title:"title--gXpmX","compare-yesterday-text":"compare-yesterday-text--Vr5kB",diff:"diff--WSski","diff-increment":"diff-increment--Vsqxa"}}}]);
//# sourceMappingURL=8908.035af1c2.chunk.js.map