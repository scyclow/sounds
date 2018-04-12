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
/******/ 	return __webpack_require__(__webpack_require__.s = "./d/d.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./d/d.css":
/*!*****************!*\
  !*** ./d/d.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./d/d.css?");

/***/ }),

/***/ "./d/d.js":
/*!****************!*\
  !*** ./d/d.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./d.css */ \"./d/d.css\");\n\nsetTimeout(function () {\n  return location.reload();\n}, Math.max(150, 1300 * Math.random()));\n\nvar AudioContext = window.AudioContext || window.webkitAudioContext;\nfunction createSource() {\n  var srcType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';\n\n  var ctx = new AudioContext();\n\n  var source = ctx.createOscillator();\n  var gain = ctx.createGain();\n\n  source.connect(gain);\n  gain.connect(ctx.destination);\n\n  // window.gain = gain\n  gain.gain.value = 0.04;\n  source.type = srcType;\n  source.start();\n  return source;\n}\n\nfunction randomDirection() {\n  var magnitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n  var direction = Math.random() < 0.5 ? -1 : 1;\n  var ammount = Math.random() * magnitude;\n  var logAmmount = direction < 0 ? ammount : ammount / (1 - ammount);\n  return 1 + logAmmount * direction;\n}\n\nfunction changeTone(maxFreq, time, cb) {\n  var newTime = Math.max(17, time * randomDirection(0.2));\n  var newFreq = Math.random() * maxFreq;\n  cb(newFreq, time);\n  setTimeout(function () {\n    return changeTone(maxFreq, newTime, cb);\n  }, Math.random() * time);\n}\n\nvar low = document.getElementById('low');\nvar medium = document.getElementById('medium');\nvar high = document.getElementById('high');\n\nvar srcA = createSource();\nvar srcC = createSource();\nvar srcE = createSource();\n\n// A\nvar maxFreqA = 550;\nvar startTimeA = 700;\nvar maxSizeA = 40;\nlow.style.maxWidth = maxSizeA + 'vw';\nlow.style.maxHeight = maxSizeA + 'vw';\nchangeTone(maxFreqA, startTimeA, function (freq, time) {\n  var size = (1 - freq / maxFreqA) * maxSizeA / 100 * window.innerWidth;\n\n  srcA.frequency.value = freq;\n  low.style.transition = time + 'ms';\n  low.style.top = (1 - freq / maxFreqA) * window.innerHeight + 'px';\n  low.style.left = Math.random() * window.innerWidth + 'px';\n  low.style.height = size + 'px';\n  low.style.width = size + 'px';\n  low.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';\n});\n\n// C\nvar maxFreqC = 1300;\nvar startTimeC = 200;\nvar maxSizeC = 30;\nmedium.style.maxWidth = maxSizeC + 'vw';\nmedium.style.maxHeight = maxSizeC + 'vw';\nchangeTone(maxFreqC, startTimeC, function (freq, time) {\n  srcC.frequency.value = freq;\n  var size = (1 - freq / maxFreqC) * maxSizeC / 100 * window.innerWidth;\n  medium.style.transition = time + 'ms';\n  medium.style.top = (1 - freq / maxFreqC) * window.innerHeight + 'px';\n  medium.style.left = Math.random() * window.innerWidth + 'px';\n  medium.style.height = size + 'px';\n  medium.style.width = size + 'px';\n  medium.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';\n});\n\n// E\nvar maxFreqE = 3200;\nvar startTimeE = 600;\nvar maxSizeE = 20;\nhigh.style.maxWidth = maxSizeE + 'vw';\nhigh.style.maxHeight = maxSizeE + 'vw';\nchangeTone(maxFreqE, startTimeE, function (freq, time) {\n  srcE.frequency.value = freq;\n  var size = (1 - freq / maxFreqE) * maxSizeE / 100 * window.innerWidth;\n  high.style.transition = time + 'ms';\n  high.style.top = (1 - freq / maxFreqE) * window.innerHeight + 'px';\n  high.style.left = Math.random() * window.innerWidth + 'px';\n  high.style.height = size + 'px';\n  high.style.width = size + 'px';\n  high.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';\n});\n\n//# sourceURL=webpack:///./d/d.js?");

/***/ })

/******/ });