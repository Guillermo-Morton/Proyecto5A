import {Pelicula} from "../peliculaClass.js";

let listaPelicula = [];
// Agregar funcionalidad para abrir el modal
const modalPelicula = new bootstrap.Modal(document.getElementById('modal'));

let btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', ()=>{
    modalPelicula.show();
})
let existePelicula= false;

// funcion para agregar pelicula

window.agregarPelicula= function(event){
    console.log("dentro de la funcion agregar");
    if (validarGeneral()){

        // se crea la pelicula
        let nuevaPelicula = new Pelicula
        (document.getElementById('codigoPelicula').value,
        document.getElementById('nombrePelicula').value,
        document.getElementById('categoriaPelicula').value,
        document.getElementById('descripcionPelicula').value,
        document.getElementById('imagenPelicula').value,
        document.getElementById('embedPelicula').value);
        // guardamos la pelicula en el array
        console.log(nuevaPelicula);
        listaPelicula.push(nuevaPelicula);
        // guardar los datos en localstorage
        localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPelicula));
        // limpiar el formulario

        // leer datos

        // mostrar cartel de datos guardados y cerrar el modal

        modalPelicula.hide();
    }else{
        console.log("datos incorretos");

    }

}

window.guardarPelicula= function(event){
    event.preventDefault();
    if(existePelicula=== true){

    }else{
        agregarPelicula();
    }
}