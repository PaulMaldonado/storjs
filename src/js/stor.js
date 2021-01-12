class Stor {
    
    getStore(key) {
        if(!key || key === null || key !== 'string') return;

        return JSON.parse(window.localStorage.getItem(key));
    }

    setStore(key, value) {
        if(!key || !value || key && value === null) return;

        return window.localStorage.setItem(key, JSON.stringify(value));
    }

    deleteStore(key) {
        if(!key || key === null) return;

        return window.localStorage.removeItem(key);
    }

    clearStore() {
        return window.localStorage.clean();
    }
}