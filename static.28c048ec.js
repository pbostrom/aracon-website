(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://aragon.github.io/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@aragon/ui");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100vw;\n  margin: -1px auto -1px auto;\n  position: relative;\n  text-align: left;\n\n  .h1box {\n    display: flex;\n  }\n  h1 {\n    margin-bottom: 25px;\n    font-size: 48px;\n    line-height: 1.5;\n    background: -webkit-linear-gradient(left, #7af7d0, #64b0f1);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 900;\n    text-align: left;\n  }\n  h2 {\n    margin-bottom: 25px;\n    font-size: 38px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  h3 {\n    margin-bottom: 25px;\n    font-size: 25px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  p {\n    font-size: 17px;\n    font-size: 19px;\n    line-height: 27px;\n    color: ', ';\n    a {\n      color: #61B2F0;\n      text-decoration: none;\n    }\n  }\n  button a {\n    text-decoration: none;\n  }\n  .strong {\n    font-size: 17px;\n    font-weight: 700;\n  }\n'], ['\n  width: 100vw;\n  margin: -1px auto -1px auto;\n  position: relative;\n  text-align: left;\n\n  .h1box {\n    display: flex;\n  }\n  h1 {\n    margin-bottom: 25px;\n    font-size: 48px;\n    line-height: 1.5;\n    background: -webkit-linear-gradient(left, #7af7d0, #64b0f1);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 900;\n    text-align: left;\n  }\n  h2 {\n    margin-bottom: 25px;\n    font-size: 38px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  h3 {\n    margin-bottom: 25px;\n    font-size: 25px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  p {\n    font-size: 17px;\n    font-size: 19px;\n    line-height: 27px;\n    color: ', ';\n    a {\n      color: #61B2F0;\n      text-decoration: none;\n    }\n  }\n  button a {\n    text-decoration: none;\n  }\n  .strong {\n    font-size: 17px;\n    font-weight: 700;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContent = _styledComponents2.default.div(_templateObject, _ui.theme.textSecondary);

var Section = function Section(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var containerProps = { className: className };
  var content = _react2.default.createElement(
    StyledContent,
    null,
    _react2.default.createElement('div', props)
  );
  return _react2.default.createElement(
    'section',
    containerProps,
    content
  );
};

Section.propTypes = {
  className: _propTypes2.default.string
};

exports.default = Section;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Page = __webpack_require__(34);

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Page).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(26);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(27);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(28);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

var _reactUniversalComponent = __webpack_require__(30);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Speakers',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/pages/Speakers', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Speakers');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/pages/Speakers';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Agenda',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/pages/Agenda', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Agenda');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/pages/Agenda';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Registration',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/pages/Registration', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Registration');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/pages/Registration';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Volunteer',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/pages/Volunteer', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Volunteer');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/pages/Volunteer';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Faq',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/pages/Faq', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Faq');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/pages/Faq';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Travel',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/pages/Travel', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Travel');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/pages/Travel';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/NotFound',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/pages/NotFound', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/NotFound');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/pages/NotFound';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 7

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  clear: both;\n  text-align: left;\n  position: relative;\n  .time {\n    margin-bottom: .5em;\n    float: left;\n    width: 33%;\n    padding-right: 30px;\n    text-align: right;\n    position: relative;\n  }\n  .time:after {\n    content: \'\';\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border-radius: 12px;\n    top: 6px;\n    right: -6px;\n    background-image: linear-gradient(71deg,#6aacf4,#18ebd6);\n  }\n  .time:before {\n    content: \'\';\n    width: 26px;\n    height: 26px;\n    border-radius: 30px;\n    opacity: 0.22;\n    background-image: linear-gradient(to right,#6aacf4,#18ebd6);\n    position: absolute;\n    right: -13px;\n    top: -1px;\n  }\n  .description {\n    margin: 0 0 3em;\n    float: right;\n    width: 66%;\n    padding-left: 30px;\n    position: relative;\n  }\n  .description p {\n    line-height: 1;\n    font-size: 18px;\n    ', ';\n    margin-bottom: 5px;\n    font-weight: 700;\n    color: #000000;\n  }\n  .description h6 {\n    color: ', ';\n    line-height: 1;\n    margin-top: 8px;\n    ', ';\n  }\n  .time h3 {\n    font-size: 15px;\n    ', ';\n    color: #000000;\n  }\n'], ['\n  clear: both;\n  text-align: left;\n  position: relative;\n  .time {\n    margin-bottom: .5em;\n    float: left;\n    width: 33%;\n    padding-right: 30px;\n    text-align: right;\n    position: relative;\n  }\n  .time:after {\n    content: \'\';\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border-radius: 12px;\n    top: 6px;\n    right: -6px;\n    background-image: linear-gradient(71deg,#6aacf4,#18ebd6);\n  }\n  .time:before {\n    content: \'\';\n    width: 26px;\n    height: 26px;\n    border-radius: 30px;\n    opacity: 0.22;\n    background-image: linear-gradient(to right,#6aacf4,#18ebd6);\n    position: absolute;\n    right: -13px;\n    top: -1px;\n  }\n  .description {\n    margin: 0 0 3em;\n    float: right;\n    width: 66%;\n    padding-left: 30px;\n    position: relative;\n  }\n  .description p {\n    line-height: 1;\n    font-size: 18px;\n    ', ';\n    margin-bottom: 5px;\n    font-weight: 700;\n    color: #000000;\n  }\n  .description h6 {\n    color: ', ';\n    line-height: 1;\n    margin-top: 8px;\n    ', ';\n  }\n  .time h3 {\n    font-size: 15px;\n    ', ';\n    color: #000000;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var EntryBox = _styledComponents2.default.div(_templateObject, medium('line-height: 1; font-size: 24px;'), _ui.theme.textTertiary, medium('line-height: 1.5; margin-top: 10px;'), medium('font-size: 17px; font-weight: 700;'));

var Entry = function Entry(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var content = _react2.default.createElement(
    EntryBox,
    null,
    _react2.default.createElement(
      'div',
      { className: 'time' },
      _react2.default.createElement(
        'h3',
        null,
        props.time,
        ' HS'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'description' },
      _react2.default.createElement(
        'p',
        null,
        props.title
      ),
      _react2.default.createElement(
        'h6',
        null,
        props.subtitle
      )
    )
  );
  return content;
};

exports.default = Entry;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-right: solid 100vw transparent;\n  border-top: 15vh solid #1d1d2a;\n  margin-top: -1px;\n  background-color: transparent;\n  z-index: 5;\n  position:relative;\n'], ['\n  border-right: solid 100vw transparent;\n  border-top: 15vh solid #1d1d2a;\n  margin-top: -1px;\n  background-color: transparent;\n  z-index: 5;\n  position:relative;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(5);

var _Hero = __webpack_require__(42);

var _Hero2 = _interopRequireDefault(_Hero);

var _Speakers = __webpack_require__(12);

var _Speakers2 = _interopRequireDefault(_Speakers);

var _Venue = __webpack_require__(49);

var _Venue2 = _interopRequireDefault(_Venue);

var _Map = __webpack_require__(51);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AccomodationTriangle = _styledComponents2.default.div(_templateObject);

var Home = function Home() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/' },
    _react2.default.createElement(_Hero2.default, null),
    _react2.default.createElement(_Speakers2.default, null),
    _react2.default.createElement(_Venue2.default, null),
    _react2.default.createElement(_Map2.default, null),
    _react2.default.createElement(AccomodationTriangle, null)
  );
};

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 1195px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  a {\n    color: #63B1F1;   \n    font-size: 19px;  \n    line-height: 27px;\n  }\n'], ['\n  width: 100%;\n  max-width: 1195px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  a {\n    color: #63B1F1;   \n    font-size: 19px;  \n    line-height: 27px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 695px;\n  margin: 70px auto 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n'], ['\n  width: 100%;\n  max-width: 695px;\n  margin: 70px auto 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _Speaker = __webpack_require__(45);

var _Speaker2 = _interopRequireDefault(_Speaker);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpeakersBox = _styledComponents2.default.div(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2);

var TextContainer = _styledComponents2.default.div(_templateObject3);

var Speakers = function Speakers() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      SpeakersBox,
      null,
      _react2.default.createElement(
        'div',
        { className: 'h1box' },
        _react2.default.createElement(
          'h1',
          null,
          'Speakers'
        )
      ),
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(_Speaker2.default, { photo: 'speaker1', name: 'Name LastName', position: 'Founder', company: 'Company' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'speaker1', name: 'Name LastName', position: 'Founder', company: 'Company' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'speaker1', name: 'Name LastName', position: 'Founder', company: 'Company' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'speaker1', name: 'Name LastName', position: 'Founder', company: 'Company' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'speaker1', name: 'Name LastName', position: 'Founder', company: 'Company' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'speaker1', name: 'Name LastName', position: 'Founder', company: 'Company' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'speaker1', name: 'Name LastName', position: 'Founder', company: 'Company' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'speaker1', name: 'Name LastName', position: 'Founder', company: 'Company' })
      ),
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _ui.Button,
          null,
          _react2.default.createElement(
            'a',
            { href: './speakers' },
            'See more...'
          )
        )
      ),
      _react2.default.createElement(
        TextContainer,
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Want to Speak at AraCon 2019?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'If you would like to do a workshop or a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - send us an email at ',
          _react2.default.createElement(
            'a',
            { href: 'mailto:speakers@aragon.org' },
            'speakers@aragon.org'
          )
        )
      )
    )
  );
};

exports.default = Speakers;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Forms = __webpack_require__(14);

var _Forms2 = _interopRequireDefault(_Forms);

var _Speakers = __webpack_require__(12);

var _Speakers2 = _interopRequireDefault(_Speakers);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Speakers = function Speakers() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/speakers' },
    _react2.default.createElement(_Speakers2.default, null),
    _react2.default.createElement(_Forms2.default, { type: 'speakers', src: 'http://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaOhfvbt_2Fq8nWc81qWg3efVA.js' }),
    _react2.default.createElement('div', { id: 'speakers' })
  );
};

exports.default = Speakers;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex!important;\n  text-align: center;\n  justify-content: center;\n'], ['\n  display: flex!important;\n  text-align: center;\n  justify-content: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents2.default.div(_templateObject);

