
function openNav(){
	// doi button
	document.getElementById("open-button").style.display= "none";
	document.getElementById("close-button").style.display= "inline-block";
	// mo rong menu
	document.getElementById("navbar-respon").style.width = "100%";
	// var navbar_item = document.getElementsByClassName("navbar-item");
	// console.log(navbar_item);
	// for (var i = 0;i < navbar_item.length ; i++) {
	// 	var child_node= navbar_item[i].childNodes[0];
	// 	changeWidth(child_node,"100px");
	// }

	

}
function closeNav(){
	// doi button
	document.getElementById("open-button").style.display= "inline-block";
	document.getElementById("close-button").style.display= "none";

	document.getElementById("navbar-respon").style.width = "0%";
	// var navbar_item = document.getElementsByClassName("navbar-item");
	// console.log(navbar_item);
	// for (var i = 0;i < navbar_item.length ; i++) {
	// 	var child_node= navbar_item[i].childNodes[0];
	// 	changeWidth(child_node,"0");
	// }

}
function changeWidth(obj,w){
	obj.style.width = w;
}