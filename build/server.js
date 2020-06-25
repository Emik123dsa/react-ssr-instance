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
eval("/* WEBPACK VAR INJECTION */(function(module, window) {\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar win;\n\nif (typeof window !== \"undefined\" && typeof window.getComputedStyle === \"function\") {\n  win = window;\n} else {\n  win = {\n    getComputedStyle: function getComputedStyle() {\n      return {\n        getPropertyValue: function getPropertyValue() {}\n      };\n    },\n    addEventListener: function addEventListener() {}\n  };\n}\n\n;\nmodule.exports = win;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(win, \"win\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\helpers\\\\window.mock.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), __webpack_require__(/*! ./helpers/window.mock */ \"./helpers/window.mock.js\")))\n\n//# sourceURL=webpack://app/./helpers/window.mock.js?");

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
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _fs = _interopRequireDefault(__webpack_require__(/*! fs */ \"fs\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ \"react-loadable\"));\n\nvar _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ \"react-helmet\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _history = __webpack_require__(/*! history */ \"history\");\n\nvar _server = _interopRequireDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _url = __webpack_require__(/*! url */ \"url\");\n\nvar _reduxConnect = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n\nvar _StyleContext = _interopRequireDefault(__webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\"));\n\nvar _configureStore = _interopRequireDefault(__webpack_require__(/*! ../src/configureStore */ \"./src/configureStore.js\"));\n\nvar _routes = _interopRequireDefault(__webpack_require__(/*! ../src/app/routes/routes */ \"./src/app/routes/routes.js\"));\n\nvar _staticRoutes = __webpack_require__(/*! ../src/app/routes/staticRoutes */ \"./src/app/routes/staticRoutes.js\");\n\nvar _sagas = _interopRequireDefault(__webpack_require__(/*! ../src/sagas */ \"./src/sagas.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar PORT = process.env.NODE_PORT || 3000;\nvar app = (0, _express.default)();\napp.use(\"/\", _express.default.static(_path.default.resolve(\"build\")));\nvar initialState = {};\napp.get(\"*\", function (req, res) {\n  var url = req.originalUrl || req.url;\n  var history = (0, _history.createMemoryHistory)({\n    initialEntries: [url]\n  });\n  var store = (0, _configureStore.default)(initialState, history);\n  var location = (0, _url.parse)(url);\n  var helpers = {};\n\n  var indexFile = _path.default.resolve(\"build/main.html\");\n\n  store.runSaga(_sagas.default).toPromise().then(function () {\n    return (0, _reduxConnect.loadOnServer)({\n      store: store,\n      location: location,\n      routes: _routes.default,\n      helpers: helpers\n    }).then(function () {\n      var context = {};\n\n      if (context.url) {\n        req.header(\"Location\", context.url);\n        return res.send(302);\n      }\n\n      var css = new Set();\n\n      var insertCss = function insertCss() {\n        for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n          styles[_key] = arguments[_key];\n        }\n\n        return styles.forEach(function (style) {\n          return css.add(style._getCss());\n        });\n      };\n\n      var dynamicRoutes = _toConsumableArray(_routes.default);\n\n      dynamicRoutes[0].routes = [].concat(_toConsumableArray(dynamicRoutes[0].routes), _toConsumableArray(_staticRoutes.StaticRoutesConfig));\n\n      var appContent = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_StyleContext.default.Provider, {\n        value: {\n          insertCss: insertCss\n        }\n      }, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {\n        store: store,\n        key: \"provider\"\n      }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {\n        location: location,\n        context: context\n      }, /*#__PURE__*/_react.default.createElement(_reduxConnect.ReduxAsyncConnect, {\n        helpers: helpers,\n        routes: dynamicRoutes\n      })))));\n\n      var helmet = _reactHelmet.default.renderStatic();\n\n      _fs.default.readFile(indexFile, \"utf8\", function (err, data) {\n        if (err) {\n          if (+err.message === 404) {\n            res.status(404).send(\"Page not found | 404\");\n          } else {\n            res.status(500).send(\"Internal server error | 500\");\n          }\n        }\n\n        data = data.replace(\"__STYLES__\", _toConsumableArray(css).join(\"\"));\n        data = data.replace(\"__LOADER__\", \"\");\n        data = data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(appContent, \"</div>\"));\n        data = data.replace(\"<div id=root></div>\", \"<div id=root>\".concat(appContent, \"</div>\"));\n        data = data.replace(\"<title></title>\", \"\".concat(helmet.title.toString()));\n        data = data.replace('<meta name=\"description\" content=\"\"/>', helmet.meta.toString());\n        data = data.replace(\"<script>__INITIAL_DATA__</script>\", \"<script>window.__INITIAL_DATA__ = \".concat(JSON.stringify(store.getState()), \";</script>\"));\n        return res.send(data);\n      });\n    });\n  });\n  store.close();\n});\n\n_reactLoadable.default.preloadAll().then(function () {\n  app.listen(PORT, function () {\n    console.log(\"Server is listening on PORT : \".concat(PORT));\n  });\n});\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PORT, \"PORT\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\server\\\\index.js\");\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\server\\\\index.js\");\n  reactHotLoader.register(initialState, \"initialState\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\server\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./server/index.js?");

/***/ }),

