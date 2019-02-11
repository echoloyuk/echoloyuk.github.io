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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/demojs/ui.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/demojs/ui.css":
/*!****************************!*\
  !*** ./demo/demojs/ui.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./ui.css */ "./node_modules/css-loader/index.js!./demo/demojs/ui.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./demo/demojs/ui.js":
/*!***************************!*\
  !*** ./demo/demojs/ui.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PianoUI; });
/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/index.js */ "./src/index.js");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.css */ "./demo/demojs/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PianoUI =
/*#__PURE__*/
function () {
  function PianoUI() {
    _classCallCheck(this, PianoUI);

    this.piano = new _src_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.aniTimmer = {};
  }

  _createClass(PianoUI, [{
    key: "initPiano",
    value: function initPiano() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.piano.resume().then(function () {
          return _this.piano.initAllSound();
        }).then(function () {
          resolve(_this.piano);
        }).catch(function () {
          reject();
        });
      });
    }
  }, {
    key: "bindDomEvent",
    value: function bindDomEvent(element) {
      var self = this;
      element.addEventListener('click', function (e) {
        if (!e || !e.target) {
          return;
        }

        var step = e.target.getAttribute('data-step');
        var octave = parseInt(e.target.getAttribute('data-octave'));
        var alter = parseInt(e.target.getAttribute('data-alter'));
        console.log(step, octave, alter);
        self.playOneShot(step, octave, alter);
      });
    }
  }, {
    key: "render",
    value: function render(element) {
      var _this2 = this;

      if (!element) {
        return;
      }

      var keyboard = this.piano.keyboard;
      var html = '<div class="lite-piano-ui-container">';
      keyboard.forEach(function (item) {
        html += "<div class=\"piano-key-outer ".concat(item.alter ? 'alter' : '', "\">");
        html += "<div class=\"piano-key\"\n                id=\"".concat(item.step, "-").concat(item.octave, "-").concat(item.alter, "\"\n                data-step=\"").concat(item.step, "\" \n                data-octave=\"").concat(item.octave, "\" \n                data-alter=\"").concat(item.alter, "\">\n              </div></div>");
      });
      html += '</div>';
      element.innerHTML = html;

      var onResize = function onResize() {
        _this2.refreshAlterKey(element);
      }; // resize to calculate black key to show.


      window.removeEventListener('resize', onResize);
      window.addEventListener('resize', onResize);
      this.refreshAlterKey(element);
    }
  }, {
    key: "playOneShot",
    value: function playOneShot(step, octave, alter) {
      if (!step || !octave) {
        return;
      }

      var id = "".concat(step, "-").concat(octave, "-").concat(alter ? 1 : 0);
      var keyDom = document.getElementById(id);

      if (!keyDom) {
        return;
      }

      keyDom.classList.add('playing');
      this.piano.oneShot(step, octave, alter);

      try {
        clearTimeout(this.aniTimmer[id]);
      } catch (e) {}

      this.aniTimmer[id] = setTimeout(function () {
        keyDom.classList.remove('playing');
      }, 300);
    }
  }, {
    key: "refreshAlterKey",
    value: function refreshAlterKey(element) {
      if (!element) {
        return;
      }

      var alterKeyWidth = element.offsetWidth / 86;
      var keys = element.querySelectorAll('.piano-key-outer.alter .piano-key');
      keys && keys.forEach(function (key) {
        key.style.width = alterKeyWidth + 'px';
      });
    }
  }, {
    key: "renderMusicObj",
    value: function renderMusicObj(obj, panel) {
      var html = '<div class="music-demo-panel">';
      obj.forEach(function (item) {
        html += "<div class=\"music-item\" data-played=\"".concat(item.played, "\">").concat(item.step, " ").concat(item.octave, " ").concat(item.timeStamp, "</div>");
      });
      html += '</div>';
      panel.innerHTML = html;
    }
  }, {
    key: "renderMusicObjTest",
    value: function renderMusicObjTest(obj, panel) {
      var html = '<div class="music-test-panel">';
      obj.playingList.forEach(function (listItem, listIndex) {
        html += "<div class=\"music-test-measure-panel\" id=\"measure_".concat(listIndex, "\">");
        html += "<div class=\"music-test-measure-title\">No.".concat(listIndex + 1, " measure.</div>");
        html += "<div class=\"music-test-measure\" data-index=\"".concat(listIndex, "\">");
        Object.keys(listItem).forEach(function (staffItemName) {
          html += '<div class="music-test-staff">';
          listItem[staffItemName].forEach(function (noteItem) {
            html += "<div class=\"music-test-note\" id=\"note_".concat(noteItem.uid, "\">");
            html += "".concat(noteItem.step, " ").concat(noteItem.octave, " ").concat(noteItem.alter, " ").concat(noteItem.timeStamp);
            html += '</div>';
          });
          html += '</div>';
        });
        html += '</div>';
        html += '</div>';
      });
      html += '</div>';
      panel.innerHTML = html;
    }
  }]);

  return PianoUI;
}();


