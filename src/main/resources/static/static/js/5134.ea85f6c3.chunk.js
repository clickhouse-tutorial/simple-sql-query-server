"use strict";(self.webpackChunkarco_design_pro=self.webpackChunkarco_design_pro||[]).push([[5134],{2030:function(t,i){var n=function(t){return function(i){return Math.pow(i,t)}},s=function(t){return function(i){return 1-Math.abs(Math.pow(i-1,t))}},e=function(t){return function(i){return i<.5?n(t)(2*i)/2:s(t)(2*i-1)/2+.5}},r=n(2),a=s(2),h=e(2),u=n(3),o=s(3),c=e(3),f=n(4),d=s(4),p=e(4),l=n(5),m=s(5),I=e(5),O=function(t){var i=7.5625,n=2.75;return t<1/n?i*t*t:t<2/n?i*(t-=1.5/n)*t+.75:t<2.5/n?i*(t-=2.25/n)*t+.9375:i*(t-=2.625/n)*t+.984375},y=function(t){return 1-O(1-t)},M=Object.freeze({linear:function(t){return t},quadIn:r,quadOut:a,quadInOut:h,cubicIn:u,cubicOut:o,cubicInOut:c,quartIn:f,quartOut:d,quartInOut:p,quintIn:l,quintOut:m,quintInOut:I,sineIn:function(t){return 1+Math.sin(Math.PI/2*t-Math.PI/2)},sineOut:function(t){return Math.sin(Math.PI/2*t)},sineInOut:function(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2},bounceOut:O,bounceIn:y,bounceInOut:function(t){return t<.5?.5*y(2*t):.5*O(2*t-1)+.5}}),b=function(t){var i=t.from,n=t.to,s=t.duration,e=t.delay,r=t.easing,a=t.onStart,h=t.onUpdate,u=t.onFinish;for(var o in i)void 0===n[o]&&(n[o]=i[o]);for(var c in n)void 0===i[c]&&(i[c]=n[c]);this.from=i,this.to=n,this.duration=s||500,this.delay=e||0,this.easing=r||"linear",this.onStart=a,this.onUpdate=h||function(){},this.onFinish=u,this.startTime=Date.now()+this.delay,this.started=!1,this.finished=!1,this.timer=null,this.keys={}};b.prototype.update=function(){if(this.time=Date.now(),!(this.time<this.startTime)&&!this.finished)if(this.elapsed!==this.duration){for(var t in this.elapsed=this.time-this.startTime,this.elapsed=this.elapsed>this.duration?this.duration:this.elapsed,this.to)this.keys[t]=this.from[t]+(this.to[t]-this.from[t])*M[this.easing](this.elapsed/this.duration);this.started||(this.onStart&&this.onStart(this.keys),this.started=!0),this.onUpdate(this.keys)}else this.finished||(this.finished=!0,this.onFinish&&this.onFinish(this.keys))},b.prototype.start=function(){var t=this;this.startTime=Date.now()+this.delay;!function i(){t.update(),t.timer=requestAnimationFrame(i),t.finished&&(cancelAnimationFrame(t.timer),t.timer=null)}()},b.prototype.stop=function(){cancelAnimationFrame(this.timer),this.timer=null},i.Z=b}}]);
//# sourceMappingURL=5134.ea85f6c3.chunk.js.map