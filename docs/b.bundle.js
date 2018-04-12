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
/******/ 	return __webpack_require__(__webpack_require__.s = "./b/b.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./b/b.css":
/*!*****************!*\
  !*** ./b/b.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./b/b.css?");

/***/ }),

/***/ "./b/b.js":
/*!****************!*\
  !*** ./b/b.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./b.css */ \"./b/b.css\");\n\nfunction changeTone(src, maxFreq, time) {\n  setTimeout(function () {\n    src.frequency.value = Math.random() * maxFreq;\n    console.log(time);\n    changeTone(src, maxFreq, time);\n  }, time);\n}\n\n// LFO FILTER\n\n\nvar ctx = new AudioContext();\nvar oscillator = ctx.createOscillator();\nvar LFO = ctx.createOscillator();\nvar VCA = ctx.createGain();\nvar gain = ctx.createGain();\n\nLFO.connect(VCA.gain);\noscillator.connect(VCA);\nVCA.connect(gain);\ngain.connect(ctx.destination);\n\ngain.gain.value = 0.04;\nLFO.frequency.value = 7;\n\nLFO.start(0);\noscillator.start(0);\n\nwindow.ctx = ctx;\nwindow.lfo = LFO;\nwindow.osc = oscillator;\nwindow.gain = VCA;\n\nchangeTone(oscillator, 2000);\n\n//# sourceURL=webpack:///./b/b.js?");

/***/ })

/******/ });