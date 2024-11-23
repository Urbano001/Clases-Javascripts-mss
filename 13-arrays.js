let nombre = "Jhostin";
let profesores = ['juan','pedro','maria','juana','rosita'];
let materias = ['matematicas','lenguaje','ingles'];

console.log(profesores[2]);
console.log(profesores.length); //length para mostrar cuantas posiciones tiene nuestro array 

//Metodos para trabajar con texto

console.log(nombre.toUpperCase());//mayusculas
console.log(nombre.toLowerCase());// minusculas

document.write("<h1> Ejercios de Arrays</h1> ");
document.write("<ul>");
//funcion de fecha
profesores.forEach((element,indice,arr) =>{
    document.write("<li>"+indice+" "+element+"</li>");
});
document.write("</ul>");

/*********************************************************************** */

document.write("<h1> Ejercios de Arrays</h1> ");
document.write("<ul>");
//funcion de fecha
materias.forEach((element,indice,arr) =>{
    document.write("<li>"+indice+" "+element+"</li>");
});
document.write("</ul>");