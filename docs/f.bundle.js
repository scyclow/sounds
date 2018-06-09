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
/******/ 	return __webpack_require__(__webpack_require__.s = "./f/f.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./f/f.css":
/*!*****************!*\
  !*** ./f/f.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./f/f.css?");

/***/ }),

/***/ "./f/f.js":
/*!****************!*\
  !*** ./f/f.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./f.css */ \"./f/f.css\");\n\nfunction times(n) {\n  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;\n\n  var out = [];\n  for (var i = 0; i < n; i++) {\n    out.push(cb(i));\n  }\n  return out;\n}\n\nfunction btwn(x, y) {\n  var high = Math.max(x, y);\n  var low = Math.min(x, y);\n\n  return Math.random() * (high - low) + low;\n}\n\nvar baseWidth = 1020;\nvar baseHeight = 680;\nvar adjW = window.innerWidth / baseWidth;\nvar adjH = window.innerHeight / baseHeight;\n\nvar squares = times(40, function (n) {\n  var div = document.createElement('div');\n  var height = btwn(50, 200) * adjH;\n  var width = btwn(50, 200) * adjW;\n  Object.assign(div.style, {\n    height: height + 'px',\n    width: width + 'px',\n    top: Math.random() * (window.innerHeight - height) + 'px',\n    left: Math.random() * (window.innerWidth - width) + 'px'\n  });\n  div.setAttribute('class', 'thing');\n  document.getElementById('container').appendChild(div);\n  return div;\n});\n\nvar direction = 1;\nsetInterval(function () {\n  direction = direction * -1;\n  squares.forEach(function (square) {\n    square.style.marginTop = direction * btwn(0, 5) + 'px';\n    square.style.marginLeft = direction * btwn(0, 5) + 'px';\n  });\n}, 1000 / 60);\n\nvar AudioContext = window.AudioContext || window.webkitAudioContext;\nvar MAX_VOLUME = 0.04;\n\nfunction createSource() {\n  var srcType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';\n\n  var ctx = new AudioContext();\n\n  var source = ctx.createOscillator();\n  var gain = ctx.createGain();\n\n  source.connect(gain);\n  gain.connect(ctx.destination);\n\n  // window.gain = gain\n  gain.gain.value = MAX_VOLUME;\n  source.type = srcType;\n  source.start();\n  return { source: source, gain: gain };\n}\n\nvar _createSource = createSource(),\n    src1 = _createSource.source,\n    gain1 = _createSource.gain;\n\nvar _createSource2 = createSource(),\n    src2 = _createSource2.source,\n    gain2 = _createSource2.gain;\n\nvar _createSource3 = createSource(),\n    src3 = _createSource3.source,\n    gain3 = _createSource3.gain;\n\nsrc1.frequency.value = 50;\nsrc2.frequency.value = 55;\nsrc3.frequency.value = 2000;\n\ngain1.gain.value = MAX_VOLUME * 8;\ngain2.gain.value = MAX_VOLUME * 8;\ngain3.gain.value = MAX_VOLUME / 24;\n\n//# sourceURL=webpack:///./f/f.js?");

/***/ })

/******/ });