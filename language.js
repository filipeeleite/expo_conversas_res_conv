console.log("language.js loaded!");

var quantidadeElementosPT = document.getElementsByClassName("pt").length;
var quantidadeElementosEN = document.getElementsByClassName("en").length;

var english = false;

// Toggle
document.getElementById("toggle-button").addEventListener("click", trocarLingua);

function trocarLingua () {
    console.log("TrocarLíngua!");


    if (english == false) {
        
        console.log("Ingles == false");

        
        // Setar para Inglês
        english = true;
        // Setar toggle
        document.getElementById("toggle-button").style.transform = 'translateX(20px)';

        // Setar todas as tipografias em PT para ocultar
        for (let i = 0; i <= quantidadeElementosPT; i++) {

            console.log("Ocultando PT");

            document.getElementsByClassName("pt")[i].style.display = 'none';
            document.getElementsByClassName("en")[i].style.display = 'block';

        }
    
    } else {

        console.log("Ingles == true");

        // Setar para Português
        english = false;
        // Setar toggle
        document.getElementById("toggle-button").style.transform = 'translateX(0px)';

        // Setar todas as tipografias em EN para ocultar
        for (let i = 0; i <= quantidadeElementosEN; i++) {

            document.getElementsByClassName("en")[i].style.display = 'none';
            document.getElementsByClassName("pt")[i].style.display = 'block';

        }

    }
    
}