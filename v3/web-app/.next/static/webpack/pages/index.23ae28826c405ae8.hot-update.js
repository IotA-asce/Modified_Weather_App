"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    var _this = this;\n    var handleClick = function handleClick() {\n        setLikes(likes + 1);\n    };\n    _s();\n    var names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likes = ref[0], setLikes = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map(function(name) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Lie (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(HomePage, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE0Qzs7QUFDNUMsU0FBU0UsTUFBTSxDQUFDLEtBQVMsRUFBRTtRQUFYLEtBQU8sR0FBUCxLQUFTLENBQVBDLEtBQUs7SUFDckIscUJBQU8sOERBQUNDLElBQUU7a0JBQUVELEtBQUssR0FBR0EsS0FBSyxHQUFHLGVBQWU7Ozs7O1lBQU0sQ0FBQztDQUNuRDtBQUZRRCxLQUFBQSxNQUFNO0FBSUEsU0FBU0csUUFBUSxHQUFHOztRQVN4QkMsV0FBVyxHQUFwQixTQUFTQSxXQUFXLEdBQUc7UUFDckJDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3JCOztJQVZELElBQU1DLEtBQUssR0FBRztRQUFDLGNBQWM7UUFBRSxjQUFjO1FBQUUsbUJBQW1CO0tBQUM7SUFFbkUsSUFBMEJSLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJPLEtBQUssR0FBY1AsR0FBVyxHQUF6QixFQUFFTSxRQUFRLEdBQUlOLEdBQVcsR0FBZjtJQUV0QkQsZ0RBQVMsQ0FBQyxXQUFNLEVBRWYsQ0FBQztJQU1GLHFCQUNFLDhEQUFDVSxLQUFHOzswQkFDRiw4REFBQ1IsTUFBTTtnQkFBQ0MsS0FBSyxFQUFDLHNDQUEyQjs7Ozs7b0JBQUc7MEJBQzVDLDhEQUFDUSxJQUFFOzBCQUNBRixLQUFLLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3lDQUNkLDhEQUFDQyxJQUFFO2tDQUFhRCxJQUFJO3VCQUFYQSxJQUFJOzs7OzZCQUFhO2lCQUMzQixDQUFDOzs7OztvQkFDQzswQkFFTCw4REFBQ0UsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFVixXQUFXOztvQkFBRSxPQUFLO29CQUFDRSxLQUFLO29CQUFDLEdBQUM7Ozs7OztvQkFBUzs7Ozs7O1lBQ2hELENBQ047Q0FDSDtHQXpCdUJILFFBQVE7QUFBUkEsTUFBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5mdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XHJcbiAgcmV0dXJuIDxoMT57dGl0bGUgPyB0aXRsZSA6ICdEZWZhdWx0IHRpdGxlJ308L2gxPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgbmFtZXMgPSBbJ0FkYSBMb3ZlbGFjZScsICdHcmFjZSBIb3BwZXInLCAnTWFyZ2FyZXQgSGFtaWx0b24nXTtcclxuXHJcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgc2V0TGlrZXMobGlrZXMgKyAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPVwiRGV2ZWxvcC4gUHJldmlldy4gU2hpcC4g8J+agFwiIC8+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bmFtZXMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtuYW1lfT57bmFtZX08L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TGllICh7bGlrZXN9KTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJIb21lUGFnZSIsImhhbmRsZUNsaWNrIiwic2V0TGlrZXMiLCJsaWtlcyIsIm5hbWVzIiwiZGl2IiwidWwiLCJtYXAiLCJuYW1lIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});