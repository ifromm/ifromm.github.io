//var sticky = banner.offsetTop;
var sticky = 400;
var address, profilepic;
var bannerLoaded = false; // will be set to true when banner is loaded

function fixedBanner() {
	//console.log(address)
	//console.log(profilepic)

	if (bannerLoaded) {
		if (window.scrollY > sticky) {
			//console.log(window.scrollY + " Remove")
			if (document.getElementById("banner").contains(address)) {
				address.remove();
			}
			if (document.getElementById("banner").contains(profilepic)) {
				profilepic.remove();
			}
			document.getElementById("banner").style.height = 100
			document.getElementById("banner").classList.add("sticky")
			//document.getElementById("profilepic").classList.add("profilepic2")
			//document.getElementById("address").classList.add("address2")
			sticky = 290
		} else {

			//console.log(window.scrollY + " Add")
			if (!document.getElementById("banner").contains(profilepic)) {
				document.getElementById("foto").appendChild(profilepic)
			}
			if (!document.getElementById("banner").contains(address)) {
				document.getElementById("info").appendChild(address)
			}
			//document.getElementById("profilepic").classList.remove("profilepic2")
			//document.getElementById("address").classList.remove("address2")
			document.getElementById("banner").classList.remove("sticky")
			document.getElementById("banner").style.height = 200
			sticky = 510
		}
	}
}
