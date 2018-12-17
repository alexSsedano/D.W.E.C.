 

// JavaScript Document
function main(){
var centroBolaX = parseInt(document.getElementsByTagName("circle")[0].getAttribute("cx"));
var centroBolaY = parseInt(document.getElementsByTagName("circle")[0].getAttribute("cy"));
var radioBola = parseInt(document.getElementsByTagName("circle")[0].getAttribute("r"));
var palaRojaX = parseInt(document.getElementById("rectRojo").getAttribute("x"));
var palaRojaY = parseInt(document.getElementById("rectRojo").getAttribute("y"));
var altoPala = parseInt(document.getElementById("rectRojo").getAttribute("height"));
var anchoPala = parseInt(document.getElementById("rectRojo").getAttribute("width"));
var palaAzulX = parseInt(document.getElementById("rectAzul").getAttribute("x")) + anchoPala;
var palaAzulY = parseInt(document.getElementById("rectAzul").getAttribute("y"));

var pong1 = new pong(centroBolaX, centroBolaY, radioBola, palaRojaX, palaRojaY, altoPala, anchoPala, palaAzulX, palaAzulY);
setInterval(() => {pong1.mover()},1);
document.addEventListener("keydown",function  movpala(event){
		
		pong1.key = event.keyCode;
			if(pong1.key == 87){
				if(pong1.palaAzulY >= 0){
					
					document.getElementById("rectAzul").setAttribute("y",parseInt(document.getElementById("rectAzul").getAttribute("y"))-40);
					pong1.palaAzulY-=40;
				}
			}
			if(pong1.key == 83){
				if(pong1.palaAzulY <= 200  ){
					
					document.getElementById("rectAzul").setAttribute("y",parseInt(document.getElementById("rectAzul").getAttribute("y"))+40);
					pong1.palaAzulY+=40;
				}
			}
		   if(pong1.key == 38){
				if(pong1.palaRojaY >= 0){
					
					document.getElementById("rectRojo").setAttribute("y",parseInt(document.getElementById("rectRojo").getAttribute("y"))-40);
					pong1.palaRojaY-=40;
				}
			}
			if(pong1.key == 40){
				if(pong1.palaRojaY <= 200){
					
					document.getElementById("rectRojo").setAttribute("y",parseInt(document.getElementById("rectRojo").getAttribute("y"))+40);
					pong1.palaRojaY+=40;
				}
			}
		});
	
}

class pong{
	constructor(centroBolaX, centroBolaY, radioBola, palaRojaX, palaRojaY, altoPala, anchoPala, palaAzulX, palaAzulY ){
		this.centroBolaX = centroBolaX;
		this.centroBolaY = centroBolaY;
		this.radioBola = radioBola;
		this.palaRojaX = palaRojaX;
		this.palaRojaY = palaRojaY;
		this.altoPala = altoPala;
		this.anchoPala = anchoPala;
		this.palaAzulX = palaAzulX;
		this.palaAzulY = palaAzulY;
		this.subir = true;
		this.derecha = true;
		this.key = 0;
	}
	

	
	
rebote(){
	
		if(this.centroBolaX==this.palaRojaX ){
			if(this.centroBolaY >= this.palaRojaY && this.centroBolaY <= this.palaRojaY + this.altoPala){
				this.subir = false;
			}
		}
		if(this.centroBolaX == this.palaAzulX){
			if(this.centroBolaY >= this.palaAzulY && this.centroBolaY <= this.palaAzulY + this.altoPala){
				this.subir = true;
			}
		}
	}
 stop(){
	 console.log("stop")
 }
mover(){
	 	this.rebote();
		if(this.subir){
			this.centroBolaX+=2;
			document.getElementsByTagName("circle")[0].setAttribute("cx", this.centroBolaX );
			
			if(this.centroBolaX == 1500-this.radioBola){
				document.getElementsByTagName("th")[1].innerHTML = parseInt(document.getElementsByTagName("th")[1].innerHTML) + 1;
				this.centroBolaX = 750;
				this.centroBolaY = 200;
				document.getElementsByTagName("circle")[0].setAttribute("cx", this.centroBolaX );
				document.getElementsByTagName("circle")[0].setAttribute("cy", this.centroBolaY );
				setInterval( this.stop(),5000);
				
			}
		}else{
			this.centroBolaX-=2;
			document.getElementsByTagName("circle")[0].setAttribute("cx", this.centroBolaX );			
			if(this.centroBolaX == 0+this.radioBola){
				document.getElementsByTagName("th")[0].innerHTML = parseInt(document.getElementsByTagName("th")[0].innerHTML) + 1;
				this.centroBolaX = 750;
				this.centroBolaY = 200;
				document.getElementsByTagName("circle")[0].setAttribute("cx", this.centroBolaX );
				document.getElementsByTagName("circle")[0].setAttribute("cy", this.centroBolaY );
				setInterval( this.stop() ,5000);
				
			}
		}
		if(this.derecha){
			this.centroBolaY+=2;
			document.getElementsByTagName("circle")[0].setAttribute("cy", this.centroBolaY );
			
			if(this.centroBolaY >= 400-this.radioBola){
				this.derecha = false;
			}
		}else{
			this.centroBolaY-=2;
			document.getElementsByTagName("circle")[0].setAttribute("cy", this.centroBolaY );
			
			if(this.centroBolaY <= 0+this.radioBola){
				this.derecha = true;
			}
		}
	}
}

