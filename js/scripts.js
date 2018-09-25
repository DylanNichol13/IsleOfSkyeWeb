//Cycling through images on banner
var i = 0;
var fadeSpeed = 5000;

function bannerChange(){
	i++;
	if(i==3)
		i=0;
	
	if(i == 2) {
	$("#hero_1").fadeIn(fadeSpeed);
	$("#hero_3").fadeOut(fadeSpeed);
	$("#hero_2").fadeOut(fadeSpeed);
	}
	
	else if(i == 1) {
	$("#hero_1").fadeOut(fadeSpeed);
	$("#hero_3").fadeIn(fadeSpeed);
	$("#hero_2").fadeOut(fadeSpeed);
	}
	
	else if(i == 0) {
	$("#hero_1").fadeOut(fadeSpeed);
	$("#hero_3").fadeOut(fadeSpeed);
	$("#hero_2").fadeIn(fadeSpeed);
	}
}

function goToPage(link){
		window.location.href = link;
	
}
