import { Usuario } from "./usuarioClass.js" ;
let administrador= new Usuario
('rollingdisney@gmail.com','1234','Administrador');
let listaUsuario = [];
let usuarioLogueado=[];
leerDatos();
console.log(administrador);
window.validarAdmin=function(event){
    event.preventDefault();
    let nombre =document.getElementById('usuarioLogin');
    let contraseña=document.getElementById('contLogin');
    if(validarGeneral()){
        if(administrador.contraseña==contraseña.value && administrador.nombre==nombre.value){
            usuarioLogueado.push(administrador);
            localStorage.setItem("usuarioLogueadoKey", JSON.stringify(usuarioLogueado));
        }else{
            console.log(listaUsuario)
            for(let i in listaUsuario){
                if(listaUsuario[i].nombre==nombre.value && listaUsuario[i].contraseña==contraseña.value){
                    usuarioLogueado.push(listaUsuario[i]);
                    localStorage.setItem("usuarioLogueadoKey", JSON.stringify(usuarioLogueado));
                }else{
                    console.log('nada')
                }
            }
            
        }

    }
    

}
function leerDatos(){
    // esta funcion se encarga de leer los datos almacenados en localstorage
    console.log('datos leidos')
    if(localStorage.getItem('listaUsuarioKey')===!null){
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