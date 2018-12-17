// JavaScript Document
function myFunction(posicion){
    var x = posicion.clientX;
    var y = posicion.clientY;
    var coor = "coordenadas: (" + x + "," + y + ")";
    document.getElementById("posicion").innerHTML = coor;
}
function clearCoor() {
    document.getElementById("posicion").innerHTML = "";
}