/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/media/AntonSC-Regular.ttf */ \"./src/media/AntonSC-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/media/Montserrat-VariableFont_wght.ttf */ \"./src/media/Montserrat-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/media/PioPio.svg */ \"./src/media/PioPio.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/media/background.svg */ \"./src/media/background.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: \"Anton SC\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n    font-family: \"Montserrat\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n:root {\n    box-sizing: border-box;\n    --dark-blue: #252f39;\n    --mid-blue: #2d3944;\n    --light-blue: #384858;\n    --pastel-green: #9aa77b;\n    --white: #fff;\n    --logo-font: \"Anton SC\", \"Arial\";\n    --body-font: \"Montserrat\", \"Arial\";\n    line-height: 1.25;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    color: var(--white);\n    background-color: var(--pastel-green);\n    white-space: pre-line;\n}\n\n.container {\n    width: clamp(500px, 80%, 1000px);\n    margin: 0rem auto;\n    display: grid;\n    grid-template-rows: 5rem 1fr;\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    z-index: 2;\n\n}\n#logo {\n    height: 5rem;\n    padding-right: 1em;\n}\n\n#logo::before {\n    display: block;\n    content: \"\";\n    height: 100%;\n    width: 100%;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-repeat: no-repeat;\n    background-position: bottom;\n    background-size: contain;\n    user-select: none;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-content: end;\n}\n\nbutton {\n    border: 0;\n    height: 3rem;\n    color: inherit;\n    background-color: var(--dark-blue);\n    font-family: var(--logo-font);\n    font-size: 1.5rem;\n}\n\nbutton:not(.active) {\n    background-color: var(--light-blue);\n    cursor: pointer;\n    \n    &:hover {\n        background-color: var(--mid-blue);\n    }\n}\n\n#content {\n    background-color: var(--dark-blue);\n    height: max(65vh, 90%);\n    padding: 3em;\n    position: relative;\n    box-shadow: 0px 10px 30px rgba(20,20,20,0.8);\n\n}\n\n#content::after {\n    width: 100%;\n    height: 100%;\n    top:0;\n    left:0;\n    opacity: 40%;\n    display: block;\n    position: absolute;\n    content: \"\";\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n    background-repeat: no-repeat;\n    background-size: max(40vh, 300px);\n    background-position: 90%;\n    pointer-events: none;\n}\n\n.content-inner {\n    display: grid;\n    gap: 3rem;\n    grid-template-columns: 300px 1fr;\n    padding-bottom: 2rem;\n}\n\n.content-inner.inverted {\n    grid-template-columns: 1fr 300px;\n}\n\n.content-inner img {\n    width: 300px;\n    display: block;\n    margin-top: 4rem;\n    box-shadow: 10px 10px 10px rgba(20,20,20,0.5);\n}\n\n.content-inner>div {\n    height: 100%;\n    font-family: var(--body-font);\n}\n\n.inner-nav {\n    display: grid;\n    grid-template-rows: repeat(3, 4rem);\n    gap: 1rem;\n    cursor: pointer;\n\n}\n\n.inner-nav button{\n    border: white 1px solid;\n}\n\n.menu-item {\n    margin-bottom: 2em;\n}\n\nspan.bold {\n    font-size: 1.1em;\n    font-weight: 700;\n}\n\nspan.italic {\n    font-size: 0.9em;\n    font-weight: 100;\n    padding-right: 3em;\n}\n\na {\n    color: var(--pastel-green);\n}\n\n@media screen and (max-width:calc(500px + 10rem)) {\n    .container {\n        margin-top: 0;\n        width: 100%;\n        grid-template-rows: 3rem 1fr;\n    }\n\n    #logo {\n        height: 3rem;\n        padding-left: 1em;\n    }\n}\n\n@media screen and (max-width:880px) {\n    .content-inner {\n        grid-template-columns: 1fr;\n        grid-template-rows: 200px 1fr;\n    }\n    .content-inner img {\n        margin-top: 0;\n        justify-self: center;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n\n\n\n\n\nconst navigation = function () {\n    const navBar = [_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _pages_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n    const getNavItem = (index) => {\n        return navBar[index]\n    }\n    return { getNavItem };\n}();\n\nconst contentBox = document.querySelector(\"#content\")\nconst navButtons = document.querySelectorAll(\"nav>button\")\n\nnavButtons.forEach((button, index) => {\n    button.addEventListener(\"click\", function () {\n        makePage(navigation.getNavItem(index))\n        navButtons.forEach((button) => {\n            button.classList.remove(\"active\")\n        })\n        button.classList.add(\"active\")\n    })\n})\n\nconst makePage = (pageName) => {\n    contentBox.innerHTML = \"\"\n    contentBox.appendChild(pageName)\n}\n\ncontentBox.appendChild(_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _media_milford_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/milford.webp */ \"./src/media/milford.webp\");\n\n\nconst innerText = `Piopio restaurant is located in Milford Sound.\n\\n\nMilford Sound, nestled in the heart of Fiordland National Park, is like stepping into a real-life postcard. Imagine towering cliffs, lush rainforests, and waterfalls that seem to tumble from the sky. This place is so stunning that Rudyard Kipling once called it the \"eighth Wonder of the World.\" Whether you're cruising through its deep, dark waters or hiking along its scenic trails, Milford Sound offers a slice of untouched beauty that's hard to find anywhere else.\n\\n\nGetting to Milford Sound is an adventure in itself. The drive from Te Anau or Queenstown is packed with jaw-dropping views, from the reflective Mirror Lakes to the dramatic Homer Tunnel. Once you arrive, you might spot playful dolphins, seals lounging on rocks, or even the rare Fiordland crested penguin. It's no wonder Milford Sound is a must-visit on any New Zealand itinerary – it's nature at its most dramatic and awe-inspiring.\n\\n\nFind out more about Milford Sound Lodge at:- `\n\nconst link = document.createElement('a')\nlink.appendChild(document.createTextNode(\"Milford Sound Lodge\"))\nlink.title = \"Milford Sound Lodge\";\nlink.href = \"https://www.milfordlodge.com/\";\n\nconst textNode = document.createTextNode(innerText)\nconst textContainer = document.createElement('div')\ntextContainer.append(textNode)\ntextContainer.append(link)\n\nconst milfordImage = new Image() \nmilfordImage.src = _media_milford_webp__WEBPACK_IMPORTED_MODULE_0__;\n\nconst innerHTML = document.createElement('div')\ninnerHTML.classList.add(\"content-inner\", \"inverted\")\ninnerHTML.appendChild(textContainer)\ninnerHTML.appendChild(milfordImage)\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (innerHTML);\n\n//# sourceURL=webpack://restaurant/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _media_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/food.jpg */ \"./src/media/food.jpg\");\n\n\nconst innerText = `Kia ora, Welcome to Pio Pio \\n\n                We are incredibly proud to present our menu using the South Islands finest and most exclusive ingredients made extraordinary through commitment to full flavour, culinary technique, and locally sourced product.\n                \\n\n                Our 100% hand-crafted elements of smoke, spice, sweet and sour combined with a range of clever French inspired cooking techniques transforms and elevates simple NZ local ingredients to full  flavoured dishes layered with care that will spark conversation at your table.\n                \\n\n                This menu is an opportunity to be curious and adventurous, try something new and be delighted with your find.\n                \\n\n                We hope you enjoy this menu as much as we have enjoyed creating it.\n                \\n\n                The Team`\n\nconst textNode = document.createTextNode(innerText)\nconst textContainer = document.createElement('div')\ntextContainer.append(textNode)\n\nconst food = new Image() \nfood.src = _media_food_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\nconst innerHTML = document.createElement('div')\ninnerHTML.classList.add(\"content-inner\")\ninnerHTML.appendChild(food)\ninnerHTML.appendChild(textContainer)\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (innerHTML);\n\n//# sourceURL=webpack://restaurant/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ \"./src/pages/menuItems.js\");\n\n\nconst innerHTML = document.createElement('div')\ninnerHTML.classList.add(\"content-inner\")\n\nconst innerNavBar = document.createElement(\"div\")\ninnerNavBar.classList.add(\"inner-nav\")\n\nconst textContainer = document.createElement(\"div\")\n\nconst coursesList = [];\n\n\nclass Course {\n    static changeCourse = (name) => {\n        textContainer.innerHTML = \"\"\n        textContainer.appendChild(generateInnerText(name))\n        console.log(`Changing course to ${name}.`)\n    }\n\n    constructor(name) {\n        this.name = name;\n        this.buttonElement = document.createElement(\"button\")\n        this.buttonText = document.createTextNode(this.name.toUpperCase())\n        this.buttonElement.appendChild(this.buttonText)\n        this.buttonElement.addEventListener(\"click\", () => {\n            this.constructor.changeCourse(name);\n            coursesList.forEach((course) => {\n                course.deselect();\n            });\n            this.select();\n        })\n        innerNavBar.appendChild(this.buttonElement)\n    }\n\n    deselect() {\n        this.buttonElement.classList.remove(\"active\")\n    }\n\n    select() {\n        this.buttonElement.classList.add(\"active\")\n    }\n}\n\nconst generateInnerText = (name) => {\n    const returnAllText = document.createElement(\"div\")\n    const items = _menuItems__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name]\n    items.forEach((item) => {\n        const returnItemText = document.createElement(\"div\")\n\n        const titleWrapper = document.createElement(\"span\")\n        titleWrapper.classList.add(\"bold\")\n\n        const descriptionWrapper = document.createTextNode(` - ${item[\"Description\"]}`)\n\n        const dietaryWrapper = document.createElement(\"span\")\n        dietaryWrapper.classList.add(\"italic\")\n\n        const priceWrapper = document.createElement(\"span\")\n        priceWrapper.classList.add(\"bold\")\n\n        titleWrapper.appendChild(document.createTextNode(item[\"Dish Name\"]))\n        dietaryWrapper.appendChild(document.createTextNode(` (${item[\"Dietaries\"].join(\", \")})`))\n        priceWrapper.appendChild(document.createTextNode(`${item[\"Price\"]} \\n`))\n\n        returnItemText.appendChild(titleWrapper)\n        if (item[\"Description\"]){\n            returnItemText.appendChild(descriptionWrapper)\n        }\n        returnItemText.appendChild(dietaryWrapper)\n        returnItemText.appendChild(priceWrapper)\n        returnItemText.classList.add(\"menu-item\")\n        returnAllText.appendChild(returnItemText)\n    })\n\n    return returnAllText;\n}\n\nObject.keys(_menuItems__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).forEach((key) => {\n    coursesList.push(new Course(key))}\n);\n\ncoursesList[0].select();\nCourse.changeCourse(coursesList[0].name)\n\ninnerHTML.appendChild(innerNavBar)\ninnerHTML.appendChild(textContainer)\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (innerHTML);\n\n//# sourceURL=webpack://restaurant/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/menuItems.js":
/*!********************************!*\
  !*** ./src/pages/menuItems.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    \"mains\": [\n      {\n        \"Dish Name\": \"Tempura Butternut\",\n        \"Description\": \"Piko Piko, Truffle Polenta, Romesco, Seasonal Vegetables, Horopito Chips\",\n        \"Dietaries\": [\"vegan\", \"dairy free\", \"gluten free\", \"contains nuts\"],\n        \"Price\": 48\n      },\n      {\n        \"Dish Name\": \"Roulade of Blue Cod & Herbed Filling\",\n        \"Description\": \"Rich NZ Saffron Nage, South Island Pork Chorizo, Burnt Leeks, Black Garlic and Squid Ink Aioli, Caramelized Fennel\",\n        \"Dietaries\": [\"gluten free\", \"dairy free\"],\n        \"Price\": 57\n      },\n      {\n        \"Dish Name\": \"Canterbury Duck Breast\",\n        \"Description\": \"Potato Fondant, Steamed Green Beans, Black Pudding, Crispy Kale, Red Cabbage Puree, Beetroot Gel, Fig & Port Jus\",\n        \"Dietaries\": [\"gluten free\", \"dairy free\"],\n        \"Price\": 54\n      },\n      {\n        \"Dish Name\": \"Fiordland Wild Caught Venison\",\n        \"Description\": \"Salsa Verde, Onion Crumble, Butternut Puree, Port Braised Shallots, Burnt Butter Emulsion, Savoy Cabbage, Duck Fat Potatoes\",\n        \"Dietaries\": [\"gluten free\", \"dairy free\"],\n        \"Price\": 59\n      }\n    ],\n    \"entrees\": [\n      {\n        \"Dish Name\": \"Cauliflower Panna Cotta\",\n        \"Description\": \"Red Currant Jelly, Coral Tuile, Capers, Caramelised Cauliflower, Saffron Foam\",\n        \"Dietaries\": [\"vegan\", \"dairy free\"],\n        \"Price\": 22\n      },\n      {\n        \"Dish Name\": \"Southland Beef Tartare\",\n        \"Description\": \"Rye Crostini, Beetroot Puree, Quail Egg Custard, Cured Egg Yolk\",\n        \"Dietaries\": [\"gluten free\", \"dairy free\"],\n        \"Price\": 26\n      },\n      {\n        \"Dish Name\": \"NZ Green Lip Mussels\",\n        \"Description\": \"South Island Kina Emulsion, Rēwena Flatbread\",\n        \"Dietaries\": [\"gluten free\"],\n        \"Price\": 26\n      },\n      {\n        \"Dish Name\": \"Merino Lamb Ribs\",\n        \"Description\": \"Salsa Verde, Pickled Currants, Smoked Lime Aioli, Pickles\",\n        \"Dietaries\": [\"gluten free\", \"dairy free\"],\n        \"Price\": 26\n      },\n      {\n        \"Dish Name\": \"Auld Gin Cured Ora King Salmon\",\n        \"Description\": \"Lemon And Prosecco Gel, Pomegranate, Roe, Dill Ash\",\n        \"Dietaries\": [\"gluten free\", \"dairy free\"],\n        \"Price\": 28\n      }\n    ],\n    \"desserts\": [\n      {\n        \"Dish Name\": \"Fiordland Manuka Honey and Wanaka Lavender Crème Brûlée\",\n        \"Description\": \"Madeleines, Honeycomb Tuile\",\n        \"Dietaries\": [\"gluten free\", \"contains nuts\"],\n        \"Price\": 32\n      },\n      {\n        \"Dish Name\": \"Apricot Frangipane Tart\",\n        \"Description\": \"Apricot Curd, Crème Anglaise, Kapiti Vanilla Bean Ice Cream\",\n        \"Dietaries\": [\"contains nuts\"],\n        \"Price\": 22\n      },\n      {\n        \"Dish Name\": \"Chocolate Delight\",\n        \"Description\": \"Rich Belgium Chocolate, Praline Base, Candied Peanuts, Central Otago Plum Ice Cream\",\n        \"Dietaries\": [\"contains nuts\"],\n        \"Price\": 24\n      },\n      {\n        \"Dish Name\": \"Selection Of Artisan Cheese, Dips and Crackers\",\n        \"Description\": \"\",\n        \"Dietaries\": [\"gluten free\", \"contains nuts\"],\n        \"Price\": 30\n      },\n      {\n        \"Dish Name\": \"Selection Of Artisan Sorbets\",\n        \"Description\": \"\",\n        \"Dietaries\": [\"vegan\", \"dairy free\"],\n        \"Price\": 18\n      }\n    ]\n  });\n\n//# sourceURL=webpack://restaurant/./src/pages/menuItems.js?");

/***/ }),

/***/ "./src/media/AntonSC-Regular.ttf":
/*!***************************************!*\
  !*** ./src/media/AntonSC-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04bf5842f1a5f3879b48.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/media/AntonSC-Regular.ttf?");

/***/ }),

/***/ "./src/media/Montserrat-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/media/Montserrat-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e687123cd4528224ce5.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/media/Montserrat-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/media/PioPio.svg":
/*!******************************!*\
  !*** ./src/media/PioPio.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1912e60a735eda4aa404.svg\";\n\n//# sourceURL=webpack://restaurant/./src/media/PioPio.svg?");

/***/ }),

/***/ "./src/media/background.svg":
/*!**********************************!*\
  !*** ./src/media/background.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"167b90bf1e7873fbe633.svg\";\n\n//# sourceURL=webpack://restaurant/./src/media/background.svg?");

/***/ }),

/***/ "./src/media/food.jpg":
/*!****************************!*\
  !*** ./src/media/food.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73e32da3fd35b6c6f43c.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/media/food.jpg?");

/***/ }),

/***/ "./src/media/milford.webp":
/*!********************************!*\
  !*** ./src/media/milford.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ce337ee2efe2aaf5725.webp\";\n\n//# sourceURL=webpack://restaurant/./src/media/milford.webp?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;