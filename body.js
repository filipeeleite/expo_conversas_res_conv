//EM CONSTRUCAO

/*
narrativa = { artista_1 : { lang : [paragraph1, paragraph2, ... ] } }
artista_1 -> 1 a 51 (iD)
lang - > pt, en

narrativa.id_1.pt[indexParagrafo]
*/

// loop em cada um para gerar o objeto
function construtorDivArtista() {

    quantidadeParagrafosPT = narrativa['artista_' + iD_artistaSelecionado].pt.lenght; // [p1, p2, p3]
    quantidadeParagrafosEN = narrativa['artista_' + iD_artistaSelecionado].en.lenght; // [p1, p2, p3]




    var innerContent;
    
    for (let p = 1; p <= quantidadeParagrafosPT + quantidadeParagrafosEN; p++) {

        if (narrativa['artista_' + iD_artistaSelecionado].pt[p]) { // Se existe o nó, vai construir
            innerContent = narrativa['artista_' + iD_artistaSelecionado].pt[p];
                
            document.writeln('<p class="pt">' + innerContent + '</p>')
        }

        if (narrativa['artista_' + iD_artistaSelecionado].en[p]) { // Se existe o nó, vai construir
            innerContent = narrativa['artista_' + iD_artistaSelecionado].en[p];
        
            document.writeln('<p class="en">' + innerContent + '</p>')
        }
    }

}

function constructSection() {

    // 1) Imagem do artista
    srcImg = 'images/avatars/artista_' + iD_artistaSelecionado + '.jpg';
    console.log("Construindo :: src Carregado: " + srcImg);

    document.writeln('<img id="imgArtista_' + iD_artistaSelecionado + '" src="' + srcImg + '"></img>');
    
    // 2.pt) Parágrafos
    i = 1;
    //while (contagem <= quantidadeParagrafosPT) {
    //document.writeln('<p class="pt">' + innerContent + '</p>');
    //contagem = contagem++;
    //}

    // 2.en) Paragrafos
    i = 1;
    //while (contagem <= quantidadeParagrafosEN) {
    //    document.writeln('<p class="EN">' + innerContent + '</p>');
    //    contagem = contagem++;
    //}
}