module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/window.mock.js":
/*!********************************!*\
  !*** ./helpers/window.mock.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, window) {\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar win;\n\nif (typeof window !== \"undefined\" && typeof window.getComputedStyle === \"function\") {\n  win = window;\n} else {\n  win = {\n    getComputedStyle: function getComputedStyle() {\n      return {\n        getPropertyValue: function getPropertyValue() {}\n      };\n    },\n    addEventListener: function addEventListener() {}\n  };\n}\n\n;\nmodule.exports = win;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(win, \"win\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\helpers\\\\window.mock.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), __webpack_require__(/*! ./helpers/window.mock */ \"./helpers/window.mock.js\")))\n\n//# sourceURL=webpack://app/./helpers/window.mock.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app/components/Header/Header.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/app/components/Header/Header.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".Header-vendor__concurrently-32InY {\\n  padding-bottom: 6rem;\\n  position: relative;\\n  color: var(--base-color); }\\n  .Header-vendor__concurrently-32InY::before {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    background: var(--background); }\\n\\n.Header-vendor__header-2U9uu {\\n  padding-top: 40px; }\\n  .Header-vendor__header-body-3PP2E {\\n    margin-top: calc(124px - 5vh); }\\n  .Header-vendor__header-label-3B3vp {\\n    position: relative;\\n    display: block;\\n    z-index: 2;\\n    letter-spacing: 2px;\\n    font-size: 40px;\\n    line-height: 47px; }\\n\\n@media screen and (max-width: 766px) {\\n  .Header-vendor__header-body-3PP2E {\\n    margin-top: calc(62px); }\\n  .Header-vendor__header-label-3B3vp {\\n    width: 180px;\\n    letter-spacing: 2px;\\n    font-size: 24px;\\n    line-height: 27px; } }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"vendor__concurrently\": \"Header-vendor__concurrently-32InY\",\n\t\"vendor__header\": \"Header-vendor__header-2U9uu\",\n\t\"vendor__header-body\": \"Header-vendor__header-body-3PP2E\",\n\t\"vendor__header-label\": \"Header-vendor__header-label-3B3vp\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://app/./src/app/components/Header/Header.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/styles/main.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/assets/styles/main.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/Roboto-Light.eot */ \"./src/assets/fonts/Roboto-Light.eot\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/Roboto-Light.woff */ \"./src/assets/fonts/Roboto-Light.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/Roboto-Light.ttf */ \"./src/assets/fonts/Roboto-Light.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../fonts/Roboto-Regular.eot */ \"./src/assets/fonts/Roboto-Regular.eot\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../fonts/Roboto-Regular.woff */ \"./src/assets/fonts/Roboto-Regular.woff\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../fonts/Roboto-Regular.ttf */ \"./src/assets/fonts/Roboto-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\n// Module\nexports.push([module.i, \":root {\\n  --base-color: #fff;\\n  --base-input-name: #363a3e;\\n  --border-standard-sm: 8px;\\n  --border-input: 8px;\\n  --background: #363a3e;\\n  --button: #ff4f54; }\\n\\n@font-face {\\n  font-family: \\\"Roboto Light\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"embedded-opentype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: \\\"Roboto Regular\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format(\\\"embedded-opentype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format(\\\"woff\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal; }\\n\\n.main-vendor__converter-wrap-2kgoL {\\n  background: var(--base-color);\\n  width: calc(2 * 100% / 3);\\n  -webkit-transform: translateY(-3rem);\\n          transform: translateY(-3rem);\\n  border-radius: var(--border-standard-sm);\\n  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.2); }\\n\\n.main-vendor__converter-body-3VGid {\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-preferred-size: auto;\\n      flex-basis: auto;\\n  -ms-flex-align: baseline;\\n      align-items: baseline;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  padding: 28px 40px 36px; }\\n\\n.main-vendor__converter-item-Anm4y {\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-pack: start;\\n      justify-content: flex-start;\\n  -ms-flex-direction: column-reverse;\\n      flex-direction: column-reverse; }\\n  .main-vendor__converter-item_changer-3FJZS {\\n    padding: 0 16px; }\\n  .main-vendor__converter-item__button-2flym {\\n    background: var(--button);\\n    color: var(--base-color);\\n    border: none;\\n    border-radius: var(--border-standard-sm);\\n    padding: 11px 30px;\\n    font-weight: 500;\\n    outline: none; }\\n    .main-vendor__converter-item__button-2flym:disabled {\\n      opacity: 0.5; }\\n  .main-vendor__converter-item-Anm4y label {\\n    font-size: 12px;\\n    line-height: 14px;\\n    color: var(--base-input-name);\\n    margin-bottom: 10px;\\n    font-weight: 500; }\\n  .main-vendor__converter-item-Anm4y input {\\n    outline: none;\\n    height: 40px;\\n    padding: 0 16px;\\n    background: rgba(54, 58, 62, 0.08);\\n    border-radius: var(--border-input);\\n    border: none;\\n    color: var(--base-input-name); }\\n  .main-vendor__converter-item-Anm4y:first-child, .main-vendor__converter-item-Anm4y:nth-child(4) {\\n    margin-right: 24px; }\\n  .main-vendor__converter-item-Anm4y:nth-child(n + 2) {\\n    margin-top: 20px; }\\n  .main-vendor__converter-item-Anm4y:last-child {\\n    margin-top: 28px; }\\n\\n@media screen and (max-width: 766px) {\\n  .main-vendor__converter-wrap-2kgoL {\\n    width: 100%;\\n    -webkit-transform: translateY(-2rem);\\n            transform: translateY(-2rem); }\\n  .main-vendor__converter-body-3VGid {\\n    -ms-flex-pack: end;\\n        justify-content: flex-end; }\\n  .main-vendor__converter-item-Anm4y {\\n    width: 100%; }\\n    .main-vendor__converter-item_changer-3FJZS {\\n      position: relative; }\\n      .main-vendor__converter-item_changer-3FJZS img {\\n        position: absolute;\\n        top: 16px; }\\n    .main-vendor__converter-item-Anm4y:first-child, .main-vendor__converter-item-Anm4y:nth-child(4) {\\n      margin-right: 0; }\\n    .main-vendor__converter-item-Anm4y:nth-child(n + 2) {\\n      margin-top: 20px; } }\\n\\n/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */\\n/**\\n * 1. Set default font family to sans-serif.\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\n *    user zoom.\\n */\\nhtml {\\n  font-family: sans-serif;\\n  /* 1 */\\n  -ms-text-size-adjust: 100%;\\n  /* 2 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */ }\\n\\n/**\\n * Remove default margin.\\n */\\nbody {\\n  margin: 0; }\\n\\n/* HTML5 display definitions\\n   ========================================================================== */\\n/**\\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\\n * and Firefox.\\n * Correct `block` display not defined for `main` in IE 11.\\n */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmain,\\nmenu,\\nnav,\\nsection,\\nsummary {\\n  display: block; }\\n\\n/**\\n * 1. Correct `inline-block` display not defined in IE 8/9.\\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\\n */\\naudio,\\ncanvas,\\nprogress,\\nvideo {\\n  display: inline-block;\\n  /* 1 */\\n  vertical-align: baseline;\\n  /* 2 */ }\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\naudio:not([controls]) {\\n  display: none;\\n  height: 0; }\\n\\n/**\\n * Address `[hidden]` styling not present in IE 8/9/10.\\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\\n */\\n[hidden],\\ntemplate {\\n  display: none; }\\n\\n/* Links\\n   ========================================================================== */\\n/**\\n * Remove the gray background color from active links in IE 10.\\n */\\na {\\n  background-color: transparent; }\\n\\n/**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\na:active,\\na:hover {\\n  outline: 0; }\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\\n */\\nabbr[title] {\\n  border-bottom: 1px dotted; }\\n\\n/**\\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\\n */\\nb,\\nstrong {\\n  font-weight: bold; }\\n\\n/**\\n * Address styling not present in Safari and Chrome.\\n */\\ndfn {\\n  font-style: italic; }\\n\\n/**\\n * Address variable `h1` font-size and margin within `section` and `article`\\n * contexts in Firefox 4+, Safari, and Chrome.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/**\\n * Address styling not present in IE 8/9.\\n */\\nmark {\\n  background: #ff0;\\n  color: #000; }\\n\\n/**\\n * Address inconsistent and variable font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsup {\\n  top: -0.5em; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Remove border when inside `a` element in IE 8/9/10.\\n */\\nimg {\\n  border: 0; }\\n\\n/**\\n * Correct overflow not hidden in IE 9/10/11.\\n */\\nsvg:not(:root) {\\n  overflow: hidden; }\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * Address margin not present in IE 8/9 and Safari.\\n */\\nfigure {\\n  margin: 1em 40px; }\\n\\n/**\\n * Address differences between Firefox and other browsers.\\n */\\nhr {\\n  box-sizing: content-box;\\n  height: 0; }\\n\\n/**\\n * Contain overflow in all browsers.\\n */\\npre {\\n  overflow: auto; }\\n\\n/**\\n * Address odd `em`-unit font size rendering in all browsers.\\n */\\ncode,\\nkbd,\\npre,\\nsamp {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\\n * styling of `select`, unless a `border` property is set.\\n */\\n/**\\n * 1. Correct color not being inherited.\\n *    Known issue: affects color of disabled elements.\\n * 2. Correct font properties not being inherited.\\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  color: inherit;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n  margin: 0;\\n  /* 3 */ }\\n\\n/**\\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\\n */\\nbutton {\\n  overflow: visible; }\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\\n * Correct `select` style inheritance in Firefox.\\n */\\nbutton,\\nselect {\\n  text-transform: none; }\\n\\n/**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\n *    and `video` controls.\\n * 2. Correct inability to style clickable `input` types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    `input` and others.\\n */\\nbutton,\\nhtml input[type=\\\"button\\\"],\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n  /* 2 */\\n  cursor: pointer;\\n  /* 3 */ }\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\nbutton[disabled],\\nhtml input[disabled] {\\n  cursor: default; }\\n\\n/**\\n * Remove inner padding and border in Firefox 4+.\\n */\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n  border: 0;\\n  padding: 0; }\\n\\n/**\\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\ninput {\\n  line-height: normal; }\\n\\n/**\\n * It's recommended that you don't attempt to style these elements.\\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\\n *\\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\\n * 2. Remove excess padding in IE 8/9/10.\\n */\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\\n * `font-size` values of the `input`, it causes the cursor style of the\\n * decrement button to change from `default` to `text`.\\n */\\ninput[type=\\\"number\\\"]::-webkit-inner-spin-button,\\ninput[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\\n *    (include `-moz` to future-proof).\\n */\\ninput[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  /* 2 */\\n  box-sizing: content-box; }\\n\\n/**\\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\\n * Safari (but not Chrome) clips the cancel button when the search input has\\n * padding (and `textfield` appearance).\\n */\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\n * Define consistent border, margin, and padding.\\n */\\nfieldset {\\n  border: 1px solid #c0c0c0;\\n  margin: 0 2px;\\n  padding: 0.35em 0.625em 0.75em; }\\n\\n/**\\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\\n */\\nlegend {\\n  border: 0;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Remove default vertical scrollbar in IE 8/9/10/11.\\n */\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\n * Don't inherit the `font-weight` (applied by a rule above).\\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\\n */\\noptgroup {\\n  font-weight: bold; }\\n\\n/* Tables\\n   ========================================================================== */\\n/**\\n * Remove most spacing between table cells.\\n */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\ntd,\\nth {\\n  padding: 0; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box; }\\n\\n.main-container-2PDZZ {\\n  padding: 0 60px;\\n  width: 100%;\\n  margin: 0 auto; }\\n\\n#main-customVendor-13WJx {\\n  z-index: -1;\\n  background: #eef4f7;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%; }\\n\\nli,\\nul,\\nnav {\\n  margin: 0;\\n  list-style: none;\\n  padding: 0; }\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh5,\\nh6 {\\n  padding: 0 !important;\\n  margin: 0 !important; }\\n\\nbody {\\n  font-family: \\\"Roboto Regular\\\", sans-serif; }\\n\\n@media screen and (max-width: 766px) {\\n  .main-container-2PDZZ {\\n    padding: 0 20px;\\n    width: 100%;\\n    margin: 0 auto; } }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"vendor__converter-wrap\": \"main-vendor__converter-wrap-2kgoL\",\n\t\"vendor__converter-body\": \"main-vendor__converter-body-3VGid\",\n\t\"vendor__converter-item\": \"main-vendor__converter-item-Anm4y\",\n\t\"vendor__converter-item_changer\": \"main-vendor__converter-item_changer-3FJZS\",\n\t\"vendor__converter-item__button\": \"main-vendor__converter-item__button-2flym\",\n\t\"container\": \"main-container-2PDZZ\",\n\t\"customVendor\": \"main-customVendor-13WJx\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://app/./src/assets/styles/main.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(document) {/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! global/document */ \"global/document\")))\n\n//# sourceURL=webpack://app/./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://app/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _fs = _interopRequireDefault(__webpack_require__(/*! fs */ \"fs\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ \"react-loadable\"));\n\nvar _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ \"react-helmet\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _history = __webpack_require__(/*! history */ \"history\");\n\nvar _server = _interopRequireDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _url = __webpack_require__(/*! url */ \"url\");\n\nvar _reduxConnect = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n\nvar _StyleContext = _interopRequireDefault(__webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\"));\n\nvar _configureStore = _interopRequireDefault(__webpack_require__(/*! ../src/configureStore */ \"./src/configureStore.js\"));\n\nvar _routes = _interopRequireDefault(__webpack_require__(/*! ../src/app/routes/routes */ \"./src/app/routes/routes.js\"));\n\nvar _staticRoutes = __webpack_require__(/*! ../src/app/routes/staticRoutes */ \"./src/app/routes/staticRoutes.js\");\n\nvar _sagas = _interopRequireDefault(__webpack_require__(/*! ../src/sagas */ \"./src/sagas.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar PORT = process.env.NODE_PORT || 3000;\nvar app = (0, _express.default)();\napp.use(\"/\", _express.default.static(_path.default.resolve(\"build\")));\nvar initialState = {};\napp.get(\"*\", function (req, res) {\n  var url = req.originalUrl || req.url;\n  var history = (0, _history.createMemoryHistory)({\n    initialEntries: [url]\n  });\n  var store = (0, _configureStore.default)(initialState, history);\n  var location = (0, _url.parse)(url);\n  var helpers = {};\n\n  var indexFile = _path.default.resolve(\"build/main.html\");\n\n  store.runSaga(_sagas.default).toPromise().then(function () {\n    return (0, _reduxConnect.loadOnServer)({\n      store: store,\n      location: location,\n      routes: _routes.default,\n      helpers: helpers\n    }).then(function () {\n      var context = {};\n\n      if (context.url) {\n        req.header(\"Location\", context.url);\n        return res.send(302);\n      }\n\n      var css = new Set();\n\n      var insertCss = function insertCss() {\n        for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n          styles[_key] = arguments[_key];\n        }\n\n        return styles.forEach(function (style) {\n          return css.add(style._getCss());\n        });\n      };\n\n      var dynamicRoutes = _toConsumableArray(_routes.default);\n\n      dynamicRoutes[0].routes = [].concat(_toConsumableArray(dynamicRoutes[0].routes), _toConsumableArray(_staticRoutes.StaticRoutesConfig));\n\n      var appContent = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_StyleContext.default.Provider, {\n        value: {\n          insertCss: insertCss\n        }\n      }, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {\n        store: store,\n        key: \"provider\"\n      }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {\n        location: location,\n        context: context\n      }, /*#__PURE__*/_react.default.createElement(_reduxConnect.ReduxAsyncConnect, {\n        helpers: helpers,\n        routes: dynamicRoutes\n      })))));\n\n      var helmet = _reactHelmet.default.renderStatic();\n\n      _fs.default.readFile(indexFile, \"utf8\", function (err, data) {\n        if (err) {\n          if (+err.message === 404) {\n            res.status(404).send(\"Page not found | 404\");\n          } else {\n            res.status(500).send(\"Internal server error | 500\");\n          }\n        }\n\n        data = data.replace(\"__STYLES__\", _toConsumableArray(css).join(\"\"));\n        data = data.replace(\"__LOADER__\", \"\");\n        data = data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(appContent, \"</div>\"));\n        data = data.replace(\"<div id=root></div>\", \"<div id=root>\".concat(appContent, \"</div>\"));\n        data = data.replace(\"<title></title>\", \"\".concat(helmet.title.toString()));\n        data = data.replace('<meta name=\"description\" content=\"\"/>', helmet.meta.toString());\n        data = data.replace(\"<script>__INITIAL_DATA__</script>\", \"<script>window.__INITIAL_DATA__ = \".concat(JSON.stringify(store.getState()), \";</script>\"));\n        return res.send(data);\n      });\n    });\n  });\n  store.close();\n});\n\n_reactLoadable.default.preloadAll().then(function () {\n  app.listen(PORT, function () {\n    console.log(\"Server is listening on PORT : \".concat(PORT));\n  });\n});\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PORT, \"PORT\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\server\\\\index.js\");\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\server\\\\index.js\");\n  reactHotLoader.register(initialState, \"initialState\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\server\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./server/index.js?");

