


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

/*popup */


function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active-popup');
}

function toggle2() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup2');
    popup.classList.toggle('active-popup');
}

function toggle3() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup3');
    popup.classList.toggle('active-popup');
}

function toggle4() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup4');
    popup.classList.toggle('active-popup');
}

function toggle5() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup5');
    popup.classList.toggle('active-popup');
}

function toggle6() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup6');
    popup.classList.toggle('active-popup');
}







