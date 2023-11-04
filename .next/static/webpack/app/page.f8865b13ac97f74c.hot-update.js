"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/imageGallery.js":
/*!****************************************!*\
  !*** ./src/components/imageGallery.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageGallery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _galleryItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./galleryItem */ \"(app-pages-browser)/./src/components/galleryItem.js\");\n/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Gallery.module.css */ \"(app-pages-browser)/./src/styles/Gallery.module.css\");\n/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightbox */ \"(app-pages-browser)/./src/components/lightbox.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ImageGallery() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const imageList = [\n        {\n            source: \"./images/Nori_Maki.webp\",\n            description: \"Nori Maki\"\n        },\n        {\n            source: \"./images/Inari.webp\",\n            description: \"Inari\"\n        },\n        {\n            source: \"./images/Ebi.webp\",\n            description: \"Ebi\"\n        },\n        {\n            source: \"./images/Saba.webp\",\n            description: \"Saba\"\n        },\n        {\n            source: \"./images/Tamago_Maki.webp\",\n            description: \"Tamago Maki\"\n        },\n        {\n            source: \"./images/California_Roll.webp\",\n            description: \"California Roll\"\n        },\n        {\n            source: \"./images/IMG_4585.webp\",\n            description: \"Sushi Box\"\n        }\n    ];\n    const closeLightbox = ()=>{\n        setCurrentIndex(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateWidth = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", updateWidth);\n        updateWidth();\n        return ()=>window.removeEventListener(\"resize\", updateWidth);\n    }, []);\n    const isMobile = windowWidth <= 1088;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        id: \"galleryContainer\",\n        children: [\n            isMobile ? imageList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_4___default().rowContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_galleryItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        item: imageList[index],\n                        setCurrentIndex: ()=>setCurrentIndex(index)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\sakae-sushi\\\\src\\\\components\\\\imageGallery.js\",\n                        lineNumber: 41,\n                        columnNumber: 29\n                    }, this)\n                }, index, false, {\n                    fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\sakae-sushi\\\\src\\\\components\\\\imageGallery.js\",\n                    lineNumber: 40,\n                    columnNumber: 25\n                }, this)) : imageList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_galleryItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    item: item,\n                    setCurrentIndex: ()=>setCurrentIndex(index)\n                }, index, false, {\n                    fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\sakae-sushi\\\\src\\\\components\\\\imageGallery.js\",\n                    lineNumber: 46,\n                    columnNumber: 21\n                }, this)),\n            currentIndex !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lightbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                item: imageList[currentIndex],\n                onClose: closeLightbox\n            }, void 0, false, {\n                fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\sakae-sushi\\\\src\\\\components\\\\imageGallery.js\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\sakae-sushi\\\\src\\\\components\\\\imageGallery.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(ImageGallery, \"/thjfwRNWZ88ZjVQOB0/YicNnss=\");\n_c = ImageGallery;\nvar _c;\n$RefreshReg$(_c, \"ImageGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2ltYWdlR2FsbGVyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0o7QUFDVTtBQUNoQjtBQUVuQixTQUFTSzs7SUFDcEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1VLFlBQVk7UUFDZDtZQUFFQyxRQUFRO1lBQTJCQyxhQUFhO1FBQVk7UUFDOUQ7WUFBRUQsUUFBUTtZQUF1QkMsYUFBYTtRQUFRO1FBQ3REO1lBQUVELFFBQVE7WUFBcUJDLGFBQWE7UUFBTTtRQUNsRDtZQUFFRCxRQUFRO1lBQXNCQyxhQUFhO1FBQU87UUFDcEQ7WUFBRUQsUUFBUTtZQUE2QkMsYUFBYTtRQUFjO1FBQ2xFO1lBQUVELFFBQVE7WUFBaUNDLGFBQWE7UUFBa0I7UUFDMUU7WUFBRUQsUUFBUTtZQUEwQkMsYUFBYTtRQUFZO0tBQ2hFO0lBRUQsTUFBTUMsZ0JBQWdCO1FBQ2xCTixnQkFBZ0I7SUFDcEI7SUFFQU4sZ0RBQVNBLENBQUM7UUFDTixNQUFNYSxjQUFjO1lBQ2hCTCxlQUFlTSxPQUFPQyxVQUFVO1FBQ3BDO1FBQ0FELE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDQTtRQUNBLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDdEQsR0FBRyxFQUFFO0lBRUwsTUFBTUssV0FBV1gsZUFBZTtJQUVoQyxxQkFDSSw4REFBQ1k7UUFBSUMsV0FBV2xCLDZFQUFnQjtRQUFFb0IsSUFBRzs7WUFDaENKLFdBQ0dULFVBQVVjLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDYiw4REFBQ047b0JBQUlDLFdBQVdsQixnRkFBbUI7OEJBQy9CLDRFQUFDRCxvREFBV0E7d0JBQUN1QixNQUFNZixTQUFTLENBQUNnQixNQUFNO3dCQUFFbkIsaUJBQWlCLElBQU1BLGdCQUFnQm1COzs7Ozs7bUJBRHRDQTs7Ozs0QkFLbERoQixVQUFVYyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pCLDhEQUFDeEIsb0RBQVdBO29CQUFDdUIsTUFBTUE7b0JBQU1sQixpQkFBaUIsSUFBTUEsZ0JBQWdCbUI7bUJBQWFBOzs7OztZQUdwRnBCLGlCQUFpQixzQkFDZCw4REFBQ0YsaURBQVFBO2dCQUNMcUIsTUFBTWYsU0FBUyxDQUFDSixhQUFhO2dCQUM3QnNCLFNBQVNmOzs7Ozs7Ozs7Ozs7QUFLN0I7R0FsRHdCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbWFnZUdhbGxlcnkuanM/MzUxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdhbGxlcnlJdGVtIGZyb20gJy4vZ2FsbGVyeUl0ZW0nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9HYWxsZXJ5Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGlnaHRib3ggZnJvbSAnLi9saWdodGJveCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUdhbGxlcnkoKSB7XHJcbiAgICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGltYWdlTGlzdCA9IFtcclxuICAgICAgICB7IHNvdXJjZTogXCIuL2ltYWdlcy9Ob3JpX01ha2kud2VicFwiLCBkZXNjcmlwdGlvbjogXCJOb3JpIE1ha2lcIiB9LFxyXG4gICAgICAgIHsgc291cmNlOiBcIi4vaW1hZ2VzL0luYXJpLndlYnBcIiwgZGVzY3JpcHRpb246IFwiSW5hcmlcIiB9LFxyXG4gICAgICAgIHsgc291cmNlOiBcIi4vaW1hZ2VzL0ViaS53ZWJwXCIsIGRlc2NyaXB0aW9uOiBcIkViaVwiIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6IFwiLi9pbWFnZXMvU2FiYS53ZWJwXCIsIGRlc2NyaXB0aW9uOiBcIlNhYmFcIiB9LFxyXG4gICAgICAgIHsgc291cmNlOiBcIi4vaW1hZ2VzL1RhbWFnb19NYWtpLndlYnBcIiwgZGVzY3JpcHRpb246IFwiVGFtYWdvIE1ha2lcIiB9LFxyXG4gICAgICAgIHsgc291cmNlOiBcIi4vaW1hZ2VzL0NhbGlmb3JuaWFfUm9sbC53ZWJwXCIsIGRlc2NyaXB0aW9uOiBcIkNhbGlmb3JuaWEgUm9sbFwiIH0sXHJcbiAgICAgICAgeyBzb3VyY2U6IFwiLi9pbWFnZXMvSU1HXzQ1ODUud2VicFwiLCBkZXNjcmlwdGlvbjogXCJTdXNoaSBCb3hcIiB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTGlnaHRib3ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudEluZGV4KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlV2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVXaWR0aCk7XHJcbiAgICAgICAgdXBkYXRlV2lkdGgoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVdpZHRoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDEwODg7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaWQ9XCJnYWxsZXJ5Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtpc01vYmlsZSA/IChcclxuICAgICAgICAgICAgICAgIGltYWdlTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93Q29udGFpbmVyfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHYWxsZXJ5SXRlbSBpdGVtPXtpbWFnZUxpc3RbaW5kZXhdfSBzZXRDdXJyZW50SW5kZXg9eygpID0+IHNldEN1cnJlbnRJbmRleChpbmRleCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIGltYWdlTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEdhbGxlcnlJdGVtIGl0ZW09e2l0ZW19IHNldEN1cnJlbnRJbmRleD17KCkgPT4gc2V0Q3VycmVudEluZGV4KGluZGV4KX0ga2V5PXtpbmRleH0gLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50SW5kZXggIT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpZ2h0Ym94XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbT17aW1hZ2VMaXN0W2N1cnJlbnRJbmRleF19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17Y2xvc2VMaWdodGJveH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2FsbGVyeUl0ZW0iLCJzdHlsZXMiLCJMaWdodGJveCIsIkltYWdlR2FsbGVyeSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJpbWFnZUxpc3QiLCJzb3VyY2UiLCJkZXNjcmlwdGlvbiIsImNsb3NlTGlnaHRib3giLCJ1cGRhdGVXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzTW9iaWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaWQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyb3dDb250YWluZXIiLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/imageGallery.js\n"));

/***/ })

});