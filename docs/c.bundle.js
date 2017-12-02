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

var MAX_VOLUME = 0.04;
var MAX_TIME = 15000;
var MIN_TIME = 17;
var MIN_FREQ = 800;
var MAX_FREQ = 3000;
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

function randomDirection() {
  var magnitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var direction = Math.random() < 0.5 ? -1 : 1;
  var ammount = Math.random() * magnitude;
  var logAmmount = direction < 0 ? ammount : ammount / (1 - ammount);
  return 1 + logAmmount * direction;
}

function changeTone(maxFreq, time, cb) {
  var newTime = Math.min(Math.max(MIN_TIME, time * randomDirection(0.2)), MAX_TIME);
  var newFreq = Math.random() * maxFreq;
  cb(newFreq, time);
  setTimeout(function () {
    return changeTone(maxFreq, newTime, cb);
  }, Math.random() * time);
}

var fadeOut = function fadeOut(gain, style, time) {
  gain.gain.value = MAX_VOLUME * 2;
  style.opacity = 0.5;

  // should be some value between 0 and .05
  var fadeRate = 0.003;
  var amt = 1 - fadeRate;

  if (amt > 1) {
    console.error('This is going to be too loud...');
    console.error(amt);
    debugger;
    throw 'NOOOOOOOO';
    return;
  }

  var interval = setInterval(function () {
    gain.gain.value = gain.gain.value * amt;
    style.opacity = style.opacity * amt;
  }, time / 100);

  setTimeout(function () {
    return clearInterval(interval);
  }, time - 5);
};

var low = document.getElementById('low');
var medium = document.getElementById('medium');
var high = document.getElementById('high');

var _createSource = createSource(),
    srcA = _createSource.source,
    gainA = _createSource.gain;

var _createSource2 = createSource(),
    srcC = _createSource2.source,
    gainC = _createSource2.gain;

var _createSource3 = createSource(),
    srcE = _createSource3.source,
    gainE = _createSource3.gain;

// A


var maxFreqA = MIN_FREQ;
var startTimeA = 800;
var maxSizeA = 40;
low.style.maxWidth = maxSizeA + 'vw';
low.style.maxHeight = maxSizeA + 'vw';
changeTone(maxFreqA, startTimeA, function (freq, time) {
  console.log(freq, time);
  var size = (1 - freq / maxFreqA) * maxSizeA / 100 * window.innerWidth;

  srcA.frequency.value = freq;
  low.style.transition = time * 1.5 + 'ms';
  low.style.top = (1 - freq / maxFreqA) * (window.innerHeight - size / 2) + 'px';
  low.style.left = Math.random() * (window.innerWidth - size / 2) + 'px';
  low.style.height = size + 'px';
  low.style.width = size + 'px';
  low.zIndex = Math.round(size);
  low.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';
  // low.innerHTML = `${freq}, ${time}`

  fadeOut(gainA, low.style, time, freq);
});

// C
var maxFreqC = MIN_FREQ * 1.5;
var startTimeC = 800;
var maxSizeC = 30;
medium.style.maxWidth = maxSizeC + 'vw';
medium.style.maxHeight = maxSizeC + 'vw';
changeTone(maxFreqC, startTimeC, function (freq, time) {
  console.log(freq, time);
  srcC.frequency.value = freq;
  var size = (1 - freq / maxFreqC) * maxSizeC / 100 * window.innerWidth;
  medium.style.transition = time * 1.5 + 'ms';
  medium.style.top = (1 - freq / maxFreqC) * (window.innerHeight - size / 2) + 'px';
  medium.style.left = Math.random() * (window.innerWidth - size / 2) + 'px';
  medium.style.height = size + 'px';
  medium.style.width = size + 'px';
  medium.zIndex = Math.round(size);

  medium.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';
  // medium.innerHTML = `${freq}, ${time}`
  fadeOut(gainC, medium.style, time, freq);
});

// E
var maxFreqE = MIN_FREQ * 2;
var startTimeE = 800;
var maxSizeE = 20;
high.style.maxWidth = maxSizeE + 'vw';
high.style.maxHeight = maxSizeE + 'vw';
changeTone(maxFreqE, startTimeE, function (freq, time) {
  console.log(freq, time);
  srcE.frequency.value = freq;
  var size = (1 - freq / maxFreqE) * maxSizeE / 100 * window.innerWidth;
  high.style.transition = time * 1.5 + 'ms';
  high.style.top = (1 - freq / maxFreqE) * (window.innerHeight - size / 2) + 'px';
  high.style.left = Math.random() * (window.innerWidth - size / 2) + 'px';
  high.style.height = size + 'px';
  high.style.width = size + 'px';
  high.zIndex = Math.round(size);

  high.style.filter = 'hue-rotate(' + freq / maxFreqA * 360 + 'deg)';
  // high.innerHTML = `${freq}, ${time}`
  fadeOut(gainE, high.style, time, freq);
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