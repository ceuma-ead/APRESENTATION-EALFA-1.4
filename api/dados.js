const _prefixAssets = "./assets/";
const _prefixAssetsBackground = "../assets/";
const _prefixAssetsIcons = "./assets/icons/";
const _prefixUnidade = "./assets/unidade/"
const _prefixConfJS = "./conf/js/"
const _prefixConfCss = "./conf/css/"

/*
    Exemplos de uso
    FILTRAR PÁGINA = ( CTRL + F ) 
    -----------> pg[1]
    -----------> cm[inicio]

*/


/**
 * @type (Object)
*/


const api = [

    // PÁGINA 1 INICIAL 
    /*
        FILTRO
            ------> pg[1]
            ------> CM[inicio]
        AQUI ÉA PÁGINA DE INICIO AO CONTEUDO 

    */
    {
        "pagina": 1,
        "nome_page": `Início`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `       

                <!-- Container do texto animado -->
                <div id="text-container-capa">
                    <div class="animated-text">Imunologia Clínica</div>
                    <div id="underline"></div>
                    <div id="second-text">Imunodiagnósticos</div>
                    <button id="animated-button" onclick="iniciar()">Início</button>
                    <div id="second-text" class="text-light" style="font-size:1rem;margin-top:1rem;">Amanda Aliança</div>
                </div>

                <!-- Imagem animada -->
                <div id="animated-image"></div>

                <!-- Imagem -->
                <div id="image-capaOverlay"></div>
                <!-- Container do texto animado -->

            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "handTap":{
                "ativo":false,
            },
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "beforeend",
                "src": "./conf/js/inicial.js"
            }],
            "ferramentas": variantes_globais.Ferramentas([
                {
                    container: "icons-action--container",
                    Podcast: {
                        ativo: true
                    },
                    Videoaula: {
                        ativo: true
                    },
                    Ferramentas: {
                        ativo: true
                    },
                    FullScreen: {
                        ativo: true
                    }
                },
                {
                    container: "icons-action--container-mobile",

                    Download: {
                        ativo: true,
                        nome: "Baixar PDF"
                    },

                },
                {
                    container: "box-tools-inline",

                    Download: {
                        ativo: true,
                        nome: "Download"
                    },

                    close: {
                        ativo: true
                    }
                }
            ]),
            "cores": {
                // "sidebar": "red",
                "fundo": ":#00000000",
                // "icones": "rgb(0, 110, 201)"
                "imagemFundo": {
                    "ativar": true,
                    "Capa": "url(../assets/fundo.gif)",
                    "subCapa": "url(../assets/capaOverlay.png)",
                    "posicaoY": "bottom 1.8%",
                    "posicaoX": "left 0.5%",
                    "tamanho": "100%",
                }
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "configuracoes_gerais": {},
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca({
                logo: {
                    logo_img: `url(${_prefixAssetsBackground}logobranca1.png)`,
                }
            }),
            // Animação para Texto API
            // "animacao_texto": {
            //     "ativo": true,
            //     "animacoes": [
            //         {
            //             "animacoes_ativar":true,
            //             "animacao": 'animate__animated animate__fadeInDown animate__slow'
            //         }
            //     ]
            // },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": false,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    },

                ]
            },

        }
    },

    // PÁGINA 2 APRESENTACAO UNIDADE
    /*
        FILTRO
            ------> pg[2]
            ------> CM[APRESENTACAO UNIDADE]
        AQUI ÉA PÁGINA DE INTRODUÇÃO AO CONTEUDO 
        
    */
    {
        "pagina": 2,
        "nome_page": `Apresentação da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto  gap-2">
                            <p>Olá, estudante!</p>
    
                            <p>
                                Nesta unidade você aprenderá sobre Titulação e Sorologia, sobre Qualidade nos imunodiagnósticos e sobre os principais Imunoensaios. Esse aprendizado é crucial para a formação do estudante, pois capacita-o a realizar diagnósticos precisos e confiáveis, fundamentais para a detecção e monitoramento de doenças, além de garantir a qualidade e a eficácia dos imunodiagnósticos na prática clínica e na pesquisa biomédica. 
                            </p>
    
                            <p>
                                A competência a ser desenvolvida na unidade: Realizar, interpretar, emitir laudos e pareceres e responsabilizar-se tecnicamente por análises clínico-laboratoriais, incluindo os exames hematológicos, citológicos, citopatológicos e histoquímicos, biologia molecular, bem como análises toxicológicas, dentro dos padrões de controle de qualidade e normas de segurança, nos termos da legislação vigente. 
                            </p>

                            
    

                        </div> 
                
                     </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),

            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 3 APRESENTACAO UNIDADE - CONTINUACAO
    /*
        FILTRO
            ------> pg[3]
            ------> CM[APRESENTACAO UNIDADE CONTINUACAO]
        AQUI ÉA PÁGINA DE CONTINUACAO DA APRESENTACAO UNIDADE
        
    */
    {
        "pagina": 3,
        "nome_page": `Apresentação da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="objetivo-aprendizagem-elemento">
                                <div class="objetivo-aprendizagem-elemento--box">
                                    
                                    <img src="${_prefixAssetsIcons}target.png" class="_animacaoDeFleschaSurgindo" />
                                    <div class="objetivo-aprendizagem-elemento--img-title">
                                        <h1>Objetivos de aprendizagem</h1>
                                    </div>
                                    <ol class="list-group list-group-numbered  ">
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Compreender os princípios e procedimentos da titulação, incluindo a preparação e diluição de soluções.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Identificar e executar reações sorológicas, reconhecendo a importância das interações entre antígenos e anticorpos.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Aplicar conhecimentos de qualidade nos imunodiagnósticos, garantindo a precisão e a confiabilidade dos resultados laboratoriais.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                           <p>Dominar os principais imunoensaios utilizados na prática clínica e de pesquisa.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                           <p>Entender a relevância da validação de testes diagnósticos e os parâmetros envolvidos, como sensibilidade, especificidade, valores preditivos positivos e negativos.</p>
                                        </li>

                                    </ol>
                                </div>
                            </div>

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": "./conf/css/SaibaMais.css"
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },

            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 4 APRESENTACAO UNIDADE - CONTINUACAO
    /*
        FILTRO
            ------> pg[4]
            ------> CM[APRESENTACAO UNIDADE CONTINUACAO]
        AQUI ÉA PÁGINA DE CONTINUACAO DA APRESENTACAO UNIDADE
        
    */
    {
        "pagina": 4,
        "nome_page": `Apresentação da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="objetivo-aprendizagem-elemento">
                                <div class="objetivo-aprendizagem-elemento--box">
                                    
                                
                                    <ol class="list-group list-group-numbered " style="--list-start: 5;">
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Analisar a acurácia e a precisão dos testes laboratoriais para garantir a confiabilidade dos resultados.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Conhecer os métodos para aumentar a acurácia nos laboratórios clínicos, incluindo a calibração correta dos equipamentos e a participação em programas de controle de qualidade.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Familiarizar-se com os principais tipos de imunoensaios, suas técnicas e aplicações clínicas.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                           <p>Desenvolver habilidades para selecionar e utilizar os imunoensaios mais adequados para diferentes diagnósticos e pesquisas. </p>
                                        </li>
                                      

                                    </ol>
                                </div>
                            </div>

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": "./conf/css/SaibaMais.css"
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 5 Introdução
    /*
        FILTRO
            ------> pg[5]
            ------> CM[Introdução]
        AQUI ÉA PÁGINA DE Introdução
        
    */
    {
        "pagina": 5,
        "nome_page": `Introdução`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container">
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">

                                        <h4 style="color:#011c41; text-align:left;">Introdução</h4>
                                        <p>A Imunologia é uma disciplina dentro das ciências biológicas que investiga o sistema de defesa humano, incluindo as células e as moléculas participantes desse processo. Algumas dessas células e moléculas do sistema imune, uma vez produzidas, permanecerão para sempre no organismo que a produziu e, por essa razão, podem ser utilizadas no diagnóstico de doenças, principalmente das doenças autoimunes e infectocontagiosas (RIBEIRO, 2019).</p>
                                        <p>O setor de imunologia de um laboratório clínico é um dos mais movimentados, pois é nele que são feitos diferentes exames, como testes de gravidez, pesquisas de anticorpos para doenças como Hepatite B e HIV (vírus da imunodeficiência humana), além da busca por anticorpos importantes em doenças autoimunes, como o fator reumatoide (FR) (RIBEIRO, 2019). </p>
                
                                    </div>

                                </div>
                            </div>
                            

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 6 Soro
    /*
        FILTRO
            ------> pg[6]
            ------> CM[Soro]
        AQUI ÉA PÁGINA DE Soro
        
    */
    {
        "pagina": 6,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container">
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">

                                        <h4 style="color:#011c41; text-align:left;">Soro</h4>
                                        <p>O sangue é o principal líquido corporal, circulando por todo o organismo e desempenhando diversas funções vitais. Além de transportar oxigênio dos pulmões para os tecidos e dióxido de carbono dos tecidos para os pulmões, o sangue também é essencial para o transporte de nutrientes, hormônios, resíduos metabólicos e células do sistema imunológico.</p>
                
                                    </div>

                                </div>

                                   <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-8 mt-2">
                                        <p>No contexto da imunologia, o sangue desempenha um papel fundamental na resposta imune, pois é o principal meio de transporte e distribuição de anticorpos pelo organismo. Um dos principais efetores do sistema de defesa humano são os anticorpos (Acs), os quais são produzidos de forma específica contra um antígeno (Ag) e auxiliam na neutralização de patógenos (RIBEIRO, 2019). Os anticorpos são proteínas produzidas pelas células do sistema imunológico em resposta à presença de antígenos, como bactérias, vírus e outros invasores.</p>
                                    </div>

                                    <div class="col-md-4 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}respostaImune.png" class="img-fluid" alt="Imagem: Programa de Alimentação do Trabalhador" />
                                        <div class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Fonte: Canva</div>    

                                    </div>

                                </div>
                            </div>
                            

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 7 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[7]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE Soro - CONTINUACAO
        
    */
    {
        "pagina": 7,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container">
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">
                                        <p>Os soros são produtos derivados do sangue que contêm uma variedade de anticorpos específicos. Existem diferentes tipos de soros com aplicações terapêuticas, como os soros policlonais e os soros monoclonais.</p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <button onclick="customModale325dffcbe1b6e46excjweuweixjwe9ie() "  class="buttonExplorar  mt-2 shadow" style="--clr: #0f407a;font-size:1rem;border-radius:0;">
                                                    <span class="buttonExplorar__icon-wrapper">
                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg"
                                                        width="10"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                        

                                                        <svg
                                                        
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        width="10"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                    </span>
                                                    Clique aqui para entender sobre os Soros policlonais
                                                </button>
                                            </div>

                                             <div class="col-md-6">
                                                <button onclick="customModale325dfwe23i23908wdqwsdjwiweuwodxjs()"  class="buttonExplorar mt-2 shadow" style="--clr: #ab0b0a;font-size:1rem;border-radius:0;">
                                                    <span class="buttonExplorar__icon-wrapper">
                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg"
                                                        width="10"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>

                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        width="10"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                    </span>
                                                     Clique aqui para entender sobre os Soros monoclonais
                                                </button>
                                            </div>

                                            
                                        </div>
                                    </div>
                                    

                                </div>

                                   <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12 mt-2">
                                        <p>Os soros têm a vantagem de poderem ser utilizados imediatamente e em grande quantidade, proporcionando benefícios aos pacientes. No entanto, apresentam desvantagens, como a resposta imune potencializada não duradoura e o risco de reações adversas, como hipersensibilidade e inflamação sistêmica.</p>
                                    </div>

                                </div>
                            </div>
                            

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 8 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[8]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE Soro - CONTINUACAO
        
    */
    {
        "pagina": 8,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-12">
                                        <h4 style="color:#011c41; text-align:left;">Produção de soro policlonal </h4>
                                        <p>A produção de soros monoclonais e policlonais envolve processos distintos que resultam em produtos com características específicas. Vamos descrever brevemente cada um desses processos envolvidos na <span style="color:#011c41;font-weight:999;">produção de soro policlonal: </span></p>
                                                  

                                        <div class="container">

                                            <div class="row">
                                                <div class="container-step">
                                                    <div class="step _sugirEsquerdaAndando_1" style="--color-card-step:#2164b4;">
                                                        <h3>1. Imunização:</h3>
                                                        <p>Animais, como coelhos, ratos ou cabras, são inoculados com o antígeno de interesse para estimular uma resposta imune.</p>
                                                    </div>
                                                    <div class="step _sugirEsquerdaAndando_2" style="--color-card-step:#0f407a;">
                                                        <h3>2. Coleta de soro:</h3>
                                                        <p>Após um período de tempo, o sangue do animal é coletado e o soro, que contém uma variedade de anticorpos produzidos em resposta ao antígeno, é separado.</p>
                                                    </div>
                                                    <div class="step _sugirEsquerdaAndando_3" style="--color-card-step:#011c41;">
                                                        <h3>3. Purificação:</h3>
                                                        <p>O soro é purificado para remover outras proteínas e componentes, resultando em um soro policlonal contendo uma mistura de anticorpos específicos para diferentes epítopos do antígeno.</p>
                                                    </div>
                                                </div>
                                            
                                            </div>

                                        
                                        </div>

                                    </div>
                                    

                                </div>

                            </div>
                            

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 9 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[9]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE Soro - CONTINUACAO
        
    */
    {
        "pagina": 9,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-12">
                                        <h4 style="color:#011c41; text-align:left;">Produção de soro monoclonal </h4>
                                        <p>gora, vamos descrever brevemente cada um desses processos envolvidos na <span style="color:#011c41;font-weight:999;">produção de soros monoclonais:</span></p>
                                                  

                                        <div class="container">

                                            <div class="row">
                                                <div class="container-step">
                                                    <div class="step _sugirEsquerdaAndando_1" style="--color-card-step:#2164b4;">
                                                        <h3>1. Imunização e fusão celular: </h3>
                                                        <p>Camundongos são imunizados com o antígeno de interesse. Células B produtoras de anticorpos são isoladas do baço do camundongo e fundidas com células de mieloma para criar hibridomas.</p>
                                                    </div>
                                                    <div class="step _sugirEsquerdaAndando_2" style="--color-card-step:#0f407a;">
                                                        <h3>2. Seleção de hibridomas: </h3>
                                                        <p>Os hibridomas são selecionados com base na produção de anticorpos específicos para o epítopo desejado.</p>
                                                    </div>
                                                    <div class="step _sugirEsquerdaAndando_3" style="--color-card-step:#011c41;">
                                                        <h3>3. Clonagem e cultivo:</h3>
                                                        <p>Os hibridomas selecionados são clonados e cultivados para produzir uma linhagem celular pura que secreta um único tipo de anticorpo monoclonal específico para o antígeno.</p>
                                                    </div>
                                                </div>
                                            
                                            </div>

                                        
                                        </div>

                                    </div>
                                    

                                </div>

                            </div>
                            

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 10 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[10]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE Soro - CONTINUACAO
        
    */
    {
        "pagina": 10,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container">
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">

                                        <p>Observe, na imagem abaixo, a produção de anticorpos monoclonais (mAbs) em hibridomas:</p>
                                          
                                           <div class="d-flex gap-2 justify-content-center container-button">
                                             <button  class="buttonExplorar mt-2 shadow" style="--clr: #0f407a;" onclick="abrirZoomist('${_prefixUnidade}imgProducaoAnticorpos.png')">
                                                    <span class="buttonExplorar__icon-wrapper">
                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg"
                                                        width="10"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                        

                                                        <svg
                                                        
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        width="10"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                    </span>
                                                    Veja aqui a imagem da produção de anticorpos
                                                </button>
                                                
                                                <!--
                                                <button  class="buttonExplorar buttonAnticorposMonoclonais mt-2 shadow bg-success justify-content-center" style="width:100px;" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<div class='d-flex align-items-center gap-1'>Resumo da imagen <p class='text-success'>Eva</p></div>">
                                                    
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
                                                </button>
                                                -->
                                          </div>


                                        <p>A reação sorológica é um processo fundamental na imunologia que envolve a interação entre antígenos e anticorpos. Os antígenos (Ags) são moléculas capazes de estimular a produção de anticorpos específicos pelo sistema imunológico. Essa interação ocorre por meio de ligações não covalentes entre os Ags e os anticorpos, resultando em uma ligação reversível.</p>
                                        <p>Durante a reação sorológica, os anticorpos reconhecem e se ligam aos antígenos de forma específica, desencadeando uma série de eventos imunológicos. Essas interações podem levar ao aumento da ativação do sistema complemento, à potencialização da atividade de células como os natural killers e os granulócitos, e à opsonização, que facilita a fagocitose de patógenos pelos macrófagos.</p>
                
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "tesseract": {
                "ativo": true,
                "ocr":
                    [
                        {
                            // "_class": ".img1",
                            "_btn": '.buttonAnticorposMonoclonais',
                            "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
                            "prompt": "Faça o resumo dessas fórmulas.",
                            "idioma": "por",
                            "buffer": () => {
                                const x = [8, 8];
                                return x[0] >> x[1]
                            },
                        }
                    ]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 11 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[11]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE Soro - CONTINUACAO
        
    */
    {
        "pagina": 11,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">
                                    <div class="vision-info-box">
                                        <img src="${_prefixAssetsIcons}lampada.png" alt="Ícone de lâmpada" class="icon _piscar">
                                        <div class="text-content">
                                            <h3>É importante saber que...</h3>
                                            <p>A ligação entre os antígenos e os anticorpos durante a reação sorológica é forte e estável, o que garante a eficácia da resposta imune contra os invasores. No entanto, é crucial que essa interação seja específica para evitar reações cruzadas indesejadas, como podem ser observadas em doenças como a doença de Chagas e a leishmaniose visceral, ou entre diferentes flavivírus, como dengue, Zika e Chikungunya, devido à semelhança estrutural entre esses patógenos.</p>
                                        </div>
                                    </div>
                             </div>

                        </div>
                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            // "tesseract": {
            //     "ativo":false,
            //     "ocr":
            //         [
            //             {
            //                 // "_class": ".img1",
            //                 "_btn": ['.buttonAnticorposMonoclonais'],
            //                 "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "Faça o resumo dessas fórmulas.",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 12 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[12]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE Soro - CONTINUACAO
        
    */
    {
        "pagina": 12,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">
                        
                                

                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-8">
                                        <h4 style="color:#011c41 !important; text-align:left; ">Titulação</h4>
                                        <p>A titulação é um processo utilizado em laboratórios para determinar a concentração de uma substância em uma solução, geralmente um analito em uma amostra. Esse método envolve a adição gradual de um reagente de concentração conhecida (titulante) à solução contendo o analito até que ocorra uma reação química específica, indicando o ponto final da titulação.</p>
                                    </div>

                                    <div class="col-md-4  text-center position-relative  ">
                                        <img src="${_prefixUnidade}titulacaoimg.png " class="img-fluid _desaparecer"
                                            alt="Imagem: Programa de Alimentação do Trabalhador" />
                                        <div class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Fonte: Canva
                                        </div>

                                    </div>

                                </div>

                                 <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">
                    
                                  
                                        <p>Na área da imunologia e sorologia, a titulação é frequentemente utilizada para quantificar a quantidade de anticorpos presentes em uma amostra de soro. Muitos testes sorológicos expressam seus resultados na forma de título, que representa a maior diluição em que ainda é possível observar uma reação positiva entre os anticorpos presentes no soro e um antígeno específico.</p>
                                        <p>Por exemplo, no teste VDRL <i>(Venereal Disease Research Laboratory)</i>, o título é determinado pela última diluição do soro que ainda apresenta reatividade com o antígeno utilizado no teste. Quanto maior o título, maior a quantidade de anticorpos presentes na amostra e, potencialmente, maior a resposta imune do paciente contra o antígeno em questão. Além disso, a titulação também pode ser utilizada em outras áreas da química e biologia, como na determinação de concentrações de ácidos e bases, na análise de metais em soluções, entre outros. </p>
                                    </div>

                                </div>

                                

                            </div>

                        </div>
                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            // "tesseract": {
            //     "ativo":false,
            //     "ocr":
            //         [
            //             {
            //                 // "_class": ".img1",
            //                 "_btn": ['.buttonAnticorposMonoclonais'],
            //                 "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "Faça o resumo dessas fórmulas.",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 13 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[13]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE Soro - CONTINUACAO
        
    */
    {
        "pagina": 12,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                       <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container">
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">

                                        <h4 style="color:#011c41; text-align:left;"><i>Você sabe como é feita uma titulação?</i></h4>
                                        <p>Para realizar uma titulação, é essencial preparar corretamente a diluição da amostra antes de iniciar o processo de titulação. Para fazer uma diluição, deve-se misturar o líquido de interesse com uma determinada quantidade de solvente, geralmente água ou salina, até obter a concentração desejada. </p>
                
                                    </div>

                                </div>

                                   <div class="row ">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-8 mt-2">
                                        <p>O fator de diluição é o indicador de quanto o seu material será diluído. Por exemplo, se você quiser diluir um reagente na proporção 1:10 (uma parte de soluto em dez), você deverá colocar uma parte do seu reagente e nove partes do solvente. Observe, na imagem ao lado, um exemplo de uma diluição 1:10 (ou 1/10). É importante sempre homogeneizar muito bem as diluições para que a concentração final seja real.</p>
                                    </div>

                                    <div class="col-md-4 text-center position-relative  overflow-hidden  " >
                                        <img src="${_prefixUnidade}soroSoluto.png" class="img-fluid solutoesolvente _desaparecer " alt="Imagem: Programa de Alimentação do Trabalhador" />
                                        <div class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Imagem: Exemplo de uma diluição 1:10 .Fonte: Elaborado pela autora (2024).</p>    

                                    </div>

                                </div>
                            </div>
                            

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            // "tesseract": {
            //     "ativo": true,
            //     "ocr":
            //         [
            //             {
            //                 "_class": ".solutoesolvente",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 14 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[14]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE Soro - CONTINUACAO
        
    */
    {
        "pagina": 14,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                       <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">



                            <div class="container">
                                <div class="row">
 
                        
                                    <div class="col d-flex flex-column gap-4">
                                    
                                        <div class="col-md-12">
                                               <h4 style="color:#011c41; text-align:left;">Vamos aprender como preparar uma diluição?</h4>
                                                <button  onclick="abrirZoomist('${_prefixUnidade}diluicao.png')" class="buttonExplorar _sugirEsquerdaAndando_1 mt-2 shadow" style="--clr: #ab0b0a;font-size:1rem;border-radius:0;">
                                                    <span class="buttonExplorar__icon-wrapper">
                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg"
                                                        width="10"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                        

                                                        <svg
                                                        
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        width="10"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                    </span>
                                                     Clique aqui para entender como preparar uma diluição.
                                                </button>
                                            </div>

                                             <div class="col-md-12">
                                                <h4 style="color:#011c41; text-align:left;">Agora, vamos aprender como calcular o fator de diluição?</h4>
                                                <button onclick="abrirZoomist('${_prefixUnidade}calculoDiluicao.png')" class="buttonExplorar _sugirEsquerdaAndando_2  mt-2 shadow"  style="--clr: #004aad;font-size:1rem;border-radius:0;">
                                                    <span class="buttonExplorar__icon-wrapper">
                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg"
                                                        width="10"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>

                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        width="10"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                    </span>
                                                     Clique aqui para entender como calcular o fator de diluição.
                                                </button>
                                            </div>
                                    </div>    

                                       
                                   
                                    

                                </div>

                            </div>
                            

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap": { "ativo": false },
            // "tesseract": {
            //     "ativo": true,
            //     "ocr":
            //         [
            //             {
            //                 "_class": ".solutoesolvente",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 15 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[15]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE INTRODUÇÃO AO CONTEUDO 
        
    */
    {
        "pagina": 15,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto  gap-2">
     
    
                            <p>
                                Uma diluição seriada é um processo no qual uma solução inicial é diluída várias vezes em uma sequência de etapas, mantendo um fator de diluição constante em cada etapa. Isso significa que uma alíquota da solução original é retirada e diluída em um volume conhecido de diluente, e esse processo é repetido várias vezes para obter diferentes concentrações da substância de interesse.

                            </p>
    
                            <p>
                                Por exemplo, em uma diluição seriada de fator 2, a solução inicial é diluída pela metade a cada etapa. Se uma alíquota da solução original for diluída em um volume igual de diluente, a concentração da solução resultante será a metade da concentração da solução original. Esse processo pode ser repetido várias vezes para obter uma série de soluções com concentrações decrescentes.
                            </p>

                            <p>
                                A diluição seriada é comumente utilizada em laboratórios para preparar padrões de calibração, curvas de titulação ou para reduzir a concentração de uma amostra a níveis detectáveis em ensaios analíticos. É importante seguir um protocolo preciso e realizar as diluições de forma cuidadosa para garantir a exatidão e reprodutibilidade dos resultados.
                            </p>

                            
    

                        </div> 
                
                     </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": [{
                "indice": "all", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow 
                `
            }],
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 16 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[16]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE INTRODUÇÃO AO CONTEUDO 
        
    */
    {
        "pagina": 16,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                      <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                      
                                       <div class="cards-icons ">
                                         <p>Observe abaixo como fazer uma diluição seriada de fator 2 a partir de uma solução de azul de metileno (AzM) em água. Usar uma bateria de 5 tubos. O volume do tubo inicial deve ser 8 mL e o V final em cada tubo de ser 4 mL. </p>
                                            <a href="#" class="socialContainer px-2 buttonsocialContainer1 _sugirEsquerdaAndando_1 containerOne" style="--card-color-icons:#f88209;">                      
                                                <strong> 1º Passo </strong>
                                            </a>

                                            <a href="#" class="socialContainer px-2 buttonsocialContainer2 _sugirEsquerdaAndando_2 containerTwo" style="--card-color-icons:#0f407a;">
                                                <strong> 2º Passo </strong>
                                            </a>
                                                
                                            <a href="#" class="socialContainer px-2 buttonsocialContainer3 _sugirEsquerdaAndando_3 containerThree" style="--card-color-icons:#ab0b0a;">
                                                <strong> 3º Passo </strong>
                                            </a>
                                        
                                        </div>  

                                    </div>
                                    
                                    <div class="col-md-6">
                                            <div class="container-text-icons-socialContainer   position-relative socialContainer1 d-none" style="--border-color:#f88209;" >
                                                    <img src="${_prefixUnidade}passo1.png" class="passo1"/>
                                            </div>

                                            <div class="container-text-icons-socialContainer  position-relative  socialContainer2 d-none" style="--border-color:#0f407a;" >
                                                     <img src="${_prefixUnidade}passo2.png" class="passo2"/>
                                            </div>

                                            <div class="container-text-icons-socialContainer  position-relative socialContainer3  d-none" style="--border-color:#ab0b0a;">
                                                   <img src="${_prefixUnidade}passo3.png" class="passo3"/>
                                            </div>
                                    </div>

                                    

                                </div>

                            </div>
                        </div>
                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap": { "ativo": false },
            // "tesseract": {
            //     "ativo": true,
            //     "ocr":
            //         [
            //             {
            //                 "_class": ".passo1",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             },
            //             {
            //                 "_class": ".passo2",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             },
            //             {
            //                 "_class": ".passo3",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": [{
                "indice": "all", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow 
                `
            }],
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 17 Soro - CONTINUACAO
    /*
        FILTRO
            ------> pg[17]
            ------> CM[Soro - CONTINUACAO]
        AQUI ÉA PÁGINA DE INTRODUÇÃO AO CONTEUDO 
        
    */
    {
        "pagina": 17,
        "nome_page": `Soro`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                      <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">
                                <div class="row">
                                    <div class="col-md-5">
                                       <div class="cards-icons ">
                                            <a href="#" class="socialContainer px-2 buttonsocialContainer4 _sugirEsquerdaAndando_1 containerOne" style="--card-color-icons:#f88209;">                      
                                                <strong> 4º Passo </strong>
                                            </a>

                                            <a href="#" class="socialContainer px-2 buttonsocialContainer5 _sugirEsquerdaAndando_2 containerTwo" style="--card-color-icons:#0f407a;">
                                                <strong> 5º Passo </strong>
                                            </a>
                                                
                                        </div>  
                                    </div>
                                    
                                    <div class="col-md-7">
                                            <div class="container-text-icons-socialContainer   position-relative h-100 socialContainer4 d-none" style="--border-color:#f88209;" >
                                                    <img src="${_prefixUnidade}passo4.png" class="passo4"/>
                                            </div>

                                            <div class="container-text-icons-socialContainer  position-relative h-100  socialContainer5 d-none" style="--border-color:#0f407a;" >
                                                     <img src="${_prefixUnidade}passo5.png" class="passo5"/>
                                            </div>

                                           
                                    </div>

                                    

                                </div>

                            </div>
                        </div>
                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap": { "ativo": false },
            // "tesseract": {
            //     "ativo": true,
            //     "ocr":
            //         [
            //             {
            //                 "_class": ".passo4",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             },
            //             {
            //                 "_class": ".passo5",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": [{
                "indice": "all", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow 
                `
            }],
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 18 Controle de qualidade em imunoensaios
    /*
        FILTRO
            ------> pg[18]
            ------> CM[Controle de qualidade em imunoensaios]
        AQUI ÉA PÁGINA DE Controle de qualidade em imunoensaios
        
    */
    {
        "pagina": 18,
        "nome_page": `Controle de qualidade em imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                      <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                                 <div class="container">
                                        <div class="card card-saibamais position-relative">
                                            <!-- Título "Você sabia?" -->
                                            <div class="row">
                                                <div class="col-md-2">
                                                      <img class="voce-sabia-img animationSaibamais" src="${_prefixAssetsIcons}interrogacao.png">
                                                </div>
                                                <div class="col-md-10 w-100 mb-2">
                                                    <h3>Você sabia?</h3>
                                                </div>
                                            </div>

                                            <!-- Texto informativo -->
                                            <div class="row w-100">
                                                <div class="col-md-12">
                                                    <p style="text-align: justify !important;">
                                                        Para aumentar a confiabilidade de um teste sorológico, faz-se necessária a utilização de parâmetros de validação e de controles de qualidade internos e externos, para garantir a confiabilidade do resultado.
                                                    </p>

                                                    <p style="text-align: justify !important;">
                                                        A validação de testes diagnósticos depende de múltiplos parâmetros que precisam ser analisados, e estes podem ser próprios do teste, fornecendo resultados com pouca variação, independentemente da prevalência da doença (sensibilidade e especificidade), ou de acordo com a prevalência da doença na população em estudo (valores preditivos positivos e negativos).
                                                    </p>
                                                    
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/Cardsaibamais.css"
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 19 Controle de qualidade em imunoensaios
    /*
        FILTRO
            ------> pg[19]
            ------> CM[Controle de qualidade em imunoensaios]
        AQUI ÉA PÁGINA DE Controle de qualidade em imunoensaios
        
    */
    {
        "pagina": 19,
        "nome_page": `Controle de qualidade em imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                      <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">

                                        <h4 style="color:#011c41; text-align:left;">Intervalo de Referência</h4>
                                        <p>O intervalo de referência é um parâmetro que descreve o valor esperado para 95% da população, ajudando a distinguir os indivíduos sem doença dos indivíduos doentes. Dessa forma, um exame com resultados fora do valor de referência apresenta grande chance de realmente refletir uma situação de doença. Observe, no gráfico abaixo, a distribuição de resultados de exame sorológico para indivíduos saudáveis e doentes.</p>
                                        
                                        <button onclick="abrirZoomist('${_prefixUnidade}Intervaloderef.png')" class="buttonExplorar mt-2 shadow" style="--clr: #0f407a;font-size:1rem;border-radius:0;">
                                                    <span class="buttonExplorar__icon-wrapper">
                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg"
                                                        width="10"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                        

                                                        <svg
                                                        
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        width="10"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                    </span>
                                                    Clique aqui e veja sobre o Intervalo de Referência
                                                </button>

                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/Cardsaibamais.css"
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 20 Controle de qualidade em imunoensaios
    /*
        FILTRO
            ------> pg[20]
            ------> CM[Controle de qualidade em imunoensaios]
        AQUI ÉA PÁGINA DE Controle de qualidade em imunoensaios
        
    */
    {
        "pagina": 20,
        "nome_page": `Controle de qualidade em imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                      <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                         
                        
                       <div class="message-box message-box-warn">
                        <div class="message-box--divisor ">
                            <i class="fa fa-warning fa-2x  _piscarInfitamente"></i>
                            <span class="message-text"><strong>Atenção:</strong> </span>
                        </div>
                        <span class="message-text">Em uma situação ideal, as populações de indivíduos doentes e saudáveis não estariam sobrepostas, porém, na prática, isso não acontece, e a consequência disso é a ocorrência de resultados falso-positivos (FP) e falso-negativos (FN).</span>
                        <!-- <i class="fa fa-times fa-2x exit-button "></i> -->
                        </div>   

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/Cardsaibamais.css"
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 21 Controle de qualidade em imunoensaios
    /*
        FILTRO
            ------> pg[21]
            ------> CM[Controle de qualidade em imunoensaios]
        AQUI ÉA PÁGINA DE Controle de qualidade em imunoensaios
        
    */
    {
        "pagina": 21,
        "nome_page": `Controle de qualidade em imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                         
                        <div class="container ">
                          <h4 style="color:#011c41; text-align:left;">Validade Extrínseca</h4>
                          <p>A validade extrínseca refere-se à capacidade de um teste diagnóstico para refletir a real situação da população em estudo. Isso inclui a avaliação de parâmetros como reprodutibilidade, acurácia e precisão do teste. Esses parâmetros são essenciais para garantir que o teste seja confiável e que seus resultados sejam aplicáveis em diferentes contextos e populações.  Leia sobre cada parâmetro:</p>
                                        
                            <div class="row justify-content-center ">

                                <!-- Reprodutibilidade -->
                                <div class="col-md-3-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Reprodutibilidade</h5>
                                            <p class="card-text">
                                                É a capacidade de obter resultados consistentes quando o teste é realizado repetidamente, seja
                                                por diferentes operadores ou em diferentes laboratórios.
                                            </p>
                                            <p class="card-text d-flex justify-content-center">
                                                <strong>veja aqui a Importância</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Acurácia -->
                                <div class="col-md-3-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Acurácia</h5>
                                            <p class="card-text">
                                                Também conhecida como exatidão, é a capacidade do teste de fornecer resultados corretos,
                                                identificando corretamente os estados de saúde e doença.
                                            </p>
                                            <p class="card-text d-flex justify-content-center">
                                                <strong>veja aqui a Importância</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Precisão -->
                                <div class="col-md-3-3">
                                  <div class="card h-100">
                                      <div class="card-body ">
                                          <h5 class="card-title">Precisão</h5>
                                          <p class="card-text">
                                              Refere-se à consistência dos resultados quando um teste é repetido várias
                                              vezes utilizando a mesma amostra. A precisão avalia a variação dos
                                              resultados, que deve ser mínima.
                                          </p>
                                          <p class="card-text d-flex justify-content-center">
                                               <strong>veja aqui a Importância</strong>
                                          </p>
                                      </div>
                                  </div>
                              </div>

                            </div>
                        </div>

                    </div>
                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap":{
                "ativo":false,
            },
            "inserir_estilo_pagina": [
                {
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "marcador": [
                {
                    "tipo": "p",
                    "posicao": 2,
                    "palavras": "veja aqui a Importância",
                    "palavrasIndex": [{ "veja aqui a Importância": [0] }, { "situação": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
                    // Atributos Gerais
                    "attr": `  
                  cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
                `,
                    // Criar um Estilo Geral
                    // "attr_inline": `

                    // `,
                    // Atributos Especificos
                    "attr_unitario": {
                        "veja aqui a Importância": {
                            // "attr": "background=[red],color=[white]",
                            "attr_inline": "id=[#1], class=[bt-1 p-2] ",
                        }
                    },
                    // "fundo": "blue",
                    // "corTexto": "black",
                    "padding": "0.3rem",
                    "onclick": [

                        {
                            "palavra": "veja aqui a Importância",
                            "acao": "onclick",
                            "funcao_script": `
                            function e_imp1() {
                                  Swal.fire(
                                    {   icon:"info",
                                        // title:"econômica",
                                        // customClass: {
                                        //     popup:"my-poup"
                                        // },
                                        heightAuto: false,
                                        text:"Garante que os resultados do teste não variem significativamente, independentemente de quem o realize ou onde seja realizado.",
                                        // footer:"<a href='#'>Baixar Conceito</a>"
                                    }
                                );
                            

                            }
                        `,
                            "funcao": "e_imp1()"
                        },


                    ]

                },
                {
                    "tipo": "p",
                    "posicao": 4,
                    "palavras": "veja aqui a Importância",
                    "palavrasIndex": [{ "veja aqui a Importância": [0] }, { "situação": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
                    // Atributos Gerais
                    "attr": `  
                  cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
                `,
                    // Criar um Estilo Geral
                    // "attr_inline": `

                    // `,
                    // Atributos Especificos
                    "attr_unitario": {
                        "veja aqui a Importância": {
                            // "attr": "background=[red],color=[white]",
                            "attr_inline": "id=[#1], class=[bt-2 p-2] ",
                        }
                    },
                    // "fundo": "blue",
                    // "corTexto": "black",
                    "padding": "0.3rem",
                    "onclick": [

                        {
                            "palavra": "veja aqui a Importância",
                            "acao": "onclick",
                            "funcao_script": `
                            function e_imp2() {
                                  Swal.fire(
                                    {   icon:"info",
                                        // title:"econômica",
                                        // customClass: {
                                        //     popup:"my-poup"
                                        // },
                                        heightAuto: false,
                                        text:"Um teste acurado é aquele cujos resultados se aproximam do valor real, minimizando erros sistemáticos. A correta calibração dos equipamentos e a participação em programas de controle de qualidade são práticas que aumentam a acurácia.",
                                        // footer:"<a href='#'>Baixar Conceito</a>"
                                    }
                                );
                            

                            }
                        `,
                            "funcao": "e_imp2()"
                        },


                    ]

                },
                {
                    "tipo": "p",
                    "posicao": 6,
                    "palavras": "veja aqui a Importância",
                    "palavrasIndex": [{ "veja aqui a Importância": [0] }, { "situação": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
                    // Atributos Gerais
                    "attr": `  
                  cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
                `,
                    // Criar um Estilo Geral
                    // "attr_inline": `

                    // `,
                    // Atributos Especificos
                    "attr_unitario": {
                        "veja aqui a Importância": {
                            // "attr": "background=[red],color=[white]",
                            "attr_inline": "id=[#1], class=[bt-3 p-2] ",
                        }
                    },
                    // "fundo": "blue",
                    // "corTexto": "black",
                    "padding": "0.3rem",
                    "onclick": [

                        {
                            "palavra": "veja aqui a Importância",
                            "acao": "onclick",
                            "funcao_script": `
                            function e_imp3() {
                                  Swal.fire(
                                    {   icon:"info",
                                        // title:"econômica",
                                        // customClass: {
                                        //     popup:"my-poup"
                                        // },
                                        heightAuto: false,
                                        text:"Um teste preciso produz resultados consistentes em múltiplas execuções, identificando e minimizando o erro acidental do método.",
                                        // footer:"<a href='#'>Baixar Conceito</a>"
                                    }
                                );
                            

                            }
                        `,
                            "funcao": "e_imp3()"
                        },


                    ]

                }
            ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 22 Controle de qualidade em imunoensaios
    /*
        FILTRO
            ------> pg[22]
            ------> CM[Controle de qualidade em imunoensaios]
        AQUI ÉA PÁGINA DE Controle de qualidade em imunoensaios
        
    */
    {
        "pagina": 22,
        "nome_page": `Controle de qualidade em imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                         
                       <div class="container p-2" style="background: #0f407a; border-radius:1rem; color: #fff;">
                            <h3 class="text-center">Acurácia e precisão de testes diagnósticos</h3>
                            <div class="row justify-content-center">
                                <!-- Teste A -->
                                <div class="col-md-4">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title"><span class="bg-light rounded py-1 px-2" >A</span></h5>
                                            <p class="card-text text-white">
                                                Teste preciso (resultados com pouca variação), mas não acurado (longe do alvo); assim, não
                                                representa a situação real.
                                            </p>
                                           <button type="button" onclick="abrirZoomist('${_prefixUnidade}testePreciso.png')" class="btn btn-outline-primary w-100 border border-2 border-primary">Veja o Teste preciso</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- Teste B -->
                                <div class="col-md-4">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title" ><span class="bg-light rounded py-1 px-2" >B</span></h5>
                                            <p class="card-text text-white">
                                                Teste impreciso (muita variação de resultados) e não acurado (nenhum dos resultados obtidos
                                                acertam o diagnóstico).
                                            </p>
                                            <button type="button" onclick="abrirZoomist('${_prefixUnidade}testeimpreciso.png')" class="btn btn-outline-danger w-100 border border-2 border-danger">Veja o Teste impreciso</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- Teste C -->
                                <div class="col-md-4">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title"><span class="bg-light rounded py-1 px-2" >C</span></h5>
                                            <p class="card-text text-white">
                                                Situação ideal para um teste diagnóstico, com alta precisão (pouquíssima variação nos dados) e
                                                acurado (diagnóstico acertado).
                                            </p>
                                              <button type="button" onclick="abrirZoomist('${_prefixUnidade}testediagnostico.png')" class="btn btn-outline-warning w-100 border border-2 border-warning">Veja o teste diagnóstico</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="text-light text-center" >Fonte: Adaptado de Ribeiro (2019).</p>
                        </div>


                    </div>
                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/Cardsaibamais.css"
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 1,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }, { "situação": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-4 mt-4] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp1() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:"Garante que os resultados do teste não variem significativamente, independentemente de quem o realize ou onde seja realizado.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp1()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 23 Controle de qualidade em imunoensaios - CONTINUACAO
    /*
        FILTRO
            ------> pg[23]
            ------> CM[Controle de qualidade em imunoensaios - CONTINUACAO]
        AQUI ÉA PÁGINA DE Controle de qualidade em imunoensaios - CONTINUACAO
        
    */
    {
        "pagina": 23,
        "nome_page": `Controle de qualidade em imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">
                                    <div class="vision-info-box">
                                        <img src="${_prefixAssetsIcons}lampada.png" alt="Ícone de lâmpada" class="icon _piscar">
                                        <div class="text-content">
                                            <h3>É importante saber que...</h3>
                                            <p>A validade extrínseca é crucial porque um teste pode ser sensível e específico (validade intrínseca) mas ainda assim não ser aplicável ou confiável em diferentes populações se não tiver alta validade extrínseca. Em outras palavras, mesmo que um teste tenha bom desempenho em condições ideais, ele deve ser igualmente confiável e aplicável em condições reais e variadas para ser considerado válido extrinsecamente. </p>
                                        </div>
                                    </div>
                             </div>

                        </div>
                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            // "tesseract": {
            //     "ativo":false,
            //     "ocr":
            //         [
            //             {
            //                 // "_class": ".img1",
            //                 "_btn": ['.buttonAnticorposMonoclonais'],
            //                 "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "Faça o resumo dessas fórmulas.",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [{
            //     "tipo": "p",
            //     "posicao": 0,
            //     "palavras": "Programa|situação",
            //     "palavrasIndex":[{Programa:[0]},{situação:[0]}],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //     // Atributos Gerais
            //     "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //     // Criar um Estilo Geral
            //     // "attr_inline": `

            //     // `,
            //     // Atributos Especificos
            //     "attr_unitario": {
            //         "Programa": {
            //             // "attr": "background=[red],color=[white]",
            //             "attr_inline": "id=[#1], class=[bt-1]",
            //         }
            //     },
            //     // "fundo": "blue",
            //     // "corTexto": "black",
            //     "padding": "0.3rem",
            //     "onclick": [

            //         {
            //             "palavra": "Programa",
            //             "acao": "onclick",
            //             "funcao_script": `
            //                 function e_aq() {
            //                     abrirZoomist('${_prefixUnidade}crianca_sendo_servida_na_escola.png');

            //                 }
            //             `,
            //             "funcao": "e_aq()"
            //         },


            //     ]

            // }],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
             "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 24 Controle de qualidade em imunoensaios - CONTINUACAO
    /*
        FILTRO
            ------> pg[24]
            ------> CM[Controle de qualidade em imunoensaios]
        AQUI ÉA PÁGINA DE Controle de qualidade em imunoensaios
        
    */
    {
        "pagina": 24,
        "nome_page": `Controle de qualidade em imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                         
                        <div class="container ">
                          <h4 style="color:#011c41; text-align:left;">Validade Intrínseca</h4>
                          <p>A validade intrínseca de um teste diagnóstico se refere à capacidade do teste de medir o que se propõe a medir, de maneira correta e consistente, independentemente de fatores externos. Este conceito é crucial para garantir a qualidade e a confiabilidade dos resultados dos testes laboratoriais, especialmente em imunoensaios. Os principais parâmetros que avaliam a validade intrínseca de um teste diagnóstico são a sensibilidade, a especificidade e os valores preditivos positivos e negativos. Leia sobre cada um abaixo:</p>
                                        
                            <div class="row justify-content-center ">

                                <!-- Sensibilidade -->
                                <div class="col-md-3-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title"> Sensibilidade</h5>
                                            <p class="card-text">
                                                É a capacidade de um teste detectar corretamente todos os indivíduos que têm a doença (verdadeiros positivos).
                                            </p>
                                            <p class="card-text d-flex justify-content-center">
                                                <strong>veja aqui a Importância</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!--  Especificidade -->
                                <div class="col-md-3-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title"> Especificidade</h5>
                                            <p class="card-text">
                                                É a capacidade de um teste identificar corretamente todos os indivíduos que não têm a doença (verdadeiros negativos).
                                            </p>
                                            <p class="card-text d-flex justify-content-center">
                                                <strong>veja aqui a Importância</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Precisão -->
                                <div class="col-md-3-3">
                                  <div class="card h-100">
                                      <div class="card-body ">
                                          <h5 class="card-title">Precisão</h5>
                                          <p class="card-text">
                                              Refere-se à consistência dos resultados quando um teste é repetido várias
                                              vezes utilizando a mesma amostra. A precisão avalia a variação dos
                                              resultados, que deve ser mínima.
                                          </p>
                                          <p class="card-text d-flex justify-content-center">
                                               <strong>veja aqui a Importância</strong>
                                          </p>
                                      </div>
                                  </div>
                              </div>

                            </div>
                        </div>

                    </div>
                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap":{
                "ativo":false,
            },
            "inserir_estilo_pagina": [
                {
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "marcador": [
                {
                    "tipo": "p",
                    "posicao": 2,
                    "palavras": "veja aqui a Importância",
                    "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
                    // Atributos Gerais
                    "attr": `  
                  cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
                `,
                    // Criar um Estilo Geral
                    // "attr_inline": `

                    // `,
                    // Atributos Especificos
                    "attr_unitario": {
                        "veja aqui a Importância": {
                            // "attr": "background=[red],color=[white]",
                            "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
                        }
                    },
                    // "fundo": "blue",
                    // "corTexto": "black",
                    "padding": "0.3rem",
                    "onclick": [

                        {
                            "palavra": "veja aqui a Importância",
                            "acao": "onclick",
                            "funcao_script": `
                            function e_imp11() {
                                  Swal.fire(
                                    {   icon:"info",
                                        // title:"econômica",
                                        // customClass: {
                                        //     popup:"my-poup"
                                        // },
                                        heightAuto: false,
                                        text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
                                        // footer:"<a href='#'>Baixar Conceito</a>"
                                    }
                                );
                            

                            }
                        `,
                            "funcao": "e_imp11()"
                        },


                    ]

                },
                {
                    "tipo": "p",
                    "posicao": 4,
                    "palavras": "veja aqui a Importância",
                    "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
                    // Atributos Gerais
                    "attr": `  
                  cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
                `,
                    // Criar um Estilo Geral
                    // "attr_inline": `

                    // `,
                    // Atributos Especificos
                    "attr_unitario": {
                        "veja aqui a Importância": {
                            // "attr": "background=[red],color=[white]",
                            "attr_inline": "id=[#1], class=[bt-2 p-2] ",
                        }
                    },
                    // "fundo": "blue",
                    // "corTexto": "black",
                    "padding": "0.3rem",
                    "onclick": [

                        {
                            "palavra": "veja aqui a Importância",
                            "acao": "onclick",
                            "funcao_script": `
                            function e_imp22() {
                                  Swal.fire(
                                    {   icon:"info",
                                        // title:"econômica",
                                        // customClass: {
                                        //     popup:"my-poup"
                                        // },
                                        heightAuto: false,
                                        text:"Um teste com alta especificidade é fundamental para reduzir o número de falsos positivos (FP), assegurando que indivíduos saudáveis não sejam diagnosticados incorretamente como doentes.",
                                        // footer:"<a href='#'>Baixar Conceito</a>"
                                    }
                                );
                            

                            }
                        `,
                            "funcao": "e_imp22()"
                        },


                    ]

                },
                {
                    "tipo": "p",
                    "posicao": 6,
                    "palavras": "veja aqui a Importância",
                    "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
                    // Atributos Gerais
                    "attr": `  
                  cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
                `,
                    // Criar um Estilo Geral
                    // "attr_inline": `

                    // `,
                    // Atributos Especificos
                    "attr_unitario": {
                        "veja aqui a Importância": {
                            // "attr": "background=[red],color=[white]",
                            "attr_inline": "id=[#1], class=[bt-3 p-2] ",
                        }
                    },
                    // "fundo": "blue",
                    // "corTexto": "black",
                    "padding": "0.3rem",
                    "onclick": [

                        {
                            "palavra": "veja aqui a Importância",
                            "acao": "onclick",
                            "funcao_script": `
                            function e_imp33() {
                                
                               customModal230923920iwoei209382iaspoasi203923()

                            }
                        `,
                            "funcao": "e_imp33()"
                        },


                    ]

                }
            ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 25 Controle de qualidade em imunoensaios - CONTINUACAO
    /*
        FILTRO
            ------> pg[25]
            ------> CM[Controle de qualidade em imunoensaios]
        AQUI ÉA PÁGINA DE Controle de qualidade em imunoensaios
        
    */
    {
        "pagina": 25,
        "nome_page": `Controle de qualidade em imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                    <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container">
                                <!-- Texto introdutório -->
                                <p>
                                    A validade intrínseca é avaliada comparando-se o desempenho do teste em questão com um teste de referência (padrão-ouro).
                                    Parâmetros como sensibilidade e especificidade são calculados usando tabelas de contingência 2x2, onde são analisados os
                                    verdadeiros positivos, falsos positivos, verdadeiros negativos e falsos negativos.
                                </p>
                                <p>Observe abaixo o quadro com resultados possíveis em um teste diagnóstico.</p>
                                <div class="row">
                                    <!-- Tabela -->
                                    <div class="table-responsive col-md-7">
                                        <table class="table table-bordered text-center">
                                            <thead class="table-primary">
                                                <tr>
                                                    <th>Teste (resultado)</th>
                                                    <th>Doença (diagnóstico verdadeiro)</th>
                                                    <th>Presente</th>
                                                    <th>Ausente</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowspan="2" class="align-middle">Positivo</td>
                                                    <td>VP</td>
                                                    <td>FP</td>
                                                </tr>
                                                <tr>
                                                    <td>Negativo</td>
                                                    <td>FN</td>
                                                    <td>VN</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- Botões em coluna -->
                                    <div class="col-md-5 d-flex flex-column ">
                                        <!-- Botão Sensibilidade -->
                                        <button onclick="customModale325dffcbe1b6e46sdwewe32wsd21()" class="btn btn-primary btn-block mb-3 h-100 w-100">
                                            Clique aqui e saiba mais sobre Sensibilidade (S)
                                        </button>
                                        <!-- Botão Especificidade -->
                                        <button onclick="customModale325dffcbe1b6e4684f61a4df66e0151()" class="btn btn-success btn-block h-100 w-100">
                                            Clique aqui e saiba mais sobre Especificidade (E)
                                        </button>
                                    </div>
                                </div>
                                
                                <button class="buttonExplorar mt-2 shadow" style="--clr: #0f407a;"
                                    onclick="abrirZoomist('${_prefixUnidade}calcularSensibilidadeEspecifica.png')">
                                    <span class="buttonExplorar__icon-wrapper">
                                        <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="buttonExplorar__icon-svg"
                                            width="10">
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"></path>
                                        </svg>

                                        <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg"
                                            class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy">
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    Você sabe como calcular a sensibilidade e a especificidade?
                                </button>

                            </div>
                        </div>
                    </div>

            


            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 26 Imunoensaios
    /*
        FILTRO
            ------> pg[26]
            ------> CM[Imunoensaios]
        AQUI ÉA PÁGINA DE Imunoensaios
        
    */
    {
        "pagina": 26,
        "nome_page": `Imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                     <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">
                        <div class="container p-4 animate-info">

                           

                            <!-- Cartão responsivo -->
                            <div class="container animate-info rounded" >
                                <div class="row d-flex flex-column flex-md-row align-items-start justify-content-start" >
                                    <div class="row w-100 position-relative">
                                        <!-- Conteúdo do cartão -->
                                        <div class="col-12 col-md-9-5 d-flex flex-column gap-4 p-2 rounded text-justify" style="background: linear-gradient(90deg, rgba(192,40,39,1) 42%, rgba(237,119,118,1) 100%);">
                                            <p class="text-branco">As técnicas laboratoriais imunológicas se baseiam nos princípios e nos mecanismos da Imunologia, o que torna possível a detecção de antígenos, anticorpos e células do sistema imune, como os linfócitos. Dessa forma, essas técnicas possibilitam diagnosticar infecções por agentes patogênicos (vírus, bactérias, fungos, protozoários ou outros parasitas), doenças autoimunes, neoplasias, alergias, entre outras enfermidades.</p>
                                        </div>
                                        <!-- Imagem que vai ao lado ou abaixo dependendo do dispositivo -->
                                        <div class="col-12 col-md-4-5 text-center imgCardFlutuante position-absolute _desaparecer">
                                            <img src="${_prefixUnidade}doutoraSegurandoAmpola.png"  alt="Menina com leite e dor de barriga." class="rounded animationImg w-100">
                                            <p class="description-descricao bottom-0 start-0 w-100" style="margin:0;">
                                                            Imagem: Canva
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            


            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 27 Imunoensaios - CONTINUACAO
    /*
        FILTRO
            ------> pg[27]
            ------> CM[Imunoensaios - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunoensaios - CONTINUACAO
        
    */
    {
        "pagina": 27,
        "nome_page": `Imunoensaios`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                    <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container d-flex flex-column gap-2">
                                    <p>
                                        Por meio das reações que ocorrem com a aplicação das técnicas laboratoriais, é possível verificar também a presença de outros elementos, que podem ser reconhecidos como antígenos, como é o caso de hormônios, medicamentos, ácidos nucleicos e outras moléculas. Mais especificamente, os imunodiagnósticos permitem a detecção, a mensuração e a identificação de anticorpos, células ou moléculas do sistema imune. A realização de diagnósticos imunológicos é baseada nos princípios relacionados ao desenvolvimento das reações do sistema imune, especialmente à interação antígeno e anticorpo, que é altamente específica.
                                    </p>

                                    <p>
                                        De uma forma geral, essas técnicas possibilitam a detecção ou a quantificação do que resulta da formação de complexos imunes, ou seja, da ligação entre o antígeno e o anticorpo. Assim, anticorpos, antígenos e outras moléculas provenientes da interação antígeno-anticorpo podem ser analisados em amostras biológicas.
                                    </p>

                                    <p>
                                        Ainda, conforme o tipo de exame realizado, essa análise pode ser qualitativa (quando é capaz de verificar se determinado antígeno está presente na amostra ou não) ou quantitativa (quando possibilita averiguar a quantidade desse antígeno na amostra).
                                    </p>

                                    <p>
                                        Dependendo da característica analisada, essas técnicas podem ser agrupadas para facilitar seu estudo ou sua aplicação. Nesta unidade, os imunodiagnósticos estão agrupados com base no seguinte critério: uso de reagentes marcados ou uso de marcadores.
                                    </p>
                            </div>
                        </div>
                    </div>

            


            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 28 Ensaios imunológicos sem marcadores
    /*
        FILTRO
            ------> pg[28]
            ------> CM[Ensaios imunológicos sem marcadores]
        AQUI ÉA PÁGINA DE Ensaios imunológicos sem marcadores
        
    */
    {
        "pagina": 28,
        "nome_page": `Ensaios imunológicos sem marcadores`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                   
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">
                        <div class="container">
                            <div class="row">
                                <!-- Texto e título -->
                                <div class="col-md-6 ">
                                    <div class="pagina-historia-alimentacao-container-titulo-intro">
                                        <h1>Ensaios imunológicos sem marcadores</h1>
                                        <p>Os ensaios imunológicos sem marcadores incluem principalmente as técnicas de precipitação e aglutinação. Estas técnicas são baseadas na formação de complexos imunes entre antígenos e anticorpos, permitindo a detecção e, em alguns casos, a quantificação dos componentes envolvidos.</p>
                                    </div>
                                </div>

                                <div class="col-md-6 ">
                                    <div class="pagina-historia-alimentacao-container-titulo-intro">
                                        <h1>Reação de Precipitação</h1>
                                        <p>A reação de precipitação, ou imunoprecipitação, envolve a formação de precipitados que são complexos imunes formados pela ligação entre antígenos e anticorpos. Esses complexos formam agregados visíveis que se apresentam como sedimento em meio líquido ou como linhas de precipitação em gel. A detecção desses precipitados pode ser feita a olho nu ou com o auxílio de um microscópio óptico. Esta técnica é sensível, simples de realizar e não requer equipamentos específicos, sendo usada em diagnósticos como a tipagem sanguínea e a detecção de várias infecções como salmonelose, brucelose, toxoplasmose, tripanossomíase, leptospirose, leishmaniose e sífilis​​.</p>
                                    </div>
                                </div>
                                       
                            </div>
                        </div>           
                    </div>
                </div>


            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 29 Ensaios imunológicos sem marcadores - CONTINUACAO
    /*
        FILTRO
            ------> pg[29]
            ------> CM[Ensaios imunológicos sem marcadores - CONTINUACAO]
        AQUI ÉA PÁGINA DE Ensaios imunológicos sem marcadores - CONTINUACAO
        
    */
    {
        "pagina": 29,
        "nome_page": `Ensaios imunológicos sem marcadores`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                   
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">
                        <div class="container">

                            <div class="row">
                                <!-- Texto e título -->
                                <div class="col-md-12 ">
                                    <div class="pagina-historia-alimentacao-container-titulo-intro">
                                        <h1>Reação de Aglutinação</h1>
                                        <p>A aglutinação envolve a agregação de partículas (como células ou partículas de látex) que
                                            possuem antígenos ou anticorpos na superfície. Existem dois tipos principais de reações
                                            de aglutinação:</p>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 order-md-2">
                                    <h5 class="text-light rounded" style="background: #011c41;">Aglutinação Direta</h5>
                                    <p>
                                        Utilizada para a classificação sanguínea e hemaglutinação direta. Um exemplo clássico de
                                        aglutinação direta é o teste de tipagem sanguínea (ou teste de hemaglutinação direta). Veja
                                        na imagem ao lado a representação esquemática de reação de aglutinação direta.
                                    </p>

                                    <button class="buttonExplorar AglutinacaoDireta23098aslk2wzx mt-2 shadow"
                                        style="--clr: #0f407a;font-size:1rem;border-radius:0;" onclick="abrirZoomist('${_prefixUnidade}aglutinacaoDiretaImg.png')">
                                        <span class="buttonExplorar__icon-wrapper">
                                            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="buttonExplorar__icon-svg" width="10">
                                                <path
                                                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                    fill="currentColor"></path>
                                            </svg>

                                            <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg"
                                                class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy">
                                                <path
                                                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        Entenda sobre Aglutinação Direta
                                    </button>
                                </div>

                                <div class="col-md-6 order-md-2">
                                    <h5 class="text-light rounded" style="background: #011c41;">Aglutinação Direta</h5>
                                    <p>
                                        Envolve a fixação de anticorpos ou antígenos a uma célula ou partícula inerte. Exemplos
                                        incluem sorologia para anticorpos anti-Treponema pallidum e Toxoplasma gondii, e testes
                                        usando partículas de látex para detectar a proteína C reativa, fator reumatoide e
                                        anti-estreptolisina O (ASO)​​. Veja na imagem ao lado a representação esquemática de reação
                                        de aglutinação direta.
                                    </p>
                                    <button  class="buttonExplorar AglutinacaoIndireta23098aslk2wzx mt-2 shadow" style="--clr: #ab0b0a;font-size:1rem;border-radius:0;"
                                    onclick="abrirZoomist('${_prefixUnidade}aglutinacaoIndiretaImg.png')"
                                    >
                                                    <span class="buttonExplorar__icon-wrapper">
                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg"
                                                        width="10"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>

                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        width="10"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                    </span>
                                        Entenda sobre Aglutinação Indireta        
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                

            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 30 Ensaios imunológicos sem marcadores - CONTINUACAO
    /*
        FILTRO
            ------> pg[30]
            ------> CM[Ensaios imunológicos sem marcadores - CONTINUACAO]
        AQUI ÉA PÁGINA DE Ensaios imunológicos sem marcadores - CONTINUACAO
        
    */
    {
        "pagina": 30,
        "nome_page": `Ensaios imunológicos sem marcadores`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                   
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">
                        <div class="container">
                            <div class="row">
                                <!-- Texto e título -->
                                <div class="col-md-12 ">
                                    <div class="pagina-historia-alimentacao-container-titulo-intro gap-2">
                                        <h1>Reações de Floculação</h1>
                                        <p>As reações de floculação são um tipo específico de aglutinação onde os anticorpos no soro do paciente se ligam a estruturas micelares no reagente, resultando em flocos visíveis. Este tipo de reação é utilizado em certos diagnósticos onde a presença de flocos indica uma ligação entre os anticorpos e os antígenos micelares. Observe, na imagem ao lado, reações de floculação de VDRL. Na imagem, os Acs (vermelho) podem ligar-se simultaneamente a inúmeras micelas, produzindo reação em forma de flocos.</p>
                                    
                                          
                                        <button onclick="abrirZoomist('${_prefixUnidade}img_Floculacao.png')" class="buttonExplorar mt-2 shadow" style="--clr: #0f407a;font-size:1rem;border-radius:0;">
                                                    <span class="buttonExplorar__icon-wrapper">
                                                        <svg
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg"
                                                        width="10"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                        

                                                        <svg
                                                        
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        width="10"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy"
                                                        >
                                                        <path
                                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                            fill="currentColor"
                                                        ></path>
                                                        </svg>
                                                    </span>
                                                  Clique aqui e veja a imagem das Reações de Floculação
                                                </button>                                    
                                    </div>
                                </div>

                                

                                       
                            </div>
                        </div>           
                    </div>
                </div>


                

            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 31 Ensaios imunológicos com marcadores
    /*
        FILTRO
            ------> pg[31]
            ------> CM[Ensaios imunológicos com marcadores]
        AQUI ÉA PÁGINA DE Ensaios imunológicos com marcadores
        
    */
    {
        "pagina": 31,
        "nome_page": `Ensaios imunológicos com marcadores`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                   
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">
                        <div class="container">
                            <div class="row">

                                <!-- Texto e título -->
                                <div class="col-md-12 ">
                                    <div class="pagina-historia-alimentacao-container-titulo-intro gap-1">
                                        <h1>Ensaios imunológicos com marcadores</h1>
                                        <p>Os ensaios imunológicos com marcadores são técnicas laboratoriais que utilizam marcadores para detectar e quantificar antígenos ou anticorpos. Esses marcadores podem ser enzimas, corantes fluorescentes, isótopos radioativos, entre outros. A marcação permite a visualização e mensuração precisas das interações entre antígenos e anticorpos. Agora, veremos alguns dos principais tipos de ensaios imunológicos com marcadores:</p>      
                                    </div>
                                </div>

                            </div>
                        </div>           
                    </div>
                </div>    

            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 32 Ensaios imunológicos com marcadores
    /*
        FILTRO
            ------> pg[32]
            ------> CM[Ensaios imunológicos com marcadores]
        AQUI ÉA PÁGINA DE Ensaios imunológicos com marcadores
        
    */
    {
        "pagina": 32,
        "nome_page": `Ensaios imunológicos com marcadores`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">
                        <div class="container d-flex align-items-center justify-content-center">
                            <div class="row align-items-center justify-content-center text-center">
                                <!-- Texto e imagem lado a lado, centralizados -->
                                <div class="col-md-8">
                                    <div class="pagina-historia-alimentacao-container-titulo-intro gap-1">
                                        <h1>Ensaio Imunoenzimático (ELISA)</h1>
                                        <p class="w-100">ELISA (Enzyme-Linked Immunosorbent Assay) é uma técnica amplamente utilizada
                                            para a detecção e quantificação de antígenos ou anticorpos. Observe a imagem ao lado, que é
                                            uma representação esquemática do ensaio de ELISA.</p>

                                        <button onclick="customModal230923920iwoei209983892esu92784sdhuy9284ysdj()"
                                            class="buttonExplorar mt-2 shadow" style="--clr: #0f407a;font-size:1rem;border-radius:0;">
                                            <span class="buttonExplorar__icon-wrapper">
                                                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="buttonExplorar__icon-svg" width="10">
                                                    <path
                                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                        fill="currentColor"></path>
                                                </svg>

                                                <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg"
                                                    class="buttonExplorar__icon-svg buttonExplorar__icon-svg--copy">
                                                    <path
                                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            Clique aqui e veja as várias formas de ELISA:
                                        </button>
                                    </div>

                                </div>

                                <!-- Imagem -->
                                <div class="col-md-3">
                                    <div>
                                        <div class=" position-relative w-100 h-100 overflow-hidden animationImg _desaparecer"
                                            style="border:none;background:none;">
                                          
                                            <img src="${_prefixUnidade}elisa_img.png" class="img-fluid rounded mx-auto d-block"
                                                style="max-width: 50%; border:none;background: none; object-fit: scale-down;"
                                                alt="Upscale Image">
                                            <div class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">
                                                Representação esquemática do ensaio de ELISA. 
                                                Fonte: Adaptado de Ribeiro (2019).
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": `${_prefixConfCss}Lista.css`
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 33 Ensaios imunológicos com marcadores
    /*
        FILTRO
            ------> pg[33]
            ------> CM[Ensaios imunológicos com marcadores]
        AQUI ÉA PÁGINA DE Ensaios imunológicos com marcadores
        
    */
    {
        "pagina": 33,
        "nome_page": `Radioimunoensaio (RIA)`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container animate-info">
                            <div class="row align-items-center gap-1">

                                <div class="col-md-6-7">
                                    <!-- Coluna do texto e imagem -->
                                    <div class="col-md-12 d-flex flex-column gap-1">
                                        <div class="pagina-historia-alimentacao-container-titulo-intro">
                                            <h1 style="text-align:left;color:#011c41;font-size:1.5rem;">Radioimunoensaio (RIA)
                                            </h1>
                                            <p>RIA (Radioimmunoassay) é uma técnica que utiliza radioisótopos para marcar antígenos ou
                                                anticorpos. É altamente sensível e permite a detecção de quantidades muito pequenas de
                                                substâncias. </p>
                                            <p>Os radioisótopos comumente usados incluem iodo-125 e trítio. As principais vantagens do
                                                RIA são a alta sensibilidade e precisão, embora envolva custos elevados e riscos
                                                associados à manipulação de materiais radioativos .</p>
                                        </div>
                                    </div>

                                    <div class="col-md-12 d-flex flex-column gap-1">
                                        <div class="pagina-historia-alimentacao-container-titulo-intro">
                                            <h1 style="text-align:left;color:#011c41;font-size:1.5rem;">Imunofluorescência
                                            </h1>
                                            <p>A imunofluorescência utiliza anticorpos marcados com fluorocromos para a detecção de
                                                antígenos em amostras de tecido ou células.</p>

                                        </div>
                                    </div>

                                </div>

                                <div class="col-md-5">  
                                    <p class="text-center fst-italic m-1"> Existem dois tipos principais:</p>

                                    <!-- Card 1 - Imunofluorescência Direta -->
                                        <div class="row mb-2">
                                            <div class="col-md-12">
                                                <div class="p-3 text-white" style="background-color:#013865; border-radius: 5px;">
                                                    <h2 style="font-size: 1.25rem;">Imunofluorescência Direta</h2>
                                                    <p>O anticorpo marcado liga-se diretamente ao antígeno.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Card 2 - Imunofluorescência Indireta -->
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="p-3 text-white" style="background-color:#0458a7; border-radius: 5px;">
                                                    <h2 style="font-size: 1.25rem;">Imunofluorescência Indireta</h2>
                                                    <p>Utiliza-se um anticorpo primário específico para o antígeno e um anticorpo secundário marcado com um fluorocromo, que se liga ao anticorpo primário.</p>
                                                </div>
                                            </div>
                                        </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": `${_prefixConfCss}Lista.css`
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 34 Ensaios imunológicos com marcadores
    /*
        FILTRO
            ------> pg[34]
            ------> CM[Ensaios imunológicos com marcadores]
        AQUI ÉA PÁGINA DE Ensaios imunológicos com marcadores
        
    */
    {
        "pagina": 34,
        "nome_page": `Radioimunoensaio (RIA)`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container animate-info">
                            <div class="row align-items-center gap-1">

                                <div class="col-md-12">
                                    <!-- Coluna do texto e imagem -->
                                    <div class="col-md-12 d-flex flex-column gap-1">
                                        <div class="pagina-historia-alimentacao-container-titulo-intro">
                                            <h1 style="text-align:left;color:#011c41;font-size:1.5rem;">Citometria de Fluxo
                                            </h1>
                                            <p>A citometria de fluxo é uma técnica que analisa características físicas e químicas de
                                                partículas em um fluido enquanto elas passam por um laser. As células ou partículas
                                                são marcadas com fluorocromos e, ao passar pelo laser, emitem fluorescência que é
                                                medida. Essa técnica é usada para identificar e quantificar diferentes tipos de
                                                células e analisar suas propriedades. </p>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": `${_prefixConfCss}Lista.css`
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 35 Ensaios imunológicos com marcadores
    /*
        FILTRO
            ------> pg[35]
            ------> CM[Ensaios imunológicos com marcadores]
        AQUI ÉA PÁGINA DE Ensaios imunológicos com marcadores
        
    */
    {
        "pagina": 35,
        "nome_page": `Radioimunoensaio (RIA)`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container">
                            <div class="row justify-content-center gap-3">

                                    <!-- Vantagens Card -->
                                    <div class="card-vantagem">
                                        <div class="card-header-vantagem-desvantagem">
                                        <div class="custom-icon custom-icon-check">
                                            <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <h2 class="custom-card-title">VANTAGENS</h2>
                                        </div>
                                        <div class="card-content-vantagem-desvantagem">
                                        <div class="item-vantagem-desvantagem">
                                            <h3>Alta Sensibilidade e Especificidade:</h3>
                                            <p>Permitem detectar pequenas quantidades de antígenos ou anticorpos com grande precisão.</p>
                                        </div>
                                        <div class="item-vantagem-desvantagem">
                                            <h3>Quantificação:</h3>
                                            <p>Fornecem dados quantitativos que podem ser essenciais para diagnósticos e monitoramento de doenças.</p>
                                        </div>
                                        <div class="item-vantagem-desvantagem">
                                            <h3>Versatilidade:</h3>
                                            <p>Podem ser adaptados para detectar uma ampla gama de substâncias.</p>
                                        </div>
                                        </div>
                                    </div>

                                    <!-- Desvantagens Card -->
                                    <div class="card-desvantagem">
                                        <div class="card-header-vantagem-desvantagem">
                                        <div class="custom-icon custom-icon-x">
                                            <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></path>
                                            </svg>
                                        </div>
                                        <h2 class="custom-card-title">DESVANTAGENS</h2>
                                        </div>
                                        <div class="card-content-vantagem-desvantagem">
                                        <div class="item-vantagem-desvantagem">
                                            <h3>Custo:</h3>
                                            <p>Equipamentos e reagentes necessários podem ser caros.</p>
                                        </div>
                                        <div class="item-vantagem-desvantagem">
                                            <h3>Complexidade:</h3>
                                            <p>Requerem laboratórios equipados e pessoal treinado.</p>
                                        </div>
                                        <div class="item-vantagem-desvantagem">
                                            <h3>Riscos Biológicos e Químicos:</h3>
                                            <p>Envolvem a manipulação de materiais potencialmente perigosos, como radioisótopos.</p>
                                        </div>
                                        </div>
                                    </div>
                             
                              


                            </div>
                        </div>


                    </div>
                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap":{
                "ativo":false,
            },
            "inserir_estilo_pagina": [
                {
                    "url": `${_prefixConfCss}Lista.css`
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },

    // PÁGINA 36 Video Disciplina
    /*
        FILTRO
            ------> pg[36]
            ------> CM[Video Disciplina]
        AQUI ÉA PÁGINA DE Video Disciplina
        
    */
    {
        "pagina": 36,
        "nome_page": `Video Aula`,
        "tipo": "Video",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-video",
        "data": {
            "container_render": `
                <div class="pagina-tipo-video animation">

                  <div class="pagina-tipo-video--box-video">
                        <div class="f-carousel render-video-container" id="carrosel-video">
                            <!-- Renderizador de Video -->
                            <!-- 
                            <div class="f-carousel__slide" data-thumb-src="https://i.vimeocdn.com/video/112836958_192x144.jpg">
                                <iframe class="iframe-video" src="https://player.vimeo.com/video/112836958" ></iframe>
                            </div>
                            -->

                        </div>
                  </div>

                  <div class="transcritor--box-video">
                    <div>
                        <!-- cabeçalho -->
                        <p class="header-transcritor-video">Transcrição</p>
                    </div>

                    <div class="body-transcritor-video">
                        <!-- body -->

                    </div>

                    <div class="footer-transcritor-video">
                        <!-- footer -->
                        <button>Gerar Transcrição</button>
                    </div>
                  </div>

                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "handTap":{
                "ativo":false,
            },
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": variantes_globais.Ferramentas([
                {
                    container: "icons-action--container",
                    Podcast: {
                        ativo: true
                    },
                    Ferramentas: {
                        ativo: true
                    },
                    FullScreen: {
                        ativo: true
                    }
                },
                {
                    container: "box-tools-inline",

                    Destacar: {
                        ativo: false,
                        nome: "Destacar"
                    },
                    Notas: {
                        ativo: true,
                        nome: "Notas"
                    },

                    Download: {
                        ativo: true,
                        nome: "Download"
                    },
                    Dicionario: {
                        ativo: true,
                        nome: "Dicionario"
                    },
                    close: {
                        ativo: true
                    }
                }
            ]),
            "marcador": [{
                "tipo": "p",
                "posicao": 0,
                "palavras": "Olá, estudante! Bem-vindo à Unidade 1!",
                "attr_unitario": {
                    "Olá, estudante! Bem-vindo à Unidade 1!": {
                        "attr": "font-weight=[999], Font-size=[18px]",

                    },

                },
                // "fundo": "blue",
                // "corTexto": "black",
                // "padding": "0.3rem",


            }],
            "setas": {
                "corSetas": "#fff",
                "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "cores": {
                "sidebar": "#000000",
                "fundo": "#011C41",
                "icones": "white",
                "iconesEspecificos": {
                    ".openAnnotation": {
                        "cor": "white",
                    }
                }
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 8 e Transcritor
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".transcritor--box-video",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                },
                "_renderizadar_video": {
                    "status": true,
                    "onde_colocar_video": ".render-video-container",
                },

            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca({
                logo: {
                    logo_img: `url(${_prefixAssetsBackground}logobranca1.png)`,
                }
            }),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".transcritor--box-video"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                ${variantes_globais.Toolbar()}
    
                        `
                    }
                }
            ]
        }
    },

    // PÁGINA 37 Audio Disciplina
    /*
        FILTRO
            ------> pg[37]
            ------> CMAudio Disciplina]
        AQUI ÉA PÁGINA DE Audio Disciplina
        
    */
    {
        "pagina": 37,
        "nome_page": `Podcast`,
        "tipo": "Audio",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-audio",
        "data": {
            "container_render": `
                <div class="pagina-tipo-audio animation">
    
                    <div class="pagina-tipo-audio--box-audio">
                        <div class="render-audio-container" id="carrosel-audio">
    
                        </div>
                    </div>
    
                    <div class="transcritor--box-audio">
                        <div>
                            <!-- cabeçalho -->
                            <p class="header-transcritor-audio">Transcrição</p>
                        </div>
    
                        <div class="body-transcritor-audio">
                            <!-- body -->
    
                        </div>
    
                        <div class="footer-transcritor-audio">
                            <!-- footer -->
                            <button>Gerar Transcrição</button>
                        </div>
                    </div>
    
                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "handTap":{
                "ativo":false,
            },
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": variantes_globais.Ferramentas([
                {
                    container: "icons-action--container",
                    Videoaula: {
                        ativo: true
                    },
                    Ferramentas: {
                        ativo: true
                    },
                    FullScreen: {
                        ativo: true
                    }
                },
                {
                    container: "box-tools-inline",

                    Destacar: {
                        ativo: false,
                        nome: "Destacar"
                    },
                    Notas: {
                        ativo: true,
                        nome: "Notas"
                    },

                    Download: {
                        ativo: true,
                        nome: "Download"
                    },
                    Dicionario: {
                        ativo: true,
                        nome: "Dicionario"
                    },
                    close: {
                        ativo: true
                    }
                }
            ]),
            "marcador": [{
                "tipo": "p",
                "posicao": 0,
                "palavras": "Olá, estudante! Bem-vindo à Unidade 1!",
                "attr_unitario": {
                    "Olá, estudante! Bem-vindo à Unidade 1!": {
                        "attr": "font-weight=[999], Font-size=[18px]",

                    },

                },
                // "fundo": "blue",
                // "corTexto": "black",
                // "padding": "0.3rem",


            }],
            "cores": {
                "sidebar": "#000000",
                "fundo": "#011C41",
                "icones": "white",
                // Cores de icones Especificas
                "iconesEspecificos": {
                    ".openAnnotation": {
                        "cor": "white",
                    }
                }
            },
            "setas": {
                "corSetas": "#fff",
                "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 8 e Transcritor
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".transcritor--box-audio",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                },
                "_renderizar_audio": {
                    "status": true,
                    "onde_colocar_audio": ".render-audio-container",
                },

            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca({
                logo: {
                    logo_img: `url(${_prefixAssetsBackground}logobranca1.png)`,
                }
            }),
            // Animação para Texto API
             "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".transcritor--box-audio"
                    }
                }
            ]
        }
    },

    // PÁGINA 38 Indicação de Leitura
    /*
        FILTRO
            ------> pg[38]
            ------> CM[Indicação de Leitura]
        AQUI ÉA PÁGINA DE Indicação de Leitura
        
    */
    {
        "pagina": 38,
        "nome_page": `Indicação de Leitura`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                    <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ">
                                <div class="container p-4 animate-info">
                                    <!-- Linha para colunas lado a lado em telas grandes e empilhadas em telas pequenas -->
                                    <div class="row justify-content-center">

                                        <!-- Primeira Coluna: Responsiva -->
                                        <div class="col-12 col-md-6 d-flex gap-1 align-items-center justify-content-around container-livro-img-thumb">
                                            <!-- Coluna de Thumbnails -->
                                            <div class="thumbnails-container-render-content"  >

                                            <div class="d-flex" id="thumbnails-container">
                                            
                                            </div>
                                                <!-- As thumbnails serão carregadas dinamicamente aqui -->
                                            </div>

                                            <!-- Coluna de Imagem Principal -->
                                            <div class="col-md-5 container-livro-img-thumb-content">
                                                <div class=" position-relative h-100" style="border:none;background:none;">
                                                    <img src="" id="preview-img"
                                                        alt="A imagem é a capa do livro sugerido."
                                                        class="w-100 rounded">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Segunda Coluna: Conteúdo Dinâmico -->
                                        <div class="col-12 col-md-6 d-flex flex-column justify-content-center gap-1 text-center content-livro-action" id="content-livro-action">
                                            <!-- O conteúdo do livro será carregado aqui -->
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap":{
                "ativo":false,
            },
            "inserir_estilo_pagina": [
                {
                    "url": `${_prefixConfCss}Lista.css`
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": `${_prefixConfJS}LivrosThu.js`
                }
            ],
            // "marcador": [
            //     {
            //         "tipo": "p",
            //         "posicao": 2,
            //         "palavras": "veja aqui a Importância",
            //         "palavrasIndex": [{ "veja aqui a Importância": [0] }],  // se tiver vazio ele pegar todas as palavras dentro da posicao e do elemento especificado se tiver limitado [1,2,3] ou [3] ele pega apenas os elementos mapeados    
            //         // Atributos Gerais
            //         "attr": `  
            //       cursor=[pointer] , border-radius=[5px] ,  /* border=[2px solid #000] */
            //     `,
            //         // Criar um Estilo Geral
            //         // "attr_inline": `

            //         // `,
            //         // Atributos Especificos
            //         "attr_unitario": {
            //             "veja aqui a Importância": {
            //                 // "attr": "background=[red],color=[white]",
            //                 "attr_inline": "id=[#1], class=[bt-1 p-2 ] ",
            //             }
            //         },
            //         // "fundo": "blue",
            //         // "corTexto": "black",
            //         "padding": "0.3rem",
            //         "onclick": [

            //             {
            //                 "palavra": "veja aqui a Importância",
            //                 "acao": "onclick",
            //                 "funcao_script": `
            //                 function e_imp11() {
            //                       Swal.fire(
            //                         {   icon:"info",
            //                             // title:"econômica",
            //                             // customClass: {
            //                             //     popup:"my-poup"
            //                             // },
            //                             heightAuto: false,
            //                             text:" Um teste com alta sensibilidade é crucial para minimizar o número de falsos negativos (FN), garantindo que a maioria dos indivíduos doentes seja identificada.",
            //                             // footer:"<a href='#'>Baixar Conceito</a>"
            //                         }
            //                     );


            //                 }
            //             `,
            //                 "funcao": "e_imp11()"
            //             },


            //         ]

            //     },

            // ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    }
                ]
            },
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 39 Saiba Mais
    /*
        FILTRO
            ------> pg[39]
            ------> CM[Saiba Mais]
        AQUI ÉA PÁGINA DE Saiba Mais
        
    */
    {
        "pagina": 39,
        "nome_page": `Saiba Mais`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `

               <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container-saibamais--content w-100">
                            <div class="container-saibamais w-100 h-100 ">
                                <!-- Seção 1 -->
                                <button class="accordion-saibamais">
                                    <i data-lucide="link"></i> Vídeo - Teste diagnóstico: sensibilidade, especificidade, valor preditivo positivo e negativo.
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <div class="panel-saibamais">
                                    <p>
                                        Para fortalecer o processo de ensino aprendizagem, assista ao vídeo: <strong>"Teste diagnóstico: sensibilidade, especificidade, valor preditivo positivo e negativo"</strong>. 
                                    </p>
                                    <div class="video-container">
                                        <iframe src="https://www.youtube.com/embed/GJ_vTs1bkwc" allowfullscreen></iframe>
                                    </div>
                                </div>

                                <!-- Seção 2 -->
                                <button class="accordion-saibamais">
                                    <i data-lucide="link"></i>Vídeo - Citometria de Fluxo
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <div class="panel-saibamais">
                                    <p>Para fortalecer o processo de ensino aprendizagem, assista ao vídeo <strong>Citometria de Fluxo</strong>.</p>
                                    <div class="video-container">
                                        <iframe src="https://www.youtube.com/embed/FsPJgOIRkdU" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap":{
                "ativo":false,
            },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "beforebegin",
                    "src": `${_prefixConfJS}saibaMais.js`
                }
            ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".transcritor--box-video"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                ${variantes_globais.Toolbar()}
    
                        `
                    }
                }
            ]
        }
    },


    // PÁGINA 40 Página da Atividade
    /*
        FILTRO
            ------> pg[40]
            ------> CM[Página da Atividade]
        AQUI ÉA PÁGINA DE Página da Atividade
        
    */
    // PAGINA DE ATIVIDADES 40
    {
        "pagina": 40,
        "nome_page": `Atividade de Fixação`,
        "tipo": "Atividade",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-atividade",
        "data": {
            "container_render": `
                <div class="pagina-tipo-atividade animation">
                    <div class="container-fluid">
                        <!-- ALERTA DE INFORMAÇÃO -->
                        <div class="alert overflow-hidden alert-info d-flex flex-column gap-2" role="alert">
                            <div class="row">
                                <div class="col-md-12">

                                    <!-- Cabeçalho do alerta com ÍCONE LUCIDE + TÍTULO -->
                                    <div class="d-flex align-items-center mb-2">
                                        <i data-lucide="info" class="lucide-icon me-2"></i>
                                        <h5 class="mb-0">Atividade de Fixação ${__configuracoesServidor__?.unidade?.sumario_header || __configuracoesServidor__?.unidade?.sumario_header !=="" ?  `<strong class="nomeAtividadePage bg-light p-1 rounded">${__configuracoesServidor__?.unidade?.sumario_header}</strong>`:`` }</h5>
                                    </div>

                                    <!-- Texto de introdução -->
                                    <p class="mb-1">
                                        Antes de iniciar a atividade, lembre-se: esta atividade de fixação
                                        contém questões de múltipla escolha, cada uma com apenas
                                        <strong>1 alternativa correta</strong>. Verifique o feedback de cada escolha
                                        antes de seguir adiante. Essa atividade foi criada para
                                        <strong>fixar seu conhecimento</strong>.
                                    </p>

                                </div>
                            </div>

                            <!-- LISTA (list-group) PARA ITENS IMPORTANTES -->
                            <div class="row ">
                                <div class="col-md-7">
                                    <ol class="lista-customizada-ol">
                                        <li class="_sugirEsquerdaAndando_1" background: #8ebbf1;>
                                            <p>Revise cada questão com calma.
                                            </p>
                                        </li>
                                        <li class="_sugirEsquerdaAndando_2">
                                            <p>Leia o feedback após escolher a resposta.</p>
                                        </li>

                                        <li class="_sugirEsquerdaAndando_3">
                                            <p>Boa sorte e bons estudos!</p>
                                        </li>
                                    </ol>
                                </div>

                                <div class="col-md-5 mt-md-3  d-flex justify-content-center align-content-center align-items-center">
                                    <button class="btn-atividades-questoes continue-application"
                                        onclick="abrirModalAtividade('_bt',this)">
                                        <div>
                                            <div class="pencil"></div>
                                            <div class="folder">
                                                <div class="top">
                                                    <svg viewBox="0 0 24 27">
                                                        <path
                                                            d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div class="paper"></div>
                                            </div>
                                        </div>
                                        Iniciar
                                    </button>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
        `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "handTap":{
                "ativo":false,
            },
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [
                {
                    "onde": "",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "#000000",
                // "fundo": "#011C41",
                // "icones": "white",
                // Cores de icones Especificas
                // "iconesEspecificos":{
                //     ".openAnnotation":{
                //         "cor":"white",
                //     }  
                // }
            },
            "configuracoes_gerais": {},
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                animate__animated animate__fadeInDown animate__slow
            `
            }],
            "modulos": []

        }
    },


    // PÁGINA 41 Síntese da Unidade
    /*
        FILTRO
            ------> pg[41]
            ------> CM[Síntese da Unidade]
        AQUI ÉA PÁGINA DE Síntese da Unidade
        
    */
    {
        "pagina": 41,
        "nome_page": `Síntese da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `

               <div class="pagina-tipo-texto p-3 animation">
                    <div class="pagina-tipo-texto--box-texto  bg-white rounded-3 shadow-lg">
                       <div class="container" >
                         <div>
                            <p class="mb-2">Nesta unidade, vimos que o uso adequado de técnicas sorológicas e imunoensaios é fundamental para a precisão diagnóstica e para o avanço de pesquisas biomédicas. A compreensão da titulação e diluição é essencial para preparar amostras e determinar com exatidão as concentrações de substâncias em soluções. </p>
                            <p class="mb-2">A distinção entre soros policlonais e monoclonais também é crucial, especialmente pela alta especificidade dos monoclonais, o que os torna preferidos em muitos contextos laboratoriais. Além disso, discutimos a importância dos controles de qualidade, tanto internos quanto externos, e da validação de testes, destacando conceitos como sensibilidade, especificidade e valores preditivos. Esses parâmetros asseguram que os testes sorológicos sejam confiáveis, reproduzíveis e precisos.</p>
                            <p class="mb-2">Nos imunoensaios, tanto os métodos sem marcadores, como as reações de precipitação e aglutinação, quanto os métodos com marcadores, como ELISA e RIA, desempenham papéis essenciais no diagnóstico e na pesquisa. Esses ensaios, especialmente com a utilização de tecnologias como a citometria de fluxo e a imunofluorescência, ampliam nossa capacidade de identificar, quantificar e estudar diferentes tipos de células e moléculas. Assim, as técnicas e os conceitos abordados aqui formam a base para uma prática laboratorial eficiente, contribuindo para diagnósticos mais precisos e tratamentos mais eficazes. </p>
                        </div>
                        <div>
                                      <strong class="rough-marcacao fs-3" style="color:#011c41;">Até Breve</strong>   
                        </div>
                       </div>
                    </div>
                </div>


            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap":{
                "ativo":false,
            },
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "beforebegin",
                    "src": ""
                }
            ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
            "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },


    // PÁGINA 42 Síntese da Unidade
    /*
        FILTRO
            ------> pg[42]
            ------> CM[Síntese da Unidade]
        AQUI ÉA PÁGINA DE Síntese da Unidade
        
    */
    {
        "pagina": 42,
        "nome_page": `Referências`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    
                    <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto  p-4 ">
                            <div class="container container-referencia bg-white rounded-3 shadow-lg">
    
                                <div class="row lista-referencias-bibliograficas ">
    
                                    <div class="col-md-7">
                                        <ul>
                                             <li>
                                                <strong class="d-block text-muted">RIBEIRO, Helem F.; VAZ, Lisiane S.; ZANELATTO, Carla; et al. Imunologia clínica.</strong>
                                                <em class="d-block text-muted">Grupo A, 2019. E-book. ISBN 9788533500716.</em>
                                                <span class="d-block text-muted">Disponível em: <a href="https://integrada.minhabiblioteca.com.br/#/books/9788533500716/" target="_blank" class="text-primary">https://integrada.minhabiblioteca.com.br/#/books/9788533500716/</a> Acesso em: 17 jun. 2024.</span>
                                            </li>
            
                                        </ul>
                                    </div>
    
                                    <div class="col-md-5">
                                        
                                        <img src="${_prefixUnidade}LogoReferencia.png" class="img-fluid rounded shadow-lg" alt="Logo Referência">
    
                                    </div>
    
                                </div>
    
    
                            </div>
                        </div>
                    </div>
    
    
                `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
             "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            "handTap":{
                "ativo":false,
            },
            "inserir_estilo_pagina": [
                {
                    "url": `${_prefixConfCss}referenciasBibliograficas.css`
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "beforebegin",
                    "src": ""
                }
            ],
            "ferramentas": variantes_globais.Ferramentas(),
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },

            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": variantes_globais.LogoMarca(),
            // Animação para Texto API
             "animacao_texto": {
                "ativo": true,
                "animacoes": [
                    {
                        "animacoes_ativar": true,
                        "animacao": 'animate__animated animate__fadeInDown animate__slow_text'
                    }
                ]
            },
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                                animate__animated animate__fadeInDown animate__slow
                            `
            }],
            "ouvinte": {
                "ativo": true,
                "leitor": true,
            },
            "toolbar": {
                "ativo": true,
                "refTools": ['editar'],
                "toolbarHtml": `
                          ${variantes_globais.Toolbar()}

                `
            }
        }
    },




]