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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var AudioContext = window.AudioContext || window.webkitAudioContext;

function createSource() {
  var ctx = new AudioContext();

  var source = ctx.createOscillator();
  source.connect(ctx.destination);

  source.start();
  return source;
}

function changeTone(src, maxFreq, time) {
  setTimeout(function () {
    src.frequency.value = Math.random() * maxFreq;
    changeTone(src, maxFreq, time);
  }, Math.random() * time);
}

changeTone(createSource(), 3500, 300);
changeTone(createSource(), 4000, 200);
// changeTone(createSource(), 100, 50)

// const src3 = createSource()
// changeTone(src1, 3500, 200);
// changeTone(src2, 4000, 750);
// changeTone(src3, 400, 500);

//////////////////////////////////////

// const ctx = new AudioContext();

// const source = ctx.createOscillator();
// const biquad = ctx.createBiquadFilter();
// window.bq = biquad
// source.connect(biquad)
// biquad.connect(ctx.destination)
// source.start()

// setInterval(() => {
//   source.frequency.value = Math.random() * 2500
// }, 500)

// LFO FILTER
// const ctx = new AudioContext();
// const oscillator = ctx.createOscillator()
// const LFO = ctx.createOscillator()
// const VCA = ctx.createGain()

// LFO.connect(VCA.gain)
// oscillator.connect(VCA)
// VCA.connect(ctx.destination)

// LFO.frequency.value = 7

// LFO.start(0)
// oscillator.start(0)

// window.ctx = ctx
// window.lfo = LFO
// window.osc = oscillator
// window.gain = VCA

// changeTone(oscillator, 2000)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);