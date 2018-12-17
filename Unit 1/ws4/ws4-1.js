// JavaScript Document
function greaterNum(n1, n2){
	if(n1 > n2){
		document.write(n1+" is the greatest"+"<h2></h2>")
	}else if (n2 > n1){
		document.write(n2+" is the greatest"+"<h2></h2>")
		
	}else{
		document.write(n2+" is like "+n1+"<h2></h2>")
	}
}
var number1 =prompt("Enter the 1st number ");
var number2 =prompt("Enter the 2nd number ");

greaterNum(number1, number2);
				   
