import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccion1Component.js";
import { nav } from "./componentes/nav/navComponent.js";

let listaDeCompras = localStorage.getItem("carrito");


function seccion(){

    let seccion = document.createElement('section');
    

    //local
    if (!listaDeCompras){
        listaDeCompras = [];
        localStorage.setItem("carrito", JSON.stringify(listaDeCompras));

    }
    console.log(listaDeCompras);
    
    //header
    seccion.appendChild(header());
    
    //seccion
    seccion.appendChild(seccion1());
    
    //nav
    seccion.appendChild(nav());
    
    return seccion;
}

document.body.appendChild(seccion());
export {listaDeCompras};