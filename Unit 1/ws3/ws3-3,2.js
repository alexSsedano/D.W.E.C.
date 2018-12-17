// JavaScript Document
function calcCircumfrence(r){
	document.write("The circumference is "+(2*Math.PI*r)+"<h2></h2>");
	
}
function calcArea(r){
	document.write("The area is "+ (Math.PI*r*r)+"<h2></h2>");
	
}

var radio =prompt("Enter the radio ");
calcCircumfrence(radio);
calcArea(radio);