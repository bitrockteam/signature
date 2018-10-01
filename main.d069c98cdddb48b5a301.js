!function(n){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(i,o,function(e){return n[e]}.bind(null,o));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=9)}([function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var o=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[t].concat(r).concat([o]).join("\n")}var s;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&i[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},function(n,e,t){var i,o,r={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),l=null,c=0,u=[],d=t(4);function p(n,e){for(var t=0;t<n.length;t++){var i=n[t],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(y(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(y(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function h(n,e){for(var t=[],i={},o=0;o<n.length;o++){var r=n[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):t.push(i[s]={id:s,parts:[a]})}return t}function m(n,e){var t=a(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===n.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),u.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,o)}}function f(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=u.indexOf(n);e>=0&&u.splice(e,1)}function b(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),g(e,n.attrs),m(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function y(n,e){var t,i,o,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var s=c++;t=l||(l=b(e)),i=w.bind(null,t,s,!1),o=w.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(e,n.attrs),m(n,e),e}(e),i=function(n,e,t){var i=t.css,o=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=d(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,e),o=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(e),i=function(n,e){var t=e.css,i=e.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){f(t)});return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=h(n,e);return p(t,e),function(n){for(var i=[],o=0;o<t.length;o++){var s=t[o];(a=r[s.id]).refs--,i.push(a)}n&&p(h(n,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}};var v,x=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function w(n,e,t,i){var o=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=x(e,o);else{var r=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(r,s[e]):n.appendChild(r)}}},function(n,e,t){var i=t(3);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,o);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,i=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){var i=t(6);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,o);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type="submit"],\ninput[type="reset"],\ninput[type="button"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n.button:hover,\nbutton:hover,\ninput[type="submit"]:hover,\ninput[type="reset"]:hover,\ninput[type="button"]:hover,\n.button:focus,\nbutton:focus,\ninput[type="submit"]:focus,\ninput[type="reset"]:focus,\ninput[type="button"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n.button.button-primary,\nbutton.button-primary,\ninput[type="submit"].button-primary,\ninput[type="reset"].button-primary,\ninput[type="button"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type="submit"].button-primary:hover,\ninput[type="reset"].button-primary:hover,\ninput[type="button"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type="submit"].button-primary:focus,\ninput[type="reset"].button-primary:focus,\ninput[type="button"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type="email"],\ninput[type="number"],\ninput[type="search"],\ninput[type="text"],\ninput[type="tel"],\ninput[type="url"],\ninput[type="password"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n/* Removes awkward default styles on some inputs for iOS */\ninput[type="email"],\ninput[type="number"],\ninput[type="search"],\ninput[type="text"],\ninput[type="tel"],\ninput[type="url"],\ninput[type="password"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\ninput[type="email"]:focus,\ninput[type="number"]:focus,\ninput[type="search"]:focus,\ninput[type="text"]:focus,\ninput[type="tel"]:focus,\ninput[type="url"]:focus,\ninput[type="password"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\nfieldset {\n  padding: 0;\n  border-width: 0; }\ninput[type="checkbox"],\ninput[type="radio"] {\n  display: inline; }\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: "";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n',""])},function(n,e,t){var i=t(8);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,o);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"body {\n  padding: 40px 0;\n}\n\ncode {\n  overflow-x: auto;\n}\n\nh4 {\n  margin-top: 30px;\n}\n\n.options {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 20px;\n}",""])},function(n,e,t){"use strict";t.r(e);t(2),t(5),t(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,o=n=>"function"==typeof n&&i.has(n),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(n,e,t=null)=>{let i=e;for(;i!==t;){const e=i.nextSibling;n.removeChild(i),i=e}},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,u=new RegExp(`${l}|${c}`),d=(()=>{const n=document.createElement("div");return n.setAttribute("style","{{bad value}}"),"{{bad value}}"!==n.getAttribute("style")})();class p{constructor(n,e){this.parts=[],this.element=e;let t=-1,i=0;const o=[],r=e=>{const s=e.content,a=document.createTreeWalker(s,133,null,!1);let c,p;for(;a.nextNode();){t++,c=p;const e=p=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const o=e.attributes;let r=0;for(let n=0;n<o.length;n++)o[n].value.indexOf(l)>=0&&r++;for(;r-- >0;){const o=n.strings[i],r=f.exec(o)[2],s=d&&"style"===r?"style$":/^[a-zA-Z-]*$/.test(r)?r:r.toLowerCase(),a=e.getAttribute(s).split(u);this.parts.push({type:"attribute",index:t,name:r,strings:a}),e.removeAttribute(s),i+=a.length-1}}"TEMPLATE"===e.tagName&&r(e)}else if(3===e.nodeType){const n=e.nodeValue;if(n.indexOf(l)<0)continue;const r=e.parentNode,s=n.split(u),a=s.length-1;i+=a;for(let n=0;n<a;n++)r.insertBefore(""===s[n]?m():document.createTextNode(s[n]),e),this.parts.push({type:"node",index:t++});r.insertBefore(""===s[a]?m():document.createTextNode(s[a]),e),o.push(e)}else if(8===e.nodeType)if(e.nodeValue===l){const n=e.parentNode,r=e.previousSibling;null===r||r!==c||r.nodeType!==Node.TEXT_NODE?n.insertBefore(m(),e):t--,this.parts.push({type:"node",index:t++}),o.push(e),null===e.nextSibling?n.insertBefore(m(),e):t--,p=c,i++}else{let n=-1;for(;-1!==(n=e.nodeValue.indexOf(l,n+1));)this.parts.push({type:"node",index:-1})}}};r(e);for(const n of o)n.parentNode.removeChild(n)}}const h=n=>-1!==n.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(n,e,t){this._parts=[],this.template=n,this.processor=e,this._getTemplate=t}update(n){let e=0;for(const t of this._parts)void 0!==t&&t.setValue(n[e]),e++;for(const n of this._parts)void 0!==n&&n.commit()}_clone(){const n=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let t=0,i=0;const o=n=>{const r=document.createTreeWalker(n,133,null,!1);let s=r.nextNode();for(;t<e.length&&null!==s;){const n=e[t];if(h(n))if(i===n.index){if("node"===n.type){const n=this.processor.handleTextExpression(this._getTemplate);n.insertAfterNode(s),this._parts.push(n)}else this._parts.push(...this.processor.handleAttributeExpressions(s,n.name,n.strings));t++}else i++,"TEMPLATE"===s.nodeName&&o(s.content),s=r.nextNode();else this._parts.push(void 0),t++}};return o(n),r&&(document.adoptNode(n),customElements.upgrade(n)),n}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class g{constructor(n,e,t,i){this.strings=n,this.values=e,this.type=t,this.processor=i}getHTML(){const n=this.strings.length-1;let e="",t=!0;for(let i=0;i<n;i++){const n=this.strings[i];e+=n;const o=n.lastIndexOf(">");!(t=(o>-1||t)&&-1===n.indexOf("<",o+1))&&d&&(e=e.replace(f,(n,e,t,i)=>"style"===t?`${e}style$${i}`:n)),e+=t?c:l}return e+=this.strings[n]}getTemplateElement(){const n=document.createElement("template");return n.innerHTML=this.getHTML(),n}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const y=n=>null===n||!("object"==typeof n||"function"==typeof n);class v{constructor(n,e,t){this.dirty=!0,this.element=n,this.name=e,this.strings=t,this.parts=[];for(let n=0;n<t.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new x(this)}_getValue(){const n=this.strings,e=n.length-1;let t="";for(let i=0;i<e;i++){t+=n[i];const e=this.parts[i];if(void 0!==e){const n=e.value;if(null!=n&&(Array.isArray(n)||"string"!=typeof n&&n[Symbol.iterator]))for(const e of n)t+="string"==typeof e?e:String(e);else t+="string"==typeof n?n:String(n)}}return t+=n[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(n){this.value=void 0,this.committer=n}setValue(n){n===a||y(n)&&n===this.value||(this.value=n,o(n)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const n=this.value;this.value=a,n(this)}this.value!==a&&this.committer.commit()}}class w{constructor(n){this.value=void 0,this._pendingValue=void 0,this.templateFactory=n}appendInto(n){this.startNode=n.appendChild(m()),this.endNode=n.appendChild(m())}insertAfterNode(n){this.startNode=n,this.endNode=n.nextSibling}appendIntoPart(n){n._insert(this.startNode=m()),n._insert(this.endNode=m())}insertAfterPart(n){n._insert(this.startNode=m()),this.endNode=n.endNode,n.endNode=this.startNode}setValue(n){this._pendingValue=n}commit(){for(;o(this._pendingValue);){const n=this._pendingValue;this._pendingValue=a,n(this)}const n=this._pendingValue;n!==a&&(y(n)?n!==this.value&&this._commitText(n):n instanceof g?this._commitTemplateResult(n):n instanceof Node?this._commitNode(n):Array.isArray(n)||n[Symbol.iterator]?this._commitIterable(n):void 0!==n.then?this._commitPromise(n):this._commitText(n))}_insert(n){this.endNode.parentNode.insertBefore(n,this.endNode)}_commitNode(n){this.value!==n&&(this.clear(),this._insert(n),this.value=n)}_commitText(n){const e=this.startNode.nextSibling;n=null==n?"":n,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=n:this._commitNode(document.createTextNode("string"==typeof n?n:String(n))),this.value=n}_commitTemplateResult(n){const e=this.templateFactory(n);if(this.value&&this.value.template===e)this.value.update(n.values);else{const t=new b(e,n.processor,this.templateFactory),i=t._clone();t.update(n.values),this._commitNode(i),this.value=t}}_commitIterable(n){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let t,i=0;for(const o of n)void 0===(t=e[i])&&(t=new w(this.templateFactory),e.push(t),0===i?t.appendIntoPart(this):t.insertAfterPart(e[i-1])),t.setValue(o),t.commit(),i++;i<e.length&&(e.length=i,this.clear(t&&t.endNode))}_commitPromise(n){this.value=n,n.then(e=>{this.value===n&&(this.setValue(e),this.commit())})}clear(n=this.startNode){s(this.startNode.parentNode,n.nextSibling,this.endNode)}}class E{constructor(n,e,t){if(this.value=void 0,this._pendingValue=void 0,2!==t.length||""!==t[0]||""!==t[1])throw new Error("Boolean attributes can only contain a single expression");this.element=n,this.name=e,this.strings=t}setValue(n){this._pendingValue=n}commit(){for(;o(this._pendingValue);){const n=this._pendingValue;this._pendingValue=a,n(this)}if(this._pendingValue===a)return;const n=!!this._pendingValue;this.value!==n&&(n?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=n,this._pendingValue=a}}class z extends v{constructor(n,e,t){super(n,e,t),this.single=2===t.length&&""===t[0]&&""===t[1]}_createPart(){return new _(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class _ extends x{}class k{constructor(n,e){this.value=void 0,this._pendingValue=void 0,this.element=n,this.eventName=e}setValue(n){this._pendingValue=n}commit(){for(;o(this._pendingValue);){const n=this._pendingValue;this._pendingValue=a,n(this)}this._pendingValue!==a&&(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=a)}handleEvent(n){"function"==typeof this.value?this.value.call(this.element,n):"function"==typeof this.value.handleEvent&&this.value.handleEvent(n)}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=new class{handleAttributeExpressions(n,e,t){const i=e[0];return"."===i?new z(n,e.slice(1),t).parts:"@"===i?[new k(n,e.slice(1))]:"?"===i?[new E(n,e.slice(1),t)]:new v(n,e,t).parts}handleTextExpression(n){return new w(n)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=new Map,N=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function T(n,e,t=function(n){let e=S.get(n.type);void 0===e&&(e=new Map,S.set(n.type,e));let t=e.get(n.strings);return void 0===t&&(t=new p(n,n.getTemplateElement()),e.set(n.strings,t)),t}){let i=N.get(e);void 0===i&&(s(e,e.firstChild),N.set(e,i=new w(t)),i.appendInto(e)),i.setValue(n),i.commit()}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const A=(n,...e)=>new g(n,e,"html",C),L=[{label:"Bitrock",url:"https://bitrock.it"},{label:"Databiz",url:"https://databiz.it"},{label:"Radicalbit",url:"https://radicabit.io"}],V=n=>n.length?(n=>A`<div style="color:rgb(0,0,0);line-height:normal;font-family:Helvetica;font-size:11px">${n}</div>`)(n):"",F=n=>A`
<div class="gmail_signature" data-smartmail="gmail_signature">
  <div dir="ltr">
    <div>
      <div dir="ltr">
        <div>
          <div dir="ltr">
            <div>
              <div dir="ltr">
                <div style="line-height:normal">
                  <font color="#626b72" face="Calibri, sans-serif"><span style="font-size:16px"><b>${n.firstname}&nbsp;</b></span></font><b
                    style="color:rgb(44,57,64);font-size:11pt;font-family:Calibri,sans-serif"><span lang="EN-US" style="font-size:12pt">${n.lastname}</span></b>
                </div>
                <div style="line-height:normal;font-family:Helvetica;font-size:11px">
                  <font color="#75787b"><b>${n.role}</b></font>
                </div>
              </div>
              <div dir="ltr"><b><br></b></div>
              <div dir="ltr">
                <div style="color:rgb(0,0,0);line-height:normal;font-family:Helvetica;font-size:11px"><a href="mailto:${n.email}"
                    target="_blank">
                    <font color="#1155cc">${n.email}</font>
                  </a></div>
                ${V(n.phone)}
                <div style="color:rgb(0,0,0);line-height:normal;font-family:Helvetica;font-size:11px"><br></div>
                <div style="color:rgb(0,0,0);line-height:normal;font-family:Helvetica;font-size:11px">
                  <div style="font-size:12px;line-height:normal">
                    <font color="#626b72"><b style="font-size:13px"><span style="font-size:12px"><b style="color:rgb(179,67,37)">${n.company.toUpperCase()}</b><span
                            style="color:rgb(179,67,37)">&nbsp;</span><b style="color:rgb(179,67,37)">S.r.l.</b>&nbsp;</span></b></font>
                  </div>
                  <div style="line-height:normal;font-size:10px"><b style="font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">
                      <font color="#666666"><a href="https://maps.google.com/?q=Milano+%E2%80%93+Via+Borsieri+41&amp;entry=gmail&amp;source=g"
                          style="color:rgb(17,85,204)" target="_blank">Milano</a></font>
                    </b>
                    <font color="#444444" style="font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">&nbsp;<a
                        href="https://maps.google.com/?q=Milano+%E2%80%93+Via+Borsieri+41&amp;entry=gmail&amp;source=g"
                        style="color:rgb(17,85,204)" target="_blank">– Via Borsieri ${n.company,"41"}</a></font>
                  </div>
                  ${(n=>n!==L[2].label?A`<div style="line-height:normal;font-size:10px"><b style="color:rgb(68,68,68);font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">
          <font color="#666666"><a href="https://maps.google.com/?q=Treviso+%E2%80%93+Viale+della+Repubblica+156&amp;entry=gmail&amp;source=g"
              style="color:rgb(17,85,204)" target="_blank">Treviso</a></font>
        </b>
        <font color="#444444" style="color:rgb(68,68,68);font-family:&quot;Calibri Light&quot;,sans-serif;font-size:11.3333px">&nbsp;<a
            href="https://maps.google.com/?q=Treviso+%E2%80%93+Viale+della+Repubblica+156&amp;entry=gmail&amp;source=g"
            style="color:rgb(17,85,204)" target="_blank">– Viale della Repubblica 156</a>/A</font>
      </div>`:"")(n.company)}
                  ${(n=>{const e=L.filter(e=>e.label===n)[0];return A`<div style="line-height:normal;font-family:&quot;Calibri Light&quot;,sans-serif;color:rgb(68,68,68);font-size:11.3333px"><a
                href=${e.url} style="color:rgb(17,85,204)" target="_blank">${e.url}</a></div>`})(n.company)}
                </div>
              </div>
              <div dir="ltr">
                <div><br></div>
                ${R=n.company,A`<div>
    <img src="https://github.com/bitrockteam/signature/blob/master/logos/${R?R.toLowerCase():"bitrock"}.png?raw=true"
      height="24"><br>
    </div>`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;var R;const $=n=>{const e=new CustomEvent("update-data",{detail:{key:n.target.name,value:n.target.value}});document.body.dispatchEvent(e)},I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},M=document.querySelector("#root"),O={firstname:"",lastname:"",role:"",email:"",phone:"",company:"Bitrock"},j=()=>A`
  <main class="container">
    <h1>Email signature builder</h1>
    ${(n=>A`
  <form>
    <div class="row">
      <label for="firstname">First name:</label>
      <input class="twelve columns" type="text" name="firstname" 
        @keyup=${n=>$(n)}>
    </div>
    <div class="row">
      <label for="lastname">Last name:</label>
      <input class="twelve columns" type="text" name="lastname" 
        @keyup=${n=>$(n)}>
    </div>
    <div class="row">
      <label for="role">Role:</label>
      <input class="twelve columns" type="text" name="role"
        @keyup=${n=>$(n)}>
    </div>
    <div class="row">
      <label for="email">Email:</label>
      <input class="twelve columns" type="email" name="email"
        @keyup=${n=>$(n)}>
    </div>
    <div class="row">
      <label for="phone">Phone number:</label>
      <input class="twelve columns" type="text" name="phone"
        @keyup=${n=>$(n)}>
    </div>
    <div class="row">
      <label for="company">Company:</label>
      <div class="options">
        ${L.map(e=>A`
          <span><input type="radio" value=${e.label} name="company"
            ?checked=${e.label===n.company}
            @change=${n=>$(n)}
          > ${e.label}</span>
        `)}
      </div>
    </div>
  </form>
  <div id="preview">
    <h4>Preview</h4>
    ${F(n)}
  </div>
  <div id="code">
    <h4>HTML Code (for copy & paste)</h4>
    <pre>
      <code></code>
    </pre>
  </code>
`)(O)}
  </main>
`,B=()=>{T(j(),M);const n=document.querySelector("pre code"),e=document.querySelector("#preview div");n.innerHTML=(n=>String(n).replace(/[&<>"'`=\/]/g,n=>I[n]))(e.innerHTML)};document.body.addEventListener("update-data",n=>{const e=n.detail;O[e.key]=e.value,console.log(n.detail,O),B()}),B(),console.log("Project started..."),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(n=>{console.log("SW registered: ",n)}).catch(n=>{console.log("SW registration failed: ",n)})}),document.querySelector(".js-warning").style.display="none"}]);
//# sourceMappingURL=main.d069c98cdddb48b5a301.js.map