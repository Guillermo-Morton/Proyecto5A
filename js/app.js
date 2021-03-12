import {Pelicula} from "./admin/peliculaClass.js";
let categoriaAccion = [];
let categoriaDrama = [];
let categoriaComedia= [];
let categoriaRomance= [];
let listaPelicula= [];
let pelicula=[];
leerPeliculas();


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
            for(let i in categoriaAccion){
                if(categoriaAccion[i].imagen===''){
                    // se agrega una imagen por defecto
                    console.log('se agrego una imagen por defecto');
                    img='img/error404.png';
                }else{
                    img=`img/peliculas/${categoriaAccion[i].imagen}`;
                }
                infoPelicula=`
                <div class="pelicula">
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
                infoPelicula=`
                <div class="pelicula">
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
                infoPelicula=`
                <div class="pelicula">
                    <a href="pelicula.html"><img src="${img}" class="w-100" alt=""></a>
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
                infoPelicula=`
                <div class="pelicula">
                    <a href="pelicula.html"><img src="${img}" class="w-100" alt=""></a>
                </div>
                `;
                // agregar las peliculas al carrete
        
                romance.innerHTML += infoPelicula;
            }
}



    

