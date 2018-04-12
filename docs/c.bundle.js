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
/******/ 	return __webpack_require__(__webpack_require__.s = "./c/c.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./c/c.css":
/*!*****************!*\
  !*** ./c/c.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./c/c.css?");

/***/ }),

/***/ "./c/c.js":
/*!****************!*\
  !*** ./c/c.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./c.css */ \"./c/c.css\");\n\nvar sample = function sample(arr) {\n  return arr[Math.floor(arr.length * Math.random())];\n};\n\nvar ratios = [1.005, 1.05, 1.25, 1.3333333, 2, 1.5, 1.125];\n\nvar AudioContext = window.AudioContext || window.webkitAudioContext;\nvar MAX_VOLUME = 0.04;\nvar MAX_TIME = 15000;\nvar MIN_TIME = 170;\nvar MIN_FREQ = 800;\nvar MAX_FREQ = 3000;\nfunction createSource() {\n  var srcType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';\n\n  var ctx = new AudioContext();\n\n  var source = ctx.createOscillator();\n  var gain = ctx.createGain();\n\n  source.connect(gain);\n  gain.connect(ctx.destination);\n\n  // window.gain = gain\n  gain.gain.value = MAX_VOLUME;\n  source.type = srcType;\n  source.start();\n  return { source: source, gain: gain };\n}\n\nfunction randomDirection() {\n  var magnitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n  var direction = Math.random() < 0.5 ? -1 : 1;\n  var ammount = Math.random() * magnitude;\n  var logAmmount = direction < 0 ? ammount : ammount / (1 - ammount);\n  return 1 + logAmmount * direction;\n}\n\nfunction changeTone(getTone, time, cb) {\n  var newTime = Math.min(Math.max(MIN_TIME, time * randomDirection(0.2)), MAX_TIME);\n  var newFreq = getTone();\n  cb(newFreq, time);\n  setTimeout(function () {\n    return changeTone(getTone, newTime, cb);\n  }, Math.random() * time);\n}\n\nvar fadeOut = function fadeOut(gain, style, time) {\n  gain.gain.value = MAX_VOLUME * 2;\n  style.opacity = 0.5;\n\n  // should be some value between 0 and .05\n  var fadeRate = 0.003;\n  var amt = 1 - fadeRate;\n\n  if (amt > 1) {\n    console.error('This is going to be too loud...');\n    console.error(amt);\n    debugger;\n    throw 'NOOOOOOOO';\n    return;\n  }\n\n  var interval = setInterval(function () {\n    gain.gain.value = gain.gain.value * amt;\n    style.opacity = style.opacity * amt;\n  }, time / 100);\n\n  setTimeout(function () {\n    return clearInterval(interval);\n  }, time - 5);\n};\n\nvar low = document.getElementById('low');\nvar medium = document.getElementById('medium');\nvar high = document.getElementById('high');\n\nvar _createSource = createSource(),\n    srcA = _createSource.source,\n    gainA = _createSource.gain;\n\nvar _createSource2 = createSource(),\n    srcC = _createSource2.source,\n    gainC = _createSource2.gain;\n\nvar _createSource3 = createSource(),\n    srcE = _createSource3.source,\n    gainE = _createSource3.gain;\n\nvar toneA = 0;\n// A\nvar maxFreqA = MIN_FREQ;\nvar startTimeA = 4000;\nvar maxSizeA = 80;\nlow.style.maxWidth = maxSizeA + 'vw';\nlow.style.maxHeight = maxSizeA + 'vw';\nvar getToneA = function getToneA() {\n  toneA = Math.random() * maxFreqA;\n  return toneA;\n};\nchangeTone(getToneA, startTimeA, function (freq, time) {\n  // console.log(freq, time)\n  var size = (1 - freq / maxFreqA) * maxSizeA / 100 * window.innerWidth;\n\n  srcA.frequency.value = freq;\n  low.style.transition = time * 1.5 + 'ms';\n  low.style.top = (1 - freq / maxFreqA) * (window.innerHeight - size / 2) + 'px';\n  low.style.left = Math.random() * (window.innerWidth - size / 2) + 'px';\n  low.style.height = size + 'px';\n  low.style.width = size + 'px';\n  low.zIndex = Math.round(size);\n  low.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';\n  // low.innerHTML = `${freq}, ${time}`\n\n  fadeOut(gainA, low.style, time, freq);\n});\n\n// C\nvar maxFreqC = MIN_FREQ * 1.5;\nvar startTimeC = 1500;\nvar maxSizeC = 60;\nmedium.style.maxWidth = maxSizeC + 'vw';\nmedium.style.maxHeight = maxSizeC + 'vw';\nvar getToneC = function getToneC() {\n  return toneA * sample([1.005, 1.05, 1.2, 1.3333333]);\n};\nchangeTone(getToneC, startTimeC, function (freq, time) {\n  // console.log(freq, time)\n  srcC.frequency.value = freq;\n  var size = (1 - freq / maxFreqC) * maxSizeC / 100 * window.innerWidth;\n  medium.style.transition = time * 1.5 + 'ms';\n  medium.style.top = (1 - freq / maxFreqC) * (window.innerHeight - size / 2) + 'px';\n  medium.style.left = Math.random() * (window.innerWidth - size / 2) + 'px';\n  medium.style.height = size + 'px';\n  medium.style.width = size + 'px';\n  medium.zIndex = Math.round(size);\n\n  medium.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';\n  // medium.innerHTML = `${freq}, ${time}`\n  fadeOut(gainC, medium.style, time, freq);\n});\n\n// E\nvar maxFreqE = MIN_FREQ * 2;\nvar startTimeE = 1000;\nvar maxSizeE = 40;\nhigh.style.maxWidth = maxSizeE + 'vw';\nhigh.style.maxHeight = maxSizeE + 'vw';\nvar getToneE = function getToneE() {\n  return toneA * sample([2.005, 1.5005]);\n};\nchangeTone(getToneE, startTimeE, function (freq, time) {\n  // console.log(freq, time)\n  srcE.frequency.value = freq;\n  var size = (1 - freq / maxFreqE) * maxSizeE / 100 * window.innerWidth;\n  high.style.transition = time * 1.5 + 'ms';\n  high.style.top = (1 - freq / maxFreqE) * (window.innerHeight - size / 2) + 'px';\n  high.style.left = Math.random() * (window.innerWidth - size / 2) + 'px';\n  high.style.height = size + 'px';\n  high.style.width = size + 'px';\n  high.zIndex = Math.round(size);\n\n  high.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';\n  // high.innerHTML = `${freq}, ${time}`\n  fadeOut(gainE, high.style, time, freq);\n});\n\n// I like how in this example the space continues to expand as the ratio of time/startTime increases past 1\n\n// // A\n// const maxFreqA = 550\n// const startTimeA = 2000\n// changeTone(maxFreqA, startTimeA, (freq, time) => {\n//   console.log(freq, time)\n//   srcA.frequency.value = freq\n//   low.style.left = `${(freq/maxFreqA) * window.innerWidth}px`\n//   low.style.top = `${(time/startTimeA) * window.innerHeight}px`\n//   low.style.transition = `${time}ms`\n// })\n\n// // C\n// const maxFreqC = 1308\n// const startTimeC = 200\n// changeTone(maxFreqC, startTimeC, (freq, time) => {\n//   console.log(freq, time)\n//   srcC.frequency.value = freq\n//   medium.style.left = `${(freq/maxFreqC) * window.innerWidth}px`\n//   medium.style.top = `${(time/startTimeC) * window.innerHeight}px`\n//   medium.style.transition = `${time}ms`\n// })\n\n// // E\n// const maxFreqE = 3296\n// const startTimeE = 600\n// changeTone(maxFreqE, startTimeC, (freq, time) => {\n//   console.log(freq, time)\n//   srcE.frequency.value = freq\n//   high.style.left = `${(freq/maxFreqE) * window.innerWidth}px`\n//   high.style.top = `${(time/startTimeE) * window.innerHeight}px`\n//   high.style.transition = `${time}ms`\n// })\n\n//# sourceURL=webpack:///./c/c.js?");

/***/ })

/******/ });