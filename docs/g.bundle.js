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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// ctx.translate(0.5, 0.5);

function draw() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  var w = Math.round(width / 5);
  var h = Math.round(height / 5);

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();

  for (var i = 0; i < 5000; i++) {
    // for (let j = 0; j < height; j += h) {
    var x = Math.round(Math.random() * (width / 3)) + 0.5;
    var y = Math.round(Math.random() * (height / 3)) + 0.5;
    ctx.moveTo(x, y);
    ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  }

  ctx.strokeStyle = '#fa8';
  ctx.stroke();
}

setInterval(draw, 1000 / 60);
draw();

var sample = function sample(arr) {
  return arr[Math.floor(arr.length * Math.random())];
};

function btwn(x, y) {
  var high = Math.max(x, y);
  var low = Math.min(x, y);

  return Math.random() * (high - low) + low;
}

var AudioContext = window.AudioContext || window.webkitAudioContext;
var MAX_VOLUME = 0.04;

function createSource() {
  var srcType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';

  var ctx = new AudioContext();

  var source = ctx.createOscillator();
  var gain = ctx.createGain();

  source.connect(gain);
  gain.connect(ctx.destination);

  // window.gain = gain
  gain.gain.value = MAX_VOLUME;
  source.type = srcType;
  source.start();
  return { source: source, gain: gain };
}

var _createSource = createSource(),
    src1 = _createSource.source,
    gain1 = _createSource.gain;

var _createSource2 = createSource(),
    src2 = _createSource2.source,
    gain2 = _createSource2.gain;

var _createSource3 = createSource(),
    src3 = _createSource3.source,
    gain3 = _createSource3.gain;

var _createSource4 = createSource(),
    src4 = _createSource4.source,
    gain4 = _createSource4.gain;

var _createSource5 = createSource(),
    src5 = _createSource5.source,
    gain5 = _createSource5.gain;

src1.frequency.value = 400;
gain4.gain.value = MAX_VOLUME / 3;
gain5.gain.value = MAX_VOLUME / 3;

function randInterval(cb, i) {
  cb();
  setTimeout(function () {
    return randInterval(cb, i);
  }, btwn.apply(undefined, _toConsumableArray(i)));
}

var ratios = [1.005, 1.05, 1.25, 1.3333333, 2, 1.5, 1.125];

randInterval(function () {
  src2.frequency.value = src1.frequency.value * sample(ratios);
}, [20, 2000]);

randInterval(function () {
  src3.frequency.value = src1.frequency.value * sample(ratios);
}, [20, 2000]);

randInterval(function () {
  src4.frequency.value = src1.frequency.value * sample(ratios);
  // src3.frequency.value = src1.frequency.value * sample(ratios)
}, [10, 30]);

randInterval(function () {
  src5.frequency.value = src1.frequency.value * sample(ratios);
}, [10, 30]);

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });