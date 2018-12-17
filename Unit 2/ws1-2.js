// JavaScript Document
var d = new Date();
var fechaHoy = d.getDate();
var fecha85 = d.getDate() + 85;
var fecha187 = d.getDate() - 187;
var fecha2años = fecha85 + (365 * 2);
var fecha24 = fecha187 - 1;
var fechaResto = fecha85 - fecha187;
document.write(fechaResto);