function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{STjf:function(n,t,e){"use strict";e.r(t),e.d(t,"ion_ripple_effect",(function(){return a}));var i=e("sWJ8");e("AfW+");var a=function(){function n(t){_classCallCheck(this,n),Object(i.l)(this,t),this.type="bounded"}return _createClass(n,[{key:"addRipple",value:function(n,t){var e=this;return regeneratorRuntime.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a){Object(i.g)((function(){var c=e.el.getBoundingClientRect(),l=c.width,f=c.height,u=Math.sqrt(l*l+f*f),m=Math.max(f,l),d=e.unbounded?m:u+o,p=Math.floor(m*s),b=d/p,w=n-c.left,y=t-c.top;e.unbounded&&(w=.5*l,y=.5*f);var k=w-.5*p,v=y-.5*p,h=.5*l-w,g=.5*f-y;Object(i.m)((function(){var n=document.createElement("div");n.classList.add("ripple-effect");var t=n.style;t.top=v+"px",t.left=k+"px",t.width=t.height=p+"px",t.setProperty("--final-scale","".concat(b)),t.setProperty("--translate-end","".concat(h,"px, ").concat(g,"px")),(e.el.shadowRoot||e.el).appendChild(n),setTimeout((function(){a((function(){r(n)}))}),325)}))}))})));case 1:case"end":return a.stop()}}),null,null,null,Promise)}},{key:"render",value:function(){var n,t=Object(i.e)(this);return Object(i.i)(i.a,{role:"presentation",class:(n={},_defineProperty(n,t,!0),_defineProperty(n,"unbounded",this.unbounded),n)})}},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"}}]),n}(),r=function(n){n.classList.add("fade-out"),setTimeout((function(){n.remove()}),200)},o=10,s=.5}}]);