// JavaScript Document
var age =prompt("Enter your age ");
var amount =prompt("Enter your amount ");
const cuandoLaEspichas = 95;
function calculateSupply(edad, cantidad){
	document.write(" You will need "+ ((cuandoLaEspichas-edad) * amount) +" to last you until the ripe old age of "+ cuandoLaEspichas+"<h2></h2>");
	
}
calculateSupply(age, amount);
age =prompt("Enter your age ");
amount =prompt("Enter your amount ");
calculateSupply(age, amount);
age =prompt("Enter your age ");
amount =prompt("Enter your amount ");
calculateSupply(age, amount);