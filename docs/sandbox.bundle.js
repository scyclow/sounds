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
eval("\n\n__webpack_require__(/*! ./sandbox.css */ \"./sandbox/sandbox.css\");\n\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\n\nvar width = window.innerWidth;\nvar height = window.innerHeight;\ncanvas.width = width;\ncanvas.height = height;\n\nctx.fillStyle = '#000';\nctx.strokeStyle = '#fb9';\n\nvar sample = function sample(arr) {\n  return arr[Math.floor(arr.length * Math.random())];\n};\n\nfunction btwn(x, y) {\n  var high = Math.max(x, y);\n  var low = Math.min(x, y);\n\n  return Math.random() * (high - low) + low;\n}\n\nvar amt = window.innerWidth * window.innerHeight / 200;\n\nvar t = 0;\n\nvar stuff = new Array(90).fill(1).map(function () {\n  return {\n    radius: Math.random() * 50,\n    direction: Math.random() < 0.5 ? 1 : -1,\n    x: Math.random() * width,\n    y: Math.random() * height\n  };\n});\n\nvar update = function update() {\n  stuff = stuff.map(function (s) {\n    var radius = s.radius + 1 * s.direction;\n    var direction = s.direction;\n    var x = s.x;\n    var y = s.y;\n    if (s.direction > 0 && radius > 50 * Math.random()) {\n      direction = s.direction * -1;\n    } else if (radius < 0) {\n      radius = 0;\n      direction = 1;\n      x = Math.random() * width;\n      y = Math.random() * height;\n    }\n\n    return {\n      x: x,\n      y: y,\n      radius: radius,\n      direction: direction\n    };\n  });\n};\n\n// ctx.shadowBlur = 40\n// ctx.shadowColor = 'black'\n\nfunction frame() {\n  update();\n  ctx.beginPath();\n\n  stuff.forEach(function (s) {\n    ctx.moveTo(s.x, s.y);\n    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2, true);\n  });\n\n  ctx.stroke();\n  ctx.fill();\n}\n\nvar draw = function draw(i) {\n  ctx.clearRect(0, 0, width, height);\n  frame(i);\n  // setTimeout(() =>\n  window.requestAnimationFrame(draw);\n  // , 300)\n};\ndraw();\n\n//# sourceURL=webpack:///./sandbox/sandbox.js?");

/***/ })

/******/ });