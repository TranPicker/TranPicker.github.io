

//animation
var stepTime = 20;
var docBody = document.body;
var focElem = document.documentElement;

var scrollAnimationStep = function (initPos, stepAmount) {
    var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;

    docBody.scrollTop = focElem.scrollTop = newPos;

    newPos && setTimeout(function () {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}

var scrollTopAnimated = function (speed) {
    var topOffset = docBody.scrollTop || focElem.scrollTop;
    var stepAmount = topOffset;

    speed && (stepAmount = (topOffset * stepTime)/speed);

    scrollAnimationStep(topOffset, stepAmount);
};

// responsive menu change width
function openNav(){
	// change type of button
	document.getElementById("open-button").style.display= "none";
	document.getElementById("close-button").style.display= "inline-block";
	// change width menu
	document.getElementById("navbar-respon").style.width = "100%";
	
	

}
function closeNav(){
	
	document.getElementById("open-button").style.display= "inline-block";
	// change type of button
	document.getElementById("close-button").style.display= "none";
	// change width menu
	document.getElementById("navbar-respon").style.width = "0%";
}
function changeWidth(obj,w){
	obj.style.width = w;
}

