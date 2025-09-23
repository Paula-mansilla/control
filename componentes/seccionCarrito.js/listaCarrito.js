import { obtenerProductos } from "../../control/miLocalStorange.js";

export function listaCarrito() {
let seccion = document.createElement('section');
seccion.className = "carrito";

let recuperarProductos = obtenerProductos();

recuperarProductos.forEach((element, index )=> {
// div general para el producto
let divProducto = document.createElement('div');
divProducto.className = "producto";

// div para la imagen
let divImagen = document.createElement('div');
divImagen.className = "producto-imagen";
let img = document.createElement('img');
img.src = element.img || "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png";
img.alt = element.nombre;
divImagen.appendChild(img);
console.log(element);

// p para el nombre
let nombre = document.createElement('p');
nombre.className = "producto-nombre";
nombre.textContent = element.nombre;

// p para el precio
let precio = document.createElement('p');
precio.className = "producto-precio";
precio.textContent = `Q${element.precio}`;

//boton eliminar 
let eliminar = document.createElement('span');
eliminar.className = "producto-eliminar";
eliminar.textContent = "❌";

//accion eliminar
eliminar.addEventListener("click", () => {
    divProducto.remove();

    let productos = obtenerProductos ();
    productos.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(productos));
});

// Añadir todo al div general (en fila)
divProducto.appendChild(divImagen);
divProducto.appendChild(nombre);
divProducto.appendChild(precio);
precio.appendChild(eliminar);




// Añadir al section
seccion.appendChild(divProducto);
});


return seccion;
}