/***/ "./src/app/App.jsx":
/*!*************************!*\
  !*** ./src/app/App.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _router = __webpack_require__(/*! ./selectors/router */ \"./src/app/selectors/router.js\");\n\nvar _globalActions = __webpack_require__(/*! ./actions/globalActions */ \"./src/app/actions/globalActions/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reduxConnect = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _dec, _class, _class2, _temp;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar App = (_dec = (0, _reactRedux.connect)(function (state) {\n  return {\n    location: (0, _router.getRouterLocation)(state)\n  };\n}, null), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"renderSiteMeta\",\n    value: function renderSiteMeta() {\n      var canonical = this.props.location.toJS().pathname.toLowerCase();\n      return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, {\n        link: [{\n          href: canonical,\n          rel: 'canonical'\n        }],\n        meta: [{\n          name: 'viewport',\n          content: \"width=device-width, initial-scale=1.0\"\n        }]\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var route = this.props.route;\n      return /*#__PURE__*/_react.default.createElement(\"div\", null, this.renderSiteMeta(), (0, _reactRouterConfig.renderRoutes)(route.routes));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return App;\n}(_react.Component), _defineProperty(_class2, \"propTypes\", {\n  location: _propTypes.default.shape().isRequired,\n  route: _propTypes.default.shape().isRequired\n}), _temp)) || _class);\nexports.default = App;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\App.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/App.jsx?");

/***/ }),

