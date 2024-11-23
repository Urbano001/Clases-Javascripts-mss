const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500},
    { nombre: 'Television 50 pulgadas', precio:700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: ' Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Muy similar al ForEach existe un array metod llamado map, la diferencia es que el map te crea un nuevo array

const nuevoArray = carrito.map(function(producto){
    return`Articulo: ${producto.nombre} Precio:${producto.precio*2}`;
})
const nuevoArray2 = carrito.forEach(function(producto){
    return`Articulo: ${producto.nombre} Precio:${producto.precio}`;
})

//console.log(nuevoArray);
//onsole.log(nuevoArray2);

for(let i = 0; i < carrito.length; i++){
    console.log(`Articulo: ${carrito[i].nombre} Precio: ${carrito[i].precio}$`)
}

console.log()