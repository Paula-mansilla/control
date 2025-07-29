export function header(){

    let header = document.createElement('header');

    let text = document.createElement('text');
    text.className = "titulo";
    text.innerText = "Izaa";

    let div = document.createElement('div');
    div.className = "circulito";
    div.innerHTML = "🍓";

    
   
    header.appendChild(text);
    header.appendChild(div);
    return header;
}