/***/ "./src/app/actions/globalActions/index.js":
/*!************************************************!*\
  !*** ./src/app/actions/globalActions/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SET_COMPANY_INFO = exports.SET_SLIDES = exports.SET_USER_PAGES = exports.SET_ACTIONS = exports.SET_SEO_OPTIMIZATION = exports.SET_ITEMS_DETAILS = exports.SET_ITEMS = exports.SET_CATEGORIES = exports.SET_MENU = exports.SET_APP_SETTINGS = exports.appSettings = void 0;\n\nvar _globalFilter = __webpack_require__(/*! ../vendor/globalFilter */ \"./src/app/actions/vendor/globalFilter.js\");\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar REQUEST = \"REQUEST\";\nvar SUCCESS = \"SUCCESS\";\nvar FAILURE = \"FAILURE\";\n\nfunction createRequest(base) {\n  return [REQUEST, SUCCESS, FAILURE].reduce(function (acc, type) {\n    acc[type] = \"\".concat(base, \"_\").concat(type);\n    return acc;\n  }, {});\n}\n\nfunction action(type) {\n  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _objectSpread({\n    type: type\n  }, payload);\n}\n\nvar appSettings = {\n  request: function request(appSettings) {\n    return action(APP_SETTINGS[REQUEST], {\n      appSettings: appSettings\n    });\n  },\n  response: function response(appSettings, _response) {\n    return action(APP_SETTINGS[SUCCESS], {\n      appSettings: appSettings,\n      response: _response\n    });\n  },\n  failure: function failure(appSettings, error) {\n    return action(APP_SETTINGS[FAILURE], {\n      appSettings: appSettings,\n      error: error\n    });\n  }\n};\nexports.appSettings = appSettings;\nvar SET_APP_SETTINGS = createRequest(_globalFilter.GLOBAL_REDUCER.SET_APP_SETTINGS);\nexports.SET_APP_SETTINGS = SET_APP_SETTINGS;\nvar SET_MENU = createRequest(_globalFilter.GLOBAL_REDUCER.SET_MENU);\nexports.SET_MENU = SET_MENU;\nvar SET_CATEGORIES = createRequest(_globalFilter.GLOBAL_REDUCER.SET_CATEGORIES);\nexports.SET_CATEGORIES = SET_CATEGORIES;\nvar SET_ITEMS = createRequest(_globalFilter.GLOBAL_REDUCER.SET_ITEMS);\nexports.SET_ITEMS = SET_ITEMS;\nvar SET_ITEMS_DETAILS = createRequest(_globalFilter.GLOBAL_REDUCER.SET_ITEM_DETAILS);\nexports.SET_ITEMS_DETAILS = SET_ITEMS_DETAILS;\nvar SET_SEO_OPTIMIZATION = createRequest(_globalFilter.GLOBAL_REDUCER.SET_SEO_OPTIMIZATION);\nexports.SET_SEO_OPTIMIZATION = SET_SEO_OPTIMIZATION;\nvar SET_ACTIONS = createRequest(_globalFilter.GLOBAL_REDUCER.SET_ACTIONS);\nexports.SET_ACTIONS = SET_ACTIONS;\nvar SET_USER_PAGES = createRequest(_globalFilter.GLOBAL_REDUCER.SET_USER_PAGES);\nexports.SET_USER_PAGES = SET_USER_PAGES;\nvar SET_SLIDES = createRequest(_globalFilter.GLOBAL_REDUCER.SET_SLIDES);\nexports.SET_SLIDES = SET_SLIDES;\nvar SET_COMPANY_INFO = createRequest(_globalFilter.GLOBAL_REDUCER.SET_COMPANY_INFO);\nexports.SET_COMPANY_INFO = SET_COMPANY_INFO;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(REQUEST, \"REQUEST\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SUCCESS, \"SUCCESS\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(FAILURE, \"FAILURE\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(createRequest, \"createRequest\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(action, \"action\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(appSettings, \"appSettings\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_APP_SETTINGS, \"SET_APP_SETTINGS\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_MENU, \"SET_MENU\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_CATEGORIES, \"SET_CATEGORIES\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_ITEMS, \"SET_ITEMS\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_ITEMS_DETAILS, \"SET_ITEMS_DETAILS\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_SEO_OPTIMIZATION, \"SET_SEO_OPTIMIZATION\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_ACTIONS, \"SET_ACTIONS\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_USER_PAGES, \"SET_USER_PAGES\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_SLIDES, \"SET_SLIDES\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n  reactHotLoader.register(SET_COMPANY_INFO, \"SET_COMPANY_INFO\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\globalActions\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/actions/globalActions/index.js?");

/***/ }),

/***/ "./src/app/actions/vendor/globalFilter.js":
/*!************************************************!*\
  !*** ./src/app/actions/vendor/globalFilter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.GLOBAL_REDUCER = void 0;\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar GLOBAL_REDUCER = {\n  SET_MENU: \"SET_MENU\",\n  SET_CATEGORIES: \"SET_CATEGORIES\",\n  SET_ITEMS: \"SET_ITEMS\",\n  SET_ITEM_DETAILS: \"SET_ITEM_DETAILS\",\n  SET_SEO_OPTIMIZATION: \"SET_SEO_OPTIMIZATION\",\n  SET_ACTIONS: \"SET_ACTIONS\",\n  SET_USER_PAGES: \"SET_USER_PAGES\",\n  SET_SLIDES: \"SET_SLIDES\",\n  SET_COMPANY_INFO: \"SET_COMPANY_INFO\",\n  SET_APP_SETTINGS: \"SET_APP_SETTINGS\"\n};\nexports.GLOBAL_REDUCER = GLOBAL_REDUCER;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(GLOBAL_REDUCER, \"GLOBAL_REDUCER\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\actions\\\\vendor\\\\globalFilter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/actions/vendor/globalFilter.js?");

/***/ }),

