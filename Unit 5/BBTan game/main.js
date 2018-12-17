// JavaScript Document
import  {Block} from './block.js';
import  {Ball} from './block.js';
var blockArray =[];
var nRonda =0;
var ballsArray =[];
var svg;
var cont =10;
var xup;
var yup;
var xdown;
var ydown;
var clock;
var mooving = false ;
var scoreBoard;
var roundBoard;



function newRound(){
	blockArray.push([]);
	for(let i=0;i<= 13;i++){
		let x =2+ (i *50);
		let porcentaje = Math.floor(Math.random() * (100 - 1)) + 1;
		if(porcentaje >=40){
			blockArray[nRonda].push(new Block(x, 2, "svg", nRonda ));
		}
	}
	nRonda++;
	
}


function moveCubesDown(){
    for(let i = 0; i < blockArray.length; i++){
		for(let o =0; o <= blockArray[i].length-1;o++){
			if(blockArray[i][o][0] != false){
			blockArray[i][o].cube.setAttribute("y", blockArray[i][o].cubeY +50);
			blockArray[i][o].cubeY += 50;
			blockArray[i][o].nHits.setAttribute("y", blockArray[i][o].hitY +50);
			blockArray[i][o].hitY+=50;
			}
		}
    }
	newRound();
}

function moovement(moovementX,moovementY){
	svg = document.getElementById("tablero");
	for(let i=0 ;i <= ballsArray.length-1; i++){
		if(ballsArray[i].onmoove == true){
			StartColision(i);
			if(ballsArray[i].subir){
				ballsArray[i].ball.setAttribute("cy", ballsArray[i].posY - moovementY); 
				ballsArray[i].posY -= moovementY;
				if(ballsArray[i].posY <= ballsArray[i].radio){
					ballsArray[i].subir = false;
				}
			}else{
				ballsArray[i].ball.setAttribute("cy", ballsArray[i].posY + moovementY);
				ballsArray[i].posY += moovementY;
				if(ballsArray[i].posY >= 700 - ballsArray[i].radio){
					ballsArray[i].onmoove = false;
				}
			}
			if(ballsArray[i].derecha){
				
				ballsArray[i].ball.setAttribute("cx", ballsArray[i].posX + moovementX); 
				ballsArray[i].posX += moovementX;
				if(ballsArray[i].posX >= 700-ballsArray[i].radio){
					ballsArray[i].derecha = false;	
				}
			}else{
				ballsArray[i].ball.setAttribute("cx", ballsArray[i].posX - moovementX); 
				ballsArray[i].posX -= moovementX;
				if(ballsArray[i].posX <= ballsArray[i].radio){
					ballsArray[i].derecha = true;	
				}	
			}
		}
	}
}

function firstBall(){
	let result = -1;
	for(let i = 0;i <= ballsArray.length-1;i++){
		if(ballsArray[i].onmoove==true){
		}else{
			result = i;
		}
	}
	return result;
}

function resetBalls(){
	for(let i = 0; i<= ballsArray.length-1;i++){
			ballsArray[i].posX = 350;
			ballsArray[i].posY = 700;
			ballsArray[i].ball.setAttribute("cx", 350); 
			ballsArray[i].ball.setAttribute("cy", 700);
		}
}

function endOfRound(arr){
	let conta=0;
	for(let i = 0; i<= arr.length-1;i++){
		if(arr[i].onmoove){
			conta++
		}
	}
	let end = endOfGame();
	if(end){
		resetBalls();
	}else{
		if(conta <= 0){
			clearInterval(clock);
			moveCubesDown();
			resetBalls();
			cont =10;
			mooving = false;
		}
	}
}

function getMousePositionDown(e){
	if(!mooving){
		document.getElementsByTagName("line")[0].setAttribute("style","stroke:rgba(231,57,255,1.00);stroke-width:2");
		e.preventDefault();
		let rect = e.target.getBoundingClientRect();
		xdown= e.clientX - rect.left; 
		ydown = e.clientY - rect.top; 
	}
}

function getMousePositionUp(e){
	if(!mooving){
		document.getElementsByTagName("line")[0].setAttribute("style","stroke:rgb(198,255,254);stroke-width:2");
		let rect = e.target.getBoundingClientRect();
		xup= e.clientX - rect.left; 
		yup = e.clientY - rect.top;
		let x = (xup - xdown) ;
		let y = (yup - ydown) ;
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
		if( x >= 1 && y >= 1){
			clock = setInterval(shot, 1, x, y, false);
			mooving = true;
		}else if(x < 1 && y >= 1){
			for(let i=0; i<= ballsArray-1; i++ ){
				ballsArray[i].derecha = true;
			}
			clock = setInterval(shot, 1, Math.abs(x), y, true );
			mooving = true;
		}
		
	}
}

