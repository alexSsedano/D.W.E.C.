// JavaScript Document
function adivinaaas(){
	var n1 =parseInt(prompt("Jugador1, introduce numero."));
	var n2 =parseInt(prompt("Jugador2, introduce numero."));
	while(n1 != n2){
		 
		if(n1<n2){
			alert("El numero del jugador1 es mas pequeño, intentalo de nuevo");
			n2 =prompt("Jugador2, introduce numero.");
		}else{
			alert("El numero del jugador1 es mas grande, intentalo de nuevo");
			n2 =prompt("Jugador2, introduce numero.");
		}
		}
	alert("Has acertadoo!");
	}
	
adivinaaas();