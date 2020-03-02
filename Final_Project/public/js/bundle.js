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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseBlock\", function() { return BaseBlock; });\n/* harmony import */ var _Classess_CourseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././Classess/CourseClass */ \"./application/Classess/CourseClass.js\");\n/* harmony import */ var _Classess_NewsClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././Classess/NewsClass */ \"./application/Classess/NewsClass.js\");\n/* harmony import */ var _Classess_MenuAndLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././Classess/MenuAndLogo */ \"./application/Classess/MenuAndLogo.js\");\n\r\n\r\n\r\n\r\nconst BaseBlock = () => {\r\nfunction RenderSave (){\r\n\t\tfunction addTitle(event){\r\n\t\t\tlet newTitle = CourseBlock.querySelectorAll('.nameOfCourse')\r\n\t\t\tnewTitle.forEach(function(item){\r\n\t\t\t\tvar DataTitleId = Number(item.dataset.id);\r\n\t\t\t\tif (Number(event.target.dataset.id) == DataTitleId){\r\n\t\t\t\t\titem.textContent = null;\r\n\t\t\t\t\titem.textContent += event.target.value;\r\n\t\t\t\t\tfor (var i = 0; i<MainData.Courses.length; i++){\r\n\t\t\t\t\t\tif (DataTitleId -1 == i){\r\n\t\t\t\t\t\t\tMainData.Courses[i].title = event.target.value;\r\n\t\t\t\t\t\t\tlocalStorage.setItem('MyProject', JSON.stringify(MainData));\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\tfunction addURL(event){\r\n\t\tlet newURL = CourseBlock.querySelectorAll('.icons');\r\n\t\tnewURL.forEach(function(item){\r\n\t\t\tvar DataIdUrl = Number(item.dataset.id);\r\n\t\t\tif (Number(event.target.dataset.id) == DataIdUrl){\r\n\t\t\t\titem.removeAttribute('src');\r\n\t\t\t\titem.setAttribute('src', event.target.value);\r\n\t\t\t\tfor (var i = 0; i<MainData.Courses.length; i++){\r\n\t\t\t\t\t\tif (DataIdUrl -1 == i){\r\n\t\t\t\t\t\t\tMainData.Courses[i].URL = event.target.value;\r\n\t\t\t\t\t\t\tlocalStorage.setItem('MyProject', JSON.stringify(MainData));\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n\tfunction deleteCourse(event){\r\n\t\tCounter_2--;\r\n\t\tlet idblock = Number(event.target.parentNode.dataset.id);\r\n\t\tevent.target.parentNode.remove();\r\n\t\tlet iconsId = CourseBlock.querySelectorAll('.iconsBlock');\r\n\t\t\ticonsId.forEach(function(block){\r\n\t\t\t\tvar idOfIconBlock = Number(block.dataset.id);\r\n\t\t\t\tif (idblock == idOfIconBlock){\r\n\t\t\t\t\tblock.remove();\r\n\t\t\t\t\tMainData.Courses.splice(idOfIconBlock -1, 1);\r\n\t\t\t\t\tlocalStorage.setItem('MyProject', JSON.stringify(MainData));\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t\t}\r\n\t\t\tfor (var i = 0; i<MainData.Courses.length; i++){\r\n\t\t\t\tconsole.log(MainData.Courses[i]);\r\n\t\t\t\tCounter++;\r\n\t\t\t\tlet MyNewCourse = document.createElement('div');\r\n\t\t\t\t\tMyNewCourse.className = \"DataOfCourses\";\r\n\t\t\t\t\tMyNewCourse.dataset.id = Counter;\r\n\t\t\t\t\tMyNewCourse.innerHTML = \r\n\t\t\t\t\t\t`\r\n\t\t\t\t\t\t<input class=\"titleCourse\" type=\"text\" name=\"name\"data-id=\"${Counter}\">\r\n\t\t\t\t\t\t<input class=\"titleURL\" type=\"url\" name=\"url\" data-id=\"${Counter}\">\r\n\t\t\t\t\t\t<button class=\"DeleteFunc\" id=\"RemoveBtn\">&#10006;</button>\r\n\t\t\t\t\t\t`;\r\n\t\t\t\t\topt.appendChild(MyNewCourse);\r\n\t\t\t\t\tMyNewCourse.querySelector('.titleCourse').addEventListener('input', addTitle);\r\n\t\t\t\t\tMyNewCourse.querySelector('.titleURL').addEventListener('input', addURL);\r\n\t\t\t\t\tMyNewCourse.querySelector('.DeleteFunc').addEventListener('click', deleteCourse);\r\n\t\t\t\t\tMyNewCourse.querySelector('.titleCourse').value =MainData.Courses[i].title ;\r\n\t\t\t\t\tMyNewCourse.querySelector('.titleURL').value = MainData.Courses[i].URL;\r\n\t\t\t\tlet MyNewCourseShow = document.createElement('div');\r\n\t\t\t\t\tMyNewCourseShow.className = \"iconsBlock\";\r\n\t\t\t\t\tMyNewCourseShow.dataset.id = Counter;\r\n\t\t\t\t\tMyNewCourseShow.innerHTML = \r\n\t\t\t\t\t`\r\n\t\t\t\t\t<img class=\"icons\" src=\"${MainData.Courses[i].URL}\"data-id=\"${Counter}\" />\r\n\t\t\t\t\t<span class=\"nameOfCourse\"data-id=\"${Counter}\"  id=\"nameOfCourse\">${MainData.Courses[i].title}</span>\r\n\t\t\t\t\t`;\r\n\t\t\t\t\tCourseBlock.appendChild(MyNewCourseShow);\r\n\t\t\t}\t\r\n\t}\r\n\tfunction AddCourse (event){\r\n\t\tCounter++;\r\n\t\tlet Course = new _Classess_CourseClass__WEBPACK_IMPORTED_MODULE_0__[\"MyCourse\"]();\r\n\t\tCourse.render();\r\n    \tlocalStorage.setItem('CourseID'+Counter, JSON.stringify(myObj));\r\n\t}\r\n\tAddNewCourse.addEventListener('click', AddCourse);\r\n\tfunction RenderNews (){\r\nlet date = new Date();\r\nfunction DeleteNews(event){\r\n\t\t\tCounter_2--;\r\n\t\tlet idblock = Number(event.target.parentNode.dataset.id);\r\n\t\tevent.target.parentNode.remove();\r\n\t\tNewsBlock.querySelector('.NewsData[data-id=\"'+event.target.dataset.id+'\"]').remove();\r\n\t\tMainData.News.splice(event.target.dataset.id - 1, 1);\r\n\t\tlocalStorage.setItem('MyProject', JSON.stringify(MainData));\r\n\t\t}\r\nfunction AddNews(event){\r\n\t\tlet News = NewsBlock.querySelectorAll('.areaNews');\r\n\t\t\tNews.forEach(function(text){\r\n\t\t\t\tlet idOfNews = Number(text.dataset.id);\r\n\t\t\t\tif (Number(event.target.dataset.id) == idOfNews){\r\n\t\t\t\t\ttext.value = event.target.value;\r\n\t\t\t\t\tfor (var i = 0; i<MainData.News.length; i++){\r\n\t\t\t\t\t\tif (idOfNews -1 == i){\r\n\t\t\t\t\t\t\tMainData.News[i].Text = event.target.value;\r\n\t\t\t\t\t\t\tlocalStorage.setItem('MyProject', JSON.stringify(MainData));\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\t\tfor (var i = 0; i<MainData.News.length; i++){\r\n\t\t\tCounter_2++;\r\n\t\tlet news = document.createElement('div');\r\n\t\t\tnews.className = \"NewsData\";\r\n\t\t\tnews.dataset.id = Counter_2;\r\n\t\t\tnews.innerHTML = \r\n\t\t\t`\r\n\t\t\t<label class=\"newsList\" id=\"dataLabel\">${\"Новость\"+Counter_2}<span class=\"TimeNow\" id=\"DateToday\">${date.getFullYear() + '/' + date.getMonth() + '/'+ date.getDate()}</span></label>\r\n\t\t\t<textarea class=\"areaNews\" id=\"dataNews\" data-id=\"${Counter_2}\" disabled>${MainData.News[i].Text}</textarea>\r\n\t\t\t`;\r\n\t\t\tNewsBlock.appendChild(news);\r\n\t\tlet newsCust = document.createElement('div');\r\n\t\t\tnewsCust.className = \"ValueOfNews\";\r\n\t\t\tnewsCust.innerHTML = \r\n\t\t\t`\r\n\t\t\t<textarea type=\"text\" class=\"ToCustomNews\" data-id=\"${Counter_2}\">${MainData.News[i].Text}</textarea>\r\n\t\t\t<button class=\"DeleteFuncNews\" id=\"RemoveBtn\" data-id=\"${Counter_2}\">&#10006;</button>\r\n\t\t\t`;\r\n\t\t\tNewsCustomValues.appendChild(newsCust);\r\n\t\t\tnewsCust.querySelector('.DeleteFuncNews').addEventListener('click', DeleteNews);\r\n\t\t\tnewsCust.querySelector('.ToCustomNews').addEventListener('change',AddNews);\r\n\t\t\tnewsCust.querySelectorAll('ToCustomNews').forEach(function(input){\r\n\t\t\t\tlet idOfCustInput = Number(input.dataset.id);\r\n\t\t\t\tnews.querySelectorAll('.areaNews').forEach(function(input2){\r\n\t\t\t\t\tlet idOfShowInput = Number(input2.dataset.id);\r\n\t\t\t\t\tif (idOfCustInput == idOfShowInput){\r\n\t\t\t\t\t\tinput.value = input2.value;\r\n\t\t\t\t\t}\r\n\t\t\t\t}) \r\n\t\t\t})\r\n\t\t}\r\n}\r\n\tfunction NewsAdd(event){\r\n\t\tCounter_2++;\r\n\t\tlet MyNews = new _Classess_NewsClass__WEBPACK_IMPORTED_MODULE_1__[\"News\"]();\r\n\t\tMyNews.render();\r\n    \tlocalStorage.setItem('NewsID'+Counter_2, JSON.stringify(myObj2));\r\n\t} \r\n\taddNews.addEventListener('click',NewsAdd);\r\n\r\n\t// function MenuRendering (){\r\n\t// function addMenuList(event){\r\n\t// \tlet MenuItems = MenuBlock.querySelectorAll('.navigation-li');\r\n\t// \t\tMenuItems.forEach(function(item){\r\n\t// \t\tlet idOfList = Number(item.dataset.id);\r\n\t// \t\tconsole.log(item.dataset.id)\r\n\t// \t\tif (Number(event.target.dataset.id) == idOfList){\r\n\t// \t\t\titem.innerText = event.target.value;\r\n\t// \t\t\t\tfor (var i = 0; i<ParsedMenu.length; i++){\r\n\t// \t\t\t\t\tif (idOfList - 1 == i){\r\n\t// \t\t\t\t\t\tParsedMenu[i].list = event.target.value;\r\n\t// \t\t\t\t\t\tlocalStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));\r\n\t// \t\t\t\t\t}\r\n\t// \t\t\t\t}\r\n\t// \t\t\t\t}\r\n\t// \t\t\t})\r\n\t// \t}\r\n\t// function removeMenuList(event){\r\n\t// \tCounter_3--;\r\n\t// \tlet idblock = Number(event.target.parentNode.dataset.id);\r\n\t// \tevent.target.parentNode.remove();\r\n\t// \tlet MenuItems = MenuBlock.querySelectorAll('.navigation-li');\r\n\t// \t\tMenuItems.forEach(function(item){\r\n\t// \t\t\tlet idOfList = Number(item.dataset.id);\r\n\t// \t\t\tif (idblock == idOfList){\r\n\t// \t\t\t\titem.remove();\r\n\t// \t\t\t\tParsedMenu.splice(idOfList - 1, 1);\r\n\t// \t\t\t\tlocalStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));\r\n\t// \t\t\t}\r\n\t// \t\t})\r\n\t// \t}\r\n\t// \tfor (var i = 0; i<ParsedMenu.length; i++){\r\n\t// \t\tCounter_3++;\r\n\t// \t\tlet list = document.createElement('a');\r\n\t// \t\tlist.className = \"navigation-li\";\r\n\t// \t\tlist.dataset.id = Counter_3;\r\n\t// \t\tlist.innerText = ParsedMenu[i].list;\r\n\t// \t\tlist.href = 'test';\r\n\t// \t\tMenuBlock.appendChild(list);\r\n\t// \tlet listCust = document.createElement('div');\r\n\t// \t\tlistCust.className = 'ValuesOfMenu';\r\n\t// \t\tlistCust.dataset.id = Counter_3;\r\n\t// \t\tlistCust.innerHTML = \r\n\t// \t\t`\r\n\t// \t\t<input class=\"ValuesOfMenuLink\" data-id=\"${Counter_3}\">\r\n\t// \t\t<button class=\"DeleteFuncMenu\" id=\"RemoveBtn\">&#10006;</button>\r\n\t// \t\t`;\r\n\t// \t\tMenuCustomBlock.appendChild(listCust);\r\n\r\n\t// \t\tMenuCustomBlock.querySelectorAll('.DeleteFuncMenu').forEach(function(button){\r\n\t// \t\t\tbutton.addEventListener('click', removeMenuList);\r\n\t// \t\t})\r\n\t// \t\tMenuCustomBlock.querySelectorAll('.ValuesOfMenuLink').forEach(function(input){\r\n\t// \t\t\tinput.addEventListener('change', addMenuList);\r\n\t// \t\t})\r\n\t// \t\tMenuCustomBlock.querySelector('.DeleteFuncMenu').addEventListener('click', removeMenuList);\r\n\t// \t\tMenuCustomBlock.querySelector('.ValuesOfMenuLink').addEventListener('change', addMenuList);\r\n\r\n\t// \t\t\tMenuCustomBlock.querySelectorAll('.ValuesOfMenuLink').forEach(function(item){\r\n\t// \t\t\t\tMenuBlock.querySelectorAll('.navigation-li').forEach(function(item2){\r\n\t// \t\t\t\t\tif (Number(item.dataset.id) == Number(item2.dataset.id)){\r\n\t// \t\t\t\t\t\titem.value = item2.innerText;\r\n\t// \t\t\t\t\t}\r\n\t// \t\t\t\t})\r\n\t// \t\t\t})\r\n\t// \t}\r\n\t// }\r\n\t// function MenuAdding (event) {\r\n\t// \tCounter_3++;\r\n\t// \tlet MyList = new Menu();\r\n\t// \tMyList.render();\r\n\t// \tlocalStorage.setItem('ListID'+Counter_3, JSON.stringify(myObj3));\r\n\t// }\r\n\t// AddList.addEventListener('click', MenuAdding);\r\n\t// MenuRendering();\r\n\tRenderNews();\r\n\tRenderSave();\t\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./application/BaseBlock/BaseBlock.js?");

