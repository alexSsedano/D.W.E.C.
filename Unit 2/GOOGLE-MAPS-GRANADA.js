// JavaScript Document
function initMap(){
	var granada = {lat: 37.192946, lng:-3.612890};
	var map= new google.maps.Map(document.getElementById('mapa'), {zoom: 4, center: granada});
	var marker = new google.maps.Marker({position: granada, map: map});
	
 }


