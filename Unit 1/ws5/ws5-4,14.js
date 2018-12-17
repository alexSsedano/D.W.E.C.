// JavaScript Document
function cuadraditos(nCol, alt, anch){
	document.write('<table border= "0" cellspading= "2" bgcolor= "black" width= "200" >');
	document.write('<tr bgcolor= "white" height= '+ alt +'>');
	var x=0;
	while(x<=nCol){
		x++;
		if(x%2 == 0){
		document.write('<td width='+ anch +'</td>');
		}else{
		document.write('<td width='+ anch +' bgcolor="black"</td>');	
		}
	}
	document.write('</tr>');
	document.write('</table>');

}
var columnas =prompt("ncol ");
var alto =prompt("alto ");
var ancho =prompt("ancho ");
cuadraditos(columnas, alto, ancho);