/***/ "./src/app/reducers/modules/globalReducer.js":
/*!***************************************************!*\
  !*** ./src/app/reducers/modules/globalReducer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _globalFilter = __webpack_require__(/*! ../../actions/vendor/globalFilter */ \"./src/app/actions/vendor/globalFilter.js\");\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar initialGlobalReducers = (0, _immutable.fromJS)({\n  menu: [],\n  categories: [],\n  items: {},\n  itemDetail: {},\n  seo: [],\n  actions: [],\n  userPages: [],\n  slides: [],\n  companyInfo: {},\n  appSettings: {}\n});\n\nvar globalReducers = function globalReducers() {\n  var _action$payload;\n\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialGlobalReducers;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _globalFilter.GLOBAL_REDUCER.SET_ACTIONS:\n      break;\n\n    case _globalFilter.GLOBAL_REDUCER.SET_APP_SETTINGS:\n      return state.setIn([\"appSettings\"], (0, _immutable.fromJS)(action === null || action === void 0 ? void 0 : (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.details));\n\n    case _globalFilter.GLOBAL_REDUCER.SET_CATEGORIES:\n      break;\n\n    case _globalFilter.GLOBAL_REDUCER.SET_COMPANY_INFO:\n      break;\n\n    case _globalFilter.GLOBAL_REDUCER.SET_ITEM_DETAILS:\n      break;\n\n    case _globalFilter.GLOBAL_REDUCER.SET_MENU:\n      break;\n\n    case _globalFilter.GLOBAL_REDUCER.SET_SEO_OPTIMIZATION:\n      break;\n\n    case _globalFilter.GLOBAL_REDUCER.SET_SLIDES:\n      break;\n\n    case _globalFilter.GLOBAL_REDUCER.SET_USER_PAGES:\n      break;\n\n    default:\n      return state;\n  }\n};\n\nvar _default = globalReducers;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(initialGlobalReducers, \"initialGlobalReducers\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\reducers\\\\modules\\\\globalReducer.js\");\n  reactHotLoader.register(globalReducers, \"globalReducers\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\reducers\\\\modules\\\\globalReducer.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\reducers\\\\modules\\\\globalReducer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/reducers/modules/globalReducer.js?");

/***/ }),

/***/ "./src/app/routes/routes.js":
/*!**********************************!*\
  !*** ./src/app/routes/routes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ../App.jsx */ \"./src/app/App.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar routes = [{\n  path: \"/\",\n  component: _App.default,\n  routes: []\n}];\nvar _default = routes;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(routes, \"routes\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\routes\\\\routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\routes\\\\routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/routes/routes.js?");

/***/ }),

/***/ "./src/app/routes/staticRoutes.js":
/*!****************************************!*\
  !*** ./src/app/routes/staticRoutes.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.StaticRoutesConfig = void 0;\n\nvar _Main = _interopRequireDefault(__webpack_require__(/*! ../views/Main.jsx */ \"./src/app/views/Main.jsx\"));\n\nvar _World = _interopRequireDefault(__webpack_require__(/*! ../views/World.jsx */ \"./src/app/views/World.jsx\"));\n\nvar _ = _interopRequireDefault(__webpack_require__(/*! ../views/errors/404.jsx */ \"./src/app/views/errors/404.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar StaticRoutesConfig = [{\n  key: \"main\",\n  component: _Main.default,\n  exact: true,\n  path: \"/main\"\n}, {\n  key: \"world\",\n  component: _World.default,\n  exact: true,\n  path: \"/world\"\n}, {\n  key: \"not-found\",\n  component: _.default\n}];\nexports.StaticRoutesConfig = StaticRoutesConfig;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(StaticRoutesConfig, \"StaticRoutesConfig\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\routes\\\\staticRoutes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/routes/staticRoutes.js?");

