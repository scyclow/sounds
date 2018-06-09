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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./g/g.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./g/g.css":
/*!*****************!*\
  !*** ./g/g.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./g/g.css?");

/***/ }),

/***/ "./g/g.js":
/*!****************!*\
  !*** ./g/g.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n__webpack_require__(/*! ./g.css */ \"./g/g.css\");\n\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\n\nvar width = window.innerWidth / 4;\nvar height = window.innerHeight / 4;\ncanvas.width = width;\ncanvas.height = height;\n\nctx.fillStyle = '#e97';\nctx.strokeStyle = '#fb9';\n\nvar amt = window.innerWidth * window.innerHeight / 135;\n\nfunction draw() {\n  ctx.clearRect(0, 0, width, height);\n  ctx.beginPath();\n\n  for (var i = 0; i < amt; i++) {\n    var x = Math.round(Math.random() * width);\n    var y = Math.round(Math.random() * height);\n    ctx.moveTo(x, y);\n    ctx.arc(x, y, 3, 0, Math.PI * 2, true);\n  }\n\n  ctx.stroke();\n}\n\nsetInterval(draw, 1000 / 30);\ndraw();\n\nvar sample = function sample(arr) {\n  return arr[Math.floor(arr.length * Math.random())];\n};\n\nfunction btwn(x, y) {\n  var high = Math.max(x, y);\n  var low = Math.min(x, y);\n\n  return Math.random() * (high - low) + low;\n}\n\nvar AudioContext = window.AudioContext || window.webkitAudioContext;\nvar MAX_VOLUME = 0.04;\n\nfunction createSource() {\n  var srcType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';\n\n  var ctx = new AudioContext();\n\n  var source = ctx.createOscillator();\n  var gain = ctx.createGain();\n\n  source.connect(gain);\n  gain.connect(ctx.destination);\n\n  // window.gain = gain\n  gain.gain.value = MAX_VOLUME;\n  source.type = srcType;\n  source.start();\n  return { source: source, gain: gain, ctx: ctx };\n}\n\nvar _createSource = createSource(),\n    src1 = _createSource.source,\n    gain1 = _createSource.gain,\n    ctx1 = _createSource.ctx;\n\nvar _createSource2 = createSource(),\n    src2 = _createSource2.source,\n    gain2 = _createSource2.gain,\n    ctx2 = _createSource2.ctx;\n\nvar _createSource3 = createSource(),\n    src3 = _createSource3.source,\n    gain3 = _createSource3.gain,\n    ctx3 = _createSource3.ctx;\n\nvar _createSource4 = createSource(),\n    src4 = _createSource4.source,\n    gain4 = _createSource4.gain,\n    ctx4 = _createSource4.ctx;\n\nvar _createSource5 = createSource(),\n    src5 = _createSource5.source,\n    gain5 = _createSource5.gain,\n    ctx5 = _createSource5.ctx;\n\nvar BASE_FREQ = 400;\nvar MAX_TIME = 2000;\nvar MIN_TIME = 20;\nvar ratios = [1.005, 1.05, 1.25, 1.3333333, 2, 1.5, 1.125];\n\nsrc1.frequency.value = BASE_FREQ;\ngain4.gain.value = MAX_VOLUME / 3;\ngain5.gain.value = MAX_VOLUME / 3;\n\nvar sizeUnit = window.innerWidth > window.innerHeight ? 'vh' : 'vw';\n\nfunction createElement() {\n  var el = document.createElement('div');\n  el.setAttribute('class', 'elem');\n  el.style.transition = MAX_TIME + 'ms';\n  document.getElementById('sub-container').appendChild(el);\n  var changeSize = function changeSize(size) {\n    el.style.width = size + sizeUnit;\n    el.style.height = size + sizeUnit;\n  };\n  changeSize(10);\n  return changeSize;\n}\n\nvar change1 = createElement();\nvar change2 = createElement();\nvar change3 = createElement();\nvar change4 = createElement();\nvar change5 = createElement();\nvar change6 = createElement();\n\nfunction randInterval(cb, _ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n      high = _ref2[0],\n      low = _ref2[1];\n\n  cb();\n  setTimeout(function () {\n    return randInterval(cb, [high, low]);\n  }, btwn(high, low));\n}\n\nvar audioTransitionTime = 0.2;\nsetInterval(function () {\n  return audioTransitionTime += 0.02;\n}, 1000);\n\nvar smoothTo = function smoothTo(obj, ctx) {\n  return function (value) {\n    obj.exponentialRampToValueAtTime(value, ctx.currentTime + audioTransitionTime);\n  };\n};\n\nvar smoothFreq2 = smoothTo(src2.frequency, ctx2);\nvar smoothFreq3 = smoothTo(src3.frequency, ctx3);\nvar smoothFreq4 = smoothTo(src4.frequency, ctx4);\nvar smoothFreq5 = smoothTo(src5.frequency, ctx5);\n\nrandInterval(function () {\n  smoothFreq2(src1.frequency.value * sample(ratios));\n  change1(Math.random() * 90);\n  change2(Math.random() * 90);\n  change3(Math.random() * 90);\n}, [MAX_TIME, MIN_TIME]);\n\nrandInterval(function () {\n  smoothFreq3(src1.frequency.value * sample(ratios));\n  change4(Math.random() * 90);\n  change5(Math.random() * 90);\n  change6(Math.random() * 90);\n}, [MAX_TIME, MIN_TIME]);\n\nrandInterval(function () {\n  smoothFreq4(src1.frequency.value * sample(ratios));\n}, [10, 30]);\n\nrandInterval(function () {\n  src5.frequency.value = src1.frequency.value * sample(ratios);\n}, [10, 30]);\n\n//# sourceURL=webpack:///./g/g.js?");

/***/ })

/******/ });