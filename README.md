# Stor.js 💻

*Stor.js, es una libreria que te permite interactuar con la API de localStorage, su peso es de tan solo 595 Bytes.*

## Instalación

*Para hacer uso de la libreria, usted puede usar el siguiente CDN*

**Recomendado para produccón**

```html
    <script src="https://cdn.jsdelivr.net/gh/PaulMaldonado/storjs/dist/stor.min.js"></script>
```

## Documentación

*Para hacer uso de Stor.js es tan sencillo como instanciar la función Stor y el método que desea usar, para esto veremos a continucación, los diferentes métodos que Stor.js no proporciona.*

**Método setStore()**

*El método setStore, nos permite guardar datos dentro del objeto Storage y este método recibe dos argumentos, el primero es una key y el segundo es un value y eso se logra de la siguiente manera.*

```javascript
const stor = new Stor();

stor.setStore('name', 'Storjs');
```
**Método getStore()**

*El método getStore, nos permite extraer los datos almacenados dentro del objeto Storage pasando una argumento, y ese argumento es una key y se logra de la siguiente manera.*

```javascript
const stor = new Stor();

stor.getStore('name');
```
**Método deleteStore()**

*El método deleteStore, nos permite eliminar un dato pasando un argumento al método, y ese argumento tiene que ser una key.*

```javascript
const stor = new Stor();

stor.deleteStore('name');
```
**Método clearStore()**

*El método clearStore, nos permite vaciar todo el objeto Storage y es tan simple como solo llamarlo de la siguiente manera.*

```javascript
const stor = new Stor();

stor.clearStore();
```

## Lincencia

**El codigo esta disponible bajo la licencia MIT License.**
