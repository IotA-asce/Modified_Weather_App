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

/***/ "./components/ApiManager.js":
/*!**********************************!*\
  !*** ./components/ApiManager.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAvailableLanguages\": function() { return /* binding */ getAvailableLanguages; },\n/* harmony export */   \"setLanguage\": function() { return /* binding */ setLanguage; }\n/* harmony export */ });\n/* harmony import */ var _CodeAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeAssets */ \"./components/CodeAssets.js\");\n\nvar getAvailableLanguages = function() {\n    return _CodeAssets__WEBPACK_IMPORTED_MODULE_0__.languageList;\n};\nvar getLanguageCode = function() {\n// \n};\nvar setLanguage = function(lang) {\n    var apiSegment = \"\";\n    try {\n        apiSegment.concat(\"lang=\".concat(_CodeAssets__WEBPACK_IMPORTED_MODULE_0__.languageCodes[_CodeAssets__WEBPACK_IMPORTED_MODULE_0__.languageList.find(lang)]));\n    } catch (error) {\n        console.log(\"[ERROR] -> languageNotFound\");\n        return \"[ERROR] -> languageNotFound\";\n    }\n    return apiSegment;\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwaU1hbmFnZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBRTNELElBQU1FLHFCQUFxQixHQUFHLFdBQU07SUFDaEMsT0FBT0YscURBQVksQ0FBQztDQUN2QjtBQUVELElBQU1HLGVBQWUsR0FBRyxXQUFNO0FBQzFCLEdBQUc7Q0FDTjtBQUVELElBQU1DLFdBQVcsR0FBRyxTQUFDQyxJQUFJLEVBQUs7SUFDMUIsSUFBSUMsVUFBVSxHQUFHLEVBQUU7SUFDbkIsSUFBSTtRQUNBQSxVQUFVLENBQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUNBLE1BQU0sQ0FBQ04sc0RBQWEsQ0FBQ0QsMERBQWlCLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdFLENBQUMsT0FBT0ksS0FBSyxFQUFFO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsT0FBTyw2QkFBNkIsQ0FBQztLQUN4QztJQUNELE9BQU9MLFVBQVUsQ0FBQztDQUNyQjtBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FwaU1hbmFnZXIuanM/ZGRlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYW5ndWFnZUxpc3QsIGxhbmd1YWdlQ29kZXMgfSBmcm9tIFwiLi9Db2RlQXNzZXRzXCI7XHJcblxyXG5jb25zdCBnZXRBdmFpbGFibGVMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2VMaXN0O1xyXG59XHJcblxyXG5jb25zdCBnZXRMYW5ndWFnZUNvZGUgPSAoKSA9PiB7XHJcbiAgICAvLyBcclxufVxyXG5cclxuY29uc3Qgc2V0TGFuZ3VhZ2UgPSAobGFuZykgPT4ge1xyXG4gICAgdmFyIGFwaVNlZ21lbnQgPSBcIlwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhcGlTZWdtZW50LmNvbmNhdChcImxhbmc9XCIuY29uY2F0KGxhbmd1YWdlQ29kZXNbbGFuZ3VhZ2VMaXN0LmZpbmQobGFuZyldKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSAtPiBsYW5ndWFnZU5vdEZvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybiBcIltFUlJPUl0gLT4gbGFuZ3VhZ2VOb3RGb3VuZFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwaVNlZ21lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0QXZhaWxhYmxlTGFuZ3VhZ2VzLCBzZXRMYW5ndWFnZX07Il0sIm5hbWVzIjpbImxhbmd1YWdlTGlzdCIsImxhbmd1YWdlQ29kZXMiLCJnZXRBdmFpbGFibGVMYW5ndWFnZXMiLCJnZXRMYW5ndWFnZUNvZGUiLCJzZXRMYW5ndWFnZSIsImxhbmciLCJhcGlTZWdtZW50IiwiY29uY2F0IiwiZmluZCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ApiManager.js\n"));

/***/ })

});