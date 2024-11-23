/*Los objetos son la pieza principal de java scritps */


const curso ={
    nombre:'programacion',
    precio: 40,
    disponible: true,
    informacion:{
        fechaInicio:"5 de noviembre",
        fechaFinalizacion:"20 de diciembre"
    }
}

/*console.log(curso);

curso.modalidad='presencial';
delete curso.modalidad,
console.log(curso);*/

const cars ={
    marca: "Toyota",
    modelo: "4runner",
    informacion:{
    año: 2006,
    precio:"45.000$",
    color: "gris",
    agencia: "CaracaSports",
    disponible: true
    },
    estado:{
        kilometraje:"0.00 klm",
        motor:"nuevo",
        carroceria:"sin detalle"
    }
    

}



//destrcturing de objetos -- sacar de una estructura extrae el valor y crear al variable

const nombreCars= cars.marca;

//ahora con la revolucion de EcmaScrips 6 es diferente todo esto se simplifica en un solo
const {marca,modelo,informacion:{precio,color,agencia},estado:{kilometraje,motor,carroceria}}= cars;
console.log()

//Object.freeze(cars);//congelar un objeto no se puede modificar
//cars.marca='ford';
//delete cars.marca;
//console.log(cars)

//console.log(Object.isFrozen(cars));//para validar si un objeto esta congelado

//Object.seal(cars);//no se puede ni eliminar ni agregar pero si se puede modificar las propiedades presentes en el objeto

//cars.marca='ford';
//console.log(cars)

const juntar = Object.assign(curso,cars);
console.log(juntar);

///spread operador

const juntar2 = {...curso,...cars};
console.log(juntar2);



