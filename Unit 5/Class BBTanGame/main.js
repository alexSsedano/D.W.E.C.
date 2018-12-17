// JavaScript Document
import  {Block} from './block.js';
import  {Ball} from './block.js';

class BBTanGame{
	constructor(){
		this.blockArray =[];
		this.nRonda =0;
		this.ballsArray =[];
		this.svg;
		this.cont =10;
		this.xup;
		this.yup;
		this.xdown;
		this.ydown;
		this.clock;
		this.mooving = false ;
}


newRound(){
	this.blockArray.push([]);
	for(let i=0;i<= 13;i++){
		let x =2+ (i *50);
		let porcentaje = Math.floor(Math.random() * (100 - 1)) + 1;
		if(porcentaje >=40){
			this.blockArray[this.nRonda].push(new Block(x, 2, "svg", this.nRonda ));
		}
	}
	this.nRonda++;
}


moveCubesDown(){
    for(let i = 0; i < this.this.blockArray.length; i++){
		for(let o =0; o <= this.this.blockArray[i].length-1;o++){
			if(this.this.blockArray[i][o][0] != false){
			this.this.blockArray[i][o].cube.setAttribute("y", this.this.blockArray[i][o].cubeY +50);
			this.this.blockArray[i][o].cubeY += 50;
			this.this.blockArray[i][o].nHits.setAttribute("y", this.this.blockArray[i][o].hitY +50);
			this.this.blockArray[i][o].hitY+=50;
			}
		}
    }
	this.newRound();
}

moovement(moovementX,moovementY){
	this.sv = document.getElementById("tablero");
	for(let i=0 ;i <= this.ballsArray.length-1; i++){
		if(this.ballsArray[i].onmoove == true){
			this.StartColision(i);
			if(this.ballsArray[i].subir){
				this.ballsArray[i].ball.setAttribute("cy", this.ballsArray[i].posY - moovementY); 
				this.ballsArray[i].posY -= moovementY;
				if(this.ballsArray[i].posY <= this.ballsArray[i].radio){
					this.ballsArray[i].subir = false;
				}
			}else{
				this.ballsArray[i].ball.setAttribute("cy", this.ballsArray[i].posY + moovementY);
				this.ballsArray[i].posY += moovementY;
				if(this.ballsArray[i].posY >= 700 - this.ballsArray[i].radio){
					this.ballsArray[i].onmoove = false;
				}
			}
			if(this.ballsArray[i].derecha){
				
				this.ballsArray[i].ball.setAttribute("cx", this.ballsArray[i].posX + moovementX); 
				this.ballsArray[i].posX += moovementX;
				if(this.ballsArray[i].posX >= 700-this.ballsArray[i].radio){
					this.ballsArray[i].derecha = false;	
				}
			}else{
				this.ballsArray[i].ball.setAttribute("cx", this.ballsArray[i].posX - moovementX); 
				this.ballsArray[i].posX -= moovementX;
				if(this.ballsArray[i].posX <= this.ballsArray[i].radio){
					this.ballsArray[i].derecha = true;	
				}	
			}
		}
	}
}

firstBall(){
	let result = -1;
	for(let i = 0;i <= this.ballsArray.length-1;i++){
		if(this.ballsArray[i].onmoove==true){
		}else{
			result = i;
		}
	}
	return result;
}

resetBalls(){
	for(let i = 0; i<= this.ballsArray.length-1;i++){
			this.ballsArray[i].posX = 350;
			this.ballsArray[i].posY = 700;
			this.ballsArray[i].ball.setAttribute("cx", 350); 
			this.ballsArray[i].ball.setAttribute("cy", 700);
		}
}

endOfRound(arr){
	let conta=0;
	for(let i = 0; i<= arr.length-1;i++){
		if(arr[i].onmoove){
			conta++
		}
	}
	let end = this.endOfGame();
	if(end){
		this.resetBalls();
	}else{
		if(conta <= 0){
			clearInterval(this.clock);
			this.moveCubesDown();
			this.resetBalls();
			this.cont =10;
			this.mooving = false;
		}
	}
}

getMousePositionDown(e){
	if(!this.mooving){
		document.getElementsByTagName("line")[0].setAttribute("style","stroke:rgb(255,255,255);stroke-width:2");
		e.preventDefault();
		let rect = e.target.getBoundingClientRect();
		this.xdown= e.clientX - rect.left; 
		this.ydown = e.clientY - rect.top; 
	}
}

getMousePositionUp(e){
	if(!this.mooving){
		document.getElementsByTagName("line")[0].setAttribute("style","stroke:rgb(0,0,0);stroke-width:2");
		let rect = e.target.getBoundingClientRect();
		this.xup= e.clientX - rect.left; 
		this.yup = e.clientY - rect.top;
		let x = (this.xup - this.xdown) ;
		let y = (this.yup - this.ydown) ;
		
		if(x >= 5){
				y = (5/ x) * y;
				x =5;
			}
		if(x <= -5){
				y = (-5 / x) * y;
				x =-5;
			}
			if( y >= 5){
				x = (5/y) * x;
				y = 5;
			}
		//this.shot(x,y,false);
		if( x >= 1 && y >= 1){
			this.clock = setInterval( (a,b,c)=>this.shot(a,b,c), 1, Math.abs(x), y, false);
			this.mooving = true;
		}else if(x < 1 && y >= 1){
			for(let i=0; i<= this.ballsArray-1; i++ ){
				this.ballsArray[i].derecha = true;
			}
			//this.clock = setInterval(this.shot, 1, Math.abs(x), y, true );
			this.clock = setInterval((a,b,c)=>this.shot(a,b,c), 1, Math.abs(x), y, true);
			this.mooving = true;
		}
	}
}

shot(moovementX, moovementY, directionX){
	if(this.ballsArray.length <= this.nRonda){
		this.ballsArray.push(new Ball(350,700,"svg", directionX) );	
		for(let i = 0; i<= this.ballsArray.length-1;i++){
			this.ballsArray[i].subir = true;
			this.ballsArray[i].derecha = directionX;
		}
	}
	if(this.cont/100>=this.nRonda+2){
		this.moovement(moovementX,moovementY);
	}else{
		if(this.cont%10 ==0){
			let posBall = this.firstBall();
			if(posBall == -1){
				}else{
					this.ballsArray[posBall].onmoove=true;
			}
		}
		this.cont++;	
		this.moovement(moovementX,moovementY);
	}
	this.endOfRound(this.ballsArray);
}

firstCube(){
	let firstBlockPosition = -1;
	for(let i = this.this.blockArray.length-1; i>=0;i--){
		if(this.this.blockArray[i]){
			for(let o =this.this.blockArray[i].length-1; o >=0;o--){
				if(this.this.blockArray[i][o]){
					if(this.this.blockArray[i][o][0] != false){
						firstBlockPosition = this.this.blockArray[i][o].cubeY;
						o = 0;
					}
				}
			}
		}
	}
	return firstBlockPosition;
}

deleteBlock(posI, posO){
	if(this.this.blockArray[posI][posO].num <= 0){
		document.getElementById("tablero").removeChild(this.this.blockArray[posI][posO].cube);
		document.getElementById("tablero").removeChild(this.this.blockArray[posI][posO].nHits);
		this.this.blockArray[posI][posO]=[];
		this.this.blockArray[posI][posO][0]=false;
	}
}

colisionTop(i, o, posBallArray){
	if(this.this.blockArray[i][o].cubeY<=this.ballsArray[posBallArray].posY+this.ballsArray[i].radio && this.ballsArray[posBallArray].posY+this.ballsArray[i].radio <= this.this.blockArray[i][o].cubeY +15){
		if(this.this.blockArray[i][o].cubeX<=this.ballsArray[posBallArray].posX && this.ballsArray[posBallArray].posX <= this.blockArray[i][o].cubeX +50){
			if(this.ballsArray[posBallArray].subir){	
			}else{
				this.numberReposition(i,o);
				this.blockArray[i][o].num -=1;
				this.blockArray[i][o].nHits.textContent = this.blockArray[i][o].num;
				this.deleteBlock(i,o);
				this.ballsArray[posBallArray].subir =true;
			}
		}
	}
}

colisionBottom(i,o,posBallArray){
	if(this.blockArray[i][o].cubeY+35<=this.ballsArray[posBallArray].posY-this.ballsArray[i].radio && this.ballsArray[posBallArray].posY-this.ballsArray[i].radio <= this.blockArray[i][o].cubeY +50){
		if(this.blockArray[i][o].cubeX<=this.ballsArray[posBallArray].posX && this.ballsArray[posBallArray].posX <= this.blockArray[i][o].cubeX +50){
			if(this.ballsArray[posBallArray].subir){
				this.numberReposition(i,o);
				this.blockArray[i][o].num -=1;
				this.blockArray[i][o].nHits.textContent = this.blockArray[i][o].num;
				this.firstCube(i,o);
				this.ballsArray[posBallArray].subir =false;
				i =0;
			}
			o = 0;
		}
	}
}

colisionLeft(i,o,posBallArray){
	if(this.blockArray[i][o].cubeX<=this.ballsArray[posBallArray].posX+this.ballsArray[i].radio && this.ballsArray[posBallArray].posX+this.ballsArray[i].radio <= this.blockArray[i][o].cubeX + 15){
		if(this.blockArray[i][o].cubeY-this.ballsArray[i].radio<=this.ballsArray[posBallArray].posY && this.ballsArray[posBallArray].posY-this.ballsArray[i].radio <= this.blockArray[i][o].cubeY + 50){
			this.numberReposition(i,o);
			this.blockArray[i][o].num -=1;
			this.blockArray[i][o].nHits.textContent = this.blockArray[i][o].num;
			this.deleteBlock(i,o);
			this.ballsArray[posBallArray].derecha =false;
		}
	}
}

colisionRight(i,o,posBallArray){
	if(this.blockArray[i][o].cubeX+35<=this.ballsArray[posBallArray].posX-this.ballsArray[i].radio && this.ballsArray[posBallArray].posX-this.ballsArray[i].radio <= this.blockArray[i][o].cubeX +50){
		if(this.blockArray[i][o].cubeY-this.ballsArray[i].radio<=this.ballsArray[posBallArray].posY && this.ballsArray[posBallArray].posY-this.ballsArray[i].radio <= this.blockArray[i][o].cubeY + 50){
			this.numberReposition(i,o);
			this.blockArray[i][o].num -=1;
			this.blockArray[i][o].nHits.textContent = this.blockArray[i][o].num;
			this.firstCube(i,o);
			this.ballsArray[posBallArray].derecha =true;
		}
	}
}

colisionTopBottom(posBallArray){
	for(let i = this.blockArray.length-1; i>=0;i--){
		if(this.blockArray[i]){
			for(let o =this.blockArray[i].length-1; o >=0;o--){
				if(this.blockArray[i][o]){
					this.colisionLeft(i,o,posBallArray);
					this.colisionRight(i,o,posBallArray);
					this.colisionBottom(i,o,posBallArray);
					colisionTop(i,o,posBallArray);	
				}
			}
		}
	}
}

StartColision(posBallArray){
	let posFirstCube = this.firstCube();
	if(posFirstCube != -1){
		if(posFirstCube >= this.ballsArray[posBallArray].posY-50){
			this.colisionTopBottom(posBallArray);
		}
	}
}

endOfGame(){
	let first = this.firstCube();
	if (first >= 600){
		return true;
	}else{
		return false;
	}
}

numberReposition(i,o){
	 if(this.blockArray[i][o].num >=10 && this.blockArray[i][o].num -1 <= 9){
		 let newPos = parseInt(this.blockArray[i][o].nHits.getAttribute("x"));
		 this.blockArray[i][o].nHits.setAttribute("x", newPos+6);
	 }
	  if(this.blockArray[i][o].num >=100 && this.blockArray[i][o].num -1 <= 99){
		 let newPos = parseInt(this.blockArray[i][o].nHits.getAttribute("x"));
		 this.blockArray[i][o].nHits.setAttribute("x", newPos+7);
	 }
 }

addPointer(){
	var pointer = document.createElementNS("http://www.w3.org/2000/svg", "line");
	pointer.setAttribute("x1", 350);
	pointer.setAttribute("x2", 350);
	pointer.setAttribute("y1", 700);
	pointer.setAttribute("y2", 600);
	pointer.setAttribute("style", "stroke:rgb(255,255,255);stroke-width:2");
	var container = document.getElementsByTagName("svg")[0];
	container.appendChild(pointer);
	document.getElementsByTagName("line")[0].setAttribute("style","stroke:rgb(0,0,0);stroke-width:2");
}

cordsPointer(e){
	if(!this.mooving){
		let rect = e.target.getBoundingClientRect();
		let xu= e.clientX - rect.left; 
		let yu = e.clientY - rect.top;
		let x = (xu - this.xdown) ;
		let y = (yu - this.ydown) ;
		document.getElementsByTagName("line")[0].setAttribute("x2", 350-x);
		document.getElementsByTagName("line")[0].setAttribute("y2", 700-y);
	}
}

addPath(){
	var newpath = document.createElementNS("http://www.w3.org/2000/svg","path");  
	newpath.setAttribute("id", "pathIdD");  
	newpath.setAttribute("d", "M0 3500 l0 -3500 1249 0 1248 0 6 83 c7 116 40 236 97 352 129 266 362 458 650 537 73 19 109 23 250 23 141 0 177 -4 250 -23 288 -79 521 -271 650 -537 57 -116 90 -236 97 -352 l6 -83 1248 0 1249 0 0 3500 0 3500 -3500 0 -3500 0 0 -3500z");   
	newpath.setAttribute("transform", "translate(0.000000,700.000000) scale(0.100000,-0.100000)");  
	newpath.setAttribute("fill", "black");
	document.getElementsByTagName("svg")[0].appendChild(newpath);
}



}
 var juego = new BBTanGame();
	juego.addPointer();
	juego.addPath();
	juego.newRound();
	document.getElementById("tablero").addEventListener("mouseup", jj);
	document.getElementById("tablero").onmousedown=juego.getMousePositionDown;
	document.getElementById("tablero").onmousemove=juego.cordsPointer;

function jj(e){
	juego.getMousePositionUp(e) ;
}
