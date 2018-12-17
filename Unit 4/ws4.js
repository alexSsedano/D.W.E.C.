// JavaScript Document
class galleta{
	constructor(){}
	setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	getCookie(cname){
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	nombreUsuario(){
		if(this.getCookie("nombreUsu")==""){
			let nombre = prompt("introduce tu nombre de usuario")
			this.setCookie("nombreUsu", nombre,100);
		}else{
			var username = this.getCookie("nombreUsu");
    		
        	alert("Welcome again " + username);
		}
	}
	expireCookie(cname) {
		var d = new Date();
		d.setTime(d.getTime() -1 );
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=;" + expires + ";path=/";
	}
	colorFondo(){

			var color = this.getCookie("colorFon");
		    alert(color);
			document.body.style.backgroundColor = color;
			
	
		
	}
} 


function colorFond(){
	var col =  document.getElementById("colorFondo").value;
	galleta1.setCookie("colorFon", col, 100);
	galleta1.colorFondo();
	

}

function expira(){
	galleta1.expireCookie("nombreUsu");
	galleta1.expireCookie("colorFon");
}
function colorCo(){
	galleta1.colorFondo();
}
var galleta1 = new galleta();
galleta1.nombreUsuario();
galleta1.colorFondo();

