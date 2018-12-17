// JavaScript Document
export class Block{
	constructor(posX, posY, link, nRonda){
		var svgns = "http://www.w3.org/2000/svg";
		this.cubeX = posX;
		this.cubeY = posY;
		this.height = 46;
		this.width = 46;
		this.hitX = 17 + this.cubeX;
		this.hitY = 35;
		this.cube = document.createElementNS(svgns, "rect");
		this.cube.setAttribute("x", this.cubeX);
		this.cube.setAttribute("y", this.cubeY);
		this.cube.setAttribute("width", this.width);
		this.cube.setAttribute("height", this.height);
		this.cube.setAttribute("class", "block");
		
		let porcentaje = Math.floor(Math.random() * (100 - 1)) + 1;
		this.nHits = document.createElementNS(svgns, "text");
		if(porcentaje >=11){
			this.cube.setAttribute('style', " fill:rgb(255,255,255);stroke-width:3;stroke:rgb(0,244,240)" );
			this.cube.setAttribute('rx', '10' );
			this.cube.setAttribute('ry', '10' );
			this.num = 1+nRonda;
			this.nHits.textContent = this.num;
			this.nHits.setAttribute( "fill", "rgb(0,244,240)");
		}else{
			this.cube.setAttribute('style', " fill:rgb(255,255,255);stroke-width:3;stroke:rgb(240,0,244)" );
			this.cube.setAttribute('rx', '10' );
			this.cube.setAttribute('ry', '10' );
			this.num = 2*(1+nRonda);
			this.nHits.textContent = this.num;
			this.nHits.setAttribute( "fill", "rgb(240,0,244)");
		}
		this.nHits.setAttribute( "x", this.hitX);
		if(this.num >= 10){
		this.nHits.setAttribute( "x", this.hitX-6);
		}
		if(this.num >= 100){
		this.nHits.setAttribute( "x", this.hitX-13);
		}
		this.nHits.setAttribute( "y", this.hitY);
		this.nHits.setAttribute("class", "hits");
		this.nHits.setAttribute( "font-size", 25);
		
		
		
		var container = document.getElementsByTagName(link)[0];
		container.appendChild(this.cube);
		container.appendChild(this.nHits);
		
	}
}

export class Ball{
	constructor(posX, posY, link, directionX){
		this.posX = posX;
		this.posY = posY;
		this.radio = 10;
		var svgns = "http://www.w3.org/2000/svg";
		this.ball = document.createElementNS(svgns, "circle");
		this.ball.setAttribute("cx", this.posX);
		this.ball.setAttribute("cy", this.posY);
		this.ball.setAttribute("r", this.radio);
		this.ball.setAttribute("style", "fill:rgba(231,57,255,1.00)");
		this.ball.setAttribute("class", "ball");
		this.onmoove=false;
		this.subir = true;
		this.derecha = directionX;
		var container = document.getElementsByTagName(link)[0];
		container.appendChild(this.ball);
	}
	getUp(){
		return this.subir;
	}
	
}
