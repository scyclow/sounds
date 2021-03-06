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
/******/ 	return __webpack_require__(__webpack_require__.s = "./e/e.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./e/e.css":
/*!*****************!*\
  !*** ./e/e.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./e/e.css?");

/***/ }),

/***/ "./e/e.js":
/*!****************!*\
  !*** ./e/e.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./e.css */ \"./e/e.css\");\n\nvar _colors = __webpack_require__(/*! ../utils/colors */ \"./utils/colors.js\");\n\nvar AudioContext = window.AudioContext || window.webkitAudioContext;\nvar MAX_VOLUME = 0.04;\n\nvar noop = function noop() {};\nfunction times(n) {\n  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;\n\n  var out = [];\n  for (var i = 0; i < n; i++) {\n    out.push(cb(i));\n  }\n  return out;\n}\n\nfunction btwn(x, y) {\n  var high = Math.max(x, y);\n  var low = Math.min(x, y);\n\n  return Math.random() * (high - low) + low;\n}\n\nvar elemsPerWidth = 9;\nvar elemsPerHeight = 6;\nvar movementTime = 1200;\nvar movement = 100;\nvar maxSize = 300;\nvar minSize = 250;\n\nvar elems = [];\nfunction renderElem(_ref) {\n  var left = _ref.left,\n      top = _ref.top,\n      size = _ref.size;\n\n  var elem = document.createElement('div');\n  Object.assign(elem.style, {\n    backgroundColor: (0, _colors.applyToHex)('#ff0000', { h: btwn(75, 30) }),\n    opacity: btwn(0.9, 0.75),\n    height: size + 'px',\n    width: size + 'px',\n    position: 'absolute',\n    top: top * btwn(0.9, 1.1) + 'px',\n    left: left * btwn(0.9, 1.1) + 'px',\n    borderRadius: '100%',\n    transition: btwn(movementTime * 1.6, movementTime * 1.9) + 'ms',\n    zIndex: Math.round(Math.random() * 20)\n  });\n  elem.setAttribute('class', 'elem');\n  document.getElementById('container').appendChild(elem);\n  elems.push(elem);\n}\n\ntimes(elemsPerWidth, function (w) {\n  times(elemsPerHeight, function (h) {\n    var size = btwn(125, maxSize);\n    var left = w * (window.innerWidth / elemsPerWidth) - 20;\n    var top = h * (window.innerHeight / elemsPerHeight) - 20;\n    renderElem({ left: left, top: top, size: size });\n  });\n});\n\nvar fadeOut = function fadeOut(gain, time) {\n  var mod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n\n  gain.gain.value = MAX_VOLUME * mod;\n\n  // should be some value between 0 and .05\n  var fadeRate = 0.0015;\n  var amt = 1 - fadeRate;\n\n  if (amt > 1) {\n    console.error('This is going to be too loud...');\n    console.error(amt);\n    debugger;\n    throw 'NOOOOOOOO';\n    return;\n  }\n\n  var interval = setInterval(function () {\n    gain.gain.value = gain.gain.value * amt;\n  }, time / 100);\n\n  setTimeout(function () {\n    return clearInterval(interval);\n  }, time - 5);\n};\n\nvar transitionFreq = function transitionFreq(src, to, duration) {\n  var steps = 100;\n  var from_ = src.frequency.value;\n\n  var amt = (to - from_) / steps;\n  var interval = setInterval(function () {\n    src.frequency.value = src.frequency.value + amt;\n  }, duration / steps);\n\n  setTimeout(function () {\n    return clearInterval(interval);\n  }, duration);\n};\n\nfunction createSource() {\n  var srcType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sine';\n\n  var ctx = new AudioContext();\n\n  var source = ctx.createOscillator();\n  var gain = ctx.createGain();\n\n  source.connect(gain);\n  gain.connect(ctx.destination);\n\n  // window.gain = gain\n  gain.gain.value = MAX_VOLUME;\n  source.type = srcType;\n  source.start();\n  return { source: source, gain: gain };\n}\n\nvar _createSource = createSource(),\n    source = _createSource.source,\n    gain = _createSource.gain;\n\nvar _createSource2 = createSource(),\n    source2 = _createSource2.source,\n    gain2 = _createSource2.gain;\n\nvar BASE_FREQ = 100;\nsource.frequency.value = BASE_FREQ;\nsource2.frequency.value = BASE_FREQ;\n\nvar direction = 1;\n\nvar changeDirection = function changeDirection() {\n  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1200;\n\n  var soundDelay = Math.random() * 0.1;\n  setTimeout(function () {\n    if (direction === -1) {\n      transitionFreq(source, BASE_FREQ, t);\n      transitionFreq(source2, BASE_FREQ, t);\n    } else {\n      var newFreq = btwn(BASE_FREQ * 6, BASE_FREQ * 20);\n      transitionFreq(source, newFreq, t);\n      transitionFreq(source2, newFreq * 0.9, t);\n    }\n  }, soundDelay);\n\n  fadeOut(gain, t);\n  fadeOut(gain2, t, 0.3);\n\n  elems.forEach(function (e) {\n    // if (direction === -1) e.style.transition = `${0}ms`\n    // else e.style.transition = `${btwn(movementTime * 1.6, movementTime * 1.9)}ms`\n    setTimeout(function () {\n      if (direction === -1) {\n        e.style.marginTop = 0;\n        e.style.marginLeft = 0;\n      } else {\n        e.style.opacity = btwn(0.9, 0.75);\n        e.style.marginTop = Math.random() * movement + 'px';\n        e.style.marginLeft = Math.random() * movement + 'px';\n      }\n    }, Math.random() * movementTime);\n  });\n  console.log(direction);\n  direction = direction * -1;\n};\n\nvar changeDirectionInterval = function changeDirectionInterval(t) {\n  setTimeout(function () {\n    var time = btwn(movementTime * 0.8, movementTime * 2);\n    changeDirection(time);\n    changeDirectionInterval(time);\n  }, t);\n};\n\nchangeDirection();\nchangeDirection();\nchangeDirectionInterval(1200);\n\n//# sourceURL=webpack:///./e/e.js?");

