// JavaScript Document
/*
Para poder usar la clase puzle debes pasar los valores alto(el numero de columnas), ancho(numero de filas) y dificultad(el numero de movimientos que se van a realizar para desordenar el tablero) en su declaracion.

Para crear el tablero debes llamar a los metodos crearTablero()(crea un array donde se guardaranlas posiciones de las piezas), posteriormente se llama al metodo rellenarCasilla()(que rellena el array anteriormente creado con numeros ordenados de menor a mayor y empezando por el 0 que representa las posiciones de un puzle resuelto)

Para desordenar el tablero debes llamar al metodo desOrdenarTablero()(este realizara un numero de movimientos igual al numero especificado en la dificultad para desordenar el puzle y que exista una forma de resolverlo).
*/
export  class puzle{
	constructor (alto, ancho, dificultad){
		this.alto =alto;
		this.ancho =ancho;
		this.tablero =[];
		this.espacio =[];
		this.dificultad = dificultad;
	}
 crearTablero(){
	for(let x =0; x<= this.ancho-1 ;x++){
		this.tablero[x] = [];
		for(let y =0; y <= this.alto-1; y++){
			this.tablero[x][y] = [];
		}
	}

}
rellenarCasilla(){
	var cont =0;
	for(let x =0; x<= this.ancho-1 ;x++){
		for(let y =0; y <= this.alto-1 ; y++){
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
/*
El metodo subirHueco() intercambia la posicion 0,que simula el hueco del puzle, por la pieza que se encuentre en su parte superior. En caso de no tener ninguna ficha en su parte superior porqueya se encuentre el hueco en la parte mas superior del tablero devuelve el valor false.
*/
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
/*
El metodo bajarHueco() intercambia la posicion 0,que simula el hueco del puzle, por la pieza que se encuentre en su parte inferior. En caso de no tener ninguna ficha en su parte inferior porque ya se encuentre el hueco en la parte mas inferior del tablero devuelve el valor false.
*/
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
	/*
El metodo huecoDerecha() intercambia la posicion 0,que simula el hueco del puzle, por la pieza que se encuentre a su derecha. En caso de no tener ninguna ficha a su derecha porque ya se encuentre el hueco en la parte mas a la derecha del tablero devuelve el valor false.
*/
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
/*
El metodo huecoIzquierda() intercambia la posicion 0,que simula el hueco del puzle, por la pieza que se encuentre a su izquierda. En caso de no tener ninguna ficha a su izquierda porque ya se encuentre el hueco en la parte mas a la izquierda del tablero devuelve el valor false.
*/
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
/*
La funcion hasGanado() devuelve el valor true en caso de encontrarse el puzle resuelto.
*/

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
