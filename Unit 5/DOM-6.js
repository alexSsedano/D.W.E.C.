// JavaScript Document
var imagen =1;
function siguiente(){
	switch (imagen) {
    case 0:
        document.getElementsByTagName("img")[0].src="8d2.jpg";
		imagen++;
		if(imagen >2){
			imagen = 0;
		}
        break;
    case 1:
        document.getElementsByTagName("img")[0].src="nn1-900x485.jpg";
		imagen++;
		if(imagen >2){
			imagen = 0;
		}
        break;
    case 2:
        document.getElementsByTagName("img")[0].src="4116e4c0fe2144666e96f17bda99e047-2.jpg";
		imagen++;
		if(imagen >2){
			imagen = 0;
		}
        break;

	}
}
function anterior(){
	switch (imagen) {
    case 0:
        document.getElementsByTagName("img")[0].src="8d2.jpg";
		imagen--;
		if(imagen <0){
			imagen = 2;
		}
        break;
    case 1:
        document.getElementsByTagName("img")[0].src="nn1-900x485.jpg";
		imagen--;
		if(imagen <0){
			imagen = 2;
		}
        break;
    case 2:
       	document.getElementsByTagName("img")[0].src="4116e4c0fe2144666e96f17bda99e047-2.jpg";
		imagen--;
		if(imagen <0){
			imagen = 2;
		}
        break;

}
	
}

