let fotosMarcadas = 0;

function marcarFoto(evt) {
    if(evt.target.dataset.marcada == undefined) {
        evt.target.style.filter = "sepia()";
        evt.target.dataset.marcada = true;
        fotosMarcadas++;
       
    } else {
        evt.target.style.filter = "";
        evt.target.dataset.marcada = false;
        fotosMarcadas--;
    }
   document.getElementById("marcadas").innerText = fotosMarcadas;
 
}

const fotos = document.querySelectorAll("#fotografias img")
for (const foto of fotos) {
    foto.addEventListener("click", marcarFoto);
   
}
