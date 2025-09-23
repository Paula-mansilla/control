import {header} from"../../componentes/header/headerComponent.js";
import { listaCarrito } from "../../componentes/seccionCarrito.js/listaCarrito.js";
import { nav}  from "../../componentes/nav/navComponent.js";

let seccionCarrito = document.createElement('seccion');

seccionCarrito.appendChild(header());

seccionCarrito.appendChild(listaCarrito());

seccionCarrito.appendChild(nav());

document.body.appendChild(seccionCarrito);