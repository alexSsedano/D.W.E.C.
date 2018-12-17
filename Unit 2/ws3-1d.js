// JavaScript Document
function  fltraPalabrasMasLargas(cad_arg, i){
	var arrayPalabras = cad_arg.split(" ");
	var palabra="";
	var contador =0;
	for (var x=0;x < arrayPalabras.length;x++){
		palabra = arrayPalabras[x];
		if(palabra.length> i ){
			contador++;
		}
	}
	document.write("el numero de palabras con caracteres superiores a " + i + " es " + contador)
	
}
var cadena =prompt("introduce una frase");
var carac =prompt("introduce el numero de caracteres");
fltraPalabrasMasLargas(cadena, carac);