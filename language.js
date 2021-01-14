console.log("language.js loaded!");

var quantidadeElementosPT = document.getElementsByClassName("pt").length;
var quantidadeElementosEN = document.getElementsByClassName("en").length;

var english = false;

// Se acessou QR code diretamente em Inglês
if (document.location.hash == "#en") {
    console.log("Página em inglês!");
    
    // Limpar url
    document.location.hash = "";
    trocarLingua();
}

// Toggle
document.getElementById("toggle-button").addEventListener("click", trocarLingua);

function trocarLingua () {
    console.log("TrocarLíngua!");


    if (english == false) {

        console.log("Ingles == false");

        // Setar para Inglês
        english = true;
        linguaAtual = 'en';
        // Setar toggle
        document.getElementById("toggle-button").style.transform = 'translateX(20px)';

        // Ocultando os elementos PT e exibindo os EN
        for (let i = 0; i < quantidadeElementosPT; i++) {
            console.log("Ocultando PT");
            document.getElementsByClassName("pt")[i].style.display = 'none';
        }
        for (let i = 0; i < quantidadeElementosEN; i++) {
            console.log("Exibindo EN");
            document.getElementsByClassName("en")[i].style.display = 'block';
        }

        // Se instrução ainda estiver exibindo (Selecione um artista...)
        if (seInstrucao) {
            // setar para:
            instrucao.innerHTML = "Select an artist..."
        }


    } else {

        console.log("Ingles == true");

        // Setar para Português
        english = false;
        linguaAtual = 'pt';
        // Setar toggle
        document.getElementById("toggle-button").style.transform = 'translateX(0px)';

        // Ocultando os elementos EN e exibindo os PT
        for (let i = 0; i < quantidadeElementosEN; i++) {
            console.log("Ocultando EN");
            document.getElementsByClassName("en")[i].style.display = 'none';
        }
        for (let i = 0; i < quantidadeElementosPT; i++) {
            console.log("Exibindo PT");
            document.getElementsByClassName("pt")[i].style.display = 'block';
        }


        // // Se instrução ainda estiver exibindo (Select an artist...)
        if (seInstrucao) {
            // setar para:
            instrucao.innerHTML = "Selecionar artista..."
        }

    }
}