(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("element-ui/packages/checkbox"), require("element-ui/packages/checkbox-group"), require("element-ui/packages/scrollbar"), require("element-ui/packages/tooltip"), require("element-ui/src/directives/mousewheel"), require("element-ui/src/mixins/locale"), require("element-ui/src/mixins/migrating"), require("element-ui/src/utils/clickoutside"), require("element-ui/src/utils/dom"), require("element-ui/src/utils/merge"), require("element-ui/src/utils/popup"), require("element-ui/src/utils/resize-event"), require("element-ui/src/utils/scrollbar-width"), require("element-ui/src/utils/util"), require("element-ui/src/utils/vue-popper"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["element-ui/packages/checkbox", "element-ui/packages/checkbox-group", "element-ui/packages/scrollbar", "element-ui/packages/tooltip", "element-ui/src/directives/mousewheel", "element-ui/src/mixins/locale", "element-ui/src/mixins/migrating", "element-ui/src/utils/clickoutside", "element-ui/src/utils/dom", "element-ui/src/utils/merge", "element-ui/src/utils/popup", "element-ui/src/utils/resize-event", "element-ui/src/utils/scrollbar-width", "element-ui/src/utils/util", "element-ui/src/utils/vue-popper", ], factory);
	else if(typeof exports === 'object')
		exports["el-table-prepend"] = factory(require("element-ui/packages/checkbox"), require("element-ui/packages/checkbox-group"), require("element-ui/packages/scrollbar"), require("element-ui/packages/tooltip"), require("element-ui/src/directives/mousewheel"), require("element-ui/src/mixins/locale"), require("element-ui/src/mixins/migrating"), require("element-ui/src/utils/clickoutside"), require("element-ui/src/utils/dom"), require("element-ui/src/utils/merge"), require("element-ui/src/utils/popup"), require("element-ui/src/utils/resize-event"), require("element-ui/src/utils/scrollbar-width"), require("element-ui/src/utils/util"), require("element-ui/src/utils/vue-popper"), require("vue"));
	else
		root["el-table-prepend"] = factory(root["element-ui/packages/checkbox"], root["element-ui/packages/checkbox-group"], root["element-ui/packages/scrollbar"], root["element-ui/packages/tooltip"], root["element-ui/src/directives/mousewheel"], root["element-ui/src/mixins/locale"], root["element-ui/src/mixins/migrating"], root["element-ui/src/utils/clickoutside"], root["element-ui/src/utils/dom"], root["element-ui/src/utils/merge"], root["element-ui/src/utils/popup"], root["element-ui/src/utils/resize-event"], root["element-ui/src/utils/scrollbar-width"], root["element-ui/src/utils/util"], root["element-ui/src/utils/vue-popper"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__269__, __WEBPACK_EXTERNAL_MODULE__691__, __WEBPACK_EXTERNAL_MODULE__366__, __WEBPACK_EXTERNAL_MODULE__211__, __WEBPACK_EXTERNAL_MODULE__666__, __WEBPACK_EXTERNAL_MODULE__582__, __WEBPACK_EXTERNAL_MODULE__654__, __WEBPACK_EXTERNAL_MODULE__188__, __WEBPACK_EXTERNAL_MODULE__221__, __WEBPACK_EXTERNAL_MODULE__185__, __WEBPACK_EXTERNAL_MODULE__51__, __WEBPACK_EXTERNAL_MODULE__170__, __WEBPACK_EXTERNAL_MODULE__702__, __WEBPACK_EXTERNAL_MODULE__783__, __WEBPACK_EXTERNAL_MODULE__518__, __WEBPACK_EXTERNAL_MODULE__274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 965:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-undefined */

var throttle = __webpack_require__(318);

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
module.exports = function (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};

/***/ }),

/***/ 752:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var throttle = __webpack_require__(318);
var debounce = __webpack_require__(965);
module.exports = {
  throttle: throttle,
  debounce: debounce
};

/***/ }),

/***/ 318:
/***/ (function(module) {

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
module.exports = function (delay, noTrailing, callback, debounceMode) {
  // After wrapper has stopped being called, this timeout ensures that
  // `callback` is executed at the proper times in `throttle` and `end`
  // debounce modes.
  var timeoutID;

  // Keep track of the last time `callback` was executed.
  var lastExec = 0;

  // `noTrailing` defaults to falsy.
  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }

  // The `wrapper` function encapsulates all of the throttling / debouncing
  // functionality and when executed will limit the rate at which `callback`
  // is executed.
  function wrapper() {
    var self = this;
    var elapsed = Number(new Date()) - lastExec;
    var args = arguments;

    // Execute `callback` and update the `lastExec` timestamp.
    function exec() {
      lastExec = Number(new Date());
      callback.apply(self, args);
    }

    // If `debounceMode` is true (at begin) this is used to clear the flag
    // to allow future `callback` executions.
    function clear() {
      timeoutID = undefined;
    }
    if (debounceMode && !timeoutID) {
      // Since `wrapper` is being called for the first time and
      // `debounceMode` is true (at begin), execute `callback`.
      exec();
    }

    // Clear any existing timeout.
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    if (debounceMode === undefined && elapsed > delay) {
      // In throttle mode, if `delay` time has been exceeded, execute
      // `callback`.
      exec();
    } else if (noTrailing !== true) {
      // In trailing throttle mode, since `delay` time has not been
      // exceeded, schedule `callback` to execute `delay` ms after most
      // recent execution.
      //
      // If `debounceMode` is true (at begin), schedule `clear` to execute
      // after `delay` ms.
      //
      // If `debounceMode` is false (at end), schedule `callback` to
      // execute after `delay` ms.
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  // Return the wrapper function.
  return wrapper;
};

/***/ }),

/***/ 269:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__269__;

/***/ }),

/***/ 691:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__691__;

/***/ }),

/***/ 366:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__366__;

/***/ }),

/***/ 211:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__211__;

/***/ }),

/***/ 666:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__666__;

/***/ }),

/***/ 582:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__582__;

/***/ }),

/***/ 654:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__654__;

/***/ }),

/***/ 188:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__188__;

/***/ }),

/***/ 221:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__221__;

/***/ }),

/***/ 185:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__185__;

/***/ }),

/***/ 51:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__51__;

/***/ }),

/***/ 170:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__170__;

/***/ }),

/***/ 702:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__702__;

/***/ }),

/***/ 783:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__783__;

/***/ }),

/***/ 518:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__518__;

/***/ }),

/***/ 274:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) // removed by dead control flow
{ var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/el-table-prepend/src/table.vue?vue&type=template&id=192fe795
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "el-table",
    class: [{
      'el-table--fit': _vm.fit,
      'el-table--striped': _vm.stripe,
      'el-table--border': _vm.border || _vm.isGroup,
      'el-table--hidden': _vm.isHidden,
      'el-table--group': _vm.isGroup,
      'el-table--fluid-height': _vm.maxHeight,
      'el-table--scrollable-x': _vm.layout.scrollX,
      'el-table--scrollable-y': _vm.layout.scrollY,
      'el-table--enable-row-hover': !_vm.store.states.isComplex,
      'el-table--enable-row-transition': (_vm.store.states.data || []).length !== 0 && (_vm.store.states.data || []).length < 100
    }, _vm.tableSize ? `el-table--${_vm.tableSize}` : ''],
    on: {
      "mouseleave": function ($event) {
        return _vm.handleMouseLeave($event);
      }
    }
  }, [_c('div', {
    ref: "hiddenColumns",
    staticClass: "hidden-columns"
  }, [_vm._t("default")], 2), _vm.showHeader ? _c('div', {
    directives: [{
      name: "mousewheel",
      rawName: "v-mousewheel",
      value: _vm.handleHeaderFooterMousewheel,
      expression: "handleHeaderFooterMousewheel"
    }],
    ref: "headerWrapper",
    staticClass: "el-table__header-wrapper"
  }, [_c('table-header', {
    ref: "tableHeader",
    style: {
      width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
    },
    attrs: {
      "store": _vm.store,
      "border": _vm.border,
      "default-sort": _vm.defaultSort
    }
  }), _vm._t("prepend")], 2) : _vm._e(), _c('div', {
    ref: "bodyWrapper",
    staticClass: "el-table__body-wrapper",
    class: [_vm.layout.scrollX ? `is-scrolling-${_vm.scrollPosition}` : 'is-scrolling-none'],
    style: [_vm.bodyHeight]
  }, [_c('table-body', {
    style: {
      width: _vm.bodyWidth
    },
    attrs: {
      "context": _vm.context,
      "store": _vm.store,
      "stripe": _vm.stripe,
      "row-class-name": _vm.rowClassName,
      "row-style": _vm.rowStyle,
      "highlight": _vm.highlightCurrentRow
    }
  }), !_vm.data || _vm.data.length === 0 ? _c('div', {
    ref: "emptyBlock",
    staticClass: "el-table__empty-block",
    style: _vm.emptyBlockStyle
  }, [_c('span', {
    staticClass: "el-table__empty-text"
  }, [_vm._t("empty", function () {
    return [_vm._v(_vm._s(_vm.emptyText || _vm.t('el.table.emptyText')))];
  })], 2)]) : _vm._e(), _vm.$slots.append ? _c('div', {
    ref: "appendWrapper",
    staticClass: "el-table__append-wrapper"
  }, [_vm._t("append")], 2) : _vm._e()], 1), _vm.showSummary ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.data && _vm.data.length > 0,
      expression: "data && data.length > 0"
    }, {
      name: "mousewheel",
      rawName: "v-mousewheel",
      value: _vm.handleHeaderFooterMousewheel,
      expression: "handleHeaderFooterMousewheel"
    }],
    ref: "footerWrapper",
    staticClass: "el-table__footer-wrapper"
  }, [_c('table-footer', {
    style: {
      width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
    },
    attrs: {
      "store": _vm.store,
      "border": _vm.border,
      "sum-text": _vm.sumText || _vm.t('el.table.sumText'),
      "summary-method": _vm.summaryMethod,
      "default-sort": _vm.defaultSort
    }
  })], 1) : _vm._e(), _vm.fixedColumns.length > 0 ? _c('div', {
    directives: [{
      name: "mousewheel",
      rawName: "v-mousewheel",
      value: _vm.handleFixedMousewheel,
      expression: "handleFixedMousewheel"
    }],
    ref: "fixedWrapper",
    staticClass: "el-table__fixed",
    style: [{
      width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
    }, _vm.fixedHeight]
  }, [_vm.showHeader ? _c('div', {
    ref: "fixedHeaderWrapper",
    staticClass: "el-table__fixed-header-wrapper"
  }, [_c('table-header', {
    ref: "fixedTableHeader",
    style: {
      width: _vm.bodyWidth
    },
    attrs: {
      "fixed": "left",
      "border": _vm.border,
      "store": _vm.store
    }
  })], 1) : _vm._e(), _c('div', {
    ref: "fixedBodyWrapper",
    staticClass: "el-table__fixed-body-wrapper",
    style: [{
      top: _vm.layout.headerHeight + 'px'
    }, _vm.fixedBodyHeight]
  }, [_c('table-body', {
    style: {
      width: _vm.bodyWidth
    },
    attrs: {
      "fixed": "left",
      "store": _vm.store,
      "stripe": _vm.stripe,
      "highlight": _vm.highlightCurrentRow,
      "row-class-name": _vm.rowClassName,
      "row-style": _vm.rowStyle
    }
  }), _vm.$slots.append ? _c('div', {
    staticClass: "el-table__append-gutter",
    style: {
      height: _vm.layout.appendHeight + 'px'
    }
  }) : _vm._e()], 1), _vm.showSummary ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.data && _vm.data.length > 0,
      expression: "data && data.length > 0"
    }],
    ref: "fixedFooterWrapper",
    staticClass: "el-table__fixed-footer-wrapper"
  }, [_c('table-footer', {
    style: {
      width: _vm.bodyWidth
    },
    attrs: {
      "fixed": "left",
      "border": _vm.border,
      "sum-text": _vm.sumText || _vm.t('el.table.sumText'),
      "summary-method": _vm.summaryMethod,
      "store": _vm.store
    }
  })], 1) : _vm._e()]) : _vm._e(), _vm.rightFixedColumns.length > 0 ? _c('div', {
    directives: [{
      name: "mousewheel",
      rawName: "v-mousewheel",
      value: _vm.handleFixedMousewheel,
      expression: "handleFixedMousewheel"
    }],
    ref: "rightFixedWrapper",
    staticClass: "el-table__fixed-right",
    style: [{
      width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : '',
      right: _vm.layout.scrollY ? (_vm.border ? _vm.layout.gutterWidth : _vm.layout.gutterWidth || 0) + 'px' : ''
    }, _vm.fixedHeight]
  }, [_vm.showHeader ? _c('div', {
    ref: "rightFixedHeaderWrapper",
    staticClass: "el-table__fixed-header-wrapper"
  }, [_c('table-header', {
    ref: "rightFixedTableHeader",
    style: {
      width: _vm.bodyWidth
    },
    attrs: {
      "fixed": "right",
      "border": _vm.border,
      "store": _vm.store
    }
  })], 1) : _vm._e(), _c('div', {
    ref: "rightFixedBodyWrapper",
    staticClass: "el-table__fixed-body-wrapper",
    style: [{
      top: _vm.layout.headerHeight + 'px'
    }, _vm.fixedBodyHeight]
  }, [_c('table-body', {
    style: {
      width: _vm.bodyWidth
    },
    attrs: {
      "fixed": "right",
      "store": _vm.store,
      "stripe": _vm.stripe,
      "row-class-name": _vm.rowClassName,
      "row-style": _vm.rowStyle,
      "highlight": _vm.highlightCurrentRow
    }
  }), _vm.$slots.append ? _c('div', {
    staticClass: "el-table__append-gutter",
    style: {
      height: _vm.layout.appendHeight + 'px'
    }
  }) : _vm._e()], 1), _vm.showSummary ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.data && _vm.data.length > 0,
      expression: "data && data.length > 0"
    }],
    ref: "rightFixedFooterWrapper",
    staticClass: "el-table__fixed-footer-wrapper"
  }, [_c('table-footer', {
    style: {
      width: _vm.bodyWidth
    },
    attrs: {
      "fixed": "right",
      "border": _vm.border,
      "sum-text": _vm.sumText || _vm.t('el.table.sumText'),
      "summary-method": _vm.summaryMethod,
      "store": _vm.store
    }
  })], 1) : _vm._e()]) : _vm._e(), _vm.rightFixedColumns.length > 0 ? _c('div', {
    ref: "rightFixedPatch",
    staticClass: "el-table__fixed-right-patch",
    style: {
      width: _vm.layout.scrollY ? _vm.layout.gutterWidth + 'px' : '0',
      height: _vm.layout.headerHeight + 'px'
    }
  }) : _vm._e(), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.resizeProxyVisible,
      expression: "resizeProxyVisible"
    }],
    ref: "resizeProxy",
    staticClass: "el-table__column-resize-proxy"
  })]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: external "element-ui/packages/checkbox"
