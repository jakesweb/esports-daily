webpackHotUpdate("static\\development\\pages\\submit.js",{

/***/ "./components/Submit.js":
/*!******************************!*\
  !*** ./components/Submit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");

var _jsxFileName = "C:\\Users\\jacob\\OneDrive\\code\\esports-daily\\frontend\\components\\Submit.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation ARTICLE_MUTATION(\n    $title: String!\n    $description: String\n    $body: String!\n    $tags: [Tags]\n  ) {\n    createPost(\n      title: $title\n      description: $description\n      body: $body\n      tags: $tags\n    ) {\n      id\n      title\n      createdAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ARTICLE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var FormStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "Submit__FormStyle",
  componentId: "sc-149xhhl-0"
})(["label{font-size:1.2em;font-weight:600;font-style:italic;color:#010101;display:block;}input[type=\"text\"],textarea{width:50em;}#tags{margin:0 auto;margin-bottom:2em;display:block;}input[type=\"checkbox\"]{margin:0 auto;}input[type=\"text\"],textarea{border:5px yellow solid;border-radius:10px;}button{font-size:1.5em;font-weight:600;font-style:italic;background:yellow;border:2px black solid;border-radius:10px;}"]);
var BodyDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Submit__BodyDiv",
  componentId: "sc-149xhhl-1"
})(["text-align:center;"]);

var Submit = function Submit() {
  return __jsx(BodyDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Submit an article"), __jsx(FormStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("label", {
    "for": "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "TITLE"), __jsx("input", {
    type: "text",
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("label", {
    "for": "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "DESCRIPTION"), __jsx("input", {
    type: "text",
    id: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("label", {
    "for": "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "BODY (MARKDOWN SUPPORTED)"), __jsx("textarea", {
    rows: "30",
    cols: "50",
    id: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("label", {
    "for": "publish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "PUBLISH"), __jsx("input", {
    type: "checkbox",
    id: "publish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("label", {
    "for": "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "TAGS"), __jsx("input", {
    type: "text",
    id: "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    id: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Submit);

/***/ })

})
//# sourceMappingURL=submit.js.0b3c838ccdd7a936984b.hot-update.js.map