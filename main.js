// Seleccionamos los elementos
let botonHabilidades = document.querySelector(".boton");
let habilidades = document.querySelector(".habilidades");
let porDefecto = document.querySelector(".porDefecto");
let flag = 0;
let rootStyle = document.documentElement.style;


// Agregamos su correspondiente eventListener
botonHabilidades.addEventListener("click", (event)=>{
    event.preventDefault();

    if(event){
        habilidades.classList.toggle("habilidades-hidden");
    }
});


function forzarSlider(){
    porDefecto.style.opacity = 1;
    flag = 1;
}

function desForzar(){
    if(flag == 1){
        porDefecto.style.opacity = "";
        flag = 2;
    }
}