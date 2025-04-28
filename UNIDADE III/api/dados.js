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
            "container_render":
                `       
    
                    <!-- Container do texto animado -->
                    <div id="text-container-capa">
                        <div class="animated-text">Imunologia Clínica</div>
                        <div id="underline"></div>
                        <div id="second-text">Aspectos clínicos na imunologia</div>
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
                            <p>Olá, estudante! </p>
                            <p>
                                Nesta unidade, você irá aprender sobre os aspectos clínicos e imunologicos do Transplante, das Doenças
                                Autoimunes e das Imunodeficiências. Esse aprendizado é fundamental para que o estudante compreenda os
                                mecanismos imunológicos envolvidos em transplantes, doenças autoimunes e imunodeficiências, capacitando-o a
                                diagnosticar e tratar essas condições complexas, além de contribuir para avanços na imunoterapia e medicina
                                personalizada.
                            <p>
                                A competência a ser desenvolvida na unidade: Atuar multiprofissionalmente, interdisciplinarmente e
                                transdisciplinarmente com extrema produtividade na promoção da saúde baseado na convicção científica, de
                                cidadania e de ética.
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
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="objetivo-aprendizagem-elemento">
                                <div class="objetivo-aprendizagem-elemento--box">
                                    
                                    <img src="${_prefixAssetsIcons}target.png" class="_animacaoDeFleschaSurgindo" />
                                    <div class="objetivo-aprendizagem-elemento--img-title">
                                        <h1>Objetivos de aprendizagem</h1>
                                    </div>
                                    <ol class="list-group list-group-numbered  ">
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Compreender a imunologia envolvida nos transplantes e como o sistema imunológico reage aos aloantígenos.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Reconhecer a importância da memória imunológica e da imunidade celular no contexto dos transplantes.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Compreender o papel da tolerância imunológica na prevenção da autoimunidade.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                           <p>dentificar os mecanismos pelos quais ocorre a quebra da autotolerância e o desenvolvimento de doenças autoimunes.</p>
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
                "url": `${_prefixConfCss}SaibaMais.css`
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
                                    
                                        <ol class="list-group list-group-numbered "  class="list-group list-group-numbered" style="--list-start: 4;">
                                            <li class="list-group-item list-group-item-action list-group-item-info">
                                               <p>Analisar a interação entre fatores genéticos e ambientais no desencadeamento das doenças autoimune</p>
                                            </li>
    
                                            <li class="list-group-item list-group-item-action list-group-item-info">
                                                <p>Compreender as diferenças entre imunodeficiências primárias e adquiridas.</p>
                                            </li>
                                            <li class="list-group-item list-group-item-action list-group-item-info">
                                                <p>Entender a importância da investigação laboratorial na identificação e diagnóstico das imunodeficiências.</p>
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
                "url": `${_prefixConfCss}SaibaMais.css`
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
            "animacao_texto": [{
                "indice": "all", // 0 | all
                "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
            }],
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

    // PÁGINA 5 Imunologia dos transplantes
    /*
        FILTRO
            ------> pg[5]
            ------> CM[Imunologia dos transplantes]
        AQUI ÉA PÁGINA DE Imunologia dos transplantes
        
    */
    {
        "pagina": 5,
        "nome_page": `Imunologia dos transplantes`,
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

                                        <h4 style="color:#011c41; text-align:left;">Imunologia dos transplantes</h4>
                                        <p>O transplante é amplamente utilizado para substituir órgãos e tecidos não funcionais por órgãos ou tecidos saudáveis. Esse procedimento envolve a remoção de células, tecidos ou órgãos, chamados enxertos, de um indivíduo e sua transferência para outro indivíduo (geralmente). O doador é o indivíduo que fornece o enxerto, enquanto o receptor ou hospedeiro é o indivíduo que recebe o enxerto. Quando o enxerto é colocado em sua localização anatômica normal, o procedimento é denominado transplante ortotópico; quando é colocado em uma localização diferente, é denominado transplante heterotópico. A transfusão, por outro lado, refere-se à transferência de células sanguíneas circulantes ou de plasma de um indivíduo para outro (ABBAS, 2023).</p>

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

    // PÁGINA 6 Imunologia dos transplantes
    /*
        FILTRO
            ------> pg[6]
            ------> CM[Imunologia dos transplantes]
        AQUI ÉA PÁGINA DE Imunologia dos transplantes
        
    */
    {
        "pagina": 6,
        "nome_page": `Imunologia dos transplantes`,
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
                                        <h4 style="color:#011c41; text-align:left;">Princípios gerais</h4>
                                        <p>O transplante de células ou tecidos de um indivíduo para um indivíduo geneticamente não idêntico leva invariavelmente à rejeição do transplante devido a uma resposta imunológica adaptativa</p>
                                    </div>
                                </div>
                                   <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-9-80 mt-2">
                                        <p>O processo tem de rejeição tem características: de memória, de especificidade e é mediado por linfócitos. O conhecimento de que a rejeição do enxerto é o resultado de uma resposta imune adaptativa surgiu com base em experimentos demonstrando que o processo tem características de memória e especificidade, além de ser mediado por linfócitos. </p>
                                          <p>Observe, no infográfico ao lado, como ocorre a rejeição de primeira e segunda fase de aloenxertos. Os resultados dos experimentos apresentados indicam que a rejeição do enxerto apresenta as características das respostas imunes adaptativas, ou seja, memória e mediação por linfócitos.</p>
                                    </div>

                                    <div class="col-md-3-20 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}principiosgerais.png" class="img-fluid principiosgerais" alt="Figura: Rejeição de primeira e segunda fase de aloenxertos." />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Figura: Rejeição de primeira e segunda fase de aloenxertos. 
                                        Fonte: Abbas (2023).</p>    
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
            // "tesseract": {
            //     "ativo": true,
            //     "ocr":
            //         [
            //             {
            //                 "_class": ".principiosgerais",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "Faça o resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
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

    // PÁGINA 7 Imunologia dos transplantes - CONTINUACAO
    /*
        FILTRO
            ------> pg[7]
            ------> CM[Imunologia dos transplantes- CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunologia dos transplantes - CONTINUACAO
        
    */
    {
        "pagina": 7,
        "nome_page": `Imunologia dos transplantes`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <p>Os imunologistas de transplantes desenvolveram um vocabulário especial para descrever os tipos de células e tecidos encontrados no contexto dos transplantes:</p>

                            <div class="row justify-content-center gap-1 ">

                                <!-- Enxerto Autólogo -->
                                <div class="col-md-3-3 _sugirEsquerdaAndando_1 shadow" style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Enxerto Autólogo</h5>
                                            <p class="card-text fs--9">O enxerto autólogo envolve a transferência de células, tecidos ou órgãos de um indivíduo para o mesmo indivíduo. Nesse tipo de transplante, não há rejeição do enxerto, pois o material transplantado é geneticamente idêntico ao receptor. Exemplos comuns de enxertos autólogos incluem a utilização de pontes de safena ou enxertos de pele em procedimentos cirúrgicos.</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Enxerto Singênico -->
                                <div class="col-md-3-3 _sugirDireitaAndando_2 shadow" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Enxerto Singênico</h5>
                                            <p class="card-text fs--9">
                                               No enxerto singênico, as células, tecidos ou órgãos são transferidos entre dois indivíduos geneticamente idênticos. Assim como no enxerto autólogo, não há rejeição nesse tipo de transplante, pois o material transplantado é reconhecido como próprio pelo sistema imunológico do receptor. Esse tipo de enxerto é menos comum, mas exemplifica a ausência de rejeição em casos de identidade genética.
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
            "marcador": [
                {
                    "tipo": "p",
                    "posicao": 1,
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
                                        text:"",
                                        // footer:"<a href='#'>Baixar Conceito</a>"
                                    }
                                );
                            

                            }
                        `,
                            "funcao": "e_imp1()"
                        },


                    ]

                },

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

    // PÁGINA 8 Imunologia dos transplantes - CONTINUACAO
    /*
        FILTRO
            ------> pg[8]
            ------> CM[Imunologia dos transplantes- CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunologia dos transplantes - CONTINUACAO
        
    */
    {
        "pagina": 8,
        "nome_page": `Imunologia dos transplantes`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <div class="row justify-content-center gap-1 ">

                                <!-- Enxerto Alogênico -->
                                <div class="col-md-3-3 _sugirEsquerdaAndando_1 shadow" style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Enxerto Alogênico</h5>
                                            <p class="card-text fs--9">Os enxertos alogênicos envolvem a transferência de células, tecidos ou órgãos entre dois indivíduos geneticamente diferentes. Nesse caso, a rejeição do enxerto é comum devido à presença de aloantígenos, que são reconhecidos como estranhos pelo sistema imunológico do receptor. A maioria dos transplantes realizados em humanos são alogênicos e requerem imunossupressão para prevenir a rejeição.</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Enxerto Xenogênico -->
                                <div class="col-md-3-3 _sugirDireitaAndando_2 shadow" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Enxerto Xenogênico</h5>
                                            <p class="card-text fs--9">
                                               Os enxertos xenogênicos ocorrem entre indivíduos de espécies diferentes, como transplantes de órgãos de porcos para humanos. Nesse tipo de transplante, a rejeição é intensa devido à presença de xenoantígenos, que são altamente imunogênicos para o receptor. Os enxertos xenogênicos representam um desafio significativo devido à resposta imunológica agressiva contra os tecidos do doador.
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
            "marcador": [
                {
                    "tipo": "p",
                    "posicao": 1,
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
                                        text:"",
                                        // footer:"<a href='#'>Baixar Conceito</a>"
                                    }
                                );
                            

                            }
                        `,
                            "funcao": "e_imp1()"
                        },


                    ]

                },

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

    // PÁGINA 9 Imunologia dos transplantes
    /*
        FILTRO
            ------> pg[9]
            ------> CM[Imunologia dos transplantes]
        AQUI ÉA PÁGINA DE Imunologia dos transplantes
        
    */
    {
        "pagina": 9,
        "nome_page": `Imunologia dos transplantes`,
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
                                        <h4 style="color:#011c41; text-align:left;">Resposta imune adaptativa aos aloenxertos</h4>
                                        <p>Os antígenos que estimulam a resposta imunológica adaptativa contra aloenxertos são proteínas de histocompatibilidade, codificadas por genes polimórficos que diferem entre os indivíduos. Os animais de diferentes cepas de linhagens puras, e os indivíduos em uma espécie (exceto gêmeos idênticos), diferem nos genes que herdam, incluindo os genes de histocompatibilidade. As moléculas responsáveis por reações de rejeição fortes e rápidas são as do MHC, que ligam e apresentam os peptídios às células T. </p>
                                        <p>As moléculas alogênicas do MHC de um enxerto podem ser apresentadas para o reconhecimento pelas células T do receptor de duas maneiras diferentes, chamadas vias direta e indireta. </p>
                                    </div>
                                </div>
                                   <div class="col-md-12">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12 ">
                                        <p>O <strong style="color:#011c41;">reconhecimento direto do aloantígeno</strong> ocorre quando as células T alorreativas se ligam diretamente a uma molécula do complexo principal de histocompatibilidade (MHC) alogênica intacta com um peptídio ligado presente em uma célula dendrítica (DC) ou outra célula apresentadora de antígeno (APC) do enxerto (doador), no interior dos linfonodos (ABBAS, 2023).</p>
                                    </div>
            
                                    <div class="col-md-12">
                                        <button class="css-button-shadow-border-sliding--sky  " onclick="abrirZoomist('${_prefixUnidade}reconhecimentodireitosaloantigenos.png')" >Click aqui e veja sobre reconhecimento direto do aloantígeno</button>
                                        <!--
                                        <button class="css-button-shadow-border-sliding--sky reconhecimentodireitosaloantigenos"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg> </button>                        
                                        -->
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
            // "tesseract": {
            //     "ativo": true,
            //     "ocr":
            //         [
            //             {
            //                 // "_class": ".progressaoedesfecho",
            //                 "_btn": ['.reconhecimentodireitosaloantigenos'],
            //                 "_link": `${_prefixUnidade}reconhecimentodireitosaloantigenos.png`,
            //                 "prompt": "Faça o resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
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

    // PÁGINA 10 Imunologia dos transplantes
    /*
        FILTRO
            ------> pg[10]
            ------> CM[Imunologia dos transplantes]
        AQUI ÉA PÁGINA DE Imunologia dos transplantes
        
    */
    {
        "pagina": 10,
        "nome_page": `Imunologia dos transplantes`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">
                          <div class="container">
                            <div class="col-md-12">
                                         <p>As células T CD4+ ou CD8+ do receptor podem reconhecer diretamente as moléculas do MHC de classe II ou de classe I do doador, respectivamente, e se diferenciarão em células T auxiliares ou linfócitos T citotóxicos (CTLs). Os CTLs reconhecerão diretamente o mesmo complexo MHC-peptídio do doador exibido nas células teciduais do enxerto e destruirão essas células (ABBAS, 2023).</p>
                                    </div>
                                   <div class="row align-items-center">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-7 mt-2">
                                            <p>O <strong style="color:#011c41;">reconhecimento indireto do aloantígeno </strong> ocorre quando as moléculas de MHC alogênicas originárias das células do enxerto são capturadas e processadas pelas APCs do receptor e os fragmentos peptídicos das moléculas de MHC alogênicas contendo resíduos de aminoácidos polimórficos são ligados e apresentados pelas moléculas de MHC do receptor (próprias).</p>
                                            <p>As células T auxiliares MHC-específicas do doador geradas dessa maneira podem auxiliar as células B a produzir anticorpos específicos para o MHC do doador que podem lesionar as células do enxerto. As células T auxiliares podem também ser ativadas no enxerto por macrófagos do receptor apresentando os mesmos peptídios derivados do MHC do doador, levando à lesão inflamatória do enxerto.</p>
                                    
                                    </div>

                                    <div class="col-md-5 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}reconhecimentodireitosaloantigenos2.png" class="img-fluid reconhecimentodireitosaloantigenos2" alt="IFigura: Representação do reconhecimento indireto do aloantígeno." />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Figura: Representação do reconhecimento indireto do aloantígeno. Fonte: Abbas (2023).</p>    
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
            // "tesseract": {
            //     "ativo": true,
            //     "ocr":
            //         [
            //             {
            //                 "_class": ".reconhecimentodireitosaloantigenos2",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "Faça o resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
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

    // PÁGINA 11 Padrões e mecanismos de rejeição dos aloenxertos
    /*
        FILTRO
            ------> pg[11]
            ------> CM[Padrões e mecanismos de rejeição dos aloenxertos]
        AQUI ÉA PÁGINA DE Padrões e mecanismos de rejeição dos aloenxertos
        
    */
    {
        "pagina": 11,
        "nome_page": `Padrões e mecanismos de rejeição dos aloenxertos`,
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

                                        <h4 style="color:#011c41; text-align:left;">Padrões e mecanismos de rejeição dos aloenxertos</h4>
                                        <p>Por razões históricas, a rejeição do enxerto é classificada com base no tempo de ocorrência após o transplante e nas características histopatológicas, em vez de ser baseada nos mecanismos efetores imunes. Com base na experiência adquirida com transplantes renais, os padrões histopatológicos são denominados hiperagudo, agudo e crônico. É útil considerar a rejeição no contexto desses padrões, pois o mecanismo imunológico da rejeição se correlaciona bem com esses padrões. Nossa discussão sobre os tipos de rejeição enfatizará os mecanismos subjacentes, em vez das características patológicas ou clínicas (ABBAS, 2023).</p>

                                    </div>

                                    <div class="col-md-12 d-flex flex-column gap-1">

                                        <h4 style="color:#011c41; text-align:left;">Rejeição Hiperaguda</h4>
                                        <p>A rejeição hiperaguda é uma forma grave e imediata de rejeição em transplantes, caracterizada pela rápida formação de trombos no enxerto logo após o procedimento. Essa rejeição é mediada por anticorpos naturais direcionados contra antígenos do complexo principal de histocompatibilidade (MHC) estranhos e contra as células endoteliais do doador.</p>
                                        <p>Durante a rejeição hiperaguda, a exposição do endotélio do enxerto leva à ativação extensiva da cascata de coagulação, resultando na formação de trombos que obstruem a circulação sanguínea no órgão transplantado. Essa obstrução compromete severamente a viabilidade do enxerto e pode levar à falência do órgão transplantado em um curto período de tempo.</p>

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

    // PÁGINA 12 Padrões e mecanismos de rejeição dos aloenxertos - CONTINUACAO
    /*
        FILTRO
            ------> pg[12]
            ------> CM[Padrões e mecanismos de rejeição dos aloenxertos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Padrões e mecanismos de rejeição dos aloenxertos - CONTINUACAO
        
    */
    {
        "pagina": 12,
        "nome_page": `Padrões e mecanismos de rejeição dos aloenxertos`,
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
                                            <div class="d-flex flex-column gap-2">
                                                <p>Um fator importante na rejeição hiperaguda é a incompatibilidade do sistema ABO entre o doador e o receptor. A presença de anticorpos naturais contra os antígenos do sistema ABO pode desencadear uma resposta imune aguda e intensa, resultando na rápida destruição do enxerto. Por esse motivo, a compatibilidade ABO é uma consideração crucial na seleção de doadores e receptores para transplantes.</p>
                                                <p>Devido à gravidade e à rápida progressão da rejeição hiperaguda, é considerada uma grande barreira ao xenotransplante, que envolve transplantes entre espécies diferentes. A presença de anticorpos pré-formados contra antígenos xenogênicos torna os xenotransplantes especialmente suscetíveis à rejeição hiperaguda, limitando a viabilidade dessa abordagem na prática clínica.</p>
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
                "ativo": false,
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

    // PÁGINA 13 Padrões e mecanismos de rejeição dos aloenxertos
    /*
        FILTRO
            ------> pg[13]
            ------> CM[Padrões e mecanismos de rejeição dos aloenxertos]
        AQUI ÉA PÁGINA DE Padrões e mecanismos de rejeição dos aloenxertos
        
    */
    {
        "pagina": 13,
        "nome_page": `Padrões e mecanismos de rejeição dos aloenxertos`,
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
                                    <div class="col-md-12 d-flex flex-column gap-2">

                                        <h4 style="color:#011c41; text-align:left;">Rejeição Aguda</h4>
                                        <p>A rejeição aguda é uma forma comum de rejeição em transplantes, caracterizada pela lesão vascular e parenquimatosa mediada por linfócitos T e anticorpos, geralmente ocorrendo aproximadamente uma semana após o procedimento de transplante. Durante a rejeição aguda, ocorre uma resposta imune direcionada contra o enxerto, resultando em inflamação e dano tecidual no órgão transplantado.</p>
                                        <p>Os linfócitos T desempenham um papel central na rejeição aguda, migrando para a região do enxerto e desencadeando uma resposta imune específica contra antígenos do doador. Além disso, a presença de anticorpos contra antígenos do MHC do doador pode contribuir para a resposta imune e para a lesão tecidual observada durante a rejeição aguda.</p>

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

    // PÁGINA 14 Controle de qualidade em imunoensaios
    /*
        FILTRO
            ------> pg[14]
            ------> CM[Controle de qualidade em imunoensaios]
        AQUI ÉA PÁGINA DE Controle de qualidade em imunoensaios
        
    */
    {
        "pagina": 14,
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
                                    <span class="message-text">Um dos principais desafios da rejeição aguda é a possibilidade de sua ocorrência
                                        mesmo após um período de estabilidade pós-transplante. Em alguns casos, a rejeição aguda pode surgir
                                        anos após o procedimento inicial, especialmente se a imunossupressão do receptor for reduzida por
                                        qualquer motivo. Portanto, a monitorização contínua dos pacientes transplantados e a avaliação regular
                                        da função do enxerto são essenciais para detectar precocemente sinais de rejeição aguda e intervir
                                        adequadamente.</span>
                                    <!-- <i class="fa fa-times fa-2x exit-button "></i> -->
                                </div>

                                <p>A endotelite, caracterizada pela inflamação do endotélio vascular, é uma manifestação comum durante a
                                    rejeição aguda em transplantes. A presença de linfócitos T e a ativação do sistema imunológico local
                                    contribuem para a lesão endotelial e para a disfunção vascular observada nesse contexto.</p>
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
                    "url": `${_prefixConfCss}Cardsaibamais.css`
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

    // PÁGINA 15 Padrões e mecanismos de rejeição dos aloenxertos
    /*
        FILTRO
            ------> pg[15]
            ------> CM[Padrões e mecanismos de rejeição dos aloenxertos]
        AQUI ÉA PÁGINA DE Padrões e mecanismos de rejeição dos aloenxertos
        
    */
    {
        "pagina": 15,
        "nome_page": `Padrões e mecanismos de rejeição dos aloenxertos`,
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
                                    <div class="col-md-12 d-flex flex-column gap-2">

                                        <h4 style="color:#011c41; text-align:left;">Rejeição Crônica</h4>
                                        <p>A rejeição crônica é uma forma tardia e progressiva de rejeição em transplantes, caracterizada por alterações fibrosas nos vasos sanguíneos do enxerto, podendo levar à obstrução total dos vasos e à perda progressiva da função do órgão transplantado. Diferentemente da rejeição aguda, a rejeição crônica se desenvolve ao longo do tempo e pode ser desencadeada por múltiplos episódios de rejeição aguda não tratados adequadamente.</p>
                                        <p>Durante a rejeição crônica, ocorre um processo de remodelação vascular no enxerto, com deposição de matriz extracelular e proliferação de células musculares lisas, levando à fibrose e à estenose dos vasos sanguíneos. Essas alterações vasculares comprometem a perfusão do órgão transplantado, resultando em disfunção progressiva e, eventualmente, na falência do enxerto.</p>
                                        <p>Os mecanismos exatos que levam à rejeição crônica ainda não são completamente compreendidos, mas acredita-se que a resposta imune crônica e a inflamação de baixo grau desempenhem um papel importante nesse processo. A presença contínua de linfócitos T e de células do sistema imunológico no enxerto pode contribuir para a ativação crônica da resposta imune e para a progressão da fibrose vascular.</p>

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

    // PÁGINA 16 Padrões e mecanismos de rejeição dos aloenxertos  - CONTINUACAO
    /*
        FILTRO
            ------> pg[16]
            ------> CM[Padrões e mecanismos de rejeição dos aloenxertos]
        AQUI ÉA PÁGINA DE Padrões e mecanismos de rejeição dos aloenxertos - CONTINUACAO
        
    */
    {
        "pagina": 16,
        "nome_page": `Padrões e mecanismos de rejeição dos aloenxertos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container position-relative">
                                <div class="card card-saibamais">
                                    <!-- Título "Você sabia?" -->
                                    <div class="row">
                                        <div class="col-md-2">
                                            <img class="voce-sabia-img _esticar" src="${_prefixAssetsIcons}interrogacao.png">
                                        </div>
                                        <div class="col-md-10 w-100">
                                            <h3>Você sabia?</h3>
                                        </div>
                                    </div>

                                    <!-- Texto informativo -->
                                    <div class="row w-100">
                                        <div class="col-md-12">
                                            <p>
                                                A rejeição crônica representa um desafio significativo na prática clínica de transplantes, uma vez que pode resultar na perda irreversível da função do órgão transplantado. Estratégias terapêuticas para prevenir ou tratar a rejeição crônica incluem o uso de imunossupressores, o monitoramento regular da função do enxerto e a identificação precoce de sinais de rejeição crônica, como a deterioração progressiva da função do órgão.
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
                "ativo": false,
                // "imgs_ativas":[0,1]
            },
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/Cardsaibamais.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
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

    // PÁGINA 17 Autoimunidade e doenças autoimunes
    /*
        FILTRO
            ------> pg[17]
            ------> CM[Autoimunidade e doenças autoimunes]
        AQUI ÉA PÁGINA DE Autoimunidade e doenças autoimunes
        
    */
    {
        "pagina": 17,
        "nome_page": `Autoimunidade e doenças autoimunes`,
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
                                    <div class="col-md-12 d-flex flex-column gap-2">

                                        <h4 style="color:#011c41; text-align:left;">Autoimunidade e doenças autoimunes</h4>
                                        <p>A tolerância imunológica é definida como a falta de resposta a um antígeno, induzida pela exposição prévia a esse mesmo antígeno. O termo surgiu com base em observações experimentais, onde animais expostos a um antígeno em determinadas condições não respondiam a esse antígeno em exposições subsequentes, ou seja, toleravam o mesmo antígeno. Quando encontram antígenos, os linfócitos específicos podem ser ativados, induzindo respostas imunes, ou podem ser inativados ou eliminados, levando à tolerância. Um mesmo antígeno pode induzir uma resposta imune ou tolerância, dependendo das condições de exposição e da presença ou ausência de outros estímulos concomitantes, como coestimuladores. </p>
                                        <p>Os antígenos que induzem tolerância são chamados tolerógenos, ou antígenos tolerogênicos, para distingui-los dos imunógenos, que geram imunidade. A tolerância aos autoantígenos, também chamada autotolerância, é uma propriedade fundamental do sistema imunológico normal. A falha na autotolerância resulta em reações imunes contra antígenos próprios (autoantígenos ou antígenos autólogos), denominadas autoimunidade, e as doenças causadas por essas reações são chamadas doenças autoimunes (ABBAS, 2023).</p>
                                    
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

    // PÁGINA 18 Tolerância Imunológica
    /*
        FILTRO
            ------> pg[18]
            ------> CM[Tolerância Imunológica]
        AQUI ÉA PÁGINA DE Tolerância Imunológica
        
    */
    {
        "pagina": 18,
        "nome_page": `Tolerância Imunológica`,
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
                                    <div class="col-md-12 d-flex flex-column gap-2">

                                        <h4 style="color:#011c41; text-align:left;">Tolerância Imunológica</h4>
                                        <p>Os mecanismos de tolerância eliminam ou inativam linfócitos que expressam receptores de alta afinidade para autoantígenos. Durante o processo de geração de um repertório grande e diversificado dos linfócitos, é esperado que algumas células T e B em desenvolvimento em todos os indivíduos possam expressar receptores capazes de reconhecer moléculas normais daquele indivíduo (autoantígenos). Portanto, há um risco de que os linfócitos reajam contra as células e tecidos daquele indivíduo, causando doença. Os mecanismos de tolerância imunológica previnem essas reações (ABBAS, 2023).</p>
                                        <p>A autotolerância pode ser induzida em linfócitos imaturos autorreativos nos órgãos linfoides geradores (tolerância central) ou em linfócitos maduros nos sítios periféricos (tolerância periférica). </p>
                                    
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

    // PÁGINA 19 Tolerância Imunológica - CONTINUACAO
    /*
        FILTRO
            ------> pg[19]
            ------> CM[Tolerância Imunológica - CONTINUACAO]
        AQUI ÉA PÁGINA DE Tolerância Imunológica - CONTINUACAO
        
    */
    {
        "pagina": 19,
        "nome_page": `Tolerância Imunológica`,
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
                                    <!-- Texto explicativo -->
                                    <div class="col-md-8 mt-2">
                                            <p>A tolerância central garante que o repertório de linfócitos naive maduros se torne incapaz de responder a autoantígenos expressos nos órgãos linfoides geradores, como o timo para as células T e a medula óssea para os linfócitos B, também chamados órgãos linfoides primários ou centrais. No entanto, a tolerância central não é perfeita, e muitos linfócitos autorreativos completam sua maturação e estão presentes em indivíduos saudáveis. Portanto, os mecanismos de tolerância periférica são necessários para prevenir a ativação desses linfócitos potencialmente perigosos. Observe, no esquema abaixo, como ocorrem a tolerância central e periférica a autoantígenos.</p>
                                           
                                    
                                    </div>

                                    <div class="col-md-4 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}toleranciacentralautoantigenos.png" class="img-fluid toleranciacentralautoantigenos" alt="Figura: Tolerância central e periférica a autoantígenos." />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Figura: Tolerância central e periférica a autoantígenos.
Fonte: Abbas (2023).</p>    
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
            // "tesseract": {
            //     "ativo": true,
            //     "ocr":
            //         [
            //             {
            //                 "_class": ".toleranciacentralautoantigenos",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "Faça o resumo",
            //                 "idioma": "por",
            //                 "buffer": () => {
            //                     const x = [8, 8];
            //                     return x[0] >> x[1]
            //                 },
            //             }
            //         ]
            // },
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
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

    // PÁGINA 20 Tolerância Imunológica - CONTINUACAO
    /*
        FILTRO
            ------> pg[20]
            ------> CM[Tolerância Imunológica - CONTINUACAO]
        AQUI ÉA PÁGINA DE Tolerância Imunológica - CONTINUACAO
        
    */
    {
        "pagina": 20,
        "nome_page": `Tolerância Imunológica`,
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
             <div class="col-md-12 d-flex flex-column">

                 <h4 style="color:#011c41; text-align:left;">Mecanismos da autoimunidade</h4>
                 <p>A possibilidade de que o sistema imunológico de um indivíduo pudesse reagir contra antígenos
                     autólogos e causar dano tecidual foi avaliada por imunologistas na época em que a
                     especificidade
                     do sistema imunológico para antígenos estranhos foi reconhecida. A autoimunidade é uma causa
                     importante de doenças em humanos, estimando-se que afete pelo menos 2 a 5% da população dos
                     EUA,
                     com a incidência de muitas doenças autoimunes aparentemente em crescimento (ABBAS, 2023). </p>
                 <p>As questões fundamentais a respeito da autoimunidade são:</p>

             </div>

             <div class="col-md-12 d-flex flex-column">

                 <div>
                     <ol class="list-group">
                         <li class="list-group-item d-flex justify-content-between align-items-center"
                             style="background:#8ebbf1;">
                             <span class="badge text-bg-primary rounded-pill"><i data-lucide="check"></i></span>
                             <div class="ms-2 me-auto">
                                 Como a autotolerância falha?
                             </div>

                         </li>
                         <li class="list-group-item d-flex justify-content-between align-items-center"
                             style="background:#8ebbf1;">
                             <span class="badge text-bg-primary rounded-pill"><i data-lucide="check"></i></span>
                             <div class="ms-2 me-auto">
                                 Como os linfócitos autorreativos são ativados?
                             </div>

                         </li>
                     </ol>
                 </div>

             </div>

             <div class="col-md-12 d-flex flex-column gap-2">
                 <p>Respostas a essas perguntas são necessárias para a compreensão da causa e da patogênese das
                     doenças autoimunes, um dos principais desafios da Imunologia. Nosso entendimento de
                     autoimunidade melhorou bastante durante as duas últimas décadas, principalmente em decorrência
                     do desenvolvimento de modelos animais informativos dessas doenças, da identificação de genes
                     que podem predispor à autoimunidade e do aprimoramento de métodos para a análise das respostas
                     imunes em seres humanos (ABBAS, 2023).</p>

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

    // PÁGINA 21 Tolerância Imunológica - CONTINUACAO
    /*
        FILTRO
            ------> pg[21]
            ------> CM[Tolerância Imunológica - CONTINUACAO]
        AQUI ÉA PÁGINA DE Tolerância Imunológica - CONTINUACAO
        
    */
    {
        "pagina": 21,
        "nome_page": `Tolerância Imunológica`,
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
                                            <h1 style="text-align:left;color:#011c41;font-size:1.5rem;">Imunodeficiências
                                            </h1>
                                            <p>O curso normal de uma infecção envolve uma série de eventos coordenados pelo sistema imunológico para combater o agente infeccioso invasor. Esse processo pode ser dividido em duas fases principais: </p>
                                  
                                        </div>
                                    </div>


                                </div>

                                <div class="col-md-12">  


                                        <div class="row ">
                                            <div class="col-md-6 _sugirEsquerdaAndando_1">
                                                <div class="p-3 h-100 text-white" style="background-color:#013865; border-radius: 5px;">
                                                    <h2 style="font-size: 1.25rem;">RESPOSTA IMUNE INATA</h2>
                                                </div>
                                            </div>

                                            <div class="col-md-6 _sugirDireitaAndando_2">
                                                <div class="p-3 h-100 text-white" style="background-color:#0458a7; border-radius: 5px;">
                                                    <h2 style="font-size: 1.25rem;">RESPOSTA IMUNE ADAPTATIVA</h2>   
                                                </div>
                                            </div>
                                        </div>
                                </div>


                                <div class="col-md-12">
                                    <!-- Coluna do texto e imagem -->
                                    <div class="col-md-12 d-flex flex-column gap-2">
                                            <p>O curso normal de uma infecção envolve uma série de eventos coordenados pelo sistema imunológico para combater o agente infeccioso invasor. Esse processo pode ser dividido em duas fases principais: a resposta imune inata e a resposta imune adaptativa. </p>
                                            <p>A integridade do sistema imune é essencial para a defesa contra organismos infecciosos e seus produtos tóxicos e, portanto, para a sobrevivência de todos os indivíduos. Defeitos em um ou mais componentes do sistema imune podem causar distúrbios graves e, muitas vezes, fatais, que são coletivamente chamados doenças por imunodeficiências. </p>
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

    // PÁGINA 22 Tolerância Imunológica - CONTINUACAO
    /*
        FILTRO
            ------> pg[22]
            ------> CM[Tolerância Imunológica - CONTINUACAO]
        AQUI ÉA PÁGINA DE Tolerância Imunológica - CONTINUACAO
        
    */
    {
        "pagina": 22,
        "nome_page": `Tolerância Imunológica`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container">
                            <p class="mb-3">Essas doenças são amplamente classificadas em dois grupos, veja cada um deles abaixo:</p>

                            <div class="row justify-content-center gap-1 ">

                                <!-- imunodeficiências primárias -->
                                <div class="col-md-5 shadow _sugirEsquerdaAndando_1" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">imunodeficiências primárias</h5>
                                            <p class="card-text fs--9">As imunodeficiências primárias são defeitos genéticos que resultam no aumento da suscetibilidade à infecção, que frequentemente se manifesta na fase de lactação e início da infância, mas que, às vezes, é clinicamente detectada, pela primeira vez, posteriormente na vida. </p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- imunodeficiências secundárias -->
                                <div class="col-md-5 shadow _sugirDireitaAndando_2"   style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">imunodeficiências secundárias</h5>
                                            <p class="card-text fs--9">
                                                As imunodeficiências secundárias, ou adquiridas, não são doenças hereditárias, mas se desenvolvem como uma consequência de desnutrição, câncer disseminado, tratamento com fármacos imunossupressores ou infecção de células do sistema imune, especialmente pelo vírus da imunodeficiência humana (HIV), o agente etiológico da síndrome da imunodeficiência adquirida (AIDS).
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

    // PÁGINA 23 Tolerância Imunológica - CONTINUACAO
    /*
        FILTRO
            ------> pg[23]
            ------> CM[Tolerância Imunológica - CONTINUACAO]
        AQUI ÉA PÁGINA DE Tolerância Imunológica - CONTINUACAO
        
    */
    {
        "pagina": 23,
        "nome_page": `Tolerância Imunológica`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container p-4 animate-info">
                                <h4 style="color:#011c41; text-align:left;">Visão geral das Imunodeficiências </h4>
                                <!-- Cartão responsivo -->
                                <div class="container animate-info rounded ">
                                    <div class="row d-flex flex-column flex-md-row align-items-start justify-content-start ">
                                        <div class="row w-100 position-relative container-modal-card-horizontal-text-img">
                                            <!-- Conteúdo do cartão -->
                                            <div class="col-12 col-md-9-5 d-flex flex-column gap-4 p-2 rounded text-justify"
                                                style="background: linear-gradient(90deg, rgba(192,40,39,1) 42%, rgba(237,119,118,1) 100%);">
                                                <p class="text-branco">Os indivíduos com imunodeficiências apresentam uma série de características que indicam uma falha no funcionamento adequado do sistema imunológico. </p>
                                            </div>
                                            <!-- Imagem que vai ao lado ou abaixo dependendo do dispositivo -->
                                            <div class="col-12 col-md-3 text-center imgCardFlutuante">
                                                <img src="${_prefixUnidade}mulhegripadaimg.png"
                                                    alt="Mulher gripada" class="rounded animationImg w-100">
                                                <p class="description-descricao position-absolute bottom-0 start-0 w-100" style="margin:0;">
                                                    Fonte: Canva
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

    // PÁGINA 24 Tolerância Imunológica - CONTINUACAO
    /*
        FILTRO
            ------> pg[24]
            ------> CM[Tolerância Imunológica - CONTINUACAO]
        AQUI ÉA PÁGINA DE Tolerância Imunológica - CONTINUACAO
        
    */
    {
        "pagina": 24,
        "nome_page": `Tolerância Imunológica`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container">
                                <p> Algumas das manifestações comuns em indivíduos com imunodeficiências incluem:</p>
                                <ol class="lista-customizada-ol">
                                    <li class="_sugirEsquerdaAndando_1" background: #8ebbf1;>
                                        <p><strong>Aumento da susceptibilidade a infecções : </strong> Indivíduos com imunodeficiências são mais propensos a desenvolver infecções, muitas vezes de forma recorrente.</p>
                                    </li>
                                    <li class="_sugirEsquerdaAndando_2">
                                        <p><strong>Aumento na severidade das infecções : </strong> As infecções podem ser mais graves e difíceis de tratar em pessoas com imunodeficiências.</p>
                                    </li>
                                    <li class="_sugirEsquerdaAndando_3">
                                        <p><strong>Aumento na duração das infecções : </strong> As infecções podem persistir por mais tempo em indivíduos com comprometimento do sistema imunológico.</p>
                                    </li>
                                    <li class="_sugirEsquerdaAndando_4">
                                        <p><strong>Infecções não usuais : </strong> Podem ocorrer infecções por agentes infecciosos menos comuns em pessoas saudáveis.</p>
                                    </li>
                                </ol>

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

    // PÁGINA 25 Tolerância Imunológica - CONTINUACAO
    /*
        FILTRO
            ------> pg[25]
            ------> CM[Tolerância Imunológica - CONTINUACAO]
        AQUI ÉA PÁGINA DE Tolerância Imunológica - CONTINUACAO
        
    */
    {
        "pagina": 25,
        "nome_page": `Tolerância Imunológica`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container">
                              
                                <ol class="lista-customizada-ol">
                                    <li class="_sugirEsquerdaAndando_1" background: #8ebbf1;>
                                        <p><strong>Infecções com agentes oportunistas : </strong>Indivíduos com imunodeficiências são mais suscetíveis a infecções por agentes oportunistas, que normalmente não causariam doença em pessoas com um sistema imunológico saudável.</p>
                                    </li>
                                    <li class="_sugirEsquerdaAndando_2">
                                        <p><strong>Doenças frequentes : </strong> A ocorrência frequente de infecções é uma característica comum em indivíduos com imunodeficiências.</p>
                                    </li>
                                    <li class="_sugirEsquerdaAndando_3">
                                        <p><strong>Dependência de antibióticos : </strong>  Devido à susceptibilidade aumentada a infecções, indivíduos com imunodeficiências muitas vezes necessitam de tratamento com antibióticos de forma recorrente.</p>
                                    </li>
                                   
                                </ol>

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

    // PÁGINA 26 Tolerância Imunológica - CONTINUACAO
    /*
        FILTRO
            ------> pg[26]
            ------> CM[Tolerância Imunológica - CONTINUACAO]
        AQUI ÉA PÁGINA DE Tolerância Imunológica - CONTINUACAO
        
    */
    {
        "pagina": 26,
        "nome_page": `Tolerância Imunológica`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container">
                                <h4 style="color:#011c41; text-align:left;">Imunodeficiências primárias </h4>
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">
                                        <p>
                                            São defeitos genéticos que resultam no aumento da susceptibilidade à infecção, que
                                            frequentemente se manifesta na infância e início da adolescência. A maioria das
                                            imunodeficiências primárias exibe uma herança autossômica recessiva. Consistem em desordens
                                            imunológicas heterogêneas, capazes de acometer a imunidade adaptativa (resposta imune celular e
                                            humoral) e a imunidade inata (mecanismos inespecíficos de resposta, mediados por barreiras
                                            epiteliais, proteínas do sistema complemento e células, p. ex.: natural killers) (ABBAS, 2023).
                                        </p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <button class="buttonExplorar Sorospoliclonais mt-2 shadow"
                                                    style="--clr: #ab0b0a;font-size:1rem;border-radius:0;"
                                                    onclick="customModal230923920iwoei209382iaspoasi203923()">
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
                                                    Entenda sobre os Defeitos na Imunidade Inata
                                                </button>
                                            </div>

                                            <div class="col-md-6">
                                                <button class="buttonExplorar Sorosmonoclonais mt-2 shadow"
                                                    style="--clr: #0f407a;font-size:1rem;border-radius:0;"
                                                    onclick="customModal230923920iwoei209983892esu92784sdhuy9284ysdj()"
                                                    >
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
                                                    Entenda sobre os Defeitos na Imunidade Adquirida
                                                </button>
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

    // PÁGINA 27 Video Disciplina
    /*
        FILTRO
            ------> pg[27]
            ------> CM[Video Disciplina]
        AQUI ÉA PÁGINA DE Video Disciplina
        
    */
    {
        "pagina": 27,
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

    // PÁGINA 28 Audio Disciplina
    /*
        FILTRO
            ------> pg[28]
            ------> CMAudio Disciplina]
        AQUI ÉA PÁGINA DE Audio Disciplina
        
    */
    {
        "pagina": 28,
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

    // PÁGINA 29 Indicação de Leitura
    /*
        FILTRO
            ------> pg[29]
            ------> CM[Indicação de Leitura]
        AQUI ÉA PÁGINA DE Indicação de Leitura
        
    */
    {
        "pagina": 29,
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

    // PÁGINA 30 Saiba Mais
    /*
        FILTRO
            ------> pg[30]
            ------> CM[Saiba Mais]
        AQUI ÉA PÁGINA DE Saiba Mais
        
    */
    {
        "pagina": 30,
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
                                    <i data-lucide="link"></i> Vídeo - Como acontece o processo de Transplante de Órgãos?.
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <div class="panel-saibamais">
                                    <p>
                                        Para fortalecer o processo de ensino aprendizagem, assista ao vídeo: <strong>"Como acontece o processo de Transplante de Órgãos?"</strong>. 
                                    </p>
                                    <div class="video-container">
                                        <iframe src="https://www.youtube.com/embed/8cFfIVVv1No" allowfullscreen></iframe>
                                    </div>
                                </div>

                                 <!-- Seção 2 -->
                                <button class="accordion-saibamais">
                                    <i data-lucide="link"></i> Vídeo - Doente com muita frequência? entenda o que são imunodeficiências primárias.
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <div class="panel-saibamais">
                                    <p>
                                        Para fortalecer o processo de ensino aprendizagem, assista ao vídeo: <strong>"Doente com muita frequência? entenda o que são imunodeficiências primárias"</strong>. 
                                    </p>
                                    <div class="video-container">
                                        <iframe src="https://www.youtube.com/embed/Dg3oDS0TdjE" allowfullscreen></iframe>
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

    // PÁGINA 31 Página da Atividade
    /*
        FILTRO
            ------> pg[31]
            ------> CM[Página da Atividade]
        AQUI ÉA PÁGINA DE Página da Atividade
        
    */
    {
        "pagina": 31,
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
                                        <h5 class="mb-0">Atividade de Fixação ${__configuracoesServidor__?.unidade?.sumario_header || __configuracoesServidor__?.unidade?.sumario_header !== "" ? `<strong class="nomeAtividadePage bg-light p-1 rounded">${__configuracoesServidor__?.unidade?.sumario_header}</strong>` : ``}</h5>
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
            "inserir_estilo_pagina": [
                {
                    "url": `${_prefixConfCss}Lista.css`
                }
            ],
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
        "animacao_elemento": {
            "ativo": true,
            "animacoes": [
                {
                    "construir_animacao": ".animation",
                    "animacao": 'animate__animated animate__fadeInDown animate__slow'
                }
            ]
        },
            "modulos": []

        }
    },

    // PÁGINA 32 Síntese da Unidade
    /*
        FILTRO
            ------> pg[32]
            ------> CM[Síntese da Unidade]
        AQUI ÉA PÁGINA DE Síntese da Unidade
        
    */
    {
        "pagina": 32,
        "nome_page": `Síntese da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `


            <div class="pagina-tipo-texto p-2">
                <div class="pagina-tipo-texto--box-texto rounded-3 shadow-lg">
                    <div class="container-fluid container-sintese-unidade">
                        <!-- Carousel Bootstrap -->
                        <div id="carouselUnidade-sinteseUnidade" class="carousel slide" data-bs-ride="carousel"
                            data-bs-interval="50000">
                            <div class="carousel-inner position-relative sinteseinner">
                                <!-- Slide 1 -->
                                <div class="carousel-item active">
                                    <div class="d-flex flex-column gap-2">
                                       <p>
                                                O estudo da imunologia dos transplantes aborda a resposta imunológica aos enxertos, especialmente os alogênicos, nos quais o risco de rejeição é significativo. A rejeição pode ser hiperaguda, envolvendo anticorpos pré-formados, aguda, mediada por linfócitos T e anticorpos, ou crônica, caracterizada por fibrose nos vasos do enxerto.

                                            </p>

                                            <p>
                                                A autoimunidade ocorre quando o sistema imunológico ataca tecidos próprios devido à falha na autotolerância, resultando em doenças autoimunes. O avanço na pesquisa, com novos modelos e identificação de predisposições genéticas, tem permitido uma melhor compreensão dessas doenças, cuja incidência está em crescimento.

                                            </p>
                                            <p>
                                                As imunodeficiências podem ser primárias, de origem genética, afetando a imunidade inata e adaptativa desde a infância, ou secundárias, adquiridas ao longo da vida, geralmente relacionadas a condições como desnutrição, câncer ou infecções como HIV, que resulta na AIDS. Ambas comprometem a capacidade de resposta imunológica, aumentando a vulnerabilidade a infecções.
                                            </p>

                                    </div>
                                </div>
                              

                            </div>

                            <!-- Controles de navegação -->
                            <div class="btn-nav-carrosel-container gap-2">
                                <button class="btn-nav-carrosel-sintese-unidade prev-btn controll-carrosel-slider-sintese-unidade"
                                    type="button" data-bs-target="#carouselUnidade-sinteseUnidade" data-bs-slide="prev">
                                    <i class="bi bi-chevron-left"></i>
                                    <span class="visually-hidden">Anterior</span>
                                </button>
                                <button class="btn-nav-carrosel-sintese-unidade next-btn controll-carrosel-slider-sintese-unidade"
                                    type="button" data-bs-target="#carouselUnidade-sinteseUnidade" data-bs-slide="next">
                                    <i class="bi bi-chevron-right"></i>
                                    <span class="visually-hidden">Próximo</span>
                                </button>
                            </div>
                        </div>

                        <div class="w-100">
                            <p class="text-left p-2">
                                <strong class="rough-marcacao fs-3" style="color:#011c41;">Até Breve</strong>
                            </p>
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
                    "posicao": "beforebegin",
                    "src": `${_prefixConfJS}sinteseUnidade.js`
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

    // PÁGINA 33 Referências
    /*
        FILTRO
            ------> pg[33]
            ------> CM[Referências]
        AQUI ÉA PÁGINA DE Referências
        
    */
    {
        "pagina": 33,
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
                                                <span class="d-block text-muted">ABBAS, Abul K.; LICHTMAN, Andrew H.; PILLAI, Shiv. Imunologia Celular e Molecular. [S.l.]:</span>
                                                <span class="d-block text-muted">Grupo GEN, 2023. E-book. ISBN 9788595158924.</span>
                                                <span class="d-block text-muted">Disponível em: <a href="https://integrada.minhabiblioteca.com.br/#/books/9788595158924/" target="_blank" class="text-primary">https://integrada.minhabiblioteca.com.br/#/books/9788533500716/</a> . Acesso em: 17 jun. 2024.</span>
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
            "handTap":{
                "ativo":false,
            },
              "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
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