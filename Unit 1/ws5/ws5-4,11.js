// JavaScript Document
function cuadraditos(nCol, alt, anch){
									document.write('<table border= "0" cellspading= "2" bgcolor= "black" >');
									document.write('<tr bgcolor= "white" height= '+alt+'>');
									for(let i=0;i<=nCol;i++){
															document.write('<td width='+anch+'</td>');
															}
									document.write('</tr>');
									document.write('</table>');
	
}
var columnas =prompt("ncol ");
var alto =prompt("alto ");
var ancho =prompt("ancho ");
cuadraditos(columnas, alto, ancho);