/***/ }),

/***/ "./src/app/App.jsx":
/*!*************************!*\
  !*** ./src/app/App.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _router = __webpack_require__(/*! ./selectors/router */ \"./src/app/selectors/router.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _main = _interopRequireDefault(__webpack_require__(/*! @/assets/styles/main.scss */ \"./src/assets/styles/main.scss\"));\n\nvar _withStyles = _interopRequireDefault(__webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\"));\n\nvar _Header = _interopRequireDefault(__webpack_require__(/*! ./components/Header/Header.jsx */ \"./src/app/components/Header/Header.jsx\"));\n\nvar _Footer = _interopRequireDefault(__webpack_require__(/*! ./components/Footer/Footer.jsx */ \"./src/app/components/Footer/Footer.jsx\"));\n\nvar _dec, _dec2, _class, _class2, _temp;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar App = (_dec = (0, _reactRedux.connect)(function (state) {\n  return {\n    location: (0, _router.getRouterLocation)(state)\n  };\n}, null), _dec2 = (0, _withStyles.default)(_main.default), _dec(_class = _dec2(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"renderSiteMeta\",\n    value: function renderSiteMeta() {\n      var canonical = this.props.location.toJS().pathname.toLowerCase();\n      return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, {\n        link: [{\n          href: canonical,\n          rel: \"canonical\"\n        }],\n        meta: [{\n          name: \"viewport\",\n          content: \"width=device-width, initial-scale=1.0\"\n        }]\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var route = this.props.route;\n      return /*#__PURE__*/_react.default.createElement(\"div\", null, this.renderSiteMeta(), /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: \"page\"\n      }, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(\"main\", {\n        className: \"main\"\n      }, (0, _reactRouterConfig.renderRoutes)(route.routes)), /*#__PURE__*/_react.default.createElement(_Footer.default, null), /*#__PURE__*/_react.default.createElement(\"div\", {\n        id: _main.default.customVendor\n      })));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return App;\n}(_react.Component), _defineProperty(_class2, \"propTypes\", {\n  location: _propTypes.default.shape().isRequired,\n  route: _propTypes.default.shape().isRequired\n}), _temp)) || _class) || _class);\nvar _default = App;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\App.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\App.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/App.jsx?");

