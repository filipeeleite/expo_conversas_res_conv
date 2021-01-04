var artistaSelecionado = "";

/* Transformando  window url:...#artista em variável string "artista" */
var locationHashString = location.hash.substring(9);
var selecao = document.getElementById(locationHashString);
/* setando atributo selected na option referente */
var attSelected = document.createAttribute("selected");
attSelected.value = "selected";
selecao = selecao.setAttributeNode(attSelected)

/*trocar ao selecionar outro artista */
function trocaArtista() {
    /*document.write("Mudou!");*/
    console.log("Opção alterada!");
    artistaSelecionado = document.getElementById("selecao-artista").value;
    location.hash = artistaSelecionado;

    /* ocultar div aviso se acessou pelo index e mudou opcao */
    if (location.hash) {
        document.getElementById("aviso_index").style.display = 'none';
    }
}

/* ocultar div aviso se acessou pelo qr code de artista */
if (location.hash) {
    console.log("sumir!")
    document.getElementById("aviso_index").style.display = 'none';
}