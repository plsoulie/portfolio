"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6950);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
const GlobalStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif;}"]);const theme={colors:{primary:"#007acc"}};const Layout=({children})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider,{theme:theme},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GlobalStyle,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,"My Portfolio")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"My Portfolio")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,children));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/layout.js
var layout = __webpack_require__(8678);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 9 modules
var styled_components_esm = __webpack_require__(6950);
;// CONCATENATED MODULE: ./src/components/project.js
const ProjectCard=styled_components_esm["default"].div.withConfig({displayName:"project__ProjectCard",componentId:"sc-1uamqcc-0"})(["border:1px solid #eaeaea;border-radius:8px;padding:16px;margin:16px 0;"]);const Project=({name,description,url})=>/*#__PURE__*/react.createElement(ProjectCard,null,/*#__PURE__*/react.createElement("h2",null,name),/*#__PURE__*/react.createElement("p",null,description),/*#__PURE__*/react.createElement("a",{href:url,target:"_blank",rel:"noopener noreferrer"},"View on GitHub"));/* harmony default export */ const components_project = (Project);
;// CONCATENATED MODULE: ./src/pages/index.js
const IndexPage=({data})=>{const projects=data.githubData.data.viewer.repositories.nodes;return/*#__PURE__*/react.createElement(layout/* default */.Z,null,/*#__PURE__*/react.createElement("h2",null,"My Projects"),projects.map((project,index)=>/*#__PURE__*/react.createElement(components_project,Object.assign({key:index},project))));};const query="3066155557";/* harmony default export */ const pages = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map