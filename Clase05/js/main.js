function iniciar() {
	console.log("estoy listo");

	var objetoStar = document.querySelectorAll(".icon-star");
	for (var i=0; i<objetoStar.length;i++) {
		objetoStar[i].addEventListener("click", cambiarColor);
	}
	
	var objetosFlechaArriba = document.querySelectorAll(".icon-arrow-up");
	for (var i=0; i<objetosFlechaArriba.length;i++) {
		objetosFlechaArriba[i].addEventListener("click", sumarPuntos);
	}

	var objetosFlechaAbajo = document.querySelectorAll(".icon-arrow-down");
	for (var i=0; i<objetosFlechaAbajo.length;i++) {
		objetosFlechaAbajo[i].addEventListener("click", restarPuntos);
	}
}

function cambiarColor () {
	console.log("Voy a cambiarle el color");
	this.classList.add("estrellaAmarilla");
}

function sumarPuntos() {
	console.log("Sumar");
	var contenedor = this.parentNode;
	var vota = contenedor.childNodes;
	var eVota;
	for (var i=0; i<vota.length;i++){
		if (vota[i].className == "vota") {
			eVota = vota[i];
		}
	}

	var laVotacion = eVota.innerHTML;
	console.log(laVotacion);

	eVota.innerHTML = parseFloat(laVotacion) + 1;
}

function restarPuntos () {
	console.log("Restar");
}

//window.onload=iniciar();
window.addEventListener("load", iniciar);