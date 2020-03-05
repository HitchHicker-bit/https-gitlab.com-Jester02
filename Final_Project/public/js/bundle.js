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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseBlock\", function() { return BaseBlock; });\n/* harmony import */ var _Classess_CourseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././Classess/CourseClass */ \"./application/Classess/CourseClass.js\");\n/* harmony import */ var _Classess_NewsClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././Classess/NewsClass */ \"./application/Classess/NewsClass.js\");\n/* harmony import */ var _Classess_MenuAndLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././Classess/MenuAndLogo */ \"./application/Classess/MenuAndLogo.js\");\n\r\n\r\n\r\n// import Logotype from '.././Classess/MenuAndLogo';\r\n\r\nconst BaseBlock = () => {\r\n\tfunction AddCourse(event) {\r\n\tconst CourseBlock = document.getElementById('CoursesBlock');\r\n\tlet Course = new _Classess_CourseClass__WEBPACK_IMPORTED_MODULE_0__[\"MyCourse\"]();\r\n\tCourse.render( CourseBlock );\r\n\tCourse.renderOptions()\r\n\t}\r\n\tfunction AddNews(event) {\r\n\t\tconst NewsBlock = document.getElementById('NewsBlock');\r\n\t\tlet MyNews = new _Classess_NewsClass__WEBPACK_IMPORTED_MODULE_1__[\"News\"]();\r\n\t\tMyNews.render(NewsBlock);\r\n\t\tMyNews.renderOptions(); \r\n\t}\r\n\tfunction AddMenu(event) {\r\n\t\tconst MenuBlock = document.getElementById('navigation-block');\r\n\t\tlet MyMenu = new _Classess_MenuAndLogo__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"]();\r\n\t\tMyMenu.render(MenuBlock);\r\n\t\tMyMenu.renderOptions();\r\n\t}\r\n\tconst ChangeLogo = document.getElementById('ImageChanger');\r\n\tfunction showFile(e) {\r\n\tconst MyLogo = document.getElementById('MyLogo');\r\n    var files = e.target.files;\r\n        console.log(files);\r\n   \t\tfor (var i = 0, f; f = files[i]; i++) {\r\n      \t\tif (!f.type.match('image.*')) continue;\r\n      \t\t\tvar fr = new FileReader();\r\n      \t\t\tfr.onload = (function(theFile) {\r\n        \t\t\treturn function(e) {\r\n          \t\t\t\tMyLogo.setAttribute('src', e.target.result);\r\n          \t\t\t\tlocalStorage.setItem('Logo', e.target.result);\r\n        \t\t\t};\r\n      \t\t\t})(f);\r\n      \t\tfr.readAsDataURL(f);\r\n    \t\t}\r\n  \t\t}\r\n\r\n\tChangeLogo.addEventListener('change', showFile, false);\r\n\tMyLogo.setAttribute('src',localStorage.getItem('Logo'))\r\n\tAddNewMenu.addEventListener('click', AddMenu);\r\n\tAddNewNews.addEventListener('click' , AddNews);\r\n\tAddNewCourse.addEventListener('click', AddCourse);\r\n}\r\n\r\n\t\r\n\n\n//# sourceURL=webpack:///./application/BaseBlock/BaseBlock.js?");

/***/ }),

/***/ "./application/Classess/CourseClass.js":
/*!*********************************************!*\
  !*** ./application/Classess/CourseClass.js ***!
  \*********************************************/
