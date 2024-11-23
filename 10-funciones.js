let n1 = prompt("Ingrese un numero: ",0);
let n2= prompt("Ingrese otro numero:",0);

function porConsola(n1,n2,){
    console.log("La suma es: ", (n1+n2));
    console.log("La multiplicacion  es: ", (n1*n2));
    console.log("La resta es: ", (n1-n2));
    console.log("La division es: ", (n1/n2));
};

function porPantalla (n1,n2){
    document.write("La suma  es: "+(n1+n2)+ "</br>");
    document.write("La multiplicacion  es: "+(n1*n2)+ "</br>");
    document.write("La resta es: "+(n1-n2)+"</br>" );
    document.write("La division es: "+(n1/n2)+ "</br>" );
}
function calculadora(n1,n2, mostrar=false){
    if(mostrar==false){
      porConsola(n1,n2);
    }
    else{
      porPantalla(n1,n2);
    }
    
}
calculadora(n1,n2,false);


/*let n1 = 15;
let n2 = 5; 
function sumame (n1, n2){
    //conjunto de instrucciones que va a ejecutar nuestro codigo
    let suma = n1 + n2;
    console.log(suma);

}
function multi (n1, n2){
    //conjunto de instrucciones que va a ejecutar nuestro codigo
    let multi = n1 * n2;
    console.log(multi);

}
function calculadora (n1, n2){
    //conjunto de instrucciones que va a ejecutar nuestro codigo
    console.log("La suma de los numeros ingresados es : ", (n1+n2));
    console.log("La multiplicacion de los numeros ingresados es : ", (n1*n2));
    console.log("La resta de los numeros ingresados es : ", (n1-n2));
    console.log("La division de los numeros ingresados es : ", (n1/n2));

}
calculadora(n1,n2)*/
//multi(15,15)
// asi llamamos o invocamos a una funcion
//sumame(15, 5)