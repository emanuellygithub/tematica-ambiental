const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dessas afirmações descreve corretamente uma característica das energias renováveis?."
        [    
            {
                texto: "Aproveitam recursos naturais como o sol e vento, que se renovam naturalmente."  
                
                afirmacao: "voce assinalou essa por saber as caracteristicas das fontes renováveis"
                           "As fontes que voce conhece por se renovarem naturalmente sao o sol e o vento"
            },
            {
                texto: "Utilizam fontes como o calor da Terra e movimentos da marés, que são constantemente regenerados." 
                
                afirmacao: "Voce acredita que o calor da terra e movimerntos da maré se regeneram"
                        "Voce pesquisou e chegou a conclusao dessa afirmaçao"
            }
        ]
    },

    {
        enunciado: "Sobre as características das energias não renováveis, qual das seguintes afirmações é correta?."
        
        alternativas: [
            {
                texto: "Recursos como petróleo e carvão são limitados e sua extração reduz a quantidade disponível, pois esses recursos não se regeneram rapidamente."
                
                afirmacao: "voce conhece as fontes não renováveis e sabe que não se regeneram"
                           "Voce fez uma pesquisa completa sobre fontes renováveis e não renováveis"
            },
            {
                texto: "Fontes de energia como gás natural e urânio também são finitas e formam-se ao longo de milhões de anos, tornando-se esgotáveis com o uso contínuo."
                
                afirmacao: "Voce descobriu que o gás natural e uranio se tornam esgotáveis"
                           "Voce descobriu apos ler o jornal do dia"
            }
        ]
    },
    {
        enunciado: "Quais dos seguintes benefícios são associados ao uso de energias renováveis?."
        
        alternativas: [
            {
                texto: "Redução das emissões de gases de efeito estufa e diminuição da poluição do ar.",
                
                afirmacao: "Voce pesquisou e chegou a essa conclusão"
                            "Voce fez uma pesquisa com o professor em sala"
            },
            {
                texto: "Aumento da segurança energética e criação de novas oportunidades de emprego em tecnologias sustentáveis."
                
                afirmacao: "voce acredita que com essa redução há mais segurança e novos empregos"
                          "com isso as oportunidades de emprego e segurança no trabalho aumentam"
            }
        ]
    },
    {
        enunciado: "Por que precisamos de energia?"
        
        alternativas: [
            {
                texto: "Para acender a luz, preparar nossas refeições e nos transportar de carro até a escola."
                
                afirmacao: "voce sabe que sem energia não pode realizar funções do dia a dia."
                           "sem energia nada seria possivel das atividades que realizamos no dia a dia"
            },
            {
                texto: "A energia é necessária para a manutenção da vida. Todos os organismos vivos que existem no planeta precisam buscar energia de alguma forma para sobreviverem"
                
                afirmacao: "voce acredita que a energia é importante para a vida terrestre e aquatica"
                           "a vida no planeta depende de energia"
            }
            ]
    },
    {
        enunciado: "Qual a diferença entre Matriz elétrica e Matriz energética?"
        
        alternativas: [
            {
                texto: "A matriz energética representa o conjunto de fontes de energia utilizadas para movimentar os carros, preparar a comida no fogão e gerar eletricidade. a matriz elétrica é formada pelo conjunto de fontes utilizadas apenas para a geração de energia elétrica. 
                
                afirmacao: "voce sabe a diferença entre a matriz energética"
                            "voce estudou sobre"
            },
            {
                texto: "A matriz energética representa o conjunto de fontes de energia. A matriz elétrica é formada pelo conjunto de de fontes para a geração de energia elétrica"
                
                afirmacao: "voce chegou a essa conclusão apos sua pesquisa."
                            "relatou a pesquisa no caderno"
            }
        ]
    },
];


