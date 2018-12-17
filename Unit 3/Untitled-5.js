// JavaScript Document
// -----------Peticion de valores para el tamaño del puzle----------
var alt =prompt("Introduce la altura de tu puzle");
var anch =prompt("Introduce la aanchura de tu puzle");
//------------Declaracion de mi calase puzle------------------

class Puzle {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
	get altura(){
		return this.alto;
	}
	
	get anchura(){
		return this.ancho;
	}
	
};
