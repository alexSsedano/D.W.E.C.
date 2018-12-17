// JavaScript Document
function escribeMultipicacion(n1, n2){
	document.write('<h2>'+n1+'x'+n2+'='+n1*n2+'</h2>');
}
for(let i=0;i<=10;i++){
	document.write('<h1>La tabla del '+i+'</h1>');
	for(let x=0;x<=10;x++){
		escribeMultipicacion(i,x);
}
}
