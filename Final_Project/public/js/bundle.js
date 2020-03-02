/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/BaseBlock/BaseBlock.js":
/*!********************************************!*\
  !*** ./application/BaseBlock/BaseBlock.js ***!
  \********************************************/
/*! exports provided: BaseBlock */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (153:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\t} \\n| \\taddNews.addEventListener('click',NewsAdd);\\n> <<<<<<< HEAD\\n| \\t// function MenuRendering (){\\n| \\t// function addMenuList(event){\");\n\n//# sourceURL=webpack:///./application/BaseBlock/BaseBlock.js?");

/***/ }),

/***/ "./application/MainController.js":
/*!***************************************!*\
  !*** ./application/MainController.js ***!
  \***************************************/
/*! exports provided: mainControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainControl\", function() { return mainControl; });\n/* harmony import */ var _baseHandlers_baseHandlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseHandlers/baseHandlers.js */ \"./application/baseHandlers/baseHandlers.js\");\n/* harmony import */ var _BaseBlock_BaseBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseBlock/BaseBlock.js */ \"./application/BaseBlock/BaseBlock.js\");\n\r\n\r\n\r\nconst mainControl = () => {\r\n\tglobal.Counter = 0;\r\n\tglobal.Counter_2 = 0;\r\n\tglobal.Counter_3 = 0;\r\n\tglobal.MenuCustomBlock = document.getElementById('CustomMenuBlock');\r\n\tglobal.NewsCustomValues = document.getElementById('NewsCustomBlock');\r\n\tglobal.opt = document.getElementById('custOptions');\r\n\tglobal.DataFromLocal = localStorage.getItem('CourseObject');\r\n    global.NewsFromLocal = localStorage.getItem('NewsObject');\r\n    global.MenuFromLocal = localStorage.getItem('MenuObj');\r\n    global.ParsedData = JSON.parse(DataFromLocal);\r\n    global.ParsedNews = JSON.parse(NewsFromLocal);\r\n    global.ParsedMenu = JSON.parse(MenuFromLocal); \r\n    global.BtnCustomCourse = document.getElementById('Customization');\r\n\tglobal.BtnCustomNews = document.getElementById('NewsChanger');\r\n\tglobal.ChangeLogo = document.getElementById('changeLogo');\r\n\tglobal.Custom = document.getElementById('customMenu');\r\n\tglobal.CourseBlock = document.getElementById('CoursesBlock');\r\n\tglobal.NewsBlock = document.getElementById('NewsBlock');\r\n\tglobal.MenuBlock = document.getElementById('navigation-block');\r\n\tglobal.CoursesBlockCust = document.getElementById('CustomBlock')\r\n\tglobal.MenuCustom = document.getElementById('MainCustomMenu');\r\n\tglobal.CloseBtn = document.getElementById('Save');\r\n\tglobal.CloseNews = document.getElementById('SaveNews');\r\n\tglobal.MenuSave = document.getElementById('SaveMenu');\r\n\tglobal.addNews = document.getElementById('AddNewNews');\r\n\tglobal.AddList = document.getElementById('AddNewMenu');\r\n\tglobal.ParsedData = localStorage.getItem('MyProject');\r\n\tglobal.MainData = JSON.parse(ParsedData);\r\n\tglobal.myObj2 = {};\r\n\tglobal.myObj = {};\r\n\tglobal.myObj3 = {};\r\n\tObject(_baseHandlers_baseHandlers_js__WEBPACK_IMPORTED_MODULE_0__[\"baseHandlers\"])();\r\n\tObject(_BaseBlock_BaseBlock_js__WEBPACK_IMPORTED_MODULE_1__[\"BaseBlock\"])();\r\n}\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./application/MainController.js?");

/***/ }),

/***/ "./application/baseHandlers/baseHandlers.js":
/*!**************************************************!*\
  !*** ./application/baseHandlers/baseHandlers.js ***!
  \**************************************************/
/*! exports provided: baseHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseHandlers\", function() { return baseHandlers; });\nconst baseHandlers = () => {\r\nCourseBlock.onmouseenter = function () {\r\n\t\tBtnCustomCourse.classList.add('show');\r\n}\r\nNewsBlock.onmouseenter = function () {\r\n\t\tBtnCustomNews.classList.add('show');\r\n\t}\r\nMenuBlock.onmouseenter = function () {\r\n\t\tChangeLogo.classList.add('show');\r\n\t\tCustom.classList.add('show');\r\n}\r\nCourseBlock.onmouseleave = function() {\r\n\tBtnCustomCourse.classList.remove('show');\r\n}\r\nNewsBlock.onmouseleave = function(){\r\n\tBtnCustomNews.classList.remove('show');\r\n}\r\nMenuBlock.onmouseleave = function(){\r\n\tChangeLogo.classList.remove('show');\r\n\tCustom.classList.remove('show');\r\n}\r\nfunction ShowingCoursesCust (event){\r\n    \tCoursesBlockCust.classList.add('show');\r\n    }\r\nBtnCustomCourse.addEventListener('click',ShowingCoursesCust);\r\nfunction CloseCoursesCust (event){\r\n\t\tCoursesBlockCust.classList.remove('show');\r\n}\r\nCloseBtn.addEventListener('click',CloseCoursesCust);\r\nfunction ShowNewsCustom (event){\r\n\tNewsCustom.classList.add('show');\r\n}\r\nBtnCustomNews.addEventListener('click', ShowNewsCustom);\r\nfunction CloseNewsCustom (event) {\r\n\tNewsCustom.classList.remove('show');\r\n}\r\nCloseNews.addEventListener('click', CloseNewsCustom);\r\nfunction CloseMenuCustom (event) {\r\n\tMenuCustom.classList.remove('show');\r\n}\r\nfunction OpenMenuCustom (event){\r\n\tMenuCustom.classList.add('show');\r\n}\r\nCustom.addEventListener('click', OpenMenuCustom);\r\nMenuSave.addEventListener('click', CloseMenuCustom);\r\n}\r\n\n\n//# sourceURL=webpack:///./application/baseHandlers/baseHandlers.js?");

/***/ }),

/***/ "./application/demo/someFn.js":
/*!************************************!*\
  !*** ./application/demo/someFn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\r\n    Экспортируешь функцию\\класс\\переменную\r\n*/\r\nconst someFunction = () => {\r\n\r\n    console.log('some function');\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (someFunction);\n\n//# sourceURL=webpack:///./application/demo/someFn.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo_someFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo/someFn */ \"./application/demo/someFn.js\");\n/* harmony import */ var _MainController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainController */ \"./application/MainController.js\");\n\r\n\r\n\r\nconsole.log('webpack is working');\r\n/*\r\n    Функцию импортируешь и используешь\r\n*/\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    Object(_demo_someFn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_MainController__WEBPACK_IMPORTED_MODULE_1__[\"mainControl\"])();\r\n});\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ })

/******/ });