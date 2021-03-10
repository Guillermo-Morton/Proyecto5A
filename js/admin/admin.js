import {Pelicula} from "./peliculaClass.js";

let listaPelicula = [];
// Agregar funcionalidad para abrir el modal
const modalPelicula = new bootstrap.Modal(document.getElementById('modal'));

let btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', ()=>{
  let dNone = document.getElementById("d-none");
  dNone.className="mb-3";
  let display = document.getElementById("display");
  display.className="mb-3 d-none";
 
  limpiarFormulario();  
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
        limpiarFormulario();
        // leer datos
        leerDatos();
        // mostrar cartel de datos guardados y cerrar el modal
        Swal.fire(
            'Perfecto!',
            'Agregaste un producto correctamente',
            'success'
          )
        modalPelicula.hide();
    }else{
        console.log("datos incorretos");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
          })

    }

}
// funcion para limpiar el formulario
function limpiarFormulario(){
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
        // dibujar todos los objetos pelicula en la tabla
        dibujarDatos(_listaPelicula);
    }
    
}
function dibujarDatos(_listaPelicula){
    // traigo el elemento padre
    let bodyTablaProductos = document.getElementById('tbodyProductos');
    bodyTablaProductos.innerHTML = '';
    let codigoHTML = '';
    // for(let i=0; i > _listaPelicula.length; i++)
    for(let i in _listaPelicula){
        codigoHTML = `
         <tr>
            <th scope="row">${_listaPelicula[i].codigo}</th>
            <td>${_listaPelicula[i].nombre}</td>
            <td>${_listaPelicula[i].categoria}</td>
            <td>${_listaPelicula[i].descripcion}</td>
            <td><input type="checkbox" name="" id="${_listaPelicula[i].codigo}"></td>
            <td>
                <a onclick="editarPelicula(this)" class="ms-1" id="${_listaPelicula[i].codigo}"><i class="far fa-edit"></i></a>
                <a onclick="eliminarPelicula(this)" class="ms-1" id="${_listaPelicula[i].codigo}"><i class="fas fa-trash-alt"></i></a>
                <a class="ms-1"><i class="far fa-star"></i></a>
            </td>
          </tr>
        `;
        bodyTablaProductos.innerHTML += codigoHTML;
    }
}
// funcion para eliminar peliculas del localstorage
window.eliminarPelicula= function (pelicula){
    console.log('prueba', pelicula.id);
    Swal.fire({
        title: '¿Estas seguro de eliminar la pelicula seleccionada?',
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
            // pasamos la pelicula filtradas al arreglo principal
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
// estas tres funciones son para el correcto funcionamiento del boton editar
window.editarPelicula= function(btnEditar){
    console.log('Prueba', btnEditar.id);
    let dNone = document.getElementById("d-none");
    dNone.className="mb-3 d-none";
    let display = document.getElementById("display");
    display.className="mb-3";

    // limpiar los datos de la ventana modal
    limpiarFormulario();
    // busca el objeto a modificar
    let objetoEncontrado = listaPelicula.find((producto)=>{
      return producto.codigo==btnEditar.id;
    });
    console.log(objetoEncontrado)
   //cargar los datos en el formulario
   document.getElementById('codigoPelicula2').value=objetoEncontrado.codigo; 
   document.getElementById('codigoPelicula').value=objetoEncontrado.codigo; 
   document.getElementById('nombrePelicula').value=objetoEncontrado.nombre; 
   document.getElementById('categoriaPelicula').value=objetoEncontrado.categoria; 
   document.getElementById('descripcionPelicula').value=objetoEncontrado.descripcion; 
   document.getElementById('imagenPelicula').value=objetoEncontrado.imagen; 
   document.getElementById('embedPelicula').value=objetoEncontrado.embed; 
   //cambiar el valor de la variable existePelicula
    existePelicula= true; 
    modalPelicula.show();
  }
  window.guardarPelicula= function(event){
    event.preventDefault();
    if(existePelicula===true){
  
      actualizarDatosPelicula();
    }else{
      agregarPelicula();
    }
  }
  function actualizarDatosPelicula(){
    // esta funcion guarda en localstorage con los datos modificados
    console.log('modificar');
    // validar los campos
    if(validarGeneral()){
    let codigo=document.getElementById('codigoPelicula').value; 
    let nombre=document.getElementById('nombrePelicula').value; 
    let categoria=document.getElementById('categoriaPelicula').value; 
    let descripcion=document.getElementById('descripcionPelicula').value; 
    let imagen=document.getElementById('imagenPelicula').value; 
    let embed=document.getElementById('embedPelicula').value; 
    //buscar el objeto que quiero modificar y cambiar sus valores
    for(let i in listaPelicula){
      if(listaPelicula[i].codigo===codigo){
        // encontre por id la pelicula a editar
        listaPelicula[i].nombre=nombre;
        listaPelicula[i].categoria=categoria;
        listaPelicula[i].descripcion=descripcion;
        listaPelicula[i].imagen=imagen;
        listaPelicula[i].embed=embed;
      }
    }
    // guardar el array en localstorage
    localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPelicula))
    // limpiar los datos
    limpiarFormulario();
    // cerrar ventana
    modalPelicula.hide();
    // mostrar mensaje de operacion con exito
    Swal.fire(
      'Perfecto!',
      'Editaste una pelicula correctamente',
      'success'
    )
    leerDatos();
    }
  } 
