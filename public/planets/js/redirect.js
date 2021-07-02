let homeLink = document.getElementById("home-link");

homeLink.addEventListener("click", () => {
	window.location.href = window.location.protocol + "//" + window.location.host;
})

function changeHrefValue(elementsClassName, value) {
	let elements = document.querySelectorAll(elementsClassName);
	for(let element of elements) {
		element.setAttribute("href", window.location.protocol + "//" + window.location.host + value);
	}
}

changeHrefValue(".about-page-link", "/about");
changeHrefValue(".game-page-link", "/game");
changeHrefValue(".contact-page-link", "/#contact");