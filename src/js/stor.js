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

    // Método que nos permitira crear un objeto para almacenar datos en el objeto storage.
    methods.create = function(name, date, data) {
        if(!name || !date || data === null) {
            throw new Error('Necesita definir un nombre, una fecha o un dato');
        }

        return window.localStorage.setItem(name, JSON.stringify({
            data: data,
            date: new Date()
        }));

        methods.fetchDates.push(name);
    }

    // Retornando el Constructor
    return methods;

})();