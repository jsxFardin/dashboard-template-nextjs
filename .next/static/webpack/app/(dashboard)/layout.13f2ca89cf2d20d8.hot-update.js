"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b584fd2f8165\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2I2ODciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiNTg0ZmQyZjgxNjVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/micro-components/TypographyH3.jsx":
/*!******************************************************!*\
  !*** ./components/micro-components/TypographyH3.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TypographyH3: function() { return /* binding */ TypographyH3; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction TypographyH3(param) {\n    let { text } = param;\n    const textStyle = {\n        backgroundClip: \"text\",\n        WebkitBackgroundClip: \"text\",\n        color: \"transparent\",\n        backgroundImage: \"linear-gradient(to right, #4f3ba9, #643cad, #7d2fad, #9622ad, #ad0bad)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: \"scroll-m-20 text-2xl font-semibold tracking-tight m-1\",\n        style: textStyle,\n        children: text\n    }, void 0, false, {\n        fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/micro-components/TypographyH3.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_c = TypographyH3;\nvar _c;\n$RefreshReg$(_c, \"TypographyH3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWljcm8tY29tcG9uZW50cy9UeXBvZ3JhcGh5SDMuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLGFBQWEsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSO0lBQ3pCLE1BQU1DLFlBQVk7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxzQkFBc0I7UUFDdEJDLE9BQU87UUFDUEMsaUJBQWtCO0lBQ3RCO0lBRUEscUJBQ0ksOERBQUNDO1FBQUdDLFdBQVU7UUFBd0RDLE9BQU9QO2tCQUN4RUQ7Ozs7OztBQUdiO0tBYmdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21pY3JvLWNvbXBvbmVudHMvVHlwb2dyYXBoeUgzLmpzeD8yN2VjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBUeXBvZ3JhcGh5SDMoeyB0ZXh0IH0pIHtcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDbGlwOiAndGV4dCcsXG4gICAgICAgIFdlYmtpdEJhY2tncm91bmRDbGlwOiAndGV4dCcsXG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0ZjNiYTksICM2NDNjYWQsICM3ZDJmYWQsICM5NjIyYWQsICNhZDBiYWQpYFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2Nyb2xsLW0tMjAgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCBtLTFcIiBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2gzPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiVHlwb2dyYXBoeUgzIiwidGV4dCIsInRleHRTdHlsZSIsImJhY2tncm91bmRDbGlwIiwiV2Via2l0QmFja2dyb3VuZENsaXAiLCJjb2xvciIsImJhY2tncm91bmRJbWFnZSIsImgzIiwiY2xhc3NOYW1lIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/micro-components/TypographyH3.jsx\n"));

/***/ })

});