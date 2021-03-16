import { Usuario } from "./usuarioClass.js" ;
let administrador= new Usuario
('rollingdisney@gmail.com','1234','Administrador');
let listaUsuario = [];
let usuarioLogueado=[];
leerDatos();
leerAdmin();
window.validarAdmin=function(event){
    event.preventDefault();
    let nombre =document.getElementById('usuarioLogin');
    let contraseña=document.getElementById('contLogin');
    usuarioLogueado=[];
    if(validarGeneral()){
        if(administrador.contraseña==contraseña.value && administrador.nombre==nombre.value){
            usuarioLogueado.push(administrador);
            localStorage.setItem("usuarioLogueadoKey", JSON.stringify(usuarioLogueado));
            leerAdmin();
            window.location.href= "index.html";
        }else{
            console.log(listaUsuario)
            for(let i in listaUsuario){
                if(listaUsuario[i].nombre==nombre.value && listaUsuario[i].contraseña==contraseña.value){
                    usuarioLogueado.push(listaUsuario[i]);
                    localStorage.setItem("usuarioLogueadoKey", JSON.stringify(usuarioLogueado));
                    window.location.href= "index.html";
                }else{
                    let nombre= document.getElementById('usuarioLogin')
                    let contraseña= document.getElementById('contLogin')
                    let alerta= document.getElementById('usuarioIncorrecto');
                    alerta.className='my-3 text-center';
                    nombre.className='form-control is-invalid';
                    contraseña.className='form-control is-invalid';
                }
            }
            
        }

    }
    

}
function leerDatos(){
    // esta funcion se encarga de leer los datos almacenados en localstorage
    console.log('datos leidos')
    if(localStorage.getItem('listaUsuarioKey')===null){
        // no existe la key no hacer nada
      }else{
        // si existe la key
        let _listaUsuario = JSON.parse(localStorage.getItem('listaUsuarioKey')) ;
        // si el arreglo de usuarios esta vacio igualar con los que traje de localstorage
        if(listaUsuario.length === 0){
          listaUsuario= _listaUsuario;
      }      
  }
  }
function leerAdmin(){
    // esta funcion se encarga de leer los datos almacenados en localstorage
    if(localStorage.getItem('usuarioLogueadoKey')===null){
        // no existe la key alertar sobre usuario incorrecto
        console.log('no existe key');
      }else{
        // si existe la key
        // este array recibe los datos de la pelicula destacada
        usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueadoKey')) ;
        console.log(usuarioLogueado);
        actualizarNav();
        // window.location.href= "index.html";
  }
  }
function actualizarNav(){
    let navBar=document.getElementById('nav');
      if(usuarioLogueado[0].nombre==='Administrador'){
          navBar.innerHTML=`
          <div class="d-flex justify-content-between">
          <div><a href="index.html"><img class="logo" src="img/logo2.png" alt="logo Disney+"></a></div>
          <div>
              <ul class="nav">  
                  <li class="nav-item">
                      <a onclick='cerrarSesion()'class="btn boton2 me-1">ADMIN<i class="fas fa-user-cog mx-1"></i></a> 
                  </li>
                  <li class="nav-item">
                      <a class="btn boton2" href="administrador.html">ADMINISTRACION</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active inicio" aria-current="page" href="index.html"><i class="inicio fas fa-2x fa-home"></i></a>
                  </li>
                </ul>
          </div>
      </div>
          `
      }else{
          for(let i in listaUsuario){
              if (usuarioLogueado[0].nombre===listaUsuario[i].nombre){
                  console.log(true)
                  navBar.innerHTML=`
                  <div class="d-flex justify-content-between">
                  <div><a href="index.html"><img class="logo" src="img/logo2.png" alt="logo Disney+"></a></div>
                    <div>
                        <ul class="nav">  
                          <li class="nav-item">
                              <a onclick='cerrarSesion()'class="btn boton2 me-1">Bienvenido ${usuarioLogueado[i].nombre}<i class="fas fa-user-cog mx-1"></i></a> 
                          </li>
                          <li class="nav-item">
                              <a class="nav-link active inicio" aria-current="page" href="index.html"><i class="inicio fas fa-2x fa-home"></i></a>
                          </li>
                        </ul>
                    </div>
                   </div>
                `
              }
          }
      }
  }
window.cerrarSesion=function() {
    Swal.fire({
        title: '¿Desea cerrar la sesion?',
        icon: 'warning',
        iconColor:'white',
        background: '#03081d',
        showCancelButton: true,
        cancelButtonColor: 'gray',
        cancelButtonText: 'Seguir navegando',
        confirmButtonText: 'Cerrar sesion'
      }).then((result) => {
        if (result.isConfirmed) {
            // aqui borrar el producto
            localStorage.removeItem('usuarioLogueadoKey');
            window.location.href= "index.html";
        }
      })
    
}
export{actualizarNav, leerAdmin, leerDatos};
  