/***/ }),

/***/ "./src/app/sagas/axios/index.js":
/*!**************************************!*\
  !*** ./src/app/sagas/axios/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.apiRequest = apiRequest;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nvar _qs = _interopRequireDefault(__webpack_require__(/*! qs */ \"qs\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nfunction apiRequest(_x) {\n  return _apiRequest.apply(this, arguments);\n}\n\nfunction _apiRequest() {\n  _apiRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {\n    var method, url, baseURL, _ref$params, params, data, config;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            method = _ref.method, url = _ref.url, baseURL = _ref.baseURL, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params, data = _ref.data;\n            config = {\n              method: method || \"get\",\n              baseURL: baseURL || \"https://vsem-edu-oblako.ru/singlemerchant/api/\",\n              url: url,\n              headers: {\n                \"Content-Type\": \"application/x-www-form-urlencoded\"\n              },\n              params: _objectSpread({\n                json: true,\n                merchant_keys: \"929990d3b27944af404a5eb3ee1ec4f6\",\n                lang: \"ru\",\n                device_platform: \"site\",\n                device_id: \"010101\"\n              }, params)\n            };\n\n            if (data) {\n              config.data = _qs.default.stringify(data);\n            }\n\n            _context.next = 5;\n            return new Promise(function (res, rej) {\n              (0, _axios.default)(config).then(function (resp) {\n                return res(resp.data);\n              }).catch(function (err) {\n                return rej(err);\n              });\n            });\n\n          case 5:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _apiRequest.apply(this, arguments);\n}\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(apiRequest, \"apiRequest\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\sagas\\\\axios\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/sagas/axios/index.js?");

/***/ }),

/***/ "./src/app/sagas/index.js":
/*!********************************!*\
  !*** ./src/app/sagas/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.root = root;\n\nvar _effects = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n\nvar _axios = __webpack_require__(/*! ./axios */ \"./src/app/sagas/axios/index.js\");\n\nvar _services = __webpack_require__(/*! ../services */ \"./src/app/services/index.js\");\n\nvar _globalFilter = __webpack_require__(/*! ../actions/vendor/globalFilter */ \"./src/app/actions/vendor/globalFilter.js\");\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchEntity),\n    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(appSettings),\n    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(watch),\n    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(root);\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nfunction fetchEntity(entity, apiFn, id, url) {\n  var _yield$call, response, error;\n\n  return regeneratorRuntime.wrap(function fetchEntity$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return (0, _effects.put)(entity.request(id));\n\n        case 2:\n          _context.next = 4;\n          return (0, _effects.call)(apiFn, url || id);\n\n        case 4:\n          _yield$call = _context.sent;\n          response = _yield$call.response;\n          error = _yield$call.error;\n\n          if (!response) {\n            _context.next = 12;\n            break;\n          }\n\n          _context.next = 10;\n          return (0, _effects.put)(entity.success(id, response));\n\n        case 10:\n          _context.next = 14;\n          break;\n\n        case 12:\n          _context.next = 14;\n          return (0, _effects.put)(entity.failure(id, error));\n\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n/**\r\n * Asynchronus function for data fetching\r\n */\n\n\nfunction setAppSettings() {\n  return _setAppSettings.apply(this, arguments);\n}\n\nfunction _setAppSettings() {\n  _setAppSettings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response;\n    return regeneratorRuntime.wrap(function _callee$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return (0, _axios.apiRequest)({\n              url: \"getAppSettings\"\n            });\n\n          case 2:\n            response = _context5.sent;\n            return _context5.abrupt(\"return\", response);\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _setAppSettings.apply(this, arguments);\n}\n\nfunction getAppSettings() {\n  return _getAppSettings.apply(this, arguments);\n}\n/**\r\n * Functions generators for filling store of the data\r\n */\n\n\nfunction _getAppSettings() {\n  _getAppSettings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var resp;\n    return regeneratorRuntime.wrap(function _callee2$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return _services.api.fetchAppSettings(\"getAppSettings\");\n\n          case 2:\n            resp = _context6.sent;\n            return _context6.abrupt(\"return\", resp);\n\n          case 4:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getAppSettings.apply(this, arguments);\n}\n\nfunction appSettings() {\n  return regeneratorRuntime.wrap(function appSettings$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          try {//const payload = yield call(setAppSettings);\n            //yield put({ type: GLOBAL_REDUCER.SET_APP_SETTINGS, payload });\n          } catch (e) {\n            console.error(e);\n          }\n\n        case 1:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\nfunction watch() {\n  return regeneratorRuntime.wrap(function watch$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return (0, _effects.fork)(appSettings);\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n/**\r\n * Essenetial saga\r\n */\n\n\nfunction root() {\n  return regeneratorRuntime.wrap(function root$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          getAppSettings();\n          _context4.next = 3;\n          return (0, _effects.all)([(0, _effects.fork)(watch)]);\n\n        case 3:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(fetchEntity, \"fetchEntity\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(setAppSettings, \"setAppSettings\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(getAppSettings, \"getAppSettings\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(appSettings, \"appSettings\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(watch, \"watch\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\sagas\\\\index.js\");\n  reactHotLoader.register(root, \"root\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\sagas\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/sagas/index.js?");