window.PianoUI = PianoUI;

/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ "./node_modules/css-loader/index.js!./demo/demojs/ui.css":
/*!******************************************************!*\
  !*** ./node_modules/css-loader!./demo/demojs/ui.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lite-piano-ui-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n.lite-piano-ui-container .piano-key-outer {\n  height: 100%;\n  flex-basis: 2%;\n}\n.lite-piano-ui-container .piano-key-outer .piano-key {\n  border: 1px solid #333;\n  height: 100%;\n  transition: all .2s ease-out;\n  background: #fff;\n}\n.lite-piano-ui-container .piano-key-outer .piano-key.playing {\n  background: #bbb;\n}\n\n.lite-piano-ui-container .piano-key-outer.alter {\n  height: 100%;\n  flex-basis: 0;\n  position: relative;\n}\n\n.lite-piano-ui-container .piano-key-outer.alter .piano-key {\n  height: 60%;\n  position: absolute;\n  left: 0;\n  top:0;\n  background: #333;\n  transform: translateX(-50%);\n}\n.lite-piano-ui-container .piano-key-outer.alter .piano-key.playing {\n  background: #999;\n}\n\n\n.music-test-measure {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n}\n.music-test-panel {\n  position: relative;\n}\n.music-test-measure-panel {\n  margin-bottom: 12px;\n}\n.music-test-staff {\n  flex-basis: 100%;\n  text-align: center;\n  border: 1px solid #666;\n}\n.music-test-measure-title {\n  text-align: center;\n  background: #666;\n  height: 32px;\n  line-height: 32px;\n  color: #fff;\n}\n\n.music-test-note.played {\n  background: #ccc;\n  color: #fff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
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

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/data/piano-keyboard.js":
/*!************************************!*\
  !*** ./src/data/piano-keyboard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This data represents the standard 88-key piano supported by the lite-piano component. 
 * Each key is an object in keyboard array: 
 *  step is the name of the key, 
 *  octave represents the first octave, 
 *  and alter = 1 to indicate the piano's black key. 0 is white key.
 * 
 * You can get all the piano keys according to the keyboard array,
 * and call the oneShot(step, octave, alter) to play the specified sound.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  keyborad: [{
    step: 'A',
    octave: 0,
    alter: 0
  }, {
    step: 'A',
    octave: 0,
    alter: 1
  }, {
    step: 'B',
    octave: 0,
    alter: 0
  }, {
    step: 'C',
    octave: 1,
    alter: 0
  }, {
    step: 'C',
    octave: 1,
    alter: 1
  }, {
    step: 'D',
    octave: 1,
    alter: 0
  }, {
    step: 'D',
    octave: 1,
    alter: 1
  }, {
    step: 'E',
    octave: 1,
    alter: 0
  }, {
    step: 'F',
    octave: 1,
    alter: 0
  }, {
    step: 'F',
    octave: 1,
    alter: 1
  }, {
    step: 'G',
    octave: 1,
    alter: 0
  }, {
    step: 'G',
    octave: 1,
    alter: 1
  }, {
    step: 'A',
    octave: 1,
    alter: 0
  }, {
    step: 'A',
    octave: 1,
    alter: 1
  }, {
    step: 'B',
    octave: 1,
    alter: 0
  }, {
    step: 'C',
    octave: 2,
    alter: 0
  }, {
    step: 'C',
    octave: 2,
    alter: 1
  }, {
    step: 'D',
    octave: 2,
    alter: 0
  }, {
    step: 'D',
    octave: 2,
    alter: 1
  }, {
    step: 'E',
    octave: 2,
    alter: 0
  }, {
    step: 'F',
    octave: 2,
    alter: 0
  }, {
    step: 'F',
    octave: 2,
    alter: 1
  }, {
    step: 'G',
    octave: 2,
    alter: 0
  }, {
    step: 'G',
    octave: 2,
    alter: 1
  }, {
    step: 'A',
    octave: 2,
    alter: 0
  }, {
    step: 'A',
    octave: 2,
    alter: 1
  }, {
    step: 'B',
    octave: 2,
    alter: 0
  }, {
    step: 'C',
    octave: 3,
    alter: 0
  }, {
    step: 'C',
    octave: 3,
    alter: 1
  }, {
    step: 'D',
    octave: 3,
    alter: 0
  }, {
    step: 'D',
    octave: 3,
    alter: 1
  }, {
    step: 'E',
    octave: 3,
    alter: 0
  }, {
    step: 'F',
    octave: 3,
    alter: 0
  }, {
    step: 'F',
    octave: 3,
    alter: 1
  }, {
    step: 'G',
    octave: 3,
    alter: 0
  }, {
    step: 'G',
    octave: 3,
    alter: 1
  }, {
    step: 'A',
    octave: 3,
    alter: 0
  }, {
    step: 'A',
    octave: 3,
    alter: 1
  }, {
    step: 'B',
    octave: 3,
    alter: 0
  }, {
    step: 'C',
    octave: 4,
    alter: 0
  }, {
    step: 'C',
    octave: 4,
    alter: 1
  }, {
    step: 'D',
    octave: 4,
    alter: 0
  }, {
    step: 'D',
    octave: 4,
    alter: 1
  }, {
    step: 'E',
    octave: 4,
    alter: 0
  }, {
    step: 'F',
    octave: 4,
    alter: 0
  }, {
    step: 'F',
    octave: 4,
    alter: 1
  }, {
    step: 'G',
    octave: 4,
    alter: 0
  }, {
    step: 'G',
    octave: 4,
    alter: 1
  }, {
    step: 'A',
    octave: 4,
    alter: 0
  }, {
    step: 'A',
    octave: 4,
    alter: 1
  }, {
    step: 'B',
    octave: 4,
    alter: 0
  }, {
    step: 'C',
    octave: 5,
    alter: 0
  }, {
    step: 'C',
    octave: 5,
    alter: 1
  }, {
    step: 'D',
    octave: 5,
    alter: 0
  }, {
    step: 'D',
    octave: 5,
    alter: 1
  }, {
    step: 'E',
    octave: 5,
    alter: 0
  }, {
    step: 'F',
    octave: 5,
    alter: 0
  }, {
    step: 'F',
    octave: 5,
    alter: 1
  }, {
    step: 'G',
    octave: 5,
    alter: 0
  }, {
    step: 'G',
    octave: 5,
    alter: 1
  }, {
    step: 'A',
    octave: 5,
    alter: 0
  }, {
    step: 'A',
    octave: 5,
    alter: 1
  }, {
    step: 'B',
    octave: 5,
    alter: 0
  }, {
    step: 'C',
    octave: 6,
    alter: 0
  }, {
    step: 'C',
    octave: 6,
    alter: 1
  }, {
    step: 'D',
    octave: 6,
    alter: 0
  }, {
    step: 'D',
    octave: 6,
    alter: 1
  }, {
    step: 'E',
    octave: 6,
    alter: 0
  }, {
    step: 'F',
    octave: 6,
    alter: 0
  }, {
    step: 'F',
    octave: 6,
    alter: 1
  }, {
    step: 'G',
    octave: 6,
    alter: 0
  }, {
    step: 'G',
    octave: 6,
    alter: 1
  }, {
    step: 'A',
    octave: 6,
    alter: 0
  }, {
    step: 'A',
    octave: 6,
    alter: 1
  }, {
    step: 'B',
    octave: 6,
    alter: 0
  }, {
    step: 'C',
    octave: 7,
    alter: 0
  }, {
    step: 'C',
    octave: 7,
    alter: 1
  }, {
    step: 'D',
    octave: 7,
    alter: 0
  }, {
    step: 'D',
    octave: 7,
    alter: 1
  }, {
    step: 'E',
    octave: 7,
    alter: 0
  }, {
    step: 'F',
    octave: 7,
    alter: 0
  }, {
    step: 'F',
    octave: 7,
    alter: 1
  }, {
    step: 'G',
    octave: 7,
    alter: 0
  }, {
    step: 'G',
    octave: 7,
    alter: 1
  }, {
    step: 'A',
    octave: 7,
    alter: 0
  }, {
    step: 'A',
    octave: 7,
    alter: 1
  }, {
    step: 'B',
    octave: 7,
    alter: 0
  }, {
    step: 'C',
    octave: 8,
    alter: 0
  }]
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LitePiano; });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ "./src/data/data.js");
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_piano_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/piano-keyboard */ "./src/data/piano-keyboard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // pitch rate in each octave. standard rate level is in 4 

