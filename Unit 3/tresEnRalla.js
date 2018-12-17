// JavaScript Document
var tablero = [];
var unjugador = false;





function crearTablero(array1, filas, columnas){
	for(let x =0; x< filas ;x++){
		array1[x] = [];
		for(let y =0; y < columnas;y++){
			array1[x][y] = [];
			tableroEnBlanco(array1,x,y);
		}
	}
}
function lose(){
	var los =0;
	for(let i =0; i< 3 ;i++){
		for(let o =0; o < 3;o++){
			if(tablero[i][o]!="."){
				los++;
			}

		}
	}
	if(los>=9){
		alert("Habeis empatado");
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				if(tablero[i][o]!="."){
					tableroEnBlanco(tablero,i,o);
					let x = document.getElementById("myTable").rows[i].cells;
					x[o].innerHTML = ".";
				}
			}
		}
	}
}
function win(){
	if(tablero[0][0]== elemento && tablero[1][0]==elemento && tablero[2][0] == elemento){
		alert(elemento + " Has ganado");
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				tableroEnBlanco(tablero,i,o);
				let x = document.getElementById("myTable").rows[i].cells;
				x[o].innerHTML = ".";
			}
		}
	}else if(tablero[0][1]== elemento && tablero[1][1]==elemento && tablero[2][1] == elemento){
		alert(elemento + " Has ganado");
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				tableroEnBlanco(tablero,i,o);
				let x = document.getElementById("myTable").rows[i].cells;
				x[o].innerHTML = ".";
			}
		}
	}else if(tablero[0][2]== elemento && tablero[1][2]==elemento && tablero[2][2] == elemento){
		alert(elemento + " Has ganado");
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				tableroEnBlanco(tablero,i,o);
				let x = document.getElementById("myTable").rows[i].cells;
				x[o].innerHTML = ".";
			}
		}
	}else if(tablero[0][0]== elemento && tablero[0][1]==elemento && tablero[0][2] == elemento){
		alert(elemento + " Has ganado");
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				tableroEnBlanco(tablero,i,o);
				let x = document.getElementById("myTable").rows[i].cells;
				x[o].innerHTML = ".";
			}
		}
	}else if(tablero[1][0]== elemento && tablero[1][1]==elemento && tablero[1][2] == elemento){
		alert(elemento + " Has ganado");
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				tableroEnBlanco(tablero,i,o);
				let x = document.getElementById("myTable").rows[i].cells;
				x[o].innerHTML = ".";
			}
		}
	}else if(tablero[2][0]== elemento && tablero[2][1]==elemento && tablero[2][2] == elemento){
		alert(elemento + " Has ganado");
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				tableroEnBlanco(tablero,i,o);
				let x = document.getElementById("myTable").rows[i].cells;
				x[o].innerHTML = ".";
			}
		}
	}else if(tablero[0][0]== elemento && tablero[1][1]==elemento && tablero[2][2] == elemento){
		alert(elemento + " Has ganado");
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				tableroEnBlanco(tablero,i,o);
				let x = document.getElementById("myTable").rows[i].cells;
				x[o].innerHTML = ".";
			}
		}
	}else if(tablero[2][0]== elemento && tablero[1][1]==elemento && tablero[0][2] == elemento){
		alert(elemento + " Has ganado");
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				tableroEnBlanco(tablero,i,o);
				let x = document.getElementById("myTable").rows[i].cells;
				x[o].innerHTML = ".";
			}
		}

	}else{
		lose();
	}
}
function tableroEnBlanco(array2, posX, posY){
	array2[posX][posY]=".";
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
var elemento ="x";
function rellena00(){
	let x = document.getElementById("myTable").rows[0].cells;
	x[0].innerHTML = elemento;
	tablero[0][0] = elemento;
	win();
	if(unjugador){
		ia();
	}
	if(elemento == "x"){
		elemento ="o";
	}else{
		elemento ="x";
	}
	
}
function rellena01(){
	let x = document.getElementById("myTable").rows[1].cells;
	x[0].innerHTML = elemento;
	tablero[1][0] = elemento;
	win();
	if(unjugador){
		ia();
	}
		if(elemento == "x"){
		elemento ="o";
	}else{
		elemento ="x";
	}
	
}
function rellena02(){
	let x = document.getElementById("myTable").rows[2].cells;
	x[0].innerHTML = elemento;
	tablero[2][0] = elemento;
	win();
	if(unjugador){
		ia();
	}
		if(elemento == "x"){
		elemento ="o";
	}else{
		elemento ="x";
	}
	
}
function rellena10(){
	let x = document.getElementById("myTable").rows[0].cells;
	x[1].innerHTML = elemento;
	tablero[0][1] = elemento;
	win();
	if(unjugador){
		ia();
	}
		if(elemento == "x"){
		elemento ="o";
	}else{
		elemento ="x";
	}
	
}
function rellena11(){
	let x = document.getElementById("myTable").rows[1].cells;
	x[1].innerHTML = elemento;
	tablero[1][1] = elemento;
	win();
	if(unjugador){
		ia();
	}
		if(elemento == "x"){
		elemento ="o";
	}else{
		elemento ="x";
	}
	
}
function rellena12(){
	let x = document.getElementById("myTable").rows[2].cells;
	x[1].innerHTML = elemento;
	tablero[2][1] = elemento;
	win();
	if(unjugador){
		ia();
	}
		if(elemento == "x"){
		elemento ="o";
	}else{
		elemento ="x";
	}
	
}
function rellena20(){
	let x = document.getElementById("myTable").rows[0].cells;
	x[2].innerHTML = elemento;
	tablero[0][2] = elemento;
	win();
	if(unjugador){
		ia();
	}
		if(elemento == "x"){
		elemento ="o";
	}else{
		elemento ="x";
	}
	
}
function rellena21(){
	let x = document.getElementById("myTable").rows[1].cells;
	x[2].innerHTML = elemento;
	tablero[1][2] = elemento;
	win();
	if(unjugador){
		ia();
	}
		if(elemento == "x"){
		elemento ="o";
	}else{
		elemento ="x";
	}
	
}
function rellena22(){
	let x = document.getElementById("myTable").rows[02].cells;
	x[2].innerHTML = elemento;
	tablero[2][2] = elemento;
	win();
	if(unjugador){
		ia();
	}
		if(elemento == "x"){
		elemento ="o";
	}else{
		elemento ="x";
	}
	
}

function ia(){
	var jugado=false;
	var puntos=0;
	for(let i =0; i< 3 ;i++){
		for(let o =0; o < 3;o++){
			if(tablero[i][o]== elemento){
			puntos++;
			if(tablero[1][1]=="."){
				tablero[1][1]==elemento;
				if(elemento == "x"){
					tablero[1][1]="o";
					let x = document.getElementById("myTable").rows[1].cells;
					x[1].innerHTML = "o";
					if(elemento == "x"){
						elemento ="o";
					}else{
						elemento ="x";
					}
				}else{
					tablero[1][1]="x";
					let x = document.getElementById("myTable").rows[1].cells;
					x[1].innerHTML = "x";
					if(elemento == "x"){
						elemento ="o";
					}else{
						elemento ="x";
					}
				}
			jugado = true;
			}else if(puntos==2){
				for(let o =0; o < 3;o++){
					if(tablero[i][o]=="."){
						if(elemento == "x"){
							tablero[i][o]="o";
							let x = document.getElementById("myTable").rows[i].cells;
							x[o].innerHTML = "o";
							if(elemento == "x"){
						elemento ="o";
					}else{
						elemento ="x";
					}
						}else{
							tablero[i][o]="x";
							let x = document.getElementById("myTable").rows[i].cells;
							x[o].innerHTML = "x";
							if(elemento == "x"){
						elemento ="o";
					}else{
						elemento ="x";
					}
						}
					}
				}
				
			}
		}	
	}
		jugado = true;
	if(jugado==false){
		for(let i =0; i< 3 ;i++){
			for(let o =0; o < 3;o++){
				if(tablero[o][i]== elemento){
					puntos++;
					if(puntos==2){
						for(let i =0; i < 3;i++){
							if(tablero[i][o]=="."){
								if(elemento == "x"){
									tablero[i][o]="o";
									let x = document.getElementById("myTable").rows[i].cells;
									x[o].innerHTML = "o";
									if(elemento == "x"){
										elemento ="o";
									}else{
										elemento ="x";
									}
								}else{
									tablero[i][o]="x";
									let x = document.getElementById("myTable").rows[i].cells;
									x[o].innerHTML = "x";
									if(elemento == "x"){
										elemento ="o";
									}else{
										elemento ="x";
									}
								}
							}
						}
					}jugado =false;
				}
			}
		}
		

	}
	puntos=0;
		
		
}
	
			
}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			


	
function p1p2(){
	if(unjugador){
		unjugador =false;
		console.log(unjugador);
	}else{
		unjugador =true;
		console.log(unjugador);
	}
}


 crearTablero(tablero, 3, 3);
 imprimieTablero(tablero);
console.log(unjugador);

