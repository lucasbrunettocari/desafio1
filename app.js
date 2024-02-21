
let qtdNumero = 1;
function sortear(){
    qtdNumero  = parseInt(document.getElementById('quantidade').value);
    //console.log(`qtd ${qtdNumero}`);
    let de  = parseInt(document.getElementById ('de').value);
    let valida = qtdNumero;
    let ate  = parseInt(document.getElementById ('ate').value);  
    let sorteados = [];

    if (de >= ate){

        console.log(`de ${de}`);
        console.log(`ate ${ate}`);
        alert('o numero inicial deve ser menor que o final');

    }else{


        if (valida <= (ate - de)){
           while (qtdNumero >= 1){
        
                let numero = numAleatorio(de , ate);
                if (sorteados.includes(numero)== false){
                    sorteados.push(numero);
                    //console.log(sorteados);
                    qtdNumero --;
                }
            }
        }else{
            alert ("intervalo insuficiente para a quantidade digitda");
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alteraStatusBotao();

}

function numAleatorio (min , max){
    return   Math.floor(Math.random() * (max - min + 1 )) + min; //bibliote pronta
}
    
function alteraStatusBotao(){
   //console.log("esta entrandoaqui? 1 ");
   let botaoReset  = document.getElementById('btn-reiniciar');

    if (botaoReset.classList.contains('container__botao-desabilitado')){
        botaoReset.classList.remove('container__botao-desabilitado');
        botaoReset.classList.add('container__botao');
      //console.log("esta entrandoaqui? 2 ");
      // o certo é certo o errado é errado

    } else {
        botaoReset.classList.remove('container__botao');
        botaoReset.classList.add('container__botao-desabilitado');
       console.log("esta entrandoaqui? 3 ");
    }


}



function reiniciar(){
    document.getElementById ('quantidade').value = " ";
    document.getElementById ('ate').value = " ";
    document.getElementById ('de').value = " ";
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alteraStatusBotao();
}





