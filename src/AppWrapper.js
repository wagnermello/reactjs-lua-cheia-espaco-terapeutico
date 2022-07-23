window.onload = function () {
	var appWrapper = document.getElementById("container-wrapper");
	var a;
	if (appWrapper.offsetHeight < appWrapper.scrollHeight) {
		a = true;
		document.getElementById("section-wrapper").classList.remove("app__wrapper");
		document
			.getElementById("section-wrapper")
			.classList.add("app__soft-wrapper");
	} else {
		document.getElementById("section-wrapper").classList.add("app__wrapper");
	}
	console.log(a);
};

/*window.onload = function () {
	var appWrapper = document.getElementById("teste");
	var a;
	if (appWrapper.offsetHeight < appWrapper.scrollHeight) {
		a = true;
		document.getElementById("teste2").classList.remove("app__wrapper");
		document.getElementById("teste2").classList.add("app__soft-wrapper");
	} else {
		document.getElementById("teste2").classList.add("app__wrapper");
	}
	console.log(a);
};
*/
