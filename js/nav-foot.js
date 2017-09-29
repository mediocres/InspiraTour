$(document).ready(function () {
    $("#central-nav").load("navbar.html", function(){
		var url = window.location.pathname;
		var filename = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
		var active = document.getElementsByClassName(filename);
		active[0].classList.add("active");
	);
	$("#central-foot").load("footer.html");
});
