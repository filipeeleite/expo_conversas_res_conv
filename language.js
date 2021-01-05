console.log("language.js loaded!");

var quantidadeElementosPT = document.getElementsByClassName("pt").length;
var quantidadeElementosEN = document.getElementsByClassName("en").length;

var english = false;

document.getElementById("pSwitchLang").addEventListener("click", trocarLingua);
function trocarLingua () {
    console.log("TrocarLíngua!");


    if (english == false) {
        
        console.log("Ingles == false");

        // Setar para Inglês
        english = true;
        // Setar rótulo
        document.getElementById("pSwitchLang").innerHTML = 'English - EN';


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
        // Setar rótulo
        document.getElementById("pSwitchLang").innerHTML = 'Português - PT';

        // Setar todas as tipografias em EN para ocultar
        for (let i = 0; i <= quantidadeElementosEN; i++) {

            document.getElementsByClassName("en")[i].style.display = 'none';
            document.getElementsByClassName("pt")[i].style.display = 'block';

        }

    }
    
}