// JavaScript Document
function helloWorld(lang){
	switch(lang){
		case "es":
				document.write("Hola mundo");
			break;
		case "de":
			document.write("gib mir eine bemerkenswerte");
			break;
		case "en":
				document.write("Helo world");
			break;
		default:
				document.write("thats not a language like en, de, es");
			
				
	}
	
}
var lang =prompt("Enter your language ");
helloWorld(lang);