/***/ }),

/***/ "./src/app/actions/converterActions/index.js":
/*!***************************************************!*\
  !*** ./src/app/actions/converterActions/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getLoadedCurrencies = getLoadedCurrencies;\nexports.setCurrentState = setCurrentState;\nexports.fetchCurrencies = exports.fetchMongoDB = exports.MONGO_DATABASE_STORE = exports.FETCH_MONGO_DATABASE = exports.FETCH_VENDOR_CURRENCY = exports.FETCH_AMOUNT = exports.FETCH_CURRENCY = void 0;\n\nvar _converterFilter = __webpack_require__(/*! ../vendor/converterFilter */ \"./src/app/actions/vendor/converterFilter/index.js\");\n\nvar _services = _interopRequireDefault(__webpack_require__(/*! ../../services */ \"./src/app/services/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar REQUEST = \"REQUEST\";\nvar SUCCESS = \"SUCCESS\";\nvar FAILURE = \"FAILURE\";\n\nfunction createRequest(base) {\n  return [REQUEST, SUCCESS, FAILURE].reduce(function (acc, type) {\n    acc[type] = \"\".concat(base, \"_\").concat(type);\n    return acc;\n  }, {});\n}\n\nfunction action(type) {\n  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _objectSpread({\n    type: type\n  }, payload);\n}\n/*****************\r\n * Currency block*\r\n *****************/\n\n\nvar FETCH_CURRENCY = _converterFilter.CONVERTER_REDUCER.SET_DATA_CONVERTER_VALUE;\nexports.FETCH_CURRENCY = FETCH_CURRENCY;\nvar FETCH_AMOUNT = _converterFilter.CONVERTER_REDUCER.SET_AMOUNT;\nexports.FETCH_AMOUNT = FETCH_AMOUNT;\nvar FETCH_VENDOR_CURRENCY = _converterFilter.CONVERTER_REDUCER.SET_VENDOR_CURRENCY;\nexports.FETCH_VENDOR_CURRENCY = FETCH_VENDOR_CURRENCY;\nvar FETCH_MONGO_DATABASE = _converterFilter.CONVERTER_REDUCER.SET_MONGO_DATABASE_STORE;\nexports.FETCH_MONGO_DATABASE = FETCH_MONGO_DATABASE;\nvar MONGO_DATABASE_STORE = createRequest(FETCH_MONGO_DATABASE);\n/***********************\r\n * FETCH ESSENTIAL DATA*\r\n ***********************/\n\nexports.MONGO_DATABASE_STORE = MONGO_DATABASE_STORE;\nvar fetchMongoDB = {\n  request: function request(store) {\n    return action(MONGO_DATABASE_STORE[REQUEST], {\n      store: store\n    });\n  },\n  success: function success(store, response) {\n    return action(MONGO_DATABASE_STORE[SUCCESS], {\n      store: store,\n      response: response\n    });\n  },\n  failure: function failure(store, error) {\n    return action(MONGO_DATABASE_STORE[FAILURE], {\n      store: store,\n      error: error\n    });\n  }\n};\nexports.fetchMongoDB = fetchMongoDB;\n\nvar fetchCurrencies = function fetchCurrencies(currency) {\n  var requiredFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  return action(FETCH_CURRENCY, {\n    currency: currency,\n    requiredFields: requiredFields\n  });\n};\n\nexports.fetchCurrencies = fetchCurrencies;\n\nvar fetchAmount = function fetchAmount(amount) {\n  return action(FETCH_AMOUNT, {\n    amount: amount\n  });\n};\n\nvar fetchVendorCurrency = function fetchVendorCurrency(currencies) {\n  return action(FETCH_VENDOR_CURRENCY, {\n    currencies: currencies\n  });\n};\n/********************************************************\r\n * ************************ REDUX THUNK *******************\r\n ********************************************************/\n\n\nfunction getLoadedCurrencies(params) {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var fetch, response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return new Promise(function (res, rej) {\n                res(_services.default.fetchCurrency(params));\n              }).catch(function (error) {\n                return rej(error);\n              });\n\n            case 2:\n              fetch = _context.sent;\n              response = fetch.response;\n              dispatch(fetchCurrencies(response));\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n}\n\nfunction setCurrentState() {\n  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return function (dispatch) {\n    var data = [];\n\n    if (!Array.isArray(payload)) {\n      Object.keys(payload).map(function (item) {\n        data[0] = _toConsumableArray(item);\n      });\n    }\n\n    dispatch(fetchAmount(payload));\n  };\n}\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(REQUEST, \"REQUEST\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(SUCCESS, \"SUCCESS\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(FAILURE, \"FAILURE\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(createRequest, \"createRequest\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(action, \"action\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(FETCH_CURRENCY, \"FETCH_CURRENCY\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(FETCH_AMOUNT, \"FETCH_AMOUNT\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(FETCH_VENDOR_CURRENCY, \"FETCH_VENDOR_CURRENCY\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(FETCH_MONGO_DATABASE, \"FETCH_MONGO_DATABASE\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(MONGO_DATABASE_STORE, \"MONGO_DATABASE_STORE\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(fetchMongoDB, \"fetchMongoDB\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(fetchCurrencies, \"fetchCurrencies\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(fetchAmount, \"fetchAmount\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(fetchVendorCurrency, \"fetchVendorCurrency\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(getLoadedCurrencies, \"getLoadedCurrencies\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n  reactHotLoader.register(setCurrentState, \"setCurrentState\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\converterActions\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/actions/converterActions/index.js?");

