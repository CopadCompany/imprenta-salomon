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