const Stor = (function() {
    'use strict';

    // Objeto Constructor
    const Constructor = function(store) {
        this.storage = localStorage;
    }

    // Método set, este método nos permitira guardar los datos
    Constructor.prototype.set = function(key, value, options) {
        if(!key && !value || key === null || value === null) throw new Error('Please verify, not found a key and a value');

        if(!options || options !== 'object') throw new Error;

        return this.storage.setItem(key, JSON.stringify(value));
    }

    // Método get, este método nos permitira obtener por key los datos 
    Constructor.prototype.get = function(key) {
        if(!key) throw new Error('Not found key, please verify');

        return JSON.parse(this.storage.getItem(key));
    }

    // Método destroy, este método nos permitira eliminar un dato por medio de un key
    Constructor.prototype.destroy = function(key) {
        if(!key) throw new Error('We could not delete the data, check if there is a key');

        return this.storage.removeItem(key);
    }

    // Método clean, este método nos permitira borrar toda la cache del objeto Storage
    Constructor.prototype.clean = function() {
        return this.storage.clear();
    }

    // Retornando el Constructor
    return Constructor;

})();

const store = new Stor();

store.set('name', 'Jorge paul', options, {
    message: 'Se guardo correctament',
    error: 'Error al guardase los datos'
});

console.log(store.options);