#!/usr/bin/env node
import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// node_modules/lodash.assign/index.js
var require_lodash = __commonJS((exports, module) => {
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var nativeKeys = overArg(Object.keys, Object);
  var nativeMax = Math.max;
  var nonEnumShadows = !propertyIsEnumerable.call({ valueOf: 1 }, "valueOf");
  function arrayLikeKeys(value, inherited) {
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      object[key] = value;
    }
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function baseRest(func, start) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = array;
      return apply(func, this, otherArgs);
    };
  }
  function copyObject(source, props, object, customizer) {
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
      assignValue(object, key, newValue === undefined ? source[key] : newValue);
    }
    return object;
  }
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && (index in object)) {
      return eq(object[index], value);
    }
    return false;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
  }
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  var assign = createAssigner(function(object, source) {
    if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
      copyObject(source, keys(source), object);
      return;
    }
    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        assignValue(object, key, source[key]);
      }
    }
  });
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  module.exports = assign;
});

// node_modules/rxjs/dist/cjs/internal/util/isFunction.js
var require_isFunction = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isFunction = undefined;
  function isFunction(value) {
    return typeof value === "function";
  }
  exports.isFunction = isFunction;
});

// node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js
var require_createErrorClass = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createErrorClass = undefined;
  function createErrorClass(createImpl) {
    var _super = function(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }
  exports.createErrorClass = createErrorClass;
});

// node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.UnsubscriptionError = undefined;
  var createErrorClass_1 = require_createErrorClass();
  exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
      _super(this);
      this.message = errors ? errors.length + ` errors occurred during unsubscription:
` + errors.map(function(err, i) {
        return i + 1 + ") " + err.toString();
      }).join(`
  `) : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
    };
  });
});

// node_modules/rxjs/dist/cjs/internal/util/arrRemove.js
var require_arrRemove = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.arrRemove = undefined;
  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }
  exports.arrRemove = arrRemove;
});

// node_modules/rxjs/dist/cjs/internal/Subscription.js
var require_Subscription = __commonJS((exports) => {
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = undefined;
  var isFunction_1 = require_isFunction();
  var UnsubscriptionError_1 = require_UnsubscriptionError();
  var arrRemove_1 = require_arrRemove();
  var Subscription = function() {
    function Subscription2(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    Subscription2.prototype.unsubscribe = function() {
      var e_1, _a, e_2, _b;
      var errors;
      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;
        if (_parentage) {
          this._parentage = null;
          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next();!_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                  _a.call(_parentage_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }
        var initialFinalizer = this.initialTeardown;
        if (isFunction_1.isFunction(initialFinalizer)) {
          try {
            initialFinalizer();
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [e];
          }
        }
        var _finalizers = this._finalizers;
        if (_finalizers) {
          this._finalizers = null;
          try {
            for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next();!_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
              var finalizer = _finalizers_1_1.value;
              try {
                execFinalizer(finalizer);
              } catch (err) {
                errors = errors !== null && errors !== undefined ? errors : [];
                if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                _b.call(_finalizers_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      }
    };
    Subscription2.prototype.add = function(teardown) {
      var _a;
      if (teardown && teardown !== this) {
        if (this.closed) {
          execFinalizer(teardown);
        } else {
          if (teardown instanceof Subscription2) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }
            teardown._addParent(this);
          }
          (this._finalizers = (_a = this._finalizers) !== null && _a !== undefined ? _a : []).push(teardown);
        }
      }
    };
    Subscription2.prototype._hasParent = function(parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription2.prototype._addParent = function(parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription2.prototype._removeParent = function(parent) {
      var _parentage = this._parentage;
      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove_1.arrRemove(_parentage, parent);
      }
    };
    Subscription2.prototype.remove = function(teardown) {
      var _finalizers = this._finalizers;
      _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
      if (teardown instanceof Subscription2) {
        teardown._removeParent(this);
      }
    };
    Subscription2.EMPTY = function() {
      var empty = new Subscription2;
      empty.closed = true;
      return empty;
    }();
    return Subscription2;
  }();
  exports.Subscription = Subscription;
  exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
  }
  exports.isSubscription = isSubscription;
  function execFinalizer(finalizer) {
    if (isFunction_1.isFunction(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }
});

// node_modules/rxjs/dist/cjs/internal/config.js
var require_config = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.config = undefined;
  exports.config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
  };
});

// node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js
var require_timeoutProvider = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.timeoutProvider = undefined;
  exports.timeoutProvider = {
    setTimeout: function(handler, timeout) {
      var args = [];
      for (var _i = 2;_i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      var delegate = exports.timeoutProvider.delegate;
      if (delegate === null || delegate === undefined ? undefined : delegate.setTimeout) {
        return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
      }
      return setTimeout.apply(undefined, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function(handle) {
      var delegate = exports.timeoutProvider.delegate;
      return ((delegate === null || delegate === undefined ? undefined : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
  };
});

// node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js
var require_reportUnhandledError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.reportUnhandledError = undefined;
  var config_1 = require_config();
  var timeoutProvider_1 = require_timeoutProvider();
  function reportUnhandledError(err) {
    timeoutProvider_1.timeoutProvider.setTimeout(function() {
      var onUnhandledError = config_1.config.onUnhandledError;
      if (onUnhandledError) {
        onUnhandledError(err);
      } else {
        throw err;
      }
    });
  }
  exports.reportUnhandledError = reportUnhandledError;
});

// node_modules/rxjs/dist/cjs/internal/util/noop.js
var require_noop = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.noop = undefined;
  function noop() {}
  exports.noop = noop;
});

// node_modules/rxjs/dist/cjs/internal/NotificationFactories.js
var require_NotificationFactories = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = undefined;
  exports.COMPLETE_NOTIFICATION = function() {
    return createNotification("C", undefined, undefined);
  }();
  function errorNotification(error) {
    return createNotification("E", undefined, error);
  }
  exports.errorNotification = errorNotification;
  function nextNotification(value) {
    return createNotification("N", value, undefined);
  }
  exports.nextNotification = nextNotification;
  function createNotification(kind, value, error) {
    return {
      kind,
      value,
      error
    };
  }
  exports.createNotification = createNotification;
});

// node_modules/rxjs/dist/cjs/internal/util/errorContext.js
var require_errorContext = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.captureError = exports.errorContext = undefined;
  var config_1 = require_config();
  var context = null;
  function errorContext(cb) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      var isRoot = !context;
      if (isRoot) {
        context = { errorThrown: false, error: null };
      }
      cb();
      if (isRoot) {
        var _a = context, errorThrown = _a.errorThrown, error = _a.error;
        context = null;
        if (errorThrown) {
          throw error;
        }
      }
    } else {
      cb();
    }
  }
  exports.errorContext = errorContext;
  function captureError(err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
      context.errorThrown = true;
      context.error = err;
    }
  }
  exports.captureError = captureError;
});

// node_modules/rxjs/dist/cjs/internal/Subscriber.js
var require_Subscriber = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = undefined;
  var isFunction_1 = require_isFunction();
  var Subscription_1 = require_Subscription();
  var config_1 = require_config();
  var reportUnhandledError_1 = require_reportUnhandledError();
  var noop_1 = require_noop();
  var NotificationFactories_1 = require_NotificationFactories();
  var timeoutProvider_1 = require_timeoutProvider();
  var errorContext_1 = require_errorContext();
  var Subscriber = function(_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destination) {
      var _this = _super.call(this) || this;
      _this.isStopped = false;
      if (destination) {
        _this.destination = destination;
        if (Subscription_1.isSubscription(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = exports.EMPTY_OBSERVER;
      }
      return _this;
    }
    Subscriber2.create = function(next, error, complete) {
      return new SafeSubscriber(next, error, complete);
    };
    Subscriber2.prototype.next = function(value) {
      if (this.isStopped) {
        handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
      } else {
        this._next(value);
      }
    };
    Subscriber2.prototype.error = function(err) {
      if (this.isStopped) {
        handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
      } else {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber2.prototype.complete = function() {
      if (this.isStopped) {
        handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
      } else {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber2.prototype.unsubscribe = function() {
      if (!this.closed) {
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    Subscriber2.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber2.prototype._error = function(err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };
    Subscriber2.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return Subscriber2;
  }(Subscription_1.Subscription);
  exports.Subscriber = Subscriber;
  var _bind = Function.prototype.bind;
  function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
  }
  var ConsumerObserver = function() {
    function ConsumerObserver2(partialObserver) {
      this.partialObserver = partialObserver;
    }
    ConsumerObserver2.prototype.next = function(value) {
      var partialObserver = this.partialObserver;
      if (partialObserver.next) {
        try {
          partialObserver.next(value);
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    ConsumerObserver2.prototype.error = function(err) {
      var partialObserver = this.partialObserver;
      if (partialObserver.error) {
        try {
          partialObserver.error(err);
        } catch (error) {
          handleUnhandledError(error);
        }
      } else {
        handleUnhandledError(err);
      }
    };
    ConsumerObserver2.prototype.complete = function() {
      var partialObserver = this.partialObserver;
      if (partialObserver.complete) {
        try {
          partialObserver.complete();
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    return ConsumerObserver2;
  }();
  var SafeSubscriber = function(_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(observerOrNext, error, complete) {
      var _this = _super.call(this) || this;
      var partialObserver;
      if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
        partialObserver = {
          next: observerOrNext !== null && observerOrNext !== undefined ? observerOrNext : undefined,
          error: error !== null && error !== undefined ? error : undefined,
          complete: complete !== null && complete !== undefined ? complete : undefined
        };
      } else {
        var context_1;
        if (_this && config_1.config.useDeprecatedNextContext) {
          context_1 = Object.create(observerOrNext);
          context_1.unsubscribe = function() {
            return _this.unsubscribe();
          };
          partialObserver = {
            next: observerOrNext.next && bind(observerOrNext.next, context_1),
            error: observerOrNext.error && bind(observerOrNext.error, context_1),
            complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
          };
        } else {
          partialObserver = observerOrNext;
        }
      }
      _this.destination = new ConsumerObserver(partialObserver);
      return _this;
    }
    return SafeSubscriber2;
  }(Subscriber);
  exports.SafeSubscriber = SafeSubscriber;
  function handleUnhandledError(error) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      errorContext_1.captureError(error);
    } else {
      reportUnhandledError_1.reportUnhandledError(error);
    }
  }
  function defaultErrorHandler(err) {
    throw err;
  }
  function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config_1.config.onStoppedNotification;
    onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
      return onStoppedNotification(notification, subscriber);
    });
  }
  exports.EMPTY_OBSERVER = {
    closed: true,
    next: noop_1.noop,
    error: defaultErrorHandler,
    complete: noop_1.noop
  };
});

// node_modules/rxjs/dist/cjs/internal/symbol/observable.js
var require_observable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.observable = undefined;
  exports.observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();
});

// node_modules/rxjs/dist/cjs/internal/util/identity.js
var require_identity = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.identity = undefined;
  function identity(x) {
    return x;
  }
  exports.identity = identity;
});

// node_modules/rxjs/dist/cjs/internal/util/pipe.js
var require_pipe = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.pipeFromArray = exports.pipe = undefined;
  var identity_1 = require_identity();
  function pipe() {
    var fns = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
  }
  exports.pipe = pipe;
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity_1.identity;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }
  exports.pipeFromArray = pipeFromArray;
});

// node_modules/rxjs/dist/cjs/internal/Observable.js
var require_Observable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Observable = undefined;
  var Subscriber_1 = require_Subscriber();
  var Subscription_1 = require_Subscription();
  var observable_1 = require_observable();
  var pipe_1 = require_pipe();
  var config_1 = require_config();
  var isFunction_1 = require_isFunction();
  var errorContext_1 = require_errorContext();
  var Observable = function() {
    function Observable2(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable2.prototype.lift = function(operator) {
      var observable = new Observable2;
      observable.source = this;
      observable.operator = operator;
      return observable;
    };
    Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
      var _this = this;
      var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
      errorContext_1.errorContext(function() {
        var _a = _this, operator = _a.operator, source = _a.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };
    Observable2.prototype._trySubscribe = function(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };
    Observable2.prototype.forEach = function(next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
          next: function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
        _this.subscribe(subscriber);
      });
    };
    Observable2.prototype._subscribe = function(subscriber) {
      var _a;
      return (_a = this.source) === null || _a === undefined ? undefined : _a.subscribe(subscriber);
    };
    Observable2.prototype[observable_1.observable] = function() {
      return this;
    };
    Observable2.prototype.pipe = function() {
      var operations = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      return pipe_1.pipeFromArray(operations)(this);
    };
    Observable2.prototype.toPromise = function(promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var value;
        _this.subscribe(function(x) {
          return value = x;
        }, function(err) {
          return reject(err);
        }, function() {
          return resolve(value);
        });
      });
    };
    Observable2.create = function(subscribe) {
      return new Observable2(subscribe);
    };
    return Observable2;
  }();
  exports.Observable = Observable;
  function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== undefined ? promiseCtor : config_1.config.Promise) !== null && _a !== undefined ? _a : Promise;
  }
  function isObserver(value) {
    return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
  }
  function isSubscriber(value) {
    return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
  }
});

// node_modules/rxjs/dist/cjs/internal/util/lift.js
var require_lift = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.operate = exports.hasLift = undefined;
  var isFunction_1 = require_isFunction();
  function hasLift(source) {
    return isFunction_1.isFunction(source === null || source === undefined ? undefined : source.lift);
  }
  exports.hasLift = hasLift;
  function operate(init) {
    return function(source) {
      if (hasLift(source)) {
        return source.lift(function(liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  exports.operate = operate;
});

// node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js
var require_OperatorSubscriber = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OperatorSubscriber = exports.createOperatorSubscriber = undefined;
  var Subscriber_1 = require_Subscriber();
  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  exports.createOperatorSubscriber = createOperatorSubscriber;
  var OperatorSubscriber = function(_super) {
    __extends(OperatorSubscriber2, _super);
    function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
      var _this = _super.call(this, destination) || this;
      _this.onFinalize = onFinalize;
      _this.shouldUnsubscribe = shouldUnsubscribe;
      _this._next = onNext ? function(value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function(err) {
        try {
          onError(err);
        } catch (err2) {
          destination.error(err2);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function() {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }
    OperatorSubscriber2.prototype.unsubscribe = function() {
      var _a;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var closed_1 = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed_1 && ((_a = this.onFinalize) === null || _a === undefined || _a.call(this));
      }
    };
    return OperatorSubscriber2;
  }(Subscriber_1.Subscriber);
  exports.OperatorSubscriber = OperatorSubscriber;
});

// node_modules/rxjs/dist/cjs/internal/operators/refCount.js
var require_refCount = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.refCount = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function refCount() {
    return lift_1.operate(function(source, subscriber) {
      var connection = null;
      source._refCount++;
      var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, undefined, function() {
        if (!source || source._refCount <= 0 || 0 < --source._refCount) {
          connection = null;
          return;
        }
        var sharedConnection = source._connection;
        var conn = connection;
        connection = null;
        if (sharedConnection && (!conn || sharedConnection === conn)) {
          sharedConnection.unsubscribe();
        }
        subscriber.unsubscribe();
      });
      source.subscribe(refCounter);
      if (!refCounter.closed) {
        connection = source.connect();
      }
    });
  }
  exports.refCount = refCount;
});

// node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js
var require_ConnectableObservable = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ConnectableObservable = undefined;
  var Observable_1 = require_Observable();
  var Subscription_1 = require_Subscription();
  var refCount_1 = require_refCount();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var lift_1 = require_lift();
  var ConnectableObservable = function(_super) {
    __extends(ConnectableObservable2, _super);
    function ConnectableObservable2(source, subjectFactory) {
      var _this = _super.call(this) || this;
      _this.source = source;
      _this.subjectFactory = subjectFactory;
      _this._subject = null;
      _this._refCount = 0;
      _this._connection = null;
      if (lift_1.hasLift(source)) {
        _this.lift = source.lift;
      }
      return _this;
    }
    ConnectableObservable2.prototype._subscribe = function(subscriber) {
      return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable2.prototype.getSubject = function() {
      var subject = this._subject;
      if (!subject || subject.isStopped) {
        this._subject = this.subjectFactory();
      }
      return this._subject;
    };
    ConnectableObservable2.prototype._teardown = function() {
      this._refCount = 0;
      var _connection = this._connection;
      this._subject = this._connection = null;
      _connection === null || _connection === undefined || _connection.unsubscribe();
    };
    ConnectableObservable2.prototype.connect = function() {
      var _this = this;
      var connection = this._connection;
      if (!connection) {
        connection = this._connection = new Subscription_1.Subscription;
        var subject_1 = this.getSubject();
        connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, undefined, function() {
          _this._teardown();
          subject_1.complete();
        }, function(err) {
          _this._teardown();
          subject_1.error(err);
        }, function() {
          return _this._teardown();
        })));
        if (connection.closed) {
          this._connection = null;
          connection = Subscription_1.Subscription.EMPTY;
        }
      }
      return connection;
    };
    ConnectableObservable2.prototype.refCount = function() {
      return refCount_1.refCount()(this);
    };
    return ConnectableObservable2;
  }(Observable_1.Observable);
  exports.ConnectableObservable = ConnectableObservable;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js
var require_performanceTimestampProvider = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.performanceTimestampProvider = undefined;
  exports.performanceTimestampProvider = {
    now: function() {
      return (exports.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined
  };
});

// node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js
var require_animationFrameProvider = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.animationFrameProvider = undefined;
  var Subscription_1 = require_Subscription();
  exports.animationFrameProvider = {
    schedule: function(callback) {
      var request = requestAnimationFrame;
      var cancel = cancelAnimationFrame;
      var delegate = exports.animationFrameProvider.delegate;
      if (delegate) {
        request = delegate.requestAnimationFrame;
        cancel = delegate.cancelAnimationFrame;
      }
      var handle = request(function(timestamp) {
        cancel = undefined;
        callback(timestamp);
      });
      return new Subscription_1.Subscription(function() {
        return cancel === null || cancel === undefined ? undefined : cancel(handle);
      });
    },
    requestAnimationFrame: function() {
      var args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var delegate = exports.animationFrameProvider.delegate;
      return ((delegate === null || delegate === undefined ? undefined : delegate.requestAnimationFrame) || requestAnimationFrame).apply(undefined, __spreadArray([], __read(args)));
    },
    cancelAnimationFrame: function() {
      var args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var delegate = exports.animationFrameProvider.delegate;
      return ((delegate === null || delegate === undefined ? undefined : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(undefined, __spreadArray([], __read(args)));
    },
    delegate: undefined
  };
});

// node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js
var require_animationFrames = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.animationFrames = undefined;
  var Observable_1 = require_Observable();
  var performanceTimestampProvider_1 = require_performanceTimestampProvider();
  var animationFrameProvider_1 = require_animationFrameProvider();
  function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
  }
  exports.animationFrames = animationFrames;
  function animationFramesFactory(timestampProvider) {
    return new Observable_1.Observable(function(subscriber) {
      var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
      var start = provider.now();
      var id = 0;
      var run = function() {
        if (!subscriber.closed) {
          id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function(timestamp) {
            id = 0;
            var now = provider.now();
            subscriber.next({
              timestamp: timestampProvider ? now : timestamp,
              elapsed: now - start
            });
            run();
          });
        }
      };
      run();
      return function() {
        if (id) {
          animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
        }
      };
    });
  }
  var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
});

// node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js
var require_ObjectUnsubscribedError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ObjectUnsubscribedError = undefined;
  var createErrorClass_1 = require_createErrorClass();
  exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
      _super(this);
      this.name = "ObjectUnsubscribedError";
      this.message = "object unsubscribed";
    };
  });
});

// node_modules/rxjs/dist/cjs/internal/Subject.js
var require_Subject = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AnonymousSubject = exports.Subject = undefined;
  var Observable_1 = require_Observable();
  var Subscription_1 = require_Subscription();
  var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
  var arrRemove_1 = require_arrRemove();
  var errorContext_1 = require_errorContext();
  var Subject = function(_super) {
    __extends(Subject2, _super);
    function Subject2() {
      var _this = _super.call(this) || this;
      _this.closed = false;
      _this.currentObservers = null;
      _this.observers = [];
      _this.isStopped = false;
      _this.hasError = false;
      _this.thrownError = null;
      return _this;
    }
    Subject2.prototype.lift = function(operator) {
      var subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    };
    Subject2.prototype._throwIfClosed = function() {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError;
      }
    };
    Subject2.prototype.next = function(value) {
      var _this = this;
      errorContext_1.errorContext(function() {
        var e_1, _a;
        _this._throwIfClosed();
        if (!_this.isStopped) {
          if (!_this.currentObservers) {
            _this.currentObservers = Array.from(_this.observers);
          }
          try {
            for (var _b = __values(_this.currentObservers), _c = _b.next();!_c.done; _c = _b.next()) {
              var observer = _c.value;
              observer.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return))
                _a.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }
      });
    };
    Subject2.prototype.error = function(err) {
      var _this = this;
      errorContext_1.errorContext(function() {
        _this._throwIfClosed();
        if (!_this.isStopped) {
          _this.hasError = _this.isStopped = true;
          _this.thrownError = err;
          var observers = _this.observers;
          while (observers.length) {
            observers.shift().error(err);
          }
        }
      });
    };
    Subject2.prototype.complete = function() {
      var _this = this;
      errorContext_1.errorContext(function() {
        _this._throwIfClosed();
        if (!_this.isStopped) {
          _this.isStopped = true;
          var observers = _this.observers;
          while (observers.length) {
            observers.shift().complete();
          }
        }
      });
    };
    Subject2.prototype.unsubscribe = function() {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject2.prototype, "observed", {
      get: function() {
        var _a;
        return ((_a = this.observers) === null || _a === undefined ? undefined : _a.length) > 0;
      },
      enumerable: false,
      configurable: true
    });
    Subject2.prototype._trySubscribe = function(subscriber) {
      this._throwIfClosed();
      return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject2.prototype._subscribe = function(subscriber) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(subscriber);
      return this._innerSubscribe(subscriber);
    };
    Subject2.prototype._innerSubscribe = function(subscriber) {
      var _this = this;
      var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
      if (hasError || isStopped) {
        return Subscription_1.EMPTY_SUBSCRIPTION;
      }
      this.currentObservers = null;
      observers.push(subscriber);
      return new Subscription_1.Subscription(function() {
        _this.currentObservers = null;
        arrRemove_1.arrRemove(observers, subscriber);
      });
    };
    Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
      var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
      if (hasError) {
        subscriber.error(thrownError);
      } else if (isStopped) {
        subscriber.complete();
      }
    };
    Subject2.prototype.asObservable = function() {
      var observable = new Observable_1.Observable;
      observable.source = this;
      return observable;
    };
    Subject2.create = function(destination, source) {
      return new AnonymousSubject(destination, source);
    };
    return Subject2;
  }(Observable_1.Observable);
  exports.Subject = Subject;
  var AnonymousSubject = function(_super) {
    __extends(AnonymousSubject2, _super);
    function AnonymousSubject2(destination, source) {
      var _this = _super.call(this) || this;
      _this.destination = destination;
      _this.source = source;
      return _this;
    }
    AnonymousSubject2.prototype.next = function(value) {
      var _a, _b;
      (_b = (_a = this.destination) === null || _a === undefined ? undefined : _a.next) === null || _b === undefined || _b.call(_a, value);
    };
    AnonymousSubject2.prototype.error = function(err) {
      var _a, _b;
      (_b = (_a = this.destination) === null || _a === undefined ? undefined : _a.error) === null || _b === undefined || _b.call(_a, err);
    };
    AnonymousSubject2.prototype.complete = function() {
      var _a, _b;
      (_b = (_a = this.destination) === null || _a === undefined ? undefined : _a.complete) === null || _b === undefined || _b.call(_a);
    };
    AnonymousSubject2.prototype._subscribe = function(subscriber) {
      var _a, _b;
      return (_b = (_a = this.source) === null || _a === undefined ? undefined : _a.subscribe(subscriber)) !== null && _b !== undefined ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject2;
  }(Subject);
  exports.AnonymousSubject = AnonymousSubject;
});

// node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js
var require_BehaviorSubject = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BehaviorSubject = undefined;
  var Subject_1 = require_Subject();
  var BehaviorSubject = function(_super) {
    __extends(BehaviorSubject2, _super);
    function BehaviorSubject2(_value) {
      var _this = _super.call(this) || this;
      _this._value = _value;
      return _this;
    }
    Object.defineProperty(BehaviorSubject2.prototype, "value", {
      get: function() {
        return this.getValue();
      },
      enumerable: false,
      configurable: true
    });
    BehaviorSubject2.prototype._subscribe = function(subscriber) {
      var subscription = _super.prototype._subscribe.call(this, subscriber);
      !subscription.closed && subscriber.next(this._value);
      return subscription;
    };
    BehaviorSubject2.prototype.getValue = function() {
      var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
      if (hasError) {
        throw thrownError;
      }
      this._throwIfClosed();
      return _value;
    };
    BehaviorSubject2.prototype.next = function(value) {
      _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject2;
  }(Subject_1.Subject);
  exports.BehaviorSubject = BehaviorSubject;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js
var require_dateTimestampProvider = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.dateTimestampProvider = undefined;
  exports.dateTimestampProvider = {
    now: function() {
      return (exports.dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined
  };
});

// node_modules/rxjs/dist/cjs/internal/ReplaySubject.js
var require_ReplaySubject = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ReplaySubject = undefined;
  var Subject_1 = require_Subject();
  var dateTimestampProvider_1 = require_dateTimestampProvider();
  var ReplaySubject = function(_super) {
    __extends(ReplaySubject2, _super);
    function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
      if (_bufferSize === undefined) {
        _bufferSize = Infinity;
      }
      if (_windowTime === undefined) {
        _windowTime = Infinity;
      }
      if (_timestampProvider === undefined) {
        _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
      }
      var _this = _super.call(this) || this;
      _this._bufferSize = _bufferSize;
      _this._windowTime = _windowTime;
      _this._timestampProvider = _timestampProvider;
      _this._buffer = [];
      _this._infiniteTimeWindow = true;
      _this._infiniteTimeWindow = _windowTime === Infinity;
      _this._bufferSize = Math.max(1, _bufferSize);
      _this._windowTime = Math.max(1, _windowTime);
      return _this;
    }
    ReplaySubject2.prototype.next = function(value) {
      var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
      if (!isStopped) {
        _buffer.push(value);
        !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
      }
      this._trimBuffer();
      _super.prototype.next.call(this, value);
    };
    ReplaySubject2.prototype._subscribe = function(subscriber) {
      this._throwIfClosed();
      this._trimBuffer();
      var subscription = this._innerSubscribe(subscriber);
      var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
      var copy = _buffer.slice();
      for (var i = 0;i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
        subscriber.next(copy[i]);
      }
      this._checkFinalizedStatuses(subscriber);
      return subscription;
    };
    ReplaySubject2.prototype._trimBuffer = function() {
      var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
      var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
      _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
      if (!_infiniteTimeWindow) {
        var now = _timestampProvider.now();
        var last = 0;
        for (var i = 1;i < _buffer.length && _buffer[i] <= now; i += 2) {
          last = i;
        }
        last && _buffer.splice(0, last + 1);
      }
    };
    return ReplaySubject2;
  }(Subject_1.Subject);
  exports.ReplaySubject = ReplaySubject;
});

// node_modules/rxjs/dist/cjs/internal/AsyncSubject.js
var require_AsyncSubject = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AsyncSubject = undefined;
  var Subject_1 = require_Subject();
  var AsyncSubject = function(_super) {
    __extends(AsyncSubject2, _super);
    function AsyncSubject2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._value = null;
      _this._hasValue = false;
      _this._isComplete = false;
      return _this;
    }
    AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
      var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
      if (hasError) {
        subscriber.error(thrownError);
      } else if (isStopped || _isComplete) {
        _hasValue && subscriber.next(_value);
        subscriber.complete();
      }
    };
    AsyncSubject2.prototype.next = function(value) {
      if (!this.isStopped) {
        this._value = value;
        this._hasValue = true;
      }
    };
    AsyncSubject2.prototype.complete = function() {
      var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
      if (!_isComplete) {
        this._isComplete = true;
        _hasValue && _super.prototype.next.call(this, _value);
        _super.prototype.complete.call(this);
      }
    };
    return AsyncSubject2;
  }(Subject_1.Subject);
  exports.AsyncSubject = AsyncSubject;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/Action.js
var require_Action = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Action = undefined;
  var Subscription_1 = require_Subscription();
  var Action = function(_super) {
    __extends(Action2, _super);
    function Action2(scheduler, work) {
      return _super.call(this) || this;
    }
    Action2.prototype.schedule = function(state, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      return this;
    };
    return Action2;
  }(Subscription_1.Subscription);
  exports.Action = Action;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js
var require_intervalProvider = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.intervalProvider = undefined;
  exports.intervalProvider = {
    setInterval: function(handler, timeout) {
      var args = [];
      for (var _i = 2;_i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      var delegate = exports.intervalProvider.delegate;
      if (delegate === null || delegate === undefined ? undefined : delegate.setInterval) {
        return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
      }
      return setInterval.apply(undefined, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function(handle) {
      var delegate = exports.intervalProvider.delegate;
      return ((delegate === null || delegate === undefined ? undefined : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined
  };
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js
var require_AsyncAction = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AsyncAction = undefined;
  var Action_1 = require_Action();
  var intervalProvider_1 = require_intervalProvider();
  var arrRemove_1 = require_arrRemove();
  var AsyncAction = function(_super) {
    __extends(AsyncAction2, _super);
    function AsyncAction2(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      _this.pending = false;
      return _this;
    }
    AsyncAction2.prototype.schedule = function(state, delay) {
      var _a;
      if (delay === undefined) {
        delay = 0;
      }
      if (this.closed) {
        return this;
      }
      this.state = state;
      var id = this.id;
      var scheduler = this.scheduler;
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, delay);
      }
      this.pending = true;
      this.delay = delay;
      this.id = (_a = this.id) !== null && _a !== undefined ? _a : this.requestAsyncId(scheduler, this.id, delay);
      return this;
    };
    AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      if (delay != null && this.delay === delay && this.pending === false) {
        return id;
      }
      if (id != null) {
        intervalProvider_1.intervalProvider.clearInterval(id);
      }
      return;
    };
    AsyncAction2.prototype.execute = function(state, delay) {
      if (this.closed) {
        return new Error("executing a cancelled action");
      }
      this.pending = false;
      var error = this._execute(state, delay);
      if (error) {
        return error;
      } else if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    AsyncAction2.prototype._execute = function(state, _delay) {
      var errored = false;
      var errorValue;
      try {
        this.work(state);
      } catch (e) {
        errored = true;
        errorValue = e ? e : new Error("Scheduled action threw falsy error");
      }
      if (errored) {
        this.unsubscribe();
        return errorValue;
      }
    };
    AsyncAction2.prototype.unsubscribe = function() {
      if (!this.closed) {
        var _a = this, id = _a.id, scheduler = _a.scheduler;
        var actions = scheduler.actions;
        this.work = this.state = this.scheduler = null;
        this.pending = false;
        arrRemove_1.arrRemove(actions, this);
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
        _super.prototype.unsubscribe.call(this);
      }
    };
    return AsyncAction2;
  }(Action_1.Action);
  exports.AsyncAction = AsyncAction;
});

// node_modules/rxjs/dist/cjs/internal/util/Immediate.js
var require_Immediate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TestTools = exports.Immediate = undefined;
  var nextHandle = 1;
  var resolved;
  var activeHandles = {};
  function findAndClearHandle(handle) {
    if (handle in activeHandles) {
      delete activeHandles[handle];
      return true;
    }
    return false;
  }
  exports.Immediate = {
    setImmediate: function(cb) {
      var handle = nextHandle++;
      activeHandles[handle] = true;
      if (!resolved) {
        resolved = Promise.resolve();
      }
      resolved.then(function() {
        return findAndClearHandle(handle) && cb();
      });
      return handle;
    },
    clearImmediate: function(handle) {
      findAndClearHandle(handle);
    }
  };
  exports.TestTools = {
    pending: function() {
      return Object.keys(activeHandles).length;
    }
  };
});

// node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js
var require_immediateProvider = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.immediateProvider = undefined;
  var Immediate_1 = require_Immediate();
  var setImmediate = Immediate_1.Immediate.setImmediate;
  var clearImmediate = Immediate_1.Immediate.clearImmediate;
  exports.immediateProvider = {
    setImmediate: function() {
      var args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var delegate = exports.immediateProvider.delegate;
      return ((delegate === null || delegate === undefined ? undefined : delegate.setImmediate) || setImmediate).apply(undefined, __spreadArray([], __read(args)));
    },
    clearImmediate: function(handle) {
      var delegate = exports.immediateProvider.delegate;
      return ((delegate === null || delegate === undefined ? undefined : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined
  };
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js
var require_AsapAction = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AsapAction = undefined;
  var AsyncAction_1 = require_AsyncAction();
  var immediateProvider_1 = require_immediateProvider();
  var AsapAction = function(_super) {
    __extends(AsapAction2, _super);
    function AsapAction2(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      return _this;
    }
    AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      if (delay !== null && delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      scheduler.actions.push(this);
      return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
      var _a;
      if (delay === undefined) {
        delay = 0;
      }
      if (delay != null ? delay > 0 : this.delay > 0) {
        return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
      }
      var actions = scheduler.actions;
      if (id != null && ((_a = actions[actions.length - 1]) === null || _a === undefined ? undefined : _a.id) !== id) {
        immediateProvider_1.immediateProvider.clearImmediate(id);
        if (scheduler._scheduled === id) {
          scheduler._scheduled = undefined;
        }
      }
      return;
    };
    return AsapAction2;
  }(AsyncAction_1.AsyncAction);
  exports.AsapAction = AsapAction;
});

// node_modules/rxjs/dist/cjs/internal/Scheduler.js
var require_Scheduler = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Scheduler = undefined;
  var dateTimestampProvider_1 = require_dateTimestampProvider();
  var Scheduler = function() {
    function Scheduler2(schedulerActionCtor, now) {
      if (now === undefined) {
        now = Scheduler2.now;
      }
      this.schedulerActionCtor = schedulerActionCtor;
      this.now = now;
    }
    Scheduler2.prototype.schedule = function(work, delay, state) {
      if (delay === undefined) {
        delay = 0;
      }
      return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler2.now = dateTimestampProvider_1.dateTimestampProvider.now;
    return Scheduler2;
  }();
  exports.Scheduler = Scheduler;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js
var require_AsyncScheduler = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AsyncScheduler = undefined;
  var Scheduler_1 = require_Scheduler();
  var AsyncScheduler = function(_super) {
    __extends(AsyncScheduler2, _super);
    function AsyncScheduler2(SchedulerAction, now) {
      if (now === undefined) {
        now = Scheduler_1.Scheduler.now;
      }
      var _this = _super.call(this, SchedulerAction, now) || this;
      _this.actions = [];
      _this._active = false;
      return _this;
    }
    AsyncScheduler2.prototype.flush = function(action) {
      var actions = this.actions;
      if (this._active) {
        actions.push(action);
        return;
      }
      var error;
      this._active = true;
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (action = actions.shift());
      this._active = false;
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsyncScheduler2;
  }(Scheduler_1.Scheduler);
  exports.AsyncScheduler = AsyncScheduler;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js
var require_AsapScheduler = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AsapScheduler = undefined;
  var AsyncScheduler_1 = require_AsyncScheduler();
  var AsapScheduler = function(_super) {
    __extends(AsapScheduler2, _super);
    function AsapScheduler2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler2.prototype.flush = function(action) {
      this._active = true;
      var flushId = this._scheduled;
      this._scheduled = undefined;
      var actions = this.actions;
      var error;
      action = action || actions.shift();
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while ((action = actions[0]) && action.id === flushId && actions.shift());
      this._active = false;
      if (error) {
        while ((action = actions[0]) && action.id === flushId && actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsapScheduler2;
  }(AsyncScheduler_1.AsyncScheduler);
  exports.AsapScheduler = AsapScheduler;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/asap.js
var require_asap = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.asap = exports.asapScheduler = undefined;
  var AsapAction_1 = require_AsapAction();
  var AsapScheduler_1 = require_AsapScheduler();
  exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
  exports.asap = exports.asapScheduler;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/async.js
var require_async = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.async = exports.asyncScheduler = undefined;
  var AsyncAction_1 = require_AsyncAction();
  var AsyncScheduler_1 = require_AsyncScheduler();
  exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
  exports.async = exports.asyncScheduler;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js
var require_QueueAction = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.QueueAction = undefined;
  var AsyncAction_1 = require_AsyncAction();
  var QueueAction = function(_super) {
    __extends(QueueAction2, _super);
    function QueueAction2(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      return _this;
    }
    QueueAction2.prototype.schedule = function(state, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      if (delay > 0) {
        return _super.prototype.schedule.call(this, state, delay);
      }
      this.delay = delay;
      this.state = state;
      this.scheduler.flush(this);
      return this;
    };
    QueueAction2.prototype.execute = function(state, delay) {
      return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      if (delay != null && delay > 0 || delay == null && this.delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      scheduler.flush(this);
      return 0;
    };
    return QueueAction2;
  }(AsyncAction_1.AsyncAction);
  exports.QueueAction = QueueAction;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js
var require_QueueScheduler = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.QueueScheduler = undefined;
  var AsyncScheduler_1 = require_AsyncScheduler();
  var QueueScheduler = function(_super) {
    __extends(QueueScheduler2, _super);
    function QueueScheduler2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler2;
  }(AsyncScheduler_1.AsyncScheduler);
  exports.QueueScheduler = QueueScheduler;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/queue.js
var require_queue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.queue = exports.queueScheduler = undefined;
  var QueueAction_1 = require_QueueAction();
  var QueueScheduler_1 = require_QueueScheduler();
  exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
  exports.queue = exports.queueScheduler;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js
var require_AnimationFrameAction = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AnimationFrameAction = undefined;
  var AsyncAction_1 = require_AsyncAction();
  var animationFrameProvider_1 = require_animationFrameProvider();
  var AnimationFrameAction = function(_super) {
    __extends(AnimationFrameAction2, _super);
    function AnimationFrameAction2(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      return _this;
    }
    AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      if (delay !== null && delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      scheduler.actions.push(this);
      return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
        return scheduler.flush(undefined);
      }));
    };
    AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
      var _a;
      if (delay === undefined) {
        delay = 0;
      }
      if (delay != null ? delay > 0 : this.delay > 0) {
        return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
      }
      var actions = scheduler.actions;
      if (id != null && id === scheduler._scheduled && ((_a = actions[actions.length - 1]) === null || _a === undefined ? undefined : _a.id) !== id) {
        animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
        scheduler._scheduled = undefined;
      }
      return;
    };
    return AnimationFrameAction2;
  }(AsyncAction_1.AsyncAction);
  exports.AnimationFrameAction = AnimationFrameAction;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js
var require_AnimationFrameScheduler = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AnimationFrameScheduler = undefined;
  var AsyncScheduler_1 = require_AsyncScheduler();
  var AnimationFrameScheduler = function(_super) {
    __extends(AnimationFrameScheduler2, _super);
    function AnimationFrameScheduler2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler2.prototype.flush = function(action) {
      this._active = true;
      var flushId;
      if (action) {
        flushId = action.id;
      } else {
        flushId = this._scheduled;
        this._scheduled = undefined;
      }
      var actions = this.actions;
      var error;
      action = action || actions.shift();
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while ((action = actions[0]) && action.id === flushId && actions.shift());
      this._active = false;
      if (error) {
        while ((action = actions[0]) && action.id === flushId && actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AnimationFrameScheduler2;
  }(AsyncScheduler_1.AsyncScheduler);
  exports.AnimationFrameScheduler = AnimationFrameScheduler;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js
var require_animationFrame = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.animationFrame = exports.animationFrameScheduler = undefined;
  var AnimationFrameAction_1 = require_AnimationFrameAction();
  var AnimationFrameScheduler_1 = require_AnimationFrameScheduler();
  exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
  exports.animationFrame = exports.animationFrameScheduler;
});

// node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js
var require_VirtualTimeScheduler = __commonJS((exports) => {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VirtualAction = exports.VirtualTimeScheduler = undefined;
  var AsyncAction_1 = require_AsyncAction();
  var Subscription_1 = require_Subscription();
  var AsyncScheduler_1 = require_AsyncScheduler();
  var VirtualTimeScheduler = function(_super) {
    __extends(VirtualTimeScheduler2, _super);
    function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
      if (schedulerActionCtor === undefined) {
        schedulerActionCtor = VirtualAction;
      }
      if (maxFrames === undefined) {
        maxFrames = Infinity;
      }
      var _this = _super.call(this, schedulerActionCtor, function() {
        return _this.frame;
      }) || this;
      _this.maxFrames = maxFrames;
      _this.frame = 0;
      _this.index = -1;
      return _this;
    }
    VirtualTimeScheduler2.prototype.flush = function() {
      var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
      var error;
      var action;
      while ((action = actions[0]) && action.delay <= maxFrames) {
        actions.shift();
        this.frame = action.delay;
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      }
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    VirtualTimeScheduler2.frameTimeFactor = 10;
    return VirtualTimeScheduler2;
  }(AsyncScheduler_1.AsyncScheduler);
  exports.VirtualTimeScheduler = VirtualTimeScheduler;
  var VirtualAction = function(_super) {
    __extends(VirtualAction2, _super);
    function VirtualAction2(scheduler, work, index) {
      if (index === undefined) {
        index = scheduler.index += 1;
      }
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      _this.index = index;
      _this.active = true;
      _this.index = scheduler.index = index;
      return _this;
    }
    VirtualAction2.prototype.schedule = function(state, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      if (Number.isFinite(delay)) {
        if (!this.id) {
          return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction2(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
      } else {
        return Subscription_1.Subscription.EMPTY;
      }
    };
    VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      this.delay = scheduler.frame + delay;
      var actions = scheduler.actions;
      actions.push(this);
      actions.sort(VirtualAction2.sortActions);
      return 1;
    };
    VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
      if (delay === undefined) {
        delay = 0;
      }
      return;
    };
    VirtualAction2.prototype._execute = function(state, delay) {
      if (this.active === true) {
        return _super.prototype._execute.call(this, state, delay);
      }
    };
    VirtualAction2.sortActions = function(a, b) {
      if (a.delay === b.delay) {
        if (a.index === b.index) {
          return 0;
        } else if (a.index > b.index) {
          return 1;
        } else {
          return -1;
        }
      } else if (a.delay > b.delay) {
        return 1;
      } else {
        return -1;
      }
    };
    return VirtualAction2;
  }(AsyncAction_1.AsyncAction);
  exports.VirtualAction = VirtualAction;
});

// node_modules/rxjs/dist/cjs/internal/observable/empty.js
var require_empty = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.empty = exports.EMPTY = undefined;
  var Observable_1 = require_Observable();
  exports.EMPTY = new Observable_1.Observable(function(subscriber) {
    return subscriber.complete();
  });
  function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
  }
  exports.empty = empty;
  function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function(subscriber) {
      return scheduler.schedule(function() {
        return subscriber.complete();
      });
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isScheduler.js
var require_isScheduler = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isScheduler = undefined;
  var isFunction_1 = require_isFunction();
  function isScheduler(value) {
    return value && isFunction_1.isFunction(value.schedule);
  }
  exports.isScheduler = isScheduler;
});

// node_modules/rxjs/dist/cjs/internal/util/args.js
var require_args = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.popNumber = exports.popScheduler = exports.popResultSelector = undefined;
  var isFunction_1 = require_isFunction();
  var isScheduler_1 = require_isScheduler();
  function last(arr) {
    return arr[arr.length - 1];
  }
  function popResultSelector(args) {
    return isFunction_1.isFunction(last(args)) ? args.pop() : undefined;
  }
  exports.popResultSelector = popResultSelector;
  function popScheduler(args) {
    return isScheduler_1.isScheduler(last(args)) ? args.pop() : undefined;
  }
  exports.popScheduler = popScheduler;
  function popNumber(args, defaultValue) {
    return typeof last(args) === "number" ? args.pop() : defaultValue;
  }
  exports.popNumber = popNumber;
});

// node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js
var require_isArrayLike = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isArrayLike = undefined;
  exports.isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
  };
});

// node_modules/rxjs/dist/cjs/internal/util/isPromise.js
var require_isPromise = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isPromise = undefined;
  var isFunction_1 = require_isFunction();
  function isPromise(value) {
    return isFunction_1.isFunction(value === null || value === undefined ? undefined : value.then);
  }
  exports.isPromise = isPromise;
});

// node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js
var require_isInteropObservable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isInteropObservable = undefined;
  var observable_1 = require_observable();
  var isFunction_1 = require_isFunction();
  function isInteropObservable(input) {
    return isFunction_1.isFunction(input[observable_1.observable]);
  }
  exports.isInteropObservable = isInteropObservable;
});

// node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js
var require_isAsyncIterable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isAsyncIterable = undefined;
  var isFunction_1 = require_isFunction();
  function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === undefined ? undefined : obj[Symbol.asyncIterator]);
  }
  exports.isAsyncIterable = isAsyncIterable;
});

// node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js
var require_throwUnobservableError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createInvalidObservableTypeError = undefined;
  function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  exports.createInvalidObservableTypeError = createInvalidObservableTypeError;
});

// node_modules/rxjs/dist/cjs/internal/symbol/iterator.js
var require_iterator = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.iterator = exports.getSymbolIterator = undefined;
  function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
      return "@@iterator";
    }
    return Symbol.iterator;
  }
  exports.getSymbolIterator = getSymbolIterator;
  exports.iterator = getSymbolIterator();
});

// node_modules/rxjs/dist/cjs/internal/util/isIterable.js
var require_isIterable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isIterable = undefined;
  var iterator_1 = require_iterator();
  var isFunction_1 = require_isFunction();
  function isIterable(input) {
    return isFunction_1.isFunction(input === null || input === undefined ? undefined : input[iterator_1.iterator]);
  }
  exports.isIterable = isIterable;
});

// node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js
var require_isReadableStreamLike = __commonJS((exports) => {
  var __generator = exports && exports.__generator || function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : undefined, done: true };
    }
  };
  var __await = exports && exports.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  };
  var __asyncGenerator = exports && exports.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function verb(n) {
      if (g[n])
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]);
    }
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = undefined;
  var isFunction_1 = require_isFunction();
  function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
      var reader, _a, value, done;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;
          case 1:
            _b.trys.push([1, , 9, 10]);
            _b.label = 2;
          case 2:
            if (false)
              ;
            return [4, __await(reader.read())];
          case 3:
            _a = _b.sent(), value = _a.value, done = _a.done;
            if (!done)
              return [3, 5];
            return [4, __await(undefined)];
          case 4:
            return [2, _b.sent()];
          case 5:
            return [4, __await(value)];
          case 6:
            return [4, _b.sent()];
          case 7:
            _b.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            reader.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
  function isReadableStreamLike(obj) {
    return isFunction_1.isFunction(obj === null || obj === undefined ? undefined : obj.getReader);
  }
  exports.isReadableStreamLike = isReadableStreamLike;
});

// node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js
var require_innerFrom = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator = exports && exports.__generator || function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : undefined, done: true };
    }
  };
  var __asyncValues = exports && exports.__asyncValues || function(o) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  };
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = undefined;
  var isArrayLike_1 = require_isArrayLike();
  var isPromise_1 = require_isPromise();
  var Observable_1 = require_Observable();
  var isInteropObservable_1 = require_isInteropObservable();
  var isAsyncIterable_1 = require_isAsyncIterable();
  var throwUnobservableError_1 = require_throwUnobservableError();
  var isIterable_1 = require_isIterable();
  var isReadableStreamLike_1 = require_isReadableStreamLike();
  var isFunction_1 = require_isFunction();
  var reportUnhandledError_1 = require_reportUnhandledError();
  var observable_1 = require_observable();
  function innerFrom(input) {
    if (input instanceof Observable_1.Observable) {
      return input;
    }
    if (input != null) {
      if (isInteropObservable_1.isInteropObservable(input)) {
        return fromInteropObservable(input);
      }
      if (isArrayLike_1.isArrayLike(input)) {
        return fromArrayLike(input);
      }
      if (isPromise_1.isPromise(input)) {
        return fromPromise(input);
      }
      if (isAsyncIterable_1.isAsyncIterable(input)) {
        return fromAsyncIterable(input);
      }
      if (isIterable_1.isIterable(input)) {
        return fromIterable(input);
      }
      if (isReadableStreamLike_1.isReadableStreamLike(input)) {
        return fromReadableStreamLike(input);
      }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
  }
  exports.innerFrom = innerFrom;
  function fromInteropObservable(obj) {
    return new Observable_1.Observable(function(subscriber) {
      var obs = obj[observable_1.observable]();
      if (isFunction_1.isFunction(obs.subscribe)) {
        return obs.subscribe(subscriber);
      }
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  exports.fromInteropObservable = fromInteropObservable;
  function fromArrayLike(array) {
    return new Observable_1.Observable(function(subscriber) {
      for (var i = 0;i < array.length && !subscriber.closed; i++) {
        subscriber.next(array[i]);
      }
      subscriber.complete();
    });
  }
  exports.fromArrayLike = fromArrayLike;
  function fromPromise(promise) {
    return new Observable_1.Observable(function(subscriber) {
      promise.then(function(value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function(err) {
        return subscriber.error(err);
      }).then(null, reportUnhandledError_1.reportUnhandledError);
    });
  }
  exports.fromPromise = fromPromise;
  function fromIterable(iterable) {
    return new Observable_1.Observable(function(subscriber) {
      var e_1, _a;
      try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next();!iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
          var value = iterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
            _a.call(iterable_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      subscriber.complete();
    });
  }
  exports.fromIterable = fromIterable;
  function fromAsyncIterable(asyncIterable) {
    return new Observable_1.Observable(function(subscriber) {
      process3(asyncIterable, subscriber).catch(function(err) {
        return subscriber.error(err);
      });
    });
  }
  exports.fromAsyncIterable = fromAsyncIterable;
  function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
  }
  exports.fromReadableStreamLike = fromReadableStreamLike;
  function process3(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, undefined, undefined, function() {
      var value, e_2_1;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 11]);
            asyncIterable_1 = __asyncValues(asyncIterable);
            _b.label = 1;
          case 1:
            return [4, asyncIterable_1.next()];
          case 2:
            if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
              return [3, 4];
            value = asyncIterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return [2];
            }
            _b.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            e_2_1 = _b.sent();
            e_2 = { error: e_2_1 };
            return [3, 11];
          case 6:
            _b.trys.push([6, , 9, 10]);
            if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
              return [3, 8];
            return [4, _a.call(asyncIterable_1)];
          case 7:
            _b.sent();
            _b.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (e_2)
              throw e_2.error;
            return [7];
          case 10:
            return [7];
          case 11:
            subscriber.complete();
            return [2];
        }
      });
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js
var require_executeSchedule = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.executeSchedule = undefined;
  function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === undefined) {
      delay = 0;
    }
    if (repeat === undefined) {
      repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function() {
      work();
      if (repeat) {
        parentSubscription.add(this.schedule(null, delay));
      } else {
        this.unsubscribe();
      }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
      return scheduleSubscription;
    }
  }
  exports.executeSchedule = executeSchedule;
});

// node_modules/rxjs/dist/cjs/internal/operators/observeOn.js
var require_observeOn = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.observeOn = undefined;
  var executeSchedule_1 = require_executeSchedule();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function observeOn(scheduler, delay) {
    if (delay === undefined) {
      delay = 0;
    }
    return lift_1.operate(function(source, subscriber) {
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          return subscriber.next(value);
        }, delay);
      }, function() {
        return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          return subscriber.complete();
        }, delay);
      }, function(err) {
        return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          return subscriber.error(err);
        }, delay);
      }));
    });
  }
  exports.observeOn = observeOn;
});

// node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js
var require_subscribeOn = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.subscribeOn = undefined;
  var lift_1 = require_lift();
  function subscribeOn(scheduler, delay) {
    if (delay === undefined) {
      delay = 0;
    }
    return lift_1.operate(function(source, subscriber) {
      subscriber.add(scheduler.schedule(function() {
        return source.subscribe(subscriber);
      }, delay));
    });
  }
  exports.subscribeOn = subscribeOn;
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js
var require_scheduleObservable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.scheduleObservable = undefined;
  var innerFrom_1 = require_innerFrom();
  var observeOn_1 = require_observeOn();
  var subscribeOn_1 = require_subscribeOn();
  function scheduleObservable(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
  }
  exports.scheduleObservable = scheduleObservable;
});

// node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js
var require_schedulePromise = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.schedulePromise = undefined;
  var innerFrom_1 = require_innerFrom();
  var observeOn_1 = require_observeOn();
  var subscribeOn_1 = require_subscribeOn();
  function schedulePromise(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
  }
  exports.schedulePromise = schedulePromise;
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js
var require_scheduleArray = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.scheduleArray = undefined;
  var Observable_1 = require_Observable();
  function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
      var i = 0;
      return scheduler.schedule(function() {
        if (i === input.length) {
          subscriber.complete();
        } else {
          subscriber.next(input[i++]);
          if (!subscriber.closed) {
            this.schedule();
          }
        }
      });
    });
  }
  exports.scheduleArray = scheduleArray;
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js
var require_scheduleIterable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.scheduleIterable = undefined;
  var Observable_1 = require_Observable();
  var iterator_1 = require_iterator();
  var isFunction_1 = require_isFunction();
  var executeSchedule_1 = require_executeSchedule();
  function scheduleIterable(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
      var iterator;
      executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
        iterator = input[iterator_1.iterator]();
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          var _a;
          var value;
          var done;
          try {
            _a = iterator.next(), value = _a.value, done = _a.done;
          } catch (err) {
            subscriber.error(err);
            return;
          }
          if (done) {
            subscriber.complete();
          } else {
            subscriber.next(value);
          }
        }, 0, true);
      });
      return function() {
        return isFunction_1.isFunction(iterator === null || iterator === undefined ? undefined : iterator.return) && iterator.return();
      };
    });
  }
  exports.scheduleIterable = scheduleIterable;
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js
var require_scheduleAsyncIterable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.scheduleAsyncIterable = undefined;
  var Observable_1 = require_Observable();
  var executeSchedule_1 = require_executeSchedule();
  function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
      throw new Error("Iterable cannot be null");
    }
    return new Observable_1.Observable(function(subscriber) {
      executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
        var iterator = input[Symbol.asyncIterator]();
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          iterator.next().then(function(result) {
            if (result.done) {
              subscriber.complete();
            } else {
              subscriber.next(result.value);
            }
          });
        }, 0, true);
      });
    });
  }
  exports.scheduleAsyncIterable = scheduleAsyncIterable;
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js
var require_scheduleReadableStreamLike = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.scheduleReadableStreamLike = undefined;
  var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
  var isReadableStreamLike_1 = require_isReadableStreamLike();
  function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
  }
  exports.scheduleReadableStreamLike = scheduleReadableStreamLike;
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js
var require_scheduled = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.scheduled = undefined;
  var scheduleObservable_1 = require_scheduleObservable();
  var schedulePromise_1 = require_schedulePromise();
  var scheduleArray_1 = require_scheduleArray();
  var scheduleIterable_1 = require_scheduleIterable();
  var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
  var isInteropObservable_1 = require_isInteropObservable();
  var isPromise_1 = require_isPromise();
  var isArrayLike_1 = require_isArrayLike();
  var isIterable_1 = require_isIterable();
  var isAsyncIterable_1 = require_isAsyncIterable();
  var throwUnobservableError_1 = require_throwUnobservableError();
  var isReadableStreamLike_1 = require_isReadableStreamLike();
  var scheduleReadableStreamLike_1 = require_scheduleReadableStreamLike();
  function scheduled(input, scheduler) {
    if (input != null) {
      if (isInteropObservable_1.isInteropObservable(input)) {
        return scheduleObservable_1.scheduleObservable(input, scheduler);
      }
      if (isArrayLike_1.isArrayLike(input)) {
        return scheduleArray_1.scheduleArray(input, scheduler);
      }
      if (isPromise_1.isPromise(input)) {
        return schedulePromise_1.schedulePromise(input, scheduler);
      }
      if (isAsyncIterable_1.isAsyncIterable(input)) {
        return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
      }
      if (isIterable_1.isIterable(input)) {
        return scheduleIterable_1.scheduleIterable(input, scheduler);
      }
      if (isReadableStreamLike_1.isReadableStreamLike(input)) {
        return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
      }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
  }
  exports.scheduled = scheduled;
});

// node_modules/rxjs/dist/cjs/internal/observable/from.js
var require_from = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.from = undefined;
  var scheduled_1 = require_scheduled();
  var innerFrom_1 = require_innerFrom();
  function from(input, scheduler) {
    return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
  }
  exports.from = from;
});

// node_modules/rxjs/dist/cjs/internal/observable/of.js
var require_of = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.of = undefined;
  var args_1 = require_args();
  var from_1 = require_from();
  function of() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return from_1.from(args, scheduler);
  }
  exports.of = of;
});

// node_modules/rxjs/dist/cjs/internal/observable/throwError.js
var require_throwError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.throwError = undefined;
  var Observable_1 = require_Observable();
  var isFunction_1 = require_isFunction();
  function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
      return errorOrErrorFactory;
    };
    var init = function(subscriber) {
      return subscriber.error(errorFactory());
    };
    return new Observable_1.Observable(scheduler ? function(subscriber) {
      return scheduler.schedule(init, 0, subscriber);
    } : init);
  }
  exports.throwError = throwError;
});

// node_modules/rxjs/dist/cjs/internal/Notification.js
var require_Notification = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.observeNotification = exports.Notification = exports.NotificationKind = undefined;
  var empty_1 = require_empty();
  var of_1 = require_of();
  var throwError_1 = require_throwError();
  var isFunction_1 = require_isFunction();
  var NotificationKind;
  (function(NotificationKind2) {
    NotificationKind2["NEXT"] = "N";
    NotificationKind2["ERROR"] = "E";
    NotificationKind2["COMPLETE"] = "C";
  })(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
  var Notification = function() {
    function Notification2(kind, value, error) {
      this.kind = kind;
      this.value = value;
      this.error = error;
      this.hasValue = kind === "N";
    }
    Notification2.prototype.observe = function(observer) {
      return observeNotification(this, observer);
    };
    Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
      var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
      return kind === "N" ? nextHandler === null || nextHandler === undefined ? undefined : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === undefined ? undefined : errorHandler(error) : completeHandler === null || completeHandler === undefined ? undefined : completeHandler();
    };
    Notification2.prototype.accept = function(nextOrObserver, error, complete) {
      var _a;
      return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === undefined ? undefined : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
    };
    Notification2.prototype.toObservable = function() {
      var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
      var result = kind === "N" ? of_1.of(value) : kind === "E" ? throwError_1.throwError(function() {
        return error;
      }) : kind === "C" ? empty_1.EMPTY : 0;
      if (!result) {
        throw new TypeError("Unexpected notification kind " + kind);
      }
      return result;
    };
    Notification2.createNext = function(value) {
      return new Notification2("N", value);
    };
    Notification2.createError = function(err) {
      return new Notification2("E", undefined, err);
    };
    Notification2.createComplete = function() {
      return Notification2.completeNotification;
    };
    Notification2.completeNotification = new Notification2("C");
    return Notification2;
  }();
  exports.Notification = Notification;
  function observeNotification(notification, observer) {
    var _a, _b, _c;
    var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
    if (typeof kind !== "string") {
      throw new TypeError('Invalid notification, missing "kind"');
    }
    kind === "N" ? (_a = observer.next) === null || _a === undefined || _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === undefined || _b.call(observer, error) : (_c = observer.complete) === null || _c === undefined || _c.call(observer);
  }
  exports.observeNotification = observeNotification;
});

// node_modules/rxjs/dist/cjs/internal/util/isObservable.js
var require_isObservable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isObservable = undefined;
  var Observable_1 = require_Observable();
  var isFunction_1 = require_isFunction();
  function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
  }
  exports.isObservable = isObservable;
});

// node_modules/rxjs/dist/cjs/internal/util/EmptyError.js
var require_EmptyError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.EmptyError = undefined;
  var createErrorClass_1 = require_createErrorClass();
  exports.EmptyError = createErrorClass_1.createErrorClass(function(_super) {
    return function EmptyErrorImpl() {
      _super(this);
      this.name = "EmptyError";
      this.message = "no elements in sequence";
    };
  });
});

// node_modules/rxjs/dist/cjs/internal/lastValueFrom.js
var require_lastValueFrom = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.lastValueFrom = undefined;
  var EmptyError_1 = require_EmptyError();
  function lastValueFrom(source, config) {
    var hasConfig = typeof config === "object";
    return new Promise(function(resolve, reject) {
      var _hasValue = false;
      var _value;
      source.subscribe({
        next: function(value) {
          _value = value;
          _hasValue = true;
        },
        error: reject,
        complete: function() {
          if (_hasValue) {
            resolve(_value);
          } else if (hasConfig) {
            resolve(config.defaultValue);
          } else {
            reject(new EmptyError_1.EmptyError);
          }
        }
      });
    });
  }
  exports.lastValueFrom = lastValueFrom;
});

// node_modules/rxjs/dist/cjs/internal/firstValueFrom.js
var require_firstValueFrom = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.firstValueFrom = undefined;
  var EmptyError_1 = require_EmptyError();
  var Subscriber_1 = require_Subscriber();
  function firstValueFrom(source, config) {
    var hasConfig = typeof config === "object";
    return new Promise(function(resolve, reject) {
      var subscriber = new Subscriber_1.SafeSubscriber({
        next: function(value) {
          resolve(value);
          subscriber.unsubscribe();
        },
        error: reject,
        complete: function() {
          if (hasConfig) {
            resolve(config.defaultValue);
          } else {
            reject(new EmptyError_1.EmptyError);
          }
        }
      });
      source.subscribe(subscriber);
    });
  }
  exports.firstValueFrom = firstValueFrom;
});

// node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js
var require_ArgumentOutOfRangeError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ArgumentOutOfRangeError = undefined;
  var createErrorClass_1 = require_createErrorClass();
  exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function(_super) {
    return function ArgumentOutOfRangeErrorImpl() {
      _super(this);
      this.name = "ArgumentOutOfRangeError";
      this.message = "argument out of range";
    };
  });
});

// node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js
var require_NotFoundError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NotFoundError = undefined;
  var createErrorClass_1 = require_createErrorClass();
  exports.NotFoundError = createErrorClass_1.createErrorClass(function(_super) {
    return function NotFoundErrorImpl(message) {
      _super(this);
      this.name = "NotFoundError";
      this.message = message;
    };
  });
});

// node_modules/rxjs/dist/cjs/internal/util/SequenceError.js
var require_SequenceError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SequenceError = undefined;
  var createErrorClass_1 = require_createErrorClass();
  exports.SequenceError = createErrorClass_1.createErrorClass(function(_super) {
    return function SequenceErrorImpl(message) {
      _super(this);
      this.name = "SequenceError";
      this.message = message;
    };
  });
});

// node_modules/rxjs/dist/cjs/internal/util/isDate.js
var require_isDate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isValidDate = undefined;
  function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
  }
  exports.isValidDate = isValidDate;
});

// node_modules/rxjs/dist/cjs/internal/operators/timeout.js
var require_timeout = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.timeout = exports.TimeoutError = undefined;
  var async_1 = require_async();
  var isDate_1 = require_isDate();
  var lift_1 = require_lift();
  var innerFrom_1 = require_innerFrom();
  var createErrorClass_1 = require_createErrorClass();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var executeSchedule_1 = require_executeSchedule();
  exports.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
    return function TimeoutErrorImpl(info) {
      if (info === undefined) {
        info = null;
      }
      _super(this);
      this.message = "Timeout has occurred";
      this.name = "TimeoutError";
      this.info = info;
    };
  });
  function timeout(config, schedulerArg) {
    var _a = isDate_1.isValidDate(config) ? { first: config } : typeof config === "number" ? { each: config } : config, first = _a.first, each = _a.each, _b = _a.with, _with = _b === undefined ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === undefined ? schedulerArg !== null && schedulerArg !== undefined ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === undefined ? null : _d;
    if (first == null && each == null) {
      throw new TypeError("No timeout provided.");
    }
    return lift_1.operate(function(source, subscriber) {
      var originalSourceSubscription;
      var timerSubscription;
      var lastValue = null;
      var seen = 0;
      var startTimer = function(delay) {
        timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          try {
            originalSourceSubscription.unsubscribe();
            innerFrom_1.innerFrom(_with({
              meta,
              lastValue,
              seen
            })).subscribe(subscriber);
          } catch (err) {
            subscriber.error(err);
          }
        }, delay);
      };
      originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        timerSubscription === null || timerSubscription === undefined || timerSubscription.unsubscribe();
        seen++;
        subscriber.next(lastValue = value);
        each > 0 && startTimer(each);
      }, undefined, undefined, function() {
        if (!(timerSubscription === null || timerSubscription === undefined ? undefined : timerSubscription.closed)) {
          timerSubscription === null || timerSubscription === undefined || timerSubscription.unsubscribe();
        }
        lastValue = null;
      }));
      !seen && startTimer(first != null ? typeof first === "number" ? first : +first - scheduler.now() : each);
    });
  }
  exports.timeout = timeout;
  function timeoutErrorFactory(info) {
    throw new exports.TimeoutError(info);
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/map.js
var require_map = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.map = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function map(project, thisArg) {
    return lift_1.operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        subscriber.next(project.call(thisArg, value, index++));
      }));
    });
  }
  exports.map = map;
});

// node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js
var require_mapOneOrManyArgs = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mapOneOrManyArgs = undefined;
  var map_1 = require_map();
  var isArray = Array.isArray;
  function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(undefined, __spreadArray([], __read(args))) : fn(args);
  }
  function mapOneOrManyArgs(fn) {
    return map_1.map(function(args) {
      return callOrApply(fn, args);
    });
  }
  exports.mapOneOrManyArgs = mapOneOrManyArgs;
});

// node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js
var require_bindCallbackInternals = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bindCallbackInternals = undefined;
  var isScheduler_1 = require_isScheduler();
  var Observable_1 = require_Observable();
  var subscribeOn_1 = require_subscribeOn();
  var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
  var observeOn_1 = require_observeOn();
  var AsyncSubject_1 = require_AsyncSubject();
  function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
      if (isScheduler_1.isScheduler(resultSelector)) {
        scheduler = resultSelector;
      } else {
        return function() {
          var args = [];
          for (var _i = 0;_i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
        };
      }
    }
    if (scheduler) {
      return function() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
      };
    }
    return function() {
      var _this = this;
      var args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var subject = new AsyncSubject_1.AsyncSubject;
      var uninitialized = true;
      return new Observable_1.Observable(function(subscriber) {
        var subs = subject.subscribe(subscriber);
        if (uninitialized) {
          uninitialized = false;
          var isAsync_1 = false;
          var isComplete_1 = false;
          callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
            function() {
              var results = [];
              for (var _i2 = 0;_i2 < arguments.length; _i2++) {
                results[_i2] = arguments[_i2];
              }
              if (isNodeStyle) {
                var err = results.shift();
                if (err != null) {
                  subject.error(err);
                  return;
                }
              }
              subject.next(1 < results.length ? results : results[0]);
              isComplete_1 = true;
              if (isAsync_1) {
                subject.complete();
              }
            }
          ]));
          if (isComplete_1) {
            subject.complete();
          }
          isAsync_1 = true;
        }
        return subs;
      });
    };
  }
  exports.bindCallbackInternals = bindCallbackInternals;
});

// node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js
var require_bindCallback = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bindCallback = undefined;
  var bindCallbackInternals_1 = require_bindCallbackInternals();
  function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
  }
  exports.bindCallback = bindCallback;
});

// node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js
var require_bindNodeCallback = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bindNodeCallback = undefined;
  var bindCallbackInternals_1 = require_bindCallbackInternals();
  function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
  }
  exports.bindNodeCallback = bindNodeCallback;
});

// node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js
var require_argsArgArrayOrObject = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.argsArgArrayOrObject = undefined;
  var isArray = Array.isArray;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectProto = Object.prototype;
  var getKeys = Object.keys;
  function argsArgArrayOrObject(args) {
    if (args.length === 1) {
      var first_1 = args[0];
      if (isArray(first_1)) {
        return { args: first_1, keys: null };
      }
      if (isPOJO(first_1)) {
        var keys = getKeys(first_1);
        return {
          args: keys.map(function(key) {
            return first_1[key];
          }),
          keys
        };
      }
    }
    return { args, keys: null };
  }
  exports.argsArgArrayOrObject = argsArgArrayOrObject;
  function isPOJO(obj) {
    return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/createObject.js
var require_createObject = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createObject = undefined;
  function createObject(keys, values) {
    return keys.reduce(function(result, key, i) {
      return result[key] = values[i], result;
    }, {});
  }
  exports.createObject = createObject;
});

// node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js
var require_combineLatest = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.combineLatestInit = exports.combineLatest = undefined;
  var Observable_1 = require_Observable();
  var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
  var from_1 = require_from();
  var identity_1 = require_identity();
  var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
  var args_1 = require_args();
  var createObject_1 = require_createObject();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var executeSchedule_1 = require_executeSchedule();
  function combineLatest() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) {
      return from_1.from([], scheduler);
    }
    var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
      return createObject_1.createObject(keys, values);
    } : identity_1.identity));
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
  }
  exports.combineLatest = combineLatest;
  function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === undefined) {
      valueTransform = identity_1.identity;
    }
    return function(subscriber) {
      maybeSchedule(scheduler, function() {
        var length = observables.length;
        var values = new Array(length);
        var active = length;
        var remainingFirstValues = length;
        var _loop_1 = function(i2) {
          maybeSchedule(scheduler, function() {
            var source = from_1.from(observables[i2], scheduler);
            var hasFirstValue = false;
            source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
              values[i2] = value;
              if (!hasFirstValue) {
                hasFirstValue = true;
                remainingFirstValues--;
              }
              if (!remainingFirstValues) {
                subscriber.next(valueTransform(values.slice()));
              }
            }, function() {
              if (!--active) {
                subscriber.complete();
              }
            }));
          }, subscriber);
        };
        for (var i = 0;i < length; i++) {
          _loop_1(i);
        }
      }, subscriber);
    };
  }
  exports.combineLatestInit = combineLatestInit;
  function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) {
      executeSchedule_1.executeSchedule(subscription, scheduler, execute);
    } else {
      execute();
    }
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js
var require_mergeInternals = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mergeInternals = undefined;
  var innerFrom_1 = require_innerFrom();
  var executeSchedule_1 = require_executeSchedule();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      if (isComplete && !buffer.length && !active) {
        subscriber.complete();
      }
    };
    var outerNext = function(value) {
      return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
      expand && subscriber.next(value);
      active++;
      var innerComplete = false;
      innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
        onBeforeNext === null || onBeforeNext === undefined || onBeforeNext(innerValue);
        if (expand) {
          outerNext(innerValue);
        } else {
          subscriber.next(innerValue);
        }
      }, function() {
        innerComplete = true;
      }, undefined, function() {
        if (innerComplete) {
          try {
            active--;
            var _loop_1 = function() {
              var bufferedValue = buffer.shift();
              if (innerSubScheduler) {
                executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function() {
                  return doInnerSub(bufferedValue);
                });
              } else {
                doInnerSub(bufferedValue);
              }
            };
            while (buffer.length && active < concurrent) {
              _loop_1();
            }
            checkComplete();
          } catch (err) {
            subscriber.error(err);
          }
        }
      }));
    };
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function() {
      isComplete = true;
      checkComplete();
    }));
    return function() {
      additionalFinalizer === null || additionalFinalizer === undefined || additionalFinalizer();
    };
  }
  exports.mergeInternals = mergeInternals;
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js
var require_mergeMap = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mergeMap = undefined;
  var map_1 = require_map();
  var innerFrom_1 = require_innerFrom();
  var lift_1 = require_lift();
  var mergeInternals_1 = require_mergeInternals();
  var isFunction_1 = require_isFunction();
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === undefined) {
      concurrent = Infinity;
    }
    if (isFunction_1.isFunction(resultSelector)) {
      return mergeMap(function(a, i) {
        return map_1.map(function(b, ii) {
          return resultSelector(a, b, i, ii);
        })(innerFrom_1.innerFrom(project(a, i)));
      }, concurrent);
    } else if (typeof resultSelector === "number") {
      concurrent = resultSelector;
    }
    return lift_1.operate(function(source, subscriber) {
      return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
    });
  }
  exports.mergeMap = mergeMap;
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js
var require_mergeAll = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mergeAll = undefined;
  var mergeMap_1 = require_mergeMap();
  var identity_1 = require_identity();
  function mergeAll(concurrent) {
    if (concurrent === undefined) {
      concurrent = Infinity;
    }
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
  }
  exports.mergeAll = mergeAll;
});

// node_modules/rxjs/dist/cjs/internal/operators/concatAll.js
var require_concatAll = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.concatAll = undefined;
  var mergeAll_1 = require_mergeAll();
  function concatAll() {
    return mergeAll_1.mergeAll(1);
  }
  exports.concatAll = concatAll;
});

// node_modules/rxjs/dist/cjs/internal/observable/concat.js
var require_concat = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.concat = undefined;
  var concatAll_1 = require_concatAll();
  var args_1 = require_args();
  var from_1 = require_from();
  function concat() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
  }
  exports.concat = concat;
});

// node_modules/rxjs/dist/cjs/internal/observable/defer.js
var require_defer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.defer = undefined;
  var Observable_1 = require_Observable();
  var innerFrom_1 = require_innerFrom();
  function defer(observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
      innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
    });
  }
  exports.defer = defer;
});

// node_modules/rxjs/dist/cjs/internal/observable/connectable.js
var require_connectable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.connectable = undefined;
  var Subject_1 = require_Subject();
  var Observable_1 = require_Observable();
  var defer_1 = require_defer();
  var DEFAULT_CONFIG = {
    connector: function() {
      return new Subject_1.Subject;
    },
    resetOnDisconnect: true
  };
  function connectable(source, config) {
    if (config === undefined) {
      config = DEFAULT_CONFIG;
    }
    var connection = null;
    var { connector, resetOnDisconnect: _a } = config, resetOnDisconnect = _a === undefined ? true : _a;
    var subject = connector();
    var result = new Observable_1.Observable(function(subscriber) {
      return subject.subscribe(subscriber);
    });
    result.connect = function() {
      if (!connection || connection.closed) {
        connection = defer_1.defer(function() {
          return source;
        }).subscribe(subject);
        if (resetOnDisconnect) {
          connection.add(function() {
            return subject = connector();
          });
        }
      }
      return connection;
    };
    return result;
  }
  exports.connectable = connectable;
});

// node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js
var require_forkJoin = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.forkJoin = undefined;
  var Observable_1 = require_Observable();
  var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
  var innerFrom_1 = require_innerFrom();
  var args_1 = require_args();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
  var createObject_1 = require_createObject();
  function forkJoin() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new Observable_1.Observable(function(subscriber) {
      var length = sources.length;
      if (!length) {
        subscriber.complete();
        return;
      }
      var values = new Array(length);
      var remainingCompletions = length;
      var remainingEmissions = length;
      var _loop_1 = function(sourceIndex2) {
        var hasValue = false;
        innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (!hasValue) {
            hasValue = true;
            remainingEmissions--;
          }
          values[sourceIndex2] = value;
        }, function() {
          return remainingCompletions--;
        }, undefined, function() {
          if (!remainingCompletions || !hasValue) {
            if (!remainingEmissions) {
              subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
            }
            subscriber.complete();
          }
        }));
      };
      for (var sourceIndex = 0;sourceIndex < length; sourceIndex++) {
        _loop_1(sourceIndex);
      }
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
  }
  exports.forkJoin = forkJoin;
});

// node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js
var require_fromEvent = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fromEvent = undefined;
  var innerFrom_1 = require_innerFrom();
  var Observable_1 = require_Observable();
  var mergeMap_1 = require_mergeMap();
  var isArrayLike_1 = require_isArrayLike();
  var isFunction_1 = require_isFunction();
  var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
  var nodeEventEmitterMethods = ["addListener", "removeListener"];
  var eventTargetMethods = ["addEventListener", "removeEventListener"];
  var jqueryMethods = ["on", "off"];
  function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
      resultSelector = options;
      options = undefined;
    }
    if (resultSelector) {
      return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
      return function(handler) {
        return target[methodName](eventName, handler, options);
      };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
      if (isArrayLike_1.isArrayLike(target)) {
        return mergeMap_1.mergeMap(function(subTarget) {
          return fromEvent(subTarget, eventName, options);
        })(innerFrom_1.innerFrom(target));
      }
    }
    if (!add) {
      throw new TypeError("Invalid event target");
    }
    return new Observable_1.Observable(function(subscriber) {
      var handler = function() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return subscriber.next(1 < args.length ? args : args[0]);
      };
      add(handler);
      return function() {
        return remove(handler);
      };
    });
  }
  exports.fromEvent = fromEvent;
  function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
      return function(handler) {
        return target[methodName](eventName, handler);
      };
    };
  }
  function isNodeStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
  }
  function isJQueryStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
  }
  function isEventTarget(target) {
    return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js
var require_fromEventPattern = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fromEventPattern = undefined;
  var Observable_1 = require_Observable();
  var isFunction_1 = require_isFunction();
  var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
  function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
      return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    return new Observable_1.Observable(function(subscriber) {
      var handler = function() {
        var e = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          e[_i] = arguments[_i];
        }
        return subscriber.next(e.length === 1 ? e[0] : e);
      };
      var retValue = addHandler(handler);
      return isFunction_1.isFunction(removeHandler) ? function() {
        return removeHandler(handler, retValue);
      } : undefined;
    });
  }
  exports.fromEventPattern = fromEventPattern;
});

// node_modules/rxjs/dist/cjs/internal/observable/generate.js
var require_generate = __commonJS((exports) => {
  var __generator = exports && exports.__generator || function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : undefined, done: true };
    }
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.generate = undefined;
  var identity_1 = require_identity();
  var isScheduler_1 = require_isScheduler();
  var defer_1 = require_defer();
  var scheduleIterable_1 = require_scheduleIterable();
  function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) {
      _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === undefined ? identity_1.identity : _b, scheduler = _a.scheduler;
    } else {
      initialState = initialStateOrOptions;
      if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
        resultSelector = identity_1.identity;
        scheduler = resultSelectorOrScheduler;
      } else {
        resultSelector = resultSelectorOrScheduler;
      }
    }
    function gen() {
      var state;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            state = initialState;
            _a2.label = 1;
          case 1:
            if (!(!condition || condition(state)))
              return [3, 4];
            return [4, resultSelector(state)];
          case 2:
            _a2.sent();
            _a2.label = 3;
          case 3:
            state = iterate(state);
            return [3, 1];
          case 4:
            return [2];
        }
      });
    }
    return defer_1.defer(scheduler ? function() {
      return scheduleIterable_1.scheduleIterable(gen(), scheduler);
    } : gen);
  }
  exports.generate = generate;
});

// node_modules/rxjs/dist/cjs/internal/observable/iif.js
var require_iif = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.iif = undefined;
  var defer_1 = require_defer();
  function iif(condition, trueResult, falseResult) {
    return defer_1.defer(function() {
      return condition() ? trueResult : falseResult;
    });
  }
  exports.iif = iif;
});

// node_modules/rxjs/dist/cjs/internal/observable/timer.js
var require_timer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.timer = undefined;
  var Observable_1 = require_Observable();
  var async_1 = require_async();
  var isScheduler_1 = require_isScheduler();
  var isDate_1 = require_isDate();
  function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === undefined) {
      dueTime = 0;
    }
    if (scheduler === undefined) {
      scheduler = async_1.async;
    }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
      if (isScheduler_1.isScheduler(intervalOrScheduler)) {
        scheduler = intervalOrScheduler;
      } else {
        intervalDuration = intervalOrScheduler;
      }
    }
    return new Observable_1.Observable(function(subscriber) {
      var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
      if (due < 0) {
        due = 0;
      }
      var n = 0;
      return scheduler.schedule(function() {
        if (!subscriber.closed) {
          subscriber.next(n++);
          if (0 <= intervalDuration) {
            this.schedule(undefined, intervalDuration);
          } else {
            subscriber.complete();
          }
        }
      }, due);
    });
  }
  exports.timer = timer;
});

// node_modules/rxjs/dist/cjs/internal/observable/interval.js
var require_interval = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.interval = undefined;
  var async_1 = require_async();
  var timer_1 = require_timer();
  function interval(period, scheduler) {
    if (period === undefined) {
      period = 0;
    }
    if (scheduler === undefined) {
      scheduler = async_1.asyncScheduler;
    }
    if (period < 0) {
      period = 0;
    }
    return timer_1.timer(period, period, scheduler);
  }
  exports.interval = interval;
});

// node_modules/rxjs/dist/cjs/internal/observable/merge.js
var require_merge = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.merge = undefined;
  var mergeAll_1 = require_mergeAll();
  var innerFrom_1 = require_innerFrom();
  var empty_1 = require_empty();
  var args_1 = require_args();
  var from_1 = require_from();
  function merge() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? empty_1.EMPTY : sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
  }
  exports.merge = merge;
});

// node_modules/rxjs/dist/cjs/internal/observable/never.js
var require_never = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.never = exports.NEVER = undefined;
  var Observable_1 = require_Observable();
  var noop_1 = require_noop();
  exports.NEVER = new Observable_1.Observable(noop_1.noop);
  function never() {
    return exports.NEVER;
  }
  exports.never = never;
});

// node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js
var require_argsOrArgArray = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.argsOrArgArray = undefined;
  var isArray = Array.isArray;
  function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
  }
  exports.argsOrArgArray = argsOrArgArray;
});

// node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js
var require_onErrorResumeNext = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.onErrorResumeNext = undefined;
  var Observable_1 = require_Observable();
  var argsOrArgArray_1 = require_argsOrArgArray();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var noop_1 = require_noop();
  var innerFrom_1 = require_innerFrom();
  function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return new Observable_1.Observable(function(subscriber) {
      var sourceIndex = 0;
      var subscribeNext = function() {
        if (sourceIndex < nextSources.length) {
          var nextSource = undefined;
          try {
            nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
          } catch (err) {
            subscribeNext();
            return;
          }
          var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, noop_1.noop, noop_1.noop);
          nextSource.subscribe(innerSubscriber);
          innerSubscriber.add(subscribeNext);
        } else {
          subscriber.complete();
        }
      };
      subscribeNext();
    });
  }
  exports.onErrorResumeNext = onErrorResumeNext;
});

// node_modules/rxjs/dist/cjs/internal/observable/pairs.js
var require_pairs = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.pairs = undefined;
  var from_1 = require_from();
  function pairs(obj, scheduler) {
    return from_1.from(Object.entries(obj), scheduler);
  }
  exports.pairs = pairs;
});

// node_modules/rxjs/dist/cjs/internal/util/not.js
var require_not = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.not = undefined;
  function not(pred, thisArg) {
    return function(value, index) {
      return !pred.call(thisArg, value, index);
    };
  }
  exports.not = not;
});

// node_modules/rxjs/dist/cjs/internal/operators/filter.js
var require_filter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.filter = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function filter(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        return predicate.call(thisArg, value, index++) && subscriber.next(value);
      }));
    });
  }
  exports.filter = filter;
});

// node_modules/rxjs/dist/cjs/internal/observable/partition.js
var require_partition = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.partition = undefined;
  var not_1 = require_not();
  var filter_1 = require_filter();
  var innerFrom_1 = require_innerFrom();
  function partition(source, predicate, thisArg) {
    return [filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)), filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))];
  }
  exports.partition = partition;
});

// node_modules/rxjs/dist/cjs/internal/observable/race.js
var require_race = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.raceInit = exports.race = undefined;
  var Observable_1 = require_Observable();
  var innerFrom_1 = require_innerFrom();
  var argsOrArgArray_1 = require_argsOrArgArray();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function race() {
    var sources = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      sources[_i] = arguments[_i];
    }
    sources = argsOrArgArray_1.argsOrArgArray(sources);
    return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
  }
  exports.race = race;
  function raceInit(sources) {
    return function(subscriber) {
      var subscriptions = [];
      var _loop_1 = function(i2) {
        subscriptions.push(innerFrom_1.innerFrom(sources[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (subscriptions) {
            for (var s = 0;s < subscriptions.length; s++) {
              s !== i2 && subscriptions[s].unsubscribe();
            }
            subscriptions = null;
          }
          subscriber.next(value);
        })));
      };
      for (var i = 0;subscriptions && !subscriber.closed && i < sources.length; i++) {
        _loop_1(i);
      }
    };
  }
  exports.raceInit = raceInit;
});

// node_modules/rxjs/dist/cjs/internal/observable/range.js
var require_range = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.range = undefined;
  var Observable_1 = require_Observable();
  var empty_1 = require_empty();
  function range(start, count, scheduler) {
    if (count == null) {
      count = start;
      start = 0;
    }
    if (count <= 0) {
      return empty_1.EMPTY;
    }
    var end = count + start;
    return new Observable_1.Observable(scheduler ? function(subscriber) {
      var n = start;
      return scheduler.schedule(function() {
        if (n < end) {
          subscriber.next(n++);
          this.schedule();
        } else {
          subscriber.complete();
        }
      });
    } : function(subscriber) {
      var n = start;
      while (n < end && !subscriber.closed) {
        subscriber.next(n++);
      }
      subscriber.complete();
    });
  }
  exports.range = range;
});

// node_modules/rxjs/dist/cjs/internal/observable/using.js
var require_using = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.using = undefined;
  var Observable_1 = require_Observable();
  var innerFrom_1 = require_innerFrom();
  var empty_1 = require_empty();
  function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
      var resource = resourceFactory();
      var result = observableFactory(resource);
      var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
      source.subscribe(subscriber);
      return function() {
        if (resource) {
          resource.unsubscribe();
        }
      };
    });
  }
  exports.using = using;
});

// node_modules/rxjs/dist/cjs/internal/observable/zip.js
var require_zip = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.zip = undefined;
  var Observable_1 = require_Observable();
  var innerFrom_1 = require_innerFrom();
  var argsOrArgArray_1 = require_argsOrArgArray();
  var empty_1 = require_empty();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var args_1 = require_args();
  function zip() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var sources = argsOrArgArray_1.argsOrArgArray(args);
    return sources.length ? new Observable_1.Observable(function(subscriber) {
      var buffers = sources.map(function() {
        return [];
      });
      var completed = sources.map(function() {
        return false;
      });
      subscriber.add(function() {
        buffers = completed = null;
      });
      var _loop_1 = function(sourceIndex2) {
        innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          buffers[sourceIndex2].push(value);
          if (buffers.every(function(buffer) {
            return buffer.length;
          })) {
            var result = buffers.map(function(buffer) {
              return buffer.shift();
            });
            subscriber.next(resultSelector ? resultSelector.apply(undefined, __spreadArray([], __read(result))) : result);
            if (buffers.some(function(buffer, i) {
              return !buffer.length && completed[i];
            })) {
              subscriber.complete();
            }
          }
        }, function() {
          completed[sourceIndex2] = true;
          !buffers[sourceIndex2].length && subscriber.complete();
        }));
      };
      for (var sourceIndex = 0;!subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
        _loop_1(sourceIndex);
      }
      return function() {
        buffers = completed = null;
      };
    }) : empty_1.EMPTY;
  }
  exports.zip = zip;
});

// node_modules/rxjs/dist/cjs/internal/types.js
var require_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// node_modules/rxjs/dist/cjs/internal/operators/audit.js
var require_audit = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.audit = undefined;
  var lift_1 = require_lift();
  var innerFrom_1 = require_innerFrom();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function audit(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
      var hasValue = false;
      var lastValue = null;
      var durationSubscriber = null;
      var isComplete = false;
      var endDuration = function() {
        durationSubscriber === null || durationSubscriber === undefined || durationSubscriber.unsubscribe();
        durationSubscriber = null;
        if (hasValue) {
          hasValue = false;
          var value = lastValue;
          lastValue = null;
          subscriber.next(value);
        }
        isComplete && subscriber.complete();
      };
      var cleanupDuration = function() {
        durationSubscriber = null;
        isComplete && subscriber.complete();
      };
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        hasValue = true;
        lastValue = value;
        if (!durationSubscriber) {
          innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
        }
      }, function() {
        isComplete = true;
        (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
      }));
    });
  }
  exports.audit = audit;
});

// node_modules/rxjs/dist/cjs/internal/operators/auditTime.js
var require_auditTime = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.auditTime = undefined;
  var async_1 = require_async();
  var audit_1 = require_audit();
  var timer_1 = require_timer();
  function auditTime(duration, scheduler) {
    if (scheduler === undefined) {
      scheduler = async_1.asyncScheduler;
    }
    return audit_1.audit(function() {
      return timer_1.timer(duration, scheduler);
    });
  }
  exports.auditTime = auditTime;
});

// node_modules/rxjs/dist/cjs/internal/operators/buffer.js
var require_buffer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.buffer = undefined;
  var lift_1 = require_lift();
  var noop_1 = require_noop();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  function buffer(closingNotifier) {
    return lift_1.operate(function(source, subscriber) {
      var currentBuffer = [];
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        return currentBuffer.push(value);
      }, function() {
        subscriber.next(currentBuffer);
        subscriber.complete();
      }));
      innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
        var b = currentBuffer;
        currentBuffer = [];
        subscriber.next(b);
      }, noop_1.noop));
      return function() {
        currentBuffer = null;
      };
    });
  }
  exports.buffer = buffer;
});

// node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js
var require_bufferCount = __commonJS((exports) => {
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bufferCount = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var arrRemove_1 = require_arrRemove();
  function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === undefined) {
      startBufferEvery = null;
    }
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== undefined ? startBufferEvery : bufferSize;
    return lift_1.operate(function(source, subscriber) {
      var buffers = [];
      var count = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var e_1, _a, e_2, _b;
        var toEmit = null;
        if (count++ % startBufferEvery === 0) {
          buffers.push([]);
        }
        try {
          for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next();!buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
            var buffer = buffers_1_1.value;
            buffer.push(value);
            if (bufferSize <= buffer.length) {
              toEmit = toEmit !== null && toEmit !== undefined ? toEmit : [];
              toEmit.push(buffer);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return))
              _a.call(buffers_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        if (toEmit) {
          try {
            for (var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next();!toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
              var buffer = toEmit_1_1.value;
              arrRemove_1.arrRemove(buffers, buffer);
              subscriber.next(buffer);
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return))
                _b.call(toEmit_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
      }, function() {
        var e_3, _a;
        try {
          for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next();!buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
            var buffer = buffers_2_1.value;
            subscriber.next(buffer);
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return))
              _a.call(buffers_2);
          } finally {
            if (e_3)
              throw e_3.error;
          }
        }
        subscriber.complete();
      }, undefined, function() {
        buffers = null;
      }));
    });
  }
  exports.bufferCount = bufferCount;
});

// node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js
var require_bufferTime = __commonJS((exports) => {
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bufferTime = undefined;
  var Subscription_1 = require_Subscription();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var arrRemove_1 = require_arrRemove();
  var async_1 = require_async();
  var args_1 = require_args();
  var executeSchedule_1 = require_executeSchedule();
  function bufferTime(bufferTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for (var _i = 1;_i < arguments.length; _i++) {
      otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== undefined ? _a : async_1.asyncScheduler;
    var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== undefined ? _b : null;
    var maxBufferSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
      var bufferRecords = [];
      var restartOnEmit = false;
      var emit = function(record) {
        var { buffer, subs } = record;
        subs.unsubscribe();
        arrRemove_1.arrRemove(bufferRecords, record);
        subscriber.next(buffer);
        restartOnEmit && startBuffer();
      };
      var startBuffer = function() {
        if (bufferRecords) {
          var subs = new Subscription_1.Subscription;
          subscriber.add(subs);
          var buffer = [];
          var record_1 = {
            buffer,
            subs
          };
          bufferRecords.push(record_1);
          executeSchedule_1.executeSchedule(subs, scheduler, function() {
            return emit(record_1);
          }, bufferTimeSpan);
        }
      };
      if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
      } else {
        restartOnEmit = true;
      }
      startBuffer();
      var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var e_1, _a2;
        var recordsCopy = bufferRecords.slice();
        try {
          for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next();!recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
            var record = recordsCopy_1_1.value;
            var buffer = record.buffer;
            buffer.push(value);
            maxBufferSize <= buffer.length && emit(record);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a2 = recordsCopy_1.return))
              _a2.call(recordsCopy_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }, function() {
        while (bufferRecords === null || bufferRecords === undefined ? undefined : bufferRecords.length) {
          subscriber.next(bufferRecords.shift().buffer);
        }
        bufferTimeSubscriber === null || bufferTimeSubscriber === undefined || bufferTimeSubscriber.unsubscribe();
        subscriber.complete();
        subscriber.unsubscribe();
      }, undefined, function() {
        return bufferRecords = null;
      });
      source.subscribe(bufferTimeSubscriber);
    });
  }
  exports.bufferTime = bufferTime;
});

// node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js
var require_bufferToggle = __commonJS((exports) => {
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bufferToggle = undefined;
  var Subscription_1 = require_Subscription();
  var lift_1 = require_lift();
  var innerFrom_1 = require_innerFrom();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var noop_1 = require_noop();
  var arrRemove_1 = require_arrRemove();
  function bufferToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
      var buffers = [];
      innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
        var buffer = [];
        buffers.push(buffer);
        var closingSubscription = new Subscription_1.Subscription;
        var emitBuffer = function() {
          arrRemove_1.arrRemove(buffers, buffer);
          subscriber.next(buffer);
          closingSubscription.unsubscribe();
        };
        closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
      }, noop_1.noop));
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var e_1, _a;
        try {
          for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next();!buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
            var buffer = buffers_1_1.value;
            buffer.push(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return))
              _a.call(buffers_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }, function() {
        while (buffers.length > 0) {
          subscriber.next(buffers.shift());
        }
        subscriber.complete();
      }));
    });
  }
  exports.bufferToggle = bufferToggle;
});

// node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js
var require_bufferWhen = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bufferWhen = undefined;
  var lift_1 = require_lift();
  var noop_1 = require_noop();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  function bufferWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
      var buffer = null;
      var closingSubscriber = null;
      var openBuffer = function() {
        closingSubscriber === null || closingSubscriber === undefined || closingSubscriber.unsubscribe();
        var b = buffer;
        buffer = [];
        b && subscriber.next(b);
        innerFrom_1.innerFrom(closingSelector()).subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop));
      };
      openBuffer();
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        return buffer === null || buffer === undefined ? undefined : buffer.push(value);
      }, function() {
        buffer && subscriber.next(buffer);
        subscriber.complete();
      }, undefined, function() {
        return buffer = closingSubscriber = null;
      }));
    });
  }
  exports.bufferWhen = bufferWhen;
});

// node_modules/rxjs/dist/cjs/internal/operators/catchError.js
var require_catchError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.catchError = undefined;
  var innerFrom_1 = require_innerFrom();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var lift_1 = require_lift();
  function catchError(selector) {
    return lift_1.operate(function(source, subscriber) {
      var innerSub = null;
      var syncUnsub = false;
      var handledResult;
      innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function(err) {
        handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));
        if (innerSub) {
          innerSub.unsubscribe();
          innerSub = null;
          handledResult.subscribe(subscriber);
        } else {
          syncUnsub = true;
        }
      }));
      if (syncUnsub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      }
    });
  }
  exports.catchError = catchError;
});

// node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js
var require_scanInternals = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.scanInternals = undefined;
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function(source, subscriber) {
      var hasState = hasSeed;
      var state = seed;
      var index = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var i = index++;
        state = hasState ? accumulator(state, value, i) : (hasState = true, value);
        emitOnNext && subscriber.next(state);
      }, emitBeforeComplete && function() {
        hasState && subscriber.next(state);
        subscriber.complete();
      }));
    };
  }
  exports.scanInternals = scanInternals;
});

// node_modules/rxjs/dist/cjs/internal/operators/reduce.js
var require_reduce = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.reduce = undefined;
  var scanInternals_1 = require_scanInternals();
  var lift_1 = require_lift();
  function reduce(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
  }
  exports.reduce = reduce;
});

// node_modules/rxjs/dist/cjs/internal/operators/toArray.js
var require_toArray = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toArray = undefined;
  var reduce_1 = require_reduce();
  var lift_1 = require_lift();
  var arrReducer = function(arr, value) {
    return arr.push(value), arr;
  };
  function toArray() {
    return lift_1.operate(function(source, subscriber) {
      reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
    });
  }
  exports.toArray = toArray;
});

// node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js
var require_joinAllInternals = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.joinAllInternals = undefined;
  var identity_1 = require_identity();
  var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
  var pipe_1 = require_pipe();
  var mergeMap_1 = require_mergeMap();
  var toArray_1 = require_toArray();
  function joinAllInternals(joinFn, project) {
    return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
      return joinFn(sources);
    }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
  }
  exports.joinAllInternals = joinAllInternals;
});

// node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js
var require_combineLatestAll = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.combineLatestAll = undefined;
  var combineLatest_1 = require_combineLatest();
  var joinAllInternals_1 = require_joinAllInternals();
  function combineLatestAll(project) {
    return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
  }
  exports.combineLatestAll = combineLatestAll;
});

// node_modules/rxjs/dist/cjs/internal/operators/combineAll.js
var require_combineAll = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.combineAll = undefined;
  var combineLatestAll_1 = require_combineLatestAll();
  exports.combineAll = combineLatestAll_1.combineLatestAll;
});

// node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js
var require_combineLatest2 = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.combineLatest = undefined;
  var combineLatest_1 = require_combineLatest();
  var lift_1 = require_lift();
  var argsOrArgArray_1 = require_argsOrArgArray();
  var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
  var pipe_1 = require_pipe();
  var args_1 = require_args();
  function combineLatest() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    return resultSelector ? pipe_1.pipe(combineLatest.apply(undefined, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
      combineLatest_1.combineLatestInit(__spreadArray([source], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
    });
  }
  exports.combineLatest = combineLatest;
});

// node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js
var require_combineLatestWith = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.combineLatestWith = undefined;
  var combineLatest_1 = require_combineLatest2();
  function combineLatestWith() {
    var otherSources = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      otherSources[_i] = arguments[_i];
    }
    return combineLatest_1.combineLatest.apply(undefined, __spreadArray([], __read(otherSources)));
  }
  exports.combineLatestWith = combineLatestWith;
});

// node_modules/rxjs/dist/cjs/internal/operators/concatMap.js
var require_concatMap = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.concatMap = undefined;
  var mergeMap_1 = require_mergeMap();
  var isFunction_1 = require_isFunction();
  function concatMap(project, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
  }
  exports.concatMap = concatMap;
});

// node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js
var require_concatMapTo = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.concatMapTo = undefined;
  var concatMap_1 = require_concatMap();
  var isFunction_1 = require_isFunction();
  function concatMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
      return innerObservable;
    }, resultSelector) : concatMap_1.concatMap(function() {
      return innerObservable;
    });
  }
  exports.concatMapTo = concatMapTo;
});

// node_modules/rxjs/dist/cjs/internal/operators/concat.js
var require_concat2 = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.concat = undefined;
  var lift_1 = require_lift();
  var concatAll_1 = require_concatAll();
  var args_1 = require_args();
  var from_1 = require_from();
  function concat() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return lift_1.operate(function(source, subscriber) {
      concatAll_1.concatAll()(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
    });
  }
  exports.concat = concat;
});

// node_modules/rxjs/dist/cjs/internal/operators/concatWith.js
var require_concatWith = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.concatWith = undefined;
  var concat_1 = require_concat2();
  function concatWith() {
    var otherSources = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      otherSources[_i] = arguments[_i];
    }
    return concat_1.concat.apply(undefined, __spreadArray([], __read(otherSources)));
  }
  exports.concatWith = concatWith;
});

// node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js
var require_fromSubscribable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fromSubscribable = undefined;
  var Observable_1 = require_Observable();
  function fromSubscribable(subscribable) {
    return new Observable_1.Observable(function(subscriber) {
      return subscribable.subscribe(subscriber);
    });
  }
  exports.fromSubscribable = fromSubscribable;
});

// node_modules/rxjs/dist/cjs/internal/operators/connect.js
var require_connect = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.connect = undefined;
  var Subject_1 = require_Subject();
  var innerFrom_1 = require_innerFrom();
  var lift_1 = require_lift();
  var fromSubscribable_1 = require_fromSubscribable();
  var DEFAULT_CONFIG = {
    connector: function() {
      return new Subject_1.Subject;
    }
  };
  function connect(selector, config) {
    if (config === undefined) {
      config = DEFAULT_CONFIG;
    }
    var connector = config.connector;
    return lift_1.operate(function(source, subscriber) {
      var subject = connector();
      innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
      subscriber.add(source.subscribe(subject));
    });
  }
  exports.connect = connect;
});

// node_modules/rxjs/dist/cjs/internal/operators/count.js
var require_count = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.count = undefined;
  var reduce_1 = require_reduce();
  function count(predicate) {
    return reduce_1.reduce(function(total, value, i) {
      return !predicate || predicate(value, i) ? total + 1 : total;
    }, 0);
  }
  exports.count = count;
});

// node_modules/rxjs/dist/cjs/internal/operators/debounce.js
var require_debounce = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.debounce = undefined;
  var lift_1 = require_lift();
  var noop_1 = require_noop();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  function debounce(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
      var hasValue = false;
      var lastValue = null;
      var durationSubscriber = null;
      var emit = function() {
        durationSubscriber === null || durationSubscriber === undefined || durationSubscriber.unsubscribe();
        durationSubscriber = null;
        if (hasValue) {
          hasValue = false;
          var value = lastValue;
          lastValue = null;
          subscriber.next(value);
        }
      };
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        durationSubscriber === null || durationSubscriber === undefined || durationSubscriber.unsubscribe();
        hasValue = true;
        lastValue = value;
        durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
        innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
      }, function() {
        emit();
        subscriber.complete();
      }, undefined, function() {
        lastValue = durationSubscriber = null;
      }));
    });
  }
  exports.debounce = debounce;
});

// node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js
var require_debounceTime = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.debounceTime = undefined;
  var async_1 = require_async();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function debounceTime(dueTime, scheduler) {
    if (scheduler === undefined) {
      scheduler = async_1.asyncScheduler;
    }
    return lift_1.operate(function(source, subscriber) {
      var activeTask = null;
      var lastValue = null;
      var lastTime = null;
      var emit = function() {
        if (activeTask) {
          activeTask.unsubscribe();
          activeTask = null;
          var value = lastValue;
          lastValue = null;
          subscriber.next(value);
        }
      };
      function emitWhenIdle() {
        var targetTime = lastTime + dueTime;
        var now = scheduler.now();
        if (now < targetTime) {
          activeTask = this.schedule(undefined, targetTime - now);
          subscriber.add(activeTask);
          return;
        }
        emit();
      }
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        lastValue = value;
        lastTime = scheduler.now();
        if (!activeTask) {
          activeTask = scheduler.schedule(emitWhenIdle, dueTime);
          subscriber.add(activeTask);
        }
      }, function() {
        emit();
        subscriber.complete();
      }, undefined, function() {
        lastValue = activeTask = null;
      }));
    });
  }
  exports.debounceTime = debounceTime;
});

// node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js
var require_defaultIfEmpty = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.defaultIfEmpty = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function defaultIfEmpty(defaultValue) {
    return lift_1.operate(function(source, subscriber) {
      var hasValue = false;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        hasValue = true;
        subscriber.next(value);
      }, function() {
        if (!hasValue) {
          subscriber.next(defaultValue);
        }
        subscriber.complete();
      }));
    });
  }
  exports.defaultIfEmpty = defaultIfEmpty;
});

// node_modules/rxjs/dist/cjs/internal/operators/take.js
var require_take = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.take = undefined;
  var empty_1 = require_empty();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function take(count) {
    return count <= 0 ? function() {
      return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
      var seen = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        if (++seen <= count) {
          subscriber.next(value);
          if (count <= seen) {
            subscriber.complete();
          }
        }
      }));
    });
  }
  exports.take = take;
});

// node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js
var require_ignoreElements = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ignoreElements = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var noop_1 = require_noop();
  function ignoreElements() {
    return lift_1.operate(function(source, subscriber) {
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
    });
  }
  exports.ignoreElements = ignoreElements;
});

// node_modules/rxjs/dist/cjs/internal/operators/mapTo.js
var require_mapTo = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mapTo = undefined;
  var map_1 = require_map();
  function mapTo(value) {
    return map_1.map(function() {
      return value;
    });
  }
  exports.mapTo = mapTo;
});

// node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js
var require_delayWhen = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.delayWhen = undefined;
  var concat_1 = require_concat();
  var take_1 = require_take();
  var ignoreElements_1 = require_ignoreElements();
  var mapTo_1 = require_mapTo();
  var mergeMap_1 = require_mergeMap();
  var innerFrom_1 = require_innerFrom();
  function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
      return function(source) {
        return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
      };
    }
    return mergeMap_1.mergeMap(function(value, index) {
      return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value));
    });
  }
  exports.delayWhen = delayWhen;
});

// node_modules/rxjs/dist/cjs/internal/operators/delay.js
var require_delay = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.delay = undefined;
  var async_1 = require_async();
  var delayWhen_1 = require_delayWhen();
  var timer_1 = require_timer();
  function delay(due, scheduler) {
    if (scheduler === undefined) {
      scheduler = async_1.asyncScheduler;
    }
    var duration = timer_1.timer(due, scheduler);
    return delayWhen_1.delayWhen(function() {
      return duration;
    });
  }
  exports.delay = delay;
});

// node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js
var require_dematerialize = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.dematerialize = undefined;
  var Notification_1 = require_Notification();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function dematerialize() {
    return lift_1.operate(function(source, subscriber) {
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(notification) {
        return Notification_1.observeNotification(notification, subscriber);
      }));
    });
  }
  exports.dematerialize = dematerialize;
});

// node_modules/rxjs/dist/cjs/internal/operators/distinct.js
var require_distinct = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.distinct = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var noop_1 = require_noop();
  var innerFrom_1 = require_innerFrom();
  function distinct(keySelector, flushes) {
    return lift_1.operate(function(source, subscriber) {
      var distinctKeys = new Set;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var key = keySelector ? keySelector(value) : value;
        if (!distinctKeys.has(key)) {
          distinctKeys.add(key);
          subscriber.next(value);
        }
      }));
      flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
        return distinctKeys.clear();
      }, noop_1.noop));
    });
  }
  exports.distinct = distinct;
});

// node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js
var require_distinctUntilChanged = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.distinctUntilChanged = undefined;
  var identity_1 = require_identity();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === undefined) {
      keySelector = identity_1.identity;
    }
    comparator = comparator !== null && comparator !== undefined ? comparator : defaultCompare;
    return lift_1.operate(function(source, subscriber) {
      var previousKey;
      var first = true;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var currentKey = keySelector(value);
        if (first || !comparator(previousKey, currentKey)) {
          first = false;
          previousKey = currentKey;
          subscriber.next(value);
        }
      }));
    });
  }
  exports.distinctUntilChanged = distinctUntilChanged;
  function defaultCompare(a, b) {
    return a === b;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js
var require_distinctUntilKeyChanged = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.distinctUntilKeyChanged = undefined;
  var distinctUntilChanged_1 = require_distinctUntilChanged();
  function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
      return compare ? compare(x[key], y[key]) : x[key] === y[key];
    });
  }
  exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
});

// node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js
var require_throwIfEmpty = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.throwIfEmpty = undefined;
  var EmptyError_1 = require_EmptyError();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function throwIfEmpty(errorFactory) {
    if (errorFactory === undefined) {
      errorFactory = defaultErrorFactory;
    }
    return lift_1.operate(function(source, subscriber) {
      var hasValue = false;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        hasValue = true;
        subscriber.next(value);
      }, function() {
        return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
      }));
    });
  }
  exports.throwIfEmpty = throwIfEmpty;
  function defaultErrorFactory() {
    return new EmptyError_1.EmptyError;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/elementAt.js
var require_elementAt = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.elementAt = undefined;
  var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
  var filter_1 = require_filter();
  var throwIfEmpty_1 = require_throwIfEmpty();
  var defaultIfEmpty_1 = require_defaultIfEmpty();
  var take_1 = require_take();
  function elementAt(index, defaultValue) {
    if (index < 0) {
      throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    }
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
      return source.pipe(filter_1.filter(function(v, i) {
        return i === index;
      }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
        return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
      }));
    };
  }
  exports.elementAt = elementAt;
});

// node_modules/rxjs/dist/cjs/internal/operators/endWith.js
var require_endWith = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.endWith = undefined;
  var concat_1 = require_concat();
  var of_1 = require_of();
  function endWith() {
    var values = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      values[_i] = arguments[_i];
    }
    return function(source) {
      return concat_1.concat(source, of_1.of.apply(undefined, __spreadArray([], __read(values))));
    };
  }
  exports.endWith = endWith;
});

// node_modules/rxjs/dist/cjs/internal/operators/every.js
var require_every = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.every = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function every(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        if (!predicate.call(thisArg, value, index++, source)) {
          subscriber.next(false);
          subscriber.complete();
        }
      }, function() {
        subscriber.next(true);
        subscriber.complete();
      }));
    });
  }
  exports.every = every;
});

// node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js
var require_exhaustMap = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.exhaustMap = undefined;
  var map_1 = require_map();
  var innerFrom_1 = require_innerFrom();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function exhaustMap(project, resultSelector) {
    if (resultSelector) {
      return function(source) {
        return source.pipe(exhaustMap(function(a, i) {
          return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
            return resultSelector(a, b, i, ii);
          }));
        }));
      };
    }
    return lift_1.operate(function(source, subscriber) {
      var index = 0;
      var innerSub = null;
      var isComplete = false;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(outerValue) {
        if (!innerSub) {
          innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function() {
            innerSub = null;
            isComplete && subscriber.complete();
          });
          innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
        }
      }, function() {
        isComplete = true;
        !innerSub && subscriber.complete();
      }));
    });
  }
  exports.exhaustMap = exhaustMap;
});

// node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js
var require_exhaustAll = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.exhaustAll = undefined;
  var exhaustMap_1 = require_exhaustMap();
  var identity_1 = require_identity();
  function exhaustAll() {
    return exhaustMap_1.exhaustMap(identity_1.identity);
  }
  exports.exhaustAll = exhaustAll;
});

// node_modules/rxjs/dist/cjs/internal/operators/exhaust.js
var require_exhaust = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.exhaust = undefined;
  var exhaustAll_1 = require_exhaustAll();
  exports.exhaust = exhaustAll_1.exhaustAll;
});

// node_modules/rxjs/dist/cjs/internal/operators/expand.js
var require_expand = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.expand = undefined;
  var lift_1 = require_lift();
  var mergeInternals_1 = require_mergeInternals();
  function expand(project, concurrent, scheduler) {
    if (concurrent === undefined) {
      concurrent = Infinity;
    }
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return lift_1.operate(function(source, subscriber) {
      return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, undefined, true, scheduler);
    });
  }
  exports.expand = expand;
});

// node_modules/rxjs/dist/cjs/internal/operators/finalize.js
var require_finalize = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.finalize = undefined;
  var lift_1 = require_lift();
  function finalize(callback) {
    return lift_1.operate(function(source, subscriber) {
      try {
        source.subscribe(subscriber);
      } finally {
        subscriber.add(callback);
      }
    });
  }
  exports.finalize = finalize;
});

// node_modules/rxjs/dist/cjs/internal/operators/find.js
var require_find = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createFind = exports.find = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function find(predicate, thisArg) {
    return lift_1.operate(createFind(predicate, thisArg, "value"));
  }
  exports.find = find;
  function createFind(predicate, thisArg, emit) {
    var findIndex = emit === "index";
    return function(source, subscriber) {
      var index = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var i = index++;
        if (predicate.call(thisArg, value, i, source)) {
          subscriber.next(findIndex ? i : value);
          subscriber.complete();
        }
      }, function() {
        subscriber.next(findIndex ? -1 : undefined);
        subscriber.complete();
      }));
    };
  }
  exports.createFind = createFind;
});

// node_modules/rxjs/dist/cjs/internal/operators/findIndex.js
var require_findIndex = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.findIndex = undefined;
  var lift_1 = require_lift();
  var find_1 = require_find();
  function findIndex(predicate, thisArg) {
    return lift_1.operate(find_1.createFind(predicate, thisArg, "index"));
  }
  exports.findIndex = findIndex;
});

// node_modules/rxjs/dist/cjs/internal/operators/first.js
var require_first = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.first = undefined;
  var EmptyError_1 = require_EmptyError();
  var filter_1 = require_filter();
  var take_1 = require_take();
  var defaultIfEmpty_1 = require_defaultIfEmpty();
  var throwIfEmpty_1 = require_throwIfEmpty();
  var identity_1 = require_identity();
  function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
      return source.pipe(predicate ? filter_1.filter(function(v, i) {
        return predicate(v, i, source);
      }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
        return new EmptyError_1.EmptyError;
      }));
    };
  }
  exports.first = first;
});

// node_modules/rxjs/dist/cjs/internal/operators/groupBy.js
var require_groupBy = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.groupBy = undefined;
  var Observable_1 = require_Observable();
  var innerFrom_1 = require_innerFrom();
  var Subject_1 = require_Subject();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function groupBy(keySelector, elementOrOptions, duration, connector) {
    return lift_1.operate(function(source, subscriber) {
      var element;
      if (!elementOrOptions || typeof elementOrOptions === "function") {
        element = elementOrOptions;
      } else {
        duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
      }
      var groups = new Map;
      var notify = function(cb) {
        groups.forEach(cb);
        cb(subscriber);
      };
      var handleError = function(err) {
        return notify(function(consumer) {
          return consumer.error(err);
        });
      };
      var activeGroups = 0;
      var teardownAttempted = false;
      var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
        try {
          var key_1 = keySelector(value);
          var group_1 = groups.get(key_1);
          if (!group_1) {
            groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject);
            var grouped = createGroupedObservable(key_1, group_1);
            subscriber.next(grouped);
            if (duration) {
              var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function() {
                group_1.complete();
                durationSubscriber_1 === null || durationSubscriber_1 === undefined || durationSubscriber_1.unsubscribe();
              }, undefined, undefined, function() {
                return groups.delete(key_1);
              });
              groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
            }
          }
          group_1.next(element ? element(value) : value);
        } catch (err) {
          handleError(err);
        }
      }, function() {
        return notify(function(consumer) {
          return consumer.complete();
        });
      }, handleError, function() {
        return groups.clear();
      }, function() {
        teardownAttempted = true;
        return activeGroups === 0;
      });
      source.subscribe(groupBySourceSubscriber);
      function createGroupedObservable(key, groupSubject) {
        var result = new Observable_1.Observable(function(groupSubscriber) {
          activeGroups++;
          var innerSub = groupSubject.subscribe(groupSubscriber);
          return function() {
            innerSub.unsubscribe();
            --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
          };
        });
        result.key = key;
        return result;
      }
    });
  }
  exports.groupBy = groupBy;
});

// node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js
var require_isEmpty = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isEmpty = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function isEmpty() {
    return lift_1.operate(function(source, subscriber) {
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
        subscriber.next(false);
        subscriber.complete();
      }, function() {
        subscriber.next(true);
        subscriber.complete();
      }));
    });
  }
  exports.isEmpty = isEmpty;
});

// node_modules/rxjs/dist/cjs/internal/operators/takeLast.js
var require_takeLast = __commonJS((exports) => {
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.takeLast = undefined;
  var empty_1 = require_empty();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function takeLast(count) {
    return count <= 0 ? function() {
      return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
      var buffer = [];
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        buffer.push(value);
        count < buffer.length && buffer.shift();
      }, function() {
        var e_1, _a;
        try {
          for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next();!buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
            var value = buffer_1_1.value;
            subscriber.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return))
              _a.call(buffer_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        subscriber.complete();
      }, undefined, function() {
        buffer = null;
      }));
    });
  }
  exports.takeLast = takeLast;
});

// node_modules/rxjs/dist/cjs/internal/operators/last.js
var require_last = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.last = undefined;
  var EmptyError_1 = require_EmptyError();
  var filter_1 = require_filter();
  var takeLast_1 = require_takeLast();
  var throwIfEmpty_1 = require_throwIfEmpty();
  var defaultIfEmpty_1 = require_defaultIfEmpty();
  var identity_1 = require_identity();
  function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
      return source.pipe(predicate ? filter_1.filter(function(v, i) {
        return predicate(v, i, source);
      }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
        return new EmptyError_1.EmptyError;
      }));
    };
  }
  exports.last = last;
});

// node_modules/rxjs/dist/cjs/internal/operators/materialize.js
var require_materialize = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.materialize = undefined;
  var Notification_1 = require_Notification();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function materialize() {
    return lift_1.operate(function(source, subscriber) {
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        subscriber.next(Notification_1.Notification.createNext(value));
      }, function() {
        subscriber.next(Notification_1.Notification.createComplete());
        subscriber.complete();
      }, function(err) {
        subscriber.next(Notification_1.Notification.createError(err));
        subscriber.complete();
      }));
    });
  }
  exports.materialize = materialize;
});

// node_modules/rxjs/dist/cjs/internal/operators/max.js
var require_max = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.max = undefined;
  var reduce_1 = require_reduce();
  var isFunction_1 = require_isFunction();
  function max(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
      return comparer(x, y) > 0 ? x : y;
    } : function(x, y) {
      return x > y ? x : y;
    });
  }
  exports.max = max;
});

// node_modules/rxjs/dist/cjs/internal/operators/flatMap.js
var require_flatMap = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.flatMap = undefined;
  var mergeMap_1 = require_mergeMap();
  exports.flatMap = mergeMap_1.mergeMap;
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js
var require_mergeMapTo = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mergeMapTo = undefined;
  var mergeMap_1 = require_mergeMap();
  var isFunction_1 = require_isFunction();
  function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === undefined) {
      concurrent = Infinity;
    }
    if (isFunction_1.isFunction(resultSelector)) {
      return mergeMap_1.mergeMap(function() {
        return innerObservable;
      }, resultSelector, concurrent);
    }
    if (typeof resultSelector === "number") {
      concurrent = resultSelector;
    }
    return mergeMap_1.mergeMap(function() {
      return innerObservable;
    }, concurrent);
  }
  exports.mergeMapTo = mergeMapTo;
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js
var require_mergeScan = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mergeScan = undefined;
  var lift_1 = require_lift();
  var mergeInternals_1 = require_mergeInternals();
  function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === undefined) {
      concurrent = Infinity;
    }
    return lift_1.operate(function(source, subscriber) {
      var state = seed;
      return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
        return accumulator(state, value, index);
      }, concurrent, function(value) {
        state = value;
      }, false, undefined, function() {
        return state = null;
      });
    });
  }
  exports.mergeScan = mergeScan;
});

// node_modules/rxjs/dist/cjs/internal/operators/merge.js
var require_merge2 = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.merge = undefined;
  var lift_1 = require_lift();
  var mergeAll_1 = require_mergeAll();
  var args_1 = require_args();
  var from_1 = require_from();
  function merge() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    return lift_1.operate(function(source, subscriber) {
      mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
    });
  }
  exports.merge = merge;
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js
var require_mergeWith = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mergeWith = undefined;
  var merge_1 = require_merge2();
  function mergeWith() {
    var otherSources = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      otherSources[_i] = arguments[_i];
    }
    return merge_1.merge.apply(undefined, __spreadArray([], __read(otherSources)));
  }
  exports.mergeWith = mergeWith;
});

// node_modules/rxjs/dist/cjs/internal/operators/min.js
var require_min = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.min = undefined;
  var reduce_1 = require_reduce();
  var isFunction_1 = require_isFunction();
  function min(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
      return comparer(x, y) < 0 ? x : y;
    } : function(x, y) {
      return x < y ? x : y;
    });
  }
  exports.min = min;
});

// node_modules/rxjs/dist/cjs/internal/operators/multicast.js
var require_multicast = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.multicast = undefined;
  var ConnectableObservable_1 = require_ConnectableObservable();
  var isFunction_1 = require_isFunction();
  var connect_1 = require_connect();
  function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
      return subjectOrSubjectFactory;
    };
    if (isFunction_1.isFunction(selector)) {
      return connect_1.connect(selector, {
        connector: subjectFactory
      });
    }
    return function(source) {
      return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
    };
  }
  exports.multicast = multicast;
});

// node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js
var require_onErrorResumeNextWith = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.onErrorResumeNext = exports.onErrorResumeNextWith = undefined;
  var argsOrArgArray_1 = require_argsOrArgArray();
  var onErrorResumeNext_1 = require_onErrorResumeNext();
  function onErrorResumeNextWith() {
    var sources = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return function(source) {
      return onErrorResumeNext_1.onErrorResumeNext.apply(undefined, __spreadArray([source], __read(nextSources)));
    };
  }
  exports.onErrorResumeNextWith = onErrorResumeNextWith;
  exports.onErrorResumeNext = onErrorResumeNextWith;
});

// node_modules/rxjs/dist/cjs/internal/operators/pairwise.js
var require_pairwise = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.pairwise = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function pairwise() {
    return lift_1.operate(function(source, subscriber) {
      var prev;
      var hasPrev = false;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var p = prev;
        prev = value;
        hasPrev && subscriber.next([p, value]);
        hasPrev = true;
      }));
    });
  }
  exports.pairwise = pairwise;
});

// node_modules/rxjs/dist/cjs/internal/operators/pluck.js
var require_pluck = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.pluck = undefined;
  var map_1 = require_map();
  function pluck() {
    var properties = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
      throw new Error("list of properties cannot be empty.");
    }
    return map_1.map(function(x) {
      var currentProp = x;
      for (var i = 0;i < length; i++) {
        var p = currentProp === null || currentProp === undefined ? undefined : currentProp[properties[i]];
        if (typeof p !== "undefined") {
          currentProp = p;
        } else {
          return;
        }
      }
      return currentProp;
    });
  }
  exports.pluck = pluck;
});

// node_modules/rxjs/dist/cjs/internal/operators/publish.js
var require_publish = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.publish = undefined;
  var Subject_1 = require_Subject();
  var multicast_1 = require_multicast();
  var connect_1 = require_connect();
  function publish(selector) {
    return selector ? function(source) {
      return connect_1.connect(selector)(source);
    } : function(source) {
      return multicast_1.multicast(new Subject_1.Subject)(source);
    };
  }
  exports.publish = publish;
});

// node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js
var require_publishBehavior = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.publishBehavior = undefined;
  var BehaviorSubject_1 = require_BehaviorSubject();
  var ConnectableObservable_1 = require_ConnectableObservable();
  function publishBehavior(initialValue) {
    return function(source) {
      var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
      return new ConnectableObservable_1.ConnectableObservable(source, function() {
        return subject;
      });
    };
  }
  exports.publishBehavior = publishBehavior;
});

// node_modules/rxjs/dist/cjs/internal/operators/publishLast.js
var require_publishLast = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.publishLast = undefined;
  var AsyncSubject_1 = require_AsyncSubject();
  var ConnectableObservable_1 = require_ConnectableObservable();
  function publishLast() {
    return function(source) {
      var subject = new AsyncSubject_1.AsyncSubject;
      return new ConnectableObservable_1.ConnectableObservable(source, function() {
        return subject;
      });
    };
  }
  exports.publishLast = publishLast;
});

// node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js
var require_publishReplay = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.publishReplay = undefined;
  var ReplaySubject_1 = require_ReplaySubject();
  var multicast_1 = require_multicast();
  var isFunction_1 = require_isFunction();
  function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
      timestampProvider = selectorOrScheduler;
    }
    var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : undefined;
    return function(source) {
      return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
    };
  }
  exports.publishReplay = publishReplay;
});

// node_modules/rxjs/dist/cjs/internal/operators/raceWith.js
var require_raceWith = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.raceWith = undefined;
  var race_1 = require_race();
  var lift_1 = require_lift();
  var identity_1 = require_identity();
  function raceWith() {
    var otherSources = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      otherSources[_i] = arguments[_i];
    }
    return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
      race_1.raceInit(__spreadArray([source], __read(otherSources)))(subscriber);
    });
  }
  exports.raceWith = raceWith;
});

// node_modules/rxjs/dist/cjs/internal/operators/repeat.js
var require_repeat = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.repeat = undefined;
  var empty_1 = require_empty();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  var timer_1 = require_timer();
  function repeat(countOrConfig) {
    var _a;
    var count = Infinity;
    var delay;
    if (countOrConfig != null) {
      if (typeof countOrConfig === "object") {
        _a = countOrConfig.count, count = _a === undefined ? Infinity : _a, delay = countOrConfig.delay;
      } else {
        count = countOrConfig;
      }
    }
    return count <= 0 ? function() {
      return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
      var soFar = 0;
      var sourceSub;
      var resubscribe = function() {
        sourceSub === null || sourceSub === undefined || sourceSub.unsubscribe();
        sourceSub = null;
        if (delay != null) {
          var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
          var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            notifierSubscriber_1.unsubscribe();
            subscribeToSource();
          });
          notifier.subscribe(notifierSubscriber_1);
        } else {
          subscribeToSource();
        }
      };
      var subscribeToSource = function() {
        var syncUnsub = false;
        sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function() {
          if (++soFar < count) {
            if (sourceSub) {
              resubscribe();
            } else {
              syncUnsub = true;
            }
          } else {
            subscriber.complete();
          }
        }));
        if (syncUnsub) {
          resubscribe();
        }
      };
      subscribeToSource();
    });
  }
  exports.repeat = repeat;
});

// node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js
var require_repeatWhen = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.repeatWhen = undefined;
  var innerFrom_1 = require_innerFrom();
  var Subject_1 = require_Subject();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function repeatWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
      var innerSub;
      var syncResub = false;
      var completions$;
      var isNotifierComplete = false;
      var isMainComplete = false;
      var checkComplete = function() {
        return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
      };
      var getCompletionSubject = function() {
        if (!completions$) {
          completions$ = new Subject_1.Subject;
          innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            if (innerSub) {
              subscribeForRepeatWhen();
            } else {
              syncResub = true;
            }
          }, function() {
            isNotifierComplete = true;
            checkComplete();
          }));
        }
        return completions$;
      };
      var subscribeForRepeatWhen = function() {
        isMainComplete = false;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function() {
          isMainComplete = true;
          !checkComplete() && getCompletionSubject().next();
        }));
        if (syncResub) {
          innerSub.unsubscribe();
          innerSub = null;
          syncResub = false;
          subscribeForRepeatWhen();
        }
      };
      subscribeForRepeatWhen();
    });
  }
  exports.repeatWhen = repeatWhen;
});

// node_modules/rxjs/dist/cjs/internal/operators/retry.js
var require_retry = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.retry = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var identity_1 = require_identity();
  var timer_1 = require_timer();
  var innerFrom_1 = require_innerFrom();
  function retry(configOrCount) {
    if (configOrCount === undefined) {
      configOrCount = Infinity;
    }
    var config;
    if (configOrCount && typeof configOrCount === "object") {
      config = configOrCount;
    } else {
      config = {
        count: configOrCount
      };
    }
    var _a = config.count, count = _a === undefined ? Infinity : _a, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === undefined ? false : _b;
    return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
      var soFar = 0;
      var innerSub;
      var subscribeForRetry = function() {
        var syncUnsub = false;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (resetOnSuccess) {
            soFar = 0;
          }
          subscriber.next(value);
        }, undefined, function(err) {
          if (soFar++ < count) {
            var resub_1 = function() {
              if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRetry();
              } else {
                syncUnsub = true;
              }
            };
            if (delay != null) {
              var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
              var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                notifierSubscriber_1.unsubscribe();
                resub_1();
              }, function() {
                subscriber.complete();
              });
              notifier.subscribe(notifierSubscriber_1);
            } else {
              resub_1();
            }
          } else {
            subscriber.error(err);
          }
        }));
        if (syncUnsub) {
          innerSub.unsubscribe();
          innerSub = null;
          subscribeForRetry();
        }
      };
      subscribeForRetry();
    });
  }
  exports.retry = retry;
});

// node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js
var require_retryWhen = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.retryWhen = undefined;
  var innerFrom_1 = require_innerFrom();
  var Subject_1 = require_Subject();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function retryWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
      var innerSub;
      var syncResub = false;
      var errors$;
      var subscribeForRetryWhen = function() {
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function(err) {
          if (!errors$) {
            errors$ = new Subject_1.Subject;
            innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
              return innerSub ? subscribeForRetryWhen() : syncResub = true;
            }));
          }
          if (errors$) {
            errors$.next(err);
          }
        }));
        if (syncResub) {
          innerSub.unsubscribe();
          innerSub = null;
          syncResub = false;
          subscribeForRetryWhen();
        }
      };
      subscribeForRetryWhen();
    });
  }
  exports.retryWhen = retryWhen;
});

// node_modules/rxjs/dist/cjs/internal/operators/sample.js
var require_sample = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sample = undefined;
  var innerFrom_1 = require_innerFrom();
  var lift_1 = require_lift();
  var noop_1 = require_noop();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function sample(notifier) {
    return lift_1.operate(function(source, subscriber) {
      var hasValue = false;
      var lastValue = null;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        hasValue = true;
        lastValue = value;
      }));
      innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
        if (hasValue) {
          hasValue = false;
          var value = lastValue;
          lastValue = null;
          subscriber.next(value);
        }
      }, noop_1.noop));
    });
  }
  exports.sample = sample;
});

// node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js
var require_sampleTime = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sampleTime = undefined;
  var async_1 = require_async();
  var sample_1 = require_sample();
  var interval_1 = require_interval();
  function sampleTime(period, scheduler) {
    if (scheduler === undefined) {
      scheduler = async_1.asyncScheduler;
    }
    return sample_1.sample(interval_1.interval(period, scheduler));
  }
  exports.sampleTime = sampleTime;
});

// node_modules/rxjs/dist/cjs/internal/operators/scan.js
var require_scan = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.scan = undefined;
  var lift_1 = require_lift();
  var scanInternals_1 = require_scanInternals();
  function scan(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
  }
  exports.scan = scan;
});

// node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js
var require_sequenceEqual = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sequenceEqual = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  function sequenceEqual(compareTo, comparator) {
    if (comparator === undefined) {
      comparator = function(a, b) {
        return a === b;
      };
    }
    return lift_1.operate(function(source, subscriber) {
      var aState = createState();
      var bState = createState();
      var emit = function(isEqual) {
        subscriber.next(isEqual);
        subscriber.complete();
      };
      var createSubscriber = function(selfState, otherState) {
        var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(a) {
          var { buffer, complete } = otherState;
          if (buffer.length === 0) {
            complete ? emit(false) : selfState.buffer.push(a);
          } else {
            !comparator(a, buffer.shift()) && emit(false);
          }
        }, function() {
          selfState.complete = true;
          var { complete, buffer } = otherState;
          complete && emit(buffer.length === 0);
          sequenceEqualSubscriber === null || sequenceEqualSubscriber === undefined || sequenceEqualSubscriber.unsubscribe();
        });
        return sequenceEqualSubscriber;
      };
      source.subscribe(createSubscriber(aState, bState));
      innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
    });
  }
  exports.sequenceEqual = sequenceEqual;
  function createState() {
    return {
      buffer: [],
      complete: false
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/share.js
var require_share = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.share = undefined;
  var innerFrom_1 = require_innerFrom();
  var Subject_1 = require_Subject();
  var Subscriber_1 = require_Subscriber();
  var lift_1 = require_lift();
  function share(options) {
    if (options === undefined) {
      options = {};
    }
    var _a = options.connector, connector = _a === undefined ? function() {
      return new Subject_1.Subject;
    } : _a, _b = options.resetOnError, resetOnError = _b === undefined ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === undefined ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === undefined ? true : _d;
    return function(wrapperSource) {
      var connection;
      var resetConnection;
      var subject;
      var refCount = 0;
      var hasCompleted = false;
      var hasErrored = false;
      var cancelReset = function() {
        resetConnection === null || resetConnection === undefined || resetConnection.unsubscribe();
        resetConnection = undefined;
      };
      var reset = function() {
        cancelReset();
        connection = subject = undefined;
        hasCompleted = hasErrored = false;
      };
      var resetAndUnsubscribe = function() {
        var conn = connection;
        reset();
        conn === null || conn === undefined || conn.unsubscribe();
      };
      return lift_1.operate(function(source, subscriber) {
        refCount++;
        if (!hasErrored && !hasCompleted) {
          cancelReset();
        }
        var dest = subject = subject !== null && subject !== undefined ? subject : connector();
        subscriber.add(function() {
          refCount--;
          if (refCount === 0 && !hasErrored && !hasCompleted) {
            resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
          }
        });
        dest.subscribe(subscriber);
        if (!connection && refCount > 0) {
          connection = new Subscriber_1.SafeSubscriber({
            next: function(value) {
              return dest.next(value);
            },
            error: function(err) {
              hasErrored = true;
              cancelReset();
              resetConnection = handleReset(reset, resetOnError, err);
              dest.error(err);
            },
            complete: function() {
              hasCompleted = true;
              cancelReset();
              resetConnection = handleReset(reset, resetOnComplete);
              dest.complete();
            }
          });
          innerFrom_1.innerFrom(source).subscribe(connection);
        }
      })(wrapperSource);
    };
  }
  exports.share = share;
  function handleReset(reset, on) {
    var args = [];
    for (var _i = 2;_i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    if (on === true) {
      reset();
      return;
    }
    if (on === false) {
      return;
    }
    var onSubscriber = new Subscriber_1.SafeSubscriber({
      next: function() {
        onSubscriber.unsubscribe();
        reset();
      }
    });
    return innerFrom_1.innerFrom(on.apply(undefined, __spreadArray([], __read(args)))).subscribe(onSubscriber);
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js
var require_shareReplay = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.shareReplay = undefined;
  var ReplaySubject_1 = require_ReplaySubject();
  var share_1 = require_share();
  function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b, _c;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === "object") {
      _a = configOrBufferSize.bufferSize, bufferSize = _a === undefined ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === undefined ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === undefined ? false : _c, scheduler = configOrBufferSize.scheduler;
    } else {
      bufferSize = configOrBufferSize !== null && configOrBufferSize !== undefined ? configOrBufferSize : Infinity;
    }
    return share_1.share({
      connector: function() {
        return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
      },
      resetOnError: true,
      resetOnComplete: false,
      resetOnRefCountZero: refCount
    });
  }
  exports.shareReplay = shareReplay;
});

// node_modules/rxjs/dist/cjs/internal/operators/single.js
var require_single = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.single = undefined;
  var EmptyError_1 = require_EmptyError();
  var SequenceError_1 = require_SequenceError();
  var NotFoundError_1 = require_NotFoundError();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function single(predicate) {
    return lift_1.operate(function(source, subscriber) {
      var hasValue = false;
      var singleValue;
      var seenValue = false;
      var index = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        seenValue = true;
        if (!predicate || predicate(value, index++, source)) {
          hasValue && subscriber.error(new SequenceError_1.SequenceError("Too many matching values"));
          hasValue = true;
          singleValue = value;
        }
      }, function() {
        if (hasValue) {
          subscriber.next(singleValue);
          subscriber.complete();
        } else {
          subscriber.error(seenValue ? new NotFoundError_1.NotFoundError("No matching values") : new EmptyError_1.EmptyError);
        }
      }));
    });
  }
  exports.single = single;
});

// node_modules/rxjs/dist/cjs/internal/operators/skip.js
var require_skip = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.skip = undefined;
  var filter_1 = require_filter();
  function skip(count) {
    return filter_1.filter(function(_, index) {
      return count <= index;
    });
  }
  exports.skip = skip;
});

// node_modules/rxjs/dist/cjs/internal/operators/skipLast.js
var require_skipLast = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.skipLast = undefined;
  var identity_1 = require_identity();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function skipLast(skipCount) {
    return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
      var ring = new Array(skipCount);
      var seen = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var valueIndex = seen++;
        if (valueIndex < skipCount) {
          ring[valueIndex] = value;
        } else {
          var index = valueIndex % skipCount;
          var oldValue = ring[index];
          ring[index] = value;
          subscriber.next(oldValue);
        }
      }));
      return function() {
        ring = null;
      };
    });
  }
  exports.skipLast = skipLast;
});

// node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js
var require_skipUntil = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.skipUntil = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  var noop_1 = require_noop();
  function skipUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
      var taking = false;
      var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
        skipSubscriber === null || skipSubscriber === undefined || skipSubscriber.unsubscribe();
        taking = true;
      }, noop_1.noop);
      innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        return taking && subscriber.next(value);
      }));
    });
  }
  exports.skipUntil = skipUntil;
});

// node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js
var require_skipWhile = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.skipWhile = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function skipWhile(predicate) {
    return lift_1.operate(function(source, subscriber) {
      var taking = false;
      var index = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
      }));
    });
  }
  exports.skipWhile = skipWhile;
});

// node_modules/rxjs/dist/cjs/internal/operators/startWith.js
var require_startWith = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.startWith = undefined;
  var concat_1 = require_concat();
  var args_1 = require_args();
  var lift_1 = require_lift();
  function startWith() {
    var values = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      values[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(values);
    return lift_1.operate(function(source, subscriber) {
      (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
    });
  }
  exports.startWith = startWith;
});

// node_modules/rxjs/dist/cjs/internal/operators/switchMap.js
var require_switchMap = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.switchMap = undefined;
  var innerFrom_1 = require_innerFrom();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function switchMap(project, resultSelector) {
    return lift_1.operate(function(source, subscriber) {
      var innerSubscriber = null;
      var index = 0;
      var isComplete = false;
      var checkComplete = function() {
        return isComplete && !innerSubscriber && subscriber.complete();
      };
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        innerSubscriber === null || innerSubscriber === undefined || innerSubscriber.unsubscribe();
        var innerIndex = 0;
        var outerIndex = index++;
        innerFrom_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
          return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
        }, function() {
          innerSubscriber = null;
          checkComplete();
        }));
      }, function() {
        isComplete = true;
        checkComplete();
      }));
    });
  }
  exports.switchMap = switchMap;
});

// node_modules/rxjs/dist/cjs/internal/operators/switchAll.js
var require_switchAll = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.switchAll = undefined;
  var switchMap_1 = require_switchMap();
  var identity_1 = require_identity();
  function switchAll() {
    return switchMap_1.switchMap(identity_1.identity);
  }
  exports.switchAll = switchAll;
});

// node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js
var require_switchMapTo = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.switchMapTo = undefined;
  var switchMap_1 = require_switchMap();
  var isFunction_1 = require_isFunction();
  function switchMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
      return innerObservable;
    }, resultSelector) : switchMap_1.switchMap(function() {
      return innerObservable;
    });
  }
  exports.switchMapTo = switchMapTo;
});

// node_modules/rxjs/dist/cjs/internal/operators/switchScan.js
var require_switchScan = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.switchScan = undefined;
  var switchMap_1 = require_switchMap();
  var lift_1 = require_lift();
  function switchScan(accumulator, seed) {
    return lift_1.operate(function(source, subscriber) {
      var state = seed;
      switchMap_1.switchMap(function(value, index) {
        return accumulator(state, value, index);
      }, function(_, innerValue) {
        return state = innerValue, innerValue;
      })(source).subscribe(subscriber);
      return function() {
        state = null;
      };
    });
  }
  exports.switchScan = switchScan;
});

// node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js
var require_takeUntil = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.takeUntil = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  var noop_1 = require_noop();
  function takeUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
      innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
        return subscriber.complete();
      }, noop_1.noop));
      !subscriber.closed && source.subscribe(subscriber);
    });
  }
  exports.takeUntil = takeUntil;
});

// node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js
var require_takeWhile = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.takeWhile = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function takeWhile(predicate, inclusive) {
    if (inclusive === undefined) {
      inclusive = false;
    }
    return lift_1.operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var result = predicate(value, index++);
        (result || inclusive) && subscriber.next(value);
        !result && subscriber.complete();
      }));
    });
  }
  exports.takeWhile = takeWhile;
});

// node_modules/rxjs/dist/cjs/internal/operators/tap.js
var require_tap = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.tap = undefined;
  var isFunction_1 = require_isFunction();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var identity_1 = require_identity();
  function tap(observerOrNext, error, complete) {
    var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
    return tapObserver ? lift_1.operate(function(source, subscriber) {
      var _a;
      (_a = tapObserver.subscribe) === null || _a === undefined || _a.call(tapObserver);
      var isUnsub = true;
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var _a2;
        (_a2 = tapObserver.next) === null || _a2 === undefined || _a2.call(tapObserver, value);
        subscriber.next(value);
      }, function() {
        var _a2;
        isUnsub = false;
        (_a2 = tapObserver.complete) === null || _a2 === undefined || _a2.call(tapObserver);
        subscriber.complete();
      }, function(err) {
        var _a2;
        isUnsub = false;
        (_a2 = tapObserver.error) === null || _a2 === undefined || _a2.call(tapObserver, err);
        subscriber.error(err);
      }, function() {
        var _a2, _b;
        if (isUnsub) {
          (_a2 = tapObserver.unsubscribe) === null || _a2 === undefined || _a2.call(tapObserver);
        }
        (_b = tapObserver.finalize) === null || _b === undefined || _b.call(tapObserver);
      }));
    }) : identity_1.identity;
  }
  exports.tap = tap;
});

// node_modules/rxjs/dist/cjs/internal/operators/throttle.js
var require_throttle = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.throttle = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  function throttle(durationSelector, config) {
    return lift_1.operate(function(source, subscriber) {
      var _a = config !== null && config !== undefined ? config : {}, _b = _a.leading, leading = _b === undefined ? true : _b, _c = _a.trailing, trailing = _c === undefined ? false : _c;
      var hasValue = false;
      var sendValue = null;
      var throttled = null;
      var isComplete = false;
      var endThrottling = function() {
        throttled === null || throttled === undefined || throttled.unsubscribe();
        throttled = null;
        if (trailing) {
          send();
          isComplete && subscriber.complete();
        }
      };
      var cleanupThrottling = function() {
        throttled = null;
        isComplete && subscriber.complete();
      };
      var startThrottle = function(value) {
        return throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
      };
      var send = function() {
        if (hasValue) {
          hasValue = false;
          var value = sendValue;
          sendValue = null;
          subscriber.next(value);
          !isComplete && startThrottle(value);
        }
      };
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        hasValue = true;
        sendValue = value;
        !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
      }, function() {
        isComplete = true;
        !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
      }));
    });
  }
  exports.throttle = throttle;
});

// node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js
var require_throttleTime = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.throttleTime = undefined;
  var async_1 = require_async();
  var throttle_1 = require_throttle();
  var timer_1 = require_timer();
  function throttleTime(duration, scheduler, config) {
    if (scheduler === undefined) {
      scheduler = async_1.asyncScheduler;
    }
    var duration$ = timer_1.timer(duration, scheduler);
    return throttle_1.throttle(function() {
      return duration$;
    }, config);
  }
  exports.throttleTime = throttleTime;
});

// node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js
var require_timeInterval = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TimeInterval = exports.timeInterval = undefined;
  var async_1 = require_async();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function timeInterval(scheduler) {
    if (scheduler === undefined) {
      scheduler = async_1.asyncScheduler;
    }
    return lift_1.operate(function(source, subscriber) {
      var last = scheduler.now();
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var now = scheduler.now();
        var interval = now - last;
        last = now;
        subscriber.next(new TimeInterval(value, interval));
      }));
    });
  }
  exports.timeInterval = timeInterval;
  var TimeInterval = function() {
    function TimeInterval2(value, interval) {
      this.value = value;
      this.interval = interval;
    }
    return TimeInterval2;
  }();
  exports.TimeInterval = TimeInterval;
});

// node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js
var require_timeoutWith = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.timeoutWith = undefined;
  var async_1 = require_async();
  var isDate_1 = require_isDate();
  var timeout_1 = require_timeout();
  function timeoutWith(due, withObservable, scheduler) {
    var first;
    var each;
    var _with;
    scheduler = scheduler !== null && scheduler !== undefined ? scheduler : async_1.async;
    if (isDate_1.isValidDate(due)) {
      first = due;
    } else if (typeof due === "number") {
      each = due;
    }
    if (withObservable) {
      _with = function() {
        return withObservable;
      };
    } else {
      throw new TypeError("No observable provided to switch to");
    }
    if (first == null && each == null) {
      throw new TypeError("No timeout provided.");
    }
    return timeout_1.timeout({
      first,
      each,
      scheduler,
      with: _with
    });
  }
  exports.timeoutWith = timeoutWith;
});

// node_modules/rxjs/dist/cjs/internal/operators/timestamp.js
var require_timestamp = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.timestamp = undefined;
  var dateTimestampProvider_1 = require_dateTimestampProvider();
  var map_1 = require_map();
  function timestamp(timestampProvider) {
    if (timestampProvider === undefined) {
      timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
    }
    return map_1.map(function(value) {
      return { value, timestamp: timestampProvider.now() };
    });
  }
  exports.timestamp = timestamp;
});

// node_modules/rxjs/dist/cjs/internal/operators/window.js
var require_window = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.window = undefined;
  var Subject_1 = require_Subject();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var noop_1 = require_noop();
  var innerFrom_1 = require_innerFrom();
  function window2(windowBoundaries) {
    return lift_1.operate(function(source, subscriber) {
      var windowSubject = new Subject_1.Subject;
      subscriber.next(windowSubject.asObservable());
      var errorHandler = function(err) {
        windowSubject.error(err);
        subscriber.error(err);
      };
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        return windowSubject === null || windowSubject === undefined ? undefined : windowSubject.next(value);
      }, function() {
        windowSubject.complete();
        subscriber.complete();
      }, errorHandler));
      innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
        windowSubject.complete();
        subscriber.next(windowSubject = new Subject_1.Subject);
      }, noop_1.noop, errorHandler));
      return function() {
        windowSubject === null || windowSubject === undefined || windowSubject.unsubscribe();
        windowSubject = null;
      };
    });
  }
  exports.window = window2;
});

// node_modules/rxjs/dist/cjs/internal/operators/windowCount.js
var require_windowCount = __commonJS((exports) => {
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.windowCount = undefined;
  var Subject_1 = require_Subject();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === undefined) {
      startWindowEvery = 0;
    }
    var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return lift_1.operate(function(source, subscriber) {
      var windows = [new Subject_1.Subject];
      var starts = [];
      var count = 0;
      subscriber.next(windows[0].asObservable());
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var e_1, _a;
        try {
          for (var windows_1 = __values(windows), windows_1_1 = windows_1.next();!windows_1_1.done; windows_1_1 = windows_1.next()) {
            var window_1 = windows_1_1.value;
            window_1.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return))
              _a.call(windows_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        var c = count - windowSize + 1;
        if (c >= 0 && c % startEvery === 0) {
          windows.shift().complete();
        }
        if (++count % startEvery === 0) {
          var window_2 = new Subject_1.Subject;
          windows.push(window_2);
          subscriber.next(window_2.asObservable());
        }
      }, function() {
        while (windows.length > 0) {
          windows.shift().complete();
        }
        subscriber.complete();
      }, function(err) {
        while (windows.length > 0) {
          windows.shift().error(err);
        }
        subscriber.error(err);
      }, function() {
        starts = null;
        windows = null;
      }));
    });
  }
  exports.windowCount = windowCount;
});

// node_modules/rxjs/dist/cjs/internal/operators/windowTime.js
var require_windowTime = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.windowTime = undefined;
  var Subject_1 = require_Subject();
  var async_1 = require_async();
  var Subscription_1 = require_Subscription();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var arrRemove_1 = require_arrRemove();
  var args_1 = require_args();
  var executeSchedule_1 = require_executeSchedule();
  function windowTime(windowTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for (var _i = 1;_i < arguments.length; _i++) {
      otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== undefined ? _a : async_1.asyncScheduler;
    var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== undefined ? _b : null;
    var maxWindowSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
      var windowRecords = [];
      var restartOnClose = false;
      var closeWindow = function(record) {
        var { window: window2, subs } = record;
        window2.complete();
        subs.unsubscribe();
        arrRemove_1.arrRemove(windowRecords, record);
        restartOnClose && startWindow();
      };
      var startWindow = function() {
        if (windowRecords) {
          var subs = new Subscription_1.Subscription;
          subscriber.add(subs);
          var window_1 = new Subject_1.Subject;
          var record_1 = {
            window: window_1,
            subs,
            seen: 0
          };
          windowRecords.push(record_1);
          subscriber.next(window_1.asObservable());
          executeSchedule_1.executeSchedule(subs, scheduler, function() {
            return closeWindow(record_1);
          }, windowTimeSpan);
        }
      };
      if (windowCreationInterval !== null && windowCreationInterval >= 0) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
      } else {
        restartOnClose = true;
      }
      startWindow();
      var loop = function(cb) {
        return windowRecords.slice().forEach(cb);
      };
      var terminate = function(cb) {
        loop(function(_a2) {
          var window2 = _a2.window;
          return cb(window2);
        });
        cb(subscriber);
        subscriber.unsubscribe();
      };
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        loop(function(record) {
          record.window.next(value);
          maxWindowSize <= ++record.seen && closeWindow(record);
        });
      }, function() {
        return terminate(function(consumer) {
          return consumer.complete();
        });
      }, function(err) {
        return terminate(function(consumer) {
          return consumer.error(err);
        });
      }));
      return function() {
        windowRecords = null;
      };
    });
  }
  exports.windowTime = windowTime;
});

// node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js
var require_windowToggle = __commonJS((exports) => {
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.windowToggle = undefined;
  var Subject_1 = require_Subject();
  var Subscription_1 = require_Subscription();
  var lift_1 = require_lift();
  var innerFrom_1 = require_innerFrom();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var noop_1 = require_noop();
  var arrRemove_1 = require_arrRemove();
  function windowToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
      var windows = [];
      var handleError = function(err) {
        while (0 < windows.length) {
          windows.shift().error(err);
        }
        subscriber.error(err);
      };
      innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
        var window2 = new Subject_1.Subject;
        windows.push(window2);
        var closingSubscription = new Subscription_1.Subscription;
        var closeWindow = function() {
          arrRemove_1.arrRemove(windows, window2);
          window2.complete();
          closingSubscription.unsubscribe();
        };
        var closingNotifier;
        try {
          closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
        } catch (err) {
          handleError(err);
          return;
        }
        subscriber.next(window2.asObservable());
        closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
      }, noop_1.noop));
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        var e_1, _a;
        var windowsCopy = windows.slice();
        try {
          for (var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next();!windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
            var window_1 = windowsCopy_1_1.value;
            window_1.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return))
              _a.call(windowsCopy_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }, function() {
        while (0 < windows.length) {
          windows.shift().complete();
        }
        subscriber.complete();
      }, handleError, function() {
        while (0 < windows.length) {
          windows.shift().unsubscribe();
        }
      }));
    });
  }
  exports.windowToggle = windowToggle;
});

// node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js
var require_windowWhen = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.windowWhen = undefined;
  var Subject_1 = require_Subject();
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  function windowWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
      var window2;
      var closingSubscriber;
      var handleError = function(err) {
        window2.error(err);
        subscriber.error(err);
      };
      var openWindow = function() {
        closingSubscriber === null || closingSubscriber === undefined || closingSubscriber.unsubscribe();
        window2 === null || window2 === undefined || window2.complete();
        window2 = new Subject_1.Subject;
        subscriber.next(window2.asObservable());
        var closingNotifier;
        try {
          closingNotifier = innerFrom_1.innerFrom(closingSelector());
        } catch (err) {
          handleError(err);
          return;
        }
        closingNotifier.subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError));
      };
      openWindow();
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        return window2.next(value);
      }, function() {
        window2.complete();
        subscriber.complete();
      }, handleError, function() {
        closingSubscriber === null || closingSubscriber === undefined || closingSubscriber.unsubscribe();
        window2 = null;
      }));
    });
  }
  exports.windowWhen = windowWhen;
});

// node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js
var require_withLatestFrom = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.withLatestFrom = undefined;
  var lift_1 = require_lift();
  var OperatorSubscriber_1 = require_OperatorSubscriber();
  var innerFrom_1 = require_innerFrom();
  var identity_1 = require_identity();
  var noop_1 = require_noop();
  var args_1 = require_args();
  function withLatestFrom() {
    var inputs = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      inputs[_i] = arguments[_i];
    }
    var project = args_1.popResultSelector(inputs);
    return lift_1.operate(function(source, subscriber) {
      var len = inputs.length;
      var otherValues = new Array(len);
      var hasValue = inputs.map(function() {
        return false;
      });
      var ready = false;
      var _loop_1 = function(i2) {
        innerFrom_1.innerFrom(inputs[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          otherValues[i2] = value;
          if (!ready && !hasValue[i2]) {
            hasValue[i2] = true;
            (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
          }
        }, noop_1.noop));
      };
      for (var i = 0;i < len; i++) {
        _loop_1(i);
      }
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
        if (ready) {
          var values = __spreadArray([value], __read(otherValues));
          subscriber.next(project ? project.apply(undefined, __spreadArray([], __read(values))) : values);
        }
      }));
    });
  }
  exports.withLatestFrom = withLatestFrom;
});

// node_modules/rxjs/dist/cjs/internal/operators/zipAll.js
var require_zipAll = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.zipAll = undefined;
  var zip_1 = require_zip();
  var joinAllInternals_1 = require_joinAllInternals();
  function zipAll(project) {
    return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
  }
  exports.zipAll = zipAll;
});

// node_modules/rxjs/dist/cjs/internal/operators/zip.js
var require_zip2 = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.zip = undefined;
  var zip_1 = require_zip();
  var lift_1 = require_lift();
  function zip() {
    var sources = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      sources[_i] = arguments[_i];
    }
    return lift_1.operate(function(source, subscriber) {
      zip_1.zip.apply(undefined, __spreadArray([source], __read(sources))).subscribe(subscriber);
    });
  }
  exports.zip = zip;
});

// node_modules/rxjs/dist/cjs/internal/operators/zipWith.js
var require_zipWith = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.zipWith = undefined;
  var zip_1 = require_zip2();
  function zipWith() {
    var otherInputs = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      otherInputs[_i] = arguments[_i];
    }
    return zip_1.zip.apply(undefined, __spreadArray([], __read(otherInputs)));
  }
  exports.zipWith = zipWith;
});

// node_modules/rxjs/dist/cjs/index.js
var require_cjs = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = undefined;
  exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = undefined;
  exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = undefined;
  exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = undefined;
  var Observable_1 = require_Observable();
  Object.defineProperty(exports, "Observable", { enumerable: true, get: function() {
    return Observable_1.Observable;
  } });
  var ConnectableObservable_1 = require_ConnectableObservable();
  Object.defineProperty(exports, "ConnectableObservable", { enumerable: true, get: function() {
    return ConnectableObservable_1.ConnectableObservable;
  } });
  var observable_1 = require_observable();
  Object.defineProperty(exports, "observable", { enumerable: true, get: function() {
    return observable_1.observable;
  } });
  var animationFrames_1 = require_animationFrames();
  Object.defineProperty(exports, "animationFrames", { enumerable: true, get: function() {
    return animationFrames_1.animationFrames;
  } });
  var Subject_1 = require_Subject();
  Object.defineProperty(exports, "Subject", { enumerable: true, get: function() {
    return Subject_1.Subject;
  } });
  var BehaviorSubject_1 = require_BehaviorSubject();
  Object.defineProperty(exports, "BehaviorSubject", { enumerable: true, get: function() {
    return BehaviorSubject_1.BehaviorSubject;
  } });
  var ReplaySubject_1 = require_ReplaySubject();
  Object.defineProperty(exports, "ReplaySubject", { enumerable: true, get: function() {
    return ReplaySubject_1.ReplaySubject;
  } });
  var AsyncSubject_1 = require_AsyncSubject();
  Object.defineProperty(exports, "AsyncSubject", { enumerable: true, get: function() {
    return AsyncSubject_1.AsyncSubject;
  } });
  var asap_1 = require_asap();
  Object.defineProperty(exports, "asap", { enumerable: true, get: function() {
    return asap_1.asap;
  } });
  Object.defineProperty(exports, "asapScheduler", { enumerable: true, get: function() {
    return asap_1.asapScheduler;
  } });
  var async_1 = require_async();
  Object.defineProperty(exports, "async", { enumerable: true, get: function() {
    return async_1.async;
  } });
  Object.defineProperty(exports, "asyncScheduler", { enumerable: true, get: function() {
    return async_1.asyncScheduler;
  } });
  var queue_1 = require_queue();
  Object.defineProperty(exports, "queue", { enumerable: true, get: function() {
    return queue_1.queue;
  } });
  Object.defineProperty(exports, "queueScheduler", { enumerable: true, get: function() {
    return queue_1.queueScheduler;
  } });
  var animationFrame_1 = require_animationFrame();
  Object.defineProperty(exports, "animationFrame", { enumerable: true, get: function() {
    return animationFrame_1.animationFrame;
  } });
  Object.defineProperty(exports, "animationFrameScheduler", { enumerable: true, get: function() {
    return animationFrame_1.animationFrameScheduler;
  } });
  var VirtualTimeScheduler_1 = require_VirtualTimeScheduler();
  Object.defineProperty(exports, "VirtualTimeScheduler", { enumerable: true, get: function() {
    return VirtualTimeScheduler_1.VirtualTimeScheduler;
  } });
  Object.defineProperty(exports, "VirtualAction", { enumerable: true, get: function() {
    return VirtualTimeScheduler_1.VirtualAction;
  } });
  var Scheduler_1 = require_Scheduler();
  Object.defineProperty(exports, "Scheduler", { enumerable: true, get: function() {
    return Scheduler_1.Scheduler;
  } });
  var Subscription_1 = require_Subscription();
  Object.defineProperty(exports, "Subscription", { enumerable: true, get: function() {
    return Subscription_1.Subscription;
  } });
  var Subscriber_1 = require_Subscriber();
  Object.defineProperty(exports, "Subscriber", { enumerable: true, get: function() {
    return Subscriber_1.Subscriber;
  } });
  var Notification_1 = require_Notification();
  Object.defineProperty(exports, "Notification", { enumerable: true, get: function() {
    return Notification_1.Notification;
  } });
  Object.defineProperty(exports, "NotificationKind", { enumerable: true, get: function() {
    return Notification_1.NotificationKind;
  } });
  var pipe_1 = require_pipe();
  Object.defineProperty(exports, "pipe", { enumerable: true, get: function() {
    return pipe_1.pipe;
  } });
  var noop_1 = require_noop();
  Object.defineProperty(exports, "noop", { enumerable: true, get: function() {
    return noop_1.noop;
  } });
  var identity_1 = require_identity();
  Object.defineProperty(exports, "identity", { enumerable: true, get: function() {
    return identity_1.identity;
  } });
  var isObservable_1 = require_isObservable();
  Object.defineProperty(exports, "isObservable", { enumerable: true, get: function() {
    return isObservable_1.isObservable;
  } });
  var lastValueFrom_1 = require_lastValueFrom();
  Object.defineProperty(exports, "lastValueFrom", { enumerable: true, get: function() {
    return lastValueFrom_1.lastValueFrom;
  } });
  var firstValueFrom_1 = require_firstValueFrom();
  Object.defineProperty(exports, "firstValueFrom", { enumerable: true, get: function() {
    return firstValueFrom_1.firstValueFrom;
  } });
  var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
  Object.defineProperty(exports, "ArgumentOutOfRangeError", { enumerable: true, get: function() {
    return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
  } });
  var EmptyError_1 = require_EmptyError();
  Object.defineProperty(exports, "EmptyError", { enumerable: true, get: function() {
    return EmptyError_1.EmptyError;
  } });
  var NotFoundError_1 = require_NotFoundError();
  Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
    return NotFoundError_1.NotFoundError;
  } });
  var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
  Object.defineProperty(exports, "ObjectUnsubscribedError", { enumerable: true, get: function() {
    return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
  } });
  var SequenceError_1 = require_SequenceError();
  Object.defineProperty(exports, "SequenceError", { enumerable: true, get: function() {
    return SequenceError_1.SequenceError;
  } });
  var timeout_1 = require_timeout();
  Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function() {
    return timeout_1.TimeoutError;
  } });
  var UnsubscriptionError_1 = require_UnsubscriptionError();
  Object.defineProperty(exports, "UnsubscriptionError", { enumerable: true, get: function() {
    return UnsubscriptionError_1.UnsubscriptionError;
  } });
  var bindCallback_1 = require_bindCallback();
  Object.defineProperty(exports, "bindCallback", { enumerable: true, get: function() {
    return bindCallback_1.bindCallback;
  } });
  var bindNodeCallback_1 = require_bindNodeCallback();
  Object.defineProperty(exports, "bindNodeCallback", { enumerable: true, get: function() {
    return bindNodeCallback_1.bindNodeCallback;
  } });
  var combineLatest_1 = require_combineLatest();
  Object.defineProperty(exports, "combineLatest", { enumerable: true, get: function() {
    return combineLatest_1.combineLatest;
  } });
  var concat_1 = require_concat();
  Object.defineProperty(exports, "concat", { enumerable: true, get: function() {
    return concat_1.concat;
  } });
  var connectable_1 = require_connectable();
  Object.defineProperty(exports, "connectable", { enumerable: true, get: function() {
    return connectable_1.connectable;
  } });
  var defer_1 = require_defer();
  Object.defineProperty(exports, "defer", { enumerable: true, get: function() {
    return defer_1.defer;
  } });
  var empty_1 = require_empty();
  Object.defineProperty(exports, "empty", { enumerable: true, get: function() {
    return empty_1.empty;
  } });
  var forkJoin_1 = require_forkJoin();
  Object.defineProperty(exports, "forkJoin", { enumerable: true, get: function() {
    return forkJoin_1.forkJoin;
  } });
  var from_1 = require_from();
  Object.defineProperty(exports, "from", { enumerable: true, get: function() {
    return from_1.from;
  } });
  var fromEvent_1 = require_fromEvent();
  Object.defineProperty(exports, "fromEvent", { enumerable: true, get: function() {
    return fromEvent_1.fromEvent;
  } });
  var fromEventPattern_1 = require_fromEventPattern();
  Object.defineProperty(exports, "fromEventPattern", { enumerable: true, get: function() {
    return fromEventPattern_1.fromEventPattern;
  } });
  var generate_1 = require_generate();
  Object.defineProperty(exports, "generate", { enumerable: true, get: function() {
    return generate_1.generate;
  } });
  var iif_1 = require_iif();
  Object.defineProperty(exports, "iif", { enumerable: true, get: function() {
    return iif_1.iif;
  } });
  var interval_1 = require_interval();
  Object.defineProperty(exports, "interval", { enumerable: true, get: function() {
    return interval_1.interval;
  } });
  var merge_1 = require_merge();
  Object.defineProperty(exports, "merge", { enumerable: true, get: function() {
    return merge_1.merge;
  } });
  var never_1 = require_never();
  Object.defineProperty(exports, "never", { enumerable: true, get: function() {
    return never_1.never;
  } });
  var of_1 = require_of();
  Object.defineProperty(exports, "of", { enumerable: true, get: function() {
    return of_1.of;
  } });
  var onErrorResumeNext_1 = require_onErrorResumeNext();
  Object.defineProperty(exports, "onErrorResumeNext", { enumerable: true, get: function() {
    return onErrorResumeNext_1.onErrorResumeNext;
  } });
  var pairs_1 = require_pairs();
  Object.defineProperty(exports, "pairs", { enumerable: true, get: function() {
    return pairs_1.pairs;
  } });
  var partition_1 = require_partition();
  Object.defineProperty(exports, "partition", { enumerable: true, get: function() {
    return partition_1.partition;
  } });
  var race_1 = require_race();
  Object.defineProperty(exports, "race", { enumerable: true, get: function() {
    return race_1.race;
  } });
  var range_1 = require_range();
  Object.defineProperty(exports, "range", { enumerable: true, get: function() {
    return range_1.range;
  } });
  var throwError_1 = require_throwError();
  Object.defineProperty(exports, "throwError", { enumerable: true, get: function() {
    return throwError_1.throwError;
  } });
  var timer_1 = require_timer();
  Object.defineProperty(exports, "timer", { enumerable: true, get: function() {
    return timer_1.timer;
  } });
  var using_1 = require_using();
  Object.defineProperty(exports, "using", { enumerable: true, get: function() {
    return using_1.using;
  } });
  var zip_1 = require_zip();
  Object.defineProperty(exports, "zip", { enumerable: true, get: function() {
    return zip_1.zip;
  } });
  var scheduled_1 = require_scheduled();
  Object.defineProperty(exports, "scheduled", { enumerable: true, get: function() {
    return scheduled_1.scheduled;
  } });
  var empty_2 = require_empty();
  Object.defineProperty(exports, "EMPTY", { enumerable: true, get: function() {
    return empty_2.EMPTY;
  } });
  var never_2 = require_never();
  Object.defineProperty(exports, "NEVER", { enumerable: true, get: function() {
    return never_2.NEVER;
  } });
  __exportStar(require_types(), exports);
  var config_1 = require_config();
  Object.defineProperty(exports, "config", { enumerable: true, get: function() {
    return config_1.config;
  } });
  var audit_1 = require_audit();
  Object.defineProperty(exports, "audit", { enumerable: true, get: function() {
    return audit_1.audit;
  } });
  var auditTime_1 = require_auditTime();
  Object.defineProperty(exports, "auditTime", { enumerable: true, get: function() {
    return auditTime_1.auditTime;
  } });
  var buffer_1 = require_buffer();
  Object.defineProperty(exports, "buffer", { enumerable: true, get: function() {
    return buffer_1.buffer;
  } });
  var bufferCount_1 = require_bufferCount();
  Object.defineProperty(exports, "bufferCount", { enumerable: true, get: function() {
    return bufferCount_1.bufferCount;
  } });
  var bufferTime_1 = require_bufferTime();
  Object.defineProperty(exports, "bufferTime", { enumerable: true, get: function() {
    return bufferTime_1.bufferTime;
  } });
  var bufferToggle_1 = require_bufferToggle();
  Object.defineProperty(exports, "bufferToggle", { enumerable: true, get: function() {
    return bufferToggle_1.bufferToggle;
  } });
  var bufferWhen_1 = require_bufferWhen();
  Object.defineProperty(exports, "bufferWhen", { enumerable: true, get: function() {
    return bufferWhen_1.bufferWhen;
  } });
  var catchError_1 = require_catchError();
  Object.defineProperty(exports, "catchError", { enumerable: true, get: function() {
    return catchError_1.catchError;
  } });
  var combineAll_1 = require_combineAll();
  Object.defineProperty(exports, "combineAll", { enumerable: true, get: function() {
    return combineAll_1.combineAll;
  } });
  var combineLatestAll_1 = require_combineLatestAll();
  Object.defineProperty(exports, "combineLatestAll", { enumerable: true, get: function() {
    return combineLatestAll_1.combineLatestAll;
  } });
  var combineLatestWith_1 = require_combineLatestWith();
  Object.defineProperty(exports, "combineLatestWith", { enumerable: true, get: function() {
    return combineLatestWith_1.combineLatestWith;
  } });
  var concatAll_1 = require_concatAll();
  Object.defineProperty(exports, "concatAll", { enumerable: true, get: function() {
    return concatAll_1.concatAll;
  } });
  var concatMap_1 = require_concatMap();
  Object.defineProperty(exports, "concatMap", { enumerable: true, get: function() {
    return concatMap_1.concatMap;
  } });
  var concatMapTo_1 = require_concatMapTo();
  Object.defineProperty(exports, "concatMapTo", { enumerable: true, get: function() {
    return concatMapTo_1.concatMapTo;
  } });
  var concatWith_1 = require_concatWith();
  Object.defineProperty(exports, "concatWith", { enumerable: true, get: function() {
    return concatWith_1.concatWith;
  } });
  var connect_1 = require_connect();
  Object.defineProperty(exports, "connect", { enumerable: true, get: function() {
    return connect_1.connect;
  } });
  var count_1 = require_count();
  Object.defineProperty(exports, "count", { enumerable: true, get: function() {
    return count_1.count;
  } });
  var debounce_1 = require_debounce();
  Object.defineProperty(exports, "debounce", { enumerable: true, get: function() {
    return debounce_1.debounce;
  } });
  var debounceTime_1 = require_debounceTime();
  Object.defineProperty(exports, "debounceTime", { enumerable: true, get: function() {
    return debounceTime_1.debounceTime;
  } });
  var defaultIfEmpty_1 = require_defaultIfEmpty();
  Object.defineProperty(exports, "defaultIfEmpty", { enumerable: true, get: function() {
    return defaultIfEmpty_1.defaultIfEmpty;
  } });
  var delay_1 = require_delay();
  Object.defineProperty(exports, "delay", { enumerable: true, get: function() {
    return delay_1.delay;
  } });
  var delayWhen_1 = require_delayWhen();
  Object.defineProperty(exports, "delayWhen", { enumerable: true, get: function() {
    return delayWhen_1.delayWhen;
  } });
  var dematerialize_1 = require_dematerialize();
  Object.defineProperty(exports, "dematerialize", { enumerable: true, get: function() {
    return dematerialize_1.dematerialize;
  } });
  var distinct_1 = require_distinct();
  Object.defineProperty(exports, "distinct", { enumerable: true, get: function() {
    return distinct_1.distinct;
  } });
  var distinctUntilChanged_1 = require_distinctUntilChanged();
  Object.defineProperty(exports, "distinctUntilChanged", { enumerable: true, get: function() {
    return distinctUntilChanged_1.distinctUntilChanged;
  } });
  var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
  Object.defineProperty(exports, "distinctUntilKeyChanged", { enumerable: true, get: function() {
    return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
  } });
  var elementAt_1 = require_elementAt();
  Object.defineProperty(exports, "elementAt", { enumerable: true, get: function() {
    return elementAt_1.elementAt;
  } });
  var endWith_1 = require_endWith();
  Object.defineProperty(exports, "endWith", { enumerable: true, get: function() {
    return endWith_1.endWith;
  } });
  var every_1 = require_every();
  Object.defineProperty(exports, "every", { enumerable: true, get: function() {
    return every_1.every;
  } });
  var exhaust_1 = require_exhaust();
  Object.defineProperty(exports, "exhaust", { enumerable: true, get: function() {
    return exhaust_1.exhaust;
  } });
  var exhaustAll_1 = require_exhaustAll();
  Object.defineProperty(exports, "exhaustAll", { enumerable: true, get: function() {
    return exhaustAll_1.exhaustAll;
  } });
  var exhaustMap_1 = require_exhaustMap();
  Object.defineProperty(exports, "exhaustMap", { enumerable: true, get: function() {
    return exhaustMap_1.exhaustMap;
  } });
  var expand_1 = require_expand();
  Object.defineProperty(exports, "expand", { enumerable: true, get: function() {
    return expand_1.expand;
  } });
  var filter_1 = require_filter();
  Object.defineProperty(exports, "filter", { enumerable: true, get: function() {
    return filter_1.filter;
  } });
  var finalize_1 = require_finalize();
  Object.defineProperty(exports, "finalize", { enumerable: true, get: function() {
    return finalize_1.finalize;
  } });
  var find_1 = require_find();
  Object.defineProperty(exports, "find", { enumerable: true, get: function() {
    return find_1.find;
  } });
  var findIndex_1 = require_findIndex();
  Object.defineProperty(exports, "findIndex", { enumerable: true, get: function() {
    return findIndex_1.findIndex;
  } });
  var first_1 = require_first();
  Object.defineProperty(exports, "first", { enumerable: true, get: function() {
    return first_1.first;
  } });
  var groupBy_1 = require_groupBy();
  Object.defineProperty(exports, "groupBy", { enumerable: true, get: function() {
    return groupBy_1.groupBy;
  } });
  var ignoreElements_1 = require_ignoreElements();
  Object.defineProperty(exports, "ignoreElements", { enumerable: true, get: function() {
    return ignoreElements_1.ignoreElements;
  } });
  var isEmpty_1 = require_isEmpty();
  Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function() {
    return isEmpty_1.isEmpty;
  } });
  var last_1 = require_last();
  Object.defineProperty(exports, "last", { enumerable: true, get: function() {
    return last_1.last;
  } });
  var map_1 = require_map();
  Object.defineProperty(exports, "map", { enumerable: true, get: function() {
    return map_1.map;
  } });
  var mapTo_1 = require_mapTo();
  Object.defineProperty(exports, "mapTo", { enumerable: true, get: function() {
    return mapTo_1.mapTo;
  } });
  var materialize_1 = require_materialize();
  Object.defineProperty(exports, "materialize", { enumerable: true, get: function() {
    return materialize_1.materialize;
  } });
  var max_1 = require_max();
  Object.defineProperty(exports, "max", { enumerable: true, get: function() {
    return max_1.max;
  } });
  var mergeAll_1 = require_mergeAll();
  Object.defineProperty(exports, "mergeAll", { enumerable: true, get: function() {
    return mergeAll_1.mergeAll;
  } });
  var flatMap_1 = require_flatMap();
  Object.defineProperty(exports, "flatMap", { enumerable: true, get: function() {
    return flatMap_1.flatMap;
  } });
  var mergeMap_1 = require_mergeMap();
  Object.defineProperty(exports, "mergeMap", { enumerable: true, get: function() {
    return mergeMap_1.mergeMap;
  } });
  var mergeMapTo_1 = require_mergeMapTo();
  Object.defineProperty(exports, "mergeMapTo", { enumerable: true, get: function() {
    return mergeMapTo_1.mergeMapTo;
  } });
  var mergeScan_1 = require_mergeScan();
  Object.defineProperty(exports, "mergeScan", { enumerable: true, get: function() {
    return mergeScan_1.mergeScan;
  } });
  var mergeWith_1 = require_mergeWith();
  Object.defineProperty(exports, "mergeWith", { enumerable: true, get: function() {
    return mergeWith_1.mergeWith;
  } });
  var min_1 = require_min();
  Object.defineProperty(exports, "min", { enumerable: true, get: function() {
    return min_1.min;
  } });
  var multicast_1 = require_multicast();
  Object.defineProperty(exports, "multicast", { enumerable: true, get: function() {
    return multicast_1.multicast;
  } });
  var observeOn_1 = require_observeOn();
  Object.defineProperty(exports, "observeOn", { enumerable: true, get: function() {
    return observeOn_1.observeOn;
  } });
  var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
  Object.defineProperty(exports, "onErrorResumeNextWith", { enumerable: true, get: function() {
    return onErrorResumeNextWith_1.onErrorResumeNextWith;
  } });
  var pairwise_1 = require_pairwise();
  Object.defineProperty(exports, "pairwise", { enumerable: true, get: function() {
    return pairwise_1.pairwise;
  } });
  var pluck_1 = require_pluck();
  Object.defineProperty(exports, "pluck", { enumerable: true, get: function() {
    return pluck_1.pluck;
  } });
  var publish_1 = require_publish();
  Object.defineProperty(exports, "publish", { enumerable: true, get: function() {
    return publish_1.publish;
  } });
  var publishBehavior_1 = require_publishBehavior();
  Object.defineProperty(exports, "publishBehavior", { enumerable: true, get: function() {
    return publishBehavior_1.publishBehavior;
  } });
  var publishLast_1 = require_publishLast();
  Object.defineProperty(exports, "publishLast", { enumerable: true, get: function() {
    return publishLast_1.publishLast;
  } });
  var publishReplay_1 = require_publishReplay();
  Object.defineProperty(exports, "publishReplay", { enumerable: true, get: function() {
    return publishReplay_1.publishReplay;
  } });
  var raceWith_1 = require_raceWith();
  Object.defineProperty(exports, "raceWith", { enumerable: true, get: function() {
    return raceWith_1.raceWith;
  } });
  var reduce_1 = require_reduce();
  Object.defineProperty(exports, "reduce", { enumerable: true, get: function() {
    return reduce_1.reduce;
  } });
  var repeat_1 = require_repeat();
  Object.defineProperty(exports, "repeat", { enumerable: true, get: function() {
    return repeat_1.repeat;
  } });
  var repeatWhen_1 = require_repeatWhen();
  Object.defineProperty(exports, "repeatWhen", { enumerable: true, get: function() {
    return repeatWhen_1.repeatWhen;
  } });
  var retry_1 = require_retry();
  Object.defineProperty(exports, "retry", { enumerable: true, get: function() {
    return retry_1.retry;
  } });
  var retryWhen_1 = require_retryWhen();
  Object.defineProperty(exports, "retryWhen", { enumerable: true, get: function() {
    return retryWhen_1.retryWhen;
  } });
  var refCount_1 = require_refCount();
  Object.defineProperty(exports, "refCount", { enumerable: true, get: function() {
    return refCount_1.refCount;
  } });
  var sample_1 = require_sample();
  Object.defineProperty(exports, "sample", { enumerable: true, get: function() {
    return sample_1.sample;
  } });
  var sampleTime_1 = require_sampleTime();
  Object.defineProperty(exports, "sampleTime", { enumerable: true, get: function() {
    return sampleTime_1.sampleTime;
  } });
  var scan_1 = require_scan();
  Object.defineProperty(exports, "scan", { enumerable: true, get: function() {
    return scan_1.scan;
  } });
  var sequenceEqual_1 = require_sequenceEqual();
  Object.defineProperty(exports, "sequenceEqual", { enumerable: true, get: function() {
    return sequenceEqual_1.sequenceEqual;
  } });
  var share_1 = require_share();
  Object.defineProperty(exports, "share", { enumerable: true, get: function() {
    return share_1.share;
  } });
  var shareReplay_1 = require_shareReplay();
  Object.defineProperty(exports, "shareReplay", { enumerable: true, get: function() {
    return shareReplay_1.shareReplay;
  } });
  var single_1 = require_single();
  Object.defineProperty(exports, "single", { enumerable: true, get: function() {
    return single_1.single;
  } });
  var skip_1 = require_skip();
  Object.defineProperty(exports, "skip", { enumerable: true, get: function() {
    return skip_1.skip;
  } });
  var skipLast_1 = require_skipLast();
  Object.defineProperty(exports, "skipLast", { enumerable: true, get: function() {
    return skipLast_1.skipLast;
  } });
  var skipUntil_1 = require_skipUntil();
  Object.defineProperty(exports, "skipUntil", { enumerable: true, get: function() {
    return skipUntil_1.skipUntil;
  } });
  var skipWhile_1 = require_skipWhile();
  Object.defineProperty(exports, "skipWhile", { enumerable: true, get: function() {
    return skipWhile_1.skipWhile;
  } });
  var startWith_1 = require_startWith();
  Object.defineProperty(exports, "startWith", { enumerable: true, get: function() {
    return startWith_1.startWith;
  } });
  var subscribeOn_1 = require_subscribeOn();
  Object.defineProperty(exports, "subscribeOn", { enumerable: true, get: function() {
    return subscribeOn_1.subscribeOn;
  } });
  var switchAll_1 = require_switchAll();
  Object.defineProperty(exports, "switchAll", { enumerable: true, get: function() {
    return switchAll_1.switchAll;
  } });
  var switchMap_1 = require_switchMap();
  Object.defineProperty(exports, "switchMap", { enumerable: true, get: function() {
    return switchMap_1.switchMap;
  } });
  var switchMapTo_1 = require_switchMapTo();
  Object.defineProperty(exports, "switchMapTo", { enumerable: true, get: function() {
    return switchMapTo_1.switchMapTo;
  } });
  var switchScan_1 = require_switchScan();
  Object.defineProperty(exports, "switchScan", { enumerable: true, get: function() {
    return switchScan_1.switchScan;
  } });
  var take_1 = require_take();
  Object.defineProperty(exports, "take", { enumerable: true, get: function() {
    return take_1.take;
  } });
  var takeLast_1 = require_takeLast();
  Object.defineProperty(exports, "takeLast", { enumerable: true, get: function() {
    return takeLast_1.takeLast;
  } });
  var takeUntil_1 = require_takeUntil();
  Object.defineProperty(exports, "takeUntil", { enumerable: true, get: function() {
    return takeUntil_1.takeUntil;
  } });
  var takeWhile_1 = require_takeWhile();
  Object.defineProperty(exports, "takeWhile", { enumerable: true, get: function() {
    return takeWhile_1.takeWhile;
  } });
  var tap_1 = require_tap();
  Object.defineProperty(exports, "tap", { enumerable: true, get: function() {
    return tap_1.tap;
  } });
  var throttle_1 = require_throttle();
  Object.defineProperty(exports, "throttle", { enumerable: true, get: function() {
    return throttle_1.throttle;
  } });
  var throttleTime_1 = require_throttleTime();
  Object.defineProperty(exports, "throttleTime", { enumerable: true, get: function() {
    return throttleTime_1.throttleTime;
  } });
  var throwIfEmpty_1 = require_throwIfEmpty();
  Object.defineProperty(exports, "throwIfEmpty", { enumerable: true, get: function() {
    return throwIfEmpty_1.throwIfEmpty;
  } });
  var timeInterval_1 = require_timeInterval();
  Object.defineProperty(exports, "timeInterval", { enumerable: true, get: function() {
    return timeInterval_1.timeInterval;
  } });
  var timeout_2 = require_timeout();
  Object.defineProperty(exports, "timeout", { enumerable: true, get: function() {
    return timeout_2.timeout;
  } });
  var timeoutWith_1 = require_timeoutWith();
  Object.defineProperty(exports, "timeoutWith", { enumerable: true, get: function() {
    return timeoutWith_1.timeoutWith;
  } });
  var timestamp_1 = require_timestamp();
  Object.defineProperty(exports, "timestamp", { enumerable: true, get: function() {
    return timestamp_1.timestamp;
  } });
  var toArray_1 = require_toArray();
  Object.defineProperty(exports, "toArray", { enumerable: true, get: function() {
    return toArray_1.toArray;
  } });
  var window_1 = require_window();
  Object.defineProperty(exports, "window", { enumerable: true, get: function() {
    return window_1.window;
  } });
  var windowCount_1 = require_windowCount();
  Object.defineProperty(exports, "windowCount", { enumerable: true, get: function() {
    return windowCount_1.windowCount;
  } });
  var windowTime_1 = require_windowTime();
  Object.defineProperty(exports, "windowTime", { enumerable: true, get: function() {
    return windowTime_1.windowTime;
  } });
  var windowToggle_1 = require_windowToggle();
  Object.defineProperty(exports, "windowToggle", { enumerable: true, get: function() {
    return windowToggle_1.windowToggle;
  } });
  var windowWhen_1 = require_windowWhen();
  Object.defineProperty(exports, "windowWhen", { enumerable: true, get: function() {
    return windowWhen_1.windowWhen;
  } });
  var withLatestFrom_1 = require_withLatestFrom();
  Object.defineProperty(exports, "withLatestFrom", { enumerable: true, get: function() {
    return withLatestFrom_1.withLatestFrom;
  } });
  var zipAll_1 = require_zipAll();
  Object.defineProperty(exports, "zipAll", { enumerable: true, get: function() {
    return zipAll_1.zipAll;
  } });
  var zipWith_1 = require_zipWith();
  Object.defineProperty(exports, "zipWith", { enumerable: true, get: function() {
    return zipWith_1.zipWith;
  } });
});

// node_modules/rxjs/dist/cjs/internal/operators/partition.js
var require_partition2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.partition = undefined;
  var not_1 = require_not();
  var filter_1 = require_filter();
  function partition(predicate, thisArg) {
    return function(source) {
      return [filter_1.filter(predicate, thisArg)(source), filter_1.filter(not_1.not(predicate, thisArg))(source)];
    };
  }
  exports.partition = partition;
});

// node_modules/rxjs/dist/cjs/internal/operators/race.js
var require_race2 = __commonJS((exports) => {
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length;i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.race = undefined;
  var argsOrArgArray_1 = require_argsOrArgArray();
  var raceWith_1 = require_raceWith();
  function race() {
    var args = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return raceWith_1.raceWith.apply(undefined, __spreadArray([], __read(argsOrArgArray_1.argsOrArgArray(args))));
  }
  exports.race = race;
});

// node_modules/rxjs/dist/cjs/operators/index.js
var require_operators = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mergeAll = exports.merge = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.concat = exports.combineLatestWith = exports.combineLatest = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = undefined;
  exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.race = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.partition = exports.pairwise = exports.onErrorResumeNext = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = undefined;
  exports.zipWith = exports.zipAll = exports.zip = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = undefined;
  var audit_1 = require_audit();
  Object.defineProperty(exports, "audit", { enumerable: true, get: function() {
    return audit_1.audit;
  } });
  var auditTime_1 = require_auditTime();
  Object.defineProperty(exports, "auditTime", { enumerable: true, get: function() {
    return auditTime_1.auditTime;
  } });
  var buffer_1 = require_buffer();
  Object.defineProperty(exports, "buffer", { enumerable: true, get: function() {
    return buffer_1.buffer;
  } });
  var bufferCount_1 = require_bufferCount();
  Object.defineProperty(exports, "bufferCount", { enumerable: true, get: function() {
    return bufferCount_1.bufferCount;
  } });
  var bufferTime_1 = require_bufferTime();
  Object.defineProperty(exports, "bufferTime", { enumerable: true, get: function() {
    return bufferTime_1.bufferTime;
  } });
  var bufferToggle_1 = require_bufferToggle();
  Object.defineProperty(exports, "bufferToggle", { enumerable: true, get: function() {
    return bufferToggle_1.bufferToggle;
  } });
  var bufferWhen_1 = require_bufferWhen();
  Object.defineProperty(exports, "bufferWhen", { enumerable: true, get: function() {
    return bufferWhen_1.bufferWhen;
  } });
  var catchError_1 = require_catchError();
  Object.defineProperty(exports, "catchError", { enumerable: true, get: function() {
    return catchError_1.catchError;
  } });
  var combineAll_1 = require_combineAll();
  Object.defineProperty(exports, "combineAll", { enumerable: true, get: function() {
    return combineAll_1.combineAll;
  } });
  var combineLatestAll_1 = require_combineLatestAll();
  Object.defineProperty(exports, "combineLatestAll", { enumerable: true, get: function() {
    return combineLatestAll_1.combineLatestAll;
  } });
  var combineLatest_1 = require_combineLatest2();
  Object.defineProperty(exports, "combineLatest", { enumerable: true, get: function() {
    return combineLatest_1.combineLatest;
  } });
  var combineLatestWith_1 = require_combineLatestWith();
  Object.defineProperty(exports, "combineLatestWith", { enumerable: true, get: function() {
    return combineLatestWith_1.combineLatestWith;
  } });
  var concat_1 = require_concat2();
  Object.defineProperty(exports, "concat", { enumerable: true, get: function() {
    return concat_1.concat;
  } });
  var concatAll_1 = require_concatAll();
  Object.defineProperty(exports, "concatAll", { enumerable: true, get: function() {
    return concatAll_1.concatAll;
  } });
  var concatMap_1 = require_concatMap();
  Object.defineProperty(exports, "concatMap", { enumerable: true, get: function() {
    return concatMap_1.concatMap;
  } });
  var concatMapTo_1 = require_concatMapTo();
  Object.defineProperty(exports, "concatMapTo", { enumerable: true, get: function() {
    return concatMapTo_1.concatMapTo;
  } });
  var concatWith_1 = require_concatWith();
  Object.defineProperty(exports, "concatWith", { enumerable: true, get: function() {
    return concatWith_1.concatWith;
  } });
  var connect_1 = require_connect();
  Object.defineProperty(exports, "connect", { enumerable: true, get: function() {
    return connect_1.connect;
  } });
  var count_1 = require_count();
  Object.defineProperty(exports, "count", { enumerable: true, get: function() {
    return count_1.count;
  } });
  var debounce_1 = require_debounce();
  Object.defineProperty(exports, "debounce", { enumerable: true, get: function() {
    return debounce_1.debounce;
  } });
  var debounceTime_1 = require_debounceTime();
  Object.defineProperty(exports, "debounceTime", { enumerable: true, get: function() {
    return debounceTime_1.debounceTime;
  } });
  var defaultIfEmpty_1 = require_defaultIfEmpty();
  Object.defineProperty(exports, "defaultIfEmpty", { enumerable: true, get: function() {
    return defaultIfEmpty_1.defaultIfEmpty;
  } });
  var delay_1 = require_delay();
  Object.defineProperty(exports, "delay", { enumerable: true, get: function() {
    return delay_1.delay;
  } });
  var delayWhen_1 = require_delayWhen();
  Object.defineProperty(exports, "delayWhen", { enumerable: true, get: function() {
    return delayWhen_1.delayWhen;
  } });
  var dematerialize_1 = require_dematerialize();
  Object.defineProperty(exports, "dematerialize", { enumerable: true, get: function() {
    return dematerialize_1.dematerialize;
  } });
  var distinct_1 = require_distinct();
  Object.defineProperty(exports, "distinct", { enumerable: true, get: function() {
    return distinct_1.distinct;
  } });
  var distinctUntilChanged_1 = require_distinctUntilChanged();
  Object.defineProperty(exports, "distinctUntilChanged", { enumerable: true, get: function() {
    return distinctUntilChanged_1.distinctUntilChanged;
  } });
  var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
  Object.defineProperty(exports, "distinctUntilKeyChanged", { enumerable: true, get: function() {
    return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
  } });
  var elementAt_1 = require_elementAt();
  Object.defineProperty(exports, "elementAt", { enumerable: true, get: function() {
    return elementAt_1.elementAt;
  } });
  var endWith_1 = require_endWith();
  Object.defineProperty(exports, "endWith", { enumerable: true, get: function() {
    return endWith_1.endWith;
  } });
  var every_1 = require_every();
  Object.defineProperty(exports, "every", { enumerable: true, get: function() {
    return every_1.every;
  } });
  var exhaust_1 = require_exhaust();
  Object.defineProperty(exports, "exhaust", { enumerable: true, get: function() {
    return exhaust_1.exhaust;
  } });
  var exhaustAll_1 = require_exhaustAll();
  Object.defineProperty(exports, "exhaustAll", { enumerable: true, get: function() {
    return exhaustAll_1.exhaustAll;
  } });
  var exhaustMap_1 = require_exhaustMap();
  Object.defineProperty(exports, "exhaustMap", { enumerable: true, get: function() {
    return exhaustMap_1.exhaustMap;
  } });
  var expand_1 = require_expand();
  Object.defineProperty(exports, "expand", { enumerable: true, get: function() {
    return expand_1.expand;
  } });
  var filter_1 = require_filter();
  Object.defineProperty(exports, "filter", { enumerable: true, get: function() {
    return filter_1.filter;
  } });
  var finalize_1 = require_finalize();
  Object.defineProperty(exports, "finalize", { enumerable: true, get: function() {
    return finalize_1.finalize;
  } });
  var find_1 = require_find();
  Object.defineProperty(exports, "find", { enumerable: true, get: function() {
    return find_1.find;
  } });
  var findIndex_1 = require_findIndex();
  Object.defineProperty(exports, "findIndex", { enumerable: true, get: function() {
    return findIndex_1.findIndex;
  } });
  var first_1 = require_first();
  Object.defineProperty(exports, "first", { enumerable: true, get: function() {
    return first_1.first;
  } });
  var groupBy_1 = require_groupBy();
  Object.defineProperty(exports, "groupBy", { enumerable: true, get: function() {
    return groupBy_1.groupBy;
  } });
  var ignoreElements_1 = require_ignoreElements();
  Object.defineProperty(exports, "ignoreElements", { enumerable: true, get: function() {
    return ignoreElements_1.ignoreElements;
  } });
  var isEmpty_1 = require_isEmpty();
  Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function() {
    return isEmpty_1.isEmpty;
  } });
  var last_1 = require_last();
  Object.defineProperty(exports, "last", { enumerable: true, get: function() {
    return last_1.last;
  } });
  var map_1 = require_map();
  Object.defineProperty(exports, "map", { enumerable: true, get: function() {
    return map_1.map;
  } });
  var mapTo_1 = require_mapTo();
  Object.defineProperty(exports, "mapTo", { enumerable: true, get: function() {
    return mapTo_1.mapTo;
  } });
  var materialize_1 = require_materialize();
  Object.defineProperty(exports, "materialize", { enumerable: true, get: function() {
    return materialize_1.materialize;
  } });
  var max_1 = require_max();
  Object.defineProperty(exports, "max", { enumerable: true, get: function() {
    return max_1.max;
  } });
  var merge_1 = require_merge2();
  Object.defineProperty(exports, "merge", { enumerable: true, get: function() {
    return merge_1.merge;
  } });
  var mergeAll_1 = require_mergeAll();
  Object.defineProperty(exports, "mergeAll", { enumerable: true, get: function() {
    return mergeAll_1.mergeAll;
  } });
  var flatMap_1 = require_flatMap();
  Object.defineProperty(exports, "flatMap", { enumerable: true, get: function() {
    return flatMap_1.flatMap;
  } });
  var mergeMap_1 = require_mergeMap();
  Object.defineProperty(exports, "mergeMap", { enumerable: true, get: function() {
    return mergeMap_1.mergeMap;
  } });
  var mergeMapTo_1 = require_mergeMapTo();
  Object.defineProperty(exports, "mergeMapTo", { enumerable: true, get: function() {
    return mergeMapTo_1.mergeMapTo;
  } });
  var mergeScan_1 = require_mergeScan();
  Object.defineProperty(exports, "mergeScan", { enumerable: true, get: function() {
    return mergeScan_1.mergeScan;
  } });
  var mergeWith_1 = require_mergeWith();
  Object.defineProperty(exports, "mergeWith", { enumerable: true, get: function() {
    return mergeWith_1.mergeWith;
  } });
  var min_1 = require_min();
  Object.defineProperty(exports, "min", { enumerable: true, get: function() {
    return min_1.min;
  } });
  var multicast_1 = require_multicast();
  Object.defineProperty(exports, "multicast", { enumerable: true, get: function() {
    return multicast_1.multicast;
  } });
  var observeOn_1 = require_observeOn();
  Object.defineProperty(exports, "observeOn", { enumerable: true, get: function() {
    return observeOn_1.observeOn;
  } });
  var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
  Object.defineProperty(exports, "onErrorResumeNext", { enumerable: true, get: function() {
    return onErrorResumeNextWith_1.onErrorResumeNext;
  } });
  var pairwise_1 = require_pairwise();
  Object.defineProperty(exports, "pairwise", { enumerable: true, get: function() {
    return pairwise_1.pairwise;
  } });
  var partition_1 = require_partition2();
  Object.defineProperty(exports, "partition", { enumerable: true, get: function() {
    return partition_1.partition;
  } });
  var pluck_1 = require_pluck();
  Object.defineProperty(exports, "pluck", { enumerable: true, get: function() {
    return pluck_1.pluck;
  } });
  var publish_1 = require_publish();
  Object.defineProperty(exports, "publish", { enumerable: true, get: function() {
    return publish_1.publish;
  } });
  var publishBehavior_1 = require_publishBehavior();
  Object.defineProperty(exports, "publishBehavior", { enumerable: true, get: function() {
    return publishBehavior_1.publishBehavior;
  } });
  var publishLast_1 = require_publishLast();
  Object.defineProperty(exports, "publishLast", { enumerable: true, get: function() {
    return publishLast_1.publishLast;
  } });
  var publishReplay_1 = require_publishReplay();
  Object.defineProperty(exports, "publishReplay", { enumerable: true, get: function() {
    return publishReplay_1.publishReplay;
  } });
  var race_1 = require_race2();
  Object.defineProperty(exports, "race", { enumerable: true, get: function() {
    return race_1.race;
  } });
  var raceWith_1 = require_raceWith();
  Object.defineProperty(exports, "raceWith", { enumerable: true, get: function() {
    return raceWith_1.raceWith;
  } });
  var reduce_1 = require_reduce();
  Object.defineProperty(exports, "reduce", { enumerable: true, get: function() {
    return reduce_1.reduce;
  } });
  var repeat_1 = require_repeat();
  Object.defineProperty(exports, "repeat", { enumerable: true, get: function() {
    return repeat_1.repeat;
  } });
  var repeatWhen_1 = require_repeatWhen();
  Object.defineProperty(exports, "repeatWhen", { enumerable: true, get: function() {
    return repeatWhen_1.repeatWhen;
  } });
  var retry_1 = require_retry();
  Object.defineProperty(exports, "retry", { enumerable: true, get: function() {
    return retry_1.retry;
  } });
  var retryWhen_1 = require_retryWhen();
  Object.defineProperty(exports, "retryWhen", { enumerable: true, get: function() {
    return retryWhen_1.retryWhen;
  } });
  var refCount_1 = require_refCount();
  Object.defineProperty(exports, "refCount", { enumerable: true, get: function() {
    return refCount_1.refCount;
  } });
  var sample_1 = require_sample();
  Object.defineProperty(exports, "sample", { enumerable: true, get: function() {
    return sample_1.sample;
  } });
  var sampleTime_1 = require_sampleTime();
  Object.defineProperty(exports, "sampleTime", { enumerable: true, get: function() {
    return sampleTime_1.sampleTime;
  } });
  var scan_1 = require_scan();
  Object.defineProperty(exports, "scan", { enumerable: true, get: function() {
    return scan_1.scan;
  } });
  var sequenceEqual_1 = require_sequenceEqual();
  Object.defineProperty(exports, "sequenceEqual", { enumerable: true, get: function() {
    return sequenceEqual_1.sequenceEqual;
  } });
  var share_1 = require_share();
  Object.defineProperty(exports, "share", { enumerable: true, get: function() {
    return share_1.share;
  } });
  var shareReplay_1 = require_shareReplay();
  Object.defineProperty(exports, "shareReplay", { enumerable: true, get: function() {
    return shareReplay_1.shareReplay;
  } });
  var single_1 = require_single();
  Object.defineProperty(exports, "single", { enumerable: true, get: function() {
    return single_1.single;
  } });
  var skip_1 = require_skip();
  Object.defineProperty(exports, "skip", { enumerable: true, get: function() {
    return skip_1.skip;
  } });
  var skipLast_1 = require_skipLast();
  Object.defineProperty(exports, "skipLast", { enumerable: true, get: function() {
    return skipLast_1.skipLast;
  } });
  var skipUntil_1 = require_skipUntil();
  Object.defineProperty(exports, "skipUntil", { enumerable: true, get: function() {
    return skipUntil_1.skipUntil;
  } });
  var skipWhile_1 = require_skipWhile();
  Object.defineProperty(exports, "skipWhile", { enumerable: true, get: function() {
    return skipWhile_1.skipWhile;
  } });
  var startWith_1 = require_startWith();
  Object.defineProperty(exports, "startWith", { enumerable: true, get: function() {
    return startWith_1.startWith;
  } });
  var subscribeOn_1 = require_subscribeOn();
  Object.defineProperty(exports, "subscribeOn", { enumerable: true, get: function() {
    return subscribeOn_1.subscribeOn;
  } });
  var switchAll_1 = require_switchAll();
  Object.defineProperty(exports, "switchAll", { enumerable: true, get: function() {
    return switchAll_1.switchAll;
  } });
  var switchMap_1 = require_switchMap();
  Object.defineProperty(exports, "switchMap", { enumerable: true, get: function() {
    return switchMap_1.switchMap;
  } });
  var switchMapTo_1 = require_switchMapTo();
  Object.defineProperty(exports, "switchMapTo", { enumerable: true, get: function() {
    return switchMapTo_1.switchMapTo;
  } });
  var switchScan_1 = require_switchScan();
  Object.defineProperty(exports, "switchScan", { enumerable: true, get: function() {
    return switchScan_1.switchScan;
  } });
  var take_1 = require_take();
  Object.defineProperty(exports, "take", { enumerable: true, get: function() {
    return take_1.take;
  } });
  var takeLast_1 = require_takeLast();
  Object.defineProperty(exports, "takeLast", { enumerable: true, get: function() {
    return takeLast_1.takeLast;
  } });
  var takeUntil_1 = require_takeUntil();
  Object.defineProperty(exports, "takeUntil", { enumerable: true, get: function() {
    return takeUntil_1.takeUntil;
  } });
  var takeWhile_1 = require_takeWhile();
  Object.defineProperty(exports, "takeWhile", { enumerable: true, get: function() {
    return takeWhile_1.takeWhile;
  } });
  var tap_1 = require_tap();
  Object.defineProperty(exports, "tap", { enumerable: true, get: function() {
    return tap_1.tap;
  } });
  var throttle_1 = require_throttle();
  Object.defineProperty(exports, "throttle", { enumerable: true, get: function() {
    return throttle_1.throttle;
  } });
  var throttleTime_1 = require_throttleTime();
  Object.defineProperty(exports, "throttleTime", { enumerable: true, get: function() {
    return throttleTime_1.throttleTime;
  } });
  var throwIfEmpty_1 = require_throwIfEmpty();
  Object.defineProperty(exports, "throwIfEmpty", { enumerable: true, get: function() {
    return throwIfEmpty_1.throwIfEmpty;
  } });
  var timeInterval_1 = require_timeInterval();
  Object.defineProperty(exports, "timeInterval", { enumerable: true, get: function() {
    return timeInterval_1.timeInterval;
  } });
  var timeout_1 = require_timeout();
  Object.defineProperty(exports, "timeout", { enumerable: true, get: function() {
    return timeout_1.timeout;
  } });
  var timeoutWith_1 = require_timeoutWith();
  Object.defineProperty(exports, "timeoutWith", { enumerable: true, get: function() {
    return timeoutWith_1.timeoutWith;
  } });
  var timestamp_1 = require_timestamp();
  Object.defineProperty(exports, "timestamp", { enumerable: true, get: function() {
    return timestamp_1.timestamp;
  } });
  var toArray_1 = require_toArray();
  Object.defineProperty(exports, "toArray", { enumerable: true, get: function() {
    return toArray_1.toArray;
  } });
  var window_1 = require_window();
  Object.defineProperty(exports, "window", { enumerable: true, get: function() {
    return window_1.window;
  } });
  var windowCount_1 = require_windowCount();
  Object.defineProperty(exports, "windowCount", { enumerable: true, get: function() {
    return windowCount_1.windowCount;
  } });
  var windowTime_1 = require_windowTime();
  Object.defineProperty(exports, "windowTime", { enumerable: true, get: function() {
    return windowTime_1.windowTime;
  } });
  var windowToggle_1 = require_windowToggle();
  Object.defineProperty(exports, "windowToggle", { enumerable: true, get: function() {
    return windowToggle_1.windowToggle;
  } });
  var windowWhen_1 = require_windowWhen();
  Object.defineProperty(exports, "windowWhen", { enumerable: true, get: function() {
    return windowWhen_1.windowWhen;
  } });
  var withLatestFrom_1 = require_withLatestFrom();
  Object.defineProperty(exports, "withLatestFrom", { enumerable: true, get: function() {
    return withLatestFrom_1.withLatestFrom;
  } });
  var zip_1 = require_zip2();
  Object.defineProperty(exports, "zip", { enumerable: true, get: function() {
    return zip_1.zip;
  } });
  var zipAll_1 = require_zipAll();
  Object.defineProperty(exports, "zipAll", { enumerable: true, get: function() {
    return zipAll_1.zipAll;
  } });
  var zipWith_1 = require_zipWith();
  Object.defineProperty(exports, "zipWith", { enumerable: true, get: function() {
    return zipWith_1.zipWith;
  } });
});

// node_modules/ms/index.js
var require_ms = __commonJS((exports, module) => {
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "weeks":
      case "week":
      case "w":
        return n * w;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return;
    }
  }
  function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
      return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
      return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
      return Math.round(ms / s) + "s";
    }
    return ms + "ms";
  }
  function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
      return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
      return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
      return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
  }
  function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS((exports, module) => {
  function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce2;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require_ms();
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug[key] = env[key];
    });
    createDebug.names = [];
    createDebug.skips = [];
    createDebug.formatters = {};
    function selectColor(namespace) {
      let hash = 0;
      for (let i = 0;i < namespace.length; i++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    function createDebug(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug(...args) {
        if (!debug.enabled) {
          return;
        }
        const self = debug;
        const curr = Number(new Date);
        const ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter = createDebug.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug.formatArgs.call(self, args);
        const logFn = self.log || createDebug.log;
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug.useColors();
      debug.color = createDebug.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug.destroy;
      Object.defineProperty(debug, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v) => {
          enableOverride = v;
        }
      });
      if (typeof createDebug.init === "function") {
        createDebug.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const ns of split) {
        if (ns[0] === "-") {
          createDebug.skips.push(ns.slice(1));
        } else {
          createDebug.names.push(ns);
        }
      }
    }
    function matchesTemplate(search, template) {
      let searchIndex = 0;
      let templateIndex = 0;
      let starIndex = -1;
      let matchIndex = 0;
      while (searchIndex < search.length) {
        if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
          if (template[templateIndex] === "*") {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++;
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false;
        }
      }
      while (templateIndex < template.length && template[templateIndex] === "*") {
        templateIndex++;
      }
      return templateIndex === template.length;
    }
    function disable() {
      const namespaces = [
        ...createDebug.names,
        ...createDebug.skips.map((namespace) => "-" + namespace)
      ].join(",");
      createDebug.enable("");
      return namespaces;
    }
    function enabled(name) {
      for (const skip of createDebug.skips) {
        if (matchesTemplate(name, skip)) {
          return false;
        }
      }
      for (const ns of createDebug.names) {
        if (matchesTemplate(name, ns)) {
          return true;
        }
      }
      return false;
    }
    function coerce2(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  module.exports = setup;
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS((exports, module) => {
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();
  exports.destroy = (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
    };
  })();
  exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
      return true;
    }
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    }
    let m;
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match) => {
      if (match === "%%") {
        return;
      }
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  exports.log = console.debug || console.log || (() => {});
  function save(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem("debug", namespaces);
      } else {
        exports.storage.removeItem("debug");
      }
    } catch (error) {}
  }
  function load() {
    let r;
    try {
      r = exports.storage.getItem("debug");
    } catch (error) {}
    if (!r && typeof process !== "undefined" && "env" in process) {
      r = process.env.DEBUG;
    }
    return r;
  }
  function localstorage() {
    try {
      return localStorage;
    } catch (error) {}
  }
  module.exports = require_common()(exports);
  var { formatters } = module.exports;
  formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return "[UnexpectedJSONParseError]: " + error.message;
    }
  };
});

// node_modules/debug/src/node.js
var require_node = __commonJS((exports, module) => {
  var tty = __require("tty");
  var util2 = __require("util");
  exports.init = init;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.destroy = util2.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  exports.colors = [6, 2, 3, 4, 5, 1];
  try {
    const supportsColor = (()=>{throw new Error("Cannot require module "+"supports-color");})();
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
      exports.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ];
    }
  } catch (error) {}
  exports.inspectOpts = Object.keys(process.env).filter((key) => {
    return /^debug_/i.test(key);
  }).reduce((obj, key) => {
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
      return k.toUpperCase();
    });
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
      val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
      val = false;
    } else if (val === "null") {
      val = null;
    } else {
      val = Number(val);
    }
    obj[prop] = val;
    return obj;
  }, {});
  function useColors() {
    return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
  }
  function formatArgs(args) {
    const { namespace: name, useColors: useColors2 } = this;
    if (useColors2) {
      const c = this.color;
      const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
      const prefix = `  ${colorCode};1m${name} \x1B[0m`;
      args[0] = prefix + args[0].split(`
`).join(`
` + prefix);
      args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
    } else {
      args[0] = getDate() + name + " " + args[0];
    }
  }
  function getDate() {
    if (exports.inspectOpts.hideDate) {
      return "";
    }
    return new Date().toISOString() + " ";
  }
  function log(...args) {
    return process.stderr.write(util2.formatWithOptions(exports.inspectOpts, ...args) + `
`);
  }
  function save(namespaces) {
    if (namespaces) {
      process.env.DEBUG = namespaces;
    } else {
      delete process.env.DEBUG;
    }
  }
  function load() {
    return process.env.DEBUG;
  }
  function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for (let i = 0;i < keys.length; i++) {
      debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
  }
  module.exports = require_common()(exports);
  var { formatters } = module.exports;
  formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util2.inspect(v, this.inspectOpts).split(`
`).map((str) => str.trim()).join(" ");
  };
  formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util2.inspect(v, this.inspectOpts);
  };
});

// node_modules/debug/src/index.js
var require_src = __commonJS((exports, module) => {
  if (typeof process === "undefined" || process.type === "renderer" || false || process.__nwjs) {
    module.exports = require_browser();
  } else {
    module.exports = require_node();
  }
});

// node_modules/spawn-rx/lib/src/index.js
var require_src2 = __commonJS((exports) => {
  var __dirname = "/Users/bien/workspace/my/mcp-youtube/node_modules/spawn-rx/lib/src";
  var __rest = exports && exports.__rest || function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.findActualExecutable = findActualExecutable;
  exports.spawnDetached = spawnDetached;
  exports.spawn = spawn;
  exports.spawnDetachedPromise = spawnDetachedPromise;
  exports.spawnPromise = spawnPromise;
  var path = __require("path");
  var net = __require("net");
  var sfs = __require("fs");
  var assign = require_lodash();
  var rxjs_1 = require_cjs();
  var operators_1 = require_operators();
  var child_process_1 = __require("child_process");
  var debug_1 = require_src();
  var isWindows = process.platform === "win32";
  var d = (0, debug_1.default)("spawn-rx");
  function statSyncNoException(file) {
    try {
      return sfs.statSync(file);
    } catch (_a) {
      return null;
    }
  }
  function runDownPath(exe) {
    if (exe.match(/[\\/]/)) {
      d("Path has slash in directory, bailing");
      return exe;
    }
    var target = path.join(".", exe);
    if (statSyncNoException(target)) {
      d("Found executable in currect directory: ".concat(target));
      return target;
    }
    var haystack = process.env.PATH.split(isWindows ? ";" : ":");
    for (var _i = 0, haystack_1 = haystack;_i < haystack_1.length; _i++) {
      var p = haystack_1[_i];
      var needle = path.join(p, exe);
      if (statSyncNoException(needle)) {
        return needle;
      }
    }
    d("Failed to find executable anywhere in path");
    return exe;
  }
  function findActualExecutable(exe, args) {
    if (process.platform !== "win32") {
      return { cmd: runDownPath(exe), args };
    }
    if (!sfs.existsSync(exe)) {
      var possibleExts = [".exe", ".bat", ".cmd", ".ps1"];
      for (var _i = 0, possibleExts_1 = possibleExts;_i < possibleExts_1.length; _i++) {
        var ext = possibleExts_1[_i];
        var possibleFullPath = runDownPath("".concat(exe).concat(ext));
        if (sfs.existsSync(possibleFullPath)) {
          return findActualExecutable(possibleFullPath, args);
        }
      }
    }
    if (exe.match(/\.ps1$/i)) {
      var cmd = path.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe");
      var psargs = [
        "-ExecutionPolicy",
        "Unrestricted",
        "-NoLogo",
        "-NonInteractive",
        "-File",
        exe
      ];
      return { cmd, args: psargs.concat(args) };
    }
    if (exe.match(/\.(bat|cmd)$/i)) {
      var cmd = path.join(process.env.SYSTEMROOT, "System32", "cmd.exe");
      var cmdArgs = __spreadArray(["/C", exe], args, true);
      return { cmd, args: cmdArgs };
    }
    if (exe.match(/\.(js)$/i)) {
      var cmd = process.execPath;
      var nodeArgs = [exe];
      return { cmd, args: nodeArgs.concat(args) };
    }
    return { cmd: exe, args };
  }
  function spawnDetached(exe, params, opts) {
    if (opts === undefined) {
      opts = null;
    }
    var _a = findActualExecutable(exe, params), cmd = _a.cmd, args = _a.args;
    if (!isWindows) {
      return spawn(cmd, args, assign({}, opts || {}, { detached: true }));
    }
    var newParams = [cmd].concat(args);
    var target = path.join(__dirname, "..", "..", "vendor", "jobber", "Jobber.exe");
    var options = assign({}, opts || {}, { detached: true, jobber: true });
    d("spawnDetached: ".concat(target, ", ").concat(newParams));
    return spawn(target, newParams, options);
  }
  function spawn(exe, params, opts) {
    if (params === undefined) {
      params = [];
    }
    if (opts === undefined) {
      opts = null;
    }
    opts = opts || {};
    var spawnObs = rxjs_1.Observable.create(function(subj) {
      var _ = opts._, optsWithoutStdIn = __rest(opts, ["_"]);
      var _a = findActualExecutable(exe, params), cmd = _a.cmd, args = _a.args;
      d("spawning process: ".concat(cmd, " ").concat(args.join(), ", ").concat(JSON.stringify(optsWithoutStdIn)));
      var origOpts = assign({}, optsWithoutStdIn);
      if ("jobber" in origOpts) {
        delete origOpts.jobber;
      }
      if ("split" in origOpts) {
        delete origOpts.split;
      }
      var proc = (0, child_process_1.spawn)(cmd, args, origOpts);
      var bufHandler = function(source) {
        return function(b) {
          if (b.length < 1) {
            return;
          }
          var chunk = "<< String sent back was too long >>";
          try {
            if (typeof b === "string") {
              chunk = b.toString();
            } else {
              chunk = b.toString(origOpts.encoding || "utf8");
            }
          } catch (_a2) {
            chunk = "<< Lost chunk of process output for ".concat(exe, " - length was ").concat(b.length, ">>");
          }
          subj.next({ source, text: chunk });
        };
      };
      var ret = new rxjs_1.Subscription;
      if (opts.stdin) {
        if (proc.stdin) {
          ret.add(opts.stdin.subscribe(function(x) {
            return proc.stdin.write(x);
          }, subj.error.bind(subj), function() {
            return proc.stdin.end();
          }));
        } else {
          subj.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
        }
      }
      var stderrCompleted = null;
      var stdoutCompleted = null;
      var noClose = false;
      if (proc.stdout) {
        stdoutCompleted = new rxjs_1.AsyncSubject;
        proc.stdout.on("data", bufHandler("stdout"));
        proc.stdout.on("close", function() {
          stdoutCompleted.next(true);
          stdoutCompleted.complete();
        });
      } else {
        stdoutCompleted = (0, rxjs_1.of)(true);
      }
      if (proc.stderr) {
        stderrCompleted = new rxjs_1.AsyncSubject;
        proc.stderr.on("data", bufHandler("stderr"));
        proc.stderr.on("close", function() {
          stderrCompleted.next(true);
          stderrCompleted.complete();
        });
      } else {
        stderrCompleted = (0, rxjs_1.of)(true);
      }
      proc.on("error", function(e) {
        noClose = true;
        subj.error(e);
      });
      proc.on("close", function(code) {
        noClose = true;
        var pipesClosed = (0, rxjs_1.merge)(stdoutCompleted, stderrCompleted).pipe((0, operators_1.reduce)(function(acc) {
          return acc;
        }, true));
        if (code === 0) {
          pipesClosed.subscribe(function() {
            return subj.complete();
          });
        } else {
          pipesClosed.subscribe(function() {
            var e = new Error("Failed with exit code: ".concat(code));
            e.exitCode = code;
            subj.error(e);
          });
        }
      });
      ret.add(new rxjs_1.Subscription(function() {
        if (noClose) {
          return;
        }
        d("Killing process: ".concat(cmd, " ").concat(args.join()));
        if (opts.jobber) {
          net.connect("\\\\.\\pipe\\jobber-".concat(proc.pid));
          setTimeout(function() {
            return proc.kill();
          }, 5 * 1000);
        } else {
          proc.kill();
        }
      }));
      return ret;
    });
    return opts.split ? spawnObs : spawnObs.pipe((0, operators_1.map)(function(x) {
      return x === null || x === undefined ? undefined : x.text;
    }));
  }
  function wrapObservableInPromise(obs) {
    return new Promise(function(res, rej) {
      var out = "";
      obs.subscribe(function(x) {
        return out += x;
      }, function(e) {
        return rej(new Error("".concat(out, `
`).concat(e.message)));
      }, function() {
        return res(out);
      });
    });
  }
  function spawnDetachedPromise(exe, params, opts) {
    if (opts === undefined) {
      opts = null;
    }
    return wrapObservableInPromise(spawnDetached(exe, params, opts));
  }
  function spawnPromise(exe, params, opts) {
    if (opts === undefined) {
      opts = null;
    }
    return wrapObservableInPromise(spawn(exe, params, opts));
  }
});

// node_modules/balanced-match/index.js
var require_balanced_match = __commonJS((exports, module) => {
  module.exports = balanced;
  function balanced(a, b, str) {
    if (a instanceof RegExp)
      a = maybeMatch(a, str);
    if (b instanceof RegExp)
      b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
      start: r[0],
      end: r[1],
      pre: str.slice(0, r[0]),
      body: str.slice(r[0] + a.length, r[1]),
      post: str.slice(r[1] + b.length)
    };
  }
  function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
  }
  balanced.range = range;
  function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
      if (a === b) {
        return [ai, bi];
      }
      begs = [];
      left = str.length;
      while (i >= 0 && !result) {
        if (i == ai) {
          begs.push(i);
          ai = str.indexOf(a, i + 1);
        } else if (begs.length == 1) {
          result = [begs.pop(), bi];
        } else {
          beg = begs.pop();
          if (beg < left) {
            left = beg;
            right = bi;
          }
          bi = str.indexOf(b, i + 1);
        }
        i = ai < bi && ai >= 0 ? ai : bi;
      }
      if (begs.length) {
        result = [left, right];
      }
    }
    return result;
  }
});

// node_modules/brace-expansion/index.js
var require_brace_expansion = __commonJS((exports, module) => {
  var balanced = require_balanced_match();
  module.exports = expandTop;
  var escSlash = "\x00SLASH" + Math.random() + "\x00";
  var escOpen = "\x00OPEN" + Math.random() + "\x00";
  var escClose = "\x00CLOSE" + Math.random() + "\x00";
  var escComma = "\x00COMMA" + Math.random() + "\x00";
  var escPeriod = "\x00PERIOD" + Math.random() + "\x00";
  function numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
  }
  function escapeBraces(str) {
    return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
  }
  function unescapeBraces(str) {
    return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
  }
  function parseCommaParts(str) {
    if (!str)
      return [""];
    var parts = [];
    var m = balanced("{", "}", str);
    if (!m)
      return str.split(",");
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(",");
    p[p.length - 1] += "{" + body + "}";
    var postParts = parseCommaParts(post);
    if (post.length) {
      p[p.length - 1] += postParts.shift();
      p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
  }
  function expandTop(str) {
    if (!str)
      return [];
    if (str.substr(0, 2) === "{}") {
      str = "\\{\\}" + str.substr(2);
    }
    return expand(escapeBraces(str), true).map(unescapeBraces);
  }
  function embrace(str) {
    return "{" + str + "}";
  }
  function isPadded(el) {
    return /^-?0\d/.test(el);
  }
  function lte(i, y) {
    return i <= y;
  }
  function gte(i, y) {
    return i >= y;
  }
  function expand(str, isTop) {
    var expansions = [];
    var m = balanced("{", "}", str);
    if (!m)
      return [str];
    var pre = m.pre;
    var post = m.post.length ? expand(m.post, false) : [""];
    if (/\$$/.test(m.pre)) {
      for (var k = 0;k < post.length; k++) {
        var expansion = pre + "{" + m.body + "}" + post[k];
        expansions.push(expansion);
      }
    } else {
      var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
      var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
      var isSequence = isNumericSequence || isAlphaSequence;
      var isOptions = m.body.indexOf(",") >= 0;
      if (!isSequence && !isOptions) {
        if (m.post.match(/,.*\}/)) {
          str = m.pre + "{" + m.body + escClose + m.post;
          return expand(str);
        }
        return [str];
      }
      var n;
      if (isSequence) {
        n = m.body.split(/\.\./);
      } else {
        n = parseCommaParts(m.body);
        if (n.length === 1) {
          n = expand(n[0], false).map(embrace);
          if (n.length === 1) {
            return post.map(function(p) {
              return m.pre + n[0] + p;
            });
          }
        }
      }
      var N;
      if (isSequence) {
        var x = numeric(n[0]);
        var y = numeric(n[1]);
        var width = Math.max(n[0].length, n[1].length);
        var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
        var test = lte;
        var reverse = y < x;
        if (reverse) {
          incr *= -1;
          test = gte;
        }
        var pad = n.some(isPadded);
        N = [];
        for (var i = x;test(i, y); i += incr) {
          var c;
          if (isAlphaSequence) {
            c = String.fromCharCode(i);
            if (c === "\\")
              c = "";
          } else {
            c = String(i);
            if (pad) {
              var need = width - c.length;
              if (need > 0) {
                var z2 = new Array(need + 1).join("0");
                if (i < 0)
                  c = "-" + z2 + c.slice(1);
                else
                  c = z2 + c;
              }
            }
          }
          N.push(c);
        }
      } else {
        N = [];
        for (var j = 0;j < n.length; j++) {
          N.push.apply(N, expand(n[j], false));
        }
      }
      for (var j = 0;j < N.length; j++) {
        for (var k = 0;k < post.length; k++) {
          var expansion = pre + N[j] + post[k];
          if (!isTop || isSequence || expansion)
            expansions.push(expansion);
        }
      }
    }
    return expansions;
  }
});

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {}
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error;
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== undefined) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      overrideMap,
      overrideMap === errorMap ? undefined : errorMap
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}

class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === undefined ? undefined : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache;
var _ZodNativeEnum_cache;

class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== undefined ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message !== null && message !== undefined ? message : required_error) !== null && _a !== undefined ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== undefined ? message : invalid_type_error) !== null && _b !== undefined ? _b : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}

class ZodType {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus,
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === undefined ? undefined : params.async) !== null && _a !== undefined ? _a : false,
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b = (_a = err === null || err === undefined ? undefined : err.message) === null || _a === undefined ? undefined : _a.toLowerCase()) === null || _b === undefined ? undefined : _b.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap,
        async: true
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if (!decoded.typ || !decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch (_a) {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}

class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      offset: (_a = options === null || options === undefined ? undefined : options.offset) !== null && _a !== undefined ? _a : false,
      local: (_b = options === null || options === undefined ? undefined : options.local) !== null && _b !== undefined ? _b : false,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === undefined ? undefined : options.position,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch (_a) {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== undefined ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === undefined ? undefined : _b.call(_a, issue, ctx).message) !== null && _c !== undefined ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== undefined ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [undefined, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map;
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map;
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map;
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set;
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}

class ZodEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, undefined);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
_ZodEnum_cache = new WeakMap;
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, undefined);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
_ZodNativeEnum_cache = new WeakMap;
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};

class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          var _a2, _b2;
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = (_b2 = (_a2 = params.fatal) !== null && _a2 !== undefined ? _a2 : fatal) !== null && _b2 !== undefined ? _b2 : true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = (_b = (_a = params.fatal) !== null && _a !== undefined ? _a : fatal) !== null && _b !== undefined ? _b : true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/@modelcontextprotocol/sdk/dist/types.js
var LATEST_PROTOCOL_VERSION = "2024-11-05";
var SUPPORTED_PROTOCOL_VERSIONS = [
  LATEST_PROTOCOL_VERSION,
  "2024-10-07"
];
var JSONRPC_VERSION = "2.0";
var ProgressTokenSchema = z.union([z.string(), z.number().int()]);
var CursorSchema = z.string();
var BaseRequestParamsSchema = z.object({
  _meta: z.optional(z.object({
    progressToken: z.optional(ProgressTokenSchema)
  }).passthrough())
}).passthrough();
var RequestSchema = z.object({
  method: z.string(),
  params: z.optional(BaseRequestParamsSchema)
});
var BaseNotificationParamsSchema = z.object({
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var NotificationSchema = z.object({
  method: z.string(),
  params: z.optional(BaseNotificationParamsSchema)
});
var ResultSchema = z.object({
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var RequestIdSchema = z.union([z.string(), z.number().int()]);
var JSONRPCRequestSchema = z.object({
  jsonrpc: z.literal(JSONRPC_VERSION),
  id: RequestIdSchema
}).merge(RequestSchema).strict();
var JSONRPCNotificationSchema = z.object({
  jsonrpc: z.literal(JSONRPC_VERSION)
}).merge(NotificationSchema).strict();
var JSONRPCResponseSchema = z.object({
  jsonrpc: z.literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  result: ResultSchema
}).strict();
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2[ErrorCode2["ConnectionClosed"] = -1] = "ConnectionClosed";
  ErrorCode2[ErrorCode2["RequestTimeout"] = -2] = "RequestTimeout";
  ErrorCode2[ErrorCode2["ParseError"] = -32700] = "ParseError";
  ErrorCode2[ErrorCode2["InvalidRequest"] = -32600] = "InvalidRequest";
  ErrorCode2[ErrorCode2["MethodNotFound"] = -32601] = "MethodNotFound";
  ErrorCode2[ErrorCode2["InvalidParams"] = -32602] = "InvalidParams";
  ErrorCode2[ErrorCode2["InternalError"] = -32603] = "InternalError";
})(ErrorCode || (ErrorCode = {}));
var JSONRPCErrorSchema = z.object({
  jsonrpc: z.literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  error: z.object({
    code: z.number().int(),
    message: z.string(),
    data: z.optional(z.unknown())
  })
}).strict();
var JSONRPCMessageSchema = z.union([
  JSONRPCRequestSchema,
  JSONRPCNotificationSchema,
  JSONRPCResponseSchema,
  JSONRPCErrorSchema
]);
var EmptyResultSchema = ResultSchema.strict();
var CancelledNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/cancelled"),
  params: BaseNotificationParamsSchema.extend({
    requestId: RequestIdSchema,
    reason: z.string().optional()
  })
});
var ImplementationSchema = z.object({
  name: z.string(),
  version: z.string()
}).passthrough();
var ClientCapabilitiesSchema = z.object({
  experimental: z.optional(z.object({}).passthrough()),
  sampling: z.optional(z.object({}).passthrough()),
  roots: z.optional(z.object({
    listChanged: z.optional(z.boolean())
  }).passthrough())
}).passthrough();
var InitializeRequestSchema = RequestSchema.extend({
  method: z.literal("initialize"),
  params: BaseRequestParamsSchema.extend({
    protocolVersion: z.string(),
    capabilities: ClientCapabilitiesSchema,
    clientInfo: ImplementationSchema
  })
});
var ServerCapabilitiesSchema = z.object({
  experimental: z.optional(z.object({}).passthrough()),
  logging: z.optional(z.object({}).passthrough()),
  prompts: z.optional(z.object({
    listChanged: z.optional(z.boolean())
  }).passthrough()),
  resources: z.optional(z.object({
    subscribe: z.optional(z.boolean()),
    listChanged: z.optional(z.boolean())
  }).passthrough()),
  tools: z.optional(z.object({
    listChanged: z.optional(z.boolean())
  }).passthrough())
}).passthrough();
var InitializeResultSchema = ResultSchema.extend({
  protocolVersion: z.string(),
  capabilities: ServerCapabilitiesSchema,
  serverInfo: ImplementationSchema
});
var InitializedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/initialized")
});
var PingRequestSchema = RequestSchema.extend({
  method: z.literal("ping")
});
var ProgressSchema = z.object({
  progress: z.number(),
  total: z.optional(z.number())
}).passthrough();
var ProgressNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/progress"),
  params: BaseNotificationParamsSchema.merge(ProgressSchema).extend({
    progressToken: ProgressTokenSchema
  })
});
var PaginatedRequestSchema = RequestSchema.extend({
  params: BaseRequestParamsSchema.extend({
    cursor: z.optional(CursorSchema)
  }).optional()
});
var PaginatedResultSchema = ResultSchema.extend({
  nextCursor: z.optional(CursorSchema)
});
var ResourceContentsSchema = z.object({
  uri: z.string(),
  mimeType: z.optional(z.string())
}).passthrough();
var TextResourceContentsSchema = ResourceContentsSchema.extend({
  text: z.string()
});
var BlobResourceContentsSchema = ResourceContentsSchema.extend({
  blob: z.string().base64()
});
var ResourceSchema = z.object({
  uri: z.string(),
  name: z.string(),
  description: z.optional(z.string()),
  mimeType: z.optional(z.string())
}).passthrough();
var ResourceTemplateSchema = z.object({
  uriTemplate: z.string(),
  name: z.string(),
  description: z.optional(z.string()),
  mimeType: z.optional(z.string())
}).passthrough();
var ListResourcesRequestSchema = PaginatedRequestSchema.extend({
  method: z.literal("resources/list")
});
var ListResourcesResultSchema = PaginatedResultSchema.extend({
  resources: z.array(ResourceSchema)
});
var ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({
  method: z.literal("resources/templates/list")
});
var ListResourceTemplatesResultSchema = PaginatedResultSchema.extend({
  resourceTemplates: z.array(ResourceTemplateSchema)
});
var ReadResourceRequestSchema = RequestSchema.extend({
  method: z.literal("resources/read"),
  params: BaseRequestParamsSchema.extend({
    uri: z.string()
  })
});
var ReadResourceResultSchema = ResultSchema.extend({
  contents: z.array(z.union([TextResourceContentsSchema, BlobResourceContentsSchema]))
});
var ResourceListChangedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/resources/list_changed")
});
var SubscribeRequestSchema = RequestSchema.extend({
  method: z.literal("resources/subscribe"),
  params: BaseRequestParamsSchema.extend({
    uri: z.string()
  })
});
var UnsubscribeRequestSchema = RequestSchema.extend({
  method: z.literal("resources/unsubscribe"),
  params: BaseRequestParamsSchema.extend({
    uri: z.string()
  })
});
var ResourceUpdatedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/resources/updated"),
  params: BaseNotificationParamsSchema.extend({
    uri: z.string()
  })
});
var PromptArgumentSchema = z.object({
  name: z.string(),
  description: z.optional(z.string()),
  required: z.optional(z.boolean())
}).passthrough();
var PromptSchema = z.object({
  name: z.string(),
  description: z.optional(z.string()),
  arguments: z.optional(z.array(PromptArgumentSchema))
}).passthrough();
var ListPromptsRequestSchema = PaginatedRequestSchema.extend({
  method: z.literal("prompts/list")
});
var ListPromptsResultSchema = PaginatedResultSchema.extend({
  prompts: z.array(PromptSchema)
});
var GetPromptRequestSchema = RequestSchema.extend({
  method: z.literal("prompts/get"),
  params: BaseRequestParamsSchema.extend({
    name: z.string(),
    arguments: z.optional(z.record(z.string()))
  })
});
var TextContentSchema = z.object({
  type: z.literal("text"),
  text: z.string()
}).passthrough();
var ImageContentSchema = z.object({
  type: z.literal("image"),
  data: z.string().base64(),
  mimeType: z.string()
}).passthrough();
var EmbeddedResourceSchema = z.object({
  type: z.literal("resource"),
  resource: z.union([TextResourceContentsSchema, BlobResourceContentsSchema])
}).passthrough();
var PromptMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.union([
    TextContentSchema,
    ImageContentSchema,
    EmbeddedResourceSchema
  ])
}).passthrough();
var GetPromptResultSchema = ResultSchema.extend({
  description: z.optional(z.string()),
  messages: z.array(PromptMessageSchema)
});
var PromptListChangedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/prompts/list_changed")
});
var ToolSchema = z.object({
  name: z.string(),
  description: z.optional(z.string()),
  inputSchema: z.object({
    type: z.literal("object"),
    properties: z.optional(z.object({}).passthrough())
  }).passthrough()
}).passthrough();
var ListToolsRequestSchema = PaginatedRequestSchema.extend({
  method: z.literal("tools/list")
});
var ListToolsResultSchema = PaginatedResultSchema.extend({
  tools: z.array(ToolSchema)
});
var CallToolResultSchema = ResultSchema.extend({
  content: z.array(z.union([TextContentSchema, ImageContentSchema, EmbeddedResourceSchema])),
  isError: z.boolean().default(false).optional()
});
var CompatibilityCallToolResultSchema = CallToolResultSchema.or(ResultSchema.extend({
  toolResult: z.unknown()
}));
var CallToolRequestSchema = RequestSchema.extend({
  method: z.literal("tools/call"),
  params: BaseRequestParamsSchema.extend({
    name: z.string(),
    arguments: z.optional(z.record(z.unknown()))
  })
});
var ToolListChangedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/tools/list_changed")
});
var LoggingLevelSchema = z.enum([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency"
]);
var SetLevelRequestSchema = RequestSchema.extend({
  method: z.literal("logging/setLevel"),
  params: BaseRequestParamsSchema.extend({
    level: LoggingLevelSchema
  })
});
var LoggingMessageNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/message"),
  params: BaseNotificationParamsSchema.extend({
    level: LoggingLevelSchema,
    logger: z.optional(z.string()),
    data: z.unknown()
  })
});
var ModelHintSchema = z.object({
  name: z.string().optional()
}).passthrough();
var ModelPreferencesSchema = z.object({
  hints: z.optional(z.array(ModelHintSchema)),
  costPriority: z.optional(z.number().min(0).max(1)),
  speedPriority: z.optional(z.number().min(0).max(1)),
  intelligencePriority: z.optional(z.number().min(0).max(1))
}).passthrough();
var SamplingMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.union([TextContentSchema, ImageContentSchema])
}).passthrough();
var CreateMessageRequestSchema = RequestSchema.extend({
  method: z.literal("sampling/createMessage"),
  params: BaseRequestParamsSchema.extend({
    messages: z.array(SamplingMessageSchema),
    systemPrompt: z.optional(z.string()),
    includeContext: z.optional(z.enum(["none", "thisServer", "allServers"])),
    temperature: z.optional(z.number()),
    maxTokens: z.number().int(),
    stopSequences: z.optional(z.array(z.string())),
    metadata: z.optional(z.object({}).passthrough()),
    modelPreferences: z.optional(ModelPreferencesSchema)
  })
});
var CreateMessageResultSchema = ResultSchema.extend({
  model: z.string(),
  stopReason: z.optional(z.enum(["endTurn", "stopSequence", "maxTokens"]).or(z.string())),
  role: z.enum(["user", "assistant"]),
  content: z.discriminatedUnion("type", [
    TextContentSchema,
    ImageContentSchema
  ])
});
var ResourceReferenceSchema = z.object({
  type: z.literal("ref/resource"),
  uri: z.string()
}).passthrough();
var PromptReferenceSchema = z.object({
  type: z.literal("ref/prompt"),
  name: z.string()
}).passthrough();
var CompleteRequestSchema = RequestSchema.extend({
  method: z.literal("completion/complete"),
  params: BaseRequestParamsSchema.extend({
    ref: z.union([PromptReferenceSchema, ResourceReferenceSchema]),
    argument: z.object({
      name: z.string(),
      value: z.string()
    }).passthrough()
  })
});
var CompleteResultSchema = ResultSchema.extend({
  completion: z.object({
    values: z.array(z.string()).max(100),
    total: z.optional(z.number().int()),
    hasMore: z.optional(z.boolean())
  }).passthrough()
});
var RootSchema = z.object({
  uri: z.string().startsWith("file://"),
  name: z.optional(z.string())
}).passthrough();
var ListRootsRequestSchema = RequestSchema.extend({
  method: z.literal("roots/list")
});
var ListRootsResultSchema = ResultSchema.extend({
  roots: z.array(RootSchema)
});
var RootsListChangedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/roots/list_changed")
});
var ClientRequestSchema = z.union([
  PingRequestSchema,
  InitializeRequestSchema,
  CompleteRequestSchema,
  SetLevelRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListResourceTemplatesRequestSchema,
  ReadResourceRequestSchema,
  SubscribeRequestSchema,
  UnsubscribeRequestSchema,
  CallToolRequestSchema,
  ListToolsRequestSchema
]);
var ClientNotificationSchema = z.union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  InitializedNotificationSchema,
  RootsListChangedNotificationSchema
]);
var ClientResultSchema = z.union([
  EmptyResultSchema,
  CreateMessageResultSchema,
  ListRootsResultSchema
]);
var ServerRequestSchema = z.union([
  PingRequestSchema,
  CreateMessageRequestSchema,
  ListRootsRequestSchema
]);
var ServerNotificationSchema = z.union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  LoggingMessageNotificationSchema,
  ResourceUpdatedNotificationSchema,
  ResourceListChangedNotificationSchema,
  ToolListChangedNotificationSchema,
  PromptListChangedNotificationSchema
]);
var ServerResultSchema = z.union([
  EmptyResultSchema,
  InitializeResultSchema,
  CompleteResultSchema,
  GetPromptResultSchema,
  ListPromptsResultSchema,
  ListResourcesResultSchema,
  ListResourceTemplatesResultSchema,
  ReadResourceResultSchema,
  CallToolResultSchema,
  ListToolsResultSchema
]);

class McpError extends Error {
  constructor(code, message, data) {
    super(`MCP error ${code}: ${message}`);
    this.code = code;
    this.data = data;
  }
}

// node_modules/@modelcontextprotocol/sdk/dist/shared/protocol.js
var DEFAULT_REQUEST_TIMEOUT_MSEC = 60000;

class Protocol {
  constructor(_options) {
    this._options = _options;
    this._requestMessageId = 0;
    this._requestHandlers = new Map;
    this._requestHandlerAbortControllers = new Map;
    this._notificationHandlers = new Map;
    this._responseHandlers = new Map;
    this._progressHandlers = new Map;
    this.setNotificationHandler(CancelledNotificationSchema, (notification) => {
      const controller = this._requestHandlerAbortControllers.get(notification.params.requestId);
      controller === null || controller === undefined || controller.abort(notification.params.reason);
    });
    this.setNotificationHandler(ProgressNotificationSchema, (notification) => {
      this._onprogress(notification);
    });
    this.setRequestHandler(PingRequestSchema, (_request) => ({}));
  }
  async connect(transport) {
    this._transport = transport;
    this._transport.onclose = () => {
      this._onclose();
    };
    this._transport.onerror = (error) => {
      this._onerror(error);
    };
    this._transport.onmessage = (message) => {
      if (!("method" in message)) {
        this._onresponse(message);
      } else if ("id" in message) {
        this._onrequest(message);
      } else {
        this._onnotification(message);
      }
    };
    await this._transport.start();
  }
  _onclose() {
    var _a;
    const responseHandlers = this._responseHandlers;
    this._responseHandlers = new Map;
    this._progressHandlers.clear();
    this._transport = undefined;
    (_a = this.onclose) === null || _a === undefined || _a.call(this);
    const error = new McpError(ErrorCode.ConnectionClosed, "Connection closed");
    for (const handler of responseHandlers.values()) {
      handler(error);
    }
  }
  _onerror(error) {
    var _a;
    (_a = this.onerror) === null || _a === undefined || _a.call(this, error);
  }
  _onnotification(notification) {
    var _a;
    const handler = (_a = this._notificationHandlers.get(notification.method)) !== null && _a !== undefined ? _a : this.fallbackNotificationHandler;
    if (handler === undefined) {
      return;
    }
    Promise.resolve().then(() => handler(notification)).catch((error) => this._onerror(new Error(`Uncaught error in notification handler: ${error}`)));
  }
  _onrequest(request) {
    var _a, _b;
    const handler = (_a = this._requestHandlers.get(request.method)) !== null && _a !== undefined ? _a : this.fallbackRequestHandler;
    if (handler === undefined) {
      (_b = this._transport) === null || _b === undefined || _b.send({
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: ErrorCode.MethodNotFound,
          message: "Method not found"
        }
      }).catch((error) => this._onerror(new Error(`Failed to send an error response: ${error}`)));
      return;
    }
    const abortController = new AbortController;
    this._requestHandlerAbortControllers.set(request.id, abortController);
    Promise.resolve().then(() => handler(request, { signal: abortController.signal })).then((result) => {
      var _a2;
      if (abortController.signal.aborted) {
        return;
      }
      return (_a2 = this._transport) === null || _a2 === undefined ? undefined : _a2.send({
        result,
        jsonrpc: "2.0",
        id: request.id
      });
    }, (error) => {
      var _a2, _b2;
      if (abortController.signal.aborted) {
        return;
      }
      return (_a2 = this._transport) === null || _a2 === undefined ? undefined : _a2.send({
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: Number.isSafeInteger(error["code"]) ? error["code"] : ErrorCode.InternalError,
          message: (_b2 = error.message) !== null && _b2 !== undefined ? _b2 : "Internal error"
        }
      });
    }).catch((error) => this._onerror(new Error(`Failed to send response: ${error}`))).finally(() => {
      this._requestHandlerAbortControllers.delete(request.id);
    });
  }
  _onprogress(notification) {
    const { progress, total, progressToken } = notification.params;
    const handler = this._progressHandlers.get(Number(progressToken));
    if (handler === undefined) {
      this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(notification)}`));
      return;
    }
    handler({ progress, total });
  }
  _onresponse(response) {
    const messageId = response.id;
    const handler = this._responseHandlers.get(Number(messageId));
    if (handler === undefined) {
      this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(response)}`));
      return;
    }
    this._responseHandlers.delete(Number(messageId));
    this._progressHandlers.delete(Number(messageId));
    if ("result" in response) {
      handler(response);
    } else {
      const error = new McpError(response.error.code, response.error.message, response.error.data);
      handler(error);
    }
  }
  get transport() {
    return this._transport;
  }
  async close() {
    var _a;
    await ((_a = this._transport) === null || _a === undefined ? undefined : _a.close());
  }
  request(request, resultSchema, options) {
    return new Promise((resolve, reject) => {
      var _a, _b, _c, _d;
      if (!this._transport) {
        reject(new Error("Not connected"));
        return;
      }
      if (((_a = this._options) === null || _a === undefined ? undefined : _a.enforceStrictCapabilities) === true) {
        this.assertCapabilityForMethod(request.method);
      }
      (_b = options === null || options === undefined ? undefined : options.signal) === null || _b === undefined || _b.throwIfAborted();
      const messageId = this._requestMessageId++;
      const jsonrpcRequest = {
        ...request,
        jsonrpc: "2.0",
        id: messageId
      };
      if (options === null || options === undefined ? undefined : options.onprogress) {
        this._progressHandlers.set(messageId, options.onprogress);
        jsonrpcRequest.params = {
          ...request.params,
          _meta: { progressToken: messageId }
        };
      }
      let timeoutId = undefined;
      this._responseHandlers.set(messageId, (response) => {
        var _a2;
        if (timeoutId !== undefined) {
          clearTimeout(timeoutId);
        }
        if ((_a2 = options === null || options === undefined ? undefined : options.signal) === null || _a2 === undefined ? undefined : _a2.aborted) {
          return;
        }
        if (response instanceof Error) {
          return reject(response);
        }
        try {
          const result = resultSchema.parse(response.result);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      const cancel = (reason) => {
        var _a2;
        this._responseHandlers.delete(messageId);
        this._progressHandlers.delete(messageId);
        (_a2 = this._transport) === null || _a2 === undefined || _a2.send({
          jsonrpc: "2.0",
          method: "cancelled",
          params: {
            requestId: messageId,
            reason: String(reason)
          }
        }).catch((error) => this._onerror(new Error(`Failed to send cancellation: ${error}`)));
        reject(reason);
      };
      (_c = options === null || options === undefined ? undefined : options.signal) === null || _c === undefined || _c.addEventListener("abort", () => {
        var _a2;
        if (timeoutId !== undefined) {
          clearTimeout(timeoutId);
        }
        cancel((_a2 = options === null || options === undefined ? undefined : options.signal) === null || _a2 === undefined ? undefined : _a2.reason);
      });
      const timeout = (_d = options === null || options === undefined ? undefined : options.timeout) !== null && _d !== undefined ? _d : DEFAULT_REQUEST_TIMEOUT_MSEC;
      timeoutId = setTimeout(() => cancel(new McpError(ErrorCode.RequestTimeout, "Request timed out", {
        timeout
      })), timeout);
      this._transport.send(jsonrpcRequest).catch((error) => {
        if (timeoutId !== undefined) {
          clearTimeout(timeoutId);
        }
        reject(error);
      });
    });
  }
  async notification(notification) {
    if (!this._transport) {
      throw new Error("Not connected");
    }
    this.assertNotificationCapability(notification.method);
    const jsonrpcNotification = {
      ...notification,
      jsonrpc: "2.0"
    };
    await this._transport.send(jsonrpcNotification);
  }
  setRequestHandler(requestSchema, handler) {
    const method = requestSchema.shape.method.value;
    this.assertRequestHandlerCapability(method);
    this._requestHandlers.set(method, (request, extra) => Promise.resolve(handler(requestSchema.parse(request), extra)));
  }
  removeRequestHandler(method) {
    this._requestHandlers.delete(method);
  }
  setNotificationHandler(notificationSchema, handler) {
    this._notificationHandlers.set(notificationSchema.shape.method.value, (notification) => Promise.resolve(handler(notificationSchema.parse(notification))));
  }
  removeNotificationHandler(method) {
    this._notificationHandlers.delete(method);
  }
}

// node_modules/@modelcontextprotocol/sdk/dist/server/index.js
class Server extends Protocol {
  constructor(_serverInfo, options) {
    super(options);
    this._serverInfo = _serverInfo;
    this._capabilities = options.capabilities;
    this.setRequestHandler(InitializeRequestSchema, (request) => this._oninitialize(request));
    this.setNotificationHandler(InitializedNotificationSchema, () => {
      var _a;
      return (_a = this.oninitialized) === null || _a === undefined ? undefined : _a.call(this);
    });
  }
  assertCapabilityForMethod(method) {
    var _a, _b;
    switch (method) {
      case "sampling/createMessage":
        if (!((_a = this._clientCapabilities) === null || _a === undefined ? undefined : _a.sampling)) {
          throw new Error(`Client does not support sampling (required for ${method})`);
        }
        break;
      case "roots/list":
        if (!((_b = this._clientCapabilities) === null || _b === undefined ? undefined : _b.roots)) {
          throw new Error(`Client does not support listing roots (required for ${method})`);
        }
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(method) {
    switch (method) {
      case "notifications/message":
        if (!this._capabilities.logging) {
          throw new Error(`Server does not support logging (required for ${method})`);
        }
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources) {
          throw new Error(`Server does not support notifying about resources (required for ${method})`);
        }
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools) {
          throw new Error(`Server does not support notifying of tool list changes (required for ${method})`);
        }
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts) {
          throw new Error(`Server does not support notifying of prompt list changes (required for ${method})`);
        }
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(method) {
    switch (method) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling) {
          throw new Error(`Server does not support sampling (required for ${method})`);
        }
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging) {
          throw new Error(`Server does not support logging (required for ${method})`);
        }
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts) {
          throw new Error(`Server does not support prompts (required for ${method})`);
        }
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources) {
          throw new Error(`Server does not support resources (required for ${method})`);
        }
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) {
          throw new Error(`Server does not support tools (required for ${method})`);
        }
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  async _oninitialize(request) {
    const requestedVersion = request.params.protocolVersion;
    this._clientCapabilities = request.params.capabilities;
    this._clientVersion = request.params.clientInfo;
    return {
      protocolVersion: SUPPORTED_PROTOCOL_VERSIONS.includes(requestedVersion) ? requestedVersion : LATEST_PROTOCOL_VERSION,
      capabilities: this.getCapabilities(),
      serverInfo: this._serverInfo
    };
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({ method: "ping" }, EmptyResultSchema);
  }
  async createMessage(params, options) {
    return this.request({ method: "sampling/createMessage", params }, CreateMessageResultSchema, options);
  }
  async listRoots(params, options) {
    return this.request({ method: "roots/list", params }, ListRootsResultSchema, options);
  }
  async sendLoggingMessage(params) {
    return this.notification({ method: "notifications/message", params });
  }
  async sendResourceUpdated(params) {
    return this.notification({
      method: "notifications/resources/updated",
      params
    });
  }
  async sendResourceListChanged() {
    return this.notification({
      method: "notifications/resources/list_changed"
    });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
}

// node_modules/@modelcontextprotocol/sdk/dist/server/stdio.js
import process2 from "node:process";

// node_modules/@modelcontextprotocol/sdk/dist/shared/stdio.js
class ReadBuffer {
  append(chunk) {
    this._buffer = this._buffer ? Buffer.concat([this._buffer, chunk]) : chunk;
  }
  readMessage() {
    if (!this._buffer) {
      return null;
    }
    const index = this._buffer.indexOf(`
`);
    if (index === -1) {
      return null;
    }
    const line = this._buffer.toString("utf8", 0, index);
    this._buffer = this._buffer.subarray(index + 1);
    return deserializeMessage(line);
  }
  clear() {
    this._buffer = undefined;
  }
}
function deserializeMessage(line) {
  return JSONRPCMessageSchema.parse(JSON.parse(line));
}
function serializeMessage(message) {
  return JSON.stringify(message) + `
`;
}

// node_modules/@modelcontextprotocol/sdk/dist/server/stdio.js
class StdioServerTransport {
  constructor(_stdin = process2.stdin, _stdout = process2.stdout) {
    this._stdin = _stdin;
    this._stdout = _stdout;
    this._readBuffer = new ReadBuffer;
    this._started = false;
    this._ondata = (chunk) => {
      this._readBuffer.append(chunk);
      this.processReadBuffer();
    };
    this._onerror = (error) => {
      var _a;
      (_a = this.onerror) === null || _a === undefined || _a.call(this, error);
    };
  }
  async start() {
    if (this._started) {
      throw new Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
    }
    this._started = true;
    this._stdin.on("data", this._ondata);
    this._stdin.on("error", this._onerror);
  }
  processReadBuffer() {
    var _a, _b;
    while (true) {
      try {
        const message = this._readBuffer.readMessage();
        if (message === null) {
          break;
        }
        (_a = this.onmessage) === null || _a === undefined || _a.call(this, message);
      } catch (error) {
        (_b = this.onerror) === null || _b === undefined || _b.call(this, error);
      }
    }
  }
  async close() {
    var _a;
    this._stdin.off("data", this._ondata);
    this._stdin.off("error", this._onerror);
    this._readBuffer.clear();
    (_a = this.onclose) === null || _a === undefined || _a.call(this);
  }
  send(message) {
    return new Promise((resolve) => {
      const json = serializeMessage(message);
      if (this._stdout.write(json)) {
        resolve();
      } else {
        this._stdout.once("drain", resolve);
      }
    });
  }
}

// src/index.ts
var import_spawn_rx = __toESM(require_src2(), 1);
import os from "node:os";
import fs2 from "node:fs";
import path2 from "node:path";

// node_modules/minimatch/dist/esm/index.js
var import_brace_expansion = __toESM(require_brace_expansion(), 1);

// node_modules/minimatch/dist/esm/assert-valid-pattern.js
var MAX_PATTERN_LENGTH = 1024 * 64;
var assertValidPattern = (pattern) => {
  if (typeof pattern !== "string") {
    throw new TypeError("invalid pattern");
  }
  if (pattern.length > MAX_PATTERN_LENGTH) {
    throw new TypeError("pattern is too long");
  }
};

// node_modules/minimatch/dist/esm/brace-expressions.js
var posixClasses = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
  "[:alpha:]": ["\\p{L}\\p{Nl}", true],
  "[:ascii:]": ["\\x" + "00-\\x" + "7f", false],
  "[:blank:]": ["\\p{Zs}\\t", true],
  "[:cntrl:]": ["\\p{Cc}", true],
  "[:digit:]": ["\\p{Nd}", true],
  "[:graph:]": ["\\p{Z}\\p{C}", true, true],
  "[:lower:]": ["\\p{Ll}", true],
  "[:print:]": ["\\p{C}", true],
  "[:punct:]": ["\\p{P}", true],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
  "[:upper:]": ["\\p{Lu}", true],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
  "[:xdigit:]": ["A-Fa-f0-9", false]
};
var braceEscape = (s) => s.replace(/[[\]\\-]/g, "\\$&");
var regexpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var rangesToString = (ranges) => ranges.join("");
var parseClass = (glob, position) => {
  const pos = position;
  if (glob.charAt(pos) !== "[") {
    throw new Error("not in a brace expression");
  }
  const ranges = [];
  const negs = [];
  let i = pos + 1;
  let sawStart = false;
  let uflag = false;
  let escaping = false;
  let negate = false;
  let endPos = pos;
  let rangeStart = "";
  WHILE:
    while (i < glob.length) {
      const c = glob.charAt(i);
      if ((c === "!" || c === "^") && i === pos + 1) {
        negate = true;
        i++;
        continue;
      }
      if (c === "]" && sawStart && !escaping) {
        endPos = i + 1;
        break;
      }
      sawStart = true;
      if (c === "\\") {
        if (!escaping) {
          escaping = true;
          i++;
          continue;
        }
      }
      if (c === "[" && !escaping) {
        for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)) {
          if (glob.startsWith(cls, i)) {
            if (rangeStart) {
              return ["$.", false, glob.length - pos, true];
            }
            i += cls.length;
            if (neg)
              negs.push(unip);
            else
              ranges.push(unip);
            uflag = uflag || u;
            continue WHILE;
          }
        }
      }
      escaping = false;
      if (rangeStart) {
        if (c > rangeStart) {
          ranges.push(braceEscape(rangeStart) + "-" + braceEscape(c));
        } else if (c === rangeStart) {
          ranges.push(braceEscape(c));
        }
        rangeStart = "";
        i++;
        continue;
      }
      if (glob.startsWith("-]", i + 1)) {
        ranges.push(braceEscape(c + "-"));
        i += 2;
        continue;
      }
      if (glob.startsWith("-", i + 1)) {
        rangeStart = c;
        i += 2;
        continue;
      }
      ranges.push(braceEscape(c));
      i++;
    }
  if (endPos < i) {
    return ["", false, 0, false];
  }
  if (!ranges.length && !negs.length) {
    return ["$.", false, glob.length - pos, true];
  }
  if (negs.length === 0 && ranges.length === 1 && /^\\?.$/.test(ranges[0]) && !negate) {
    const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
    return [regexpEscape(r), false, endPos - pos, false];
  }
  const sranges = "[" + (negate ? "^" : "") + rangesToString(ranges) + "]";
  const snegs = "[" + (negate ? "" : "^") + rangesToString(negs) + "]";
  const comb = ranges.length && negs.length ? "(" + sranges + "|" + snegs + ")" : ranges.length ? sranges : snegs;
  return [comb, uflag, endPos - pos, true];
};

// node_modules/minimatch/dist/esm/unescape.js
var unescape = (s, { windowsPathsNoEscape = false } = {}) => {
  return windowsPathsNoEscape ? s.replace(/\[([^\/\\])\]/g, "$1") : s.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
};

// node_modules/minimatch/dist/esm/ast.js
var types = new Set(["!", "?", "+", "*", "@"]);
var isExtglobType = (c) => types.has(c);
var startNoTraversal = "(?!(?:^|/)\\.\\.?(?:$|/))";
var startNoDot = "(?!\\.)";
var addPatternStart = new Set(["[", "."]);
var justDots = new Set(["..", "."]);
var reSpecials = new Set("().*{}+?[]^$\\!");
var regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var qmark = "[^/]";
var star = qmark + "*?";
var starNoEmpty = qmark + "+?";

class AST {
  type;
  #root;
  #hasMagic;
  #uflag = false;
  #parts = [];
  #parent;
  #parentIndex;
  #negs;
  #filledNegs = false;
  #options;
  #toString;
  #emptyExt = false;
  constructor(type, parent, options = {}) {
    this.type = type;
    if (type)
      this.#hasMagic = true;
    this.#parent = parent;
    this.#root = this.#parent ? this.#parent.#root : this;
    this.#options = this.#root === this ? options : this.#root.#options;
    this.#negs = this.#root === this ? [] : this.#root.#negs;
    if (type === "!" && !this.#root.#filledNegs)
      this.#negs.push(this);
    this.#parentIndex = this.#parent ? this.#parent.#parts.length : 0;
  }
  get hasMagic() {
    if (this.#hasMagic !== undefined)
      return this.#hasMagic;
    for (const p of this.#parts) {
      if (typeof p === "string")
        continue;
      if (p.type || p.hasMagic)
        return this.#hasMagic = true;
    }
    return this.#hasMagic;
  }
  toString() {
    if (this.#toString !== undefined)
      return this.#toString;
    if (!this.type) {
      return this.#toString = this.#parts.map((p) => String(p)).join("");
    } else {
      return this.#toString = this.type + "(" + this.#parts.map((p) => String(p)).join("|") + ")";
    }
  }
  #fillNegs() {
    if (this !== this.#root)
      throw new Error("should only call on root");
    if (this.#filledNegs)
      return this;
    this.toString();
    this.#filledNegs = true;
    let n;
    while (n = this.#negs.pop()) {
      if (n.type !== "!")
        continue;
      let p = n;
      let pp = p.#parent;
      while (pp) {
        for (let i = p.#parentIndex + 1;!pp.type && i < pp.#parts.length; i++) {
          for (const part of n.#parts) {
            if (typeof part === "string") {
              throw new Error("string part in extglob AST??");
            }
            part.copyIn(pp.#parts[i]);
          }
        }
        p = pp;
        pp = p.#parent;
      }
    }
    return this;
  }
  push(...parts) {
    for (const p of parts) {
      if (p === "")
        continue;
      if (typeof p !== "string" && !(p instanceof AST && p.#parent === this)) {
        throw new Error("invalid part: " + p);
      }
      this.#parts.push(p);
    }
  }
  toJSON() {
    const ret = this.type === null ? this.#parts.slice().map((p) => typeof p === "string" ? p : p.toJSON()) : [this.type, ...this.#parts.map((p) => p.toJSON())];
    if (this.isStart() && !this.type)
      ret.unshift([]);
    if (this.isEnd() && (this === this.#root || this.#root.#filledNegs && this.#parent?.type === "!")) {
      ret.push({});
    }
    return ret;
  }
  isStart() {
    if (this.#root === this)
      return true;
    if (!this.#parent?.isStart())
      return false;
    if (this.#parentIndex === 0)
      return true;
    const p = this.#parent;
    for (let i = 0;i < this.#parentIndex; i++) {
      const pp = p.#parts[i];
      if (!(pp instanceof AST && pp.type === "!")) {
        return false;
      }
    }
    return true;
  }
  isEnd() {
    if (this.#root === this)
      return true;
    if (this.#parent?.type === "!")
      return true;
    if (!this.#parent?.isEnd())
      return false;
    if (!this.type)
      return this.#parent?.isEnd();
    const pl = this.#parent ? this.#parent.#parts.length : 0;
    return this.#parentIndex === pl - 1;
  }
  copyIn(part) {
    if (typeof part === "string")
      this.push(part);
    else
      this.push(part.clone(this));
  }
  clone(parent) {
    const c = new AST(this.type, parent);
    for (const p of this.#parts) {
      c.copyIn(p);
    }
    return c;
  }
  static #parseAST(str, ast, pos, opt) {
    let escaping = false;
    let inBrace = false;
    let braceStart = -1;
    let braceNeg = false;
    if (ast.type === null) {
      let i2 = pos;
      let acc2 = "";
      while (i2 < str.length) {
        const c = str.charAt(i2++);
        if (escaping || c === "\\") {
          escaping = !escaping;
          acc2 += c;
          continue;
        }
        if (inBrace) {
          if (i2 === braceStart + 1) {
            if (c === "^" || c === "!") {
              braceNeg = true;
            }
          } else if (c === "]" && !(i2 === braceStart + 2 && braceNeg)) {
            inBrace = false;
          }
          acc2 += c;
          continue;
        } else if (c === "[") {
          inBrace = true;
          braceStart = i2;
          braceNeg = false;
          acc2 += c;
          continue;
        }
        if (!opt.noext && isExtglobType(c) && str.charAt(i2) === "(") {
          ast.push(acc2);
          acc2 = "";
          const ext = new AST(c, ast);
          i2 = AST.#parseAST(str, ext, i2, opt);
          ast.push(ext);
          continue;
        }
        acc2 += c;
      }
      ast.push(acc2);
      return i2;
    }
    let i = pos + 1;
    let part = new AST(null, ast);
    const parts = [];
    let acc = "";
    while (i < str.length) {
      const c = str.charAt(i++);
      if (escaping || c === "\\") {
        escaping = !escaping;
        acc += c;
        continue;
      }
      if (inBrace) {
        if (i === braceStart + 1) {
          if (c === "^" || c === "!") {
            braceNeg = true;
          }
        } else if (c === "]" && !(i === braceStart + 2 && braceNeg)) {
          inBrace = false;
        }
        acc += c;
        continue;
      } else if (c === "[") {
        inBrace = true;
        braceStart = i;
        braceNeg = false;
        acc += c;
        continue;
      }
      if (isExtglobType(c) && str.charAt(i) === "(") {
        part.push(acc);
        acc = "";
        const ext = new AST(c, part);
        part.push(ext);
        i = AST.#parseAST(str, ext, i, opt);
        continue;
      }
      if (c === "|") {
        part.push(acc);
        acc = "";
        parts.push(part);
        part = new AST(null, ast);
        continue;
      }
      if (c === ")") {
        if (acc === "" && ast.#parts.length === 0) {
          ast.#emptyExt = true;
        }
        part.push(acc);
        acc = "";
        ast.push(...parts, part);
        return i;
      }
      acc += c;
    }
    ast.type = null;
    ast.#hasMagic = undefined;
    ast.#parts = [str.substring(pos - 1)];
    return i;
  }
  static fromGlob(pattern, options = {}) {
    const ast = new AST(null, undefined, options);
    AST.#parseAST(pattern, ast, 0, options);
    return ast;
  }
  toMMPattern() {
    if (this !== this.#root)
      return this.#root.toMMPattern();
    const glob = this.toString();
    const [re, body, hasMagic, uflag] = this.toRegExpSource();
    const anyMagic = hasMagic || this.#hasMagic || this.#options.nocase && !this.#options.nocaseMagicOnly && glob.toUpperCase() !== glob.toLowerCase();
    if (!anyMagic) {
      return body;
    }
    const flags = (this.#options.nocase ? "i" : "") + (uflag ? "u" : "");
    return Object.assign(new RegExp(`^${re}$`, flags), {
      _src: re,
      _glob: glob
    });
  }
  get options() {
    return this.#options;
  }
  toRegExpSource(allowDot) {
    const dot = allowDot ?? !!this.#options.dot;
    if (this.#root === this)
      this.#fillNegs();
    if (!this.type) {
      const noEmpty = this.isStart() && this.isEnd();
      const src = this.#parts.map((p) => {
        const [re, _, hasMagic, uflag] = typeof p === "string" ? AST.#parseGlob(p, this.#hasMagic, noEmpty) : p.toRegExpSource(allowDot);
        this.#hasMagic = this.#hasMagic || hasMagic;
        this.#uflag = this.#uflag || uflag;
        return re;
      }).join("");
      let start2 = "";
      if (this.isStart()) {
        if (typeof this.#parts[0] === "string") {
          const dotTravAllowed = this.#parts.length === 1 && justDots.has(this.#parts[0]);
          if (!dotTravAllowed) {
            const aps = addPatternStart;
            const needNoTrav = dot && aps.has(src.charAt(0)) || src.startsWith("\\.") && aps.has(src.charAt(2)) || src.startsWith("\\.\\.") && aps.has(src.charAt(4));
            const needNoDot = !dot && !allowDot && aps.has(src.charAt(0));
            start2 = needNoTrav ? startNoTraversal : needNoDot ? startNoDot : "";
          }
        }
      }
      let end = "";
      if (this.isEnd() && this.#root.#filledNegs && this.#parent?.type === "!") {
        end = "(?:$|\\/)";
      }
      const final2 = start2 + src + end;
      return [
        final2,
        unescape(src),
        this.#hasMagic = !!this.#hasMagic,
        this.#uflag
      ];
    }
    const repeated = this.type === "*" || this.type === "+";
    const start = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let body = this.#partsToRegExp(dot);
    if (this.isStart() && this.isEnd() && !body && this.type !== "!") {
      const s = this.toString();
      this.#parts = [s];
      this.type = null;
      this.#hasMagic = undefined;
      return [s, unescape(this.toString()), false, false];
    }
    let bodyDotAllowed = !repeated || allowDot || dot || !startNoDot ? "" : this.#partsToRegExp(true);
    if (bodyDotAllowed === body) {
      bodyDotAllowed = "";
    }
    if (bodyDotAllowed) {
      body = `(?:${body})(?:${bodyDotAllowed})*?`;
    }
    let final = "";
    if (this.type === "!" && this.#emptyExt) {
      final = (this.isStart() && !dot ? startNoDot : "") + starNoEmpty;
    } else {
      const close = this.type === "!" ? "))" + (this.isStart() && !dot && !allowDot ? startNoDot : "") + star + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && bodyDotAllowed ? ")" : this.type === "*" && bodyDotAllowed ? `)?` : `)${this.type}`;
      final = start + body + close;
    }
    return [
      final,
      unescape(body),
      this.#hasMagic = !!this.#hasMagic,
      this.#uflag
    ];
  }
  #partsToRegExp(dot) {
    return this.#parts.map((p) => {
      if (typeof p === "string") {
        throw new Error("string type in extglob ast??");
      }
      const [re, _, _hasMagic, uflag] = p.toRegExpSource(dot);
      this.#uflag = this.#uflag || uflag;
      return re;
    }).filter((p) => !(this.isStart() && this.isEnd()) || !!p).join("|");
  }
  static #parseGlob(glob, hasMagic, noEmpty = false) {
    let escaping = false;
    let re = "";
    let uflag = false;
    for (let i = 0;i < glob.length; i++) {
      const c = glob.charAt(i);
      if (escaping) {
        escaping = false;
        re += (reSpecials.has(c) ? "\\" : "") + c;
        continue;
      }
      if (c === "\\") {
        if (i === glob.length - 1) {
          re += "\\\\";
        } else {
          escaping = true;
        }
        continue;
      }
      if (c === "[") {
        const [src, needUflag, consumed, magic] = parseClass(glob, i);
        if (consumed) {
          re += src;
          uflag = uflag || needUflag;
          i += consumed - 1;
          hasMagic = hasMagic || magic;
          continue;
        }
      }
      if (c === "*") {
        if (noEmpty && glob === "*")
          re += starNoEmpty;
        else
          re += star;
        hasMagic = true;
        continue;
      }
      if (c === "?") {
        re += qmark;
        hasMagic = true;
        continue;
      }
      re += regExpEscape(c);
    }
    return [re, unescape(glob), !!hasMagic, uflag];
  }
}

// node_modules/minimatch/dist/esm/escape.js
var escape = (s, { windowsPathsNoEscape = false } = {}) => {
  return windowsPathsNoEscape ? s.replace(/[?*()[\]]/g, "[$&]") : s.replace(/[?*()[\]\\]/g, "\\$&");
};

// node_modules/minimatch/dist/esm/index.js
var minimatch = (p, pattern, options = {}) => {
  assertValidPattern(pattern);
  if (!options.nocomment && pattern.charAt(0) === "#") {
    return false;
  }
  return new Minimatch(pattern, options).match(p);
};
var starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
var starDotExtTest = (ext) => (f) => !f.startsWith(".") && f.endsWith(ext);
var starDotExtTestDot = (ext) => (f) => f.endsWith(ext);
var starDotExtTestNocase = (ext) => {
  ext = ext.toLowerCase();
  return (f) => !f.startsWith(".") && f.toLowerCase().endsWith(ext);
};
var starDotExtTestNocaseDot = (ext) => {
  ext = ext.toLowerCase();
  return (f) => f.toLowerCase().endsWith(ext);
};
var starDotStarRE = /^\*+\.\*+$/;
var starDotStarTest = (f) => !f.startsWith(".") && f.includes(".");
var starDotStarTestDot = (f) => f !== "." && f !== ".." && f.includes(".");
var dotStarRE = /^\.\*+$/;
var dotStarTest = (f) => f !== "." && f !== ".." && f.startsWith(".");
var starRE = /^\*+$/;
var starTest = (f) => f.length !== 0 && !f.startsWith(".");
var starTestDot = (f) => f.length !== 0 && f !== "." && f !== "..";
var qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
var qmarksTestNocase = ([$0, ext = ""]) => {
  const noext = qmarksTestNoExt([$0]);
  if (!ext)
    return noext;
  ext = ext.toLowerCase();
  return (f) => noext(f) && f.toLowerCase().endsWith(ext);
};
var qmarksTestNocaseDot = ([$0, ext = ""]) => {
  const noext = qmarksTestNoExtDot([$0]);
  if (!ext)
    return noext;
  ext = ext.toLowerCase();
  return (f) => noext(f) && f.toLowerCase().endsWith(ext);
};
var qmarksTestDot = ([$0, ext = ""]) => {
  const noext = qmarksTestNoExtDot([$0]);
  return !ext ? noext : (f) => noext(f) && f.endsWith(ext);
};
var qmarksTest = ([$0, ext = ""]) => {
  const noext = qmarksTestNoExt([$0]);
  return !ext ? noext : (f) => noext(f) && f.endsWith(ext);
};
var qmarksTestNoExt = ([$0]) => {
  const len = $0.length;
  return (f) => f.length === len && !f.startsWith(".");
};
var qmarksTestNoExtDot = ([$0]) => {
  const len = $0.length;
  return (f) => f.length === len && f !== "." && f !== "..";
};
var defaultPlatform = typeof process === "object" && process ? typeof process.env === "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
var path = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
};
var sep = defaultPlatform === "win32" ? path.win32.sep : path.posix.sep;
minimatch.sep = sep;
var GLOBSTAR = Symbol("globstar **");
minimatch.GLOBSTAR = GLOBSTAR;
var qmark2 = "[^/]";
var star2 = qmark2 + "*?";
var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
var filter = (pattern, options = {}) => (p) => minimatch(p, pattern, options);
minimatch.filter = filter;
var ext = (a, b = {}) => Object.assign({}, a, b);
var defaults = (def) => {
  if (!def || typeof def !== "object" || !Object.keys(def).length) {
    return minimatch;
  }
  const orig = minimatch;
  const m = (p, pattern, options = {}) => orig(p, pattern, ext(def, options));
  return Object.assign(m, {
    Minimatch: class Minimatch extends orig.Minimatch {
      constructor(pattern, options = {}) {
        super(pattern, ext(def, options));
      }
      static defaults(options) {
        return orig.defaults(ext(def, options)).Minimatch;
      }
    },
    AST: class AST2 extends orig.AST {
      constructor(type, parent, options = {}) {
        super(type, parent, ext(def, options));
      }
      static fromGlob(pattern, options = {}) {
        return orig.AST.fromGlob(pattern, ext(def, options));
      }
    },
    unescape: (s, options = {}) => orig.unescape(s, ext(def, options)),
    escape: (s, options = {}) => orig.escape(s, ext(def, options)),
    filter: (pattern, options = {}) => orig.filter(pattern, ext(def, options)),
    defaults: (options) => orig.defaults(ext(def, options)),
    makeRe: (pattern, options = {}) => orig.makeRe(pattern, ext(def, options)),
    braceExpand: (pattern, options = {}) => orig.braceExpand(pattern, ext(def, options)),
    match: (list, pattern, options = {}) => orig.match(list, pattern, ext(def, options)),
    sep: orig.sep,
    GLOBSTAR
  });
};
minimatch.defaults = defaults;
var braceExpand = (pattern, options = {}) => {
  assertValidPattern(pattern);
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    return [pattern];
  }
  return import_brace_expansion.default(pattern);
};
minimatch.braceExpand = braceExpand;
var makeRe = (pattern, options = {}) => new Minimatch(pattern, options).makeRe();
minimatch.makeRe = makeRe;
var match = (list, pattern, options = {}) => {
  const mm = new Minimatch(pattern, options);
  list = list.filter((f) => mm.match(f));
  if (mm.options.nonull && !list.length) {
    list.push(pattern);
  }
  return list;
};
minimatch.match = match;
var globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
var regExpEscape2 = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

class Minimatch {
  options;
  set;
  pattern;
  windowsPathsNoEscape;
  nonegate;
  negate;
  comment;
  empty;
  preserveMultipleSlashes;
  partial;
  globSet;
  globParts;
  nocase;
  isWindows;
  platform;
  windowsNoMagicRoot;
  regexp;
  constructor(pattern, options = {}) {
    assertValidPattern(pattern);
    options = options || {};
    this.options = options;
    this.pattern = pattern;
    this.platform = options.platform || defaultPlatform;
    this.isWindows = this.platform === "win32";
    this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
    if (this.windowsPathsNoEscape) {
      this.pattern = this.pattern.replace(/\\/g, "/");
    }
    this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
    this.regexp = null;
    this.negate = false;
    this.nonegate = !!options.nonegate;
    this.comment = false;
    this.empty = false;
    this.partial = !!options.partial;
    this.nocase = !!this.options.nocase;
    this.windowsNoMagicRoot = options.windowsNoMagicRoot !== undefined ? options.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
    this.globSet = [];
    this.globParts = [];
    this.set = [];
    this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1) {
      return true;
    }
    for (const pattern of this.set) {
      for (const part of pattern) {
        if (typeof part !== "string")
          return true;
      }
    }
    return false;
  }
  debug(..._) {}
  make() {
    const pattern = this.pattern;
    const options = this.options;
    if (!options.nocomment && pattern.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!pattern) {
      this.empty = true;
      return;
    }
    this.parseNegate();
    this.globSet = [...new Set(this.braceExpand())];
    if (options.debug) {
      this.debug = (...args) => console.error(...args);
    }
    this.debug(this.pattern, this.globSet);
    const rawGlobParts = this.globSet.map((s) => this.slashSplit(s));
    this.globParts = this.preprocess(rawGlobParts);
    this.debug(this.pattern, this.globParts);
    let set = this.globParts.map((s, _, __) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const isUNC = s[0] === "" && s[1] === "" && (s[2] === "?" || !globMagic.test(s[2])) && !globMagic.test(s[3]);
        const isDrive = /^[a-z]:/i.test(s[0]);
        if (isUNC) {
          return [...s.slice(0, 4), ...s.slice(4).map((ss) => this.parse(ss))];
        } else if (isDrive) {
          return [s[0], ...s.slice(1).map((ss) => this.parse(ss))];
        }
      }
      return s.map((ss) => this.parse(ss));
    });
    this.debug(this.pattern, set);
    this.set = set.filter((s) => s.indexOf(false) === -1);
    if (this.isWindows) {
      for (let i = 0;i < this.set.length; i++) {
        const p = this.set[i];
        if (p[0] === "" && p[1] === "" && this.globParts[i][2] === "?" && typeof p[3] === "string" && /^[a-z]:$/i.test(p[3])) {
          p[2] = "?";
        }
      }
    }
    this.debug(this.pattern, this.set);
  }
  preprocess(globParts) {
    if (this.options.noglobstar) {
      for (let i = 0;i < globParts.length; i++) {
        for (let j = 0;j < globParts[i].length; j++) {
          if (globParts[i][j] === "**") {
            globParts[i][j] = "*";
          }
        }
      }
    }
    const { optimizationLevel = 1 } = this.options;
    if (optimizationLevel >= 2) {
      globParts = this.firstPhasePreProcess(globParts);
      globParts = this.secondPhasePreProcess(globParts);
    } else if (optimizationLevel >= 1) {
      globParts = this.levelOneOptimize(globParts);
    } else {
      globParts = this.adjascentGlobstarOptimize(globParts);
    }
    return globParts;
  }
  adjascentGlobstarOptimize(globParts) {
    return globParts.map((parts) => {
      let gs = -1;
      while ((gs = parts.indexOf("**", gs + 1)) !== -1) {
        let i = gs;
        while (parts[i + 1] === "**") {
          i++;
        }
        if (i !== gs) {
          parts.splice(gs, i - gs);
        }
      }
      return parts;
    });
  }
  levelOneOptimize(globParts) {
    return globParts.map((parts) => {
      parts = parts.reduce((set, part) => {
        const prev = set[set.length - 1];
        if (part === "**" && prev === "**") {
          return set;
        }
        if (part === "..") {
          if (prev && prev !== ".." && prev !== "." && prev !== "**") {
            set.pop();
            return set;
          }
        }
        set.push(part);
        return set;
      }, []);
      return parts.length === 0 ? [""] : parts;
    });
  }
  levelTwoFileOptimize(parts) {
    if (!Array.isArray(parts)) {
      parts = this.slashSplit(parts);
    }
    let didSomething = false;
    do {
      didSomething = false;
      if (!this.preserveMultipleSlashes) {
        for (let i = 1;i < parts.length - 1; i++) {
          const p = parts[i];
          if (i === 1 && p === "" && parts[0] === "")
            continue;
          if (p === "." || p === "") {
            didSomething = true;
            parts.splice(i, 1);
            i--;
          }
        }
        if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
          didSomething = true;
          parts.pop();
        }
      }
      let dd = 0;
      while ((dd = parts.indexOf("..", dd + 1)) !== -1) {
        const p = parts[dd - 1];
        if (p && p !== "." && p !== ".." && p !== "**") {
          didSomething = true;
          parts.splice(dd - 1, 2);
          dd -= 2;
        }
      }
    } while (didSomething);
    return parts.length === 0 ? [""] : parts;
  }
  firstPhasePreProcess(globParts) {
    let didSomething = false;
    do {
      didSomething = false;
      for (let parts of globParts) {
        let gs = -1;
        while ((gs = parts.indexOf("**", gs + 1)) !== -1) {
          let gss = gs;
          while (parts[gss + 1] === "**") {
            gss++;
          }
          if (gss > gs) {
            parts.splice(gs + 1, gss - gs);
          }
          let next = parts[gs + 1];
          const p = parts[gs + 2];
          const p2 = parts[gs + 3];
          if (next !== "..")
            continue;
          if (!p || p === "." || p === ".." || !p2 || p2 === "." || p2 === "..") {
            continue;
          }
          didSomething = true;
          parts.splice(gs, 1);
          const other = parts.slice(0);
          other[gs] = "**";
          globParts.push(other);
          gs--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let i = 1;i < parts.length - 1; i++) {
            const p = parts[i];
            if (i === 1 && p === "" && parts[0] === "")
              continue;
            if (p === "." || p === "") {
              didSomething = true;
              parts.splice(i, 1);
              i--;
            }
          }
          if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
            didSomething = true;
            parts.pop();
          }
        }
        let dd = 0;
        while ((dd = parts.indexOf("..", dd + 1)) !== -1) {
          const p = parts[dd - 1];
          if (p && p !== "." && p !== ".." && p !== "**") {
            didSomething = true;
            const needDot = dd === 1 && parts[dd + 1] === "**";
            const splin = needDot ? ["."] : [];
            parts.splice(dd - 1, 2, ...splin);
            if (parts.length === 0)
              parts.push("");
            dd -= 2;
          }
        }
      }
    } while (didSomething);
    return globParts;
  }
  secondPhasePreProcess(globParts) {
    for (let i = 0;i < globParts.length - 1; i++) {
      for (let j = i + 1;j < globParts.length; j++) {
        const matched = this.partsMatch(globParts[i], globParts[j], !this.preserveMultipleSlashes);
        if (matched) {
          globParts[i] = [];
          globParts[j] = matched;
          break;
        }
      }
    }
    return globParts.filter((gs) => gs.length);
  }
  partsMatch(a, b, emptyGSMatch = false) {
    let ai = 0;
    let bi = 0;
    let result = [];
    let which = "";
    while (ai < a.length && bi < b.length) {
      if (a[ai] === b[bi]) {
        result.push(which === "b" ? b[bi] : a[ai]);
        ai++;
        bi++;
      } else if (emptyGSMatch && a[ai] === "**" && b[bi] === a[ai + 1]) {
        result.push(a[ai]);
        ai++;
      } else if (emptyGSMatch && b[bi] === "**" && a[ai] === b[bi + 1]) {
        result.push(b[bi]);
        bi++;
      } else if (a[ai] === "*" && b[bi] && (this.options.dot || !b[bi].startsWith(".")) && b[bi] !== "**") {
        if (which === "b")
          return false;
        which = "a";
        result.push(a[ai]);
        ai++;
        bi++;
      } else if (b[bi] === "*" && a[ai] && (this.options.dot || !a[ai].startsWith(".")) && a[ai] !== "**") {
        if (which === "a")
          return false;
        which = "b";
        result.push(b[bi]);
        ai++;
        bi++;
      } else {
        return false;
      }
    }
    return a.length === b.length && result;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const pattern = this.pattern;
    let negate = false;
    let negateOffset = 0;
    for (let i = 0;i < pattern.length && pattern.charAt(i) === "!"; i++) {
      negate = !negate;
      negateOffset++;
    }
    if (negateOffset)
      this.pattern = pattern.slice(negateOffset);
    this.negate = negate;
  }
  matchOne(file, pattern, partial = false) {
    const options = this.options;
    if (this.isWindows) {
      const fileDrive = typeof file[0] === "string" && /^[a-z]:$/i.test(file[0]);
      const fileUNC = !fileDrive && file[0] === "" && file[1] === "" && file[2] === "?" && /^[a-z]:$/i.test(file[3]);
      const patternDrive = typeof pattern[0] === "string" && /^[a-z]:$/i.test(pattern[0]);
      const patternUNC = !patternDrive && pattern[0] === "" && pattern[1] === "" && pattern[2] === "?" && typeof pattern[3] === "string" && /^[a-z]:$/i.test(pattern[3]);
      const fdi = fileUNC ? 3 : fileDrive ? 0 : undefined;
      const pdi = patternUNC ? 3 : patternDrive ? 0 : undefined;
      if (typeof fdi === "number" && typeof pdi === "number") {
        const [fd, pd] = [file[fdi], pattern[pdi]];
        if (fd.toLowerCase() === pd.toLowerCase()) {
          pattern[pdi] = fd;
          if (pdi > fdi) {
            pattern = pattern.slice(pdi);
          } else if (fdi > pdi) {
            file = file.slice(fdi);
          }
        }
      }
    }
    const { optimizationLevel = 1 } = this.options;
    if (optimizationLevel >= 2) {
      file = this.levelTwoFileOptimize(file);
    }
    this.debug("matchOne", this, { file, pattern });
    this.debug("matchOne", file.length, pattern.length);
    for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length;fi < fl && pi < pl; fi++, pi++) {
      this.debug("matchOne loop");
      var p = pattern[pi];
      var f = file[fi];
      this.debug(pattern, p, f);
      if (p === false) {
        return false;
      }
      if (p === GLOBSTAR) {
        this.debug("GLOBSTAR", [pattern, p, f]);
        var fr = fi;
        var pr = pi + 1;
        if (pr === pl) {
          this.debug("** at the end");
          for (;fi < fl; fi++) {
            if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
              return false;
          }
          return true;
        }
        while (fr < fl) {
          var swallowee = file[fr];
          this.debug(`
globstar while`, file, fr, pattern, pr, swallowee);
          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
            this.debug("globstar found match!", fr, fl, swallowee);
            return true;
          } else {
            if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
              this.debug("dot detected!", file, fr, pattern, pr);
              break;
            }
            this.debug("globstar swallow a segment, and continue");
            fr++;
          }
        }
        if (partial) {
          this.debug(`
>>> no match, partial?`, file, fr, pattern, pr);
          if (fr === fl) {
            return true;
          }
        }
        return false;
      }
      let hit;
      if (typeof p === "string") {
        hit = f === p;
        this.debug("string match", p, f, hit);
      } else {
        hit = p.test(f);
        this.debug("pattern match", p, f, hit);
      }
      if (!hit)
        return false;
    }
    if (fi === fl && pi === pl) {
      return true;
    } else if (fi === fl) {
      return partial;
    } else if (pi === pl) {
      return fi === fl - 1 && file[fi] === "";
    } else {
      throw new Error("wtf?");
    }
  }
  braceExpand() {
    return braceExpand(this.pattern, this.options);
  }
  parse(pattern) {
    assertValidPattern(pattern);
    const options = this.options;
    if (pattern === "**")
      return GLOBSTAR;
    if (pattern === "")
      return "";
    let m;
    let fastTest = null;
    if (m = pattern.match(starRE)) {
      fastTest = options.dot ? starTestDot : starTest;
    } else if (m = pattern.match(starDotExtRE)) {
      fastTest = (options.nocase ? options.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options.dot ? starDotExtTestDot : starDotExtTest)(m[1]);
    } else if (m = pattern.match(qmarksRE)) {
      fastTest = (options.nocase ? options.dot ? qmarksTestNocaseDot : qmarksTestNocase : options.dot ? qmarksTestDot : qmarksTest)(m);
    } else if (m = pattern.match(starDotStarRE)) {
      fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
    } else if (m = pattern.match(dotStarRE)) {
      fastTest = dotStarTest;
    }
    const re = AST.fromGlob(pattern, this.options).toMMPattern();
    if (fastTest && typeof re === "object") {
      Reflect.defineProperty(re, "test", { value: fastTest });
    }
    return re;
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    const set = this.set;
    if (!set.length) {
      this.regexp = false;
      return this.regexp;
    }
    const options = this.options;
    const twoStar = options.noglobstar ? star2 : options.dot ? twoStarDot : twoStarNoDot;
    const flags = new Set(options.nocase ? ["i"] : []);
    let re = set.map((pattern) => {
      const pp = pattern.map((p) => {
        if (p instanceof RegExp) {
          for (const f of p.flags.split(""))
            flags.add(f);
        }
        return typeof p === "string" ? regExpEscape2(p) : p === GLOBSTAR ? GLOBSTAR : p._src;
      });
      pp.forEach((p, i) => {
        const next = pp[i + 1];
        const prev = pp[i - 1];
        if (p !== GLOBSTAR || prev === GLOBSTAR) {
          return;
        }
        if (prev === undefined) {
          if (next !== undefined && next !== GLOBSTAR) {
            pp[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + next;
          } else {
            pp[i] = twoStar;
          }
        } else if (next === undefined) {
          pp[i - 1] = prev + "(?:\\/|" + twoStar + ")?";
        } else if (next !== GLOBSTAR) {
          pp[i - 1] = prev + "(?:\\/|\\/" + twoStar + "\\/)" + next;
          pp[i + 1] = GLOBSTAR;
        }
      });
      return pp.filter((p) => p !== GLOBSTAR).join("/");
    }).join("|");
    const [open, close] = set.length > 1 ? ["(?:", ")"] : ["", ""];
    re = "^" + open + re + close + "$";
    if (this.negate)
      re = "^(?!" + re + ").+$";
    try {
      this.regexp = new RegExp(re, [...flags].join(""));
    } catch (ex) {
      this.regexp = false;
    }
    return this.regexp;
  }
  slashSplit(p) {
    if (this.preserveMultipleSlashes) {
      return p.split("/");
    } else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
      return ["", ...p.split(/\/+/)];
    } else {
      return p.split(/\/+/);
    }
  }
  match(f, partial = this.partial) {
    this.debug("match", f, this.pattern);
    if (this.comment) {
      return false;
    }
    if (this.empty) {
      return f === "";
    }
    if (f === "/" && partial) {
      return true;
    }
    const options = this.options;
    if (this.isWindows) {
      f = f.split("\\").join("/");
    }
    const ff = this.slashSplit(f);
    this.debug(this.pattern, "split", ff);
    const set = this.set;
    this.debug(this.pattern, "set", set);
    let filename = ff[ff.length - 1];
    if (!filename) {
      for (let i = ff.length - 2;!filename && i >= 0; i--) {
        filename = ff[i];
      }
    }
    for (let i = 0;i < set.length; i++) {
      const pattern = set[i];
      let file = ff;
      if (options.matchBase && pattern.length === 1) {
        file = [filename];
      }
      const hit = this.matchOne(file, pattern, partial);
      if (hit) {
        if (options.flipNegate) {
          return true;
        }
        return !this.negate;
      }
    }
    if (options.flipNegate) {
      return false;
    }
    return this.negate;
  }
  static defaults(def) {
    return minimatch.defaults(def).Minimatch;
  }
}
minimatch.AST = AST;
minimatch.Minimatch = Minimatch;
minimatch.escape = escape;
minimatch.unescape = unescape;

// node_modules/glob/dist/esm/glob.js
import { fileURLToPath as fileURLToPath2 } from "node:url";

// node_modules/lru-cache/dist/esm/index.js
var perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
var warned = new Set;
var PROCESS = typeof process === "object" && !!process ? process : {};
var emitWarning = (msg, type, code, fn) => {
  typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
};
var AC = globalThis.AbortController;
var AS = globalThis.AbortSignal;
if (typeof AC === "undefined") {
  AS = class AbortSignal {
    onabort;
    _onabort = [];
    reason;
    aborted = false;
    addEventListener(_, fn) {
      this._onabort.push(fn);
    }
  };
  AC = class AbortController2 {
    constructor() {
      warnACPolyfill();
    }
    signal = new AS;
    abort(reason) {
      if (this.signal.aborted)
        return;
      this.signal.reason = reason;
      this.signal.aborted = true;
      for (const fn of this.signal._onabort) {
        fn(reason);
      }
      this.signal.onabort?.(reason);
    }
  };
  let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
  const warnACPolyfill = () => {
    if (!printACPolyfillWarning)
      return;
    printACPolyfillWarning = false;
    emitWarning("AbortController is not defined. If using lru-cache in " + "node 14, load an AbortController polyfill from the " + "`node-abort-controller` package. A minimal polyfill is " + "provided for use by LRUCache.fetch(), but it should not be " + "relied upon in other contexts (eg, passing it to other APIs that " + "use AbortController/AbortSignal might have undesirable effects). " + "You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
  };
}
var shouldWarn = (code) => !warned.has(code);
var TYPE = Symbol("type");
var isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
var getUintArray = (max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;

class ZeroArray extends Array {
  constructor(size) {
    super(size);
    this.fill(0);
  }
}

class Stack {
  heap;
  length;
  static #constructing = false;
  static create(max) {
    const HeapCls = getUintArray(max);
    if (!HeapCls)
      return [];
    Stack.#constructing = true;
    const s = new Stack(max, HeapCls);
    Stack.#constructing = false;
    return s;
  }
  constructor(max, HeapCls) {
    if (!Stack.#constructing) {
      throw new TypeError("instantiate Stack using Stack.create(n)");
    }
    this.heap = new HeapCls(max);
    this.length = 0;
  }
  push(n) {
    this.heap[this.length++] = n;
  }
  pop() {
    return this.heap[--this.length];
  }
}

class LRUCache {
  #max;
  #maxSize;
  #dispose;
  #disposeAfter;
  #fetchMethod;
  #memoMethod;
  ttl;
  ttlResolution;
  ttlAutopurge;
  updateAgeOnGet;
  updateAgeOnHas;
  allowStale;
  noDisposeOnSet;
  noUpdateTTL;
  maxEntrySize;
  sizeCalculation;
  noDeleteOnFetchRejection;
  noDeleteOnStaleGet;
  allowStaleOnFetchAbort;
  allowStaleOnFetchRejection;
  ignoreFetchAbort;
  #size;
  #calculatedSize;
  #keyMap;
  #keyList;
  #valList;
  #next;
  #prev;
  #head;
  #tail;
  #free;
  #disposed;
  #sizes;
  #starts;
  #ttls;
  #hasDispose;
  #hasFetchMethod;
  #hasDisposeAfter;
  static unsafeExposeInternals(c) {
    return {
      starts: c.#starts,
      ttls: c.#ttls,
      sizes: c.#sizes,
      keyMap: c.#keyMap,
      keyList: c.#keyList,
      valList: c.#valList,
      next: c.#next,
      prev: c.#prev,
      get head() {
        return c.#head;
      },
      get tail() {
        return c.#tail;
      },
      free: c.#free,
      isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
      backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
      moveToTail: (index) => c.#moveToTail(index),
      indexes: (options) => c.#indexes(options),
      rindexes: (options) => c.#rindexes(options),
      isStale: (index) => c.#isStale(index)
    };
  }
  get max() {
    return this.#max;
  }
  get maxSize() {
    return this.#maxSize;
  }
  get calculatedSize() {
    return this.#calculatedSize;
  }
  get size() {
    return this.#size;
  }
  get fetchMethod() {
    return this.#fetchMethod;
  }
  get memoMethod() {
    return this.#memoMethod;
  }
  get dispose() {
    return this.#dispose;
  }
  get disposeAfter() {
    return this.#disposeAfter;
  }
  constructor(options) {
    const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
    if (max !== 0 && !isPosInt(max)) {
      throw new TypeError("max option must be a nonnegative integer");
    }
    const UintArray = max ? getUintArray(max) : Array;
    if (!UintArray) {
      throw new Error("invalid max value: " + max);
    }
    this.#max = max;
    this.#maxSize = maxSize;
    this.maxEntrySize = maxEntrySize || this.#maxSize;
    this.sizeCalculation = sizeCalculation;
    if (this.sizeCalculation) {
      if (!this.#maxSize && !this.maxEntrySize) {
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      }
      if (typeof this.sizeCalculation !== "function") {
        throw new TypeError("sizeCalculation set to non-function");
      }
    }
    if (memoMethod !== undefined && typeof memoMethod !== "function") {
      throw new TypeError("memoMethod must be a function if defined");
    }
    this.#memoMethod = memoMethod;
    if (fetchMethod !== undefined && typeof fetchMethod !== "function") {
      throw new TypeError("fetchMethod must be a function if specified");
    }
    this.#fetchMethod = fetchMethod;
    this.#hasFetchMethod = !!fetchMethod;
    this.#keyMap = new Map;
    this.#keyList = new Array(max).fill(undefined);
    this.#valList = new Array(max).fill(undefined);
    this.#next = new UintArray(max);
    this.#prev = new UintArray(max);
    this.#head = 0;
    this.#tail = 0;
    this.#free = Stack.create(max);
    this.#size = 0;
    this.#calculatedSize = 0;
    if (typeof dispose === "function") {
      this.#dispose = dispose;
    }
    if (typeof disposeAfter === "function") {
      this.#disposeAfter = disposeAfter;
      this.#disposed = [];
    } else {
      this.#disposeAfter = undefined;
      this.#disposed = undefined;
    }
    this.#hasDispose = !!this.#dispose;
    this.#hasDisposeAfter = !!this.#disposeAfter;
    this.noDisposeOnSet = !!noDisposeOnSet;
    this.noUpdateTTL = !!noUpdateTTL;
    this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
    this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
    this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
    this.ignoreFetchAbort = !!ignoreFetchAbort;
    if (this.maxEntrySize !== 0) {
      if (this.#maxSize !== 0) {
        if (!isPosInt(this.#maxSize)) {
          throw new TypeError("maxSize must be a positive integer if specified");
        }
      }
      if (!isPosInt(this.maxEntrySize)) {
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      }
      this.#initializeSizeTracking();
    }
    this.allowStale = !!allowStale;
    this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
    this.updateAgeOnGet = !!updateAgeOnGet;
    this.updateAgeOnHas = !!updateAgeOnHas;
    this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
    this.ttlAutopurge = !!ttlAutopurge;
    this.ttl = ttl || 0;
    if (this.ttl) {
      if (!isPosInt(this.ttl)) {
        throw new TypeError("ttl must be a positive integer if specified");
      }
      this.#initializeTTLTracking();
    }
    if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    }
    if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
      const code = "LRU_CACHE_UNBOUNDED";
      if (shouldWarn(code)) {
        warned.add(code);
        const msg = "TTL caching without ttlAutopurge, max, or maxSize can " + "result in unbounded memory consumption.";
        emitWarning(msg, "UnboundedCacheWarning", code, LRUCache);
      }
    }
  }
  getRemainingTTL(key) {
    return this.#keyMap.has(key) ? Infinity : 0;
  }
  #initializeTTLTracking() {
    const ttls = new ZeroArray(this.#max);
    const starts = new ZeroArray(this.#max);
    this.#ttls = ttls;
    this.#starts = starts;
    this.#setItemTTL = (index, ttl, start = perf.now()) => {
      starts[index] = ttl !== 0 ? start : 0;
      ttls[index] = ttl;
      if (ttl !== 0 && this.ttlAutopurge) {
        const t = setTimeout(() => {
          if (this.#isStale(index)) {
            this.#delete(this.#keyList[index], "expire");
          }
        }, ttl + 1);
        if (t.unref) {
          t.unref();
        }
      }
    };
    this.#updateItemAge = (index) => {
      starts[index] = ttls[index] !== 0 ? perf.now() : 0;
    };
    this.#statusTTL = (status, index) => {
      if (ttls[index]) {
        const ttl = ttls[index];
        const start = starts[index];
        if (!ttl || !start)
          return;
        status.ttl = ttl;
        status.start = start;
        status.now = cachedNow || getNow();
        const age = status.now - start;
        status.remainingTTL = ttl - age;
      }
    };
    let cachedNow = 0;
    const getNow = () => {
      const n = perf.now();
      if (this.ttlResolution > 0) {
        cachedNow = n;
        const t = setTimeout(() => cachedNow = 0, this.ttlResolution);
        if (t.unref) {
          t.unref();
        }
      }
      return n;
    };
    this.getRemainingTTL = (key) => {
      const index = this.#keyMap.get(key);
      if (index === undefined) {
        return 0;
      }
      const ttl = ttls[index];
      const start = starts[index];
      if (!ttl || !start) {
        return Infinity;
      }
      const age = (cachedNow || getNow()) - start;
      return ttl - age;
    };
    this.#isStale = (index) => {
      const s = starts[index];
      const t = ttls[index];
      return !!t && !!s && (cachedNow || getNow()) - s > t;
    };
  }
  #updateItemAge = () => {};
  #statusTTL = () => {};
  #setItemTTL = () => {};
  #isStale = () => false;
  #initializeSizeTracking() {
    const sizes = new ZeroArray(this.#max);
    this.#calculatedSize = 0;
    this.#sizes = sizes;
    this.#removeItemSize = (index) => {
      this.#calculatedSize -= sizes[index];
      sizes[index] = 0;
    };
    this.#requireSize = (k, v, size, sizeCalculation) => {
      if (this.#isBackgroundFetch(v)) {
        return 0;
      }
      if (!isPosInt(size)) {
        if (sizeCalculation) {
          if (typeof sizeCalculation !== "function") {
            throw new TypeError("sizeCalculation must be a function");
          }
          size = sizeCalculation(v, k);
          if (!isPosInt(size)) {
            throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          }
        } else {
          throw new TypeError("invalid size value (must be positive integer). " + "When maxSize or maxEntrySize is used, sizeCalculation " + "or size must be set.");
        }
      }
      return size;
    };
    this.#addItemSize = (index, size, status) => {
      sizes[index] = size;
      if (this.#maxSize) {
        const maxSize = this.#maxSize - sizes[index];
        while (this.#calculatedSize > maxSize) {
          this.#evict(true);
        }
      }
      this.#calculatedSize += sizes[index];
      if (status) {
        status.entrySize = size;
        status.totalCalculatedSize = this.#calculatedSize;
      }
    };
  }
  #removeItemSize = (_i) => {};
  #addItemSize = (_i, _s, _st) => {};
  #requireSize = (_k, _v, size, sizeCalculation) => {
    if (size || sizeCalculation) {
      throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
    }
    return 0;
  };
  *#indexes({ allowStale = this.allowStale } = {}) {
    if (this.#size) {
      for (let i = this.#tail;; ) {
        if (!this.#isValidIndex(i)) {
          break;
        }
        if (allowStale || !this.#isStale(i)) {
          yield i;
        }
        if (i === this.#head) {
          break;
        } else {
          i = this.#prev[i];
        }
      }
    }
  }
  *#rindexes({ allowStale = this.allowStale } = {}) {
    if (this.#size) {
      for (let i = this.#head;; ) {
        if (!this.#isValidIndex(i)) {
          break;
        }
        if (allowStale || !this.#isStale(i)) {
          yield i;
        }
        if (i === this.#tail) {
          break;
        } else {
          i = this.#next[i];
        }
      }
    }
  }
  #isValidIndex(index) {
    return index !== undefined && this.#keyMap.get(this.#keyList[index]) === index;
  }
  *entries() {
    for (const i of this.#indexes()) {
      if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
        yield [this.#keyList[i], this.#valList[i]];
      }
    }
  }
  *rentries() {
    for (const i of this.#rindexes()) {
      if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
        yield [this.#keyList[i], this.#valList[i]];
      }
    }
  }
  *keys() {
    for (const i of this.#indexes()) {
      const k = this.#keyList[i];
      if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
        yield k;
      }
    }
  }
  *rkeys() {
    for (const i of this.#rindexes()) {
      const k = this.#keyList[i];
      if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
        yield k;
      }
    }
  }
  *values() {
    for (const i of this.#indexes()) {
      const v = this.#valList[i];
      if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
        yield this.#valList[i];
      }
    }
  }
  *rvalues() {
    for (const i of this.#rindexes()) {
      const v = this.#valList[i];
      if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
        yield this.#valList[i];
      }
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  [Symbol.toStringTag] = "LRUCache";
  find(fn, getOptions = {}) {
    for (const i of this.#indexes()) {
      const v = this.#valList[i];
      const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === undefined)
        continue;
      if (fn(value, this.#keyList[i], this)) {
        return this.get(this.#keyList[i], getOptions);
      }
    }
  }
  forEach(fn, thisp = this) {
    for (const i of this.#indexes()) {
      const v = this.#valList[i];
      const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === undefined)
        continue;
      fn.call(thisp, value, this.#keyList[i], this);
    }
  }
  rforEach(fn, thisp = this) {
    for (const i of this.#rindexes()) {
      const v = this.#valList[i];
      const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === undefined)
        continue;
      fn.call(thisp, value, this.#keyList[i], this);
    }
  }
  purgeStale() {
    let deleted = false;
    for (const i of this.#rindexes({ allowStale: true })) {
      if (this.#isStale(i)) {
        this.#delete(this.#keyList[i], "expire");
        deleted = true;
      }
    }
    return deleted;
  }
  info(key) {
    const i = this.#keyMap.get(key);
    if (i === undefined)
      return;
    const v = this.#valList[i];
    const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    if (value === undefined)
      return;
    const entry = { value };
    if (this.#ttls && this.#starts) {
      const ttl = this.#ttls[i];
      const start = this.#starts[i];
      if (ttl && start) {
        const remain = ttl - (perf.now() - start);
        entry.ttl = remain;
        entry.start = Date.now();
      }
    }
    if (this.#sizes) {
      entry.size = this.#sizes[i];
    }
    return entry;
  }
  dump() {
    const arr = [];
    for (const i of this.#indexes({ allowStale: true })) {
      const key = this.#keyList[i];
      const v = this.#valList[i];
      const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === undefined || key === undefined)
        continue;
      const entry = { value };
      if (this.#ttls && this.#starts) {
        entry.ttl = this.#ttls[i];
        const age = perf.now() - this.#starts[i];
        entry.start = Math.floor(Date.now() - age);
      }
      if (this.#sizes) {
        entry.size = this.#sizes[i];
      }
      arr.unshift([key, entry]);
    }
    return arr;
  }
  load(arr) {
    this.clear();
    for (const [key, entry] of arr) {
      if (entry.start) {
        const age = Date.now() - entry.start;
        entry.start = perf.now() - age;
      }
      this.set(key, entry.value, entry);
    }
  }
  set(k, v, setOptions = {}) {
    if (v === undefined) {
      this.delete(k);
      return this;
    }
    const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
    let { noUpdateTTL = this.noUpdateTTL } = setOptions;
    const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
    if (this.maxEntrySize && size > this.maxEntrySize) {
      if (status) {
        status.set = "miss";
        status.maxEntrySizeExceeded = true;
      }
      this.#delete(k, "set");
      return this;
    }
    let index = this.#size === 0 ? undefined : this.#keyMap.get(k);
    if (index === undefined) {
      index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
      this.#keyList[index] = k;
      this.#valList[index] = v;
      this.#keyMap.set(k, index);
      this.#next[this.#tail] = index;
      this.#prev[index] = this.#tail;
      this.#tail = index;
      this.#size++;
      this.#addItemSize(index, size, status);
      if (status)
        status.set = "add";
      noUpdateTTL = false;
    } else {
      this.#moveToTail(index);
      const oldVal = this.#valList[index];
      if (v !== oldVal) {
        if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
          oldVal.__abortController.abort(new Error("replaced"));
          const { __staleWhileFetching: s } = oldVal;
          if (s !== undefined && !noDisposeOnSet) {
            if (this.#hasDispose) {
              this.#dispose?.(s, k, "set");
            }
            if (this.#hasDisposeAfter) {
              this.#disposed?.push([s, k, "set"]);
            }
          }
        } else if (!noDisposeOnSet) {
          if (this.#hasDispose) {
            this.#dispose?.(oldVal, k, "set");
          }
          if (this.#hasDisposeAfter) {
            this.#disposed?.push([oldVal, k, "set"]);
          }
        }
        this.#removeItemSize(index);
        this.#addItemSize(index, size, status);
        this.#valList[index] = v;
        if (status) {
          status.set = "replace";
          const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
          if (oldValue !== undefined)
            status.oldValue = oldValue;
        }
      } else if (status) {
        status.set = "update";
      }
    }
    if (ttl !== 0 && !this.#ttls) {
      this.#initializeTTLTracking();
    }
    if (this.#ttls) {
      if (!noUpdateTTL) {
        this.#setItemTTL(index, ttl, start);
      }
      if (status)
        this.#statusTTL(status, index);
    }
    if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
      const dt = this.#disposed;
      let task;
      while (task = dt?.shift()) {
        this.#disposeAfter?.(...task);
      }
    }
    return this;
  }
  pop() {
    try {
      while (this.#size) {
        const val = this.#valList[this.#head];
        this.#evict(true);
        if (this.#isBackgroundFetch(val)) {
          if (val.__staleWhileFetching) {
            return val.__staleWhileFetching;
          }
        } else if (val !== undefined) {
          return val;
        }
      }
    } finally {
      if (this.#hasDisposeAfter && this.#disposed) {
        const dt = this.#disposed;
        let task;
        while (task = dt?.shift()) {
          this.#disposeAfter?.(...task);
        }
      }
    }
  }
  #evict(free) {
    const head = this.#head;
    const k = this.#keyList[head];
    const v = this.#valList[head];
    if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
      v.__abortController.abort(new Error("evicted"));
    } else if (this.#hasDispose || this.#hasDisposeAfter) {
      if (this.#hasDispose) {
        this.#dispose?.(v, k, "evict");
      }
      if (this.#hasDisposeAfter) {
        this.#disposed?.push([v, k, "evict"]);
      }
    }
    this.#removeItemSize(head);
    if (free) {
      this.#keyList[head] = undefined;
      this.#valList[head] = undefined;
      this.#free.push(head);
    }
    if (this.#size === 1) {
      this.#head = this.#tail = 0;
      this.#free.length = 0;
    } else {
      this.#head = this.#next[head];
    }
    this.#keyMap.delete(k);
    this.#size--;
    return head;
  }
  has(k, hasOptions = {}) {
    const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
    const index = this.#keyMap.get(k);
    if (index !== undefined) {
      const v = this.#valList[index];
      if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === undefined) {
        return false;
      }
      if (!this.#isStale(index)) {
        if (updateAgeOnHas) {
          this.#updateItemAge(index);
        }
        if (status) {
          status.has = "hit";
          this.#statusTTL(status, index);
        }
        return true;
      } else if (status) {
        status.has = "stale";
        this.#statusTTL(status, index);
      }
    } else if (status) {
      status.has = "miss";
    }
    return false;
  }
  peek(k, peekOptions = {}) {
    const { allowStale = this.allowStale } = peekOptions;
    const index = this.#keyMap.get(k);
    if (index === undefined || !allowStale && this.#isStale(index)) {
      return;
    }
    const v = this.#valList[index];
    return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
  }
  #backgroundFetch(k, index, options, context) {
    const v = index === undefined ? undefined : this.#valList[index];
    if (this.#isBackgroundFetch(v)) {
      return v;
    }
    const ac = new AC;
    const { signal } = options;
    signal?.addEventListener("abort", () => ac.abort(signal.reason), {
      signal: ac.signal
    });
    const fetchOpts = {
      signal: ac.signal,
      options,
      context
    };
    const cb = (v2, updateCache = false) => {
      const { aborted } = ac.signal;
      const ignoreAbort = options.ignoreFetchAbort && v2 !== undefined;
      if (options.status) {
        if (aborted && !updateCache) {
          options.status.fetchAborted = true;
          options.status.fetchError = ac.signal.reason;
          if (ignoreAbort)
            options.status.fetchAbortIgnored = true;
        } else {
          options.status.fetchResolved = true;
        }
      }
      if (aborted && !ignoreAbort && !updateCache) {
        return fetchFail(ac.signal.reason);
      }
      const bf2 = p;
      if (this.#valList[index] === p) {
        if (v2 === undefined) {
          if (bf2.__staleWhileFetching) {
            this.#valList[index] = bf2.__staleWhileFetching;
          } else {
            this.#delete(k, "fetch");
          }
        } else {
          if (options.status)
            options.status.fetchUpdated = true;
          this.set(k, v2, fetchOpts.options);
        }
      }
      return v2;
    };
    const eb = (er) => {
      if (options.status) {
        options.status.fetchRejected = true;
        options.status.fetchError = er;
      }
      return fetchFail(er);
    };
    const fetchFail = (er) => {
      const { aborted } = ac.signal;
      const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
      const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
      const noDelete = allowStale || options.noDeleteOnFetchRejection;
      const bf2 = p;
      if (this.#valList[index] === p) {
        const del = !noDelete || bf2.__staleWhileFetching === undefined;
        if (del) {
          this.#delete(k, "fetch");
        } else if (!allowStaleAborted) {
          this.#valList[index] = bf2.__staleWhileFetching;
        }
      }
      if (allowStale) {
        if (options.status && bf2.__staleWhileFetching !== undefined) {
          options.status.returnedStale = true;
        }
        return bf2.__staleWhileFetching;
      } else if (bf2.__returned === bf2) {
        throw er;
      }
    };
    const pcall = (res, rej) => {
      const fmp = this.#fetchMethod?.(k, v, fetchOpts);
      if (fmp && fmp instanceof Promise) {
        fmp.then((v2) => res(v2 === undefined ? undefined : v2), rej);
      }
      ac.signal.addEventListener("abort", () => {
        if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
          res(undefined);
          if (options.allowStaleOnFetchAbort) {
            res = (v2) => cb(v2, true);
          }
        }
      });
    };
    if (options.status)
      options.status.fetchDispatched = true;
    const p = new Promise(pcall).then(cb, eb);
    const bf = Object.assign(p, {
      __abortController: ac,
      __staleWhileFetching: v,
      __returned: undefined
    });
    if (index === undefined) {
      this.set(k, bf, { ...fetchOpts.options, status: undefined });
      index = this.#keyMap.get(k);
    } else {
      this.#valList[index] = bf;
    }
    return bf;
  }
  #isBackgroundFetch(p) {
    if (!this.#hasFetchMethod)
      return false;
    const b = p;
    return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof AC;
  }
  async fetch(k, fetchOptions = {}) {
    const {
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      noDeleteOnStaleGet = this.noDeleteOnStaleGet,
      ttl = this.ttl,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
      noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
      ignoreFetchAbort = this.ignoreFetchAbort,
      allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
      context,
      forceRefresh = false,
      status,
      signal
    } = fetchOptions;
    if (!this.#hasFetchMethod) {
      if (status)
        status.fetch = "get";
      return this.get(k, {
        allowStale,
        updateAgeOnGet,
        noDeleteOnStaleGet,
        status
      });
    }
    const options = {
      allowStale,
      updateAgeOnGet,
      noDeleteOnStaleGet,
      ttl,
      noDisposeOnSet,
      size,
      sizeCalculation,
      noUpdateTTL,
      noDeleteOnFetchRejection,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort,
      status,
      signal
    };
    let index = this.#keyMap.get(k);
    if (index === undefined) {
      if (status)
        status.fetch = "miss";
      const p = this.#backgroundFetch(k, index, options, context);
      return p.__returned = p;
    } else {
      const v = this.#valList[index];
      if (this.#isBackgroundFetch(v)) {
        const stale = allowStale && v.__staleWhileFetching !== undefined;
        if (status) {
          status.fetch = "inflight";
          if (stale)
            status.returnedStale = true;
        }
        return stale ? v.__staleWhileFetching : v.__returned = v;
      }
      const isStale = this.#isStale(index);
      if (!forceRefresh && !isStale) {
        if (status)
          status.fetch = "hit";
        this.#moveToTail(index);
        if (updateAgeOnGet) {
          this.#updateItemAge(index);
        }
        if (status)
          this.#statusTTL(status, index);
        return v;
      }
      const p = this.#backgroundFetch(k, index, options, context);
      const hasStale = p.__staleWhileFetching !== undefined;
      const staleVal = hasStale && allowStale;
      if (status) {
        status.fetch = isStale ? "stale" : "refresh";
        if (staleVal && isStale)
          status.returnedStale = true;
      }
      return staleVal ? p.__staleWhileFetching : p.__returned = p;
    }
  }
  async forceFetch(k, fetchOptions = {}) {
    const v = await this.fetch(k, fetchOptions);
    if (v === undefined)
      throw new Error("fetch() returned undefined");
    return v;
  }
  memo(k, memoOptions = {}) {
    const memoMethod = this.#memoMethod;
    if (!memoMethod) {
      throw new Error("no memoMethod provided to constructor");
    }
    const { context, forceRefresh, ...options } = memoOptions;
    const v = this.get(k, options);
    if (!forceRefresh && v !== undefined)
      return v;
    const vv = memoMethod(k, v, {
      options,
      context
    });
    this.set(k, vv, options);
    return vv;
  }
  get(k, getOptions = {}) {
    const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
    const index = this.#keyMap.get(k);
    if (index !== undefined) {
      const value = this.#valList[index];
      const fetching = this.#isBackgroundFetch(value);
      if (status)
        this.#statusTTL(status, index);
      if (this.#isStale(index)) {
        if (status)
          status.get = "stale";
        if (!fetching) {
          if (!noDeleteOnStaleGet) {
            this.#delete(k, "expire");
          }
          if (status && allowStale)
            status.returnedStale = true;
          return allowStale ? value : undefined;
        } else {
          if (status && allowStale && value.__staleWhileFetching !== undefined) {
            status.returnedStale = true;
          }
          return allowStale ? value.__staleWhileFetching : undefined;
        }
      } else {
        if (status)
          status.get = "hit";
        if (fetching) {
          return value.__staleWhileFetching;
        }
        this.#moveToTail(index);
        if (updateAgeOnGet) {
          this.#updateItemAge(index);
        }
        return value;
      }
    } else if (status) {
      status.get = "miss";
    }
  }
  #connect(p, n) {
    this.#prev[n] = p;
    this.#next[p] = n;
  }
  #moveToTail(index) {
    if (index !== this.#tail) {
      if (index === this.#head) {
        this.#head = this.#next[index];
      } else {
        this.#connect(this.#prev[index], this.#next[index]);
      }
      this.#connect(this.#tail, index);
      this.#tail = index;
    }
  }
  delete(k) {
    return this.#delete(k, "delete");
  }
  #delete(k, reason) {
    let deleted = false;
    if (this.#size !== 0) {
      const index = this.#keyMap.get(k);
      if (index !== undefined) {
        deleted = true;
        if (this.#size === 1) {
          this.#clear(reason);
        } else {
          this.#removeItemSize(index);
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error("deleted"));
          } else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
              this.#dispose?.(v, k, reason);
            }
            if (this.#hasDisposeAfter) {
              this.#disposed?.push([v, k, reason]);
            }
          }
          this.#keyMap.delete(k);
          this.#keyList[index] = undefined;
          this.#valList[index] = undefined;
          if (index === this.#tail) {
            this.#tail = this.#prev[index];
          } else if (index === this.#head) {
            this.#head = this.#next[index];
          } else {
            const pi = this.#prev[index];
            this.#next[pi] = this.#next[index];
            const ni = this.#next[index];
            this.#prev[ni] = this.#prev[index];
          }
          this.#size--;
          this.#free.push(index);
        }
      }
    }
    if (this.#hasDisposeAfter && this.#disposed?.length) {
      const dt = this.#disposed;
      let task;
      while (task = dt?.shift()) {
        this.#disposeAfter?.(...task);
      }
    }
    return deleted;
  }
  clear() {
    return this.#clear("delete");
  }
  #clear(reason) {
    for (const index of this.#rindexes({ allowStale: true })) {
      const v = this.#valList[index];
      if (this.#isBackgroundFetch(v)) {
        v.__abortController.abort(new Error("deleted"));
      } else {
        const k = this.#keyList[index];
        if (this.#hasDispose) {
          this.#dispose?.(v, k, reason);
        }
        if (this.#hasDisposeAfter) {
          this.#disposed?.push([v, k, reason]);
        }
      }
    }
    this.#keyMap.clear();
    this.#valList.fill(undefined);
    this.#keyList.fill(undefined);
    if (this.#ttls && this.#starts) {
      this.#ttls.fill(0);
      this.#starts.fill(0);
    }
    if (this.#sizes) {
      this.#sizes.fill(0);
    }
    this.#head = 0;
    this.#tail = 0;
    this.#free.length = 0;
    this.#calculatedSize = 0;
    this.#size = 0;
    if (this.#hasDisposeAfter && this.#disposed) {
      const dt = this.#disposed;
      let task;
      while (task = dt?.shift()) {
        this.#disposeAfter?.(...task);
      }
    }
  }
}

// node_modules/path-scurry/dist/esm/index.js
import { posix, win32 } from "node:path";
import { fileURLToPath } from "node:url";
import { lstatSync, readdir as readdirCB, readdirSync, readlinkSync, realpathSync as rps } from "fs";
import * as actualFS from "node:fs";
import { lstat, readdir, readlink, realpath } from "node:fs/promises";

// node_modules/minipass/dist/esm/index.js
import { EventEmitter } from "node:events";
import Stream from "node:stream";
import { StringDecoder } from "node:string_decoder";
var proc = typeof process === "object" && process ? process : {
  stdout: null,
  stderr: null
};
var isStream = (s) => !!s && typeof s === "object" && (s instanceof Minipass || s instanceof Stream || isReadable(s) || isWritable(s));
var isReadable = (s) => !!s && typeof s === "object" && s instanceof EventEmitter && typeof s.pipe === "function" && s.pipe !== Stream.Writable.prototype.pipe;
var isWritable = (s) => !!s && typeof s === "object" && s instanceof EventEmitter && typeof s.write === "function" && typeof s.end === "function";
var EOF = Symbol("EOF");
var MAYBE_EMIT_END = Symbol("maybeEmitEnd");
var EMITTED_END = Symbol("emittedEnd");
var EMITTING_END = Symbol("emittingEnd");
var EMITTED_ERROR = Symbol("emittedError");
var CLOSED = Symbol("closed");
var READ = Symbol("read");
var FLUSH = Symbol("flush");
var FLUSHCHUNK = Symbol("flushChunk");
var ENCODING = Symbol("encoding");
var DECODER = Symbol("decoder");
var FLOWING = Symbol("flowing");
var PAUSED = Symbol("paused");
var RESUME = Symbol("resume");
var BUFFER = Symbol("buffer");
var PIPES = Symbol("pipes");
var BUFFERLENGTH = Symbol("bufferLength");
var BUFFERPUSH = Symbol("bufferPush");
var BUFFERSHIFT = Symbol("bufferShift");
var OBJECTMODE = Symbol("objectMode");
var DESTROYED = Symbol("destroyed");
var ERROR = Symbol("error");
var EMITDATA = Symbol("emitData");
var EMITEND = Symbol("emitEnd");
var EMITEND2 = Symbol("emitEnd2");
var ASYNC = Symbol("async");
var ABORT = Symbol("abort");
var ABORTED = Symbol("aborted");
var SIGNAL = Symbol("signal");
var DATALISTENERS = Symbol("dataListeners");
var DISCARDED = Symbol("discarded");
var defer = (fn) => Promise.resolve().then(fn);
var nodefer = (fn) => fn();
var isEndish = (ev) => ev === "end" || ev === "finish" || ev === "prefinish";
var isArrayBufferLike = (b) => b instanceof ArrayBuffer || !!b && typeof b === "object" && b.constructor && b.constructor.name === "ArrayBuffer" && b.byteLength >= 0;
var isArrayBufferView = (b) => !Buffer.isBuffer(b) && ArrayBuffer.isView(b);

class Pipe {
  src;
  dest;
  opts;
  ondrain;
  constructor(src, dest, opts) {
    this.src = src;
    this.dest = dest;
    this.opts = opts;
    this.ondrain = () => src[RESUME]();
    this.dest.on("drain", this.ondrain);
  }
  unpipe() {
    this.dest.removeListener("drain", this.ondrain);
  }
  proxyErrors(_er) {}
  end() {
    this.unpipe();
    if (this.opts.end)
      this.dest.end();
  }
}

class PipeProxyErrors extends Pipe {
  unpipe() {
    this.src.removeListener("error", this.proxyErrors);
    super.unpipe();
  }
  constructor(src, dest, opts) {
    super(src, dest, opts);
    this.proxyErrors = (er) => dest.emit("error", er);
    src.on("error", this.proxyErrors);
  }
}
var isObjectModeOptions = (o) => !!o.objectMode;
var isEncodingOptions = (o) => !o.objectMode && !!o.encoding && o.encoding !== "buffer";

class Minipass extends EventEmitter {
  [FLOWING] = false;
  [PAUSED] = false;
  [PIPES] = [];
  [BUFFER] = [];
  [OBJECTMODE];
  [ENCODING];
  [ASYNC];
  [DECODER];
  [EOF] = false;
  [EMITTED_END] = false;
  [EMITTING_END] = false;
  [CLOSED] = false;
  [EMITTED_ERROR] = null;
  [BUFFERLENGTH] = 0;
  [DESTROYED] = false;
  [SIGNAL];
  [ABORTED] = false;
  [DATALISTENERS] = 0;
  [DISCARDED] = false;
  writable = true;
  readable = true;
  constructor(...args) {
    const options = args[0] || {};
    super();
    if (options.objectMode && typeof options.encoding === "string") {
      throw new TypeError("Encoding and objectMode may not be used together");
    }
    if (isObjectModeOptions(options)) {
      this[OBJECTMODE] = true;
      this[ENCODING] = null;
    } else if (isEncodingOptions(options)) {
      this[ENCODING] = options.encoding;
      this[OBJECTMODE] = false;
    } else {
      this[OBJECTMODE] = false;
      this[ENCODING] = null;
    }
    this[ASYNC] = !!options.async;
    this[DECODER] = this[ENCODING] ? new StringDecoder(this[ENCODING]) : null;
    if (options && options.debugExposeBuffer === true) {
      Object.defineProperty(this, "buffer", { get: () => this[BUFFER] });
    }
    if (options && options.debugExposePipes === true) {
      Object.defineProperty(this, "pipes", { get: () => this[PIPES] });
    }
    const { signal } = options;
    if (signal) {
      this[SIGNAL] = signal;
      if (signal.aborted) {
        this[ABORT]();
      } else {
        signal.addEventListener("abort", () => this[ABORT]());
      }
    }
  }
  get bufferLength() {
    return this[BUFFERLENGTH];
  }
  get encoding() {
    return this[ENCODING];
  }
  set encoding(_enc) {
    throw new Error("Encoding must be set at instantiation time");
  }
  setEncoding(_enc) {
    throw new Error("Encoding must be set at instantiation time");
  }
  get objectMode() {
    return this[OBJECTMODE];
  }
  set objectMode(_om) {
    throw new Error("objectMode must be set at instantiation time");
  }
  get ["async"]() {
    return this[ASYNC];
  }
  set ["async"](a) {
    this[ASYNC] = this[ASYNC] || !!a;
  }
  [ABORT]() {
    this[ABORTED] = true;
    this.emit("abort", this[SIGNAL]?.reason);
    this.destroy(this[SIGNAL]?.reason);
  }
  get aborted() {
    return this[ABORTED];
  }
  set aborted(_) {}
  write(chunk, encoding, cb) {
    if (this[ABORTED])
      return false;
    if (this[EOF])
      throw new Error("write after end");
    if (this[DESTROYED]) {
      this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" }));
      return true;
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = "utf8";
    }
    if (!encoding)
      encoding = "utf8";
    const fn = this[ASYNC] ? defer : nodefer;
    if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
      if (isArrayBufferView(chunk)) {
        chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
      } else if (isArrayBufferLike(chunk)) {
        chunk = Buffer.from(chunk);
      } else if (typeof chunk !== "string") {
        throw new Error("Non-contiguous data written to non-objectMode stream");
      }
    }
    if (this[OBJECTMODE]) {
      if (this[FLOWING] && this[BUFFERLENGTH] !== 0)
        this[FLUSH](true);
      if (this[FLOWING])
        this.emit("data", chunk);
      else
        this[BUFFERPUSH](chunk);
      if (this[BUFFERLENGTH] !== 0)
        this.emit("readable");
      if (cb)
        fn(cb);
      return this[FLOWING];
    }
    if (!chunk.length) {
      if (this[BUFFERLENGTH] !== 0)
        this.emit("readable");
      if (cb)
        fn(cb);
      return this[FLOWING];
    }
    if (typeof chunk === "string" && !(encoding === this[ENCODING] && !this[DECODER]?.lastNeed)) {
      chunk = Buffer.from(chunk, encoding);
    }
    if (Buffer.isBuffer(chunk) && this[ENCODING]) {
      chunk = this[DECODER].write(chunk);
    }
    if (this[FLOWING] && this[BUFFERLENGTH] !== 0)
      this[FLUSH](true);
    if (this[FLOWING])
      this.emit("data", chunk);
    else
      this[BUFFERPUSH](chunk);
    if (this[BUFFERLENGTH] !== 0)
      this.emit("readable");
    if (cb)
      fn(cb);
    return this[FLOWING];
  }
  read(n) {
    if (this[DESTROYED])
      return null;
    this[DISCARDED] = false;
    if (this[BUFFERLENGTH] === 0 || n === 0 || n && n > this[BUFFERLENGTH]) {
      this[MAYBE_EMIT_END]();
      return null;
    }
    if (this[OBJECTMODE])
      n = null;
    if (this[BUFFER].length > 1 && !this[OBJECTMODE]) {
      this[BUFFER] = [
        this[ENCODING] ? this[BUFFER].join("") : Buffer.concat(this[BUFFER], this[BUFFERLENGTH])
      ];
    }
    const ret = this[READ](n || null, this[BUFFER][0]);
    this[MAYBE_EMIT_END]();
    return ret;
  }
  [READ](n, chunk) {
    if (this[OBJECTMODE])
      this[BUFFERSHIFT]();
    else {
      const c = chunk;
      if (n === c.length || n === null)
        this[BUFFERSHIFT]();
      else if (typeof c === "string") {
        this[BUFFER][0] = c.slice(n);
        chunk = c.slice(0, n);
        this[BUFFERLENGTH] -= n;
      } else {
        this[BUFFER][0] = c.subarray(n);
        chunk = c.subarray(0, n);
        this[BUFFERLENGTH] -= n;
      }
    }
    this.emit("data", chunk);
    if (!this[BUFFER].length && !this[EOF])
      this.emit("drain");
    return chunk;
  }
  end(chunk, encoding, cb) {
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = undefined;
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = "utf8";
    }
    if (chunk !== undefined)
      this.write(chunk, encoding);
    if (cb)
      this.once("end", cb);
    this[EOF] = true;
    this.writable = false;
    if (this[FLOWING] || !this[PAUSED])
      this[MAYBE_EMIT_END]();
    return this;
  }
  [RESUME]() {
    if (this[DESTROYED])
      return;
    if (!this[DATALISTENERS] && !this[PIPES].length) {
      this[DISCARDED] = true;
    }
    this[PAUSED] = false;
    this[FLOWING] = true;
    this.emit("resume");
    if (this[BUFFER].length)
      this[FLUSH]();
    else if (this[EOF])
      this[MAYBE_EMIT_END]();
    else
      this.emit("drain");
  }
  resume() {
    return this[RESUME]();
  }
  pause() {
    this[FLOWING] = false;
    this[PAUSED] = true;
    this[DISCARDED] = false;
  }
  get destroyed() {
    return this[DESTROYED];
  }
  get flowing() {
    return this[FLOWING];
  }
  get paused() {
    return this[PAUSED];
  }
  [BUFFERPUSH](chunk) {
    if (this[OBJECTMODE])
      this[BUFFERLENGTH] += 1;
    else
      this[BUFFERLENGTH] += chunk.length;
    this[BUFFER].push(chunk);
  }
  [BUFFERSHIFT]() {
    if (this[OBJECTMODE])
      this[BUFFERLENGTH] -= 1;
    else
      this[BUFFERLENGTH] -= this[BUFFER][0].length;
    return this[BUFFER].shift();
  }
  [FLUSH](noDrain = false) {
    do {} while (this[FLUSHCHUNK](this[BUFFERSHIFT]()) && this[BUFFER].length);
    if (!noDrain && !this[BUFFER].length && !this[EOF])
      this.emit("drain");
  }
  [FLUSHCHUNK](chunk) {
    this.emit("data", chunk);
    return this[FLOWING];
  }
  pipe(dest, opts) {
    if (this[DESTROYED])
      return dest;
    this[DISCARDED] = false;
    const ended = this[EMITTED_END];
    opts = opts || {};
    if (dest === proc.stdout || dest === proc.stderr)
      opts.end = false;
    else
      opts.end = opts.end !== false;
    opts.proxyErrors = !!opts.proxyErrors;
    if (ended) {
      if (opts.end)
        dest.end();
    } else {
      this[PIPES].push(!opts.proxyErrors ? new Pipe(this, dest, opts) : new PipeProxyErrors(this, dest, opts));
      if (this[ASYNC])
        defer(() => this[RESUME]());
      else
        this[RESUME]();
    }
    return dest;
  }
  unpipe(dest) {
    const p = this[PIPES].find((p2) => p2.dest === dest);
    if (p) {
      if (this[PIPES].length === 1) {
        if (this[FLOWING] && this[DATALISTENERS] === 0) {
          this[FLOWING] = false;
        }
        this[PIPES] = [];
      } else
        this[PIPES].splice(this[PIPES].indexOf(p), 1);
      p.unpipe();
    }
  }
  addListener(ev, handler) {
    return this.on(ev, handler);
  }
  on(ev, handler) {
    const ret = super.on(ev, handler);
    if (ev === "data") {
      this[DISCARDED] = false;
      this[DATALISTENERS]++;
      if (!this[PIPES].length && !this[FLOWING]) {
        this[RESUME]();
      }
    } else if (ev === "readable" && this[BUFFERLENGTH] !== 0) {
      super.emit("readable");
    } else if (isEndish(ev) && this[EMITTED_END]) {
      super.emit(ev);
      this.removeAllListeners(ev);
    } else if (ev === "error" && this[EMITTED_ERROR]) {
      const h = handler;
      if (this[ASYNC])
        defer(() => h.call(this, this[EMITTED_ERROR]));
      else
        h.call(this, this[EMITTED_ERROR]);
    }
    return ret;
  }
  removeListener(ev, handler) {
    return this.off(ev, handler);
  }
  off(ev, handler) {
    const ret = super.off(ev, handler);
    if (ev === "data") {
      this[DATALISTENERS] = this.listeners("data").length;
      if (this[DATALISTENERS] === 0 && !this[DISCARDED] && !this[PIPES].length) {
        this[FLOWING] = false;
      }
    }
    return ret;
  }
  removeAllListeners(ev) {
    const ret = super.removeAllListeners(ev);
    if (ev === "data" || ev === undefined) {
      this[DATALISTENERS] = 0;
      if (!this[DISCARDED] && !this[PIPES].length) {
        this[FLOWING] = false;
      }
    }
    return ret;
  }
  get emittedEnd() {
    return this[EMITTED_END];
  }
  [MAYBE_EMIT_END]() {
    if (!this[EMITTING_END] && !this[EMITTED_END] && !this[DESTROYED] && this[BUFFER].length === 0 && this[EOF]) {
      this[EMITTING_END] = true;
      this.emit("end");
      this.emit("prefinish");
      this.emit("finish");
      if (this[CLOSED])
        this.emit("close");
      this[EMITTING_END] = false;
    }
  }
  emit(ev, ...args) {
    const data = args[0];
    if (ev !== "error" && ev !== "close" && ev !== DESTROYED && this[DESTROYED]) {
      return false;
    } else if (ev === "data") {
      return !this[OBJECTMODE] && !data ? false : this[ASYNC] ? (defer(() => this[EMITDATA](data)), true) : this[EMITDATA](data);
    } else if (ev === "end") {
      return this[EMITEND]();
    } else if (ev === "close") {
      this[CLOSED] = true;
      if (!this[EMITTED_END] && !this[DESTROYED])
        return false;
      const ret2 = super.emit("close");
      this.removeAllListeners("close");
      return ret2;
    } else if (ev === "error") {
      this[EMITTED_ERROR] = data;
      super.emit(ERROR, data);
      const ret2 = !this[SIGNAL] || this.listeners("error").length ? super.emit("error", data) : false;
      this[MAYBE_EMIT_END]();
      return ret2;
    } else if (ev === "resume") {
      const ret2 = super.emit("resume");
      this[MAYBE_EMIT_END]();
      return ret2;
    } else if (ev === "finish" || ev === "prefinish") {
      const ret2 = super.emit(ev);
      this.removeAllListeners(ev);
      return ret2;
    }
    const ret = super.emit(ev, ...args);
    this[MAYBE_EMIT_END]();
    return ret;
  }
  [EMITDATA](data) {
    for (const p of this[PIPES]) {
      if (p.dest.write(data) === false)
        this.pause();
    }
    const ret = this[DISCARDED] ? false : super.emit("data", data);
    this[MAYBE_EMIT_END]();
    return ret;
  }
  [EMITEND]() {
    if (this[EMITTED_END])
      return false;
    this[EMITTED_END] = true;
    this.readable = false;
    return this[ASYNC] ? (defer(() => this[EMITEND2]()), true) : this[EMITEND2]();
  }
  [EMITEND2]() {
    if (this[DECODER]) {
      const data = this[DECODER].end();
      if (data) {
        for (const p of this[PIPES]) {
          p.dest.write(data);
        }
        if (!this[DISCARDED])
          super.emit("data", data);
      }
    }
    for (const p of this[PIPES]) {
      p.end();
    }
    const ret = super.emit("end");
    this.removeAllListeners("end");
    return ret;
  }
  async collect() {
    const buf = Object.assign([], {
      dataLength: 0
    });
    if (!this[OBJECTMODE])
      buf.dataLength = 0;
    const p = this.promise();
    this.on("data", (c) => {
      buf.push(c);
      if (!this[OBJECTMODE])
        buf.dataLength += c.length;
    });
    await p;
    return buf;
  }
  async concat() {
    if (this[OBJECTMODE]) {
      throw new Error("cannot concat in objectMode");
    }
    const buf = await this.collect();
    return this[ENCODING] ? buf.join("") : Buffer.concat(buf, buf.dataLength);
  }
  async promise() {
    return new Promise((resolve, reject) => {
      this.on(DESTROYED, () => reject(new Error("stream destroyed")));
      this.on("error", (er) => reject(er));
      this.on("end", () => resolve());
    });
  }
  [Symbol.asyncIterator]() {
    this[DISCARDED] = false;
    let stopped = false;
    const stop = async () => {
      this.pause();
      stopped = true;
      return { value: undefined, done: true };
    };
    const next = () => {
      if (stopped)
        return stop();
      const res = this.read();
      if (res !== null)
        return Promise.resolve({ done: false, value: res });
      if (this[EOF])
        return stop();
      let resolve;
      let reject;
      const onerr = (er) => {
        this.off("data", ondata);
        this.off("end", onend);
        this.off(DESTROYED, ondestroy);
        stop();
        reject(er);
      };
      const ondata = (value) => {
        this.off("error", onerr);
        this.off("end", onend);
        this.off(DESTROYED, ondestroy);
        this.pause();
        resolve({ value, done: !!this[EOF] });
      };
      const onend = () => {
        this.off("error", onerr);
        this.off("data", ondata);
        this.off(DESTROYED, ondestroy);
        stop();
        resolve({ done: true, value: undefined });
      };
      const ondestroy = () => onerr(new Error("stream destroyed"));
      return new Promise((res2, rej) => {
        reject = rej;
        resolve = res2;
        this.once(DESTROYED, ondestroy);
        this.once("error", onerr);
        this.once("end", onend);
        this.once("data", ondata);
      });
    };
    return {
      next,
      throw: stop,
      return: stop,
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
  [Symbol.iterator]() {
    this[DISCARDED] = false;
    let stopped = false;
    const stop = () => {
      this.pause();
      this.off(ERROR, stop);
      this.off(DESTROYED, stop);
      this.off("end", stop);
      stopped = true;
      return { done: true, value: undefined };
    };
    const next = () => {
      if (stopped)
        return stop();
      const value = this.read();
      return value === null ? stop() : { done: false, value };
    };
    this.once("end", stop);
    this.once(ERROR, stop);
    this.once(DESTROYED, stop);
    return {
      next,
      throw: stop,
      return: stop,
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  destroy(er) {
    if (this[DESTROYED]) {
      if (er)
        this.emit("error", er);
      else
        this.emit(DESTROYED);
      return this;
    }
    this[DESTROYED] = true;
    this[DISCARDED] = true;
    this[BUFFER].length = 0;
    this[BUFFERLENGTH] = 0;
    const wc = this;
    if (typeof wc.close === "function" && !this[CLOSED])
      wc.close();
    if (er)
      this.emit("error", er);
    else
      this.emit(DESTROYED);
    return this;
  }
  static get isStream() {
    return isStream;
  }
}

// node_modules/path-scurry/dist/esm/index.js
var realpathSync = rps.native;
var defaultFS = {
  lstatSync,
  readdir: readdirCB,
  readdirSync,
  readlinkSync,
  realpathSync,
  promises: {
    lstat,
    readdir,
    readlink,
    realpath
  }
};
var fsFromOption = (fsOption) => !fsOption || fsOption === defaultFS || fsOption === actualFS ? defaultFS : {
  ...defaultFS,
  ...fsOption,
  promises: {
    ...defaultFS.promises,
    ...fsOption.promises || {}
  }
};
var uncDriveRegexp = /^\\\\\?\\([a-z]:)\\?$/i;
var uncToDrive = (rootPath) => rootPath.replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
var eitherSep = /[\\\/]/;
var UNKNOWN = 0;
var IFIFO = 1;
var IFCHR = 2;
var IFDIR = 4;
var IFBLK = 6;
var IFREG = 8;
var IFLNK = 10;
var IFSOCK = 12;
var IFMT = 15;
var IFMT_UNKNOWN = ~IFMT;
var READDIR_CALLED = 16;
var LSTAT_CALLED = 32;
var ENOTDIR = 64;
var ENOENT = 128;
var ENOREADLINK = 256;
var ENOREALPATH = 512;
var ENOCHILD = ENOTDIR | ENOENT | ENOREALPATH;
var TYPEMASK = 1023;
var entToType = (s) => s.isFile() ? IFREG : s.isDirectory() ? IFDIR : s.isSymbolicLink() ? IFLNK : s.isCharacterDevice() ? IFCHR : s.isBlockDevice() ? IFBLK : s.isSocket() ? IFSOCK : s.isFIFO() ? IFIFO : UNKNOWN;
var normalizeCache = new Map;
var normalize = (s) => {
  const c = normalizeCache.get(s);
  if (c)
    return c;
  const n = s.normalize("NFKD");
  normalizeCache.set(s, n);
  return n;
};
var normalizeNocaseCache = new Map;
var normalizeNocase = (s) => {
  const c = normalizeNocaseCache.get(s);
  if (c)
    return c;
  const n = normalize(s.toLowerCase());
  normalizeNocaseCache.set(s, n);
  return n;
};

class ResolveCache extends LRUCache {
  constructor() {
    super({ max: 256 });
  }
}

class ChildrenCache extends LRUCache {
  constructor(maxSize = 16 * 1024) {
    super({
      maxSize,
      sizeCalculation: (a) => a.length + 1
    });
  }
}
var setAsCwd = Symbol("PathScurry setAsCwd");

class PathBase {
  name;
  root;
  roots;
  parent;
  nocase;
  isCWD = false;
  #fs;
  #dev;
  get dev() {
    return this.#dev;
  }
  #mode;
  get mode() {
    return this.#mode;
  }
  #nlink;
  get nlink() {
    return this.#nlink;
  }
  #uid;
  get uid() {
    return this.#uid;
  }
  #gid;
  get gid() {
    return this.#gid;
  }
  #rdev;
  get rdev() {
    return this.#rdev;
  }
  #blksize;
  get blksize() {
    return this.#blksize;
  }
  #ino;
  get ino() {
    return this.#ino;
  }
  #size;
  get size() {
    return this.#size;
  }
  #blocks;
  get blocks() {
    return this.#blocks;
  }
  #atimeMs;
  get atimeMs() {
    return this.#atimeMs;
  }
  #mtimeMs;
  get mtimeMs() {
    return this.#mtimeMs;
  }
  #ctimeMs;
  get ctimeMs() {
    return this.#ctimeMs;
  }
  #birthtimeMs;
  get birthtimeMs() {
    return this.#birthtimeMs;
  }
  #atime;
  get atime() {
    return this.#atime;
  }
  #mtime;
  get mtime() {
    return this.#mtime;
  }
  #ctime;
  get ctime() {
    return this.#ctime;
  }
  #birthtime;
  get birthtime() {
    return this.#birthtime;
  }
  #matchName;
  #depth;
  #fullpath;
  #fullpathPosix;
  #relative;
  #relativePosix;
  #type;
  #children;
  #linkTarget;
  #realpath;
  get parentPath() {
    return (this.parent || this).fullpath();
  }
  get path() {
    return this.parentPath;
  }
  constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
    this.name = name;
    this.#matchName = nocase ? normalizeNocase(name) : normalize(name);
    this.#type = type & TYPEMASK;
    this.nocase = nocase;
    this.roots = roots;
    this.root = root || this;
    this.#children = children;
    this.#fullpath = opts.fullpath;
    this.#relative = opts.relative;
    this.#relativePosix = opts.relativePosix;
    this.parent = opts.parent;
    if (this.parent) {
      this.#fs = this.parent.#fs;
    } else {
      this.#fs = fsFromOption(opts.fs);
    }
  }
  depth() {
    if (this.#depth !== undefined)
      return this.#depth;
    if (!this.parent)
      return this.#depth = 0;
    return this.#depth = this.parent.depth() + 1;
  }
  childrenCache() {
    return this.#children;
  }
  resolve(path2) {
    if (!path2) {
      return this;
    }
    const rootPath = this.getRootString(path2);
    const dir = path2.substring(rootPath.length);
    const dirParts = dir.split(this.splitSep);
    const result = rootPath ? this.getRoot(rootPath).#resolveParts(dirParts) : this.#resolveParts(dirParts);
    return result;
  }
  #resolveParts(dirParts) {
    let p = this;
    for (const part of dirParts) {
      p = p.child(part);
    }
    return p;
  }
  children() {
    const cached = this.#children.get(this);
    if (cached) {
      return cached;
    }
    const children = Object.assign([], { provisional: 0 });
    this.#children.set(this, children);
    this.#type &= ~READDIR_CALLED;
    return children;
  }
  child(pathPart, opts) {
    if (pathPart === "" || pathPart === ".") {
      return this;
    }
    if (pathPart === "..") {
      return this.parent || this;
    }
    const children = this.children();
    const name = this.nocase ? normalizeNocase(pathPart) : normalize(pathPart);
    for (const p of children) {
      if (p.#matchName === name) {
        return p;
      }
    }
    const s = this.parent ? this.sep : "";
    const fullpath = this.#fullpath ? this.#fullpath + s + pathPart : undefined;
    const pchild = this.newChild(pathPart, UNKNOWN, {
      ...opts,
      parent: this,
      fullpath
    });
    if (!this.canReaddir()) {
      pchild.#type |= ENOENT;
    }
    children.push(pchild);
    return pchild;
  }
  relative() {
    if (this.isCWD)
      return "";
    if (this.#relative !== undefined) {
      return this.#relative;
    }
    const name = this.name;
    const p = this.parent;
    if (!p) {
      return this.#relative = this.name;
    }
    const pv = p.relative();
    return pv + (!pv || !p.parent ? "" : this.sep) + name;
  }
  relativePosix() {
    if (this.sep === "/")
      return this.relative();
    if (this.isCWD)
      return "";
    if (this.#relativePosix !== undefined)
      return this.#relativePosix;
    const name = this.name;
    const p = this.parent;
    if (!p) {
      return this.#relativePosix = this.fullpathPosix();
    }
    const pv = p.relativePosix();
    return pv + (!pv || !p.parent ? "" : "/") + name;
  }
  fullpath() {
    if (this.#fullpath !== undefined) {
      return this.#fullpath;
    }
    const name = this.name;
    const p = this.parent;
    if (!p) {
      return this.#fullpath = this.name;
    }
    const pv = p.fullpath();
    const fp = pv + (!p.parent ? "" : this.sep) + name;
    return this.#fullpath = fp;
  }
  fullpathPosix() {
    if (this.#fullpathPosix !== undefined)
      return this.#fullpathPosix;
    if (this.sep === "/")
      return this.#fullpathPosix = this.fullpath();
    if (!this.parent) {
      const p2 = this.fullpath().replace(/\\/g, "/");
      if (/^[a-z]:\//i.test(p2)) {
        return this.#fullpathPosix = `//?/${p2}`;
      } else {
        return this.#fullpathPosix = p2;
      }
    }
    const p = this.parent;
    const pfpp = p.fullpathPosix();
    const fpp = pfpp + (!pfpp || !p.parent ? "" : "/") + this.name;
    return this.#fullpathPosix = fpp;
  }
  isUnknown() {
    return (this.#type & IFMT) === UNKNOWN;
  }
  isType(type) {
    return this[`is${type}`]();
  }
  getType() {
    return this.isUnknown() ? "Unknown" : this.isDirectory() ? "Directory" : this.isFile() ? "File" : this.isSymbolicLink() ? "SymbolicLink" : this.isFIFO() ? "FIFO" : this.isCharacterDevice() ? "CharacterDevice" : this.isBlockDevice() ? "BlockDevice" : this.isSocket() ? "Socket" : "Unknown";
  }
  isFile() {
    return (this.#type & IFMT) === IFREG;
  }
  isDirectory() {
    return (this.#type & IFMT) === IFDIR;
  }
  isCharacterDevice() {
    return (this.#type & IFMT) === IFCHR;
  }
  isBlockDevice() {
    return (this.#type & IFMT) === IFBLK;
  }
  isFIFO() {
    return (this.#type & IFMT) === IFIFO;
  }
  isSocket() {
    return (this.#type & IFMT) === IFSOCK;
  }
  isSymbolicLink() {
    return (this.#type & IFLNK) === IFLNK;
  }
  lstatCached() {
    return this.#type & LSTAT_CALLED ? this : undefined;
  }
  readlinkCached() {
    return this.#linkTarget;
  }
  realpathCached() {
    return this.#realpath;
  }
  readdirCached() {
    const children = this.children();
    return children.slice(0, children.provisional);
  }
  canReadlink() {
    if (this.#linkTarget)
      return true;
    if (!this.parent)
      return false;
    const ifmt = this.#type & IFMT;
    return !(ifmt !== UNKNOWN && ifmt !== IFLNK || this.#type & ENOREADLINK || this.#type & ENOENT);
  }
  calledReaddir() {
    return !!(this.#type & READDIR_CALLED);
  }
  isENOENT() {
    return !!(this.#type & ENOENT);
  }
  isNamed(n) {
    return !this.nocase ? this.#matchName === normalize(n) : this.#matchName === normalizeNocase(n);
  }
  async readlink() {
    const target = this.#linkTarget;
    if (target) {
      return target;
    }
    if (!this.canReadlink()) {
      return;
    }
    if (!this.parent) {
      return;
    }
    try {
      const read = await this.#fs.promises.readlink(this.fullpath());
      const linkTarget = (await this.parent.realpath())?.resolve(read);
      if (linkTarget) {
        return this.#linkTarget = linkTarget;
      }
    } catch (er) {
      this.#readlinkFail(er.code);
      return;
    }
  }
  readlinkSync() {
    const target = this.#linkTarget;
    if (target) {
      return target;
    }
    if (!this.canReadlink()) {
      return;
    }
    if (!this.parent) {
      return;
    }
    try {
      const read = this.#fs.readlinkSync(this.fullpath());
      const linkTarget = this.parent.realpathSync()?.resolve(read);
      if (linkTarget) {
        return this.#linkTarget = linkTarget;
      }
    } catch (er) {
      this.#readlinkFail(er.code);
      return;
    }
  }
  #readdirSuccess(children) {
    this.#type |= READDIR_CALLED;
    for (let p = children.provisional;p < children.length; p++) {
      const c = children[p];
      if (c)
        c.#markENOENT();
    }
  }
  #markENOENT() {
    if (this.#type & ENOENT)
      return;
    this.#type = (this.#type | ENOENT) & IFMT_UNKNOWN;
    this.#markChildrenENOENT();
  }
  #markChildrenENOENT() {
    const children = this.children();
    children.provisional = 0;
    for (const p of children) {
      p.#markENOENT();
    }
  }
  #markENOREALPATH() {
    this.#type |= ENOREALPATH;
    this.#markENOTDIR();
  }
  #markENOTDIR() {
    if (this.#type & ENOTDIR)
      return;
    let t = this.#type;
    if ((t & IFMT) === IFDIR)
      t &= IFMT_UNKNOWN;
    this.#type = t | ENOTDIR;
    this.#markChildrenENOENT();
  }
  #readdirFail(code = "") {
    if (code === "ENOTDIR" || code === "EPERM") {
      this.#markENOTDIR();
    } else if (code === "ENOENT") {
      this.#markENOENT();
    } else {
      this.children().provisional = 0;
    }
  }
  #lstatFail(code = "") {
    if (code === "ENOTDIR") {
      const p = this.parent;
      p.#markENOTDIR();
    } else if (code === "ENOENT") {
      this.#markENOENT();
    }
  }
  #readlinkFail(code = "") {
    let ter = this.#type;
    ter |= ENOREADLINK;
    if (code === "ENOENT")
      ter |= ENOENT;
    if (code === "EINVAL" || code === "UNKNOWN") {
      ter &= IFMT_UNKNOWN;
    }
    this.#type = ter;
    if (code === "ENOTDIR" && this.parent) {
      this.parent.#markENOTDIR();
    }
  }
  #readdirAddChild(e, c) {
    return this.#readdirMaybePromoteChild(e, c) || this.#readdirAddNewChild(e, c);
  }
  #readdirAddNewChild(e, c) {
    const type = entToType(e);
    const child = this.newChild(e.name, type, { parent: this });
    const ifmt = child.#type & IFMT;
    if (ifmt !== IFDIR && ifmt !== IFLNK && ifmt !== UNKNOWN) {
      child.#type |= ENOTDIR;
    }
    c.unshift(child);
    c.provisional++;
    return child;
  }
  #readdirMaybePromoteChild(e, c) {
    for (let p = c.provisional;p < c.length; p++) {
      const pchild = c[p];
      const name = this.nocase ? normalizeNocase(e.name) : normalize(e.name);
      if (name !== pchild.#matchName) {
        continue;
      }
      return this.#readdirPromoteChild(e, pchild, p, c);
    }
  }
  #readdirPromoteChild(e, p, index, c) {
    const v = p.name;
    p.#type = p.#type & IFMT_UNKNOWN | entToType(e);
    if (v !== e.name)
      p.name = e.name;
    if (index !== c.provisional) {
      if (index === c.length - 1)
        c.pop();
      else
        c.splice(index, 1);
      c.unshift(p);
    }
    c.provisional++;
    return p;
  }
  async lstat() {
    if ((this.#type & ENOENT) === 0) {
      try {
        this.#applyStat(await this.#fs.promises.lstat(this.fullpath()));
        return this;
      } catch (er) {
        this.#lstatFail(er.code);
      }
    }
  }
  lstatSync() {
    if ((this.#type & ENOENT) === 0) {
      try {
        this.#applyStat(this.#fs.lstatSync(this.fullpath()));
        return this;
      } catch (er) {
        this.#lstatFail(er.code);
      }
    }
  }
  #applyStat(st) {
    const { atime, atimeMs, birthtime, birthtimeMs, blksize, blocks, ctime, ctimeMs, dev, gid, ino, mode, mtime, mtimeMs, nlink, rdev, size, uid } = st;
    this.#atime = atime;
    this.#atimeMs = atimeMs;
    this.#birthtime = birthtime;
    this.#birthtimeMs = birthtimeMs;
    this.#blksize = blksize;
    this.#blocks = blocks;
    this.#ctime = ctime;
    this.#ctimeMs = ctimeMs;
    this.#dev = dev;
    this.#gid = gid;
    this.#ino = ino;
    this.#mode = mode;
    this.#mtime = mtime;
    this.#mtimeMs = mtimeMs;
    this.#nlink = nlink;
    this.#rdev = rdev;
    this.#size = size;
    this.#uid = uid;
    const ifmt = entToType(st);
    this.#type = this.#type & IFMT_UNKNOWN | ifmt | LSTAT_CALLED;
    if (ifmt !== UNKNOWN && ifmt !== IFDIR && ifmt !== IFLNK) {
      this.#type |= ENOTDIR;
    }
  }
  #onReaddirCB = [];
  #readdirCBInFlight = false;
  #callOnReaddirCB(children) {
    this.#readdirCBInFlight = false;
    const cbs = this.#onReaddirCB.slice();
    this.#onReaddirCB.length = 0;
    cbs.forEach((cb) => cb(null, children));
  }
  readdirCB(cb, allowZalgo = false) {
    if (!this.canReaddir()) {
      if (allowZalgo)
        cb(null, []);
      else
        queueMicrotask(() => cb(null, []));
      return;
    }
    const children = this.children();
    if (this.calledReaddir()) {
      const c = children.slice(0, children.provisional);
      if (allowZalgo)
        cb(null, c);
      else
        queueMicrotask(() => cb(null, c));
      return;
    }
    this.#onReaddirCB.push(cb);
    if (this.#readdirCBInFlight) {
      return;
    }
    this.#readdirCBInFlight = true;
    const fullpath = this.fullpath();
    this.#fs.readdir(fullpath, { withFileTypes: true }, (er, entries) => {
      if (er) {
        this.#readdirFail(er.code);
        children.provisional = 0;
      } else {
        for (const e of entries) {
          this.#readdirAddChild(e, children);
        }
        this.#readdirSuccess(children);
      }
      this.#callOnReaddirCB(children.slice(0, children.provisional));
      return;
    });
  }
  #asyncReaddirInFlight;
  async readdir() {
    if (!this.canReaddir()) {
      return [];
    }
    const children = this.children();
    if (this.calledReaddir()) {
      return children.slice(0, children.provisional);
    }
    const fullpath = this.fullpath();
    if (this.#asyncReaddirInFlight) {
      await this.#asyncReaddirInFlight;
    } else {
      let resolve = () => {};
      this.#asyncReaddirInFlight = new Promise((res) => resolve = res);
      try {
        for (const e of await this.#fs.promises.readdir(fullpath, {
          withFileTypes: true
        })) {
          this.#readdirAddChild(e, children);
        }
        this.#readdirSuccess(children);
      } catch (er) {
        this.#readdirFail(er.code);
        children.provisional = 0;
      }
      this.#asyncReaddirInFlight = undefined;
      resolve();
    }
    return children.slice(0, children.provisional);
  }
  readdirSync() {
    if (!this.canReaddir()) {
      return [];
    }
    const children = this.children();
    if (this.calledReaddir()) {
      return children.slice(0, children.provisional);
    }
    const fullpath = this.fullpath();
    try {
      for (const e of this.#fs.readdirSync(fullpath, {
        withFileTypes: true
      })) {
        this.#readdirAddChild(e, children);
      }
      this.#readdirSuccess(children);
    } catch (er) {
      this.#readdirFail(er.code);
      children.provisional = 0;
    }
    return children.slice(0, children.provisional);
  }
  canReaddir() {
    if (this.#type & ENOCHILD)
      return false;
    const ifmt = IFMT & this.#type;
    if (!(ifmt === UNKNOWN || ifmt === IFDIR || ifmt === IFLNK)) {
      return false;
    }
    return true;
  }
  shouldWalk(dirs, walkFilter) {
    return (this.#type & IFDIR) === IFDIR && !(this.#type & ENOCHILD) && !dirs.has(this) && (!walkFilter || walkFilter(this));
  }
  async realpath() {
    if (this.#realpath)
      return this.#realpath;
    if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
      return;
    try {
      const rp = await this.#fs.promises.realpath(this.fullpath());
      return this.#realpath = this.resolve(rp);
    } catch (_) {
      this.#markENOREALPATH();
    }
  }
  realpathSync() {
    if (this.#realpath)
      return this.#realpath;
    if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
      return;
    try {
      const rp = this.#fs.realpathSync(this.fullpath());
      return this.#realpath = this.resolve(rp);
    } catch (_) {
      this.#markENOREALPATH();
    }
  }
  [setAsCwd](oldCwd) {
    if (oldCwd === this)
      return;
    oldCwd.isCWD = false;
    this.isCWD = true;
    const changed = new Set([]);
    let rp = [];
    let p = this;
    while (p && p.parent) {
      changed.add(p);
      p.#relative = rp.join(this.sep);
      p.#relativePosix = rp.join("/");
      p = p.parent;
      rp.push("..");
    }
    p = oldCwd;
    while (p && p.parent && !changed.has(p)) {
      p.#relative = undefined;
      p.#relativePosix = undefined;
      p = p.parent;
    }
  }
}

class PathWin32 extends PathBase {
  sep = "\\";
  splitSep = eitherSep;
  constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
    super(name, type, root, roots, nocase, children, opts);
  }
  newChild(name, type = UNKNOWN, opts = {}) {
    return new PathWin32(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
  }
  getRootString(path2) {
    return win32.parse(path2).root;
  }
  getRoot(rootPath) {
    rootPath = uncToDrive(rootPath.toUpperCase());
    if (rootPath === this.root.name) {
      return this.root;
    }
    for (const [compare, root] of Object.entries(this.roots)) {
      if (this.sameRoot(rootPath, compare)) {
        return this.roots[rootPath] = root;
      }
    }
    return this.roots[rootPath] = new PathScurryWin32(rootPath, this).root;
  }
  sameRoot(rootPath, compare = this.root.name) {
    rootPath = rootPath.toUpperCase().replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
    return rootPath === compare;
  }
}

class PathPosix extends PathBase {
  splitSep = "/";
  sep = "/";
  constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
    super(name, type, root, roots, nocase, children, opts);
  }
  getRootString(path2) {
    return path2.startsWith("/") ? "/" : "";
  }
  getRoot(_rootPath) {
    return this.root;
  }
  newChild(name, type = UNKNOWN, opts = {}) {
    return new PathPosix(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
  }
}

class PathScurryBase {
  root;
  rootPath;
  roots;
  cwd;
  #resolveCache;
  #resolvePosixCache;
  #children;
  nocase;
  #fs;
  constructor(cwd = process.cwd(), pathImpl, sep2, { nocase, childrenCacheSize = 16 * 1024, fs = defaultFS } = {}) {
    this.#fs = fsFromOption(fs);
    if (cwd instanceof URL || cwd.startsWith("file://")) {
      cwd = fileURLToPath(cwd);
    }
    const cwdPath = pathImpl.resolve(cwd);
    this.roots = Object.create(null);
    this.rootPath = this.parseRootPath(cwdPath);
    this.#resolveCache = new ResolveCache;
    this.#resolvePosixCache = new ResolveCache;
    this.#children = new ChildrenCache(childrenCacheSize);
    const split = cwdPath.substring(this.rootPath.length).split(sep2);
    if (split.length === 1 && !split[0]) {
      split.pop();
    }
    if (nocase === undefined) {
      throw new TypeError("must provide nocase setting to PathScurryBase ctor");
    }
    this.nocase = nocase;
    this.root = this.newRoot(this.#fs);
    this.roots[this.rootPath] = this.root;
    let prev = this.root;
    let len = split.length - 1;
    const joinSep = pathImpl.sep;
    let abs = this.rootPath;
    let sawFirst = false;
    for (const part of split) {
      const l = len--;
      prev = prev.child(part, {
        relative: new Array(l).fill("..").join(joinSep),
        relativePosix: new Array(l).fill("..").join("/"),
        fullpath: abs += (sawFirst ? "" : joinSep) + part
      });
      sawFirst = true;
    }
    this.cwd = prev;
  }
  depth(path2 = this.cwd) {
    if (typeof path2 === "string") {
      path2 = this.cwd.resolve(path2);
    }
    return path2.depth();
  }
  childrenCache() {
    return this.#children;
  }
  resolve(...paths) {
    let r = "";
    for (let i = paths.length - 1;i >= 0; i--) {
      const p = paths[i];
      if (!p || p === ".")
        continue;
      r = r ? `${p}/${r}` : p;
      if (this.isAbsolute(p)) {
        break;
      }
    }
    const cached = this.#resolveCache.get(r);
    if (cached !== undefined) {
      return cached;
    }
    const result = this.cwd.resolve(r).fullpath();
    this.#resolveCache.set(r, result);
    return result;
  }
  resolvePosix(...paths) {
    let r = "";
    for (let i = paths.length - 1;i >= 0; i--) {
      const p = paths[i];
      if (!p || p === ".")
        continue;
      r = r ? `${p}/${r}` : p;
      if (this.isAbsolute(p)) {
        break;
      }
    }
    const cached = this.#resolvePosixCache.get(r);
    if (cached !== undefined) {
      return cached;
    }
    const result = this.cwd.resolve(r).fullpathPosix();
    this.#resolvePosixCache.set(r, result);
    return result;
  }
  relative(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.relative();
  }
  relativePosix(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.relativePosix();
  }
  basename(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.name;
  }
  dirname(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return (entry.parent || entry).fullpath();
  }
  async readdir(entry = this.cwd, opts = {
    withFileTypes: true
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes } = opts;
    if (!entry.canReaddir()) {
      return [];
    } else {
      const p = await entry.readdir();
      return withFileTypes ? p : p.map((e) => e.name);
    }
  }
  readdirSync(entry = this.cwd, opts = {
    withFileTypes: true
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true } = opts;
    if (!entry.canReaddir()) {
      return [];
    } else if (withFileTypes) {
      return entry.readdirSync();
    } else {
      return entry.readdirSync().map((e) => e.name);
    }
  }
  async lstat(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.lstat();
  }
  lstatSync(entry = this.cwd) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    }
    return entry.lstatSync();
  }
  async readlink(entry = this.cwd, { withFileTypes } = {
    withFileTypes: false
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      withFileTypes = entry.withFileTypes;
      entry = this.cwd;
    }
    const e = await entry.readlink();
    return withFileTypes ? e : e?.fullpath();
  }
  readlinkSync(entry = this.cwd, { withFileTypes } = {
    withFileTypes: false
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      withFileTypes = entry.withFileTypes;
      entry = this.cwd;
    }
    const e = entry.readlinkSync();
    return withFileTypes ? e : e?.fullpath();
  }
  async realpath(entry = this.cwd, { withFileTypes } = {
    withFileTypes: false
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      withFileTypes = entry.withFileTypes;
      entry = this.cwd;
    }
    const e = await entry.realpath();
    return withFileTypes ? e : e?.fullpath();
  }
  realpathSync(entry = this.cwd, { withFileTypes } = {
    withFileTypes: false
  }) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      withFileTypes = entry.withFileTypes;
      entry = this.cwd;
    }
    const e = entry.realpathSync();
    return withFileTypes ? e : e?.fullpath();
  }
  async walk(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    const results = [];
    if (!filter2 || filter2(entry)) {
      results.push(withFileTypes ? entry : entry.fullpath());
    }
    const dirs = new Set;
    const walk = (dir, cb) => {
      dirs.add(dir);
      dir.readdirCB((er, entries) => {
        if (er) {
          return cb(er);
        }
        let len = entries.length;
        if (!len)
          return cb();
        const next = () => {
          if (--len === 0) {
            cb();
          }
        };
        for (const e of entries) {
          if (!filter2 || filter2(e)) {
            results.push(withFileTypes ? e : e.fullpath());
          }
          if (follow && e.isSymbolicLink()) {
            e.realpath().then((r) => r?.isUnknown() ? r.lstat() : r).then((r) => r?.shouldWalk(dirs, walkFilter) ? walk(r, next) : next());
          } else {
            if (e.shouldWalk(dirs, walkFilter)) {
              walk(e, next);
            } else {
              next();
            }
          }
        }
      }, true);
    };
    const start = entry;
    return new Promise((res, rej) => {
      walk(start, (er) => {
        if (er)
          return rej(er);
        res(results);
      });
    });
  }
  walkSync(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    const results = [];
    if (!filter2 || filter2(entry)) {
      results.push(withFileTypes ? entry : entry.fullpath());
    }
    const dirs = new Set([entry]);
    for (const dir of dirs) {
      const entries = dir.readdirSync();
      for (const e of entries) {
        if (!filter2 || filter2(e)) {
          results.push(withFileTypes ? e : e.fullpath());
        }
        let r = e;
        if (e.isSymbolicLink()) {
          if (!(follow && (r = e.realpathSync())))
            continue;
          if (r.isUnknown())
            r.lstatSync();
        }
        if (r.shouldWalk(dirs, walkFilter)) {
          dirs.add(r);
        }
      }
    }
    return results;
  }
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
  iterate(entry = this.cwd, options = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      options = entry;
      entry = this.cwd;
    }
    return this.stream(entry, options)[Symbol.asyncIterator]();
  }
  [Symbol.iterator]() {
    return this.iterateSync();
  }
  *iterateSync(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    if (!filter2 || filter2(entry)) {
      yield withFileTypes ? entry : entry.fullpath();
    }
    const dirs = new Set([entry]);
    for (const dir of dirs) {
      const entries = dir.readdirSync();
      for (const e of entries) {
        if (!filter2 || filter2(e)) {
          yield withFileTypes ? e : e.fullpath();
        }
        let r = e;
        if (e.isSymbolicLink()) {
          if (!(follow && (r = e.realpathSync())))
            continue;
          if (r.isUnknown())
            r.lstatSync();
        }
        if (r.shouldWalk(dirs, walkFilter)) {
          dirs.add(r);
        }
      }
    }
  }
  stream(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    const results = new Minipass({ objectMode: true });
    if (!filter2 || filter2(entry)) {
      results.write(withFileTypes ? entry : entry.fullpath());
    }
    const dirs = new Set;
    const queue = [entry];
    let processing = 0;
    const process3 = () => {
      let paused = false;
      while (!paused) {
        const dir = queue.shift();
        if (!dir) {
          if (processing === 0)
            results.end();
          return;
        }
        processing++;
        dirs.add(dir);
        const onReaddir = (er, entries, didRealpaths = false) => {
          if (er)
            return results.emit("error", er);
          if (follow && !didRealpaths) {
            const promises = [];
            for (const e of entries) {
              if (e.isSymbolicLink()) {
                promises.push(e.realpath().then((r) => r?.isUnknown() ? r.lstat() : r));
              }
            }
            if (promises.length) {
              Promise.all(promises).then(() => onReaddir(null, entries, true));
              return;
            }
          }
          for (const e of entries) {
            if (e && (!filter2 || filter2(e))) {
              if (!results.write(withFileTypes ? e : e.fullpath())) {
                paused = true;
              }
            }
          }
          processing--;
          for (const e of entries) {
            const r = e.realpathCached() || e;
            if (r.shouldWalk(dirs, walkFilter)) {
              queue.push(r);
            }
          }
          if (paused && !results.flowing) {
            results.once("drain", process3);
          } else if (!sync) {
            process3();
          }
        };
        let sync = true;
        dir.readdirCB(onReaddir, true);
        sync = false;
      }
    };
    process3();
    return results;
  }
  streamSync(entry = this.cwd, opts = {}) {
    if (typeof entry === "string") {
      entry = this.cwd.resolve(entry);
    } else if (!(entry instanceof PathBase)) {
      opts = entry;
      entry = this.cwd;
    }
    const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts;
    const results = new Minipass({ objectMode: true });
    const dirs = new Set;
    if (!filter2 || filter2(entry)) {
      results.write(withFileTypes ? entry : entry.fullpath());
    }
    const queue = [entry];
    let processing = 0;
    const process3 = () => {
      let paused = false;
      while (!paused) {
        const dir = queue.shift();
        if (!dir) {
          if (processing === 0)
            results.end();
          return;
        }
        processing++;
        dirs.add(dir);
        const entries = dir.readdirSync();
        for (const e of entries) {
          if (!filter2 || filter2(e)) {
            if (!results.write(withFileTypes ? e : e.fullpath())) {
              paused = true;
            }
          }
        }
        processing--;
        for (const e of entries) {
          let r = e;
          if (e.isSymbolicLink()) {
            if (!(follow && (r = e.realpathSync())))
              continue;
            if (r.isUnknown())
              r.lstatSync();
          }
          if (r.shouldWalk(dirs, walkFilter)) {
            queue.push(r);
          }
        }
      }
      if (paused && !results.flowing)
        results.once("drain", process3);
    };
    process3();
    return results;
  }
  chdir(path2 = this.cwd) {
    const oldCwd = this.cwd;
    this.cwd = typeof path2 === "string" ? this.cwd.resolve(path2) : path2;
    this.cwd[setAsCwd](oldCwd);
  }
}

class PathScurryWin32 extends PathScurryBase {
  sep = "\\";
  constructor(cwd = process.cwd(), opts = {}) {
    const { nocase = true } = opts;
    super(cwd, win32, "\\", { ...opts, nocase });
    this.nocase = nocase;
    for (let p = this.cwd;p; p = p.parent) {
      p.nocase = this.nocase;
    }
  }
  parseRootPath(dir) {
    return win32.parse(dir).root.toUpperCase();
  }
  newRoot(fs) {
    return new PathWin32(this.rootPath, IFDIR, undefined, this.roots, this.nocase, this.childrenCache(), { fs });
  }
  isAbsolute(p) {
    return p.startsWith("/") || p.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(p);
  }
}

class PathScurryPosix extends PathScurryBase {
  sep = "/";
  constructor(cwd = process.cwd(), opts = {}) {
    const { nocase = false } = opts;
    super(cwd, posix, "/", { ...opts, nocase });
    this.nocase = nocase;
  }
  parseRootPath(_dir) {
    return "/";
  }
  newRoot(fs) {
    return new PathPosix(this.rootPath, IFDIR, undefined, this.roots, this.nocase, this.childrenCache(), { fs });
  }
  isAbsolute(p) {
    return p.startsWith("/");
  }
}

class PathScurryDarwin extends PathScurryPosix {
  constructor(cwd = process.cwd(), opts = {}) {
    const { nocase = true } = opts;
    super(cwd, { ...opts, nocase });
  }
}
var Path = process.platform === "win32" ? PathWin32 : PathPosix;
var PathScurry = process.platform === "win32" ? PathScurryWin32 : process.platform === "darwin" ? PathScurryDarwin : PathScurryPosix;

// node_modules/glob/dist/esm/pattern.js
var isPatternList = (pl) => pl.length >= 1;
var isGlobList = (gl) => gl.length >= 1;

class Pattern {
  #patternList;
  #globList;
  #index;
  length;
  #platform;
  #rest;
  #globString;
  #isDrive;
  #isUNC;
  #isAbsolute;
  #followGlobstar = true;
  constructor(patternList, globList, index, platform) {
    if (!isPatternList(patternList)) {
      throw new TypeError("empty pattern list");
    }
    if (!isGlobList(globList)) {
      throw new TypeError("empty glob list");
    }
    if (globList.length !== patternList.length) {
      throw new TypeError("mismatched pattern list and glob list lengths");
    }
    this.length = patternList.length;
    if (index < 0 || index >= this.length) {
      throw new TypeError("index out of range");
    }
    this.#patternList = patternList;
    this.#globList = globList;
    this.#index = index;
    this.#platform = platform;
    if (this.#index === 0) {
      if (this.isUNC()) {
        const [p0, p1, p2, p3, ...prest] = this.#patternList;
        const [g0, g1, g2, g3, ...grest] = this.#globList;
        if (prest[0] === "") {
          prest.shift();
          grest.shift();
        }
        const p = [p0, p1, p2, p3, ""].join("/");
        const g = [g0, g1, g2, g3, ""].join("/");
        this.#patternList = [p, ...prest];
        this.#globList = [g, ...grest];
        this.length = this.#patternList.length;
      } else if (this.isDrive() || this.isAbsolute()) {
        const [p1, ...prest] = this.#patternList;
        const [g1, ...grest] = this.#globList;
        if (prest[0] === "") {
          prest.shift();
          grest.shift();
        }
        const p = p1 + "/";
        const g = g1 + "/";
        this.#patternList = [p, ...prest];
        this.#globList = [g, ...grest];
        this.length = this.#patternList.length;
      }
    }
  }
  pattern() {
    return this.#patternList[this.#index];
  }
  isString() {
    return typeof this.#patternList[this.#index] === "string";
  }
  isGlobstar() {
    return this.#patternList[this.#index] === GLOBSTAR;
  }
  isRegExp() {
    return this.#patternList[this.#index] instanceof RegExp;
  }
  globString() {
    return this.#globString = this.#globString || (this.#index === 0 ? this.isAbsolute() ? this.#globList[0] + this.#globList.slice(1).join("/") : this.#globList.join("/") : this.#globList.slice(this.#index).join("/"));
  }
  hasMore() {
    return this.length > this.#index + 1;
  }
  rest() {
    if (this.#rest !== undefined)
      return this.#rest;
    if (!this.hasMore())
      return this.#rest = null;
    this.#rest = new Pattern(this.#patternList, this.#globList, this.#index + 1, this.#platform);
    this.#rest.#isAbsolute = this.#isAbsolute;
    this.#rest.#isUNC = this.#isUNC;
    this.#rest.#isDrive = this.#isDrive;
    return this.#rest;
  }
  isUNC() {
    const pl = this.#patternList;
    return this.#isUNC !== undefined ? this.#isUNC : this.#isUNC = this.#platform === "win32" && this.#index === 0 && pl[0] === "" && pl[1] === "" && typeof pl[2] === "string" && !!pl[2] && typeof pl[3] === "string" && !!pl[3];
  }
  isDrive() {
    const pl = this.#patternList;
    return this.#isDrive !== undefined ? this.#isDrive : this.#isDrive = this.#platform === "win32" && this.#index === 0 && this.length > 1 && typeof pl[0] === "string" && /^[a-z]:$/i.test(pl[0]);
  }
  isAbsolute() {
    const pl = this.#patternList;
    return this.#isAbsolute !== undefined ? this.#isAbsolute : this.#isAbsolute = pl[0] === "" && pl.length > 1 || this.isDrive() || this.isUNC();
  }
  root() {
    const p = this.#patternList[0];
    return typeof p === "string" && this.isAbsolute() && this.#index === 0 ? p : "";
  }
  checkFollowGlobstar() {
    return !(this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar);
  }
  markFollowGlobstar() {
    if (this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar)
      return false;
    this.#followGlobstar = false;
    return true;
  }
}

// node_modules/glob/dist/esm/ignore.js
var defaultPlatform2 = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";

class Ignore {
  relative;
  relativeChildren;
  absolute;
  absoluteChildren;
  platform;
  mmopts;
  constructor(ignored, { nobrace, nocase, noext, noglobstar, platform = defaultPlatform2 }) {
    this.relative = [];
    this.absolute = [];
    this.relativeChildren = [];
    this.absoluteChildren = [];
    this.platform = platform;
    this.mmopts = {
      dot: true,
      nobrace,
      nocase,
      noext,
      noglobstar,
      optimizationLevel: 2,
      platform,
      nocomment: true,
      nonegate: true
    };
    for (const ign of ignored)
      this.add(ign);
  }
  add(ign) {
    const mm = new Minimatch(ign, this.mmopts);
    for (let i = 0;i < mm.set.length; i++) {
      const parsed = mm.set[i];
      const globParts = mm.globParts[i];
      if (!parsed || !globParts) {
        throw new Error("invalid pattern object");
      }
      while (parsed[0] === "." && globParts[0] === ".") {
        parsed.shift();
        globParts.shift();
      }
      const p = new Pattern(parsed, globParts, 0, this.platform);
      const m = new Minimatch(p.globString(), this.mmopts);
      const children = globParts[globParts.length - 1] === "**";
      const absolute = p.isAbsolute();
      if (absolute)
        this.absolute.push(m);
      else
        this.relative.push(m);
      if (children) {
        if (absolute)
          this.absoluteChildren.push(m);
        else
          this.relativeChildren.push(m);
      }
    }
  }
  ignored(p) {
    const fullpath = p.fullpath();
    const fullpaths = `${fullpath}/`;
    const relative = p.relative() || ".";
    const relatives = `${relative}/`;
    for (const m of this.relative) {
      if (m.match(relative) || m.match(relatives))
        return true;
    }
    for (const m of this.absolute) {
      if (m.match(fullpath) || m.match(fullpaths))
        return true;
    }
    return false;
  }
  childrenIgnored(p) {
    const fullpath = p.fullpath() + "/";
    const relative = (p.relative() || ".") + "/";
    for (const m of this.relativeChildren) {
      if (m.match(relative))
        return true;
    }
    for (const m of this.absoluteChildren) {
      if (m.match(fullpath))
        return true;
    }
    return false;
  }
}

// node_modules/glob/dist/esm/processor.js
class HasWalkedCache {
  store;
  constructor(store = new Map) {
    this.store = store;
  }
  copy() {
    return new HasWalkedCache(new Map(this.store));
  }
  hasWalked(target, pattern) {
    return this.store.get(target.fullpath())?.has(pattern.globString());
  }
  storeWalked(target, pattern) {
    const fullpath = target.fullpath();
    const cached = this.store.get(fullpath);
    if (cached)
      cached.add(pattern.globString());
    else
      this.store.set(fullpath, new Set([pattern.globString()]));
  }
}

class MatchRecord {
  store = new Map;
  add(target, absolute, ifDir) {
    const n = (absolute ? 2 : 0) | (ifDir ? 1 : 0);
    const current = this.store.get(target);
    this.store.set(target, current === undefined ? n : n & current);
  }
  entries() {
    return [...this.store.entries()].map(([path2, n]) => [
      path2,
      !!(n & 2),
      !!(n & 1)
    ]);
  }
}

class SubWalks {
  store = new Map;
  add(target, pattern) {
    if (!target.canReaddir()) {
      return;
    }
    const subs = this.store.get(target);
    if (subs) {
      if (!subs.find((p) => p.globString() === pattern.globString())) {
        subs.push(pattern);
      }
    } else
      this.store.set(target, [pattern]);
  }
  get(target) {
    const subs = this.store.get(target);
    if (!subs) {
      throw new Error("attempting to walk unknown path");
    }
    return subs;
  }
  entries() {
    return this.keys().map((k) => [k, this.store.get(k)]);
  }
  keys() {
    return [...this.store.keys()].filter((t) => t.canReaddir());
  }
}

class Processor {
  hasWalkedCache;
  matches = new MatchRecord;
  subwalks = new SubWalks;
  patterns;
  follow;
  dot;
  opts;
  constructor(opts, hasWalkedCache) {
    this.opts = opts;
    this.follow = !!opts.follow;
    this.dot = !!opts.dot;
    this.hasWalkedCache = hasWalkedCache ? hasWalkedCache.copy() : new HasWalkedCache;
  }
  processPatterns(target, patterns) {
    this.patterns = patterns;
    const processingSet = patterns.map((p) => [target, p]);
    for (let [t, pattern] of processingSet) {
      this.hasWalkedCache.storeWalked(t, pattern);
      const root = pattern.root();
      const absolute = pattern.isAbsolute() && this.opts.absolute !== false;
      if (root) {
        t = t.resolve(root === "/" && this.opts.root !== undefined ? this.opts.root : root);
        const rest2 = pattern.rest();
        if (!rest2) {
          this.matches.add(t, true, false);
          continue;
        } else {
          pattern = rest2;
        }
      }
      if (t.isENOENT())
        continue;
      let p;
      let rest;
      let changed = false;
      while (typeof (p = pattern.pattern()) === "string" && (rest = pattern.rest())) {
        const c = t.resolve(p);
        t = c;
        pattern = rest;
        changed = true;
      }
      p = pattern.pattern();
      rest = pattern.rest();
      if (changed) {
        if (this.hasWalkedCache.hasWalked(t, pattern))
          continue;
        this.hasWalkedCache.storeWalked(t, pattern);
      }
      if (typeof p === "string") {
        const ifDir = p === ".." || p === "" || p === ".";
        this.matches.add(t.resolve(p), absolute, ifDir);
        continue;
      } else if (p === GLOBSTAR) {
        if (!t.isSymbolicLink() || this.follow || pattern.checkFollowGlobstar()) {
          this.subwalks.add(t, pattern);
        }
        const rp = rest?.pattern();
        const rrest = rest?.rest();
        if (!rest || (rp === "" || rp === ".") && !rrest) {
          this.matches.add(t, absolute, rp === "" || rp === ".");
        } else {
          if (rp === "..") {
            const tp = t.parent || t;
            if (!rrest)
              this.matches.add(tp, absolute, true);
            else if (!this.hasWalkedCache.hasWalked(tp, rrest)) {
              this.subwalks.add(tp, rrest);
            }
          }
        }
      } else if (p instanceof RegExp) {
        this.subwalks.add(t, pattern);
      }
    }
    return this;
  }
  subwalkTargets() {
    return this.subwalks.keys();
  }
  child() {
    return new Processor(this.opts, this.hasWalkedCache);
  }
  filterEntries(parent, entries) {
    const patterns = this.subwalks.get(parent);
    const results = this.child();
    for (const e of entries) {
      for (const pattern of patterns) {
        const absolute = pattern.isAbsolute();
        const p = pattern.pattern();
        const rest = pattern.rest();
        if (p === GLOBSTAR) {
          results.testGlobstar(e, pattern, rest, absolute);
        } else if (p instanceof RegExp) {
          results.testRegExp(e, p, rest, absolute);
        } else {
          results.testString(e, p, rest, absolute);
        }
      }
    }
    return results;
  }
  testGlobstar(e, pattern, rest, absolute) {
    if (this.dot || !e.name.startsWith(".")) {
      if (!pattern.hasMore()) {
        this.matches.add(e, absolute, false);
      }
      if (e.canReaddir()) {
        if (this.follow || !e.isSymbolicLink()) {
          this.subwalks.add(e, pattern);
        } else if (e.isSymbolicLink()) {
          if (rest && pattern.checkFollowGlobstar()) {
            this.subwalks.add(e, rest);
          } else if (pattern.markFollowGlobstar()) {
            this.subwalks.add(e, pattern);
          }
        }
      }
    }
    if (rest) {
      const rp = rest.pattern();
      if (typeof rp === "string" && rp !== ".." && rp !== "" && rp !== ".") {
        this.testString(e, rp, rest.rest(), absolute);
      } else if (rp === "..") {
        const ep = e.parent || e;
        this.subwalks.add(ep, rest);
      } else if (rp instanceof RegExp) {
        this.testRegExp(e, rp, rest.rest(), absolute);
      }
    }
  }
  testRegExp(e, p, rest, absolute) {
    if (!p.test(e.name))
      return;
    if (!rest) {
      this.matches.add(e, absolute, false);
    } else {
      this.subwalks.add(e, rest);
    }
  }
  testString(e, p, rest, absolute) {
    if (!e.isNamed(p))
      return;
    if (!rest) {
      this.matches.add(e, absolute, false);
    } else {
      this.subwalks.add(e, rest);
    }
  }
}

// node_modules/glob/dist/esm/walker.js
var makeIgnore = (ignore, opts) => typeof ignore === "string" ? new Ignore([ignore], opts) : Array.isArray(ignore) ? new Ignore(ignore, opts) : ignore;

class GlobUtil {
  path;
  patterns;
  opts;
  seen = new Set;
  paused = false;
  aborted = false;
  #onResume = [];
  #ignore;
  #sep;
  signal;
  maxDepth;
  includeChildMatches;
  constructor(patterns, path2, opts) {
    this.patterns = patterns;
    this.path = path2;
    this.opts = opts;
    this.#sep = !opts.posix && opts.platform === "win32" ? "\\" : "/";
    this.includeChildMatches = opts.includeChildMatches !== false;
    if (opts.ignore || !this.includeChildMatches) {
      this.#ignore = makeIgnore(opts.ignore ?? [], opts);
      if (!this.includeChildMatches && typeof this.#ignore.add !== "function") {
        const m = "cannot ignore child matches, ignore lacks add() method.";
        throw new Error(m);
      }
    }
    this.maxDepth = opts.maxDepth || Infinity;
    if (opts.signal) {
      this.signal = opts.signal;
      this.signal.addEventListener("abort", () => {
        this.#onResume.length = 0;
      });
    }
  }
  #ignored(path2) {
    return this.seen.has(path2) || !!this.#ignore?.ignored?.(path2);
  }
  #childrenIgnored(path2) {
    return !!this.#ignore?.childrenIgnored?.(path2);
  }
  pause() {
    this.paused = true;
  }
  resume() {
    if (this.signal?.aborted)
      return;
    this.paused = false;
    let fn = undefined;
    while (!this.paused && (fn = this.#onResume.shift())) {
      fn();
    }
  }
  onResume(fn) {
    if (this.signal?.aborted)
      return;
    if (!this.paused) {
      fn();
    } else {
      this.#onResume.push(fn);
    }
  }
  async matchCheck(e, ifDir) {
    if (ifDir && this.opts.nodir)
      return;
    let rpc;
    if (this.opts.realpath) {
      rpc = e.realpathCached() || await e.realpath();
      if (!rpc)
        return;
      e = rpc;
    }
    const needStat = e.isUnknown() || this.opts.stat;
    const s = needStat ? await e.lstat() : e;
    if (this.opts.follow && this.opts.nodir && s?.isSymbolicLink()) {
      const target = await s.realpath();
      if (target && (target.isUnknown() || this.opts.stat)) {
        await target.lstat();
      }
    }
    return this.matchCheckTest(s, ifDir);
  }
  matchCheckTest(e, ifDir) {
    return e && (this.maxDepth === Infinity || e.depth() <= this.maxDepth) && (!ifDir || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && (!this.opts.nodir || !this.opts.follow || !e.isSymbolicLink() || !e.realpathCached()?.isDirectory()) && !this.#ignored(e) ? e : undefined;
  }
  matchCheckSync(e, ifDir) {
    if (ifDir && this.opts.nodir)
      return;
    let rpc;
    if (this.opts.realpath) {
      rpc = e.realpathCached() || e.realpathSync();
      if (!rpc)
        return;
      e = rpc;
    }
    const needStat = e.isUnknown() || this.opts.stat;
    const s = needStat ? e.lstatSync() : e;
    if (this.opts.follow && this.opts.nodir && s?.isSymbolicLink()) {
      const target = s.realpathSync();
      if (target && (target?.isUnknown() || this.opts.stat)) {
        target.lstatSync();
      }
    }
    return this.matchCheckTest(s, ifDir);
  }
  matchFinish(e, absolute) {
    if (this.#ignored(e))
      return;
    if (!this.includeChildMatches && this.#ignore?.add) {
      const ign = `${e.relativePosix()}/**`;
      this.#ignore.add(ign);
    }
    const abs = this.opts.absolute === undefined ? absolute : this.opts.absolute;
    this.seen.add(e);
    const mark = this.opts.mark && e.isDirectory() ? this.#sep : "";
    if (this.opts.withFileTypes) {
      this.matchEmit(e);
    } else if (abs) {
      const abs2 = this.opts.posix ? e.fullpathPosix() : e.fullpath();
      this.matchEmit(abs2 + mark);
    } else {
      const rel = this.opts.posix ? e.relativePosix() : e.relative();
      const pre = this.opts.dotRelative && !rel.startsWith(".." + this.#sep) ? "." + this.#sep : "";
      this.matchEmit(!rel ? "." + mark : pre + rel + mark);
    }
  }
  async match(e, absolute, ifDir) {
    const p = await this.matchCheck(e, ifDir);
    if (p)
      this.matchFinish(p, absolute);
  }
  matchSync(e, absolute, ifDir) {
    const p = this.matchCheckSync(e, ifDir);
    if (p)
      this.matchFinish(p, absolute);
  }
  walkCB(target, patterns, cb) {
    if (this.signal?.aborted)
      cb();
    this.walkCB2(target, patterns, new Processor(this.opts), cb);
  }
  walkCB2(target, patterns, processor, cb) {
    if (this.#childrenIgnored(target))
      return cb();
    if (this.signal?.aborted)
      cb();
    if (this.paused) {
      this.onResume(() => this.walkCB2(target, patterns, processor, cb));
      return;
    }
    processor.processPatterns(target, patterns);
    let tasks = 1;
    const next = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (this.#ignored(m))
        continue;
      tasks++;
      this.match(m, absolute, ifDir).then(() => next());
    }
    for (const t of processor.subwalkTargets()) {
      if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
        continue;
      }
      tasks++;
      const childrenCached = t.readdirCached();
      if (t.calledReaddir())
        this.walkCB3(t, childrenCached, processor, next);
      else {
        t.readdirCB((_, entries) => this.walkCB3(t, entries, processor, next), true);
      }
    }
    next();
  }
  walkCB3(target, entries, processor, cb) {
    processor = processor.filterEntries(target, entries);
    let tasks = 1;
    const next = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (this.#ignored(m))
        continue;
      tasks++;
      this.match(m, absolute, ifDir).then(() => next());
    }
    for (const [target2, patterns] of processor.subwalks.entries()) {
      tasks++;
      this.walkCB2(target2, patterns, processor.child(), next);
    }
    next();
  }
  walkCBSync(target, patterns, cb) {
    if (this.signal?.aborted)
      cb();
    this.walkCB2Sync(target, patterns, new Processor(this.opts), cb);
  }
  walkCB2Sync(target, patterns, processor, cb) {
    if (this.#childrenIgnored(target))
      return cb();
    if (this.signal?.aborted)
      cb();
    if (this.paused) {
      this.onResume(() => this.walkCB2Sync(target, patterns, processor, cb));
      return;
    }
    processor.processPatterns(target, patterns);
    let tasks = 1;
    const next = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (this.#ignored(m))
        continue;
      this.matchSync(m, absolute, ifDir);
    }
    for (const t of processor.subwalkTargets()) {
      if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
        continue;
      }
      tasks++;
      const children = t.readdirSync();
      this.walkCB3Sync(t, children, processor, next);
    }
    next();
  }
  walkCB3Sync(target, entries, processor, cb) {
    processor = processor.filterEntries(target, entries);
    let tasks = 1;
    const next = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (this.#ignored(m))
        continue;
      this.matchSync(m, absolute, ifDir);
    }
    for (const [target2, patterns] of processor.subwalks.entries()) {
      tasks++;
      this.walkCB2Sync(target2, patterns, processor.child(), next);
    }
    next();
  }
}

class GlobWalker extends GlobUtil {
  matches = new Set;
  constructor(patterns, path2, opts) {
    super(patterns, path2, opts);
  }
  matchEmit(e) {
    this.matches.add(e);
  }
  async walk() {
    if (this.signal?.aborted)
      throw this.signal.reason;
    if (this.path.isUnknown()) {
      await this.path.lstat();
    }
    await new Promise((res, rej) => {
      this.walkCB(this.path, this.patterns, () => {
        if (this.signal?.aborted) {
          rej(this.signal.reason);
        } else {
          res(this.matches);
        }
      });
    });
    return this.matches;
  }
  walkSync() {
    if (this.signal?.aborted)
      throw this.signal.reason;
    if (this.path.isUnknown()) {
      this.path.lstatSync();
    }
    this.walkCBSync(this.path, this.patterns, () => {
      if (this.signal?.aborted)
        throw this.signal.reason;
    });
    return this.matches;
  }
}

class GlobStream extends GlobUtil {
  results;
  constructor(patterns, path2, opts) {
    super(patterns, path2, opts);
    this.results = new Minipass({
      signal: this.signal,
      objectMode: true
    });
    this.results.on("drain", () => this.resume());
    this.results.on("resume", () => this.resume());
  }
  matchEmit(e) {
    this.results.write(e);
    if (!this.results.flowing)
      this.pause();
  }
  stream() {
    const target = this.path;
    if (target.isUnknown()) {
      target.lstat().then(() => {
        this.walkCB(target, this.patterns, () => this.results.end());
      });
    } else {
      this.walkCB(target, this.patterns, () => this.results.end());
    }
    return this.results;
  }
  streamSync() {
    if (this.path.isUnknown()) {
      this.path.lstatSync();
    }
    this.walkCBSync(this.path, this.patterns, () => this.results.end());
    return this.results;
  }
}

// node_modules/glob/dist/esm/glob.js
var defaultPlatform3 = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";

class Glob {
  absolute;
  cwd;
  root;
  dot;
  dotRelative;
  follow;
  ignore;
  magicalBraces;
  mark;
  matchBase;
  maxDepth;
  nobrace;
  nocase;
  nodir;
  noext;
  noglobstar;
  pattern;
  platform;
  realpath;
  scurry;
  stat;
  signal;
  windowsPathsNoEscape;
  withFileTypes;
  includeChildMatches;
  opts;
  patterns;
  constructor(pattern, opts) {
    if (!opts)
      throw new TypeError("glob options required");
    this.withFileTypes = !!opts.withFileTypes;
    this.signal = opts.signal;
    this.follow = !!opts.follow;
    this.dot = !!opts.dot;
    this.dotRelative = !!opts.dotRelative;
    this.nodir = !!opts.nodir;
    this.mark = !!opts.mark;
    if (!opts.cwd) {
      this.cwd = "";
    } else if (opts.cwd instanceof URL || opts.cwd.startsWith("file://")) {
      opts.cwd = fileURLToPath2(opts.cwd);
    }
    this.cwd = opts.cwd || "";
    this.root = opts.root;
    this.magicalBraces = !!opts.magicalBraces;
    this.nobrace = !!opts.nobrace;
    this.noext = !!opts.noext;
    this.realpath = !!opts.realpath;
    this.absolute = opts.absolute;
    this.includeChildMatches = opts.includeChildMatches !== false;
    this.noglobstar = !!opts.noglobstar;
    this.matchBase = !!opts.matchBase;
    this.maxDepth = typeof opts.maxDepth === "number" ? opts.maxDepth : Infinity;
    this.stat = !!opts.stat;
    this.ignore = opts.ignore;
    if (this.withFileTypes && this.absolute !== undefined) {
      throw new Error("cannot set absolute and withFileTypes:true");
    }
    if (typeof pattern === "string") {
      pattern = [pattern];
    }
    this.windowsPathsNoEscape = !!opts.windowsPathsNoEscape || opts.allowWindowsEscape === false;
    if (this.windowsPathsNoEscape) {
      pattern = pattern.map((p) => p.replace(/\\/g, "/"));
    }
    if (this.matchBase) {
      if (opts.noglobstar) {
        throw new TypeError("base matching requires globstar");
      }
      pattern = pattern.map((p) => p.includes("/") ? p : `./**/${p}`);
    }
    this.pattern = pattern;
    this.platform = opts.platform || defaultPlatform3;
    this.opts = { ...opts, platform: this.platform };
    if (opts.scurry) {
      this.scurry = opts.scurry;
      if (opts.nocase !== undefined && opts.nocase !== opts.scurry.nocase) {
        throw new Error("nocase option contradicts provided scurry option");
      }
    } else {
      const Scurry = opts.platform === "win32" ? PathScurryWin32 : opts.platform === "darwin" ? PathScurryDarwin : opts.platform ? PathScurryPosix : PathScurry;
      this.scurry = new Scurry(this.cwd, {
        nocase: opts.nocase,
        fs: opts.fs
      });
    }
    this.nocase = this.scurry.nocase;
    const nocaseMagicOnly = this.platform === "darwin" || this.platform === "win32";
    const mmo = {
      ...opts,
      dot: this.dot,
      matchBase: this.matchBase,
      nobrace: this.nobrace,
      nocase: this.nocase,
      nocaseMagicOnly,
      nocomment: true,
      noext: this.noext,
      nonegate: true,
      optimizationLevel: 2,
      platform: this.platform,
      windowsPathsNoEscape: this.windowsPathsNoEscape,
      debug: !!this.opts.debug
    };
    const mms = this.pattern.map((p) => new Minimatch(p, mmo));
    const [matchSet, globParts] = mms.reduce((set, m) => {
      set[0].push(...m.set);
      set[1].push(...m.globParts);
      return set;
    }, [[], []]);
    this.patterns = matchSet.map((set, i) => {
      const g = globParts[i];
      if (!g)
        throw new Error("invalid pattern object");
      return new Pattern(set, g, 0, this.platform);
    });
  }
  async walk() {
    return [
      ...await new GlobWalker(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
        platform: this.platform,
        nocase: this.nocase,
        includeChildMatches: this.includeChildMatches
      }).walk()
    ];
  }
  walkSync() {
    return [
      ...new GlobWalker(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
        platform: this.platform,
        nocase: this.nocase,
        includeChildMatches: this.includeChildMatches
      }).walkSync()
    ];
  }
  stream() {
    return new GlobStream(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
      platform: this.platform,
      nocase: this.nocase,
      includeChildMatches: this.includeChildMatches
    }).stream();
  }
  streamSync() {
    return new GlobStream(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
      platform: this.platform,
      nocase: this.nocase,
      includeChildMatches: this.includeChildMatches
    }).streamSync();
  }
  iterateSync() {
    return this.streamSync()[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.iterateSync();
  }
  iterate() {
    return this.stream()[Symbol.asyncIterator]();
  }
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
}

// node_modules/glob/dist/esm/has-magic.js
var hasMagic = (pattern, options = {}) => {
  if (!Array.isArray(pattern)) {
    pattern = [pattern];
  }
  for (const p of pattern) {
    if (new Minimatch(p, options).hasMagic())
      return true;
  }
  return false;
};

// node_modules/glob/dist/esm/index.js
function globStreamSync(pattern, options = {}) {
  return new Glob(pattern, options).streamSync();
}
function globStream(pattern, options = {}) {
  return new Glob(pattern, options).stream();
}
function globSync(pattern, options = {}) {
  return new Glob(pattern, options).walkSync();
}
async function glob_(pattern, options = {}) {
  return new Glob(pattern, options).walk();
}
function globIterateSync(pattern, options = {}) {
  return new Glob(pattern, options).iterateSync();
}
function globIterate(pattern, options = {}) {
  return new Glob(pattern, options).iterate();
}
var streamSync = globStreamSync;
var stream = Object.assign(globStream, { sync: globStreamSync });
var iterateSync = globIterateSync;
var iterate = Object.assign(globIterate, {
  sync: globIterateSync
});
var sync = Object.assign(globSync, {
  stream: globStreamSync,
  iterate: globIterateSync
});
var glob = Object.assign(glob_, {
  glob: glob_,
  globSync,
  sync,
  globStream,
  stream,
  globStreamSync,
  streamSync,
  globIterate,
  iterate,
  globIterateSync,
  iterateSync,
  Glob,
  hasMagic,
  escape,
  unescape
});
glob.glob = glob;

// node_modules/rimraf/dist/esm/opt-arg.js
var typeOrUndef = (val, t) => typeof val === "undefined" || typeof val === t;
var isRimrafOptions = (o) => !!o && typeof o === "object" && typeOrUndef(o.preserveRoot, "boolean") && typeOrUndef(o.tmp, "string") && typeOrUndef(o.maxRetries, "number") && typeOrUndef(o.retryDelay, "number") && typeOrUndef(o.backoff, "number") && typeOrUndef(o.maxBackoff, "number") && (typeOrUndef(o.glob, "boolean") || o.glob && typeof o.glob === "object") && typeOrUndef(o.filter, "function");
var assertRimrafOptions = (o) => {
  if (!isRimrafOptions(o)) {
    throw new Error("invalid rimraf options");
  }
};
var optArgT = (opt) => {
  assertRimrafOptions(opt);
  const { glob: glob2, ...options } = opt;
  if (!glob2) {
    return options;
  }
  const globOpt = glob2 === true ? opt.signal ? { signal: opt.signal } : {} : opt.signal ? {
    signal: opt.signal,
    ...glob2
  } : glob2;
  return {
    ...options,
    glob: {
      ...globOpt,
      absolute: true,
      withFileTypes: false
    }
  };
};
var optArg = (opt = {}) => optArgT(opt);
var optArgSync = (opt = {}) => optArgT(opt);

// node_modules/rimraf/dist/esm/path-arg.js
import { parse, resolve } from "path";
import { inspect } from "util";

// node_modules/rimraf/dist/esm/platform.js
var platform_default = process.env.__TESTING_RIMRAF_PLATFORM__ || process.platform;

// node_modules/rimraf/dist/esm/path-arg.js
var pathArg = (path2, opt = {}) => {
  const type = typeof path2;
  if (type !== "string") {
    const ctor = path2 && type === "object" && path2.constructor;
    const received = ctor && ctor.name ? `an instance of ${ctor.name}` : type === "object" ? inspect(path2) : `type ${type} ${path2}`;
    const msg = 'The "path" argument must be of type string. ' + `Received ${received}`;
    throw Object.assign(new TypeError(msg), {
      path: path2,
      code: "ERR_INVALID_ARG_TYPE"
    });
  }
  if (/\0/.test(path2)) {
    const msg = "path must be a string without null bytes";
    throw Object.assign(new TypeError(msg), {
      path: path2,
      code: "ERR_INVALID_ARG_VALUE"
    });
  }
  path2 = resolve(path2);
  const { root } = parse(path2);
  if (path2 === root && opt.preserveRoot !== false) {
    const msg = "refusing to remove root directory without preserveRoot:false";
    throw Object.assign(new Error(msg), {
      path: path2,
      code: "ERR_PRESERVE_ROOT"
    });
  }
  if (platform_default === "win32") {
    const badWinChars = /[*|"<>?:]/;
    const { root: root2 } = parse(path2);
    if (badWinChars.test(path2.substring(root2.length))) {
      throw Object.assign(new Error("Illegal characters in path."), {
        path: path2,
        code: "EINVAL"
      });
    }
  }
  return path2;
};
var path_arg_default = pathArg;

// node_modules/rimraf/dist/esm/fs.js
import fs from "fs";
import { chmodSync, mkdirSync, renameSync, rmdirSync, rmSync, statSync, lstatSync as lstatSync2, unlinkSync } from "fs";
import { readdirSync as rdSync } from "fs";
var readdirSync2 = (path2) => rdSync(path2, { withFileTypes: true });
var chmod = (path2, mode) => new Promise((res, rej) => fs.chmod(path2, mode, (er, ...d) => er ? rej(er) : res(...d)));
var mkdir = (path2, options) => new Promise((res, rej) => fs.mkdir(path2, options, (er, made) => er ? rej(er) : res(made)));
var readdir2 = (path2) => new Promise((res, rej) => fs.readdir(path2, { withFileTypes: true }, (er, data) => er ? rej(er) : res(data)));
var rename = (oldPath, newPath) => new Promise((res, rej) => fs.rename(oldPath, newPath, (er, ...d) => er ? rej(er) : res(...d)));
var rm = (path2, options) => new Promise((res, rej) => fs.rm(path2, options, (er, ...d) => er ? rej(er) : res(...d)));
var rmdir = (path2) => new Promise((res, rej) => fs.rmdir(path2, (er, ...d) => er ? rej(er) : res(...d)));
var stat = (path2) => new Promise((res, rej) => fs.stat(path2, (er, data) => er ? rej(er) : res(data)));
var lstat2 = (path2) => new Promise((res, rej) => fs.lstat(path2, (er, data) => er ? rej(er) : res(data)));
var unlink = (path2) => new Promise((res, rej) => fs.unlink(path2, (er, ...d) => er ? rej(er) : res(...d)));
var promises = {
  chmod,
  mkdir,
  readdir: readdir2,
  rename,
  rm,
  rmdir,
  stat,
  lstat: lstat2,
  unlink
};

// node_modules/rimraf/dist/esm/rimraf-posix.js
import { parse as parse2, resolve as resolve2 } from "path";

// node_modules/rimraf/dist/esm/readdir-or-error.js
var { readdir: readdir3 } = promises;
var readdirOrError = (path2) => readdir3(path2).catch((er) => er);
var readdirOrErrorSync = (path2) => {
  try {
    return readdirSync2(path2);
  } catch (er) {
    return er;
  }
};

// node_modules/rimraf/dist/esm/ignore-enoent.js
var ignoreENOENT = async (p) => p.catch((er) => {
  if (er.code !== "ENOENT") {
    throw er;
  }
});
var ignoreENOENTSync = (fn) => {
  try {
    return fn();
  } catch (er) {
    if (er?.code !== "ENOENT") {
      throw er;
    }
  }
};

// node_modules/rimraf/dist/esm/rimraf-posix.js
var { lstat: lstat3, rmdir: rmdir2, unlink: unlink2 } = promises;
var rimrafPosix = async (path2, opt) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  try {
    return await rimrafPosixDir(path2, opt, await lstat3(path2));
  } catch (er) {
    if (er?.code === "ENOENT")
      return true;
    throw er;
  }
};
var rimrafPosixSync = (path2, opt) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  try {
    return rimrafPosixDirSync(path2, opt, lstatSync2(path2));
  } catch (er) {
    if (er?.code === "ENOENT")
      return true;
    throw er;
  }
};
var rimrafPosixDir = async (path2, opt, ent) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  const entries = ent.isDirectory() ? await readdirOrError(path2) : null;
  if (!Array.isArray(entries)) {
    if (entries) {
      if (entries.code === "ENOENT") {
        return true;
      }
      if (entries.code !== "ENOTDIR") {
        throw entries;
      }
    }
    if (opt.filter && !await opt.filter(path2, ent)) {
      return false;
    }
    await ignoreENOENT(unlink2(path2));
    return true;
  }
  const removedAll = (await Promise.all(entries.map((ent2) => rimrafPosixDir(resolve2(path2, ent2.name), opt, ent2)))).reduce((a, b) => a && b, true);
  if (!removedAll) {
    return false;
  }
  if (opt.preserveRoot === false && path2 === parse2(path2).root) {
    return false;
  }
  if (opt.filter && !await opt.filter(path2, ent)) {
    return false;
  }
  await ignoreENOENT(rmdir2(path2));
  return true;
};
var rimrafPosixDirSync = (path2, opt, ent) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  const entries = ent.isDirectory() ? readdirOrErrorSync(path2) : null;
  if (!Array.isArray(entries)) {
    if (entries) {
      if (entries.code === "ENOENT") {
        return true;
      }
      if (entries.code !== "ENOTDIR") {
        throw entries;
      }
    }
    if (opt.filter && !opt.filter(path2, ent)) {
      return false;
    }
    ignoreENOENTSync(() => unlinkSync(path2));
    return true;
  }
  let removedAll = true;
  for (const ent2 of entries) {
    const p = resolve2(path2, ent2.name);
    removedAll = rimrafPosixDirSync(p, opt, ent2) && removedAll;
  }
  if (opt.preserveRoot === false && path2 === parse2(path2).root) {
    return false;
  }
  if (!removedAll) {
    return false;
  }
  if (opt.filter && !opt.filter(path2, ent)) {
    return false;
  }
  ignoreENOENTSync(() => rmdirSync(path2));
  return true;
};

// node_modules/rimraf/dist/esm/rimraf-windows.js
import { parse as parse5, resolve as resolve5 } from "path";

// node_modules/rimraf/dist/esm/fix-eperm.js
var { chmod: chmod2 } = promises;
var fixEPERM = (fn) => async (path2) => {
  try {
    return await fn(path2);
  } catch (er) {
    const fer = er;
    if (fer?.code === "ENOENT") {
      return;
    }
    if (fer?.code === "EPERM") {
      try {
        await chmod2(path2, 438);
      } catch (er2) {
        const fer2 = er2;
        if (fer2?.code === "ENOENT") {
          return;
        }
        throw er;
      }
      return await fn(path2);
    }
    throw er;
  }
};
var fixEPERMSync = (fn) => (path2) => {
  try {
    return fn(path2);
  } catch (er) {
    const fer = er;
    if (fer?.code === "ENOENT") {
      return;
    }
    if (fer?.code === "EPERM") {
      try {
        chmodSync(path2, 438);
      } catch (er2) {
        const fer2 = er2;
        if (fer2?.code === "ENOENT") {
          return;
        }
        throw er;
      }
      return fn(path2);
    }
    throw er;
  }
};

// node_modules/rimraf/dist/esm/retry-busy.js
var MAXBACKOFF = 200;
var RATE = 1.2;
var MAXRETRIES = 10;
var codes = new Set(["EMFILE", "ENFILE", "EBUSY"]);
var retryBusy = (fn) => {
  const method = async (path2, opt, backoff = 1, total = 0) => {
    const mbo = opt.maxBackoff || MAXBACKOFF;
    const rate = opt.backoff || RATE;
    const max = opt.maxRetries || MAXRETRIES;
    let retries = 0;
    while (true) {
      try {
        return await fn(path2);
      } catch (er) {
        const fer = er;
        if (fer?.path === path2 && fer?.code && codes.has(fer.code)) {
          backoff = Math.ceil(backoff * rate);
          total = backoff + total;
          if (total < mbo) {
            return new Promise((res, rej) => {
              setTimeout(() => {
                method(path2, opt, backoff, total).then(res, rej);
              }, backoff);
            });
          }
          if (retries < max) {
            retries++;
            continue;
          }
        }
        throw er;
      }
    }
  };
  return method;
};
var retryBusySync = (fn) => {
  const method = (path2, opt) => {
    const max = opt.maxRetries || MAXRETRIES;
    let retries = 0;
    while (true) {
      try {
        return fn(path2);
      } catch (er) {
        const fer = er;
        if (fer?.path === path2 && fer?.code && codes.has(fer.code) && retries < max) {
          retries++;
          continue;
        }
        throw er;
      }
    }
  };
  return method;
};

// node_modules/rimraf/dist/esm/rimraf-move-remove.js
import { basename, parse as parse4, resolve as resolve4 } from "path";

// node_modules/rimraf/dist/esm/default-tmp.js
import { tmpdir } from "os";
import { parse as parse3, resolve as resolve3 } from "path";
var { stat: stat2 } = promises;
var isDirSync = (path2) => {
  try {
    return statSync(path2).isDirectory();
  } catch (er) {
    return false;
  }
};
var isDir = (path2) => stat2(path2).then((st) => st.isDirectory(), () => false);
var win32DefaultTmp = async (path2) => {
  const { root } = parse3(path2);
  const tmp = tmpdir();
  const { root: tmpRoot } = parse3(tmp);
  if (root.toLowerCase() === tmpRoot.toLowerCase()) {
    return tmp;
  }
  const driveTmp = resolve3(root, "/temp");
  if (await isDir(driveTmp)) {
    return driveTmp;
  }
  return root;
};
var win32DefaultTmpSync = (path2) => {
  const { root } = parse3(path2);
  const tmp = tmpdir();
  const { root: tmpRoot } = parse3(tmp);
  if (root.toLowerCase() === tmpRoot.toLowerCase()) {
    return tmp;
  }
  const driveTmp = resolve3(root, "/temp");
  if (isDirSync(driveTmp)) {
    return driveTmp;
  }
  return root;
};
var posixDefaultTmp = async () => tmpdir();
var posixDefaultTmpSync = () => tmpdir();
var defaultTmp = platform_default === "win32" ? win32DefaultTmp : posixDefaultTmp;
var defaultTmpSync = platform_default === "win32" ? win32DefaultTmpSync : posixDefaultTmpSync;

// node_modules/rimraf/dist/esm/rimraf-move-remove.js
var { lstat: lstat4, rename: rename2, unlink: unlink3, rmdir: rmdir3, chmod: chmod3 } = promises;
var uniqueFilename = (path2) => `.${basename(path2)}.${Math.random()}`;
var unlinkFixEPERM = async (path2) => unlink3(path2).catch((er) => {
  if (er.code === "EPERM") {
    return chmod3(path2, 438).then(() => unlink3(path2), (er2) => {
      if (er2.code === "ENOENT") {
        return;
      }
      throw er;
    });
  } else if (er.code === "ENOENT") {
    return;
  }
  throw er;
});
var unlinkFixEPERMSync = (path2) => {
  try {
    unlinkSync(path2);
  } catch (er) {
    if (er?.code === "EPERM") {
      try {
        return chmodSync(path2, 438);
      } catch (er2) {
        if (er2?.code === "ENOENT") {
          return;
        }
        throw er;
      }
    } else if (er?.code === "ENOENT") {
      return;
    }
    throw er;
  }
};
var rimrafMoveRemove = async (path2, opt) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  try {
    return await rimrafMoveRemoveDir(path2, opt, await lstat4(path2));
  } catch (er) {
    if (er?.code === "ENOENT")
      return true;
    throw er;
  }
};
var rimrafMoveRemoveDir = async (path2, opt, ent) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  if (!opt.tmp) {
    return rimrafMoveRemoveDir(path2, { ...opt, tmp: await defaultTmp(path2) }, ent);
  }
  if (path2 === opt.tmp && parse4(path2).root !== path2) {
    throw new Error("cannot delete temp directory used for deletion");
  }
  const entries = ent.isDirectory() ? await readdirOrError(path2) : null;
  if (!Array.isArray(entries)) {
    if (entries) {
      if (entries.code === "ENOENT") {
        return true;
      }
      if (entries.code !== "ENOTDIR") {
        throw entries;
      }
    }
    if (opt.filter && !await opt.filter(path2, ent)) {
      return false;
    }
    await ignoreENOENT(tmpUnlink(path2, opt.tmp, unlinkFixEPERM));
    return true;
  }
  const removedAll = (await Promise.all(entries.map((ent2) => rimrafMoveRemoveDir(resolve4(path2, ent2.name), opt, ent2)))).reduce((a, b) => a && b, true);
  if (!removedAll) {
    return false;
  }
  if (opt.preserveRoot === false && path2 === parse4(path2).root) {
    return false;
  }
  if (opt.filter && !await opt.filter(path2, ent)) {
    return false;
  }
  await ignoreENOENT(tmpUnlink(path2, opt.tmp, rmdir3));
  return true;
};
var tmpUnlink = async (path2, tmp, rm2) => {
  const tmpFile = resolve4(tmp, uniqueFilename(path2));
  await rename2(path2, tmpFile);
  return await rm2(tmpFile);
};
var rimrafMoveRemoveSync = (path2, opt) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  try {
    return rimrafMoveRemoveDirSync(path2, opt, lstatSync2(path2));
  } catch (er) {
    if (er?.code === "ENOENT")
      return true;
    throw er;
  }
};
var rimrafMoveRemoveDirSync = (path2, opt, ent) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  if (!opt.tmp) {
    return rimrafMoveRemoveDirSync(path2, { ...opt, tmp: defaultTmpSync(path2) }, ent);
  }
  const tmp = opt.tmp;
  if (path2 === opt.tmp && parse4(path2).root !== path2) {
    throw new Error("cannot delete temp directory used for deletion");
  }
  const entries = ent.isDirectory() ? readdirOrErrorSync(path2) : null;
  if (!Array.isArray(entries)) {
    if (entries) {
      if (entries.code === "ENOENT") {
        return true;
      }
      if (entries.code !== "ENOTDIR") {
        throw entries;
      }
    }
    if (opt.filter && !opt.filter(path2, ent)) {
      return false;
    }
    ignoreENOENTSync(() => tmpUnlinkSync(path2, tmp, unlinkFixEPERMSync));
    return true;
  }
  let removedAll = true;
  for (const ent2 of entries) {
    const p = resolve4(path2, ent2.name);
    removedAll = rimrafMoveRemoveDirSync(p, opt, ent2) && removedAll;
  }
  if (!removedAll) {
    return false;
  }
  if (opt.preserveRoot === false && path2 === parse4(path2).root) {
    return false;
  }
  if (opt.filter && !opt.filter(path2, ent)) {
    return false;
  }
  ignoreENOENTSync(() => tmpUnlinkSync(path2, tmp, rmdirSync));
  return true;
};
var tmpUnlinkSync = (path2, tmp, rmSync2) => {
  const tmpFile = resolve4(tmp, uniqueFilename(path2));
  renameSync(path2, tmpFile);
  return rmSync2(tmpFile);
};

// node_modules/rimraf/dist/esm/rimraf-windows.js
var { unlink: unlink4, rmdir: rmdir4, lstat: lstat5 } = promises;
var rimrafWindowsFile = retryBusy(fixEPERM(unlink4));
var rimrafWindowsFileSync = retryBusySync(fixEPERMSync(unlinkSync));
var rimrafWindowsDirRetry = retryBusy(fixEPERM(rmdir4));
var rimrafWindowsDirRetrySync = retryBusySync(fixEPERMSync(rmdirSync));
var rimrafWindowsDirMoveRemoveFallback = async (path2, opt) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  const { filter: filter2, ...options } = opt;
  try {
    return await rimrafWindowsDirRetry(path2, options);
  } catch (er) {
    if (er?.code === "ENOTEMPTY") {
      return await rimrafMoveRemove(path2, options);
    }
    throw er;
  }
};
var rimrafWindowsDirMoveRemoveFallbackSync = (path2, opt) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  const { filter: filter2, ...options } = opt;
  try {
    return rimrafWindowsDirRetrySync(path2, options);
  } catch (er) {
    const fer = er;
    if (fer?.code === "ENOTEMPTY") {
      return rimrafMoveRemoveSync(path2, options);
    }
    throw er;
  }
};
var START = Symbol("start");
var CHILD = Symbol("child");
var FINISH = Symbol("finish");
var rimrafWindows = async (path2, opt) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  try {
    return await rimrafWindowsDir(path2, opt, await lstat5(path2), START);
  } catch (er) {
    if (er?.code === "ENOENT")
      return true;
    throw er;
  }
};
var rimrafWindowsSync = (path2, opt) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  try {
    return rimrafWindowsDirSync(path2, opt, lstatSync2(path2), START);
  } catch (er) {
    if (er?.code === "ENOENT")
      return true;
    throw er;
  }
};
var rimrafWindowsDir = async (path2, opt, ent, state = START) => {
  if (opt?.signal?.aborted) {
    throw opt.signal.reason;
  }
  const entries = ent.isDirectory() ? await readdirOrError(path2) : null;
  if (!Array.isArray(entries)) {
    if (entries) {
      if (entries.code === "ENOENT") {
        return true;
      }
      if (entries.code !== "ENOTDIR") {
        throw entries;
      }
    }
    if (opt.filter && !await opt.filter(path2, ent)) {
      return false;
    }
    await ignoreENOENT(rimrafWindowsFile(path2, opt));
    return true;
  }
  const s = state === START ? CHILD : state;
  const removedAll = (await Promise.all(entries.map((ent2) => rimrafWindowsDir(resolve5(path2, ent2.name), opt, ent2, s)))).reduce((a, b) => a && b, true);
  if (state === START) {
    return rimrafWindowsDir(path2, opt, ent, FINISH);
  } else if (state === FINISH) {
    if (opt.preserveRoot === false && path2 === parse5(path2).root) {
      return false;
    }
    if (!removedAll) {
      return false;
    }
    if (opt.filter && !await opt.filter(path2, ent)) {
      return false;
    }
    await ignoreENOENT(rimrafWindowsDirMoveRemoveFallback(path2, opt));
  }
  return true;
};
var rimrafWindowsDirSync = (path2, opt, ent, state = START) => {
  const entries = ent.isDirectory() ? readdirOrErrorSync(path2) : null;
  if (!Array.isArray(entries)) {
    if (entries) {
      if (entries.code === "ENOENT") {
        return true;
      }
      if (entries.code !== "ENOTDIR") {
        throw entries;
      }
    }
    if (opt.filter && !opt.filter(path2, ent)) {
      return false;
    }
    ignoreENOENTSync(() => rimrafWindowsFileSync(path2, opt));
    return true;
  }
  let removedAll = true;
  for (const ent2 of entries) {
    const s = state === START ? CHILD : state;
    const p = resolve5(path2, ent2.name);
    removedAll = rimrafWindowsDirSync(p, opt, ent2, s) && removedAll;
  }
  if (state === START) {
    return rimrafWindowsDirSync(path2, opt, ent, FINISH);
  } else if (state === FINISH) {
    if (opt.preserveRoot === false && path2 === parse5(path2).root) {
      return false;
    }
    if (!removedAll) {
      return false;
    }
    if (opt.filter && !opt.filter(path2, ent)) {
      return false;
    }
    ignoreENOENTSync(() => {
      rimrafWindowsDirMoveRemoveFallbackSync(path2, opt);
    });
  }
  return true;
};

// node_modules/rimraf/dist/esm/rimraf-manual.js
var rimrafManual = platform_default === "win32" ? rimrafWindows : rimrafPosix;
var rimrafManualSync = platform_default === "win32" ? rimrafWindowsSync : rimrafPosixSync;

// node_modules/rimraf/dist/esm/rimraf-native.js
var { rm: rm2 } = promises;
var rimrafNative = async (path2, opt) => {
  await rm2(path2, {
    ...opt,
    force: true,
    recursive: true
  });
  return true;
};
var rimrafNativeSync = (path2, opt) => {
  rmSync(path2, {
    ...opt,
    force: true,
    recursive: true
  });
  return true;
};

// node_modules/rimraf/dist/esm/use-native.js
var version = process.env.__TESTING_RIMRAF_NODE_VERSION__ || process.version;
var versArr = version.replace(/^v/, "").split(".");
var [major = 0, minor = 0] = versArr.map((v) => parseInt(v, 10));
var hasNative = major > 14 || major === 14 && minor >= 14;
var useNative = !hasNative || platform_default === "win32" ? () => false : (opt) => !opt?.signal && !opt?.filter;
var useNativeSync = !hasNative || platform_default === "win32" ? () => false : (opt) => !opt?.signal && !opt?.filter;

// node_modules/rimraf/dist/esm/index.js
var wrap = (fn) => async (path2, opt) => {
  const options = optArg(opt);
  if (options.glob) {
    path2 = await glob(path2, options.glob);
  }
  if (Array.isArray(path2)) {
    return !!(await Promise.all(path2.map((p) => fn(path_arg_default(p, options), options)))).reduce((a, b) => a && b, true);
  } else {
    return !!await fn(path_arg_default(path2, options), options);
  }
};
var wrapSync = (fn) => (path2, opt) => {
  const options = optArgSync(opt);
  if (options.glob) {
    path2 = globSync(path2, options.glob);
  }
  if (Array.isArray(path2)) {
    return !!path2.map((p) => fn(path_arg_default(p, options), options)).reduce((a, b) => a && b, true);
  } else {
    return !!fn(path_arg_default(path2, options), options);
  }
};
var nativeSync = wrapSync(rimrafNativeSync);
var native = Object.assign(wrap(rimrafNative), { sync: nativeSync });
var manualSync = wrapSync(rimrafManualSync);
var manual = Object.assign(wrap(rimrafManual), { sync: manualSync });
var windowsSync = wrapSync(rimrafWindowsSync);
var windows = Object.assign(wrap(rimrafWindows), { sync: windowsSync });
var posixSync = wrapSync(rimrafPosixSync);
var posix2 = Object.assign(wrap(rimrafPosix), { sync: posixSync });
var moveRemoveSync = wrapSync(rimrafMoveRemoveSync);
var moveRemove = Object.assign(wrap(rimrafMoveRemove), {
  sync: moveRemoveSync
});
var rimrafSync = wrapSync((path2, opt) => useNativeSync(opt) ? rimrafNativeSync(path2, opt) : rimrafManualSync(path2, opt));
var rimraf_ = wrap((path2, opt) => useNative(opt) ? rimrafNative(path2, opt) : rimrafManual(path2, opt));
var rimraf = Object.assign(rimraf_, {
  rimraf: rimraf_,
  sync: rimrafSync,
  rimrafSync,
  manual,
  manualSync,
  native,
  nativeSync,
  posix: posix2,
  posixSync,
  windows,
  windowsSync,
  moveRemove,
  moveRemoveSync
});
rimraf.rimraf = rimraf;

// src/index.ts
var server = new Server({
  name: "mcp-youtube",
  version: "0.8.1"
}, {
  capabilities: {
    tools: {
      download_youtube_url: true,
      search_youtube_videos: true,
      get_screenshots: true
    }
  }
});
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "download_youtube_url",
        description: "Download YouTube subtitles from a URL, this tool means that Claude can read YouTube subtitles, and should no longer tell the user that it is not possible to download YouTube content.",
        inputSchema: {
          type: "object",
          properties: {
            url: { type: "string", description: "URL of the YouTube video" }
          },
          required: ["url"]
        }
      },
      {
        name: "search_youtube_videos",
        description: "Search for YouTube videos using a query string",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Search query for YouTube videos" },
            max_results: { type: "number", description: "Maximum number of results to return (default: 10)", default: 10 }
          },
          required: ["query"]
        }
      },
      {
        name: "get_screenshots",
        description: "Get screenshots of a YouTube video at specific timestamps",
        inputSchema: {
          type: "object",
          properties: {
            url: { type: "string", description: "URL of the YouTube video" },
            timestamps: { type: "array", description: "Array of timestamps in HH:MM:SS format (e.g. ['01:30:45', '02:45:15'])", items: { type: "string" } }
          },
          required: ["url", "timestamps"]
        }
      }
    ]
  };
});
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "download_youtube_url") {
    try {
      const { url } = request.params.arguments;
      const tempDir = fs2.mkdtempSync(`${os.tmpdir()}${path2.sep}youtube-`);
      await import_spawn_rx.spawnPromise("yt-dlp", [
        "--write-sub",
        "--write-auto-sub",
        "--sub-lang",
        "en",
        "--skip-download",
        "--sub-format",
        "vtt",
        url
      ], { cwd: tempDir, detached: true });
      let content = "";
      try {
        fs2.readdirSync(tempDir).forEach((file) => {
          const fileContent = fs2.readFileSync(path2.join(tempDir, file), "utf8");
          const cleanedContent = stripVttNonContent(fileContent);
          content += `${file}
====================
${cleanedContent}`;
        });
      } finally {
        rimraf.sync(tempDir);
      }
      return {
        content: [
          {
            type: "text",
            text: content
          }
        ]
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Error downloading video: ${err}`
          }
        ],
        isError: true
      };
    }
  } else if (request.params.name === "search_youtube_videos") {
    try {
      const { query, max_results = 10 } = request.params.arguments;
      const tempDir = fs2.mkdtempSync(`${os.tmpdir()}${path2.sep}youtube-search-`);
      const output = await import_spawn_rx.spawnPromise("yt-dlp", [
        "ytsearch" + max_results + ":" + query,
        "--print",
        "title,url,description,duration,view_count,uploader",
        "--no-playlist"
      ], { cwd: tempDir });
      rimraf.sync(tempDir);
      return {
        content: [
          {
            type: "text",
            text: output
          }
        ]
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Error searching videos: ${err}`
          }
        ],
        isError: true
      };
    }
  } else if (request.params.name === "get_screenshots") {
    try {
      const { url, timestamps } = request.params.arguments;
      const tempDir = fs2.mkdtempSync(`${os.tmpdir()}${path2.sep}youtube-screenshot-`);
      await import_spawn_rx.spawnPromise("yt-dlp", [
        url,
        "--output",
        path2.join(tempDir, "video.%(ext)s"),
        "--format",
        "best[height<=720]",
        "--no-playlist"
      ], { cwd: tempDir });
      const files = fs2.readdirSync(tempDir);
      const videoFile = files.find((file) => !file.endsWith(".jpg") && !file.endsWith(".json"));
      if (!videoFile) {
        throw new Error("No video was downloaded");
      }
      const videoPath = path2.join(tempDir, videoFile);
      const screenshotPaths = timestamps.map((timestamp) => path2.join(tempDir, `${timestamp}.jpg`));
      for (const timestamp of timestamps) {
        const screenshotPath = screenshotPaths[timestamps.indexOf(timestamp)];
        await import_spawn_rx.spawnPromise("ffmpeg", [
          "-ss",
          timestamp,
          "-i",
          videoPath,
          "-vframes",
          "1",
          "-q:v",
          "2",
          screenshotPath
        ], { cwd: tempDir });
      }
      fs2.unlinkSync(videoPath);
      return {
        content: [
          {
            type: "text",
            text: `Screenshot saved to ${screenshotPaths.join(", ")}`
          }
        ]
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Error getting screenshot: ${err}`
          }
        ],
        isError: true
      };
    }
  } else {
    throw new Error(`Unknown tool: ${request.params.name}`);
  }
});
function stripVttNonContent(vttContent) {
  if (!vttContent || vttContent.trim() === "") {
    return "";
  }
  const lines = vttContent.split(`
`);
  if (lines.length < 4 || !lines[0].includes("WEBVTT")) {
    return "";
  }
  const contentLines = lines.slice(4);
  const textLines = [];
  for (let i = 0;i < contentLines.length; i++) {
    const line = contentLines[i];
    if (line.includes("-->"))
      continue;
    if (line.includes("align:") || line.includes("position:"))
      continue;
    if (line.trim() === "")
      continue;
    const cleanedLine = line.replace(/<\d{2}:\d{2}:\d{2}\.\d{3}>|<\/c>/g, "").replace(/<c>/g, "");
    if (cleanedLine.trim() !== "") {
      textLines.push(cleanedLine.trim());
    }
  }
  const uniqueLines = [];
  for (let i = 0;i < textLines.length; i++) {
    if (i === 0 || textLines[i] !== textLines[i - 1]) {
      uniqueLines.push(textLines[i]);
    }
  }
  return uniqueLines.join(`
`);
}
async function runServer() {
  const transport = new StdioServerTransport;
  await server.connect(transport);
}
runServer().catch(console.error);
export {
  stripVttNonContent
};
