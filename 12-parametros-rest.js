function listadosFrutas(fruta1,fruta2,...todasFrutas){
    console.log("La Fruta 1 es: " + fruta1);
    console.log("La Fruta 2 es: "+ fruta2);
    console.log(todasFrutas);
}

listadosFrutas('cambur','lechoza','patilla','melon','guayaba');

var frutas2=['fresas','limon','parchita'];
//parametros scripts ... convierte una variable en un array
listadosFrutas(...frutas2,'cambur','lechoza','patilla');