/*! exports provided: default, MyCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyCourse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyCourse\", function() { return MyCourse; });\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storageController */ \"./application/storageController.js\");\n\r\n \r\n\r\n\r\n\r\n\r\nclass MyCourse {\r\n\tconstructor( params = {} ){\r\n\r\n\t\tconst { id, title, url } = params;\r\n\r\n\t\tthis.id = id || uniqid__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\t\tthis.title = title || \"\";\r\n\t\tthis.url = url || \"\";\r\n\t\tthis.node = null;\r\n\t\tthis.type = \"course\";\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createItem( this );\r\n\t\tthis.deleteCourse = this.deleteCourse.bind(this);\r\n\t\tthis.addTitle = this.addTitle.bind(this);\r\n\t\tthis.addURL = this.addURL.bind(this);\r\n\t}\r\n\taddTitle(event){\r\n\t\tconst CourseBlock = document.getElementById('CoursesBlock');\r\n\t\tlet newTitleValue = event.target.value;\r\n\t\tthis.title = newTitleValue;\r\n\t\tthis.render( CourseBlock );\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData( this );\r\n\t}\r\n\taddURL(event){\r\n\t\tconst CourseBlock = document.getElementById('CoursesBlock');\r\n\t\tlet newUrlValue = event.target.value;\r\n\t\tthis.url = newUrlValue;\r\n\t\tthis.render( CourseBlock );\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData( this );\r\n\t}\r\n\tdeleteCourse(event){\r\n\t\tevent.target.closest('.DataOfCourses').remove();\r\n\t\tthis.node.remove();\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteData (this);\r\n\t}\r\n\trenderOptions(){\r\n\t\tconst opt = document.getElementById('custOptions');\r\n\r\n\t\tlet MyNewCourse = document.createElement('div');\r\n\t\t\tMyNewCourse.className = \"DataOfCourses\";\r\n\t\t\tMyNewCourse.dataset.id = this.id;\r\n\t\t\tMyNewCourse.innerHTML = \r\n\t\t\t`\r\n\t\t\t\t<input class=\"_title titleCourse\" type=\"text\" name=\"name\" value=\"${this.title}\">\r\n\t\t\t\t<input class=\"_url titleURL\" type=\"url\" name=\"url\" value=\"${this.url}\">\r\n\t\t\t\t<button class=\"_del DeleteFunc\" id=\"RemoveBtn\">&#10006;</button>\r\n\t\t\t`;\r\n\t\t\topt.appendChild(MyNewCourse);\r\n\r\n\t\t\tMyNewCourse.querySelector('._title').addEventListener('change', this.addTitle);\r\n\t\t\tMyNewCourse.querySelector('._url').addEventListener('change', this.addURL);\r\n\t\t\tMyNewCourse.querySelector('._del').addEventListener('click', this.deleteCourse);\r\n\t}\r\n\r\n\trender( target ){\r\n\t\tlet MyNewCourseShow = null;\r\n\t\tif( this.node ){\r\n\t\t\tMyNewCourseShow\t= this.node;\r\n\t\t} else {\r\n\t\t\tMyNewCourseShow = document.createElement('div');\r\n\t\t\tthis.node = MyNewCourseShow;\r\n\t\t\ttarget.appendChild(MyNewCourseShow);\r\n\t\t}\r\n\r\n\t\tMyNewCourseShow.className = \"iconsBlock\";\r\n\t\tMyNewCourseShow.dataset.id = this.id;\r\n\r\n\t\tif( this.url !== null || this.title !== null){\r\n\t\t\tMyNewCourseShow.innerHTML = \r\n\t\t\t`\r\n\t\t\t\t<img class=\"icons\" src=\"${this.url}\" />\r\n\t\t\t\t<span class=\"nameOfCourse\" id=\"nameOfCourse\">${this.title}</span>\r\n\t\t\t`;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./application/Classess/CourseClass.js?");

/***/ }),

/***/ "./application/Classess/MenuAndLogo.js":
/*!*********************************************!*\
  !*** ./application/Classess/MenuAndLogo.js ***!
  \*********************************************/