/***/ }),

/***/ "./application/Classess/CourseClass.js":
/*!*********************************************!*\
  !*** ./application/Classess/CourseClass.js ***!
  \*********************************************/
/*! exports provided: default, MyCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyCourse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyCourse\", function() { return MyCourse; });\n\r\n\tclass MyCourse {\r\n\tconstructor(){\r\n\t\tthis.deleteCourse = this.deleteCourse.bind(this);\r\n\t\tthis.addTitle = this.addTitle.bind(this);\r\n\t\tthis.addURL = this.addURL.bind(this);\r\n\t}\r\n\taddTitle(event){\r\n\t\tlet newTitle = CourseBlock.querySelectorAll('.nameOfCourse')\r\n\t\tnewTitle.forEach(function(item){\r\n\t\t\tlet DataTitleId = Number(item.dataset.id);\r\n\t\t\tif (Number(event.target.dataset.id) == DataTitleId){\r\n\t\t\t\titem.textContent = null;\r\n\t\t\t\titem.textContent += event.target.value;\r\n\t\t\t\tmyObj[\"title\"] = event.target.value;\r\n\t\t\t\tlocalStorage.setItem('CourseID'+Counter, JSON.stringify(myObj));\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n\taddURL(event){\r\n\t\tlet newURL = CourseBlock.querySelectorAll('.icons');\r\n\t\tnewURL.forEach(function(item){\r\n\t\t\tlet DataIdUrl = Number(item.dataset.id);\r\n\t\t\tif (Number(event.target.dataset.id) == DataIdUrl){\r\n\t\t\t\titem.removeAttribute('src');\r\n\t\t\t\titem.setAttribute('src', event.target.value);\r\n\t\t\t\tmyObj[\"URL\"] = event.target.value;\r\n\t\t\t\tlocalStorage.setItem('CourseID'+Counter, JSON.stringify(myObj));\r\n\t\t\t\tlet CrsObj = localStorage.getItem('CourseID'+Counter);\r\n\t\t\t\tlet Data = JSON.parse(CrsObj);\r\n\t\t\t\tMainData.Courses.push(Data);\r\n\t\t\t\tlocalStorage.removeItem('CourseID'+Counter);\r\n  \t\t\t\tlocalStorage.setItem('MyProject', JSON.stringify(MainData));\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n\tdeleteCourse(event){\r\n\t\tCounter--;\r\n\t\tlet idblock = Number(event.target.parentNode.dataset.id);\r\n\t\tevent.target.parentNode.remove();\r\n\t\tlet iconsId = CourseBlock.querySelectorAll('.iconsBlock');\r\n\t\t\ticonsId.forEach(function(block){\r\n\t\t\t\tlet idOfIconBlock = Number(block.dataset.id);\r\n\t\t\t\tif (idblock == idOfIconBlock){\r\n\t\t\t\t\tblock.remove();\r\n\t\t\t\t\tMainData.Courses.splice(idOfIconBlock - 1, 1);\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t}\r\n\trender(){\r\n\t\tlet MyNewCourse = document.createElement('div');\r\n\t\t\tMyNewCourse.className = \"DataOfCourses\";\r\n\t\t\tMyNewCourse.dataset.id = Counter;\r\n\t\t\tMyNewCourse.innerHTML = \r\n\t\t\t`\r\n\t\t\t<input class=\"titleCourse\" type=\"text\" name=\"name\"data-id=\"${Counter}\">\r\n\t\t\t<input class=\"titleURL\" type=\"url\" name=\"url\" data-id=\"${Counter}\">\r\n\t\t\t<button class=\"DeleteFunc\" id=\"RemoveBtn\">&#10006;</button>\r\n\t\t\t`;\r\n\t\t\topt.appendChild(MyNewCourse);\r\n\t\tMyNewCourse.querySelector('.titleCourse').addEventListener('input', this.addTitle);\r\n\t\tMyNewCourse.querySelector('.titleURL').addEventListener('change', this.addURL);\r\n\t\tMyNewCourse.querySelector('.DeleteFunc').addEventListener('click', this.deleteCourse);\r\n\t\t\r\n\t\tlet MyNewCourseShow = document.createElement('div');\r\n\t\t\tMyNewCourseShow.className = \"iconsBlock\";\r\n\t\t\tMyNewCourseShow.dataset.id = Counter;\r\n\t\t\tMyNewCourseShow.innerHTML = \r\n\t\t\t`\r\n\t\t\t<img class=\"icons\" src=\"\"data-id=\"${Counter}\" />\r\n\t\t\t<span class=\"nameOfCourse\"data-id=\"${Counter}\"  id=\"nameOfCourse\"></span>\r\n\t\t\t`;\r\n\t\t\tCourseBlock.appendChild(MyNewCourseShow);\r\n\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./application/Classess/CourseClass.js?");

/***/ }),

