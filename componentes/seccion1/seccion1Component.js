import { item } from "../../Modulo/item/itemModulo.js";
import { productos } from "../../database/productos.js";



export function seccion1(){

    let seccion = document.createElement("seccion");
    seccion.className = "seccion-1"


    // Para añadirlas a la sección
    productos.forEach(Element => {
       seccion.appendChild(item(Element.title,Element.image,Element.description,Element.price));
    });


    return seccion;
    }