# Stor js

### Stor.js, es una libreria que te permite interactuar con la API de localStorage.

## API

Antes de comenzar a trabajar con Storjs, usted necesita hacer una nueva instancia del objeto Stor de la siguiente manera.

ejemplo:

`
const store = new Stor();
`

## Método set()

El método set nos permite guardar datos dentro del objeto Storage y este método recibe dos argumentos, el primero es una llave y el segundo es un valor y eso se logra de la siguiente manera.

ejemplo:

`
const store = new Store();

store.set('nombre', 'storjs');
`