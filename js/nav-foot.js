$(document).ready(function () {
    $("#central-nav").load("navbar.html", function(){
		var url = window.location.pathname;
		var filename = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
		var active = document.getElementById(filename);
		if (active.classList != null){
			active.classList.add("active");
		};
	});
	$("#central-foot").load("footer.html");
});
