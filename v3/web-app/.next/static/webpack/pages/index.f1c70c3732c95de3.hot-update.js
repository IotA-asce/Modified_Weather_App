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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ApiManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ApiManager */ \"./components/ApiManager.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    var _this = this;\n    var handleClick = function handleClick() {\n        setLikes(likes + 1);\n    };\n    _s();\n    var names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    var api = \"http://api.weatherapi.com/v1/current.json?key=dea2007a7bd9477fb6140709220907\"; //probably will need to hide the key\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likes = ref[0], setLikes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.0), latitude = ref1[0], setLatitude = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.0), longitude = ref2[0], setLongitude = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // setLatitude(navigator.geolocation.getCurrentPosition((_) => {\n        //   return _.coords.latitude;\n        // }));\n        navigator.geolocation.getCurrentPosition(function(_) {\n            setLatitude(_.coords.latitude);\n            setLongitude(_.coords.longitude);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map(function(name) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: (0,_components_ApiManager__WEBPACK_IMPORTED_MODULE_2__.getAvailableLanguages)().map(function(name) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Lie (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n_s(HomePage, \"9U3JUqWA3DeBJTgWEKnqpwy9Yxg=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDcUI7O0FBQ2pFLFNBQVNHLE1BQU0sQ0FBQyxLQUFTLEVBQUU7UUFBWCxLQUFPLEdBQVAsS0FBUyxDQUFQQyxLQUFLO0lBQ3JCLHFCQUFPLDhEQUFDQyxJQUFFO2tCQUFFRCxLQUFLLEdBQUdBLEtBQUssR0FBRyxlQUFlOzs7OztZQUFNLENBQUM7Q0FDbkQ7QUFGUUQsS0FBQUEsTUFBTTtBQUlBLFNBQVNHLFFBQVEsR0FBRzs7UUFxQnhCQyxXQUFXLEdBQXBCLFNBQVNBLFdBQVcsR0FBRztRQUNyQkMsUUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDckI7O0lBdEJELElBQU1DLEtBQUssR0FBRztRQUFDLGNBQWM7UUFBRSxjQUFjO1FBQUUsbUJBQW1CO0tBQUM7SUFFbkUsSUFBTUMsR0FBRyxHQUFHLDhFQUE4RSxFQUFJLG9DQUFvQztJQUVsSSxJQUEwQlYsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5QlEsS0FBSyxHQUFjUixHQUFXLEdBQXpCLEVBQUVPLFFBQVEsR0FBSVAsR0FBVyxHQUFmO0lBQ3RCLElBQWdDQSxJQUFhLEdBQWJBLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQXRDVyxRQUFRLEdBQWlCWCxJQUFhLEdBQTlCLEVBQUVZLFdBQVcsR0FBSVosSUFBYSxHQUFqQjtJQUM1QixJQUFrQ0EsSUFBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUF4Q2EsU0FBUyxHQUFrQmIsSUFBYSxHQUEvQixFQUFFYyxZQUFZLEdBQUlkLElBQWEsR0FBakI7SUFFOUJELGdEQUFTLENBQUMsV0FBTTtRQUNkLGdFQUFnRTtRQUNoRSw4QkFBOEI7UUFDOUIsT0FBTztRQUVQZ0IsU0FBUyxDQUFDQyxXQUFXLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDLENBQUMsRUFBSztZQUM5Q04sV0FBVyxDQUFDTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ1IsUUFBUSxDQUFDLENBQUM7WUFDL0JHLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNOLFNBQVMsQ0FBQyxDQUFDO1NBQ2xDLENBQUM7S0FFSCxFQUFFLEVBQUUsQ0FBQztJQU1OLHFCQUNFLDhEQUFDTyxLQUFHOzswQkFDRiw4REFBQ2xCLE1BQU07Z0JBQUNDLEtBQUssRUFBQyxzQ0FBMkI7Ozs7O29CQUFHOzBCQUM1Qyw4REFBQ2tCLElBQUU7MEJBQ0FaLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ2QsOERBQUNDLElBQUU7a0NBQWFELElBQUk7dUJBQVhBLElBQUk7Ozs7NkJBQWE7aUJBQzNCLENBQUM7Ozs7O29CQUNDOzBCQUNMLDhEQUFDRixJQUFFOzBCQUNBcEIsNkVBQXFCLEVBQUUsQ0FBRXFCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3lDQUNqQyw4REFBQ0MsSUFBRTtrQ0FBYUQsSUFBSTt1QkFBWEEsSUFBSTs7Ozs2QkFBYTtpQkFDM0IsQ0FBQzs7Ozs7b0JBQ0M7MEJBRUwsOERBQUNFLFFBQU07Z0JBQUNDLE9BQU8sRUFBRXBCLFdBQVc7O29CQUFFLE9BQUs7b0JBQUNFLEtBQUs7b0JBQUMsR0FBQzs7Ozs7O29CQUFTOzs7Ozs7WUFDaEQsQ0FDTjtDQUNIO0dBMUN1QkgsUUFBUTtBQUFSQSxNQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEF2YWlsYWJsZUxhbmd1YWdlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXBpTWFuYWdlcic7XHJcbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICByZXR1cm4gPGgxPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgdGl0bGUnfTwvaDE+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBuYW1lcyA9IFsnQWRhIExvdmVsYWNlJywgJ0dyYWNlIEhvcHBlcicsICdNYXJnYXJldCBIYW1pbHRvbiddO1xyXG5cclxuICBjb25zdCBhcGkgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1kZWEyMDA3YTdiZDk0NzdmYjYxNDA3MDkyMjA5MDdcIjsgICAvL3Byb2JhYmx5IHdpbGwgbmVlZCB0byBoaWRlIHRoZSBrZXlcclxuXHJcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlKDAuMCk7XHJcbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlKDAuMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBzZXRMYXRpdHVkZShuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChfKSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiBfLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChfKSA9PiB7XHJcbiAgICAgIHNldExhdGl0dWRlKF8uY29vcmRzLmxhdGl0dWRlKTtcclxuICAgICAgc2V0TG9uZ2l0dWRlKF8uY29vcmRzLmxvbmdpdHVkZSk7XHJcbiAgICB9KVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBzZXRMaWtlcyhsaWtlcyArIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJEZXZlbG9wLiBQcmV2aWV3LiBTaGlwLiDwn5qAXCIgLz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtuYW1lcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7Z2V0QXZhaWxhYmxlTGFuZ3VhZ2VzKCkgLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0+e25hbWV9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkxpZSAoe2xpa2VzfSk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBdmFpbGFibGVMYW5ndWFnZXMiLCJIZWFkZXIiLCJ0aXRsZSIsImgxIiwiSG9tZVBhZ2UiLCJoYW5kbGVDbGljayIsInNldExpa2VzIiwibGlrZXMiLCJuYW1lcyIsImFwaSIsImxhdGl0dWRlIiwic2V0TGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsIl8iLCJjb29yZHMiLCJkaXYiLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});