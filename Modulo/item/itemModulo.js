export function item(titulo, urlImg) {
   

    let item = document.createElement("div");
    item.className = "item";

    let img = document.createElement("img");
    img.src = urlImg;

    let tituloEl = document.createElement("p");
    tituloEl.textContent = titulo;

    item.appendChild(img);
    item.appendChild(tituloEl);

    item.addEventListener("click", () => {
        item.classList.add("verde");
        let header = document.querySelector(".header");
        header.classList.add('ocultar');
    });

    return item;
}
