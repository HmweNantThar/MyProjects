$(document).ready(function(){
	$(window).scroll(function(){
		var yPos=$(window).scrollTop();
		if (yPos>100) {
			$(".nav-bar").css("background","#4A4A4A");
			$(".home-navbar").css("background","#4A4A4A");

		}else{
			$(".nav-bar").css("background","transparent");
			$(".home-navbar").css("background","transparent");
		}
		if (yPos>700) {
			$("#design-section").css("opacity","1");
			$(".pjdetail-buttonbox").css("opacity","1");
		}else{
			$("#design-section").css("opacity","0");
			$(".pjdetail-buttonbox").css("opacity","0");
		}
		if (yPos>400) {
			$(".twenty-pj").css("opacity","1");
			$(".pjdetail-textbox").css("opacity","1");
		}else{
			$(".twenty-pj").css("opacity","0");
			$(".pjdetail-textbox").css("opacity","0");
		}
		if (yPos>1500) {
			$(".projectsection").css("opacity","1");

		}else{
			$(".projectsection").css("opacity","0");
		}
		if (yPos>2550) {
			$(".lastSectionAndfooter").css("opacity","1");

		}else{
			$(".lastSectionAndfooter").css("opacity","0");
		}
	});
});

function topfunction() {
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}