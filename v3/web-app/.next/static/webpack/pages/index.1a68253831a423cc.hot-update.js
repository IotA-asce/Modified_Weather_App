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

/***/ "./components/CodeAssets.js":
/*!**********************************!*\
  !*** ./components/CodeAssets.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"languageCodes\": function() { return /* binding */ languageCodes; },\n/* harmony export */   \"languageList\": function() { return /* binding */ languageList; }\n/* harmony export */ });\nvar languageList = [\n    \"Arabic\",\n    \"Bengali\",\n    \"Dutch\",\n    \"Finnish\",\n    \"French\",\n    \"German\",\n    \"Greek\",\n    \"Hindi\",\n    \"Italian\",\n    \"Japanese\",\n    \"Korean\",\n    \"Mandarin\",\n    \"Marathi\",\n    \"Polish\",\n    \"Portugese\",\n    \"Punjabi\",\n    \"Romanian\",\n    \"Russian\",\n    \"Slovak\",\n    \"Spanish\",\n    \"Swedish\",\n    \"Tamil\",\n    \"Telegu\",\n    \"Turkish\",\n    \"Ukrainian\",\n    \"Urdu\", \n];\nvar languageCodes = [\n    \"ar\",\n    \"bn\",\n    \"nl\",\n    \"fi\",\n    \"fr\",\n    \"de\",\n    \"el\",\n    \"hi\",\n    \"it\",\n    \"ja\",\n    \"ko\",\n    \"zh_cmn\",\n    \"mr\",\n    \"pl\",\n    \"pt\",\n    \"pa\",\n    \"ro\",\n    \"ru\",\n    \"sk\",\n    \"es\",\n    \"sv\",\n    \"ta\",\n    \"te\",\n    \"tr\",\n    \"uk\",\n    \"ur\"\n];\nvar weatherDataSample = JSON.parse({\n    \"location\": {\n        \"name\": \"Kolkata\",\n        \"region\": \"West Bengal\",\n        \"country\": \"India\",\n        \"lat\": 22.57,\n        \"lon\": 88.37,\n        \"tz_id\": \"Asia/Kolkata\",\n        \"localtime_epoch\": 1657375716,\n        \"localtime\": \"2022-07-09 19:38\"\n    },\n    \"current\": {\n        \"last_updated_epoch\": 1657371600,\n        \"last_updated\": \"2022-07-09 18:30\",\n        \"temp_c\": 29,\n        \"temp_f\": 84.2,\n        \"is_day\": 0,\n        \"condition\": {\n            \"text\": \"Mist\",\n            \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/143.png\",\n            \"code\": 1030\n        },\n        \"wind_mph\": 3.8,\n        \"wind_kph\": 6.1,\n        \"wind_degree\": 90,\n        \"wind_dir\": \"E\",\n        \"pressure_mb\": 997,\n        \"pressure_in\": 29.44,\n        \"precip_mm\": 0,\n        \"precip_in\": 0,\n        \"humidity\": 84,\n        \"cloud\": 50,\n        \"feelslike_c\": 32,\n        \"feelslike_f\": 89.7,\n        \"vis_km\": 4,\n        \"vis_miles\": 2,\n        \"uv\": 1,\n        \"gust_mph\": 18.3,\n        \"gust_kph\": 29.5\n    }\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvZGVBc3NldHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7SUFDakIsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixRQUFRO0lBQ1IsT0FBTztJQUNQLE9BQU87SUFDUCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLE1BQU07Q0FFVDtBQUNELElBQU1DLGFBQWEsR0FBRztJQUNsQixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLFFBQVE7SUFDUixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtDQUNQO0FBRUQsSUFBTUMsaUJBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUNoQztJQUNJLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixPQUFPLEVBQUUsY0FBYztRQUN2QixpQkFBaUIsRUFBRSxVQUFVO1FBQzdCLFdBQVcsRUFBRSxrQkFBa0I7S0FDbEM7SUFDRCxTQUFTLEVBQUU7UUFDUCxvQkFBb0IsRUFBRSxVQUFVO1FBQ2hDLGNBQWMsRUFBRSxrQkFBa0I7UUFDbEMsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxDQUFDO1FBQ1gsV0FBVyxFQUFFO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsa0RBQWtEO1lBQzFELE1BQU0sRUFBRSxJQUFJO1NBQ2Y7UUFDRCxVQUFVLEVBQUUsR0FBRztRQUNmLFVBQVUsRUFBRSxHQUFHO1FBQ2YsYUFBYSxFQUFFLEVBQUU7UUFDakIsVUFBVSxFQUFFLEdBQUc7UUFDZixhQUFhLEVBQUUsR0FBRztRQUNsQixhQUFhLEVBQUUsS0FBSztRQUNwQixXQUFXLEVBQUUsQ0FBQztRQUNkLFdBQVcsRUFBRSxDQUFDO1FBQ2QsVUFBVSxFQUFFLEVBQUU7UUFDZCxPQUFPLEVBQUUsRUFBRTtRQUNYLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsV0FBVyxFQUFFLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQztRQUNQLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFVBQVUsRUFBRSxJQUFJO0tBQ25CO0NBQ0osQ0FDSjtBQUV1QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvZGVBc3NldHMuanM/NDY4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsYW5ndWFnZUxpc3QgPSBbXHJcbiAgICBcIkFyYWJpY1wiLFxyXG4gICAgXCJCZW5nYWxpXCIsXHJcbiAgICBcIkR1dGNoXCIsXHJcbiAgICBcIkZpbm5pc2hcIixcclxuICAgIFwiRnJlbmNoXCIsXHJcbiAgICBcIkdlcm1hblwiLFxyXG4gICAgXCJHcmVla1wiLFxyXG4gICAgXCJIaW5kaVwiLFxyXG4gICAgXCJJdGFsaWFuXCIsXHJcbiAgICBcIkphcGFuZXNlXCIsXHJcbiAgICBcIktvcmVhblwiLFxyXG4gICAgXCJNYW5kYXJpblwiLFxyXG4gICAgXCJNYXJhdGhpXCIsXHJcbiAgICBcIlBvbGlzaFwiLFxyXG4gICAgXCJQb3J0dWdlc2VcIixcclxuICAgIFwiUHVuamFiaVwiLFxyXG4gICAgXCJSb21hbmlhblwiLFxyXG4gICAgXCJSdXNzaWFuXCIsXHJcbiAgICBcIlNsb3Zha1wiLFxyXG4gICAgXCJTcGFuaXNoXCIsXHJcbiAgICBcIlN3ZWRpc2hcIixcclxuICAgIFwiVGFtaWxcIixcclxuICAgIFwiVGVsZWd1XCIsXHJcbiAgICBcIlR1cmtpc2hcIixcclxuICAgIFwiVWtyYWluaWFuXCIsXHJcbiAgICBcIlVyZHVcIixcclxuXHJcbl1cclxuY29uc3QgbGFuZ3VhZ2VDb2RlcyA9IFtcclxuICAgIFwiYXJcIixcclxuICAgIFwiYm5cIixcclxuICAgIFwibmxcIixcclxuICAgIFwiZmlcIixcclxuICAgIFwiZnJcIixcclxuICAgIFwiZGVcIixcclxuICAgIFwiZWxcIixcclxuICAgIFwiaGlcIixcclxuICAgIFwiaXRcIixcclxuICAgIFwiamFcIixcclxuICAgIFwia29cIixcclxuICAgIFwiemhfY21uXCIsXHJcbiAgICBcIm1yXCIsXHJcbiAgICBcInBsXCIsXHJcbiAgICBcInB0XCIsXHJcbiAgICBcInBhXCIsXHJcbiAgICBcInJvXCIsXHJcbiAgICBcInJ1XCIsXHJcbiAgICBcInNrXCIsXHJcbiAgICBcImVzXCIsXHJcbiAgICBcInN2XCIsXHJcbiAgICBcInRhXCIsXHJcbiAgICBcInRlXCIsXHJcbiAgICBcInRyXCIsXHJcbiAgICBcInVrXCIsXHJcbiAgICBcInVyXCJcclxuXVxyXG5cclxuY29uc3Qgd2VhdGhlckRhdGFTYW1wbGUgPSBKU09OLnBhcnNlKFxyXG4gICAge1xyXG4gICAgICAgIFwibG9jYXRpb25cIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJLb2xrYXRhXCIsXHJcbiAgICAgICAgICAgIFwicmVnaW9uXCI6IFwiV2VzdCBCZW5nYWxcIixcclxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiSW5kaWFcIixcclxuICAgICAgICAgICAgXCJsYXRcIjogMjIuNTcsXHJcbiAgICAgICAgICAgIFwibG9uXCI6IDg4LjM3LFxyXG4gICAgICAgICAgICBcInR6X2lkXCI6IFwiQXNpYS9Lb2xrYXRhXCIsXHJcbiAgICAgICAgICAgIFwibG9jYWx0aW1lX2Vwb2NoXCI6IDE2NTczNzU3MTYsXHJcbiAgICAgICAgICAgIFwibG9jYWx0aW1lXCI6IFwiMjAyMi0wNy0wOSAxOTozOFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1cnJlbnRcIjoge1xyXG4gICAgICAgICAgICBcImxhc3RfdXBkYXRlZF9lcG9jaFwiOiAxNjU3MzcxNjAwLFxyXG4gICAgICAgICAgICBcImxhc3RfdXBkYXRlZFwiOiBcIjIwMjItMDctMDkgMTg6MzBcIixcclxuICAgICAgICAgICAgXCJ0ZW1wX2NcIjogMjksXHJcbiAgICAgICAgICAgIFwidGVtcF9mXCI6IDg0LjIsXHJcbiAgICAgICAgICAgIFwiaXNfZGF5XCI6IDAsXHJcbiAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIk1pc3RcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcIi8vY2RuLndlYXRoZXJhcGkuY29tL3dlYXRoZXIvNjR4NjQvbmlnaHQvMTQzLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwMzBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kX21waFwiOiAzLjgsXHJcbiAgICAgICAgICAgIFwid2luZF9rcGhcIjogNi4xLFxyXG4gICAgICAgICAgICBcIndpbmRfZGVncmVlXCI6IDkwLFxyXG4gICAgICAgICAgICBcIndpbmRfZGlyXCI6IFwiRVwiLFxyXG4gICAgICAgICAgICBcInByZXNzdXJlX21iXCI6IDk5NyxcclxuICAgICAgICAgICAgXCJwcmVzc3VyZV9pblwiOiAyOS40NCxcclxuICAgICAgICAgICAgXCJwcmVjaXBfbW1cIjogMCxcclxuICAgICAgICAgICAgXCJwcmVjaXBfaW5cIjogMCxcclxuICAgICAgICAgICAgXCJodW1pZGl0eVwiOiA4NCxcclxuICAgICAgICAgICAgXCJjbG91ZFwiOiA1MCxcclxuICAgICAgICAgICAgXCJmZWVsc2xpa2VfY1wiOiAzMixcclxuICAgICAgICAgICAgXCJmZWVsc2xpa2VfZlwiOiA4OS43LFxyXG4gICAgICAgICAgICBcInZpc19rbVwiOiA0LFxyXG4gICAgICAgICAgICBcInZpc19taWxlc1wiOiAyLFxyXG4gICAgICAgICAgICBcInV2XCI6IDEsXHJcbiAgICAgICAgICAgIFwiZ3VzdF9tcGhcIjogMTguMyxcclxuICAgICAgICAgICAgXCJndXN0X2twaFwiOiAyOS41XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IHsgbGFuZ3VhZ2VMaXN0LCBsYW5ndWFnZUNvZGVzLCAgfSJdLCJuYW1lcyI6WyJsYW5ndWFnZUxpc3QiLCJsYW5ndWFnZUNvZGVzIiwid2VhdGhlckRhdGFTYW1wbGUiLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CodeAssets.js\n"));

/***/ })

});