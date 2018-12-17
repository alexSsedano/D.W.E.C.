// JavaScript Document
function  encuentraPalabraMasLarga(cad_arg){
	var arrayPalabras = cad_arg.split(" ");
	var palabra1 =arrayPalabras[0];
	var palabra2 ="";
	for (var i=1;i < arrayPalabras.length;i++){
		palabra2 =arrayPalabras[i];
		if(palabra1.length < palabra2.length){
			palabra1 = palabra2;
		
			
		}
	}
	document.write(palabra1)
	
}
var frase = prompt("Introduzca frase");
encuentraPalabraMasLarga(frase);