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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c2d14421a435\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2I2ODciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjMmQxNDQyMWE0MzVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/SideBar.jsx":
/*!********************************!*\
  !*** ./components/SideBar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_HiMenu_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=HiMenu!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* harmony import */ var _micro_components_TypographyH3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./micro-components/TypographyH3 */ \"(app-pages-browser)/./components/micro-components/TypographyH3.jsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _barrel_optimize_names_MdDashboard_react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=MdFormatAlignLeft!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaTable_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaTable!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_CiLogin_react_icons_ci__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CiLogin!=!react-icons/ci */ \"(app-pages-browser)/./node_modules/react-icons/ci/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst SideBar = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // State to track sidebar collapse\n    const toggleSidebar = ()=>{\n        setIsCollapsed(!isCollapsed);\n    };\n    const sidebarClasses = \"flex flex-col gap-2 w-[\".concat(isCollapsed ? \"80px\" : \"300px\", \"] h-100vh border-r min-h-screen p-4\"); // Dynamic class based on collapse state\n    const logoClasses = \"flex items-center pl-1 gap-4 \".concat(isCollapsed && \"hidden\", \" border\"); // Hide logo when collapsed\n    const buttonTextClasses = \"\".concat(isCollapsed && \"hidden\", \"  text-md\"); // Hide button text when collapsed\n    const navClass = \"rounded-md my-2 gap-1 border-none\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: sidebarClasses,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col mb-8 mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: logoClasses,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_micro_components_TypographyH3__WEBPACK_IMPORTED_MODULE_1__.TypographyH3, {\n                                text: \"WEB 3 APP\"\n                            }, void 0, false, {\n                                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiMenu_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiMenu, {\n                            size: 40,\n                            className: \"p-2 mb-0.5 border rounded-full hover:bg-purple-500 hover:text-white\",\n                            onClick: toggleSidebar\n                        }, void 0, false, {\n                            fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-start justify-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: navClass,\n                        variant: \"outline\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDashboard_react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdDashboard, {\n                                size: 19\n                            }, void 0, false, {\n                                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: buttonTextClasses,\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: navClass,\n                        variant: \"outline\",\n                        onClick: ()=>router.push(\"/table/\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaTable_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTable, {\n                                size: 18\n                            }, void 0, false, {\n                                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: buttonTextClasses,\n                                children: \"Table\"\n                            }, void 0, false, {\n                                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: navClass,\n                        variant: \"outline\",\n                        onClick: ()=>router.push(\"/form/\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDashboard_react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdFormatAlignLeft, {\n                                size: 18\n                            }, void 0, false, {\n                                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: buttonTextClasses,\n                                children: \"Form\"\n                            }, void 0, false, {\n                                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: navClass,\n                        variant: \"outline\",\n                        onClick: ()=>router.push(\"/login/\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiLogin_react_icons_ci__WEBPACK_IMPORTED_MODULE_8__.CiLogin, {\n                                size: 18\n                            }, void 0, false, {\n                                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: buttonTextClasses,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/tamal/CodeDrive/WebProjects/dashboard-template-nextjs/components/SideBar.jsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SideBar, \"APCgeTOeCuYVoYWM5e7sYcZ8zms=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZUJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV3QztBQUN1QjtBQUMxQjtBQUNPO0FBQ0M7QUFDSjtBQUNVO0FBQ1Y7QUFDUjtBQUNqQyxNQUFNUyxVQUFVOztJQUNaLE1BQU1DLFNBQVNQLDBEQUFTQTtJQUN4QixNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUMsUUFBUSxrQ0FBa0M7SUFFekYsTUFBTUssZ0JBQWdCO1FBQ2xCRCxlQUFlLENBQUNEO0lBQ3BCO0lBRUEsTUFBTUcsaUJBQWlCLDBCQUF5RCxPQUEvQkgsY0FBYyxTQUFTLFNBQVEsd0NBQXNDLHdDQUF3QztJQUM5SixNQUFNSSxjQUFjLGdDQUF3RCxPQUF4QkosZUFBZSxVQUFTLFlBQVUsMkJBQTJCO0lBQ2pILE1BQU1LLG9CQUFvQixHQUEyQixPQUF4QkwsZUFBZSxVQUFTLGNBQVksa0NBQWtDO0lBQ25HLE1BQU1NLFdBQVk7SUFDbEIscUJBQ0ksOERBQUNDO1FBQU1DLFdBQVdMOzswQkFDZCw4REFBQ007Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQUlELFdBQVdKO3NDQUNaLDRFQUFDZCx3RUFBWUE7Z0NBQUNvQixNQUFNOzs7Ozs7Ozs7OztzQ0FFeEIsOERBQUNyQixnRkFBTUE7NEJBQUNzQixNQUFNOzRCQUFJSCxXQUFVOzRCQUFzRUksU0FBU1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduSCw4REFBQ087Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDakIsOENBQU1BO3dCQUNIaUIsV0FBV0Y7d0JBQ1hPLFNBQVE7d0JBQ1JELFNBQVMsSUFBTWIsT0FBT2UsSUFBSSxDQUFDOzswQ0FFM0IsOERBQUNyQiwwRkFBV0E7Z0NBQUNrQixNQUFNOzs7Ozs7MENBQ25CLDhEQUFDSTtnQ0FBS1AsV0FBV0g7MENBQW1COzs7Ozs7Ozs7Ozs7a0NBRXhDLDhEQUFDZCw4Q0FBTUE7d0JBQ0hpQixXQUFXRjt3QkFDWE8sU0FBUTt3QkFDUkQsU0FBUyxJQUFNYixPQUFPZSxJQUFJLENBQUM7OzBDQUUzQiw4REFBQ3BCLGtGQUFPQTtnQ0FBQ2lCLE1BQU07Ozs7OzswQ0FDZiw4REFBQ0k7Z0NBQUtQLFdBQVdIOzBDQUFtQjs7Ozs7Ozs7Ozs7O2tDQUV4Qyw4REFBQ2QsOENBQU1BO3dCQUNIaUIsV0FBV0Y7d0JBQ1hPLFNBQVE7d0JBQ1JELFNBQVMsSUFBTWIsT0FBT2UsSUFBSSxDQUFDOzswQ0FFM0IsOERBQUNuQixnR0FBaUJBO2dDQUFDZ0IsTUFBTTs7Ozs7OzBDQUN6Qiw4REFBQ0k7Z0NBQUtQLFdBQVdIOzBDQUFtQjs7Ozs7Ozs7Ozs7O2tDQUV4Qyw4REFBQ2QsOENBQU1BO3dCQUNIaUIsV0FBV0Y7d0JBQ1hPLFNBQVE7d0JBQ1JELFNBQVMsSUFBTWIsT0FBT2UsSUFBSSxDQUFDOzswQ0FFM0IsOERBQUNsQixrRkFBT0E7Z0NBQUNlLE1BQU07Ozs7OzswQ0FDZiw4REFBQ0k7Z0NBQUtQLFdBQVdIOzBDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hEO0dBMURNUDs7UUFDYU4sc0RBQVNBOzs7S0FEdEJNO0FBNEROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZUJhci5qc3g/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgSGlNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5SDMgfSBmcm9tIFwiLi9taWNyby1jb21wb25lbnRzL1R5cG9ncmFwaHlIM1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNZERhc2hib2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgRmFUYWJsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgTWRGb3JtYXRBbGlnbkxlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IENpTG9naW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvY2lcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTdGF0ZSB0byB0cmFjayBzaWRlYmFyIGNvbGxhcHNlXG5cbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0NvbGxhcHNlZCghaXNDb2xsYXBzZWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaWRlYmFyQ2xhc3NlcyA9IGBmbGV4IGZsZXgtY29sIGdhcC0yIHctWyR7aXNDb2xsYXBzZWQgPyAnODBweCcgOiAnMzAwcHgnfV0gaC0xMDB2aCBib3JkZXItciBtaW4taC1zY3JlZW4gcC00YDsgLy8gRHluYW1pYyBjbGFzcyBiYXNlZCBvbiBjb2xsYXBzZSBzdGF0ZVxuICAgIGNvbnN0IGxvZ29DbGFzc2VzID0gYGZsZXggaXRlbXMtY2VudGVyIHBsLTEgZ2FwLTQgJHtpc0NvbGxhcHNlZCAmJiAnaGlkZGVuJ30gYm9yZGVyYDsgLy8gSGlkZSBsb2dvIHdoZW4gY29sbGFwc2VkXG4gICAgY29uc3QgYnV0dG9uVGV4dENsYXNzZXMgPSBgJHtpc0NvbGxhcHNlZCAmJiAnaGlkZGVuJ30gIHRleHQtbWRgOyAvLyBIaWRlIGJ1dHRvbiB0ZXh0IHdoZW4gY29sbGFwc2VkXG4gICAgY29uc3QgbmF2Q2xhc3MgPSBgcm91bmRlZC1tZCBteS0yIGdhcC0xIGJvcmRlci1ub25lYFxuICAgIHJldHVybiAoXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3NpZGViYXJDbGFzc2VzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi04IG10LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsb2dvQ2xhc3Nlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeUgzIHRleHQ9e1wiV0VCIDMgQVBQXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SGlNZW51IHNpemU9ezQwfSBjbGFzc05hbWU9XCJwLTIgbWItMC41IGJvcmRlciByb3VuZGVkLWZ1bGwgaG92ZXI6YmctcHVycGxlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgb25DbGljaz17dG9nZ2xlU2lkZWJhcn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtuYXZDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TWREYXNoYm9hcmQgc2l6ZT17MTl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YnV0dG9uVGV4dENsYXNzZXN9PkRhc2hib2FyZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bmF2Q2xhc3N9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvdGFibGUvXCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZhVGFibGUgc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YnV0dG9uVGV4dENsYXNzZXN9PlRhYmxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtuYXZDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9mb3JtL1wiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZEZvcm1hdEFsaWduTGVmdCBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtidXR0b25UZXh0Q2xhc3Nlc30+Rm9ybTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bmF2Q2xhc3N9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW4vXCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPENpTG9naW4gc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YnV0dG9uVGV4dENsYXNzZXN9PkxvZ2luPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7Il0sIm5hbWVzIjpbIkhpTWVudSIsIlR5cG9ncmFwaHlIMyIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIk1kRGFzaGJvYXJkIiwiRmFUYWJsZSIsIk1kRm9ybWF0QWxpZ25MZWZ0IiwiQ2lMb2dpbiIsInVzZVN0YXRlIiwiU2lkZUJhciIsInJvdXRlciIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJ0b2dnbGVTaWRlYmFyIiwic2lkZWJhckNsYXNzZXMiLCJsb2dvQ2xhc3NlcyIsImJ1dHRvblRleHRDbGFzc2VzIiwibmF2Q2xhc3MiLCJhc2lkZSIsImNsYXNzTmFtZSIsImRpdiIsInRleHQiLCJzaXplIiwib25DbGljayIsInZhcmlhbnQiLCJwdXNoIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SideBar.jsx\n"));

/***/ })

});