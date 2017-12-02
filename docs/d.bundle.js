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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

setTimeout(function () {
  return location.reload();
}, Math.max(150, 1300 * Math.random()));

var AudioContext = window.AudioContext || window.webkitAudioContext;
function createSource() {
  var srcType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';

  var ctx = new AudioContext();

  var source = ctx.createOscillator();
  var gain = ctx.createGain();

  source.connect(gain);
  gain.connect(ctx.destination);

  // window.gain = gain
  gain.gain.value = 0.04;
  source.type = srcType;
  source.start();
  return source;
}

function randomDirection() {
  var magnitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var direction = Math.random() < 0.5 ? -1 : 1;
  var ammount = Math.random() * magnitude;
  var logAmmount = direction < 0 ? ammount : ammount / (1 - ammount);
  return 1 + logAmmount * direction;
}

function changeTone(maxFreq, time, cb) {
  var newTime = Math.max(17, time * randomDirection(0.2));
  var newFreq = Math.random() * maxFreq;
  cb(newFreq, time);
  setTimeout(function () {
    return changeTone(maxFreq, newTime, cb);
  }, Math.random() * time);
}

var low = document.getElementById('low');
var medium = document.getElementById('medium');
var high = document.getElementById('high');

var srcA = createSource();
var srcC = createSource();
var srcE = createSource();

// A
var maxFreqA = 550;
var startTimeA = 700;
var maxSizeA = 40;
low.style.maxWidth = maxSizeA + 'vw';
low.style.maxHeight = maxSizeA + 'vw';
changeTone(maxFreqA, startTimeA, function (freq, time) {
  var size = (1 - freq / maxFreqA) * maxSizeA / 100 * window.innerWidth;

  srcA.frequency.value = freq;
  low.style.transition = time + 'ms';
  low.style.top = (1 - freq / maxFreqA) * window.innerHeight + 'px';
  low.style.left = Math.random() * window.innerWidth + 'px';
  low.style.height = size + 'px';
  low.style.width = size + 'px';
  low.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';
});

// C
var maxFreqC = 1300;
var startTimeC = 200;
var maxSizeC = 30;
medium.style.maxWidth = maxSizeC + 'vw';
medium.style.maxHeight = maxSizeC + 'vw';
changeTone(maxFreqC, startTimeC, function (freq, time) {
  srcC.frequency.value = freq;
  var size = (1 - freq / maxFreqC) * maxSizeC / 100 * window.innerWidth;
  medium.style.transition = time + 'ms';
  medium.style.top = (1 - freq / maxFreqC) * window.innerHeight + 'px';
  medium.style.left = Math.random() * window.innerWidth + 'px';
  medium.style.height = size + 'px';
  medium.style.width = size + 'px';
  medium.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';
});

// E
var maxFreqE = 3200;
var startTimeE = 600;
var maxSizeE = 20;
high.style.maxWidth = maxSizeE + 'vw';
high.style.maxHeight = maxSizeE + 'vw';
changeTone(maxFreqE, startTimeE, function (freq, time) {
  srcE.frequency.value = freq;
  var size = (1 - freq / maxFreqE) * maxSizeE / 100 * window.innerWidth;
  high.style.transition = time + 'ms';
  high.style.top = (1 - freq / maxFreqE) * window.innerHeight + 'px';
  high.style.left = Math.random() * window.innerWidth + 'px';
  high.style.height = size + 'px';
  high.style.width = size + 'px';
  high.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';
});

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });