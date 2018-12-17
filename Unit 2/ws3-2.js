// JavaScript Document
function mayusculas(cadena){
	var arrayPalabras = cadena.split(" ");
	var palabra="";
	var contCaracteres =0;
	var contMayus =0;
	for (var x=0;x < arrayPalabras.length;x++){
		palabra = arrayPalabras[x];
		contCaracteres = contCaracteres + palabra.length;
		for (var i=0;i < palabra.length;i++)
			if(palabra.charAt(i) == palabra.charAt(i).toUpperCase())
			contMayus = contMayus + 1;
		
}
	if(contCaracteres == contMayus){
		document.write(cadena);
		document.write("<p></p>");
		document.write("Son todoas mayusculas");
	}else if(contCaracteres > contMayus && contMayus != 0){
		document.write(cadena);
		document.write("<p></p>");
		document.write("Hay mayusculas y minusculas");
	}else{
		document.write(cadena);
		document.write("<p></p>");
		document.write("Son todoas minusculas");
	}
}


var cad = prompt("introduce tu frase" );
mayusculas(cad);