/***/ }),

/***/ "./src/app/actions/vendor/converterFilter/index.js":
/*!*********************************************************!*\
  !*** ./src/app/actions/vendor/converterFilter/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CONVERTER_REDUCER = void 0;\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar CONVERTER_REDUCER = {\n  SET_MONGO_DATABASE_STORE: \"SET_MONGO_DATABASE_STORE\",\n  SET_DATA_CONVERTER_VALUE: \"SET_DATA_CONVERTER_VALUE\",\n  LOAD_FETCH_CURRENCY: \"LOAD_FETCH_CURRENCY\",\n  RESET_ERROR_MESSAGE: \"RESET_ERROR_MESSAGE\",\n  SET_AMOUNT: \"SET_AMOUNT\",\n  SET_VENDOR_CURRENCY: \"SET_VENDOR_CURRENCY\"\n};\nexports.CONVERTER_REDUCER = CONVERTER_REDUCER;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CONVERTER_REDUCER, \"CONVERTER_REDUCER\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\actions\\\\vendor\\\\converterFilter\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/actions/vendor/converterFilter/index.js?");

/***/ }),

/***/ "./src/app/components/Converter.jsx":
/*!******************************************!*\
  !*** ./src/app/components/Converter.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _main = _interopRequireDefault(__webpack_require__(/*! @/assets/styles/main.scss */ \"./src/assets/styles/main.scss\"));\n\nvar _switcher = _interopRequireDefault(__webpack_require__(/*! @/assets/img/switcher.png */ \"./src/assets/img/switcher.png\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Selector = _interopRequireDefault(__webpack_require__(/*! ./global/Selector.jsx */ \"./src/app/components/global/Selector.jsx\"));\n\nvar _converterSelectors = __webpack_require__(/*! ../selectors/converterSelectors */ \"./src/app/selectors/converterSelectors/index.js\");\n\nvar _converterActions = __webpack_require__(/*! ../actions/converterActions */ \"./src/app/actions/converterActions/index.js\");\n\nvar _dec, _class, _class2, _temp, _submitBundle, _changeHandler;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar CONVERT = \"convert\";\nvar Converter = (_dec = (0, _reactRedux.connect)(function (state) {\n  return {\n    amount: (0, _converterSelectors.getAmount)(state),\n    currency: (0, _converterSelectors.getCurrency)(state),\n    available_currencies: (0, _converterSelectors.getAvailableCurrencies)(state)\n  };\n}, {\n  getLoadedCurrencies: _converterActions.getLoadedCurrencies,\n  setCurrentState: _converterActions.setCurrentState\n}), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_React$Component) {\n  _inherits(Converter, _React$Component);\n\n  var _super = _createSuper(Converter);\n\n  function Converter(props) {\n    var _this;\n\n    _classCallCheck(this, Converter);\n\n    _this = _super.call(this, props);\n\n    _submitBundle.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: function value(e) {\n        e.preventDefault();\n        _this.state.loading = true;\n\n        _this.props.getLoadedCurrencies(CONVERT);\n      }\n    });\n\n    _changeHandler.set(_assertThisInitialized(_this), {\n      writable: true,\n      value: function value(e) {\n        e.persist();\n\n        _this.props.setCurrentState(_defineProperty({}, e.target.name, e.target.value));\n\n        _this.setState(function (prev) {\n          return _objectSpread(_objectSpread({}, prev), _defineProperty({}, e.target.name, e.target.value));\n        });\n      }\n    });\n\n    _this.state = {\n      amount: \"\",\n      current_currency: \"\",\n      to_currency: \"\",\n      loading: false\n    };\n    _this.textInput = /*#__PURE__*/_react.default.createRef();\n    _this.focusTextInput = _this.focusTextInput.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Converter, [{\n    key: \"focusTextInput\",\n    value: function focusTextInput() {\n      console.log(this.textInput);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          amount = _this$props.amount,\n          currency = _this$props.currency;\n      return /*#__PURE__*/_react.default.createElement(\"form\", {\n        className: _main.default[\"vendor__converter-body\"]\n      }, /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _main.default[\"vendor__converter-item\"]\n      }, /*#__PURE__*/_react.default.createElement(\"input\", {\n        id: \"initial_value\",\n        type: \"text\",\n        name: \"amount\",\n        onChange: _classPrivateFieldGet(this, _changeHandler) // value={!!this.state.amount ? this.state.amount.replace(0, \"\") : 0}\n\n      }), /*#__PURE__*/_react.default.createElement(\"label\", {\n        htmlFor: \"initial_value\"\n      }, \"Amount\")), /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _main.default[\"vendor__converter-item\"]\n      }, /*#__PURE__*/_react.default.createElement(\"input\", {\n        id: \"current_currency\",\n        type: \"text\",\n        name: \"current_currency\",\n        onChange: _classPrivateFieldGet(this, _changeHandler),\n        ref: this.textInput\n      }), /*#__PURE__*/_react.default.createElement(_Selector.default, {\n        items: this.props.available_currencies\n      }), /*#__PURE__*/_react.default.createElement(\"label\", {\n        htmlFor: \"from_value\"\n      }, \"From\")), /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _main.default[\"vendor__converter-item_changer\"]\n      }, /*#__PURE__*/_react.default.createElement(\"img\", {\n        src: _switcher.default,\n        alt: _switcher.default.toUpperCase()\n      })), /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _main.default[\"vendor__converter-item\"]\n      }, /*#__PURE__*/_react.default.createElement(\"input\", {\n        id: \"to_value\",\n        type: \"text\",\n        name: \"to_currency\",\n        onChange: _classPrivateFieldGet(this, _changeHandler)\n      }), /*#__PURE__*/_react.default.createElement(\"label\", {\n        htmlFor: \"to_value\"\n      }, \"To\")), /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _main.default[\"vendor__converter-item\"]\n      }, !this.state.loading && /*#__PURE__*/_react.default.createElement(\"button\", {\n        className: _main.default[\"vendor__converter-item__button\"],\n        onClick: _classPrivateFieldGet(this, _submitBundle),\n        type: \"submit\",\n        disabled: this.state.loading\n      }, \"Convert\"), this.state.loading && /*#__PURE__*/_react.default.createElement(\"button\", {\n        className: _main.default[\"vendor__converter-item__button\"],\n        onClick: _classPrivateFieldGet(this, _submitBundle),\n        type: \"submit\",\n        disabled: this.state.loading\n      }, \"Loading\")));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Converter;\n}(_react.default.Component), _submitBundle = new WeakMap(), _changeHandler = new WeakMap(), _defineProperty(_class2, \"propTypes\", {\n  getLoadedCurrencies: _propTypes.default.func.isRequired,\n  setCurrentState: _propTypes.default.func.isRequired,\n  amount: _propTypes.default.shape({\n    initial_amount: _propTypes.default.number,\n    converted_amount: _propTypes.default.number\n  }),\n  currency: _propTypes.default.shape({\n    from_currency: _propTypes.default.string,\n    to_currency: _propTypes.default.string\n  }),\n  available_currencies: _propTypes.default.object\n}), _temp)) || _class);\nvar _default = Converter;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CONVERT, \"CONVERT\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\components\\\\Converter.jsx\");\n  reactHotLoader.register(Converter, \"Converter\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\components\\\\Converter.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\components\\\\Converter.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/components/Converter.jsx?");