/*! exports provided: default, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storageController */ \"./application/storageController.js\");\n \r\n\r\n\r\n\r\nclass Menu {\r\n\tconstructor(params = {}){\r\n\t\tconst { id, title, href } = params;\r\n\t\tthis.addMenuList = this.addMenuList.bind(this);\r\n\t\tthis.removeMenuList = this.removeMenuList.bind(this);\r\n\t\tthis.addHrefList = this.addHrefList.bind(this);\r\n\t\tthis.id = id || uniqid__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\t\tthis.title = title || \"\";\r\n\t\tthis.href = href || \"\";\r\n\t\tthis.node = null;\r\n\t\tthis.type = \"menu\";\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createItem( this );\r\n\t}\r\n\taddMenuList(event){\r\n\t\tconst MenuBlock = document.getElementById('navigation-block');\r\n\t\tlet inputMenuValue = event.target.value;\r\n\t\tthis.title = inputMenuValue;\r\n\t\tthis.render( MenuBlock );\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData( this );\r\n\t}\r\n\taddHrefList(event){\r\n\t\tconst MenuBlock = document.getElementById('navigation-block');\r\n\t\tlet inputMenuHref = event.target.value;\r\n\t\tthis.href = inputMenuHref;\r\n\t\tthis.render( MenuBlock);\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData(this);\r\n\t}\r\n\tremoveMenuList(event){\r\n\t\tevent.target.closest('.ValuesOfMenu').remove();\r\n\t\tthis.node.remove();\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteData(this);\r\n\t\t}\r\n\trenderOptions(){\r\n\t\tconst MenuCustomBlock = document.getElementById('CustomMenuBlock');\r\n\t\tlet listCust = document.createElement('div');\r\n\t\t\tlistCust.className = 'ValuesOfMenu';\r\n\t\t\tlistCust.dataset.id = this.id;\r\n\t\t\tlistCust.innerHTML = \r\n\t\t\t`\r\n\t\t\t<input class=\"_ValMenu ValuesOfMenuLink\" value=\"${this.title}\">\r\n\t\t\t<input class=\"_Href HrefOfMenu\" value=\"${this.href}\">\r\n\t\t\t<button class=\"_DelMenu DeleteFuncMenu\" id=\"RemoveBtn\">&#10006;</button>\r\n\t\t\t`;\r\n\t\t\tMenuCustomBlock.appendChild(listCust);\r\n\t\t\tlistCust.querySelector('.DeleteFuncMenu').addEventListener('click', this.removeMenuList);\r\n\t\t\tlistCust.querySelector('.ValuesOfMenuLink').addEventListener('change', this.addMenuList);\r\n\t\t\tlistCust.querySelector('.HrefOfMenu').addEventListener('change', this.addHrefList);\r\n\t}\r\n\trender (target){\r\n\t\tlet\taList = null;\r\n\t\tif( this.node ){\r\n\t\t\taList = this.node;\r\n\t\t} else {\r\n\t\t\taList = document.createElement('div');\r\n\t\t\tthis.node =\taList;\r\n\t\t\ttarget.appendChild(aList);\r\n\t\t}\r\n\r\n\t\taList.className = \"navigation-list\";\r\n\t\taList.dataset.id = this.id;\r\n\r\n\t\tif( this.href !== null || this.title !== null){\r\n\t\t\taList.innerHTML = \r\n\t\t\t`\r\n\t\t\t<a class=\"navigation-li\" href=\"${this.href}\">${this.title}</a>\r\n\t\t\t`;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./application/Classess/MenuAndLogo.js?");

/***/ }),

/***/ "./application/Classess/NewsClass.js":
/*!*******************************************!*\
  !*** ./application/Classess/NewsClass.js ***!
  \*******************************************/
/*! exports provided: default, News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return News; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"News\", function() { return News; });\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storageController */ \"./application/storageController.js\");\n\t \r\n\r\n\t\r\n\r\n\tclass News {\r\n\tconstructor(params = {}){\r\n\t\tconst { id, text } = params;\r\n\t\tthis.AddNews = this.AddNews.bind(this);\r\n\t\tthis.DeleteNews = this.DeleteNews.bind(this);\r\n\t\tthis.date = new Date();\r\n\t\tthis.id = id || uniqid__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\t\tthis.text = text || \"\";\r\n\t\tthis.node = null;\r\n\t\tthis.type = \"news\";\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createItem( this );\r\n\t}\r\n\tDeleteNews(event){\r\n\t\tevent.target.closest('.ValueOfNews').remove();\r\n\t\tthis.node.remove();\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteData (this);\r\n\t\t}\r\n\tAddNews(event){\r\n\t\tconst NewsBlock = document.getElementById('NewsBlock');\r\n\t\tlet newTextValue = event.target.value;\r\n\t\tthis.text = newTextValue;\r\n\t\tthis.render(NewsBlock);\r\n\t\t_storageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData( this );\r\n\t}\r\n\trenderOptions(){\r\n\t\tconst NewsCustomValues = document.getElementById('NewsCustomBlock');\r\n\t\tlet newsCust = document.createElement('div');\r\n\t\t\tnewsCust.className = \"ValueOfNews\";\r\n\t\t\tnewsCust.dataset.id = this.id;\r\n\t\t\tnewsCust.innerHTML = \r\n\t\t\t`\r\n\t\t\t<textarea type=\"text\" class=\"_CustNews ToCustomNews\">${this.text}</textarea>\r\n\t\t\t<button class=\"_delNews DeleteFuncNews\" id=\"RemoveBtn\">&#10006;</button>\r\n\t\t\t`;\r\n\t\t\tNewsCustomValues.appendChild(newsCust);\r\n\t\t\tnewsCust.querySelector('.DeleteFuncNews').addEventListener('click',this.DeleteNews);\r\n\t\t\tnewsCust.querySelector('.ToCustomNews').addEventListener('change', this.AddNews);\r\n\t\t\tnewsCust.querySelectorAll('ToCustomNews').forEach(function(input){\r\n\t\t\t\tlet idOfCustInput = Number(input.dataset.id);\r\n\t\t\t\tnews.querySelectorAll('.areaNews').forEach(function(input2){\r\n\t\t\t\t\tlet idOfShowInput = Number(input2.dataset.id);\r\n\t\t\t\t\tif (idOfCustInput == idOfShowInput){\r\n\t\t\t\t\t\tinput.value = input2.value;\r\n\t\t\t\t\t}\r\n\t\t\t\t}) \r\n\t\t\t})\r\n\t}\r\n\trender( target ){\r\n\t\tlet news = null;\r\n\t\tif( this.node ){\r\n\t\t\tnews = this.node;\r\n\t\t} else {\r\n\t\t\tnews = document.createElement('div');\r\n\t\t\tthis.node = news;\r\n\t\t\ttarget.appendChild(news);\r\n\t\t}\r\n\r\n\t\tnews.className = \"NewsData\";\r\n\t\tnews.dataset.id = this.id;\r\n\r\n\t\tif( this.text !== null){\r\n\t\t\tnews.innerHTML = \r\n\t\t\t`\r\n\t\t\t<label class=\"newsList\" id=\"dataLabel\">${\"Новость\"}<span class=\"TimeNow\" id=\"DateToday\">${this.date.getFullYear() + '/' + this.date.getMonth() + '/'+ this.date.getDate()}</span></label>\r\n\t\t\t<textarea class=\"areaNews\" id=\"dataNews\" value=\"\" disabled>${this.text}</textarea>\r\n\t\t\t`;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./application/Classess/NewsClass.js?");