var checkbox_ = __webpack_require__(269);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);
// EXTERNAL MODULE: ./node_modules/throttle-debounce/index.js
var throttle_debounce = __webpack_require__(752);
// EXTERNAL MODULE: external "element-ui/src/utils/resize-event"
var resize_event_ = __webpack_require__(170);
// EXTERNAL MODULE: external "element-ui/src/directives/mousewheel"
var mousewheel_ = __webpack_require__(666);
var mousewheel_default = /*#__PURE__*/__webpack_require__.n(mousewheel_);
// EXTERNAL MODULE: external "element-ui/src/mixins/locale"
var locale_ = __webpack_require__(582);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);
// EXTERNAL MODULE: external "element-ui/src/mixins/migrating"
var migrating_ = __webpack_require__(654);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
// EXTERNAL MODULE: external "element-ui/src/utils/merge"
var merge_ = __webpack_require__(185);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);
// EXTERNAL MODULE: external "element-ui/src/utils/util"
var util_ = __webpack_require__(783);
;// ./packages/el-table-prepend/src/util.js

const getCell = function (event) {
  let cell = event.target;
  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }
  return null;
};
const isObject = function (obj) {
  return obj !== null && typeof obj === 'object';
};
const orderBy = function (array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return (0,util_.getValueByPath)(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value;
    }
    return [isObject(value) ? (0,util_.getValueByPath)(value, sortKey) : value];
  };
  const compare = function (a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    let order = compare(a, b);
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(item => item.value);
};
const getColumnById = function (table, columnId) {
  let column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
const getColumnByKey = function (table, columnKey) {
  let column = null;
  for (let i = 0; i < table.columns.length; i++) {
    const item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};
const getColumnByCell = function (table, cell) {
  const matches = (cell.className || '').match(/el-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};
const getRowIdentity = (row, rowKey) => {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    let key = rowKey.split('.');
    let current = row;
    for (let i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};
const getKeysMap = function (array, rowKey) {
  const arrayMap = {};
  (array || []).forEach((row, index) => {
    arrayMap[getRowIdentity(row, rowKey)] = {
      row,
      index
    };
  });
  return arrayMap;
};
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function mergeOptions(defaults, config) {
  const options = {};
  let key;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (hasOwn(config, key)) {
      const value = config[key];
      if (typeof value !== 'undefined') {
        options[key] = value;
      }
    }
  }
  return options;
}
function parseWidth(width) {
  if (width !== undefined) {
    width = parseInt(width, 10);
    if (isNaN(width)) {
      width = null;
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (typeof minWidth !== 'undefined') {
    minWidth = parseWidth(minWidth);
    if (isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
;
function parseHeight(height) {
  if (typeof height === 'number') {
    return height;
  }
  if (typeof height === 'string') {
    if (/^\d+(?:px)?$/.test(height)) {
      return parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}

// https://github.com/reduxjs/redux/blob/master/src/compose.js
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function toggleRowStatus(statusArr, row, newVal) {
  let changed = false;
  const index = statusArr.indexOf(row);
  const included = index !== -1;
  const addRow = () => {
    statusArr.push(row);
    changed = true;
  };
  const removeRow = () => {
    statusArr.splice(index, 1);
    changed = true;
  };
  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}
function walkTreeNode(root, cb, childrenKey = 'children', lazyKey = 'hasChildren') {
  const isNil = array => !(Array.isArray(array) && array.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach(item => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children = item[childrenKey];
      if (!isNil(children)) {
        _walker(item, children, level + 1);
      }
    });
  }
  root.forEach(item => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}
const objectEquals = function (objectA, objectB) {
  // 取对象a和b的属性名
  let aProps = Object.getOwnPropertyNames(objectA);
  let bProps = Object.getOwnPropertyNames(objectB);
  // 判断属性名的length是否一致
  if (aProps.length !== bProps.length) {
    return false;
  }
  // 循环取出属性名，再判断属性值是否一致
  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];
    if (objectA[propName] !== objectB[propName]) {
      return false;
    }
  }
  return true;
};
;// ./packages/el-table-prepend/src/store/expand.js

/* harmony default export */ var expand = ({
  data() {
    return {
      states: {
        defaultExpandAll: false,
        expandRows: []
      }
    };
  },
  methods: {
    updateExpandRows() {
      const {
        data = [],
        rowKey,
        defaultExpandAll,
        expandRows
      } = this.states;
      if (defaultExpandAll) {
        this.states.expandRows = data.slice();
      } else if (rowKey) {
        // TODO：这里的代码可以优化
        const expandRowsMap = getKeysMap(expandRows, rowKey);
        this.states.expandRows = data.reduce((prev, row) => {
          const rowId = getRowIdentity(row, rowKey);
          const rowInfo = expandRowsMap[rowId];
          if (rowInfo) {
            prev.push(row);
          }
          return prev;
        }, []);
      } else {
        this.states.expandRows = [];
      }
    },
    toggleRowExpansion(row, expanded) {
      const changed = toggleRowStatus(this.states.expandRows, row, expanded);
      if (changed) {
        this.table.$emit('expand-change', row, this.states.expandRows.slice());
        this.scheduleLayout();
      }
    },
    setExpandRowKeys(rowKeys) {
      this.assertRowKey();
      // TODO：这里的代码可以优化
      const {
        data,
        rowKey
      } = this.states;
      const keysMap = getKeysMap(data, rowKey);
      this.states.expandRows = rowKeys.reduce((prev, cur) => {
        const info = keysMap[cur];
        if (info) {
          prev.push(info.row);
        }
        return prev;
      }, []);
    },
    isRowExpanded(row) {
      const {
        expandRows = [],
        rowKey
      } = this.states;
      if (rowKey) {
        const expandMap = getKeysMap(expandRows, rowKey);
        return !!expandMap[getRowIdentity(row, rowKey)];
      }
      return expandRows.indexOf(row) !== -1;
    }
  }
});
;// ./packages/el-table-prepend/src/store/current.js


/* harmony default export */ var current = ({
  data() {
    return {
      states: {
        // 不可响应的，设置 currentRowKey 时，data 不一定存在，也许无法算出正确的 currentRow
        // 把该值缓存一下，当用户点击修改 currentRow 时，把该值重置为 null
        _currentRowKey: null,
        currentRow: null
      }
    };
  },
  methods: {
    setCurrentRowKey(key) {
      this.assertRowKey();
      this.states._currentRowKey = key;
      this.setCurrentRowByKey(key);
    },
    restoreCurrentRowKey() {
      this.states._currentRowKey = null;
    },
    setCurrentRowByKey(key) {
      const {
        states
      } = this;
      const {
        data = [],
        rowKey
      } = states;
      let currentRow = null;
      if (rowKey) {
        currentRow = (0,util_.arrayFind)(data, item => getRowIdentity(item, rowKey) === key);
      }
      states.currentRow = currentRow;
    },
    updateCurrentRow(currentRow) {
      const {
        states,
        table
      } = this;
      const oldCurrentRow = states.currentRow;
      if (currentRow && currentRow !== oldCurrentRow) {
        states.currentRow = currentRow;
        table.$emit('current-change', currentRow, oldCurrentRow);
        return;
      }
      if (!currentRow && oldCurrentRow) {
        states.currentRow = null;
        table.$emit('current-change', null, oldCurrentRow);
      }
    },
    updateCurrentRowData() {
      const {
        states,
        table
      } = this;
      const {
        rowKey,
        _currentRowKey
      } = states;
      // data 为 null 时，解构时的默认值会被忽略
      const data = states.data || [];
      const oldCurrentRow = states.currentRow;

      // 当 currentRow 不在 data 中时尝试更新数据
      if (data.indexOf(oldCurrentRow) === -1 && oldCurrentRow) {
        if (rowKey) {
          const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
          this.setCurrentRowByKey(currentRowKey);
        } else {
          states.currentRow = null;
        }
        if (states.currentRow === null) {
          table.$emit('current-change', null, oldCurrentRow);
        }
      } else if (_currentRowKey) {
        // 把初始时下设置的 rowKey 转化成 rowData
        this.setCurrentRowByKey(_currentRowKey);
        this.restoreCurrentRowKey();
      }
    }
  }
});
;// ./packages/el-table-prepend/src/store/tree.js

/* harmony default export */ var tree = ({
  data() {
    return {
      states: {
        // defaultExpandAll 存在于 expand.js 中，这里不重复添加
        // 在展开行中，expandRowKeys 会被转化成 expandRows，expandRowKeys 这个属性只是记录了 TreeTable 行的展开
        // TODO: 拆分为独立的 TreeTable，统一用法
        expandRowKeys: [],
        treeData: {},
        indent: 16,
        lazy: false,
        lazyTreeNodeMap: {},
        lazyColumnIdentifier: 'hasChildren',
        childrenColumnName: 'children'
      }
    };
  },
  computed: {
    // 嵌入型的数据，watch 无法是检测到变化 https://github.com/ElemeFE/element/issues/14998
    // TODO: 使用 computed 解决该问题，是否会造成性能问题？
    // @return { id: { level, children } }
    normalizedData() {
      if (!this.states.rowKey) return {};
      const data = this.states.data || [];
      return this.normalize(data);
    },
    // @return { id: { children } }
    // 针对懒加载的情形，不处理嵌套数据
    normalizedLazyNode() {
      const {
        rowKey,
        lazyTreeNodeMap,
        lazyColumnIdentifier
      } = this.states;
      const keys = Object.keys(lazyTreeNodeMap);
      const res = {};
      if (!keys.length) return res;
      keys.forEach(key => {
        if (lazyTreeNodeMap[key].length) {
          const item = {
            children: []
          };
          lazyTreeNodeMap[key].forEach(row => {
            const currentRowKey = getRowIdentity(row, rowKey);
            item.children.push(currentRowKey);
            if (row[lazyColumnIdentifier] && !res[currentRowKey]) {
              res[currentRowKey] = {
                children: []
              };
            }
          });
          res[key] = item;
        }
      });
      return res;
    }
  },
  watch: {
    normalizedData: 'updateTreeData',
    normalizedLazyNode: 'updateTreeData'
  },
  methods: {
    normalize(data) {
      const {
        childrenColumnName,
        lazyColumnIdentifier,
        rowKey,
        lazy
      } = this.states;
      const res = {};
      walkTreeNode(data, (parent, children, level) => {
        const parentId = getRowIdentity(parent, rowKey);
        if (Array.isArray(children)) {
          res[parentId] = {
            children: children.map(row => getRowIdentity(row, rowKey)),
            level
          };
        } else if (lazy) {
          // 当 children 不存在且 lazy 为 true，该节点即为懒加载的节点
          res[parentId] = {
            children: [],
            lazy: true,
            level
          };
        }
      }, childrenColumnName, lazyColumnIdentifier);
      return res;
    },
    updateTreeData() {
      const nested = this.normalizedData;
      const normalizedLazyNode = this.normalizedLazyNode;
      const keys = Object.keys(nested);
      const newTreeData = {};
      if (keys.length) {
        const {
          treeData: oldTreeData,
          defaultExpandAll,
          expandRowKeys,
          lazy
        } = this.states;
        const rootLazyRowKeys = [];
        const getExpanded = (oldValue, key) => {
          const included = defaultExpandAll || expandRowKeys && expandRowKeys.indexOf(key) !== -1;
          return !!(oldValue && oldValue.expanded || included);
        };
        // 合并 expanded 与 display，确保数据刷新后，状态不变
        keys.forEach(key => {
          const oldValue = oldTreeData[key];
          const newValue = {
            ...nested[key]
          };
          newValue.expanded = getExpanded(oldValue, key);
          if (newValue.lazy) {
            const {
              loaded = false,
              loading = false
            } = oldValue || {};
            newValue.loaded = !!loaded;
            newValue.loading = !!loading;
            rootLazyRowKeys.push(key);
          }
          newTreeData[key] = newValue;
        });
        // 根据懒加载数据更新 treeData
        const lazyKeys = Object.keys(normalizedLazyNode);
        if (lazy && lazyKeys.length && rootLazyRowKeys.length) {
          lazyKeys.forEach(key => {
            const oldValue = oldTreeData[key];
            const lazyNodeChildren = normalizedLazyNode[key].children;
            if (rootLazyRowKeys.indexOf(key) !== -1) {
              // 懒加载的 root 节点，更新一下原有的数据，原来的 children 一定是空数组
              if (newTreeData[key].children.length !== 0) {
                throw new Error('[ElTable]children must be an empty array.');
              }
              newTreeData[key].children = lazyNodeChildren;
            } else {
              const {
                loaded = false,
                loading = false
              } = oldValue || {};
              newTreeData[key] = {
                lazy: true,
                loaded: !!loaded,
                loading: !!loading,
                expanded: getExpanded(oldValue, key),
                children: lazyNodeChildren,
                level: ''
              };
            }
          });
        }
      }
      this.states.treeData = newTreeData;
      this.updateTableScrollY();
    },
    updateTreeExpandKeys(value) {
      this.states.expandRowKeys = value;
      this.updateTreeData();
    },
    toggleTreeExpansion(row, expanded) {
      this.assertRowKey();
      const {
        rowKey,
        treeData
      } = this.states;
      const id = getRowIdentity(row, rowKey);
      const data = id && treeData[id];
      if (id && data && 'expanded' in data) {
        const oldExpanded = data.expanded;
        expanded = typeof expanded === 'undefined' ? !data.expanded : expanded;
        treeData[id].expanded = expanded;
        if (oldExpanded !== expanded) {
          this.table.$emit('expand-change', row, expanded);
        }
        this.updateTableScrollY();
      }
    },
    loadOrToggle(row) {
      this.assertRowKey();
      const {
        lazy,
        treeData,
        rowKey
      } = this.states;
      const id = getRowIdentity(row, rowKey);
      const data = treeData[id];
      if (lazy && data && 'loaded' in data && !data.loaded) {
        this.loadData(row, id, data);
      } else {
        this.toggleTreeExpansion(row);
      }
    },
    loadData(row, key, treeNode) {
      const {
        load
      } = this.table;
      const {
        treeData: rawTreeData
      } = this.states;
      if (load && !rawTreeData[key].loaded) {
        rawTreeData[key].loading = true;
        load(row, treeNode, data => {
          if (!Array.isArray(data)) {
            throw new Error('[ElTable] data must be an array');
          }
          const {
            lazyTreeNodeMap,
            treeData
          } = this.states;
          treeData[key].loading = false;
          treeData[key].loaded = true;
          treeData[key].expanded = true;
          if (data.length) {
            this.$set(lazyTreeNodeMap, key, data);
          }
          this.table.$emit('expand-change', row, true);
        });
      }
    }
  }
});
;// ./packages/el-table-prepend/src/store/watcher.js






const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
const doFlattenColumns = columns => {
  const result = [];
  columns.forEach(column => {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
/* harmony default export */ var watcher = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
  data() {
    return {
      states: {
        // 3.0 版本后要求必须设置该属性
        rowKey: null,
        // 渲染的数据来源，是对 table 中的 data 过滤排序后的结果
        data: [],
        // 是否包含固定列
        isComplex: false,
        // 列
        _columns: [],
        // 不可响应的
        originColumns: [],
        columns: [],
        fixedColumns: [],
        rightFixedColumns: [],
        leafColumns: [],
        fixedLeafColumns: [],
        rightFixedLeafColumns: [],
        leafColumnsLength: 0,
        fixedLeafColumnsLength: 0,
        rightFixedLeafColumnsLength: 0,
        // 选择
        isAllSelected: false,
        selection: [],
        reserveSelection: false,
        selectOnIndeterminate: false,
        selectable: null,
        // 过滤
        filters: {},
        // 不可响应的
        filteredData: null,
        // 排序
        sortingColumn: null,
        sortProp: null,
        sortOrder: null,
        hoverRow: null
      }
    };
  },
  mixins: [expand, current, tree],
  methods: {
    // 检查 rowKey 是否存在
    assertRowKey() {
      const rowKey = this.states.rowKey;
      if (!rowKey) throw new Error('[ElTable] prop row-key is required');
    },
    // 更新列
    updateColumns() {
      const states = this.states;
      const _columns = states._columns || [];
      states.fixedColumns = _columns.filter(column => column.fixed === true || column.fixed === 'left');
      states.rightFixedColumns = _columns.filter(column => column.fixed === 'right');
      if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
        _columns[0].fixed = true;
        states.fixedColumns.unshift(_columns[0]);
      }
      const notFixedColumns = _columns.filter(column => !column.fixed);
      states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);
      const leafColumns = doFlattenColumns(notFixedColumns);
      const fixedLeafColumns = doFlattenColumns(states.fixedColumns);
      const rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);
      states.leafColumnsLength = leafColumns.length;
      states.fixedLeafColumnsLength = fixedLeafColumns.length;
      states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;
      states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
      states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
    },
    // 更新 DOM
    scheduleLayout(needUpdateColumns) {
      if (needUpdateColumns) {
        this.updateColumns();
      }
      this.table.debouncedUpdateLayout();
    },
    // 选择
    isSelected(row) {
      const {
        selection = []
      } = this.states;
      return selection.indexOf(row) > -1;
    },
    clearSelection() {
      const states = this.states;
      states.isAllSelected = false;
      const oldSelection = states.selection;
      if (oldSelection.length) {
        states.selection = [];
        this.table.$emit('selection-change', []);
      }
    },
    cleanSelection() {
      const states = this.states;
      const {
        data,
        rowKey,
        selection
      } = states;
      let deleted;
      if (rowKey) {
        deleted = [];
        const selectedMap = getKeysMap(selection, rowKey);
        const dataMap = getKeysMap(data, rowKey);
        for (let key in selectedMap) {
          if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
            deleted.push(selectedMap[key].row);
          }
        }
      } else {
        deleted = selection.filter(item => data.indexOf(item) === -1);
      }
      if (deleted.length) {
        const newSelection = selection.filter(item => deleted.indexOf(item) === -1);
        states.selection = newSelection;
        this.table.$emit('selection-change', newSelection.slice());
      }
    },
    toggleRowSelection(row, selected, emitChange = true) {
      const changed = toggleRowStatus(this.states.selection, row, selected);
      if (changed) {
        const newSelection = (this.states.selection || []).slice();
        // 调用 API 修改选中值，不触发 select 事件
        if (emitChange) {
          this.table.$emit('select', newSelection, row);
        }
        this.table.$emit('selection-change', newSelection);
      }
    },
    _toggleAllSelection() {
      const states = this.states;
      const {
        data = [],
        selection
      } = states;
      // when only some rows are selected (but not all), select or deselect all of them
      // depending on the value of selectOnIndeterminate
      const value = states.selectOnIndeterminate ? !states.isAllSelected : !(states.isAllSelected || selection.length);
      states.isAllSelected = value;
      let selectionChanged = false;
      data.forEach((row, index) => {
        if (states.selectable) {
          if (states.selectable.call(null, row, index) && toggleRowStatus(selection, row, value)) {
            selectionChanged = true;
          }
        } else {
          if (toggleRowStatus(selection, row, value)) {
            selectionChanged = true;
          }
        }
      });
      if (selectionChanged) {
        this.table.$emit('selection-change', selection ? selection.slice() : []);
      }
      this.table.$emit('select-all', selection);
    },
    updateSelectionByRowKey() {
      const states = this.states;
      const {
        selection,
        rowKey,
        data
      } = states;
      const selectedMap = getKeysMap(selection, rowKey);
      data.forEach(row => {
        const rowId = getRowIdentity(row, rowKey);
        const rowInfo = selectedMap[rowId];
        if (rowInfo) {
          selection[rowInfo.index] = row;
        }
      });
    },
    updateAllSelected() {
      const states = this.states;
      const {
        selection,
        rowKey,
        selectable
      } = states;
      // data 为 null 时，解构时的默认值会被忽略
      const data = states.data || [];
      if (data.length === 0) {
        states.isAllSelected = false;
        return;
      }
      let selectedMap;
      if (rowKey) {
        selectedMap = getKeysMap(selection, rowKey);
      }
      const isSelected = function (row) {
        if (selectedMap) {
          return !!selectedMap[getRowIdentity(row, rowKey)];
        } else {
          return selection.indexOf(row) !== -1;
        }
      };
      let isAllSelected = true;
      let selectedCount = 0;
      for (let i = 0, j = data.length; i < j; i++) {
        const item = data[i];
        const isRowSelectable = selectable && selectable.call(null, item, i);
        if (!isSelected(item)) {
          if (!selectable || isRowSelectable) {
            isAllSelected = false;
            break;
          }
        } else {
          selectedCount++;
        }
      }
      if (selectedCount === 0) isAllSelected = false;
      states.isAllSelected = isAllSelected;
    },
    // 过滤与排序
    updateFilters(columns, values) {
      if (!Array.isArray(columns)) {
        columns = [columns];
      }
      const states = this.states;
      const filters = {};
      columns.forEach(col => {
        states.filters[col.id] = values;
        filters[col.columnKey || col.id] = values;
      });
      return filters;
    },
    updateSort(column, prop, order) {
      if (this.states.sortingColumn && this.states.sortingColumn !== column) {
        this.states.sortingColumn.order = null;
      }
      this.states.sortingColumn = column;
      this.states.sortProp = prop;
      this.states.sortOrder = order;
    },
    execFilter() {
      const states = this.states;
      const {
        _data,
        filters
      } = states;
      let data = _data;
      Object.keys(filters).forEach(columnId => {
        const values = states.filters[columnId];
        if (!values || values.length === 0) return;
        const column = getColumnById(this.states, columnId);
        if (column && column.filterMethod) {
          data = data.filter(row => {
            return values.some(value => column.filterMethod.call(null, value, row, column));
          });
        }
      });
      states.filteredData = data;
    },
    execSort() {
      const states = this.states;
      states.data = sortData(states.filteredData, states);
    },
    // 根据 filters 与 sort 去过滤 data
    execQuery(ignore) {
      if (!(ignore && ignore.filter)) {
        this.execFilter();
      }
      this.execSort();
    },
    clearFilter(columnKeys) {
      const states = this.states;
      const {
        tableHeader,
        fixedTableHeader,
        rightFixedTableHeader
      } = this.table.$refs;
      let panels = {};
      if (tableHeader) panels = merge_default()(panels, tableHeader.filterPanels);
      if (fixedTableHeader) panels = merge_default()(panels, fixedTableHeader.filterPanels);
      if (rightFixedTableHeader) panels = merge_default()(panels, rightFixedTableHeader.filterPanels);
      const keys = Object.keys(panels);
      if (!keys.length) return;
      if (typeof columnKeys === 'string') {
        columnKeys = [columnKeys];
      }
      if (Array.isArray(columnKeys)) {
        const columns = columnKeys.map(key => getColumnByKey(states, key));
        keys.forEach(key => {
          const column = columns.find(col => col.id === key);
          if (column) {
            // TODO: 优化这里的代码
            panels[key].filteredValue = [];
          }
        });
        this.commit('filterChange', {
          column: columns,
          values: [],
          silent: true,
          multi: true
        });
      } else {
        keys.forEach(key => {
          // TODO: 优化这里的代码
          panels[key].filteredValue = [];
        });
        states.filters = {};
        this.commit('filterChange', {
          column: {},
          values: [],
          silent: true
        });
      }
    },
    clearSort() {
      const states = this.states;
      if (!states.sortingColumn) return;
      this.updateSort(null, null, null);
      this.commit('changeSortCondition', {
        silent: true
      });
    },
    // 适配层，expand-row-keys 在 Expand 与 TreeTable 中都有使用
    setExpandRowKeysAdapter(val) {
      // 这里会触发额外的计算，但为了兼容性，暂时这么做
      this.setExpandRowKeys(val);
      this.updateTreeExpandKeys(val);
    },
    // 展开行与 TreeTable 都要使用
    toggleRowExpansionAdapter(row, expanded) {
      const hasExpandColumn = this.states.columns.some(({
        type
      }) => type === 'expand');
      if (hasExpandColumn) {
        this.toggleRowExpansion(row, expanded);
      } else {
        this.toggleTreeExpansion(row, expanded);
      }
    }
  }
}));
;// ./packages/el-table-prepend/src/store/index.js



watcher.prototype.mutations = {
  setData(states, data) {
    const dataInstanceChanged = states._data !== data;
    states._data = data;
    this.execQuery();
    // 数据变化，更新部分数据。
    // 没有使用 computed，而是手动更新部分数据 https://github.com/vuejs/vue/issues/6660#issuecomment-331417140
    this.updateCurrentRowData();
    this.updateExpandRows();
    if (states.reserveSelection) {
      this.assertRowKey();
      this.updateSelectionByRowKey();
    } else {
      if (dataInstanceChanged) {
        this.clearSelection();
      } else {
        this.cleanSelection();
      }
    }
    this.updateAllSelected();
    this.updateTableScrollY();
  },
  insertColumn(states, column, index, parent) {
    let array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }
    if (typeof index !== 'undefined') {
      array.splice(index, 0, column);
    } else {
      array.push(column);
    }
    if (column.type === 'selection') {
      states.selectable = column.selectable;
      states.reserveSelection = column.reserveSelection;
    }
    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics insert column
      this.scheduleLayout();
    }
  },
  removeColumn(states, column, parent) {
    let array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }
    if (array) {
      array.splice(array.indexOf(column), 1);
    }
    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics remove column
      this.scheduleLayout();
    }
  },
  sort(states, options) {
    const {
      prop,
      order,
      init
    } = options;
    if (prop) {
      const column = (0,util_.arrayFind)(states.columns, column => column.property === prop);
      if (column) {
        column.order = order;
        this.updateSort(column, prop, order);
        this.commit('changeSortCondition', {
          init
        });
      }
    }
  },
  changeSortCondition(states, options) {
    // 修复 pr https://github.com/ElemeFE/element/pull/15012 导致的 bug
    const {
      sortingColumn: column,
      sortProp: prop,
      sortOrder: order
    } = states;
    if (order === null) {
      states.sortingColumn = null;
      states.sortProp = null;
    }
    const ingore = {
      filter: true
    };
    this.execQuery(ingore);
    if (!options || !(options.silent || options.init)) {
      this.table.$emit('sort-change', {
        column,
        prop,
        order
      });
    }
    this.updateTableScrollY();
  },
  filterChange(states, options) {
    let {
      column,
      values,
      silent
    } = options;
    const newFilters = this.updateFilters(column, values);
    this.execQuery();
    if (!silent) {
      this.table.$emit('filter-change', newFilters);
    }
    this.updateTableScrollY();
  },
  toggleAllSelection() {
    this.toggleAllSelection();
  },
  rowSelectedChanged(states, row) {
    this.toggleRowSelection(row);
    this.updateAllSelected();
  },
  setHoverRow(states, row) {
    states.hoverRow = row;
  },
  setCurrentRow(states, row) {
    this.updateCurrentRow(row);
  }
};
watcher.prototype.commit = function (name, ...args) {
  const mutations = this.mutations;
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error(`Action not found: ${name}`);
  }
};
watcher.prototype.updateTableScrollY = function () {
  external_commonjs_vue_commonjs2_vue_root_Vue_default().nextTick(this.table.updateScrollY);
};
/* harmony default export */ var src_store = (watcher);
// EXTERNAL MODULE: ./node_modules/throttle-debounce/debounce.js
var debounce = __webpack_require__(965);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// ./packages/el-table-prepend/src/store/helper.js