/***/ }),

/***/ "./src/app/selectors/router.js":
/*!*************************************!*\
  !*** ./src/app/selectors/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getRouterLocation = exports.getRouter = void 0;\n\nvar _reselect = __webpack_require__(/*! reselect */ \"reselect\");\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar getRouter = function getRouter(state) {\n  return state.get(\"router\");\n};\n\nexports.getRouter = getRouter;\nvar getRouterLocation = (0, _reselect.createSelector)(getRouter, function (route) {\n  return route.get(\"location\");\n});\nexports.getRouterLocation = getRouterLocation;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getRouter, \"getRouter\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\selectors\\\\router.js\");\n  reactHotLoader.register(getRouterLocation, \"getRouterLocation\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\selectors\\\\router.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/selectors/router.js?");

/***/ }),

/***/ "./src/app/services/api.js":
/*!*********************************!*\
  !*** ./src/app/services/api.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchAppSettings = void 0;\n\nvar _normalizr = __webpack_require__(/*! normalizr */ \"normalizr\");\n\nvar _humps = __webpack_require__(/*! humps */ \"humps\");\n\n__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _qs = _interopRequireDefault(__webpack_require__(/*! qs */ \"qs\"));\n\nvar _globalActions = __webpack_require__(/*! ../actions/globalActions */ \"./src/app/actions/globalActions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar API_REQUEST = \"https://vsem-edu-oblako.ru/singlemerchant/api/\";\nvar INITIAL_PARAMS = {\n  json: true,\n  merchant_keys: \"929990d3b27944af404a5eb3ee1ec4f6\",\n  lang: \"ru\",\n  device_platform: \"site\",\n  device_id: \"010101\"\n};\n\nfunction callApi(endpoint, schema) {\n  var fullUrl = endpoint.indexOf(API_REQUEST) === -1 ? API_REQUEST + endpoint + \"?\" + _qs.default.stringify(INITIAL_PARAMS) : endpoint;\n  return fetch(fullUrl).then(function (response) {\n    return response.json().then(function (json) {\n      return {\n        json: json,\n        response: response\n      };\n    });\n  }).then(function (_ref) {\n    var json = _ref.json,\n        response = _ref.response;\n\n    if (!response.ok) {\n      return Promise.reject(json);\n    }\n\n    var camelizedJson = (0, _humps.camelizeKeys)(json);\n    console.log(Object.assign({}, (0, _normalizr.normalize)(camelizedJson, schema)));\n    return Object.assign({}, (0, _normalizr.normalize)(camelizedJson, schema));\n  }).then(function (response) {\n    return {\n      response: response\n    };\n  }, function (error) {\n    return {\n      error: error.message || \"API_REQUEST ERROR\"\n    };\n  });\n}\n\nvar details = new _normalizr.schema.Entity(\"details\");\nvar detailsSchema = new _normalizr.schema.Entity('details', {});\nvar appSettingsSchema = new _normalizr.schema.Array({\n  details: details //\"code\": code,\n\n});\n\nvar fetchAppSettings = function fetchAppSettings(appSettings) {\n  return callApi(appSettings, appSettingsSchema);\n};\n\nexports.fetchAppSettings = fetchAppSettings;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(API_REQUEST, \"API_REQUEST\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(INITIAL_PARAMS, \"INITIAL_PARAMS\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(callApi, \"callApi\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(details, \"details\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(detailsSchema, \"detailsSchema\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(appSettingsSchema, \"appSettingsSchema\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\services\\\\api.js\");\n  reactHotLoader.register(fetchAppSettings, \"fetchAppSettings\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\services\\\\api.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/services/api.js?");

