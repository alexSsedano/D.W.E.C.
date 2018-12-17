// JavaScript Document
var array1 = [1, 2, 3, 4];
var array2 =["uno", "dos", "tres", "cuatro"];
var arr3 ;
function combineTwoArrays(arr1, arr2){
	 arr3 =[...arr1, ...arr2];
	
}
combineTwoArrays(array1, array2);
document.write(arr3);