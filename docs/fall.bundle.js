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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(2);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _colors = __webpack_require__(6);

// const ctx = new AudioContext();
// const oscillator = ctx.createOscillator()
// const gain = ctx.createGain()

// oscillator.connect(gain)
// gain.connect(ctx.destination)

// gain.gain.value = 1
// oscillator.frequency.value = 18

// window.gain = gain
// window.oscillator = oscillator

// oscillator.start(0)

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

var direction = 1;

var changeDirection = function changeDirection() {
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
changeDirection();
setInterval(changeDirection, movementTime);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??postcss!./fall.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??postcss!./fall.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  background-color: #001515;\n}\n#background {\n  background: -webkit-gradient(linear, left top, right top, from(#00ffb9), to(#ffa702));\n  background: linear-gradient(90deg, #00ffb9, #ffa702);\n  background-size: 150% 150%;\n  -webkit-animation: Animate 80s ease infinite;\n          animation: Animate 80s ease infinite;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  overflow: hidden;\n}\n\n@-webkit-keyframes Animate {\n    0%{background-position:0% 50%}\n    50%{background-position:100% 50%}\n    100%{background-position:0% 50%}\n}\n", ""]);

// exports


/***/ }),
/* 6 */
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

/***/ })
/******/ ]);