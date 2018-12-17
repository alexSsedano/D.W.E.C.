var watchID;
var cont =0;
var distance;
var position1;
var geoLoc;
var granada, actual;


function showLocation(position) {
	
		actual ={ lat: position.coords.latitude, lng: position.coords.longitude};
		granada ={ lat: 37.1769066, lng: -3.5993411};
		var map= new google.maps.Map(document.getElementById('mapa'), {zoom: 4, center: actual});
		var marker = new google.maps.Marker({position: granada, map: map});
		var marker2 = new google.maps.Marker({position: actual, map: map});
	if(cont > 0){
	distance = distance + google.maps.geometry.spherical.computeDistanceBetween( actual, position1 );
		console.log(distance);
	}
	cont++;
	position1 = actual;

}

function errorHandler(err) {
	if(err.code == 1) {
	   alert("Acceso denegado");
	} else if( err.code == 2) {
	   alert("Tu posicion no esta disponible");
	}
}

function getLocationUpdate(){

if(navigator.geolocation){
   var options = {timeout:60000};
   geoLoc = navigator.geolocation;
   watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
} else {
   alert("No tienes la opcion de la ubicacion activada.");
}
}


