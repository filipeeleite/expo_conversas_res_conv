console.log("app.js Loaded!");

var iD_artistaSelecionado;

iD_artistaSelecionado = location.hash.substring(9);

// Inicializando com o número do artista, se index, = "";
optionArtistaSelecionado = iD_artistaSelecionado;


if (iD_artistaSelecionado != "") {

    console.log("url #artista_xx");

    // Option do Artista que foi identificado na url
    optionArtistaSelecionado = document.getElementById(iD_artistaSelecionado);

    // Setando atributo -> <option> respectiva
    optionArtistaSelecionado.setAttribute("selected", "selected");


    // Ocultar aviso - acessou por QR CODE
    console.log("Acesso por artista - aviso ocultado!")
    document.getElementById("aviso_index").style.display = 'none';

    // Carregar img do artista
    setarSrcImg(iD_artistaSelecionado);

}

// Trocar ao selecionar outro artista
function trocaArtista() {
    console.log("Opção alterada para: " + document.getElementById("selecao-artista").value);


    if (optionArtistaSelecionado != "") {
        // Se a variável tiver id_artista, remover atributo do option
        optionArtistaSelecionado.removeAttribute("selected");
    }

    // Valor do option que foi selecionado
    valueOptionArtistaSel = document.getElementById("selecao-artista").value;
    
    // Setando o valor do artista selecionado na URL
    location.hash = valueOptionArtistaSel;
    
    // Setando id Selecionado
    iD_artistaSelecionado = location.hash.substring(9);
    
    // Option do Artista que foi identificado na url
    optionArtistaSelecionado = document.getElementById(iD_artistaSelecionado);

    if (optionArtistaSelecionado != null) {
    // Setando atributo -> option
    optionArtistaSelecionado.setAttribute("selected", "selected");
    }




    // ocultar div aviso se acessou pelo index e mudou opcao
    if (location.hash) {
        console.log("location.hash = true - aviso ocultado!")
        document.getElementById("aviso_index").style.display = 'none';
    }

    // Carregar imagem do artista
    setarSrcImg();
}

function setarSrcImg() {
    if (iD_artistaSelecionado != "") {

        srcImg = 'images/avatars/artista_' + iD_artistaSelecionado + '.jpg';
        console.log("src Carregado: " + srcImg);
    
        document.getElementById("imgArtista_" + iD_artistaSelecionado).setAttribute("src", srcImg);
    }
}