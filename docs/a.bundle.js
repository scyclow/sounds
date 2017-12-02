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
  var gain = ctx.createGain();
  var panner = ctx.createStereoPanner();

  source.connect(gain);
  gain.connect(panner);
  panner.connect(ctx.destination);

  gain.gain.value = 0.04;
  source.start();
  return { source: source, panner: panner };
}

function randomDirection() {
  var magnitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var direction = Math.random() < 0.5 ? -1 : 1;
  var ammount = Math.random() * magnitude;
  var logAmmount = direction < 0 ? ammount : ammount / (1 - ammount);
  return 1 + logAmmount * direction;
}

function changeTone(src, maxFreq, time) {
  setTimeout(function () {
    src.frequency.value = Math.random() * maxFreq;
    changeTone(src, maxFreq, time);
  }, Math.random() * time);
}

function changePanner(panner, direction) {
  var d = direction;
  setInterval(function () {
    d = d * -1;
    panner.pan.value = d;
  }, 2500);
}

var _createSource = createSource(),
    source1 = _createSource.source,
    panner1 = _createSource.panner;

var _createSource2 = createSource(),
    source2 = _createSource2.source,
    panner2 = _createSource2.panner;

changeTone(source1, 3500, 300);
changeTone(source2, 4000, 200);

changePanner(panner1, 1);
changePanner(panner2, -1);

// changeTone(createSource(), 1750, 300)
// changeTone(createSource(), 2000, 200)
// changeTone(createSource(), 100, 50)

// const src3 = createSource()
// changeTone(createSource(), 3500, 200);
// changeTone(createSource(), 4000, 750);
// changeTone(createSource(), 400, 500);

//////////////////////////////////////

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);