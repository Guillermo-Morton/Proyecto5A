import {Pelicula} from "./peliculaClass.js";

let listaPelicula = [];
// Agregar funcionalidad para abrir el modal
const modalPelicula = new bootstrap.Modal(document.getElementById('modal'));

let btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', ()=>{
    modalPelicula.show();
})
let existePelicula= false;

// al cargar la pagina se leen y se dibujan los datos
leerDatos();

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
        limpiarForumulario();
        // leer datos
        leerDatos();
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
// funcion para limpiar el formulario
function limpiarForumulario(){
    let formulario = document.getElementById('formulario');
    formulario.reset();
    let codigoPelicula= document.getElementById(`codigoPelicula`);
    codigoPelicula.className= "form-control";
    
    let nombrePelicula= document.getElementById(`nombrePelicula`);
    nombrePelicula.className= "form-control";
    
    
    let categoriaPelicula= document.getElementById(`categoriaPelicula`);
    categoriaPelicula.className= "form-control";
    
    let descripcionPelicula= document.getElementById(`descripcionPelicula`);
    descripcionPelicula.className= "form-control";
    
    let imagenPelicula= document.getElementById(`imagenPelicula`);
    imagenPelicula.className= "form-control";
    
    let embedPelicula= document.getElementById(`embedPelicula`);
    embedPelicula.className= "form-control";
    existePelicula=false;
    
    
 }
//  funcion para leer los datos
 function leerDatos(){
    // esta funcion se encarga de leer los datos almacenados en localstorage
    if(localStorage.length > 0){
        let _listaPelicula = JSON.parse(localStorage.getItem('listaPeliculasKey')) ;
        // si el arreglo de pelicula esta vacio igualar con los que traje de localstorage
        if(listaPelicula.length === 0){
            listaPelicula= _listaPelicula;
    
        }
        // dibujar todos los objetos funko en la tabla
        dibujarDatos(_listaPelicula);
    }
    
}
function dibujarDatos(_listaPelicula){
    // traigo el elemento padre
    let bodyTablaProductos = document.getElementById('tbodyProductos');
    bodyTablaProductos.innerHTML = '';
    let codigoHTML = '';
    // for(let i=0; i > _listaFunkopop.length; i++)
    for(let i in _listaPelicula){
        codigoHTML = `
         <tr>
            <th scope="row">${_listaPelicula[i].codigo}</th>
            <td>${_listaPelicula[i].nombre}</td>
            <td>${_listaPelicula[i].categoria}</td>
            <td>${_listaPelicula[i].descripcion}</td>
            <td>${_listaPelicula[i].imagen}</td>
            <td>
                <a class="ms-1"><i class="far fa-edit"></i></a>
                <a onclick="eliminarPelicula(this)" class="ms-1" id="${_listaPelicula[i].codigo}"><i class="fas fa-trash-alt"></i></a>
                <a class="ms-1"><i class="far fa-star"></i></a>
            </td>
          </tr>
        `;
        bodyTablaProductos.innerHTML += codigoHTML;
    }
}
window.eliminarPelicula= function (pelicula){
    console.log('prueba', pelicula.id);
    Swal.fire({
        title: '¿Estas seguro de eliminar el Funkopop seleccionado?',
        text: "No hay posibilidades de revertir esta accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            // aqui borrar el producto
            let peliculasFiltradas = listaPelicula.filter((producto)=>{
              return producto.codigo != pelicula.id;
            })
            // pasamos los funko filtrados al arreglo principal
            listaPelicula = peliculasFiltradas;
            // guardar los nuevos datos en local storage
            localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPelicula))
            leerDatos();
            console.log(peliculasFiltradas);
          Swal.fire(
            'Eliminado!',
            'La pelicula se elimino correctamente.',
            'success'
          )
        }
      })
      
}