var Forms = function (_React$Component) {
  _inherits(Forms, _React$Component);

  function Forms() {
    _classCallCheck(this, Forms);

    return _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).apply(this, arguments));
  }

  _createClass(Forms, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var Script;
      window.SMCX = window.SMCX || [], Script = document.createElement("script"), Script.type = "text/javascript", Script.async = !0, Script.id = "smcx-sdk", Script.src = this.props.src, document.getElementById(this.props.type + "Script").appendChild(Script);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Content, { id: this.props.type + "Script" });
    }
  }]);

  return Forms;
}(_react2.default.Component);

exports.default = Forms;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  button {\n    width: 50%;\n    height: 58px;\n    font-size: 17px;\n    font-weight: 700;\n    color: #000000;\n  }\n  .first-button {\n    border-radius: 3px 0 0 0;\n  }\n  .second-button {\n    border-radius: 0 3px 0 0;\n  }\n'], ['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  button {\n    width: 50%;\n    height: 58px;\n    font-size: 17px;\n    font-weight: 700;\n    color: #000000;\n  }\n  .first-button {\n    border-radius: 3px 0 0 0;\n  }\n  .second-button {\n    border-radius: 0 3px 0 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _DayOne = __webpack_require__(57);

var _DayOne2 = _interopRequireDefault(_DayOne);

var _DayTwo = __webpack_require__(58);

var _DayTwo2 = _interopRequireDefault(_DayTwo);

var _Entry = __webpack_require__(8);

var _Entry2 = _interopRequireDefault(_Entry);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Container = _styledComponents2.default.div(_templateObject);

var Agenda = function (_React$Component) {
  _inherits(Agenda, _React$Component);

  function Agenda() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Agenda);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Agenda.__proto__ || Object.getPrototypeOf(Agenda)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: 'dayOne'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Agenda, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var active = this.state.active;

      return _react2.default.createElement(
        _components.Page,
        { path: '/agenda' },
        _react2.default.createElement(
          _Section2.default,
          null,
          _react2.default.createElement(
            Container,
            null,
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'div',
                { className: 'h1box' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Agenda'
                )
              )
            ),
            _react2.default.createElement(
              _ui.Button,
              { className: 'first-button',
                mode: active == 'dayOne' ? 'normal' : 'secondary',
                onClick: function onClick() {
                  return _this2.setState({ active: 'dayOne' });
                }
              },
              'Tuesday Jan 29'
            ),
            _react2.default.createElement(
              _ui.Button,
              { className: 'second-button',
                mode: active != 'dayOne' ? 'normal' : 'secondary',
                onClick: function onClick() {
                  return _this2.setState({ active: 'dayTwo' });
                }
              },
              'Wednesday Jan 30'
            ),
            active == 'dayOne' ? _react2.default.createElement(_DayOne2.default, null) : _react2.default.createElement(_DayTwo2.default, null)
          )
        )
      );
    }
  }]);

  return Agenda;
}(_react2.default.Component);

exports.default = Agenda;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 50px;\n  .schedule {\n    width: 100%;\n    max-width: 800px;\n    background: #fff;\n    padding: 0;\n    ', ';\n    position: relative;\n    margin: auto;\n  }\n  .schedule:before {\n    content: \'\';\n    position: absolute;\n    top: 6px;\n    left: calc(33% - 1px);\n    ', ';\n    bottom: 0px;\n    width: 2px;\n    background: #ddd;\n  }\n  .schedule:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n'], ['\n  margin-top: 50px;\n  .schedule {\n    width: 100%;\n    max-width: 800px;\n    background: #fff;\n    padding: 0;\n    ', ';\n    position: relative;\n    margin: auto;\n  }\n  .schedule:before {\n    content: \'\';\n    position: absolute;\n    top: 6px;\n    left: calc(33% - 1px);\n    ', ';\n    bottom: 0px;\n    width: 2px;\n    background: #ddd;\n  }\n  .schedule:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var ScheduleContainer = _styledComponents2.default.div(_templateObject, medium('padding: 5px 50px;'), medium('left: calc(33% + 16px);'));

var Schedule = function Schedule(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var containerProps = { className: className };

  return _react2.default.createElement(
    ScheduleContainer,
    containerProps,
    _react2.default.createElement(
      'div',
      { className: 'schedule' },
      _react2.default.createElement('div', props)
    )
  );
};

Schedule.propTypes = {
  className: _propTypes2.default.string
};

exports.default = Schedule;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  margin: 22px;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #707070;\n'], ['\n  text-align: left;\n  margin: 22px;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #707070;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 50px 8.5%;\n'], ['\n  width: 100%;\n  padding: 50px 8.5%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Criteria = _styledComponents2.default.ul(_templateObject);
var Container = _styledComponents2.default.ul(_templateObject2);

var Registration = function Registration() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/registration' },
    _react2.default.createElement(
      _Section2.default,
      null,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1box' },
            _react2.default.createElement(
              'h1',
              null,
              'Registration'
            )
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          { size: 'xlarge' },
          _react2.default.createElement(
            'h3',
            null,
            'Registration for AraCon 2019 will be free of charge for Aragon community members.'
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'p',
            null,
            'All other members must pay the standard admission fee.'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'span',
              { className: 'strong' },
              'Not sure whether you\u2019re qualified for a free ticket? These are the criteria:'
            )
          )
        ),
        _react2.default.createElement(
          Criteria,
          null,
          _react2.default.createElement(
            'li',
            null,
            'You\u2019re using Aragon to build your own DAO'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You have contributed to the development of the Aragon project and the Aragon Network'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You\u2019re actively participating in discussions on our official community chat (aragon.chat)'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You have contributed in the creation of at least one Aragon Monthly issue'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You attended some of our previous events (hosted or supported)'
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'p',
            null,
            'If you meet one of the criteria above, please email us with the proof at ',
            _react2.default.createElement(
              _ui.SafeLink,
              { href: 'mailto:info@aracon.org' },
              ' info@aracon.org'
            ),
            ' and we will send you a registration link.',
            _react2.default.createElement('br', null),
            'If you are not a member of the Aragon community yet, we are excited to meet you soon. To get your ticket, please register below!'
          )
        )
      )
    )
  );
};

exports.default = Registration;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 50px 8.5%;\n'], ['\n  width: 100%;\n  padding: 50px 8.5%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Forms = __webpack_require__(14);

var _Forms2 = _interopRequireDefault(_Forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.ul(_templateObject);

var Volunteer = function Volunteer() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/volunteer' },
    _react2.default.createElement(
      _Section2.default,
      null,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1box' },
            _react2.default.createElement(
              'h1',
              null,
              'Volunteer'
            )
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          { size: 'xlarge' },
          _react2.default.createElement(
            'h3',
            null,
            'Volunteering at AraCon is a surefire way of making new connections and learning new skills, as well as experiencing the magic of Aragon\u2019s flagship conference from an insider\u2019s perspective.'
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'p',
            null,
            'In exchange for your help, we\u2019ll provide you with a free ticket to attend the event.'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_Forms2.default, { type: 'speakers', src: 'http://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaMTwCxvLp_2BTsBh0bYRiVb2M.js' })
      )
    )
  );
};

exports.default = Volunteer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: left;\n  h2 {\n    text-transform: uppercase;\n    color: rgb(0, 203, 230);\n    font-weight: 600;\n    font-size: 18px;\n    margin-bottom: 5px;\n  }\n  p {\n    margin-bottom: 27px;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: left;\n  h2 {\n    text-transform: uppercase;\n    color: rgb(0, 203, 230);\n    font-weight: 600;\n    font-size: 18px;\n    margin-bottom: 5px;\n  }\n  p {\n    margin-bottom: 27px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n'], ['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _Question = __webpack_require__(59);

var _Question2 = _interopRequireDefault(_Question);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FaqBox = _styledComponents2.default.div(_templateObject);
var Container = _styledComponents2.default.div(_templateObject2);

var Faq = function Faq() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/faq' },
    _react2.default.createElement(
      _Section2.default,
      null,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1box' },
            _react2.default.createElement(
              'h1',
              null,
              'FAQ'
            )
          )
        ),
        _react2.default.createElement(
          FaqBox,
          null,
          _react2.default.createElement(_Question2.default, { question: 'What is AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'AraCon is the flagship event of the Aragon Project. It is organised by Aragon Foundation for the Aragon community and anyone interested in governance on blockchain, DAOs and digital jurisdictions.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'When and where is AraCon happening?', answer: _react2.default.createElement(
              'p',
              null,
              'AraCon is taking place on 29th-30th January 2019, at Bolle Fests\xE4le in Berlin, Germany.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Is AraCon free-to-attend?', answer: _react2.default.createElement(
              'p',
              null,
              'AraCon is free to attend for Aragon community. To make sure you\u2019re eligible for a free ticket, please check if you meet one of the criteria ',
              _react2.default.createElement(
                'a',
                { href: '/registration' },
                'here'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Where can I find the conference agenda for AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'You can view the conference agenda ',
              _react2.default.createElement(
                'a',
                { href: '/agenda' },
                'here'
              )
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How do I get to AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'You can plan your route to AraCon by visiting the ',
              _react2.default.createElement(
                'a',
                { href: '/travelinformation' },
                'Travel Information page'
              )
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Where can I stay during my visit to AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'Our official hotel partner is Hotel Abion. If the official hotel gets booked out or you prefer to stay somewhere else, here\u2019s the list of hotels in the area.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How do I register for AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'To learn more about registration process and fees, check out the ',
              _react2.default.createElement(
                'a',
                { href: '/registration' },
                'Registration page'
              )
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'What do I need to bring with me to AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'All you need to bring is your ticket confirmation and lots of positive vibes \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Can my company exhibit or speak at AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'There will be no exhibition areas available, except for the projects from Aragon\u2019s ',
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/aragon/nest' },
                'Nest program'
              ),
              '. If you\u2019d like to speak at AraCon, please submit your application ',
              _react2.default.createElement(
                'a',
                { href: '/speakers' },
                'here'
              )
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How can my company become an official partner of AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'If you wish your company partner with the conference, contribute in any way, or organise a satellite event, please send us your proposal at ',
              _react2.default.createElement(
                'a',
                { href: 'mailto:info@aracon.org' },
                'info@aracon.org'
              ),
              '.'
            ) })
        )
      )
    )
  );
};

