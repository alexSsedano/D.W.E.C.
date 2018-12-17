// JavaScript Document
var nCol=prompt("Introduce numero de columnas.");
var nFil=prompt("Introduce numero de filas.");
var anch=prompt("Introduce ancho.");
var alt=prompt("Introduce alto.");

document.write('<table border="0" cellspading="2" bgcolor="black" >')

for(let j=1;j<=nCol;j++){
	document.write('<tr bgcolor= "white" height= "'+alt+'">');
	for(let i=1;i<=nFil;i++){
		document.write('<td width= "'+anch+'"> &nbsp;</td>');
	}
	document.write('</tr>');
}
document.write('</table>');