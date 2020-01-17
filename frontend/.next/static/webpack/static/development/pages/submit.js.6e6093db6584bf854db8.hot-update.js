webpackHotUpdate("static\\development\\pages\\submit.js",{

/***/ "./pages/submit.js":
/*!*************************!*\
  !*** ./pages/submit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Submit */ "./components/Submit.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
/* harmony import */ var _components_Signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Signin */ "./components/Signin.js");
var _jsxFileName = "C:\\Users\\jacob\\OneDrive\\code\\esports-daily\\frontend\\pages\\submit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var submit = function submit() {
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _components_User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data;
    var me = data ? data.me : null;
    {
      me && __jsx(_components_Submit__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    }
    {
      !me && __jsx(_components_Signin__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ })

})
//# sourceMappingURL=submit.js.6e6093db6584bf854db8.hot-update.js.map