/***/ }),

/***/ "./src/app/components/Footer/Footer.jsx":
/*!**********************************************!*\
  !*** ./src/app/components/Footer/Footer.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar Header = /*#__PURE__*/function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_react.default.createElement(\"div\", null, \"Footer\");\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Header;\n}(_react.default.Component);\n\nexports.default = Header;\n\n_defineProperty(Header, \"propTypes\", {});\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Header, \"Header\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\components\\\\Footer\\\\Footer.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/components/Footer/Footer.jsx?");

/***/ }),

/***/ "./src/app/components/Header/Header.jsx":
/*!**********************************************!*\
  !*** ./src/app/components/Header/Header.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _pickar_logo_white = _interopRequireDefault(__webpack_require__(/*! @/assets/img/pickar_logo_white.png */ \"./src/assets/img/pickar_logo_white.png\"));\n\nvar _withStyles = _interopRequireDefault(__webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\"));\n\nvar _Header = _interopRequireDefault(__webpack_require__(/*! ./Header.scss */ \"./src/app/components/Header/Header.scss\"));\n\nvar _main = _interopRequireDefault(__webpack_require__(/*! @/assets/styles/main.scss */ \"./src/assets/styles/main.scss\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar pickarStyle = {\n  background: \"url(\" + _pickar_logo_white.default + \")\",\n  position: \"relative\",\n  display: \"block\",\n  width: \"100%\",\n  height: \"35px\",\n  backgroundRepeat: \"no-repeat\"\n};\n\nvar Header = /*#__PURE__*/function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_react.default.createElement(\"header\", {\n        className: _Header.default.vendor__concurrently\n      }, /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _main.default.container\n      }, /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _Header.default.vendor__header\n      }, /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: \"vendor__wrap\"\n      }, /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: \"vendor__header-title\"\n      }, /*#__PURE__*/_react.default.createElement(\"div\", {\n        style: pickarStyle\n      })), /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _Header.default[\"vendor__header-body\"]\n      }, /*#__PURE__*/_react.default.createElement(\"span\", {\n        className: \"vendor__header-body__label\"\n      }, /*#__PURE__*/_react.default.createElement(\"h1\", {\n        className: _Header.default[\"vendor__header-label\"]\n      }, \"Convert currencies in real-time.\")))))));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Header;\n}(_react.default.Component);\n\n_defineProperty(Header, \"propTypes\", {});\n\nvar _default = (0, _withStyles.default)(_Header.default)(Header);\n\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(pickarStyle, \"pickarStyle\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\components\\\\Header\\\\Header.jsx\");\n  reactHotLoader.register(Header, \"Header\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\components\\\\Header\\\\Header.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\components\\\\Header\\\\Header.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/components/Header/Header.jsx?");

/***/ }),

/***/ "./src/app/components/Header/Header.scss":
/*!***********************************************!*\
  !*** ./src/app/components/Header/Header.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./Header.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app/components/Header/Header.scss\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://app/./src/app/components/Header/Header.scss?");

/***/ }),

/***/ "./src/app/components/global/Selector.jsx":
/*!************************************************!*\
  !*** ./src/app/components/global/Selector.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar Selector = function Selector(_ref) {\n  var items = _ref.items;\n  var optionsCurrency = (0, _immutable.Seq)(items).map(function (i) {\n    return /*#__PURE__*/_react.default.createElement(\"li\", {\n      key: i.toLowerCase()\n    }, i);\n  });\n  return /*#__PURE__*/_react.default.createElement(\"div\", {\n    style: {\n      display: \"none\"\n    },\n    className: \"selector__currency\"\n  }, /*#__PURE__*/_react.default.createElement(\"nav\", {\n    className: \"selector__nav\"\n  }, /*#__PURE__*/_react.default.createElement(\"ul\", {\n    className: \"selector__list\"\n  }, optionsCurrency)));\n};\n\nSelector.propTypes = {\n  items: _propTypes.default.object.isRequired\n};\nvar _default = Selector;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Selector, \"Selector\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\components\\\\global\\\\Selector.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\components\\\\global\\\\Selector.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/components/global/Selector.jsx?");

/***/ }),

