var numeros=[];
var aux=[];
function paresImpares(arr){
	
	for(let i=0; i<=100;i++){
		arr.push(parseInt((Math.random() * 1000) + 1));
	}
}
paresImpares(numeros);
/*

for(let i=0; i<= (numeros.length - 1) ;i++){
	document.write(i);
	document.write("<p></p>");
	document.write(numeros[i]);
	document.write("<p></p>");
	
}*/

function paresOimpares(arr){
	
	 arr.forEach(function(numero){
	if(numero%2==0){
		aux.push(numero);
	}else{
		aux.unshift(numero);
	}
});
	
	
}
paresOimpares(numeros);
console.log(numeros);
console.log(aux);