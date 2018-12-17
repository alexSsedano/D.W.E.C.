// JavaScript Document
$(document).ready(function(){
    $("#start").click(function(){
        $("#cube").animate({left: '500px'}).animate({bottom: '500px'}).animate({left: '7px'}).animate({top: '30px'});
    });
	$("#stop").click(function(){
        $("#cube").stop();
    });
});
