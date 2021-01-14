const Stor = (function() {
    'use strict';

    const methods = {};

    methods.setStore = function(key, value) {
        if(!key || !value || key && value === null) return

        return window.localStorage.setItem(key, JSON.stringify(value))
    }

    methods.getStore = function(key) {
        if(!key || key === null || typeof key !== 'string') return

        return JSON.parse(window.localStorage.getItem(key))
    }

    methods.deleteStore = function(key) {
        if(!key || key === null) {
            return window.localStorage.removeItem(key)
        }
    }

    methods.clearStore = function() {
        return window.localStorage.clean()
    }

    return methods;
})();