const Stor = (function() {
    'use strict';

    // Objeto que contendra todos los métodos
    const methods = {};


    // Método set, este método nos permitira guardar datos dentro de localStorage
    methods.set = function(key, value) {
        if(!key && !value) {
            throw new Error;

            return;
        }

        return window.localStorage.setItem(key, JSON.stringify(value));
    }

    // Método get, este método nos permitira extraer la información guardada
    methods.get = function(key) {
        if(!key) {
            throw new Error;

            return;
        }

        return JSON.parse(window.localStorage.getItem(new Date(key)));
    }

    // Método destroy, este método nos permitira eliminar los datos por medio de un key
    methods.destroy = function(key) {
        if(!key) {
            throw new Error;

            return;
        }

        return window.localStorage.removeItem(key);
    }

    methods.clean = function(key, value) {
        if(!key && !value) {
            throw new Error;

            return;
        }

        return window.localStorage.clear();
    }

    // Aquí retorno todos los métodos
    return methods;
}());
