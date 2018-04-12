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
/******/ 	return __webpack_require__(__webpack_require__.s = "./a/a.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./a/a.css":
/*!*****************!*\
  !*** ./a/a.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./a/a.css?");

/***/ }),

/***/ "./a/a.js":
/*!****************!*\
  !*** ./a/a.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./a.css */ \"./a/a.css\");\n\nvar AudioContext = window.AudioContext || window.webkitAudioContext;\n\nfunction createSource() {\n  var ctx = new AudioContext();\n\n  var source = ctx.createOscillator();\n  var gain = ctx.createGain();\n  var panner = ctx.createStereoPanner();\n\n  source.connect(gain);\n  gain.connect(panner);\n  panner.connect(ctx.destination);\n\n  gain.gain.value = 0.04;\n  source.start();\n  return { source: source, panner: panner };\n}\n\nfunction randomDirection() {\n  var magnitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n  var direction = Math.random() < 0.5 ? -1 : 1;\n  var ammount = Math.random() * magnitude;\n  var logAmmount = direction < 0 ? ammount : ammount / (1 - ammount);\n  return 1 + logAmmount * direction;\n}\n\nfunction changeTone(src, maxFreq, time) {\n  setTimeout(function () {\n    src.frequency.value = Math.random() * maxFreq;\n    changeTone(src, maxFreq, time);\n  }, Math.random() * time);\n}\n\nfunction changePanner(panner, direction) {\n  var d = direction;\n  setInterval(function () {\n    d = d * -1;\n    panner.pan.value = d;\n  }, 2500);\n}\n\nvar _createSource = createSource(),\n    source1 = _createSource.source,\n    panner1 = _createSource.panner;\n\nvar _createSource2 = createSource(),\n    source2 = _createSource2.source,\n    panner2 = _createSource2.panner;\n\nchangeTone(source1, 3500, 300);\nchangeTone(source2, 4000, 200);\n\nchangePanner(panner1, 1);\nchangePanner(panner2, -1);\n\n// changeTone(createSource(), 1750, 300)\n// changeTone(createSource(), 2000, 200)\n// changeTone(createSource(), 100, 50)\n\n// const src3 = createSource()\n// changeTone(createSource(), 3500, 200);\n// changeTone(createSource(), 4000, 750);\n// changeTone(createSource(), 400, 500);\n\n//////////////////////////////////////\n\n//# sourceURL=webpack:///./a/a.js?");

/***/ })

/******/ });