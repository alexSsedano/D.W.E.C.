// JavaScript Document
var nFilas = prompt("Introduce el numero de filas.");
var nCol = prompt("Introduce el numero de columnas.");
var dificultad = prompt("introduce la dificultad.");
class puzle{
	constructor (alto, ancho, dificultad){
		this.alto =alto;
		this.ancho =ancho;
		this.tablero =[];
		this.espacio =[];
		this.dificultad = dificultad;
	}
 crearTablero(){
	for(let x =0; x< this.ancho ;x++){
		this.tablero[x] = [];
		for(let y =0; y < this.alto; y++){
			this.tablero[x][y] = [];
		}
	}
}
rellenarCasilla(){
	var cont =0;
	for(let x =0; x< this.alto ;x++){
		for(let y =0; y < this.ancho; y++){
			this.tablero[x][y]=cont;
			if(cont == 0){
				this.espacio[0]=x;
				this.espacio[1]=y;
			}
			cont++;
		}
	}
}
desOrdenarTablero(){
	for(let i=0;i<=this.dificultad;i++){
		let x = Math.floor((Math.random() * 4) + 1);
		switch (x) {
    case 1:
        this.subirHueco();
        break; 
    case 2:
        this.bajarHueco();
        break; 
    case 3:
        this.huecoDerecha();
        break; 
    case 4:
        this.huecoIzquierda();
        break;
}
	}
	
}
 subirHueco(){
	var aux = this.tablero[this.espacio[0]][this.espacio[1]];
	if(this.espacio[0]<=0){
		return false;
	}else{
		this.tablero[this.espacio[0]][this.espacio[1]] = this.tablero[this.espacio[0]-1][this.espacio[1]];
		this.tablero[this.espacio[0]-1][this.espacio[1]] = aux;
		this.espacio[0]=this.espacio[0]-1;
	}
	
	
}	
 bajarHueco(){
 	var aux = this.tablero[this.espacio[0]][this.espacio[1]];
	if(this.espacio[0] >= (this.alto)-1){
		return false;
	}else{
		this.tablero[this.espacio[0]][this.espacio[1]] = this.tablero[this.espacio[0]+1][this.espacio[1]];
		this.tablero[this.espacio[0]+1][this.espacio[1]] = aux;
		this.espacio[0]=this.espacio[0]+1;
	}
	
	
}
huecoDerecha(){
	 	var aux = this.tablero[this.espacio[0]][this.espacio[1]];
	if(this.espacio[1] >= (this.ancho)-1){
		return false;
	}else{
		this.tablero[this.espacio[0]][this.espacio[1]] = this.tablero[this.espacio[0]][this.espacio[1]+1];
		this.tablero[this.espacio[0]][this.espacio[1]+1] = aux;
		this.espacio[1]=this.espacio[1]+1;
	}
	
	
}	
huecoIzquierda(){
	var aux = this.tablero[this.espacio[0]][this.espacio[1]];
	if(this.espacio[1] <= 0){
		return false;
	}else{
		this.tablero[this.espacio[0]][this.espacio[1]] = this.tablero[this.espacio[0]][this.espacio[1]-1];
		this.tablero[this.espacio[0]][this.espacio[1]-1] = aux;
		this.espacio[1]=this.espacio[1]-1;
	}
	
	
}

hasGanado(){
	let win =0;
	let cont =0;
		for(let i = 0; i < this.ancho; i++) {
			for(let o = 0; o < this.alto; o++){
				if(this.tablero[i][o]== cont ){
					cont++
					win++;
				}else{
					cont++;
				}
			}
		}
		if(win >= (this.alto*this.ancho)-1){
			return true;
		}
	}
}
var puzzle1 = new puzle(nFilas, nCol, dificultad);
function derecha(){
	var noDerecha = true;
	 noDerecha = puzzle1.huecoDerecha();
	if(noDerecha == false){
		alert("No puedes avanzar mas a la izquierda");
	}else{
		actualizarTtablero();
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
	document.write('<table id="myTable" width=100% border=1>');
	document.write("<tbody>");
	for(let i = 0; i < puzzle1.ancho; i++) {
		document.write("<tr>");
		for(let o = 0; o < puzzle1.alto; o++){
			document.write("<td>"+ puzzle1.tablero[i][o] +"</td>"); 
		}
		document.write("</tr>");
	}
	document.write("</table>");
	document.write("</tbody>");
}
puzzle1.crearTablero();
puzzle1.rellenarCasilla();
imprimeTablero();
puzzle1.desOrdenarTablero();
actualizarTtablero();


 









 