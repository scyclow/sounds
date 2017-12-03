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


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

__webpack_require__(14);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = window.innerWidth / 4;
var height = window.innerHeight / 4;
canvas.width = width;
canvas.height = height;

ctx.fillStyle = '#e97';
ctx.strokeStyle = '#fb9';

var amt = window.innerWidth * window.innerHeight / 135;

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();

  for (var i = 0; i < amt; i++) {
    var x = Math.round(Math.random() * width);
    var y = Math.round(Math.random() * height);
    ctx.moveTo(x, y);
    ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  }

  ctx.stroke();
}

setInterval(draw, 1000 / 30);
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

var BASE_FREQ = 400;
var MAX_TIME = 2000;
var MIN_TIME = 20;
var ratios = [1.005, 1.05, 1.25, 1.3333333, 2, 1.5, 1.125];

src1.frequency.value = BASE_FREQ;
gain4.gain.value = MAX_VOLUME / 3;
gain5.gain.value = MAX_VOLUME / 3;

var sizeUnit = window.innerWidth > window.innerHeight ? 'vh' : 'vw';

function createElement() {
  var el = document.createElement('div');
  el.setAttribute('class', 'elem');
  el.style.transition = MAX_TIME + 'ms';
  document.getElementById('sub-container').appendChild(el);
  var changeSize = function changeSize(size) {
    el.style.width = size + sizeUnit;
    el.style.height = size + sizeUnit;
  };
  changeSize(10);
  return changeSize;
}

var change1 = createElement();
var change2 = createElement();
var change3 = createElement();
var change4 = createElement();
var change5 = createElement();
var change6 = createElement();

function randInterval(cb, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      high = _ref2[0],
      low = _ref2[1];

  cb();
  setTimeout(function () {
    return randInterval(cb, [high, low]);
  }, btwn(high, low));
}

randInterval(function () {
  src2.frequency.value = src1.frequency.value * sample(ratios);
  change1(Math.random() * 90);
  change2(Math.random() * 90);
  change3(Math.random() * 90);
}, [MAX_TIME, MIN_TIME]);

randInterval(function () {
  src3.frequency.value = src1.frequency.value * sample(ratios);
  change4(Math.random() * 90);
  change5(Math.random() * 90);
  change6(Math.random() * 90);
}, [MAX_TIME, MIN_TIME]);

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