// JavaScript Document
function  invierteCadena(cad_arg){
	var inver ="";
	for(let i = cad_arg.length; i>= 0; i--){
		inver = inver + cad_arg.charAt(i);	
	}
	return inver;
}
//---------------------PARTE SUPERIOR------------------------------------

function formatoPalabra(pal){
	document.write("<table>");
	document.write("<tbody>");
	document.write("<tr>");
	for(var y=0;y<pal.length;y++){
	document.write("<td>"+ pal[y] +"</td>");	
	}
	document.write("</tr>");
	
	
//----------------------PARTE CENTRAL-----------------------------------	
	
	
	var inver = invierteCadena(pal);
	var alto = pal.length -1;
	for(var i=1;i<alto;i++){
		document.write("<tr>");
		document.write("<td>"+ pal[i] +"</td>");
		for(var x=1;x<alto;x++){
			document.write("<td> </td>");
		}
		document.write("<td>"+ inver[i] +"</td>");
		document.write("</tr>");
	}
	
	
//---------------------PARTE INFERIOR----------------------------------	
	
	
	document.write("<tr>");
	for(var z=0;z<pal.length;z++){
	document.write("<td>"+ inver[z] +"</td>");	
	}
	document.write("</tr>");
	document.write("</tbody>");
	document.write("</table>");
	
}
	
var palabra = prompt("Introduce palabra");
formatoPalabra(palabra);