function shot(moovementX, moovementY, directionX){
	if(ballsArray.length <= nRonda){
		ballsArray.push(new Ball(350,700,"svg", directionX) );	
		for(let i = 0; i<= ballsArray.length-1;i++){
			ballsArray[i].subir = true;
			ballsArray[i].derecha = directionX;
		}
	}
	if(cont/100>=nRonda+2){
		moovement(moovementX,moovementY);
	}else{
		if(cont%10 ==0){
			let posBall = firstBall();
			if(posBall == -1){
				}else{
					ballsArray[posBall].onmoove=true;
			}
		}
		cont++;	
		moovement(moovementX,moovementY);
	}
	endOfRound(ballsArray);
}

function firstCube(){
	let firstBlockPosition = -1;
	for(let i = blockArray.length-1; i>=0;i--){
		if(blockArray[i]){
			for(let o =blockArray[i].length-1; o >=0;o--){
				if(blockArray[i][o]){
					if(blockArray[i][o][0] != false){
						firstBlockPosition = blockArray[i][o].cubeY;
						o = 0;
					}
				}
			}
		}
	}
	return firstBlockPosition;
}

function deleteBlock(posI, posO){
	if(blockArray[posI][posO].num <= 0){
		document.getElementById("tablero").removeChild(blockArray[posI][posO].cube);
		document.getElementById("tablero").removeChild(blockArray[posI][posO].nHits);
		blockArray[posI][posO]=[];
		blockArray[posI][posO][0]=false;
	}
}

function colisionTop(i, o, posBallArray){
	if(blockArray[i][o].cubeY<=ballsArray[posBallArray].posY+ballsArray[i].radio && ballsArray[posBallArray].posY+ballsArray[i].radio <= blockArray[i][o].cubeY +15){
		if(blockArray[i][o].cubeX<=ballsArray[posBallArray].posX && ballsArray[posBallArray].posX <= blockArray[i][o].cubeX +50){
			if(ballsArray[posBallArray].subir){	
			}else{
				numberReposition(i,o);
				blockArray[i][o].num -=1;
				blockArray[i][o].nHits.textContent = blockArray[i][o].num;
				deleteBlock(i,o);
				ballsArray[posBallArray].subir =true;
			}
		}
	}
}

function colisionBottom(i,o,posBallArray){
	if(blockArray[i][o].cubeY+35<=ballsArray[posBallArray].posY-ballsArray[i].radio && ballsArray[posBallArray].posY-ballsArray[i].radio <= blockArray[i][o].cubeY +50){
		if(blockArray[i][o].cubeX<=ballsArray[posBallArray].posX && ballsArray[posBallArray].posX <= blockArray[i][o].cubeX +50){
			if(ballsArray[posBallArray].subir){
				numberReposition(i,o);
				blockArray[i][o].num -=1;
				blockArray[i][o].nHits.textContent = blockArray[i][o].num;
				deleteBlock(i,o);
				ballsArray[posBallArray].subir =false;
				i =0;
			}
			o = 0;
		}
	}
}

function colisionLeft(i,o,posBallArray){
	if(blockArray[i][o].cubeX<=ballsArray[posBallArray].posX+ballsArray[i].radio && ballsArray[posBallArray].posX+ballsArray[i].radio <= blockArray[i][o].cubeX + 15){
		if(blockArray[i][o].cubeY-ballsArray[i].radio<=ballsArray[posBallArray].posY && ballsArray[posBallArray].posY-ballsArray[i].radio <= blockArray[i][o].cubeY + 50){
			numberReposition(i,o);
			blockArray[i][o].num -=1;
			blockArray[i][o].nHits.textContent = blockArray[i][o].num;
			deleteBlock(i,o);
			ballsArray[posBallArray].derecha =false;
		}
	}
}

function colisionRight(i,o,posBallArray){
	if(blockArray[i][o].cubeX+35<=ballsArray[posBallArray].posX-ballsArray[i].radio && ballsArray[posBallArray].posX-ballsArray[i].radio <= blockArray[i][o].cubeX +50){
		if(blockArray[i][o].cubeY-ballsArray[i].radio<=ballsArray[posBallArray].posY && ballsArray[posBallArray].posY-ballsArray[i].radio <= blockArray[i][o].cubeY + 50){
			numberReposition(i,o);
			blockArray[i][o].num -=1;
			blockArray[i][o].nHits.textContent = blockArray[i][o].num;
			deleteBlock(i,o);
			ballsArray[posBallArray].derecha =true;
		}
	}
}