/***/ "./application/Classess/MenuAndLogo.js":
/*!*********************************************!*\
  !*** ./application/Classess/MenuAndLogo.js ***!
  \*********************************************/
/*! exports provided: default, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n\r\nclass Menu {\r\n\tconstructor(){\r\n\t\tthis.addMenuList = this.addMenuList.bind(this);\r\n\t\tthis.removeMenuList = this.removeMenuList.bind(this);\r\n\t}\r\n\taddMenuList(event){\r\n\t\tlet MenuItems = MenuBlock.querySelectorAll('.navigation-li');\r\n\t\tconsole.log(event.target.dataset.id);\r\n\t\t\tMenuItems.forEach(function(item){\r\n\t\t\tlet idOfList = Number(item.dataset.id);\r\n\t\t\tif (Number(event.target.dataset.id) == idOfList){\r\n\t\t\t\t\titem.textContent = event.target.value;\r\n\t\t\t\t\tmyObj3[\"list\"] = event.target.value;\r\n\t\t\t\t\tlocalStorage.setItem('ListID'+Counter_3, JSON.stringify(myObj3));\r\n\t\t\t\t\tlet CrsObj = localStorage.getItem('ListID'+Counter_3);\r\n\t\t\t\t\tlet Data = JSON.parse(CrsObj);\r\n\t\t\t\t\tParsedMenu.push(Data);\r\n\t\t\t\t\tlocalStorage.removeItem('ListID'+Counter_3);\r\n  \t\t\t\t\tlocalStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));\r\n\t\t\t\t\t}\r\n\t\t\t\t})\r\n\t\t\t}\r\n\tremoveMenuList(event){\r\n\t\tCounter_3--;\r\n\t\tlet idblock = Number(event.target.parentNode.dataset.id);\r\n\t\tevent.target.parentNode.remove();\r\n\t\tlet MenuItems = MenuBlock.querySelectorAll('.navigation-li');\r\n\t\t\tMenuItems.forEach(function(item){\r\n\t\t\t\tlet idOfList = Number(item.dataset.id);\r\n\t\t\t\tif (idblock == idOfList){\r\n\t\t\t\t\titem.remove();\r\n\t\t\t\t\tParsedMenu.splice(idOfList - 1, 1);\r\n\t\t\t\t\tlocalStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\trender(){\r\n\t\tlet a = document.createElement('a');\r\n\t\t\ta.className = 'navigation-li';\r\n\t\t\ta.dataset.id = Counter_3;\r\n\t\t\ta.href = 'test';\r\n\t\t\tMenuBlock.appendChild(a);\r\n\t\tlet listCust = document.createElement('div');\r\n\t\t\tlistCust.className = 'ValuesOfMenu';\r\n\t\t\tlistCust.dataset.id = Counter_3;\r\n\t\t\tlistCust.innerHTML = \r\n\t\t\t`\r\n\t\t\t<input class=\"ValuesOfMenuLink\" data-id=\"${Counter_3}\">\r\n\t\t\t<button class=\"DeleteFuncMenu\" id=\"RemoveBtn\">&#10006;</button>\r\n\t\t\t`;\r\n\t\t\tMenuCustomBlock.appendChild(listCust);\r\n\t\t\tMenuCustomBlock.querySelector('.DeleteFuncMenu').addEventListener('click', this.removeMenuList);\r\n\t\t\tMenuCustomBlock.querySelector('.ValuesOfMenuLink').addEventListener('change', this.addMenuList);\r\n\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./application/Classess/MenuAndLogo.js?");

/***/ }),

