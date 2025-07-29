export function item(){
    let item = document.createElement("div");
    item.className = "item"

    let titulo = document.createElement('h1');
    titulo.className = "titulo1";
    titulo.innerText = "Mason Thames";

    let imagen = document.createElement("img");
    imagen.className = "img";
    imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzpBckyRQ7aEH0PFTlrf3HxMgXVFjpXk55hliR9fjwx2_Cx2IqJvMaoWMJO_bhZjnkAY&usqp=CAU";

    let descripcion = document.createElement("p");
    descripcion.className = "descripcion";
    descripcion.innerText = "Mason Thames (2007) es un actor estadounidense destacado por The Black Phone y por interpretar a Hiccup en la versión live‑action de How to Train Your Dragon (2025).";

    item.appendChild(titulo);
    item.appendChild(imagen);
    item.appendChild(descripcion);
    
    return item;
}