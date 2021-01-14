'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Stor = /*#__PURE__*/function () {
  function Stor() {
    _classCallCheck(this, Stor);
  }

  _createClass(Stor, [{
    key: "getStore",
    value: function getStore(key) {
      if (!key || key === null || key !== 'string') return;
      return JSON.parse(window.localStorage.getItem(key));
    }
  }, {
    key: "setStore",
    value: function setStore(key, value) {
      if (!key || !value || key && value === null) return;
      return window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, {
    key: "deleteStore",
    value: function deleteStore(key) {
      if (!key || key === null) return;
      return window.localStorage.removeItem(key);
    }
  }, {
    key: "clearStore",
    value: function clearStore() {
      return window.localStorage.clean();
    }
  }]);

  return Stor;
}();

module.exports = Stor;
