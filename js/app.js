

// import {Pelicula} from "./admin/peliculaClass.js";
let categoriaAccion = [];
let categoriaDrama = [];
let categoriaComedia= [];
let categoriaRomance= [];
let listaPelicula= [];
leerPeliculas();
cargarPelicula();


function leerPeliculas(){
    // Esta funcion va a leer los datos existentes en el localstorage
    if(localStorage.length > 0){
        listaPelicula = JSON.parse(localStorage.getItem('listaPeliculasKey'));

        for(let i in listaPelicula){
            if(listaPelicula[i].categoria==='accion'){
                categoriaAccion.push(listaPelicula[i]);
                console.log(categoriaAccion);
            }
        }

        for(let i in listaPelicula){
            if(listaPelicula[i].categoria==='drama'){
                categoriaDrama.push(listaPelicula[i]);
                console.log(categoriaDrama);
            }
        }
        for(let i in listaPelicula){
            if(listaPelicula[i].categoria==='comedia'){
                categoriaComedia.push(listaPelicula[i]);
                console.log(categoriaComedia);
            }
        }
        for(let i in listaPelicula){
            if(listaPelicula[i].categoria==='romance'){
                categoriaRomance.push(listaPelicula[i]);
                console.log(categoriaRomance);
            }
        }
        dibujarCard();
    }
}
function dibujarCard(){
    let infoPelicula='';
    let img='';
    let accion = document.getElementById('accion');
    accion.innerHTML='';
    let drama = document.getElementById('drama');
    drama.innerHTML='';
    let comedia = document.getElementById('comedia');
    comedia.innerHTML='';
    let romance = document.getElementById('romance');
    romance.innerHTML='';
    let codigo='';
            for(let i in categoriaAccion){
                if(categoriaAccion[i].imagen===''){
                    // se agrega una imagen por defecto
                    console.log('se agrego una imagen por defecto');
                    img='img/error404.png';
                }else{
                    img=`img/peliculas/${categoriaAccion[i].imagen}`;
                }
                codigo=categoriaAccion[i].codigo;
                infoPelicula=`
                <div class="pelicula" id="${codigo}">
                    <a href="administrador.html"><img src="${img}" class="w-100" alt=""></a>
                </div>
                `;
                // agregar las peliculas al carrete
        
                accion.innerHTML += infoPelicula;
            }
            for(let i in categoriaDrama){
                if(categoriaDrama[i].imagen===''){
                    // se agrega una imagen por defecto
                    console.log('se agrego una imagen por defecto');
                    img='img/error404.png';
                }else{
                    img=`img/peliculas/${categoriaDrama[i].imagen}`;
                    
                }
                codigo=categoriaDrama[i].codigo;
                infoPelicula=`
                <div class="pelicula" id="${codigo}">
                    <a><img src="${img}" class="w-100" alt=""></a>
                </div>
                `;
                // agregar las peliculas al carrete
        
                drama.innerHTML += infoPelicula;
            }
            for(let i in categoriaComedia){
                if(categoriaComedia[i].imagen===''){
                    // se agrega una imagen por defecto
                    console.log('se agrego una imagen por defecto');
                    img='img/error404.png';
                }else{
                    img=`img/peliculas/${categoriaComedia[i].imagen}`;
                }
                codigo=categoriaComedia[i].codigo;
                infoPelicula=`
                <div class="pelicula" id="${codigo}">
                    <a><img src="${img}" class="w-100" alt=""></a>
                </div>
                `;
                // agregar las peliculas al carrete
        
                comedia.innerHTML += infoPelicula;
            }
            for(let i in categoriaRomance){
                if(categoriaRomance[i].imagen===''){
                    // se agrega una imagen por defecto
                    console.log('se agrego una imagen por defecto');
                    img='img/error404.png';
                }else{
                    img=`img/peliculas/${categoriaRomance[i].imagen}`;
                }
                codigo=categoriaRomance[i].codigo;
                infoPelicula=`
                <div class="pelicula" id="${codigo}">
                    <a><img src="${img}" class="w-100" alt=""></a>
                </div>
                `;
                // agregar las peliculas al carrete
        
                romance.innerHTML += infoPelicula;
            }
}


function cargarPelicula(){
    let id='';
    let pelicula=[];
    let titulo='';
    let portada='';
    let descripcion='';
    let main=document.getElementById('main');
    let elemento = document.getElementsByClassName('pelicula');
    for(let i=0; i<elemento.length;i++){
        elemento[i].addEventListener('click', function(){
            id=this.id;
            console.log(id);
            for(let i in listaPelicula){
                if(listaPelicula[i].codigo==id){
                    console.log('pelicula filtrada');
                    pelicula.push(listaPelicula[i]);
                    console.log(pelicula);
                    
                    titulo=pelicula[0].nombre;
                    portada=`img/peliculas/${pelicula[0].imagen}`;
                    descripcion=pelicula[0].descripcion;


                    main.innerHTML= `
                    <h1 class="mx-5 mt-5 mb-4">${titulo}</h1>
                    <img class="img-fluid" src="${portada}" alt="imagen de pelicula">
                    <section class="container my-4">
                        <p>${descripcion}</p>
                        <a href="#" class="btn boton mb-5 px-5 py-2 fs-4">Reproducir</a>
                    </section>
                    `
                }
            }
        }
    )}
}
