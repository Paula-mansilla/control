import { item } from "../../Modulo /item/itemModulo.js";

export function seccion1(){

    let seccion1 = document.createElement("seccion");
    seccion1.className = "seccion-1";

    seccion1.appendChild(item());
    seccion1.appendChild(item());
    seccion1.appendChild(item());
    seccion1.appendChild(item());

    return seccion1;
}