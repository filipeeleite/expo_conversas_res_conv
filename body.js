//EM CONSTRUCAO

/*
narrativa = { artista_1 : { lang : [paragraph1, paragraph2, ... ] } }
artista_1 -> 1 a 51 (ID)
lang ------> pt, en

narrativa.id_1.pt[indexParagrafo]
*/

// loop em cada um para gerar o objeto
function construtorDivArtista() {

    // 1) Imagem do artista
    srcImg = 'images/avatars/artista_' + iD_artistaSelecionado + '.jpg';
    console.log("Construindo :: src Carregado: " + srcImg);


    imgArtista = document.createElement("img");
    imgArtista.src =  srcImg;

    document.getElementsByClassName("sections")[0].appendChild(imgArtista);

    //document.getElementsByClassName("sections")[0].writeIn('<img id="imgArtista_' + iD_artistaSelecionado + '" src="' + srcImg + '"></img>');
    console.log("writein img");

    quantidadeParagrafosPT = narrativa['artista_' + iD_artistaSelecionado].pt.lenght; // [p1, p2, p3]
    quantidadeParagrafosEN = narrativa['artista_' + iD_artistaSelecionado].en.lenght; // [p1, p2, p3]

    // 2) Parágrafos
    var innerContent; // O que vai ser impresso em cada <p>''</p>
    /*
    for (let p = 0; p < quantidadeParagrafosPT; p++) {

        if (narrativa['artista_' + iD_artistaSelecionado].pt[p]) { // Se existe o nó, vai construir
            innerContent = narrativa['artista_' + iD_artistaSelecionado].pt[p];
                
            document.getElementsByClassName("sections")[0].append('<p class="pt">' + innerContent + '</p>');
        }

        if (narrativa['artista_' + iD_artistaSelecionado].en[p]) { // Se existe o nó, vai construir
            innerContent = narrativa['artista_' + iD_artistaSelecionado].en[p];
        
            document.getElementsByClassName("sections")[0].append('<p class="en">' + innerContent + '</p>');
        }
    }*/

}