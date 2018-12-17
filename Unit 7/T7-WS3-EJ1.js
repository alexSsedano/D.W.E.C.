// JavaScript Document
$(document).ready(function(){
    $("tr:gt(3)").css("background-color", "blue");
	$("tr:lt(3)").css("background-color", "red");
	$("td:empty").css("background-color", "yellow");
	
});