exports.default = Faq;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .text {\n    width: 100%;\n    padding-left: 0;\n    ', ';\n    ', ';\n  }\n  .image {\n    width: 100%;\n    ', ';\n    ', ';\n    img {\n      width: 100%;\n    }\n  }\n  p, h2 {\n    color: #18181A;\n    text-align: left;\n    margin-bottom: 30px;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .text {\n    width: 100%;\n    padding-left: 0;\n    ', ';\n    ', ';\n  }\n  .image {\n    width: 100%;\n    ', ';\n    ', ';\n    img {\n      width: 100%;\n    }\n  }\n  p, h2 {\n    color: #18181A;\n    text-align: left;\n    margin-bottom: 30px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  ', ';\n'], ['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _accomodation = __webpack_require__(60);

var _accomodation2 = _interopRequireDefault(_accomodation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var AccomodationBox = _styledComponents2.default.div(_templateObject, medium('width: 50%; padding-left: 40px;'), large('width: 40%; padding-left: 40px;'), medium('width: 50%;'), large('width: 60%;'));

var Content = _styledComponents2.default.div(_templateObject2, medium('flex-direction: row;'));

var Travel = function Travel() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/travelinformation' },
    _react2.default.createElement(
      _Section2.default,
      null,
      _react2.default.createElement(
        AccomodationBox,
        null,
        _react2.default.createElement(
          'div',
          { className: 'h1box' },
          _react2.default.createElement(
            'h1',
            null,
            'Accomodation'
          )
        ),
        _react2.default.createElement(
          Content,
          null,
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement('img', { src: _accomodation2.default, alt: '' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'text' },
            _react2.default.createElement(
              _ui.Text,
              { size: 'xlarge' },
              _react2.default.createElement(
                'h2',
                null,
                'Berlin ABION Hotel'
              )
            ),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'p',
                null,
                'Alt-Moabit 98, 10559, Berlin, Germany'
              )
            ),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'p',
                null,
                'The official conference hotel is located just 100m away from the venue.  It has a unique, direct view of the River Spree and a superb location at the heart of the capital city between the West Centre (Ku\u2019damm) and the East Centre (Alexanderplatz). To join our speakers and other guests, book your stay by clicking on the button below.'
              )
            ),
            _react2.default.createElement(
              _ui.Button,
              { mode: 'strong' },
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://www.google.es/', target: '_blank' },
                'Book your stay'
              )
            ),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement('br', null),
                'Prices are \u200E\u20AC109 for a single room and \u200E\u20AC119 for a double room per night, breakfast included. All rooms are subject to availability. Special price is valid for all bookings between xx-xx.'
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Travel;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(
    _components.Page,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Not Found'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The page you are trying to access could not be found.'
    )
  );
};

exports.default = NotFound;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(23);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(24);

var _App = __webpack_require__(25);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _App2.default;


if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  render(_App2.default);

  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(6);

var _reactStaticRoutes = __webpack_require__(7);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(31);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(32);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(33);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(10);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 200px;\n  padding-top: 64px\n'], ['\n  min-height: 200px;\n  padding-top: 64px\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(6);

var _reactStaticRoutes = __webpack_require__(7);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _Navbar = __webpack_require__(35);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(40);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents2.default.div(_templateObject);

var menuItems = [['/', 'About'], ['/speakers', 'Speakers'], ['/agenda', 'Agenda'], ['/registration', 'Register'], ['/volunteer', 'Volunteer'], ['/travelinformation', 'Travel Information'], ['/faq', 'FAQ']];

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          path = _props.path;

      var items = menuItems.map(function (item) {
        return [].concat(_toConsumableArray(item), [item[0] === path]);
      });
      return _react2.default.createElement(_reactStatic.SiteData, {
        render: function render(_ref) {
          var siteTitle = _ref.title;
          return _react2.default.createElement(_reactStatic.RouteData, {
            render: function render(_ref2) {
              var title = _ref2.title;
              return _react2.default.createElement(
                _ui.AragonApp,
                { publicUrl: '/aragon-ui/', className: 'app' },
                _react2.default.createElement(
                  _reactStatic.Head,
                  null,
                  _react2.default.createElement(
                    'title',
                    null,
                    title || siteTitle
                  )
                ),
                _react2.default.createElement(_Navbar2.default, { menuItems: items, path: path }),
                _react2.default.createElement(
                  Content,
                  null,
                  children
                ),
                _react2.default.createElement(_Footer2.default, { path: path })
              );
            }
          });
        }
      });
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 64px;\n  background: #18181A;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  position: fixed; \n  z-index: 5;\n  &.navbar-home {\n    background-color: transparent;\n  }\n\n  &.navbar-home.navbar-animation { \n    animation-name: navbar-animation;\n    animation-duration: 1s;\n    background-color: #18181A;\n  }\n\n  &.navbar-home.navbar-inverse-animation { \n    animation-name: navbar-inverse-animation;\n    animation-duration: 1s;\n    background-color: transparent;\n  }\n\n\n  @keyframes navbar-animation {\n    from {background-color: transparent;}\n    to {background-color: #18181A;}\n  }\n\n  @keyframes navbar-inverse-animation {\n    from {background-color: #18181A;}\n    to {background-color: transparent;}\n  }\n'], ['\n  width: 100%;\n  height: 64px;\n  background: #18181A;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  position: fixed; \n  z-index: 5;\n  &.navbar-home {\n    background-color: transparent;\n  }\n\n  &.navbar-home.navbar-animation { \n    animation-name: navbar-animation;\n    animation-duration: 1s;\n    background-color: #18181A;\n  }\n\n  &.navbar-home.navbar-inverse-animation { \n    animation-name: navbar-inverse-animation;\n    animation-duration: 1s;\n    background-color: transparent;\n  }\n\n\n  @keyframes navbar-animation {\n    from {background-color: transparent;}\n    to {background-color: #18181A;}\n  }\n\n  @keyframes navbar-inverse-animation {\n    from {background-color: #18181A;}\n    to {background-color: transparent;}\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: auto;\n  height: auto;\n'], ['\n  width: auto;\n  height: auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: auto;\n  height: auto;\n  display: flex;\n  justify-content: flex-end;\n  ul {\n    display: flex;\n  }\n  button {\n    margin-left: 10px;\n  }\n'], ['\n  width: auto;\n  height: auto;\n  display: flex;\n  justify-content: flex-end;\n  ul {\n    display: flex;\n  }\n  button {\n    margin-left: 10px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStaticRoutes = __webpack_require__(7);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(6);

var _ui = __webpack_require__(2);

var _MenuItem = __webpack_require__(36);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuPanel = __webpack_require__(37);

var _MenuPanel2 = _interopRequireDefault(_MenuPanel);

var _aragonLogo = __webpack_require__(39);

