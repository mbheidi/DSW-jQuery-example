$(document).ready(function() {
	$("h1").click(function() {
		$(".className").hide();
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
});
