(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"k/cL":function(e,t,n){"use strict";n.r(t),n.d(t,"startTapClick",(function(){return s}));var o=n("HWnG");const s=e=>{let t,n,s,v,p=10*-u,f=0;const L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,w=e=>{p=Object(o.j)(e),b(e)},h=()=>{clearTimeout(v),v=void 0,n&&(T(!1),n=void 0)},E=e=>{n||(()=>void 0!==t&&null!==t.parentElement)()||(t=void 0,j(i(e),e))},b=e=>{j(void 0,e)},j=(e,t)=>{if(e&&e===n)return;clearTimeout(v),v=void 0;const{x:s,y:i}=Object(o.k)(t);if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(r)||g(n,s,i),T(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const n=a(e)?0:d;e.classList.remove(r),v=setTimeout(()=>{g(e,s,i),v=void 0},n)}n=e},g=(e,t,n)=>{f=Date.now(),e.classList.add(r);const o=L&&c(e);o&&o.addRipple&&(k(),s=o.addRipple(t,n))},k=()=>{void 0!==s&&(s.then(e=>e()),s=void 0)},T=e=>{k();const t=n;if(!t)return;const o=l-Date.now()+f;if(e&&o>0&&!a(t)){const e=setTimeout(()=>{t.classList.remove(r),m.delete(t)},l);m.set(t,e)}else t.classList.remove(r)},O=document;O.addEventListener("ionScrollStart",e=>{t=e.target,h()}),O.addEventListener("ionScrollEnd",()=>{t=void 0}),O.addEventListener("ionGestureCaptured",h),O.addEventListener("touchstart",e=>{p=Object(o.j)(e),E(e)},!0),O.addEventListener("touchcancel",w,!0),O.addEventListener("touchend",w,!0),O.addEventListener("mousedown",e=>{const t=Object(o.j)(e)-u;p<t&&E(e)},!0),O.addEventListener("mouseup",e=>{const t=Object(o.j)(e)-u;p<t&&b(e)},!0)},i=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const n=t[e];if(n.classList&&n.classList.contains("ion-activatable"))return n}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="activated",d=200,l=200,u=2500}}]);