/***/ }),

/***/ "./src/app/services/index.js":
/*!***********************************!*\
  !*** ./src/app/services/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.history = exports.api = void 0;\n\nvar _api = _interopRequireWildcard(__webpack_require__(/*! ./api */ \"./src/app/services/api.js\"));\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar api = _api;\nexports.api = api;\nvar history = _reactRouter.browserHistory;\nexports.history = history;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(api, \"api\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\services\\\\index.js\");\n  reactHotLoader.register(history, \"history\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\services\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/services/index.js?");

/***/ }),

/***/ "./src/app/views/Main.jsx":
/*!********************************!*\
  !*** ./src/app/views/Main.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _withStyles = _interopRequireDefault(__webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar Main = /*#__PURE__*/function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    _classCallCheck(this, Main);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_react.default.createElement(\"div\", {\n        className: \"crutch\"\n      }, \"Main123123211233254645\", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n        to: \"/world\"\n      }, \"123\"));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Main;\n}(_react.default.Component);\n\nvar _default = Main;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Main, \"Main\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\views\\\\Main.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\views\\\\Main.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/views/Main.jsx?");

/***/ }),

/***/ "./src/app/views/World.jsx":
/*!*********************************!*\
  !*** ./src/app/views/World.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar World = /*#__PURE__*/function (_React$Component) {\n  _inherits(World, _React$Component);\n\n  var _super = _createSuper(World);\n\n  function World(props) {\n    _classCallCheck(this, World);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(World, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_react.default.createElement(\"div\", null, \"World\");\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return World;\n}(_react.default.Component);\n\nvar _default = World;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(World, \"World\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\views\\\\World.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\views\\\\World.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/views/World.jsx?");

/***/ }),

/***/ "./src/app/views/errors/404.jsx":
/*!**************************************!*\
  !*** ./src/app/views/errors/404.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _StyleContext = _interopRequireDefault(__webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _dec, _class, _class2, _temp;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar NotFound = (_dec = (0, _reactRedux.connect)(function (state) {\n  return {\n    globalReducer: state.getIn([\"globalReducer\", \"appSettings\"])\n  };\n}, null), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_React$Component) {\n  _inherits(NotFound, _React$Component);\n\n  var _super = _createSuper(NotFound);\n\n  function NotFound(props) {\n    _classCallCheck(this, NotFound);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(NotFound, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_react.default.createElement(\"div\", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n        to: \"/world\"\n      }, \"Return to the back\"), \"415 | Page not found\");\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return NotFound;\n}(_react.default.Component), _defineProperty(_class2, \"propTypes\", {\n  globalReducer: _propTypes.default.shape().isRequired\n}), _temp)) || _class);\nvar _default = NotFound;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(NotFound, \"NotFound\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\views\\\\errors\\\\404.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\app\\\\views\\\\errors\\\\404.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/app/views/errors/404.jsx?");

/***/ }),