function colisionTopBottom(posBallArray){
	for(let i = blockArray.length-1; i>=0;i--){
		if(blockArray[i]){
			for(let o =blockArray[i].length-1; o >=0;o--){
				if(blockArray[i][o]){
					colisionLeft(i,o,posBallArray);
					colisionRight(i,o,posBallArray);
					colisionBottom(i,o,posBallArray);
					colisionTop(i,o,posBallArray);	
				}
			}
		}
	}
}

function StartColision(posBallArray){
	let posFirstCube = firstCube();
	if(posFirstCube != -1){
		if(posFirstCube >= ballsArray[posBallArray].posY-50){
			colisionTopBottom(posBallArray);
		}
	}
}

function endOfGame(){
	let first = firstCube();
	if (first >= 600){
		return true;
	}else{
		return false;
	}
}

 function numberReposition(i,o){
	 if(blockArray[i][o].num >=10 && blockArray[i][o].num -1 <= 9){
		 let newPos = parseInt(blockArray[i][o].nHits.getAttribute("x"));
		 blockArray[i][o].nHits.setAttribute("x", newPos+6);
	 }
	  if(blockArray[i][o].num >=100 && blockArray[i][o].num -1 <= 99){
		 let newPos = parseInt(blockArray[i][o].nHits.getAttribute("x"));
		 blockArray[i][o].nHits.setAttribute("x", newPos+7);
	 }
 }

function addPointer(){
	var pointer = document.createElementNS("http://www.w3.org/2000/svg", "line");
	pointer.setAttribute("x1", 350);
	pointer.setAttribute("x2", 350);
	pointer.setAttribute("y1", 700);
	pointer.setAttribute("y2", 600);
	pointer.setAttribute("style", "stroke:rgb(198,255,254);stroke-width:2");
	var container = document.getElementsByTagName("svg")[0];
	container.appendChild(pointer);
	document.getElementsByTagName("line")[0].setAttribute("style","stroke:rgb(198,255,254);stroke-width:2");
}

function cordsPointer(e){
	if(!mooving){
		let rect = e.target.getBoundingClientRect();
		let xu= e.clientX - rect.left; 
		let yu = e.clientY - rect.top;
		let x = (xu - xdown) ;
		let y = (yu - ydown) ;
		document.getElementsByTagName("line")[0].setAttribute("x2", 350-x);
		document.getElementsByTagName("line")[0].setAttribute("y2", 700-y);
	}
}

function addPath(){
	var newpath = document.createElementNS("http://www.w3.org/2000/svg","path");  
	newpath.setAttribute("id", "pathIdD");  
	newpath.setAttribute("d", "M0 3500 l0 -3500 1249 0 1248 0 6 83 c7 116 40 236 97 352 129 266 362 458 650 537 73 19 109 23 250 23 141 0 177 -4 250 -23 288 -79 521 -271 650 -537 57 -116 90 -236 97 -352 l6 -83 1248 0 1249 0 0 3500 0 3500 -3500 0 -3500 0 0 -3500z");   
	newpath.setAttribute("transform", "translate(0.000000,700.000000) scale(0.100000,-0.100000)");  
	newpath.setAttribute("fill", "rgb(198,255,254)");
	document.getElementsByTagName("svg")[0].appendChild(newpath);
}

function addScoreBoard(){
	scoreBoard =  document.createElement("DIV");
	scoreBoard.setAttribute("class", "scoreBoard");
	let t = document.createElement("H1");
	let title = document.createTextNode("Score");
    let points = document.createTextNode(0);
	t.appendChild(title);
	scoreBoard.appendChild(t);
	scoreBoard.appendChild(points);
	document.body.appendChild(scoreBoard);
}

function addRoundBoard(){
	roundBoard =  document.createElement("DIV");
	let t = document.createElement("H1");
	let title = document.createTextNode("Round");
	let p = document.createElement("p");
	p.setAttribute("class", "roundBoard");
    let points = document.createTextNode(nRonda);
	t.appendChild(title);
	p.appendChild(points);
	roundBoard.appendChild(t);
	roundBoard.appendChild(p);
	document.body.appendChild(roundBoard);
}

addRoundBoard();
addScoreBoard();
addPointer();
addPath();
newRound();
document.getElementById("tablero").addEventListener("mouseup", getMousePositionUp) ;
document.getElementById("tablero").onmousedown=getMousePositionDown;
document.getElementById("tablero").onmousemove=cordsPointer;
