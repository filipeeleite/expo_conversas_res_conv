console.log("app.js Loaded!");

var logoPlayState = false; // Inicializar variável; (se a animacao da logo foi reproduzida)

var iD_artistaSelecionado; // [vai ser carregado com '1' - '51']

var iD_artistaSelecionado = location.hash.substring(9); // #artista_-->[n]<--

// Inicializando com o número do artista, se index, = "";
var optionArtistaSelecionado = iD_artistaSelecionado;

// "Selecionar artista..."
var instrucao = document.getElementsByClassName("InstrucaoArtista")[0];
var seInstrucao = true;

// Render
// Construir <div> do artista
construtorDivArtista();


if (iD_artistaSelecionado != "") {

    console.log("url #artista_xx");

    // Option do Artista que foi identificado na url
    optionArtistaSelecionado = document.getElementById(iD_artistaSelecionado);

    // Setando atributo -> <option> respectiva
    optionArtistaSelecionado.setAttribute("selected", "selected");

    // Ocultar instrucao - acessou por QR CODE
    document.getElementById("selecao-artista").removeChild(instrucao);
    document.getElementsByClassName("container-todos-artistas")[0].remove();
    seInstrucao = false;

    // Setando altura dos elementos
    document.getElementsByClassName("selecao")[0].style.height = "100px";
    document.getElementsByClassName("main")[0].style.height = "100%";


    // Carregar img do artista
    setarSrcImg(iD_artistaSelecionado);

}


// Trocar ao selecionar outro artista
function trocaArtista() {
    clockAtual = new Date();
    console.log("Opção alterada para: " + document.getElementById("selecao-artista").value);

    // Setando altura dos elementos
    document.getElementsByClassName("selecao")[0].style.height = "100px";
    document.getElementsByClassName("main")[0].style.height = "100%";

    // Ocultar seção inteira (Animação Carregando)
    document.getElementsByClassName("sections")[0].style.opacity = 0;
    // Carregando
    document.getElementsByClassName("loading-animation")[0].style.display = 'block';
    document.getElementsByClassName("loading-animation")[0].style.transform = 'rotate(720deg)';
    


    // 1º vez - Se index, remover "Selecionar artista"
    if (seInstrucao) {

        document.getElementById("selecao-artista").removeChild(instrucao);
        document.getElementsByClassName("container-todos-artistas")[0].remove();
        seInstrucao = false;
        console.log("Instrucao Removida!");
    }

    // Se tiver '1' - '51', remover atributo do option
    if (optionArtistaSelecionado != "") {

        optionArtistaSelecionado.removeAttribute("selected");
    }

    // Setando valor do option que foi selecionado na variável
    valueOptionArtistaSel = document.getElementById("selecao-artista").value;
    
    // Setando esse valor na URL
    location.hash = valueOptionArtistaSel;
    
    // Setando ID do artista selecionado
    iD_artistaSelecionado = location.hash.substring(9);
    
    // Option do Artista que foi identificado na URL
    optionArtistaSelecionado = document.getElementById(iD_artistaSelecionado);

    if (optionArtistaSelecionado != null) {
    // Setando atributo -> option
    optionArtistaSelecionado.setAttribute("selected", "selected");
    }

    // Carregar imagem do artista
    setarSrcImg();

    // Exibir Sessão
    setTimeout(function() { exibirSecao(); }, 1500);

    function exibirSecao(){
        document.getElementsByClassName("sections")[0].style.opacity = 1;
        // Carregando
        document.getElementsByClassName("loading-animation")[0].style.display = 'none';
    }
}

function setarSrcImg() {

    srcImg = 'images/avatars/artista_' + iD_artistaSelecionado + '.jpg';
    console.log("src Carregado: " + srcImg);

    document.getElementById("imgArtista_" + iD_artistaSelecionado).setAttribute("src", srcImg);

}

// UI
if (logoPlayState == false) {
    // Delay para reproduzir a Animação
    var triggeringLogo = setInterval(function() { triggerLogo();}, 1000);
}
function triggerLogo() {
    //console.log("Aguardando topo... Posição: " + window.scrollY);

    if (window.scrollY < 250) {
        console.log("Playing animation!")

        animacao(); // logo.js

        logoPlayState = true;
        console.log('logoPlayState === true');

        clearInterval(triggeringLogo);
    }

}


// SETAS DO SCROLL TEXTO
setInterval(function() { indicadoresTexto();}, 1000);
function indicadoresTexto() {

    document.getElementsByClassName("indicator-top")[0].style.opacity

    // Ler scroll do texto
    // Bloco do texto
    mainText = document.getElementsByClassName("main-texto")[0];

    var scrollTextTotal_Y = mainText.scrollHeight;
    var scrollText_Y      = mainText.scrollTop;

    //console.log("Scroll texto :: " + scrollTextTotal_Y + "| Scroll: " + scrollText_Y);

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
        console.log("No topo :: texto");

        ocultarIndicador(false);
        document.getElementsByClassName("indicator-top")[0].style.stroke = value;

        ocultarIndicador(true);
        document.getElementsByClassName("indicator-bottom")[0].style.stroke = value;
    }
    //Se no final
    sizeWindow = document.getElementsByClassName("main-texto")[0].clientHeight;

    if (scrollText_Y + sizeWindow >= scrollTextTotal_Y - 20) {
        console.log("No final :: texto");

        ocultarIndicador(true);
        document.getElementsByClassName("indicator-top")[0].style.stroke = value;

        ocultarIndicador(false);
        document.getElementsByClassName("indicator-bottom")[0].style.stroke = value;
    }

}


// CARREGAR ICONS ARTISTAS INICIAL (Selecionar Artista...)
if(seInstrucao == true) {
    for (let i = 1; i < 52; i++) {
        iconArtista = '<img src=/images/avatars/lowres/artista_' + i + '.jpg style=width=100%>';

        document.getElementsByClassName("todos_artistas")[0].innerHTML += iconArtista;
    }
    /*
    for (let i = 1; i < 20; i++) {
        iconArtista = '<img src=/images/avatars/artista_' + i + '.jpg style=width=100%>';

        document.getElementsByClassName("todos_artistas")[0].innerHTML += iconArtista;
    }*/
}