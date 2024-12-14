var banner = document.getElementById("banner");
//var sticky = banner.offsetTop;
var sticky = 400;

function fixedBanner() {
  if (window.pageYOffset >= sticky) {
	  document.getElementById("profilepic").src = "portrait_Ingo_Frommholz.jpg";
	document.getElementById("banner").classList.add("sticky")
	document.getElementById("profilepic").classList.add("profilepic2")
	document.getElementById("address").classList.add("address2")
  } else {
	  document.getElementById("profilepic").src = "portrait_Ingo_Frommholz.jpg";
	document.getElementById("banner").classList.remove("sticky");
	document.getElementById("profilepic").classList.remove("profilepic2")
	document.getElementById("address").classList.remove("address2")
  }
}
