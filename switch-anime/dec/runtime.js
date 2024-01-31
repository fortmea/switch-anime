"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value2) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
    return value2;
  };

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js"(exports, module) {
      "use strict";
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind-native.js
  var require_function_bind_native = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind-native.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        var test = function() {
        }.bind();
        return typeof test != "function" || test.hasOwnProperty("prototype");
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var call = FunctionPrototype.call;
      var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
      module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
        return function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof-raw.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toString = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var $Object = Object;
      var split = uncurryThis("".split);
      module.exports = fails(function() {
        return !$Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) === "String" ? split(it, "") : $Object(it);
      } : $Object;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-null-or-undefined.js
  var require_is_null_or_undefined = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
      "use strict";
      module.exports = function(it) {
        return it === null || it === void 0;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
      "use strict";
      var isNullOrUndefined = require_is_null_or_undefined();
      var $TypeError = TypeError;
      module.exports = function(it) {
        if (isNullOrUndefined(it))
          throw new $TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
      "use strict";
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js
  var require_global = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js"(exports, module) {
      "use strict";
      var check = function(it) {
        return it && it.Math === Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
      function() {
        return this;
      }() || Function("return this")();
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-pure.js"(exports, module) {
      "use strict";
      module.exports = false;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-global-property.js
  var require_define_global_property = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-global-property.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value2) {
        try {
          defineProperty(global2, key, { value: value2, configurable: true, writable: true });
        } catch (error) {
          global2[key] = value2;
        }
        return value2;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/shared-store.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var defineGlobalProperty = require_define_global_property();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
      module.exports = store;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/shared.js"(exports, module) {
      "use strict";
      var IS_PURE = require_is_pure();
      var store = require_shared_store();
      (module.exports = function(key, value2) {
        return store[key] || (store[key] = value2 !== void 0 ? value2 : {});
      })("versions", []).push({
        version: "3.34.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js"(exports, module) {
      "use strict";
      var requireObjectCoercible = require_require_object_coercible();
      var $Object = Object;
      module.exports = function(argument) {
        return $Object(requireObjectCoercible(argument));
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/has-own-property.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject(it), key);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/uid.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var id2 = 0;
      var postfix = Math.random();
      var toString = uncurryThis(1 .toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id2 + postfix, 36);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-user-agent.js
  var require_engine_user_agent = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
      "use strict";
      module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js
  var require_engine_v8_version = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var userAgent = require_engine_user_agent();
      var process2 = global2.process;
      var Deno = global2.Deno;
      var versions = process2 && process2.versions || Deno && Deno.version;
      var v8 = versions && versions.v8;
      var match;
      var version2;
      if (v8) {
        match = v8.split(".");
        version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version2 && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match)
            version2 = +match[1];
        }
      }
      module.exports = version2;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/symbol-constructor-detection.js
  var require_symbol_constructor_detection = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
      "use strict";
      var V8_VERSION = require_engine_v8_version();
      var fails = require_fails();
      var global2 = require_global();
      var $String = global2.String;
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = Symbol("symbol detection");
        return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
      "use strict";
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Symbol2 = global2.Symbol;
      var WellKnownSymbolsStore = shared("wks");
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name)) {
          WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/document-all.js
  var require_document_all = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/document-all.js"(exports, module) {
      "use strict";
      var documentAll = typeof document == "object" && document.all;
      var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== void 0;
      module.exports = {
        all: documentAll,
        IS_HTMLDDA
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js"(exports, module) {
      "use strict";
      var $documentAll = require_document_all();
      var documentAll = $documentAll.all;
      module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
        return typeof argument == "function" || argument === documentAll;
      } : function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var $documentAll = require_document_all();
      var documentAll = $documentAll.all;
      module.exports = $documentAll.IS_HTMLDDA ? function(it) {
        return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
      } : function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-object.js"(exports, module) {
      "use strict";
      var isObject2 = require_is_object();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isObject2(argument))
          return argument;
        throw new $TypeError($String(argument) + " is not an object");
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/v8-prototype-define-bug.js
  var require_v8_prototype_define_bug = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      module.exports = DESCRIPTORS && fails(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: false
        }).prototype !== 42;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/document-create-element.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var isObject2 = require_is_object();
      var document2 = global2.document;
      var EXISTS = isObject2(document2) && isObject2(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js
  var require_function_call = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var call = Function.prototype.call;
      module.exports = NATIVE_BIND ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-built-in.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-symbol.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var $Object = Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/try-to-string.js"(exports, module) {
      "use strict";
      var $String = String;
      module.exports = function(argument) {
        try {
          return $String(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/a-callable.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isCallable(argument))
          return argument;
        throw new $TypeError(tryToString(argument) + " is not a function");
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-method.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var isNullOrUndefined = require_is_null_or_undefined();
      module.exports = function(V, P) {
        var func = V[P];
        return isNullOrUndefined(func) ? void 0 : aCallable(func);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var $TypeError = TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
          return val;
        if (isCallable(fn = input.valueOf) && !isObject2(val = call(fn, input)))
          return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
          return val;
        throw new $TypeError("Can't convert object to primitive value");
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var isObject2 = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var $TypeError = TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject2(input) || isSymbol(input))
          return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0)
            pref = "default";
          result = call(exoticToPrim, input, pref);
          if (!isObject2(result) || isSymbol(result))
            return result;
          throw new $TypeError("Can't convert object to primitive value");
        }
        if (pref === void 0)
          pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-property-key.js"(exports, module) {
      "use strict";
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-property.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var $TypeError = TypeError;
      var $defineProperty = Object.defineProperty;
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ENUMERABLE = "enumerable";
      var CONFIGURABLE = "configurable";
      var WRITABLE = "writable";
      exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          var current = $getOwnPropertyDescriptor(O, P);
          if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
              configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
              enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
              writable: false
            };
          }
        }
        return $defineProperty(O, P, Attributes);
      } : $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return $defineProperty(O, P, Attributes);
          } catch (error) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw new $TypeError("Accessors not supported");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/math-trunc.js
  var require_math_trunc = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/math-trunc.js"(exports, module) {
      "use strict";
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = Math.trunc || function trunc(x) {
        var n = +x;
        return (n > 0 ? floor : ceil)(n);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
      "use strict";
      var trunc = require_math_trunc();
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : trunc(number);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-length.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
      "use strict";
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-includes.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = lengthOfArrayLike(O);
          var index = toAbsoluteIndex(fromIndex, length);
          var value2;
          if (IS_INCLUDES && el !== el)
            while (length > index) {
              value2 = O[index++];
              if (value2 !== value2)
                return true;
            }
          else
            for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el)
                return IS_INCLUDES || index || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/hidden-keys.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
        while (names.length > i)
          if (hasOwn(O, key = names[i++])) {
            ~indexOf(result, key) || push(result, key);
          }
        return result;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
      "use strict";
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-keys.js"(exports, module) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-properties.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index)
          definePropertyModule.f(O, key = keys[index++], props[key]);
        return O;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/html.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/shared-key.js"(exports, module) {
      "use strict";
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-create.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var definePropertiesModule = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--)
          delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create2(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = NullProtoObject();
        return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var create2 = require_object_create();
      var defineProperty = require_object_define_property().f;
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] === void 0) {
        defineProperty(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create2(null)
        });
      }
      module.exports = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterators.js
  var require_iterators = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterators.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/weak-map-basic-detection.js
  var require_weak_map_basic_detection = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var isCallable = require_is_callable();
      var WeakMap2 = global2.WeakMap;
      module.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
      "use strict";
      module.exports = function(bitmap, value2) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value2
        };
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value2) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value2));
      } : function(object, key, value2) {
        object[key] = value2;
        return object;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/internal-state.js"(exports, module) {
      "use strict";
      var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
      var global2 = require_global();
      var isObject2 = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = global2.TypeError;
      var WeakMap2 = global2.WeakMap;
      var set;
      var get;
      var has;
      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state2;
          if (!isObject2(it) || (state2 = get(it)).type !== TYPE) {
            throw new TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state2;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap2());
        store.get = store.get;
        store.has = store.has;
        store.set = store.set;
        set = function(it, metadata) {
          if (store.has(it))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          store.set(it, metadata);
          return metadata;
        };
        get = function(it) {
          return store.get(it) || {};
        };
        has = function(it) {
          return store.has(it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          if (hasOwn(it, STATE))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var STATE;
      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE)
          try {
            return $getOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
        if (hasOwn(O, P))
          return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-name.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/inspect-source.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/make-built-in.js
  var require_make_built_in = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/make-built-in.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var DESCRIPTORS = require_descriptors();
      var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var enforceInternalState = InternalStateModule.enforce;
      var getInternalState = InternalStateModule.get;
      var $String = String;
      var defineProperty = Object.defineProperty;
      var stringSlice = uncurryThis("".slice);
      var replace = uncurryThis("".replace);
      var join = uncurryThis([].join);
      var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
        return defineProperty(function() {
        }, "length", { value: 8 }).length !== 8;
      });
      var TEMPLATE = String(String).split("String");
      var makeBuiltIn = module.exports = function(value2, name, options) {
        if (stringSlice($String(name), 0, 7) === "Symbol(") {
          name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
        }
        if (options && options.getter)
          name = "get " + name;
        if (options && options.setter)
          name = "set " + name;
        if (!hasOwn(value2, "name") || CONFIGURABLE_FUNCTION_NAME && value2.name !== name) {
          if (DESCRIPTORS)
            defineProperty(value2, "name", { value: name, configurable: true });
          else
            value2.name = name;
        }
        if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value2.length !== options.arity) {
          defineProperty(value2, "length", { value: options.arity });
        }
        try {
          if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS)
              defineProperty(value2, "prototype", { writable: false });
          } else if (value2.prototype)
            value2.prototype = void 0;
        } catch (error) {
        }
        var state2 = enforceInternalState(value2);
        if (!hasOwn(state2, "source")) {
          state2.source = join(TEMPLATE, typeof name == "string" ? name : "");
        }
        return value2;
      };
      Function.prototype.toString = makeBuiltIn(function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      }, "toString");
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js
  var require_define_built_in = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var definePropertyModule = require_object_define_property();
      var makeBuiltIn = require_make_built_in();
      var defineGlobalProperty = require_define_global_property();
      module.exports = function(O, key, value2, options) {
        if (!options)
          options = {};
        var simple = options.enumerable;
        var name = options.name !== void 0 ? options.name : key;
        if (isCallable(value2))
          makeBuiltIn(value2, name, options);
        if (options.global) {
          if (simple)
            O[key] = value2;
          else
            defineGlobalProperty(key, value2);
        } else {
          try {
            if (!options.unsafe)
              delete O[key];
            else if (O[key])
              simple = true;
          } catch (error) {
          }
          if (simple)
            O[key] = value2;
          else
            definePropertyModule.f(O, key, {
              value: value2,
              enumerable: false,
              configurable: !options.nonConfigurable,
              writable: !options.nonWritable
            });
        }
        return O;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
      "use strict";
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/own-keys.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      var concat2 = uncurryThis([].concat);
      module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat2(keys, getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
      "use strict";
      var hasOwn = require_has_own_property();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module.exports = function(target, source, exceptions) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-forced.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value2 = data[normalize(feature)];
        return value2 === POLYFILL ? true : value2 === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var defineBuiltIn = require_define_built_in();
      var defineGlobalProperty = require_define_global_property();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global2;
        } else if (STATIC) {
          target = global2[TARGET] || defineGlobalProperty(TARGET, {});
        } else {
          target = (global2[TARGET] || {}).prototype;
        }
        if (target)
          for (key in source) {
            sourceProperty = source[key];
            if (options.dontCallGetSet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else
              targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
            if (!FORCED && targetProperty !== void 0) {
              if (typeof sourceProperty == typeof targetProperty)
                continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            defineBuiltIn(target, key, sourceProperty, options);
          }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        function F() {
        }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
      "use strict";
      var hasOwn = require_has_own_property();
      var isCallable = require_is_callable();
      var toObject = require_to_object();
      var sharedKey = require_shared_key();
      var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
      var IE_PROTO = sharedKey("IE_PROTO");
      var $Object = Object;
      var ObjectPrototype = $Object.prototype;
      module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
        var object = toObject(O);
        if (hasOwn(object, IE_PROTO))
          return object[IE_PROTO];
        var constructor = object.constructor;
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype;
        }
        return object instanceof $Object ? ObjectPrototype : null;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterators-core.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var create2 = require_object_create();
      var getPrototypeOf = require_object_get_prototype_of();
      var defineBuiltIn = require_define_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      var BUGGY_SAFARI_ITERATORS = false;
      var IteratorPrototype;
      var PrototypeOfArrayIteratorPrototype;
      var arrayIterator;
      if ([].keys) {
        arrayIterator = [].keys();
        if (!("next" in arrayIterator))
          BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
            IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }
      var NEW_ITERATOR_PROTOTYPE = !isObject2(IteratorPrototype) || fails(function() {
        var test = {};
        return IteratorPrototype[ITERATOR].call(test) !== test;
      });
      if (NEW_ITERATOR_PROTOTYPE)
        IteratorPrototype = {};
      else if (IS_PURE)
        IteratorPrototype = create2(IteratorPrototype);
      if (!isCallable(IteratorPrototype[ITERATOR])) {
        defineBuiltIn(IteratorPrototype, ITERATOR, function() {
          return this;
        });
      }
      module.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/set-to-string-tag.js"(exports, module) {
      "use strict";
      var defineProperty = require_object_define_property().f;
      var hasOwn = require_has_own_property();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module.exports = function(target, TAG, STATIC) {
        if (target && !STATIC)
          target = target.prototype;
        if (target && !hasOwn(target, TO_STRING_TAG)) {
          defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterator-create-constructor.js
  var require_iterator_create_constructor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterator-create-constructor.js"(exports, module) {
      "use strict";
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var create2 = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var setToStringTag = require_set_to_string_tag();
      var Iterators = require_iterators();
      var returnThis = function() {
        return this;
      };
      module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
        var TO_STRING_TAG = NAME + " Iterator";
        IteratorConstructor.prototype = create2(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this-accessor.js
  var require_function_uncurry_this_accessor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      module.exports = function(object, key, method) {
        try {
          return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
        } catch (error) {
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/a-possible-prototype.js
  var require_a_possible_prototype = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (typeof argument == "object" || isCallable(argument))
          return argument;
        throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-set-prototype-of.js
  var require_object_set_prototype_of = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThisAccessor = require_function_uncurry_this_accessor();
      var anObject = require_an_object();
      var aPossiblePrototype = require_a_possible_prototype();
      module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
          setter(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
        }
        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER)
            setter(O, proto);
          else
            O.__proto__ = proto;
          return O;
        };
      }() : void 0);
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterator-define.js
  var require_iterator_define = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterator-define.js"(exports, module) {
      "use strict";
      var $3 = require_export();
      var call = require_function_call();
      var IS_PURE = require_is_pure();
      var FunctionName = require_function_name();
      var isCallable = require_is_callable();
      var createIteratorConstructor = require_iterator_create_constructor();
      var getPrototypeOf = require_object_get_prototype_of();
      var setPrototypeOf = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var defineBuiltIn = require_define_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var IteratorsCore = require_iterators_core();
      var PROPER_FUNCTION_NAME = FunctionName.PROPER;
      var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol("iterator");
      var KEYS = "keys";
      var VALUES = "values";
      var ENTRIES = "entries";
      var returnThis = function() {
        return this;
      };
      module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);
        var getIterationMethod = function(KIND) {
          if (KIND === DEFAULT && defaultIterator)
            return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
            return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };
            case VALUES:
              return function values() {
                return new IteratorConstructor(this, KIND);
              };
            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }
          return function() {
            return new IteratorConstructor(this);
          };
        };
        var TO_STRING_TAG = NAME + " Iterator";
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods2, KEY;
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
          if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
                defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            }
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE)
              Iterators[TO_STRING_TAG] = returnThis;
          }
        }
        if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
            createNonEnumerableProperty(IterablePrototype, "name", VALUES);
          } else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return call(nativeIterator, this);
            };
          }
        }
        if (DEFAULT) {
          methods2 = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED)
            for (KEY in methods2) {
              if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                defineBuiltIn(IterablePrototype, KEY, methods2[KEY]);
              }
            }
          else
            $3({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods2);
        }
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
        }
        Iterators[NAME] = defaultIterator;
        return methods2;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-iter-result-object.js
  var require_create_iter_result_object = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-iter-result-object.js"(exports, module) {
      "use strict";
      module.exports = function(value2, done) {
        return { value: value2, done };
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js
  var require_es_array_iterator = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var addToUnscopables = require_add_to_unscopables();
      var Iterators = require_iterators();
      var InternalStateModule = require_internal_state();
      var defineProperty = require_object_define_property().f;
      var defineIterator = require_iterator_define();
      var createIterResultObject = require_create_iter_result_object();
      var IS_PURE = require_is_pure();
      var DESCRIPTORS = require_descriptors();
      var ARRAY_ITERATOR = "Array Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
      module.exports = defineIterator(Array, "Array", function(iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          // target
          index: 0,
          // next index
          kind
          // kind
        });
      }, function() {
        var state2 = getInternalState(this);
        var target = state2.target;
        var index = state2.index++;
        if (!target || index >= target.length) {
          state2.target = void 0;
          return createIterResultObject(void 0, true);
        }
        switch (state2.kind) {
          case "keys":
            return createIterResultObject(index, false);
          case "values":
            return createIterResultObject(target[index], false);
        }
        return createIterResultObject([index, target[index]], false);
      }, "values");
      var values = Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
      if (!IS_PURE && DESCRIPTORS && values.name !== "values")
        try {
          defineProperty(values, "name", { value: "values" });
        } catch (error) {
        }
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/url-constructor-detection.js
  var require_url_constructor_detection = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/url-constructor-detection.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var wellKnownSymbol = require_well_known_symbol();
      var DESCRIPTORS = require_descriptors();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      module.exports = !fails(function() {
        var url = new URL("b?a=1&b=2&c=3", "http://a");
        var params = url.searchParams;
        var params2 = new URLSearchParams("a=1&a=2&b=3");
        var result = "";
        url.pathname = "c%20d";
        params.forEach(function(value2, key) {
          params["delete"]("b");
          result += key + value2;
        });
        params2["delete"]("a", 2);
        params2["delete"]("b", void 0);
        return IS_PURE && (!url.toJSON || !params2.has("a", 1) || params2.has("a", 2) || !params2.has("a", void 0) || params2.has("b")) || !params.size && (IS_PURE || !DESCRIPTORS) || !params.sort || url.href !== "http://a/c%20d?a=1&c=3" || params.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !params[ITERATOR] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://\u0442\u0435\u0441\u0442").host !== "xn--e1aybc" || new URL("http://a#\u0431").hash !== "#%D0%B1" || result !== "a1c3" || new URL("http://x", void 0).host !== "x";
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in-accessor.js
  var require_define_built_in_accessor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in-accessor.js"(exports, module) {
      "use strict";
      var makeBuiltIn = require_make_built_in();
      var defineProperty = require_object_define_property();
      module.exports = function(target, name, descriptor) {
        if (descriptor.get)
          makeBuiltIn(descriptor.get, name, { getter: true });
        if (descriptor.set)
          makeBuiltIn(descriptor.set, name, { setter: true });
        return defineProperty.f(target, name, descriptor);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-ins.js
  var require_define_built_ins = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-ins.js"(exports, module) {
      "use strict";
      var defineBuiltIn = require_define_built_in();
      module.exports = function(target, src, options) {
        for (var key in src)
          defineBuiltIn(target, key, src[key], options);
        return target;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-instance.js
  var require_an_instance = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-instance.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var $TypeError = TypeError;
      module.exports = function(it, Prototype) {
        if (isPrototypeOf(Prototype, it))
          return it;
        throw new $TypeError("Incorrect invocation");
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this-clause.js
  var require_function_uncurry_this_clause = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module) {
      "use strict";
      var classofRaw = require_classof_raw();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(fn) {
        if (classofRaw(fn) === "Function")
          return uncurryThis(fn);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind-context.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this_clause();
      var aCallable = require_a_callable();
      var NATIVE_BIND = require_function_bind_native();
      var bind = uncurryThis(uncurryThis.bind);
      module.exports = function(fn, that) {
        aCallable(fn);
        return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test = {};
      test[TO_STRING_TAG] = "z";
      module.exports = String(test) === "[object z]";
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof.js
  var require_classof = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var isCallable = require_is_callable();
      var classofRaw = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var $Object = Object;
      var CORRECT_ARGUMENTS = classofRaw(function() {
        return arguments;
      }()) === "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (error) {
        }
      };
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js
  var require_to_string = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js"(exports, module) {
      "use strict";
      var classof = require_classof();
      var $String = String;
      module.exports = function(argument) {
        if (classof(argument) === "Symbol")
          throw new TypeError("Cannot convert a Symbol value to a string");
        return $String(argument);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-iterator-method.js
  var require_get_iterator_method = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-iterator-method.js"(exports, module) {
      "use strict";
      var classof = require_classof();
      var getMethod = require_get_method();
      var isNullOrUndefined = require_is_null_or_undefined();
      var Iterators = require_iterators();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      module.exports = function(it) {
        if (!isNullOrUndefined(it))
          return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-iterator.js
  var require_get_iterator = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-iterator.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var getIteratorMethod = require_get_iterator_method();
      var $TypeError = TypeError;
      module.exports = function(argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
        if (aCallable(iteratorMethod))
          return anObject(call(iteratorMethod, argument));
        throw new $TypeError(tryToString(argument) + " is not iterable");
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/validate-arguments-length.js
  var require_validate_arguments_length = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/validate-arguments-length.js"(exports, module) {
      "use strict";
      var $TypeError = TypeError;
      module.exports = function(passed, required) {
        if (passed < required)
          throw new $TypeError("Not enough arguments");
        return passed;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property.js
  var require_create_property = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property.js"(exports, module) {
      "use strict";
      var toPropertyKey = require_to_property_key();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = function(object, key, value2) {
        var propertyKey = toPropertyKey(key);
        if (propertyKey in object)
          definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value2));
        else
          object[propertyKey] = value2;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-slice-simple.js
  var require_array_slice_simple = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-slice-simple.js"(exports, module) {
      "use strict";
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var $Array = Array;
      var max = Math.max;
      module.exports = function(O, start, end) {
        var length = lengthOfArrayLike(O);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
        var result = $Array(max(fin - k, 0));
        var n = 0;
        for (; k < fin; k++, n++)
          createProperty(result, n, O[k]);
        result.length = n;
        return result;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-sort.js
  var require_array_sort = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-sort.js"(exports, module) {
      "use strict";
      var arraySlice = require_array_slice_simple();
      var floor = Math.floor;
      var mergeSort = function(array, comparefn) {
        var length = array.length;
        var middle = floor(length / 2);
        return length < 8 ? insertionSort(array, comparefn) : merge(
          array,
          mergeSort(arraySlice(array, 0, middle), comparefn),
          mergeSort(arraySlice(array, middle), comparefn),
          comparefn
        );
      };
      var insertionSort = function(array, comparefn) {
        var length = array.length;
        var i = 1;
        var element, j;
        while (i < length) {
          j = i;
          element = array[i];
          while (j && comparefn(array[j - 1], element) > 0) {
            array[j] = array[--j];
          }
          if (j !== i++)
            array[j] = element;
        }
        return array;
      };
      var merge = function(array, left, right, comparefn) {
        var llength = left.length;
        var rlength = right.length;
        var lindex = 0;
        var rindex = 0;
        while (lindex < llength || rindex < rlength) {
          array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
        }
        return array;
      };
      module.exports = mergeSort;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.constructor.js
  var require_web_url_search_params_constructor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.constructor.js"(exports, module) {
      "use strict";
      require_es_array_iterator();
      var $3 = require_export();
      var global2 = require_global();
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var DESCRIPTORS = require_descriptors();
      var USE_NATIVE_URL = require_url_constructor_detection();
      var defineBuiltIn = require_define_built_in();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var defineBuiltIns = require_define_built_ins();
      var setToStringTag = require_set_to_string_tag();
      var createIteratorConstructor = require_iterator_create_constructor();
      var InternalStateModule = require_internal_state();
      var anInstance = require_an_instance();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var bind = require_function_bind_context();
      var classof = require_classof();
      var anObject = require_an_object();
      var isObject2 = require_is_object();
      var $toString = require_to_string();
      var create2 = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var createIterResultObject = require_create_iter_result_object();
      var validateArgumentsLength = require_validate_arguments_length();
      var wellKnownSymbol = require_well_known_symbol();
      var arraySort = require_array_sort();
      var ITERATOR = wellKnownSymbol("iterator");
      var URL_SEARCH_PARAMS = "URLSearchParams";
      var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
      var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var safeGetBuiltIn = function(name) {
        if (!DESCRIPTORS)
          return global2[name];
        var descriptor = getOwnPropertyDescriptor(global2, name);
        return descriptor && descriptor.value;
      };
      var nativeFetch = safeGetBuiltIn("fetch");
      var NativeRequest = safeGetBuiltIn("Request");
      var Headers2 = safeGetBuiltIn("Headers");
      var RequestPrototype = NativeRequest && NativeRequest.prototype;
      var HeadersPrototype = Headers2 && Headers2.prototype;
      var RegExp2 = global2.RegExp;
      var TypeError2 = global2.TypeError;
      var decodeURIComponent = global2.decodeURIComponent;
      var encodeURIComponent2 = global2.encodeURIComponent;
      var charAt = uncurryThis("".charAt);
      var join = uncurryThis([].join);
      var push = uncurryThis([].push);
      var replace = uncurryThis("".replace);
      var shift = uncurryThis([].shift);
      var splice = uncurryThis([].splice);
      var split = uncurryThis("".split);
      var stringSlice = uncurryThis("".slice);
      var plus = /\+/g;
      var sequences = Array(4);
      var percentSequence = function(bytes) {
        return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp2("((?:%[\\da-f]{2}){" + bytes + "})", "gi"));
      };
      var percentDecode = function(sequence) {
        try {
          return decodeURIComponent(sequence);
        } catch (error) {
          return sequence;
        }
      };
      var deserialize = function(it) {
        var result = replace(it, plus, " ");
        var bytes = 4;
        try {
          return decodeURIComponent(result);
        } catch (error) {
          while (bytes) {
            result = replace(result, percentSequence(bytes--), percentDecode);
          }
          return result;
        }
      };
      var find = /[!'()~]|%20/g;
      var replacements = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
      };
      var replacer = function(match) {
        return replacements[match];
      };
      var serialize = function(it) {
        return replace(encodeURIComponent2(it), find, replacer);
      };
      var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
        setInternalState(this, {
          type: URL_SEARCH_PARAMS_ITERATOR,
          target: getInternalParamsState(params).entries,
          index: 0,
          kind
        });
      }, URL_SEARCH_PARAMS, function next() {
        var state2 = getInternalIteratorState(this);
        var target = state2.target;
        var index = state2.index++;
        if (!target || index >= target.length) {
          state2.target = void 0;
          return createIterResultObject(void 0, true);
        }
        var entry = target[index];
        switch (state2.kind) {
          case "keys":
            return createIterResultObject(entry.key, false);
          case "values":
            return createIterResultObject(entry.value, false);
        }
        return createIterResultObject([entry.key, entry.value], false);
      }, true);
      var URLSearchParamsState = function(init7) {
        this.entries = [];
        this.url = null;
        if (init7 !== void 0) {
          if (isObject2(init7))
            this.parseObject(init7);
          else
            this.parseQuery(typeof init7 == "string" ? charAt(init7, 0) === "?" ? stringSlice(init7, 1) : init7 : $toString(init7));
        }
      };
      URLSearchParamsState.prototype = {
        type: URL_SEARCH_PARAMS,
        bindURL: function(url) {
          this.url = url;
          this.update();
        },
        parseObject: function(object) {
          var entries = this.entries;
          var iteratorMethod = getIteratorMethod(object);
          var iterator, next, step, entryIterator, entryNext, first, second;
          if (iteratorMethod) {
            iterator = getIterator(object, iteratorMethod);
            next = iterator.next;
            while (!(step = call(next, iterator)).done) {
              entryIterator = getIterator(anObject(step.value));
              entryNext = entryIterator.next;
              if ((first = call(entryNext, entryIterator)).done || (second = call(entryNext, entryIterator)).done || !call(entryNext, entryIterator).done)
                throw new TypeError2("Expected sequence with length 2");
              push(entries, { key: $toString(first.value), value: $toString(second.value) });
            }
          } else
            for (var key in object)
              if (hasOwn(object, key)) {
                push(entries, { key, value: $toString(object[key]) });
              }
        },
        parseQuery: function(query) {
          if (query) {
            var entries = this.entries;
            var attributes = split(query, "&");
            var index = 0;
            var attribute, entry;
            while (index < attributes.length) {
              attribute = attributes[index++];
              if (attribute.length) {
                entry = split(attribute, "=");
                push(entries, {
                  key: deserialize(shift(entry)),
                  value: deserialize(join(entry, "="))
                });
              }
            }
          }
        },
        serialize: function() {
          var entries = this.entries;
          var result = [];
          var index = 0;
          var entry;
          while (index < entries.length) {
            entry = entries[index++];
            push(result, serialize(entry.key) + "=" + serialize(entry.value));
          }
          return join(result, "&");
        },
        update: function() {
          this.entries.length = 0;
          this.parseQuery(this.url.query);
        },
        updateURL: function() {
          if (this.url)
            this.url.update();
        }
      };
      var URLSearchParamsConstructor = function URLSearchParams2() {
        anInstance(this, URLSearchParamsPrototype);
        var init7 = arguments.length > 0 ? arguments[0] : void 0;
        var state2 = setInternalState(this, new URLSearchParamsState(init7));
        if (!DESCRIPTORS)
          this.size = state2.entries.length;
      };
      var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
      defineBuiltIns(URLSearchParamsPrototype, {
        // `URLSearchParams.prototype.append` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-append
        append: function append(name, value2) {
          var state2 = getInternalParamsState(this);
          validateArgumentsLength(arguments.length, 2);
          push(state2.entries, { key: $toString(name), value: $toString(value2) });
          if (!DESCRIPTORS)
            this.length++;
          state2.updateURL();
        },
        // `URLSearchParams.prototype.delete` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
        "delete": function(name) {
          var state2 = getInternalParamsState(this);
          var length = validateArgumentsLength(arguments.length, 1);
          var entries = state2.entries;
          var key = $toString(name);
          var $value = length < 2 ? void 0 : arguments[1];
          var value2 = $value === void 0 ? $value : $toString($value);
          var index = 0;
          while (index < entries.length) {
            var entry = entries[index];
            if (entry.key === key && (value2 === void 0 || entry.value === value2)) {
              splice(entries, index, 1);
              if (value2 !== void 0)
                break;
            } else
              index++;
          }
          if (!DESCRIPTORS)
            this.size = entries.length;
          state2.updateURL();
        },
        // `URLSearchParams.prototype.get` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-get
        get: function get(name) {
          var entries = getInternalParamsState(this).entries;
          validateArgumentsLength(arguments.length, 1);
          var key = $toString(name);
          var index = 0;
          for (; index < entries.length; index++) {
            if (entries[index].key === key)
              return entries[index].value;
          }
          return null;
        },
        // `URLSearchParams.prototype.getAll` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
        getAll: function getAll(name) {
          var entries = getInternalParamsState(this).entries;
          validateArgumentsLength(arguments.length, 1);
          var key = $toString(name);
          var result = [];
          var index = 0;
          for (; index < entries.length; index++) {
            if (entries[index].key === key)
              push(result, entries[index].value);
          }
          return result;
        },
        // `URLSearchParams.prototype.has` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-has
        has: function has(name) {
          var entries = getInternalParamsState(this).entries;
          var length = validateArgumentsLength(arguments.length, 1);
          var key = $toString(name);
          var $value = length < 2 ? void 0 : arguments[1];
          var value2 = $value === void 0 ? $value : $toString($value);
          var index = 0;
          while (index < entries.length) {
            var entry = entries[index++];
            if (entry.key === key && (value2 === void 0 || entry.value === value2))
              return true;
          }
          return false;
        },
        // `URLSearchParams.prototype.set` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-set
        set: function set(name, value2) {
          var state2 = getInternalParamsState(this);
          validateArgumentsLength(arguments.length, 1);
          var entries = state2.entries;
          var found = false;
          var key = $toString(name);
          var val = $toString(value2);
          var index = 0;
          var entry;
          for (; index < entries.length; index++) {
            entry = entries[index];
            if (entry.key === key) {
              if (found)
                splice(entries, index--, 1);
              else {
                found = true;
                entry.value = val;
              }
            }
          }
          if (!found)
            push(entries, { key, value: val });
          if (!DESCRIPTORS)
            this.size = entries.length;
          state2.updateURL();
        },
        // `URLSearchParams.prototype.sort` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
        sort: function sort() {
          var state2 = getInternalParamsState(this);
          arraySort(state2.entries, function(a, b) {
            return a.key > b.key ? 1 : -1;
          });
          state2.updateURL();
        },
        // `URLSearchParams.prototype.forEach` method
        forEach: function forEach(callback) {
          var entries = getInternalParamsState(this).entries;
          var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : void 0);
          var index = 0;
          var entry;
          while (index < entries.length) {
            entry = entries[index++];
            boundFunction(entry.value, entry.key, this);
          }
        },
        // `URLSearchParams.prototype.keys` method
        keys: function keys() {
          return new URLSearchParamsIterator(this, "keys");
        },
        // `URLSearchParams.prototype.values` method
        values: function values() {
          return new URLSearchParamsIterator(this, "values");
        },
        // `URLSearchParams.prototype.entries` method
        entries: function entries() {
          return new URLSearchParamsIterator(this, "entries");
        }
      }, { enumerable: true });
      defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: "entries" });
      defineBuiltIn(URLSearchParamsPrototype, "toString", function toString() {
        return getInternalParamsState(this).serialize();
      }, { enumerable: true });
      if (DESCRIPTORS)
        defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
          get: function size() {
            return getInternalParamsState(this).entries.length;
          },
          configurable: true,
          enumerable: true
        });
      setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
      $3({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
        URLSearchParams: URLSearchParamsConstructor
      });
      if (!USE_NATIVE_URL && isCallable(Headers2)) {
        headersHas = uncurryThis(HeadersPrototype.has);
        headersSet = uncurryThis(HeadersPrototype.set);
        wrapRequestOptions = function(init7) {
          if (isObject2(init7)) {
            var body = init7.body;
            var headers;
            if (classof(body) === URL_SEARCH_PARAMS) {
              headers = init7.headers ? new Headers2(init7.headers) : new Headers2();
              if (!headersHas(headers, "content-type")) {
                headersSet(headers, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
              return create2(init7, {
                body: createPropertyDescriptor(0, $toString(body)),
                headers: createPropertyDescriptor(0, headers)
              });
            }
          }
          return init7;
        };
        if (isCallable(nativeFetch)) {
          $3({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
            fetch: function fetch2(input) {
              return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
            }
          });
        }
        if (isCallable(NativeRequest)) {
          RequestConstructor = function Request2(input) {
            anInstance(this, RequestPrototype);
            return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
          };
          RequestPrototype.constructor = RequestConstructor;
          RequestConstructor.prototype = RequestPrototype;
          $3({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
            Request: RequestConstructor
          });
        }
      }
      var headersHas;
      var headersSet;
      var wrapRequestOptions;
      var RequestConstructor;
      module.exports = {
        URLSearchParams: URLSearchParamsConstructor,
        getState: getInternalParamsState
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.js
  var require_web_url_search_params = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.js"() {
      "use strict";
      require_web_url_search_params_constructor();
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.delete.js
  var require_web_url_search_params_delete = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.delete.js"() {
      "use strict";
      var defineBuiltIn = require_define_built_in();
      var uncurryThis = require_function_uncurry_this();
      var toString = require_to_string();
      var validateArgumentsLength = require_validate_arguments_length();
      var $URLSearchParams = URLSearchParams;
      var URLSearchParamsPrototype = $URLSearchParams.prototype;
      var append = uncurryThis(URLSearchParamsPrototype.append);
      var $delete = uncurryThis(URLSearchParamsPrototype["delete"]);
      var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
      var push = uncurryThis([].push);
      var params = new $URLSearchParams("a=1&a=2&b=3");
      params["delete"]("a", 1);
      params["delete"]("b", void 0);
      if (params + "" !== "a=2") {
        defineBuiltIn(URLSearchParamsPrototype, "delete", function(name) {
          var length = arguments.length;
          var $value = length < 2 ? void 0 : arguments[1];
          if (length && $value === void 0)
            return $delete(this, name);
          var entries = [];
          forEach(this, function(v, k) {
            push(entries, { key: k, value: v });
          });
          validateArgumentsLength(length, 1);
          var key = toString(name);
          var value2 = toString($value);
          var index = 0;
          var dindex = 0;
          var found = false;
          var entriesLength = entries.length;
          var entry;
          while (index < entriesLength) {
            entry = entries[index++];
            if (found || entry.key === key) {
              found = true;
              $delete(this, entry.key);
            } else
              dindex++;
          }
          while (dindex < entriesLength) {
            entry = entries[dindex++];
            if (!(entry.key === key && entry.value === value2))
              append(this, entry.key, entry.value);
          }
        }, { enumerable: true, unsafe: true });
      }
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.has.js
  var require_web_url_search_params_has = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.has.js"() {
      "use strict";
      var defineBuiltIn = require_define_built_in();
      var uncurryThis = require_function_uncurry_this();
      var toString = require_to_string();
      var validateArgumentsLength = require_validate_arguments_length();
      var $URLSearchParams = URLSearchParams;
      var URLSearchParamsPrototype = $URLSearchParams.prototype;
      var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
      var $has = uncurryThis(URLSearchParamsPrototype.has);
      var params = new $URLSearchParams("a=1");
      if (params.has("a", 2) || !params.has("a", void 0)) {
        defineBuiltIn(URLSearchParamsPrototype, "has", function has(name) {
          var length = arguments.length;
          var $value = length < 2 ? void 0 : arguments[1];
          if (length && $value === void 0)
            return $has(this, name);
          var values = getAll(this, name);
          validateArgumentsLength(length, 1);
          var value2 = toString($value);
          var index = 0;
          while (index < values.length) {
            if (values[index++] === value2)
              return true;
          }
          return false;
        }, { enumerable: true, unsafe: true });
      }
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.size.js
  var require_web_url_search_params_size = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.size.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var uncurryThis = require_function_uncurry_this();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var URLSearchParamsPrototype = URLSearchParams.prototype;
      var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
      if (DESCRIPTORS && !("size" in URLSearchParamsPrototype)) {
        defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
          get: function size() {
            var count = 0;
            forEach(this, function() {
              count++;
            });
            return count;
          },
          configurable: true,
          enumerable: true
        });
      }
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/path.js
  var require_path = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/path.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      module.exports = global2;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/web/url-search-params.js
  var require_url_search_params = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/web/url-search-params.js"(exports, module) {
      "use strict";
      require_web_url_search_params();
      require_web_url_search_params_delete();
      require_web_url_search_params_has();
      require_web_url_search_params_size();
      var path = require_path();
      module.exports = path.URLSearchParams;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-multibyte.js
  var require_string_multibyte = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-multibyte.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var toString = require_to_string();
      var requireObjectCoercible = require_require_object_coercible();
      var charAt = uncurryThis("".charAt);
      var charCodeAt = uncurryThis("".charCodeAt);
      var stringSlice = uncurryThis("".slice);
      var createMethod = function(CONVERT_TO_STRING) {
        return function($this, pos) {
          var S = toString(requireObjectCoercible($this));
          var position = toIntegerOrInfinity(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size)
            return CONVERT_TO_STRING ? "" : void 0;
          first = charCodeAt(S, position);
          return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
        };
      };
      module.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js
  var require_es_string_iterator = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js"() {
      "use strict";
      var charAt = require_string_multibyte().charAt;
      var toString = require_to_string();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_iterator_define();
      var createIterResultObject = require_create_iter_result_object();
      var STRING_ITERATOR = "String Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
      defineIterator(String, "String", function(iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: toString(iterated),
          index: 0
        });
      }, function next() {
        var state2 = getInternalState(this);
        var string = state2.string;
        var index = state2.index;
        var point;
        if (index >= string.length)
          return createIterResultObject(void 0, true);
        point = charAt(string, index);
        state2.index += point.length;
        return createIterResultObject(point, false);
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-assign.js
  var require_object_assign = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-assign.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var uncurryThis = require_function_uncurry_this();
      var call = require_function_call();
      var fails = require_fails();
      var objectKeys = require_object_keys();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var toObject = require_to_object();
      var IndexedObject = require_indexed_object();
      var $assign = Object.assign;
      var defineProperty = Object.defineProperty;
      var concat2 = uncurryThis([].concat);
      module.exports = !$assign || fails(function() {
        if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
          enumerable: true,
          get: function() {
            defineProperty(this, "b", {
              value: 3,
              enumerable: false
            });
          }
        }), { b: 2 })).b !== 1)
          return true;
        var A = {};
        var B = {};
        var symbol = Symbol("assign detection");
        var alphabet = "abcdefghijklmnopqrst";
        A[symbol] = 7;
        alphabet.split("").forEach(function(chr) {
          B[chr] = chr;
        });
        return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
      }) ? function assign(target, source) {
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        var propertyIsEnumerable = propertyIsEnumerableModule.f;
        while (argumentsLength > index) {
          var S = IndexedObject(arguments[index++]);
          var keys = getOwnPropertySymbols ? concat2(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || call(propertyIsEnumerable, S, key))
              T[key] = S[key];
          }
        }
        return T;
      } : $assign;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterator-close.js
  var require_iterator_close = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/iterator-close.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var anObject = require_an_object();
      var getMethod = require_get_method();
      module.exports = function(iterator, kind, value2) {
        var innerResult, innerError;
        anObject(iterator);
        try {
          innerResult = getMethod(iterator, "return");
          if (!innerResult) {
            if (kind === "throw")
              throw value2;
            return value2;
          }
          innerResult = call(innerResult, iterator);
        } catch (error) {
          innerError = true;
          innerResult = error;
        }
        if (kind === "throw")
          throw value2;
        if (innerError)
          throw innerResult;
        anObject(innerResult);
        return value2;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js
  var require_call_with_safe_iteration_closing = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var iteratorClose = require_iterator_close();
      module.exports = function(iterator, fn, value2, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value2)[0], value2[1]) : fn(value2);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-constructor.js
  var require_is_constructor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-constructor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var classof = require_classof();
      var getBuiltIn = require_get_built_in();
      var inspectSource = require_inspect_source();
      var noop2 = function() {
      };
      var empty = [];
      var construct = getBuiltIn("Reflect", "construct");
      var constructorRegExp = /^\s*(?:class|function)\b/;
      var exec = uncurryThis(constructorRegExp.exec);
      var INCORRECT_TO_STRING = !constructorRegExp.test(noop2);
      var isConstructorModern = function isConstructor(argument) {
        if (!isCallable(argument))
          return false;
        try {
          construct(noop2, empty, argument);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isConstructorLegacy = function isConstructor(argument) {
        if (!isCallable(argument))
          return false;
        switch (classof(argument)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
        } catch (error) {
          return true;
        }
      };
      isConstructorLegacy.sham = true;
      module.exports = !construct || fails(function() {
        var called;
        return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
          called = true;
        }) || called;
      }) ? isConstructorLegacy : isConstructorModern;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-from.js
  var require_array_from = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-from.js"(exports, module) {
      "use strict";
      var bind = require_function_bind_context();
      var call = require_function_call();
      var toObject = require_to_object();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var isConstructor = require_is_constructor();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var $Array = Array;
      module.exports = function from(arrayLike) {
        var O = toObject(arrayLike);
        var IS_CONSTRUCTOR = isConstructor(this);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var mapping = mapfn !== void 0;
        if (mapping)
          mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
        var iteratorMethod = getIteratorMethod(O);
        var index = 0;
        var length, result, step, iterator, next, value2;
        if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
          iterator = getIterator(O, iteratorMethod);
          next = iterator.next;
          result = IS_CONSTRUCTOR ? new this() : [];
          for (; !(step = call(next, iterator)).done; index++) {
            value2 = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
            createProperty(result, index, value2);
          }
        } else {
          length = lengthOfArrayLike(O);
          result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
          for (; length > index; index++) {
            value2 = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value2);
          }
        }
        result.length = index;
        return result;
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-punycode-to-ascii.js
  var require_string_punycode_to_ascii = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-punycode-to-ascii.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var maxInt = 2147483647;
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128;
      var delimiter = "-";
      var regexNonASCII = /[^\0-\u007E]/;
      var regexSeparators = /[.\u3002\uFF0E\uFF61]/g;
      var OVERFLOW_ERROR = "Overflow: input needs wider integers to process";
      var baseMinusTMin = base - tMin;
      var $RangeError = RangeError;
      var exec = uncurryThis(regexSeparators.exec);
      var floor = Math.floor;
      var fromCharCode = String.fromCharCode;
      var charCodeAt = uncurryThis("".charCodeAt);
      var join = uncurryThis([].join);
      var push = uncurryThis([].push);
      var replace = uncurryThis("".replace);
      var split = uncurryThis("".split);
      var toLowerCase = uncurryThis("".toLowerCase);
      var ucs2decode = function(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        while (counter < length) {
          var value2 = charCodeAt(string, counter++);
          if (value2 >= 55296 && value2 <= 56319 && counter < length) {
            var extra = charCodeAt(string, counter++);
            if ((extra & 64512) === 56320) {
              push(output, ((value2 & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              push(output, value2);
              counter--;
            }
          } else {
            push(output, value2);
          }
        }
        return output;
      };
      var digitToBasic = function(digit) {
        return digit + 22 + 75 * (digit < 26);
      };
      var adapt = function(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        while (delta > baseMinusTMin * tMax >> 1) {
          delta = floor(delta / baseMinusTMin);
          k += base;
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };
      var encode = function(input) {
        var output = [];
        input = ucs2decode(input);
        var inputLength = input.length;
        var n = initialN;
        var delta = 0;
        var bias = initialBias;
        var i, currentValue;
        for (i = 0; i < input.length; i++) {
          currentValue = input[i];
          if (currentValue < 128) {
            push(output, fromCharCode(currentValue));
          }
        }
        var basicLength = output.length;
        var handledCPCount = basicLength;
        if (basicLength) {
          push(output, delimiter);
        }
        while (handledCPCount < inputLength) {
          var m = maxInt;
          for (i = 0; i < input.length; i++) {
            currentValue = input[i];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          var handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            throw new $RangeError(OVERFLOW_ERROR);
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (i = 0; i < input.length; i++) {
            currentValue = input[i];
            if (currentValue < n && ++delta > maxInt) {
              throw new $RangeError(OVERFLOW_ERROR);
            }
            if (currentValue === n) {
              var q = delta;
              var k = base;
              while (true) {
                var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t)
                  break;
                var qMinusT = q - t;
                var baseMinusT = base - t;
                push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                q = floor(qMinusT / baseMinusT);
                k += base;
              }
              push(output, fromCharCode(digitToBasic(q)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
              delta = 0;
              handledCPCount++;
            }
          }
          delta++;
          n++;
        }
        return join(output, "");
      };
      module.exports = function(input) {
        var encoded = [];
        var labels = split(replace(toLowerCase(input), regexSeparators, "."), ".");
        var i, label;
        for (i = 0; i < labels.length; i++) {
          label = labels[i];
          push(encoded, exec(regexNonASCII, label) ? "xn--" + encode(label) : label);
        }
        return join(encoded, ".");
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.constructor.js
  var require_web_url_constructor = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.constructor.js"() {
      "use strict";
      require_es_string_iterator();
      var $3 = require_export();
      var DESCRIPTORS = require_descriptors();
      var USE_NATIVE_URL = require_url_constructor_detection();
      var global2 = require_global();
      var bind = require_function_bind_context();
      var uncurryThis = require_function_uncurry_this();
      var defineBuiltIn = require_define_built_in();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var anInstance = require_an_instance();
      var hasOwn = require_has_own_property();
      var assign = require_object_assign();
      var arrayFrom = require_array_from();
      var arraySlice = require_array_slice_simple();
      var codeAt = require_string_multibyte().codeAt;
      var toASCII = require_string_punycode_to_ascii();
      var $toString = require_to_string();
      var setToStringTag = require_set_to_string_tag();
      var validateArgumentsLength = require_validate_arguments_length();
      var URLSearchParamsModule = require_web_url_search_params_constructor();
      var InternalStateModule = require_internal_state();
      var setInternalState = InternalStateModule.set;
      var getInternalURLState = InternalStateModule.getterFor("URL");
      var URLSearchParams2 = URLSearchParamsModule.URLSearchParams;
      var getInternalSearchParamsState = URLSearchParamsModule.getState;
      var NativeURL = global2.URL;
      var TypeError2 = global2.TypeError;
      var parseInt2 = global2.parseInt;
      var floor = Math.floor;
      var pow = Math.pow;
      var charAt = uncurryThis("".charAt);
      var exec = uncurryThis(/./.exec);
      var join = uncurryThis([].join);
      var numberToString = uncurryThis(1 .toString);
      var pop = uncurryThis([].pop);
      var push = uncurryThis([].push);
      var replace = uncurryThis("".replace);
      var shift = uncurryThis([].shift);
      var split = uncurryThis("".split);
      var stringSlice = uncurryThis("".slice);
      var toLowerCase = uncurryThis("".toLowerCase);
      var unshift = uncurryThis([].unshift);
      var INVALID_AUTHORITY = "Invalid authority";
      var INVALID_SCHEME = "Invalid scheme";
      var INVALID_HOST = "Invalid host";
      var INVALID_PORT = "Invalid port";
      var ALPHA = /[a-z]/i;
      var ALPHANUMERIC = /[\d+-.a-z]/i;
      var DIGIT = /\d/;
      var HEX_START = /^0x/i;
      var OCT = /^[0-7]+$/;
      var DEC = /^\d+$/;
      var HEX = /^[\da-f]+$/i;
      var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
      var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
      var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
      var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
      var TAB_AND_NEW_LINE = /[\t\n\r]/g;
      var EOF;
      var parseIPv4 = function(input) {
        var parts = split(input, ".");
        var partsLength, numbers, index, part, radix, number, ipv4;
        if (parts.length && parts[parts.length - 1] === "") {
          parts.length--;
        }
        partsLength = parts.length;
        if (partsLength > 4)
          return input;
        numbers = [];
        for (index = 0; index < partsLength; index++) {
          part = parts[index];
          if (part === "")
            return input;
          radix = 10;
          if (part.length > 1 && charAt(part, 0) === "0") {
            radix = exec(HEX_START, part) ? 16 : 8;
            part = stringSlice(part, radix === 8 ? 1 : 2);
          }
          if (part === "") {
            number = 0;
          } else {
            if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part))
              return input;
            number = parseInt2(part, radix);
          }
          push(numbers, number);
        }
        for (index = 0; index < partsLength; index++) {
          number = numbers[index];
          if (index === partsLength - 1) {
            if (number >= pow(256, 5 - partsLength))
              return null;
          } else if (number > 255)
            return null;
        }
        ipv4 = pop(numbers);
        for (index = 0; index < numbers.length; index++) {
          ipv4 += numbers[index] * pow(256, 3 - index);
        }
        return ipv4;
      };
      var parseIPv6 = function(input) {
        var address = [0, 0, 0, 0, 0, 0, 0, 0];
        var pieceIndex = 0;
        var compress = null;
        var pointer = 0;
        var value2, length, numbersSeen, ipv4Piece, number, swaps, swap;
        var chr = function() {
          return charAt(input, pointer);
        };
        if (chr() === ":") {
          if (charAt(input, 1) !== ":")
            return;
          pointer += 2;
          pieceIndex++;
          compress = pieceIndex;
        }
        while (chr()) {
          if (pieceIndex === 8)
            return;
          if (chr() === ":") {
            if (compress !== null)
              return;
            pointer++;
            pieceIndex++;
            compress = pieceIndex;
            continue;
          }
          value2 = length = 0;
          while (length < 4 && exec(HEX, chr())) {
            value2 = value2 * 16 + parseInt2(chr(), 16);
            pointer++;
            length++;
          }
          if (chr() === ".") {
            if (length === 0)
              return;
            pointer -= length;
            if (pieceIndex > 6)
              return;
            numbersSeen = 0;
            while (chr()) {
              ipv4Piece = null;
              if (numbersSeen > 0) {
                if (chr() === "." && numbersSeen < 4)
                  pointer++;
                else
                  return;
              }
              if (!exec(DIGIT, chr()))
                return;
              while (exec(DIGIT, chr())) {
                number = parseInt2(chr(), 10);
                if (ipv4Piece === null)
                  ipv4Piece = number;
                else if (ipv4Piece === 0)
                  return;
                else
                  ipv4Piece = ipv4Piece * 10 + number;
                if (ipv4Piece > 255)
                  return;
                pointer++;
              }
              address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
              numbersSeen++;
              if (numbersSeen === 2 || numbersSeen === 4)
                pieceIndex++;
            }
            if (numbersSeen !== 4)
              return;
            break;
          } else if (chr() === ":") {
            pointer++;
            if (!chr())
              return;
          } else if (chr())
            return;
          address[pieceIndex++] = value2;
        }
        if (compress !== null) {
          swaps = pieceIndex - compress;
          pieceIndex = 7;
          while (pieceIndex !== 0 && swaps > 0) {
            swap = address[pieceIndex];
            address[pieceIndex--] = address[compress + swaps - 1];
            address[compress + --swaps] = swap;
          }
        } else if (pieceIndex !== 8)
          return;
        return address;
      };
      var findLongestZeroSequence = function(ipv6) {
        var maxIndex = null;
        var maxLength = 1;
        var currStart = null;
        var currLength = 0;
        var index = 0;
        for (; index < 8; index++) {
          if (ipv6[index] !== 0) {
            if (currLength > maxLength) {
              maxIndex = currStart;
              maxLength = currLength;
            }
            currStart = null;
            currLength = 0;
          } else {
            if (currStart === null)
              currStart = index;
            ++currLength;
          }
        }
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }
        return maxIndex;
      };
      var serializeHost = function(host) {
        var result, index, compress, ignore0;
        if (typeof host == "number") {
          result = [];
          for (index = 0; index < 4; index++) {
            unshift(result, host % 256);
            host = floor(host / 256);
          }
          return join(result, ".");
        } else if (typeof host == "object") {
          result = "";
          compress = findLongestZeroSequence(host);
          for (index = 0; index < 8; index++) {
            if (ignore0 && host[index] === 0)
              continue;
            if (ignore0)
              ignore0 = false;
            if (compress === index) {
              result += index ? ":" : "::";
              ignore0 = true;
            } else {
              result += numberToString(host[index], 16);
              if (index < 7)
                result += ":";
            }
          }
          return "[" + result + "]";
        }
        return host;
      };
      var C0ControlPercentEncodeSet = {};
      var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
      });
      var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1
      });
      var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
      });
      var percentEncode = function(chr, set) {
        var code = codeAt(chr, 0);
        return code > 32 && code < 127 && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
      };
      var specialSchemes = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
      };
      var isWindowsDriveLetter = function(string, normalized) {
        var second;
        return string.length === 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) === ":" || !normalized && second === "|");
      };
      var startsWithWindowsDriveLetter = function(string) {
        var third;
        return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length === 2 || ((third = charAt(string, 2)) === "/" || third === "\\" || third === "?" || third === "#"));
      };
      var isSingleDot = function(segment) {
        return segment === "." || toLowerCase(segment) === "%2e";
      };
      var isDoubleDot = function(segment) {
        segment = toLowerCase(segment);
        return segment === ".." || segment === "%2e." || segment === ".%2e" || segment === "%2e%2e";
      };
      var SCHEME_START = {};
      var SCHEME = {};
      var NO_SCHEME = {};
      var SPECIAL_RELATIVE_OR_AUTHORITY = {};
      var PATH_OR_AUTHORITY = {};
      var RELATIVE = {};
      var RELATIVE_SLASH = {};
      var SPECIAL_AUTHORITY_SLASHES = {};
      var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
      var AUTHORITY = {};
      var HOST = {};
      var HOSTNAME = {};
      var PORT = {};
      var FILE = {};
      var FILE_SLASH = {};
      var FILE_HOST = {};
      var PATH_START = {};
      var PATH = {};
      var CANNOT_BE_A_BASE_URL_PATH = {};
      var QUERY = {};
      var FRAGMENT = {};
      var URLState = function(url, isBase, base) {
        var urlString = $toString(url);
        var baseState, failure, searchParams;
        if (isBase) {
          failure = this.parse(urlString);
          if (failure)
            throw new TypeError2(failure);
          this.searchParams = null;
        } else {
          if (base !== void 0)
            baseState = new URLState(base, true);
          failure = this.parse(urlString, null, baseState);
          if (failure)
            throw new TypeError2(failure);
          searchParams = getInternalSearchParamsState(new URLSearchParams2());
          searchParams.bindURL(this);
          this.searchParams = searchParams;
        }
      };
      URLState.prototype = {
        type: "URL",
        // https://url.spec.whatwg.org/#url-parsing
        // eslint-disable-next-line max-statements -- TODO
        parse: function(input, stateOverride, base) {
          var url = this;
          var state2 = stateOverride || SCHEME_START;
          var pointer = 0;
          var buffer = "";
          var seenAt = false;
          var seenBracket = false;
          var seenPasswordToken = false;
          var codePoints, chr, bufferCodePoints, failure;
          input = $toString(input);
          if (!stateOverride) {
            url.scheme = "";
            url.username = "";
            url.password = "";
            url.host = null;
            url.port = null;
            url.path = [];
            url.query = null;
            url.fragment = null;
            url.cannotBeABaseURL = false;
            input = replace(input, LEADING_C0_CONTROL_OR_SPACE, "");
            input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, "$1");
          }
          input = replace(input, TAB_AND_NEW_LINE, "");
          codePoints = arrayFrom(input);
          while (pointer <= codePoints.length) {
            chr = codePoints[pointer];
            switch (state2) {
              case SCHEME_START:
                if (chr && exec(ALPHA, chr)) {
                  buffer += toLowerCase(chr);
                  state2 = SCHEME;
                } else if (!stateOverride) {
                  state2 = NO_SCHEME;
                  continue;
                } else
                  return INVALID_SCHEME;
                break;
              case SCHEME:
                if (chr && (exec(ALPHANUMERIC, chr) || chr === "+" || chr === "-" || chr === ".")) {
                  buffer += toLowerCase(chr);
                } else if (chr === ":") {
                  if (stateOverride && (url.isSpecial() !== hasOwn(specialSchemes, buffer) || buffer === "file" && (url.includesCredentials() || url.port !== null) || url.scheme === "file" && !url.host))
                    return;
                  url.scheme = buffer;
                  if (stateOverride) {
                    if (url.isSpecial() && specialSchemes[url.scheme] === url.port)
                      url.port = null;
                    return;
                  }
                  buffer = "";
                  if (url.scheme === "file") {
                    state2 = FILE;
                  } else if (url.isSpecial() && base && base.scheme === url.scheme) {
                    state2 = SPECIAL_RELATIVE_OR_AUTHORITY;
                  } else if (url.isSpecial()) {
                    state2 = SPECIAL_AUTHORITY_SLASHES;
                  } else if (codePoints[pointer + 1] === "/") {
                    state2 = PATH_OR_AUTHORITY;
                    pointer++;
                  } else {
                    url.cannotBeABaseURL = true;
                    push(url.path, "");
                    state2 = CANNOT_BE_A_BASE_URL_PATH;
                  }
                } else if (!stateOverride) {
                  buffer = "";
                  state2 = NO_SCHEME;
                  pointer = 0;
                  continue;
                } else
                  return INVALID_SCHEME;
                break;
              case NO_SCHEME:
                if (!base || base.cannotBeABaseURL && chr !== "#")
                  return INVALID_SCHEME;
                if (base.cannotBeABaseURL && chr === "#") {
                  url.scheme = base.scheme;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                  url.fragment = "";
                  url.cannotBeABaseURL = true;
                  state2 = FRAGMENT;
                  break;
                }
                state2 = base.scheme === "file" ? FILE : RELATIVE;
                continue;
              case SPECIAL_RELATIVE_OR_AUTHORITY:
                if (chr === "/" && codePoints[pointer + 1] === "/") {
                  state2 = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                  pointer++;
                } else {
                  state2 = RELATIVE;
                  continue;
                }
                break;
              case PATH_OR_AUTHORITY:
                if (chr === "/") {
                  state2 = AUTHORITY;
                  break;
                } else {
                  state2 = PATH;
                  continue;
                }
              case RELATIVE:
                url.scheme = base.scheme;
                if (chr === EOF) {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                } else if (chr === "/" || chr === "\\" && url.isSpecial()) {
                  state2 = RELATIVE_SLASH;
                } else if (chr === "?") {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = arraySlice(base.path);
                  url.query = "";
                  state2 = QUERY;
                } else if (chr === "#") {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                  url.fragment = "";
                  state2 = FRAGMENT;
                } else {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  url.path = arraySlice(base.path);
                  url.path.length--;
                  state2 = PATH;
                  continue;
                }
                break;
              case RELATIVE_SLASH:
                if (url.isSpecial() && (chr === "/" || chr === "\\")) {
                  state2 = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                } else if (chr === "/") {
                  state2 = AUTHORITY;
                } else {
                  url.username = base.username;
                  url.password = base.password;
                  url.host = base.host;
                  url.port = base.port;
                  state2 = PATH;
                  continue;
                }
                break;
              case SPECIAL_AUTHORITY_SLASHES:
                state2 = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                if (chr !== "/" || charAt(buffer, pointer + 1) !== "/")
                  continue;
                pointer++;
                break;
              case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                if (chr !== "/" && chr !== "\\") {
                  state2 = AUTHORITY;
                  continue;
                }
                break;
              case AUTHORITY:
                if (chr === "@") {
                  if (seenAt)
                    buffer = "%40" + buffer;
                  seenAt = true;
                  bufferCodePoints = arrayFrom(buffer);
                  for (var i = 0; i < bufferCodePoints.length; i++) {
                    var codePoint = bufferCodePoints[i];
                    if (codePoint === ":" && !seenPasswordToken) {
                      seenPasswordToken = true;
                      continue;
                    }
                    var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                    if (seenPasswordToken)
                      url.password += encodedCodePoints;
                    else
                      url.username += encodedCodePoints;
                  }
                  buffer = "";
                } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                  if (seenAt && buffer === "")
                    return INVALID_AUTHORITY;
                  pointer -= arrayFrom(buffer).length + 1;
                  buffer = "";
                  state2 = HOST;
                } else
                  buffer += chr;
                break;
              case HOST:
              case HOSTNAME:
                if (stateOverride && url.scheme === "file") {
                  state2 = FILE_HOST;
                  continue;
                } else if (chr === ":" && !seenBracket) {
                  if (buffer === "")
                    return INVALID_HOST;
                  failure = url.parseHost(buffer);
                  if (failure)
                    return failure;
                  buffer = "";
                  state2 = PORT;
                  if (stateOverride === HOSTNAME)
                    return;
                } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                  if (url.isSpecial() && buffer === "")
                    return INVALID_HOST;
                  if (stateOverride && buffer === "" && (url.includesCredentials() || url.port !== null))
                    return;
                  failure = url.parseHost(buffer);
                  if (failure)
                    return failure;
                  buffer = "";
                  state2 = PATH_START;
                  if (stateOverride)
                    return;
                  continue;
                } else {
                  if (chr === "[")
                    seenBracket = true;
                  else if (chr === "]")
                    seenBracket = false;
                  buffer += chr;
                }
                break;
              case PORT:
                if (exec(DIGIT, chr)) {
                  buffer += chr;
                } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial() || stateOverride) {
                  if (buffer !== "") {
                    var port = parseInt2(buffer, 10);
                    if (port > 65535)
                      return INVALID_PORT;
                    url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                    buffer = "";
                  }
                  if (stateOverride)
                    return;
                  state2 = PATH_START;
                  continue;
                } else
                  return INVALID_PORT;
                break;
              case FILE:
                url.scheme = "file";
                if (chr === "/" || chr === "\\")
                  state2 = FILE_SLASH;
                else if (base && base.scheme === "file") {
                  switch (chr) {
                    case EOF:
                      url.host = base.host;
                      url.path = arraySlice(base.path);
                      url.query = base.query;
                      break;
                    case "?":
                      url.host = base.host;
                      url.path = arraySlice(base.path);
                      url.query = "";
                      state2 = QUERY;
                      break;
                    case "#":
                      url.host = base.host;
                      url.path = arraySlice(base.path);
                      url.query = base.query;
                      url.fragment = "";
                      state2 = FRAGMENT;
                      break;
                    default:
                      if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ""))) {
                        url.host = base.host;
                        url.path = arraySlice(base.path);
                        url.shortenPath();
                      }
                      state2 = PATH;
                      continue;
                  }
                } else {
                  state2 = PATH;
                  continue;
                }
                break;
              case FILE_SLASH:
                if (chr === "/" || chr === "\\") {
                  state2 = FILE_HOST;
                  break;
                }
                if (base && base.scheme === "file" && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ""))) {
                  if (isWindowsDriveLetter(base.path[0], true))
                    push(url.path, base.path[0]);
                  else
                    url.host = base.host;
                }
                state2 = PATH;
                continue;
              case FILE_HOST:
                if (chr === EOF || chr === "/" || chr === "\\" || chr === "?" || chr === "#") {
                  if (!stateOverride && isWindowsDriveLetter(buffer)) {
                    state2 = PATH;
                  } else if (buffer === "") {
                    url.host = "";
                    if (stateOverride)
                      return;
                    state2 = PATH_START;
                  } else {
                    failure = url.parseHost(buffer);
                    if (failure)
                      return failure;
                    if (url.host === "localhost")
                      url.host = "";
                    if (stateOverride)
                      return;
                    buffer = "";
                    state2 = PATH_START;
                  }
                  continue;
                } else
                  buffer += chr;
                break;
              case PATH_START:
                if (url.isSpecial()) {
                  state2 = PATH;
                  if (chr !== "/" && chr !== "\\")
                    continue;
                } else if (!stateOverride && chr === "?") {
                  url.query = "";
                  state2 = QUERY;
                } else if (!stateOverride && chr === "#") {
                  url.fragment = "";
                  state2 = FRAGMENT;
                } else if (chr !== EOF) {
                  state2 = PATH;
                  if (chr !== "/")
                    continue;
                }
                break;
              case PATH:
                if (chr === EOF || chr === "/" || chr === "\\" && url.isSpecial() || !stateOverride && (chr === "?" || chr === "#")) {
                  if (isDoubleDot(buffer)) {
                    url.shortenPath();
                    if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                      push(url.path, "");
                    }
                  } else if (isSingleDot(buffer)) {
                    if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                      push(url.path, "");
                    }
                  } else {
                    if (url.scheme === "file" && !url.path.length && isWindowsDriveLetter(buffer)) {
                      if (url.host)
                        url.host = "";
                      buffer = charAt(buffer, 0) + ":";
                    }
                    push(url.path, buffer);
                  }
                  buffer = "";
                  if (url.scheme === "file" && (chr === EOF || chr === "?" || chr === "#")) {
                    while (url.path.length > 1 && url.path[0] === "") {
                      shift(url.path);
                    }
                  }
                  if (chr === "?") {
                    url.query = "";
                    state2 = QUERY;
                  } else if (chr === "#") {
                    url.fragment = "";
                    state2 = FRAGMENT;
                  }
                } else {
                  buffer += percentEncode(chr, pathPercentEncodeSet);
                }
                break;
              case CANNOT_BE_A_BASE_URL_PATH:
                if (chr === "?") {
                  url.query = "";
                  state2 = QUERY;
                } else if (chr === "#") {
                  url.fragment = "";
                  state2 = FRAGMENT;
                } else if (chr !== EOF) {
                  url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
                }
                break;
              case QUERY:
                if (!stateOverride && chr === "#") {
                  url.fragment = "";
                  state2 = FRAGMENT;
                } else if (chr !== EOF) {
                  if (chr === "'" && url.isSpecial())
                    url.query += "%27";
                  else if (chr === "#")
                    url.query += "%23";
                  else
                    url.query += percentEncode(chr, C0ControlPercentEncodeSet);
                }
                break;
              case FRAGMENT:
                if (chr !== EOF)
                  url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
                break;
            }
            pointer++;
          }
        },
        // https://url.spec.whatwg.org/#host-parsing
        parseHost: function(input) {
          var result, codePoints, index;
          if (charAt(input, 0) === "[") {
            if (charAt(input, input.length - 1) !== "]")
              return INVALID_HOST;
            result = parseIPv6(stringSlice(input, 1, -1));
            if (!result)
              return INVALID_HOST;
            this.host = result;
          } else if (!this.isSpecial()) {
            if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input))
              return INVALID_HOST;
            result = "";
            codePoints = arrayFrom(input);
            for (index = 0; index < codePoints.length; index++) {
              result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
            }
            this.host = result;
          } else {
            input = toASCII(input);
            if (exec(FORBIDDEN_HOST_CODE_POINT, input))
              return INVALID_HOST;
            result = parseIPv4(input);
            if (result === null)
              return INVALID_HOST;
            this.host = result;
          }
        },
        // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
        cannotHaveUsernamePasswordPort: function() {
          return !this.host || this.cannotBeABaseURL || this.scheme === "file";
        },
        // https://url.spec.whatwg.org/#include-credentials
        includesCredentials: function() {
          return this.username !== "" || this.password !== "";
        },
        // https://url.spec.whatwg.org/#is-special
        isSpecial: function() {
          return hasOwn(specialSchemes, this.scheme);
        },
        // https://url.spec.whatwg.org/#shorten-a-urls-path
        shortenPath: function() {
          var path = this.path;
          var pathSize = path.length;
          if (pathSize && (this.scheme !== "file" || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
            path.length--;
          }
        },
        // https://url.spec.whatwg.org/#concept-url-serializer
        serialize: function() {
          var url = this;
          var scheme = url.scheme;
          var username = url.username;
          var password = url.password;
          var host = url.host;
          var port = url.port;
          var path = url.path;
          var query = url.query;
          var fragment = url.fragment;
          var output = scheme + ":";
          if (host !== null) {
            output += "//";
            if (url.includesCredentials()) {
              output += username + (password ? ":" + password : "") + "@";
            }
            output += serializeHost(host);
            if (port !== null)
              output += ":" + port;
          } else if (scheme === "file")
            output += "//";
          output += url.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
          if (query !== null)
            output += "?" + query;
          if (fragment !== null)
            output += "#" + fragment;
          return output;
        },
        // https://url.spec.whatwg.org/#dom-url-href
        setHref: function(href) {
          var failure = this.parse(href);
          if (failure)
            throw new TypeError2(failure);
          this.searchParams.update();
        },
        // https://url.spec.whatwg.org/#dom-url-origin
        getOrigin: function() {
          var scheme = this.scheme;
          var port = this.port;
          if (scheme === "blob")
            try {
              return new URLConstructor(scheme.path[0]).origin;
            } catch (error) {
              return "null";
            }
          if (scheme === "file" || !this.isSpecial())
            return "null";
          return scheme + "://" + serializeHost(this.host) + (port !== null ? ":" + port : "");
        },
        // https://url.spec.whatwg.org/#dom-url-protocol
        getProtocol: function() {
          return this.scheme + ":";
        },
        setProtocol: function(protocol) {
          this.parse($toString(protocol) + ":", SCHEME_START);
        },
        // https://url.spec.whatwg.org/#dom-url-username
        getUsername: function() {
          return this.username;
        },
        setUsername: function(username) {
          var codePoints = arrayFrom($toString(username));
          if (this.cannotHaveUsernamePasswordPort())
            return;
          this.username = "";
          for (var i = 0; i < codePoints.length; i++) {
            this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
          }
        },
        // https://url.spec.whatwg.org/#dom-url-password
        getPassword: function() {
          return this.password;
        },
        setPassword: function(password) {
          var codePoints = arrayFrom($toString(password));
          if (this.cannotHaveUsernamePasswordPort())
            return;
          this.password = "";
          for (var i = 0; i < codePoints.length; i++) {
            this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
          }
        },
        // https://url.spec.whatwg.org/#dom-url-host
        getHost: function() {
          var host = this.host;
          var port = this.port;
          return host === null ? "" : port === null ? serializeHost(host) : serializeHost(host) + ":" + port;
        },
        setHost: function(host) {
          if (this.cannotBeABaseURL)
            return;
          this.parse(host, HOST);
        },
        // https://url.spec.whatwg.org/#dom-url-hostname
        getHostname: function() {
          var host = this.host;
          return host === null ? "" : serializeHost(host);
        },
        setHostname: function(hostname) {
          if (this.cannotBeABaseURL)
            return;
          this.parse(hostname, HOSTNAME);
        },
        // https://url.spec.whatwg.org/#dom-url-port
        getPort: function() {
          var port = this.port;
          return port === null ? "" : $toString(port);
        },
        setPort: function(port) {
          if (this.cannotHaveUsernamePasswordPort())
            return;
          port = $toString(port);
          if (port === "")
            this.port = null;
          else
            this.parse(port, PORT);
        },
        // https://url.spec.whatwg.org/#dom-url-pathname
        getPathname: function() {
          var path = this.path;
          return this.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
        },
        setPathname: function(pathname) {
          if (this.cannotBeABaseURL)
            return;
          this.path = [];
          this.parse(pathname, PATH_START);
        },
        // https://url.spec.whatwg.org/#dom-url-search
        getSearch: function() {
          var query = this.query;
          return query ? "?" + query : "";
        },
        setSearch: function(search) {
          search = $toString(search);
          if (search === "") {
            this.query = null;
          } else {
            if (charAt(search, 0) === "?")
              search = stringSlice(search, 1);
            this.query = "";
            this.parse(search, QUERY);
          }
          this.searchParams.update();
        },
        // https://url.spec.whatwg.org/#dom-url-searchparams
        getSearchParams: function() {
          return this.searchParams.facade;
        },
        // https://url.spec.whatwg.org/#dom-url-hash
        getHash: function() {
          var fragment = this.fragment;
          return fragment ? "#" + fragment : "";
        },
        setHash: function(hash) {
          hash = $toString(hash);
          if (hash === "") {
            this.fragment = null;
            return;
          }
          if (charAt(hash, 0) === "#")
            hash = stringSlice(hash, 1);
          this.fragment = "";
          this.parse(hash, FRAGMENT);
        },
        update: function() {
          this.query = this.searchParams.serialize() || null;
        }
      };
      var URLConstructor = function URL2(url) {
        var that = anInstance(this, URLPrototype);
        var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : void 0;
        var state2 = setInternalState(that, new URLState(url, false, base));
        if (!DESCRIPTORS) {
          that.href = state2.serialize();
          that.origin = state2.getOrigin();
          that.protocol = state2.getProtocol();
          that.username = state2.getUsername();
          that.password = state2.getPassword();
          that.host = state2.getHost();
          that.hostname = state2.getHostname();
          that.port = state2.getPort();
          that.pathname = state2.getPathname();
          that.search = state2.getSearch();
          that.searchParams = state2.getSearchParams();
          that.hash = state2.getHash();
        }
      };
      var URLPrototype = URLConstructor.prototype;
      var accessorDescriptor = function(getter, setter) {
        return {
          get: function() {
            return getInternalURLState(this)[getter]();
          },
          set: setter && function(value2) {
            return getInternalURLState(this)[setter](value2);
          },
          configurable: true,
          enumerable: true
        };
      };
      if (DESCRIPTORS) {
        defineBuiltInAccessor(URLPrototype, "href", accessorDescriptor("serialize", "setHref"));
        defineBuiltInAccessor(URLPrototype, "origin", accessorDescriptor("getOrigin"));
        defineBuiltInAccessor(URLPrototype, "protocol", accessorDescriptor("getProtocol", "setProtocol"));
        defineBuiltInAccessor(URLPrototype, "username", accessorDescriptor("getUsername", "setUsername"));
        defineBuiltInAccessor(URLPrototype, "password", accessorDescriptor("getPassword", "setPassword"));
        defineBuiltInAccessor(URLPrototype, "host", accessorDescriptor("getHost", "setHost"));
        defineBuiltInAccessor(URLPrototype, "hostname", accessorDescriptor("getHostname", "setHostname"));
        defineBuiltInAccessor(URLPrototype, "port", accessorDescriptor("getPort", "setPort"));
        defineBuiltInAccessor(URLPrototype, "pathname", accessorDescriptor("getPathname", "setPathname"));
        defineBuiltInAccessor(URLPrototype, "search", accessorDescriptor("getSearch", "setSearch"));
        defineBuiltInAccessor(URLPrototype, "searchParams", accessorDescriptor("getSearchParams"));
        defineBuiltInAccessor(URLPrototype, "hash", accessorDescriptor("getHash", "setHash"));
      }
      defineBuiltIn(URLPrototype, "toJSON", function toJSON() {
        return getInternalURLState(this).serialize();
      }, { enumerable: true });
      defineBuiltIn(URLPrototype, "toString", function toString() {
        return getInternalURLState(this).serialize();
      }, { enumerable: true });
      if (NativeURL) {
        nativeCreateObjectURL = NativeURL.createObjectURL;
        nativeRevokeObjectURL = NativeURL.revokeObjectURL;
        if (nativeCreateObjectURL)
          defineBuiltIn(URLConstructor, "createObjectURL", bind(nativeCreateObjectURL, NativeURL));
        if (nativeRevokeObjectURL)
          defineBuiltIn(URLConstructor, "revokeObjectURL", bind(nativeRevokeObjectURL, NativeURL));
      }
      var nativeCreateObjectURL;
      var nativeRevokeObjectURL;
      setToStringTag(URLConstructor, "URL");
      $3({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
        URL: URLConstructor
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.js
  var require_web_url = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.js"() {
      "use strict";
      require_web_url_constructor();
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.can-parse.js
  var require_web_url_can_parse = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.can-parse.js"() {
      "use strict";
      var $3 = require_export();
      var getBuiltIn = require_get_built_in();
      var fails = require_fails();
      var validateArgumentsLength = require_validate_arguments_length();
      var toString = require_to_string();
      var USE_NATIVE_URL = require_url_constructor_detection();
      var URL2 = getBuiltIn("URL");
      var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function() {
        URL2.canParse();
      });
      $3({ target: "URL", stat: true, forced: !THROWS_WITHOUT_ARGUMENTS }, {
        canParse: function canParse(url) {
          var length = validateArgumentsLength(arguments.length, 1);
          var urlString = toString(url);
          var base = length < 2 || arguments[1] === void 0 ? void 0 : toString(arguments[1]);
          try {
            return !!new URL2(urlString, base);
          } catch (error) {
            return false;
          }
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.to-json.js
  var require_web_url_to_json = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.to-json.js"() {
      "use strict";
      var $3 = require_export();
      var call = require_function_call();
      $3({ target: "URL", proto: true, enumerable: true }, {
        toJSON: function toJSON() {
          return call(URL.prototype.toString, this);
        }
      });
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/web/url.js
  var require_url = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/web/url.js"(exports, module) {
      "use strict";
      require_url_search_params();
      require_web_url();
      require_web_url_can_parse();
      require_web_url_to_json();
      var path = require_path();
      module.exports = path.URL;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/stable/url/index.js
  var require_url2 = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/stable/url/index.js"(exports, module) {
      "use strict";
      var parent = require_url();
      module.exports = parent;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/actual/url/index.js
  var require_url3 = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/actual/url/index.js"(exports, module) {
      "use strict";
      var parent = require_url2();
      module.exports = parent;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-iterables.js
  var require_dom_iterables = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-iterables.js"(exports, module) {
      "use strict";
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-token-list-prototype.js
  var require_dom_token_list_prototype = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-token-list-prototype.js"(exports, module) {
      "use strict";
      var documentCreateElement = require_document_create_element();
      var classList = documentCreateElement("span").classList;
      var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
      module.exports = DOMTokenListPrototype === Object.prototype ? void 0 : DOMTokenListPrototype;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js
  var require_web_dom_collections_iterator = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js"() {
      "use strict";
      var global2 = require_global();
      var DOMIterables = require_dom_iterables();
      var DOMTokenListPrototype = require_dom_token_list_prototype();
      var ArrayIteratorMethods = require_es_array_iterator();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var setToStringTag = require_set_to_string_tag();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayValues = ArrayIteratorMethods.values;
      var handlePrototype = function(CollectionPrototype, COLLECTION_NAME2) {
        if (CollectionPrototype) {
          if (CollectionPrototype[ITERATOR] !== ArrayValues)
            try {
              createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
            } catch (error) {
              CollectionPrototype[ITERATOR] = ArrayValues;
            }
          setToStringTag(CollectionPrototype, COLLECTION_NAME2, true);
          if (DOMIterables[COLLECTION_NAME2])
            for (var METHOD_NAME in ArrayIteratorMethods) {
              if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
                try {
                  createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                } catch (error) {
                  CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                }
            }
        }
      };
      for (COLLECTION_NAME in DOMIterables) {
        handlePrototype(global2[COLLECTION_NAME] && global2[COLLECTION_NAME].prototype, COLLECTION_NAME);
      }
      var COLLECTION_NAME;
      handlePrototype(DOMTokenListPrototype, "DOMTokenList");
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/stable/url-search-params/index.js
  var require_url_search_params2 = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/stable/url-search-params/index.js"(exports, module) {
      "use strict";
      var parent = require_url_search_params();
      require_web_dom_collections_iterator();
      module.exports = parent;
    }
  });

  // ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/actual/url-search-params/index.js
  var require_url_search_params3 = __commonJS({
    "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/actual/url-search-params/index.js"(exports, module) {
      "use strict";
      var parent = require_url_search_params2();
      module.exports = parent;
    }
  });

  // ../../node_modules/.pnpm/data-uri-to-buffer@6.0.1/node_modules/data-uri-to-buffer/dist/index.js
  var require_dist = __commonJS({
    "../../node_modules/.pnpm/data-uri-to-buffer@6.0.1/node_modules/data-uri-to-buffer/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.dataUriToBuffer = void 0;
      function base64ToArrayBuffer(base64) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        const bytes = [];
        for (let i = 0; i < base64.length; i += 4) {
          const idx0 = chars.indexOf(base64.charAt(i));
          const idx1 = chars.indexOf(base64.charAt(i + 1));
          const idx2 = base64.charAt(i + 2) === "=" ? 0 : chars.indexOf(base64.charAt(i + 2));
          const idx3 = base64.charAt(i + 3) === "=" ? 0 : chars.indexOf(base64.charAt(i + 3));
          const bin0 = idx0 << 2 | idx1 >> 4;
          const bin1 = (idx1 & 15) << 4 | idx2 >> 2;
          const bin2 = (idx2 & 3) << 6 | idx3;
          bytes.push(bin0);
          if (base64.charAt(i + 2) !== "=")
            bytes.push(bin1);
          if (base64.charAt(i + 3) !== "=")
            bytes.push(bin2);
        }
        const buffer = new ArrayBuffer(bytes.length);
        const view = new Uint8Array(buffer);
        view.set(bytes);
        return buffer;
      }
      function stringToBuffer(str) {
        const buffer = new ArrayBuffer(str.length);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < str.length; i++) {
          view[i] = str.charCodeAt(i);
        }
        return buffer;
      }
      function dataUriToBuffer3(uri) {
        uri = String(uri);
        if (!/^data:/i.test(uri)) {
          throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
        }
        uri = uri.replace(/\r?\n/g, "");
        const firstComma = uri.indexOf(",");
        if (firstComma === -1 || firstComma <= 4) {
          throw new TypeError("malformed data: URI");
        }
        const meta = uri.substring(5, firstComma).split(";");
        let charset = "";
        let base64 = false;
        const type = meta[0] || "text/plain";
        let typeFull = type;
        for (let i = 1; i < meta.length; i++) {
          if (meta[i] === "base64") {
            base64 = true;
          } else if (meta[i]) {
            typeFull += `;${meta[i]}`;
            if (meta[i].indexOf("charset=") === 0) {
              charset = meta[i].substring(8);
            }
          }
        }
        if (!meta[0] && !charset.length) {
          typeFull += ";charset=US-ASCII";
          charset = "US-ASCII";
        }
        const data = unescape(uri.substring(firstComma + 1));
        const buffer = base64 ? base64ToArrayBuffer(data) : stringToBuffer(data);
        return {
          type,
          typeFull,
          charset,
          buffer
        };
      }
      exports.dataUriToBuffer = dataUriToBuffer3;
    }
  });

  // ../../node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js
  var require_color_name = __commonJS({
    "../../node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(exports, module) {
      "use strict";
      module.exports = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
    }
  });

  // ../../node_modules/.pnpm/color-parse@1.4.3/node_modules/color-parse/index.js
  var require_color_parse = __commonJS({
    "../../node_modules/.pnpm/color-parse@1.4.3/node_modules/color-parse/index.js"(exports, module) {
      "use strict";
      var names = require_color_name();
      module.exports = parse;
      var baseHues = {
        red: 0,
        orange: 60,
        yellow: 120,
        green: 180,
        blue: 240,
        purple: 300
      };
      function parse(cstr) {
        var m, parts = [], alpha = 1, space;
        if (typeof cstr === "string") {
          cstr = cstr.toLowerCase();
          if (names[cstr]) {
            parts = names[cstr].slice();
            space = "rgb";
          } else if (cstr === "transparent") {
            alpha = 0;
            space = "rgb";
            parts = [0, 0, 0];
          } else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
            var base = cstr.slice(1);
            var size = base.length;
            var isShort = size <= 4;
            alpha = 1;
            if (isShort) {
              parts = [
                parseInt(base[0] + base[0], 16),
                parseInt(base[1] + base[1], 16),
                parseInt(base[2] + base[2], 16)
              ];
              if (size === 4) {
                alpha = parseInt(base[3] + base[3], 16) / 255;
              }
            } else {
              parts = [
                parseInt(base[0] + base[1], 16),
                parseInt(base[2] + base[3], 16),
                parseInt(base[4] + base[5], 16)
              ];
              if (size === 8) {
                alpha = parseInt(base[6] + base[7], 16) / 255;
              }
            }
            if (!parts[0])
              parts[0] = 0;
            if (!parts[1])
              parts[1] = 0;
            if (!parts[2])
              parts[2] = 0;
            space = "rgb";
          } else if (m = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
            var name = m[1];
            var isRGB = name === "rgb";
            var base = name.replace(/a$/, "");
            space = base;
            var size = base === "cmyk" ? 4 : base === "gray" ? 1 : 3;
            parts = m[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(x, i) {
              if (/%$/.test(x)) {
                if (i === size)
                  return parseFloat(x) / 100;
                if (base === "rgb")
                  return parseFloat(x) * 255 / 100;
                return parseFloat(x);
              } else if (base[i] === "h") {
                if (/deg$/.test(x)) {
                  return parseFloat(x);
                } else if (baseHues[x] !== void 0) {
                  return baseHues[x];
                }
              }
              return parseFloat(x);
            });
            if (name === base)
              parts.push(1);
            alpha = isRGB ? 1 : parts[size] === void 0 ? 1 : parts[size];
            parts = parts.slice(0, size);
          } else if (cstr.length > 10 && /[0-9](?:\s|\/)/.test(cstr)) {
            parts = cstr.match(/([0-9]+)/g).map(function(value2) {
              return parseFloat(value2);
            });
            space = cstr.match(/([a-z])/ig).join("").toLowerCase();
          }
        } else if (!isNaN(cstr)) {
          space = "rgb";
          parts = [cstr >>> 16, (cstr & 65280) >>> 8, cstr & 255];
        } else if (Array.isArray(cstr) || cstr.length) {
          parts = [cstr[0], cstr[1], cstr[2]];
          space = "rgb";
          alpha = cstr.length === 4 ? cstr[3] : 1;
        } else if (cstr instanceof Object) {
          if (cstr.r != null || cstr.red != null || cstr.R != null) {
            space = "rgb";
            parts = [
              cstr.r || cstr.red || cstr.R || 0,
              cstr.g || cstr.green || cstr.G || 0,
              cstr.b || cstr.blue || cstr.B || 0
            ];
          } else {
            space = "hsl";
            parts = [
              cstr.h || cstr.hue || cstr.H || 0,
              cstr.s || cstr.saturation || cstr.S || 0,
              cstr.l || cstr.lightness || cstr.L || cstr.b || cstr.brightness
            ];
          }
          alpha = cstr.a || cstr.alpha || cstr.opacity || 1;
          if (cstr.opacity != null)
            alpha /= 100;
        }
        return {
          space,
          values: parts,
          alpha
        };
      }
    }
  });

  // ../../node_modules/.pnpm/color-rgba@2.4.0/node_modules/color-rgba/index.js
  var require_color_rgba = __commonJS({
    "../../node_modules/.pnpm/color-rgba@2.4.0/node_modules/color-rgba/index.js"(exports, module) {
      "use strict";
      var parse = require_color_parse();
      module.exports = function rgba(color) {
        if (Array.isArray(color) && color.raw)
          color = String.raw.apply(null, arguments);
        var values, i, l;
        var parsed = parse(color);
        if (!parsed.space)
          return [];
        var min = [0, 0, 0], max = parsed.space[0] === "h" ? [360, 100, 100] : [255, 255, 255];
        values = Array(3);
        values[0] = Math.min(Math.max(parsed.values[0], min[0]), max[0]);
        values[1] = Math.min(Math.max(parsed.values[1], min[1]), max[1]);
        values[2] = Math.min(Math.max(parsed.values[2], min[2]), max[2]);
        if (parsed.space[0] === "h")
          values = hsl2rgb(values);
        values.push(Math.min(Math.max(parsed.alpha, 0), 1));
        return values;
      };
      function hsl2rgb(hsl) {
        var h = hsl[0] / 360, s = hsl[1] / 100, l = hsl[2] / 100, t1, t2, t3, rgb2, val, i = 0;
        if (s === 0)
          return val = l * 255, [val, val, val];
        t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        t1 = 2 * l - t2;
        rgb2 = [0, 0, 0];
        for (; i < 3; ) {
          t3 = h + 1 / 3 * -(i - 1);
          t3 < 0 ? t3++ : t3 > 1 && t3--;
          val = 6 * t3 < 1 ? t1 + (t2 - t1) * 6 * t3 : 2 * t3 < 1 ? t2 : 3 * t3 < 2 ? t1 + (t2 - t1) * (2 / 3 - t3) * 6 : t1;
          rgb2[i++] = val * 255;
        }
        return rgb2;
      }
    }
  });

  // ../../node_modules/.pnpm/@jridgewell+sourcemap-codec@1.4.15/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.umd.js
  var require_sourcemap_codec_umd = __commonJS({
    "../../node_modules/.pnpm/@jridgewell+sourcemap-codec@1.4.15/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.umd.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.sourcemapCodec = {}));
      })(exports, function(exports2) {
        "use strict";
        const comma = ",".charCodeAt(0);
        const semicolon = ";".charCodeAt(0);
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        const intToChar = new Uint8Array(64);
        const charToInt = new Uint8Array(128);
        for (let i = 0; i < chars.length; i++) {
          const c = chars.charCodeAt(i);
          intToChar[i] = c;
          charToInt[c] = i;
        }
        const td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
          decode(buf) {
            const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
            return out.toString();
          }
        } : {
          decode(buf) {
            let out = "";
            for (let i = 0; i < buf.length; i++) {
              out += String.fromCharCode(buf[i]);
            }
            return out;
          }
        };
        function decode(mappings) {
          const state2 = new Int32Array(5);
          const decoded = [];
          let index = 0;
          do {
            const semi = indexOf(mappings, index);
            const line = [];
            let sorted = true;
            let lastCol = 0;
            state2[0] = 0;
            for (let i = index; i < semi; i++) {
              let seg;
              i = decodeInteger(mappings, i, state2, 0);
              const col = state2[0];
              if (col < lastCol)
                sorted = false;
              lastCol = col;
              if (hasMoreVlq(mappings, i, semi)) {
                i = decodeInteger(mappings, i, state2, 1);
                i = decodeInteger(mappings, i, state2, 2);
                i = decodeInteger(mappings, i, state2, 3);
                if (hasMoreVlq(mappings, i, semi)) {
                  i = decodeInteger(mappings, i, state2, 4);
                  seg = [col, state2[1], state2[2], state2[3], state2[4]];
                } else {
                  seg = [col, state2[1], state2[2], state2[3]];
                }
              } else {
                seg = [col];
              }
              line.push(seg);
            }
            if (!sorted)
              sort(line);
            decoded.push(line);
            index = semi + 1;
          } while (index <= mappings.length);
          return decoded;
        }
        function indexOf(mappings, index) {
          const idx = mappings.indexOf(";", index);
          return idx === -1 ? mappings.length : idx;
        }
        function decodeInteger(mappings, pos, state2, j) {
          let value2 = 0;
          let shift = 0;
          let integer = 0;
          do {
            const c = mappings.charCodeAt(pos++);
            integer = charToInt[c];
            value2 |= (integer & 31) << shift;
            shift += 5;
          } while (integer & 32);
          const shouldNegate = value2 & 1;
          value2 >>>= 1;
          if (shouldNegate) {
            value2 = -2147483648 | -value2;
          }
          state2[j] += value2;
          return pos;
        }
        function hasMoreVlq(mappings, i, length) {
          if (i >= length)
            return false;
          return mappings.charCodeAt(i) !== comma;
        }
        function sort(line) {
          line.sort(sortComparator);
        }
        function sortComparator(a, b) {
          return a[0] - b[0];
        }
        function encode(decoded) {
          const state2 = new Int32Array(5);
          const bufLength = 1024 * 16;
          const subLength = bufLength - 36;
          const buf = new Uint8Array(bufLength);
          const sub = buf.subarray(0, subLength);
          let pos = 0;
          let out = "";
          for (let i = 0; i < decoded.length; i++) {
            const line = decoded[i];
            if (i > 0) {
              if (pos === bufLength) {
                out += td.decode(buf);
                pos = 0;
              }
              buf[pos++] = semicolon;
            }
            if (line.length === 0)
              continue;
            state2[0] = 0;
            for (let j = 0; j < line.length; j++) {
              const segment = line[j];
              if (pos > subLength) {
                out += td.decode(sub);
                buf.copyWithin(0, subLength, pos);
                pos -= subLength;
              }
              if (j > 0)
                buf[pos++] = comma;
              pos = encodeInteger(buf, pos, state2, segment, 0);
              if (segment.length === 1)
                continue;
              pos = encodeInteger(buf, pos, state2, segment, 1);
              pos = encodeInteger(buf, pos, state2, segment, 2);
              pos = encodeInteger(buf, pos, state2, segment, 3);
              if (segment.length === 4)
                continue;
              pos = encodeInteger(buf, pos, state2, segment, 4);
            }
          }
          return out + td.decode(buf.subarray(0, pos));
        }
        function encodeInteger(buf, pos, state2, segment, j) {
          const next = segment[j];
          let num = next - state2[j];
          state2[j] = next;
          num = num < 0 ? -num << 1 | 1 : num << 1;
          do {
            let clamped = num & 31;
            num >>>= 5;
            if (num > 0)
              clamped |= 32;
            buf[pos++] = intToChar[clamped];
          } while (num > 0);
          return pos;
        }
        exports2.decode = decode;
        exports2.encode = encode;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // ../../node_modules/.pnpm/@jridgewell+resolve-uri@3.1.1/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.umd.js
  var require_resolve_uri_umd = __commonJS({
    "../../node_modules/.pnpm/@jridgewell+resolve-uri@3.1.1/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.umd.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.resolveURI = factory());
      })(exports, function() {
        "use strict";
        const schemeRegex = /^[\w+.-]+:\/\//;
        const urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
        const fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
        var UrlType;
        (function(UrlType2) {
          UrlType2[UrlType2["Empty"] = 1] = "Empty";
          UrlType2[UrlType2["Hash"] = 2] = "Hash";
          UrlType2[UrlType2["Query"] = 3] = "Query";
          UrlType2[UrlType2["RelativePath"] = 4] = "RelativePath";
          UrlType2[UrlType2["AbsolutePath"] = 5] = "AbsolutePath";
          UrlType2[UrlType2["SchemeRelative"] = 6] = "SchemeRelative";
          UrlType2[UrlType2["Absolute"] = 7] = "Absolute";
        })(UrlType || (UrlType = {}));
        function isAbsoluteUrl(input) {
          return schemeRegex.test(input);
        }
        function isSchemeRelativeUrl(input) {
          return input.startsWith("//");
        }
        function isAbsolutePath(input) {
          return input.startsWith("/");
        }
        function isFileUrl(input) {
          return input.startsWith("file:");
        }
        function isRelative(input) {
          return /^[.?#]/.test(input);
        }
        function parseAbsoluteUrl(input) {
          const match = urlRegex.exec(input);
          return makeUrl(match[1], match[2] || "", match[3], match[4] || "", match[5] || "/", match[6] || "", match[7] || "");
        }
        function parseFileUrl(input) {
          const match = fileRegex.exec(input);
          const path = match[2];
          return makeUrl("file:", "", match[1] || "", "", isAbsolutePath(path) ? path : "/" + path, match[3] || "", match[4] || "");
        }
        function makeUrl(scheme, user, host, port, path, query, hash) {
          return {
            scheme,
            user,
            host,
            port,
            path,
            query,
            hash,
            type: UrlType.Absolute
          };
        }
        function parseUrl(input) {
          if (isSchemeRelativeUrl(input)) {
            const url2 = parseAbsoluteUrl("http:" + input);
            url2.scheme = "";
            url2.type = UrlType.SchemeRelative;
            return url2;
          }
          if (isAbsolutePath(input)) {
            const url2 = parseAbsoluteUrl("http://foo.com" + input);
            url2.scheme = "";
            url2.host = "";
            url2.type = UrlType.AbsolutePath;
            return url2;
          }
          if (isFileUrl(input))
            return parseFileUrl(input);
          if (isAbsoluteUrl(input))
            return parseAbsoluteUrl(input);
          const url = parseAbsoluteUrl("http://foo.com/" + input);
          url.scheme = "";
          url.host = "";
          url.type = input ? input.startsWith("?") ? UrlType.Query : input.startsWith("#") ? UrlType.Hash : UrlType.RelativePath : UrlType.Empty;
          return url;
        }
        function stripPathFilename(path) {
          if (path.endsWith("/.."))
            return path;
          const index = path.lastIndexOf("/");
          return path.slice(0, index + 1);
        }
        function mergePaths(url, base) {
          normalizePath(base, base.type);
          if (url.path === "/") {
            url.path = base.path;
          } else {
            url.path = stripPathFilename(base.path) + url.path;
          }
        }
        function normalizePath(url, type) {
          const rel = type <= UrlType.RelativePath;
          const pieces = url.path.split("/");
          let pointer = 1;
          let positive = 0;
          let addTrailingSlash = false;
          for (let i = 1; i < pieces.length; i++) {
            const piece = pieces[i];
            if (!piece) {
              addTrailingSlash = true;
              continue;
            }
            addTrailingSlash = false;
            if (piece === ".")
              continue;
            if (piece === "..") {
              if (positive) {
                addTrailingSlash = true;
                positive--;
                pointer--;
              } else if (rel) {
                pieces[pointer++] = piece;
              }
              continue;
            }
            pieces[pointer++] = piece;
            positive++;
          }
          let path = "";
          for (let i = 1; i < pointer; i++) {
            path += "/" + pieces[i];
          }
          if (!path || addTrailingSlash && !path.endsWith("/..")) {
            path += "/";
          }
          url.path = path;
        }
        function resolve(input, base) {
          if (!input && !base)
            return "";
          const url = parseUrl(input);
          let inputType = url.type;
          if (base && inputType !== UrlType.Absolute) {
            const baseUrl = parseUrl(base);
            const baseType = baseUrl.type;
            switch (inputType) {
              case UrlType.Empty:
                url.hash = baseUrl.hash;
              case UrlType.Hash:
                url.query = baseUrl.query;
              case UrlType.Query:
              case UrlType.RelativePath:
                mergePaths(url, baseUrl);
              case UrlType.AbsolutePath:
                url.user = baseUrl.user;
                url.host = baseUrl.host;
                url.port = baseUrl.port;
              case UrlType.SchemeRelative:
                url.scheme = baseUrl.scheme;
            }
            if (baseType > inputType)
              inputType = baseType;
          }
          normalizePath(url, inputType);
          const queryHash = url.query + url.hash;
          switch (inputType) {
            case UrlType.Hash:
            case UrlType.Query:
              return queryHash;
            case UrlType.RelativePath: {
              const path = url.path.slice(1);
              if (!path)
                return queryHash || ".";
              if (isRelative(base || input) && !isRelative(path)) {
                return "./" + path + queryHash;
              }
              return path + queryHash;
            }
            case UrlType.AbsolutePath:
              return url.path + queryHash;
            default:
              return url.scheme + "//" + url.user + url.host + url.port + url.path + queryHash;
          }
        }
        return resolve;
      });
    }
  });

  // ../../node_modules/.pnpm/@jridgewell+trace-mapping@0.3.20/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.umd.js
  var require_trace_mapping_umd = __commonJS({
    "../../node_modules/.pnpm/@jridgewell+trace-mapping@0.3.20/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.umd.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_sourcemap_codec_umd(), require_resolve_uri_umd()) : typeof define === "function" && define.amd ? define(["exports", "@jridgewell/sourcemap-codec", "@jridgewell/resolve-uri"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.traceMapping = {}, global2.sourcemapCodec, global2.resolveURI));
      })(exports, function(exports2, sourcemapCodec, resolveUri) {
        "use strict";
        function _interopDefaultLegacy(e) {
          return e && typeof e === "object" && "default" in e ? e : { "default": e };
        }
        var resolveUri__default = /* @__PURE__ */ _interopDefaultLegacy(resolveUri);
        function resolve(input, base) {
          if (base && !base.endsWith("/"))
            base += "/";
          return resolveUri__default["default"](input, base);
        }
        function stripFilename(path) {
          if (!path)
            return "";
          const index = path.lastIndexOf("/");
          return path.slice(0, index + 1);
        }
        const COLUMN = 0;
        const SOURCES_INDEX = 1;
        const SOURCE_LINE = 2;
        const SOURCE_COLUMN = 3;
        const NAMES_INDEX = 4;
        const REV_GENERATED_LINE = 1;
        const REV_GENERATED_COLUMN = 2;
        function maybeSort(mappings, owned) {
          const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
          if (unsortedIndex === mappings.length)
            return mappings;
          if (!owned)
            mappings = mappings.slice();
          for (let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)) {
            mappings[i] = sortSegments(mappings[i], owned);
          }
          return mappings;
        }
        function nextUnsortedSegmentLine(mappings, start) {
          for (let i = start; i < mappings.length; i++) {
            if (!isSorted(mappings[i]))
              return i;
          }
          return mappings.length;
        }
        function isSorted(line) {
          for (let j = 1; j < line.length; j++) {
            if (line[j][COLUMN] < line[j - 1][COLUMN]) {
              return false;
            }
          }
          return true;
        }
        function sortSegments(line, owned) {
          if (!owned)
            line = line.slice();
          return line.sort(sortComparator);
        }
        function sortComparator(a, b) {
          return a[COLUMN] - b[COLUMN];
        }
        let found = false;
        function binarySearch(haystack, needle, low, high) {
          while (low <= high) {
            const mid = low + (high - low >> 1);
            const cmp = haystack[mid][COLUMN] - needle;
            if (cmp === 0) {
              found = true;
              return mid;
            }
            if (cmp < 0) {
              low = mid + 1;
            } else {
              high = mid - 1;
            }
          }
          found = false;
          return low - 1;
        }
        function upperBound(haystack, needle, index) {
          for (let i = index + 1; i < haystack.length; index = i++) {
            if (haystack[i][COLUMN] !== needle)
              break;
          }
          return index;
        }
        function lowerBound(haystack, needle, index) {
          for (let i = index - 1; i >= 0; index = i--) {
            if (haystack[i][COLUMN] !== needle)
              break;
          }
          return index;
        }
        function memoizedState() {
          return {
            lastKey: -1,
            lastNeedle: -1,
            lastIndex: -1
          };
        }
        function memoizedBinarySearch(haystack, needle, state2, key) {
          const { lastKey, lastNeedle, lastIndex } = state2;
          let low = 0;
          let high = haystack.length - 1;
          if (key === lastKey) {
            if (needle === lastNeedle) {
              found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
              return lastIndex;
            }
            if (needle >= lastNeedle) {
              low = lastIndex === -1 ? 0 : lastIndex;
            } else {
              high = lastIndex;
            }
          }
          state2.lastKey = key;
          state2.lastNeedle = needle;
          return state2.lastIndex = binarySearch(haystack, needle, low, high);
        }
        function buildBySources(decoded, memos) {
          const sources = memos.map(buildNullArray);
          for (let i = 0; i < decoded.length; i++) {
            const line = decoded[i];
            for (let j = 0; j < line.length; j++) {
              const seg = line[j];
              if (seg.length === 1)
                continue;
              const sourceIndex = seg[SOURCES_INDEX];
              const sourceLine = seg[SOURCE_LINE];
              const sourceColumn = seg[SOURCE_COLUMN];
              const originalSource = sources[sourceIndex];
              const originalLine = originalSource[sourceLine] || (originalSource[sourceLine] = []);
              const memo = memos[sourceIndex];
              const index = upperBound(originalLine, sourceColumn, memoizedBinarySearch(originalLine, sourceColumn, memo, sourceLine));
              insert(originalLine, memo.lastIndex = index + 1, [sourceColumn, i, seg[COLUMN]]);
            }
          }
          return sources;
        }
        function insert(array, index, value2) {
          for (let i = array.length; i > index; i--) {
            array[i] = array[i - 1];
          }
          array[index] = value2;
        }
        function buildNullArray() {
          return { __proto__: null };
        }
        const AnyMap = function(map, mapUrl) {
          const parsed = typeof map === "string" ? JSON.parse(map) : map;
          if (!("sections" in parsed))
            return new TraceMap2(parsed, mapUrl);
          const mappings = [];
          const sources = [];
          const sourcesContent = [];
          const names = [];
          recurse(parsed, mapUrl, mappings, sources, sourcesContent, names, 0, 0, Infinity, Infinity);
          const joined = {
            version: 3,
            file: parsed.file,
            names,
            sources,
            sourcesContent,
            mappings
          };
          return exports2.presortedDecodedMap(joined);
        };
        function recurse(input, mapUrl, mappings, sources, sourcesContent, names, lineOffset, columnOffset, stopLine, stopColumn) {
          const { sections } = input;
          for (let i = 0; i < sections.length; i++) {
            const { map, offset } = sections[i];
            let sl = stopLine;
            let sc = stopColumn;
            if (i + 1 < sections.length) {
              const nextOffset = sections[i + 1].offset;
              sl = Math.min(stopLine, lineOffset + nextOffset.line);
              if (sl === stopLine) {
                sc = Math.min(stopColumn, columnOffset + nextOffset.column);
              } else if (sl < stopLine) {
                sc = columnOffset + nextOffset.column;
              }
            }
            addSection(map, mapUrl, mappings, sources, sourcesContent, names, lineOffset + offset.line, columnOffset + offset.column, sl, sc);
          }
        }
        function addSection(input, mapUrl, mappings, sources, sourcesContent, names, lineOffset, columnOffset, stopLine, stopColumn) {
          if ("sections" in input)
            return recurse(...arguments);
          const map = new TraceMap2(input, mapUrl);
          const sourcesOffset = sources.length;
          const namesOffset = names.length;
          const decoded = exports2.decodedMappings(map);
          const { resolvedSources, sourcesContent: contents } = map;
          append(sources, resolvedSources);
          append(names, map.names);
          if (contents)
            append(sourcesContent, contents);
          else
            for (let i = 0; i < resolvedSources.length; i++)
              sourcesContent.push(null);
          for (let i = 0; i < decoded.length; i++) {
            const lineI = lineOffset + i;
            if (lineI > stopLine)
              return;
            const out = getLine(mappings, lineI);
            const cOffset = i === 0 ? columnOffset : 0;
            const line = decoded[i];
            for (let j = 0; j < line.length; j++) {
              const seg = line[j];
              const column = cOffset + seg[COLUMN];
              if (lineI === stopLine && column >= stopColumn)
                return;
              if (seg.length === 1) {
                out.push([column]);
                continue;
              }
              const sourcesIndex = sourcesOffset + seg[SOURCES_INDEX];
              const sourceLine = seg[SOURCE_LINE];
              const sourceColumn = seg[SOURCE_COLUMN];
              out.push(seg.length === 4 ? [column, sourcesIndex, sourceLine, sourceColumn] : [column, sourcesIndex, sourceLine, sourceColumn, namesOffset + seg[NAMES_INDEX]]);
            }
          }
        }
        function append(arr, other) {
          for (let i = 0; i < other.length; i++)
            arr.push(other[i]);
        }
        function getLine(arr, index) {
          for (let i = arr.length; i <= index; i++)
            arr[i] = [];
          return arr[index];
        }
        const LINE_GTR_ZERO = "`line` must be greater than 0 (lines start at line 1)";
        const COL_GTR_EQ_ZERO = "`column` must be greater than or equal to 0 (columns start at column 0)";
        const LEAST_UPPER_BOUND = -1;
        const GREATEST_LOWER_BOUND = 1;
        exports2.encodedMappings = void 0;
        exports2.decodedMappings = void 0;
        exports2.traceSegment = void 0;
        exports2.originalPositionFor = void 0;
        exports2.generatedPositionFor = void 0;
        exports2.allGeneratedPositionsFor = void 0;
        exports2.eachMapping = void 0;
        exports2.sourceContentFor = void 0;
        exports2.presortedDecodedMap = void 0;
        exports2.decodedMap = void 0;
        exports2.encodedMap = void 0;
        class TraceMap2 {
          constructor(map, mapUrl) {
            const isString = typeof map === "string";
            if (!isString && map._decodedMemo)
              return map;
            const parsed = isString ? JSON.parse(map) : map;
            const { version: version2, file, names, sourceRoot, sources, sourcesContent } = parsed;
            this.version = version2;
            this.file = file;
            this.names = names || [];
            this.sourceRoot = sourceRoot;
            this.sources = sources;
            this.sourcesContent = sourcesContent;
            const from = resolve(sourceRoot || "", stripFilename(mapUrl));
            this.resolvedSources = sources.map((s) => resolve(s || "", from));
            const { mappings } = parsed;
            if (typeof mappings === "string") {
              this._encoded = mappings;
              this._decoded = void 0;
            } else {
              this._encoded = void 0;
              this._decoded = maybeSort(mappings, isString);
            }
            this._decodedMemo = memoizedState();
            this._bySources = void 0;
            this._bySourceMemos = void 0;
          }
        }
        (() => {
          exports2.encodedMappings = (map) => {
            var _a;
            return (_a = map._encoded) !== null && _a !== void 0 ? _a : map._encoded = sourcemapCodec.encode(map._decoded);
          };
          exports2.decodedMappings = (map) => {
            return map._decoded || (map._decoded = sourcemapCodec.decode(map._encoded));
          };
          exports2.traceSegment = (map, line, column) => {
            const decoded = exports2.decodedMappings(map);
            if (line >= decoded.length)
              return null;
            const segments = decoded[line];
            const index = traceSegmentInternal(segments, map._decodedMemo, line, column, GREATEST_LOWER_BOUND);
            return index === -1 ? null : segments[index];
          };
          exports2.originalPositionFor = (map, { line, column, bias }) => {
            line--;
            if (line < 0)
              throw new Error(LINE_GTR_ZERO);
            if (column < 0)
              throw new Error(COL_GTR_EQ_ZERO);
            const decoded = exports2.decodedMappings(map);
            if (line >= decoded.length)
              return OMapping(null, null, null, null);
            const segments = decoded[line];
            const index = traceSegmentInternal(segments, map._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
            if (index === -1)
              return OMapping(null, null, null, null);
            const segment = segments[index];
            if (segment.length === 1)
              return OMapping(null, null, null, null);
            const { names, resolvedSources } = map;
            return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
          };
          exports2.allGeneratedPositionsFor = (map, { source, line, column, bias }) => {
            return generatedPosition(map, source, line, column, bias || LEAST_UPPER_BOUND, true);
          };
          exports2.generatedPositionFor = (map, { source, line, column, bias }) => {
            return generatedPosition(map, source, line, column, bias || GREATEST_LOWER_BOUND, false);
          };
          exports2.eachMapping = (map, cb) => {
            const decoded = exports2.decodedMappings(map);
            const { names, resolvedSources } = map;
            for (let i = 0; i < decoded.length; i++) {
              const line = decoded[i];
              for (let j = 0; j < line.length; j++) {
                const seg = line[j];
                const generatedLine = i + 1;
                const generatedColumn = seg[0];
                let source = null;
                let originalLine = null;
                let originalColumn = null;
                let name = null;
                if (seg.length !== 1) {
                  source = resolvedSources[seg[1]];
                  originalLine = seg[2] + 1;
                  originalColumn = seg[3];
                }
                if (seg.length === 5)
                  name = names[seg[4]];
                cb({
                  generatedLine,
                  generatedColumn,
                  source,
                  originalLine,
                  originalColumn,
                  name
                });
              }
            }
          };
          exports2.sourceContentFor = (map, source) => {
            const { sources, resolvedSources, sourcesContent } = map;
            if (sourcesContent == null)
              return null;
            let index = sources.indexOf(source);
            if (index === -1)
              index = resolvedSources.indexOf(source);
            return index === -1 ? null : sourcesContent[index];
          };
          exports2.presortedDecodedMap = (map, mapUrl) => {
            const tracer = new TraceMap2(clone(map, []), mapUrl);
            tracer._decoded = map.mappings;
            return tracer;
          };
          exports2.decodedMap = (map) => {
            return clone(map, exports2.decodedMappings(map));
          };
          exports2.encodedMap = (map) => {
            return clone(map, exports2.encodedMappings(map));
          };
          function generatedPosition(map, source, line, column, bias, all) {
            line--;
            if (line < 0)
              throw new Error(LINE_GTR_ZERO);
            if (column < 0)
              throw new Error(COL_GTR_EQ_ZERO);
            const { sources, resolvedSources } = map;
            let sourceIndex = sources.indexOf(source);
            if (sourceIndex === -1)
              sourceIndex = resolvedSources.indexOf(source);
            if (sourceIndex === -1)
              return all ? [] : GMapping(null, null);
            const generated = map._bySources || (map._bySources = buildBySources(exports2.decodedMappings(map), map._bySourceMemos = sources.map(memoizedState)));
            const segments = generated[sourceIndex][line];
            if (segments == null)
              return all ? [] : GMapping(null, null);
            const memo = map._bySourceMemos[sourceIndex];
            if (all)
              return sliceGeneratedPositions(segments, memo, line, column, bias);
            const index = traceSegmentInternal(segments, memo, line, column, bias);
            if (index === -1)
              return GMapping(null, null);
            const segment = segments[index];
            return GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]);
          }
        })();
        function clone(map, mappings) {
          return {
            version: map.version,
            file: map.file,
            names: map.names,
            sourceRoot: map.sourceRoot,
            sources: map.sources,
            sourcesContent: map.sourcesContent,
            mappings
          };
        }
        function OMapping(source, line, column, name) {
          return { source, line, column, name };
        }
        function GMapping(line, column) {
          return { line, column };
        }
        function traceSegmentInternal(segments, memo, line, column, bias) {
          let index = memoizedBinarySearch(segments, column, memo, line);
          if (found) {
            index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index);
          } else if (bias === LEAST_UPPER_BOUND)
            index++;
          if (index === -1 || index === segments.length)
            return -1;
          return index;
        }
        function sliceGeneratedPositions(segments, memo, line, column, bias) {
          let min = traceSegmentInternal(segments, memo, line, column, GREATEST_LOWER_BOUND);
          if (!found && bias === LEAST_UPPER_BOUND)
            min++;
          if (min === -1 || min === segments.length)
            return [];
          const matchedColumn = found ? column : segments[min][COLUMN];
          if (!found)
            min = lowerBound(segments, matchedColumn, min);
          const max = upperBound(segments, matchedColumn, min);
          const result = [];
          for (; min <= max; min++) {
            const segment = segments[min];
            result.push(GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]));
          }
          return result;
        }
        exports2.AnyMap = AnyMap;
        exports2.GREATEST_LOWER_BOUND = GREATEST_LOWER_BOUND;
        exports2.LEAST_UPPER_BOUND = LEAST_UPPER_BOUND;
        exports2.TraceMap = TraceMap2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // ../../node_modules/.pnpm/unquote@1.1.1/node_modules/unquote/index.js
  var require_unquote = __commonJS({
    "../../node_modules/.pnpm/unquote@1.1.1/node_modules/unquote/index.js"(exports, module) {
      var reg = /[\'\"]/;
      module.exports = function unquote(str) {
        if (!str) {
          return "";
        }
        if (reg.test(str.charAt(0))) {
          str = str.substr(1);
        }
        if (reg.test(str.charAt(str.length - 1))) {
          str = str.substr(0, str.length - 1);
        }
        return str;
      };
    }
  });

  // ../../node_modules/.pnpm/css-system-font-keywords@1.0.0/node_modules/css-system-font-keywords/index.json
  var require_css_system_font_keywords = __commonJS({
    "../../node_modules/.pnpm/css-system-font-keywords@1.0.0/node_modules/css-system-font-keywords/index.json"(exports, module) {
      module.exports = [
        "caption",
        "icon",
        "menu",
        "message-box",
        "small-caption",
        "status-bar"
      ];
    }
  });

  // ../../node_modules/.pnpm/css-font-weight-keywords@1.0.0/node_modules/css-font-weight-keywords/index.json
  var require_css_font_weight_keywords = __commonJS({
    "../../node_modules/.pnpm/css-font-weight-keywords@1.0.0/node_modules/css-font-weight-keywords/index.json"(exports, module) {
      module.exports = [
        "normal",
        "bold",
        "bolder",
        "lighter",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
      ];
    }
  });

  // ../../node_modules/.pnpm/css-font-style-keywords@1.0.1/node_modules/css-font-style-keywords/index.json
  var require_css_font_style_keywords = __commonJS({
    "../../node_modules/.pnpm/css-font-style-keywords@1.0.1/node_modules/css-font-style-keywords/index.json"(exports, module) {
      module.exports = [
        "normal",
        "italic",
        "oblique"
      ];
    }
  });

  // ../../node_modules/.pnpm/css-font-stretch-keywords@1.0.1/node_modules/css-font-stretch-keywords/index.json
  var require_css_font_stretch_keywords = __commonJS({
    "../../node_modules/.pnpm/css-font-stretch-keywords@1.0.1/node_modules/css-font-stretch-keywords/index.json"(exports, module) {
      module.exports = [
        "normal",
        "condensed",
        "semi-condensed",
        "extra-condensed",
        "ultra-condensed",
        "expanded",
        "semi-expanded",
        "extra-expanded",
        "ultra-expanded"
      ];
    }
  });

  // ../../node_modules/.pnpm/css-list-helpers@2.0.0/node_modules/css-list-helpers/dist/index.js
  var require_dist2 = __commonJS({
    "../../node_modules/.pnpm/css-list-helpers@2.0.0/node_modules/css-list-helpers/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function split(value2, separators, _a) {
        var _b = (_a === void 0 ? {} : _a).last, last = _b === void 0 ? false : _b;
        if (typeof value2 !== "string") {
          throw new TypeError("expected a string");
        }
        if (!Array.isArray(separators)) {
          throw new TypeError("expected a string array of separators");
        }
        if (typeof last !== "boolean") {
          throw new TypeError("expected a Boolean value for options.last");
        }
        var array = [];
        var current = "";
        var splitMe = false;
        var func = 0;
        var quote = false;
        var escape = false;
        for (var _i = 0, value_1 = value2; _i < value_1.length; _i++) {
          var char = value_1[_i];
          if (quote) {
            if (escape) {
              escape = false;
            } else if (char === "\\") {
              escape = true;
            } else if (char === quote) {
              quote = false;
            }
          } else if (char === '"' || char === "'") {
            quote = char;
          } else if (char === "(") {
            func += 1;
          } else if (char === ")") {
            if (func > 0) {
              func -= 1;
            }
          } else if (func === 0) {
            if (separators.indexOf(char) !== -1) {
              splitMe = true;
            }
          }
          if (splitMe) {
            if (current !== "") {
              array.push(current.trim());
            }
            current = "";
            splitMe = false;
          } else {
            current += char;
          }
        }
        if (last || current !== "") {
          array.push(current.trim());
        }
        return array;
      }
      exports.split = split;
      function splitBySpaces(value2) {
        var spaces = [" ", "\n", "	"];
        return split(value2, spaces);
      }
      exports.splitBySpaces = splitBySpaces;
      function splitByCommas(value2) {
        var comma = ",";
        return split(value2, [comma], { last: true });
      }
      exports.splitByCommas = splitByCommas;
    }
  });

  // ../../node_modules/.pnpm/css-font-size-keywords@1.0.0/node_modules/css-font-size-keywords/index.json
  var require_css_font_size_keywords = __commonJS({
    "../../node_modules/.pnpm/css-font-size-keywords@1.0.0/node_modules/css-font-size-keywords/index.json"(exports, module) {
      module.exports = [
        "xx-small",
        "x-small",
        "small",
        "medium",
        "large",
        "x-large",
        "xx-large",
        "larger",
        "smaller"
      ];
    }
  });

  // ../../node_modules/.pnpm/parse-css-font@4.0.0/node_modules/parse-css-font/dist/helpers.js
  var require_helpers = __commonJS({
    "../../node_modules/.pnpm/parse-css-font@4.0.0/node_modules/parse-css-font/dist/helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var cssFontSizeKeywords = require_css_font_size_keywords();
      function isSize(value2) {
        return /^[\d\.]/.test(value2) || value2.indexOf("/") !== -1 || cssFontSizeKeywords.indexOf(value2) !== -1;
      }
      exports.isSize = isSize;
    }
  });

  // ../../node_modules/.pnpm/parse-css-font@4.0.0/node_modules/parse-css-font/dist/index.js
  var require_dist3 = __commonJS({
    "../../node_modules/.pnpm/parse-css-font@4.0.0/node_modules/parse-css-font/dist/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var unquote = require_unquote();
      var systemFontKeywords = require_css_system_font_keywords();
      var fontWeightKeywords = require_css_font_weight_keywords();
      var fontStyleKeywords = require_css_font_style_keywords();
      var fontStretchKeywords = require_css_font_stretch_keywords();
      var cssListHelpers = require_dist2();
      var helpers = require_helpers();
      var errorPrefix = "[parse-css-font]";
      var firstDeclarations = [
        "style",
        "weight",
        "stretch",
        "variant"
      ];
      function parseCSSFont(value2) {
        if (typeof value2 !== "string") {
          throw error("Expected a string.", TypeError);
        }
        if (value2 === "") {
          throw error("Cannot parse an empty string.");
        }
        if (systemFontKeywords.indexOf(value2) !== -1) {
          return { system: value2 };
        }
        var font = {
          lineHeight: "normal",
          stretch: "",
          style: "",
          variant: "",
          weight: ""
        };
        var consumers = [style, weight, stretch, variant];
        var tokens = cssListHelpers.splitBySpaces(value2);
        nextToken:
          for (var token = tokens.shift(); !!token; token = tokens.shift()) {
            if (token === "normal") {
              continue;
            }
            for (var _i = 0, consumers_1 = consumers; _i < consumers_1.length; _i++) {
              var consume = consumers_1[_i];
              if (consume(token)) {
                continue nextToken;
              }
            }
            var parts = cssListHelpers.split(token, ["/"]);
            font.size = parts[0];
            if (!!parts[1]) {
              font.lineHeight = parseLineHeight(parts[1]);
            } else if (tokens[0] === "/") {
              tokens.shift();
              font.lineHeight = parseLineHeight(tokens.shift());
            }
            if (!tokens.length) {
              throw error("Missing required font-family.");
            }
            font.family = cssListHelpers.splitByCommas(tokens.join(" ")).map(unquote);
            for (var _a = 0, firstDeclarations_1 = firstDeclarations; _a < firstDeclarations_1.length; _a++) {
              var name_1 = firstDeclarations_1[_a];
              font[name_1] = font[name_1] || "normal";
            }
            return font;
          }
        throw error("Missing required font-size.");
        function style(token2) {
          if (fontStyleKeywords.indexOf(token2) === -1) {
            return;
          }
          if (font.style) {
            throw error("Font style already defined.");
          }
          return font.style = token2;
        }
        function weight(token2) {
          if (fontWeightKeywords.indexOf(token2) === -1) {
            return;
          }
          if (font.weight) {
            throw error("Font weight already defined.");
          }
          return font.weight = token2;
        }
        function stretch(token2) {
          if (fontStretchKeywords.indexOf(token2) === -1) {
            return;
          }
          if (font.stretch) {
            throw error("Font stretch already defined.");
          }
          return font.stretch = token2;
        }
        function variant(token2) {
          return !helpers.isSize(token2) && (font.variant = font.variant ? [font.variant, token2].join(" ") : token2);
        }
      }
      exports.default = parseCSSFont;
      function error(message, ErrorType) {
        if (ErrorType === void 0) {
          ErrorType = Error;
        }
        return new ErrorType(errorPrefix + " " + message);
      }
      function parseLineHeight(value2) {
        var parsed = parseFloat(value2);
        if (parsed.toString() === value2) {
          return parsed;
        }
        return value2;
      }
      module.exports = Object.assign(exports.default, exports);
    }
  });

  // ../../node_modules/.pnpm/parse-unit@1.0.1/node_modules/parse-unit/index.js
  var require_parse_unit = __commonJS({
    "../../node_modules/.pnpm/parse-unit@1.0.1/node_modules/parse-unit/index.js"(exports, module) {
      module.exports = function parseUnit(str, out) {
        if (!out)
          out = [0, ""];
        str = String(str);
        var num = parseFloat(str, 10);
        out[0] = num;
        out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || "";
        return out;
      };
    }
  });

  // ../../node_modules/.pnpm/to-px@1.1.0/node_modules/to-px/index.js
  var require_to_px = __commonJS({
    "../../node_modules/.pnpm/to-px@1.1.0/node_modules/to-px/index.js"(exports, module) {
      "use strict";
      var parseUnit = require_parse_unit();
      module.exports = toPX;
      var PIXELS_PER_INCH = 96;
      var defaults = {
        "ch": 8,
        "ex": 7.15625,
        "em": 16,
        "rem": 16,
        "in": PIXELS_PER_INCH,
        "cm": PIXELS_PER_INCH / 2.54,
        "mm": PIXELS_PER_INCH / 25.4,
        "pt": PIXELS_PER_INCH / 72,
        "pc": PIXELS_PER_INCH / 6,
        "px": 1
      };
      function toPX(str) {
        if (!str)
          return null;
        if (defaults[str])
          return defaults[str];
        var parts = parseUnit(str);
        if (!isNaN(parts[0]) && parts[1]) {
          var px = toPX(parts[1]);
          return typeof px === "number" ? parts[0] * px : null;
        }
        return null;
      }
    }
  });

  // src/polyfills/url.ts
  var import_url = __toESM(require_url3());
  var import_url_search_params = __toESM(require_url_search_params3());

  // src/internal.ts
  var INTERNAL_SYMBOL = Symbol("Internal");

  // src/utils.ts
  var def = (value2, key) => {
    if (!key) {
      key = value2.name;
      if (!key) {
        throw new Error(`Name not specified`);
      }
    }
    const proto = value2.prototype;
    const isClass = key[0] === key[0].toUpperCase();
    if (isClass) {
      Object.defineProperty(proto || value2, Symbol.toStringTag, {
        value: key
      });
    }
    Object.defineProperty(globalThis, key, {
      value: value2,
      writable: true,
      enumerable: !isClass,
      configurable: true
    });
    return value2;
  };
  function bufferSourceToArrayBuffer(input) {
    return input instanceof ArrayBuffer ? input : input.buffer.slice(input.byteOffset, input.byteLength);
  }
  function asyncIteratorToStream(it) {
    return new ReadableStream({
      async pull(controller) {
        const next = await it.next();
        if (next.done) {
          controller.close();
        } else {
          controller.enqueue(next.value);
        }
      }
    });
  }
  function toPromise(fn, ...args) {
    return new Promise((resolve, reject) => {
      try {
        fn((err, result) => {
          if (err)
            return reject(err);
          resolve(result);
        }, ...args);
      } catch (err) {
        reject(err);
      }
    });
  }
  function assertInternalConstructor(a) {
    if (a[0] !== INTERNAL_SYMBOL)
      throw new TypeError("Illegal constructor");
  }
  function pathToString(p2) {
    return typeof p2 === "string" ? p2 : decodeURI(p2.href);
  }
  var Deferred = class {
    pending = true;
    promise;
    resolve;
    reject;
    constructor() {
      this.promise = new Promise((res, rej) => {
        this.resolve = (v) => {
          this.pending = false;
          res(v);
        };
        this.reject = (v) => {
          this.pending = false;
          rej(v);
        };
      });
    }
  };
  var createInternal = () => {
    const wm = /* @__PURE__ */ new WeakMap();
    const _17 = (k) => {
      const v = wm.get(k);
      if (!v)
        throw new Error(
          `Failed to get \`${k.constructor.name}\` internal state`
        );
      return v;
    };
    _17.set = (k, v) => {
      wm.set(k, v);
    };
    return _17;
  };
  function rgbaToString(rgba) {
    if (rgba[3] < 1) {
      return `rgba(${rgba.join(", ")})`;
    }
    return `#${rgba.slice(0, -1).map((v) => v.toString(16).padStart(2, "0")).join("")}`;
  }
  function returnOnThrow(fn, ...args) {
    try {
      return fn(...args);
    } catch (err) {
      return err;
    }
  }
  function stub() {
    throw new Error(
      "This is a stub function which should have been replaced by a native implementation"
    );
  }

  // src/polyfills/text-encoder.ts
  var TextEncoder = class {
    encoding;
    constructor() {
      this.encoding = "utf-8";
    }
    /**
     * Returns the result of running UTF-8's encoder.
     *
     * @link https://developer.mozilla.org/docs/Web/API/TextEncoder/encode
     */
    encode(input) {
      if (!input)
        return new Uint8Array(0);
      var pos = 0;
      var len = input.length;
      var at = 0;
      var tlen = Math.max(32, len + (len >>> 1) + 7);
      var target = new Uint8Array(tlen >>> 3 << 3);
      while (pos < len) {
        var value2 = input.charCodeAt(pos++);
        if (value2 >= 55296 && value2 <= 56319) {
          if (pos < len) {
            var extra = input.charCodeAt(pos);
            if ((extra & 64512) === 56320) {
              ++pos;
              value2 = ((value2 & 1023) << 10) + (extra & 1023) + 65536;
            }
          }
          if (value2 >= 55296 && value2 <= 56319) {
            continue;
          }
        }
        if (at + 4 > target.length) {
          tlen += 8;
          tlen *= 1 + pos / input.length * 2;
          tlen = tlen >>> 3 << 3;
          var update2 = new Uint8Array(tlen);
          update2.set(target);
          target = update2;
        }
        if ((value2 & 4294967168) === 0) {
          target[at++] = value2;
          continue;
        } else if ((value2 & 4294965248) === 0) {
          target[at++] = value2 >>> 6 & 31 | 192;
        } else if ((value2 & 4294901760) === 0) {
          target[at++] = value2 >>> 12 & 15 | 224;
          target[at++] = value2 >>> 6 & 63 | 128;
        } else if ((value2 & 4292870144) === 0) {
          target[at++] = value2 >>> 18 & 7 | 240;
          target[at++] = value2 >>> 12 & 63 | 128;
          target[at++] = value2 >>> 6 & 63 | 128;
        } else {
          continue;
        }
        target[at++] = value2 & 63 | 128;
      }
      return target.slice(0, at);
    }
    /**
     * Runs the UTF-8 encoder on source, stores the result of that operation into destination, and returns the progress made as an object wherein read is the number of converted code units of source and written is the number of bytes modified in destination.
     *
     * **Note:** Not currently supported.
     *
     * @link https://developer.mozilla.org/docs/Web/API/TextEncoder/encodeInto
     */
    encodeInto(input, destination) {
      throw new Error("Method not implemented.");
    }
  };
  def(TextEncoder);
  var encoder = new TextEncoder();

  // src/polyfills/text-decoder.ts
  var TextDecoder2 = class {
    encoding;
    fatal;
    ignoreBOM;
    constructor(encoding) {
      if (typeof encoding === "string" && encoding !== "utf-8" && encoding !== "utf8") {
        throw new TypeError('Only "utf-8" decoding is supported');
      }
      this.encoding = "utf-8";
      this.fatal = false;
      this.ignoreBOM = false;
    }
    /**
     * Decodes a BufferSource into a string using the specified encoding.
     * If no input is provided, an empty string is returned.
     *
     * **Note:** Currently the `stream` option is not supported.
     *
     * @param input The BufferSource to decode.
     * @param options The options for decoding.
     * @returns The decoded string.
     */
    decode(input, options) {
      if (!input)
        return "";
      let bytes;
      if (input instanceof ArrayBuffer) {
        bytes = new Uint8Array(input);
      } else {
        bytes = new Uint8Array(
          input.buffer,
          input.byteOffset,
          input.byteLength
        );
      }
      var inputIndex = 0;
      var pendingSize = Math.min(256 * 256, bytes.length + 1);
      var pending = new Uint16Array(pendingSize);
      var chunks = [];
      var pendingIndex = 0;
      for (; ; ) {
        var more = inputIndex < bytes.length;
        if (!more || pendingIndex >= pendingSize - 1) {
          var subarray = pending.subarray(0, pendingIndex);
          chunks.push(String.fromCharCode.apply(null, subarray));
          if (!more) {
            return chunks.join("");
          }
          bytes = bytes.subarray(inputIndex);
          inputIndex = 0;
          pendingIndex = 0;
        }
        var byte1 = bytes[inputIndex++];
        if ((byte1 & 128) === 0) {
          pending[pendingIndex++] = byte1;
        } else if ((byte1 & 224) === 192) {
          var byte2 = bytes[inputIndex++] & 63;
          pending[pendingIndex++] = (byte1 & 31) << 6 | byte2;
        } else if ((byte1 & 240) === 224) {
          var byte2 = bytes[inputIndex++] & 63;
          var byte3 = bytes[inputIndex++] & 63;
          pending[pendingIndex++] = (byte1 & 31) << 12 | byte2 << 6 | byte3;
        } else if ((byte1 & 248) === 240) {
          var byte2 = bytes[inputIndex++] & 63;
          var byte3 = bytes[inputIndex++] & 63;
          var byte4 = bytes[inputIndex++] & 63;
          var codepoint = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
          if (codepoint > 65535) {
            codepoint -= 65536;
            pending[pendingIndex++] = codepoint >>> 10 & 1023 | 55296;
            codepoint = 56320 | codepoint & 1023;
          }
          pending[pendingIndex++] = codepoint;
        } else {
          pending[pendingIndex++] = 65533;
        }
      }
    }
  };
  def(TextDecoder2, "TextDecoder");
  var decoder = new TextDecoder2();

  // src/polyfills/blob.ts
  var _ = createInternal();
  var POOL_SIZE = 65536;
  async function* toIterator(parts, clone) {
    for (const part of parts) {
      if (ArrayBuffer.isView(part)) {
        if (clone) {
          let position = part.byteOffset;
          const end = part.byteOffset + part.byteLength;
          while (position !== end) {
            const size = Math.min(end - position, POOL_SIZE);
            const chunk = part.buffer.slice(position, position + size);
            position += chunk.byteLength;
            yield new Uint8Array(chunk);
          }
        } else {
          yield part;
        }
      } else {
        yield* part.stream();
      }
    }
  }
  var Blob = class {
    /**
     * @param blobParts - An array of BlobPart values that will be concatenated into a single Blob.
     * @param options - An optional object that specifies the `Content-Type` and endings of the Blob.
     */
    constructor(blobParts = [], options = {}) {
      if (typeof blobParts !== "object" || blobParts === null) {
        throw new TypeError(
          "Failed to construct 'Blob': The provided value cannot be converted to a sequence."
        );
      }
      if (typeof blobParts[Symbol.iterator] !== "function") {
        throw new TypeError(
          "Failed to construct 'Blob': The object must have a callable @@iterator property."
        );
      }
      if (typeof options !== "object" && typeof options !== "function") {
        throw new TypeError(
          "Failed to construct 'Blob': parameter 2 cannot convert to dictionary."
        );
      }
      const internal = {
        parts: [],
        size: 0,
        type: "",
        endings: "transparent"
      };
      _.set(this, internal);
      for (const element of blobParts) {
        let part;
        if (ArrayBuffer.isView(element)) {
          part = new Uint8Array(
            element.buffer.slice(
              element.byteOffset,
              element.byteOffset + element.byteLength
            )
          );
        } else if (element instanceof ArrayBuffer) {
          part = new Uint8Array(element.slice(0));
        } else if (element instanceof Blob) {
          part = element;
        } else {
          part = encoder.encode(`${element}`);
        }
        const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
        if (size) {
          internal.size += size;
          internal.parts.push(part);
        }
      }
      if (options.endings) {
        internal.endings = options.endings;
      }
      const type = options.type === void 0 ? "" : String(options.type);
      if (/^[\x20-\x7E]*$/.test(type)) {
        internal.type = type;
      }
    }
    /**
     * Returns the size of the Blob object, in bytes.
     */
    get size() {
      return _(this).size;
    }
    /**
     * Returns the MIME type of the Blob object.
     */
    get type() {
      return _(this).type;
    }
    /**
     * Returns a promise that resolves with a string representation of the Blob object.
     */
    async text() {
      const decoder2 = new TextDecoder2();
      let str = "";
      const parts = _(this).parts;
      for await (const part of toIterator(parts, false)) {
        str += decoder2.decode(part, { stream: true });
      }
      str += decoder2.decode();
      return str;
    }
    /**
     * Returns a promise that resolves with an ArrayBuffer representing the Blob's data.
     */
    async arrayBuffer() {
      const data = new Uint8Array(this.size);
      let offset = 0;
      const parts = _(this).parts;
      for await (const chunk of toIterator(parts, false)) {
        data.set(chunk, offset);
        offset += chunk.length;
      }
      return data.buffer;
    }
    /**
     * Returns a stream that can be used to read the contents of the Blob.
     */
    stream() {
      const parts = _(this).parts;
      const it = toIterator(parts, true);
      return new ReadableStream({
        type: "bytes",
        async pull(ctrl) {
          const chunk = await it.next();
          chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
        },
        async cancel() {
          await it.return();
        }
      });
    }
    /**
     * Returns a new Blob object containing the data in the specified range of bytes of the source Blob.
     *
     * @param start - The start byte index.
     * @param end - The end byte index.
     * @param type - The content type of the new Blob.
     */
    slice(start = 0, end = this.size, type = "") {
      const { size } = this;
      let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
      let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
      const span = Math.max(relativeEnd - relativeStart, 0);
      const parts = _(this).parts;
      const blobParts = [];
      let added = 0;
      for (const part of parts) {
        if (added >= span) {
          break;
        }
        const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
        if (relativeStart && size2 <= relativeStart) {
          relativeStart -= size2;
          relativeEnd -= size2;
        } else {
          let chunk;
          if (ArrayBuffer.isView(part)) {
            chunk = part.subarray(
              relativeStart,
              Math.min(size2, relativeEnd)
            );
            added += chunk.byteLength;
          } else {
            chunk = part.slice(
              relativeStart,
              Math.min(size2, relativeEnd)
            );
            added += chunk.size;
          }
          relativeEnd -= size2;
          blobParts.push(chunk);
          relativeStart = 0;
        }
      }
      const blob = new Blob([], { type: `${type}` });
      const internal = _(blob);
      internal.size = span;
      internal.parts = blobParts;
      return blob;
    }
  };
  Object.defineProperties(Blob.prototype, {
    size: { enumerable: true },
    type: { enumerable: true },
    slice: { enumerable: true }
  });
  def(Blob);

  // src/$.ts
  var $ = globalThis.$;
  delete globalThis.$;

  // src/crypto.ts
  var _2 = createInternal();
  var Crypto = class {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      _2.set(this, {});
    }
    /**
     * A {@link SubtleCrypto | `SubtleCrypto`} which can be
     * used to perform low-level cryptographic operations.
     *
     * @see https://developer.mozilla.org/docs/Web/API/Crypto/subtle
     */
    get subtle() {
      let i = _2(this);
      if (!i.subtle) {
        i.subtle = new SubtleCrypto(INTERNAL_SYMBOL);
      }
      return i.subtle;
    }
    /**
     * Fills the provided `TypedArray` with cryptographically strong random values.
     *
     * @example
     *
     * ```typescript
     * const array = new Uint32Array(10);
     * crypto.getRandomValues(array);
     *
     * console.log("Your lucky numbers:");
     * for (const num of array) {
     *   console.log(num);
     * }
     * ```
     *
     * @param array The `TypedArray` to fill with random values.
     * @returns The same `TypedArray` filled with random values.
     * @see https://developer.mozilla.org/docs/Web/API/Crypto/getRandomValues
     */
    getRandomValues(array) {
      if (array) {
        $.cryptoRandomBytes(
          array.buffer,
          array.byteOffset,
          array.byteLength
        );
      }
      return array;
    }
    /**
     * Generates a cryptographically strong random unique identifier (UUID).
     *
     * @example
     *
     * ```typescript
     * const uuid = crypto.randomUUID();
     * console.log(uuid);
     * // "36b8f84d-df4e-4d49-b662-bcde71a8764f"
     * ```
     *
     * @returns A string representation of a UUID.
     * @see https://developer.mozilla.org/docs/Web/API/Crypto/randomUUID
     */
    randomUUID() {
      let i = 0;
      const bytes = new Uint8Array(31);
      this.getRandomValues(bytes);
      return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (v) => {
        const c = +v;
        return (c ^ bytes[i++] & 15 >> c / 4).toString(16);
      });
    }
  };
  def(Crypto);
  var crypto = new Crypto(INTERNAL_SYMBOL);
  def(crypto, "crypto");
  var SubtleCrypto = class {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
    }
    decrypt(algorithm, key, data) {
      throw new Error("Method not implemented.");
    }
    deriveBits(algorithm, baseKey, length) {
      throw new Error("Method not implemented.");
    }
    deriveKey(algorithm, baseKey, derivedKeyType, extractable, keyUsages) {
      throw new Error("Method not implemented.");
    }
    /**
     * Generates a digest of the given data. A digest is a short fixed-length value
     * derived from some variable-length input. Cryptographic digests should exhibit
     * collision-resistance, meaning that it's hard to come up with two different
     * inputs that have the same digest value.
     *
     * It takes as its arguments an identifier for the digest algorithm to use and
     * the data to digest. It returns a Promise which will be fulfilled with the digest.
     *
     * Note that this API does not support streaming input: you must read the entire
     * input into memory before passing it into the digest function.
     *
     * @param algorithm This may be a string or an object with a single property `name`
     * that is a string. The string names the hash function to use. Supported values are:
     *
     *  - `"SHA-1"` (but don't use this in cryptographic applications)
     *  - `"SHA-256"`
     *  - `"SHA-384"`
     *  - `"SHA-512"`
     * @param data An `ArrayBuffer`, a `TypedArray` or a `DataView` object containing the data to be digested
     * @see https://developer.mozilla.org/docs/Web/API/SubtleCrypto/digest
     */
    digest(algorithm, data) {
      return toPromise(
        $.cryptoDigest,
        typeof algorithm === "string" ? algorithm : algorithm.name,
        bufferSourceToArrayBuffer(data)
      );
    }
    encrypt(algorithm, key, data) {
      throw new Error("Method not implemented.");
    }
    exportKey(format2, key) {
      throw new Error("Method not implemented.");
    }
    generateKey(algorithm, extractable, keyUsages) {
      throw new Error("Method not implemented.");
    }
    importKey(format2, keyData, algorithm, extractable, keyUsages) {
      throw new Error("Method not implemented.");
    }
    sign(algorithm, key, data) {
      throw new Error("Method not implemented.");
    }
    unwrapKey(format2, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages) {
      throw new Error("Method not implemented.");
    }
    verify(algorithm, key, signature, data) {
      throw new Error("Method not implemented.");
    }
    wrapKey(format2, key, wrappingKey, wrapAlgorithm) {
      throw new Error("Method not implemented.");
    }
  };
  def(SubtleCrypto);

  // ../../node_modules/.pnpm/github.com+TooTallNate+kleur@aa22b05da68d29ff6d2ce5eba5895ac654b7f25a_jh7tj5viho5afwfouxi2onkym4/node_modules/kleur/colors.mjs
  var FORCE_COLOR;
  var NODE_DISABLE_COLORS;
  var NO_COLOR;
  var TERM;
  var isTTY = true;
  if (typeof process !== "undefined") {
    ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
    isTTY = process.stdout && process.stdout.isTTY;
  }
  var $2 = {
    enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
  };
  function init(x, y) {
    let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
    let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
    return function(txt) {
      if (!$2.enabled || txt == null)
        return txt;
      return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
    };
  }
  var reset = init(0, 0);
  var bold = init(1, 22);
  var dim = init(2, 22);
  var italic = init(3, 23);
  var underline = init(4, 24);
  var inverse = init(7, 27);
  var hidden = init(8, 28);
  var strikethrough = init(9, 29);
  var black = init(30, 39);
  var red = init(31, 39);
  var green = init(32, 39);
  var yellow = init(33, 39);
  var blue = init(34, 39);
  var magenta = init(35, 39);
  var cyan = init(36, 39);
  var white = init(37, 39);
  var gray = init(90, 39);
  var grey = init(90, 39);
  var rgb = (r, g, b) => init(`38;2;${r};${g};${b}`, 39);
  var bgBlack = init(40, 49);
  var bgRed = init(41, 49);
  var bgGreen = init(42, 49);
  var bgYellow = init(43, 49);
  var bgBlue = init(44, 49);
  var bgMagenta = init(45, 49);
  var bgCyan = init(46, 49);
  var bgWhite = init(47, 49);
  var bgRgb = (r, g, b) => init(`48;2;${r};${g};${b}`, 49);

  // src/inspect.ts
  var grey2 = rgb(100, 100, 100);
  var inspect = (v, opts = {}) => {
    const { depth = 1 } = opts;
    const refs = opts.refs ?? /* @__PURE__ */ new Set();
    if (v && typeof v[inspect.custom] === "function") {
      const c = v[inspect.custom]({ ...opts, depth });
      if (typeof c === "string") {
        return c;
      }
      refs.add(v);
      v = c;
    }
    if (typeof v === "number" || typeof v === "boolean") {
      return bold(yellow(v));
    }
    if (typeof v === "bigint") {
      return bold(yellow(`${v}n`));
    }
    if (typeof v === "symbol") {
      return green(String(v));
    }
    if (typeof v === "string") {
      return green(JSON.stringify(v));
    }
    if (typeof v === "undefined") {
      return grey2(String(v));
    }
    if (v === null) {
      return bold(String(v));
    }
    if (refs.has(v)) {
      return cyan("[Circular]");
    }
    refs.add(v);
    if (typeof v === "function") {
      const { name } = v;
      if (String(v).startsWith("class")) {
        return cyan(`[class${name ? `: ${name}` : ""}]`);
      }
      return cyan(`[Function${name ? `: ${name}` : " (anonymous)"}]`);
    }
    if (Array.isArray(v)) {
      const contents = v.length === 0 ? "" : ` ${v.map((e) => inspect(e, { ...opts, refs, depth })).join(", ")} `;
      return `[${contents}]`;
    }
    if (isRegExp(v)) {
      return bold(red(String(v)));
    }
    if (isDate(v)) {
      return magenta(v.toISOString());
    }
    if (isPromise(v)) {
      let val = "";
      const [state2, result] = $.getInternalPromiseState(v);
      if (state2 === 0) {
        val = cyan("<pending>");
      } else {
        if (state2 === 2) {
          val = `${red("<rejected>")} `;
        }
        val += inspect(result, { ...opts, refs, depth });
      }
      return `Promise { ${val} }`;
    }
    if (isError(v)) {
      const { stack } = v;
      const obj = Object.keys(v).length > 0 ? ` ${printObject(v, { ...opts, refs, depth })}` : "";
      return stack ? `${v}
${stack.trimEnd()}${obj}` : `[${v}]${obj}`;
    }
    if (isArrayBuffer(v)) {
      const contents = new Uint8Array(v);
      const b = [];
      for (let i = 0; i < Math.min(50, v.byteLength); i++) {
        b.push(contents[i].toString(16).padStart(2, "0"));
      }
      let c = b.join(" ");
      if (contents.length > 50)
        c += "...";
      const len = inspect(v.byteLength);
      return `ArrayBuffer { ${cyan(
        "[Uint8Contents]"
      )}: <${c}>, byteLength: ${len} }`;
    }
    if (isTypedArray(v)) {
      const b = [];
      for (let i = 0; i < Math.min(50, v.length); i++) {
        b.push(inspect(v[i]));
      }
      let c = b.length === 0 ? "" : ` ${b.join(", ")} `;
      if (v.length > 50)
        c += "...";
      return `${getClass(v)}(${v.length}) [${c}]`;
    }
    if (typeof v === "object") {
      return printObject(v, { ...opts, refs, depth });
    }
    return `? ${v}`;
  };
  inspect.custom = Symbol("Switch.inspect.custom");
  function printObject(v, opts) {
    const { depth = 1 } = opts;
    const keys = Object.keys(v);
    const ctor = v.constructor;
    const className = ctor && ctor !== Object && typeof ctor.name === "string" ? `${ctor.name} ` : "";
    let contents = "";
    let endSpace = "";
    if (keys.length > 0) {
      let len = 0;
      const parts = keys.map((k) => {
        const l = `${k}: ${inspect(v[k], { ...opts, depth: depth + 1 })}`;
        len += l.length;
        return l;
      });
      if (len > 60) {
        const space = "  ".repeat(depth);
        contents = parts.map((p2) => `
${space}${p2},`).join("") + "\n";
        endSpace = "  ".repeat(depth - 1);
      } else {
        contents = ` ${parts.join(", ")} `;
      }
    }
    return `${className}{${contents}${endSpace}}`;
  }
  function getClass(v) {
    return Object.prototype.toString.call(v).slice(8, -1);
  }
  function isDate(v) {
    return getClass(v) === "Date";
  }
  function isError(v) {
    return getClass(v) === "Error";
  }
  function isRegExp(v) {
    return getClass(v) === "RegExp";
  }
  function isArrayBuffer(v) {
    return getClass(v) === "ArrayBuffer";
  }
  function isTypedArray(v) {
    return getClass(v).endsWith("Array");
  }
  function isPromise(v) {
    return getClass(v) === "Promise";
  }

  // src/polyfills/url.ts
  var objectUrls = /* @__PURE__ */ new Map();
  URL.createObjectURL = (obj) => {
    if (!(obj instanceof Blob)) {
      throw new Error("Must be Blob");
    }
    const url = `blob:${crypto.randomUUID()}`;
    objectUrls.set(url, obj);
    return url;
  };
  URL.revokeObjectURL = (url) => {
    objectUrls.delete(url);
  };
  Object.defineProperty(URL.prototype, inspect.custom, {
    enumerable: false,
    value() {
      return `URL ${inspect({
        hash: this.hash,
        host: this.host,
        hostname: this.hostname,
        href: this.href,
        origin: this.origin,
        password: this.password,
        pathname: this.pathname,
        port: this.port,
        protocol: this.protocol,
        search: this.search,
        searchParams: this.searchParams,
        username: this.username
      })}`;
    }
  });

  // src/polyfills/event-target.ts
  var callbacks = /* @__PURE__ */ new WeakMap();
  var getCbs = (t, type) => {
    let map = callbacks.get(t);
    if (!map) {
      map = /* @__PURE__ */ new Map();
      callbacks.set(t, map);
    }
    let cbs2 = map.get(type);
    if (!cbs2) {
      cbs2 = [];
      map.set(type, cbs2);
    }
    return cbs2;
  };
  var EventTarget = class {
    /**
     * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
     *
     * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
     *
     * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
     *
     * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
     *
     * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
     *
     * If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.
     *
     * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
     *
     * @see https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener
     */
    addEventListener(type, callback, options) {
      if (!callback)
        return;
      if (typeof options === "boolean") {
        options = { capture: options };
      }
      const self2 = this || globalThis;
      const cbs2 = getCbs(self2, type);
      if (cbs2.some((cb) => cb.cb === callback))
        return;
      cbs2.push({ target: this || globalThis, cb: callback, options });
    }
    /**
     * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its `preventDefault()` method was not invoked, and false otherwise.
     *
     * @see https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent
     */
    dispatchEvent(event) {
      const self2 = this || globalThis;
      const cbs2 = getCbs(self2, event.type);
      event.target = event.currentTarget = self2;
      for (const cb of cbs2.slice()) {
        if (cb.options?.once) {
          self2.removeEventListener(event.type, cb.cb);
        }
        if (typeof cb.cb === "function") {
          cb.cb(event);
        } else {
          cb.cb.handleEvent(event);
        }
      }
      delete event.target;
      delete event.currentTarget;
      return !event.defaultPrevented;
    }
    /**
     * Removes the event listener in target's event listener list with the same type, callback, and options.
     *
     * @see https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener
     */
    removeEventListener(type, callback, options) {
      const self2 = this || globalThis;
      const cbs2 = getCbs(self2, type);
      for (let i = 0; i < cbs2.length; i++) {
        if (cbs2[i].cb === callback) {
          cbs2.splice(i, 1);
          return;
        }
      }
    }
  };
  def(EventTarget);

  // src/polyfills/event.ts
  var Event = class {
    NONE = 0;
    CAPTURING_PHASE = 1;
    AT_TARGET = 2;
    BUBBLING_PHASE = 3;
    bubbles;
    cancelBubble;
    cancelable;
    composed;
    currentTarget;
    defaultPrevented;
    eventPhase;
    isTrusted;
    returnValue;
    srcElement;
    target;
    timeStamp;
    type;
    constructor(type, options) {
      this.type = type;
      this.bubbles = this.cancelable = this.cancelBubble = this.composed = this.defaultPrevented = this.isTrusted = this.returnValue = false;
      this.currentTarget = this.srcElement = this.target = null;
      this.eventPhase = this.timeStamp = 0;
      this.cancelable = false;
      this.cancelBubble = false;
      this.composed = false;
      if (options) {
        this.bubbles = options.bubbles ?? false;
        this.cancelable = options.cancelable ?? false;
      }
    }
    composedPath() {
      throw new Error("Method not implemented.");
    }
    initEvent(type, bubbles, cancelable) {
      throw new Error("Method not implemented.");
    }
    preventDefault() {
      if (this.cancelable) {
        this.defaultPrevented = true;
      }
    }
    stopImmediatePropagation() {
      throw new Error("Method not implemented.");
    }
    stopPropagation() {
      throw new Error("Method not implemented.");
    }
  };
  __publicField(Event, "NONE", 0);
  __publicField(Event, "CAPTURING_PHASE", 1);
  __publicField(Event, "AT_TARGET", 2);
  __publicField(Event, "BUBBLING_PHASE", 3);
  var UIEvent = class extends Event {
    detail;
    view;
    which;
    constructor(type, options) {
      super(type, options);
      this.view = null;
      this.which = -1;
      this.detail = options?.detail ?? 0;
    }
    initUIEvent() {
      throw new Error("Method not implemented.");
    }
  };
  var CTRL = 1n << 0n;
  var SHIFT = 1n << 1n;
  var ALT = 1n << 2n | 1n << 3n;
  var META = 1n << 4n;
  var KeyboardKey = /* @__PURE__ */ ((KeyboardKey2) => {
    KeyboardKey2[KeyboardKey2["A"] = 4] = "A";
    KeyboardKey2[KeyboardKey2["B"] = 5] = "B";
    KeyboardKey2[KeyboardKey2["C"] = 6] = "C";
    KeyboardKey2[KeyboardKey2["D"] = 7] = "D";
    KeyboardKey2[KeyboardKey2["E"] = 8] = "E";
    KeyboardKey2[KeyboardKey2["F"] = 9] = "F";
    KeyboardKey2[KeyboardKey2["G"] = 10] = "G";
    KeyboardKey2[KeyboardKey2["H"] = 11] = "H";
    KeyboardKey2[KeyboardKey2["I"] = 12] = "I";
    KeyboardKey2[KeyboardKey2["J"] = 13] = "J";
    KeyboardKey2[KeyboardKey2["K"] = 14] = "K";
    KeyboardKey2[KeyboardKey2["L"] = 15] = "L";
    KeyboardKey2[KeyboardKey2["M"] = 16] = "M";
    KeyboardKey2[KeyboardKey2["N"] = 17] = "N";
    KeyboardKey2[KeyboardKey2["O"] = 18] = "O";
    KeyboardKey2[KeyboardKey2["P"] = 19] = "P";
    KeyboardKey2[KeyboardKey2["Q"] = 20] = "Q";
    KeyboardKey2[KeyboardKey2["R"] = 21] = "R";
    KeyboardKey2[KeyboardKey2["S"] = 22] = "S";
    KeyboardKey2[KeyboardKey2["T"] = 23] = "T";
    KeyboardKey2[KeyboardKey2["U"] = 24] = "U";
    KeyboardKey2[KeyboardKey2["V"] = 25] = "V";
    KeyboardKey2[KeyboardKey2["W"] = 26] = "W";
    KeyboardKey2[KeyboardKey2["X"] = 27] = "X";
    KeyboardKey2[KeyboardKey2["Y"] = 28] = "Y";
    KeyboardKey2[KeyboardKey2["Z"] = 29] = "Z";
    KeyboardKey2[KeyboardKey2["Digit1"] = 30] = "Digit1";
    KeyboardKey2[KeyboardKey2["Digit2"] = 31] = "Digit2";
    KeyboardKey2[KeyboardKey2["Digit3"] = 32] = "Digit3";
    KeyboardKey2[KeyboardKey2["Digit4"] = 33] = "Digit4";
    KeyboardKey2[KeyboardKey2["Digit5"] = 34] = "Digit5";
    KeyboardKey2[KeyboardKey2["Digit6"] = 35] = "Digit6";
    KeyboardKey2[KeyboardKey2["Digit7"] = 36] = "Digit7";
    KeyboardKey2[KeyboardKey2["Digit8"] = 37] = "Digit8";
    KeyboardKey2[KeyboardKey2["Digit9"] = 38] = "Digit9";
    KeyboardKey2[KeyboardKey2["Digit0"] = 39] = "Digit0";
    KeyboardKey2[KeyboardKey2["Enter"] = 40] = "Enter";
    KeyboardKey2[KeyboardKey2["Escape"] = 41] = "Escape";
    KeyboardKey2[KeyboardKey2["Backspace"] = 42] = "Backspace";
    KeyboardKey2[KeyboardKey2["Tab"] = 43] = "Tab";
    KeyboardKey2[KeyboardKey2["Space"] = 44] = "Space";
    KeyboardKey2[KeyboardKey2["Minus"] = 45] = "Minus";
    KeyboardKey2[KeyboardKey2["Equal"] = 46] = "Equal";
    KeyboardKey2[KeyboardKey2["BracketLeft"] = 47] = "BracketLeft";
    KeyboardKey2[KeyboardKey2["BracketRight"] = 48] = "BracketRight";
    KeyboardKey2[KeyboardKey2["Backslash"] = 49] = "Backslash";
    KeyboardKey2[KeyboardKey2["Tilde"] = 50] = "Tilde";
    KeyboardKey2[KeyboardKey2["Semicolon"] = 51] = "Semicolon";
    KeyboardKey2[KeyboardKey2["Quote"] = 52] = "Quote";
    KeyboardKey2[KeyboardKey2["Backquote"] = 53] = "Backquote";
    KeyboardKey2[KeyboardKey2["Comma"] = 54] = "Comma";
    KeyboardKey2[KeyboardKey2["Period"] = 55] = "Period";
    KeyboardKey2[KeyboardKey2["Slash"] = 56] = "Slash";
    KeyboardKey2[KeyboardKey2["CapsLock"] = 57] = "CapsLock";
    KeyboardKey2[KeyboardKey2["F1"] = 58] = "F1";
    KeyboardKey2[KeyboardKey2["F2"] = 59] = "F2";
    KeyboardKey2[KeyboardKey2["F3"] = 60] = "F3";
    KeyboardKey2[KeyboardKey2["F4"] = 61] = "F4";
    KeyboardKey2[KeyboardKey2["F5"] = 62] = "F5";
    KeyboardKey2[KeyboardKey2["F6"] = 63] = "F6";
    KeyboardKey2[KeyboardKey2["F7"] = 64] = "F7";
    KeyboardKey2[KeyboardKey2["F8"] = 65] = "F8";
    KeyboardKey2[KeyboardKey2["F9"] = 66] = "F9";
    KeyboardKey2[KeyboardKey2["F10"] = 67] = "F10";
    KeyboardKey2[KeyboardKey2["F11"] = 68] = "F11";
    KeyboardKey2[KeyboardKey2["F12"] = 69] = "F12";
    KeyboardKey2[KeyboardKey2["PrintScreen"] = 70] = "PrintScreen";
    KeyboardKey2[KeyboardKey2["ScrollLock"] = 71] = "ScrollLock";
    KeyboardKey2[KeyboardKey2["Pause"] = 72] = "Pause";
    KeyboardKey2[KeyboardKey2["Insert"] = 73] = "Insert";
    KeyboardKey2[KeyboardKey2["Home"] = 74] = "Home";
    KeyboardKey2[KeyboardKey2["PageUp"] = 75] = "PageUp";
    KeyboardKey2[KeyboardKey2["Delete"] = 76] = "Delete";
    KeyboardKey2[KeyboardKey2["End"] = 77] = "End";
    KeyboardKey2[KeyboardKey2["PageDown"] = 78] = "PageDown";
    KeyboardKey2[KeyboardKey2["ArrowRight"] = 79] = "ArrowRight";
    KeyboardKey2[KeyboardKey2["ArrowLeft"] = 80] = "ArrowLeft";
    KeyboardKey2[KeyboardKey2["ArrowDown"] = 81] = "ArrowDown";
    KeyboardKey2[KeyboardKey2["ArrowUp"] = 82] = "ArrowUp";
    KeyboardKey2[KeyboardKey2["NumLock"] = 83] = "NumLock";
    KeyboardKey2[KeyboardKey2["NumpadDivide"] = 84] = "NumpadDivide";
    KeyboardKey2[KeyboardKey2["NumpadMultiply"] = 85] = "NumpadMultiply";
    KeyboardKey2[KeyboardKey2["NumpadSubtract"] = 86] = "NumpadSubtract";
    KeyboardKey2[KeyboardKey2["NumpadAdd"] = 87] = "NumpadAdd";
    KeyboardKey2[KeyboardKey2["NumpadEnter"] = 88] = "NumpadEnter";
    KeyboardKey2[KeyboardKey2["Numpad1"] = 89] = "Numpad1";
    KeyboardKey2[KeyboardKey2["Numpad2"] = 90] = "Numpad2";
    KeyboardKey2[KeyboardKey2["Numpad3"] = 91] = "Numpad3";
    KeyboardKey2[KeyboardKey2["Numpad4"] = 92] = "Numpad4";
    KeyboardKey2[KeyboardKey2["Numpad5"] = 93] = "Numpad5";
    KeyboardKey2[KeyboardKey2["Numpad6"] = 94] = "Numpad6";
    KeyboardKey2[KeyboardKey2["Numpad7"] = 95] = "Numpad7";
    KeyboardKey2[KeyboardKey2["Numpad8"] = 96] = "Numpad8";
    KeyboardKey2[KeyboardKey2["Numpad9"] = 97] = "Numpad9";
    KeyboardKey2[KeyboardKey2["Numpad0"] = 98] = "Numpad0";
    KeyboardKey2[KeyboardKey2["NumpadDecimal"] = 99] = "NumpadDecimal";
    KeyboardKey2[KeyboardKey2["Application"] = 101] = "Application";
    KeyboardKey2[KeyboardKey2["Power"] = 102] = "Power";
    KeyboardKey2[KeyboardKey2["NumPadEquals"] = 103] = "NumPadEquals";
    KeyboardKey2[KeyboardKey2["F13"] = 104] = "F13";
    KeyboardKey2[KeyboardKey2["F14"] = 105] = "F14";
    KeyboardKey2[KeyboardKey2["F15"] = 106] = "F15";
    KeyboardKey2[KeyboardKey2["F16"] = 107] = "F16";
    KeyboardKey2[KeyboardKey2["F17"] = 108] = "F17";
    KeyboardKey2[KeyboardKey2["F18"] = 109] = "F18";
    KeyboardKey2[KeyboardKey2["F19"] = 110] = "F19";
    KeyboardKey2[KeyboardKey2["F20"] = 111] = "F20";
    KeyboardKey2[KeyboardKey2["F21"] = 112] = "F21";
    KeyboardKey2[KeyboardKey2["F22"] = 113] = "F22";
    KeyboardKey2[KeyboardKey2["F23"] = 114] = "F23";
    KeyboardKey2[KeyboardKey2["F24"] = 115] = "F24";
    KeyboardKey2[KeyboardKey2["NumPadComma"] = 133] = "NumPadComma";
    KeyboardKey2[KeyboardKey2["Ro"] = 135] = "Ro";
    KeyboardKey2[KeyboardKey2["KatakanaHiragana"] = 136] = "KatakanaHiragana";
    KeyboardKey2[KeyboardKey2["Yen"] = 137] = "Yen";
    KeyboardKey2[KeyboardKey2["Henkan"] = 138] = "Henkan";
    KeyboardKey2[KeyboardKey2["Muhenkan"] = 139] = "Muhenkan";
    KeyboardKey2[KeyboardKey2["NumPadCommaPc98"] = 140] = "NumPadCommaPc98";
    KeyboardKey2[KeyboardKey2["HangulEnglish"] = 144] = "HangulEnglish";
    KeyboardKey2[KeyboardKey2["Hanja"] = 145] = "Hanja";
    KeyboardKey2[KeyboardKey2["Katakana"] = 146] = "Katakana";
    KeyboardKey2[KeyboardKey2["Hiragana"] = 147] = "Hiragana";
    KeyboardKey2[KeyboardKey2["ZenkakuHankaku"] = 148] = "ZenkakuHankaku";
    KeyboardKey2[KeyboardKey2["ControlLeft"] = 224] = "ControlLeft";
    KeyboardKey2[KeyboardKey2["ShiftLeft"] = 225] = "ShiftLeft";
    KeyboardKey2[KeyboardKey2["AltLeft"] = 226] = "AltLeft";
    KeyboardKey2[KeyboardKey2["OSLeft"] = 227] = "OSLeft";
    KeyboardKey2[KeyboardKey2["ControlRight"] = 228] = "ControlRight";
    KeyboardKey2[KeyboardKey2["ShiftRight"] = 229] = "ShiftRight";
    KeyboardKey2[KeyboardKey2["AltRight"] = 230] = "AltRight";
    KeyboardKey2[KeyboardKey2["OSRight"] = 231] = "OSRight";
    return KeyboardKey2;
  })(KeyboardKey || {});
  var keyboardKeyMap = /* @__PURE__ */ new Map([
    [30 /* Digit1 */, ["1", "!"]],
    [31 /* Digit2 */, ["2", "@"]],
    [32 /* Digit3 */, ["3", "#"]],
    [33 /* Digit4 */, ["4", "$"]],
    [34 /* Digit5 */, ["5", "%"]],
    [35 /* Digit6 */, ["6", "^"]],
    [36 /* Digit7 */, ["7", "&"]],
    [37 /* Digit8 */, ["8", "*"]],
    [38 /* Digit9 */, ["9", "("]],
    [39 /* Digit0 */, ["0", ")"]],
    [44 /* Space */, " "],
    [45 /* Minus */, ["-", "_"]],
    [46 /* Equal */, ["=", "+"]],
    [47 /* BracketLeft */, ["[", "{"]],
    [48 /* BracketRight */, ["]", "}"]],
    [49 /* Backslash */, ["\\", "|"]],
    [50 /* Tilde */, "~"],
    [51 /* Semicolon */, [";", ":"]],
    [52 /* Quote */, ["'", '"']],
    [53 /* Backquote */, ["`", "~"]],
    [54 /* Comma */, [",", "<"]],
    [55 /* Period */, [".", ">"]],
    [56 /* Slash */, ["/", "?"]],
    [84 /* NumpadDivide */, "/"],
    [85 /* NumpadMultiply */, "*"],
    [86 /* NumpadSubtract */, "-"],
    [87 /* NumpadAdd */, "+"],
    [88 /* NumpadEnter */, "Enter"],
    [89 /* Numpad1 */, "1"],
    [90 /* Numpad2 */, "2"],
    [91 /* Numpad3 */, "3"],
    [92 /* Numpad4 */, "4"],
    [93 /* Numpad5 */, "5"],
    [94 /* Numpad6 */, "6"],
    [95 /* Numpad7 */, "7"],
    [96 /* Numpad8 */, "8"],
    [97 /* Numpad9 */, "9"],
    [98 /* Numpad0 */, "0"],
    [99 /* NumpadDecimal */, "."],
    [224 /* ControlLeft */, "Control"],
    [225 /* ShiftLeft */, "Shift"],
    [226 /* AltLeft */, "Alt"],
    [227 /* OSLeft */, "Meta"],
    [228 /* ControlRight */, "Control"],
    [229 /* ShiftRight */, "Shift"],
    [230 /* AltRight */, "Alt"],
    [231 /* OSRight */, "Meta"]
  ]);
  var _3 = createInternal();
  var KeyboardEvent = class extends UIEvent {
    DOM_KEY_LOCATION_STANDARD = 0;
    DOM_KEY_LOCATION_LEFT = 1;
    DOM_KEY_LOCATION_RIGHT = 2;
    DOM_KEY_LOCATION_NUMPAD = 3;
    charCode;
    isComposing;
    keyCode;
    location;
    repeat;
    constructor(type, options) {
      super(type, options);
      let modifiers = 0n;
      if (options) {
        this.charCode = options.charCode ?? -1;
        this.isComposing = options.isComposing ?? false;
        this.keyCode = options.keyCode ?? -1;
        this.location = options.location ?? -1;
        this.repeat = options.repeat ?? false;
        modifiers = options.modifiers;
      } else {
        this.charCode = this.keyCode = this.location = -1;
        this.isComposing = this.repeat = false;
      }
      _3.set(this, modifiers);
    }
    getModifierState() {
      throw new Error("Method not implemented.");
    }
    initKeyboardEvent() {
      throw new Error("Method not implemented.");
    }
    get ctrlKey() {
      return (_3(this) & CTRL) !== 0n;
    }
    get shiftKey() {
      return (_3(this) & SHIFT) !== 0n;
    }
    get altKey() {
      return (_3(this) & ALT) !== 0n;
    }
    get metaKey() {
      return (_3(this) & META) !== 0n;
    }
    get code() {
      return KeyboardKey[this.keyCode];
    }
    get key() {
      const { code } = this;
      let key = keyboardKeyMap.get(this.keyCode);
      if (typeof key === "string") {
        return key;
      }
      if (Array.isArray(key)) {
        return this.shiftKey ? key[1] : key[0];
      }
      if (typeof code !== "string") {
        return "";
      }
      if (code.length === 1) {
        return this.shiftKey ? code : code.toLowerCase();
      }
      return code;
    }
  };
  var TouchEvent = class extends UIEvent {
    altKey;
    changedTouches;
    ctrlKey;
    metaKey;
    shiftKey;
    targetTouches;
    touches;
    constructor(type, options) {
      super(type, options);
      this.altKey = this.ctrlKey = this.metaKey = this.shiftKey = false;
      this.changedTouches = options.changedTouches ?? [];
      this.targetTouches = options.targetTouches ?? [];
      this.touches = options.touches ?? [];
    }
  };
  var ErrorEvent = class extends Event {
    colno;
    error;
    filename;
    lineno;
    message;
    constructor(type, options) {
      super(type, options);
      this.colno = options.colno ?? 0;
      this.error = options.error;
      this.filename = options.filename ?? "";
      this.lineno = options.lineno ?? 0;
      this.message = this.error?.message ?? "";
    }
  };
  var PromiseRejectionEvent = class extends Event {
    promise;
    reason;
    constructor(type, options) {
      super(type, options);
      this.promise = options.promise;
      this.reason = options.reason;
    }
  };
  def(Event);
  def(ErrorEvent);
  def(PromiseRejectionEvent);
  def(UIEvent);
  def(KeyboardEvent);
  def(TouchEvent);

  // src/polyfills/file.ts
  var File = class extends Blob {
    name;
    lastModified;
    webkitRelativePath;
    constructor(fileParts, fileName, options = {}) {
      super(fileParts, options);
      this.name = fileName.replace(/\//g, ":");
      this.webkitRelativePath = "";
      this.lastModified = +(options.lastModified ? new Date(options.lastModified) : /* @__PURE__ */ new Date());
    }
  };
  def(File);

  // src/polyfills/abort-controller.ts
  var AbortSignal = class extends EventTarget {
    reason;
    aborted;
    onabort;
    constructor() {
      super();
      Object.defineProperty(this, "aborted", {
        value: false,
        writable: true,
        configurable: true
      });
      Object.defineProperty(this, "onabort", {
        value: null,
        writable: true,
        configurable: true
      });
      Object.defineProperty(this, "reason", {
        value: void 0,
        writable: true,
        configurable: true
      });
    }
    throwIfAborted() {
      if (this.aborted) {
        throw this.reason;
      }
    }
    dispatchEvent(event) {
      if (event.type === "abort") {
        Object.defineProperty(this, "aborted", { value: true });
        if (typeof this.onabort === "function") {
          this.onabort(event);
        }
      }
      return super.dispatchEvent(event);
    }
  };
  var AbortController2 = class {
    signal;
    constructor() {
      Object.defineProperty(this, "signal", {
        value: new AbortSignal(),
        writable: true,
        configurable: true
      });
    }
    abort(reason) {
      const event = new Event("abort");
      let signalReason = reason;
      if (signalReason === void 0) {
        signalReason = new Error("This operation was aborted");
        signalReason.name = "AbortError";
      }
      Object.defineProperty(this.signal, "reason", { value: signalReason });
      this.signal.dispatchEvent(event);
    }
  };
  def(AbortSignal);
  def(AbortController2, "AbortController");

  // ../../node_modules/.pnpm/web-streams-polyfill@3.2.1/node_modules/web-streams-polyfill/dist/ponyfill.es2018.mjs
  var ponyfill_es2018_exports = {};
  __export(ponyfill_es2018_exports, {
    ByteLengthQueuingStrategy: () => ByteLengthQueuingStrategy,
    CountQueuingStrategy: () => CountQueuingStrategy,
    ReadableByteStreamController: () => ReadableByteStreamController,
    ReadableStream: () => ReadableStream2,
    ReadableStreamBYOBReader: () => ReadableStreamBYOBReader,
    ReadableStreamBYOBRequest: () => ReadableStreamBYOBRequest,
    ReadableStreamDefaultController: () => ReadableStreamDefaultController,
    ReadableStreamDefaultReader: () => ReadableStreamDefaultReader,
    TransformStream: () => TransformStream2,
    TransformStreamDefaultController: () => TransformStreamDefaultController,
    WritableStream: () => WritableStream2,
    WritableStreamDefaultController: () => WritableStreamDefaultController,
    WritableStreamDefaultWriter: () => WritableStreamDefaultWriter
  });
  var SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description) => `Symbol(${description})`;
  function noop() {
    return void 0;
  }
  function getGlobals() {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else if (typeof global !== "undefined") {
      return global;
    }
    return void 0;
  }
  var globals = getGlobals();
  function typeIsObject(x) {
    return typeof x === "object" && x !== null || typeof x === "function";
  }
  var rethrowAssertionErrorRejection = noop;
  var originalPromise = Promise;
  var originalPromiseThen = Promise.prototype.then;
  var originalPromiseResolve = Promise.resolve.bind(originalPromise);
  var originalPromiseReject = Promise.reject.bind(originalPromise);
  function newPromise(executor) {
    return new originalPromise(executor);
  }
  function promiseResolvedWith(value2) {
    return originalPromiseResolve(value2);
  }
  function promiseRejectedWith(reason) {
    return originalPromiseReject(reason);
  }
  function PerformPromiseThen(promise, onFulfilled, onRejected) {
    return originalPromiseThen.call(promise, onFulfilled, onRejected);
  }
  function uponPromise(promise, onFulfilled, onRejected) {
    PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
  }
  function uponFulfillment(promise, onFulfilled) {
    uponPromise(promise, onFulfilled);
  }
  function uponRejection(promise, onRejected) {
    uponPromise(promise, void 0, onRejected);
  }
  function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
    return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
  }
  function setPromiseIsHandledToTrue(promise) {
    PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
  }
  var queueMicrotask = (() => {
    const globalQueueMicrotask = globals && globals.queueMicrotask;
    if (typeof globalQueueMicrotask === "function") {
      return globalQueueMicrotask;
    }
    const resolvedPromise = promiseResolvedWith(void 0);
    return (fn) => PerformPromiseThen(resolvedPromise, fn);
  })();
  function reflectCall(F, V, args) {
    if (typeof F !== "function") {
      throw new TypeError("Argument is not a function");
    }
    return Function.prototype.apply.call(F, V, args);
  }
  function promiseCall(F, V, args) {
    try {
      return promiseResolvedWith(reflectCall(F, V, args));
    } catch (value2) {
      return promiseRejectedWith(value2);
    }
  }
  var QUEUE_MAX_ARRAY_SIZE = 16384;
  var SimpleQueue = class {
    constructor() {
      this._cursor = 0;
      this._size = 0;
      this._front = {
        _elements: [],
        _next: void 0
      };
      this._back = this._front;
      this._cursor = 0;
      this._size = 0;
    }
    get length() {
      return this._size;
    }
    // For exception safety, this method is structured in order:
    // 1. Read state
    // 2. Calculate required state mutations
    // 3. Perform state mutations
    push(element) {
      const oldBack = this._back;
      let newBack = oldBack;
      if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
        newBack = {
          _elements: [],
          _next: void 0
        };
      }
      oldBack._elements.push(element);
      if (newBack !== oldBack) {
        this._back = newBack;
        oldBack._next = newBack;
      }
      ++this._size;
    }
    // Like push(), shift() follows the read -> calculate -> mutate pattern for
    // exception safety.
    shift() {
      const oldFront = this._front;
      let newFront = oldFront;
      const oldCursor = this._cursor;
      let newCursor = oldCursor + 1;
      const elements = oldFront._elements;
      const element = elements[oldCursor];
      if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
        newFront = oldFront._next;
        newCursor = 0;
      }
      --this._size;
      this._cursor = newCursor;
      if (oldFront !== newFront) {
        this._front = newFront;
      }
      elements[oldCursor] = void 0;
      return element;
    }
    // The tricky thing about forEach() is that it can be called
    // re-entrantly. The queue may be mutated inside the callback. It is easy to
    // see that push() within the callback has no negative effects since the end
    // of the queue is checked for on every iteration. If shift() is called
    // repeatedly within the callback then the next iteration may return an
    // element that has been removed. In this case the callback will be called
    // with undefined values until we either "catch up" with elements that still
    // exist or reach the back of the queue.
    forEach(callback) {
      let i = this._cursor;
      let node = this._front;
      let elements = node._elements;
      while (i !== elements.length || node._next !== void 0) {
        if (i === elements.length) {
          node = node._next;
          elements = node._elements;
          i = 0;
          if (elements.length === 0) {
            break;
          }
        }
        callback(elements[i]);
        ++i;
      }
    }
    // Return the element that would be returned if shift() was called now,
    // without modifying the queue.
    peek() {
      const front = this._front;
      const cursor = this._cursor;
      return front._elements[cursor];
    }
  };
  function ReadableStreamReaderGenericInitialize(reader, stream) {
    reader._ownerReadableStream = stream;
    stream._reader = reader;
    if (stream._state === "readable") {
      defaultReaderClosedPromiseInitialize(reader);
    } else if (stream._state === "closed") {
      defaultReaderClosedPromiseInitializeAsResolved(reader);
    } else {
      defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
    }
  }
  function ReadableStreamReaderGenericCancel(reader, reason) {
    const stream = reader._ownerReadableStream;
    return ReadableStreamCancel(stream, reason);
  }
  function ReadableStreamReaderGenericRelease(reader) {
    if (reader._ownerReadableStream._state === "readable") {
      defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
    } else {
      defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
    }
    reader._ownerReadableStream._reader = void 0;
    reader._ownerReadableStream = void 0;
  }
  function readerLockException(name) {
    return new TypeError("Cannot " + name + " a stream using a released reader");
  }
  function defaultReaderClosedPromiseInitialize(reader) {
    reader._closedPromise = newPromise((resolve, reject) => {
      reader._closedPromise_resolve = resolve;
      reader._closedPromise_reject = reject;
    });
  }
  function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
    defaultReaderClosedPromiseInitialize(reader);
    defaultReaderClosedPromiseReject(reader, reason);
  }
  function defaultReaderClosedPromiseInitializeAsResolved(reader) {
    defaultReaderClosedPromiseInitialize(reader);
    defaultReaderClosedPromiseResolve(reader);
  }
  function defaultReaderClosedPromiseReject(reader, reason) {
    if (reader._closedPromise_reject === void 0) {
      return;
    }
    setPromiseIsHandledToTrue(reader._closedPromise);
    reader._closedPromise_reject(reason);
    reader._closedPromise_resolve = void 0;
    reader._closedPromise_reject = void 0;
  }
  function defaultReaderClosedPromiseResetToRejected(reader, reason) {
    defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
  }
  function defaultReaderClosedPromiseResolve(reader) {
    if (reader._closedPromise_resolve === void 0) {
      return;
    }
    reader._closedPromise_resolve(void 0);
    reader._closedPromise_resolve = void 0;
    reader._closedPromise_reject = void 0;
  }
  var AbortSteps = SymbolPolyfill("[[AbortSteps]]");
  var ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
  var CancelSteps = SymbolPolyfill("[[CancelSteps]]");
  var PullSteps = SymbolPolyfill("[[PullSteps]]");
  var NumberIsFinite = Number.isFinite || function(x) {
    return typeof x === "number" && isFinite(x);
  };
  var MathTrunc = Math.trunc || function(v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
  };
  function isDictionary(x) {
    return typeof x === "object" || typeof x === "function";
  }
  function assertDictionary(obj, context) {
    if (obj !== void 0 && !isDictionary(obj)) {
      throw new TypeError(`${context} is not an object.`);
    }
  }
  function assertFunction(x, context) {
    if (typeof x !== "function") {
      throw new TypeError(`${context} is not a function.`);
    }
  }
  function isObject(x) {
    return typeof x === "object" && x !== null || typeof x === "function";
  }
  function assertObject(x, context) {
    if (!isObject(x)) {
      throw new TypeError(`${context} is not an object.`);
    }
  }
  function assertRequiredArgument(x, position, context) {
    if (x === void 0) {
      throw new TypeError(`Parameter ${position} is required in '${context}'.`);
    }
  }
  function assertRequiredField(x, field, context) {
    if (x === void 0) {
      throw new TypeError(`${field} is required in '${context}'.`);
    }
  }
  function convertUnrestrictedDouble(value2) {
    return Number(value2);
  }
  function censorNegativeZero(x) {
    return x === 0 ? 0 : x;
  }
  function integerPart(x) {
    return censorNegativeZero(MathTrunc(x));
  }
  function convertUnsignedLongLongWithEnforceRange(value2, context) {
    const lowerBound = 0;
    const upperBound = Number.MAX_SAFE_INTEGER;
    let x = Number(value2);
    x = censorNegativeZero(x);
    if (!NumberIsFinite(x)) {
      throw new TypeError(`${context} is not a finite number`);
    }
    x = integerPart(x);
    if (x < lowerBound || x > upperBound) {
      throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
    }
    if (!NumberIsFinite(x) || x === 0) {
      return 0;
    }
    return x;
  }
  function assertReadableStream(x, context) {
    if (!IsReadableStream(x)) {
      throw new TypeError(`${context} is not a ReadableStream.`);
    }
  }
  function AcquireReadableStreamDefaultReader(stream) {
    return new ReadableStreamDefaultReader(stream);
  }
  function ReadableStreamAddReadRequest(stream, readRequest) {
    stream._reader._readRequests.push(readRequest);
  }
  function ReadableStreamFulfillReadRequest(stream, chunk, done) {
    const reader = stream._reader;
    const readRequest = reader._readRequests.shift();
    if (done) {
      readRequest._closeSteps();
    } else {
      readRequest._chunkSteps(chunk);
    }
  }
  function ReadableStreamGetNumReadRequests(stream) {
    return stream._reader._readRequests.length;
  }
  function ReadableStreamHasDefaultReader(stream) {
    const reader = stream._reader;
    if (reader === void 0) {
      return false;
    }
    if (!IsReadableStreamDefaultReader(reader)) {
      return false;
    }
    return true;
  }
  var ReadableStreamDefaultReader = class {
    constructor(stream) {
      assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
      assertReadableStream(stream, "First parameter");
      if (IsReadableStreamLocked(stream)) {
        throw new TypeError("This stream has already been locked for exclusive reading by another reader");
      }
      ReadableStreamReaderGenericInitialize(this, stream);
      this._readRequests = new SimpleQueue();
    }
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed,
     * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
     */
    get closed() {
      if (!IsReadableStreamDefaultReader(this)) {
        return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
      }
      return this._closedPromise;
    }
    /**
     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
     */
    cancel(reason = void 0) {
      if (!IsReadableStreamDefaultReader(this)) {
        return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
      }
      if (this._ownerReadableStream === void 0) {
        return promiseRejectedWith(readerLockException("cancel"));
      }
      return ReadableStreamReaderGenericCancel(this, reason);
    }
    /**
     * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
     *
     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
     */
    read() {
      if (!IsReadableStreamDefaultReader(this)) {
        return promiseRejectedWith(defaultReaderBrandCheckException("read"));
      }
      if (this._ownerReadableStream === void 0) {
        return promiseRejectedWith(readerLockException("read from"));
      }
      let resolvePromise;
      let rejectPromise;
      const promise = newPromise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
      });
      const readRequest = {
        _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
        _closeSteps: () => resolvePromise({ value: void 0, done: true }),
        _errorSteps: (e) => rejectPromise(e)
      };
      ReadableStreamDefaultReaderRead(this, readRequest);
      return promise;
    }
    /**
     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
     * from now on; otherwise, the reader will appear closed.
     *
     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
     * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
     * do so will throw a `TypeError` and leave the reader locked to the stream.
     */
    releaseLock() {
      if (!IsReadableStreamDefaultReader(this)) {
        throw defaultReaderBrandCheckException("releaseLock");
      }
      if (this._ownerReadableStream === void 0) {
        return;
      }
      if (this._readRequests.length > 0) {
        throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
      }
      ReadableStreamReaderGenericRelease(this);
    }
  };
  Object.defineProperties(ReadableStreamDefaultReader.prototype, {
    cancel: { enumerable: true },
    read: { enumerable: true },
    releaseLock: { enumerable: true },
    closed: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
      value: "ReadableStreamDefaultReader",
      configurable: true
    });
  }
  function IsReadableStreamDefaultReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_readRequests")) {
      return false;
    }
    return x instanceof ReadableStreamDefaultReader;
  }
  function ReadableStreamDefaultReaderRead(reader, readRequest) {
    const stream = reader._ownerReadableStream;
    stream._disturbed = true;
    if (stream._state === "closed") {
      readRequest._closeSteps();
    } else if (stream._state === "errored") {
      readRequest._errorSteps(stream._storedError);
    } else {
      stream._readableStreamController[PullSteps](readRequest);
    }
  }
  function defaultReaderBrandCheckException(name) {
    return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
  }
  var AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
  }).prototype);
  var ReadableStreamAsyncIteratorImpl = class {
    constructor(reader, preventCancel) {
      this._ongoingPromise = void 0;
      this._isFinished = false;
      this._reader = reader;
      this._preventCancel = preventCancel;
    }
    next() {
      const nextSteps = () => this._nextSteps();
      this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
      return this._ongoingPromise;
    }
    return(value2) {
      const returnSteps = () => this._returnSteps(value2);
      return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
    }
    _nextSteps() {
      if (this._isFinished) {
        return Promise.resolve({ value: void 0, done: true });
      }
      const reader = this._reader;
      if (reader._ownerReadableStream === void 0) {
        return promiseRejectedWith(readerLockException("iterate"));
      }
      let resolvePromise;
      let rejectPromise;
      const promise = newPromise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
      });
      const readRequest = {
        _chunkSteps: (chunk) => {
          this._ongoingPromise = void 0;
          queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
        },
        _closeSteps: () => {
          this._ongoingPromise = void 0;
          this._isFinished = true;
          ReadableStreamReaderGenericRelease(reader);
          resolvePromise({ value: void 0, done: true });
        },
        _errorSteps: (reason) => {
          this._ongoingPromise = void 0;
          this._isFinished = true;
          ReadableStreamReaderGenericRelease(reader);
          rejectPromise(reason);
        }
      };
      ReadableStreamDefaultReaderRead(reader, readRequest);
      return promise;
    }
    _returnSteps(value2) {
      if (this._isFinished) {
        return Promise.resolve({ value: value2, done: true });
      }
      this._isFinished = true;
      const reader = this._reader;
      if (reader._ownerReadableStream === void 0) {
        return promiseRejectedWith(readerLockException("finish iterating"));
      }
      if (!this._preventCancel) {
        const result = ReadableStreamReaderGenericCancel(reader, value2);
        ReadableStreamReaderGenericRelease(reader);
        return transformPromiseWith(result, () => ({ value: value2, done: true }));
      }
      ReadableStreamReaderGenericRelease(reader);
      return promiseResolvedWith({ value: value2, done: true });
    }
  };
  var ReadableStreamAsyncIteratorPrototype = {
    next() {
      if (!IsReadableStreamAsyncIterator(this)) {
        return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
      }
      return this._asyncIteratorImpl.next();
    },
    return(value2) {
      if (!IsReadableStreamAsyncIterator(this)) {
        return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
      }
      return this._asyncIteratorImpl.return(value2);
    }
  };
  if (AsyncIteratorPrototype !== void 0) {
    Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
  }
  function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
    const reader = AcquireReadableStreamDefaultReader(stream);
    const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
    const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
    iterator._asyncIteratorImpl = impl;
    return iterator;
  }
  function IsReadableStreamAsyncIterator(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_asyncIteratorImpl")) {
      return false;
    }
    try {
      return x._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
    } catch (_a) {
      return false;
    }
  }
  function streamAsyncIteratorBrandCheckException(name) {
    return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
  }
  var NumberIsNaN = Number.isNaN || function(x) {
    return x !== x;
  };
  function CreateArrayFromList(elements) {
    return elements.slice();
  }
  function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
    new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
  }
  function TransferArrayBuffer(O) {
    return O;
  }
  function IsDetachedBuffer(O) {
    return false;
  }
  function ArrayBufferSlice(buffer, begin, end) {
    if (buffer.slice) {
      return buffer.slice(begin, end);
    }
    const length = end - begin;
    const slice = new ArrayBuffer(length);
    CopyDataBlockBytes(slice, 0, buffer, begin, length);
    return slice;
  }
  function IsNonNegativeNumber(v) {
    if (typeof v !== "number") {
      return false;
    }
    if (NumberIsNaN(v)) {
      return false;
    }
    if (v < 0) {
      return false;
    }
    return true;
  }
  function CloneAsUint8Array(O) {
    const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
    return new Uint8Array(buffer);
  }
  function DequeueValue(container) {
    const pair = container._queue.shift();
    container._queueTotalSize -= pair.size;
    if (container._queueTotalSize < 0) {
      container._queueTotalSize = 0;
    }
    return pair.value;
  }
  function EnqueueValueWithSize(container, value2, size) {
    if (!IsNonNegativeNumber(size) || size === Infinity) {
      throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
    }
    container._queue.push({ value: value2, size });
    container._queueTotalSize += size;
  }
  function PeekQueueValue(container) {
    const pair = container._queue.peek();
    return pair.value;
  }
  function ResetQueue(container) {
    container._queue = new SimpleQueue();
    container._queueTotalSize = 0;
  }
  var ReadableStreamBYOBRequest = class {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    /**
     * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
     */
    get view() {
      if (!IsReadableStreamBYOBRequest(this)) {
        throw byobRequestBrandCheckException("view");
      }
      return this._view;
    }
    respond(bytesWritten) {
      if (!IsReadableStreamBYOBRequest(this)) {
        throw byobRequestBrandCheckException("respond");
      }
      assertRequiredArgument(bytesWritten, 1, "respond");
      bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
      if (this._associatedReadableByteStreamController === void 0) {
        throw new TypeError("This BYOB request has been invalidated");
      }
      if (IsDetachedBuffer(this._view.buffer))
        ;
      ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
    }
    respondWithNewView(view) {
      if (!IsReadableStreamBYOBRequest(this)) {
        throw byobRequestBrandCheckException("respondWithNewView");
      }
      assertRequiredArgument(view, 1, "respondWithNewView");
      if (!ArrayBuffer.isView(view)) {
        throw new TypeError("You can only respond with array buffer views");
      }
      if (this._associatedReadableByteStreamController === void 0) {
        throw new TypeError("This BYOB request has been invalidated");
      }
      if (IsDetachedBuffer(view.buffer))
        ;
      ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
    }
  };
  Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
    respond: { enumerable: true },
    respondWithNewView: { enumerable: true },
    view: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
      value: "ReadableStreamBYOBRequest",
      configurable: true
    });
  }
  var ReadableByteStreamController = class {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    /**
     * Returns the current BYOB pull request, or `null` if there isn't one.
     */
    get byobRequest() {
      if (!IsReadableByteStreamController(this)) {
        throw byteStreamControllerBrandCheckException("byobRequest");
      }
      return ReadableByteStreamControllerGetBYOBRequest(this);
    }
    /**
     * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
     * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
     */
    get desiredSize() {
      if (!IsReadableByteStreamController(this)) {
        throw byteStreamControllerBrandCheckException("desiredSize");
      }
      return ReadableByteStreamControllerGetDesiredSize(this);
    }
    /**
     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
     * the stream, but once those are read, the stream will become closed.
     */
    close() {
      if (!IsReadableByteStreamController(this)) {
        throw byteStreamControllerBrandCheckException("close");
      }
      if (this._closeRequested) {
        throw new TypeError("The stream has already been closed; do not close it again!");
      }
      const state2 = this._controlledReadableByteStream._state;
      if (state2 !== "readable") {
        throw new TypeError(`The stream (in ${state2} state) is not in the readable state and cannot be closed`);
      }
      ReadableByteStreamControllerClose(this);
    }
    enqueue(chunk) {
      if (!IsReadableByteStreamController(this)) {
        throw byteStreamControllerBrandCheckException("enqueue");
      }
      assertRequiredArgument(chunk, 1, "enqueue");
      if (!ArrayBuffer.isView(chunk)) {
        throw new TypeError("chunk must be an array buffer view");
      }
      if (chunk.byteLength === 0) {
        throw new TypeError("chunk must have non-zero byteLength");
      }
      if (chunk.buffer.byteLength === 0) {
        throw new TypeError(`chunk's buffer must have non-zero byteLength`);
      }
      if (this._closeRequested) {
        throw new TypeError("stream is closed or draining");
      }
      const state2 = this._controlledReadableByteStream._state;
      if (state2 !== "readable") {
        throw new TypeError(`The stream (in ${state2} state) is not in the readable state and cannot be enqueued to`);
      }
      ReadableByteStreamControllerEnqueue(this, chunk);
    }
    /**
     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
     */
    error(e = void 0) {
      if (!IsReadableByteStreamController(this)) {
        throw byteStreamControllerBrandCheckException("error");
      }
      ReadableByteStreamControllerError(this, e);
    }
    /** @internal */
    [CancelSteps](reason) {
      ReadableByteStreamControllerClearPendingPullIntos(this);
      ResetQueue(this);
      const result = this._cancelAlgorithm(reason);
      ReadableByteStreamControllerClearAlgorithms(this);
      return result;
    }
    /** @internal */
    [PullSteps](readRequest) {
      const stream = this._controlledReadableByteStream;
      if (this._queueTotalSize > 0) {
        const entry = this._queue.shift();
        this._queueTotalSize -= entry.byteLength;
        ReadableByteStreamControllerHandleQueueDrain(this);
        const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
        readRequest._chunkSteps(view);
        return;
      }
      const autoAllocateChunkSize = this._autoAllocateChunkSize;
      if (autoAllocateChunkSize !== void 0) {
        let buffer;
        try {
          buffer = new ArrayBuffer(autoAllocateChunkSize);
        } catch (bufferE) {
          readRequest._errorSteps(bufferE);
          return;
        }
        const pullIntoDescriptor = {
          buffer,
          bufferByteLength: autoAllocateChunkSize,
          byteOffset: 0,
          byteLength: autoAllocateChunkSize,
          bytesFilled: 0,
          elementSize: 1,
          viewConstructor: Uint8Array,
          readerType: "default"
        };
        this._pendingPullIntos.push(pullIntoDescriptor);
      }
      ReadableStreamAddReadRequest(stream, readRequest);
      ReadableByteStreamControllerCallPullIfNeeded(this);
    }
  };
  Object.defineProperties(ReadableByteStreamController.prototype, {
    close: { enumerable: true },
    enqueue: { enumerable: true },
    error: { enumerable: true },
    byobRequest: { enumerable: true },
    desiredSize: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
      value: "ReadableByteStreamController",
      configurable: true
    });
  }
  function IsReadableByteStreamController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_controlledReadableByteStream")) {
      return false;
    }
    return x instanceof ReadableByteStreamController;
  }
  function IsReadableStreamBYOBRequest(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_associatedReadableByteStreamController")) {
      return false;
    }
    return x instanceof ReadableStreamBYOBRequest;
  }
  function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
    if (!shouldPull) {
      return;
    }
    if (controller._pulling) {
      controller._pullAgain = true;
      return;
    }
    controller._pulling = true;
    const pullPromise = controller._pullAlgorithm();
    uponPromise(pullPromise, () => {
      controller._pulling = false;
      if (controller._pullAgain) {
        controller._pullAgain = false;
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
    }, (e) => {
      ReadableByteStreamControllerError(controller, e);
    });
  }
  function ReadableByteStreamControllerClearPendingPullIntos(controller) {
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    controller._pendingPullIntos = new SimpleQueue();
  }
  function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    let done = false;
    if (stream._state === "closed") {
      done = true;
    }
    const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    if (pullIntoDescriptor.readerType === "default") {
      ReadableStreamFulfillReadRequest(stream, filledView, done);
    } else {
      ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
  }
  function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
    const bytesFilled = pullIntoDescriptor.bytesFilled;
    const elementSize = pullIntoDescriptor.elementSize;
    return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
  }
  function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
    controller._queue.push({ buffer, byteOffset, byteLength });
    controller._queueTotalSize += byteLength;
  }
  function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    const elementSize = pullIntoDescriptor.elementSize;
    const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    let totalBytesToCopyRemaining = maxBytesToCopy;
    let ready = false;
    if (maxAlignedBytes > currentAlignedBytes) {
      totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
      ready = true;
    }
    const queue = controller._queue;
    while (totalBytesToCopyRemaining > 0) {
      const headOfQueue = queue.peek();
      const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
      const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
      if (headOfQueue.byteLength === bytesToCopy) {
        queue.shift();
      } else {
        headOfQueue.byteOffset += bytesToCopy;
        headOfQueue.byteLength -= bytesToCopy;
      }
      controller._queueTotalSize -= bytesToCopy;
      ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
      totalBytesToCopyRemaining -= bytesToCopy;
    }
    return ready;
  }
  function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
    pullIntoDescriptor.bytesFilled += size;
  }
  function ReadableByteStreamControllerHandleQueueDrain(controller) {
    if (controller._queueTotalSize === 0 && controller._closeRequested) {
      ReadableByteStreamControllerClearAlgorithms(controller);
      ReadableStreamClose(controller._controlledReadableByteStream);
    } else {
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
  }
  function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    if (controller._byobRequest === null) {
      return;
    }
    controller._byobRequest._associatedReadableByteStreamController = void 0;
    controller._byobRequest._view = null;
    controller._byobRequest = null;
  }
  function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    while (controller._pendingPullIntos.length > 0) {
      if (controller._queueTotalSize === 0) {
        return;
      }
      const pullIntoDescriptor = controller._pendingPullIntos.peek();
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
      }
    }
  }
  function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
    const stream = controller._controlledReadableByteStream;
    let elementSize = 1;
    if (view.constructor !== DataView) {
      elementSize = view.constructor.BYTES_PER_ELEMENT;
    }
    const ctor = view.constructor;
    const buffer = TransferArrayBuffer(view.buffer);
    const pullIntoDescriptor = {
      buffer,
      bufferByteLength: buffer.byteLength,
      byteOffset: view.byteOffset,
      byteLength: view.byteLength,
      bytesFilled: 0,
      elementSize,
      viewConstructor: ctor,
      readerType: "byob"
    };
    if (controller._pendingPullIntos.length > 0) {
      controller._pendingPullIntos.push(pullIntoDescriptor);
      ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
      return;
    }
    if (stream._state === "closed") {
      const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
      readIntoRequest._closeSteps(emptyView);
      return;
    }
    if (controller._queueTotalSize > 0) {
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        ReadableByteStreamControllerHandleQueueDrain(controller);
        readIntoRequest._chunkSteps(filledView);
        return;
      }
      if (controller._closeRequested) {
        const e = new TypeError("Insufficient bytes to fill elements in the given buffer");
        ReadableByteStreamControllerError(controller, e);
        readIntoRequest._errorSteps(e);
        return;
      }
    }
    controller._pendingPullIntos.push(pullIntoDescriptor);
    ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
    ReadableByteStreamControllerCallPullIfNeeded(controller);
  }
  function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    const stream = controller._controlledReadableByteStream;
    if (ReadableStreamHasBYOBReader(stream)) {
      while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
      }
    }
  }
  function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
      return;
    }
    ReadableByteStreamControllerShiftPendingPullInto(controller);
    const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
    if (remainderSize > 0) {
      const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    }
    pullIntoDescriptor.bytesFilled -= remainderSize;
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
  }
  function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    const firstDescriptor = controller._pendingPullIntos.peek();
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    const state2 = controller._controlledReadableByteStream._state;
    if (state2 === "closed") {
      ReadableByteStreamControllerRespondInClosedState(controller);
    } else {
      ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    }
    ReadableByteStreamControllerCallPullIfNeeded(controller);
  }
  function ReadableByteStreamControllerShiftPendingPullInto(controller) {
    const descriptor = controller._pendingPullIntos.shift();
    return descriptor;
  }
  function ReadableByteStreamControllerShouldCallPull(controller) {
    const stream = controller._controlledReadableByteStream;
    if (stream._state !== "readable") {
      return false;
    }
    if (controller._closeRequested) {
      return false;
    }
    if (!controller._started) {
      return false;
    }
    if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }
    if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
      return true;
    }
    const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
      return true;
    }
    return false;
  }
  function ReadableByteStreamControllerClearAlgorithms(controller) {
    controller._pullAlgorithm = void 0;
    controller._cancelAlgorithm = void 0;
  }
  function ReadableByteStreamControllerClose(controller) {
    const stream = controller._controlledReadableByteStream;
    if (controller._closeRequested || stream._state !== "readable") {
      return;
    }
    if (controller._queueTotalSize > 0) {
      controller._closeRequested = true;
      return;
    }
    if (controller._pendingPullIntos.length > 0) {
      const firstPendingPullInto = controller._pendingPullIntos.peek();
      if (firstPendingPullInto.bytesFilled > 0) {
        const e = new TypeError("Insufficient bytes to fill elements in the given buffer");
        ReadableByteStreamControllerError(controller, e);
        throw e;
      }
    }
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamClose(stream);
  }
  function ReadableByteStreamControllerEnqueue(controller, chunk) {
    const stream = controller._controlledReadableByteStream;
    if (controller._closeRequested || stream._state !== "readable") {
      return;
    }
    const buffer = chunk.buffer;
    const byteOffset = chunk.byteOffset;
    const byteLength = chunk.byteLength;
    const transferredBuffer = TransferArrayBuffer(buffer);
    if (controller._pendingPullIntos.length > 0) {
      const firstPendingPullInto = controller._pendingPullIntos.peek();
      if (IsDetachedBuffer(firstPendingPullInto.buffer))
        ;
      firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
    }
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    if (ReadableStreamHasDefaultReader(stream)) {
      if (ReadableStreamGetNumReadRequests(stream) === 0) {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      } else {
        if (controller._pendingPullIntos.length > 0) {
          ReadableByteStreamControllerShiftPendingPullInto(controller);
        }
        const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
        ReadableStreamFulfillReadRequest(stream, transferredView, false);
      }
    } else if (ReadableStreamHasBYOBReader(stream)) {
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    } else {
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    }
    ReadableByteStreamControllerCallPullIfNeeded(controller);
  }
  function ReadableByteStreamControllerError(controller, e) {
    const stream = controller._controlledReadableByteStream;
    if (stream._state !== "readable") {
      return;
    }
    ReadableByteStreamControllerClearPendingPullIntos(controller);
    ResetQueue(controller);
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamError(stream, e);
  }
  function ReadableByteStreamControllerGetBYOBRequest(controller) {
    if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
      const firstDescriptor = controller._pendingPullIntos.peek();
      const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
      const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
      SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
      controller._byobRequest = byobRequest;
    }
    return controller._byobRequest;
  }
  function ReadableByteStreamControllerGetDesiredSize(controller) {
    const state2 = controller._controlledReadableByteStream._state;
    if (state2 === "errored") {
      return null;
    }
    if (state2 === "closed") {
      return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
  }
  function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    const firstDescriptor = controller._pendingPullIntos.peek();
    const state2 = controller._controlledReadableByteStream._state;
    if (state2 === "closed") {
      if (bytesWritten !== 0) {
        throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
      }
    } else {
      if (bytesWritten === 0) {
        throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
      }
      if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
        throw new RangeError("bytesWritten out of range");
      }
    }
    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
  }
  function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    const firstDescriptor = controller._pendingPullIntos.peek();
    const state2 = controller._controlledReadableByteStream._state;
    if (state2 === "closed") {
      if (view.byteLength !== 0) {
        throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
      }
    } else {
      if (view.byteLength === 0) {
        throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
      }
    }
    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
      throw new RangeError("The region specified by view does not match byobRequest");
    }
    if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
      throw new RangeError("The buffer of view has different capacity than byobRequest");
    }
    if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
      throw new RangeError("The region specified by view is larger than byobRequest");
    }
    const viewByteLength = view.byteLength;
    firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
    ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
  }
  function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
    controller._controlledReadableByteStream = stream;
    controller._pullAgain = false;
    controller._pulling = false;
    controller._byobRequest = null;
    controller._queue = controller._queueTotalSize = void 0;
    ResetQueue(controller);
    controller._closeRequested = false;
    controller._started = false;
    controller._strategyHWM = highWaterMark;
    controller._pullAlgorithm = pullAlgorithm;
    controller._cancelAlgorithm = cancelAlgorithm;
    controller._autoAllocateChunkSize = autoAllocateChunkSize;
    controller._pendingPullIntos = new SimpleQueue();
    stream._readableStreamController = controller;
    const startResult = startAlgorithm();
    uponPromise(promiseResolvedWith(startResult), () => {
      controller._started = true;
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }, (r) => {
      ReadableByteStreamControllerError(controller, r);
    });
  }
  function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
    const controller = Object.create(ReadableByteStreamController.prototype);
    let startAlgorithm = () => void 0;
    let pullAlgorithm = () => promiseResolvedWith(void 0);
    let cancelAlgorithm = () => promiseResolvedWith(void 0);
    if (underlyingByteSource.start !== void 0) {
      startAlgorithm = () => underlyingByteSource.start(controller);
    }
    if (underlyingByteSource.pull !== void 0) {
      pullAlgorithm = () => underlyingByteSource.pull(controller);
    }
    if (underlyingByteSource.cancel !== void 0) {
      cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
    }
    const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
    if (autoAllocateChunkSize === 0) {
      throw new TypeError("autoAllocateChunkSize must be greater than 0");
    }
    SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
  }
  function SetUpReadableStreamBYOBRequest(request, controller, view) {
    request._associatedReadableByteStreamController = controller;
    request._view = view;
  }
  function byobRequestBrandCheckException(name) {
    return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
  }
  function byteStreamControllerBrandCheckException(name) {
    return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
  }
  function AcquireReadableStreamBYOBReader(stream) {
    return new ReadableStreamBYOBReader(stream);
  }
  function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
    stream._reader._readIntoRequests.push(readIntoRequest);
  }
  function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    const reader = stream._reader;
    const readIntoRequest = reader._readIntoRequests.shift();
    if (done) {
      readIntoRequest._closeSteps(chunk);
    } else {
      readIntoRequest._chunkSteps(chunk);
    }
  }
  function ReadableStreamGetNumReadIntoRequests(stream) {
    return stream._reader._readIntoRequests.length;
  }
  function ReadableStreamHasBYOBReader(stream) {
    const reader = stream._reader;
    if (reader === void 0) {
      return false;
    }
    if (!IsReadableStreamBYOBReader(reader)) {
      return false;
    }
    return true;
  }
  var ReadableStreamBYOBReader = class {
    constructor(stream) {
      assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
      assertReadableStream(stream, "First parameter");
      if (IsReadableStreamLocked(stream)) {
        throw new TypeError("This stream has already been locked for exclusive reading by another reader");
      }
      if (!IsReadableByteStreamController(stream._readableStreamController)) {
        throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
      }
      ReadableStreamReaderGenericInitialize(this, stream);
      this._readIntoRequests = new SimpleQueue();
    }
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
     * the reader's lock is released before the stream finishes closing.
     */
    get closed() {
      if (!IsReadableStreamBYOBReader(this)) {
        return promiseRejectedWith(byobReaderBrandCheckException("closed"));
      }
      return this._closedPromise;
    }
    /**
     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
     */
    cancel(reason = void 0) {
      if (!IsReadableStreamBYOBReader(this)) {
        return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
      }
      if (this._ownerReadableStream === void 0) {
        return promiseRejectedWith(readerLockException("cancel"));
      }
      return ReadableStreamReaderGenericCancel(this, reason);
    }
    /**
     * Attempts to reads bytes into view, and returns a promise resolved with the result.
     *
     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
     */
    read(view) {
      if (!IsReadableStreamBYOBReader(this)) {
        return promiseRejectedWith(byobReaderBrandCheckException("read"));
      }
      if (!ArrayBuffer.isView(view)) {
        return promiseRejectedWith(new TypeError("view must be an array buffer view"));
      }
      if (view.byteLength === 0) {
        return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
      }
      if (view.buffer.byteLength === 0) {
        return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
      }
      if (IsDetachedBuffer(view.buffer))
        ;
      if (this._ownerReadableStream === void 0) {
        return promiseRejectedWith(readerLockException("read from"));
      }
      let resolvePromise;
      let rejectPromise;
      const promise = newPromise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
      });
      const readIntoRequest = {
        _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
        _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
        _errorSteps: (e) => rejectPromise(e)
      };
      ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
      return promise;
    }
    /**
     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
     * from now on; otherwise, the reader will appear closed.
     *
     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
     * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
     * do so will throw a `TypeError` and leave the reader locked to the stream.
     */
    releaseLock() {
      if (!IsReadableStreamBYOBReader(this)) {
        throw byobReaderBrandCheckException("releaseLock");
      }
      if (this._ownerReadableStream === void 0) {
        return;
      }
      if (this._readIntoRequests.length > 0) {
        throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
      }
      ReadableStreamReaderGenericRelease(this);
    }
  };
  Object.defineProperties(ReadableStreamBYOBReader.prototype, {
    cancel: { enumerable: true },
    read: { enumerable: true },
    releaseLock: { enumerable: true },
    closed: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
      value: "ReadableStreamBYOBReader",
      configurable: true
    });
  }
  function IsReadableStreamBYOBReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_readIntoRequests")) {
      return false;
    }
    return x instanceof ReadableStreamBYOBReader;
  }
  function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
    const stream = reader._ownerReadableStream;
    stream._disturbed = true;
    if (stream._state === "errored") {
      readIntoRequest._errorSteps(stream._storedError);
    } else {
      ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
    }
  }
  function byobReaderBrandCheckException(name) {
    return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
  }
  function ExtractHighWaterMark(strategy, defaultHWM) {
    const { highWaterMark } = strategy;
    if (highWaterMark === void 0) {
      return defaultHWM;
    }
    if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
      throw new RangeError("Invalid highWaterMark");
    }
    return highWaterMark;
  }
  function ExtractSizeAlgorithm(strategy) {
    const { size } = strategy;
    if (!size) {
      return () => 1;
    }
    return size;
  }
  function convertQueuingStrategy(init7, context) {
    assertDictionary(init7, context);
    const highWaterMark = init7 === null || init7 === void 0 ? void 0 : init7.highWaterMark;
    const size = init7 === null || init7 === void 0 ? void 0 : init7.size;
    return {
      highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
      size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
    };
  }
  function convertQueuingStrategySize(fn, context) {
    assertFunction(fn, context);
    return (chunk) => convertUnrestrictedDouble(fn(chunk));
  }
  function convertUnderlyingSink(original, context) {
    assertDictionary(original, context);
    const abort = original === null || original === void 0 ? void 0 : original.abort;
    const close = original === null || original === void 0 ? void 0 : original.close;
    const start = original === null || original === void 0 ? void 0 : original.start;
    const type = original === null || original === void 0 ? void 0 : original.type;
    const write2 = original === null || original === void 0 ? void 0 : original.write;
    return {
      abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
      close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
      start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
      write: write2 === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write2, original, `${context} has member 'write' that`),
      type
    };
  }
  function convertUnderlyingSinkAbortCallback(fn, original, context) {
    assertFunction(fn, context);
    return (reason) => promiseCall(fn, original, [reason]);
  }
  function convertUnderlyingSinkCloseCallback(fn, original, context) {
    assertFunction(fn, context);
    return () => promiseCall(fn, original, []);
  }
  function convertUnderlyingSinkStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => reflectCall(fn, original, [controller]);
  }
  function convertUnderlyingSinkWriteCallback(fn, original, context) {
    assertFunction(fn, context);
    return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
  }
  function assertWritableStream(x, context) {
    if (!IsWritableStream(x)) {
      throw new TypeError(`${context} is not a WritableStream.`);
    }
  }
  function isAbortSignal(value2) {
    if (typeof value2 !== "object" || value2 === null) {
      return false;
    }
    try {
      return typeof value2.aborted === "boolean";
    } catch (_a) {
      return false;
    }
  }
  var supportsAbortController = typeof AbortController === "function";
  function createAbortController() {
    if (supportsAbortController) {
      return new AbortController();
    }
    return void 0;
  }
  var WritableStream2 = class {
    constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
      if (rawUnderlyingSink === void 0) {
        rawUnderlyingSink = null;
      } else {
        assertObject(rawUnderlyingSink, "First parameter");
      }
      const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
      const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
      InitializeWritableStream(this);
      const type = underlyingSink.type;
      if (type !== void 0) {
        throw new RangeError("Invalid type is specified");
      }
      const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
      const highWaterMark = ExtractHighWaterMark(strategy, 1);
      SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
    }
    /**
     * Returns whether or not the writable stream is locked to a writer.
     */
    get locked() {
      if (!IsWritableStream(this)) {
        throw streamBrandCheckException$2("locked");
      }
      return IsWritableStreamLocked(this);
    }
    /**
     * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
     * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
     * mechanism of the underlying sink.
     *
     * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
     * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
     * the stream) if the stream is currently locked.
     */
    abort(reason = void 0) {
      if (!IsWritableStream(this)) {
        return promiseRejectedWith(streamBrandCheckException$2("abort"));
      }
      if (IsWritableStreamLocked(this)) {
        return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
      }
      return WritableStreamAbort(this, reason);
    }
    /**
     * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
     * close behavior. During this time any further attempts to write will fail (without erroring the stream).
     *
     * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
     * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
     * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
     */
    close() {
      if (!IsWritableStream(this)) {
        return promiseRejectedWith(streamBrandCheckException$2("close"));
      }
      if (IsWritableStreamLocked(this)) {
        return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
      }
      if (WritableStreamCloseQueuedOrInFlight(this)) {
        return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
      }
      return WritableStreamClose(this);
    }
    /**
     * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
     * is locked, no other writer can be acquired until this one is released.
     *
     * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
     * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
     * the same time, which would cause the resulting written data to be unpredictable and probably useless.
     */
    getWriter() {
      if (!IsWritableStream(this)) {
        throw streamBrandCheckException$2("getWriter");
      }
      return AcquireWritableStreamDefaultWriter(this);
    }
  };
  Object.defineProperties(WritableStream2.prototype, {
    abort: { enumerable: true },
    close: { enumerable: true },
    getWriter: { enumerable: true },
    locked: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(WritableStream2.prototype, SymbolPolyfill.toStringTag, {
      value: "WritableStream",
      configurable: true
    });
  }
  function AcquireWritableStreamDefaultWriter(stream) {
    return new WritableStreamDefaultWriter(stream);
  }
  function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
    const stream = Object.create(WritableStream2.prototype);
    InitializeWritableStream(stream);
    const controller = Object.create(WritableStreamDefaultController.prototype);
    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    return stream;
  }
  function InitializeWritableStream(stream) {
    stream._state = "writable";
    stream._storedError = void 0;
    stream._writer = void 0;
    stream._writableStreamController = void 0;
    stream._writeRequests = new SimpleQueue();
    stream._inFlightWriteRequest = void 0;
    stream._closeRequest = void 0;
    stream._inFlightCloseRequest = void 0;
    stream._pendingAbortRequest = void 0;
    stream._backpressure = false;
  }
  function IsWritableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_writableStreamController")) {
      return false;
    }
    return x instanceof WritableStream2;
  }
  function IsWritableStreamLocked(stream) {
    if (stream._writer === void 0) {
      return false;
    }
    return true;
  }
  function WritableStreamAbort(stream, reason) {
    var _a;
    if (stream._state === "closed" || stream._state === "errored") {
      return promiseResolvedWith(void 0);
    }
    stream._writableStreamController._abortReason = reason;
    (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort();
    const state2 = stream._state;
    if (state2 === "closed" || state2 === "errored") {
      return promiseResolvedWith(void 0);
    }
    if (stream._pendingAbortRequest !== void 0) {
      return stream._pendingAbortRequest._promise;
    }
    let wasAlreadyErroring = false;
    if (state2 === "erroring") {
      wasAlreadyErroring = true;
      reason = void 0;
    }
    const promise = newPromise((resolve, reject) => {
      stream._pendingAbortRequest = {
        _promise: void 0,
        _resolve: resolve,
        _reject: reject,
        _reason: reason,
        _wasAlreadyErroring: wasAlreadyErroring
      };
    });
    stream._pendingAbortRequest._promise = promise;
    if (!wasAlreadyErroring) {
      WritableStreamStartErroring(stream, reason);
    }
    return promise;
  }
  function WritableStreamClose(stream) {
    const state2 = stream._state;
    if (state2 === "closed" || state2 === "errored") {
      return promiseRejectedWith(new TypeError(`The stream (in ${state2} state) is not in the writable state and cannot be closed`));
    }
    const promise = newPromise((resolve, reject) => {
      const closeRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._closeRequest = closeRequest;
    });
    const writer = stream._writer;
    if (writer !== void 0 && stream._backpressure && state2 === "writable") {
      defaultWriterReadyPromiseResolve(writer);
    }
    WritableStreamDefaultControllerClose(stream._writableStreamController);
    return promise;
  }
  function WritableStreamAddWriteRequest(stream) {
    const promise = newPromise((resolve, reject) => {
      const writeRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._writeRequests.push(writeRequest);
    });
    return promise;
  }
  function WritableStreamDealWithRejection(stream, error) {
    const state2 = stream._state;
    if (state2 === "writable") {
      WritableStreamStartErroring(stream, error);
      return;
    }
    WritableStreamFinishErroring(stream);
  }
  function WritableStreamStartErroring(stream, reason) {
    const controller = stream._writableStreamController;
    stream._state = "erroring";
    stream._storedError = reason;
    const writer = stream._writer;
    if (writer !== void 0) {
      WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    }
    if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
      WritableStreamFinishErroring(stream);
    }
  }
  function WritableStreamFinishErroring(stream) {
    stream._state = "errored";
    stream._writableStreamController[ErrorSteps]();
    const storedError = stream._storedError;
    stream._writeRequests.forEach((writeRequest) => {
      writeRequest._reject(storedError);
    });
    stream._writeRequests = new SimpleQueue();
    if (stream._pendingAbortRequest === void 0) {
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }
    const abortRequest = stream._pendingAbortRequest;
    stream._pendingAbortRequest = void 0;
    if (abortRequest._wasAlreadyErroring) {
      abortRequest._reject(storedError);
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }
    const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
    uponPromise(promise, () => {
      abortRequest._resolve();
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    }, (reason) => {
      abortRequest._reject(reason);
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    });
  }
  function WritableStreamFinishInFlightWrite(stream) {
    stream._inFlightWriteRequest._resolve(void 0);
    stream._inFlightWriteRequest = void 0;
  }
  function WritableStreamFinishInFlightWriteWithError(stream, error) {
    stream._inFlightWriteRequest._reject(error);
    stream._inFlightWriteRequest = void 0;
    WritableStreamDealWithRejection(stream, error);
  }
  function WritableStreamFinishInFlightClose(stream) {
    stream._inFlightCloseRequest._resolve(void 0);
    stream._inFlightCloseRequest = void 0;
    const state2 = stream._state;
    if (state2 === "erroring") {
      stream._storedError = void 0;
      if (stream._pendingAbortRequest !== void 0) {
        stream._pendingAbortRequest._resolve();
        stream._pendingAbortRequest = void 0;
      }
    }
    stream._state = "closed";
    const writer = stream._writer;
    if (writer !== void 0) {
      defaultWriterClosedPromiseResolve(writer);
    }
  }
  function WritableStreamFinishInFlightCloseWithError(stream, error) {
    stream._inFlightCloseRequest._reject(error);
    stream._inFlightCloseRequest = void 0;
    if (stream._pendingAbortRequest !== void 0) {
      stream._pendingAbortRequest._reject(error);
      stream._pendingAbortRequest = void 0;
    }
    WritableStreamDealWithRejection(stream, error);
  }
  function WritableStreamCloseQueuedOrInFlight(stream) {
    if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
      return false;
    }
    return true;
  }
  function WritableStreamHasOperationMarkedInFlight(stream) {
    if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
      return false;
    }
    return true;
  }
  function WritableStreamMarkCloseRequestInFlight(stream) {
    stream._inFlightCloseRequest = stream._closeRequest;
    stream._closeRequest = void 0;
  }
  function WritableStreamMarkFirstWriteRequestInFlight(stream) {
    stream._inFlightWriteRequest = stream._writeRequests.shift();
  }
  function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    if (stream._closeRequest !== void 0) {
      stream._closeRequest._reject(stream._storedError);
      stream._closeRequest = void 0;
    }
    const writer = stream._writer;
    if (writer !== void 0) {
      defaultWriterClosedPromiseReject(writer, stream._storedError);
    }
  }
  function WritableStreamUpdateBackpressure(stream, backpressure) {
    const writer = stream._writer;
    if (writer !== void 0 && backpressure !== stream._backpressure) {
      if (backpressure) {
        defaultWriterReadyPromiseReset(writer);
      } else {
        defaultWriterReadyPromiseResolve(writer);
      }
    }
    stream._backpressure = backpressure;
  }
  var WritableStreamDefaultWriter = class {
    constructor(stream) {
      assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
      assertWritableStream(stream, "First parameter");
      if (IsWritableStreamLocked(stream)) {
        throw new TypeError("This stream has already been locked for exclusive writing by another writer");
      }
      this._ownerWritableStream = stream;
      stream._writer = this;
      const state2 = stream._state;
      if (state2 === "writable") {
        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
          defaultWriterReadyPromiseInitialize(this);
        } else {
          defaultWriterReadyPromiseInitializeAsResolved(this);
        }
        defaultWriterClosedPromiseInitialize(this);
      } else if (state2 === "erroring") {
        defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
        defaultWriterClosedPromiseInitialize(this);
      } else if (state2 === "closed") {
        defaultWriterReadyPromiseInitializeAsResolved(this);
        defaultWriterClosedPromiseInitializeAsResolved(this);
      } else {
        const storedError = stream._storedError;
        defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
        defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
      }
    }
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
     * the writer’s lock is released before the stream finishes closing.
     */
    get closed() {
      if (!IsWritableStreamDefaultWriter(this)) {
        return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
      }
      return this._closedPromise;
    }
    /**
     * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
     * A producer can use this information to determine the right amount of data to write.
     *
     * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
     * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
     * the writer’s lock is released.
     */
    get desiredSize() {
      if (!IsWritableStreamDefaultWriter(this)) {
        throw defaultWriterBrandCheckException("desiredSize");
      }
      if (this._ownerWritableStream === void 0) {
        throw defaultWriterLockException("desiredSize");
      }
      return WritableStreamDefaultWriterGetDesiredSize(this);
    }
    /**
     * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
     * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
     * back to zero or below, the getter will return a new promise that stays pending until the next transition.
     *
     * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
     * rejected.
     */
    get ready() {
      if (!IsWritableStreamDefaultWriter(this)) {
        return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
      }
      return this._readyPromise;
    }
    /**
     * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
     */
    abort(reason = void 0) {
      if (!IsWritableStreamDefaultWriter(this)) {
        return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
      }
      if (this._ownerWritableStream === void 0) {
        return promiseRejectedWith(defaultWriterLockException("abort"));
      }
      return WritableStreamDefaultWriterAbort(this, reason);
    }
    /**
     * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
     */
    close() {
      if (!IsWritableStreamDefaultWriter(this)) {
        return promiseRejectedWith(defaultWriterBrandCheckException("close"));
      }
      const stream = this._ownerWritableStream;
      if (stream === void 0) {
        return promiseRejectedWith(defaultWriterLockException("close"));
      }
      if (WritableStreamCloseQueuedOrInFlight(stream)) {
        return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
      }
      return WritableStreamDefaultWriterClose(this);
    }
    /**
     * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
     * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
     * now on; otherwise, the writer will appear closed.
     *
     * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
     * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
     * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
     * other producers from writing in an interleaved manner.
     */
    releaseLock() {
      if (!IsWritableStreamDefaultWriter(this)) {
        throw defaultWriterBrandCheckException("releaseLock");
      }
      const stream = this._ownerWritableStream;
      if (stream === void 0) {
        return;
      }
      WritableStreamDefaultWriterRelease(this);
    }
    write(chunk = void 0) {
      if (!IsWritableStreamDefaultWriter(this)) {
        return promiseRejectedWith(defaultWriterBrandCheckException("write"));
      }
      if (this._ownerWritableStream === void 0) {
        return promiseRejectedWith(defaultWriterLockException("write to"));
      }
      return WritableStreamDefaultWriterWrite(this, chunk);
    }
  };
  Object.defineProperties(WritableStreamDefaultWriter.prototype, {
    abort: { enumerable: true },
    close: { enumerable: true },
    releaseLock: { enumerable: true },
    write: { enumerable: true },
    closed: { enumerable: true },
    desiredSize: { enumerable: true },
    ready: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
      value: "WritableStreamDefaultWriter",
      configurable: true
    });
  }
  function IsWritableStreamDefaultWriter(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_ownerWritableStream")) {
      return false;
    }
    return x instanceof WritableStreamDefaultWriter;
  }
  function WritableStreamDefaultWriterAbort(writer, reason) {
    const stream = writer._ownerWritableStream;
    return WritableStreamAbort(stream, reason);
  }
  function WritableStreamDefaultWriterClose(writer) {
    const stream = writer._ownerWritableStream;
    return WritableStreamClose(stream);
  }
  function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    const stream = writer._ownerWritableStream;
    const state2 = stream._state;
    if (WritableStreamCloseQueuedOrInFlight(stream) || state2 === "closed") {
      return promiseResolvedWith(void 0);
    }
    if (state2 === "errored") {
      return promiseRejectedWith(stream._storedError);
    }
    return WritableStreamDefaultWriterClose(writer);
  }
  function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    if (writer._closedPromiseState === "pending") {
      defaultWriterClosedPromiseReject(writer, error);
    } else {
      defaultWriterClosedPromiseResetToRejected(writer, error);
    }
  }
  function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    if (writer._readyPromiseState === "pending") {
      defaultWriterReadyPromiseReject(writer, error);
    } else {
      defaultWriterReadyPromiseResetToRejected(writer, error);
    }
  }
  function WritableStreamDefaultWriterGetDesiredSize(writer) {
    const stream = writer._ownerWritableStream;
    const state2 = stream._state;
    if (state2 === "errored" || state2 === "erroring") {
      return null;
    }
    if (state2 === "closed") {
      return 0;
    }
    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
  }
  function WritableStreamDefaultWriterRelease(writer) {
    const stream = writer._ownerWritableStream;
    const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
    WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
    stream._writer = void 0;
    writer._ownerWritableStream = void 0;
  }
  function WritableStreamDefaultWriterWrite(writer, chunk) {
    const stream = writer._ownerWritableStream;
    const controller = stream._writableStreamController;
    const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
    if (stream !== writer._ownerWritableStream) {
      return promiseRejectedWith(defaultWriterLockException("write to"));
    }
    const state2 = stream._state;
    if (state2 === "errored") {
      return promiseRejectedWith(stream._storedError);
    }
    if (WritableStreamCloseQueuedOrInFlight(stream) || state2 === "closed") {
      return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
    }
    if (state2 === "erroring") {
      return promiseRejectedWith(stream._storedError);
    }
    const promise = WritableStreamAddWriteRequest(stream);
    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    return promise;
  }
  var closeSentinel = {};
  var WritableStreamDefaultController = class {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    /**
     * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
     *
     * @deprecated
     *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
     *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
     */
    get abortReason() {
      if (!IsWritableStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException$2("abortReason");
      }
      return this._abortReason;
    }
    /**
     * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
     */
    get signal() {
      if (!IsWritableStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException$2("signal");
      }
      if (this._abortController === void 0) {
        throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
      }
      return this._abortController.signal;
    }
    /**
     * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
     *
     * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
     * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
     * normal lifecycle of interactions with the underlying sink.
     */
    error(e = void 0) {
      if (!IsWritableStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException$2("error");
      }
      const state2 = this._controlledWritableStream._state;
      if (state2 !== "writable") {
        return;
      }
      WritableStreamDefaultControllerError(this, e);
    }
    /** @internal */
    [AbortSteps](reason) {
      const result = this._abortAlgorithm(reason);
      WritableStreamDefaultControllerClearAlgorithms(this);
      return result;
    }
    /** @internal */
    [ErrorSteps]() {
      ResetQueue(this);
    }
  };
  Object.defineProperties(WritableStreamDefaultController.prototype, {
    abortReason: { enumerable: true },
    signal: { enumerable: true },
    error: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
      value: "WritableStreamDefaultController",
      configurable: true
    });
  }
  function IsWritableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_controlledWritableStream")) {
      return false;
    }
    return x instanceof WritableStreamDefaultController;
  }
  function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
    controller._controlledWritableStream = stream;
    stream._writableStreamController = controller;
    controller._queue = void 0;
    controller._queueTotalSize = void 0;
    ResetQueue(controller);
    controller._abortReason = void 0;
    controller._abortController = createAbortController();
    controller._started = false;
    controller._strategySizeAlgorithm = sizeAlgorithm;
    controller._strategyHWM = highWaterMark;
    controller._writeAlgorithm = writeAlgorithm;
    controller._closeAlgorithm = closeAlgorithm;
    controller._abortAlgorithm = abortAlgorithm;
    const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    WritableStreamUpdateBackpressure(stream, backpressure);
    const startResult = startAlgorithm();
    const startPromise = promiseResolvedWith(startResult);
    uponPromise(startPromise, () => {
      controller._started = true;
      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, (r) => {
      controller._started = true;
      WritableStreamDealWithRejection(stream, r);
    });
  }
  function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
    const controller = Object.create(WritableStreamDefaultController.prototype);
    let startAlgorithm = () => void 0;
    let writeAlgorithm = () => promiseResolvedWith(void 0);
    let closeAlgorithm = () => promiseResolvedWith(void 0);
    let abortAlgorithm = () => promiseResolvedWith(void 0);
    if (underlyingSink.start !== void 0) {
      startAlgorithm = () => underlyingSink.start(controller);
    }
    if (underlyingSink.write !== void 0) {
      writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
    }
    if (underlyingSink.close !== void 0) {
      closeAlgorithm = () => underlyingSink.close();
    }
    if (underlyingSink.abort !== void 0) {
      abortAlgorithm = (reason) => underlyingSink.abort(reason);
    }
    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
  }
  function WritableStreamDefaultControllerClearAlgorithms(controller) {
    controller._writeAlgorithm = void 0;
    controller._closeAlgorithm = void 0;
    controller._abortAlgorithm = void 0;
    controller._strategySizeAlgorithm = void 0;
  }
  function WritableStreamDefaultControllerClose(controller) {
    EnqueueValueWithSize(controller, closeSentinel, 0);
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }
  function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    try {
      return controller._strategySizeAlgorithm(chunk);
    } catch (chunkSizeE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
      return 1;
    }
  }
  function WritableStreamDefaultControllerGetDesiredSize(controller) {
    return controller._strategyHWM - controller._queueTotalSize;
  }
  function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
    try {
      EnqueueValueWithSize(controller, chunk, chunkSize);
    } catch (enqueueE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
      return;
    }
    const stream = controller._controlledWritableStream;
    if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
      const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }
  function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    const stream = controller._controlledWritableStream;
    if (!controller._started) {
      return;
    }
    if (stream._inFlightWriteRequest !== void 0) {
      return;
    }
    const state2 = stream._state;
    if (state2 === "erroring") {
      WritableStreamFinishErroring(stream);
      return;
    }
    if (controller._queue.length === 0) {
      return;
    }
    const value2 = PeekQueueValue(controller);
    if (value2 === closeSentinel) {
      WritableStreamDefaultControllerProcessClose(controller);
    } else {
      WritableStreamDefaultControllerProcessWrite(controller, value2);
    }
  }
  function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    if (controller._controlledWritableStream._state === "writable") {
      WritableStreamDefaultControllerError(controller, error);
    }
  }
  function WritableStreamDefaultControllerProcessClose(controller) {
    const stream = controller._controlledWritableStream;
    WritableStreamMarkCloseRequestInFlight(stream);
    DequeueValue(controller);
    const sinkClosePromise = controller._closeAlgorithm();
    WritableStreamDefaultControllerClearAlgorithms(controller);
    uponPromise(sinkClosePromise, () => {
      WritableStreamFinishInFlightClose(stream);
    }, (reason) => {
      WritableStreamFinishInFlightCloseWithError(stream, reason);
    });
  }
  function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    const stream = controller._controlledWritableStream;
    WritableStreamMarkFirstWriteRequestInFlight(stream);
    const sinkWritePromise = controller._writeAlgorithm(chunk);
    uponPromise(sinkWritePromise, () => {
      WritableStreamFinishInFlightWrite(stream);
      const state2 = stream._state;
      DequeueValue(controller);
      if (!WritableStreamCloseQueuedOrInFlight(stream) && state2 === "writable") {
        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
      }
      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, (reason) => {
      if (stream._state === "writable") {
        WritableStreamDefaultControllerClearAlgorithms(controller);
      }
      WritableStreamFinishInFlightWriteWithError(stream, reason);
    });
  }
  function WritableStreamDefaultControllerGetBackpressure(controller) {
    const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
    return desiredSize <= 0;
  }
  function WritableStreamDefaultControllerError(controller, error) {
    const stream = controller._controlledWritableStream;
    WritableStreamDefaultControllerClearAlgorithms(controller);
    WritableStreamStartErroring(stream, error);
  }
  function streamBrandCheckException$2(name) {
    return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
  }
  function defaultControllerBrandCheckException$2(name) {
    return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
  }
  function defaultWriterBrandCheckException(name) {
    return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
  }
  function defaultWriterLockException(name) {
    return new TypeError("Cannot " + name + " a stream using a released writer");
  }
  function defaultWriterClosedPromiseInitialize(writer) {
    writer._closedPromise = newPromise((resolve, reject) => {
      writer._closedPromise_resolve = resolve;
      writer._closedPromise_reject = reject;
      writer._closedPromiseState = "pending";
    });
  }
  function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    defaultWriterClosedPromiseInitialize(writer);
    defaultWriterClosedPromiseReject(writer, reason);
  }
  function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    defaultWriterClosedPromiseInitialize(writer);
    defaultWriterClosedPromiseResolve(writer);
  }
  function defaultWriterClosedPromiseReject(writer, reason) {
    if (writer._closedPromise_reject === void 0) {
      return;
    }
    setPromiseIsHandledToTrue(writer._closedPromise);
    writer._closedPromise_reject(reason);
    writer._closedPromise_resolve = void 0;
    writer._closedPromise_reject = void 0;
    writer._closedPromiseState = "rejected";
  }
  function defaultWriterClosedPromiseResetToRejected(writer, reason) {
    defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
  }
  function defaultWriterClosedPromiseResolve(writer) {
    if (writer._closedPromise_resolve === void 0) {
      return;
    }
    writer._closedPromise_resolve(void 0);
    writer._closedPromise_resolve = void 0;
    writer._closedPromise_reject = void 0;
    writer._closedPromiseState = "resolved";
  }
  function defaultWriterReadyPromiseInitialize(writer) {
    writer._readyPromise = newPromise((resolve, reject) => {
      writer._readyPromise_resolve = resolve;
      writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = "pending";
  }
  function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
    defaultWriterReadyPromiseInitialize(writer);
    defaultWriterReadyPromiseReject(writer, reason);
  }
  function defaultWriterReadyPromiseInitializeAsResolved(writer) {
    defaultWriterReadyPromiseInitialize(writer);
    defaultWriterReadyPromiseResolve(writer);
  }
  function defaultWriterReadyPromiseReject(writer, reason) {
    if (writer._readyPromise_reject === void 0) {
      return;
    }
    setPromiseIsHandledToTrue(writer._readyPromise);
    writer._readyPromise_reject(reason);
    writer._readyPromise_resolve = void 0;
    writer._readyPromise_reject = void 0;
    writer._readyPromiseState = "rejected";
  }
  function defaultWriterReadyPromiseReset(writer) {
    defaultWriterReadyPromiseInitialize(writer);
  }
  function defaultWriterReadyPromiseResetToRejected(writer, reason) {
    defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
  }
  function defaultWriterReadyPromiseResolve(writer) {
    if (writer._readyPromise_resolve === void 0) {
      return;
    }
    writer._readyPromise_resolve(void 0);
    writer._readyPromise_resolve = void 0;
    writer._readyPromise_reject = void 0;
    writer._readyPromiseState = "fulfilled";
  }
  var NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
  function isDOMExceptionConstructor(ctor) {
    if (!(typeof ctor === "function" || typeof ctor === "object")) {
      return false;
    }
    try {
      new ctor();
      return true;
    } catch (_a) {
      return false;
    }
  }
  function createDOMExceptionPolyfill() {
    const ctor = function DOMException2(message, name) {
      this.message = message || "";
      this.name = name || "Error";
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    };
    ctor.prototype = Object.create(Error.prototype);
    Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
    return ctor;
  }
  var DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
  function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
    const reader = AcquireReadableStreamDefaultReader(source);
    const writer = AcquireWritableStreamDefaultWriter(dest);
    source._disturbed = true;
    let shuttingDown = false;
    let currentWrite = promiseResolvedWith(void 0);
    return newPromise((resolve, reject) => {
      let abortAlgorithm;
      if (signal !== void 0) {
        abortAlgorithm = () => {
          const error = new DOMException$1("Aborted", "AbortError");
          const actions = [];
          if (!preventAbort) {
            actions.push(() => {
              if (dest._state === "writable") {
                return WritableStreamAbort(dest, error);
              }
              return promiseResolvedWith(void 0);
            });
          }
          if (!preventCancel) {
            actions.push(() => {
              if (source._state === "readable") {
                return ReadableStreamCancel(source, error);
              }
              return promiseResolvedWith(void 0);
            });
          }
          shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error);
        };
        if (signal.aborted) {
          abortAlgorithm();
          return;
        }
        signal.addEventListener("abort", abortAlgorithm);
      }
      function pipeLoop() {
        return newPromise((resolveLoop, rejectLoop) => {
          function next(done) {
            if (done) {
              resolveLoop();
            } else {
              PerformPromiseThen(pipeStep(), next, rejectLoop);
            }
          }
          next(false);
        });
      }
      function pipeStep() {
        if (shuttingDown) {
          return promiseResolvedWith(true);
        }
        return PerformPromiseThen(writer._readyPromise, () => {
          return newPromise((resolveRead, rejectRead) => {
            ReadableStreamDefaultReaderRead(reader, {
              _chunkSteps: (chunk) => {
                currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop);
                resolveRead(false);
              },
              _closeSteps: () => resolveRead(true),
              _errorSteps: rejectRead
            });
          });
        });
      }
      isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
        if (!preventAbort) {
          shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
        } else {
          shutdown(true, storedError);
        }
      });
      isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
        if (!preventCancel) {
          shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
        } else {
          shutdown(true, storedError);
        }
      });
      isOrBecomesClosed(source, reader._closedPromise, () => {
        if (!preventClose) {
          shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
        } else {
          shutdown();
        }
      });
      if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
        const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
        if (!preventCancel) {
          shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
        } else {
          shutdown(true, destClosed);
        }
      }
      setPromiseIsHandledToTrue(pipeLoop());
      function waitForWritesToFinish() {
        const oldCurrentWrite = currentWrite;
        return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
      }
      function isOrBecomesErrored(stream, promise, action) {
        if (stream._state === "errored") {
          action(stream._storedError);
        } else {
          uponRejection(promise, action);
        }
      }
      function isOrBecomesClosed(stream, promise, action) {
        if (stream._state === "closed") {
          action();
        } else {
          uponFulfillment(promise, action);
        }
      }
      function shutdownWithAction(action, originalIsError, originalError) {
        if (shuttingDown) {
          return;
        }
        shuttingDown = true;
        if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
          uponFulfillment(waitForWritesToFinish(), doTheRest);
        } else {
          doTheRest();
        }
        function doTheRest() {
          uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
        }
      }
      function shutdown(isError2, error) {
        if (shuttingDown) {
          return;
        }
        shuttingDown = true;
        if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
          uponFulfillment(waitForWritesToFinish(), () => finalize(isError2, error));
        } else {
          finalize(isError2, error);
        }
      }
      function finalize(isError2, error) {
        WritableStreamDefaultWriterRelease(writer);
        ReadableStreamReaderGenericRelease(reader);
        if (signal !== void 0) {
          signal.removeEventListener("abort", abortAlgorithm);
        }
        if (isError2) {
          reject(error);
        } else {
          resolve(void 0);
        }
      }
    });
  }
  var ReadableStreamDefaultController = class {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    /**
     * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
     * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
     */
    get desiredSize() {
      if (!IsReadableStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException$1("desiredSize");
      }
      return ReadableStreamDefaultControllerGetDesiredSize(this);
    }
    /**
     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
     * the stream, but once those are read, the stream will become closed.
     */
    close() {
      if (!IsReadableStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException$1("close");
      }
      if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
        throw new TypeError("The stream is not in a state that permits close");
      }
      ReadableStreamDefaultControllerClose(this);
    }
    enqueue(chunk = void 0) {
      if (!IsReadableStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException$1("enqueue");
      }
      if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
        throw new TypeError("The stream is not in a state that permits enqueue");
      }
      return ReadableStreamDefaultControllerEnqueue(this, chunk);
    }
    /**
     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
     */
    error(e = void 0) {
      if (!IsReadableStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException$1("error");
      }
      ReadableStreamDefaultControllerError(this, e);
    }
    /** @internal */
    [CancelSteps](reason) {
      ResetQueue(this);
      const result = this._cancelAlgorithm(reason);
      ReadableStreamDefaultControllerClearAlgorithms(this);
      return result;
    }
    /** @internal */
    [PullSteps](readRequest) {
      const stream = this._controlledReadableStream;
      if (this._queue.length > 0) {
        const chunk = DequeueValue(this);
        if (this._closeRequested && this._queue.length === 0) {
          ReadableStreamDefaultControllerClearAlgorithms(this);
          ReadableStreamClose(stream);
        } else {
          ReadableStreamDefaultControllerCallPullIfNeeded(this);
        }
        readRequest._chunkSteps(chunk);
      } else {
        ReadableStreamAddReadRequest(stream, readRequest);
        ReadableStreamDefaultControllerCallPullIfNeeded(this);
      }
    }
  };
  Object.defineProperties(ReadableStreamDefaultController.prototype, {
    close: { enumerable: true },
    enqueue: { enumerable: true },
    error: { enumerable: true },
    desiredSize: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
      value: "ReadableStreamDefaultController",
      configurable: true
    });
  }
  function IsReadableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_controlledReadableStream")) {
      return false;
    }
    return x instanceof ReadableStreamDefaultController;
  }
  function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
    if (!shouldPull) {
      return;
    }
    if (controller._pulling) {
      controller._pullAgain = true;
      return;
    }
    controller._pulling = true;
    const pullPromise = controller._pullAlgorithm();
    uponPromise(pullPromise, () => {
      controller._pulling = false;
      if (controller._pullAgain) {
        controller._pullAgain = false;
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }
    }, (e) => {
      ReadableStreamDefaultControllerError(controller, e);
    });
  }
  function ReadableStreamDefaultControllerShouldCallPull(controller) {
    const stream = controller._controlledReadableStream;
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
      return false;
    }
    if (!controller._started) {
      return false;
    }
    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }
    const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
      return true;
    }
    return false;
  }
  function ReadableStreamDefaultControllerClearAlgorithms(controller) {
    controller._pullAlgorithm = void 0;
    controller._cancelAlgorithm = void 0;
    controller._strategySizeAlgorithm = void 0;
  }
  function ReadableStreamDefaultControllerClose(controller) {
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
      return;
    }
    const stream = controller._controlledReadableStream;
    controller._closeRequested = true;
    if (controller._queue.length === 0) {
      ReadableStreamDefaultControllerClearAlgorithms(controller);
      ReadableStreamClose(stream);
    }
  }
  function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
      return;
    }
    const stream = controller._controlledReadableStream;
    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
      ReadableStreamFulfillReadRequest(stream, chunk, false);
    } else {
      let chunkSize;
      try {
        chunkSize = controller._strategySizeAlgorithm(chunk);
      } catch (chunkSizeE) {
        ReadableStreamDefaultControllerError(controller, chunkSizeE);
        throw chunkSizeE;
      }
      try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
      } catch (enqueueE) {
        ReadableStreamDefaultControllerError(controller, enqueueE);
        throw enqueueE;
      }
    }
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
  }
  function ReadableStreamDefaultControllerError(controller, e) {
    const stream = controller._controlledReadableStream;
    if (stream._state !== "readable") {
      return;
    }
    ResetQueue(controller);
    ReadableStreamDefaultControllerClearAlgorithms(controller);
    ReadableStreamError(stream, e);
  }
  function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    const state2 = controller._controlledReadableStream._state;
    if (state2 === "errored") {
      return null;
    }
    if (state2 === "closed") {
      return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
  }
  function ReadableStreamDefaultControllerHasBackpressure(controller) {
    if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
      return false;
    }
    return true;
  }
  function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
    const state2 = controller._controlledReadableStream._state;
    if (!controller._closeRequested && state2 === "readable") {
      return true;
    }
    return false;
  }
  function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
    controller._controlledReadableStream = stream;
    controller._queue = void 0;
    controller._queueTotalSize = void 0;
    ResetQueue(controller);
    controller._started = false;
    controller._closeRequested = false;
    controller._pullAgain = false;
    controller._pulling = false;
    controller._strategySizeAlgorithm = sizeAlgorithm;
    controller._strategyHWM = highWaterMark;
    controller._pullAlgorithm = pullAlgorithm;
    controller._cancelAlgorithm = cancelAlgorithm;
    stream._readableStreamController = controller;
    const startResult = startAlgorithm();
    uponPromise(promiseResolvedWith(startResult), () => {
      controller._started = true;
      ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }, (r) => {
      ReadableStreamDefaultControllerError(controller, r);
    });
  }
  function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
    const controller = Object.create(ReadableStreamDefaultController.prototype);
    let startAlgorithm = () => void 0;
    let pullAlgorithm = () => promiseResolvedWith(void 0);
    let cancelAlgorithm = () => promiseResolvedWith(void 0);
    if (underlyingSource.start !== void 0) {
      startAlgorithm = () => underlyingSource.start(controller);
    }
    if (underlyingSource.pull !== void 0) {
      pullAlgorithm = () => underlyingSource.pull(controller);
    }
    if (underlyingSource.cancel !== void 0) {
      cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
    }
    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
  }
  function defaultControllerBrandCheckException$1(name) {
    return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
  }
  function ReadableStreamTee(stream, cloneForBranch2) {
    if (IsReadableByteStreamController(stream._readableStreamController)) {
      return ReadableByteStreamTee(stream);
    }
    return ReadableStreamDefaultTee(stream);
  }
  function ReadableStreamDefaultTee(stream, cloneForBranch2) {
    const reader = AcquireReadableStreamDefaultReader(stream);
    let reading = false;
    let readAgain = false;
    let canceled1 = false;
    let canceled2 = false;
    let reason1;
    let reason2;
    let branch1;
    let branch2;
    let resolveCancelPromise;
    const cancelPromise = newPromise((resolve) => {
      resolveCancelPromise = resolve;
    });
    function pullAlgorithm() {
      if (reading) {
        readAgain = true;
        return promiseResolvedWith(void 0);
      }
      reading = true;
      const readRequest = {
        _chunkSteps: (chunk) => {
          queueMicrotask(() => {
            readAgain = false;
            const chunk1 = chunk;
            const chunk2 = chunk;
            if (!canceled1) {
              ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
            }
            if (!canceled2) {
              ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
            }
            reading = false;
            if (readAgain) {
              pullAlgorithm();
            }
          });
        },
        _closeSteps: () => {
          reading = false;
          if (!canceled1) {
            ReadableStreamDefaultControllerClose(branch1._readableStreamController);
          }
          if (!canceled2) {
            ReadableStreamDefaultControllerClose(branch2._readableStreamController);
          }
          if (!canceled1 || !canceled2) {
            resolveCancelPromise(void 0);
          }
        },
        _errorSteps: () => {
          reading = false;
        }
      };
      ReadableStreamDefaultReaderRead(reader, readRequest);
      return promiseResolvedWith(void 0);
    }
    function cancel1Algorithm(reason) {
      canceled1 = true;
      reason1 = reason;
      if (canceled2) {
        const compositeReason = CreateArrayFromList([reason1, reason2]);
        const cancelResult = ReadableStreamCancel(stream, compositeReason);
        resolveCancelPromise(cancelResult);
      }
      return cancelPromise;
    }
    function cancel2Algorithm(reason) {
      canceled2 = true;
      reason2 = reason;
      if (canceled1) {
        const compositeReason = CreateArrayFromList([reason1, reason2]);
        const cancelResult = ReadableStreamCancel(stream, compositeReason);
        resolveCancelPromise(cancelResult);
      }
      return cancelPromise;
    }
    function startAlgorithm() {
    }
    branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
    branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
    uponRejection(reader._closedPromise, (r) => {
      ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
      ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
      if (!canceled1 || !canceled2) {
        resolveCancelPromise(void 0);
      }
    });
    return [branch1, branch2];
  }
  function ReadableByteStreamTee(stream) {
    let reader = AcquireReadableStreamDefaultReader(stream);
    let reading = false;
    let readAgainForBranch1 = false;
    let readAgainForBranch2 = false;
    let canceled1 = false;
    let canceled2 = false;
    let reason1;
    let reason2;
    let branch1;
    let branch2;
    let resolveCancelPromise;
    const cancelPromise = newPromise((resolve) => {
      resolveCancelPromise = resolve;
    });
    function forwardReaderError(thisReader) {
      uponRejection(thisReader._closedPromise, (r) => {
        if (thisReader !== reader) {
          return;
        }
        ReadableByteStreamControllerError(branch1._readableStreamController, r);
        ReadableByteStreamControllerError(branch2._readableStreamController, r);
        if (!canceled1 || !canceled2) {
          resolveCancelPromise(void 0);
        }
      });
    }
    function pullWithDefaultReader() {
      if (IsReadableStreamBYOBReader(reader)) {
        ReadableStreamReaderGenericRelease(reader);
        reader = AcquireReadableStreamDefaultReader(stream);
        forwardReaderError(reader);
      }
      const readRequest = {
        _chunkSteps: (chunk) => {
          queueMicrotask(() => {
            readAgainForBranch1 = false;
            readAgainForBranch2 = false;
            const chunk1 = chunk;
            let chunk2 = chunk;
            if (!canceled1 && !canceled2) {
              try {
                chunk2 = CloneAsUint8Array(chunk);
              } catch (cloneE) {
                ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                return;
              }
            }
            if (!canceled1) {
              ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
            }
            if (!canceled2) {
              ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
            }
            reading = false;
            if (readAgainForBranch1) {
              pull1Algorithm();
            } else if (readAgainForBranch2) {
              pull2Algorithm();
            }
          });
        },
        _closeSteps: () => {
          reading = false;
          if (!canceled1) {
            ReadableByteStreamControllerClose(branch1._readableStreamController);
          }
          if (!canceled2) {
            ReadableByteStreamControllerClose(branch2._readableStreamController);
          }
          if (branch1._readableStreamController._pendingPullIntos.length > 0) {
            ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
          }
          if (branch2._readableStreamController._pendingPullIntos.length > 0) {
            ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
          }
          if (!canceled1 || !canceled2) {
            resolveCancelPromise(void 0);
          }
        },
        _errorSteps: () => {
          reading = false;
        }
      };
      ReadableStreamDefaultReaderRead(reader, readRequest);
    }
    function pullWithBYOBReader(view, forBranch2) {
      if (IsReadableStreamDefaultReader(reader)) {
        ReadableStreamReaderGenericRelease(reader);
        reader = AcquireReadableStreamBYOBReader(stream);
        forwardReaderError(reader);
      }
      const byobBranch = forBranch2 ? branch2 : branch1;
      const otherBranch = forBranch2 ? branch1 : branch2;
      const readIntoRequest = {
        _chunkSteps: (chunk) => {
          queueMicrotask(() => {
            readAgainForBranch1 = false;
            readAgainForBranch2 = false;
            const byobCanceled = forBranch2 ? canceled2 : canceled1;
            const otherCanceled = forBranch2 ? canceled1 : canceled2;
            if (!otherCanceled) {
              let clonedChunk;
              try {
                clonedChunk = CloneAsUint8Array(chunk);
              } catch (cloneE) {
                ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                return;
              }
              if (!byobCanceled) {
                ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
              }
              ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
            } else if (!byobCanceled) {
              ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
            }
            reading = false;
            if (readAgainForBranch1) {
              pull1Algorithm();
            } else if (readAgainForBranch2) {
              pull2Algorithm();
            }
          });
        },
        _closeSteps: (chunk) => {
          reading = false;
          const byobCanceled = forBranch2 ? canceled2 : canceled1;
          const otherCanceled = forBranch2 ? canceled1 : canceled2;
          if (!byobCanceled) {
            ReadableByteStreamControllerClose(byobBranch._readableStreamController);
          }
          if (!otherCanceled) {
            ReadableByteStreamControllerClose(otherBranch._readableStreamController);
          }
          if (chunk !== void 0) {
            if (!byobCanceled) {
              ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
            }
            if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
              ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
            }
          }
          if (!byobCanceled || !otherCanceled) {
            resolveCancelPromise(void 0);
          }
        },
        _errorSteps: () => {
          reading = false;
        }
      };
      ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
    }
    function pull1Algorithm() {
      if (reading) {
        readAgainForBranch1 = true;
        return promiseResolvedWith(void 0);
      }
      reading = true;
      const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
      if (byobRequest === null) {
        pullWithDefaultReader();
      } else {
        pullWithBYOBReader(byobRequest._view, false);
      }
      return promiseResolvedWith(void 0);
    }
    function pull2Algorithm() {
      if (reading) {
        readAgainForBranch2 = true;
        return promiseResolvedWith(void 0);
      }
      reading = true;
      const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
      if (byobRequest === null) {
        pullWithDefaultReader();
      } else {
        pullWithBYOBReader(byobRequest._view, true);
      }
      return promiseResolvedWith(void 0);
    }
    function cancel1Algorithm(reason) {
      canceled1 = true;
      reason1 = reason;
      if (canceled2) {
        const compositeReason = CreateArrayFromList([reason1, reason2]);
        const cancelResult = ReadableStreamCancel(stream, compositeReason);
        resolveCancelPromise(cancelResult);
      }
      return cancelPromise;
    }
    function cancel2Algorithm(reason) {
      canceled2 = true;
      reason2 = reason;
      if (canceled1) {
        const compositeReason = CreateArrayFromList([reason1, reason2]);
        const cancelResult = ReadableStreamCancel(stream, compositeReason);
        resolveCancelPromise(cancelResult);
      }
      return cancelPromise;
    }
    function startAlgorithm() {
      return;
    }
    branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
    branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
    forwardReaderError(reader);
    return [branch1, branch2];
  }
  function convertUnderlyingDefaultOrByteSource(source, context) {
    assertDictionary(source, context);
    const original = source;
    const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
    const cancel = original === null || original === void 0 ? void 0 : original.cancel;
    const pull = original === null || original === void 0 ? void 0 : original.pull;
    const start = original === null || original === void 0 ? void 0 : original.start;
    const type = original === null || original === void 0 ? void 0 : original.type;
    return {
      autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
      cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
      pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
      start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
      type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
    };
  }
  function convertUnderlyingSourceCancelCallback(fn, original, context) {
    assertFunction(fn, context);
    return (reason) => promiseCall(fn, original, [reason]);
  }
  function convertUnderlyingSourcePullCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => promiseCall(fn, original, [controller]);
  }
  function convertUnderlyingSourceStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => reflectCall(fn, original, [controller]);
  }
  function convertReadableStreamType(type, context) {
    type = `${type}`;
    if (type !== "bytes") {
      throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
    }
    return type;
  }
  function convertReaderOptions(options, context) {
    assertDictionary(options, context);
    const mode = options === null || options === void 0 ? void 0 : options.mode;
    return {
      mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
    };
  }
  function convertReadableStreamReaderMode(mode, context) {
    mode = `${mode}`;
    if (mode !== "byob") {
      throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
    }
    return mode;
  }
  function convertIteratorOptions(options, context) {
    assertDictionary(options, context);
    const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    return { preventCancel: Boolean(preventCancel) };
  }
  function convertPipeOptions(options, context) {
    assertDictionary(options, context);
    const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
    const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
    const signal = options === null || options === void 0 ? void 0 : options.signal;
    if (signal !== void 0) {
      assertAbortSignal(signal, `${context} has member 'signal' that`);
    }
    return {
      preventAbort: Boolean(preventAbort),
      preventCancel: Boolean(preventCancel),
      preventClose: Boolean(preventClose),
      signal
    };
  }
  function assertAbortSignal(signal, context) {
    if (!isAbortSignal(signal)) {
      throw new TypeError(`${context} is not an AbortSignal.`);
    }
  }
  function convertReadableWritablePair(pair, context) {
    assertDictionary(pair, context);
    const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
    assertRequiredField(readable, "readable", "ReadableWritablePair");
    assertReadableStream(readable, `${context} has member 'readable' that`);
    const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
    assertRequiredField(writable, "writable", "ReadableWritablePair");
    assertWritableStream(writable, `${context} has member 'writable' that`);
    return { readable, writable };
  }
  var ReadableStream2 = class {
    constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
      if (rawUnderlyingSource === void 0) {
        rawUnderlyingSource = null;
      } else {
        assertObject(rawUnderlyingSource, "First parameter");
      }
      const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
      const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
      InitializeReadableStream(this);
      if (underlyingSource.type === "bytes") {
        if (strategy.size !== void 0) {
          throw new RangeError("The strategy for a byte stream cannot have a size function");
        }
        const highWaterMark = ExtractHighWaterMark(strategy, 0);
        SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
      } else {
        const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
        const highWaterMark = ExtractHighWaterMark(strategy, 1);
        SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
      }
    }
    /**
     * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
     */
    get locked() {
      if (!IsReadableStream(this)) {
        throw streamBrandCheckException$1("locked");
      }
      return IsReadableStreamLocked(this);
    }
    /**
     * Cancels the stream, signaling a loss of interest in the stream by a consumer.
     *
     * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
     * method, which might or might not use it.
     */
    cancel(reason = void 0) {
      if (!IsReadableStream(this)) {
        return promiseRejectedWith(streamBrandCheckException$1("cancel"));
      }
      if (IsReadableStreamLocked(this)) {
        return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
      }
      return ReadableStreamCancel(this, reason);
    }
    getReader(rawOptions = void 0) {
      if (!IsReadableStream(this)) {
        throw streamBrandCheckException$1("getReader");
      }
      const options = convertReaderOptions(rawOptions, "First parameter");
      if (options.mode === void 0) {
        return AcquireReadableStreamDefaultReader(this);
      }
      return AcquireReadableStreamBYOBReader(this);
    }
    pipeThrough(rawTransform, rawOptions = {}) {
      if (!IsReadableStream(this)) {
        throw streamBrandCheckException$1("pipeThrough");
      }
      assertRequiredArgument(rawTransform, 1, "pipeThrough");
      const transform = convertReadableWritablePair(rawTransform, "First parameter");
      const options = convertPipeOptions(rawOptions, "Second parameter");
      if (IsReadableStreamLocked(this)) {
        throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
      }
      if (IsWritableStreamLocked(transform.writable)) {
        throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
      }
      const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
      setPromiseIsHandledToTrue(promise);
      return transform.readable;
    }
    pipeTo(destination, rawOptions = {}) {
      if (!IsReadableStream(this)) {
        return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
      }
      if (destination === void 0) {
        return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
      }
      if (!IsWritableStream(destination)) {
        return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
      }
      let options;
      try {
        options = convertPipeOptions(rawOptions, "Second parameter");
      } catch (e) {
        return promiseRejectedWith(e);
      }
      if (IsReadableStreamLocked(this)) {
        return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
      }
      if (IsWritableStreamLocked(destination)) {
        return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
      }
      return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
    }
    /**
     * Tees this readable stream, returning a two-element array containing the two resulting branches as
     * new {@link ReadableStream} instances.
     *
     * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
     * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
     * propagated to the stream's underlying source.
     *
     * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
     * this could allow interference between the two branches.
     */
    tee() {
      if (!IsReadableStream(this)) {
        throw streamBrandCheckException$1("tee");
      }
      const branches = ReadableStreamTee(this);
      return CreateArrayFromList(branches);
    }
    values(rawOptions = void 0) {
      if (!IsReadableStream(this)) {
        throw streamBrandCheckException$1("values");
      }
      const options = convertIteratorOptions(rawOptions, "First parameter");
      return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
    }
  };
  Object.defineProperties(ReadableStream2.prototype, {
    cancel: { enumerable: true },
    getReader: { enumerable: true },
    pipeThrough: { enumerable: true },
    pipeTo: { enumerable: true },
    tee: { enumerable: true },
    values: { enumerable: true },
    locked: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.toStringTag, {
      value: "ReadableStream",
      configurable: true
    });
  }
  if (typeof SymbolPolyfill.asyncIterator === "symbol") {
    Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.asyncIterator, {
      value: ReadableStream2.prototype.values,
      writable: true,
      configurable: true
    });
  }
  function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
    const stream = Object.create(ReadableStream2.prototype);
    InitializeReadableStream(stream);
    const controller = Object.create(ReadableStreamDefaultController.prototype);
    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    return stream;
  }
  function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
    const stream = Object.create(ReadableStream2.prototype);
    InitializeReadableStream(stream);
    const controller = Object.create(ReadableByteStreamController.prototype);
    SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
    return stream;
  }
  function InitializeReadableStream(stream) {
    stream._state = "readable";
    stream._reader = void 0;
    stream._storedError = void 0;
    stream._disturbed = false;
  }
  function IsReadableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_readableStreamController")) {
      return false;
    }
    return x instanceof ReadableStream2;
  }
  function IsReadableStreamLocked(stream) {
    if (stream._reader === void 0) {
      return false;
    }
    return true;
  }
  function ReadableStreamCancel(stream, reason) {
    stream._disturbed = true;
    if (stream._state === "closed") {
      return promiseResolvedWith(void 0);
    }
    if (stream._state === "errored") {
      return promiseRejectedWith(stream._storedError);
    }
    ReadableStreamClose(stream);
    const reader = stream._reader;
    if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
      reader._readIntoRequests.forEach((readIntoRequest) => {
        readIntoRequest._closeSteps(void 0);
      });
      reader._readIntoRequests = new SimpleQueue();
    }
    const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
    return transformPromiseWith(sourceCancelPromise, noop);
  }
  function ReadableStreamClose(stream) {
    stream._state = "closed";
    const reader = stream._reader;
    if (reader === void 0) {
      return;
    }
    defaultReaderClosedPromiseResolve(reader);
    if (IsReadableStreamDefaultReader(reader)) {
      reader._readRequests.forEach((readRequest) => {
        readRequest._closeSteps();
      });
      reader._readRequests = new SimpleQueue();
    }
  }
  function ReadableStreamError(stream, e) {
    stream._state = "errored";
    stream._storedError = e;
    const reader = stream._reader;
    if (reader === void 0) {
      return;
    }
    defaultReaderClosedPromiseReject(reader, e);
    if (IsReadableStreamDefaultReader(reader)) {
      reader._readRequests.forEach((readRequest) => {
        readRequest._errorSteps(e);
      });
      reader._readRequests = new SimpleQueue();
    } else {
      reader._readIntoRequests.forEach((readIntoRequest) => {
        readIntoRequest._errorSteps(e);
      });
      reader._readIntoRequests = new SimpleQueue();
    }
  }
  function streamBrandCheckException$1(name) {
    return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
  }
  function convertQueuingStrategyInit(init7, context) {
    assertDictionary(init7, context);
    const highWaterMark = init7 === null || init7 === void 0 ? void 0 : init7.highWaterMark;
    assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
    return {
      highWaterMark: convertUnrestrictedDouble(highWaterMark)
    };
  }
  var byteLengthSizeFunction = (chunk) => {
    return chunk.byteLength;
  };
  try {
    Object.defineProperty(byteLengthSizeFunction, "name", {
      value: "size",
      configurable: true
    });
  } catch (_a) {
  }
  var ByteLengthQueuingStrategy = class {
    constructor(options) {
      assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
      options = convertQueuingStrategyInit(options, "First parameter");
      this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
    }
    /**
     * Returns the high water mark provided to the constructor.
     */
    get highWaterMark() {
      if (!IsByteLengthQueuingStrategy(this)) {
        throw byteLengthBrandCheckException("highWaterMark");
      }
      return this._byteLengthQueuingStrategyHighWaterMark;
    }
    /**
     * Measures the size of `chunk` by returning the value of its `byteLength` property.
     */
    get size() {
      if (!IsByteLengthQueuingStrategy(this)) {
        throw byteLengthBrandCheckException("size");
      }
      return byteLengthSizeFunction;
    }
  };
  Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
    highWaterMark: { enumerable: true },
    size: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
      value: "ByteLengthQueuingStrategy",
      configurable: true
    });
  }
  function byteLengthBrandCheckException(name) {
    return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
  }
  function IsByteLengthQueuingStrategy(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_byteLengthQueuingStrategyHighWaterMark")) {
      return false;
    }
    return x instanceof ByteLengthQueuingStrategy;
  }
  var countSizeFunction = () => {
    return 1;
  };
  try {
    Object.defineProperty(countSizeFunction, "name", {
      value: "size",
      configurable: true
    });
  } catch (_a) {
  }
  var CountQueuingStrategy = class {
    constructor(options) {
      assertRequiredArgument(options, 1, "CountQueuingStrategy");
      options = convertQueuingStrategyInit(options, "First parameter");
      this._countQueuingStrategyHighWaterMark = options.highWaterMark;
    }
    /**
     * Returns the high water mark provided to the constructor.
     */
    get highWaterMark() {
      if (!IsCountQueuingStrategy(this)) {
        throw countBrandCheckException("highWaterMark");
      }
      return this._countQueuingStrategyHighWaterMark;
    }
    /**
     * Measures the size of `chunk` by always returning 1.
     * This ensures that the total queue size is a count of the number of chunks in the queue.
     */
    get size() {
      if (!IsCountQueuingStrategy(this)) {
        throw countBrandCheckException("size");
      }
      return countSizeFunction;
    }
  };
  Object.defineProperties(CountQueuingStrategy.prototype, {
    highWaterMark: { enumerable: true },
    size: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
      value: "CountQueuingStrategy",
      configurable: true
    });
  }
  function countBrandCheckException(name) {
    return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
  }
  function IsCountQueuingStrategy(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_countQueuingStrategyHighWaterMark")) {
      return false;
    }
    return x instanceof CountQueuingStrategy;
  }
  function convertTransformer(original, context) {
    assertDictionary(original, context);
    const flush = original === null || original === void 0 ? void 0 : original.flush;
    const readableType = original === null || original === void 0 ? void 0 : original.readableType;
    const start = original === null || original === void 0 ? void 0 : original.start;
    const transform = original === null || original === void 0 ? void 0 : original.transform;
    const writableType = original === null || original === void 0 ? void 0 : original.writableType;
    return {
      flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
      readableType,
      start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
      transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
      writableType
    };
  }
  function convertTransformerFlushCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => promiseCall(fn, original, [controller]);
  }
  function convertTransformerStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => reflectCall(fn, original, [controller]);
  }
  function convertTransformerTransformCallback(fn, original, context) {
    assertFunction(fn, context);
    return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
  }
  var TransformStream2 = class {
    constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
      if (rawTransformer === void 0) {
        rawTransformer = null;
      }
      const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
      const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
      const transformer = convertTransformer(rawTransformer, "First parameter");
      if (transformer.readableType !== void 0) {
        throw new RangeError("Invalid readableType specified");
      }
      if (transformer.writableType !== void 0) {
        throw new RangeError("Invalid writableType specified");
      }
      const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
      const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
      const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
      const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
      let startPromise_resolve;
      const startPromise = newPromise((resolve) => {
        startPromise_resolve = resolve;
      });
      InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
      SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
      if (transformer.start !== void 0) {
        startPromise_resolve(transformer.start(this._transformStreamController));
      } else {
        startPromise_resolve(void 0);
      }
    }
    /**
     * The readable side of the transform stream.
     */
    get readable() {
      if (!IsTransformStream(this)) {
        throw streamBrandCheckException("readable");
      }
      return this._readable;
    }
    /**
     * The writable side of the transform stream.
     */
    get writable() {
      if (!IsTransformStream(this)) {
        throw streamBrandCheckException("writable");
      }
      return this._writable;
    }
  };
  Object.defineProperties(TransformStream2.prototype, {
    readable: { enumerable: true },
    writable: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(TransformStream2.prototype, SymbolPolyfill.toStringTag, {
      value: "TransformStream",
      configurable: true
    });
  }
  function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
    function startAlgorithm() {
      return startPromise;
    }
    function writeAlgorithm(chunk) {
      return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
    }
    function abortAlgorithm(reason) {
      return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
    }
    function closeAlgorithm() {
      return TransformStreamDefaultSinkCloseAlgorithm(stream);
    }
    stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
    function pullAlgorithm() {
      return TransformStreamDefaultSourcePullAlgorithm(stream);
    }
    function cancelAlgorithm(reason) {
      TransformStreamErrorWritableAndUnblockWrite(stream, reason);
      return promiseResolvedWith(void 0);
    }
    stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
    stream._backpressure = void 0;
    stream._backpressureChangePromise = void 0;
    stream._backpressureChangePromise_resolve = void 0;
    TransformStreamSetBackpressure(stream, true);
    stream._transformStreamController = void 0;
  }
  function IsTransformStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_transformStreamController")) {
      return false;
    }
    return x instanceof TransformStream2;
  }
  function TransformStreamError(stream, e) {
    ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
    TransformStreamErrorWritableAndUnblockWrite(stream, e);
  }
  function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
    TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
    WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
    if (stream._backpressure) {
      TransformStreamSetBackpressure(stream, false);
    }
  }
  function TransformStreamSetBackpressure(stream, backpressure) {
    if (stream._backpressureChangePromise !== void 0) {
      stream._backpressureChangePromise_resolve();
    }
    stream._backpressureChangePromise = newPromise((resolve) => {
      stream._backpressureChangePromise_resolve = resolve;
    });
    stream._backpressure = backpressure;
  }
  var TransformStreamDefaultController = class {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
    /**
     * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
     */
    get desiredSize() {
      if (!IsTransformStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException("desiredSize");
      }
      const readableController = this._controlledTransformStream._readable._readableStreamController;
      return ReadableStreamDefaultControllerGetDesiredSize(readableController);
    }
    enqueue(chunk = void 0) {
      if (!IsTransformStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException("enqueue");
      }
      TransformStreamDefaultControllerEnqueue(this, chunk);
    }
    /**
     * Errors both the readable side and the writable side of the controlled transform stream, making all future
     * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
     */
    error(reason = void 0) {
      if (!IsTransformStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException("error");
      }
      TransformStreamDefaultControllerError(this, reason);
    }
    /**
     * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
     * transformer only needs to consume a portion of the chunks written to the writable side.
     */
    terminate() {
      if (!IsTransformStreamDefaultController(this)) {
        throw defaultControllerBrandCheckException("terminate");
      }
      TransformStreamDefaultControllerTerminate(this);
    }
  };
  Object.defineProperties(TransformStreamDefaultController.prototype, {
    enqueue: { enumerable: true },
    error: { enumerable: true },
    terminate: { enumerable: true },
    desiredSize: { enumerable: true }
  });
  if (typeof SymbolPolyfill.toStringTag === "symbol") {
    Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
      value: "TransformStreamDefaultController",
      configurable: true
    });
  }
  function IsTransformStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, "_controlledTransformStream")) {
      return false;
    }
    return x instanceof TransformStreamDefaultController;
  }
  function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
    controller._controlledTransformStream = stream;
    stream._transformStreamController = controller;
    controller._transformAlgorithm = transformAlgorithm;
    controller._flushAlgorithm = flushAlgorithm;
  }
  function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
    const controller = Object.create(TransformStreamDefaultController.prototype);
    let transformAlgorithm = (chunk) => {
      try {
        TransformStreamDefaultControllerEnqueue(controller, chunk);
        return promiseResolvedWith(void 0);
      } catch (transformResultE) {
        return promiseRejectedWith(transformResultE);
      }
    };
    let flushAlgorithm = () => promiseResolvedWith(void 0);
    if (transformer.transform !== void 0) {
      transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
    }
    if (transformer.flush !== void 0) {
      flushAlgorithm = () => transformer.flush(controller);
    }
    SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
  }
  function TransformStreamDefaultControllerClearAlgorithms(controller) {
    controller._transformAlgorithm = void 0;
    controller._flushAlgorithm = void 0;
  }
  function TransformStreamDefaultControllerEnqueue(controller, chunk) {
    const stream = controller._controlledTransformStream;
    const readableController = stream._readable._readableStreamController;
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
      throw new TypeError("Readable side is not in a state that permits enqueue");
    }
    try {
      ReadableStreamDefaultControllerEnqueue(readableController, chunk);
    } catch (e) {
      TransformStreamErrorWritableAndUnblockWrite(stream, e);
      throw stream._readable._storedError;
    }
    const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
    if (backpressure !== stream._backpressure) {
      TransformStreamSetBackpressure(stream, true);
    }
  }
  function TransformStreamDefaultControllerError(controller, e) {
    TransformStreamError(controller._controlledTransformStream, e);
  }
  function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
    const transformPromise = controller._transformAlgorithm(chunk);
    return transformPromiseWith(transformPromise, void 0, (r) => {
      TransformStreamError(controller._controlledTransformStream, r);
      throw r;
    });
  }
  function TransformStreamDefaultControllerTerminate(controller) {
    const stream = controller._controlledTransformStream;
    const readableController = stream._readable._readableStreamController;
    ReadableStreamDefaultControllerClose(readableController);
    const error = new TypeError("TransformStream terminated");
    TransformStreamErrorWritableAndUnblockWrite(stream, error);
  }
  function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
    const controller = stream._transformStreamController;
    if (stream._backpressure) {
      const backpressureChangePromise = stream._backpressureChangePromise;
      return transformPromiseWith(backpressureChangePromise, () => {
        const writable = stream._writable;
        const state2 = writable._state;
        if (state2 === "erroring") {
          throw writable._storedError;
        }
        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
      });
    }
    return TransformStreamDefaultControllerPerformTransform(controller, chunk);
  }
  function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
    TransformStreamError(stream, reason);
    return promiseResolvedWith(void 0);
  }
  function TransformStreamDefaultSinkCloseAlgorithm(stream) {
    const readable = stream._readable;
    const controller = stream._transformStreamController;
    const flushPromise = controller._flushAlgorithm();
    TransformStreamDefaultControllerClearAlgorithms(controller);
    return transformPromiseWith(flushPromise, () => {
      if (readable._state === "errored") {
        throw readable._storedError;
      }
      ReadableStreamDefaultControllerClose(readable._readableStreamController);
    }, (r) => {
      TransformStreamError(stream, r);
      throw readable._storedError;
    });
  }
  function TransformStreamDefaultSourcePullAlgorithm(stream) {
    TransformStreamSetBackpressure(stream, false);
    return stream._backpressureChangePromise;
  }
  function defaultControllerBrandCheckException(name) {
    return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
  }
  function streamBrandCheckException(name) {
    return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
  }

  // src/polyfills/streams.ts
  for (const k of Object.keys(ponyfill_es2018_exports)) {
    def(ponyfill_es2018_exports[k], k);
  }

  // src/polyfills/form-data.ts
  var _4 = createInternal();
  var FormData = class {
    constructor() {
      _4.set(this, []);
    }
    append(name, blobValue, filename) {
      const value2 = typeof blobValue === "string" || blobValue instanceof File ? blobValue : new File([blobValue], filename ?? name, blobValue);
      _4(this).push([name, value2]);
    }
    delete(name) {
      const updated = _4(this).filter((entry) => entry[0] !== name);
      _4.set(this, updated);
    }
    get(name) {
      for (const [key, value2] of _4(this)) {
        if (key === name)
          return value2;
      }
      return null;
    }
    getAll(name) {
      const values = [];
      for (const [key, value2] of _4(this)) {
        if (key === name)
          values.push(value2);
      }
      return values;
    }
    has(name) {
      for (const [key] of _4(this)) {
        if (key === name)
          return true;
      }
      return false;
    }
    set(name, blobValue, filename) {
      const value2 = typeof blobValue === "string" || blobValue instanceof File ? blobValue : new File([blobValue], filename ?? name, blobValue);
      const data = _4(this);
      for (const entry of data) {
        if (entry[0] === name) {
          entry[1] = value2;
          return;
        }
      }
      data.push([name, value2]);
    }
    forEach(callbackfn, thisArg) {
      for (const [key, value2] of this) {
        callbackfn.call(thisArg, value2, key, this);
      }
    }
    *entries() {
      for (const entry of _4(this)) {
        yield entry;
      }
    }
    *keys() {
      for (const [key] of _4(this)) {
        yield key;
      }
    }
    *values() {
      for (const [_k, value2] of _4(this)) {
        yield value2;
      }
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  def(FormData);

  // src/fetch/headers.ts
  var _5 = createInternal();
  var Headers = class {
    constructor(init7) {
      _5.set(this, /* @__PURE__ */ new Map());
      if (init7 instanceof Headers) {
        for (const [name, value2] of init7) {
          this.append(name, value2);
        }
      } else if (Array.isArray(init7)) {
        for (const header of init7) {
          if (header.length != 2) {
            throw new TypeError(
              `Headers constructor: expected name/value pair to be length 2, found: ${header.length}`
            );
          }
          this.append(header[0], header[1]);
        }
      } else if (init7) {
        for (const name of Object.getOwnPropertyNames(init7)) {
          this.append(name, init7[name]);
        }
      }
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
    append(name, value2) {
      name = normalizeName(name);
      value2 = normalizeValue(value2);
      const map = _5(this);
      let values = map.get(name);
      if (!values) {
        values = [];
        map.set(name, values);
      }
      values.push(value2);
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
    delete(name) {
      const map = _5(this);
      map.delete(normalizeName(name));
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
    get(name) {
      name = normalizeName(name);
      const map = _5(this);
      const values = map.get(name);
      return values ? getValues(values) : null;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
    getSetCookie() {
      const map = _5(this);
      return map.get("set-cookie") || [];
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
    has(name) {
      const map = _5(this);
      return map.has(normalizeName(name));
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
    set(name, value2) {
      const map = _5(this);
      map.set(normalizeName(name), [value2]);
    }
    forEach(callbackfn, thisArg) {
      const map = _5(this);
      for (const [name, values] of map) {
        callbackfn.call(thisArg, getValues(values), name, this);
      }
    }
    /** Returns an iterator allowing to go through all key/value pairs contained in this object. */
    *entries() {
      const map = _5(this);
      for (const [name, values] of map.entries()) {
        if (name === "set-cookie") {
          for (const value2 of values) {
            yield [name, value2];
          }
        } else {
          yield [name, getValues(values)];
        }
      }
    }
    /** Returns an iterator allowing to go through all keys of the key/value pairs contained in this object. */
    *keys() {
      for (const [name] of this.entries()) {
        yield name;
      }
    }
    /** Returns an iterator allowing to go through all values of the key/value pairs contained in this object. */
    *values() {
      for (const [_n, value2] of this.entries()) {
        yield value2;
      }
    }
    /**
     * Same as {@link Headers.entries | `entries()`}.
     */
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  def(Headers);
  function normalizeName(v) {
    const name = typeof v === "string" ? v : String(v);
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
      throw new TypeError(
        `Invalid character in header field name: "${name}"`
      );
    }
    return name.toLowerCase();
  }
  function normalizeValue(v) {
    return typeof v === "string" ? v : String(v);
  }
  var getValues = (v) => v.join(", ");

  // src/fetch/body.ts
  function indexOfSequence(haystack, needle, offset = 0) {
    if (needle.length === 0)
      return -1;
    for (let i = offset; i <= haystack.length - needle.length; i++) {
      let found = true;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          found = false;
          break;
        }
      }
      if (found)
        return i;
    }
    return -1;
  }
  async function* stringIterator(s) {
    yield encoder.encode(s);
  }
  async function* blobIterator(b) {
    yield new Uint8Array(await b.arrayBuffer());
  }
  async function* arrayBufferIterator(b) {
    yield new Uint8Array(b);
  }
  async function* formDataIterator(f, boundary) {
    for (const [name, value2] of f) {
      let header = `${boundary}\r
Content-Disposition: form-data; name="${name}"`;
      if (value2 instanceof File && value2.name) {
        header += `; filename="${value2.name}"\r
`;
      } else {
        header += "\r\n";
      }
      if (value2 instanceof Blob && value2.type) {
        header += `Content-Type: ${value2.type}\r
`;
      }
      header += "\r\n";
      yield encoder.encode(header);
      yield typeof value2 === "string" ? encoder.encode(value2) : new Uint8Array(await value2.arrayBuffer());
      yield encoder.encode("\r\n");
    }
    yield encoder.encode(`${boundary}--`);
  }
  var Body = class {
    body;
    bodyUsed;
    headers;
    constructor(init7, headers) {
      this.body = null;
      this.bodyUsed = false;
      this.headers = new Headers(headers);
      let contentType;
      if (init7 && typeof init7 === "object" && "body" in init7) {
        if (init7.bodyUsed) {
          throw new Error("Input request's body is unusable");
        }
        init7.bodyUsed = true;
        init7 = init7.body;
      }
      if (init7) {
        if (typeof init7 === "string") {
          this.body = asyncIteratorToStream(stringIterator(init7));
          contentType = "text/plain;charset=UTF-8";
        } else if (init7 instanceof Blob) {
          this.body = asyncIteratorToStream(blobIterator(init7));
          contentType = init7.type;
        } else if (init7 instanceof URLSearchParams) {
          this.body = asyncIteratorToStream(stringIterator(String(init7)));
          contentType = "application/x-www-form-urlencoded;charset=UTF-8";
        } else if (init7 instanceof ReadableStream) {
          if (init7.locked) {
            throw new TypeError(
              "ReadableStream is locked or disturbed"
            );
          }
          this.body = init7;
        } else if (init7 instanceof FormData) {
          const boundary = `------${crypto.randomUUID().replace(/-/g, "")}`;
          this.body = asyncIteratorToStream(
            formDataIterator(init7, boundary)
          );
          contentType = `multipart/form-data; boundary=${boundary}`;
        } else {
          this.body = asyncIteratorToStream(
            arrayBufferIterator(bufferSourceToArrayBuffer(init7))
          );
        }
      }
      if (contentType && !this.headers.has("content-type")) {
        this.headers.set("content-type", contentType);
      }
    }
    /**
     * Returns a promise that resolves with an ArrayBuffer representation of the body.
     * If the body is null, it returns an empty ArrayBuffer.
     * @returns {Promise<ArrayBuffer>}
     */
    async arrayBuffer() {
      if (!this.body)
        return new ArrayBuffer(0);
      let bytes = 0;
      const chunks = [];
      const reader = this.body.getReader();
      while (true) {
        const next = await reader.read();
        if (next.done)
          break;
        chunks.push(next.value);
        bytes += next.value.length;
      }
      this.bodyUsed = true;
      const arr = new Uint8Array(bytes);
      let offset = 0;
      for (const chunk of chunks) {
        arr.set(chunk, offset);
        offset += chunk.length;
      }
      return arr.buffer;
    }
    /**
     * Returns a promise that resolves with a Blob representation of the body.
     * The Blob's type will be the value of the 'content-type' header.
     * @returns {Promise<Blob>}
     */
    async blob() {
      const buf = await this.arrayBuffer();
      const type = this.headers.get("content-type") ?? void 0;
      return new Blob([buf], { type });
    }
    /**
     * Returns a promise that resolves with a {@link FormData} representation of the body.
     * If the body cannot be decoded as form data, it throws a `TypeError`.
     */
    async formData() {
      const boundary = this.headers.get("content-type")?.split(/;\s?/).find((p2) => p2.startsWith("boundary="))?.slice(9);
      if (!boundary) {
        throw new TypeError("Body can not be decoded as form data");
      }
      const form = new FormData();
      const boundaryBytes = encoder.encode(boundary);
      const data = new Uint8Array(await this.arrayBuffer());
      let pos = 0;
      let start;
      const offsets = [];
      while ((start = indexOfSequence(data, boundaryBytes, pos)) !== -1) {
        offsets.push(start);
        pos += start + boundaryBytes.length;
      }
      for (let i = 0; i < offsets.length; i++) {
        const part = data.subarray(
          offsets[i] + boundaryBytes.length + 2,
          offsets[i + 1]
        );
        if (part.length === 0)
          break;
        pos = 0;
        let eol;
        let name;
        let filename;
        let type;
        while ((eol = indexOfSequence(part, [13, 10], pos)) !== -1) {
          const header = part.subarray(pos, eol);
          pos = eol + 2;
          if (!header.length) {
            break;
          }
          const h = decoder.decode(header);
          const colon = h.indexOf(":");
          const key = h.slice(0, colon).toLowerCase();
          const value3 = h.slice(colon + 1).trimStart();
          if (key === "content-disposition") {
            const disposition = value3.split(/;\s*/);
            name = disposition.find((p2) => p2.startsWith("name="))?.slice(5).replace(/^"|"$/g, "");
            filename = disposition.find((p2) => p2.startsWith("filename="))?.slice(9).replace(/^"|"$/g, "");
          } else if (key === "content-type") {
            type = value3;
          }
        }
        if (!name) {
          throw new TypeError(
            'No "name" provided in `Content-Disposition` header'
          );
        }
        const valueBytes = part.subarray(pos, part.length - 2);
        const value2 = filename ? new File([valueBytes], filename, { type }) : decoder.decode(valueBytes);
        form.append(name, value2);
      }
      return form;
    }
    /**
     * Returns a promise that resolves with a JSON representation of the body.
     * If the body cannot be parsed as JSON, it throws a SyntaxError.
     */
    async json() {
      const text = await this.text();
      return JSON.parse(text);
    }
    /**
     * Returns a promise that resolves with a text representation of the body.
     */
    async text() {
      const buf = await this.arrayBuffer();
      return decoder.decode(buf);
    }
  };

  // src/fetch/request.ts
  var methods = [
    "CONNECT",
    "DELETE",
    "GET",
    "HEAD",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
    "TRACE"
  ];
  function normalizeMethod(method) {
    if (!method)
      return;
    var upcased = method.toUpperCase();
    return methods.includes(upcased) ? upcased : method;
  }
  var Request = class extends Body {
    cache;
    credentials;
    destination;
    integrity;
    keepalive;
    method;
    mode;
    redirect;
    referrer;
    referrerPolicy;
    signal;
    url;
    constructor(input, init7 = {}) {
      let body = init7.body ?? null;
      let headers = init7.headers;
      let method = normalizeMethod(init7.method);
      if (input instanceof Request) {
        if (!body)
          body = input;
        if (!headers)
          headers = input.headers;
        if (!method)
          method = input.method;
      }
      if (!method)
        method = "GET";
      if ((method === "GET" || method === "HEAD") && body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      super(body, headers);
      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError("Already read");
        }
        this.url = input.url;
        this.cache = init7.cache || input.cache;
        this.credentials = input.credentials;
        this.destination = input.destination;
        this.integrity = init7.integrity ?? input.integrity;
        this.keepalive = init7.keepalive ?? input.keepalive;
        this.mode = init7.mode ?? input.mode;
        this.redirect = init7.redirect ?? input.redirect;
        this.referrerPolicy = init7.referrerPolicy ?? input.referrerPolicy;
        this.signal = init7.signal ?? input.signal;
      } else {
        const url = typeof input === "string" ? new URL(input, $.entrypoint) : input;
        this.url = url.href;
        this.cache = init7.cache || "default";
        this.credentials = init7.credentials || "same-origin";
        this.destination = "";
        this.integrity = init7.integrity ?? "";
        this.keepalive = init7.keepalive ?? false;
        this.mode = init7.mode ?? "cors";
        this.redirect = init7.redirect ?? "follow";
        this.referrerPolicy = init7.referrerPolicy ?? "";
        this.signal = init7.signal ?? new AbortController2().signal;
      }
      this.method = method;
      this.referrer = "";
    }
    clone() {
      return new Request(this);
    }
  };
  def(Request);

  // src/fetch/response.ts
  var Response = class extends Body {
    /** Whether the response was redirected. */
    redirected;
    /** HTTP status code of the response. */
    status;
    /** Status text of the response. */
    statusText;
    /** Type of the response. */
    type;
    /** URL of the response. */
    url;
    /**
     * Create a new Response.
     * @param body - The body of the response.
     * @param init - Initialization options for the response.
     */
    constructor(body, init7 = {}) {
      super(body, init7.headers);
      this.redirected = false;
      this.status = init7.status ?? 200;
      this.statusText = init7.statusText ?? "";
      this.type = "default";
      this.url = "";
    }
    /**
     * Check if the response was successful.
     * @returns {boolean} - True if the status is between 200 and 299, inclusive.
     */
    get ok() {
      return this.status >= 200 && this.status < 300;
    }
    /**
     * Clone the response.
     * @throws {Error} - This method is not implemented.
     */
    clone() {
      throw new Error("Method not implemented.");
    }
    /**
     * Create a new error response.
     * @returns {Response} - The new error response.
     */
    static error() {
      const res = new Response();
      res.status = 0;
      res.type = "error";
      return res;
    }
    /**
     * Create a new redirect response.
     * @param {string | URL} url - The URL to redirect to.
     * @param {number} status - The status code for the redirect, defaults to 302.
     * @returns {Response} - The new redirect response.
     */
    static redirect(url, status = 302) {
      return new Response(null, {
        status,
        headers: {
          location: String(url)
        }
      });
    }
    /**
     * Create a new JSON response.
     * @param {any} data - The data to include in the response body.
     * @param {ResponseInit} init - Initialization options for the response.
     * @returns {Response} - The new JSON response.
     */
    static json(data, init7 = {}) {
      const headers = new Headers(init7.headers);
      if (!headers.has("content-type")) {
        headers.set("content-type", "application/json");
      }
      return new Response(JSON.stringify(data), { ...init7, headers });
    }
  };
  def(Response);

  // src/fetch/fetch.ts
  var import_data_uri_to_buffer = __toESM(require_dist());

  // src/fs.ts
  function mkdirSync(path, mode = 511) {
    return $.mkdirSync(pathToString(path), mode);
  }
  function readFile(path) {
    return toPromise($.readFile, pathToString(path));
  }
  function readDirSync(path) {
    return $.readDirSync(pathToString(path));
  }
  function readFileSync(path) {
    return $.readFileSync(pathToString(path));
  }
  function writeFileSync(path, data) {
    const d = typeof data === "string" ? encoder.encode(data) : data;
    const ab = bufferSourceToArrayBuffer(d);
    return $.writeFileSync(pathToString(path), ab);
  }
  function removeSync(path) {
    return $.removeSync(pathToString(path));
  }
  function remove(path) {
    return toPromise($.remove, pathToString(path));
  }
  function statSync(path) {
    return $.statSync(pathToString(path));
  }
  function stat(path) {
    return toPromise($.stat, pathToString(path));
  }

  // src/navigator/battery.ts
  var BatteryManager = class extends EventTarget {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      super();
      $.batteryInit();
      addEventListener("unload", $.batteryExit);
    }
    get chargingTime() {
      return Infinity;
    }
    get dischargingTime() {
      return Infinity;
    }
  };
  $.batteryInitClass(BatteryManager);
  def(BatteryManager);

  // src/timers.ts
  var nextId = 0;
  var timers = /* @__PURE__ */ new Map();
  function setTimeout(handler, timeout = 0, ...args) {
    const id2 = ++nextId;
    const callback = typeof handler === "string" ? new Function(handler) : handler;
    timers.set(id2, {
      args,
      callback,
      invokeAt: Date.now() + timeout
    });
    return id2;
  }
  function setInterval(handler, timeout = 0, ...args) {
    const id2 = ++nextId;
    const callback = typeof handler === "string" ? new Function(handler) : handler;
    timers.set(id2, {
      args,
      callback,
      invokeAt: Date.now() + timeout,
      interval: timeout
    });
    return id2;
  }
  function clearTimeout(id2) {
    if (typeof id2 === "number")
      timers.delete(id2);
  }
  function clearInterval(id2) {
    if (typeof id2 === "number")
      timers.delete(id2);
  }
  function processTimers() {
    const now = Date.now();
    for (const [id2, timer] of timers) {
      if (now >= timer.invokeAt) {
        if (typeof timer.interval === "number") {
          timer.invokeAt = now + timer.interval;
        } else {
          clearTimeout(id2);
        }
        timer.callback.apply(null, timer.args);
      }
    }
  }

  // src/domrect.ts
  var DOMRectReadOnly = class {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/width) */
    width;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/height) */
    height;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/x) */
    x;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/y) */
    y;
    constructor(x, y, width, height) {
      this.x = x ?? 0;
      this.y = y ?? 0;
      this.width = width ?? 0;
      this.height = height ?? 0;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/bottom) */
    get bottom() {
      return this.y + this.height;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/left) */
    get left() {
      return this.x;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/right) */
    get right() {
      return this.x + this.width;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/top) */
    get top() {
      return this.y;
    }
    toJSON() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        top: this.top,
        right: this.right,
        bottom: this.bottom,
        left: this.left
      };
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/fromRect_static) */
    static fromRect(o = {}) {
      return new DOMRectReadOnly(o.x, o.y, o.width, o.height);
    }
  };
  def(DOMRectReadOnly);
  var DOMRect = class extends DOMRectReadOnly {
    width;
    height;
    x;
    y;
    constructor(x, y, width, height) {
      super();
      this.x = x ?? 0;
      this.y = y ?? 0;
      this.width = width ?? 0;
      this.height = height ?? 0;
    }
    static fromRect(o = {}) {
      return new DOMRect(o.x, o.y, o.width, o.height);
    }
  };
  def(DOMRect);

  // src/performance.ts
  var Performance = class {
    /**
     * @see https://developer.mozilla.org/docs/Web/API/Performance/timeOrigin
     */
    timeOrigin;
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      this.timeOrigin = Date.now();
    }
    /**
     * @see https://developer.mozilla.org/docs/Web/API/Performance/now
     */
    now() {
      return Date.now() - this.timeOrigin;
    }
  };
  def(Performance);
  var performance = new Performance(INTERNAL_SYMBOL);
  def(performance, "performance");

  // src/raf.ts
  var cbs = [];
  var rafIndex = 0;
  function callRafCallbacks() {
    const now = performance.now();
    const c = cbs.slice();
    cbs.length = 0;
    for (const cb of c)
      cb.fn(now);
  }
  function cancelAnimationFrame(id2) {
    const index = cbs.findIndex((cb) => cb.id === id2);
    if (index !== -1) {
      cbs.splice(index, 1);
    }
  }
  def(cancelAnimationFrame);
  function requestAnimationFrame(callback) {
    const id2 = rafIndex++;
    cbs.push({ id: id2, fn: callback });
    return id2;
  }
  def(requestAnimationFrame);

  // src/navigator/virtual-keyboard.ts
  var update;
  var id = -1;
  var value = "";
  var cursorPos = 0;
  var VirtualKeyboard = class extends EventTarget {
    /**
     * Indicates the position and size of the on-screen virtual keyboard that overlays the screen.
     *
     * @see https://developer.mozilla.org/docs/Web/API/VirtualKeyboard/boundingRect
     */
    boundingRect;
    /**
     * Set the type of virtual keyboard.
     */
    type;
    /**
     * Text to display for the "OK" button. Max of 8 characters.
     *
     * @example "Submit"
     */
    okButtonText;
    /**
     * Single character to use for the left-side button.
     *
     * @example "-"
     * @note Only for "NumPad" keyboard type.
     */
    leftButtonText;
    /**
     * Single character to use for the right-side button.
     *
     * @example "+"
     * @note Only for "NumPad" keyboard type.
     */
    rightButtonText;
    /**
     * If set to `true`, then the dictionary will be enabled
     * for faster user input based on predictive text.
     */
    enableDictionary;
    /**
     * If set to `true`, then the "Return" key will be enabled,
     * allowing for newlines to be included in the input.
     */
    enableReturn;
    /**
     * Specifies the min string length. When the input
     * is too short, the "OK" button will be disabled.
     */
    minLength;
    /**
     * Specifies the max string length. When the input
     * is too long, input will stop being accepted.
     */
    maxLength;
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      super();
    }
    get overlaysContent() {
      return true;
    }
    get value() {
      return value;
    }
    get cursorIndex() {
      return cursorPos;
    }
    /**
     * Shows the on-screen virtual keyboard.
     *
     * @returns `undefined` and triggers a `"geometrychange"` event.
     * @see https://developer.mozilla.org/docs/Web/API/VirtualKeyboard/show
     */
    show() {
      Object.assign(this.boundingRect, $.swkbdShow(this));
      this.dispatchEvent(new Event("geometrychange"));
      id = requestAnimationFrame(update);
    }
    /**
     * Hides the on-screen virtual keyboard.
     *
     * @returns `undefined` and triggers a `"geometrychange"` event.
     * @see https://developer.mozilla.org/docs/Web/API/VirtualKeyboard/hide
     */
    hide() {
      $.swkbdHide(this);
      onHide(this);
    }
  };
  def(VirtualKeyboard);
  function onHide(k) {
    cancelAnimationFrame(id);
    const b = k.boundingRect;
    b.x = b.y = b.width = b.height = 0;
    k.dispatchEvent(new Event("geometrychange"));
  }
  function onCancel() {
    onHide(this);
  }
  function onChange(str, ci) {
    value = str;
    cursorPos = ci;
    this.dispatchEvent(new Event("change"));
  }
  function onCursorMove(str, ci) {
    value = str;
    cursorPos = ci;
    this.dispatchEvent(new Event("cursormove"));
  }
  function onSubmit(str) {
    value = str;
    onHide(this);
    this.dispatchEvent(new Event("submit"));
  }
  function create() {
    const k = $.swkbdCreate({
      onCancel,
      onChange,
      onCursorMove,
      onSubmit
    });
    Object.setPrototypeOf(k, VirtualKeyboard.prototype);
    k.boundingRect = new DOMRect();
    update = () => {
      $.swkbdUpdate.call(k);
      id = requestAnimationFrame(update);
    };
    return k;
  }

  // src/navigator.ts
  var DEFAULT_VIBRATION = {
    lowAmp: 0.2,
    lowFreq: 160,
    highAmp: 0.2,
    highFreq: 320
  };
  var STOP_VIBRATION = {
    lowAmp: 0,
    lowFreq: 160,
    highAmp: 0,
    highFreq: 320
  };
  var state = {};
  var Navigator = class {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
    }
    /**
     * Identifies the platform on which the application is running.
     *
     * @example "Horizon arm64"
     * @see https://developer.mozilla.org/docs/Web/API/Navigator/platform
     */
    get platform() {
      return "Horizon arm64";
    }
    /**
     * The value used for the `User-Agent` request header for
     * HTTP requests initiated with {@link fetch | `fetch()`}.
     *
     * @example "my-app/0.0.1 (Switch; en-us; rv:14.1.2|AMS 1.5.4|E) nx.js/0.0.18"
     * @see https://developer.mozilla.org/docs/Web/API/Navigator/userAgent
     */
    get userAgent() {
      return `nx.js/${$.version.nxjs}`;
    }
    /**
     * Returns the maximum number of simultaneous touch contact points are
     * supported by the current device.
     *
     * @example 16
     * @see https://developer.mozilla.org/docs/Web/API/Navigator/maxTouchPoints
     */
    get maxTouchPoints() {
      return 16;
    }
    /**
     * Returns a promise which is resolved to a {@link BatteryManager} instance.
     *
     * @see https://developer.mozilla.org/docs/Web/API/Navigator/getBattery
     */
    getBattery() {
      let b = state.batt;
      if (!b) {
        b = state.batt = Promise.resolve(
          // @ts-expect-error Internal constructor
          new BatteryManager(INTERNAL_SYMBOL)
        );
      }
      return b;
    }
    /**
     * Vibrates the main gamepad for the specified number of milliseconds or pattern.
     *
     * If a vibration pattern is already in progress when this method is called,
     * the previous pattern is halted and the new one begins instead.
     *
     * @example
     *
     * ```typescript
     * // Vibrate for 200ms with the default amplitude/frequency values
     * navigator.vibrate(200);
     *
     * // Vibrate 'SOS' in Morse Code
     * navigator.vibrate([
     *   100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
     * ]);
     *
     * // Specify amplitude/frequency values for the vibration
     * navigator.vibrate({
     *   duration: 500,
     *   lowAmp: 0.2
     *   lowFreq: 160,
     *   highAmp: 0.6,
     *   highFreq: 500
     * });
     * ```
     *
     * @param pattern Provides a pattern of vibration and pause intervals. Each value indicates a number of milliseconds to vibrate or pause, in alternation. You may provide either a single value (to vibrate once for that many milliseconds) or an array of values to alternately vibrate, pause, then vibrate again.
     *
     * @see https://developer.mozilla.org/docs/Web/API/Navigator/vibrate
     */
    vibrate(pattern) {
      if (!Array.isArray(pattern)) {
        pattern = [pattern];
      }
      const patternValues = [];
      for (let i = 0; i < pattern.length; i++) {
        let p2 = pattern[i];
        if (i % 2 === 0) {
          if (typeof p2 === "number") {
            p2 = {
              ...DEFAULT_VIBRATION,
              duration: p2
            };
          }
          if (p2.highAmp < 0 || p2.highAmp > 1 || p2.lowAmp < 0 || p2.lowAmp > 1) {
            return false;
          }
          patternValues.push(p2);
        } else {
          if (typeof p2 !== "number")
            return false;
          patternValues.push(p2);
        }
      }
      if (!state.vibrationDevicesInitialized) {
        $.hidInitializeVibrationDevices();
        $.hidSendVibrationValues(DEFAULT_VIBRATION);
        state.vibrationDevicesInitialized = true;
      }
      if (typeof state.vibrationTimeoutId === "number") {
        clearTimeout(state.vibrationTimeoutId);
      }
      state.vibrationPattern = patternValues;
      state.vibrationTimeoutId = setTimeout(processVibrations, 0);
      return true;
    }
    /**
     * A {@link VirtualKeyboard} instance to show or hide the virtual keyboard
     * programmatically, and get the current position and size of the virtual keyboard.
     *
     * @see https://developer.mozilla.org/docs/Web/API/Navigator/virtualKeyboard
     */
    get virtualKeyboard() {
      let vk = state.vk;
      if (!vk)
        vk = state.vk = create();
      return vk;
    }
  };
  def(Navigator);
  var navigator2 = new Navigator(INTERNAL_SYMBOL);
  def(navigator2, "navigator");
  function processVibrations() {
    let next = state.vibrationPattern?.shift();
    if (typeof next === "undefined") {
      next = 0;
    }
    if (typeof next === "number") {
      $.hidSendVibrationValues(STOP_VIBRATION);
      if (next > 0) {
        state.vibrationTimeoutId = setTimeout(processVibrations, next);
      }
    } else {
      $.hidSendVibrationValues(next);
      state.vibrationTimeoutId = setTimeout(processVibrations, next.duration);
    }
  }

  // src/dns.ts
  function resolveDns(hostname) {
    return toPromise($.dnsResolve, hostname);
  }

  // src/switch.ts
  var switch_exports = {};
  __export(switch_exports, {
    Application: () => Application,
    Env: () => Env,
    IRSensor: () => IRSensor,
    Profile: () => Profile,
    Server: () => Server,
    Socket: () => Socket,
    SocketEvent: () => SocketEvent,
    applications: () => applications,
    argv: () => argv,
    chdir: () => chdir,
    connect: () => connect2,
    currentProfile: () => currentProfile,
    cwd: () => cwd,
    entrypoint: () => entrypoint,
    env: () => env,
    exit: () => exit,
    inspect: () => inspect,
    listen: () => listen,
    mkdirSync: () => mkdirSync,
    networkInfo: () => networkInfo,
    profiles: () => profiles,
    readDirSync: () => readDirSync,
    readFile: () => readFile,
    readFileSync: () => readFileSync,
    remove: () => remove,
    removeSync: () => removeSync,
    resolveDns: () => resolveDns,
    selectProfile: () => selectProfile,
    stat: () => stat,
    statSync: () => statSync,
    version: () => version,
    writeFileSync: () => writeFileSync
  });

  // src/env.ts
  var Env = class {
    get(name) {
      return $.getenv(name);
    }
    set(name, value2) {
      $.setenv(name, value2);
    }
    delete(name) {
      $.unsetenv(name);
    }
    toObject() {
      return $.envToObject();
    }
  };

  // src/switch/nifm.ts
  var nifmInitialized = false;
  function networkInfo() {
    if (!nifmInitialized) {
      addEventListener("unload", $.nifmInitialize());
      nifmInitialized = true;
    }
    return $.networkInfo();
  }

  // src/switch/fsdev.ts
  var FsDev = class {
    name;
    constructor(name) {
      this.name = name;
    }
    commit() {
      $.fsdevCommitDevice(this.name);
    }
    unmount() {
      $.fsdevUnmountDevice(this.name);
    }
  };

  // src/switch/ns.ts
  var init2 = false;
  function _init() {
    if (init2)
      return;
    addEventListener("unload", $.nsInitialize());
    init2 = true;
  }
  var Application = class {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
    }
    /**
     * Launches the application.
     */
    launch() {
      stub();
    }
    /**
     * Creates the Save Data for this {@link Application} for the provided user profile.
     *
     * @example
     *
     * ```typescript
     * const profile = Switch.currentProfile({ required: true });
     * app.createSaveData(profile);
     * ```
     *
     * @param profile The {@link Profile} to create the save data for.
     */
    createSaveData(profile) {
      $.fsdevCreateSaveData(this.nacp, profile.uid);
    }
    /**
     * Mounts the save data for this application such that filesystem operations may be used.
     *
     * @example
     *
     * ```typescript
     * const profile = Switch.currentProfile({ required: true });
     * const device = app.mountSaveData('save', profile);
     *
     * // Use the filesystem functions to do operations on the save mount
     * console.log(Switch.readDirSync('save:/'));
     *
     * // Make sure to use `device.commit()` after any write operations
     * Switch.writeFileSync('save:/state', 'your app state…');
     * device.commit();
     * ```
     *
     * @param name The name of the device mount for filesystem paths.
     * @param profile The {@link Profile} which the save data belongs to.
     */
    mountSaveData(name, profile) {
      $.fsdevMountSaveData(name, this.nacp, profile.uid);
      return new FsDev(name);
    }
  };
  $.nsAppInit(Application);
  var applications = {
    *[Symbol.iterator]() {
      _init();
      let offset = 0;
      while (1) {
        const app = $.nsApplicationRecord(offset++);
        if (!app)
          break;
        Object.setPrototypeOf(app, Application.prototype);
        yield app;
      }
    }
  };

  // src/canvas/image-bitmap.ts
  var ImageBitmap = class {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
    }
    /**
     * Disposes of all graphical resources associated with the `ImageBitmap`.
     * @see https://developer.mozilla.org/docs/Web/API/ImageBitmap/close
     */
    close() {
      $.imageClose(this);
    }
  };
  $.imageInit(ImageBitmap);
  def(ImageBitmap);
  async function createImageBitmap(image, optionsOrSx, sy, sw, sh, options) {
    throw new Error("Function not implemented");
  }
  def(createImageBitmap);

  // src/sensor.ts
  var Sensor = class extends EventTarget {
    /**
     * @ignore
     */
    constructor() {
      super();
      assertInternalConstructor(arguments);
    }
    addEventListener(type, callback, options) {
      super.addEventListener(type, callback, options);
    }
  };
  def(Sensor);

  // src/switch/irsensor.ts
  var colorRgba = require_color_rgba();
  var init3 = false;
  var _6 = createInternal();
  var IRSensor = class extends Sensor {
    /**
     * @ignore
     */
    constructor(opts = {}) {
      if (!init3) {
        init3 = true;
        addEventListener("unload", $.irsInit());
      }
      const color = colorRgba(opts.color || "green");
      if (!color) {
        throw new Error(`Invalid color specified: "${opts.color}"`);
      }
      super(INTERNAL_SYMBOL);
      const image = $.imageNew(320, 240);
      Object.setPrototypeOf(image, ImageBitmap.prototype);
      const self2 = $.irsSensorNew(image, color);
      Object.setPrototypeOf(self2, IRSensor.prototype);
      _6.set(self2, {
        activated: false,
        timestamp: null,
        image,
        frequency: opts.frequency ?? 2
      });
      return self2;
    }
    /**
     * The underlying `ImageBitmap` instance containing the contents
     * of the IR sensor. Can be used with `ctx.drawImage()` or any
     * other functions that work with `ImageBitmap` instances.
     */
    get image() {
      return _6(this).image;
    }
    get activated() {
      return _6(this).activated;
    }
    get hasReading() {
      return _6(this).timestamp !== null;
    }
    get timestamp() {
      return _6(this).timestamp;
    }
    start() {
      const i = _6(this);
      if (!i.activated) {
        i.activated = true;
        this.dispatchEvent(new Event("activate"));
      }
      this.stop();
      $.irsSensorStart(this);
      i.interval = setInterval(() => {
        if ($.irsSensorUpdate(this)) {
          i.timestamp = Date.now();
          this.dispatchEvent(new Event("reading"));
        }
      }, 1e3 / i.frequency);
    }
    stop() {
      clearInterval(_6(this).interval);
      $.irsSensorStop(this);
    }
  };

  // src/switch/profile.ts
  var init4 = false;
  function _init2() {
    if (init4)
      return;
    addEventListener("unload", $.accountInitialize());
    init4 = true;
  }
  var Profile = class {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
    }
  };
  $.accountProfileInit(Profile);
  var p = null;
  function currentProfile({ required } = {}) {
    _init2();
    if (p)
      return p;
    p = $.accountCurrentProfile();
    if (p)
      Object.setPrototypeOf(p, Profile.prototype);
    while (!p && required)
      p = selectProfile();
    return p;
  }
  function selectProfile() {
    _init2();
    const p2 = $.accountSelectProfile();
    if (p2)
      Object.setPrototypeOf(p2, Profile.prototype);
    return p2;
  }
  var profiles = {
    *[Symbol.iterator]() {
      _init2();
      const pr = $.accountProfiles();
      for (const p2 of pr) {
        Object.setPrototypeOf(p2, Profile.prototype);
        yield p2;
      }
    }
  };

  // src/switch.ts
  var SocketEvent = class extends Event {
    socket;
    constructor(type, init7) {
      super(type, init7);
      this.socket = init7.socket;
    }
  };
  var env = new Env();
  var argv = $.argv;
  var entrypoint = $.entrypoint;
  var version = $.version;
  function exit() {
    $.exit();
  }
  function cwd() {
    return `${$.cwd()}/`;
  }
  function chdir(dir) {
    $.chdir(pathToString(dir));
  }
  function connect2(address, opts) {
    return new Socket(
      // @ts-expect-error Internal constructor
      INTERNAL_SYMBOL,
      typeof address === "string" ? parseAddress(address) : address,
      { ...opts, connect }
    );
  }
  function listen(opts) {
    const { ip = "0.0.0.0", port, accept } = opts;
    const server = createServer(ip, port);
    if (accept) {
      server.addEventListener("accept", accept);
    }
    return server;
  }

  // src/tcp.ts
  function parseAddress(address) {
    const firstColon = address.indexOf(":");
    return {
      hostname: address.slice(0, firstColon),
      port: +address.slice(firstColon + 1)
    };
  }
  async function connect(opts) {
    const { hostname = "127.0.0.1", port } = opts;
    const [ip] = await resolveDns(hostname);
    if (!ip) {
      throw new Error(`Could not resolve "${hostname}" to an IP address`);
    }
    return toPromise($.connect, ip, port);
  }
  function read(fd, buffer) {
    const ab = bufferSourceToArrayBuffer(buffer);
    return toPromise($.read, fd, ab);
  }
  function write(fd, data) {
    const ab = bufferSourceToArrayBuffer(data);
    return toPromise($.write, fd, ab);
  }
  function tlsHandshake(fd, hostname) {
    return toPromise($.tlsHandshake, fd, hostname);
  }
  function tlsRead(ctx, buffer) {
    const ab = bufferSourceToArrayBuffer(buffer);
    return toPromise($.tlsRead, ctx, ab);
  }
  function tlsWrite(ctx, data) {
    const ab = bufferSourceToArrayBuffer(data);
    return toPromise($.tlsWrite, ctx, ab);
  }
  var _7 = createInternal();
  var Socket = class {
    readable;
    writable;
    opened;
    closed;
    /**
     * @ignore
     */
    constructor() {
      const address = arguments[1];
      const {
        secureTransport = "off",
        allowHalfOpen = false,
        connect: connect3
      } = arguments[2] || {};
      assertInternalConstructor(arguments);
      const socket = this;
      const i = {
        fd: -1,
        opened: new Deferred(),
        closed: new Deferred()
      };
      _7.set(this, i);
      this.opened = i.opened.promise;
      this.closed = i.closed.promise;
      const readBuffer = new ArrayBuffer(64 * 1024);
      this.readable = new ReadableStream({
        async pull(controller) {
          if (i.opened.pending) {
            await socket.opened;
          }
          const bytesRead = await (i.tls ? tlsRead(i.tls, readBuffer) : read(i.fd, readBuffer));
          if (bytesRead === 0) {
            controller.close();
            if (!allowHalfOpen) {
              socket.close();
            }
            return;
          }
          controller.enqueue(
            new Uint8Array(readBuffer.slice(0, bytesRead))
          );
        }
      });
      this.writable = new WritableStream({
        async write(chunk) {
          if (i.opened.pending) {
            await socket.opened;
          }
          await (i.tls ? tlsWrite(i.tls, chunk) : write(i.fd, chunk));
        }
      });
      connect3(address).then((fd) => {
        i.fd = fd;
        if (secureTransport === "on") {
          return tlsHandshake(fd, address.hostname);
        }
      }).then((tls) => {
        i.tls = tls;
        i.opened.resolve({
          localAddress: "",
          remoteAddress: ""
        });
      }).catch((err) => {
        this.close(err);
      });
    }
    /**
     * Closes the socket and its underlying connection.
     */
    close(reason) {
      if (!this.readable.locked) {
        this.readable.cancel(reason);
      }
      if (!this.writable.locked) {
        this.writable.abort(reason);
      }
      const i = _7(this);
      if (i.opened.pending) {
        i.opened.reject(reason);
      }
      if (i.fd !== -1) {
        $.close(i.fd);
        i.fd = -1;
      }
      return this.closed;
    }
    /**
     * Enables opportunistic TLS (otherwise known as
     * {@link https://en.wikipedia.org/wiki/Opportunistic_TLS | StartTLS})
     * which is a requirement for some protocols
     * (primarily postgres/mysql and other DB protocols).
     */
    startTls() {
      throw new Error("Method not implemented.");
    }
  };
  var Server = class extends EventTarget {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      super();
    }
    addEventListener(type, callback, options) {
      super.addEventListener(type, callback, options);
    }
    /**
     * Shuts down the server and closes any existing client connections.
     */
    close() {
    }
  };
  $.tcpServerInit(Server);
  function createServer(ip, port) {
    const server = $.tcpServerNew(ip, port, function onAccept(fd) {
      const socket = new Socket(INTERNAL_SYMBOL, null, {
        async connect() {
          return fd;
        }
      });
      server.dispatchEvent(new SocketEvent("accept", { socket }));
    });
    Object.setPrototypeOf(server, Server.prototype);
    return server;
  }

  // src/fetch/fetch.ts
  function indexOfEol(arr, offset) {
    for (let i = offset; i < arr.length - 1; i++) {
      if (arr[i] === 13 && arr[i + 1] === 10) {
        return i;
      }
    }
    return -1;
  }
  function concat(a, b) {
    const c = new Uint8Array(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
  }
  async function* headersIterator(reader) {
    let leftover = null;
    while (true) {
      const next = await reader.read();
      if (next.done)
        throw new Error("Stream closed before end of headers");
      const chunk = leftover ? concat(leftover, next.value) : next.value;
      let pos = 0;
      while (true) {
        const eol = indexOfEol(chunk, pos);
        if (eol === -1) {
          leftover = chunk.slice(pos);
          break;
        }
        const line = decoder.decode(chunk.slice(pos, eol));
        pos = eol + 2;
        if (line) {
          yield { line };
        } else {
          leftover = chunk.slice(pos);
          yield { line: null, leftover };
          reader.releaseLock();
          return;
        }
      }
    }
  }
  function createChunkedParseStream() {
    let dataSize = -1;
    let buffer = null;
    return new TransformStream({
      transform(chunk, controller) {
        buffer = buffer ? concat(buffer, chunk) : chunk;
        if (dataSize !== -1) {
          if (buffer.length >= dataSize + 2) {
            const chunkData = buffer.slice(0, dataSize);
            buffer = buffer.slice(dataSize + 2);
            controller.enqueue(chunkData);
            dataSize = -1;
          } else {
            return;
          }
        }
        let pos;
        while ((pos = indexOfEol(buffer, 0)) >= 0) {
          if (pos === 0) {
            buffer = buffer.slice(2);
            continue;
          }
          const size = parseInt(decoder.decode(buffer.slice(0, pos)), 16);
          if (isNaN(size)) {
            throw new Error("Invalid chunk size");
          }
          buffer = buffer.slice(pos + 2);
          if (buffer.length >= size + 2) {
            const chunkData = buffer.slice(0, size);
            buffer = buffer.slice(size + 2);
            controller.enqueue(chunkData);
          } else {
            dataSize = size;
            break;
          }
        }
      },
      flush(controller) {
        if (buffer && buffer.length > 0) {
          controller.enqueue(buffer);
          buffer = null;
        }
      }
    });
  }
  async function fetchHttp(req, url) {
    const isHttps = url.protocol === "https:";
    const { hostname } = url;
    const port = +url.port || (isHttps ? 443 : 80);
    const socket = new Socket(
      // @ts-expect-error Internal constructor
      INTERNAL_SYMBOL,
      { hostname, port },
      { secureTransport: isHttps ? "on" : "off", connect }
    );
    req.headers.set("connection", "close");
    if (!req.headers.has("host")) {
      req.headers.set("host", url.host);
    }
    if (!req.headers.has("user-agent")) {
      req.headers.set("user-agent", navigator2.userAgent);
    }
    if (!req.headers.has("accept")) {
      req.headers.set("accept", "*/*");
    }
    let header = `${req.method} ${url.pathname}${url.search} HTTP/1.1\r
`;
    for (const [name, value2] of req.headers) {
      header += `${name}: ${value2}\r
`;
    }
    header += "\r\n";
    const w = socket.writable.getWriter();
    await w.write(encoder.encode(header));
    const resHeaders = new Headers();
    const r = socket.readable.getReader();
    const hi = headersIterator(r);
    const firstLine = await hi.next();
    if (firstLine.done || !firstLine.value.line) {
      throw new Error("Failed to read response header");
    }
    const [_17, statusStr, statusText] = firstLine.value.line.split(" ");
    const status = +statusStr;
    let leftover;
    for await (const v of hi) {
      if (typeof v.line === "string") {
        const col = v.line.indexOf(":");
        const name = v.line.slice(0, col);
        const value2 = v.line.slice(col + 1).trim();
        resHeaders.set(name, value2);
      } else {
        leftover = v.leftover;
      }
    }
    if ((status / 100 | 0) === 3) {
      if (req.redirect === "follow") {
        socket.readable.cancel();
        w.close();
        const loc = resHeaders.get("location");
        if (!loc) {
          throw new Error(
            `No "Location" header in ${status} redirect from "${url}"`
          );
        }
        const redirectUrl = new URL(loc, req.url);
        let method = "GET";
        let body = null;
        if (status === 307 || status === 308) {
          method = req.method;
          body = req.body;
        }
        const redirect = new Request(redirectUrl, { method, body });
        const res2 = await fetchHttp(redirect, redirectUrl);
        res2.redirected = true;
        return res2;
      }
      if (req.redirect === "error") {
      }
    }
    const resStream = resHeaders.get("transfer-encoding") === "chunked" ? createChunkedParseStream() : new TransformStream();
    if (leftover) {
      const w2 = resStream.writable.getWriter();
      w2.write(leftover);
      w2.releaseLock();
      leftover = void 0;
    }
    socket.readable.pipeThrough(resStream);
    const res = new Response(resStream.readable, {
      status,
      statusText,
      headers: resHeaders
    });
    res.url = url.href;
    return res;
  }
  async function fetchBlob(req, url) {
    if (req.method !== "GET") {
      throw new Error(
        `GET method must be used when fetching "${url.protocol}" protocol (got "${req.method}")`
      );
    }
    const data = objectUrls.get(req.url);
    if (!data) {
      throw new Error(`Object URL "${req.url}" does not exist`);
    }
    return new Response(data, {
      headers: {
        "content-length": String(data.size)
      }
    });
  }
  async function fetchData(req, url) {
    if (req.method !== "GET") {
      throw new Error(
        `GET method must be used when fetching "${url.protocol}" protocol (got "${req.method}")`
      );
    }
    const parsed = (0, import_data_uri_to_buffer.dataUriToBuffer)(url);
    return new Response(parsed.buffer, {
      headers: {
        "content-length": String(parsed.buffer.byteLength),
        "content-type": parsed.typeFull
      }
    });
  }
  async function fetchFile(req, url) {
    if (req.method !== "GET") {
      throw new Error(
        `GET method must be used when fetching "${url.protocol}" protocol (got "${req.method}")`
      );
    }
    const path = url.protocol === "file:" ? `sdmc:${url.pathname}` : url.href;
    const data = await readFile(path);
    const headers = new Headers();
    let status = 200;
    if (data) {
      headers.set("content-length", String(data.byteLength));
    } else {
      status = 404;
    }
    return new Response(data, { status, headers });
  }
  var fetchers = /* @__PURE__ */ new Map(
    [
      ["http:", fetchHttp],
      ["https:", fetchHttp],
      ["blob:", fetchBlob],
      ["data:", fetchData],
      ["file:", fetchFile],
      ["sdmc:", fetchFile],
      ["romfs:", fetchFile]
    ]
  );
  function fetch(input, init7) {
    const req = new Request(input, init7);
    const url = new URL(req.url);
    const fetcher = fetchers.get(url.protocol);
    if (!fetcher) {
      throw new Error(`scheme '${url.protocol.slice(0, -1)}' not supported`);
    }
    return fetcher(req, url).then((res) => {
      if (!res.url)
        res.url = url.href;
      return res;
    });
  }
  def(fetch);

  // src/image.ts
  var _8 = createInternal();
  var Image = class extends EventTarget {
    constructor() {
      super();
      const i = $.imageNew();
      Object.setPrototypeOf(i, Image.prototype);
      i.onload = null;
      i.onerror = null;
      i.decoding = "auto";
      i.isMap = false;
      i.loading = "eager";
      _8.set(i, { complete: true });
      return i;
    }
    dispatchEvent(event) {
      if (event.type === "load") {
        this.onload?.(event);
      } else if (event.type === "error") {
        this.onerror?.(event);
      }
      return super.dispatchEvent(event);
    }
    get complete() {
      return _8(this).complete;
    }
    get naturalWidth() {
      return this.width;
    }
    get naturalHeight() {
      return this.height;
    }
    get src() {
      return _8(this).src?.href ?? "";
    }
    set src(val) {
      const url = new URL(val, $.entrypoint);
      const internal = _8(this);
      internal.src = url;
      internal.complete = false;
      fetch(url).then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load image: ${res.status}`);
        }
        return res.arrayBuffer();
      }).then((buf) => {
        return toPromise($.imageDecode, this, buf);
      }).then(
        () => {
          internal.complete = true;
          this.dispatchEvent(new Event("load"));
        },
        (error) => {
          internal.complete = false;
          this.dispatchEvent(new ErrorEvent("error", { error }));
        }
      );
    }
    // Compat with HTML DOM interface
    className = "";
    get nodeType() {
      return 1;
    }
    get nodeName() {
      return "IMG";
    }
    getAttribute(name) {
      if (name === "width")
        return String(this.width);
      if (name === "height")
        return String(this.height);
      return null;
    }
    setAttribute(name, value2) {
    }
  };
  $.imageInit(Image);
  def(Image);

  // src/dompoint.ts
  var DOMPointReadOnly = class {
    constructor(x, y, z, w) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.w = w || 1;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/fromPoint) */
    static fromPoint(other) {
      return new DOMPointReadOnly(other?.x, other?.y, other?.z, other?.w);
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/w) */
    w;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/x) */
    x;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/y) */
    y;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/z) */
    z;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/matrixTransform) */
    matrixTransform(matrix) {
      throw new Error("Method not implemented.");
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/toJSON) */
    toJSON() {
      return { x: this.x, y: this.y, z: this.z, w: this.w };
    }
  };
  def(DOMPointReadOnly);
  var DOMPoint = class extends DOMPointReadOnly {
    constructor(x, y, z, w) {
      super();
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.w = w || 1;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/fromPoint) */
    static fromPoint(other) {
      return new DOMPoint(other?.x, other?.y, other?.z, other?.w);
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/w) */
    w;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/x) */
    x;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/y) */
    y;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/z) */
    z;
  };
  def(DOMPoint);

  // src/console.ts
  var bgRedDim = bgRgb(60, 0, 0);
  var bgYellowDim = bgRgb(60, 60, 0);
  var formatters = {
    s(v) {
      return String(v);
    },
    d(v) {
      return String(Number(v));
    },
    j(v) {
      return JSON.stringify(v);
    },
    o(v) {
      return inspect(v);
    },
    O(v) {
      return inspect(v);
    }
  };
  var RE = new RegExp(`\\%([${Object.keys(formatters).join("")}])`, "g");
  function format(...input) {
    if (input.length === 0)
      return "";
    let s = "";
    if (typeof input[0] === "string") {
      const pre = input.shift();
      RE.lastIndex = 0;
      s = pre.replace(RE, (_17, f) => {
        return formatters[f](input.shift());
      });
    }
    if (input.length) {
      if (s)
        s += " ";
      s += input.map((v) => inspect(v)).join(" ");
    }
    return s;
  }
  var console = {
    /**
     * Prints string `s` to the console on the screen, without any formatting applied.
     * Newline is _not_ appending to the end of the string.
     *
     * @param s The text to print to the console.
     */
    print(s) {
      $.print(s);
    },
    /**
     * Prints string `s` to the debug log file, without any formatting applied.
     * Newline is _not_ appending to the end of the string.
     *
     * @param s The text to print to the log file.
     * @note This function **does not** invoke _text rendering mode_, so it can safely be used when rendering with the Canvas API.
     */
    printErr(s) {
      $.printErr(s);
    },
    /**
     * Logs the formatted `input` to the screen as white text.
     */
    log(...input) {
      $.print(`${format(...input)}
`);
    },
    /**
     * Logs the formatted `input` to the screen as yellow text.
     */
    warn(...input) {
      $.print(`${bold(bgYellowDim(yellow(format(...input))))}
`);
    },
    /**
     * Logs the formatted `input` to the screen as red text.
     */
    error(...input) {
      $.print(`${bold(bgRedDim(red(format(...input))))}
`);
    },
    /**
     * Writes the formatted `input` to the debug log file.
     *
     * @note This function **does not** invoke _text rendering mode_, so it can safely be used when rendering with the Canvas API.
     */
    debug(...input) {
      $.printErr(`${format(...input)}
`);
    },
    /**
     * Logs the formatted `input` to the screen as white text,
     * including a stack trace of where the function was invoked.
     */
    trace(...input) {
      const f = format(...input);
      const s = new Error().stack.split("\n").slice(1).join("\n");
      $.print(`Trace${f ? `: ${f}` : ""}
${s}`);
    }
  };

  // src/storage.ts
  var _9 = createInternal();
  var Storage = class {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      _9.set(this, arguments[1]);
    }
    /**
     * The number of data items stored in the data store.
     *
     * @see https://developer.mozilla.org/docs/Web/API/Storage/length
     */
    get length() {
      return _9(this).length();
    }
    /**
     * Clears all keys stored in a data store.
     *
     * @see https://developer.mozilla.org/docs/Web/API/Storage/clear
     */
    clear() {
      _9(this).clear();
    }
    /**
     * Get an item from the provided key from the data store.
     *
     * @param key The name of the key you want to retrieve the value of.
     * @returns A string containing the value of the key. If the key does not exist, `null` is returned.
     * @see https://developer.mozilla.org/docs/Web/API/Storage/getItem
     */
    getItem(key) {
      return _9(this).getItem(key);
    }
    /**
     * Retrieves the name of the nth key in the data store. The order
     * of keys is user-agent defined, so you should not rely on it.
     *
     * @param index The number of the key you want to get the name of. This is a zero-based index.
     * @returns  A string containing the name of the key. If the index does not exist, `null` is returned.
     * @see https://developer.mozilla.org/docs/Web/API/Storage/key
     */
    key(index) {
      return _9(this).key(index);
    }
    /**
     * Removes the provided key from the data store, if it exists.
     *
     * If there is no item associated with the given key, this method will do nothing.
     *
     * @param key The name of the key you want to remove.
     * @see https://developer.mozilla.org/docs/Web/API/Storage/removeItem
     */
    removeItem(key) {
      _9(this).removeItem(key);
    }
    /**
     * Adds or updates the key to the data store with the provided value.
     *
     * @param key The name of the key you want to create / update.
     * @param value The value you want to give the key you are creating / updating.
     * @see https://developer.mozilla.org/docs/Web/API/Storage/setItem
     */
    setItem(key, value2) {
      _9(this).setItem(key, value2);
    }
  };
  def(Storage);
  Object.defineProperty(globalThis, "localStorage", {
    enumerable: true,
    configurable: true,
    get() {
      let nacp = readFileSync("romfs:/.nacp");
      if (!nacp) {
        console.debug(
          `No NACP file found in romfs. Using default values. Please set "titleId" property in \`package.json\``
        );
        nacp = new ArrayBuffer(16384);
        const view = new DataView(nacp);
        view.setBigUint64(12408, 0x016de8dbc0c70000n, true);
        view.setBigUint64(12416, 0x3e00000n, true);
        view.setBigUint64(12424, 0x180000n, true);
      }
      const app = Object.create(Application.prototype);
      app.nacp = nacp;
      const profile = currentProfile({ required: true });
      const name = "localstorage";
      const base = `${name}:/localStorage/`;
      let dev;
      try {
        dev = app.mountSaveData(name, profile);
      } catch (err) {
        if (err.description !== 1002)
          throw err;
        app.createSaveData(profile);
        dev = app.mountSaveData(name, profile);
      }
      const impl = {
        clear() {
          removeSync(base);
        },
        getItem(key) {
          const b = readFileSync(new URL(key, base));
          if (!b)
            return null;
          return decoder.decode(b);
        },
        key(index) {
          const keys = readDirSync(base) || [];
          return keys[index] ?? null;
        },
        removeItem(key) {
          removeSync(new URL(key, base));
          dev.commit();
        },
        setItem(key, value2) {
          writeFileSync(new URL(key, base), value2);
          dev.commit();
        },
        length() {
          const keys = readDirSync(base);
          return keys ? keys.length : 0;
        }
      };
      const storage = new Storage(INTERNAL_SYMBOL, impl);
      const proxy = new Proxy(storage, {
        has(_17, p2) {
          if (typeof p2 !== "string")
            return false;
          return statSync(new URL(p2, base)) !== null;
        },
        get(target, p2) {
          if (typeof p2 !== "string")
            return void 0;
          if (typeof target[p2] !== "undefined") {
            return target[p2];
          }
          return target.getItem(p2);
        },
        set(target, p2, newValue) {
          if (typeof p2 !== "string")
            return false;
          if (typeof target[p2] !== "undefined") {
            return false;
          }
          target.setItem(p2, newValue);
          return true;
        },
        deleteProperty(target, p2) {
          if (typeof p2 !== "string")
            return false;
          target.removeItem(p2);
          return true;
        },
        ownKeys() {
          return readDirSync(base) || [];
        },
        getOwnPropertyDescriptor(target, p2) {
          if (typeof p2 !== "string")
            return;
          if (typeof target[p2] !== "undefined")
            return;
          const v = this.get(target, p2, target);
          if (typeof v === "undefined")
            return;
          return {
            enumerable: true,
            configurable: true,
            writable: true,
            value: v
          };
        }
      });
      _9.set(proxy, impl);
      Object.defineProperty(globalThis, "localStorage", { value: proxy });
      return proxy;
    }
  });

  // src/wasm.ts
  var wasm_exports = {};
  __export(wasm_exports, {
    CompileError: () => CompileError,
    Global: () => Global,
    Instance: () => Instance,
    LinkError: () => LinkError,
    Memory: () => Memory,
    Module: () => Module,
    RuntimeError: () => RuntimeError,
    Table: () => Table,
    compile: () => compile,
    compileStreaming: () => compileStreaming,
    instantiate: () => instantiate,
    instantiateStreaming: () => instantiateStreaming,
    validate: () => validate
  });
  var CompileError = class extends Error {
    name = "CompileError";
  };
  var RuntimeError = class extends Error {
    name = "RuntimeError";
  };
  var LinkError = class extends Error {
    name = "LinkError";
  };
  function toWasmError(e) {
    if (e && e instanceof Error && "wasmError" in e) {
      switch (e.wasmError) {
        case "CompileError":
          return new CompileError(e.message);
        case "LinkError":
          return new LinkError(e.message);
        case "RuntimeError":
          return new RuntimeError(e.message);
      }
    }
    return e;
  }
  var globalInternalsMap = /* @__PURE__ */ new WeakMap();
  var Global = class {
    constructor(descriptor, value2) {
      globalInternalsMap.set(this, { descriptor, value: value2 });
    }
    /**
     * The value contained inside the global variable — this can be used to directly set and get the global's value.
     */
    get value() {
      const i = globalInternalsMap.get(this);
      return i.opaque ? $.wasmGlobalGet(i.opaque) : i.value;
    }
    set value(v) {
      const i = globalInternalsMap.get(this);
      if (i.opaque) {
        $.wasmGlobalSet(i.opaque, v);
      } else {
        i.value = v;
      }
    }
    /**
     * Old-style method that returns the value contained inside the global variable.
     */
    valueOf() {
      return this.value;
    }
  };
  function bindGlobal(g, opaque = $.wasmNewGlobal()) {
    const i = globalInternalsMap.get(g);
    if (!i)
      throw new Error(`No internal state for Global`);
    i.opaque = opaque;
    return opaque;
  }
  function unwrapImports(importObject = {}) {
    return Object.entries(importObject).flatMap(
      ([m, i]) => Object.entries(i).map(([n, v]) => {
        let val;
        let i2;
        let kind;
        if (typeof v === "function") {
          kind = "function";
          val = v;
        } else if (v instanceof Global) {
          kind = "global";
          i2 = v.value;
          val = bindGlobal(v);
        } else if (v instanceof Memory) {
          kind = "memory";
          val = v;
        } else {
          throw new LinkError(`Unsupported import type for "${m}.${n}"`);
        }
        return {
          module: m,
          name: n,
          kind,
          val,
          i: i2
        };
      })
    );
  }
  function wrapExports(ex) {
    const e = /* @__PURE__ */ Object.create(null);
    for (const v of ex) {
      if (v.kind === "function") {
        const fn = callFunc.bind(null, v.val);
        Object.defineProperty(fn, "name", { value: v.name });
        e[v.name] = fn;
      } else if (v.kind === "global") {
        const g = new Global({ value: v.value, mutable: v.mutable });
        bindGlobal(g, v.val);
        e[v.name] = g;
      } else if (v.kind === "memory") {
        Object.setPrototypeOf(v.val, Memory.prototype);
        e[v.name] = v.val;
      } else if (v.kind === "table") {
        Object.setPrototypeOf(v.val, Table.prototype);
        e[v.name] = v.val;
      } else {
        throw new LinkError(`Unsupported export type "${v.kind}"`);
      }
    }
    return Object.freeze(e);
  }
  var instanceInternalsMap = /* @__PURE__ */ new WeakMap();
  var Instance = class {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports) */
    exports;
    constructor(moduleObject, importObject) {
      const modInternal = moduleInternalsMap.get(moduleObject);
      if (!modInternal)
        throw new Error(`No internal state for Module`);
      const [opaque, exp] = $.wasmNewInstance(
        modInternal.opaque,
        unwrapImports(importObject)
      );
      instanceInternalsMap.set(this, { module: moduleObject, opaque });
      this.exports = wrapExports(exp);
    }
  };
  function callFunc(func, ...args) {
    try {
      return $.wasmCallFunc(func, ...args);
    } catch (err) {
      throw toWasmError(err);
    }
  }
  var Memory = class {
    constructor(descriptor) {
      const that = $.wasmMemNew(descriptor);
      Object.setPrototypeOf(that, Memory.prototype);
      return that;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow) */
    // @ts-expect-error This is a native function
    grow(delta) {
    }
  };
  $.wasmInitMemory(Memory);
  var moduleInternalsMap = /* @__PURE__ */ new WeakMap();
  var Module = class {
    constructor(bytes) {
      const buffer = bufferSourceToArrayBuffer(bytes);
      moduleInternalsMap.set(this, {
        // Hold a reference to the bytes to prevent garbage collection
        buffer,
        opaque: $.wasmNewModule(buffer)
      });
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections) */
    static customSections(moduleObject, sectionName) {
      throw new Error("Method not implemented.");
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports) */
    static exports(moduleObject) {
      const i = moduleInternalsMap.get(moduleObject);
      if (!i)
        throw new Error(`No internal state for Module`);
      return $.wasmModuleExports(i.opaque);
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports) */
    static imports(moduleObject) {
      const i = moduleInternalsMap.get(moduleObject);
      if (!i)
        throw new Error(`No internal state for Module`);
      return $.wasmModuleImports(i.opaque);
    }
  };
  var Table = class {
    constructor(descriptor, value2) {
      throw new Error("Method not implemented.");
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get) */
    get(index) {
      const fn = $.wasmTableGet(this, index);
      return callFunc.bind(null, fn);
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow) */
    grow(delta, value2) {
      throw new Error("Method not implemented.");
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set) */
    set(index, value2) {
      throw new Error("Method not implemented.");
    }
  };
  $.wasmInitTable(Table);
  async function compile(bytes) {
    return new Module(bytes);
  }
  async function compileStreaming(source) {
    const res = await source;
    if (!res.ok) {
    }
    const buf = await res.arrayBuffer();
    return compile(buf);
  }
  async function instantiate(bytes, importObject) {
    if (bytes instanceof Module) {
      return new Instance(bytes, importObject);
    }
    const m = await compile(bytes);
    const instance = new Instance(m, importObject);
    return { module: m, instance };
  }
  async function instantiateStreaming(source, importObject) {
    const m = await compileStreaming(source);
    const instance = await instantiate(m, importObject);
    return { module: m, instance };
  }
  function validate(bytes) {
    throw new Error("Method not implemented.");
  }

  // src/source-map.ts
  var import_data_uri_to_buffer2 = __toESM(require_dist());
  var import_trace_mapping = __toESM(require_trace_mapping_umd());
  var SOURCE_MAPPING_URL_PREFIX = "//# sourceMappingURL=";
  var sourceMapCache = /* @__PURE__ */ new Map();
  function filenameToTracer(filename) {
    let tracer = sourceMapCache.get(filename);
    if (typeof tracer !== "undefined")
      return tracer;
    tracer = null;
    const contentsBuffer = readFileSync(filename);
    if (contentsBuffer) {
      const contents = decoder.decode(contentsBuffer).trimEnd();
      const lastNewline = contents.lastIndexOf("\n");
      const lastLine = contents.slice(lastNewline + 1);
      if (lastLine.startsWith(SOURCE_MAPPING_URL_PREFIX)) {
        const sourceMappingURL = lastLine.slice(
          SOURCE_MAPPING_URL_PREFIX.length
        );
        let sourceMapBuffer;
        if (sourceMappingURL.startsWith("data:")) {
          sourceMapBuffer = (0, import_data_uri_to_buffer2.dataUriToBuffer)(sourceMappingURL).buffer;
        } else {
          sourceMapBuffer = readFileSync(
            new URL(sourceMappingURL, filename)
          );
        }
        if (sourceMapBuffer) {
          const sourceMap = JSON.parse(
            decoder.decode(sourceMapBuffer)
          );
          tracer = new import_trace_mapping.TraceMap(sourceMap);
        }
      }
      sourceMapCache.set(filename, tracer);
    }
    return tracer;
  }
  Error.prepareStackTrace = (_17, callsites) => {
    return callsites.map((callsite) => {
      try {
        let loc = callsite.isNative() ? "native" : "unknown";
        let name = callsite.getFunctionName() || "<anonymous>";
        let filename = callsite.getFileName();
        if (filename) {
          const proto = filename === "romfs:/runtime.js" ? "nxjs" : "app";
          let line = callsite.getLineNumber() ?? 1;
          let column = callsite.getColumnNumber() ?? 1;
          const tracer = filenameToTracer(filename);
          if (tracer) {
            const traced = (0, import_trace_mapping.originalPositionFor)(tracer, {
              line,
              column
            });
            if (typeof traced.source === "string")
              filename = traced.source;
            if (typeof traced.name === "string")
              name = traced.name;
            if (typeof traced.column === "number")
              column = traced.column;
            if (typeof traced.line === "number")
              line = traced.line;
          }
          loc = `${proto}:${filename}:${line}:${column}`;
        }
        return `    at ${name} (${loc})`;
      } catch (err) {
        return `    <error calculating stack: ${err}>`;
      }
    }).join("\n");
  };

  // src/keyboard.ts
  var init5 = false;
  var previousKeys = {
    [0]: 0n,
    [1]: 0n,
    [2]: 0n,
    [3]: 0n,
    modifiers: 0n
  };
  function dispatchKeyboardEvents(target) {
    if (!init5)
      return;
    const keys = $.hidGetKeyboardStates();
    for (let i = 0; i < 4; i++) {
      const keysDown = ~previousKeys[i] & keys[i];
      const keysUp = previousKeys[i] & ~keys[i];
      for (let k = 0; k < 64; k++) {
        if (keysDown & 1n << (BigInt(k) & 63n)) {
          const o = {
            keyCode: i * 64 + k,
            modifiers: keys.modifiers
          };
          target.dispatchEvent(new KeyboardEvent("keydown", o));
        }
        if (keysUp & 1n << (BigInt(k) & 63n)) {
          const o = {
            keyCode: i * 64 + k,
            modifiers: keys.modifiers
          };
          target.dispatchEvent(new KeyboardEvent("keyup", o));
        }
      }
    }
    previousKeys = keys;
  }

  // src/window.ts
  var Window = class extends EventTarget {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      super();
    }
  };
  def(Window);
  var window2 = globalThis;
  Object.setPrototypeOf(window2, Window.prototype);
  def(window2, "window");

  // src/canvas/canvas-rendering-context-2d.ts
  var import_parse_css_font = __toESM(require_dist3());

  // src/canvas/image-data.ts
  var ImageData = class {
    colorSpace;
    data;
    height;
    width;
    constructor(swOrData, shOrSw, settingsOrSh, settings) {
      let imageDataSettings;
      if (typeof swOrData === "number") {
        this.width = swOrData;
        this.height = shOrSw;
        if (typeof settingsOrSh !== "number") {
          imageDataSettings = settingsOrSh;
        }
        this.data = new Uint8ClampedArray(this.width * this.height * 4);
      } else {
        this.data = swOrData;
        this.width = shOrSw;
        if (typeof settingsOrSh === "number") {
          this.height = settingsOrSh;
        } else {
          this.height = this.data.length / this.width | 0;
        }
        imageDataSettings = settings;
      }
      this.colorSpace = imageDataSettings?.colorSpace || "srgb";
    }
  };
  def(ImageData);

  // src/font/font-face.ts
  var FontFace = class {
    constructor(family, source, descriptors = {}) {
      if (typeof source === "string") {
        throw new Error("Font `source` must be an ArrayBuffer");
      }
      const buffer = bufferSourceToArrayBuffer(source);
      const f = $.fontFaceNew(buffer);
      Object.setPrototypeOf(f, FontFace.prototype);
      f.family = family;
      f.ascentOverride = descriptors.ascentOverride ?? "normal";
      f.descentOverride = descriptors.descentOverride ?? "normal";
      f.display = descriptors.display ?? "auto";
      f.featureSettings = descriptors.featureSettings ?? "normal";
      f.lineGapOverride = descriptors.lineGapOverride ?? "normal";
      f.loaded = Promise.resolve(f);
      f.status = "loaded";
      f.stretch = descriptors.stretch ?? "normal";
      f.style = descriptors.style ?? "normal";
      f.unicodeRange = descriptors.unicodeRange ?? "";
      f.variant = descriptors.variant ?? "normal";
      f.weight = descriptors.weight ?? "normal";
      return f;
    }
    async load() {
      throw new Error("Method not implemented.");
    }
  };
  def(FontFace);

  // src/font/font-face-set.ts
  var _10 = createInternal();
  var FontFaceSet = class extends EventTarget {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      super();
      _10.set(this, /* @__PURE__ */ new Set());
      this.ready = Promise.resolve(this);
      this.status = "loaded";
    }
    onloading = null;
    onloadingdone = null;
    onloadingerror = null;
    ready;
    status;
    check(font, text) {
      throw new Error("Method not implemented.");
    }
    load(font, text) {
      throw new Error("Method not implemented.");
    }
    // Set interface
    get size() {
      return _10(this).size;
    }
    add(font) {
      _10(this).add(font);
      return this;
    }
    clear() {
      _10(this).clear();
    }
    delete(font) {
      return _10(this).delete(font);
    }
    has(font) {
      return _10(this).has(font);
    }
    keys() {
      return _10(this).keys();
    }
    values() {
      return _10(this).values();
    }
    entries() {
      return _10(this).entries();
    }
    forEach(callbackfn, thisArg = this) {
      for (const font of _10(this)) {
        callbackfn.call(thisArg, font, font, this);
      }
    }
    [Symbol.iterator]() {
      return _10(this)[Symbol.iterator]();
    }
  };
  def(FontFaceSet);
  var fonts = new FontFaceSet(INTERNAL_SYMBOL);
  def(fonts, "fonts");
  function findFont(fontFaceSet, desired) {
    if (!desired.family) {
      throw new Error("No `font-family` was specified");
    }
    for (const family of desired.family) {
      for (const fontFace of fontFaceSet) {
        if (family === fontFace.family && desired.stretch === fontFace.stretch && desired.style === fontFace.style && desired.variant === fontFace.variant && desired.weight === fontFace.weight) {
          return fontFace;
        }
      }
    }
    return null;
  }
  function addSystemFont(fonts2) {
    const data = $.getSystemFont();
    const font = new FontFace("system-ui", data);
    fonts2.add(font);
    return font;
  }

  // src/canvas/canvas-rendering-context-2d.ts
  var toPx = require_to_px();
  var colorRgba2 = require_color_rgba();
  var _11 = createInternal();
  var CanvasRenderingContext2D = class {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      const canvas = arguments[1];
      const ctx = $.canvasContext2dNew(canvas);
      Object.setPrototypeOf(ctx, CanvasRenderingContext2D.prototype);
      _11.set(ctx, { canvas });
      ctx.font = "10px system-ui";
      return ctx;
    }
    /**
     * A read-only reference to the {@link Screen | `Canvas`} object
     * that is associated with the context.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/canvas
     */
    get canvas() {
      return _11(this).canvas;
    }
    /**
     * Specifies the current text style to use when drawing text.
     * This string uses the same syntax as the
     * [CSS font](https://developer.mozilla.org/docs/Web/CSS/font) specifier.
     *
     * @default "10px system-ui"
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/font
     */
    get font() {
      return $.canvasContext2dGetFont(this);
    }
    set font(v) {
      if (!v || this.font === v)
        return;
      const parsed = returnOnThrow(import_parse_css_font.default, v);
      if (parsed instanceof Error) {
        return;
      }
      if ("system" in parsed) {
        return;
      }
      if (typeof parsed.size !== "string") {
        return;
      }
      if (!parsed.family) {
        return;
      }
      const px = toPx(parsed.size);
      if (typeof px !== "number") {
        return;
      }
      let font = findFont(fonts, parsed);
      if (!font) {
        if (parsed.family.includes("system-ui")) {
          font = addSystemFont(fonts);
        } else {
          return;
        }
      }
      $.canvasContext2dSetFont(this, font, px, v);
    }
    /**
     * Strokes (outlines) the current or given path with the current stroke style.
     *
     * @param path A {@link Path2D | `Path2D`} path to stroke.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/stroke
     */
    stroke(path) {
      stub();
    }
    fill(fillRuleOrPath, fillRule) {
      stub();
    }
    /**
     * Specifies the color, gradient, or pattern to use inside shapes.
     *
     * @default "#000" (black)
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle
     */
    get fillStyle() {
      return rgbaToString($.canvasContext2dGetFillStyle(this));
    }
    set fillStyle(v) {
      if (typeof v === "string") {
        const parsed = colorRgba2(v);
        if (!parsed || parsed.length !== 4) {
          return;
        }
        $.canvasContext2dSetFillStyle(this, ...parsed);
      } else {
        throw new Error("CanvasGradient/CanvasPattern not implemented.");
      }
    }
    /**
     * Specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes.
     *
     * @default "#000" (black)
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle
     */
    get strokeStyle() {
      return rgbaToString($.canvasContext2dGetStrokeStyle(this));
    }
    set strokeStyle(v) {
      if (typeof v === "string") {
        const parsed = colorRgba2(v);
        if (!parsed || parsed.length !== 4) {
          return;
        }
        $.canvasContext2dSetStrokeStyle(this, ...parsed);
      } else {
        throw new Error("CanvasGradient/CanvasPattern not implemented.");
      }
    }
    /**
     * Starts a new path by emptying the list of sub-paths.
     * Call this method when you want to create a new path.
     *
     * @note To create a new sub-path (i.e. one matching the current canvas state),
     * you can use `CanvasRenderingContext2D.moveTo()`.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/beginPath
     */
    beginPath() {
      stub();
    }
    /**
     * Attempts to add a straight line from the current point to the start of
     * the current sub-path. If the shape has already been closed or has only
     * one point, this function does nothing.
     *
     * This method doesn't draw anything to the canvas directly. You can render
     * the path using the stroke() or fill() methods.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/closePath
     */
    closePath() {
      stub();
    }
    /**
     * Saves the entire state of the canvas by pushing the current state onto a stack.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/save
     */
    restore() {
      stub();
    }
    /**
     * Restores the most recently saved canvas state by popping the top entry in the
     * drawing state stack. If there is no saved state, this method does nothing.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/restore
     */
    save() {
      stub();
    }
    /**
     * Adds the specified angle of rotation to the transformation matrix.
     *
     * @param angle The rotation angle, clockwise in radians. You can use `degree * Math.PI / 180` to calculate a radian from a degree.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/rotate
     */
    rotate(angle) {
      stub();
    }
    /**
     * Adds a scaling transformation to the canvas units horizontally and/or vertically.
     *
     * By default, one unit on the canvas is exactly one pixel. A scaling transformation
     * modifies this behavior. For instance, a scaling factor of 0.5 results in a unit
     * size of 0.5 pixels; shapes are thus drawn at half the normal size. Similarly, a
     * scaling factor of 2.0 increases the unit size so that one unit becomes two pixels;
     * shapes are thus drawn at twice the normal size.
     *
     * @param x Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis. A value of `1` results in no horizontal scaling.
     * @param y Scaling factor in the vertical direction. A negative value flips pixels across the horizontal axis. A value of `1` results in no vertical scaling.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/scale
     */
    scale(x, y) {
      stub();
    }
    /**
     * Retrieves the current transformation matrix being applied to the context.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getTransform
     */
    getTransform() {
      return new DOMMatrix($.canvasContext2dGetTransform(this));
    }
    /**
     * Multiplies the current transformation with the matrix described by the arguments
     * of this method. This lets you scale, rotate, translate (move), and skew the context.
     *
     * @param a (`m11`) The cell in the first row and first column of the matrix.
     * @param b (`m12`) The cell in the second row and first column of the matrix.
     * @param c (`m21`) The cell in the first row and second column of the matrix.
     * @param d (`m22`) The cell in the second row and second column of the matrix.
     * @param e (`m41`) The cell in the first row and third column of the matrix.
     * @param f (`m42`) The cell in the second row and third column of the matrix.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/transform
     */
    transform(a, b, c, d, e, f) {
      stub();
    }
    /**
     * Adds a translation transformation to the current matrix by moving the canvas
     * and its origin `x` units horizontally and `y` units vertically on the grid.
     *
     * @param x Distance to move in the horizontal direction. Positive values are to the right, and negative to the left.
     * @param y Distance to move in the vertical direction. Positive values are down, and negative are up.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/translate
     */
    translate(x, y) {
      stub();
    }
    /**
     * Resets the current transform to the identity matrix.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/resetTransform
     */
    resetTransform() {
      stub();
    }
    /**
     * Gets the current line dash pattern.
     *
     * @returns An `Array` of numbers that specify distances to alternately draw a line and a gap (in coordinate space units). If the number, when setting the elements, is odd, the elements of the array get copied and concatenated. For example, setting the line dash to `[5, 15, 25]` will result in getting back `[5, 15, 25, 5, 15, 25]`.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getLineDash
     */
    getLineDash() {
      stub();
    }
    /**
     * Sets the line dash pattern used when stroking lines. It uses an array of values that specify alternating lengths of lines and gaps which describe the pattern.
     *
     * @note To return to using solid lines, set the line dash list to an empty array.
     * @param segments An `Array` of numbers that specify distances to alternately draw a line and a gap (in coordinate space units). If the number of elements in the array is odd, the elements of the array get copied and concatenated. For example, `[5, 15, 25]` will become `[5, 15, 25, 5, 15, 25]`. If the array is empty, the line dash list is cleared and line strokes return to being solid.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash
     */
    setLineDash(segments) {
      stub();
    }
    /**
     * Erases the pixels in a rectangular area by setting them to transparent black.
     *
     * @param x The x-axis coordinate of the rectangle's starting point.
     * @param y The y-axis coordinate of the rectangle's starting point.
     * @param width The rectangle's width. Positive values are to the right, and negative to the left.
     * @param height The rectangle's height. Positive values are down, and negative are up.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/clearRect
     */
    clearRect(x, y, width, height) {
      stub();
    }
    /**
     * Draws a rectangle that is filled according to the current
     * {@link CanvasRenderingContext2D.fillStyle | `fillStyle`}.
     *
     * This method draws directly to the canvas without modifying the current path,
     * so any subsequent {@link CanvasRenderingContext2D.fill | `fill()`} or
     * {@link CanvasRenderingContext2D.stroke | `stroke()`} calls will have no effect on it.
     *
     * @param x The x-axis coordinate of the rectangle's starting point.
     * @param y The y-axis coordinate of the rectangle's starting point.
     * @param width The rectangle's width. Positive values are to the right, and negative to the left.
     * @param height The rectangle's height. Positive values are down, and negative are up.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillRect
     */
    fillRect(x, y, width, height) {
      stub();
    }
    /**
     * Draws a rectangle that is stroked (outlined) according to the current
     * {@link CanvasRenderingContext2D.strokeStyle | `strokeStyle`} and other context settings.
     *
     * This method draws directly to the canvas without modifying the current path,
     * so any subsequent {@link CanvasRenderingContext2D.fill | `fill()`} or
     * {@link CanvasRenderingContext2D.stroke | `stroke()`} calls will have no effect on it.
     *
     * @param x The x-axis coordinate of the rectangle's starting point.
     * @param y The y-axis coordinate of the rectangle's starting point.
     * @param width The rectangle's width. Positive values are to the right, and negative to the left.
     * @param height The rectangle's height. Positive values are down, and negative are up.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeRect
     */
    strokeRect(x, y, width, height) {
      stub();
    }
    createImageData(sw, sh, settings) {
      let width;
      let height;
      if (typeof sw === "number") {
        if (typeof sh !== "number") {
          throw new TypeError(
            "CanvasRenderingContext2D.createImageData: Argument 1 is not an object."
          );
        }
        width = sw;
        height = sh;
      } else {
        width = sw.width;
        height = sw.height;
      }
      if (width <= 0 || height <= 0) {
        throw new TypeError(
          "CanvasRenderingContext2D.createImageData: Invalid width or height"
        );
      }
      return new ImageData(width, height, settings);
    }
    /**
     * Returns an {@link ImageData | `ImageData`} object representing the underlying pixel
     * data for a specified portion of the canvas.
     *
     * This method is not affected by the canvas's transformation matrix. If the specified
     * rectangle extends outside the bounds of the canvas, the pixels outside the canvas
     * are transparent black in the returned `ImageData` object.
     *
     * @param sx The x-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.
     * @param sy The y-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.
     * @param sw The width of the rectangle from which the ImageData will be extracted. Positive values are to the right, and negative to the left.
     * @param sh The height of the rectangle from which the ImageData will be extracted. Positive values are down, and negative are up.
     * @returns An `ImageData` object containing the image data for the rectangle of the canvas specified.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getImageData
     */
    getImageData(sx, sy, sw, sh, settings) {
      return new ImageData(
        new Uint8ClampedArray(
          $.canvasContext2dGetImageData(this, sx, sy, sw, sh)
        ),
        sw,
        sh,
        settings
      );
    }
    putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
      stub();
    }
    drawImage(image, dxOrSx, dyOrSy, dwOrSw, dhOrSh, dx, dy, dw, dh) {
      stub();
    }
    lineTo(x, y) {
      stub();
    }
    moveTo(x, y) {
      stub();
    }
    rect(x, y, w, h) {
      stub();
    }
    arc(x, y, radius, startAngle, endAngle, counterclockwise) {
      stub();
    }
    arcTo(x1, y1, x2, y2, radius) {
      stub();
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
      stub();
    }
    quadraticCurveTo(cpx, cpy, x, y) {
      stub();
    }
    ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
      stub();
    }
    /**
     * Adds a rounded rectangle to the current path.
     *
     * @param x The x-axis coordinate of the rectangle's starting point, in pixels.
     * @param y The y-axis coordinate of the rectangle's starting point, in pixels.
     * @param width The rectangle's width. Positive values are to the right, and negative to the left.
     * @param height The rectangle's height. Positive values are down, and negative are up.
     * @param radii A number or list specifying the radii of the circular arc to be used for the corners of the rectangle.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect
     */
    roundRect(x, y, width, height, radii = 0) {
      stub();
    }
    /**
     * Draws the outlines of the characters of the text string at the specified coordinates,
     * stroking the string's characters with the current {@link CanvasRenderingContext2D.strokeStyle | `strokeStyle`}.
     *
     * @param text A string specifying the text string to render into the context.
     * @param x The x-axis coordinate of the point at which to begin drawing the text, in pixels.
     * @param y The y-axis coordinate of the baseline on which to begin drawing the text, in pixels.
     * @param maxWidth The maximum number of pixels wide the text may be once rendered. If not specified, there is no limit to the width of the text.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeText
     */
    strokeText(text, x, y, maxWidth) {
      stub();
    }
    createConicGradient(startAngle, x, y) {
      throw new Error("Method not implemented.");
    }
    createLinearGradient(x0, y0, x1, y1) {
      throw new Error("Method not implemented.");
    }
    createPattern(image, repetition) {
      throw new Error("Method not implemented.");
    }
    createRadialGradient(x0, y0, r0, x1, y1, r1) {
      throw new Error("Method not implemented.");
    }
    /**
     * Draws a text string at the specified coordinates, filling the string's
     * characters with the current {@link CanvasRenderingContext2D.fillStyle | `fillStyle`}.
     *
     * @param text A string specifying the text string to render into the context.
     * @param x The x-axis coordinate of the point at which to begin drawing the text, in pixels.
     * @param y The y-axis coordinate of the baseline on which to begin drawing the text, in pixels.
     * @param maxWidth The maximum number of pixels wide the text may be once rendered. If not specified, there is no limit to the width of the text.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillText
     */
    fillText(text, x, y, maxWidth) {
      stub();
    }
    /**
     * Returns a `TextMetrics` object that contains information about
     * the measured text (such as its width, for example).
     *
     * @param text The text string to measure.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/measureText
     */
    measureText(text) {
      stub();
    }
  };
  $.canvasContext2dInitClass(CanvasRenderingContext2D);
  def(CanvasRenderingContext2D);

  // src/touchscreen.ts
  var init6 = false;
  var previousTouches = [];
  function initTouchscreen() {
    if (!init6) {
      $.hidInitializeTouchScreen();
      init6 = true;
    }
  }
  function dispatchTouchEvents(screen2) {
    if (!init6)
      return;
    const touches = $.hidGetTouchScreenStates();
    if (touches) {
      const startTouches = [];
      const changedTouches = [];
      const endTouches = [];
      const touchIds = /* @__PURE__ */ new Set();
      for (const touch of touches) {
        let started = true;
        for (const prevTouch of previousTouches) {
          if (touch.identifier === (prevTouch.identifier | 0)) {
            started = false;
            touch.identifier = prevTouch.identifier;
            touchIds.add(touch.identifier);
            if (!touchIsEqual(touch, prevTouch)) {
              changedTouches.push(touch);
            }
            break;
          }
        }
        if (started) {
          touch.identifier += Math.random();
          touchIds.add(touch.identifier);
          startTouches.push(touch);
        }
      }
      previousTouches = touches;
      for (const prevTouch of previousTouches) {
        if (!touchIds.has(prevTouch.identifier)) {
          endTouches.push(prevTouch);
        }
      }
      if (startTouches.length) {
        screen2.dispatchEvent(
          new TouchEvent("touchstart", {
            touches,
            changedTouches: startTouches
          })
        );
      }
      if (changedTouches.length) {
        screen2.dispatchEvent(
          new TouchEvent("touchmove", {
            touches,
            changedTouches
          })
        );
      }
      if (endTouches.length) {
        screen2.dispatchEvent(
          new TouchEvent("touchend", {
            touches,
            changedTouches: endTouches
          })
        );
      }
    } else if (previousTouches.length) {
      screen2.dispatchEvent(
        new TouchEvent("touchend", {
          touches: [],
          changedTouches: previousTouches
        })
      );
      previousTouches = [];
    }
  }
  function touchIsEqual(a, b) {
    return a.screenX === b.screenX && a.screenY === b.screenY && a.radiusX === b.radiusX && a.radiusY === b.radiusY && a.rotationAngle === b.rotationAngle;
  }

  // src/screen.ts
  var _12 = createInternal();
  var Screen = class extends EventTarget {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      super();
      const c = $.canvasNew(1280, 720);
      Object.setPrototypeOf(c, Screen.prototype);
      _12.set(c, {});
      return c;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Screen/availWidth) */
    get availWidth() {
      return this.width;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Screen/availHeight) */
    get availHeight() {
      return this.height;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Screen/colorDepth) */
    get colorDepth() {
      return 24;
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Screen/orientation) */
    get orientation() {
      throw new Error("Method not implemented.");
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Screen/pixelDepth) */
    get pixelDepth() {
      return 24;
    }
    addEventListener(type, callback, options) {
      if (type === "touchstart" || type === "touchmove" || type === "touchend") {
        initTouchscreen();
      }
      super.addEventListener(type, callback, options);
    }
    /**
     * Creates a {@link Blob} object representing the image contained on the screen.
     *
     * @example
     *
     * ```typescript
     * screen.toBlob(blob => {
     *   blob.arrayBuffer().then(buffer => {
     *     Switch.writeFileSync('out.png', buffer);
     *   });
     * });
     * ```
     *
     * @param callback A callback function with the resulting {@link Blob} object as a single argument. `null` may be passed if the image cannot be created for any reason.
     * @param type A string indicating the image format. The default type is `image/png`. This image format will be also used if the specified type is not supported.
     * @param quality A number between `0` and `1` indicating the image quality to be used when creating images using file formats that support lossy compression (such as `image/jpeg`). A user agent will use its default quality value if this option is not specified, or if the number is outside the allowed range.
     */
    toBlob(callback, type = "image/png", quality = 0.8) {
      throw new Error("Method not implemented.");
    }
    /**
     * Returns a `data:` URL containing a representation of the image in the format specified by the type parameter.
     *
     * @example
     *
     * ```typescript
     * const url = screen.toDataURL();
     * fetch(url)
     *   .then(res => res.arrayBuffer())
     *   .then(buffer => {
     *     Switch.writeFileSync('out.png', buffer);
     *   });
     * ```
     *
     * @param type A string indicating the image format. The default type is `image/png`. This image format will be also used if the specified type is not supported.
     * @param quality A number between `0` and `1` indicating the image quality to be used when creating images using file formats that support lossy compression (such as `image/jpeg`). The default quality value will be used if this option is not specified, or if the number is outside the allowed range.
     * @see https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toDataURL
     */
    toDataURL(type = "image/png", quality = 0.8) {
      throw new Error("Method not implemented.");
    }
    // Compat with HTML DOM interface
    className = "";
    get nodeType() {
      return 1;
    }
    get nodeName() {
      return "CANVAS";
    }
    getAttribute(name) {
      if (name === "width")
        return String(this.width);
      if (name === "height")
        return String(this.height);
      return null;
    }
    setAttribute(name, value2) {
    }
    getContext(contextId) {
      if (contextId !== "2d") {
        throw new TypeError('Only "2d" rendering context is supported');
      }
      const i = _12(this);
      if (!i.context2d) {
        i.context2d = new CanvasRenderingContext2D(
          // @ts-expect-error Internal constructor
          INTERNAL_SYMBOL,
          this
        );
        $.framebufferInit(this);
      }
      return i.context2d;
    }
  };
  $.canvasInitClass(Screen);
  def(Screen);
  var screen = new Screen(INTERNAL_SYMBOL);
  def(screen, "screen");

  // src/canvas/path2d.ts
  var ARG_LENGTH = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
  };
  var SEGMENT_PATTERN = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
  var NUMBER = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
  function parseValues(args) {
    const numbers = args.match(NUMBER);
    return numbers ? numbers.map(Number) : [];
  }
  function parsePath(path) {
    const data = [];
    const p2 = String(path).trim();
    if (p2[0] !== "M" && p2[0] !== "m") {
      return data;
    }
    p2.replace(SEGMENT_PATTERN, (_17, command, args) => {
      const theArgs = parseValues(args);
      let type = command.toLowerCase();
      let theCommand = command;
      if (type === "m" && theArgs.length > 2) {
        data.push([theCommand, ...theArgs.splice(0, 2)]);
        type = "l";
        theCommand = theCommand === "m" ? "l" : "L";
      }
      if (theArgs.length < ARG_LENGTH[type]) {
        return "";
      }
      data.push([theCommand, ...theArgs.splice(0, ARG_LENGTH[type])]);
      while (theArgs.length >= ARG_LENGTH[type] && theArgs.length && ARG_LENGTH[type]) {
        data.push([theCommand, ...theArgs.splice(0, ARG_LENGTH[type])]);
      }
      return "";
    });
    return data;
  }
  var _13 = createInternal();
  var Path2D = class {
    constructor(path) {
      let commands;
      if (path && path instanceof Path2D) {
        commands = [..._13(path)];
      } else if (path) {
        commands = parsePath(path);
      }
      _13.set(this, commands || []);
    }
    addPath(path) {
      if (path && path instanceof Path2D) {
        _13(this).push(..._13(path));
      }
    }
    moveTo(x, y) {
      _13(this).push(["M", x, y]);
    }
    lineTo(x, y) {
      _13(this).push(["L", x, y]);
    }
    arc(x, y, r, start, end, ccw) {
      _13(this).push(["AC", x, y, r, start, end, !!ccw]);
    }
    arcTo(x1, y1, x2, y2, r) {
      _13(this).push(["AT", x1, y1, x2, y2, r]);
    }
    ellipse(x, y, rx, ry, angle, start, end, ccw) {
      _13(this).push(["E", x, y, rx, ry, angle, start, end, !!ccw]);
    }
    closePath() {
      _13(this).push(["Z"]);
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
      _13(this).push(["C", cp1x, cp1y, cp2x, cp2y, x, y]);
    }
    quadraticCurveTo(cpx, cpy, x, y) {
      _13(this).push(["Q", cpx, cpy, x, y]);
    }
    rect(x, y, width, height) {
      _13(this).push(["R", x, y, width, height]);
    }
    roundRect(x, y, width, height, radii) {
      if (typeof radii === "undefined") {
        _13(this).push(["RR", x, y, width, height, 0]);
      } else {
        _13(this).push(["RR", x, y, width, height, radii]);
      }
    }
  };
  def(Path2D);

  // src/canvas/offscreen-canvas-rendering-context-2d.ts
  var import_parse_css_font2 = __toESM(require_dist3());
  var toPx2 = require_to_px();
  var colorRgba3 = require_color_rgba();
  var _14 = createInternal();
  var OffscreenCanvasRenderingContext2D = class {
    /**
     * @ignore
     */
    constructor() {
      assertInternalConstructor(arguments);
      const canvas = arguments[1];
      const ctx = $.canvasContext2dNew(canvas);
      Object.setPrototypeOf(ctx, OffscreenCanvasRenderingContext2D.prototype);
      _14.set(ctx, { canvas });
      ctx.font = "10px system-ui";
      return ctx;
    }
    /**
     * A read-only reference to the {@link OffscreenCanvas | `OffscreenCanvas`} object
     * that is associated with the context.
     */
    get canvas() {
      return _14(this).canvas;
    }
    /**
     * Specifies the current text style to use when drawing text.
     * This string uses the same syntax as the
     * [CSS font](https://developer.mozilla.org/docs/Web/CSS/font) specifier.
     *
     * @default "10px system-ui"
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/font
     */
    get font() {
      return $.canvasContext2dGetFont(this);
    }
    set font(v) {
      if (!v || this.font === v)
        return;
      const parsed = returnOnThrow(import_parse_css_font2.default, v);
      if (parsed instanceof Error) {
        return;
      }
      if ("system" in parsed) {
        return;
      }
      if (typeof parsed.size !== "string") {
        return;
      }
      if (!parsed.family) {
        return;
      }
      const px = toPx2(parsed.size);
      if (typeof px !== "number") {
        return;
      }
      let font = findFont(fonts, parsed);
      if (!font) {
        if (parsed.family.includes("system-ui")) {
          font = addSystemFont(fonts);
        } else {
          return;
        }
      }
      $.canvasContext2dSetFont(this, font, px, v);
    }
    /**
     * Strokes (outlines) the current or given path with the current stroke style.
     *
     * @param path A {@link Path2D | `Path2D`} path to stroke.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/stroke
     */
    stroke(path) {
      stub();
    }
    fill(fillRuleOrPath, fillRule) {
      stub();
    }
    /**
     * Specifies the color, gradient, or pattern to use inside shapes.
     *
     * @default "#000" (black)
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle
     */
    get fillStyle() {
      return rgbaToString($.canvasContext2dGetFillStyle(this));
    }
    set fillStyle(v) {
      if (typeof v === "string") {
        const parsed = colorRgba3(v);
        if (!parsed || parsed.length !== 4) {
          return;
        }
        $.canvasContext2dSetFillStyle(this, ...parsed);
      } else {
        throw new Error("CanvasGradient/CanvasPattern not implemented.");
      }
    }
    /**
     * Specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes.
     *
     * @default "#000" (black)
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle
     */
    get strokeStyle() {
      return rgbaToString($.canvasContext2dGetStrokeStyle(this));
    }
    set strokeStyle(v) {
      if (typeof v === "string") {
        const parsed = colorRgba3(v);
        if (!parsed || parsed.length !== 4) {
          return;
        }
        $.canvasContext2dSetStrokeStyle(this, ...parsed);
      } else {
        throw new Error("CanvasGradient/CanvasPattern not implemented.");
      }
    }
    /**
     * Starts a new path by emptying the list of sub-paths.
     * Call this method when you want to create a new path.
     *
     * @note To create a new sub-path (i.e. one matching the current canvas state),
     * you can use `CanvasRenderingContext2D.moveTo()`.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/beginPath
     */
    beginPath() {
      stub();
    }
    /**
     * Attempts to add a straight line from the current point to the start of
     * the current sub-path. If the shape has already been closed or has only
     * one point, this function does nothing.
     *
     * This method doesn't draw anything to the canvas directly. You can render
     * the path using the stroke() or fill() methods.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/closePath
     */
    closePath() {
      stub();
    }
    /**
     * Saves the entire state of the canvas by pushing the current state onto a stack.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/save
     */
    restore() {
      stub();
    }
    /**
     * Restores the most recently saved canvas state by popping the top entry in the
     * drawing state stack. If there is no saved state, this method does nothing.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/restore
     */
    save() {
      stub();
    }
    /**
     * Adds the specified angle of rotation to the transformation matrix.
     *
     * @param angle The rotation angle, clockwise in radians. You can use `degree * Math.PI / 180` to calculate a radian from a degree.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/rotate
     */
    rotate(angle) {
      stub();
    }
    /**
     * Adds a scaling transformation to the canvas units horizontally and/or vertically.
     *
     * By default, one unit on the canvas is exactly one pixel. A scaling transformation
     * modifies this behavior. For instance, a scaling factor of 0.5 results in a unit
     * size of 0.5 pixels; shapes are thus drawn at half the normal size. Similarly, a
     * scaling factor of 2.0 increases the unit size so that one unit becomes two pixels;
     * shapes are thus drawn at twice the normal size.
     *
     * @param x Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis. A value of `1` results in no horizontal scaling.
     * @param y Scaling factor in the vertical direction. A negative value flips pixels across the horizontal axis. A value of `1` results in no vertical scaling.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/scale
     */
    scale(x, y) {
      stub();
    }
    /**
     * Retrieves the current transformation matrix being applied to the context.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getTransform
     */
    getTransform() {
      return new DOMMatrix($.canvasContext2dGetTransform(this));
    }
    /**
     * Multiplies the current transformation with the matrix described by the arguments
     * of this method. This lets you scale, rotate, translate (move), and skew the context.
     *
     * @param a (`m11`) The cell in the first row and first column of the matrix.
     * @param b (`m12`) The cell in the second row and first column of the matrix.
     * @param c (`m21`) The cell in the first row and second column of the matrix.
     * @param d (`m22`) The cell in the second row and second column of the matrix.
     * @param e (`m41`) The cell in the first row and third column of the matrix.
     * @param f (`m42`) The cell in the second row and third column of the matrix.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/transform
     */
    transform(a, b, c, d, e, f) {
      stub();
    }
    /**
     * Adds a translation transformation to the current matrix by moving the canvas
     * and its origin `x` units horizontally and `y` units vertically on the grid.
     *
     * @param x Distance to move in the horizontal direction. Positive values are to the right, and negative to the left.
     * @param y Distance to move in the vertical direction. Positive values are down, and negative are up.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/translate
     */
    translate(x, y) {
      stub();
    }
    /**
     * Resets the current transform to the identity matrix.
     *
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/resetTransform
     */
    resetTransform() {
      stub();
    }
    /**
     * Gets the current line dash pattern.
     *
     * @returns An `Array` of numbers that specify distances to alternately draw a line and a gap (in coordinate space units). If the number, when setting the elements, is odd, the elements of the array get copied and concatenated. For example, setting the line dash to `[5, 15, 25]` will result in getting back `[5, 15, 25, 5, 15, 25]`.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getLineDash
     */
    getLineDash() {
      stub();
    }
    /**
     * Sets the line dash pattern used when stroking lines. It uses an array of values that specify alternating lengths of lines and gaps which describe the pattern.
     *
     * @note To return to using solid lines, set the line dash list to an empty array.
     * @param segments An `Array` of numbers that specify distances to alternately draw a line and a gap (in coordinate space units). If the number of elements in the array is odd, the elements of the array get copied and concatenated. For example, `[5, 15, 25]` will become `[5, 15, 25, 5, 15, 25]`. If the array is empty, the line dash list is cleared and line strokes return to being solid.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash
     */
    setLineDash(segments) {
      stub();
    }
    /**
     * Erases the pixels in a rectangular area by setting them to transparent black.
     *
     * @param x The x-axis coordinate of the rectangle's starting point.
     * @param y The y-axis coordinate of the rectangle's starting point.
     * @param width The rectangle's width. Positive values are to the right, and negative to the left.
     * @param height The rectangle's height. Positive values are down, and negative are up.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/clearRect
     */
    clearRect(x, y, width, height) {
      stub();
    }
    /**
     * Draws a rectangle that is filled according to the current
     * {@link OffscreenCanvasRenderingContext2D.fillStyle | `fillStyle`}.
     *
     * This method draws directly to the canvas without modifying the current path,
     * so any subsequent {@link OffscreenCanvasRenderingContext2D.fill | `fill()`} or
     * {@link OffscreenCanvasRenderingContext2D.stroke | `stroke()`} calls will have no effect on it.
     *
     * @param x The x-axis coordinate of the rectangle's starting point.
     * @param y The y-axis coordinate of the rectangle's starting point.
     * @param width The rectangle's width. Positive values are to the right, and negative to the left.
     * @param height The rectangle's height. Positive values are down, and negative are up.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillRect
     */
    fillRect(x, y, width, height) {
      stub();
    }
    /**
     * Draws a rectangle that is stroked (outlined) according to the current
     * {@link OffscreenCanvasRenderingContext2D.strokeStyle | `strokeStyle`} and other context settings.
     *
     * This method draws directly to the canvas without modifying the current path,
     * so any subsequent {@link OffscreenCanvasRenderingContext2D.fill | `fill()`} or
     * {@link OffscreenCanvasRenderingContext2D.stroke | `stroke()`} calls will have no effect on it.
     *
     * @param x The x-axis coordinate of the rectangle's starting point.
     * @param y The y-axis coordinate of the rectangle's starting point.
     * @param width The rectangle's width. Positive values are to the right, and negative to the left.
     * @param height The rectangle's height. Positive values are down, and negative are up.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeRect
     */
    strokeRect(x, y, width, height) {
      stub();
    }
    createImageData(sw, sh, settings) {
      let width;
      let height;
      if (typeof sw === "number") {
        if (typeof sh !== "number") {
          throw new TypeError(
            "OffscreenCanvasRenderingContext2D.createImageData: Argument 1 is not an object."
          );
        }
        width = sw;
        height = sh;
      } else {
        width = sw.width;
        height = sw.height;
      }
      if (width <= 0 || height <= 0) {
        throw new TypeError(
          "OffscreenCanvasRenderingContext2D.createImageData: Invalid width or height"
        );
      }
      return new ImageData(width, height, settings);
    }
    /**
     * Returns an {@link ImageData | `ImageData`} object representing the underlying pixel
     * data for a specified portion of the canvas.
     *
     * This method is not affected by the canvas's transformation matrix. If the specified
     * rectangle extends outside the bounds of the canvas, the pixels outside the canvas
     * are transparent black in the returned `ImageData` object.
     *
     * @param sx The x-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.
     * @param sy The y-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.
     * @param sw The width of the rectangle from which the ImageData will be extracted. Positive values are to the right, and negative to the left.
     * @param sh The height of the rectangle from which the ImageData will be extracted. Positive values are down, and negative are up.
     * @returns An `ImageData` object containing the image data for the rectangle of the canvas specified.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getImageData
     */
    getImageData(sx, sy, sw, sh, settings) {
      return new ImageData(
        new Uint8ClampedArray(
          $.canvasContext2dGetImageData(this, sx, sy, sw, sh)
        ),
        sw,
        sh,
        settings
      );
    }
    putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
      stub();
    }
    drawImage(image, dxOrSx, dyOrSy, dwOrSw, dhOrSh, dx, dy, dw, dh) {
      stub();
    }
    lineTo(x, y) {
      stub();
    }
    moveTo(x, y) {
      stub();
    }
    rect(x, y, w, h) {
      stub();
    }
    arc(x, y, radius, startAngle, endAngle, counterclockwise) {
      stub();
    }
    arcTo(x1, y1, x2, y2, radius) {
      stub();
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
      stub();
    }
    quadraticCurveTo(cpx, cpy, x, y) {
      stub();
    }
    ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
      stub();
    }
    /**
     * Adds a rounded rectangle to the current path.
     *
     * @param x The x-axis coordinate of the rectangle's starting point, in pixels.
     * @param y The y-axis coordinate of the rectangle's starting point, in pixels.
     * @param width The rectangle's width. Positive values are to the right, and negative to the left.
     * @param height The rectangle's height. Positive values are down, and negative are up.
     * @param radii A number or list specifying the radii of the circular arc to be used for the corners of the rectangle.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect
     */
    roundRect(x, y, width, height, radii = 0) {
      stub();
    }
    /**
     * Draws the outlines of the characters of the text string at the specified coordinates,
     * stroking the string's characters with the current {@link CanvasRenderingContext2D.strokeStyle | `strokeStyle`}.
     *
     * @param text A string specifying the text string to render into the context.
     * @param x The x-axis coordinate of the point at which to begin drawing the text, in pixels.
     * @param y The y-axis coordinate of the baseline on which to begin drawing the text, in pixels.
     * @param maxWidth The maximum number of pixels wide the text may be once rendered. If not specified, there is no limit to the width of the text.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeText
     */
    strokeText(text, x, y, maxWidth) {
      stub();
    }
    createConicGradient(startAngle, x, y) {
      throw new Error("Method not implemented.");
    }
    createLinearGradient(x0, y0, x1, y1) {
      throw new Error("Method not implemented.");
    }
    createPattern(image, repetition) {
      throw new Error("Method not implemented.");
    }
    createRadialGradient(x0, y0, r0, x1, y1, r1) {
      throw new Error("Method not implemented.");
    }
    /**
     * Draws a text string at the specified coordinates, filling the string's
     * characters with the current {@link CanvasRenderingContext2D.fillStyle | `fillStyle`}.
     *
     * @param text A string specifying the text string to render into the context.
     * @param x The x-axis coordinate of the point at which to begin drawing the text, in pixels.
     * @param y The y-axis coordinate of the baseline on which to begin drawing the text, in pixels.
     * @param maxWidth The maximum number of pixels wide the text may be once rendered. If not specified, there is no limit to the width of the text.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillText
     */
    fillText(text, x, y, maxWidth) {
      stub();
    }
    /**
     * Returns a `TextMetrics` object that contains information about
     * the measured text (such as its width, for example).
     *
     * @param text The text string to measure.
     * @see https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/measureText
     */
    measureText(text) {
      stub();
    }
  };
  $.canvasContext2dInitClass(OffscreenCanvasRenderingContext2D);
  def(OffscreenCanvasRenderingContext2D);

  // src/canvas/offscreen-canvas.ts
  var _15 = createInternal();
  var OffscreenCanvas = class extends EventTarget {
    /**
     * @param width The width of the offscreen canvas.
     * @param height The height of the offscreen canvas.
     */
    constructor(width, height) {
      super();
      const c = $.canvasNew(width, height);
      Object.setPrototypeOf(c, OffscreenCanvas.prototype);
      _15.set(c, {});
      return c;
    }
    convertToBlob(options) {
      throw new Error("Method not implemented.");
    }
    getContext(contextId, options) {
      if (contextId !== "2d") {
        throw new TypeError(
          `OffscreenCanvas.getContext: '${contextId}' (value of argument 1) is not a valid value for enumeration OffscreenRenderingContextId.`
        );
      }
      let i = _15(this);
      if (!i.context2d) {
        i.context2d = new OffscreenCanvasRenderingContext2D(
          // @ts-expect-error
          INTERNAL_SYMBOL,
          this
        );
      }
      return i.context2d;
    }
    transferToImageBitmap() {
      throw new Error("Method not implemented.");
    }
    //oncontextlost: ((this: globalThis.OffscreenCanvas, ev: Event) => any) | null;
    //oncontextrestored: ((this: globalThis.OffscreenCanvas, ev: Event) => any) | null;
    oncontextlost = null;
    oncontextrestored = null;
    //addEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: globalThis.OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    //addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    //addEventListener(type: unknown, listener: unknown, options?: unknown): void {
    //    throw new Error("Method not implemented.");
    //}
    //removeEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: globalThis.OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    //removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    //removeEventListener(type: unknown, listener: unknown, options?: unknown): void {
    //    throw new Error("Method not implemented.");
    //}
    //dispatchEvent(event: Event): boolean {
    //    throw new Error("Method not implemented.");
    //}
  };
  $.canvasInitClass(OffscreenCanvas);
  def(OffscreenCanvas);

  // src/ambientlightsensor.ts
  var _16 = createInternal();
  var AmbientLightSensor = class extends Sensor {
    /**
     * @see https://developer.mozilla.org/docs/Web/API/AmbientLightSensor/AmbientLightSensor
     */
    constructor(opts = {}) {
      super(INTERNAL_SYMBOL);
      _16.set(this, {
        frequency: opts.frequency ?? 1,
        illuminance: null,
        timestamp: null
      });
    }
    /**
     * The current light level (in {@link https://wikipedia.org/wiki/Lux | lux}) of the ambient light level around the hosting device.
     *
     * @see https://developer.mozilla.org/docs/Web/API/AmbientLightSensor/illuminance
     */
    get illuminance() {
      return _16(this).illuminance;
    }
    get activated() {
      return typeof _16(this).timeout === "number";
    }
    get hasReading() {
      return typeof _16(this).illuminance === "number";
    }
    get timestamp() {
      return _16(this).timestamp;
    }
    start() {
      const i = _16(this);
      i.timeout = setInterval(() => {
        const prev = i.illuminance;
        i.illuminance = $.appletIlluminance();
        if (i.illuminance !== prev) {
          i.timestamp = Date.now();
          this.dispatchEvent(new Event("reading"));
        }
      }, 1e3 / i.frequency);
    }
    stop() {
      clearInterval(_16(this).timeout);
    }
  };
  def(AmbientLightSensor);

  // src/index.ts
  def(wasm_exports, "WebAssembly");
  def(switch_exports, "Switch");
  def(console, "console");
  def(setTimeout);
  def(setInterval);
  def(clearTimeout);
  def(clearInterval);
  $.onError((e) => {
    const ev = new ErrorEvent("error", {
      cancelable: true,
      error: e
    });
    dispatchEvent(ev);
    if (ev.defaultPrevented)
      return 0;
    console.error("Uncaught", e);
    console.log("\nPress + to exit");
    return 1;
  });
  $.onUnhandledRejection((p2, r) => {
    const ev = new PromiseRejectionEvent("unhandledrejection", {
      cancelable: true,
      promise: p2,
      reason: r
    });
    dispatchEvent(ev);
    if (ev.defaultPrevented)
      return 0;
    console.error("Uncaught (in promise)", r);
    console.log("\nPress + to exit");
    return 1;
  });
  var btnPlus = 1 << 10;
  var previousButtons = 0;
  $.onFrame((kDown) => {
    processTimers();
    callRafCallbacks();
    const buttonsDown = ~previousButtons & kDown;
    const buttonsUp = previousButtons & ~kDown;
    previousButtons = kDown;
    if (buttonsDown !== 0) {
      const ev = new UIEvent("buttondown", {
        cancelable: true,
        detail: buttonsDown
      });
      globalThis.dispatchEvent(ev);
      if (!ev.defaultPrevented && buttonsDown & btnPlus) {
        return $.exit();
      }
    }
    if (buttonsUp !== 0) {
      globalThis.dispatchEvent(
        new UIEvent("buttonup", {
          detail: buttonsUp
        })
      );
    }
    dispatchKeyboardEvents(globalThis);
    dispatchTouchEvents(screen);
  });
  $.onExit(() => {
    dispatchEvent(new Event("unload"));
  });
})();
//# sourceMappingURL=runtime.js.map