/***/ }),

/***/ "./utils/colors.js":
/*!*************************!*\
  !*** ./utils/colors.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//  weak\n\nvar max = Math.max.bind(Math);\nvar min = Math.min.bind(Math);\n\nfunction between(n, high, low) {\n  return max(min(n, high), low);\n}\n\nfunction wrap(number, max) {\n  return number >= max ? wrap(number - max, max) : number < 0 ? wrap(max + number, max) : number;\n}\n\nfunction numToHex(num) {\n  var hex = Math.round(Math.min(num, 255)).toString(16);\n  return (hex.length === 1 ? '0' + hex : hex).toUpperCase();\n}\n\nvar hexToNum = function hexToNum(hex) {\n  return parseInt(hex, 16);\n};\n\nvar rgbToHex = function rgbToHex(_ref) {\n  var r = _ref.r,\n      g = _ref.g,\n      b = _ref.b;\n  return '#' + numToHex(r) + numToHex(g) + numToHex(b);\n};\n\nvar hexToRgb = function hexToRgb(hex) {\n  return hex.length === 7 ? {\n    r: hexToNum(hex.slice(1, 3)),\n    g: hexToNum(hex.slice(3, 5)),\n    b: hexToNum(hex.slice(5, 7))\n  } : {\n    r: hexToNum(hex.slice(1, 2).repeat(2)),\n    g: hexToNum(hex.slice(2, 3).repeat(2)),\n    b: hexToNum(hex.slice(3, 4).repeat(2))\n  };\n};\n\nvar round = function round(n) {\n  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return +n.toFixed(decimals);\n};\n\n// http://www.rapidtables.com/convert/color/rgb-to-hsv.htm\nfunction rgbToHsv(_ref2) {\n  var r = _ref2.r,\n      g = _ref2.g,\n      b = _ref2.b;\n\n  r /= 255;\n  g /= 255;\n  b /= 255;\n\n  var max = Math.max(r, g, b);\n  var min = Math.min(r, g, b);\n  var diff = max - min;\n  var value = max;\n  var saturation = max ? diff / max : 0;\n\n  var hue = 0;\n  if (!diff) {}\n  // For some reason website says \"mod 6\". This returns wonky\n  // values, while + 6 appears to return the correct values.\n  else if (r === max) {\n      hue = (g - b) / diff + 6;\n    } else if (g === max) {\n      hue = (b - r) / diff + 2;\n    } else if (b === max) {\n      hue = (r - g) / diff + 4;\n    }\n\n  hue *= 60;\n\n  return {\n    h: hue === 360 ? 0 : hue,\n    s: round(saturation, 2),\n    v: round(value, 2)\n  };\n}\n\nfunction hsvToRgb(_ref3) {\n  var h = _ref3.h,\n      s = _ref3.s,\n      v = _ref3.v;\n\n  h /= 60;\n  var c = v * s;\n  var x = c * (1 - Math.abs(h % 2 - 1));\n  var m = v - c;\n\n  var r = void 0,\n      g = void 0,\n      b = void 0;\n  switch (Math.floor(h)) {\n    case 0:\n    case 6:\n      r = c;g = x;b = 0;break;\n    case 1:\n      r = x;g = c;b = 0;break;\n    case 2:\n      r = 0;g = c;b = x;break;\n    case 3:\n      r = 0;g = x;b = c;break;\n    case 4:\n      r = x;g = 0;b = c;break;\n    case 5:\n      r = c;g = 0;b = x;break;\n  }\n\n  return {\n    r: round((r + m) * 255),\n    g: round((g + m) * 255),\n    b: round((b + m) * 255)\n  };\n}\n\nvar hexToHsv = function hexToHsv(hex) {\n  return rgbToHsv(hexToRgb(hex));\n};\nvar hsvToHex = function hsvToHex(hsv) {\n  return rgbToHex(hsvToRgb(hsv));\n};\n\nfunction applyToHex(hex, _ref4) {\n  var _ref4$h = _ref4.h,\n      h = _ref4$h === undefined ? 0 : _ref4$h,\n      _ref4$s = _ref4.s,\n      s = _ref4$s === undefined ? 0 : _ref4$s,\n      _ref4$v = _ref4.v,\n      v = _ref4$v === undefined ? 0 : _ref4$v;\n  var mod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n\n  var hsv = hexToHsv(hex);\n  return hsvToHex({\n    h: wrap(hsv.h + h / mod, 360),\n    s: between(hsv.s + s / mod, 1, 0),\n    v: between(hsv.v + v / mod, 1, 0)\n  });\n}\n\n// experimental\nfunction setHsvOnHex(hex, _ref5) {\n  var h = _ref5.h,\n      s = _ref5.s,\n      v = _ref5.v;\n\n  var hsv = hexToHsv(hex);\n  return hsvToHex({\n    h: !isNaN(h) ? wrap(h, 360) : hsv.h,\n    s: !isNaN(s) ? between(s, 1, 0) : hsv.s,\n    v: !isNaN(v) ? between(v, 1, 0) : hsv.v\n  });\n}\n\nvar randMax = function randMax(ceil) {\n  return Math.floor(Math.random() * ceil);\n};\n\nfunction randHex() {\n  var color = '#';\n  for (var i = 0; i < 6; i++) {\n    color += randMax(16).toString(16);\n  }\n  return color.toUpperCase();\n}\n\nfunction polarize(hex) {\n  return applyToHex(hex, { h: 180 });\n}\n\nmodule.exports = {\n  applyToHex: applyToHex,\n  __experimental__: { setHsvOnHex: setHsvOnHex },\n  hexToNum: hexToNum,\n  hexToRgb: hexToRgb,\n  hsvToRgb: hsvToRgb,\n  numToHex: numToHex,\n  rgbToHex: rgbToHex,\n  rgbToHsv: rgbToHsv,\n  randHex: randHex,\n  polarize: polarize\n};\n\n//# sourceURL=webpack:///./utils/colors.js?");

/***/ })

/******/ });