function iniciar(){
    var elementoPalavra = document.querySelector(".palavra-animada");
    var palavras = ["DOCKER", "Strippo", "Figma", "VS Code", "GIT", "Github"];
    var indexador = 0;
    elementoPalavra.textContent = palavras[indexador];

    var intervalo = setInterval(() => {
        elementoPalavra.textContent = palavras[indexador];
        if(indexador>=palavras.length-1){
            indexador=0;
        }
        else{
            indexador++;
        }
      
    }, 2000);

    



}
window.addEventListener("DOMContentLoad", iniciar())