/***/ }),

/***/ "./application/MainController.js":
/*!***************************************!*\
  !*** ./application/MainController.js ***!
  \***************************************/
/*! exports provided: mainControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainControl\", function() { return mainControl; });\n/* harmony import */ var _baseHandlers_baseHandlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseHandlers/baseHandlers.js */ \"./application/baseHandlers/baseHandlers.js\");\n/* harmony import */ var _BaseBlock_BaseBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseBlock/BaseBlock.js */ \"./application/BaseBlock/BaseBlock.js\");\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageController */ \"./application/storageController.js\");\n\r\n\r\n\r\nconst mainControl = () => {\r\n\tObject(_baseHandlers_baseHandlers_js__WEBPACK_IMPORTED_MODULE_0__[\"baseHandlers\"])();\r\n\tObject(_BaseBlock_BaseBlock_js__WEBPACK_IMPORTED_MODULE_1__[\"BaseBlock\"])();\r\n\t_storageController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reinitialization();\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./application/MainController.js?");

/***/ }),

/***/ "./application/baseHandlers/baseHandlers.js":
/*!**************************************************!*\
  !*** ./application/baseHandlers/baseHandlers.js ***!
  \**************************************************/
/*! exports provided: baseHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseHandlers\", function() { return baseHandlers; });\nconst showEditorButton = ( config ) => {\r\n\r\n\tconst { blockId, targetIds, handlerItemId, popupId, closeId  } = config;\r\n\r\n\tconst block = document.getElementById( blockId );\r\n\tconst handler = document.getElementById( handlerItemId );\r\n\tconst popup = document.getElementById( popupId );\r\n\tconst close = document.getElementById( closeId );\r\n\r\n\tif( block ){\r\n\t\tblock.addEventListener('mouseenter', () => {\r\n\t\t\ttargetIds.forEach( targetId => {\r\n\t\t\t\tconst target = document.getElementById( targetId );\r\n\t\t\t\ttarget.classList.add('show');\r\n\t\t\t});\r\n\t\t});\r\n\r\n\t\tblock.addEventListener('mouseleave', () => {\r\n\t\t\ttargetIds.forEach( targetId => {\r\n\t\t\t\tconst target = document.getElementById( targetId );\r\n\t\t\t\ttarget.classList.remove('show');\r\n\t\t\t});\r\n\t\t});\t\r\n\t}\t\r\n\r\n\tif( handler && popup ){\r\n\t\thandler.addEventListener('click', () => {\r\n\t\t\tpopup.classList.add('show');\r\n\t\t});\r\n\t}\r\n\t\r\n\tif( close && popup ){\r\n\t\tclose.addEventListener('click', () => {\r\n\t\t\tpopup.classList.remove('show');\r\n\t\t});\r\n\t}\r\n\t\r\n}\r\n\r\n\r\nconst baseHandlers = () => {\r\n\r\n\tshowEditorButton({\r\n\t\tblockId: 'CoursesBlock',\r\n\t\ttargetIds: ['Customization'],\r\n\t\thandlerItemId: 'Customization',\r\n\t\tpopupId: 'CustomBlock',\r\n\t\tcloseId: 'Save'\r\n\t});\r\n\t\t\r\n\tshowEditorButton({\r\n\t\tblockId: 'NewsBlock',\r\n\t\ttargetIds: ['NewsChanger'],\r\n\t\thandlerItemId: 'NewsChanger',\r\n\t\tpopupId: 'NewsCustom',\r\n\t\tcloseId: 'SaveNews'\r\n\t});\r\n\r\n\tshowEditorButton({\r\n\t\tblockId: 'navigation-block',\r\n\t\ttargetIds: ['customMenu', 'changeLogo'],\r\n\t\thandlerItemId: 'customMenu',\r\n\t\tpopupId: 'MainCustomMenu',\r\n\t\tcloseId: 'SaveMenu'\r\n\t});\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./application/baseHandlers/baseHandlers.js?");

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

/***/ "./application/storageController.js":
/*!******************************************!*\
  !*** ./application/storageController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Classess_CourseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classess/CourseClass */ \"./application/Classess/CourseClass.js\");\n/* harmony import */ var _Classess_NewsClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classess/NewsClass */ \"./application/Classess/NewsClass.js\");\n/* harmony import */ var _Classess_MenuAndLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classess/MenuAndLogo */ \"./application/Classess/MenuAndLogo.js\");\n\r\n\r\n\r\nconst StorageController = {\r\n    storage: {\r\n        course: [],\r\n        news: []\r\n    },\r\n\r\n    reinitialization: () => {\r\n\r\n        let storage = localStorage.getItem('MyProject');\r\n        if( storage ){\r\n            storage = JSON.parse( storage );\r\n        }\r\n\r\n        Object.keys(storage).forEach( key => {\r\n            storage[ key ].map( item => {\r\n                let reinitedItem = null;\r\n                if( item.type === 'course'){\r\n                    const rootNode = document.getElementById('CoursesBlock');\r\n                    reinitedItem = new _Classess_CourseClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( item );\r\n                    reinitedItem.render(rootNode);\r\n                    reinitedItem.renderOptions();\r\n                }\r\n            });\r\n        });\r\n        Object.keys(storage).forEach( key => {\r\n            storage[ key ].map( item => {\r\n                let reinitedItem = null;\r\n                if( item.type === 'news'){\r\n                    const rootNode = document.getElementById('NewsBlock');\r\n                    reinitedItem = new _Classess_NewsClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( item );\r\n                    reinitedItem.render(rootNode);\r\n                    reinitedItem.renderOptions();\r\n                }\r\n            });\r\n        });\r\n         Object.keys(storage).forEach( key => {\r\n            storage[ key ].map( item => {\r\n                let reinitedItem = null;\r\n                if( item.type === 'menu'){\r\n                    const rootNode = document.getElementById('navigation-block');\r\n                    reinitedItem = new _Classess_MenuAndLogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]( item );\r\n                    reinitedItem.render(rootNode);\r\n                    reinitedItem.renderOptions();\r\n                }\r\n            });\r\n        });\r\n\r\n    },\r\n\r\n    createItem: ( obj ) => {\r\n        if( obj.type ){\r\n            if( StorageController.storage[ obj.type ] ){\r\n            } else {\r\n                StorageController.storage[ obj.type ] = [];\r\n            }\r\n            StorageController.storage[ obj.type ].push( obj );\r\n\r\n            console.log( StorageController.storage[ obj.type ] );\r\n        }\r\n    },\r\n\r\n    saveData: ( obj ) => {\r\n        // Find our obj\r\n        const itemInStorage = StorageController.storage[ obj.type ].find( item => item.id === obj.id );\r\n        console.log(itemInStorage);\r\n        localStorage.setItem('MyProject', JSON.stringify( StorageController.storage ) );\r\n    },\r\n\r\n    deleteData: (obj) => {\r\n        let storage = localStorage.getItem('MyProject');\r\n        if( storage ){\r\n            storage = JSON.parse( storage );\r\n        }\r\n        for (var i = 0; i<storage[obj.type].length; i++){\r\n            console.log(storage[obj.type][i].id);\r\n            if (storage[obj.type][i].id == obj.id){\r\n                storage[obj.type].splice(i, 1);\r\n                 localStorage.setItem('MyProject', JSON.stringify( storage ) );\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (StorageController);\r\n\n\n//# sourceURL=webpack:///./application/storageController.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/* \n(The MIT License)\nCopyright (c) 2014-2019 Halász Ádám <mail@adamhalasz.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = process && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, mac, networkInterfaces; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/uniqid/index.js?");

/***/ })

/******/ });