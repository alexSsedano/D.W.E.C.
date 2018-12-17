var array1=[1,"hola", 2, "que tal", 5];
var sum=0;

			
function addOnlyNums(arr){
	for(let i=0;i <= arr.length;i++){
	var num=arr[i];
		if(typeof num == "number"){
			sum = sum + (num * num);
		}
	}
	document.write(sum);
	
	
}
addOnlyNums(array1);