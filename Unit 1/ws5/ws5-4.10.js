// JavaScript Document
function headerFunct(n){
	for(let i=0;i<=n;i++){
		document.write("<h"+i+">"+"Cabecera h"+i+"</h"+i+">")
	}
}
var number =prompt("enter the number ");
headerFunct(number);