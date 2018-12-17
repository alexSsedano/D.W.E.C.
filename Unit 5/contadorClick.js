// JavaScript Document
var numero1 = 0;
var numero2 = 0;
function click1(){
	numero1 ++;
	document.getElementById("numero1").innerHTML = numero1;
}
function click2(){
	numero2 ++;
	document.getElementById("numero2").innerHTML = numero2;
}
document.getElementById("n1").onmousedown=click1;
document.getElementById("n2").onmousedown=click2;