/***/ "./src/app/reducers/modules/converterReducer.js":
/*!******************************************************!*\
  !*** ./src/app/reducers/modules/converterReducer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _converterFilter = __webpack_require__(/*! ../../actions/vendor/converterFilter */ \"./src/app/actions/vendor/converterFilter/index.js\");\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar converterReducers = (0, _immutable.fromJS)({\n  vendor_DATABASE: [],\n  temporaryStore: [],\n  available_currencies: [\"EUR\", \"USD\", \"CHF\"],\n  currency: {\n    from_currency: \"\",\n    to_currency: \"\"\n  },\n  amount: {\n    initial_amount: 0,\n    converted_amount: 0\n  }\n});\n\nvar essentialReducers = function essentialReducers() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : converterReducers;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _converterFilter.CONVERTER_REDUCER.SET_MONGO_DATABASE_STORE:\n      return state.setIn([\"vendor_DATABASE\"], (0, _immutable.fromJS)(action === null || action === void 0 ? void 0 : action.payload));\n\n    case _converterFilter.CONVERTER_REDUCER.SET_DATA_CONVERTER_VALUE:\n      return state.setIn([\"amount\", \"converted_amount\"], (0, _immutable.fromJS)(action === null || action === void 0 ? void 0 : action.currency));\n\n    case _converterFilter.CONVERTER_REDUCER.SET_AMOUNT:\n      return state.setIn([\"amount\", \"initial_amount\"], (0, _immutable.fromJS)((action === null || action === void 0 ? void 0 : action.amount) && Number(action === null || action === void 0 ? void 0 : action.amount.amount)));\n\n    default:\n      return state;\n  }\n};\n\nvar _default = essentialReducers;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(converterReducers, \"converterReducers\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\reducers\\\\modules\\\\converterReducer.js\");\n  reactHotLoader.register(essentialReducers, \"essentialReducers\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\reducers\\\\modules\\\\converterReducer.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\reducers\\\\modules\\\\converterReducer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/reducers/modules/converterReducer.js?");

/***/ }),

/***/ "./src/app/routes/routes.js":
/*!**********************************!*\
  !*** ./src/app/routes/routes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ../App.jsx */ \"./src/app/App.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar routes = [{\n  path: \"/\",\n  component: _App.default,\n  routes: []\n}];\nvar _default = routes;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(routes, \"routes\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\routes\\\\routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\routes\\\\routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/routes/routes.js?");

/***/ }),

/***/ "./src/app/routes/staticRoutes.js":
/*!****************************************!*\
  !*** ./src/app/routes/staticRoutes.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.StaticRoutesConfig = void 0;\n\nvar _Default = _interopRequireDefault(__webpack_require__(/*! ../views/Default.jsx */ \"./src/app/views/Default.jsx\"));\n\nvar _ = _interopRequireDefault(__webpack_require__(/*! ../views/errors/404.jsx */ \"./src/app/views/errors/404.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar StaticRoutesConfig = [{\n  key: \"default\",\n  component: _Default.default,\n  exact: true,\n  path: \"/\"\n}, {\n  key: \"not-found\",\n  component: _.default\n}];\nexports.StaticRoutesConfig = StaticRoutesConfig;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(StaticRoutesConfig, \"StaticRoutesConfig\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\routes\\\\staticRoutes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/routes/staticRoutes.js?");

/***/ }),

/***/ "./src/app/sagas/index.js":
/*!********************************!*\
  !*** ./src/app/sagas/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.fetchStoreFromMongo = void 0;\n\nvar _effects = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n\nvar _services = _interopRequireDefault(__webpack_require__(/*! ../services */ \"./src/app/services/index.js\"));\n\nvar actions = _interopRequireWildcard(__webpack_require__(/*! ../actions/converterActions */ \"./src/app/actions/converterActions/index.js\"));\n\nvar selectors = _interopRequireWildcard(__webpack_require__(/*! ../selectors/converterSelectors */ \"./src/app/selectors/converterSelectors/index.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchEntity),\n    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(importMongoStore),\n    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(watchImportMongoStore),\n    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(root);\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/**\r\n * FETCH FUNCTION FOR DETERMINING GLOBAL REDUX STORE\r\n * @param {*} entity  \r\n * @param {*} apiFn \r\n * @param {*} id \r\n * @param {*} url  \r\n */\nfunction fetchEntity(entity, apiFn, id, url) {\n  var _yield$call, response, error;\n\n  return regeneratorRuntime.wrap(function fetchEntity$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return (0, _effects.put)(entity.request(id));\n\n        case 2:\n          _context.next = 4;\n          return (0, _effects.call)(apiFn, url || id);\n\n        case 4:\n          _yield$call = _context.sent;\n          response = _yield$call.response;\n          error = _yield$call.error;\n\n          if (!response) {\n            _context.next = 12;\n            break;\n          }\n\n          _context.next = 10;\n          return (0, _effects.put)(entity.success(id, response));\n\n        case 10:\n          _context.next = 14;\n          break;\n\n        case 12:\n          _context.next = 14;\n          return (0, _effects.put)(entity.failure(id, error));\n\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n/*********************************\r\n *BINDING FUNCTION FROM PATTERNS *\r\n *********************************/\n\n\nvar fetchStoreFromMongo = fetchEntity.bind(null, actions.MONGO_DATABASE_STORE, _services.default.fetchMongoDB);\n/**\r\n * IMPORT CURRENCY TO FETCH DATA FROM REST API\r\n * @param {*} currency \r\n * @param {*} requiredFields \r\n */\n\nexports.fetchStoreFromMongo = fetchStoreFromMongo;\n\nfunction importMongoStore(store, requiredFields) {\n  var payload;\n  return regeneratorRuntime.wrap(function importMongoStore$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return (0, _effects.select)(selectors.getMongoDB, store);\n\n        case 3:\n          payload = _context2.sent;\n\n          if (!(!payload || requiredFields.some(function (key) {\n            return !payload.hasOwnProperty(key);\n          }))) {\n            _context2.next = 7;\n            break;\n          }\n\n          _context2.next = 7;\n          return (0, _effects.call)(fetchStoreFromMongo, store);\n\n        case 7:\n          _context2.next = 12;\n          break;\n\n        case 9:\n          _context2.prev = 9;\n          _context2.t0 = _context2[\"catch\"](0);\n          console.error(_context2.t0);\n\n        case 12:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 9]]);\n}\n/*****************************\r\n * WATCHERS SAGA FROM PATTERNS\r\n *****************************/\n\n\nfunction watchImportMongoStore() {\n  var _yield$take, store;\n\n  return regeneratorRuntime.wrap(function watchImportMongoStore$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          if (false) {}\n\n          _context3.next = 3;\n          return (0, _effects.take)(actions.FETCH_MONGO_DATABASE);\n\n        case 3:\n          _yield$take = _context3.sent;\n          store = _yield$take.store;\n          _context3.next = 7;\n          return (0, _effects.fork)(importMongoStore, store);\n\n        case 7:\n          _context3.next = 0;\n          break;\n\n        case 9:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n/********************************************\r\n * ROOT INVOKER TO FORK ALL THE SAGA ACTIONS*\r\n ********************************************/\n\n\nfunction root() {\n  return regeneratorRuntime.wrap(function root$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return (0, _effects.all)([(0, _effects.fork)(watchImportMongoStore)]);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nvar _default = root;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(fetchEntity, \"fetchEntity\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(fetchStoreFromMongo, \"fetchStoreFromMongo\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(importMongoStore, \"importMongoStore\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(watchImportMongoStore, \"watchImportMongoStore\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(root, \"root\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\sagas\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/sagas/index.js?");

