// JavaScript Document
var n1 =prompt("Jugador1, introduce numero.");
var n2 ;
function adivinaaas(){
	do{
		n2 =prompt("Jugador2, introduce numero.");	
	
		if(n1<n2){
			alert("El numero del jugador1 es mas pequeño, intentalo de nuevo");
			
		}else if(n1>n2){
			alert("El numero del jugador1 es mas grande, intentalo de nuevo");
		
		}else{
			
		}
	}while(n1 != n2){
		 alert("Has acertadoo!");

		}
	
	}

	
adivinaaas();