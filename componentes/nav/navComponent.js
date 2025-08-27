export function nav() {
    let nav = document.createElement("div");
    nav.className = "barra-nav";

    // Creamos 4 cuadritos (divs) para los botones
    let iconos = ["🏠", "📦", "???", "🛒"];

    iconos.forEach((icono) => {
        let boton = document.createElement("div");
        boton.className = "boton-nav";
        boton.textContent = icono;

        nav.appendChild(boton);
    });

    return nav;
}
