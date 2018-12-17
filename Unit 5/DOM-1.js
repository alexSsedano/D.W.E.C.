// JavaScript Document
function p1(){
	let enlaces = document.getElementsByTagName("a"); 
	document.getElementsByClassName("resultado")[0].innerHTML = "resultado: numero total de enlaces = " + enlaces.length;
}
function mouseFuera(){
	document.getElementsByClassName("resultado")[0].innerHTML = " " ;
}
function penultimoEnlace(){
	let enlaces = document.getElementsByTagName("a"); 
	document.getElementsByClassName("resultado")[0].innerHTML = "resultado: " + document.getElementsByTagName("a")[enlaces.length - 1] ;
}
function enlacesGoogle(){
	let enlaces = document.getElementsByClassName("google"); 
	document.getElementsByClassName("resultado")[0].innerHTML = "resultado: numero total de enlaces a google = " + enlaces.length;
}
function enlacesTercerParrafo(){
		let parrafos = document.getElementsByTagName("p"); 
		let penultimo = document.getElementsByTagName("p")[parrafos.length - 2].getElementsByTagName("a");
		document.getElementsByClassName("resultado")[0].innerHTML = "resultado: numero total de enlaces tercer parrafo = " + penultimo.length;
	

}