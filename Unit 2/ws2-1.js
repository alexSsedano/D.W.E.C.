// JavaScript Document
document.write(Math.floor((Math.random() * 10) + 1));
document.write("<br></br>");
document.write(Math.floor((Math.random() * 200) + 1));
var max =prompt("Introduzca primer numero del intervalo");
var min =prompt("Introduzca segundo numero del intervalo");
var intervalo = max - min;
document.write("<br></br>");
document.write(Math.floor(Math.random() * (max - min)) + min);

