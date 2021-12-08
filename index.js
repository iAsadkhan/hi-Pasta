function toggleWidth() {
	console.log("lol");
	const toggler = document.getElementById("toggleImage");
	toggler.style.width = "500px";
	const closer = document.getElementById("close");
	closer.style.opacity = "1";
	closer.style.display = "block";
	const menu = document.getElementById("menu");
	menu.style.opacity = "1";
	menu.style.display = "block";
}

function closeFunction() {
	const toggler = document.getElementById("toggleImage");
	toggler.style.width = "0px";
	const closer = document.getElementById("close");
	closer.style.opacity = "0";
	closer.style.display = "none";
	const menu = document.getElementById("menu");
	menu.style.opacity = "0";
	menu.style.display = "none";
}
function toggle() {
	const header = document.getElementById("header");
	header.classList.toggle("active");
}
