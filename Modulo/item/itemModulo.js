
import { guardarProducto, obtenerProductos } from "../../control/miLocalStorange.js";
import { listaDeCompras } from "../../main.js";

export function item(id,titulo,urlImg,description,precio){

    let item = document.createElement('div');
    item.className = "item";

    let titu = document.createElement('titu');
    titu.textContent = titulo;
    item.appendChild(titu);
    
    let img = document.createElement('img');
    img.src = urlImg;
    item.appendChild(img);

    let p = document.createElement('p');
    p.textContent = description;
    item.appendChild(p);

    let span = document.createElement('span');
    span.textContent = "$" + precio;
    item.appendChild(span);
 
 item.addEventListener('click', ()=>{
    let carritoLocalStorange = obtenerProductos();
    console.log("carrito:" ,carritoLocalStorange);
    
    carritoLocalStorange.push({precio:precio,nombre:titulo, img:urlImg});
    guardarProducto(carritoLocalStorange);
    console.log("Producto en LocalStorange");
    location.reload();
    });

    return item;
}