/*const reproductor ={
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion id ${id}`),
    pausar: id => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando cancion con id ${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylit: nombre => console.log(`Reproducir la Playlist ${nombre}`),

// Tambien existen los set y los get, los set son para agregar un objeto y el get nos sirve para obtener

set nuevacancion(cancion){
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`)
},
get obtenerCancion(){
    console.log(`${this.cancion}`)
}

}

reproductor.crearPlaylist("juan");
reproductor.pausar(30);
reproductor.reproducirPlaylit("juan")*/


const sistemaArranque ={
    modelo:{
        mod1: "toyota",
        mod2: "siena",
        mod3: "nose",
    },
    encender: carro => console.log(`encendiendo motor de ${carro}`),
    apagar: carro => console.log(`Apagando motor ${carro}`),

    set nuevoModelo(modelo){
        this.modelo = modelo;
        console.log(`Agregando ${modelo}`)
    },
    get obtenerModelo(){
        console.log(`${this.modelo}`)
    }
}

console.log(Object.keys(sistemaArranque));
console.log(Object.values(sistemaArranque));// nos devolvera un arreglo con los valores del objeto
console.log(Object.entries(sistemaArranque)); // nos va a retonar una matriz de llaves y valores

console.log(sistemaArranque.modelo.mod1);




sistemaArranque.nuevoModelo = 'Silverado';
sistemaArranque.obtenerModelo;
sistemaArranque.encender("fiat")
sistemaArranque.apagar("fiat")