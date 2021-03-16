function validarCampoRequerido(input){
    if(input.value === ""){
        input.className = "form-control is-invalid";
        return false;
    } else{
        input.className = "form-control is-valid";
        return true;
    }
}
function validarGeneral(){
    if(validarCampoRequerido(document.getElementById('usuarioLogin'))&&
     validarCampoRequerido(document.getElementById('usuarioLogin'))){
         return true;
     }
     return false;
}