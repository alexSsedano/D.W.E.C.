// JavaScript Document
function reloj()
{
	var d = new Date();
	document.write("Hora: " + d.getHours() + "  ");
	document.write("Minutos: " + d.getMinutes() + "  ");
	document.write("Segundos: " + d.getSeconds() + "  ");
	document.write("<br></br>");
	
	//setTimeout(reloj, 1000);
}
setTimeout(reloj(), 10000);