!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,i,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,l=setTimeout(N,t),s?y(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function N(){var e=p();if(j(e))return I(e);l=setTimeout(N,function(e){var n=t-(e-f);return d?v(n,a-(e-c)):n}(e))}function I(e){return l=void 0,m&&r?y(e):(r=i=void 0,u)}function h(){var e=p(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===l)return O(f);if(d)return l=setTimeout(N,t),y(f)}return void 0===l&&(l=setTimeout(N,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=i=l=void 0},h.flush=function(){return void 0===l?u:I(p())},h}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||l.test(e)?f(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form"),j=document.querySelector("input[name=email]"),N=document.querySelector("textarea[name=message]"),I="feedback-form-state";j.addEventListener("input",n((function(e){h.email=e.target.value,localStorage.setItem(I,JSON.stringify(h))}),500)),N.addEventListener("input",n((function(e){h.message=e.target.value,localStorage.setItem(I,JSON.stringify(h))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(I))),localStorage.clear(I),j.value="",N.value="",h.email="",h.message=""}));var h={email:"",message:""};null!==localStorage.getItem(I)&&(h.email=JSON.parse(localStorage.getItem(I)).email,h.message=JSON.parse(localStorage.getItem(I)).message),null!==localStorage.getItem(I)&&(j.value=JSON.parse(localStorage.getItem(I)).email,N.value=JSON.parse(localStorage.getItem(I)).message)}();
//# sourceMappingURL=03-feedback.71454a7e.js.map