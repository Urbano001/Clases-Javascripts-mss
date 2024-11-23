//funciones de declaraciones o funcion expresion

// se puede invocar antes de la funcion 
suma1(15,50);
function suma1(a,b){
    //cuerpo de la funcion o conjunto de instrucciones que va de la instrucciones que va a ejecutar la funcion
console.log(a+b);
}
//Funcion de expresion
//se tienen que invocar si o si despues de la funcion
const suma2 = function(a,b){

    console.log(a+b);
}
suma2(25,45);


//Plantilla de texto

function ingresarsistema(name='desconocido',lastname='desconocido'){
    console.log(`Bienvenido ${name} ${lastname} puedes ingresar al sistema`);
    document.write(`Bienvenido ${name} ${lastname} puedes ingresar al sistema`);
}

ingresarsistema('Jhostin');

//Parametros por default --si no presente el argumento cuando se llama