var _aragonLogo2 = _interopRequireDefault(_aragonLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AraconNav = _styledComponents2.default.div(_templateObject);

var Brand = _styledComponents2.default.div(_templateObject2);
var End = _styledComponents2.default.div(_templateObject3);

var renderMenuItemLink = function renderMenuItemLink(_ref) {
  var url = _ref.url,
      children = _ref.children;
  return url.startsWith('/') ? _react2.default.createElement(
    _reactStatic.Link,
    { to: url },
    _react2.default.createElement(
      _ui.Text,
      { size: 'xlarge' },
      children
    )
  ) : _react2.default.createElement(
    'a',
    { href: url, target: '_blank', rel: 'noopener noreferrer' },
    _react2.default.createElement(
      _ui.Text,
      { size: 'xlarge' },
      children
    )
  );
};

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.onscroll = function () {
        if (document.documentElement.scrollTop > 150) {
          document.getElementById('navbar').classList.remove('navbar-inverse-animation');
          document.getElementById('navbar').classList.add('navbar-animation');
        } else {
          document.getElementById('navbar').classList.add('navbar-inverse-animation');
          document.getElementById('navbar').classList.remove('navbar-animation');
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          menuItems = _props.menuItems,
          path = _props.path;

      return _react2.default.createElement(
        AraconNav,
        { className: path == '/' ? 'navbar-home' : '', id: 'navbar' },
        _react2.default.createElement('img', { src: _aragonLogo2.default }),
        _react2.default.createElement(
          End,
          null,
          _react2.default.createElement(
            _ui.BreakPoint,
            { from: 'medium' },
            _react2.default.createElement(
              'ul',
              null,
              menuItems.map(function (item, i) {
                return _react2.default.createElement(_MenuItem2.default, {
                  key: i,
                  url: item[0],
                  label: item[1],
                  active: item[2],
                  renderLink: renderMenuItemLink
                });
              })
            )
          ),
          _react2.default.createElement(
            _ui.Button,
            { mode: 'strong' },
            'LIVE'
          ),
          _react2.default.createElement(
            _ui.BreakPoint,
            { to: 'medium' },
            _react2.default.createElement(_MenuPanel2.default, { items: menuItems, renderLink: renderMenuItemLink })
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  > span {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n    font-size: 15px;\n    color: ', ';\n  }\n  a {\n    text-decoration: none;\n    padding: 0 10px;\n    span {\n      color: ', ';\n    }\n    span:hover {\n      color: ', ';\n    }\n  }\n  .active a {\n    span {\n      color: ', ';\n      border-bottom: 2px solid #63B1F1;}\n    }\n  }\n'], ['\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  > span {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n    font-size: 15px;\n    color: ', ';\n  }\n  a {\n    text-decoration: none;\n    padding: 0 10px;\n    span {\n      color: ', ';\n    }\n    span:hover {\n      color: ', ';\n    }\n  }\n  .active a {\n    span {\n      color: ', ';\n      border-bottom: 2px solid #63B1F1;}\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuItem = function MenuItem(_ref) {
  var url = _ref.url,
      label = _ref.label,
      active = _ref.active,
      renderLink = _ref.renderLink;
  return _react2.default.createElement(
    StyledMenuItem,
    null,
    _react2.default.createElement(
      'span',
      { className: active ? 'active' : undefined },
      renderLink({ url: url, children: label })
    )
  );
};

var StyledMenuItem = _styledComponents2.default.li(_templateObject, function (_ref2) {
  var active = _ref2.active;
  return active ? _ui.theme.positiveText : _ui.theme.textSecondary;
}, _ui.theme.textSecondary, _ui.theme.positiveText, _ui.theme.positiveText);

MenuItem.propTypes = {
  url: _propTypes2.default.string,
  label: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  renderLink: _propTypes2.default.func
};

MenuItem.defaultProps = {
  active: false,
  renderLink: function renderLink(_ref3) {
    var url = _ref3.url,
        children = _ref3.children;
    return _react2.default.createElement(
      'a',
      { href: url },
      children
    );
  }
};

exports.default = MenuItem;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  a {\n    padding: 10px 30px;\n    text-decoration: none;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  a {\n    padding: 10px 30px;\n    text-decoration: none;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _menu = __webpack_require__(38);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Panel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opened: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;
      var opened = this.state.opened;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _ui.Button,
          { mode: 'text', onClick: function onClick() {
              return _this2.setState({ opened: true });
            } },
          _react2.default.createElement('img', { src: _menu2.default })
        ),
        _react2.default.createElement(
          _ui.SidePanel,
          { title: '', opened: opened, onClose: function onClose() {
              return _this2.setState({ opened: false });
            } },
          _react2.default.createElement(
            Container,
            null,
            items.map(function (item, i) {
              return _react2.default.createElement(
                'a',
                { key: i, href: item[0] },
                item[1]
              );
            })
          )
        )
      );
    }
  }]);

  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  items: _propTypes2.default.array
};

exports.default = Panel;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Ik0yIDE5di0yLjM1MmgyMFYxOUgyem0wLTUuODUydi0yLjI5NmgyMHYyLjI5Nkgyek0yIDVoMjB2Mi4zNTJIMlY1eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg=="

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTQ4IDM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGRlZnM+CgkJPGxpbmVhckdyYWRpZW50IHgxPSI2OS41NTglIiB5MT0iLTEzLjI2OSUiIHgyPSIzOS45MyUiIHkyPSI4Mi4yMDIlIiBpZD0iYSI+CgkJCTxzdG9wIHN0b3AtY29sb3I9IiMyQ0Y0RTEiIG9mZnNldD0iMy45JSIvPgoJCQk8c3RvcCBzdG9wLWNvbG9yPSIjMkNCMkUxIiBvZmZzZXQ9IjEwMCUiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxsaW5lYXJHcmFkaWVudCB4MT0iLTI0LjYxOCUiIHkxPSIzLjQ1NyUiIHgyPSIxNDcuNTk0JSIgeTI9IjEyNy43MjklIiBpZD0iYiI+CgkJCTxzdG9wIHN0b3AtY29sb3I9IiMyQ0Y0RTEiIG9mZnNldD0iMy45JSIvPgoJCQk8c3RvcCBzdG9wLWNvbG9yPSIjMkNCMkUxIiBvZmZzZXQ9IjEwMCUiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxsaW5lYXJHcmFkaWVudCB4MT0iMjEuNTElIiB5MT0iMTcuMzIlIiB4Mj0iNjkuMzUxJSIgeTI9Ijg0Ljc3NSUiIGlkPSJjIj4KCQkJPHN0b3Agc3RvcC1jb2xvcj0iIzJDRTVFMSIgb2Zmc2V0PSIwJSIvPgoJCQk8c3RvcCBzdG9wLWNvbG9yPSIjMkNCMkUxIiBvZmZzZXQ9IjEwMCUiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxsaW5lYXJHcmFkaWVudCB4MT0iNDkuOTkyJSIgeTE9Ijk5Ljk1OSUiIHgyPSI0OS45OTIlIiB5Mj0iMCUiIGlkPSJkIj4KCQkJPHN0b3Agb2Zmc2V0PSIwJSIvPgoJCQk8c3RvcCBzdG9wLWNvbG9yPSIjM0IzQjNCIiBvZmZzZXQ9IjEwMCUiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxsaW5lYXJHcmFkaWVudCB4MT0iLTEuMzg5JSIgeTE9IjUwLjAwNCUiIHgyPSIxMDEuMzI5JSIgeTI9IjUwLjAwNCUiIGlkPSJlIj4KCQkJPHN0b3Agc3RvcC1jb2xvcj0iIzJDRjRFMSIgb2Zmc2V0PSIzLjklIi8+CgkJCTxzdG9wIHN0b3AtY29sb3I9IiMyQ0IyRTEiIG9mZnNldD0iMTAwJSIvPgoJCTwvbGluZWFyR3JhZGllbnQ+Cgk8L2RlZnM+Cgk8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgoJCTxwYXRoIGQ9Ik0xMDEuNTI1IDE4Ljg4OHYtLjAzNWMwLTMuNjUgMi43OS02LjczMiA2LjczMy02LjczMiAyLjI3MyAwIDMuNjY4LjYzNyA1LjAxMSAxLjc3M2wtMS40NDYgMS43MjJjLTEtLjg2LTEuOTk4LTEuMzk1LTMuNjUtMS4zOTUtMi40MTIgMC00LjIzNyAyLjEwMS00LjIzNyA0LjU5OHYuMDM0YzAgMi42ODcgMS43NzQgNC42NSA0LjQ0MyA0LjY1IDEuMjIyIDAgMi4zNDItLjM5NiAzLjE1LS45ODJWMTkuNTZsMi4yMjItMS40OHY1LjQ3NWMtMS4yOTEgMS4xMDMtMy4xMzQgMi4wMzItNS40NDEgMi4wMzItNC4wOTggMC02Ljc4NS0yLjkxLTYuNzg1LTYuNjk4TTU4LjgyIDEyLjU1MWwtNS43MzQgMTMuMTIxaDIuMzQybDEuMzQzLTMuMTM0Ljg0NC0yLjAzMSAyLjIzOC01LjIxOCAyLjI1NiA1LjIxOC44MjcgMi4wMzEgMS4zMjYgMy4xMzRoMi40MjhsLTUuNzM0LTEzLjEyMXptMzIuMTMyLS4yNThsLTUuNzUxIDEzLjEyMWgyLjM1OWwxLjM0My0zLjE1MS44MjctMi4wMzIgMi4yMzgtNS4yIDIuMjU2IDUuMi44NDQgMi4wMzIgMS4zMjYgMy4xNTFoMi40MUw5My4wNyAxMi4yOTN6bTMzLjg4OC0uMTM4Yy00LjAxMSAwLTYuODM1IDMuMDY1LTYuODM1IDYuNzMzdi4wMzRjMCAzLjY2OCAyLjc5IDYuNjk5IDYuODAxIDYuNjk5IDQuMDEzIDAgNi44MzctMy4wNjUgNi44MzctNi43MzN2LS4wMzVjMC0zLjY2Ny0yLjgwNy02LjY5OC02LjgwMi02LjY5OHptNC4zOTIgNi43ODVjMCAyLjUzLTEuODA4IDQuNTk3LTQuMzkxIDQuNTk3cy00LjQ0My0yLjEtNC40NDMtNC42MzJ2LS4wMzRjMC0yLjUzMiAxLjgwOC00LjU5OCA0LjM5MS00LjU5OHM0LjQ0MyAyLjEgNC40NDMgNC42MzJ2LjAzNXptMTYuMTUyLTYuNTYxdjkuMDA2bC02Ljk5MS05LjAwNmgtMi4xMTh2MTMuMDM1aDIuMjU1di05LjI4MWw3LjE5OCA5LjI4MWgxLjkxMlYxMi4zOHptLTY2Ljg0NyA4LjA5M2MxLjgyNS0uNTE2IDMuMTE3LTEuODA4IDMuMTE3LTMuOTQzdi0uMDM1YzAtMS4xMzYtLjM5Ni0yLjEtMS4wODUtMi44MDYtLjg0NC0uODI3LTIuMTE4LTEuMzEtMy43NzEtMS4zMWgtNS44MnYxMy4wMzZoMi4yOVYxNC40NjJoMy4zNGMuMjkzIDAgLjU1MS4wMzUuNzkyLjA3IDEuMjA2LjIwNiAxLjkxMi45MyAxLjkxMiAyLjA4M3YuMDM0YzAgMS4zMjYtMS4wNSAyLjE3LTIuNjg3IDIuMTdoLTEuMjc0bC0uODk1IDIuMDMyaDEuNjg3bDMuMjAzIDQuNTQ2aDIuNzA0bC0zLjUxMy00LjkyNXoiIGZpbGw9IiNmZmYiLz4KCQk8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEpIj4KCQkJPGVsbGlwc2UgZmlsbD0idXJsKCNhKSIgY3g9IjIxLjI2NyIgY3k9IjE2LjExNSIgcng9IjEwLjk0MiIgcnk9IjExLjIyMSIvPgoJCQkJPHBhdGggZD0iTTI4Ljk1MSAxMi43NWE2LjMxNiA2LjMxNiAwIDAgMSAxLjE5NCAzLjcxMmMwIDEuNjItLjY1MSAzLjExNy0xLjc2IDQuMzNsLjY3NSAyLjU4NWgyLjA1bDIuMTYtMi41MTEuNTc5LTMuNjc0LjEyLTIuMTktMi4xMzUtMi40NzQtMi44ODMuMjIzeiIgZmlsbD0idXJsKCNiKSIvPgoJCQkJPHBhdGggZD0iTTUuMTg2IDIzLjY3NGwuMzc0IDEuNTIyczQuNDE1IDkuMjkgMTQuMzU2IDEyLjc0MmMwIDAgOS4zMTMtMy45NTkgMTMuMzMtMTAuNjc2TDI3LjQzIDIyLjNzLTIuNjU0IDIuMTY1LTYuNTk5IDIuMTY1Yy0zLjk0NCAwLTkuMy0yLjQxMi05LjMtNy4zODYgMC00Ljk3MyA1LjU0OS02Ljc5MSA1LjU0OS02Ljc5MWwtMi4zNjUtLjU5NEg4LjY3Mkw0LjgzNiAxOS4xN2wuMzUgNC41MDN6IiBmaWxsPSJ1cmwoI2MpIi8+CgkJCQk8cGF0aCBkPSJNMzguNTkgMTMuNjljLS4xNjktLjE3Mi01LjA2Ny02LjQ5Mi0xOC40OTMtMTEuMjNDNy4wMDcgNyAxLjQxIDEzLjY5IDEuNDEgMTMuNjljLjUwNyAzLjAzMiAxLjc4NiA2LjQwOSAyLjk0NCA5LjAzMi4wOTYuMjIyIDEuNjQgMy4wMTggMi43ODYgNC41NC0uNjc1LTEuNTIyLTEuNDExLTIuODQ2LTEuNDExLTUuMTIyIDAtNi40MiA0Ljg1LTExLjY0MSAxMC45MTctMTEuODY0LjE0NSAwIC4zMDIgMCAuNDQ3LjAxM2wtMS40NDgtMS40ODVzNS44MjctMS4wMDIgMTMuMzA2IDMuNjM3YzAgMCAuMTA5LjIzNSAwIC45MjggMCAwIDMuNTIzIDEuNTU5IDMuODI0IDQuNTkuMzAyIDMuMDMtMS41NjggNC43NjMtMy4wNzYgNS4wMSAwIDAgLjc4NC0xLjI1LS40MjItMS45MTdhMS41NjkgMS41NjkgMCAwIDAtLjg1Ny0uMTk4Yy0yLjMwNCAwLTIuNTcgMi42OTctMi41NyAyLjY5Ny0uMDIzLjEzNi0uMDIzLjI3Mi0uMDIzLjQwOCAwIDAtLjM4NiAzLjk0NiA2LjQ2NiAzLjg3MiAwIDAgMy40NzQtNC4wMzMgNC4zOS03LjY1OGE4NC4zOCA4NC4zOCAwIDAgMCAuNzM3LTMuMDggODQuNjkgODQuNjkgMCAwIDAgMS4xMjItMy4yNjZsLjA0OC0uMTM2eiIgZmlsbD0idXJsKCNkKSIvPgoJCQkJPHBhdGggZD0iTTI1Ljk3MSAxMy42NDFjLjA5Ny0uMDUuNDEtLjIxLjc3Mi0uNTk0LjcyNC4xIDEuNDM2LjMzNCAxLjQzNi4zMzQtMS4zMTUtLjgxNi0zLjExMi0xLjI5OS01LjEwMy0xLjI4NiAwIDAgLjc2IDEuMTEzIDIuODcxIDEuNTcxbC4wMjQtLjAyNXoiIGZpbGw9IiMyODI4MjgiLz4KCQkJCTxwYXRoIGQ9Ik0zOS40MiAxMi4zMTlsLS4wODguNTFjLS4wNDcuMzk3LS4zNiAxLjgxNy0uNzQ2IDMuMTc3YTQyLjE4MiA0Mi4xODIgMCAwIDEtMi43NzUgNy4yMTNjLTEuNjAyIDMuMjIzLTMuNTUgNi4wMzYtNS43ODEgOC4zNS0yLjc1NiAyLjg1LTUuOTQyIDQuOTU1LTkuNDk1IDYuMjY3bC0uMTk4LjA3MS0uMzc3LjE1LS4zNzQtLjEzNS0uMjA4LS4wNzVjLTMuNTYtMS4zMTQtNi43NTctMy40MjMtOS40OTMtNi4yNjctMi4yNDMtMi4zMzgtNC4xODYtNS4xNDItNS43OC04LjM1QTQyLjI0NyA0Mi4yNDcgMCAwIDEgLjc2IDEzLjczMWMtLjA5LS40MS0uMTg2LS45Mi0uMTY5LS44NDhMLjUgMTIuMzU5bC4yMTEtLjE4NC4xNTctLjEzNmMzLjI2Mi0yLjgzNCA3LjEyLTUuMjY1IDExLjI4Ny03LjMwOCAyLjc3NS0xLjM2IDUuMzEzLTIuMzcgNy4yMjktMy4wMDVsLjU2My0uMTgyLjM4NC4xMTguMTkuMDY1YzEuOTEzLjYzMyA0LjQ1IDEuNjQ0IDcuMjI2IDMuMDA0IDQuMTYgMi4wNCA4LjAxMyA0LjQ2NiAxMS4yNzEgNy4yOTVsLjQuMjkzem0tMzcuODkxLjMyNGMtLjAwMS0uMDA0LS4wMDItLjAwMyAwIDB6bS4xNzQuODc0YTQxLjI1IDQxLjI1IDAgMCAwIDMuMjYyIDkuMjY1YzEuNTUgMy4xMTggMy40MzYgNS44NCA1LjYwNyA4LjEwMyAyLjYzNSAyLjc0IDUuNzA5IDQuNzY3IDkuMTMgNi4wM2wuMjQyLjA4Ny4yNjctLjA5OWMzLjQxNC0xLjI2IDYuNDc4LTMuMjgzIDkuMTMzLTYuMDMgMi4xNi0yLjI0IDQuMDQ5LTQuOTY5IDUuNjA3LTguMTA0YTQxLjE4NSA0MS4xODUgMCAwIDAgMi43MDgtNy4wNGMuMjMyLS44MTUuNDE3LTEuNTY0LjU1OS0yLjIyMmEyMS40ODcgMjEuNDg3IDAgMCAwIC4xNDgtLjc1MkMzNS4xODMgMTAgMzEuNDA5IDcuNjI0IDI3LjMzMiA1LjYyNWMtMi43MzQtMS4zNDEtNS4yMzItMi4zMzYtNy4xMS0yLjk1OGwtLjE4Mi0uMDYxLjE1My0uNDctLjEzOS40NzQtLjI0LS4wNzQuMTM4LS40NzQuMTQ0LjQ3Mi0uNDE4LjEzNWMtMS44NzQuNjItNC4zNzIgMS42MTUtNy4xMDYgMi45NTUtNC4wNzQgMS45OTctNy44NDQgNC4zNy0xMS4wMjUgNy4xMjNsLS4yMTEuMTgzLS4zMTItLjM3Ny40NzUtLjA4Ni4wMzcuMjEtLjQ3Ni4wODYuNDY4LS4xMmMuMDUxLjI3Mi4xMTcuNjA2LjE3NS44NzR6bTI3LjExIDE2LjgzNmMyLjEwNi0yLjE4NCAzLjk0OS00Ljg1IDUuNDc1LTcuOTE4YTQwLjUxNyA0MC41MTcgMCAwIDAgMi40NTgtNi4yMmMuMzc5LTEuMjQ1LjY0Ni0yLjMyLjgyLTMuMTc0LTMuMjA3LTIuNzE0LTYuOTktNS4wNC0xMS4wNTgtNi45ODhhNjMuMzE2IDYzLjMxNiAwIDAgMC00LjQtMS45MDcgNDcuNDQxIDQ3LjQ0MSAwIDAgMC0yLjE1Ny0uNzg1Yy0uNTcuMTktMS4yOTQuNDQ4LTIuMTYxLjc4NWE2My4wNTIgNjMuMDUyIDAgMCAwLTQuMzk5IDEuOTA3QzkuMzI3IDggNS41NDUgMTAuMzI2IDIuMzM4IDEzLjA0MmMuMTczLjg2My40MzcgMS45MzguODE1IDMuMTg3YTQwLjAzIDQwLjAzIDAgMCAwIDIuNDYzIDYuMjNjMS41MiAzLjA1OCAzLjM2IDUuNzE0IDUuNDc0IDcuOTA2IDIuNTY5IDIuNjU4IDUuNTQgNC42MTcgOC44NjIgNS44NDggMy4zMTItMS4yMjggNi4yODQtMy4xOTQgOC44NjEtNS44NnptNi4zMzQtNy40NjljLTEuNTcgMy4xNTctMy40NyA1LjkwNi01LjY0OCA4LjE2NS0yLjcyIDIuODE1LTUuODcxIDQuODgzLTkuMzg3IDYuMTU2bC0uMTYuMDU4LS4xNi0uMDU4Yy0zLjUyNi0xLjI3Ny02LjY3NS0zLjMzNy05LjM4OC02LjE0NC0yLjE4NS0yLjI2Ni00LjA4My01LjAwNi01LjY0OC04LjE1MWE0MS4wMjYgNDEuMDI2IDAgMCAxLTIuNTI1LTYuMzg4IDM0LjU4NiAzNC41ODYgMCAwIDEtLjg5Ny0zLjU4bC0uMDUzLS4yODUuMjE3LS4xODdjMy4zMjUtMi44NTcgNy4yNTctNS4yODggMTEuNDg1LTcuMzE0YTY0IDY0IDAgMCAxIDQuNDY1LTEuOTM2Yy45Ni0uMzczIDEuNzUtLjY1MyAyLjM1OC0uODVsLjE0Ni0uMDQ4LjE0Ny4wNDhjLjYzLjIwNyAxLjM5Ny40OCAyLjM1MS44NSAxLjQyLjU1MiAyLjkyIDEuMTk2IDQuNDY2IDEuOTM2IDQuMjMyIDIuMDI3IDguMTY1IDQuNDU4IDExLjQ5IDcuMzE0bC4yMTcuMTg4LS4wNTQuMjg2YTM0Ljk3IDM0Ljk3IDAgMCAxLS45MDEgMy41NjYgNDEuNTE1IDQxLjUxNSAwIDAgMS0yLjUyIDYuMzc0eiIgZmlsbD0idXJsKCNlKSIvPgoJCQk8L2c+CgkJPC9nPgoJPC9zdmc+"

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  padding: 50px 8.5%;\n  background-image: radial-gradient(circle at 51% 42%, #201f2f, #100e18);\n  text-align: center;\n  z-index: 1;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  &.landing-footer {\n    margin-top: -15vh;\n    padding-top: calc(15vh + 50px);\n  }\n'], ['\n  width: 100%;\n  height: auto;\n  padding: 50px 8.5%;\n  background-image: radial-gradient(circle at 51% 42%, #201f2f, #100e18);\n  text-align: center;\n  z-index: 1;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  &.landing-footer {\n    margin-top: -15vh;\n    padding-top: calc(15vh + 50px);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  max-width: 100%;\n'], ['\n  max-width: 100%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _footer = __webpack_require__(41);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents2.default.div(_templateObject);

var FooterImg = _styledComponents2.default.img(_templateObject2);

var Footer = function Footer(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      Box,
      { className: props.path == '/' ? 'landing-footer' : '' },
      _react2.default.createElement(FooterImg, { src: _footer2.default, alt: 'Powered by Aragon' })
    )
  );
};

exports.default = Footer;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/28e89f57-footer.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 98vh;\n  ', ';\n  ', ';\n  margin: 0;\n  padding: 50px 8.5%;\n  background-color: #18181A;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  margin-top: -64px;\n  h2 {\n    font-size: 18px;\n    ', ';\n    ', ';\n    font-weight: 300;\n    line-height: 1.63;\n    letter-spacing: 5.6px;\n    color: #ffffff;\n  }\n  h2.sides {\n    ', ';\n    ', ';\n    position: inherit;\n    top: 396px;\n    letter-spacing: 1.6px;\n    opacity: 0.4;\n    margin-bottom: 0;\n  }\n  h2.right {\n    right: -4%;\n    ', ';\n    ', ';\n    transform: rotate(0deg);\n    margin-top: 31%;\n  }\n  h2.left {\n    left: -4%;\n    ', ';\n    ', ';\n    transform: rotate(0deg);\n  }\n'], ['\n  width: 100%;\n  height: 98vh;\n  ', ';\n  ', ';\n  margin: 0;\n  padding: 50px 8.5%;\n  background-color: #18181A;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  margin-top: -64px;\n  h2 {\n    font-size: 18px;\n    ', ';\n    ', ';\n    font-weight: 300;\n    line-height: 1.63;\n    letter-spacing: 5.6px;\n    color: #ffffff;\n  }\n  h2.sides {\n    ', ';\n    ', ';\n    position: inherit;\n    top: 396px;\n    letter-spacing: 1.6px;\n    opacity: 0.4;\n    margin-bottom: 0;\n  }\n  h2.right {\n    right: -4%;\n    ', ';\n    ', ';\n    transform: rotate(0deg);\n    margin-top: 31%;\n  }\n  h2.left {\n    left: -4%;\n    ', ';\n    ', ';\n    transform: rotate(0deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-right: solid 100vw transparent;\n  border-bottom: 15vh solid white;\n  margin-bottom: -1px;\n  background-color: transparent;\n  z-index: 1;\n  position: absolute;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n'], ['\n  border-right: solid 100vw transparent;\n  border-bottom: 15vh solid white;\n  margin-bottom: -1px;\n  background-color: transparent;\n  z-index: 1;\n  position: absolute;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: 92px;\n  ', ';\n  ', ';\n  max-width: 100%;\n'], ['\n  margin-top: 92px;\n  ', ';\n  ', ';\n  max-width: 100%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _heroBackground = __webpack_require__(43);

var _heroBackground2 = _interopRequireDefault(_heroBackground);

var _logo = __webpack_require__(44);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var HeroBox = _styledComponents2.default.div(_templateObject, medium('min-height: 815px; height: calc(100vh + 64px + 60px);'), large('min-height: 815px; height: calc(100vh + 64px + 60px);'), _heroBackground2.default, medium('font-size: 24px;'), large('font-size: 24px;'), medium('position: absolute; margin: inherit;'), large('position: absolute; margin: inherit;'), medium('transform: rotate(90deg); margin-top: inherit;'), large('transform: rotate(90deg); margin-top: inherit;'), medium('transform: rotate(-90deg);'), large('transform: rotate(-90deg);'));

var HeroTriangle = _styledComponents2.default.div(_templateObject2);

var Logo = _styledComponents2.default.img(_templateObject3, medium('margin-top: 254px;'), large('margin-top: 254px;'));

var Hero = function Hero() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      HeroBox,
      null,
      _react2.default.createElement(Logo, { src: _logo2.default, alt: 'Aracon' }),
      _react2.default.createElement(
        'h2',
        null,
        'BUILDING ORGANISATIONS & GOVERNANCE OF THE FUTURE'
      ),
      _react2.default.createElement(
        'h2',
        { className: 'sides right' },
        'Berlin, Germany'
      ),
      _react2.default.createElement(
        'h2',
        { className: 'sides left' },
        'Jan 8-10.2019'
      ),
      _react2.default.createElement(HeroTriangle, null)
    )
  );
};

