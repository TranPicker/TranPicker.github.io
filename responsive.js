function openNav(){
	// alert("javascript is working.");
	var navbar = document.getElementById("navbar");
	var hasClass = navbar.getAttribute("class");
	if(hasClass === "menu")
	{
		navbar.setAttribute("class","menu responsive");
		
		// navbar.style.animation = "animation: hienra 1.5s forwards;"
	}else{
		navbar.setAttribute("class","menu");
	}

}