/***/ "./src/configureStore.js":
/*!*******************************!*\
  !*** ./src/configureStore.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, window) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\nvar _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\n\nvar _reduxSaga = _interopRequireWildcard(__webpack_require__(/*! redux-saga */ \"redux-saga\"));\n\nvar _immutable2 = __webpack_require__(/*! connected-react-router/immutable */ \"connected-react-router/immutable\");\n\nvar _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ \"./src/reducers.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar isDev = \"development\" !== \"production\";\n\nfunction configureStore() {\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var history = arguments.length > 1 ? arguments[1] : undefined;\n  var sagaMiddleware = (0, _reduxSaga.default)();\n  var middlewares = [_reduxThunk.default, (0, _immutable2.routerMiddleware)(history), sagaMiddleware];\n  var enhancers = [_redux.applyMiddleware.apply(void 0, middlewares)];\n  var composeEnhancers = isDev && (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n    shouldHotReload: false\n  }) : _redux.compose;\n  var store = (0, _redux.createStore)((0, _reducers.default)(history), (0, _immutable.fromJS)(initialState), composeEnhancers.apply(void 0, enhancers));\n  store.runSaga = sagaMiddleware.run;\n\n  store.close = function () {\n    return store.dispatch(_reduxSaga.END);\n  };\n\n  store.injectedReducers = {};\n\n  if (false) {}\n\n  return store;\n}\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isDev, \"isDev\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\configureStore.js\");\n  reactHotLoader.register(configureStore, \"configureStore\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\configureStore.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), __webpack_require__(/*! ./helpers/window.mock */ \"./helpers/window.mock.js\")))\n\n//# sourceURL=webpack://app/./src/configureStore.js?");

/***/ }),

/***/ "./src/reducers.js":
/*!*************************!*\
  !*** ./src/reducers.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _reduxImmutable = __webpack_require__(/*! redux-immutable */ \"redux-immutable\");\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\nvar _immutable2 = __webpack_require__(/*! connected-react-router/immutable */ \"connected-react-router/immutable\");\n\nvar _globalReducer = _interopRequireDefault(__webpack_require__(/*! ./app/reducers/modules/globalReducer */ \"./src/app/reducers/modules/globalReducer.js\"));\n\nvar _reduxConnect = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n(0, _reduxConnect.setToImmutableStateFunc)(function (mutableState) {\n  return (0, _immutable.fromJS)(mutableState);\n});\n(0, _reduxConnect.setToMutableStateFunc)(function (immutableState) {\n  return immutableState.toJS();\n});\n\nvar _default = function _default(history) {\n  return (0, _reduxImmutable.combineReducers)({\n    reduxAsyncConnect: _reduxConnect.immutableReducer,\n    router: (0, _immutable2.connectRouter)(history),\n    globalReducer: _globalReducer.default\n  });\n};\n\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\reducers.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/reducers.js?");

/***/ }),

/***/ "./src/sagas.js":
/*!**********************!*\
  !*** ./src/sagas.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _sagas = __webpack_require__(/*! ./app/sagas */ \"./src/app/sagas/index.js\");\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar _default = _sagas.root;\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\3333\\\\Desktop\\\\react-sushidocx\\\\susidocx\\\\src\\\\sagas.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://app/./src/sagas.js?");

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi babel-polyfill ./server/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./server/index.js */\"./server/index.js\");\n\n\n//# sourceURL=webpack://app/multi_babel-polyfill_./server/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack://app/external_%22axios%22?");

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

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack://app/external_%22history%22?");

/***/ }),

/***/ "humps":
/*!************************!*\
  !*** external "humps" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"humps\");\n\n//# sourceURL=webpack://app/external_%22humps%22?");

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

/***/ "normalizr":
/*!****************************!*\
  !*** external "normalizr" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"normalizr\");\n\n//# sourceURL=webpack://app/external_%22normalizr%22?");

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

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack://app/external_%22react-router%22?");

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