exports.default = Hero;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0e99b441-hero-background.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3b2943af-logo.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 12px;\n  p {\n    text-transform: uppercase;\n    color: #4BC5E8;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 25px;\n  }\n  h6 {\n    text-transform: uppercase;\n    color: #45494D; \n    font-size: 14px;  \n    font-weight: 600; \n    line-height: 22px;\n  }\n'], ['\n  margin-top: 12px;\n  p {\n    text-transform: uppercase;\n    color: #4BC5E8;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 25px;\n  }\n  h6 {\n    text-transform: uppercase;\n    color: #45494D; \n    font-size: 14px;  \n    font-weight: 600; \n    line-height: 22px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  overflow: hidden;\n'], ['\n  width: 100%;\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-bottom: 40px;\n  border-radius: 6px; \n  background: linear-gradient(184.81deg, #F5F6FB 0%, #FFFFFF 100%); \n  box-shadow: 8px 16px 16px 0 rgba(0,0,0,0.13);\n'], ['\n  margin-bottom: 40px;\n  border-radius: 6px; \n  background: linear-gradient(184.81deg, #F5F6FB 0%, #FFFFFF 100%); \n  box-shadow: 8px 16px 16px 0 rgba(0,0,0,0.13);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextBox = _styledComponents2.default.div(_templateObject);

var Photo = _styledComponents2.default.img(_templateObject2);

var SpeakerBox = _styledComponents2.default.div(_templateObject3);

var Speaker = function (_React$Component) {
  _inherits(Speaker, _React$Component);

  function Speaker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Speaker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Speaker.__proto__ || Object.getPrototypeOf(Speaker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      picture: _this.props.photo + '.png'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Speaker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          position = _props.position,
          company = _props.company,
          photo = _props.photo;
      var picture = this.state.picture;

      return _react2.default.createElement(
        SpeakerBox,
        null,
        _react2.default.createElement(
          _ui.Card,
          { onMouseEnter: function onMouseEnter() {
              return _this2.setState({ picture: photo + '-hover.png' });
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.setState({ picture: photo + '.png' });
            } },
          _react2.default.createElement(Photo, { src: __webpack_require__(46)("./" + picture) }),
          _react2.default.createElement(
            TextBox,
            null,
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'p',
                null,
                name
              )
            ),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'h6',
                null,
                position,
                ', ',
                company
              )
            )
          )
        )
      );
    }
  }]);

  return Speaker;
}(_react2.default.Component);

