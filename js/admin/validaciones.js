function campoRequerido(elemento){
    console.log("en la funcion campo requerido");
    if(elemento.value === ``){
        elemento.className = `form-control is-invalid`;
        return false;
    } else{
        elemento.className = `form-control is-valid`;
        return true;
    }
}
function campoImagen(elemento){
    console.log("en la funcion campo requerido");
    if(elemento.value === ``){
        elemento.className = `form-control`;
        return false;
    } else{
        elemento.className = `form-control is-valid`;
        return true;
    }
}
function validarCodigo(codigo){
    console.log("dentro de la funcion validarCodigo");
    let expresion = /\d$/;
    if(expresion.test(codigo.value) && codigo.value.length >=1){
        console.log("salio todo bien");
        codigo.value = codigo.value.slice(0,10);
        codigo.className=`form-control is-valid`;
        return true;
    }
    else{
        console.log("hubo un error");
        codigo.className=`form-control is-invalid`;
        return false;
    }
}
function validarGeneral(){
    if(validarCodigo(document.getElementById(`codigoPelicula`))       
    && campoRequerido(document.getElementById(`nombrePelicula`))
    && campoRequerido(document.getElementById(`categoriaPelicula`))
    && campoRequerido(document.getElementById(`descripcionPelicula`))
    && campoRequerido(document.getElementById(`embedPelicula`))){
        console.log(`Validacion correcta`);
        return true;
    }
}
function validarEditar(){
    if(campoRequerido(document.getElementById(`nombrePelicula`))
    && campoRequerido(document.getElementById(`categoriaPelicula`))
    && campoRequerido(document.getElementById(`descripcionPelicula`))
    && campoRequerido(document.getElementById(`embedPelicula`))){
        console.log(`Validacion correcta`);
        return true;
    }
}