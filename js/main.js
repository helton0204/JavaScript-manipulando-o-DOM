/*
Data-attributes são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do 
JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu data-attribute. Essa funcionalidade 
é bem recente no mundo do desenvolvimento, sendo lançada na última versão do HTML(HTML5).
*/

const controles = document.querySelectorAll("[data-controle]"); //um data atribute do html é descrito entre []
const estatisticas = document.querySelectorAll("[data-estatistica]");
const robos = document.querySelectorAll(".robo");
const mudaRobo = document.querySelector("#muda-robo");

function manipulaDados(operacao, controle){
    input = controle.querySelector("[data-contador]");
    if(operacao == '+'){
        input.value = parseInt(input.value) + 1;
    }
    else{
        if(parseInt(input.value) > 0){
            input.value = parseInt(input.value) - 1;
        }
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach(elemento => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
}

function trocaRobo(){
    let i;
    for(i = 0; i < robos.length; i++){
        if(robos[i].classList.contains("ativo")){
            robos[i].classList.remove("ativo");
            break;
        }
    }
    if(i != robos.length -1){
        robos[i+1].classList.add("ativo");
    }
    else{
        robos[0].classList.add("ativo");
    }
    
}

controles.forEach(controle => {
    controle.addEventListener("click", (event) => {
        let sinal = event.target.dataset.controle; //dataset.controle controle é o nome do atributo do tipo data atribute, dataset.controle recebe o valor do atributo data-controle do html, que no caso é "+" ou "-"
        let elementoPai = event.target.parentNode;
        manipulaDados(sinal, elementoPai);

        if(elementoPai.querySelector("[data-contador]").value > 0){
            atualizaEstatisticas(event.target.dataset.peca);
        }
    });
});

mudaRobo.addEventListener("click", (event) => {
    event.preventDefault();
    trocaRobo();
});

