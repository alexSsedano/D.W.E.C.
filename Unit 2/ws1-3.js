var i=0;
function myTimeoutFunction()
{
	if(i !=10){
	
    document.write(i+ "  ");
	                      
	
	i++;
		
	}else{
		clearInterval(intervalo);
	}
	
}

myTimeoutFunction();
var intervalo =setInterval(myTimeoutFunction, 1000);