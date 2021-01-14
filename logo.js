console.log("animation loaded!");
/* LOGO ANIMATION */

function animacao() {
    return;

    var linha = document.getElementsByClassName("logo-linha");

    // [00,0s] Ponte 0
    linha[14].style.strokeDashoffset = 0;
    linha[15].style.strokeDashoffset = 0;
    // [01,0s] Ponte 1
    setTimeout( function(){ ponte1();}, 1000);
    function ponte1(){
        linha[16].style.strokeDashoffset = 0;
    }
    // [02,0s] Ponte 2
    setTimeout( function(){ ponte2();}, 2000);
    function ponte2(){
        linha[17].style.strokeDashoffset = 0;
        linha[18].style.strokeDashoffset = 0;

        linha[50].style.strokeDashoffset = 0;
        linha[47].style.strokeDashoffset = 0;
    }
    // [03,0s] Ponte 3
    setTimeout( function(){ ponte3();}, 3000);
    function ponte3(){
        linha[32].style.strokeDashoffset = 0;
        linha[35].style.strokeDashoffset = 0;
        linha[37].style.strokeDashoffset = 0;
        linha[56].style.strokeDashoffset = 0;
        linha[54].style.strokeDashoffset = 0;
        linha[30].style.strokeDashoffset = 0;
        linha[24].style.strokeDashoffset = 0;
        linha[22].style.strokeDashoffset = 0;
        linha[0].style.strokeDashoffset = 0;
        linha[2].style.strokeDashoffset = 0;
    }
    // [03,5s] Título 'CONVERSAS'
    setTimeout( function(){ conversasTitle();}, 3500);
    function conversasTitle(){
        document.getElementsByClassName("conversas")[0].style.opacity = 1;
    }
    // [04,0s] Ponte 4
    setTimeout( function(){ ponte4();}, 4000);
    function ponte4(){
        linha[3].style.strokeDashoffset = 0;
        linha[42].style.strokeDashoffset = 0;
        linha[27].style.strokeDashoffset = 0;
        linha[10].style.strokeDashoffset = 0;
        linha[1].style.strokeDashoffset = 0;
        linha[4].style.strokeDashoffset = 0;
        linha[7].style.strokeDashoffset = 0;
        linha[12].style.strokeDashoffset = 0;
        linha[19].style.strokeDashoffset = 0;
        linha[23].style.strokeDashoffset = 0;
        linha[26].style.strokeDashoffset = 0;
        linha[29].style.strokeDashoffset = 0;
        linha[31].style.strokeDashoffset = 0;
        linha[33].style.strokeDashoffset = 0;
        linha[34].style.strokeDashoffset = 0;
        linha[36].style.strokeDashoffset = 0;
        linha[38].style.strokeDashoffset = 0;
        linha[39].style.strokeDashoffset = 0;
        linha[40].style.strokeDashoffset = 0;
        linha[41].style.strokeDashoffset = 0;
        linha[43].style.strokeDashoffset = 0;
        linha[45].style.strokeDashoffset = 0;
        linha[48].style.strokeDashoffset = 0;
        linha[51].style.strokeDashoffset = 0;
        linha[52].style.strokeDashoffset = 0;
        linha[53].style.strokeDashoffset = 0;
        linha[55].style.strokeDashoffset = 0;
    }
    // [04,6s] 'resistência e convergência'
    setTimeout( function(){ resistenciaTitle();}, 4600);
    function resistenciaTitle(){

        document.getElementsByClassName("resistencia")[0].style.opacity = 1;
    }
    // [05,0s] Ponte 5 - última
    setTimeout( function(){ ponte5();}, 5000);
    function ponte5(){
        linha[8].style.strokeDashoffset = 0;
        linha[6].style.strokeDashoffset = 0;
        linha[5].style.strokeDashoffset = 0;
        linha[9].style.strokeDashoffset = 0;
        linha[11].style.strokeDashoffset = 0;
        linha[13].style.strokeDashoffset = 0;
        linha[25].style.strokeDashoffset = 0;
        linha[44].style.strokeDashoffset = 0;
        linha[28].style.strokeDashoffset = 0;
        linha[49].style.strokeDashoffset = 0;
        linha[20].style.strokeDashoffset = 0;
        linha[21].style.strokeDashoffset = 0;
        linha[46].style.strokeDashoffset = 0;
    }
}