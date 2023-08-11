

let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++ ) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500  < scrollTop) {
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);


/*slider*/

var imagenes = [

    "img/tp.jpg",
    "img/cajas.jpg",
    "img/talonario.jpg",
    "img/stickers.png",
    "img/recetarios.jpg",
    "img/form.jpg",
    "img/selloss.jpg"
];

document.imagen.src = imagenes[0];

var sliderDerecha = document.querySelector(".slider__drc");
var sliderIzquierda = document.querySelector(".slider__izq");
var contador = 0;

function moverDerecha() {
    contador++;
    if(contador > imagenes.length - 1) {
        contador = 0;
    }
    document.imagen.src = imagenes[contador];

}
var intervalo = setInterval(moverDerecha, 3000);
sliderDerecha.addEventListener("click", function() {
    clearInterval(intervalo);
    moverDerecha();
    intervalo = setInterval(moverDerecha, 3000);
})



function moverIzquierda() {
    contador--;
    if(contador < 0) {
        contador = imagenes.length -1;
    }
    document.imagen.src = imagenes[contador];

}
sliderIzquierda.addEventListener("click", function() {
    clearInterval(intervalo);
    moverIzquierda();
    intervalo = setInterval(moverDerecha, 3000);
})


/* menu */

const header = document.querySelector("#header");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    header.classList.add("header-visible");
})


cerrar.addEventListener("click", () => {
    header.classList.remove("header-visible");
   
})


