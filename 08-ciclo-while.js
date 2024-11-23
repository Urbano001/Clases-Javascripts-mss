/*let text = "";
let x = 5; 
while( x<10){
   text += "el numero a imprimir es " + x + "<br>";
   x++;
}

document.getElementById("numero").innerHTML = text;*/

let num = 1; 
let num2 = 3; 
let text = "";
let texto = "";

let resultado = num + num2; 
texto = "EL resultado de la suma es " + resultado;
while (resultado <= 100) {
    text += "el numero a imprimir es " + resultado+ "<br>";
    resultado++;
}
document.getElementById("numero").innerHTML = text;
document.getElementById("resul").innerHTML = texto;