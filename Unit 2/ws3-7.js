// JavaScript Document
function  invierteCadena(cad_arg){
	var inver ="";
	for(let i = cad_arg.length; i>= 0; i--){
		inver = inver + cad_arg.charAt(i);
		
		
		
	}
	return inver;
}

function esPalindromo(palabra){
	if (palabra == invierteCadena(palabra)){
		document.write("Es un palindromo")
	}else{
		document.write("No es un palindromo")
		
	}
}


var pal = prompt("introduce una palabra");
esPalindromo(pal);
