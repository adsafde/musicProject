"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcloudmusic"] = self["webpackChunkcloudmusic"] || []).push([["src_view_EleMent_MyTest_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/view/EleMent/MyTest.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/view/EleMent/MyTest.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setup(__props, {\n    expose\n  }) {\n    expose();\n\n    function getCookie() {\n      const internalInstance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();\n      const cookies = internalInstance.appContext.config.globalProperties.$cookies;\n\n      const loginFun = () => {\n        let token = cookies.get(\"token\");\n        console.log(\"ttokenss\", token); //ttokenss 7777777788888888\n\n        return token;\n      };\n\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {\n        console.log(\"挂在全局的方法\", cookies);\n        cookies.set(\"token\", \"7777777788888888\", \"1M\");\n      });\n      return loginFun;\n    }\n\n    const loginFun = getCookie();\n    const __returned__ = {\n      getCookie,\n      loginFun,\n      getCurrentInstance: vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance,\n      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n\n});\n\n//# sourceURL=webpack://cloudmusic/./src/view/EleMent/MyTest.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/view/EleMent/MyTest.vue?vue&type=template&id=dc3f685c":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/view/EleMent/MyTest.vue?vue&type=template&id=dc3f685c ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.loginFun());\n}\n\n//# sourceURL=webpack://cloudmusic/./src/view/EleMent/MyTest.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/view/EleMent/MyTest.vue":
/*!*************************************!*\
  !*** ./src/view/EleMent/MyTest.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MyTest_vue_vue_type_template_id_dc3f685c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyTest.vue?vue&type=template&id=dc3f685c */ \"./src/view/EleMent/MyTest.vue?vue&type=template&id=dc3f685c\");\n/* harmony import */ var _MyTest_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyTest.vue?vue&type=script&setup=true&lang=js */ \"./src/view/EleMent/MyTest.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var E_xiangmu_htmlstudy_cloudmusic_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,E_xiangmu_htmlstudy_cloudmusic_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_MyTest_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_MyTest_vue_vue_type_template_id_dc3f685c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/view/EleMent/MyTest.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://cloudmusic/./src/view/EleMent/MyTest.vue?");

/***/ }),

/***/ "./src/view/EleMent/MyTest.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./src/view/EleMent/MyTest.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyTest_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyTest_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyTest.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/view/EleMent/MyTest.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://cloudmusic/./src/view/EleMent/MyTest.vue?");

/***/ }),

/***/ "./src/view/EleMent/MyTest.vue?vue&type=template&id=dc3f685c":
/*!*******************************************************************!*\
  !*** ./src/view/EleMent/MyTest.vue?vue&type=template&id=dc3f685c ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyTest_vue_vue_type_template_id_dc3f685c__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyTest_vue_vue_type_template_id_dc3f685c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyTest.vue?vue&type=template&id=dc3f685c */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/view/EleMent/MyTest.vue?vue&type=template&id=dc3f685c\");\n\n\n//# sourceURL=webpack://cloudmusic/./src/view/EleMent/MyTest.vue?");

/***/ })

}]);