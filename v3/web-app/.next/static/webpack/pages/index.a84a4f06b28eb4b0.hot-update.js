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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    var _this = this;\n    var handleClick = function handleClick() {\n        setLikes(likes + 1);\n    };\n    _s();\n    var names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likes = ref[0], setLikes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.0), latitude = ref1[0], setLatitude = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.0), longitude = ref2[0], setLongitude = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // setLatitude(navigator.geolocation.getCurrentPosition((_) => {\n        //   return _.coords.latitude;\n        // }));\n        navigator.geolocation.getCurrentPosition(function(_) {\n            setLatitude(_.coords.latitude);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map(function(name) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"latitude\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 36,\n                columnNumber: 24\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: latitude\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 37,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Lie (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iota-\\\\OneDrive\\\\Documents\\\\__Repositories\\\\Modified_Weather_App\\\\v3\\\\web-app\\\\pages\\\\index.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n};\n_s(HomePage, \"9U3JUqWA3DeBJTgWEKnqpwy9Yxg=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE0Qzs7QUFDNUMsU0FBU0UsTUFBTSxDQUFDLEtBQVMsRUFBRTtRQUFYLEtBQU8sR0FBUCxLQUFTLENBQVBDLEtBQUs7SUFDckIscUJBQU8sOERBQUNDLElBQUU7a0JBQUVELEtBQUssR0FBR0EsS0FBSyxHQUFHLGVBQWU7Ozs7O1lBQU0sQ0FBQztDQUNuRDtBQUZRRCxLQUFBQSxNQUFNO0FBSUEsU0FBU0csUUFBUSxHQUFHOztRQWtCeEJDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBQ3JCQyxRQUFRLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNyQjs7SUFuQkQsSUFBTUMsS0FBSyxHQUFHO1FBQUMsY0FBYztRQUFFLGNBQWM7UUFBRSxtQkFBbUI7S0FBQztJQUVuRSxJQUEwQlIsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5Qk8sS0FBSyxHQUFjUCxHQUFXLEdBQXpCLEVBQUVNLFFBQVEsR0FBSU4sR0FBVyxHQUFmO0lBQ3RCLElBQWdDQSxJQUFhLEdBQWJBLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQXRDUyxRQUFRLEdBQWlCVCxJQUFhLEdBQTlCLEVBQUVVLFdBQVcsR0FBSVYsSUFBYSxHQUFqQjtJQUM1QixJQUFrQ0EsSUFBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUF4Q1csU0FBUyxHQUFrQlgsSUFBYSxHQUEvQixFQUFFWSxZQUFZLEdBQUlaLElBQWEsR0FBakI7SUFFOUJELGdEQUFTLENBQUMsV0FBTTtRQUNkLGdFQUFnRTtRQUNoRSw4QkFBOEI7UUFDOUIsT0FBTztRQUVQYyxTQUFTLENBQUNDLFdBQVcsQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0MsQ0FBQyxFQUFLO1lBQzlDTixXQUFXLENBQUNNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixRQUFRLENBQUMsQ0FBQztTQUNoQyxDQUFDO0tBRUgsRUFBRSxFQUFFLENBQUM7SUFNTixxQkFDRSw4REFBQ1MsS0FBRzs7MEJBQ0YsOERBQUNqQixNQUFNO2dCQUFDQyxLQUFLLEVBQUMsc0NBQTJCOzs7OztvQkFBRzswQkFDNUMsOERBQUNpQixJQUFFOzBCQUNBWCxLQUFLLENBQUNZLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3lDQUNkLDhEQUFDQyxJQUFFO2tDQUFhRCxJQUFJO3VCQUFYQSxJQUFJOzs7OzZCQUFhO2lCQUMzQixDQUFDOzs7OztvQkFDQzswQkFDTCw4REFBQ2xCLElBQUU7MEJBQUMsVUFBUTs7Ozs7b0JBQUs7MEJBQUEsOERBQUNvQixJQUFFOzs7O29CQUFFOzBCQUN0Qiw4REFBQ3BCLElBQUU7MEJBQUVNLFFBQVE7Ozs7O29CQUFNOzBCQUFBLDhEQUFDYyxJQUFFOzs7O29CQUFFOzBCQUN4Qiw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFcEIsV0FBVzs7b0JBQUUsT0FBSztvQkFBQ0UsS0FBSztvQkFBQyxHQUFDOzs7Ozs7b0JBQVM7Ozs7OztZQUNoRCxDQUNOO0NBQ0g7R0FuQ3VCSCxRQUFRO0FBQVJBLE1BQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiAnRGVmYXVsdCB0aXRsZSd9PC9oMT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IG5hbWVzID0gWydBZGEgTG92ZWxhY2UnLCAnR3JhY2UgSG9wcGVyJywgJ01hcmdhcmV0IEhhbWlsdG9uJ107XHJcblxyXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xhdGl0dWRlLCBzZXRMYXRpdHVkZV0gPSB1c2VTdGF0ZSgwLjApO1xyXG4gIGNvbnN0IFtsb25naXR1ZGUsIHNldExvbmdpdHVkZV0gPSB1c2VTdGF0ZSgwLjApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gc2V0TGF0aXR1ZGUobmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoXykgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gXy5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoXykgPT4ge1xyXG4gICAgICBzZXRMYXRpdHVkZShfLmNvb3Jkcy5sYXRpdHVkZSk7XHJcbiAgICB9KVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBzZXRMaWtlcyhsaWtlcyArIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJEZXZlbG9wLiBQcmV2aWV3LiBTaGlwLiDwn5qAXCIgLz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtuYW1lcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxoMT5sYXRpdHVkZTwvaDE+PGJyLz5cclxuICAgICAgPGgxPntsYXRpdHVkZX08L2gxPjxici8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkxpZSAoe2xpa2VzfSk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJ0aXRsZSIsImgxIiwiSG9tZVBhZ2UiLCJoYW5kbGVDbGljayIsInNldExpa2VzIiwibGlrZXMiLCJuYW1lcyIsImxhdGl0dWRlIiwic2V0TGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsIl8iLCJjb29yZHMiLCJkaXYiLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});