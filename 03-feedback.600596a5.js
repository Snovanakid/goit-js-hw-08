!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,a,f,u,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function x(e){return l=e,u=setTimeout(j,t),d?b(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function j(){var e=g();if(O(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-c);return s?p(n,a-(e-l)):n}(e))}function h(e){return u=void 0,v&&r?b(e):(r=i=void 0,f)}function w(){var e=g(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return x(c);if(s)return u=setTimeout(j,t),b(c)}return void 0===u&&(u=setTimeout(j,t)),f}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},w.flush=function(){return void 0===u?f:h(g())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var x={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector("input")};x.form.addEventListener("input",e(t)((function(e){if(e.target===x.input){O.email=e.target.value;var t=JSON.stringify(O);localStorage.setItem("feedback-form-state",t)}if(e.target===x.textarea){O.text=e.target.value;var n=JSON.stringify(O);localStorage.setItem("feedback-form-state",n)}}),500));var O={email:"",text:""};!function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);x.textarea.value=t.text,x.input.value=t.email}}(),x.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),x.form.reset()}))}();
//# sourceMappingURL=03-feedback.600596a5.js.map