function createStore(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.');
  }
  const store = new src_store();
  store.table = table;
  // fix https://github.com/ElemeFE/element/issues/14075
  // related pr https://github.com/ElemeFE/element/pull/14146
  store.toggleAllSelection = debounce_default()(10, store._toggleAllSelection);
  Object.keys(initialState).forEach(key => {
    store.states[key] = initialState[key];
  });
  return store;
}
function mapStates(mapper) {
  const res = {};
  Object.keys(mapper).forEach(key => {
    const value = mapper[key];
    let fn;
    if (typeof value === 'string') {
      fn = function () {
        return this.store.states[value];
      };
    } else if (typeof value === 'function') {
      fn = function () {
        return value.call(this, this.store.states);
      };
    } else {
      console.error('invalid value type');
    }
    if (fn) {
      res[key] = fn;
    }
  });
  return res;
}
;
// EXTERNAL MODULE: external "element-ui/src/utils/scrollbar-width"
var scrollbar_width_ = __webpack_require__(702);
var scrollbar_width_default = /*#__PURE__*/__webpack_require__.n(scrollbar_width_);
;// ./packages/el-table-prepend/src/table-layout.js



class TableLayout {
  constructor(options) {
    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = null;
    this.fit = true;
    this.showHeader = true;
    this.height = null;
    this.scrollX = false;
    this.scrollY = false;
    this.bodyWidth = null;
    this.fixedWidth = null;
    this.rightFixedWidth = null;
    this.tableHeight = null;
    this.headerHeight = 44; // Table Header Height
    this.appendHeight = 0; // Append Slot Height
    this.footerHeight = 44; // Table Footer Height
    this.viewportHeight = null; // Table Height - Scroll Bar Height
    this.bodyHeight = null; // Table Height - Table Header Height
    this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
    this.gutterWidth = scrollbar_width_default()();
    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }
    if (!this.table) {
      throw new Error('table is required for Table Layout');
    }
    if (!this.store) {
      throw new Error('store is required for Table Layout');
    }
  }
  updateScrollY() {
    const height = this.height;
    if (height === null) return false;
    const bodyWrapper = this.table.bodyWrapper;
    if (this.table.$el && bodyWrapper) {
      const body = bodyWrapper.querySelector('.el-table__body');
      const prevScrollY = this.scrollY;
      const scrollY = body.offsetHeight > this.bodyHeight;
      this.scrollY = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  }
  setHeight(value, prop = 'height') {
    if ((external_commonjs_vue_commonjs2_vue_root_Vue_default()).prototype.$isServer) return;
    const el = this.table.$el;
    value = parseHeight(value);
    this.height = value;
    if (!el && (value || value === 0)) return external_commonjs_vue_commonjs2_vue_root_Vue_default().nextTick(() => this.setHeight(value, prop));
    if (typeof value === 'number') {
      el.style[prop] = value + 'px';
      this.updateElsHeight();
    } else if (typeof value === 'string') {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  }
  setMaxHeight(value) {
    this.setHeight(value, 'max-height');
  }
  getFlattenColumns() {
    const flattenColumns = [];
    const columns = this.table.columns;
    columns.forEach(column => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });
    return flattenColumns;
  }
  updateElsHeight() {
    if (!this.table.$ready) return external_commonjs_vue_commonjs2_vue_root_Vue_default().nextTick(() => this.updateElsHeight());
    const {
      headerWrapper,
      appendWrapper,
      footerWrapper
    } = this.table.$refs;
    this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0;
    if (this.showHeader && !headerWrapper) return;

    // fix issue (https://github.com/ElemeFE/element/pull/16956)
    const headerTrElm = headerWrapper ? headerWrapper.querySelector('.el-table__header tr') : null;
    const noneHeader = this.headerDisplayNone(headerTrElm);
    const headerHeight = this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight;
    if (this.showHeader && !noneHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
      return external_commonjs_vue_commonjs2_vue_root_Vue_default().nextTick(() => this.updateElsHeight());
    }
    const tableHeight = this.tableHeight = this.table.$el.clientHeight;
    const footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
    if (this.height !== null) {
      this.bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
    }
    this.fixedBodyHeight = this.scrollX ? this.bodyHeight - this.gutterWidth : this.bodyHeight;
    const noData = !(this.store.states.data && this.store.states.data.length);
    this.viewportHeight = this.scrollX ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight;
    this.updateScrollY();
    this.notifyObservers('scrollable');
  }
  headerDisplayNone(elm) {
    if (!elm) return true;
    let headerChild = elm;
    while (headerChild.tagName !== 'DIV') {
      if (getComputedStyle(headerChild).display === 'none') {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    if ((external_commonjs_vue_commonjs2_vue_root_Vue_default()).prototype.$isServer) return;
    const fit = this.fit;
    const bodyWidth = this.table.$el.clientWidth;
    let bodyMinWidth = 0;
    const flattenColumns = this.getFlattenColumns();
    let flexColumns = flattenColumns.filter(column => typeof column.width !== 'number');
    flattenColumns.forEach(column => {
      // Clean those columns whose width changed from flex to unflex
      if (typeof column.width === 'number' && column.realWidth) column.realWidth = null;
    });
    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach(column => {
        bodyMinWidth += column.width || column.minWidth || 80;
      });
      const scrollYWidth = this.scrollY ? this.gutterWidth : 0;
      if (bodyMinWidth <= bodyWidth - scrollYWidth) {
        // DON'T HAVE SCROLL BAR
        this.scrollX = false;
        const totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;
        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          const allColumnsWidth = flexColumns.reduce((prev, column) => prev + (column.minWidth || 80), 0);
          const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          let noneFirstWidth = 0;
          flexColumns.forEach((column, index) => {
            if (index === 0) return;
            const flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = (column.minWidth || 80) + flexWidth;
          });
          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        // HAVE HORIZONTAL SCROLL BAR
        this.scrollX = true;
        flexColumns.forEach(function (column) {
          column.realWidth = column.minWidth;
        });
      }
      this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
      this.table.resizeState.width = this.bodyWidth;
    } else {
      flattenColumns.forEach(column => {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = column.width || column.minWidth;
        }
        bodyMinWidth += column.realWidth;
      });
      this.scrollX = bodyMinWidth > bodyWidth;
      this.bodyWidth = bodyMinWidth;
    }
    const fixedColumns = this.store.states.fixedColumns;
    if (fixedColumns.length > 0) {
      let fixedWidth = 0;
      fixedColumns.forEach(function (column) {
        fixedWidth += column.realWidth || column.width;
      });
      this.fixedWidth = fixedWidth;
    }
    const rightFixedColumns = this.store.states.rightFixedColumns;
    if (rightFixedColumns.length > 0) {
      let rightFixedWidth = 0;
      rightFixedColumns.forEach(function (column) {
        rightFixedWidth += column.realWidth || column.width;
      });
      this.rightFixedWidth = rightFixedWidth;
    }
    this.notifyObservers('columns');
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObservers(event) {
    const observers = this.observers;
    observers.forEach(observer => {
      switch (event) {
        case 'columns':
          observer.onColumnsChange(this);
          break;
        case 'scrollable':
          observer.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${event}.`);
      }
    });
  }
}
/* harmony default export */ var table_layout = (TableLayout);
// EXTERNAL MODULE: external "element-ui/src/utils/dom"
var dom_ = __webpack_require__(221);
// EXTERNAL MODULE: external "element-ui/packages/tooltip"
var tooltip_ = __webpack_require__(211);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);
;// ./packages/el-table-prepend/src/layout-observer.js
/* harmony default export */ var layout_observer = ({
  created() {
    this.tableLayout.addObserver(this);
  },
  destroyed() {
    this.tableLayout.removeObserver(this);
  },
  computed: {
    tableLayout() {
      let layout = this.layout;
      if (!layout && this.table) {
        layout = this.table.layout;
      }
      if (!layout) {
        throw new Error('Can not find table layout.');
      }
      return layout;
    }
  },
  mounted() {
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
  },
  updated() {
    if (this.__updated__) return;
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
    this.__updated__ = true;
  },
  methods: {
    onColumnsChange(layout) {
      const cols = this.$el.querySelectorAll('colgroup > col');
      if (!cols.length) return;
      const flattenColumns = layout.getFlattenColumns();
      const columnsMap = {};
      flattenColumns.forEach(column => {
        columnsMap[column.id] = column;
      });
      for (let i = 0, j = cols.length; i < j; i++) {
        const col = cols[i];
        const name = col.getAttribute('name');
        const column = columnsMap[name];
        if (column) {
          col.setAttribute('width', column.realWidth || column.width);
        }
      }
    },
    onScrollableChange(layout) {
      const cols = this.$el.querySelectorAll('colgroup > col[name=gutter]');
      for (let i = 0, j = cols.length; i < j; i++) {
        const col = cols[i];
        col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0');
      }
      const ths = this.$el.querySelectorAll('th.gutter');
      for (let i = 0, j = ths.length; i < j; i++) {
        const th = ths[i];
        th.style.width = layout.scrollY ? layout.gutterWidth + 'px' : '0';
        th.style.display = layout.scrollY ? '' : 'none';
      }
    }
  }
});
;// ./packages/el-table-prepend/src/table-row.js

/* harmony default export */ var table_row = ({
  name: 'ElTableRow',
  props: ['columns', 'row', 'index', 'isSelected', 'isExpanded', 'store', 'context', 'firstDefaultColumnIndex', 'treeRowData', 'treeIndent', 'columnsHidden', 'getSpan', 'getColspanRealWidth', 'getCellStyle', 'getCellClass', 'handleCellMouseLeave', 'handleCellMouseEnter', 'fixed'],
  components: {
    ElCheckbox: (checkbox_default())
  },
  render() {
    const h = arguments[0];
    const {
      columns,
      row,
      index: $index,
      store,
      context,
      firstDefaultColumnIndex,
      treeRowData,
      treeIndent,
      columnsHidden = [],
      isSelected,
      isExpanded
    } = this;
    return h("tr", [columns.map((column, cellIndex) => {
      const {
        rowspan,
        colspan
      } = this.getSpan(row, column, $index, cellIndex);
      if (!rowspan || !colspan) {
        return null;
      }
      const columnData = {
        ...column
      };
      columnData.realWidth = this.getColspanRealWidth(columns, colspan, cellIndex);
      const data = {
        store,
        isSelected,
        isExpanded,
        _self: context,
        column: columnData,
        row,
        $index
      };
      if (cellIndex === firstDefaultColumnIndex && treeRowData) {
        data.treeNode = {
          indent: treeRowData.level * treeIndent,
          level: treeRowData.level
        };
        if (typeof treeRowData.expanded === 'boolean') {
          data.treeNode.expanded = treeRowData.expanded;
          // 表明是懒加载
          if ('loading' in treeRowData) {
            data.treeNode.loading = treeRowData.loading;
          }
          if ('noLazyChildren' in treeRowData) {
            data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
          }
        }
      }
      return h("td", {
        "style": this.getCellStyle($index, cellIndex, row, column),
        "class": this.getCellClass($index, cellIndex, row, column),
        "attrs": {
          "rowspan": rowspan,
          "colspan": colspan
        },
        "on": {
          "mouseenter": $event => this.handleCellMouseEnter($event, row),
          "mouseleave": this.handleCellMouseLeave
        }
      }, [column.renderCell.call(this._renderProxy, this.$createElement, data, columnsHidden[cellIndex])]);
    })]);
  }
});
;// ./packages/el-table-prepend/src/table-body.js









/* harmony default export */ var table_body = ({
  name: 'ElTableBody',
  mixins: [layout_observer],
  components: {
    ElCheckbox: (checkbox_default()),
    ElTooltip: (tooltip_default()),
    TableRow: table_row
  },
  props: {
    store: {
      required: true
    },
    stripe: Boolean,
    context: {},
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: String,
    highlight: Boolean
  },
  render(h) {
    const data = this.data || [];
    return h("table", {
      "class": "el-table__body",
      "attrs": {
        "cellspacing": "0",
        "cellpadding": "0",
        "border": "0"
      }
    }, [h("colgroup", [this.columns.map(column => h("col", {
      "attrs": {
        "name": column.id
      },
      "key": column.id
    }))]), h("tbody", [data.reduce((acc, row) => {
      return acc.concat(this.wrappedRowRender(row, acc.length));
    }, []), h("el-tooltip", {
      "attrs": {
        "effect": this.table.tooltipEffect,
        "placement": "top",
        "content": this.tooltipContent
      },
      "ref": "tooltip"
    })])]);
  },
  computed: {
    table() {
      return this.$parent;
    },
    ...mapStates({
      data: 'data',
      columns: 'columns',
      treeIndent: 'indent',
      leftFixedLeafCount: 'fixedLeafColumnsLength',
      rightFixedLeafCount: 'rightFixedLeafColumnsLength',
      columnsCount: states => states.columns.length,
      leftFixedCount: states => states.fixedColumns.length,
      rightFixedCount: states => states.rightFixedColumns.length,
      hasExpandColumn: states => states.columns.some(({
        type
      }) => type === 'expand')
    }),
    columnsHidden() {
      return this.columns.map((column, index) => this.isColumnHidden(index));
    },
    firstDefaultColumnIndex() {
      return (0,util_.arrayFindIndex)(this.columns, ({
        type
      }) => type === 'default');
    }
  },
  watch: {
    // don't trigger getter of currentRow in getCellClass. see https://jsfiddle.net/oe2b4hqt/
    // update DOM manually. see https://github.com/ElemeFE/element/pull/13954/files#diff-9b450c00d0a9dec0ffad5a3176972e40
    'store.states.hoverRow'(newVal, oldVal) {
      if (!this.store.states.isComplex || this.$isServer) return;
      let raf = window.requestAnimationFrame;
      if (!raf) {
        raf = fn => setTimeout(fn, 16);
      }
      raf(() => {
        const rows = this.$el.querySelectorAll('.el-table__row');
        const oldRow = rows[oldVal];
        const newRow = rows[newVal];
        if (oldRow) {
          (0,dom_.removeClass)(oldRow, 'hover-row');
        }
        if (newRow) {
          (0,dom_.addClass)(newRow, 'hover-row');
        }
      });
    }
  },
  data() {
    return {
      tooltipContent: ''
    };
  },
  created() {
    this.activateTooltip = debounce_default()(50, tooltip => tooltip.handleShowPopper());
  },
  methods: {
    getKeyOfRow(row, index) {
      const rowKey = this.table.rowKey;
      if (rowKey) {
        return getRowIdentity(row, rowKey);
      }
      return index;
    },
    isColumnHidden(index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return index < this.leftFixedLeafCount || index >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getSpan(row, column, rowIndex, columnIndex) {
      let rowspan = 1;
      let colspan = 1;
      const fn = this.table.spanMethod;
      if (typeof fn === 'function') {
        const result = fn({
          row,
          column,
          rowIndex,
          columnIndex
        });
        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if (typeof result === 'object') {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
      }
      return {
        rowspan,
        colspan
      };
    },
    getRowStyle(row, rowIndex) {
      const rowStyle = this.table.rowStyle;
      if (typeof rowStyle === 'function') {
        return rowStyle.call(null, {
          row,
          rowIndex
        });
      }
      return rowStyle || null;
    },
    getRowClass(row, rowIndex) {
      let selection = this.store.states.selection;
      const classes = ['el-table__row'];
      if (this.table.highlightCurrentRow && row === this.store.states.currentRow) {
        classes.push('current-row');
      }
      if (this.table.highlightSelectionRow) {
        for (let i = 0; i < selection.length; i++) {
          if (objectEquals(row, selection[i])) {
            classes.push('selection-row');
          }
        }
        ;
      }
      if (this.stripe && rowIndex % 2 === 1) {
        classes.push('el-table__row--striped');
      }
      const rowClassName = this.table.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(null, {
          row,
          rowIndex
        }));
      }
      if (this.store.states.expandRows.indexOf(row) > -1) {
        classes.push('expanded');
      }
      return classes;
    },
    getCellStyle(rowIndex, columnIndex, row, column) {
      const cellStyle = this.table.cellStyle;
      if (typeof cellStyle === 'function') {
        return cellStyle.call(null, {
          rowIndex,
          columnIndex,
          row,
          column
        });
      }
      return cellStyle;
    },
    getCellClass(rowIndex, columnIndex, row, column) {
      const classes = [column.id, column.align, column.className];
      if (this.isColumnHidden(columnIndex)) {
        classes.push('is-hidden');
      }
      const cellClassName = this.table.cellClassName;
      if (typeof cellClassName === 'string') {
        classes.push(cellClassName);
      } else if (typeof cellClassName === 'function') {
        classes.push(cellClassName.call(null, {
          rowIndex,
          columnIndex,
          row,
          column
        }));
      }
      classes.push('el-table__cell');
      return classes.join(' ');
    },
    getColspanRealWidth(columns, colspan, index) {
      if (colspan < 1) {
        return columns[index].realWidth;
      }
      const widthArr = columns.map(({
        realWidth
      }) => realWidth).slice(index, index + colspan);
      return widthArr.reduce((acc, width) => acc + width, -1);
    },
    handleCellMouseEnter(event, row) {
      const table = this.table;
      const cell = getCell(event);
      if (cell) {
        const column = getColumnByCell(table, cell);
        const hoverState = table.hoverState = {
          cell,
          column,
          row
        };
        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      const cellChild = event.target.querySelector('.cell');
      if (!((0,dom_.hasClass)(cellChild, 'el-tooltip') && cellChild.childNodes.length)) {
        return;
      }
      // use range width instead of scrollWidth to determine whether the text is overflowing
      // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
      const range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      const rangeWidth = range.getBoundingClientRect().width;
      const padding = (parseInt((0,dom_.getStyle)(cellChild, 'paddingLeft'), 10) || 0) + (parseInt((0,dom_.getStyle)(cellChild, 'paddingRight'), 10) || 0);
      if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
        const tooltip = this.$refs.tooltip;
        // TODO 会引起整个 Table 的重新渲染，需要优化
        this.tooltipContent = cell.innerText || cell.textContent;
        tooltip.referenceElm = cell;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        this.activateTooltip(tooltip);
      }
    },
    handleCellMouseLeave(event) {
      const tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
      const cell = getCell(event);
      if (!cell) return;
      const oldHoverState = this.table.hoverState || {};
      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
    },
    handleMouseEnter: debounce_default()(30, function (index) {
      this.store.commit('setHoverRow', index);
    }),
    handleMouseLeave: debounce_default()(30, function () {
      this.store.commit('setHoverRow', null);
    }),
    handleContextMenu(event, row) {
      this.handleEvent(event, row, 'contextmenu');
    },
    handleDoubleClick(event, row) {
      this.handleEvent(event, row, 'dblclick');
    },
    handleClick(event, row) {
      this.store.commit('setCurrentRow', row);
      this.handleEvent(event, row, 'click');
    },
    handleEvent(event, row, name) {
      const table = this.table;
      const cell = getCell(event);
      let column;
      if (cell) {
        column = getColumnByCell(table, cell);
        if (column) {
          table.$emit(`cell-${name}`, row, column, cell, event);
        }
      }
      table.$emit(`row-${name}`, row, column, event);
    },
    rowRender(row, $index, treeRowData) {
      const h = this.$createElement;
      const {
        treeIndent,
        columns,
        firstDefaultColumnIndex
      } = this;
      const rowClasses = this.getRowClass(row, $index);
      let display = true;
      if (treeRowData) {
        rowClasses.push('el-table__row--level-' + treeRowData.level);
        display = treeRowData.display;
      }
      // 指令 v-show 会覆盖 row-style 中 display
      // 使用 :style 代替 v-show https://github.com/ElemeFE/element/issues/16995
      let displayStyle = display ? null : {
        display: 'none'
      };
      return h(table_row, {
        "style": [displayStyle, this.getRowStyle(row, $index)],
        "class": rowClasses,
        "key": this.getKeyOfRow(row, $index),
        "nativeOn": {
          "dblclick": $event => this.handleDoubleClick($event, row),
          "click": $event => this.handleClick($event, row),
          "contextmenu": $event => this.handleContextMenu($event, row),
          "mouseenter": _ => this.handleMouseEnter($index),
          "mouseleave": this.handleMouseLeave
        },
        "attrs": {
          "columns": columns,
          "row": row,
          "index": $index,
          "store": this.store,
          "context": this.context || this.table.$vnode.context,
          "firstDefaultColumnIndex": firstDefaultColumnIndex,
          "treeRowData": treeRowData,
          "treeIndent": treeIndent,
          "columnsHidden": this.columnsHidden,
          "getSpan": this.getSpan,
          "getColspanRealWidth": this.getColspanRealWidth,
          "getCellStyle": this.getCellStyle,
          "getCellClass": this.getCellClass,
          "handleCellMouseEnter": this.handleCellMouseEnter,
          "handleCellMouseLeave": this.handleCellMouseLeave,
          "isSelected": this.store.isSelected(row),
          "isExpanded": this.store.states.expandRows.indexOf(row) > -1,
          "fixed": this.fixed
        }
      });
    },
    wrappedRowRender(row, $index) {
      const h = this.$createElement;
      const store = this.store;
      const {
        isRowExpanded,
        assertRowKey
      } = store;
      const {
        treeData,
        lazyTreeNodeMap,
        childrenColumnName,
        rowKey
      } = store.states;
      if (this.hasExpandColumn && isRowExpanded(row)) {
        const renderExpanded = this.table.renderExpanded;
        const tr = this.rowRender(row, $index);
        if (!renderExpanded) {
          console.error('[Element Error]renderExpanded is required.');
          return tr;
        }
        // 使用二维数组，避免修改 $index
        return [[tr, h("tr", {
          "key": 'expanded-row__' + tr.key
        }, [h("td", {
          "attrs": {
            "colspan": this.columnsCount
          },
          "class": "el-table__cell el-table__expanded-cell"
        }, [renderExpanded(this.$createElement, {
          row,
          $index,
          store: this.store
        })])])]];
      } else if (Object.keys(treeData).length) {
        assertRowKey();
        // TreeTable 时，rowKey 必须由用户设定，不使用 getKeyOfRow 计算
        // 在调用 rowRender 函数时，仍然会计算 rowKey，不太好的操作
        const key = getRowIdentity(row, rowKey);
        let cur = treeData[key];
        let treeRowData = null;
        if (cur) {
          treeRowData = {
            expanded: cur.expanded,
            level: cur.level,
            display: true
          };
          if (typeof cur.lazy === 'boolean') {
            if (typeof cur.loaded === 'boolean' && cur.loaded) {
              treeRowData.noLazyChildren = !(cur.children && cur.children.length);
            }
            treeRowData.loading = cur.loading;
          }
        }
        const tmp = [this.rowRender(row, $index, treeRowData)];
        // 渲染嵌套数据
        if (cur) {
          // currentRow 记录的是 index，所以还需主动增加 TreeTable 的 index
          let i = 0;
          const traverse = (children, parent) => {
            if (!(children && children.length && parent)) return;
            children.forEach(node => {
              // 父节点的 display 状态影响子节点的显示状态
              const innerTreeRowData = {
                display: parent.display && parent.expanded,
                level: parent.level + 1
              };
              const childKey = getRowIdentity(node, rowKey);
              if (childKey === undefined || childKey === null) {
                throw new Error('for nested data item, row-key is required.');
              }
              cur = {
                ...treeData[childKey]
              };
              // 对于当前节点，分成有无子节点两种情况。
              // 如果包含子节点的，设置 expanded 属性。
              // 对于它子节点的 display 属性由它本身的 expanded 与 display 共同决定。
              if (cur) {
                innerTreeRowData.expanded = cur.expanded;
                // 懒加载的某些节点，level 未知
                cur.level = cur.level || innerTreeRowData.level;
                cur.display = !!(cur.expanded && innerTreeRowData.display);
                if (typeof cur.lazy === 'boolean') {
                  if (typeof cur.loaded === 'boolean' && cur.loaded) {
                    innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                  }
                  innerTreeRowData.loading = cur.loading;
                }
              }
              i++;
              tmp.push(this.rowRender(node, $index + i, innerTreeRowData));
              if (cur) {
                const nodes = lazyTreeNodeMap[childKey] || node[childrenColumnName];
                traverse(nodes, cur);
              }
            });
          };
          // 对于 root 节点，display 一定为 true
          cur.display = true;
          const nodes = lazyTreeNodeMap[key] || row[childrenColumnName];
          traverse(nodes, cur);
        }
        return tmp;
      } else {
        return this.rowRender(row, $index);
      }
    }
  }
});
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/el-table-prepend/src/filter-panel.vue?vue&type=template&id=1aef5508
var filter_panelvue_type_template_id_1aef5508_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "el-zoom-in-top"
    }
  }, [_vm.multiple ? _c('div', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: _vm.handleOutsideClick,
      expression: "handleOutsideClick"
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.showPopper,
      expression: "showPopper"
    }],
    staticClass: "el-table-filter"
  }, [_c('div', {
    staticClass: "el-table-filter__content"
  }, [_c('el-scrollbar', {
    attrs: {
      "wrap-class": "el-table-filter__wrap"
    }
  }, [_c('el-checkbox-group', {
    staticClass: "el-table-filter__checkbox-group",
    model: {
      value: _vm.filteredValue,
      callback: function ($$v) {
        _vm.filteredValue = $$v;
      },
      expression: "filteredValue"
    }
  }, _vm._l(_vm.filters, function (filter) {
    return _c('el-checkbox', {
      key: filter.value,
      attrs: {
        "label": filter.value
      }
    }, [_vm._v(_vm._s(filter.text))]);
  }), 1)], 1)], 1), _c('div', {
    staticClass: "el-table-filter__bottom"
  }, [_c('button', {
    class: {
      'is-disabled': _vm.filteredValue.length === 0
    },
    attrs: {
      "disabled": _vm.filteredValue.length === 0
    },
    on: {
      "click": _vm.handleConfirm
    }
  }, [_vm._v(_vm._s(_vm.t('el.table.confirmFilter')))]), _c('button', {
    on: {
      "click": _vm.handleReset
    }
  }, [_vm._v(_vm._s(_vm.t('el.table.resetFilter')))])])]) : _c('div', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: _vm.handleOutsideClick,
      expression: "handleOutsideClick"
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.showPopper,
      expression: "showPopper"
    }],
    staticClass: "el-table-filter"
  }, [_c('ul', {
    staticClass: "el-table-filter__list"
  }, [_c('li', {
    staticClass: "el-table-filter__list-item",
    class: {
      'is-active': _vm.filterValue === undefined || _vm.filterValue === null
    },
    on: {
      "click": function ($event) {
        return _vm.handleSelect(null);
      }
    }
  }, [_vm._v(_vm._s(_vm.t('el.table.clearFilter')))]), _vm._l(_vm.filters, function (filter) {
    return _c('li', {
      key: filter.value,
      staticClass: "el-table-filter__list-item",
      class: {
        'is-active': _vm.isActive(filter)
      },
      attrs: {
        "label": filter.value
      },
      on: {
        "click": function ($event) {
          return _vm.handleSelect(filter.value);
        }
      }
    }, [_vm._v(_vm._s(filter.text))]);
  })], 2)])]);
};
var filter_panelvue_type_template_id_1aef5508_staticRenderFns = [];

// EXTERNAL MODULE: external "element-ui/src/utils/vue-popper"
var vue_popper_ = __webpack_require__(518);
var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);
// EXTERNAL MODULE: external "element-ui/src/utils/popup"
var popup_ = __webpack_require__(51);
// EXTERNAL MODULE: external "element-ui/src/utils/clickoutside"
var clickoutside_ = __webpack_require__(188);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);
;// ./packages/el-table-prepend/src/dropdown.js

var dropdowns = [];
!(external_commonjs_vue_commonjs2_vue_root_Vue_default()).prototype.$isServer && document.addEventListener('click', function (event) {
  dropdowns.forEach(function (dropdown) {
    var target = event.target;
    if (!dropdown || !dropdown.$el) return;
    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return;
    }
    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
  });
});
/* harmony default export */ var dropdown = ({
  open(instance) {
    if (instance) {
      dropdowns.push(instance);
    }
  },
  close(instance) {
    var index = dropdowns.indexOf(instance);
    if (index !== -1) {
      dropdowns.splice(instance, 1);
    }
  }
});
// EXTERNAL MODULE: external "element-ui/packages/checkbox-group"
var checkbox_group_ = __webpack_require__(691);
var checkbox_group_default = /*#__PURE__*/__webpack_require__.n(checkbox_group_);
// EXTERNAL MODULE: external "element-ui/packages/scrollbar"
var scrollbar_ = __webpack_require__(366);
var scrollbar_default = /*#__PURE__*/__webpack_require__.n(scrollbar_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/el-table-prepend/src/filter-panel.vue?vue&type=script&lang=js








/* harmony default export */ var filter_panelvue_type_script_lang_js = ({
  name: 'ElTableFilterPanel',
  mixins: [(vue_popper_default()), (locale_default())],
  directives: {
    Clickoutside: (clickoutside_default())
  },
  components: {
    ElCheckbox: (checkbox_default()),
    ElCheckboxGroup: (checkbox_group_default()),
    ElScrollbar: (scrollbar_default())
  },
  props: {
    placement: {
      type: String,
      default: 'bottom-end'
    }
  },
  methods: {
    isActive(filter) {
      return filter.value === this.filterValue;
    },
    handleOutsideClick() {
      setTimeout(() => {
        this.showPopper = false;
      }, 16);
    },
    handleConfirm() {
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleSelect(filterValue) {
      this.filterValue = filterValue;
      if (typeof filterValue !== 'undefined' && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }
      this.handleOutsideClick();
    },
    confirmFilter(filteredValue) {
      this.table.store.commit('filterChange', {
        column: this.column,
        values: filteredValue
      });
      this.table.store.updateAllSelected();
    }
  },
  data() {
    return {
      table: null,
      cell: null,
      column: null
    };
  },
  computed: {
    filters() {
      return this.column && this.column.filters;
    },
    filterValue: {
      get() {
        return (this.column.filteredValue || [])[0];
      },
      set(value) {
        if (this.filteredValue) {
          if (typeof value !== 'undefined' && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      }
    },
    filteredValue: {
      get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      }
    },
    multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    }
  },
  mounted() {
    this.popperElm = this.$el;
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener('scroll', () => {
      this.updatePopper();
    });
    this.$watch('showPopper', value => {
      if (this.column) this.column.filterOpened = value;
      if (value) {
        dropdown.open(this);
      } else {
        dropdown.close(this);
      }
    });
  },
  watch: {
    showPopper(val) {
      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < popup_.PopupManager.zIndex) {
        this.popperJS._popper.style.zIndex = popup_.PopupManager.nextZIndex();
      }
    }
  }
});
;// ./packages/el-table-prepend/src/filter-panel.vue?vue&type=script&lang=js
 /* harmony default export */ var src_filter_panelvue_type_script_lang_js = (filter_panelvue_type_script_lang_js); 
;// ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// ./packages/el-table-prepend/src/filter-panel.vue





/* normalize component */
;
var component = normalizeComponent(
  src_filter_panelvue_type_script_lang_js,
  filter_panelvue_type_template_id_1aef5508_render,
  filter_panelvue_type_template_id_1aef5508_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var filter_panel = (component.exports);
;// ./packages/el-table-prepend/src/table-header.js






const getAllColumns = columns => {
  const result = [];
  columns.forEach(column => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = originColumns => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach(subColumn => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach(column => {
    column.level = 1;
    traverse(column);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach(column => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
/* harmony default export */ var table_header = ({
  name: 'ElTableHeader',
  mixins: [layout_observer],
  render(h) {
    const originColumns = this.store.states.originColumns;
    const columnRows = convertToRows(originColumns, this.columns);
    // 是否拥有多级表头
    const isGroup = columnRows.length > 1;
    if (isGroup) this.$parent.isGroup = true;
    return h("table", {
      "class": "el-table__header",
      "attrs": {
        "cellspacing": "0",
        "cellpadding": "0",
        "border": "0"
      }
    }, [h("colgroup", [this.columns.map(column => h("col", {
      "attrs": {
        "name": column.id
      },
      "key": column.id
    })), this.hasGutter ? h("col", {
      "attrs": {
        "name": "gutter"
      }
    }) : '']), h("thead", {
      "class": [{
        'is-group': isGroup,
        'has-gutter': this.hasGutter
      }]
    }, [this._l(columnRows, (columns, rowIndex) => h("tr", {
      "style": this.getHeaderRowStyle(rowIndex),
      "class": this.getHeaderRowClass(rowIndex)
    }, [columns.map((column, cellIndex) => h("th", {
      "attrs": {
        "colspan": column.colSpan,
        "rowspan": column.rowSpan
      },
      "on": {
        "mousemove": $event => this.handleMouseMove($event, column),
        "mouseout": this.handleMouseOut,
        "mousedown": $event => this.handleMouseDown($event, column),
        "click": $event => this.handleHeaderClick($event, column),
        "contextmenu": $event => this.handleHeaderContextMenu($event, column)
      },
      "style": this.getHeaderCellStyle(rowIndex, cellIndex, columns, column),
      "class": this.getHeaderCellClass(rowIndex, cellIndex, columns, column),
      "key": column.id
    }, [h("div", {
      "class": ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName]
    }, [column.renderHeader ? column.renderHeader.call(this._renderProxy, h, {
      column,
      $index: cellIndex,
      store: this.store,
      _self: this.$parent.$vnode.context
    }) : column.label, column.sortable ? h("span", {
      "class": "caret-wrapper",
      "on": {
        "click": $event => this.handleSortClick($event, column)
      }
    }, [h("i", {
      "class": "sort-caret ascending",
      "on": {
        "click": $event => this.handleSortClick($event, column, 'ascending')
      }
    }), h("i", {
      "class": "sort-caret descending",
      "on": {
        "click": $event => this.handleSortClick($event, column, 'descending')
      }
    })]) : '', column.filterable ? h("span", {
      "class": "el-table__column-filter-trigger",
      "on": {
        "click": $event => this.handleFilterClick($event, column)
      }
    }, [h("i", {
      "class": ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : '']
    })]) : ''])])), this.hasGutter ? h("th", {
      "class": "el-table__cell gutter"
    }) : '']))])]);
  },
  props: {
    fixed: String,
    store: {
      required: true
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },
  components: {
    ElCheckbox: (checkbox_default())
  },
  computed: {
    table() {
      return this.$parent;
    },
    hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    },
    ...mapStates({
      columns: 'columns',
      isAllSelected: 'isAllSelected',
      leftFixedLeafCount: 'fixedLeafColumnsLength',
      rightFixedLeafCount: 'rightFixedLeafColumnsLength',
      columnsCount: states => states.columns.length,
      leftFixedCount: states => states.fixedColumns.length,
      rightFixedCount: states => states.rightFixedColumns.length
    })
  },
  created() {
    this.filterPanels = {};
  },
  mounted() {
    // nextTick 是有必要的 https://github.com/ElemeFE/element/pull/11311
    this.$nextTick(() => {
      const {
        prop,
        order
      } = this.defaultSort;
      const init = true;
      this.store.commit('sort', {
        prop,
        order,
        init
      });
    });
  },
  beforeDestroy() {
    const panels = this.filterPanels;
    for (let prop in panels) {
      if (panels.hasOwnProperty(prop) && panels[prop]) {
        panels[prop].$destroy(true);
      }
    }
  },
  methods: {
    isCellHidden(index, columns) {
      let start = 0;
      for (let i = 0; i < index; i++) {
        start += columns[i].colSpan;
      }
      const after = start + columns[index].colSpan - 1;
      if (this.fixed === true || this.fixed === 'left') {
        return after >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return start < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return after < this.leftFixedLeafCount || start >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getHeaderRowStyle(rowIndex) {
      const headerRowStyle = this.table.headerRowStyle;
      if (typeof headerRowStyle === 'function') {
        return headerRowStyle.call(null, {
          rowIndex
        });
      }
      return headerRowStyle;
    },
    getHeaderRowClass(rowIndex) {
      const classes = [];
      const headerRowClassName = this.table.headerRowClassName;
      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName);
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName.call(null, {
          rowIndex
        }));
      }
      return classes.join(' ');
    },
    getHeaderCellStyle(rowIndex, columnIndex, row, column) {
      const headerCellStyle = this.table.headerCellStyle;
      if (typeof headerCellStyle === 'function') {
        return headerCellStyle.call(null, {
          rowIndex,
          columnIndex,
          row,
          column
        });
      }
      return headerCellStyle;
    },
    getHeaderCellClass(rowIndex, columnIndex, row, column) {
      const classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];
      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden');
      }
      if (!column.children) {
        classes.push('is-leaf');
      }
      if (column.sortable) {
        classes.push('is-sortable');
      }
      const headerCellClassName = this.table.headerCellClassName;
      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName);
      } else if (typeof headerCellClassName === 'function') {
        classes.push(headerCellClassName.call(null, {
          rowIndex,
          columnIndex,
          row,
          column
        }));
      }
      classes.push('el-table__cell');
      return classes.join(' ');
    },
    toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    },
    handleFilterClick(event, column) {
      event.stopPropagation();
      const target = event.target;
      let cell = target.tagName === 'TH' ? target : target.parentNode;
      if ((0,dom_.hasClass)(cell, 'noclick')) return;
      cell = cell.querySelector('.el-table__column-filter-trigger') || cell;
      const table = this.$parent;
      let filterPanel = this.filterPanels[column.id];
      if (filterPanel && column.filterOpened) {
        filterPanel.showPopper = false;
        return;
      }
      if (!filterPanel) {
        filterPanel = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())(filter_panel);
        this.filterPanels[column.id] = filterPanel;
        if (column.filterPlacement) {
          filterPanel.placement = column.filterPlacement;
        }
        filterPanel.table = table;
        filterPanel.cell = cell;
        filterPanel.column = column;
        !this.$isServer && filterPanel.$mount(document.createElement('div'));
      }
      setTimeout(() => {
        filterPanel.showPopper = true;
      }, 16);
    },
    handleHeaderClick(event, column) {
      if (!column.filters && column.sortable) {
        this.handleSortClick(event, column);
      } else if (column.filterable && !column.sortable) {
        this.handleFilterClick(event, column);
      }
      this.$parent.$emit('header-click', column, event);
    },
    handleHeaderContextMenu(event, column) {
      this.$parent.$emit('header-contextmenu', column, event);
    },
    handleMouseDown(event, column) {
      if (this.$isServer) return;
      if (column.children && column.children.length > 0) return;
      /* istanbul ignore if */
      if (this.draggingColumn && this.border) {
        this.dragging = true;
        this.$parent.resizeProxyVisible = true;
        const table = this.$parent;
        const tableEl = table.$el;
        const tableLeft = tableEl.getBoundingClientRect().left;
        const columnEl = this.$el.querySelector(`th.${column.id}`);
        const columnRect = columnEl.getBoundingClientRect();
        const minLeft = columnRect.left - tableLeft + 30;
        (0,dom_.addClass)(columnEl, 'noclick');
        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft
        };
        const resizeProxy = table.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';
        document.onselectstart = function () {
          return false;
        };
        document.ondragstart = function () {
          return false;
        };
        const handleMouseMove = event => {
          const deltaLeft = event.clientX - this.dragState.startMouseLeft;
          const proxyLeft = this.dragState.startLeft + deltaLeft;
          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };
        const handleMouseUp = () => {
          if (this.dragging) {
            const {
              startColumnLeft,
              startLeft
            } = this.dragState;
            const finalLeft = parseInt(resizeProxy.style.left, 10);
            const columnWidth = finalLeft - startColumnLeft;
            column.width = column.realWidth = columnWidth;
            table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event);
            this.store.scheduleLayout();
            document.body.style.cursor = '';
            this.dragging = false;
            this.draggingColumn = null;
            this.dragState = {};
            table.resizeProxyVisible = false;
          }
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;
          setTimeout(function () {
            (0,dom_.removeClass)(columnEl, 'noclick');
          }, 0);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    },
    handleMouseMove(event, column) {
      if (column.children && column.children.length > 0) return;
      let target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }
      if (!column || !column.resizable) return;
      if (!this.dragging && this.border) {
        let rect = target.getBoundingClientRect();
        const bodyStyle = document.body.style;
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize';
          if ((0,dom_.hasClass)(target, 'is-sortable')) {
            target.style.cursor = 'col-resize';
          }
          this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = '';
          if ((0,dom_.hasClass)(target, 'is-sortable')) {
            target.style.cursor = 'pointer';
          }
          this.draggingColumn = null;
        }
      }
    },
    handleMouseOut() {
      if (this.$isServer) return;
      document.body.style.cursor = '';
    },
    toggleOrder({
      order,
      sortOrders
    }) {
      if (order === '') return sortOrders[0];
      const index = sortOrders.indexOf(order || null);
      return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
    },
    handleSortClick(event, column, givenOrder) {
      event.stopPropagation();
      let order = column.order === givenOrder ? null : givenOrder || this.toggleOrder(column);
      let target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }
      if (target && target.tagName === 'TH') {
        if ((0,dom_.hasClass)(target, 'noclick')) {
          (0,dom_.removeClass)(target, 'noclick');
          return;
        }
      }
      if (!column.sortable) return;
      const states = this.store.states;
      let sortProp = states.sortProp;
      let sortOrder;
      const sortingColumn = states.sortingColumn;
      if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
        if (sortingColumn) {
          sortingColumn.order = null;
        }
        states.sortingColumn = column;
        sortProp = column.property;
      }
      if (!order) {
        sortOrder = column.order = null;
      } else {
        sortOrder = column.order = order;
      }
      states.sortProp = sortProp;
      states.sortOrder = sortOrder;
      this.store.commit('changeSortCondition');
    }
  },
  data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    };
  }
});
;// ./packages/el-table-prepend/src/table-footer.js


/* harmony default export */ var table_footer = ({
  name: 'ElTableFooter',
  mixins: [layout_observer],
  render(h) {
    let sums = [];
    if (this.summaryMethod) {
      sums = this.summaryMethod({
        columns: this.columns,
        data: this.store.states.data
      });
    } else {
      this.columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = this.sumText;
          return;
        }
        const values = this.store.states.data.map(item => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach(value => {
          if (!isNaN(value)) {
            notNumber = false;
            let decimal = ('' + value).split('.')[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = '';
        }
      });
    }
    return h("table", {
      "class": "el-table__footer",
      "attrs": {
        "cellspacing": "0",
        "cellpadding": "0",
        "border": "0"
      }
    }, [h("colgroup", [this.columns.map(column => h("col", {
      "attrs": {
        "name": column.id
      },
      "key": column.id
    })), this.hasGutter ? h("col", {
      "attrs": {
        "name": "gutter"
      }
    }) : '']), h("tbody", {
      "class": [{
        'has-gutter': this.hasGutter
      }]
    }, [h("tr", [this.columns.map((column, cellIndex) => h("td", {
      "key": cellIndex,
      "attrs": {
        "colspan": column.colSpan,
        "rowspan": column.rowSpan
      },
      "class": [...this.getRowClasses(column, cellIndex), 'el-table__cell']
    }, [h("div", {
      "class": ['cell', column.labelClassName]
    }, [sums[cellIndex]])])), this.hasGutter ? h("th", {
      "class": "el-table__cell gutter"
    }) : ''])])]);
  },
  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },
  computed: {
    table() {
      return this.$parent;
    },
    hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    },
    ...mapStates({
      columns: 'columns',
      isAllSelected: 'isAllSelected',
      leftFixedLeafCount: 'fixedLeafColumnsLength',
      rightFixedLeafCount: 'rightFixedLeafColumnsLength',
      columnsCount: states => states.columns.length,
      leftFixedCount: states => states.fixedColumns.length,
      rightFixedCount: states => states.rightFixedColumns.length
    })
  },
  methods: {
    isCellHidden(index, columns, column) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        let before = 0;
        for (let i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedLeafCount;
      } else if (!this.fixed && column.fixed) {
        // hide cell when footer instance is not fixed and column is fixed
        return true;
      } else {
        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
      }
    },
    getRowClasses(column, cellIndex) {
      const classes = [column.id, column.align, column.labelClassName];
      if (column.className) {
        classes.push(column.className);
      }
      if (this.isCellHidden(cellIndex, this.columns, column)) {
        classes.push('is-hidden');
      }
      if (!column.children) {
        classes.push('is-leaf');
      }
      return classes;
    }
  }
});
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/el-table-prepend/src/table.vue?vue&type=script&lang=js












let tableIdSeed = 1;
/* harmony default export */ var tablevue_type_script_lang_js = ({
  name: 'ElTablePrepend',
  mixins: [(locale_default()), (migrating_default())],
  directives: {
    Mousewheel: (mousewheel_default())
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },
    size: String,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: {
      type: Boolean,
      default: true
    },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    context: {},
    showHeader: {
      type: Boolean,
      default: true
    },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    highlightSelectionRow: {
      type: Boolean,
      default: false
    },
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    spanMethod: Function,
    selectOnIndeterminate: {
      type: Boolean,
      default: true
    },
    indent: {
      type: Number,
      default: 16
    },
    treeProps: {
      type: Object,
      default() {
        return {
          hasChildren: 'hasChildren',
          children: 'children'
        };
      }
    },
    lazy: Boolean,
    load: Function
  },
  components: {
    TableHeader: table_header,
    TableFooter: table_footer,
    TableBody: table_body,
    ElCheckbox: (checkbox_default())
  },
  methods: {
    getMigratingConfig() {
      return {
        events: {
          expand: 'expand is renamed to expand-change'
        }
      };
    },
    setCurrentRow(row) {
      this.store.commit('setCurrentRow', row);
    },
    toggleRowSelection(row, selected) {
      this.store.toggleRowSelection(row, selected, false);
      this.store.updateAllSelected();
    },
    toggleRowExpansion(row, expanded) {
      this.store.toggleRowExpansionAdapter(row, expanded);
    },
    clearSelection() {
      this.store.clearSelection();
    },
    clearFilter(columnKeys) {
      this.store.clearFilter(columnKeys);
    },
    clearSort() {
      this.store.clearSort();
    },
    handleMouseLeave() {
      this.store.commit('setHoverRow', null);
      if (this.hoverState) this.hoverState = null;
    },
    updateScrollY() {
      const changed = this.layout.updateScrollY();
      if (changed) {
        this.layout.notifyObservers('scrollable');
        this.layout.updateColumnsWidth();
      }
    },
    handleFixedMousewheel(event, data) {
      const bodyWrapper = this.bodyWrapper;
      if (Math.abs(data.spinY) > 0) {
        const currentScrollTop = bodyWrapper.scrollTop;
        if (data.pixelY < 0 && currentScrollTop !== 0) {
          event.preventDefault();
        }
        if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
          event.preventDefault();
        }
        bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
      } else {
        bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
      }
    },
    handleHeaderFooterMousewheel(event, data) {
      const {
        pixelX,
        pixelY
      } = data;
      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        this.bodyWrapper.scrollLeft += data.pixelX / 5;
      }
    },
    // TODO 使用 CSS transform
    syncPostion() {
      const {
        scrollLeft,
        scrollTop,
        offsetWidth,
        scrollWidth
      } = this.bodyWrapper;
      const {
        headerWrapper,
        footerWrapper,
        fixedBodyWrapper,
        rightFixedBodyWrapper
      } = this.$refs;
      if (headerWrapper) headerWrapper.scrollLeft = scrollLeft;
      if (footerWrapper) footerWrapper.scrollLeft = scrollLeft;
      if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = scrollTop;
      if (rightFixedBodyWrapper) rightFixedBodyWrapper.scrollTop = scrollTop;
      const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
      if (scrollLeft >= maxScrollLeftPosition) {
        this.scrollPosition = 'right';
      } else if (scrollLeft === 0) {
        this.scrollPosition = 'left';
      } else {
        this.scrollPosition = 'middle';
      }
    },
    throttleSyncPostion: (0,throttle_debounce.throttle)(16, function () {
      this.syncPostion();
    }),
    onScroll(evt) {
      let raf = window.requestAnimationFrame;
      if (!raf) {
        this.throttleSyncPostion();
      } else {
        raf(this.syncPostion);
      }
    },
    bindEvents() {
      this.bodyWrapper.addEventListener('scroll', this.onScroll, {
        passive: true
      });
      if (this.fit) {
        (0,resize_event_.addResizeListener)(this.$el, this.resizeListener);
      }
    },
    unbindEvents() {
      this.bodyWrapper.removeEventListener('scroll', this.onScroll, {
        passive: true
      });
      if (this.fit) {
        (0,resize_event_.removeResizeListener)(this.$el, this.resizeListener);
      }
    },
    resizeListener() {
      if (!this.$ready) return;
      let shouldUpdateLayout = false;
      const el = this.$el;
      const {
        width: oldWidth,
        height: oldHeight
      } = this.resizeState;
      const width = el.offsetWidth;
      if (oldWidth !== width) {
        shouldUpdateLayout = true;
      }
      const height = el.offsetHeight;
      if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
        shouldUpdateLayout = true;
      }
      if (shouldUpdateLayout) {
        this.resizeState.width = width;
        this.resizeState.height = height;
        this.doLayout();
      }
    },
    doLayout() {
      if (this.shouldUpdateHeight) {
        this.layout.updateElsHeight();
      }
      this.layout.updateColumnsWidth();
    },
    sort(prop, order) {
      this.store.commit('sort', {
        prop,
        order
      });
    },
    toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    }
  },
  computed: {
    tableSize() {
      return this.size || (this.$ELEMENT || {}).size;
    },
    bodyWrapper() {
      return this.$refs.bodyWrapper;
    },
    shouldUpdateHeight() {
      return this.height || this.maxHeight || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
    },
    bodyWidth() {
      const {
        bodyWidth,
        scrollY,
        gutterWidth
      } = this.layout;
      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
    },
    bodyHeight() {
      const {
        headerHeight = 0,
        bodyHeight,
        footerHeight = 0
      } = this.layout;
      if (this.height) {
        return {
          height: bodyHeight ? bodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        const maxHeight = parseHeight(this.maxHeight);
        if (typeof maxHeight === 'number') {
          return {
            'max-height': maxHeight - footerHeight - (this.showHeader ? headerHeight : 0) + 'px'
          };
        }
      }
      return {};
    },
    fixedBodyHeight() {
      if (this.height) {
        return {
          height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        let maxHeight = parseHeight(this.maxHeight);
        if (typeof maxHeight === 'number') {
          maxHeight = this.layout.scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;
          if (this.showHeader) {
            maxHeight -= this.layout.headerHeight;
          }
          maxHeight -= this.layout.footerHeight;
          return {
            'max-height': maxHeight + 'px'
          };
        }
      }
      return {};
    },
    fixedHeight() {
      if (this.maxHeight) {
        if (this.showSummary) {
          return {
            bottom: 0
          };
        }
        return {
          bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
        };
      } else {
        if (this.showSummary) {
          return {
            height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
          };
        }
        return {
          height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
        };
      }
    },
    emptyBlockStyle() {
      if (this.data && this.data.length) return null;
      let height = '100%';
      if (this.layout.appendHeight) {
        height = `calc(100% - ${this.layout.appendHeight}px)`;
      }
      return {
        width: this.bodyWidth,
        height
      };
    },
    ...mapStates({
      selection: 'selection',
      columns: 'columns',
      tableData: 'data',
      fixedColumns: 'fixedColumns',
      rightFixedColumns: 'rightFixedColumns'
    })
  },
  watch: {
    height: {
      immediate: true,
      handler(value) {
        this.layout.setHeight(value);
      }
    },
    maxHeight: {
      immediate: true,
      handler(value) {
        this.layout.setMaxHeight(value);
      }
    },
    currentRowKey: {
      immediate: true,
      handler(value) {
        if (!this.rowKey) return;
        this.store.setCurrentRowKey(value);
      }
    },
    data: {
      immediate: true,
      handler(value) {
        this.store.commit('setData', value);
      }
    },
    expandRowKeys: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.store.setExpandRowKeysAdapter(newVal);
        }
      }
    }
  },
  created() {
    this.tableId = 'el-table_' + tableIdSeed++;
    this.debouncedUpdateLayout = (0,throttle_debounce.debounce)(50, () => this.doLayout());
  },
  mounted() {
    this.bindEvents();
    this.store.updateColumns();
    this.doLayout();
    this.resizeState = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    };

    // init filters
    this.store.states.columns.forEach(column => {
      if (column.filteredValue && column.filteredValue.length) {
        this.store.commit('filterChange', {
          column,
          values: column.filteredValue,
          silent: true
        });
      }
    });
    this.$ready = true;
  },
  destroyed() {
    this.unbindEvents();
  },
  data() {
    const {
      hasChildren = 'hasChildren',
      children = 'children'
    } = this.treeProps;
    this.store = createStore(this, {
      rowKey: this.rowKey,
      defaultExpandAll: this.defaultExpandAll,
      selectOnIndeterminate: this.selectOnIndeterminate,
      // TreeTable 的相关配置
      indent: this.indent,
      lazy: this.lazy,
      lazyColumnIdentifier: hasChildren,
      childrenColumnName: children
    });
    const layout = new table_layout({
      store: this.store,
      table: this,
      fit: this.fit,
      showHeader: this.showHeader
    });
    return {
      layout,
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      resizeState: {
        width: null,
        height: null
      },
      // 是否拥有多级表头
      isGroup: false,
      scrollPosition: 'left'
    };
  }
});
;// ./packages/el-table-prepend/src/table.vue?vue&type=script&lang=js
 /* harmony default export */ var src_tablevue_type_script_lang_js = (tablevue_type_script_lang_js); 
;// ./packages/el-table-prepend/src/table.vue





/* normalize component */
;
var table_component = normalizeComponent(
  src_tablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table = (table_component.exports);
;// ./packages/el-table-prepend/index.js

/* harmony default export */ var el_table_prepend = (table);
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (el_table_prepend);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});