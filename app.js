console.log("app.js Loaded!");

var logoPlayState = false;

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

// UI
if (logoPlayState == false) {
    var triggeringLogo = setInterval(function() { triggerLogo();}, 1000);
}
function triggerLogo() {
    console.log("Aguardando topo... Posição: " + window.scrollY);


    if (window.scrollY < 250) {
        console.log("Playing animation!")
        animacao();
        logoPlayState = true;
        clearInterval(triggeringLogo);
    }

}



setInterval(function() { indicadoresTexto();}, 1000);
function indicadoresTexto() {

    document.getElementsByClassName("indicator-top")[0].style.opacity

    // Ler scroll do texto
    // Bloco do texto
    mainText = document.getElementsByClassName("main-texto")[0];

    var scrollTextTotal_Y = mainText.scrollHeight;
    var scrollText_Y      = mainText.scrollTop;

    console.log("Scroll texto :: " + scrollTextTotal_Y + "| Scroll: " + scrollText_Y);

        function ocultarIndicador(i) {
            if (i == true) {
                value = "#405C32"; // cor do fundo
            }
            else {
                value = "#fff"; // branco
            }
        }

        ocultarIndicador(false);
        document.getElementsByClassName("indicator-top")[0].style.stroke = value;

        ocultarIndicador(false);
        document.getElementsByClassName("indicator-bottom")[0].style.stroke = value;

    // Se no topo
    if (scrollText_Y < 20) {
        //console.log("No topo");

        ocultarIndicador(false);
        document.getElementsByClassName("indicator-top")[0].style.stroke = value;

        ocultarIndicador(true);
        document.getElementsByClassName("indicator-bottom")[0].style.stroke = value;
    }
    //Se no final
    sizeWindow = document.getElementsByClassName("main-texto")[0].clientHeight;

    if (scrollText_Y + sizeWindow >= scrollTextTotal_Y - 20) {
        //console.log("no final");

        ocultarIndicador(true);
        document.getElementsByClassName("indicator-top")[0].style.stroke = value;

        ocultarIndicador(false);
        document.getElementsByClassName("indicator-bottom")[0].style.stroke = value;
    }

}