/***/ }),

/***/ "./src/app/selectors/converterSelectors/index.js":
/*!*******************************************************!*\
  !*** ./src/app/selectors/converterSelectors/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAvailableCurrencies = exports.getTemporaryStore = exports.getCurrency = exports.getAmount = exports.getMongoDB = exports.getConverterReducer = void 0;\n\nvar _reselect = __webpack_require__(/*! reselect */ \"reselect\");\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar getConverterReducer = function getConverterReducer(state) {\n  return state.get(\"converterReducer\");\n};\n\nexports.getConverterReducer = getConverterReducer;\nvar getMongoDB = (0, _reselect.createSelector)(getConverterReducer, function (vendor) {\n  return vendor.get(\"vendor_DATABASE\");\n});\nexports.getMongoDB = getMongoDB;\nvar getAmount = (0, _reselect.createSelector)(getConverterReducer, function (vendor) {\n  return vendor.get(\"amount\");\n});\nexports.getAmount = getAmount;\nvar getCurrency = (0, _reselect.createSelector)(getConverterReducer, function (vendor) {\n  return vendor.get(\"currency\");\n});\nexports.getCurrency = getCurrency;\nvar getTemporaryStore = (0, _reselect.createSelector)(getConverterReducer, function (vendor) {\n  return vendor.get(\"temporaryStore\");\n});\nexports.getTemporaryStore = getTemporaryStore;\nvar getAvailableCurrencies = (0, _reselect.createSelector)(getConverterReducer, function (vendor) {\n  return vendor.get(\"available_currencies\");\n});\nexports.getAvailableCurrencies = getAvailableCurrencies;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getConverterReducer, \"getConverterReducer\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\selectors\\\\converterSelectors\\\\index.js\");\n  reactHotLoader.register(getMongoDB, \"getMongoDB\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\selectors\\\\converterSelectors\\\\index.js\");\n  reactHotLoader.register(getAmount, \"getAmount\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\selectors\\\\converterSelectors\\\\index.js\");\n  reactHotLoader.register(getCurrency, \"getCurrency\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\selectors\\\\converterSelectors\\\\index.js\");\n  reactHotLoader.register(getTemporaryStore, \"getTemporaryStore\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\selectors\\\\converterSelectors\\\\index.js\");\n  reactHotLoader.register(getAvailableCurrencies, \"getAvailableCurrencies\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\selectors\\\\converterSelectors\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/selectors/converterSelectors/index.js?");

/***/ }),

/***/ "./src/app/selectors/router.js":
/*!*************************************!*\
  !*** ./src/app/selectors/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getRouterLocation = exports.getRouter = void 0;\n\nvar _reselect = __webpack_require__(/*! reselect */ \"reselect\");\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar getRouter = function getRouter(state) {\n  return state.get(\"router\");\n};\n\nexports.getRouter = getRouter;\nvar getRouterLocation = (0, _reselect.createSelector)(getRouter, function (route) {\n  return route.get(\"location\");\n});\nexports.getRouterLocation = getRouterLocation;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getRouter, \"getRouter\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\selectors\\\\router.js\");\n  reactHotLoader.register(getRouterLocation, \"getRouterLocation\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\selectors\\\\router.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/selectors/router.js?");

/***/ }),

/***/ "./src/app/services/api.js":
/*!*********************************!*\
  !*** ./src/app/services/api.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchCurrency = exports.fetchMongoDB = void 0;\n\nvar _qs = _interopRequireDefault(__webpack_require__(/*! qs */ \"qs\"));\n\nvar _isomorphicFetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar API_REQUEST = \"https://free.currconv.com/api/v7/\"; //const API_REQUEST = \"http://apilayer.net/api/live?access_key=fb8e785e7d1a3a6198bb8a4bbb1d9452&currencies=EUR,GBP,CAD,PLN&source=USD&format=1\";\n\nvar INITIAL_PARAMS = {\n  \"q\": \"USD_EUR\",\n  \"compact\": \"ultra\",\n  \"apiKey\": \"185514fd5495296d5129\"\n};\n/**\r\n * Api Invoker \r\n * @param {*} endpoint \r\n */\n\nfunction callApi(endpoint) {\n  var fullUrl = endpoint.indexOf(API_REQUEST) === -1 ? API_REQUEST + endpoint + \"?\" + _qs.default.stringify(INITIAL_PARAMS) : endpoint;\n  return (0, _isomorphicFetch.default)(fullUrl).then(function (response) {\n    return response.json().then(function (json) {\n      return {\n        json: json,\n        response: response\n      };\n    });\n  }).then(function (_ref) {\n    var json = _ref.json,\n        response = _ref.response;\n\n    if (!response.ok) {\n      return Promise.reject(json);\n    }\n\n    return Object.assign({}, json);\n  }).then(function (response) {\n    return {\n      response: response\n    };\n  }, function (error) {\n    return {\n      error: error.message || \"API_REQUEST ERROR\"\n    };\n  });\n}\n/**\r\n * MongoDB extracting in the redux/immutable store \r\n * @param {*} mongo \r\n */\n\n\nvar fetchMongoDB = function fetchMongoDB(mongo) {\n  return callApi(mongo);\n};\n/**\r\n * Invoke api currency request\r\n * @param {*} currency \r\n */\n\n\nexports.fetchMongoDB = fetchMongoDB;\n\nvar fetchCurrency = function fetchCurrency(currency) {\n  return callApi(currency);\n};\n\nexports.fetchCurrency = fetchCurrency;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(API_REQUEST, \"API_REQUEST\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(INITIAL_PARAMS, \"INITIAL_PARAMS\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(callApi, \"callApi\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(fetchMongoDB, \"fetchMongoDB\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(fetchCurrency, \"fetchCurrency\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\services\\\\api.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/services/api.js?");

/***/ }),

/***/ "./src/app/services/index.js":
/*!***********************************!*\
  !*** ./src/app/services/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _api = _interopRequireWildcard(__webpack_require__(/*! ./api */ \"./src/app/services/api.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar _default = _api;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\services\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/services/index.js?");

/***/ }),

/***/ "./src/app/views/Default.jsx":
/*!***********************************!*\
  !*** ./src/app/views/Default.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _main = _interopRequireDefault(__webpack_require__(/*! @/assets/styles/main.scss */ \"./src/assets/styles/main.scss\"));\n\nvar _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ \"react-loadable\"));\n\nvar _Converter = _interopRequireDefault(__webpack_require__(/*! ../components/Converter.jsx */ \"./src/app/components/Converter.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar Main = /*#__PURE__*/function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    _classCallCheck(this, Main);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_react.default.createElement(\"section\", {\n        className: \"vendor__converter\"\n      }, /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _main.default.container\n      }, /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: _main.default[\"vendor__converter-wrap\"]\n      }, /*#__PURE__*/_react.default.createElement(_Converter.default, null))));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Main;\n}(_react.default.Component);\n\nvar _default = Main;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Main, \"Main\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\views\\\\Default.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\views\\\\Default.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/views/Default.jsx?");

/***/ }),

