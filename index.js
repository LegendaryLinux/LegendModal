!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=1)}([function(n,e,t){var o=t(2);"string"==typeof o&&(o=[[n.i,o,""]]);var r={};r.transform=void 0,t(4)(o,r),o.locals&&(n.exports=o.locals)},function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}();t(0);var a=function(){function n(e,t){o(this,n),s.call(this),this.randomInt=Math.floor(99999*Math.random()+1).toString(),this.modalId="legend-modal-content-"+this.randomInt.toString(),this.overlayId="legend-modal-overlay-"+this.randomInt.toString(),this.initialOverflowX=document.body.style.overflowX,this.initialOverflowY=document.body.style.overflowY,this.modalContent=void 0===e||null===e?null:e.cloneNode(!0),this.options={visibleOverlay:!0,closeOnOverlayClick:!0,closeOnEscape:!0,showCloseButton:!0},void 0!==t&&this._setOptions(t)}return i(n,[{key:"_validateModal",value:function(){if(null===this.modalContent)throw"Specified content for modal body appears invalid.";if(document.getElementsByClassName("legend-modal-overlay").length>0)throw"Another LegendModal is currently being displayed!"}}]),n}(),s=function(){var n=this;this._setOptions=function(e){if("object"!==(void 0===e?"undefined":r(e))||Array.isArray(e))throw"Invalid parameter passed as `option` in LegendModal.";n.options=Object.assign(n.options,e)},this.setContent=function(e){n.modalContent=e.cloneNode(!0)},this.setOptions=function(e){n._setOptions(e)},this.showModal=function(){n._validateModal();var e=document.createElement("div");e.id=n.overlayId,e.classList.add("legend-modal-overlay"),n.options.visibleOverlay&&(e.style.background="rgba(0,0,0,0.5)");var t=document.createElement("div");t.id=n.modalId,t.classList.add("legend-modal-base"),t.classList.add("legend-modal-open");var o=n.modalContent.cloneNode(!0);if(o.style.display="block",t.appendChild(o),e.appendChild(t),document.body.appendChild(e),n.options.closeOnOverlayClick&&(e.addEventListener("click",n.closeModal),t.addEventListener("click",function(n){n.stopPropagation()})),n.options.showCloseButton){var r=document.createElement("div");r.classList.add("legend-modal-close-button"),r.innerHTML="X",t.appendChild(r),r.addEventListener("click",n.closeModal)}n.options.closeOnEscape&&document.body.addEventListener("keydown",n.handleEscapeKey),t.style.left="calc(50% - "+(t.offsetWidth/2).toString()+"px)",document.getElementById(n.overlayId).querySelectorAll(".legend-modal-close").forEach(function(e){e.addEventListener("click",n.closeModal)}),document.body.style.overflowY="hidden",document.body.style.overflowX="hidden"},this.handleEscapeKey=function(e){"string"==typeof e.key&&"Escape"!==e.key||n.closeModal()},this.closeModal=function(){var e=document.getElementById(n.overlayId);document.body.removeEventListener("keydown",n.handleEscapeKey),e.parentNode.removeChild(e),document.body.style.overflowX=n.initialOverflowX,document.body.style.overflowY=n.initialOverflowY}};e.default=a},function(n,e,t){e=n.exports=t(3)(!1),e.push([n.i,".legend-modal-overlay{\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 20;\n\n    -webkit-animation: fadein 0.25s;\n    -moz-animation: fadein 0.24s;\n    -ms-animation: fadein 0.25s;\n    -o-animation: fadein 0.25s;\n    animation: fadein 0.25s;\n}\n\n.legend-modal-base{\n    background-color: #ffffff;\n    padding: 1.5em;\n    border: 1px solid #000000;\n    border-radius: 4px;\n    position: fixed;\n    top: 10%;\n    z-index: 25;\n}\n\n.legend-modal-open{\n    -webkit-animation: fadein 0.75s;\n    -moz-animation: fadein 0.75s;\n    -ms-animation: fadein 0.75s;\n    -o-animation: fadein 0.75s;\n    animation: fadein 0.75s;\n}\n\n.legend-modal-close-button{\n    position: absolute;\n    top: 0.5em;\n    right: 0.5em;\n    color: #555555;\n}\n\n.legend-modal-close-button:hover{\n    cursor: pointer;\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n@-moz-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n@-webkit-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n@-ms-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n@-o-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}",""])},function(n,e,t){"use strict";function o(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")})).concat([i]).join("\n")}return[t].join("\n")}function r(n){return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n)))))," */")}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=o(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s=i[1],l=i[2],c=i[3],d={css:s,media:l,sourceMap:c};o[a]?o[a].parts.push(d):t.push(o[a]={id:a,parts:[d]})}return t}function i(n,e){var t=y(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=g[g.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),g.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=g.indexOf(n);e>=0&&g.splice(e,1)}function s(n){var e=document.createElement("style");return n.attrs.type="text/css",c(e,n.attrs),i(n,e),e}function l(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",c(e,n.attrs),i(n,e),e}function c(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function d(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var c=b++;t=h||(h=s(e)),o=f.bind(null,t,c,!1),r=f.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(e),o=p.bind(null,t,e),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),o=u.bind(null,t),r=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function f(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=O(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function u(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function p(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=w(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},v=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),y=function(n){var e={};return function(t){return void 0===e[t]&&(e[t]=n.call(this,t)),e[t]}}(function(n){return document.querySelector(n)}),h=null,b=0,g=[],w=t(5);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return o(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var s=t[a],l=m[s.id];l.refs--,i.push(l)}n&&o(r(n,e),e);for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete m[l.id]}}}};var O=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);