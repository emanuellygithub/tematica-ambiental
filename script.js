const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dessas seguintes afirmações descreve corretamente uma característica das energias renováveis?"

            {
                texto: "Aproveitam recursos naturais como o sol e vento, que se renovam naturalmente."  
                ",
                afirmacao: "voce assinalou essa por saber as caracteristicas das fontes renováveis "
            },
            {
                texto: "Utilizam fontes como o calor da Terra e movimentos da marés, que são constantemente regenerados." 
                ",
                afirmacao: "Voce acredita que o calor da terra e movimerntos da maré se regeneram"
            }
        ]
    },
    {
        enunciado: "Sobre as características das energias não renováveis, qual das seguintes afirmações é correta?"
        ",
        alternativas: [
            {
                texto: "Recursos como petróleo e carvão são limitados e sua extração reduz a quantidade disponível, pois esses recursos não se regeneram rapidamente."
                ",
                afirmacao: "voce conhece as fontes não renováveis e sabe que não se regeneram"
            },
            {
                texto: "Fontes de energia como gás natural e urânio também são finitas e formam-se ao longo de milhões de anos, tornando-se esgotáveis com o uso contínuo.
                ",
                afirmacao: "voce descobriu que o gás natural e uranio se tornam esgotáveis"
            }
        ]
    },
    {
        enunciado: "Quais dos seguintes benefícios são associados ao uso de energias renováveis?"
        ",
        alternativas: [
            {
                texto: "Redução das emissões de gases de efeito estufa e diminuição da poluição do ar.",
                
                afirmacao: "Voce pesquisou e chegou a essa conclusão"
            },
            {
                texto: "Aumento da segurança energética e criação de novas oportunidades de emprego em tecnologias sustentáveis."
                ",
                afirmacao: "voce acredita que com essa redução há mais segurança e novos empregos"
            }
        ]
    },
    {
        enunciado: "Por que precisamos de energia?"
        ",
        alternativas: [
            {
                texto: "Para acender a luz, preparar nossas refeições e nos transportar de carro até a escola."
                ",
                afirmacao: "voce sabe que sem energia não pode realizar funções do dia a dia."
            },
            {
                texto: "A energia é necessária para a manutenção da vida. Todos os organismos vivos que existem no planeta precisam buscar energia de alguma forma para sobreviverem.
                ",
                afirmacao: "voce acredita que a energia é importante para a vida terrestre e aquatica"
        ]
    },
    {
        enunciado: "Qual a diferença entre Matriz elétrica e Matriz energética?"
        ",
        alternativas: [
            {
                texto: "A matriz energética representa o conjunto de fontes de energia utilizadas para movimentar os carros, preparar a comida no fogão e gerar eletricidade. a matriz elétrica é formada pelo conjunto de fontes utilizadas apenas para a geração de energia elétrica. 
                ",
                afirmacao: "voce sabe a diferença entre a matriz energética"
            },
            {
                texto: "A matriz energética representa o conjunto de fontes de energia. A matriz elétrica é formada pelo conjunto de de fontes para a geração de energia elétrica
                ",
                afirmacao: "voce chegou a essa conclusão apos sua pesquisa. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
