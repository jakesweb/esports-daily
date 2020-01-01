module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Submit.js":
/*!******************************!*\
  !*** ./components/Submit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\jacob\\OneDrive\\code\\esports-daily\\frontend\\components\\Submit.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FormStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "Submit__FormStyle",
  componentId: "sc-149xhhl-0"
})(["label{font-size:1.2em;font-weight:600;font-style:italic;color:#010101;display:block;}input[type=\"text\"],textarea{width:50em;}#tags{margin:0 auto;margin-bottom:2em;display:block;}input[type=\"checkbox\"]{margin:0 auto;}button{font-size:1.5em;font-weight:600;font-style:italic;}"]);
const BodyDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Submit__BodyDiv",
  componentId: "sc-149xhhl-1"
})(["text-align:center;"]);

const Submit = () => __jsx(BodyDiv, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "Submit an article"), __jsx(FormStyle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("label", {
  for: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "TITLE"), __jsx("input", {
  type: "text",
  id: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), __jsx("label", {
  for: "description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "DESCRIPTION"), __jsx("input", {
  type: "text",
  id: "description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), __jsx("label", {
  for: "body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "BODY (MARKDOWN SUPPORTED)"), __jsx("textarea", {
  rows: "30",
  cols: "50",
  id: "body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}), __jsx("label", {
  for: "publish",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "PUBLISH"), __jsx("input", {
  type: "checkbox",
  id: "publish",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx("label", {
  for: "tags",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "TAGS"), __jsx("input", {
  type: "text",
  id: "tags",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}), __jsx("button", {
  type: "submit",
  id: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Submit")));

/* harmony default export */ __webpack_exports__["default"] = (Submit);

/***/ }),

/***/ "./pages/submit.js":
/*!*************************!*\
  !*** ./pages/submit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return submit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Submit */ "./components/Submit.js");
var _jsxFileName = "C:\\Users\\jacob\\OneDrive\\code\\esports-daily\\frontend\\pages\\submit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class submit extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Submit__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/submit.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jacob\OneDrive\code\esports-daily\frontend\pages\submit.js */"./pages/submit.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=submit.js.map