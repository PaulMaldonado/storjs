const Stor = (function() {
    'use strict';

    // Objeto methods
    const methods = {
        fetchDates: [],
        addItemes: []
    };

    // Método set, este método nos permitira guardar los datos
    methods.set = function(key, value) {
        if(!key && !value || key && value === null) return

        return window.localStorage.setItem(key, JSON.stringify(value));
    }

    // Método get, este método nos permitira obtener por key los datos 
    methods.get = function(key, value) {
        if(!key || key === null) return

        return JSON.parse(window.localStorage.getItem(key));
    }

    // Método destroy, este método nos permitira eliminar un dato por medio de un key
    methods.delete = function(key) {
        if(!key || key === null) return

        return window.localStorage.removeItem(key);
    }

    // Método clean, este método nos permitira borrar toda la cache del objeto Storage
    methods.clean = function() {
        return window.localStorage.clean();
    }

    // Retornando el Constructor
    return methods;

})();