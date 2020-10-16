# Stor js 💻

## Stor.js, es una libreria que te permite interactuar con la API de localStorage, su peso es de tan solo 595 Bytes.

## Instalación

Para hacer uso de la libreria, usted puede usar el siguiente CDN

## CDN

```javascript
// Recomendado para producción
<script src="https://cdn.jsdelivr.net/gh/PaulMaldonado/storjs/dist/stor.min.js"></script>
```

## API

Antes de comenzar a trabajar con Storjs, usted necesita hacer una nueva instancia del objeto Stor de la siguiente manera.

ejemplo:

```javascript
// Primero hacemos una instancia del objeto Stor
const store = new Stor();
```

## Método set()

El método set, nos permite guardar datos dentro del objeto Storage y este método recibe dos argumentos, el primero es una key y el segundo es un value y eso se logra de la siguiente manera.

ejemplo:

```javascript
// Para utilizar el método set podemos hacer uso de el así

// Instancia del objeto Stor
const store = new Stor();

// Método set
store.set('name', 'Storjs');
```

## Método get()

El método get, nos permite extraer los datos almacenados dentro del objeto Storage pasando una argumento, y ese argumento es una key y se logra de la siguiente manera.

ejemplo:

```javascript
// Para utilizar el método get podemos hacer uso de el así

// Instancia del objeto Stor
const store = new Stor();

// Método get
store.get('name'); // De esta manera si tenemos datos almacenados los extraera
```

## Método destroy()

El método destroy, nos permite eliminar un dato pasando un argumento al método, y ese argumento tiene que ser una key.

ejemplo:


```javascript
// Para utilizar el método destroy podemos hacer uso de el así

// Instancia del objeto Stor
const store = new Stor();

// Método destroy
store.destroy('name'); // De esta manera nos eliminara un dato en especifico, que contenga esa key
```

## Método clean()

El método clean, nos permite vaciar todo el objeto Storage y es tan simple como solo llamarlo de la siguiente manera.

ejemplo:

```javascript
// Para utilizar el método clean podemos hacer uso de el así

// Instancia del objeto Stor
const store = new Stor();

// Método destroy
store.clean(); // Con esto ya tendremos vaciado nuestro objeto Storage. 
```

## Extras

Para realizar los cambios al archivo stor.min.js y se vean reflejados, en tú terminal utiliza el siguiente comando:

```javascript
// Comando para realizar cambios al archivo stor.min.js
gulp
```


## Licencia

El codigo esta disponible bajo la licencia MIT License.