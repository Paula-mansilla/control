export function header(){

    let header = document.createElement('header');
    header.className = "header";

    let text = document.createElement('text');
    text.innerText = "Izaa";

    let div = document.createElement('div');
    div.className = "circulito";
   
    header.appendChild(text);
    header.appendChild(div);
    return header;
}