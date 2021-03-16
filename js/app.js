// Inicializamos las variables arrays
let categoriaAccion = [];
let categoriaDrama = [];
let categoriaComedia= [];
let categoriaRomance= [];
let listaPelicula= [];
let peliculaDestacada= [];
let usuarioLogueado=[];

leerPeliculas();
cargarPelicula();
cargarDestacada();
bloquearIndex();




// Esta funcion va a leer los datos existentes en el localstorage
function leerPeliculas(){
    // Si detecta que existen datos en el localstorage, los extrae a un array y los filtra segun la categoria
    if(localStorage.length > 0){
        listaPelicula = JSON.parse(localStorage.getItem('listaPeliculasKey'));
        // este array recibe los datos de la pelicula destacada
        peliculaDestacada = JSON.parse(localStorage.getItem('peliculaDestacadaKey'));

        for(let i in listaPelicula){
            if(listaPelicula[i].categoria==='accion'){
                categoriaAccion.push(listaPelicula[i]);
                
            }
        }

        for(let i in listaPelicula){
            if(listaPelicula[i].categoria==='drama'){
                categoriaDrama.push(listaPelicula[i]);
                
            }
        }
        for(let i in listaPelicula){
            if(listaPelicula[i].categoria==='comedia'){
                categoriaComedia.push(listaPelicula[i]);
                
            }
        }
        for(let i in listaPelicula){
            if(listaPelicula[i].categoria==='romance'){
                categoriaRomance.push(listaPelicula[i]);
                
            }
        }
        dibujarCard();
    }else{
        // si no existe nada en localstorage, el array de la pelicula destacada es igual a null
        peliculaDestacada = null;
    }
}
// Esta funcion se encarga de pintar las peliculas que carguemos al localstorage segun la categoria
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
                // si no se ecuentra una imagen
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
                    <a href="#"><img src="${img}" class="w-100" alt=""></a>
                </div>
                `;
                // agregar las peliculas de accion al carrete
        
                accion.innerHTML += infoPelicula;
            }
            for(let i in categoriaDrama){
                // si no se ecuentra una imagen
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
                    <a href="#"><img src="${img}" class="w-100" alt=""></a>
                </div>
                `;
                // agregar las peliculas de drama al carrete
        
                drama.innerHTML += infoPelicula;
            }
            for(let i in categoriaComedia){
                // si no se ecuentra una imagen
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
                    <a href="#"><img src="${img}" class="w-100" alt=""></a>
                </div>
                `;
                // agregar las peliculas de comedia al carrete
        
                comedia.innerHTML += infoPelicula;
            }
            for(let i in categoriaRomance){
                // si no se ecuentra una imagen
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
                    <a href="#"><img src="${img}" class="w-100" alt=""></a>
                </div>
                `;
                // agregar las peliculas de romance al carrete
        
                romance.innerHTML += infoPelicula;
            }
}
// esta funcion se encarga de reemplazar la imagen de la pelicula en la pagina de pelicula, por un trailer reproducible
let main=document.getElementById('main');
let pelicula=[];
let titulo='';
let portada='';
let descripcion='';
let video='';
window.reproducir=function(){
    video=pelicula[0].embed;
    main.innerHTML= `
    <h1 class="mx-5 mt-5 mb-4 display-3"">${titulo}</h1>
    ${video}
    <section class="margen mt-3 mx-5">
        <p>${descripcion}</p>
    </section>
    `
}
// esta funcion se encarga de filtrar la pelicula seleccionada del carrete para que expanda los detalles de dicha pelicula
function cargarPelicula(){
    let id=''; 
    let elemento = document.getElementsByClassName('pelicula');
    // extraemos el id del elemento al que hacemos click
    for(let i=0; i<elemento.length;i++){
        elemento[i].addEventListener('click', function(){
            id=this.id;
            console.log(id);
            // filtramos los datos del objeto segun el id del elemento al que clickeamos
            for(let i in listaPelicula){
                if(listaPelicula[i].codigo==id){
                    console.log('pelicula filtrada');
                    // los pasamos a un array
                    pelicula.push(listaPelicula[i]);
                    console.log(pelicula);
                    // asignamos la informacion a variables
                    titulo=pelicula[0].nombre;
                    portada=`img/peliculas/${pelicula[0].imagen}`;
                    descripcion=pelicula[0].descripcion;
                    
                    if(portada==='img/peliculas/'){
                     // reemplazamos el codigo
                     main.innerHTML= `
                     <h1 class="mx-5 mt-5 mb-4 display-3">No disponible</h1>
                     <div class="divError"><img class="d-block mx-auto error" src="img/error404.png" alt="imagen de pelicula"></div>
                     <section class="margen mt-3 mx-5">
                         <p>Descripcion no disponible</p>
                         <a href="#" class="btn boton mb-5 px-5 py-2 fs-4 disabled">Reproducir</a>
                     </section>
                     `
                    }else{
                        // reemplazamos el codigo
                       main.innerHTML= `
                       <h1 class="mx-5 mt-5 mb-4 display-3">${titulo}</h1>
                       <img class="w-100 destacada" src="${portada}" alt="imagen de pelicula">
                       <section class="margen mt-3 mx-5">
                           <p>${descripcion}</p>
                           <a href="#" onclick='reproducir()' class="btn boton mb-5 px-5 py-2 fs-4">Reproducir</a>
                       </section>
                       `
                   }

                }
            }
        }
    )}
}
// estas tres funciones existen para ejecutar correctamente la funcionalidad de destacar peliculas
function cargarDestacada(){
    let destacada=document.getElementById('portada');
    // si nuestro array es distinto de null
    if(peliculaDestacada!=null){
        // inicializamos variables asignando la unformacion de la pelicula destacada guardada en localstorage
        let portada=`img/peliculas/${peliculaDestacada[0].imagen}`;
        let titulo=peliculaDestacada[0].nombre;
        let descripcion=peliculaDestacada[0].descripcion;
        // reemplazamos el codigo de la portada con la informacion correspondiente
            destacada.innerHTML=`
            <img src="${portada}" class="w-100 destacada" alt="">
            <div class="container textosPortada">
                 <h2 class="font-weight-bold">${titulo}</h2>
                 <p class="lead ">${descripcion}</p>
                 <a onclick='paginaDestacada()' class="btn boton px-5" href="#">Reproducir</a>
             </div>
            `         
    }else{
        // si nuestro array es igual a null, mostrar una portada por defecto con el error 404
        destacada.innerHTML=`
            <img src="img/error404.png" class="mx-auto destacada" alt="">
            <div class="container textosPortada">
                 <h2 class="font-weight-bold">No se encontro la pelicula destacada</h2>
                 <p class="lead ">No existe una descripcion</p>
                 <a onclick='paginaDestacada()' class="btn boton px-5 disabled" href="#">Reproducir</a>
             </div>
            `         
    }
}
window.paginaDestacada=function () {
    let portada=`img/peliculas/${peliculaDestacada[0].imagen}`;
    let titulo=peliculaDestacada[0].nombre;
    let descripcion=peliculaDestacada[0].descripcion;
    main.innerHTML= `
    <h1 class="mx-5 mt-5 mb-4 display-3"">${titulo}</h1>
    <img class="w-100 destacada" src="${portada}" alt="imagen de pelicula">
    <section class="margen mt-3 mx-5">
        <p>${descripcion}</p>
        <a href="#" onclick='reproducirDestacada()' class="btn boton mb-5 px-5 py-2 fs-4">Reproducir</a>
    </section>
    `
}
window.reproducirDestacada=function(){
    console.log("prueb")
    let video=peliculaDestacada[0].embed;
    let titulo=peliculaDestacada[0].nombre;
    let descripcion=peliculaDestacada[0].descripcion;
    main.innerHTML= `
    <h1 class="mx-5 mt-5 mb-4 display-3"">${titulo}</h1>
    ${video}
    <section class="margen mt-3 mx-5">
        <p>${descripcion}</p>
    </section>
    `
}
function bloquearIndex(){
    if(localStorage.getItem('usuarioLogueadoKey')===null){
        // no existe la key alertar sobre usuario incorrecto
        console.log('no existe key');
        let main=document.getElementById('main');
        let navBar=document.getElementById('nav');
        navBar.innerHTML=`
        <div class="d-flex justify-content-between">
        <div><a href="index.html"><img class="logo" src="img/logo2.png" alt="logo Disney+"></a></div>

        `
        main.innerHTML=`
        <div class="py-5">
        <div class="card2 mx-4">
            <h1 class="text-center pt-5 display-2">Inicia sesion o registrate, para disfrutar de nuestro contenido</h1>
            <div class="card2 d-flex justify-content-center mt-5 pb-5">
                <a class="btn boton mx-2" href="registrar.html">REGISTRATE</a> 
                <a class="btn boton2 " href="login.html">INICIA SESIÓN</a>
            </div>
        </div>
        </div>`;
        main.className="card1"
      }
}