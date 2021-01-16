/*
narrativa = { artista_1 : { lang : [paragraph1, paragraph2, ... ] } }
artista_1 -> 1 a 51 (ID)
lang ------> pt, en

narrativa.id_1.pt[indexParagrafo]
*/

// Gerando cada div quando solicitado
function construtorDivArtista() {

    let id_artista = 1;

    // 0) Se ainda não existir o nó, vai construir
    while (id_artista <= 51) {

        // 1) <div> do artista
        divArtista = document.createElement("div");
        divArtista.setAttribute("id", 'artista_' + id_artista);


        // 2) Imagem do artista
        //var srcImg = 'images/avatars/artista_' + iD_artistaSelecionado + '.jpg';
        //console.log("Construindo :: src Carregado: " + srcImg);
        imgArtista = document.createElement("img");

        //<img id="imgArtista_51" src="" alt="">
        imgArtista.setAttribute("id", 'imgArtista_' + id_artista);
        //imgArtista.src =  "";// srcImg
        divArtista.appendChild(imgArtista);
        
        // 3) Parágrafos
        // Sempre PT vai ser a referência - EN mesma quantidade de parágrafos
        quantidadeParagrafosPT = narrativa['artista_' + id_artista].pt.length; // [p1, p2, p3]
        quantidadeParagrafosEN = narrativa['artista_' + id_artista].en.length; // [p1, p2, p3]

        //var innerContent; // O que vai ser impresso em cada <p>''</p>
        
        for (let p = 0; p < quantidadeParagrafosPT; p++) {

            if (narrativa['artista_' + id_artista].pt[p]) { // Se existe o nó, vai construir
                innerContent = narrativa['artista_' + id_artista].pt[p];

                paragraphTag = document.createElement("p");
                paragraphTag.setAttribute("class", "pt");
                paragraphTag.innerHTML = innerContent;

                divArtista.appendChild(paragraphTag);
            }

            if (narrativa['artista_' + id_artista].en[p]) { // Se existe o nó, vai construir
                innerContent = narrativa['artista_' + id_artista].en[p];

                paragraphTag = document.createElement("p");
                paragraphTag.setAttribute("class", "en");
                paragraphTag.innerHTML = innerContent;

                divArtista.appendChild(paragraphTag);
            }
        }
        console.log("fim")

        // 4) Bloco Extra (Se tiver)
        if (id_artista == 43) { // Selma Parreira
            divBottom = document.createElement("div");
            divBottom.setAttribute("class", "bottom-bar");
            divArtista.appendChild(divBottom);

            h3append = document.createElement("h3");
            h3append.setAttribute("class", "pt");
            h3append.innerHTML = "Escute o áudio da obra:";
            divBottom.appendChild(h3append);

            h3append = document.createElement("h3");
            h3append.setAttribute("class", "en");
            h3append.innerHTML = "Listen to the audio of the work";
            divBottom.appendChild(h3append);

            audioAppend = document.createElement("audio");
            audioAppend.setAttribute("controls", "");
            audioAppend.innerHTML = '<source src="content/Sleep Away.mp3" type="audio/mp3"><!--Versão .ogg--><source src="" type="audio/ogg"><!--Versão .ogg-->Seu navegador não suporta elemento de áudio. Compatível em Chrome 4.0, Explorer 9.0, Firefox 3.5, Safari 4.0, Opera 10.5;';
            divBottom.appendChild(audioAppend);

        }

/*
        <audio controls>
            <source src="content/Sleep Away.mp3" type="audio/mp3">
            <!--Versão .ogg-->
            <!--<source src="" type="audio/ogg"> Versão .ogg-->
        Seu navegador não suporta elemento de áudio. Compatível em Chrome 4.0, Explorer 9.0, Firefox 3.5, Safari 4.0, Opera 10.5;
        </audio>
    </div>
*/

        // 5) Construção de fato
        document.getElementsByClassName("sections")[0].appendChild(divArtista);


        id_artista++;

    }

}