/***/ "./application/Classess/NewsClass.js":
/*!*******************************************!*\
  !*** ./application/Classess/NewsClass.js ***!
  \*******************************************/
/*! exports provided: default, News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return News; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"News\", function() { return News; });\n\r\n\tclass News {\r\n\tconstructor(){\r\n\t\tthis.AddNews = this.AddNews.bind(this);\r\n\t\tthis.DeleteNews = this.DeleteNews.bind(this);\r\n\t\tthis.date = new Date();\r\n\t}\r\n\tDeleteNews(event){\r\n\t\tCounter_2--;\r\n\t\tlet idblock = Number(event.target.parentNode.dataset.id);\r\n\t\tevent.target.parentNode.remove();\r\n\t\tlet News = NewsBlock.querySelectorAll('.NewsData');\r\n\t\t\tNews.forEach(function(item){\r\n\t\t\t\tlet idOfNews = Number(item.dataset.id);\r\n\t\t\t\tif (idblock == idOfNews){\r\n\t\t\t\t\titem.remove();\r\n\t\t\t\t\tMainData.News.splice(idOfNews - 1, 1);\r\n\t\t\t\t\tlocalStorage.setItem('MyProject', JSON.stringify(MainData));\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\tAddNews(event){\r\n\t\tlet News = NewsBlock.querySelectorAll('.areaNews');\r\n\t\t\tNews.forEach(function(text){\r\n\t\t\t\tlet idOfNews = Number(text.dataset.id);\r\n\t\t\t\tif (Number(event.target.dataset.id) == idOfNews){\r\n\t\t\t\t\ttext.value = event.target.value;\r\n\t\t\t\t\tmyObj2[\"Text\"] = event.target.value;\r\n\t\t\t\t\tlocalStorage.setItem('NewsID'+Counter_2, JSON.stringify(myObj2));\r\n\t\t\t\t\tlet CrsObj = localStorage.getItem('NewsID'+Counter_2);\r\n\t\t\t\t\tlet Data = JSON.parse(CrsObj);\r\n\t\t\t\t\tMainData.News.push(Data);\r\n\t\t\t\t\tlocalStorage.removeItem('NewsID'+Counter_2);\r\n  \t\t\t\t\tlocalStorage.setItem('MyProject', JSON.stringify(MainData));\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t}\r\n\trender(){\r\n\t\tlet news = document.createElement('div');\r\n\t\t\tnews.className = \"NewsData\";\r\n\t\t\tnews.dataset.id = Counter_2;\r\n\t\t\tnews.innerHTML = \r\n\t\t\t`\r\n\t\t\t<label class=\"newsList\" id=\"dataLabel\">${\"Новость\"+Counter_2}<span class=\"TimeNow\" id=\"DateToday\">${this.date.getFullYear() + '/' + this.date.getMonth() + '/'+ this.date.getDate()}</span></label>\r\n\t\t\t<textarea class=\"areaNews\" id=\"dataNews\" data-id=\"${Counter_2}\" disabled></textarea>\r\n\t\t\t`;\r\n\t\t\tNewsBlock.appendChild(news);\r\n\t\tlet newsCust = document.createElement('div');\r\n\t\t\tnewsCust.className = \"ValueOfNews\";\r\n\t\t\tnewsCust.dataset.id = Counter_2;\r\n\t\t\tnewsCust.innerHTML = \r\n\t\t\t`\r\n\t\t\t<textarea type=\"text\" class=\"ToCustomNews\" data-id=\"${Counter_2}\"></textarea>\r\n\t\t\t<button class=\"DeleteFuncNews\" id=\"RemoveBtn\" data-id=\"${Counter_2}\">&#10006;</button>\r\n\t\t\t`;\r\n\t\t\tNewsCustomValues.appendChild(newsCust);\r\n\t\t\tnewsCust.querySelector('.DeleteFuncNews').addEventListener('click', this.DeleteNews);\r\n\t\t\tnewsCust.querySelector('.ToCustomNews').addEventListener('change',this.AddNews);\r\n\t\t\tnewsCust.querySelectorAll('ToCustomNews').forEach(function(input){\r\n\t\t\t\tlet idOfCustInput = Number(input.dataset.id);\r\n\t\t\t\tnews.querySelectorAll('.areaNews').forEach(function(input2){\r\n\t\t\t\t\tlet idOfShowInput = Number(input2.dataset.id);\r\n\t\t\t\t\tif (idOfCustInput == idOfShowInput){\r\n\t\t\t\t\t\tinput.value = input2.value;\r\n\t\t\t\t\t}\r\n\t\t\t\t}) \r\n\t\t\t})\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./application/Classess/NewsClass.js?");

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