Speaker.propTypes = {
  name: _propTypes2.default.string,
  position: _propTypes2.default.string,
  company: _propTypes2.default.string
};

Speaker.defaultProps = {
  name: 'Name',
  position: 'Position',
  company: 'Company'
};

exports.default = Speaker;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./speaker1-hover.png": 47,
	"./speaker1.png": 48
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8f7d8ffa-speaker1-hover.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cde23013-speaker1.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0 0 -6px 0;;\n  background: white;\n  text-align: center;\n  .h1box {\n    margin: 0 8.5%;\n    padding: 50px 0 0 0;\n  }\n  img {\n    width: 100%;\n  }\n'], ['\n  width: 100%;\n  margin: 0 0 -6px 0;;\n  background: white;\n  text-align: center;\n  .h1box {\n    margin: 0 8.5%;\n    padding: 50px 0 0 0;\n  }\n  img {\n    width: 100%;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _venue = __webpack_require__(50);

var _venue2 = _interopRequireDefault(_venue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VenueBox = _styledComponents2.default.div(_templateObject);

var Venue = function Venue() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      VenueBox,
      null,
      _react2.default.createElement(
        'div',
        { className: 'h1box' },
        _react2.default.createElement(
          'h1',
          null,
          'Venue'
        )
      ),
      _react2.default.createElement('img', { src: _venue2.default, alt: '' })
    )
  );
};

exports.default = Venue;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1b14864e-venue.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #1d1d2a;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  .text {\n    width: 100%;\n    padding-right: 0;\n    ', ';\n    ', ';\n  }\n  .map {\n    width: 100%;\n    max-width: 717px;\n    ', ';\n    ', ';\n  }\n  p, h2 {\n    color: white;\n    text-align: left;\n    margin-bottom: 20px;\n    &.strong {\n      font-weight: 700;\n    }\n    img {\n      padding-right: 15px;\n    }\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #1d1d2a;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  .text {\n    width: 100%;\n    padding-right: 0;\n    ', ';\n    ', ';\n  }\n  .map {\n    width: 100%;\n    max-width: 717px;\n    ', ';\n    ', ';\n  }\n  p, h2 {\n    color: white;\n    text-align: left;\n    margin-bottom: 20px;\n    &.strong {\n      font-weight: 700;\n    }\n    img {\n      padding-right: 15px;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _MapContainer = __webpack_require__(52);

var _MapContainer2 = _interopRequireDefault(_MapContainer);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _plane = __webpack_require__(55);

var _plane2 = _interopRequireDefault(_plane);

var _bus = __webpack_require__(56);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var MapBox = _styledComponents2.default.div(_templateObject, medium('flex-direction: row;'), medium('width: 50%; padding-right: 40px;'), large('width: 40%; padding-right: 40px;'), medium('width: 50%;'), large('width: 60%;'));

var Map = function Map() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      MapBox,
      null,
      _react2.default.createElement(
        'div',
        { className: 'text' },
        _react2.default.createElement(
          'h2',
          null,
          'BOLLE Festsale'
        ),
        _react2.default.createElement(
          'p',
          { className: 'strong' },
          'Alt-Moabit 98, 10559 Berlin, Germany'
        ),
        _react2.default.createElement(
          'p',
          null,
          'It is located in the Spree-Bogen area in the heart of Berlin. It is easily accessible (by public transport or car) from central Berlin or Tegel airport.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'strong' },
          _react2.default.createElement('img', { src: _bus2.default }),
          'Public transport'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The closest metro stations are only few minutes walk away from the venue:',
          _react2.default.createElement('br', null),
          'U-Bahn (U9) - Turmstrasse (300m)',
          _react2.default.createElement('br', null),
          'S-Bahn (S3 / S7 / S9) - Bellevue (600m)'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Berlin Central Train Station (Hauptbanhof) is only one stop away via S-Bahn (10min) or six stops with bus 245 (5min).'
        ),
        _react2.default.createElement(
          'p',
          { className: 'strong' },
          _react2.default.createElement('img', { src: _plane2.default }),
          'From the airport'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Tegel Airport is 20min away by TXL direct bus.'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'map' },
        _react2.default.createElement(_MapContainer2.default, {
          isMarkerShown: true,
          googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB_3Zo-VU8tXwUOgPJCQkGqgY7-eWQXzic&v=3.exp&libraries=geometry,drawing,places',
          loadingElement: _react2.default.createElement('div', { style: { height: '100%' } }),
          containerElement: _react2.default.createElement('div', { style: { height: '581px', width: '100%' } }),
          mapElement: _react2.default.createElement('div', { style: { height: '100%' } })
        })
      )
    )
  );
};

