//Declaracoes e Funcoes:
let listaNumerosSorteados = [];
let tentativas = 1;
let quantidadeNumeros= 10;
let mensagemInicial = ('Tente adivinhar o número secreto entre 1 e '+quantidadeNumeros)

function exibirTextoNaTela(tag,texto) {

   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
    
function limparCampo() {

    chute = document.querySelector('input').value = '';
}

function verificarChute() {

    console.log("Um chute foi dado")
    let chute = document.querySelector('input').value;
    console.log(chute);

    if (chute == numeroSecreto){
        let mensagemTentativas = "Parabens por encontrar o número secreto em "+tentativas+" tentativas";
        document.getElementById("reiniciar").removeAttribute("disabled");
        if (tentativas == 1){
            exibirTextoNaTela("h1","Você venceu o Jogo");
            exibirTextoNaTela("p","Parabens por encontrar o número secreto em uma unica tentativa!");        
        }
        if (tentativas > 1){
            exibirTextoNaTela("h1","Você venceu o Jogo");
            exibirTextoNaTela("p",mensagemTentativas)
        }
    }
    if (chute > numeroSecreto){
        exibirTextoNaTela("p","O numero secreto é menor");
        tentativas++;
        limparCampo();
    }
    if (chute < numeroSecreto){
        exibirTextoNaTela("p","O numero secreto é maior");
        tentativas++;
        limparCampo();
    }
}

function exibirTextoInicial() {

    exibirTextoNaTela('h1','Jogo do Número Secreto:');
    exibirTextoNaTela('p',mensagemInicial);
    
}



function reiniciarJogo(){

    console.log("Jogo foi Reiniciado")
    limparCampo();
    numeroSecreto = gerarNumero();
    console.log("Numero secreto é: " + numeroSecreto);
    exibirTextoInicial();  
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function gerarNumero() {
    let numeroEscolhido = parseInt (Math.random () *quantidadeNumeros) + 1;

    if(listaNumerosSorteados.length == quantidadeNumeros){
        listaNumerosSorteados = []
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

//Fim das Declaracoes e Funcoes

let numeroSecreto = gerarNumero();
exibirTextoInicial();
console.log("Numero secreto é: " + numeroSecreto);
    


