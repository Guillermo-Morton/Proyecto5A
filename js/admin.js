

let listaPelicula = [];


const modalPelicula = new bootstrap.Modal(document.getElementById('modal'));

let btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', ()=>{
    modalPelicula.show();
})