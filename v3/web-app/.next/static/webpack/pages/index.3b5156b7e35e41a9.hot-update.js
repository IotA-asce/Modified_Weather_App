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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ApiManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ApiManager */ \"./components/ApiManager.js\");\n/* harmony import */ var _components_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FloatingButton */ \"./components/FloatingButton.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nvar sad = __webpack_require__(/*! ../components/weatherData.json */ \"./components/weatherData.json\");\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    _s();\n    var api = \"http://api.weatherapi.com/v1/current.json?key=dea2007a7bd9477fb6140709220907&q=kolkata\"; //probably will need to hide the key\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.0), latitude = ref[0], setLatitude = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.0), longitude = ref1[0], setLongitude = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        navigator.geolocation.getCurrentPosition(function(_) {\n            setLatitude(_.coords.latitude);\n            setLongitude(_.coords.longitude);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: sad.location.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FloatingButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n_s(HomePage, \"gnxcOwr6jPGMrXQUDvxtoUIFyGk=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ3FCO0FBQ1A7O0FBQzFELElBQU1JLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxxRUFBZ0MsQ0FBQztBQUVyRCxTQUFTQyxNQUFNLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSztJQUNyQixxQkFBTyw4REFBQ0MsSUFBRTtrQkFBRUQsS0FBSyxHQUFHQSxLQUFLLEdBQUcsZUFBZTs7Ozs7WUFBTSxDQUFDO0NBQ25EO0FBRlFELEtBQUFBLE1BQU07QUFJQSxTQUFTRyxRQUFRLEdBQUc7O0lBRWpDLElBQU1DLEdBQUcsR0FBRyx3RkFBd0YsRUFBSSxvQ0FBb0M7SUFFNUksSUFBZ0NULEdBQWEsR0FBYkEsK0NBQVEsQ0FBQyxHQUFHLENBQUMsRUFBdENVLFFBQVEsR0FBaUJWLEdBQWEsR0FBOUIsRUFBRVcsV0FBVyxHQUFJWCxHQUFhLEdBQWpCO0lBQzVCLElBQWtDQSxJQUFhLEdBQWJBLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQXhDWSxTQUFTLEdBQWtCWixJQUFhLEdBQS9CLEVBQUVhLFlBQVksR0FBSWIsSUFBYSxHQUFqQjtJQUU5QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBRWRlLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQyxDQUFDLEVBQUs7WUFDOUNOLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFNLENBQUNSLFFBQVEsQ0FBQyxDQUFDO1lBQy9CRyxZQUFZLENBQUNJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDTixTQUFTLENBQUMsQ0FBQztTQUNsQyxDQUFDO0tBRUgsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMsS0FBSzs7MEJBQ2xCLDhEQUFDRCxLQUFHOzBCQUNEaEIsR0FBRyxDQUFDa0IsUUFBUSxDQUFDQyxJQUFJOzs7OztvQkFHZDswQkFNTiw4REFBQ3BCLGtFQUFjOzs7O29CQUFHOzs7Ozs7WUFDZCxDQUNOO0NBQ0g7R0EvQnVCTSxRQUFRO0FBQVJBLE1BQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0QXZhaWxhYmxlTGFuZ3VhZ2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcGlNYW5hZ2VyJztcclxuaW1wb3J0IEZsb2F0aW5nQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvRmxvYXRpbmdCdXR0b24nO1xyXG5jb25zdCBzYWQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL3dlYXRoZXJEYXRhLmpzb24nKTtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICByZXR1cm4gPGgxPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgdGl0bGUnfTwvaDE+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuXHJcbiAgY29uc3QgYXBpID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9ZGVhMjAwN2E3YmQ5NDc3ZmI2MTQwNzA5MjIwOTA3JnE9a29sa2F0YVwiOyAgIC8vcHJvYmFibHkgd2lsbCBuZWVkIHRvIGhpZGUgdGhlIGtleVxyXG5cclxuICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlKDAuMCk7XHJcbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlKDAuMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoXykgPT4ge1xyXG4gICAgICBzZXRMYXRpdHVkZShfLmNvb3Jkcy5sYXRpdHVkZSk7XHJcbiAgICAgIHNldExvbmdpdHVkZShfLmNvb3Jkcy5sb25naXR1ZGUpO1xyXG4gICAgfSlcclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7c2FkLmxvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDx1bD5cclxuICAgICAgICB7Z2V0QXZhaWxhYmxlTGFuZ3VhZ2VzKCkubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtuYW1lfT57bmFtZX08L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPiAqL31cclxuICAgICAgPEZsb2F0aW5nQnV0dG9uIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXZhaWxhYmxlTGFuZ3VhZ2VzIiwiRmxvYXRpbmdCdXR0b24iLCJzYWQiLCJyZXF1aXJlIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVQYWdlIiwiYXBpIiwibGF0aXR1ZGUiLCJzZXRMYXRpdHVkZSIsImxvbmdpdHVkZSIsInNldExvbmdpdHVkZSIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiXyIsImNvb3JkcyIsImRpdiIsImNsYXNzTmFtZSIsImxvY2F0aW9uIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});