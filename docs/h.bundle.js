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
/******/ 	return __webpack_require__(__webpack_require__.s = "./h/h.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./h/h.css":
/*!*****************!*\
  !*** ./h/h.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./h/h.css?");

/***/ }),

/***/ "./h/h.js":
/*!****************!*\
  !*** ./h/h.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./h.css */ \"./h/h.css\");\n\nvar AudioContext = window.AudioContext || window.webkitAudioContext;\nvar MAX_VOLUME = 0.04;\nfunction createSource() {\n  var srcType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';\n\n  var ctx = new AudioContext();\n\n  var source = ctx.createOscillator();\n  var gain = ctx.createGain();\n\n  source.connect(gain);\n  gain.connect(ctx.destination);\n\n  // window.gain = gain\n  gain.gain.value = MAX_VOLUME;\n  source.type = srcType;\n  source.start();\n  return { source: source, gain: gain };\n}\n\nvar _createSource = createSource(),\n    src1 = _createSource.source,\n    gain1 = _createSource.gain;\n\nvar _createSource2 = createSource(),\n    src2 = _createSource2.source,\n    gain2 = _createSource2.gain;\n\nsrc1.frequency.value = 400;\nsrc2.frequency.value = 403;\n\n//# sourceURL=webpack:///./h/h.js?");

/***/ })

/******/ });