var PITCH_RATE = [0.0625, 0.125, 0.25, 0.5, 1, 2, 4, 8, 16];

var LitePiano =
/*#__PURE__*/
function () {
  function LitePiano() {
    _classCallCheck(this, LitePiano);

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext();
    this.context = context;
    this.bufferList = [];
    this._origin = _data_data__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.keyboard = _data_piano_keyboard__WEBPACK_IMPORTED_MODULE_2__["default"].keyborad;
  }
  /**
   * For Note:
   * > On iOS, the Web Audio API requires sounds to be triggered from an explicit user action, such as a tap. 
   * > Calling noteOn() from an onload event will not play sound.
   * in https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/PlayingandSynthesizingSounds/PlayingandSynthesizingSounds.html#//apple_ref/doc/uid/TP40009523-CH6-SW1
   * 
   * The function encapsulates the automatic processing of the state in which the sound context of the unlocked ios is suspended by user interaction.
   * 
   * Returns the Promise object, if executed on the IOS, then resolve will be executed after the user clicks the screen to unlock the audio context.
   */


  _createClass(LitePiano, [{
    key: "resume",
    value: function resume() {
      var context = this.context;
      return new Promise(function (resolve, reject) {
        if (context.state === 'suspended' && 'ontouchstart' in window) {
          var unlock = function unlock() {
            context.resume().then(function () {
              document.body.removeEventListener('touchstart', unlock);
              document.body.removeEventListener('touchend', unlock);
              resolve();
            }).catch(function (e) {
              reject(e);
            });
          };

          document.body.addEventListener('touchstart', unlock, false);
          document.body.addEventListener('touchend', unlock, false);
        } else {
          resolve();
        }
      });
    }
    /**
     * Load all pitch data into the buffer.
     */

  }, {
    key: "initAllSound",
    value: function initAllSound() {
      var _this = this;

      var context = this.context;
      var _origin = this._origin;
      var todoList = [];
      Object.keys(_origin).forEach(function (name) {
        todoList.push(new Promise(function (resolve, reject) {
          var ab = Object(base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__["decode"])(_origin[name]);
          context.decodeAudioData(ab, function (buffer) {
            _this.bufferList.push({
              name: name,
              buffer: buffer
            });

            console.log("".concat(name, " has finished"));
            resolve();
          }, function (err) {
            reject(err);
          });
        }));
      });
      return Promise.all(todoList);
    }
    /**
     * Play a pitch sound.
     * @param {string} name The tone name. eg. C, D, E, F, G, A, B 
     * @param {number} rate The octave of each tone is adjusted according to the value of rate.
     */

  }, {
    key: "play",
    value: function play(name) {
      var rate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (!name) {
        return;
      }

      var source = this.context.createBufferSource();
      var dest = this.bufferList.find(function (item) {
        return item.name === name;
      });

      if (!dest) {
        return;
      }

      source.buffer = dest.buffer;
      source.playbackRate.value = rate;
      source.connect(this.context.destination);
      source.start(this.context.currentTime);
      source.stop(this.context.currentTime + 3);
      return source;
    }
    /**
     * Play a tone through tone name, octave and alter.
     * eg: oneShot('D', 4) is the basic tone re (C). 4 is octave. 
     * Basic tone is 4. lower octave is 3, 2, 1. Higher is 5, 6, 7
     * @param {string} step 
     * @param {number} octave 
     * @param {number} alter 
     */

  }, {
    key: "oneShot",
    value: function oneShot(step) {
      var octave = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      var alter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      if (!step) {
        return;
      }

      step = step.toUpperCase();
      /**
       * Since E and B do not have black keys on the piano, but you can still make adjustments on E and B. 
       * The result of alter is F in same octave and C in a higher octave.
       */

      if (alter === 1) {
        if (step === 'E') {
          step = 'F';
          alter = 0;
        }

        if (step === 'B') {
          step = 'C';
          alter = 0;
          octave += 1;
        }
      }

      console.log(step, octave, alter);
      return this.play(step, PITCH_RATE[octave] * (alter ? 1.06 : 1));
    }
  }]);

  return LitePiano;
}();


window.LitePiano = LitePiano;

/***/ })

/******/ });
//# sourceMappingURL=ui.js.map