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
                        <div id="second-text">Imunidade aos microrganismos</div>
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
            "handTap": {
                "ativo": false
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
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto gap-2">
                            <p>Olá, estudante!</p>
    
                            <p>
                                Nesta unidade você aprenderá sobre os mecanismos imunológicos das infecções Bacteriana, das infecções Virais, das infecções fúngicas e das infecções parasitárias, além de aprender sobre os métodos imunológicos utilizados o diagnósticos dessas infecções. Esse aprendizado é crucial para capacitar o estudante a diagnosticar e tratar eficazmente diversas infecções, compreendendo os mecanismos imunológicos subjacentes e aplicando métodos imunológicos avançados, essenciais para a prática clínica e a pesquisa biomédica.
    
                            <p>
                                A competência a ser desenvolvida na unidade: Assimilar as constantes mudanças conceituais e evolução tecnológica apresentadas no contexto mundial.  Nesta unidade, iremos explorar os principais aspectos da imunidade em relação a cinco categorias principais de microrganismos patogênicos: bactérias extracelulares, bactérias intracelulares, fungos, vírus e protozoários, além dos parasitas multicelulares.
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
                                            <p>Compreender os mecanismos da imunidade inata e adaptativa envolvidos na resposta do sistema imunológico contra bactérias.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Explorar os diferentes testes de diagnóstico baseados em reações imunológicas utilizados para identificar infecções bacterianas.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Compreender a imunidade inata e adaptativa envolvidos na resposta do sistema imunológico contra vírus.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                           <p>Explorar os diferentes testes de diagnóstico baseados em reações imunológicas utilizados para identificar infecções virais.</p>
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
                                           <p>Compreender a imunidade inata e adaptativa envolvidos na resposta do sistema imunológico contra parasitos.</p>
                                        </li>

                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Explorar os diferentes testes de diagnóstico baseados em reações imunológicas utilizados para identificar infecções parasitárias.</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Analisar a interação entre os microrganismos e os mecanismos efetores do sistema imunológico, incluindo a capacidade de evasão dos microrganismos.</p>
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

    // PÁGINA 5 Microrganismos
    /*
        FILTRO
            ------> pg[5]
            ------> CM[Microrganismos]
        AQUI ÉA PÁGINA DE Microrganismos
        
    */
    {
        "pagina": 5,
        "nome_page": `Microrganismos`,
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

                                        <h4 style="color:#011c41; text-align:left;">Microrganismos</h4>
                                        <p>Os microrganismos podem causar doenças com variados níveis de gravidade e cronicidade. Em muitos casos, uma infecção é assintomática e se resolve sem necessidade de intervenção. Normalmente, a resposta imunológica é rapidamente desencadeada pela infecção, diminuindo à medida que a infecção é eliminada, e deixa células de memória que podem proporcionar proteção a longo prazo. Doenças recorrentes ocorrem quando a resposta do hospedeiro não consegue erradicar os microrganismos, podendo até contribuir para a progressão da doença. Embora as reações antimicrobianas de defesa do hospedeiro sejam numerosas e variadas, existem diversos aspectos gerais importantes da imunidade aos microrganismos (ABBAS, 2023).</p>

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

    // PÁGINA 6 Microrganismos
    /*
        FILTRO
            ------> pg[6]
            ------> CM[Microrganismos]
        AQUI ÉA PÁGINA DE Microrganismos
        
    */
    {
        "pagina": 6,
        "nome_page": `Microrganismos`,
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
                                    <div class="col-md-7">
                                        <p>No contexto da imunologia, o sangue desempenha um papel fundamental na resposta imune, pois é o principal meio de transporte e distribuição de anticorpos pelo organismo. Um dos principais efetores do sistema de defesa humano são os anticorpos (Acs), os quais são produzidos de forma específica contra um antígeno (Ag) e auxiliam na neutralização de patógenos (RIBEIRO, 2019). Os anticorpos são proteínas produzidas pelas células do sistema imunológico em resposta à presença de antígenos, como bactérias, vírus e outros invasores.</p>
                                    </div>

                                    <div class="col-md-5 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}progressaoedesfecho.png" class="img-fluid progressaoedesfecho" alt="Gráfico representando progressão e desfecho das infecções." />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Figura 1: Progressão e desfecho das infecções. Fonte: Abbas (2023).</p>    

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
            //                 "_class": ".progressaoedesfecho",
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

    // PÁGINA 7 Microrganismos
    /*
        FILTRO
            ------> pg[7]
            ------> CM[Microrganismos]
        AQUI ÉA PÁGINA DE Microrganismos
        
    */
    {
        "pagina": 7,
        "nome_page": `Microrganismos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">


                                    <p>A resposta imune contra microrganismos é um processo complexo e altamente regulado que envolve a interação entre os mecanismos efetores da imunidade inata e adaptativa. Algumas características gerais dessa resposta incluem: </p>

                                    <!-- Grid de informações centralizadas -->
                                    <div class="row ">
                                        <!-- Card 1 -->
                                        <div class="col-md-6 _sugirEsquerdaAndando_1  d-flex box1">
                                            <div class="info-box w-100" style="--card-color: #011c41;">
                                                <h5>Mecanismos Efetores da Imunidade</h5>
                                                <p>A defesa contra microrganismos é mediada por uma variedade de mecanismos efetores, incluindo fagocitose, ativação do complemento, produção de citocinas, resposta inflamatória, produção de anticorpos e atividade citotóxica de células T.</p>
                                            </div>
                                        </div>
                                        
                                        <!-- Card 2 -->
                                        <div class="col-md-6 _sugirDireitaAndando_2 d-flex box3">
                                            <div class="info-box w-100" style="--card-color: #0f407a;">
                                                <h5>Capacidade de Evasão</h5>
                                                <p>A sobrevivência e patogenicidade dos microrganismos são influenciadas pela capacidade de evasão aos mecanismos efetores do sistema imune. Microrganismos patogênicos desenvolvem estratégias para evitar a detecção e a destruição pelo sistema imune, o que pode levar a infecções persistentes e crônicas.</p>
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
            //                 "_class": ".progressaoedesfecho",
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

    // PÁGINA 8 Microrganismos
    /*
        FILTRO
            ------> pg[8]
            ------> CM[Microrganismos]
        AQUI ÉA PÁGINA DE Microrganismos
        
    */
    {
        "pagina": 8,
        "nome_page": `Microrganismos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                         <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ">
    
                                <div class="container">
    
    
                                      
                                        <!-- Grid de informações centralizadas -->
                                        <div class="row ">
                                           
                                            <!-- Card 3 -->
                                            <div class="col-md-6 _sugirEsquerdaAndando_1 d-flex box2">
                                                <div class="info-box w-100" style="--card-color: #0f407a;">
                                                    <h5>Resposta Específica</h5>
                                                    <p>O sistema imune responde de forma específica a diferentes microrganismos, reconhecendo antígenos únicos associados a cada patógeno. Isso permite uma resposta adaptativa direcionada e eficaz contra agentes infecciosos específicos.</p>
                                                </div>
                                            </div>
    
                                            <!-- Card 4 -->
                                            <div class="col-md-6 _sugirDireitaAndando_2 d-flex box4">
                                                <div class="info-box w-100" style="--card-color: #011c41;">
                                                    <h5>Lesão Tecidual e Doença </h5>
                                                    <p>Em muitas infecções, a lesão tecidual e a doença são causadas não apenas pela presença do microrganismo, mas também pela resposta do hospedeiro aos microrganismos e seus produtos. A inflamação excessiva e a resposta imune desregulada podem contribuir para danos nos tecidos e sintomas clínicos associados à infecção.</p>
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
            //                 "_class": ".progressaoedesfecho",
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

    // PÁGINA 9 Imunidade a bactérias extracelulares
    /*
        FILTRO
            ------> pg[9]
            ------> CM[Imunidade a bactérias extracelulares]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares
        
    */
    {
        "pagina": 9,
        "nome_page": `Imunidade a bactérias extracelulares`,
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
                                    <div class="col-md-10">
                                        <h4 style="color:#011c41; text-align:left;">Imunidade a bactérias extracelulares</h4>
                                        <p>As bactérias extracelulares conseguem se replicar fora das células hospedeiras, como no sangue, tecidos conectivos e espaços teciduais, incluindo os lúmens das vias respiratórias e do trato gastrointestinal. Diversas espécies de bactérias extracelulares são patogênicas e causam doenças por meio de dois principais mecanismos. Primeiro, essas bactérias induzem inflamação, resultando em lesão tecidual no local da infecção. Segundo, produzem toxinas que provocam vários efeitos patológicos. As toxinas incluem endotoxinas, como o lipopolissacarídeo (LPS) da parede celular das bactérias gram-negativas, e exotoxinas, que são secretadas por muitos tipos de bactérias. 
                                        </p>
                                    </div>

                                    <div class="col-md-2 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}bacteriasextracelulares.png" class="img-fluid progressaoedesfecho"
                                            alt="Gráfico representando progressão e desfecho das infecções." />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Fonte: Canva
                                        </p>
                                    </div>

                                    <div class="col-md-12 text-center ">

                                        <p>
                                            A endotoxina ativa macrófagos e outras células, estimulando a produção de citocinas que mediam a defesa do hospedeiro, mas também podem causar doenças. Muitas exotoxinas são citotóxicas, matando as células hospedeiras, enquanto outras causam doenças por diferentes mecanismos. Por exemplo, a toxina diftérica bloqueia a síntese proteica nas células infectadas, a toxina colérica interfere no transporte de íons e água, a toxina tetânica inibe a transmissão neuromuscular, e a toxina do antraz interrompe várias vias de sinalização bioquímica importantes nas células infectadas (ABBAS, 2023).
                                        </p>
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
            //                 "_class": ".progressaoedesfecho",
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

    // PÁGINA 10 Imunidade a bactérias extracelulares
    /*
        FILTRO
            ------> pg[10]
            ------> CM[Imunidade a bactérias extracelulares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares - CONTINUACAO
        
    */
    {
        "pagina": 10,
        "nome_page": `Imunidade a bactérias extracelulares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <h4 style="color:#011c41; text-align:left;">Imunidade Inata</h4>
                            <p>Os principais mecanismos da imunidade inata envolvidos na resposta contra bactérias extracelulares:</p>

                            <div class="row justify-content-center gap-1 ">

                                <!-- Ativação do Complemento -->
                                <div class="col-md-3-3 shadow _sugirEsquerdaAndando_1" style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Ativação do Complemento</h5>
                                            <p class="card-text fs--9">O complemento é um sistema de proteínas do plasma sanguíneo que pode ser ativado pela
                                                presença de bactérias extracelulares. Componentes da parede celular bacteriana, como o
                                                peptidoglicano em bactérias Gram-positivas e o lipopolissacarídeo (LPS) em bactérias
                                                Gram-negativas, podem ativar o complemento.
                                                A ativação do complemento leva à opsonização das bactérias, facilitando sua fagocitose
                                                por células fagocíticas.</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Fagocitose -->
                                <div class="col-md-3-3 shadow _sugirEsquerdaAndando_2" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Fagocitose</h5>
                                            <p class="card-text fs--9">
                                                Os fagócitos, como neutrófilos e macrófagos, desempenham um papel central na imunidade
                                                inata contra bactérias extracelulares. Eles reconhecem as bactérias por meio de padrões
                                                moleculares associados a patógenos (PAMPs) em sua superfície e as internalizam por
                                                fagocitose. Uma vez fagocitadas, as bactérias são destruídas dentro dos fagossomos.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <!-- Resposta Inflamatória -->
                                <div class="col-md-3-3 shadow _sugirEsquerdaAndando_3" style="background:#e4f3ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body ">
                                            <h5 class="card-title">Resposta Inflamatória</h5>
                                            <p class="card-text fs--9">
                                                A presença de bactérias extracelulares desencadeia uma resposta inflamatória local. Isso
                                                inclui a liberação de mediadores inflamatórios, como citocinas e quimiocinas, que
                                                recrutam mais células do sistema imune para o local da infecção. A inflamação ajuda a
                                                limitar a disseminação da infecção e a promover a resolução do processo infeccioso.
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

    // PÁGINA 11 Imunidade a bactérias extracelulares
    /*
        FILTRO
            ------> pg[11]
            ------> CM[Imunidade a bactérias extracelulares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares - CONTINUACAO
        
    */
    {
        "pagina": 11,
        "nome_page": `Imunidade a bactérias extracelulares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <h4 style="color:#011c41; text-align:left;">Imunidade Adaptativa</h4>
                            <p>Os principais mecanismos da imunidade adaptativa envolvidos na resposta contra bactérias extracelulares:</p>

                            <div class="row justify-content-center gap-1 ">

                                <!-- Imunidade Humoral -->
                                <div class="col-md-3-3 shadow _sugirEsquerdaAndando_1" style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Imunidade Humoral</h5>
                                            <p class="card-text fs--9">
                                                A imunidade humoral é a principal resposta protetora contra bactérias extracelulares. Após a ativação dos linfócitos B pelo reconhecimento do antígeno bacteriano, essas células se diferenciam em plasmócitos que produzem anticorpos específicos contra os antígenos bacterianos. Os anticorpos circulantes podem se ligar às bactérias, neutralizando-as, facilitando sua fagocitose e ativando o complemento para destruição bacteriana 
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <!-- Produção de Anticorpos Específicos -->
                                <div class="col-md-3-3 shadow _sugirEsquerdaAndando_2" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Produção de Anticorpos Específicos</h5>
                                            <p class="card-text fs--9">
                                               Os anticorpos produzidos pela imunidade adaptativa contra bactérias extracelulares são capazes de se ligar a antígenos bacterianos específicos, como proteínas de superfície ou toxinas. Essa ligação pode neutralizar a capacidade das bactérias de infectar as células hospedeiras, bloquear a disseminação do patógeno e facilitar sua eliminação pelo sistema imune.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <!-- Resposta Celular -->
                                <div class="col-md-3-3 shadow _sugirEsquerdaAndando_3" style="background:#e4f3ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body ">
                                            <h5 class="card-title">Resposta Celular</h5>
                                            <p class="card-text fs--9">
                                                Embora a imunidade humoral seja a principal resposta contra bactérias extracelulares, a resposta celular mediada por células T também desempenha um papel importante. As células T auxiliares podem modular a resposta imune, ajudando na ativação dos linfócitos B, enquanto as células T citotóxicas podem destruir células infectadas por bactérias intracelulares, contribuindo indiretamente para a eliminação do patógeno
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

    // PÁGINA 12 Imunidade a bactérias extracelulares - CONTINUACAO
    /*
        FILTRO
            ------> pg[12]
            ------> CM[Imunidade a bactérias extracelulares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares - CONTINUACAO
        
    */
    {
        "pagina": 12,
        "nome_page": `Imunidade a bactérias extracelulares`,
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
                                        <h4 style="color:#011c41; text-align:left;">Mecanismos de Evasão</h4>
                                        <p>A virulência das bactérias extracelulares está associada a diversos mecanismos que permitem a resistência à imunidade inata.</p>
                                          
                                           <div class="d-flex gap-2 justify-content-center container-button">
                                             <button  class="buttonExplorar mt-2 shadow" style="--clr: #0f407a;" onclick="abrirZoomist('${_prefixUnidade}mecanismodeimunoevasao.png')">
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
                                                    Veja aqui os mecanismos de imunoevasão por bactérias.
                                                </button>
                                                <!--
                                                <button  class="buttonExplorar buttonmecanismodeimunoEvasao mt-2 shadow bg-success justify-content-center" style="width:100px;" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<div class='d-flex align-items-center gap-1'>Resumo da imagen <p class='text-success'>Eva</p></div>">
                                                    
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
                                                </button>

                                                -->
                                            
                                          </div>


                                        <p>Bactérias com cápsulas ricas em polissacarídeos são mais virulentas que suas contrapartes desprovidas de cápsulas, pois essas cápsulas dificultam a fagocitose. Além disso, as cápsulas de muitas bactérias gram-positivas e gram-negativas contêm resíduos de ácido siálico que inibem a ativação do complemento pela via alternativa (ABBAS, 2023).</p>
                                       
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
            //                 // "_class": ".img1",
            //                 "_btn": ['.buttonmecanismodeimunoEvasao'],
            //                 "_link": `${_prefixUnidade}mecanismodeimunoevasao.png`,
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

    // PÁGINA 13 Imunidade a bactérias extracelulares - CONTINUACAO
    /*
        FILTRO
            ------> pg[13]
            ------> CM[Imunidade a bactérias extracelulares]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares - CONTINUACAO
        
    */
    {
        "pagina": 13,
        "nome_page": `Imunidade a bactérias extracelulares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto  gap-2">
          
    
                            <p>
                              Um mecanismo utilizado pelas bactérias para evadir a imunidade humoral é a variação dos antígenos de superfície. Em bactérias como gonococos e Escherichia coli, alguns antígenos de superfície estão presentes nas fímbrias (ou pili), que são estruturas responsáveis pela adesão bacteriana às células hospedeiras. 
    
                            <p>
                               O principal antígeno das fímbrias é uma proteína chamada pilina. Os genes de pilina nos gonococos passam por uma extensa conversão gênica, permitindo que a progênie de um único organismo produza mais de 10 moléculas de pilina antigenicamente distintas. Essa habilidade de alterar antígenos auxilia as bactérias a evitarem o ataque por anticorpos específicos para pilina, embora a principal importância possa ser a seleção de fímbrias mais aderentes às células do hospedeiro, aumentando a virulência das bactérias.

                            </p>

                            
                            <p>
                               Alterações na produção de glicosidases resultam em modificações químicas na superfície dos oligossacarídeos, permitindo que as bactérias evitem as respostas imunes humorais contra esses antígenos. Além disso, as bactérias podem liberar antígenos de superfície em blebs de membrana (estruturas semelhantes a bolhas), desviando os anticorpos para longe dos próprios microrganismos (ABBAS, 2023).

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

    // PÁGINA 14 Imunidade a bactérias extracelulares
    /*
        FILTRO
            ------> pg[14]
            ------> CM[Imunidade a bactérias extracelulares]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares
        
    */
    {
        "pagina": 14,
        "nome_page": `Imunidade a bactérias extracelulares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">

                                <div class="row align-items-center gap-1">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">
                                        <h4 style="color:#011c41; text-align:left;">Imunidade a bactérias intracelulares</h4>
                                        <p>Bactérias intracelulares são aquelas ingeridas pelos macrófagos, mas que conseguem sobreviver e
                                            até se replicar dentro dessas células. Como esses microrganismos encontram um nicho onde ficam
                                            inacessíveis aos anticorpos circulantes, sua eliminação depende dos mecanismos de imunidade
                                            mediada por células. A maioria das bactérias não infecta células não fagocíticas como fazem os
                                            vírus. Portanto, um mecanismo primário de defesa do hospedeiro contra essas bactérias é a
                                            ativação dos fagócitos para destruir os microrganismos ingeridos (ABBAS, 2023).
                                        </p>
                                    </div>

                                    <div class="col-md-12">
                                        <h4 style="color:#011c41; text-align:left;">Imunidade Inata</h4>
                                        <p>Os principais mecanismos da imunidade inata envolvidos na resposta contra bactérias
                                            intracelulares:
                                        </p>
                                    </div>

                                </div>
                                
                                <div class="row justify-content-center gap-1 ">

                                    <div class="row justify-content-center gap-3">
                                        <!-- Ativação de Células NK -->
                                        <div class="col-md-3 shadow" style="background:#e4f3ff;border-radius:0.5rem; padding: 20px; text-align: center;">
                                            <button class="cell-button" onclick="customModal230923920iwoei209382iaspoasi203923()">
                                                <span class="cell-text">Células NK</span>
                                            </button>
                                        </div>

                                        <!-- Fagocitose -->
                                        <div class="col-md-3 shadow" style="background: #8ebbf1;border-radius:0.5rem; padding: 20px; text-align: center;">
                                            <button class="cell-button" onclick="customModal230923920iwoei209983892esu92784sdhuy9284ysdj()">
                                                <span class="cell-text">Fagocitose</span>
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

    // PÁGINA 15 Imunidade a bactérias extracelulares
    /*
        FILTRO
            ------> pg[15]
            ------> CM[Imunidade a bactérias extracelulares]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares
        
    */
    {
        "pagina": 15,
        "nome_page": `Imunidade a bactérias extracelulares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">

                                <div class="row align-items-center gap-1">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">
                                        <h4 style="color:#011c41; text-align:left;">Imunidade Adaptativa</h4>
                                        <p>
                                        Os principais mecanismos da imunidade adaptativa envolvidos na resposta contra bactérias intracelulares:
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="row justify-content-center gap-1 ">

                                    <div class="row justify-content-center gap-3">

                                        <!-- Imunidade Mediada por Células T -->
                                        <div class="col-md-5 shadow" style="background:#e4f3ff;border-radius:0.5rem; padding: 20px; text-align: center;">
                                            <button class="cell-button" onclick="customModal23092weoweiow849348wwskdssj230498()">
                                                <span class="cell-text">Imunidade Mediada por Células T</span>
                                            </button>
                                        </div>

                                        <!-- Produção de Citocinas Específicas -->
                                        <div class="col-md-5 shadow" style="background: #8ebbf1;border-radius:0.5rem; padding: 20px; text-align: center;">
                                            <button class="cell-button" onclick="customModal230wesdkj3owy44dnwelksdoiweweoisd()">
                                                <span class="cell-text">Produção de Citocinas Específicas</span>
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

    // PÁGINA 16 Imunidade a bactérias extracelulares  - CONTINUACAO
    /*
        FILTRO
            ------> pg[16]
            ------> CM[Imunidade a bactérias extracelulares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares - CONTINUACAO
        
    */
    {
        "pagina": 16,
        "nome_page": `Imunidade a bactérias extracelulares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `

                    <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">
                                <div class="row align-items-center gap-1">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">
                                        <h4 style="color:#011c41; text-align:left;">Imunidade Adaptativa</h4>
                                        <p>
                                            As bactérias intracelulares desenvolveram várias estratégias para resistir à eliminação pelos fagócitos (reveja a tabela Mecanismos de imunoevasão por bactérias na página 06). Entre essas estratégias estão:
                                        </p>
                                    </div>
                                </div>

                                <div class="lista-customizada">

                                    <ol class="lista-customizada-ol">
                                        <li class="_sugirEsquerdaAndando_1">
                                            <p>A inibição da fusão do fagolisossomo;</p>
                                        </li>
                                        <li class="_sugirEsquerdaAndando_2">
                                            <p>O escape para o citosol;</p>
                                        </li>
                                        <li class="_sugirEsquerdaAndando_3">
                                            <p>A remoção ou inativação direta das substâncias microbicidas, como as espécies reativas de
                                                oxigênio (ROS). </p>
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
            "lupa": {
                "ativo": true,
                // "imgs_ativas":[0,1]
            },
            // "tesseract":{
            //     "ativo":true,
            //     "ocr":
            //     [
            //         {
            //             "_class": ".img1",
            //             "prompt": "Explique cada 1 desses Sintomas Nos pacientes com diagnóstico de DM ",
            //             "idioma": "por",
            //             "buffer": () => {
            //                 const x = [8, 8];
            //                 return x[0] >> x[1]
            //             },
            //         }
            //     ]
            // },
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": `${_prefixConfCss}Lista.css`
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

    // PÁGINA 17 Imunidade a bactérias extracelulares  - CONTINUACAO
    /*
        FILTRO
            ------> pg[17]
            ------> CM[Imunidade a bactérias extracelulares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares - CONTINUACAO
        
    */
    {
        "pagina": 17,
        "nome_page": `Imunidade a bactérias extracelulares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `

                    <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">
                                <div class="row align-items-center gap-1">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">

                                        <p>
                                            O desfecho da infecção por esses organismos muitas vezes varia conforme prevalecem os mecanismos antimicrobianos de macrófagos estimulados por células T ou a resistência microbiana à destruição. A resistência à eliminação mediada por fagócitos também é a razão pela qual esse tipo de bactéria tende a causar infecções crônicas difíceis de erradicar (ABBAS, 2023).
                                        </p>
                                        <p>
                                            Algumas dessas infecções, como a tuberculose, podem persistir por anos. As bactérias sobrevivem em um estado latente e quiescente dentro dos fagócitos, frequentemente tornando-se ativas quando o sistema imunológico está comprometido (ABBAS, 2023).
                                        </p>
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
            // "tesseract":{
            //     "ativo":true,
            //     "ocr":
            //     [
            //         {
            //             "_class": ".img1",
            //             "prompt": "Explique cada 1 desses Sintomas Nos pacientes com diagnóstico de DM ",
            //             "idioma": "por",
            //             "buffer": () => {
            //                 const x = [8, 8];
            //                 return x[0] >> x[1]
            //             },
            //         }
            //     ]
            // },
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": `${_prefixConfCss}Lista.css`
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

    // PÁGINA 18 Imunidade aos vírus
    /*
        FILTRO
            ------> pg[18]
            ------> CM[Imunidade aos vírus]
        AQUI ÉA PÁGINA DE Imunidade aos vírus
        
    */
    {
        "pagina": 18,
        "nome_page": `Imunidade aos vírus`,
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
                                    <div class="col-md-10">
                                        <h4 style="color:#011c41; text-align:left;">Imunidade aos vírus</h4>
                                        <p>
                                        Os vírus são microrganismos intracelulares obrigatórios que utilizam os componentes de ácido nucleico e a maquinaria de síntese proteica do hospedeiro para se replicar. Tipicamente, os vírus infectam vários tipos de células por meio de endocitose mediada por receptor, após se ligarem a moléculas normais da superfície celular. Eles podem causar lesão tecidual e doença através de diversos mecanismos. 
                                        </p>
                                    </div>

                                    <div class="col-md-2 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}virus.png" class="img-fluid"
                                            alt="A imagem mostra um vírus em 3D, representado de forma tridimensional. Ele tem um formato esférico e é coberto por pequenas projeções que se assemelham a espinhos. " />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Fonte: Canva
                                        </p>
                                    </div>

                                    <div class="col-md-12 text-center ">

                                        <p>
                                            A replicação viral interfere na síntese proteica e na função celular normal, resultando em lesão e, eventualmente, morte da célula infectada. Este é um tipo de efeito citopático dos vírus, e a infecção é chamada lítica porque a célula infectada é lisada. Além disso, os vírus podem desencadear respostas inflamatórias que danificam os tecidos. Alguns vírus também podem causar infecções latentes.
                                        </p>

                                        <p>
                                            As respostas imunes inata e adaptativa aos vírus têm como objetivo bloquear a infecção e eliminar as células infectadas.
                                        </p>
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
            //                 "_class": ".progressaoedesfecho",
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


    // PÁGINA 19 Imunidade aos vírus - CONTINUACAO
    /*
        FILTRO
            ------> pg[19]
            ------> CM[Imunidade aos vírus]
        AQUI ÉA PÁGINA DE Imunidade aos vírus - CONTINUACAO
        
    */
    {
        "pagina": 19,
        "nome_page": `Imunidade aos vírus`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">

                                    <h4 style="color:#011c41; text-align:left;">Imunidade Inata</h4>
                                    <p>  Os principais mecanismos da imunidade inata envolvidos na resposta contra os vírus são:</p>

                                    <!-- Grid de informações centralizadas -->
                                    <div class="row ">
                                        <!-- Card 1 -->
                                        <div class="col-md-6  _sugirEsquerdaAndando_1 d-flex box1">
                                            <div class="info-box w-100" style="--card-color: #011c41;">
                                                <h5>Destruição das células infectadas mediadas pelas células NK</h5>
                                                <p> As células Natural Killer (NK) desempenham um papel crucial na eliminação de células infectadas por vírus. Elas reconhecem e destroem as células-alvo por meio da liberação de grânulos contendo granzimas e perforinas, induzindo a apoptose nas células infectadas.</p>
                                            </div>
                                        </div>
                                        
                                        <!-- Card 2 -->
                                        <div class="col-md-6  _sugirDireitaAndando_2 d-flex box3">
                                            <div class="info-box w-100" style="--card-color: #0f407a;">
                                                <h5>Inibição da infecção por Interferons</h5>
                                                <p>Os interferons do tipo I atuam inibindo a infecção viral e protegendo as células não infectadas. Eles são essenciais para modular a resposta imune e limitar a disseminação do vírus no organismo.</p>
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
            //                 "_class": ".progressaoedesfecho",
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

    // PÁGINA 20 Imunidade aos vírus - CONTINUACAO
    /*
        FILTRO
            ------> pg[20]
            ------> CM[Imunidade aos vírus]
        AQUI ÉA PÁGINA DE Imunidade aos vírus - CONTINUACAO
        
    */
    {
        "pagina": 20,
        "nome_page": `Imunidade aos vírus`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">

                                    <!-- Grid de informações centralizadas -->
                                    <div class="row ">
                                        <!-- Card 1 -->
                                        <div class="col-md-6  _sugirEsquerdaAndando_1  d-flex box1">
                                            <div class="info-box w-100" style="--card-color: #011c41;">
                                                <h5>Interferons do tipo I (IFN-α e INF-β)</h5>
                                                <p>interferons do tipo I são produzidos em resposta à infecção viral e desempenham um papel fundamental na inibição da replicação viral, protegendo as células não infectadas. Além disso, colaboram com a resposta imune adaptativa.</p>
                                            </div>
                                        </div>
                                        
                                        <!-- Card 2 -->
                                        <div class="col-md-6 _sugirDireitaAndando_2 d-flex box3">
                                            <div class="info-box w-100" style="--card-color: #0f407a;">
                                                <h5>Ativação das células NK por INF-γ</h5>
                                                <p>interferon-gama (INF-γ) desempenha um papel importante na ativação das células NK, estimulando sua atividade citotóxica. Além disso, a IL-12 produzida por macrófagos e outras células apresentadoras de antígenos estimula as células NK a exercer a citotoxicidade e a produzir mais INF-γ.</p>
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
            //                 "_class": ".progressaoedesfecho",
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

    // PÁGINA 21 Imunidade aos vírus - CONTINUACAO
    /*
        FILTRO
            ------> pg[21]
            ------> CM[Imunidade aos vírus - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos vírus - CONTINUACAO
        
    */
    {
        "pagina": 21,
        "nome_page": `Imunidade aos vírus`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <h4 style="color:#011c41; text-align:left;">Imunidade Adaptativa</h4>
                            <p>Os principais mecanismos da imunidade adaptativa envolvidos na resposta contra os vírus são:</p>

                            <div class="row justify-content-center gap-1 ">

                                <!-- Linfócitos T citolíticos (CTLs) -->
                                <div class="col-md-3-3 _sugirEsquerdaAndando_1 shadow" style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Linfócitos T citolíticos (CTLs)</h5>
                                            <p class="card-text fs--9">Os CTLs desempenham um papel crucial na eliminação da infecção viral, atuando na destruição das células infectadas. Eles reconhecem e matam as células que apresentam antígenos virais em sua superfície, contribuindo para a resolução da infecção.</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Anticorpos -->
                                <div class="col-md-3-3 _sugirDireitaAndando_2 shadow" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Anticorpos</h5>
                                            <p class="card-text fs--9">
                                               Os anticorpos são moléculas produzidas pelos linfócitos B em resposta à infecção viral. Eles atuam bloqueando a ligação do vírus às células hospedeiras, impedindo a entrada e a disseminação do agente infeccioso no organismo.
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

    // PÁGINA 22 Imunidade aos vírus - CONTINUACAO
    /*
        FILTRO
            ------> pg[22]
            ------> CM[Imunidade aos vírus - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos vírus - CONTINUACAO
        
    */
    {
        "pagina": 22,
        "nome_page": `Imunidade aos vírus`,
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

                                        <p>Observe o gráfico abaixo, que representa a cinética das respostas imunes inata e adaptativa a uma infecção viral</p>
                                          
                                           <div class="d-flex gap-2 justify-content-center container-button">
                                             <button  class="buttonExplorar mt-2 shadow" style="--clr: #0f407a;" onclick="abrirZoomist('${_prefixUnidade}magnituderespostainfeccao.png')">
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
                                                    Veja aqui o gráfico
                                                </button>
                                                <!--
                                                <button  class="buttonExplorar magnituderespostainfeccaoButton mt-2 shadow bg-success justify-content-center" style="width:100px;" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<div class='d-flex align-items-center gap-1'>Resumo da imagen <p class='text-success'>Eva</p></div>">
                                                    
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
                                                </button>
                                                -->
                                          </div>


                                        <p>Gráfico: Cinética das respostas imunes inata e adaptativa a uma infecção viral. Fonte: Abbas (2023).</p>
                                       
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
            //                 // "_class": ".img1",
            //                 "_btn": ['.magnituderespostainfeccaoButton'],
            //                 "_link": `${_prefixUnidade}magnituderespostainfeccao.png`,
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

    // PÁGINA 23 Imunidade aos vírus - CONTINUACAO
    /*
        FILTRO
            ------> pg[23]
            ------> CM[Imunidade aos vírus - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos vírus - CONTINUACAO
        
    */
    {
        "pagina": 23,
        "nome_page": `Imunidade aos vírus`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <h4 style="color:#011c41; text-align:left;">Mecanismos de Evasão</h4>
                            <p>Leia a seguir sobre cada tipo de mecanismo de imunoevasão por vírus:</p>

                                <div class="row">
                                    <div class="col-md-6 col-lg-4 _sugirEsquerdaAndando_1 mb-4">
                                        <div class="card h-100 shadow-sm">
                                            <div class="card-body" style="background: #e4f3ff;">
                                                <h5 class="card-title">Infecções Latentes</h5>
                                                <p class="card-text">
                                                    Em infecções latentes, o DNA viral pode persistir nas células do hospedeiro sem se replicar ou destruir as células infectadas. Isso permite que o vírus evite a detecção pelo sistema imune e mantenha um estado de latência.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 _sugirEsquerdaAndando_2 mb-4">
                                        <div class="card h-100  shadow-sm">
                                            <div class="card-body" style="background: #e4f3ff;">
                                                <h5 class="card-title">Alteração de Antígenos</h5>
                                                <p class="card-text">
                                                    Os vírus podem sofrer mutações em seus antígenos, tornando-se menos reconhecíveis pelo sistema imune. Essa capacidade de alterar seus antígenos permite que os vírus evitem a resposta adaptativa, dificultando a produção de uma resposta eficaz contra o agente infeccioso.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 _sugirEsquerdaAndando_3 mb-4">
                                        <div class="card h-100 shadow-sm">
                                            <div class="card-body" style="background: #e4f3ff;">
                                                <h5 class="card-title">Inibição da Apresentação via MHC I</h5>
                                                <p class="card-text">
                                                    Alguns vírus têm a capacidade de inibir a apresentação de antígenos virais via complexo de histocompatibilidade classe I (MHC I), impedindo que as células infectadas sejam reconhecidas e destruídas pelos linfócitos T citotóxicos (CTLs).
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

    // PÁGINA 24 Imunidade aos vírus - CONTINUACAO
    /*
        FILTRO
            ------> pg[24]
            ------> CM[Imunidade aos vírus - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos vírus - CONTINUACAO
        
    */
    {
        "pagina": 24,
        "nome_page": `Imunidade aos vírus`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">

                            <div class="row justify-content-center">

                                <div class="col-md-6 _sugirEsquerdaAndando_1 col-lg-4 mb-4">
                                    <div class="card h-100 shadow-sm">
                                        <div class="card-body" style="background: #e4f3ff;">
                                            <h5 class="card-title">Produção de Citocinas Inibitórias</h5>
                                            <p class="card-text">
                                                Os vírus podem produzir citocinas que inibem a resposta imune do hospedeiro,
                                                interferindo na ativação de outras células do sistema imune. Esta estratégia permite que
                                                os vírus modulem a resposta imune em seu benefício.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 _sugirEsquerdaAndando_2 col-lg-4 mb-4">
                                    <div class="card h-100 shadow-sm">
                                        <div class="card-body" style="background: #e4f3ff;">
                                            <h5 class="card-title">Comprometimento Funcional das Células Imunes</h5>
                                            <p class="card-text">
                                                Alguns vírus têm a capacidade de comprometer a função das células imunes, reduzindo sua
                                                capacidade de reconhecer e destruir as células infectadas. Isso enfraquece a resposta
                                                imune do hospedeiro e favorece a replicação viral.
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

    // PÁGINA 25 Imunidade a bactérias extracelulares
    /*
        FILTRO
            ------> pg[25]
            ------> CM[Imunidade a bactérias extracelulares]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares
        
    */
    {
        "pagina": 25,
        "nome_page": `Imunidade a bactérias extracelulares`,
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
                                    <div class="col-md-7">
                                        <p>Agora, observe a tabela ao lado que mostra exemplos de mecanismos de imunoevasão por vírus
                                        </p>
                                    </div>

                                    <div class="col-md-5 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}imunoevasaoporvirus.png" class="img-fluid imunoevasaoporvirus"
                                            alt="Tabela Mecanismos de imunoevasão por vírus" />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Tabela: Mecanismos de imunoevasão por vírus. Fonte: Abbas (2023).
                                        </p>
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
            //                 "_class": ".imunoevasaoporvirus",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "Faça o resumo dessa tabela cade item",
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

    // PÁGINA 26 Imunidade aos fungos                                   
    /*
        FILTRO
            ------> pg[26]
            ------> CM[Imunidade aos fungos]
        AQUI ÉA PÁGINA DE Imunidade aos fungos
        
    */
    {
        "pagina": 26,
        "nome_page": `Imunidade aos fungos`,
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
                                    <div class="col-md-10">
                                        <h4 style="color:#011c41; text-align:left;">Imunidade aos fungos</h4>
                                        <p>
                                            As infecções fúngicas, também conhecidas como micoses, são causas significativas de morbidade e mortalidade em seres humanos. Algumas dessas infecções são endêmicas, geralmente causadas por fungos presentes no ambiente cujos esporos entram no organismo humano. Outras são oportunistas, onde os agentes etiológicos causam doenças leves ou não causam doenças em indivíduos saudáveis, mas podem provocar doenças graves em indivíduos imunodeficientes. 
                                        </p>
                                    </div>

                                    <div class="col-md-2 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}invasaoporfungo.png" class="img-fluid"
                                            alt="A imagem mostra um vírus em 3D, representado de forma tridimensional. Ele tem um formato esférico e é coberto por pequenas projeções que se assemelham a espinhos. " />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Fonte: Canva
                                        </p>
                                    </div>

                                    <div class="col-md-12 text-center ">

                                        <p>
                                            A imunidade comprometida é o principal fator predisponente para infecções fúngicas graves. A deficiência de neutrófilos, resultante de dano ou supressão da medula óssea, frequentemente está associada a essas infecções. As infecções fúngicas oportunistas também estão ligadas à imunodeficiência causada pelo HIV e pela terapia para câncer disseminado e rejeição de transplantes (ABBAS, 2023).
                                        </p>

                                        <p>
                                            
Diferentes fungos podem infectar seres humanos e viver tanto fora das células em diversos tecidos quanto dentro dos fagócitos. Portanto, as respostas imunológicas a esses microrganismos frequentemente combinam respostas a microrganismos extracelulares e intracelulares.
                                        </p>
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
            //                 "_class": ".progressaoedesfecho",
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

    // PÁGINA 27 Imunidade aos fungos - CONTINUACAO
    /*
        FILTRO
            ------> pg[27]
            ------> CM[Imunidade aos fungos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos fungos - CONTINUACAO
        
    */
    {
        "pagina": 27,
        "nome_page": `Imunidade aos fungos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <h4 style="color:#011c41; text-align:left;">Imunidade Inata</h4>
                            <p>Os principais mediadores da resposta imune inata contra os fungos são os fagócitos e o sistema complemento.</p>

                            <div class="row justify-content-center gap-1 ">

                                <!-- Fagócitos -->
                                <div class="col-md-4-9 _sugirEsquerdaAndando_1 shadow" style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Fagócitos</h5>
                                            <p class="card-text fs--9">Nos tecidos, neutrófilos e macrófagos desempenham papel crucial na fagocitose para o controle de infecções fúngicas. Esses fagócitos reconhecem moléculas fúngicas através de diversos receptores de padrões, como TLRs, dectinas e receptores de manose. Neutrófilos são especialmente eficazes contra fungos predominantemente extracelulares, enquanto infecções fúngicas disseminadas são comuns em condições associadas à neutropenia, como leucemias e terapias que afetam a medula óssea. Neutrófilos e macrófagos liberam substâncias fungicidas, incluindo ROS e enzimas lisossômicas, e realizam fagocitose para killing intracelular dos fungos.</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Sistema complemento -->
                                <div class="col-md-4-9 _sugirEsquerdaAndando_2  shadow" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Sistema complemento</h5>
                                            <p class="card-text fs--9">
                                               O sistema complemento, quando ativado, defende principalmente contra fungos que invadem a corrente sanguínea, como Candida. Fungos podem ativar as vias alternativa ou das lectinas do complemento. Produtos complementares opsonizam os fungos para facilitar sua fagocitose, porém, devido às suas paredes celulares espessas, os fungos podem resistir à lise direta pelo complexo de ataque à membrana (MAC).
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

    // PÁGINA 28 Imunidade aos fungos - CONTINUACAO
    /*
        FILTRO
            ------> pg[28]
            ------> CM[Imunidade aos fungos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos fungos - CONTINUACAO
        
    */
    {
        "pagina": 28,
        "nome_page": `Imunidade aos fungos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <h4 style="color:#011c41; text-align:left;">Imunidade Adaptativa</h4>
                            <p>Os principais mediadores da resposta imune adaptativa contra os fungos são as células Th17 e células Th1 (ABBAS, 2023). </p>

                            <div class="row justify-content-center gap-1 ">

                                <!-- Células Th17 -->
                                <div class="col-md-4-9 _sugirEsquerdaAndando_1 shadow" style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Células Th17</h5>
                                            <p class="card-text fs--9">Desempenham um papel crucial na resposta imune adaptativa contra infecções fúngicas extracelulares em tecidos. Fungos como Candida frequentemente infectam tecidos epiteliais, como a pele e a mucosa orofaríngea, enquanto outros podem afetar o trato gastrointestinal. Nestes locais, os carboidratos fúngicos estimulam células dendríticas e macrófagos via receptores como dectina, desencadeando a liberação de citocinas que favorecem a diferenciação das células Th17. As células Th17, por sua vez, recrutam neutrófilos que fagocitam e eliminam os fungos. Mutações genéticas que afetam o desenvolvimento das células Th17 estão frequentemente associadas à candidíase mucocutânea crônica.</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Células Th1 -->
                                <div class="col-md-4-9 _sugirEsquerdaAndando_2  shadow" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Células Th1</h5>
                                            <p class="card-text fs--9">
                                               Desempenha um papel crucial na defesa contra fungos intracelulares. Por exemplo, o Histoplasma capsulatum, um parasita intracelular facultativo que reside em macrófagos, é combatido pelos mesmos mecanismos efetivos contra bactérias intracelulares. As células Th1 CD4+ e CD8+ cooperam para eliminar as formas de levedura do Cryptococcus neoformans, que tendem a colonizar os pulmões e o cérebro em hospedeiros imunocomprometidos. O Pneumocystis jiroveci, outro fungo intracelular, causa infecções graves em indivíduos com deficiência na imunidade mediada por células, como aqueles com AIDS, falência de medula óssea devido a leucemias ou deficiência hereditária do ligante CD40.
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

    // PÁGINA 29 Imunidade aos fungos - CONTINUACAO
    /*
        FILTRO
            ------> pg[29]
            ------> CM[Imunidade aos fungos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos fungos - CONTINUACAO
        
    */
    {
        "pagina": 29,
        "nome_page": `Imunidade aos fungos`,
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

                                        <h4 style="color:#011c41; text-align:left;">Mecanismos de Evasão</h4>
                                        <p>Há ainda pouco conhecimento sobre os mecanismos pelos quais os fungos evitam a resposta imune do hospedeiro. Cepas virulentas de C. neoformans suprimem a produção de citocinas como TNF e IL-12 pelos macrófagos e promovem a produção de IL-10, o que inibe a ativação dessas células fagocíticas.</p>

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

    // PÁGINA 30 Imunidade aos parasitos                                    
    /*
        FILTRO
            ------> pg[30]
            ------> CM[Imunidade aos parasitos]
        AQUI ÉA PÁGINA DE Imunidade aos parasitos
        
    */
    {
        "pagina": 30,
        "nome_page": `Imunidade aos parasitos`,
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
                                    <div class="col-md-7-5">
                                        <h4 style="color:#011c41; text-align:left;">Imunidade aos parasitos</h4>
                                        <p>Os parasitas abrangem protozoários unicelulares, vermes multicelulares complexos (helmintos) e ectoparasitas como carrapatos e ácaros. As infecções parasitárias representam um significativo problema de saúde, especialmente em países de baixa renda, afetando aproximadamente 30% da população mundial. (ABBAS, 2023).</p>
                                    </div>

                                    <div class="col-md-4-6 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}parasitaimg.png" class="img-fluid progressaoedesfecho" alt="Gráfico representando progressão e desfecho das infecções." />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Fonte: Canva</p>    

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
            //                 "_class": ".progressaoedesfecho",
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

    // PÁGINA 31 Imunidade aos parasitos - CONTINUACAO
    /*
        FILTRO
            ------> pg[31]
            ------> CM[Imunidade aos parasitos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos parasitos- CONTINUACAO
        
    */
    {
        "pagina": 31,
        "nome_page": `Imunidade aos parasitos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container gap-2 d-flex flex-column">

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
                                                A malária, por exemplo, registra cerca de 200 milhões de novos casos anualmente globalmente,
                                                com aproximadamente 400 mil mortes. Este desafio de saúde pública é o principal
                                                impulsionador do interesse em entender a imunidade contra parasitas e no desenvolvimento da
                                                Imunoparasitologia como um campo distinto da Imunologia (ABBAS, 2023).
                                            </p>

                                        </div>
                                    </div>

                                </div>

                                <p>A maioria dos parasitas possui ciclos de vida complexos, envolvendo hospedeiros humanos (ou outros
                                    vertebrados) e intermediários como moscas, carrapatos e caracóis. As infecções geralmente ocorrem por
                                    meio de picadas de hospedeiros intermediários infectados ou pela exposição a ambientes compartilhados
                                    com esses hospedeiros. Por exemplo, a malária e a tripanossomíase são transmitidas por picadas de
                                    insetos, enquanto a esquistossomose resulta da exposição à água onde vivem caracóis infectados (ABBAS,
                                    2023).</p>
                                
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

    // PÁGINA 32 Imunidade a bactérias extracelulares
    /*
        FILTRO
            ------> pg[32]
            ------> CM[Imunidade a bactérias extracelulares]
        AQUI ÉA PÁGINA DE Imunidade a bactérias extracelulares
        
    */
    {
        "pagina": 32,
        "nome_page": `Imunidade a bactérias extracelulares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container">

                                <div class="row align-items-center flex-column">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">
                                        <p>
                                            Muitas infecções parasitárias são crônicas devido à fraca imunidade inata e à capacidade dos parasitas de evadir ou resistir às respostas imunes adaptativas. Observe a tabela abaixo:
                                        </p>
                                    </div>

                                    <div class="col-md-7 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}tabelainfecaoporparasita.png" class="img-fluid tabelainfecaoporparasita"
                                            alt="Tabela Mecanismos de imunoevasão por vírus" />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Tabela: Mecanismos de imunoevasão por vírus. Fonte: Abbas (2023).
                                        </p>
                                    </div>

                                    <div class="col-md-12">
                                        <p>
                                            Além disso, muitos tratamentos antiparasitários não são eficazes na eliminação completa dos organismos. Indivíduos em áreas endêmicas frequentemente requerem tratamentos repetidos devido à exposição contínua, mas esses tratamentos são frequentemente limitados pelo custo e por desafios logísticos (ABBAS, 2023).
                                        </p>
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
            //                 "_class": ".tabelainfecaoporparasita",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
            //                 "prompt": "Faça o resumo dessa tabela cade item",
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


    // PÁGINA 33 Imunidade aos parasitos                                    
    /*
        FILTRO
            ------> pg[33]
            ------> CM[Imunidade aos parasitos]
        AQUI ÉA PÁGINA DE Imunidade aos parasitos
        
    */
    {
        "pagina": 33,
        "nome_page": `Imunidade aos parasitos`,
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
                                        <h4 style="color:#011c41; text-align:left;">Imunidade Inata</h4>
                                        <p>
                                            Protozoários e helmintos parasitas frequentemente conseguem sobreviver e se replicar nos seus
                                            hospedeiros devido à sua habilidade adaptativa em resistir às defesas do hospedeiro (ABBAS,
                                            2023). 
                                            
                                        </p>

                                        <p>
                                            A resposta imune inata primária contra protozoários envolve principalmente a fagocitose, mas muitos desses parasitas são resistentes à destruição pelos fagócitos e podem se replicar dentro dos macrófagos (ABBAS, 2023). 
                                        </p>

                                        <p>
  
                                            No caso dos helmintos, os eosinófilos desempenham um papel importante na resposta inata, liberando conteúdos de grânulos capazes de destruir os tegumentos dos vermes. Fagócitos também podem atacar helmintos e secretar substâncias microbicidas para tentar matar esses parasitas. No entanto, muitos helmintos possuem tegumentos espessos que os tornam resistentes aos mecanismos citocidas de neutrófilos e macrófagos, além de serem grandes demais para serem fagocitados por essas células (ABBAS, 2023).
                                        </p>

                                        <p>
                                            lguns protozoários e helmintos ativam a via alternativa do complemento, mas desenvolveram estratégias eficazes para evadir o sistema complemento (ABBAS, 2023).
                                        </p>

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
            //                 "_class": ".progressaoedesfecho",
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

    // PÁGINA 34 Imunidade aos parasitos - CONTINUACAO
    /*
        FILTRO
            ------> pg[34]
            ------> CM[Imunidade aos parasitos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos parasitos - CONTINUACAO
        
    */
    {
        "pagina": 34,
        "nome_page": `Imunidade aos parasitos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <h4 style="color:#011c41; text-align:left;">Imunidade Adaptativa</h4>
                            <p>Alguns protozoários patogênicos evoluíram para sobreviver dentro das células hospedeiras, por isso, a imunidade protetora contra esses organismos é mediada por mecanismos similares àqueles que eliminam bactérias intracelulares e vírus. Em contraste, metazoários como os helmintos sobrevivem em tecidos extracelulares, e sua eliminação, muitas vezes, depende de tipos especiais de respostas de anticorpo (ABBAS, 2023).</p>

                            <div class="row justify-content-center gap-1 ">

                                <!-- Células Th1 -->
                                <div class="col-md-3-3 _sugirEsquerdaAndando_1 shadow" style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Células Th1</h5>
                                            <p class="card-text fs--9">O principal mecanismo de defesa contra os protozoários que sobrevivem nos macrófagos é a imunidade mediada por células, particularmente a ativação de macrófagos por citocinas derivadas de células Th1. Exemplo: <em>Leishmania</em>.</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Respostas específicas de anticorpos e CTLs -->
                                <div class="col-md-3-3 _sugirEsquerdaAndando_2  shadow" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Respostas específicas de anticorpos e CTLs</h5>
                                            <p class="card-text fs--9">
                                                Os protozoários que se replicam dentro de várias células hospedeiras e as lisam estimulam respostas específicas de anticorpos e CTLs, similarmente aos vírus citopáticos. Um exemplo desse tipo de organismo é o parasita da malária.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                       
                                <!-- Células Th2 -->
                                 <div class="col-md-3-3 _sugirEsquerdaAndando_3  shadow" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Células Th2</h5>
                                            <p class="card-text fs--9">
                                              A defesa contra muitas infecções helmínticas é mediada pela ativação de células Th2, a qual resulta em produção de anticorpos IgE e ativação de eosinófilos.

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

    // PÁGINA 35 Imunidade aos parasitos - CONTINUACAO
    /*
        FILTRO
            ------> pg[35]
            ------> CM[Imunidade aos parasitos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Imunidade aos parasitos - CONTINUACAO
        
    */
    {
        "pagina": 35,
        "nome_page": `Imunidade aos parasitos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ">

                        <div class="container ">
                            <h4 style="color:#011c41; text-align:left;">Mecanismos de Evasão</h4>
                            <p>Os parasitas conseguem escapar da resposta imune protetora reduzindo sua própria imunogenicidade e suprimindo as respostas imunes do hospedeiro. Eles desenvolveram estratégias notavelmente eficazes para resistir à imunidade.</p>

                            <div class="row justify-content-center gap-1 ">

                                <!-- Variação Antigênica nos Parasitas -->
                                <div class="col-md-3-3 _sugirEsquerdaAndando_1 shadow" style="background: #8ebbf1;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Variação Antigênica nos Parasitas</h5>
                                            <p class="card-text fs--9">Parasitas como os da malária e tripanossomos africanos mostram variação antigênica para evitar a imunoeliminação. Essa variação dificulta a eficácia da vacinação contra essas infecções. </p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Mecanismos de Ocultação e Resistência dos Parasitas -->
                                <div class="col-md-3-3  _sugirEsquerdaAndando_2 shadow" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Respostas específicas de anticorpos e CTLs</h5>
                                            <p class="card-text fs--9">
                                                Protozoários como Entamoeba histolytica vivem dentro de células hospedeiras ou formam cistos resistentes. Helmintos frequentemente residem no lúmen intestinal, protegidos contra mecanismos imunes celulares.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                       
                                <!-- Inibição da Resposta Imune pelo Parasita -->
                                 <div class="col-md-3-3 _sugirEsquerdaAndando_3  shadow" style="background:#b9d9ff;border-radius:0.5rem;">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title">Inibição da Resposta Imune pelo Parasita</h5>
                                            <p class="card-text fs--9">
                                              Parasitas utilizam múltiplos mecanismos para inibir a resposta imune do hospedeiro. Exemplos incluem anergia das células T em infecções como esquistossomose e filariose.


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
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "handTap": {
                "ativo": false,
            },
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
            "handTap": {
                "ativo": false,
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
            "handTap": {
                "ativo": false,
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
                                    <i data-lucide="link"></i> Vídeo - 4° geração ELISA.
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <div class="panel-saibamais">
                                    <p>
                                        Para fortalecer o processo de aprendizagem, assista ao vídeo: <strong>"4° geração ELISA"</strong>. 
                                    </p>
                                    <div class="video-container">
                                        <iframe src="https://www.youtube.com/embed/cE6IL4H8HJE" allowfullscreen></iframe>
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
            "handTap": {
                "ativo": false,
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
                                            Nesta unidade, exploramos como o sistema imunológico responde a diferentes tipos de
                                            microrganismos, como
                                            bactérias, vírus, fungos e parasitas. Cada um desses patógenos ativa mecanismos
                                            imunológicos
                                            específicos,
                                            envolvendo tanto a imunidade inata quanto a adaptativa, com variações nas estratégias de
                                            defesa conforme
                                            o
                                            tipo de agente infeccioso.

                                        </p>

                                        <p>
                                            No caso das bactérias extracelulares, o sistema imune utiliza principalmente a ativação
                                            do complemento,
                                            fagocitose e a produção de anticorpos específicos. No entanto, essas bactérias também
                                            dispõem de
                                            mecanismos
                                            de evasão, como cápsulas que dificultam a fagocitose e a variação de antígenos de
                                            superfície.

                                        </p>
                                        <p>
                                            Já as bactérias intracelulares representam um desafio maior, pois sobrevivem e se
                                            replicam dentro dos
                                            macrófagos. A eliminação dessas bactérias depende da imunidade mediada por células, com
                                            a ativação de
                                            células T citotóxicas e a produção de citocinas, embora as bactérias também desenvolvam
                                            estratégias de
                                            evasão que dificultam sua eliminação.
                                        </p>

                                    </div>
                                </div>
                                <!-- Slide 2 -->
                                <div class="carousel-item ">
                                    <div class="d-flex flex-column gap-2">
                                        <p>
                                            Quando falamos de vírus, que se replicam dentro das células hospedeiras, o sistema
                                            imunológico inato
                                            atua
                                            rapidamente com a ação de células NK e interferons para inibir a replicação viral. Na
                                            imunidade
                                            adaptativa,
                                            os linfócitos T citotóxicos e os anticorpos são fundamentais para eliminar as células
                                            infectadas.
                                            Contudo,
                                            muitos vírus utilizam mecanismos de evasão, como a inibição da apresentação de antígenos
                                            e mutações que
                                            dificultam o reconhecimento pelo sistema imune.
                                        </p>
                                        <p>
                                            A imunidade contra fungos envolve a ação de neutrófilos, macrófagos e células Th17 na
                                            imunidade inata e
                                            adaptativa. No entanto, os fungos apresentam mecanismos de resistência, como paredes
                                            celulares espessas
                                            que
                                            dificultam sua eliminação.

                                        </p>
                                        <p>
                                            Já as bactérias intracelulares apresentam maior complexidade, pois sobrevivem e se
                                            replicam dentro dos
                                            macrófagos. Sua eliminação depende da imunidade mediada por células, com a ativação de
                                            células T
                                            citotóxicas
                                            e a liberação de citocinas, embora também apresentem estratégias de evasão que
                                            dificultam sua
                                            neutralização.
                                        </p>

                                    </div>
                                </div>
                                <!-- Slide 3 -->

                                <div class="carousel-item ">
                                    <div class="d-flex flex-column gap-2">
                                        <p>
                                            Quando falamos de vírus, que se replicam dentro das células hospedeiras, o sistema
                                            imunológico inato
                                            atua
                                            rapidamente com a ação de células NK e interferons para inibir a replicação viral. Na
                                            imunidade
                                            adaptativa, os
                                            linfócitos T citotóxicos e os anticorpos são fundamentais para eliminar as células
                                            infectadas. Contudo,
                                            muitos vírus
                                            utilizam mecanismos de evasão, como a inibição da apresentação de antígenos e mutações
                                            que dificultam o
                                            reconhecimento pelo sistema imune.

                                        </p>

                                        <p>
                                            A imunidade contra fungos envolve a ação de neutrófilos, macrófagos e células Th17 na
                                            imunidade inata e
                                            adaptativa. No entanto, os fungos apresentam mecanismos de resistência, como paredes
                                            celulares espessas
                                            que dificultam sua eliminação.

                                        </p>
                                        <p>
                                            Por fim, os parasitas são especialmente desafiadores devido à sua complexidade biológica
                                            e à diversidade
                                            de estratégias evasivas, como variação antigênica e formação de cistos resistentes. A
                                            resposta imune
                                            contra esses organismos envolve tanto a fagocitose quanto a produção de anticorpos
                                            específicos, sendo
                                            que os helmintos exigem uma resposta imunológica mais especializada.

                                        </p>

                                    </div>
                                </div>
                                <!-- Slide 4 -->
                                <div class="carousel-item ">
                                    <div class="d-flex flex-column gap-2">

                                        <p>
                                            Esses mecanismos de defesa e evasão dos microrganismos ressaltam a complexidade das
                                            interações entre
                                            patógenos e o sistema imunológico, o que influencia diretamente o desenvolvimento de
                                            vacinas e
                                            tratamentos eficazes para combater essas infecções.

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
            "lupa": {
                "ativo": false,
                // "imgs_ativas":[0,1]
            },
            "handTap": {
                "ativo": false,
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

    // PÁGINA 42 Referências
    /*
        FILTRO
            ------> pg[42]
            ------> CM[Referências]
        AQUI ÉA PÁGINA DE Referências
        
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
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound p-2 ">
                            <div class="container-fluid container-referencia bg-white rounded-3 shadow-lg">
    
                                <div class="row lista-referencias-bibliograficas ">
    
                                    <div class="col-md-8">
                                        <ul>
                                            <li>
                                                <span class="d-block text-muted">ABBAS, Abul K.; LICHTMAN, Andrew H.; PILLAI, Shiv. Imunologia Celular e Molecular. [S.l.]:</span>
                                                <span class="d-block text-muted">Grupo GEN, 2023. E-book. ISBN 9788595158924.</span>
                                                <span class="d-block text-muted">Disponível em: <a href="https://integrada.minhabiblioteca.com.br/#/books/9788595158924/" target="_blank" class="text-primary">https://integrada.minhabiblioteca.com.br/#/books/9788533500716/</a> . Acesso em: 17 jun. 2024..</span>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="col-md-4">

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
                "ativo": false,
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

]