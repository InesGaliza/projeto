function SeeMore(id) {

    if (document.getElementById(id).style.height == "0px" || document.getElementById(id).style.height == "") {
        document.getElementById(id).style.height = "100%";
        if (window.matchMedia("(max-width: 1099px)").matches) {
            document.getElementById(id).style.height = "100%";
        }
        if (window.matchMedia("(max-width: 700px)").matches) {
            document.getElementById(id).style.height = "100%";
        }
        if (window.matchMedia("(max-width: 500px)").matches) {
            document.getElementById(id).style.height = "100%";
        }
    } else {
        document.getElementById(id).style.height = "0px";
    }
}

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick//


//DECIDI UTILIZAR O JAVASCRIPT PARA CRIAR UM BOTAO PARA ABRIR E FECHAR//

//SE O UTILIZADOR MUDAR O TAMANHO DO ECRA ENQUANTO O GRADX ESTÁ ABERTO //

//utilizei a function SeeMore, utilizando o id do button como parametro. O "if" verifica a propriedade display do elemento com "id" que recebeu como parametro//
//ou seja//
//se tiver display = none, ao clicar no botton, a function é ativada, e o display para a ser = block//
//se tiver display = block, ao clicar no botton, a function é ativada, e o display para a ser = none//


//id as argument//
//https://stackoverflow.com/questions/66005138/how-to-pass-id-as-argument-in-javascript-function//
