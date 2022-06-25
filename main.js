// Seleccionamos los elementos
let botonHabilidades = document.querySelector(".boton");
let habilidades = document.querySelector(".habilidades");
let porDefecto = document.querySelector(".porDefecto");


// Agregamos su correspondiente eventListener
botonHabilidades.addEventListener("click", (event)=>{
    event.preventDefault();

    if(event){
        habilidades.classList.toggle("habilidades-hidden");
    }
});


