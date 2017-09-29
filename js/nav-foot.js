$(document).ready(function () {
	var url = window.location.pathname;
    $("#central-nav").load("navbar.html");
	$("#central-foot").load("footer.html");
	var filename = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
	var active = document.getElementsByClassName(filename);
	active[0].classList.add("active");
});