exports.default = Map;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(53);

var _locate = __webpack_require__(54);

var _locate2 = _interopRequireDefault(_locate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapStyles = [{
  "featureType": "all",
  "elementType": "geometry",
  "stylers": [{ "color": "#363745" }]
}, {
  "featureType": "all",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#746855" }]
}, {
  "featureType": "all",
  "elementType": "labels.text.stroke",
  "stylers": [{ "color": "#363745" }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [{ "color": "#363745" }]
}, {
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#d59563" }, { "visibility": "off" }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "geometry.stroke",
  "stylers": [{ "color": "#808000" }, { "saturation": 100 }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "labels.text.fill",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "poi",
  "elementType": "all",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "poi",
  "elementType": "labels.text",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#d59563" }, { "visibility": "off" }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{ "color": "#263c3f" }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#6b9a76" }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{ "color": "#555460" }]
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": [{ "color": "#555460" }]
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#9ca5b3" }]
}, {
  "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{ "color": "#746855" }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{ "color": "#1f2835" }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#f3d19c" }]
}, {
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [{ "color": "#2f3948" }, { "visibility": "off" }]
}, {
  "featureType": "transit.station",
  "elementType": "all",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "transit.station",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#d59563" }, { "visibility": "off" }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{ "color": "#26232e" }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#515c6d" }]
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [{ "color": "#17263c" }]
}];

var MapContainer = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    {
      defaultZoom: 15,
      defaultCenter: { lat: 52.5248058, lng: 13.3459398 },
      options: { styles: MapStyles }
    },
    _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: 52.5248058, lng: 13.3459398 }, icon: _locate2.default })
  );
}));

