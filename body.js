//EM CONSTRUCAO


/*narrativaArtista_1 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}*/


// Objeto artistas

// loop em cada um para gerar o objeto

i = 1;
var id = 'id' + i;

artistas = {
    id : [['narrativaArtista_' + i],[en]]
}

iD_artistaSelecionado;



//os dados devem ser lidos antes!

//pt
idArtista

function contrutorParagrafos() {

    quantidadeParagrafosPT = (narrativaArtista_ + iD_artistaSelecionado).pt.lenght; // Tamanho do array [p1, p2, p3]
    quantidadeParagrafosEN = (narrativaArtista_ + iD_artistaSelecionado).en.lenght; // Tamanho do array [p1, p2, p3]

    var innerContent;

    for (let p = 1; p <= quantidadeParagrafosPT + quantidadeParagrafosEN; p++) {

        if (narrativaArtista_ + iD_artistaSelecionado.pt[p]) { // Se existe o nó, vai construir
            innerContent = (narrativaArtista_ + i).pt[p];
                
            document.writeln('<p class="pt">' + innerContent + '</p>')
        }

        if (narrativaArtista_ + iD_artistaSelecionado.en[p]) {
            innerContent = (narrativaArtista_ + i).en[p]
        
            document.writeln('<p class="en">' + innerContent + '</p>')
        }

    }

}


// dado --> narrativaArtista_xx.pt[0] || narrativaArtista_xx.en[0]

function construtorDivArtista(idArtista) {
    idArtista = idArtista;
}


// NARRATIVAS POÉTICAS

narrativaArtista_1 = {
    pt : [ 
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", 
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", 
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_2 = {
    pt : [ 
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", 
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", 
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_4 = {
    pt : [ 
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", 
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", 
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_3 = {
    pt : [ 
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", 
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", 
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_4 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_5 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_6 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", 
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_7 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_8 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_9 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_10 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_11 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_12 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_13 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_14 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_15 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_16 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_17 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_18 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_19 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_20 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_21 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_22 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_23 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_24 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_25 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_26 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_28 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_29 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_30 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_31 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_32 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_33 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_34 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_35 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_36 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_37 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_38= {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_39 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_40 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.", "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_41 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_42 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_43 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_44 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_45 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_46 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_47 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_48 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_49 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_50 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
}
narrativaArtista_51 = {
    pt : [
        "Texto PT Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi."],
    en : [
        "Texto EN Paragrafo 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi.",
        "Paragrafo 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor, dicta saepe quaerat reiciendis accusamus illum repellendus dolores ratione sequi"],
}