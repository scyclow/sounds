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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sandbox/sandbox.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sandbox/sandbox.css":
/*!*****************************!*\
  !*** ./sandbox/sandbox.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./sandbox/sandbox.css?");

/***/ }),

/***/ "./sandbox/sandbox.js":
/*!****************************!*\
  !*** ./sandbox/sandbox.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./sandbox.css */ \"./sandbox/sandbox.css\");\n\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\n\nvar width = window.innerWidth / 4;\nvar height = window.innerHeight / 4;\ncanvas.width = width;\ncanvas.height = height;\n\nctx.fillStyle = '#e97';\nctx.strokeStyle = '#fb9';\n\nvar amt = window.innerWidth * window.innerHeight / 135;\n\nfunction draw() {\n  ctx.clearRect(0, 0, width, height);\n  ctx.beginPath();\n\n  for (var i = 0; i < amt; i++) {\n    var x = Math.round(Math.random() * width);\n    var y = Math.round(Math.random() * height);\n    ctx.moveTo(x, y);\n    ctx.arc(x, y, 3, 0, Math.PI * 2, true);\n  }\n\n  ctx.stroke();\n}\n\nsetInterval(draw, 1000 / 30);\ndraw();\n\nvar sample = function sample(arr) {\n  return arr[Math.floor(arr.length * Math.random())];\n};\n\nfunction btwn(x, y) {\n  var high = Math.max(x, y);\n  var low = Math.min(x, y);\n\n  return Math.random() * (high - low) + low;\n}\n\n//# sourceURL=webpack:///./sandbox/sandbox.js?");

/***/ })

/******/ });