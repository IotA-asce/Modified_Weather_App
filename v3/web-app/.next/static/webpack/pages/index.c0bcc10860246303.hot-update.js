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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ApiManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ApiManager */ \"./components/ApiManager.js\");\n/* harmony import */ var _components_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FloatingButton */ \"./components/FloatingButton.js\");\n/* harmony import */ var _components_CodeAssets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CodeAssets */ \"./components/CodeAssets.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    var _this = this;\n    _s();\n    var api = \"http://api.weatherapi.com/v1/current.json?key=dea2007a7bd9477fb6140709220907&q=kolkata\"; //probably will need to hide the key\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.0), latitude = ref[0], setLatitude = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.0), longitude = ref1[0], setLongitude = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        navigator.geolocation.getCurrentPosition(function(_) {\n            setLatitude(_.coords.latitude);\n            setLongitude(_.coords.longitude);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: (0,_components_ApiManager__WEBPACK_IMPORTED_MODULE_2__.getAvailableLanguages)().map(function(name) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FloatingButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n_s(HomePage, \"gnxcOwr6jPGMrXQUDvxtoUIFyGk=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNxQjtBQUNQO0FBQ0c7O0FBRTdELFNBQVNLLE1BQU0sQ0FBQyxLQUFTLEVBQUU7UUFBWCxLQUFPLEdBQVAsS0FBUyxDQUFQQyxLQUFLO0lBQ3JCLHFCQUFPLDhEQUFDQyxJQUFFO2tCQUFFRCxLQUFLLEdBQUdBLEtBQUssR0FBRyxlQUFlOzs7OztZQUFNLENBQUM7Q0FDbkQ7QUFGUUQsS0FBQUEsTUFBTTtBQUlBLFNBQVNHLFFBQVEsR0FBRzs7O0lBRWpDLElBQU1DLEdBQUcsR0FBRyx3RkFBd0YsRUFBSSxvQ0FBb0M7SUFFNUksSUFBZ0NSLEdBQWEsR0FBYkEsK0NBQVEsQ0FBQyxHQUFHLENBQUMsRUFBdENTLFFBQVEsR0FBaUJULEdBQWEsR0FBOUIsRUFBRVUsV0FBVyxHQUFJVixHQUFhLEdBQWpCO0lBQzVCLElBQWtDQSxJQUFhLEdBQWJBLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQXhDVyxTQUFTLEdBQWtCWCxJQUFhLEdBQS9CLEVBQUVZLFlBQVksR0FBSVosSUFBYSxHQUFqQjtJQUU5QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBRWRjLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQyxDQUFDLEVBQUs7WUFDOUNOLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFNLENBQUNSLFFBQVEsQ0FBQyxDQUFDO1lBQy9CRyxZQUFZLENBQUNJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDTixTQUFTLENBQUMsQ0FBQztTQUNsQyxDQUFDO0tBRUgsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMsS0FBSzs7MEJBQ2xCLDhEQUFDRCxLQUFHOzs7O29CQUVFOzBCQUNOLDhEQUFDRSxJQUFFOzBCQUNBbkIsNkVBQXFCLEVBQUUsQ0FBQ29CLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3lDQUNoQyw4REFBQ0MsSUFBRTtrQ0FBYUQsSUFBSTt1QkFBWEEsSUFBSTs7Ozs2QkFBYTtpQkFDM0IsQ0FBQzs7Ozs7b0JBQ0M7MEJBQ0wsOERBQUNwQixrRUFBYzs7OztvQkFBRzs7Ozs7O1lBQ2QsQ0FDTjtDQUNIO0dBN0J1QkssUUFBUTtBQUFSQSxNQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEF2YWlsYWJsZUxhbmd1YWdlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXBpTWFuYWdlcic7XHJcbmltcG9ydCBGbG9hdGluZ0J1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0Zsb2F0aW5nQnV0dG9uJztcclxuaW1wb3J0IHsgc2FtcGxlV2VhdGhlckRhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvZGVBc3NldHMnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiAnRGVmYXVsdCB0aXRsZSd9PC9oMT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG5cclxuICBjb25zdCBhcGkgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1kZWEyMDA3YTdiZDk0NzdmYjYxNDA3MDkyMjA5MDcmcT1rb2xrYXRhXCI7ICAgLy9wcm9iYWJseSB3aWxsIG5lZWQgdG8gaGlkZSB0aGUga2V5XHJcblxyXG4gIGNvbnN0IFtsYXRpdHVkZSwgc2V0TGF0aXR1ZGVdID0gdXNlU3RhdGUoMC4wKTtcclxuICBjb25zdCBbbG9uZ2l0dWRlLCBzZXRMb25naXR1ZGVdID0gdXNlU3RhdGUoMC4wKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChfKSA9PiB7XHJcbiAgICAgIHNldExhdGl0dWRlKF8uY29vcmRzLmxhdGl0dWRlKTtcclxuICAgICAgc2V0TG9uZ2l0dWRlKF8uY29vcmRzLmxvbmdpdHVkZSk7XHJcbiAgICB9KVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2dldEF2YWlsYWJsZUxhbmd1YWdlcygpLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0+e25hbWV9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPEZsb2F0aW5nQnV0dG9uIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXZhaWxhYmxlTGFuZ3VhZ2VzIiwiRmxvYXRpbmdCdXR0b24iLCJzYW1wbGVXZWF0aGVyRGF0YSIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJIb21lUGFnZSIsImFwaSIsImxhdGl0dWRlIiwic2V0TGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsIl8iLCJjb29yZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});