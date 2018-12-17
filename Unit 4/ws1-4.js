// JavaScript Document
//var nFilas = prompt("Introduce el numero de filas.");
//var nCol = prompt("Introduce el numero de columnas.");
class dibujo{
	constructor(alto, ancho){
		this.alto = alto;
		this.ancho = ancho;
		this.lienzo = [];
	}
	crearTablero(){
		var cont=0;
		
		document.write('<table id="myTable" align="center" width="500px" height="500px"  >');
		document.write("<tbody>");
		for(let i = 0; i < this.ancho; i++) {
			document.write("<tr>");
			for(let o = 0; o < this.alto; o++){
				document.write('<td  onmouseenter="color(event)"> </td>'); 
			}
			document.write("</tr>");
		}
		
		document.write("</table>");
		document.write("</tbody>");
	}
	pintartablero(posicion){
		var x = posicion.clientX;
    	var y = posicion.clientY;
	}
	pintar(event){
		if(event.shiftKey){
		event.target.style.background="red";
	}else if(event.ctrlKey){
		event.target.style.background="blue";
	}else if(event.altKey){
		event.target.style.background="white";
	}
}
	cambiarColor(o){
		o.style.backgroundColor = "white"; 
	}
	borrar(){
		
    	var x = [... document.getElementById("myTable").getElementsByTagName("td")];
    
    	x.forEach(this.cambiarColor);
	}
}
function color(event){
	dibujo1.pintar(event);
}
function borrarTodo(){
	dibujo1.borrar();
}
var dibujo1 = new dibujo(200, 200);
dibujo1.crearTablero();