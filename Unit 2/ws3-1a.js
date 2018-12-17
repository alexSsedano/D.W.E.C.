// JavaScript Document
function  invierteCadena(cad_arg){
	for(let i = cad_arg.length; i>= 0; i--){
		document.write(cad_arg.charAt(i));
		
		
	}
}

var palabro = "";
 function  inviertePalabras(cad_argu){
	 for(let x=0;x <= cad_argu.length;x++){
		if(cad_argu.charAt(x) == ' ' ) {
			invierteCadena(palabro);
			document.write(" ");
			palabro = "";
		}else{
			palabro = palabro + cad_argu.charAt(x);
		}
	 }
	 invierteCadena(palabro);
			palabro = "";
	 
 }

var palabra= prompt("Introduce tu palabra");

inviertePalabras(palabra);