exports.default = MapContainer;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgMzYgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iLTE3Ljg3MTA5MzglIiB5MT0iMTAwJSIgeDI9IjEyMi4wMTYwNTklIiB5Mj0iMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk5MS4wMDAwMDAsIC0zMjU5LjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkxLjAwMDAwMCwgMzI1OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJwbGFjZWhvbGRlciI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDAgQzguMDc0OCwwIDAsOC4yMDA5Njg3NSAwLDE4LjI4MTI1IEMwLDIxLjY4NzA0NjkgMC45Mjg5LDI1LjAxMDc4MTIgMi42ODY5LDI3Ljg5NDM0MzcgTDE2Ljk3NTQsNTEuMjc5ODIwMyBDMTcuMjQ5MSw1MS43Mjc4MTI1IDE3LjczMTMsNTIgMTguMjQ5OSw1MiBDMTguMjUzOSw1MiAxOC4yNTc4LDUyIDE4LjI2MTgsNTIgQzE4Ljc4NDksNTEuOTk1ODM1OSAxOS4yNjgxLDUxLjcxNTIxODcgMTkuNTM2OCw1MS4yNTk0MDYyIEwzMy40NjExLDI3LjY0NzM0MzcgQzM1LjEyMjEsMjQuODI0NzE4NyAzNiwyMS41ODU5OTIyIDM2LDE4LjI4MTI1IEMzNiw4LjIwMDk2ODc1IDI3LjkyNTIsMCAxOCwwIFogTTMwLjg4NjYsMjYuMDgzMDc4MSBMMTguMjI3Miw0Ny41NTAxNDA2IEw1LjIzNjcsMjYuMjg5MDQ2OSBDMy43NzM0LDIzLjg4ODkyMTkgMi45OCwyMS4xMTk5MjE5IDIuOTgsMTguMjgxMjUgQzIuOTgsOS44ODEwMTU2MiA5LjcyOSwzLjAyNjU2MjUgMTgsMy4wMjY1NjI1IEMyNi4yNzEsMy4wMjY1NjI1IDMzLjAxLDkuODgxMDE1NjIgMzMuMDEsMTguMjgxMjUgQzMzLjAxLDIxLjAzNTcyNjYgMzIuMjY4OSwyMy43MzM5Mzc1IDMwLjg4NjYsMjYuMDgzMDc4MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDkuMTQwNjI1IEMxMy4wMzc0LDkuMTQwNjI1IDksMTMuMjQxMTA5NCA5LDE4LjI4MTI1IEM5LDIzLjI4OTE5NTMgMTIuOTcxNywyNy40MjE4NzUgMTgsMjcuNDIxODc1IEMyMy4wOTAzLDI3LjQyMTg3NSAyNywyMy4yMzQxNDg0IDI3LDE4LjI4MTI1IEMyNywxMy4yNDExMDk0IDIyLjk2MjYsOS4xNDA2MjUgMTgsOS4xNDA2MjUgWiBNMTgsMjQuMzk1MzEyNSBDMTQuNjc0MywyNC4zOTUzMTI1IDExLjk4LDIxLjY0OTc3MzQgMTEuOTgsMTguMjgxMjUgQzExLjk4LDE0LjkyMTE1NjIgMTQuNjkxNiwxMi4xNjcxODc1IDE4LDEyLjE2NzE4NzUgQzIxLjMwODQsMTIuMTY3MTg3NSAyNC4wMSwxNC45MjExNTYyIDI0LjAxLDE4LjI4MTI1IEMyNC4wMSwyMS42MDA2MTcyIDIxLjM3ODQsMjQuMzk1MzEyNSAxOCwyNC4zOTUzMTI1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIzNC40NTU5ODcxJSIgeDI9IjEwMCUiIHkyPSI2OS45NzU3NjQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2QUFDRjQiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4RUJENiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBUkFDT04iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MC4wMDAwMDAsIC0zMzQwLjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAuMDAwMDAwLCAzMDU1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjg1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJkZXBhcnR1cmVzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LjcyODA3NDEsMi4wOTkzMjQxOCBDMzIuMjUzNDA3NCwwLjY1NTA0NjcwMyAyOS40NDE1NTU2LDEuNDIyMjQ3MjUgMjcuNTE4ODE0OCwyLjMyMDA3MTQzIEwyMS43ODcxMTExLDQuOTk2NDgzNTIgTDExLjkyOTMzMzMsMC4wMzE1OTg5MDExIEw2LjA1ODc0MDc0LDAuMjg0MTY3NTgyIEwxNC4xOTg5NjMsOC41NDc5NDc4IEw5LjAxMTE4NTE5LDExLjAxNTcwMzMgTDMuNjEzNzc3NzgsOC45NTg3MzM1MiBMMCwxMC42NDYwODUyIEwzLjI2NTg1MTg1LDE0LjcwNzEzNzQgQzIuOTIwODE0ODEsMTUuMTE5MzMyNCAyLjYwODE0ODE1LDE1LjY5OTY4NDEgMi44OTIsMTYuMzA5MjYxIEMzLjI2Mjc0MDc0LDE3LjEwNTMxNTkgNC4zNTg1MTg1MiwxNy41MDY1MzMgNi4xNTU5MjU5MywxNy41MDY0NTg4IEM2LjUyNDUxODUyLDE3LjUwNjQ1ODggNi45MjI2NjY2NywxNy40ODk2MjA5IDcuMzUsMTcuNDU1Nzk2NyBDOS4zMjMwMzcwNCwxNy4yOTk3MzA4IDExLjQ2MjE0ODEsMTYuNzk1NDA5MyAxMi43OTk3MDM3LDE2LjE3MDg0ODkgTDMzLjI4ODI5NjMsNi42MDM3MjUyNyBDMzUuMDU3OTI1OSw1Ljc3NzMzMjQyIDM1LjkzOTQwNzQsNC45MDk2MjM2MyAzNS45ODMxMTExLDMuOTUwODI2OTIgQzM2LjAwNTc3NzgsMy40NTM1NTIyIDM1LjgwNjQ0NDQsMi43Mjg0ODM1MiAzNC43MjgwNzQxLDIuMDk5MzI0MTggWiBNMzIuNjYyMDc0MSw1LjI1OTE0MDExIEwxMi4xNzM1NTU2LDE0LjgyNjMzNzkgQzExLjAzNCwxNS4zNTg0NzUzIDkuMTYzMTExMTEsMTUuODA0MzQ2MiA3LjQwNzI1OTI2LDE1Ljk2MjE5MjMgQzUuNjEyNTkyNTksMTYuMTIzNTI0NyA0LjY1MzAzNzA0LDE1LjkyMDk1MDUgNC4zMzMxODUxOSwxNS43NDg5MzY4IEM0LjM5OTAzNzA0LDE1LjY1ODY2NDggNC41MjIsMTUuNTE2ODQwNyA0Ljc0ODg4ODg5LDE1LjMxNjg2MjYgTDUuMjgxMDM3MDQsMTQuODQ3ODQ4OSBMMi4zMzk3MDM3LDExLjE5MDM4NzQgTDMuNjcyLDEwLjU2ODIwMDUgTDkuMDc1MTg1MTksMTIuNjI3NTQ0IEwxNi43MTczMzMzLDguOTkyMjYwOTkgTDkuNDU4MDc0MDcsMS42MjI3NDQ1MSBMMTEuNjA3Nzc3OCwxLjUzMDI0NzI1IEwyMS43NjI1MTg1LDYuNjQ0NTk2MTUgTDI4LjE0NDc0MDcsMy42NjQ1MDgyNCBDMzAuNDc1NjI5NiwyLjU3NjEyNjM3IDMyLjQzOTQ4MTUsMi40ODA4ODQ2MiAzMy45ODIsMy4zODA5MzQwNyBMMzMuOTgyMDc0MSwzLjM4MTAwODI0IEMzNC4zNzA3NDA3LDMuNjA3NzYzNzQgMzQuNTA2NTkyNiwzLjgwNTU5MDY2IDM0LjUwMzAzNywzLjg4MzE3ODU3IEMzNC41MDI4ODg5LDMuODg4NTE5MjMgMzQuNDU4MzcwNCw0LjQyMDUwODI0IDMyLjY2MjA3NDEsNS4yNTkxNDAxMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzQgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5idXM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTEzLjU3OTk2MyUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkxLjAwMDAwMCwgLTM0NzUuMDAwMDAwKSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MC4wMDAwMDAsIDMwNTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYnVzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgNDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNCw4LjQxNjA1OTc2IEMzNCwzLjc3NTQ1ODkyIDMwLjI4MTAzNzUsMCAyNS43MDk4NzkyLDAgTDQuOTY3MjU4MzMsMCBDMi4yMjgyNzUsMS4wMjE4OTM5NWUtMTUgMCwyLjI2MjE5NzYzIDAsNS4wNDI3OTAwOCBMMCwxNS40MTk1MzE0IEwzLjgxMTU0MTY3LDE1LjQxOTUzMTQgQzQuMTM1ODE2NjcsMTYuODk0MTA1NCA1LjQzNDE5MTY3LDE4IDYuOTgzMDMzMzMsMTggQzguNTMxODc1LDE4IDkuODMwMzIwODMsMTYuODk0MTA1NCAxMC4xNTQ1OTU4LDE1LjQxOTUzMTQgTDI0LjAzNjAxNjcsMTUuNDE5NTMxNCBDMjQuMzYwMjkxNywxNi44OTQxMDU0IDI1LjY1ODY2NjcsMTggMjcuMjA3NTA4MywxOCBDMjguNzU2MzUsMTggMzAuMDU0NzI1LDE2Ljg5NDEwNTQgMzAuMzc5LDE1LjQxOTUzMTQgTDM0LDE1LjQxOTUzMTQgTDM0LDguNDE2MDU5NzYgWiBNMzIuMjg5OCw2LjM5Nzc3ODggTDI4LjU2OTQyMDgsNi4zOTc3Nzg4IEwyOC41Njk0MjA4LDIuMDcxNDIyMDEgQzMwLjM0NTU2NjcsMi44OTk2NzQ0MSAzMS43MTYyNjI1LDQuNDc0NDkwMTQgMzIuMjg5OCw2LjM5Nzc3ODggWiBNMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IEwyNy4xNTI3NTQyLDYuMzk3NzA2ODkgTDIzLjEzODkxMjUsNi4zOTc3MDY4OSBMMjMuMTM4OTEyNSwxLjQzODExNTk3IEwyNS43MDk4NzkyLDEuNDM4MTE1OTcgQzI2LjIwNDcyMDgsMS40MzgxODc4OCAyNi42ODczMDgzLDEuNDkxOTc2MTEgMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IFogTTYuODQ3MjQ1ODMsNi4zOTc3Nzg4IEw2Ljg0NzI0NTgzLDEuNDM4MTg3ODggTDEwLjg2MTE1ODMsMS40MzgxODc4OCBMMTAuODYxMTU4Myw2LjM5Nzc3ODggTDYuODQ3MjQ1ODMsNi4zOTc3Nzg4IFogTTEyLjI3Nzc1NDIsMS40MzgxODc4OCBMMTYuMjkxNjY2NywxLjQzODE4Nzg4IEwxNi4yOTE2NjY3LDYuMzk3Nzc4OCBMMTIuMjc3NzU0Miw2LjM5Nzc3ODggTDEyLjI3Nzc1NDIsMS40MzgxODc4OCBaIE0xNy43MDgzMzMzLDEuNDM4MTg3ODggTDIxLjcyMjI0NTgsMS40MzgxODc4OCBMMjEuNzIyMjQ1OCw2LjM5Nzc3ODggTDE3LjcwODMzMzMsNi4zOTc3Nzg4IEwxNy43MDgzMzMzLDEuNDM4MTg3ODggWiBNNC45NjcyNTgzMywxLjQzODE4Nzg4IEw1LjQzMDUwODMzLDEuNDM4MTg3ODggTDUuNDMwNTA4MzMsNi4zOTc3Nzg4IEwxLjQxNjY2NjY3LDYuMzk3Nzc4OCBMMS40MTY2NjY2Nyw1LjA0Mjc5MDA4IEMxLjQxNjY2NjY3LDMuMDU1MjE0NDMgMy4wMDk0OTU4MywxLjQzODE4Nzg4IDQuOTY3MjU4MzMsMS40MzgxODc4OCBaIE02Ljk4MzAzMzMzLDE2LjU2MTc0MDIgQzUuOTcyMDI5MTcsMTYuNTYxNzQwMiA1LjE0OTUxMjUsMTUuNzI2NzI4MyA1LjE0OTUxMjUsMTQuNzAwMzY1NSBDNS4xNDk1MTI1LDEzLjY3NDAwMjggNS45NzIwMjkxNywxMi44Mzg5MTkgNi45ODMwMzMzMywxMi44Mzg5MTkgQzcuOTk0MDM3NSwxMi44Mzg5MTkgOC44MTY1NTQxNywxMy42NzM5MzA4IDguODE2NTU0MTcsMTQuNzAwMzY1NSBDOC44MTY2MjUsMTUuNzI2NzI4MyA3Ljk5NDAzNzUsMTYuNTYxNzQwMiA2Ljk4MzAzMzMzLDE2LjU2MTc0MDIgWiBNNi45ODMwMzMzMywxMS40MDA4MDMgQzUuNDM0MTkxNjcsMTEuNDAwODAzIDQuMTM1NzQ1ODMsMTIuNTA2Njk3NiAzLjgxMTU0MTY3LDEzLjk4MTM0MzUgTDEuNDE2NjY2NjcsMTMuOTgxMzQzNSBMMS40MTY2NjY2Nyw3LjgzNTk2NjY4IEwyMS43MjIyNDU4LDcuODM1OTY2NjggTDIxLjcyMjI0NTgsMTMuOTgxMzQzNSBMMTAuMTU0NTk1OCwxMy45ODEzNDM1IEM5LjgzMDMyMDgzLDEyLjUwNjY5NzYgOC41MzE5NDU4MywxMS40MDA4MDMgNi45ODMwMzMzMywxMS40MDA4MDMgWiBNMjcuMjA3NTA4MywxNi41NjE3NDAyIEMyNi4xOTY1NzUsMTYuNTYxNzQwMiAyNS4zNzM5ODc1LDE1LjcyNjcyODMgMjUuMzczOTg3NSwxNC43MDAzNjU1IEMyNS4zNzM5ODc1LDEzLjY3NDAwMjggMjYuMTk2NTA0MiwxMi44Mzg5MTkgMjcuMjA3NTA4MywxMi44Mzg5MTkgQzI4LjIxODUxMjUsMTIuODM4OTE5IDI5LjA0MTAyOTIsMTMuNjczOTMwOCAyOS4wNDEwMjkyLDE0LjcwMDM2NTUgQzI5LjA0MTAyOTIsMTUuNzI2NzI4MyAyOC4yMTg1MTI1LDE2LjU2MTc0MDIgMjcuMjA3NTA4MywxNi41NjE3NDAyIFogTTMwLjM3OTA3MDgsMTMuOTgxMjcxNiBDMzAuMDU0Nzk1OCwxMi41MDY2MjU3IDI4Ljc1NjQyMDgsMTEuNDAwNzMxMSAyNy4yMDc1NzkyLDExLjQwMDczMTEgQzI1LjY1ODczNzUsMTEuNDAwNzMxMSAyNC4zNjAyOTE3LDEyLjUwNjYyNTcgMjQuMDM2MDg3NSwxMy45ODEyNzE2IEwyMy4xMzg5ODMzLDEzLjk4MTI3MTYgTDIzLjEzODk4MzMsNy44MzU4OTQ3NyBMMzIuNTU5NDYyNSw3LjgzNTg5NDc3IEMzMi41NzUwNDU4LDguMDI3MjQ1NjcgMzIuNTgzNDA0Miw4LjIyMDY4MTk0IDMyLjU4MzQwNDIsOC40MTU5ODc4NiBMMzIuNTgzNDA0Miw5LjgzMzYwOTY1IEwzMC41NjMzMDgzLDkuODMzNjA5NjUgTDMwLjU2MzMwODMsMTEuMjcxNzk3NSBMMzIuNTgzMzMzMywxMS4yNzE3OTc1IEwzMi41ODM0MDQyLDEzLjk4MTI3MTYgTDMwLjM3OTA3MDgsMTMuOTgxMjcxNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Schedule = __webpack_require__(16);

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Entry = __webpack_require__(8);

var _Entry2 = _interopRequireDefault(_Entry);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var ScheduleBox = _styledComponents2.default.div(_templateObject, medium('padding: 50px 8.5%;'));

var DayOne = function DayOne() {
  return _react2.default.createElement(
    ScheduleBox,
    null,
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'i',
        null,
        '*All panels and talks will be happening on the main stage (\u201CKapelle\u201D hall)'
      )
    ),
    _react2.default.createElement(
      _Schedule2.default,
      null,
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Lorem ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Lorem ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Lorem ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Lorem ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' })
    )
  );
};

exports.default = DayOne;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Schedule = __webpack_require__(16);

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Entry = __webpack_require__(8);

var _Entry2 = _interopRequireDefault(_Entry);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var ScheduleBox = _styledComponents2.default.div(_templateObject, medium('padding: 50px 8.5%;'));

var DayTwo = function DayTwo() {
  return _react2.default.createElement(
    ScheduleBox,
    null,
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'i',
        null,
        '*All panels and talks will be happening on the main stage (\u201CKapelle\u201D hall)'
      )
    ),
    _react2.default.createElement(
      _Schedule2.default,
      null,
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Two ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Two ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Two ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Two ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' })
    )
  );
};

exports.default = DayTwo;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Question = function Question(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var content = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _ui.Text,
      { size: 'xlarge' },
      _react2.default.createElement(
        'h2',
        null,
        props.question
      )
    ),
    _react2.default.createElement(
      _ui.Text,
      null,
      props.answer
    )
  );
  return content;
};

exports.default = Question;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/c0c7ecca-accomodation.png";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.28c048ec.js.map