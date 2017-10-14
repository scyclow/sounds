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

function changeTone(src, maxFreq, time) {
  setTimeout(function () {
    src.frequency.value = Math.random() * maxFreq;
    console.log(time);
    changeTone(src, maxFreq, time * randomDirection(0.2));
  }, Math.random() * time);
}

changeTone(createSource('triangle'), 550, 200); // A
changeTone(createSource(), 1308, 300); // C
changeTone(createSource(), 3296, 400); // E

// window.s = createSource()

// const s1 = createSource('triangle')
// const s2 = createSource()
// const s3 = createSource()

// s1.frequency.value =
// s2.frequency.value = 654/2
// s3.frequency.value = 1648/2


// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// var osc = audioCtx.createOscillator();

// const frequency = 440;
// // Buffer size of 4096, 0 input channels, 1 output channel.
// const scriptProcessorNode = audioCtx.createScriptProcessorNode(4096, 0, 1);
// scriptProcessorNode.onaudioprocess = function(event) {
//     const startTime = audioCtx.currentTime;
//     const samples = event.outputBuffer.getChannelData(0);
//     for (var i = 0; i < 4096; i++) {
//         const t = startTime + (i / audioCtx.sampleRate);
//         // samples is a Float32Array
//         samples[i] = Math.sin(t * frequency);
//     }
// };
// osc.connect(scriptProcessorNode)
// scriptProcessorNode.connect(audioCtx.destination);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });