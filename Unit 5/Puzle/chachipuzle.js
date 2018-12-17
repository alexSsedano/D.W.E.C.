// JavaScript Document
import  {puzle} from './PUZLE-EXPORT.js';

var nFilas = prompt("Introduce el numero de filas.");
var nCol = prompt("Introduce el numero de columnas.");
var dificultad = prompt("introduce la dificultad.");



var puzzle1 = new puzle(nCol, nFilas, dificultad);

function derecha(){
	var noDerecha = true;
	 noDerecha = puzzle1.huecoDerecha();
	if(noDerecha == false){
		alert("No puedes avanzar mas a la derecha");
	}else{
		actualizarTtablero();
		fichasPuzle();
	}
	if(puzzle1.hasGanado()){
		alert("Has ganadoooooo !!!");
	}
}
function izquierda(){
	var noIzquierda = true;
	 noIzquierda = puzzle1.huecoIzquierda();
	if(noIzquierda == false){
		alert("No puedes avanzar a la izquierda");
	}else{
		actualizarTtablero();
		fichasPuzle();
	}
	if(puzzle1.hasGanado()){
		alert("Has ganadoooooo !!!");
	}
}
function arriba(){
	var noSubir = true;
	 noSubir = puzzle1.subirHueco();
	if(noSubir == false){
		alert("No puedes subir mas");
	}else{
		actualizarTtablero();
		fichasPuzle();
	}
	if(puzzle1.hasGanado()){
		alert("Has ganadoooooo !!!");
	}
}
function abajo(){
	var noBajar = true;
	 noBajar = puzzle1.bajarHueco();
	if(noBajar == false){
		alert("No puedes bajar mas");
	}else{
		actualizarTtablero();
		fichasPuzle();
	}if(puzzle1.hasGanado()){
		alert("Has ganadoooooo !!!");
	}
}
function actualizarTtablero(){
	let cont =0;
	for(let x =0; x< puzzle1.ancho ;x++){
		for(let y =0; y < puzzle1.alto; y++){
			document.getElementsByTagName("td")[cont].innerHTML = puzzle1.tablero[x][y];
			cont++;
		}
	}
}

function imprimeTablero(){
	var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.getElementById("tabla").appendChild(x);
	for(let i = 0; i < puzzle1.ancho; i++) {
		var y = document.createElement("TR");
		y.setAttribute("id", i);
		document.getElementById("myTable").appendChild(y);
			for(let o = 0; o < puzzle1.alto; o++){
				var z = document.createElement("TD");
				var t = document.createTextNode("cell");
				z.appendChild(t);
				document.getElementById(i).appendChild(z);
		}
	}
}
 function fichasPuzle(){
	 let cont =0;
	 for(let x =0; x<= puzzle1.ancho-1 ;x++){
		for(let y =0; y <= puzzle1.alto-1; y++){
			let pos = puzzle1.tablero[x][y];
			switch (pos) {
				case 0:
					document.getElementsByTagName("td")[cont].src = "fila-1-col-1.jpg";
					break;
				case 1:
					document.getElementsByTagName("td")[cont].src = "fila-1-col-2.jpg";
					break;
				case 2:
					document.getElementsByTagName("td")[cont].src = "fila-1-col-3.jpg";
					break;
				case 3:
					document.getElementsByTagName("td")[cont].src = "fila-2-col-1.jpg";
					break;
				case 4:
					document.getElementsByTagName("td")[cont].src = "fila-2-col-2.jpg";
					break;
				case 5:
					document.getElementsByTagName("td")[cont].src = "fila-2-col-3.jpg";
					break;
				case 6:
					document.getElementsByTagName("td")[cont].src = "fila-3-col-1.jpg";
					break;
				case 7:
					document.getElementsByTagName("td")[cont].src = "fila-3-col-2.jpg";
					break;
				case 8:
					document.getElementsByTagName("td")[cont].src = "fila-3-col-3.jpg";
					break;
			}
		}
	}
 }
puzzle1.crearTablero();
puzzle1.rellenarCasilla();
imprimeTablero();
puzzle1.desOrdenarTablero();
actualizarTtablero();

document.getElementById("izquierda").onclick=izquierda;
document.getElementById("derecha").onclick=derecha;
document.getElementById("arriba").onclick=arriba;
document.getElementById("abajo").onclick=abajo;
 
