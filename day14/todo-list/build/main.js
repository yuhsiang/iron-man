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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/TodoController.js":
/*!*******************************!*\
  !*** ./src/TodoController.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem */ \"./src/TodoItem.js\");\n\n\nfunction TodoController({\n  view,\n  data,\n  bindId\n}) {\n  this.data = data;\n  this.view = view;\n  this.element = document.querySelector(bindId);\n}\n\nTodoController.prototype.addTodo = function (content, checked) {\n  this.data.push(new _TodoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](content, checked));\n  this.render();\n};\n\nTodoController.prototype.deleteItem = function (index) {\n  this.data.splice(index, 1);\n  this.render();\n};\n\nTodoController.prototype.checkItem = function (index) {\n  this.data[index].toggle();\n  this.render();\n};\n\nTodoController.prototype.render = function () {\n  var renderViewText = this.view,\n      i,\n      length = this.data.length,\n      item,\n      checkValue;\n  resultView = '';\n  this.empty(); // set values, skip sanitize text for now...\n\n  for (i = 0; i < length; i += 1) {\n    item = this.data[i];\n    renderViewText = this.view;\n    checkValue = item.check ? 'checked' : '';\n    renderViewText = renderViewText.replace('{{check}}', checkValue);\n    renderViewText = renderViewText.replace('{{content}}', item.content);\n    renderViewText = renderViewText.replace('{{i}}', i);\n    resultView += renderViewText;\n  }\n\n  this.element.innerHTML = resultView;\n};\n\nTodoController.prototype.empty = function () {\n  while (this.element.firstChild) {\n    this.element.removeChild(this.element.firstChild);\n  }\n};\n\nTodoController.prototype.registerEvent = function (eventType, callback) {\n  if (typeof callback === 'function') {\n    this.element.addEventListener(eventType, callback, false);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoController);\n\n//# sourceURL=webpack:///./src/TodoController.js?");

/***/ }),

/***/ "./src/TodoItem.js":
/*!*************************!*\
  !*** ./src/TodoItem.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction TodoItem(content, check) {\n  this.content = content;\n  this.check = Boolean(check);\n  this.time = new Date();\n}\n\n;\n\nTodoItem.prototype.getTime = function () {\n  return this.time.toDateString();\n};\n\nTodoItem.prototype.toggle = function () {\n  return this.check = !this.check;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\n\n//# sourceURL=webpack:///./src/TodoItem.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoController */ \"./src/TodoController.js\");\n\nvar data = [],\n    view = '<li class=\"{{check}}\" data-i=\"{{i}}\"><span class=\"todo-content\">{{content}}</span><span class=\"close\">x</span></li>';\nvar controller = new _TodoController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  view,\n  data,\n  bindId: '#todo-list'\n});\ncontroller.addTodo('第一個工作');\ncontroller.addTodo('先完成這個', true);\ncontroller.registerEvent('click', function (e) {\n  var temp = e.target,\n      i = null;\n\n  while (temp !== e.currentTarget && !i) {\n    i = temp.getAttribute('data-i');\n    temp = temp.parentElement;\n  }\n\n  if (e.target.tagName === 'LI') {\n    controller.checkItem(parseInt(i));\n  }\n\n  if (e.target.className === 'close') {\n    controller.deleteItem(parseInt(i));\n  }\n});\ntodoButton = document.querySelector('#addTodo');\ntodoButton.addEventListener('click', function () {\n  var inputValue = document.getElementById('todo-input').value;\n\n  if (inputValue === '') {\n    alert(\"請輸入待辦事項\");\n  } else {\n    controller.addTodo(inputValue);\n  }\n}, false);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });