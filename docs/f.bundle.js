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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

function times(n) {
  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

  var out = [];
  for (var i = 0; i < n; i++) {
    out.push(cb(i));
  }
  return out;
}

function btwn(x, y) {
  var high = Math.max(x, y);
  var low = Math.min(x, y);

  return Math.random() * (high - low) + low;
}

var baseWidth = 1020;
var baseHeight = 680;
var adjW = window.innerWidth / baseWidth;
var adjH = window.innerHeight / baseHeight;

var squares = times(40, function (n) {
  var div = document.createElement('div');
  var height = btwn(50, 200) * adjH;
  var width = btwn(50, 200) * adjW;
  Object.assign(div.style, {
    height: height + 'px',
    width: width + 'px',
    top: Math.random() * (window.innerHeight - height) + 'px',
    left: Math.random() * (window.innerWidth - width) + 'px'
  });
  div.setAttribute('class', 'thing');
  document.getElementById('container').appendChild(div);
  return div;
});

var direction = 1;
setInterval(function () {
  direction = direction * -1;
  squares.forEach(function (square) {
    square.style.marginTop = direction * btwn(0, 5) + 'px';
    square.style.marginLeft = direction * btwn(0, 5) + 'px';
  });
}, 1000 / 60);

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

src1.frequency.value = 50;
src2.frequency.value = 55;
src3.frequency.value = 2000;

gain1.gain.value = MAX_VOLUME * 8;
gain2.gain.value = MAX_VOLUME * 8;
gain3.gain.value = MAX_VOLUME / 24;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });