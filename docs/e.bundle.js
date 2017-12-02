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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//  weak

var max = Math.max.bind(Math);
var min = Math.min.bind(Math);

function between(n, high, low) {
  return max(min(n, high), low);
}

function wrap(number, max) {
  return number >= max ? wrap(number - max, max) : number < 0 ? wrap(max + number, max) : number;
}

function numToHex(num) {
  var hex = Math.round(Math.min(num, 255)).toString(16);
  return (hex.length === 1 ? '0' + hex : hex).toUpperCase();
}

var hexToNum = function hexToNum(hex) {
  return parseInt(hex, 16);
};

var rgbToHex = function rgbToHex(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  return '#' + numToHex(r) + numToHex(g) + numToHex(b);
};

var hexToRgb = function hexToRgb(hex) {
  return hex.length === 7 ? {
    r: hexToNum(hex.slice(1, 3)),
    g: hexToNum(hex.slice(3, 5)),
    b: hexToNum(hex.slice(5, 7))
  } : {
    r: hexToNum(hex.slice(1, 2).repeat(2)),
    g: hexToNum(hex.slice(2, 3).repeat(2)),
    b: hexToNum(hex.slice(3, 4).repeat(2))
  };
};

var round = function round(n) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return +n.toFixed(decimals);
};

// http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
function rgbToHsv(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;

  r /= 255;
  g /= 255;
  b /= 255;

  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var diff = max - min;
  var value = max;
  var saturation = max ? diff / max : 0;

  var hue = 0;
  if (!diff) {}
  // For some reason website says "mod 6". This returns wonky
  // values, while + 6 appears to return the correct values.
  else if (r === max) {
      hue = (g - b) / diff + 6;
    } else if (g === max) {
      hue = (b - r) / diff + 2;
    } else if (b === max) {
      hue = (r - g) / diff + 4;
    }

  hue *= 60;

  return {
    h: hue === 360 ? 0 : hue,
    s: round(saturation, 2),
    v: round(value, 2)
  };
}

function hsvToRgb(_ref3) {
  var h = _ref3.h,
      s = _ref3.s,
      v = _ref3.v;

  h /= 60;
  var c = v * s;
  var x = c * (1 - Math.abs(h % 2 - 1));
  var m = v - c;

  var r = void 0,
      g = void 0,
      b = void 0;
  switch (Math.floor(h)) {
    case 0:
    case 6:
      r = c;g = x;b = 0;break;
    case 1:
      r = x;g = c;b = 0;break;
    case 2:
      r = 0;g = c;b = x;break;
    case 3:
      r = 0;g = x;b = c;break;
    case 4:
      r = x;g = 0;b = c;break;
    case 5:
      r = c;g = 0;b = x;break;
  }

  return {
    r: round((r + m) * 255),
    g: round((g + m) * 255),
    b: round((b + m) * 255)
  };
}

var hexToHsv = function hexToHsv(hex) {
  return rgbToHsv(hexToRgb(hex));
};
var hsvToHex = function hsvToHex(hsv) {
  return rgbToHex(hsvToRgb(hsv));
};

function applyToHex(hex, _ref4) {
  var _ref4$h = _ref4.h,
      h = _ref4$h === undefined ? 0 : _ref4$h,
      _ref4$s = _ref4.s,
      s = _ref4$s === undefined ? 0 : _ref4$s,
      _ref4$v = _ref4.v,
      v = _ref4$v === undefined ? 0 : _ref4$v;
  var mod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var hsv = hexToHsv(hex);
  return hsvToHex({
    h: wrap(hsv.h + h / mod, 360),
    s: between(hsv.s + s / mod, 1, 0),
    v: between(hsv.v + v / mod, 1, 0)
  });
}

// experimental
function setHsvOnHex(hex, _ref5) {
  var h = _ref5.h,
      s = _ref5.s,
      v = _ref5.v;

  var hsv = hexToHsv(hex);
  return hsvToHex({
    h: !isNaN(h) ? wrap(h, 360) : hsv.h,
    s: !isNaN(s) ? between(s, 1, 0) : hsv.s,
    v: !isNaN(v) ? between(v, 1, 0) : hsv.v
  });
}

var randMax = function randMax(ceil) {
  return Math.floor(Math.random() * ceil);
};

function randHex() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += randMax(16).toString(16);
  }
  return color.toUpperCase();
}

function polarize(hex) {
  return applyToHex(hex, { h: 180 });
}

module.exports = {
  applyToHex: applyToHex,
  __experimental__: { setHsvOnHex: setHsvOnHex },
  hexToNum: hexToNum,
  hexToRgb: hexToRgb,
  hsvToRgb: hsvToRgb,
  numToHex: numToHex,
  rgbToHex: rgbToHex,
  rgbToHsv: rgbToHsv,
  randHex: randHex,
  polarize: polarize
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _colors = __webpack_require__(10);

var AudioContext = window.AudioContext || window.webkitAudioContext;
var MAX_VOLUME = 0.03;

var noop = function noop() {};
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

var elemsPerWidth = 12;
var elemsPerHeight = 7;
var movementTime = 1200;
var movement = 80;

var elems = [];
function renderElem(_ref) {
  var left = _ref.left,
      top = _ref.top,
      size = _ref.size;

  var elem = document.createElement('div');
  Object.assign(elem.style, {
    backgroundColor: (0, _colors.applyToHex)('#ff0000', { h: btwn(75, 30) }),
    opacity: btwn(0.9, 0.75),
    height: size + 'px',
    width: size + 'px',
    position: 'absolute',
    top: top * btwn(0.9, 1.1) + 'px',
    left: left * btwn(0.9, 1.1) + 'px',
    borderRadius: '100%',
    transition: btwn(movementTime * 1.6, movementTime * 1.9) + 'ms',
    zIndex: Math.round(Math.random() * 20)
  });
  elem.setAttribute('class', 'elem');
  document.getElementById('container').appendChild(elem);
  elems.push(elem);
}

times(elemsPerWidth, function (w) {
  times(elemsPerHeight, function (h) {
    var size = btwn(125, 225);
    var left = w * (window.innerWidth / elemsPerWidth) - 20;
    var top = h * (window.innerHeight / elemsPerHeight) - 20;
    renderElem({ left: left, top: top, size: size });
  });
});

var fadeOut = function fadeOut(gain, time) {
  var mod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  gain.gain.value = MAX_VOLUME * mod;

  // should be some value between 0 and .05
  var fadeRate = 0.0015;
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
  }, time / 100);

  setTimeout(function () {
    return clearInterval(interval);
  }, time - 5);
};

var transitionFreq = function transitionFreq(src, to, duration) {
  var steps = 100;
  var from_ = src.frequency.value;

  var amt = (to - from_) / steps;
  var interval = setInterval(function () {
    src.frequency.value = src.frequency.value + amt;
  }, duration / steps);

  setTimeout(function () {
    return clearInterval(interval);
  }, duration);
};

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
    source = _createSource.source,
    gain = _createSource.gain;

var _createSource2 = createSource(),
    source2 = _createSource2.source,
    gain2 = _createSource2.gain;

var BASE_FREQ = 100;
source.frequency.value = BASE_FREQ;
source2.frequency.value = BASE_FREQ;

var direction = 1;

var changeDirection = function changeDirection() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1200;

  var soundDelay = Math.random() * 0.1;
  setTimeout(function () {
    if (direction === -1) {
      transitionFreq(source, BASE_FREQ, t);
      transitionFreq(source2, BASE_FREQ, t);
    } else {
      var newFreq = btwn(BASE_FREQ * 6, BASE_FREQ * 20);
      transitionFreq(source, newFreq, t);
      transitionFreq(source2, newFreq * 0.9, t);
    }
  }, soundDelay);

  fadeOut(gain, t);
  fadeOut(gain2, t, 0.3);

  elems.forEach(function (e) {
    // if (direction === -1) e.style.transition = `${0}ms`
    // else e.style.transition = `${btwn(movementTime * 1.6, movementTime * 1.9)}ms`
    setTimeout(function () {
      if (direction === -1) {
        e.style.marginTop = 0;
        e.style.marginLeft = 0;
      } else {
        e.style.opacity = btwn(0.9, 0.75);
        e.style.marginTop = Math.random() * movement + 'px';
        e.style.marginLeft = Math.random() * movement + 'px';
      }
    }, Math.random() * movementTime);
  });
  console.log(direction);
  direction = direction * -1;
};

var changeDirectionInterval = function changeDirectionInterval(t) {
  setTimeout(function () {
    var time = btwn(movementTime * 0.8, movementTime * 2);
    changeDirection(time);
    changeDirectionInterval(time);
  }, t);
};

changeDirection();
changeDirection();
changeDirectionInterval(1200);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });