function validarCampoRequerido(input){
    console.log("en la funcion campo requerido")
    if(input.value === ""){
        input.className = "form-control is-invalid";
        return false;
    } else{
        input.className = "form-control is-valid";
        return true;
    }
}
function validarMail(input) {
    let expresion = /\w+@\w+\.[a-z]{2,4}$/;
    let alerta= document.getElementById('alerta');
    if (input.value != "" && expresion.test(input.value)) {
      input.className = "form-control is-valid";
      alerta.innerHTML=""
      return true;
    } else {
      input.className = "form-control is-invalid";
      alerta.innerHTML="Ingrese un mail valido"
      return false;
    }
  }

function validarContraseña(input){
    if(input.value != '' && input.value.length >= 10){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarGeneral(){
    console.log('dentro de la funcion validar general');
    if(validarMail(document.getElementById('correoReg')) &&
    validarContraseña(document.getElementById('usuarioContraseña')) &&
    validarCampoRequerido(document.getElementById('usuarioNombre'))){
      return true; 
    }else{
      return false;
    }

      
}