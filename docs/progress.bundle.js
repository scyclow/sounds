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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

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
  setTimeout(function () {
    var newTime = time * randomDirection(0.2);
    var newFreq = Math.random() * maxFreq;

    cb(newFreq, time);
    changeTone(maxFreq, newTime, cb);
  }, Math.random() * time);
}

var low = document.getElementById('low');
var medium = document.getElementById('medium');
var high = document.getElementById('high');

var srcA = createSource('triangle');
var srcC = createSource();
var srcE = createSource();

// A
var maxFreqA = 550;
var startTimeA = 2000;
changeTone(maxFreqA, startTimeA, function (freq, time) {
  console.log(freq, time);
  srcA.frequency.value = freq;
  low.style.left = freq / maxFreqA * window.innerWidth + 'px';
  low.style.top = Math.random() * window.innerHeight + 'px';
  low.style.transition = time + 'ms';
});

// C
var maxFreqC = 1308;
var startTimeC = 200;
changeTone(maxFreqC, startTimeC, function (freq, time) {
  console.log(freq, time);
  srcC.frequency.value = freq;
  medium.style.left = freq / maxFreqC * window.innerWidth + 'px';
  medium.style.top = Math.random() * window.innerHeight + 'px';
  medium.style.transition = time + 'ms';
});

// E
var maxFreqE = 3296;
var startTimeE = 600;
changeTone(maxFreqE, startTimeC, function (freq, time) {
  console.log(freq, time);
  srcE.frequency.value = freq;
  high.style.left = freq / maxFreqE * window.innerWidth + 'px';
  high.style.top = Math.random() * window.innerHeight + 'px';
  high.style.transition = time + 'ms';
});

// I like how in this example the space continues to expand as the ratio of time/startTime increases past 1

// // A
// const maxFreqA = 550
// const startTimeA = 2000
// changeTone(maxFreqA, startTimeA, (freq, time) => {
//   console.log(freq, time)
//   srcA.frequency.value = freq
//   low.style.left = `${(freq/maxFreqA) * window.innerWidth}px`
//   low.style.top = `${(time/startTimeA) * window.innerHeight}px`
//   low.style.transition = `${time}ms`
// })

// // C
// const maxFreqC = 1308
// const startTimeC = 200
// changeTone(maxFreqC, startTimeC, (freq, time) => {
//   console.log(freq, time)
//   srcC.frequency.value = freq
//   medium.style.left = `${(freq/maxFreqC) * window.innerWidth}px`
//   medium.style.top = `${(time/startTimeC) * window.innerHeight}px`
//   medium.style.transition = `${time}ms`
// })

// // E
// const maxFreqE = 3296
// const startTimeE = 600
// changeTone(maxFreqE, startTimeC, (freq, time) => {
//   console.log(freq, time)
//   srcE.frequency.value = freq
//   high.style.left = `${(freq/maxFreqE) * window.innerWidth}px`
//   high.style.top = `${(time/startTimeE) * window.innerHeight}px`
//   high.style.transition = `${time}ms`
// })

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });