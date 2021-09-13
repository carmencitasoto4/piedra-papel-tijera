let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

let manoUsuaria = document.querySelector(".mano-usuaria");
let manoCompu = document.querySelector(".mano-computadora");

let resultado = document.querySelector(".resultado");

let tablero = document.querySelector(".tablero");

let puntajeUsuaria = document.querySelector(".puntaje-usuaria p");
let puntajeComputadora = document.querySelector(".puntaje-computadora p");

let eleccionUsuaria = "";
let eleccionComputadora = "";

let contadorPuntajeUsuaria = 0;
let contadorPuntajeComputadora = 0;

const eleccionCompu = () => {
    let numeroAlAzar = Math.floor(Math.random() * 3);
    if (numeroAlAzar == 0) {
        eleccionComputadora = "piedra";
        manoCompu.src = "./assets/piedra_computadora.png";
    }
    if (numeroAlAzar == 1) {
        eleccionComputadora = "papel";
        manoCompu.src = "./assets/papel_computadora.png";
    }
    if (numeroAlAzar == 2) {
        eleccionComputadora = "tijera";
        manoCompu.src = "./assets/tijera_computadora.png";
    }
}

const compararElecciones = () => {
    if (eleccionUsuaria == "piedra") {
        if (eleccionComputadora == "piedra") {
            resultado.textContent = "Empate";
        }
        if (eleccionComputadora == "papel") {
            resultado.textContent = "Perdiste :(";
            contadorPuntajeComputadora++;
            puntajeComputadora.textContent = contadorPuntajeComputadora;
        }
        if (eleccionComputadora == "tijera") {
            resultado.textContent = "Ganaste :)";
            contadorPuntajeUsuaria++;
            puntajeUsuaria.textContent = contadorPuntajeUsuaria;
        }
    }

    if (eleccionUsuaria == "papel") {
        if (eleccionComputadora == "piedra") {
            resultado.textContent = "Ganaste :)";
            contadorPuntajeUsuaria++;
            puntajeUsuaria.textContent = contadorPuntajeUsuaria;
        }
        if (eleccionComputadora == "papel") {
            resultado.textContent = "Empate";
        }
        if (eleccionComputadora == "tijera") {
            resultado.textContent = "Perdiste :(";
            contadorPuntajeComputadora++;
            puntajeComputadora.textContent = contadorPuntajeComputadora;
        }
    }

    if (eleccionUsuaria == "tijera") {
        if (eleccionComputadora == "piedra") {
            resultado.textContent = "Perdiste :(";
            contadorPuntajeComputadora++;
            puntajeComputadora.textContent = contadorPuntajeComputadora;
        }
        if (eleccionComputadora == "papel") {
            resultado.textContent = "Ganaste :)";
            contadorPuntajeUsuaria++;
            puntajeUsuaria.textContent = contadorPuntajeUsuaria;
        }
        if (eleccionComputadora == "tijera") {
            resultado.textContent = "Empate";
        }
    }
}

botonPiedra.onclick = () => {
    manoUsuaria.src = "./assets/piedra_usuario.png";
    manoCompu.src = "./assets/piedra_computadora.png";
    resultado.textContent = "🤨";

    tablero.classList.add("jugando");

    setTimeout(() => {
        eleccionUsuaria = "piedra";
        manoUsuaria.src = "./assets/piedra_usuario.png";
        eleccionCompu();

        compararElecciones();

        tablero.classList.remove("jugando");
    }, 2000);
}

botonPapel.onclick = () => {
    manoUsuaria.src = "./assets/piedra_usuario.png";
    manoCompu.src = "./assets/piedra_computadora.png";
    resultado.textContent = "🤨";

    tablero.classList.add("jugando");

    setTimeout(() => {
        eleccionUsuaria = "papel";
        manoUsuaria.src = "./assets/papel_usuario.png";
        eleccionCompu();

        compararElecciones();

        tablero.classList.remove("jugando");
    }, 2000);
}

botonTijera.onclick = () => {
    manoUsuaria.src = "./assets/piedra_usuario.png";
    manoCompu.src = "./assets/piedra_computadora.png";
    resultado.textContent = "🤨";

    tablero.classList.add("jugando");

    setTimeout(() => {
        eleccionUsuaria = "tijera";
        manoUsuaria.src = "./assets/tijera_usuario.png";
        eleccionCompu();

        compararElecciones();

        tablero.classList.remove("jugando");
    }, 2000);
}