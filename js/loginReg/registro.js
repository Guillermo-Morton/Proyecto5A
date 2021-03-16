import { Usuario } from "./usuarioClass.js" ;
let listaUsuario = [];
leerDatos();
console.log(listaUsuario);

window.guardarUsuario = function (event){
    event.preventDefault();
    if(validarGeneral()){
      console.log("datos correctos");
      //crear usuario
         let nuevoUsuario = new Usuario
         (document.getElementById('correoReg').value,
         document.getElementById('usuarioContraseña').value,
         document.getElementById('usuarioNombre').value       
         );

      // //guardar en el arreglo
       console.log(nuevoUsuario);
      
       listaUsuario.push(nuevoUsuario);
        
      // //guardar datos en localStorage
       localStorage.setItem("listaUsuarioKey", JSON.stringify(listaUsuario));
      
      // //limpiar formulario
       limpiarFormulario();
      //  redirigir al login
      Swal.fire({
        title: 'Perfecto!',
        text: "Te registraste correctamente",
        icon: 'success',
        iconColor:'white',
        background: '#03081d',
        confirmButtonText: 'Iniciar sesion'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href= "login.html";
        }
      }) 
    
    }
      
    else{
      console.log("datos incorrectos");
    }

      
}

function limpiarFormulario(){
    let formulario = document.getElementById("formUsuario");
    formulario.reset();
    let nombre=document.getElementById('usuarioNombre');
    let mail=document.getElementById('correoReg');
    let contraseña=document.getElementById('usuarioContraseña');
    let contraseña2=document.getElementById('usuarioContraseña2');

    nombre.className='form-control';
    mail.className='form-control';
    contraseña.className='form-control';
    contraseña2.className='form-control';
}

function leerDatos(){
  // esta funcion se encarga de leer los datos almacenados en localstorage
  console.log('datos leidos')
  if(localStorage.getItem('listaUsuarioKey')===null){
      // no existe la key no hacer nada
      console.log(localStorage.getItem('listaUsuarioKey')===null)
    }else{
      // si existe la key
      let _listaUsuario = JSON.parse(localStorage.getItem('listaUsuarioKey')) ;
      // si el arreglo de usuarios esta vacio igualar con los que traje de localstorage
      if(listaUsuario.length === 0){
        listaUsuario= _listaUsuario;
    }      
}
}

