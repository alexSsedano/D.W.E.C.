// JavaScript Document
$(document).ready(function(){
    $("div#1").css("font-size", "10px");
	$("div#2").css("font-size", "15px");
	$("div#3").css("font-size", "20px");
    $("h2").click(function(){
    	$(this).parent().hide(3000);
	});
	$("p").hover(function(){
    	$(this).parent().css("background-color", "blue");
	});
	$("p").mouseleave(function(){
    	$(this).parent().css("background-color", "white");
	});
});