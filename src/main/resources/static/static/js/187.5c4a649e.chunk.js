(self.webpackChunkarco_design_pro=self.webpackChunkarco_design_pro||[]).push([[187],{20187:function(t,n,e){"use strict";e.r(n);var r=e(1413),i=e(70782),u=e.n(i),a=e(99517),s=e.n(a),o=e(27927),c=e(52239),f=["\u6d3b\u8dc3\u7528\u6237\u6570","\u5185\u5bb9\u751f\u4ea7\u91cf","\u5185\u5bb9\u70b9\u51fb\u91cf","\u5185\u5bb9\u66dd\u5149\u91cf"],h=[0,600,1e3,2e3,4e3],d=["\u7eaf\u6587\u672c","\u56fe\u6587\u7c7b","\u89c6\u9891\u7c7b"];(0,c.Z)({setup:function(){u().mock(new RegExp("/api/multi-dimension/overview"),(function(){var t=u().mock({"array|4":[function(){return u().Random.natural(0,1e4)}]}).array,n=[];return f.forEach((function(t,e){return n=n.concat(function(t,n){return u().mock({"list|10":[{"id|+1":1,time:function(){return s()().subtract(this.id,"days").format("MM-DD")},count:function(){return u().Random.natural(h[n],h[n+1])},name:t}]}).list.map((function(t){return delete t.id,t}))}(t,e))})),{overviewData:t,chartData:n}})),u().mock(new RegExp("/api/multi-dimension/activity"),(function(){return u().mock({"list|3":[{"name|+1":["\u5206\u4eab\u91cf","\u8bc4\u8bba\u91cf","\u70b9\u8d5e\u91cf"],count:function(){return u().Random.natural(1e3,1e4)}}]}).list})),u().mock(new RegExp("/api/multi-dimension/polar"),(function(){return{list:["\u56fd\u9645","\u5a31\u4e50","\u4f53\u80b2","\u8d22\u7ecf","\u79d1\u6280","\u5176\u4ed6"].map((function(t){return(0,r.Z)({item:t},function(){var t={};return d.forEach((function(n){t[n]=u().Random.natural(0,100)})),t}())})),fields:d}})),u().mock(new RegExp("/api/multi-dimension/card"),(function(t){var n=o.parseUrl(t.url).query.type;return u().mock({count:function(){return u().Random.natural(1e3,1e4)},increment:function(){return u().Random.boolean()},diff:function(){return u().Random.natural(100,1e3)},chartType:n,chartData:function(){return t="\u7c7b\u76ee1",new Array(12).fill(0).map((function(){return{y:u().Random.natural(1e3,1e4)}})).sort((function(t,n){return t.y-n.y})).map((function(n,e){return(0,r.Z)((0,r.Z)({},n),{},{x:e,name:t})}));var t}})})),u().mock(new RegExp("/api/multi-dimension/content-source"),(function(){return d.map((function(t){return function(t){var n=[];["UGC\u539f\u521b","\u56fd\u5916\u7f51\u7ad9","\u8f6c\u8f7d\u6587\u7ae0","\u884c\u4e1a\u62a5\u544a","\u5176\u4ed6"].forEach((function(e){n.push({type:e,value:u().Random.natural(100,1e4),name:t})}));var e=n.reduce((function(t,n){return t+n.value}),0);return n.map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{value:Number((t.value/e).toFixed(2))})}))}(t).map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{category:t})}))})).flat()}))}})},99517:function(t){t.exports=function(){"use strict";var t=1e3,n=6e4,e=36e5,r="millisecond",i="second",u="minute",a="hour",s="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},y={s:v,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,c),u=e-i<0,a=n.clone().add(r+(u?-1:1),c);return+(-(r+(e-i)/(u?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:s,D:d,h:a,m:u,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",g={};g[M]=p;var D=function(t){return t instanceof O},w=function(t,n,e){var r;if(!t)return M;if("string"==typeof t)g[t]&&(r=t),n&&(g[t]=n,r=t);else{var i=t.name;g[i]=t,r=i}return!e&&r&&(M=r),r||!e&&M},S=function(t,n){if(D(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new O(e)},_=y;_.l=w,_.i=D,_.w=function(t,n){return S(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var O=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(_.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(m);if(r){var i=r[2]-1||0,u=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,u)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,u)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return _},v.isValid=function(){return!(this.$d.toString()===l)},v.isSame=function(t,n){var e=S(t);return this.startOf(n)<=e&&e<=this.endOf(n)},v.isAfter=function(t,n){return S(t)<this.startOf(n)},v.isBefore=function(t,n){return this.endOf(n)<S(t)},v.$g=function(t,n,e){return _.u(t)?this[n]:this.set(e,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,n){var e=this,r=!!_.u(n)||n,f=_.p(t),l=function(t,n){var i=_.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(s)},m=function(t,n){return _.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},$=this.$W,p=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,p):l(0,p+1);case o:var M=this.$locale().weekStart||0,g=($<M?$+7:$)-M;return l(r?v-g:v+(6-g),p);case s:case d:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case u:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,n){var e,o=_.p(t),f="set"+(this.$u?"UTC":""),l=(e={},e[s]=f+"Date",e[d]=f+"Date",e[c]=f+"Month",e[h]=f+"FullYear",e[a]=f+"Hours",e[u]=f+"Minutes",e[i]=f+"Seconds",e[r]=f+"Milliseconds",e)[o],m=o===s?this.$D+(n-this.$W):n;if(o===c||o===h){var $=this.clone().set(d,1);$.$d[l](m),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},v.set=function(t,n){return this.clone().$set(t,n)},v.get=function(t){return this[_.p(t)]()},v.add=function(r,f){var d,l=this;r=Number(r);var m=_.p(f),$=function(t){var n=S(l);return _.w(n.date(n.date()+Math.round(t*r)),l)};if(m===c)return this.set(c,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===s)return $(1);if(m===o)return $(7);var p=(d={},d[u]=n,d[a]=e,d[i]=t,d)[m]||1,v=this.$d.getTime()+r*p;return _.w(v,this)},v.subtract=function(t,n){return this.add(-1*t,n)},v.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),u=this.$H,a=this.$m,s=this.$M,o=e.weekdays,c=e.months,f=function(t,e,i,u){return t&&(t[e]||t(n,r))||i[e].substr(0,u)},h=function(t){return _.s(u%12||12,t,"0")},d=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:f(e.monthsShort,s,c,3),MMMM:f(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:f(e.weekdaysMin,this.$W,o,2),ddd:f(e.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(u),HH:_.s(u,2,"0"),h:h(1),hh:h(2),a:d(u,a,!0),A:d(u,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,n){return n||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,d,l){var m,$=_.p(d),p=S(r),v=(p.utcOffset()-this.utcOffset())*n,y=this-p,M=_.m(this,p);return M=(m={},m[h]=M/12,m[c]=M,m[f]=M/3,m[o]=(y-v)/6048e5,m[s]=(y-v)/864e5,m[a]=y/e,m[u]=y/n,m[i]=y/t,m)[$]||y,l?M:_.a(M)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return g[this.$L]},v.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=w(t,n,!0);return r&&(e.$L=r),e},v.clone=function(){return _.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),k=O.prototype;return S.prototype=k,[["$ms",r],["$s",i],["$m",u],["$H",a],["$W",s],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),S.extend=function(t,n){return t.$i||(t(n,O,S),t.$i=!0),S},S.locale=w,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=g[M],S.Ls=g,S.p={},S}()}}]);
//# sourceMappingURL=187.5c4a649e.chunk.js.map