let listaDeNumerosEscolhidos = [];
let limiteDeNumerosNaLista = 3;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

// Exibir na Tela
function exibitTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

// Limpar Campo
function LimparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

// Mensagem Inicial
function exibirMensagemInicial(){
    exibitTextoNaTela('h1', 'Jogo do número secreto');
    exibitTextoNaTela('p',  `Escolha um número entre 1 e ${limiteDeNumerosNaLista}`);
}
exibirMensagemInicial();

// Verificar Chute
function verificarChute(){
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto){
        let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
        let mensagenTentativa = `Parabens, você descobiu o numero com 
        ${tentativas} ${palavraTentativa}`;

        // Habilitar Reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');

        exibitTextoNaTela('h1', "Acertou");
        exibitTextoNaTela('p', mensagenTentativa);
    }else{
        if(chute > numeroSecreto){
            exibitTextoNaTela('p', "Numero é menor");
        }else{
            exibitTextoNaTela('p', "Numero é maior");
        }
    }
    tentativas++;
    LimparCampo();
}


// Gerar numero aleatorio
function gerarNumeroSecreto(){
    let numeroEscolhido= parseInt(Math.random() * limiteDeNumerosNaLista + 1);
    let quantidadeDeNumerosdaList = listaDeNumerosEscolhidos.length;

    // Apagar lista
    if(quantidadeDeNumerosdaList == limiteDeNumerosNaLista){
    listaDeNumerosEscolhidos = [];
    }

    // Verificar se o numero esta dentro da lista
    if(listaDeNumerosEscolhidos.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    }
    else{
        listaDeNumerosEscolhidos.push(numeroEscolhido);
        console.log(listaDeNumerosEscolhidos)
        return numeroEscolhido;
    }
}

// Reinicar Jogo
function reiniciar(){
    document.getElementById('reiniciar').setAttribute('disabled', SVGComponentTransferFunctionElement);
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    LimparCampo();
    exibirMensagemInicial();
}