// JavaScript Document
var combinacion1 =[];
var combinacion2 =[];
var combinacion3 =[];
var combinacion4 =[];
var combinacion5 =[];
var combinacion6 =[];
var arrProp = [ combinacion1 = [0,0,0,0,0,0],  combinacion2=[0,0,0,0,0,0], combinacion3=[0,0,0,0,0,0], combinacion4=[0,0,0,0,0,0], combinacion5=[0,0,0,0,0,0], combinacion6=[0,0,0,0,0,0]];
var arr1=[];
var arr2=[];
function paresImpares(arr1, arr2){
	
	for(let i=0; i<=36000;i++){
		arr1.push(parseInt((Math.random() * 6) + 1));
		arr2.push(parseInt((Math.random() * 6) + 1));
		
	} 
	for(let i=0; i<=36000;i++){
	 arrProp[arr1[i]][arr2[i]]=(arrProp[arr1[i]][arr2[i]]+1);
		
	}
	
			

		
		
	
	document.write(arrProp);
	
}
	
	

paresImpares(arr1,arr2);
