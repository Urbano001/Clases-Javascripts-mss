/*alert("Hola Mundo");
var n1 = prompt("Introduce un numero:",0);
var n2 = prompt("Introduce otro numero:",0);4

console.log(n1,n2);*/

let num1 = prompt("Ingrese un numero:",0);
let num2 = prompt("ingrese el segundo numero:",0);

if (num1 > num2){
    
    console.log("El numero "+num1+ " es mayor que el numero "+ num2)
    console.log("Los numero ingresados fueron: "+num1+" y "+num2)

}else if (num2 > num1 ){
    console.log("El numero "+num2+ " es mayor que el numero "+ num1)
    console.log("Los numero ingresados fueron: "+num1+" y "+num2)

}else if ( num1 == num2){
    console.log("Los numeros "+num1+" y "+num2+" Son iguales")
    console.log("Los numero ingresados fueron: "+num1+" y "+num2)
    
}
