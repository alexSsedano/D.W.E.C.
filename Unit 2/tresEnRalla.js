// JavaScript Document
var tablero = [];
function crearTablero(array1, filas, columnas){
	for(let x =0; x< filas ;x++){
		array1[x] = [];
		for(let y =0; y < columnas;y++){
			array1[x][y] = [];
			tableroEnBlanco(array1,x,y);
		}
	}
}
function tableroEnBlanco(array2, posX, posY){
	array2[posX][posY]=1;
}
function imprimieTablero(array1){
	document.write('<table id="myTable" width=100% border=1>');
	document.write("<tbody>");
	for(let i = 0; i < array1.length; i++) {
		document.write("<tr>");
		for(let o = 0; o < array1[i].length; o++){
			document.write("<td>"+ tablero[i][o] +"</td>"); 
		}
		document.write("</tr>");
	}
	document.write("</table>");
	document.write("</tbody>");
}

 crearTablero(tablero, 3, 3);
 imprimieTablero(tablero);
