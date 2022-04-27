/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".mobile-ui {\n  padding: 15px;\n}\n.mobile-ui .banner {\n  font-size: 1.5em;\n  font-weight: 900;\n}\n.mobile-ui .field-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mobile-ui input.uxp-form-input {\n  background-color: white;\n  border: 1px solid rgba(128, 128, 128, 0.1803921569);\n}\n.mobile-ui .field {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.mobile-ui label {\n  margin-bottom: 0px;\n}\n.mobile-ui .new-visitor {\n  border-top: 1px solid rgba(128, 128, 128, 0.524);\n  margin-bottom: 20px;\n}\n.mobile-ui .new-visitor .h {\n  margin-top: 30px;\n  font-weight: bold;\n}\n.mobile-ui .visitor {\n  padding: 15px;\n  position: relative;\n  background-color: white;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.2);\n}\n.mobile-ui .visitor .name {\n  font-size: 1.2em;\n  margin-bottom: 10px;\n}\n.mobile-ui .visitor .more {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.mobile-ui .visitor .deleter {\n  position: absolute;\n  right: 5px;\n  top: 15px;\n  font-size: 0.9em;\n}\n.mobile-ui .spacer {\n  height: 100px;\n}\n.mobile-ui .actions {\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  height: 61px;\n  box-shadow: 1px 1px 8px 7px rgba(0, 0, 0, 0.3215686275);\n  padding: 20px;\n  background-color: #5752c9;\n  text-align: center;\n}\n.mobile-ui .actions .uxp-button {\n  padding: 10px 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const MobileUI = (props) => {
    let [host, setHost] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [date, setDate] = React.useState(new Date());
    let [time, setTime] = React.useState(date.toTimeString());
    let [title, setTitle] = React.useState('');
    let [venue, setVenue] = React.useState('Building 1');
    let [visitors, setVisitors] = React.useState([]);
    let [newVisitorName, setNewVisitorName] = React.useState('');
    let [newVisitorEmail, setNewVisitorEmail] = React.useState('');
    let [newVisitorCompany, setNewVisitorCompany] = React.useState('');
    return React.createElement("div", { className: "mobile-ui" },
        React.createElement("div", { className: 'banner' }, "Visitor Registration"),
        React.createElement("div", { className: 'field' },
            React.createElement("label", null, "Meeting Title"),
            React.createElement(components_1.Input, { placeholder: "Into Meetup", value: title, onChange: setTitle })),
        React.createElement("div", { className: 'field-row' },
            React.createElement("div", { className: 'field' },
                React.createElement("label", null, "Date"),
                React.createElement("input", { type: "date", value: date.toISOString().substring(0, 10), onChange: (e) => setDate(new Date(e.target.value)) })),
            React.createElement("div", { className: 'field' },
                React.createElement("label", null, "Time"),
                React.createElement("input", { type: "time", value: time, onChange: (e) => setTime(e.target.value) }))),
        React.createElement("div", { className: 'field' },
            React.createElement("label", null, "Host Name"),
            React.createElement(components_1.Input, { placeholder: "Name", value: host, onChange: setHost })),
        React.createElement("div", { className: 'field' },
            React.createElement("label", null, "Location"),
            React.createElement(components_1.Input, { placeholder: "Building 1", value: venue, onChange: setVenue })),
        React.createElement("div", { className: 'visitors' }, visitors.map((v, i) => {
            return React.createElement("div", { className: 'visitor' },
                React.createElement("div", { className: 'name' }, v.name),
                React.createElement("div", { className: 'more' },
                    React.createElement("div", { className: 'email' }, v.email),
                    React.createElement("div", { className: 'company' }, v.company)),
                React.createElement("div", { className: 'deleter', onClick: () => {
                        visitors.splice(i, 1);
                        setVisitors(visitors.slice());
                    } }, "Remove"));
        })),
        React.createElement("div", { className: 'new-visitor' },
            React.createElement("div", { className: 'h' }, "Add a visitor"),
            React.createElement("div", { className: 'field' },
                React.createElement("label", null, "Name"),
                React.createElement(components_1.Input, { placeholder: "Name", value: newVisitorName, onChange: setNewVisitorName })),
            React.createElement("div", { className: 'field' },
                React.createElement("label", null, "Email"),
                React.createElement(components_1.Input, { placeholder: "Email", value: newVisitorEmail, onChange: setNewVisitorEmail })),
            React.createElement("div", { className: 'field' },
                React.createElement("label", null, "Company"),
                React.createElement(components_1.Input, { placeholder: "Company", value: newVisitorCompany, onChange: setNewVisitorCompany })),
            React.createElement("div", null,
                React.createElement(components_1.Button, { onClick: () => {
                        visitors.push({ name: newVisitorName, email: newVisitorEmail, company: newVisitorCompany });
                        setVisitors(visitors.slice());
                        setNewVisitorCompany('');
                        setNewVisitorEmail('');
                        setNewVisitorName('');
                    }, title: 'Add Visitor' }))),
        React.createElement("div", { className: "spacer" }),
        React.createElement("div", { className: 'actions' },
            React.createElement(components_1.AsyncButton, { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        let r = yield props.uxpContext.executeAction('SimpleVisitorForm', 'CreateVisit', {
                            date: date.toISOString().substring(0, 10),
                            time: time.substring(0, 5),
                            venue,
                            meeting: title,
                            contact: host,
                            visitors,
                        }, { json: true });
                        alert('Submitted');
                        location.reload();
                    }
                    catch (e) {
                        alert(e);
                    }
                }), title: 'Submit' })));
};
uxp_1.registerUI({
    id: "mobile-ui",
    component: MobileUI,
    showDefaultHeader: false
});


/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = UXPComponents;

/***/ }),

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"id":"dcbf47ad-6bb6-45f7-89e5-3e5cfe5da1a1","author":"eutech","widgets":[],"sidebarLinks":[],"uis":[{"id":"mobile-ui","label":"Visitor Registration"}],"menuItems":[]}');

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map