/***/ "./src/app/views/errors/404.jsx":
/*!**************************************!*\
  !*** ./src/app/views/errors/404.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _withStyles = _interopRequireDefault(__webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar NotFound = /*#__PURE__*/function (_React$Component) {\n  _inherits(NotFound, _React$Component);\n\n  var _super = _createSuper(NotFound);\n\n  function NotFound(props) {\n    _classCallCheck(this, NotFound);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(NotFound, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_react.default.createElement(\"div\", null, \" 400 | Page not found \");\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return NotFound;\n}(_react.default.Component);\n\nvar _default = NotFound;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(NotFound, \"NotFound\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\views\\\\errors\\\\404.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\app\\\\views\\\\errors\\\\404.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/views/errors/404.jsx?");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Light.eot":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Roboto-Light.eot ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d592a653abb7a57fedd8d263f6f187c0.eot\");\n\n//# sourceURL=webpack://app/./src/assets/fonts/Roboto-Light.eot?");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Light.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Roboto-Light.ttf ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"13d61ef8e609b548d9b5bd989141e829.ttf\");\n\n//# sourceURL=webpack://app/./src/assets/fonts/Roboto-Light.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Light.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Light.woff ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"df0f59d80526acc6d0cd31413184263f.woff\");\n\n//# sourceURL=webpack://app/./src/assets/fonts/Roboto-Light.woff?");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.eot":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.eot ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"30b57652c88c5dbd65de73aba00331a9.eot\");\n\n//# sourceURL=webpack://app/./src/assets/fonts/Roboto-Regular.eot?");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"25e40da956314b12d333fe72cc420957.ttf\");\n\n//# sourceURL=webpack://app/./src/assets/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.woff ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"31012f9b3e3da44f87e842e419bc267a.woff\");\n\n//# sourceURL=webpack://app/./src/assets/fonts/Roboto-Regular.woff?");

/***/ }),

/***/ "./src/assets/img/pickar_logo_white.png":
/*!**********************************************!*\
  !*** ./src/assets/img/pickar_logo_white.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d8a117d16e8f7a9c4b59a41c171e7cba.png\");\n\n//# sourceURL=webpack://app/./src/assets/img/pickar_logo_white.png?");

/***/ }),

/***/ "./src/assets/img/switcher.png":
/*!*************************************!*\
  !*** ./src/assets/img/switcher.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0e50480e8124fdefca703aded6daf384.png\");\n\n//# sourceURL=webpack://app/./src/assets/img/switcher.png?");

/***/ }),

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./main.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/styles/main.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://app/./src/assets/styles/main.scss?");

/***/ }),

/***/ "./src/configureStore.js":
/*!*******************************!*\
  !*** ./src/configureStore.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, window) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\nvar _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\n\nvar _reduxSaga = _interopRequireWildcard(__webpack_require__(/*! redux-saga */ \"redux-saga\"));\n\nvar _immutable2 = __webpack_require__(/*! connected-react-router/immutable */ \"connected-react-router/immutable\");\n\nvar _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ \"./src/reducers.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nfunction configureStore() {\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var history = arguments.length > 1 ? arguments[1] : undefined;\n  var sagaMiddleWare = (0, _reduxSaga.default)();\n  var middlewares = [_reduxThunk.default, (0, _immutable2.routerMiddleware)(history), sagaMiddleWare];\n  var enhancers = [_redux.applyMiddleware.apply(void 0, middlewares)];\n  var composeEnhancers =  true && (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n    shouldHotReload: false\n  }) : _redux.compose;\n  var store = (0, _redux.createStore)((0, _reducers.default)(history), (0, _immutable.fromJS)(initialState), composeEnhancers.apply(void 0, enhancers));\n  store.runSaga = sagaMiddleWare.run;\n\n  store.close = function () {\n    return store.dispatch(_reduxSaga.END);\n  };\n\n  store.injectedReducers = {};\n\n  if (false) {}\n\n  return store;\n}\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(configureStore, \"configureStore\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\configureStore.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), __webpack_require__(/*! ./helpers/window.mock */ \"./helpers/window.mock.js\")))\n\n//# sourceURL=webpack://app/./src/configureStore.js?");

/***/ }),

/***/ "./src/reducers.js":
/*!*************************!*\
  !*** ./src/reducers.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _reduxImmutable = __webpack_require__(/*! redux-immutable */ \"redux-immutable\");\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\nvar _immutable2 = __webpack_require__(/*! connected-react-router/immutable */ \"connected-react-router/immutable\");\n\nvar _converterReducer = _interopRequireDefault(__webpack_require__(/*! ./app/reducers/modules/converterReducer */ \"./src/app/reducers/modules/converterReducer.js\"));\n\nvar _reduxConnect = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n(0, _reduxConnect.setToImmutableStateFunc)(function (mutableState) {\n  return (0, _immutable.fromJS)(mutableState);\n});\n(0, _reduxConnect.setToMutableStateFunc)(function (immutableState) {\n  return immutableState.toJS();\n});\n\nvar _default = function _default(history) {\n  return (0, _reduxImmutable.combineReducers)({\n    router: (0, _immutable2.connectRouter)(history),\n    converterReducer: _converterReducer.default,\n    reduxAsyncConnect: _reduxConnect.immutableReducer\n  });\n};\n\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\reducers.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/reducers.js?");

/***/ }),

/***/ "./src/sagas.js":
/*!**********************!*\
  !*** ./src/sagas.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _sagas = _interopRequireDefault(__webpack_require__(/*! ./app/sagas */ \"./src/app/sagas/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar _default = _sagas.default;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\1111\\\\Desktop\\\\react-ssr-instance\\\\react-ssr-instance\\\\src\\\\sagas.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/sagas.js?");

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi babel-polyfill ./server/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./server/index.js */\"./server/index.js\");\n\n\n//# sourceURL=webpack://app/multi_babel-polyfill_./server/index.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack://app/external_%22babel-polyfill%22?");

/***/ }),

/***/ "connected-react-router/immutable":
/*!***************************************************!*\
  !*** external "connected-react-router/immutable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router/immutable\");\n\n//# sourceURL=webpack://app/external_%22connected-react-router/immutable%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack://app/external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack://app/external_%22fs%22?");

/***/ }),

/***/ "global/document":
/*!**********************************!*\
  !*** external "global/document" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"global/document\");\n\n//# sourceURL=webpack://app/external_%22global/document%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack://app/external_%22history%22?");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immutable\");\n\n//# sourceURL=webpack://app/external_%22immutable%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack://app/external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/StyleContext\");\n\n//# sourceURL=webpack://app/external_%22isomorphic-style-loader/StyleContext%22?");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/withStyles\");\n\n//# sourceURL=webpack://app/external_%22isomorphic-style-loader/withStyles%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://app/external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack://app/external_%22prop-types%22?");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qs\");\n\n//# sourceURL=webpack://app/external_%22qs%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://app/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack://app/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack://app/external_%22react-helmet%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack://app/external_%22react-loadable%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack://app/external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack://app/external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack://app/external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack://app/external_%22redux%22?");

/***/ }),

/***/ "redux-connect":
/*!********************************!*\
  !*** external "redux-connect" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-connect\");\n\n//# sourceURL=webpack://app/external_%22redux-connect%22?");

/***/ }),

/***/ "redux-immutable":
/*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-immutable\");\n\n//# sourceURL=webpack://app/external_%22redux-immutable%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack://app/external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack://app/external_%22redux-saga/effects%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack://app/external_%22redux-thunk%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack://app/external_%22reselect%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack://app/external_%22url%22?");

/***/ })

/******/ });