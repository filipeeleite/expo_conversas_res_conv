console.log("app.js Loaded!");

var iD_artistaSelecionado;

iD_artistaSelecionado = location.hash.substring(9);

if (iD_artistaSelecionado != "") {

    console.log("url #artista_xx");

    // Option do Artista que foi identificado na url
    optionArtistaSelecionado = document.getElementById(iD_artistaSelecionado);

    // Setando atributo -> <option> respectiva
    optionArtistaSelecionado.setAttribute("selected", "selected");


    // Ocultar aviso - acessou por QR CODE
    console.log("Acesso por artista - aviso ocultado!")
    document.getElementById("aviso_index").style.display = 'none';

}

/*conferirOptionArtista();
function conferirOptionArtista() {

    // Varrer todos os option e de-selecionar eles
    for (var i = 1; i < 52; i++) {
        console.log("Atributo Removido!");
        document.getElementById(i).removeAttribute("selected");
    }
    console.log("saiu do for");
    
    // Selecionar o da url
    iD_artistaSelecionado = location.hash.substring(9);
    document.getElementById(iD_artistaSelecionado).setAttribute("selected", "selected");
    console.log("Atributo setado em: " + iD_artistaSelecionado);
}*/


// Trocar ao selecionar outro artista
function trocaArtista() {
    console.log("Opção alterada para: " + document.getElementById("selecao-artista").value);

    // Valor do option que foi selecionado
    valueOptionArtistaSel = document.getElementById("selecao-artista").value;

    // Setando este valor na URL
    location.hash = valueOptionArtistaSel;

    // Setando id Selecionado
    iD_artistaSelecionado = location.hash.substring(9);


    // Removendo atributo do option
    optionArtistaSelecionado.removeAttribute("selected");

    // Option do Artista que foi identificado na url
    optionArtistaSelecionado = document.getElementById(iD_artistaSelecionado);

    // Setando atributo -> option
    optionArtistaSelecionado.setAttribute("selected", "selected")



    // ocultar div aviso se acessou pelo index e mudou opcao
    if (location.hash) {
        console.log("location.hash = true - aviso ocultado!")
        document.getElementById("aviso_index").style.display = 'none';
    }
}

// setInterval(conferirOptionArtista, 5000);