// JavaScript Document;
var i=0;
function myTimeoutFunction()
{
	if(i !=60){
	
    document.write(i+ "  ");
	                      
	
	i++;
		
	}else{
		 window.location.assign("https://www.google.es/search?q=google&rlz=1C1CHBF_esES815ES815&oq=google&aqs=chrome..69i57j0j69i60j69i65j35i39j69i65.1639j0j7&sourceid=chrome&ie=UTF-8");
	}
	
}

myTimeoutFunction();
setInterval(myTimeoutFunction, 1000);

