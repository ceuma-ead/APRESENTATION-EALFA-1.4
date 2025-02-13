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
                        <div class="animated-text">Tecnologia de alimentos</div>
                        <div id="underline"></div>
                        <div id="second-text">Principais processos tecnológicos de fabricação dos alimentos</div>
                        <button id="animated-button" onclick="iniciar()">Início</button>
                        <div id="second-text" class="text-light" style="font-size:1rem;margin-top:1rem;">Lucas Almeida das Chagas</div>
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
                "ativo": false,
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
            "logo": {
                "ativar": true,
                "img": "url(../assets/logobranca.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
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
                    {
                        "construir_animacao": ".animationTarget",
                        "animacao": 'animate__animated animate__backInRight animate__slow'
                    }
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
                        <div class="pagina-tipo-texto--box-texto gap-2">
                            <p>Olá, estudante!</p>
                            <p>
                                Nesta unidade,  vamos abordar um tema fascinante: a Tecnologia de Alimentos!  Primeiramente, vamos conhecer e compreender um pouco mais sobre processamento de alimento; as técnicas como pasteurização, esterilização, fermentação, secagem e outras; e como elas são empregadas para converter alimentos crus em produtos seguros, com excelente qualidade sensorial.
                            <p>
                                Além disso, vamos estudar a seleção apropriada do tipo de embalagem que atua diretamente na preservação dos alimentos. Com o avanço da tecnologia de alimentos na área de embalagens, foram desenvolvidos materiais capazes de proteger estes alimentos. Também abordaremos sobre os aditivos alimentares e como eles deixam o alimento mais saboroso e conservado.
                            </p>
                            <p>
                                Estão preparados para embarcarem nessa jornada pelo mundo da Tecnologia de Alimentos? Vamos explorar, experimentar e desfrutar juntos dessas descobertas. Prontos? Então vamos lá!
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
                    },
                    {
                        "construir_animacao": ".animationTarget",
                        "animacao": 'animate__animated animate__backInRight animate__slow'
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
                                    
                                    <img src="${_prefixAssetsIcons}target.png" class="animationTarget" />
                                    <div class="objetivo-aprendizagem-elemento--img-title">
                                        <h1>Objetivos de aprendizagem</h1>
                                    </div>
                                    <ol class="list-group list-group-numbered">
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Compreender o conceito e os objetivos fundamentais da Tecnologia de Alimentos;</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Conhecer os Métodos de Conservação de Alimentos (físicos, químicos e biológicos);</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            <p>Identificar as etapas do processamento dos principais grupos de alimentos;</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                           <p>Identificar os efeitos do processamento sobre o valor nutricional dos alimentos;</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                           <p>Diferenciar métodos de conservação de alimentos.</p>
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
            // Animação para Todo Elementos API
            "animacao_elemento": {
                "ativo": true,
                "animacoes": [
                    {
                        "construir_animacao": ".animation",
                        "animacao": 'animate__animated animate__fadeInDown animate__slow'
                    },
                    {
                        "construir_animacao": ".animationTarget",
                        "animacao": 'animate__animated animate__backInRight animate__slow'
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

    // PÁGINA 4 O que é tecnologia de alimentos?
    /*
        FILTRO
            ------> pg[4]
            ------> CM[O que é tecnologia de alimentos?]
        AQUI ÉA PÁGINA DE O que é tecnologia de alimentos?
        
    */
    {
        "pagina": 4,
        "nome_page": `O que é tecnologia de alimentos?`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container-fluid">
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12 d-flex flex-column gap-2">
                                        <p>A Tecnologia de Alimentos é uma área multidisciplinar que se dedica a entender e aplicar princípios científicos e técnicos para a produção, processamento, conservação e distribuição dos alimentos que fazem parte da nossa alimentação diária.</p>
                                        <p class="destaque">A Sociedade Brasileira de Ciência e Tecnologia de Alimentos define tecnologia de alimentos como a aplicação de métodos e da técnica para o preparo, armazenamento, processamento, controle, embalagem, distribuição e utilização dos alimentos.</p>
                                        <p>A Ciência de Alimentos inclui o estudo das características físicas, químicas e biológicas dos alimentos. A tecnologia de alimentos inclui a sequência de operações desde a seleção da matéria-prima até o processamento e o armazenamento dos alimentos, mas também deve conhecer a produção agrícola e as necessidades do consumidor. </p>
                                        <p>O campo da ciência de alimentos não é novo. Entretanto, ele tem recebido novas dimensões com a migração da população rural para a zona urbana. A matéria-prima tem que ser transformada em alimentos estáveis, que são facilmente armazenados e transportados, e que estão muitas vezes prontos para o consumo, quando adquiridos. Assim, a ciência e tecnologia de alimentos tem se desenvolvido como uma importante ciência aplicada.</p>
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

    // PÁGINA 5 O que é tecnologia de alimentos? - CONTINUACAO
    /*
        FILTRO
            ------> pg[5]
            ------> CM[O que é tecnologia de alimentos? - CONTINUACAO]
        AQUI ÉA PÁGINA DE O que é tecnologia de alimentos? - CONTINUACAO
        
    */
    {
        "pagina": 5,
        "nome_page": `Tolerância Imunológica`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid p-4 animate-info">
                                <h4  style="color:#011c41; text-align:left;font-style:italic;">Você sabe qual é a importância da Tecnologia de Alimentos?</h4>
                                <!-- Cartão responsivo -->
                                <div class="container animate-info rounded ">
                            
                                    <div class="row d-flex flex-column flex-md-row align-items-start justify-content-start ">
                                        <div class="row w-100 position-relative container-modal-card-horizontal-text-img">
                                            <!-- Conteúdo do cartão -->
                                            <div class="col-12 col-md-9-5 d-flex flex-column gap-4 p-2 rounded text-justify"
                                                style="background: linear-gradient(90deg, rgba(192,40,39,1) 42%, rgba(237,119,118,1) 100%);">
                                                <p class="text-branco">A industrialização dos produtos agropecuários pode contribuir consideravelmente na melhoria da dieta de um país e do estado nutricional dos seus habitantes. A amplitude dessa contribuição depende de diversos fatores, como a existência de uma agricultura desenvolvida que possa receber uma tecnologia avançada e do nível econômico e poder aquisitivo da população.</p>
                                                <p class="text-branco">Ademais, a Tecnologia de Alimentos desempenha um papel crucial em nossa sociedade moderna e tem impacto direto na vida de todos nós. Com o aumento da população mundial, a demanda por alimentos cresce exponencialmente.</p>
                                            </div>
                                            <!-- Imagem que vai ao lado ou abaixo dependendo do dispositivo -->
                                            <div class="col-12 col-md-3 text-center imgCardFlutuante">
                                                <img src="${_prefixUnidade}homemsegurandoovo.png"
                                                    alt="Imagem: Homem segurando caixa de ovos de laboratório" class="rounded animationImg w-100">
                                                <div>
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

    // PÁGINA 6 Principais aplicações da tecnologia de alimentos
    /*
        FILTRO
            ------> pg[6]
            ------> CM[Principais aplicações da tecnologia de alimentos]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos
        
    */
    {
        "pagina": 6,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container-fluid">
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">

                                        <h4 style="color:#011c41; text-align:left;">Principais aplicações da tecnologia de alimentos</h4>
                                        <p>Como você viu, a Tecnologia de Alimentos é fundamental para garantir a qualidade do que nós comemos. Mas quais são as principais aplicações dessa área exatamente? A seguir, confira onde os estudos são utilizados no dia a dia!</p>
                                        <h4 style="color:#011c41; text-align:left;">Principais processos tecnológicos de fabricação dos alimentos</h4>
                                        <p>As matérias-primas agroalimentares sejam de origem animal ou vegetal e os pescados são susceptíveis a alterações, as quais podem ser de ordem física, química, ou, biológica. As de ordem física são decorrentes, principalmente, em razão da ação de agentes mecânicos que causam danos como: quebras, deformações, perfurações e cortes. Além destas, outros agentes como o ar, a luz e o calor podem promover alterações de cor, aparência e sabor dos alimentos.  </p>
                                        <p>As alterações químicas normalmente decorrem pela degeneração de substâncias constituintes do alimento. Fatos que podem ocorrer de forma espontânea ou indução de algum fator externo, como por exemplo, a composição do ar ambiente. Nesses casos, ocorrem alterações químicas enzimáticas e não-enzimáticas. Estas podem causar mudanças das características dos alimentos como cor, sabor e consistência.</p>
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

    // PÁGINA 7 Principais aplicações da tecnologia de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[7]
            ------> CM[Principais aplicações da tecnologia de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 7,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                                <div class="row align-items-center rounded p-2" style="background:#f9e8cb;">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-9-80 mt-2">
                                        <p>Quanto às alterações biológicas, estas podem ser causadas por insetos, roedores e microrganismos.
                                            Os dois primeiros agentes, geralmente, agem consumindo parte ou o todo dos alimentos, e em
                                            certos casos disseminam doenças. </p>
                                        <p>Já os microrganismos, fungos e bactérias, causam alterações dos alimentos por meio de processos
                                            como a fermentação, putrefação e alteração de aparência, sendo que: a fermentação dá-se pela
                                            decomposição dos açúcares ocorrendo a geração de gases inodoros, álcoois ou ácidos, a putrefação
                                            desenrola-se pela decomposição de grupamentos proteicos em que pode ocorrer a liberação de gases
                                            com odor indesejável; e as alterações de aparências que procedem pelo desenvolvimento de
                                            microrganismos sobre a superfície do alimento, modificando a sua aparência, consequentemente,
                                            tornando-o refutável ao consumo.</p>

                                    </div>

                                    <div
                                        class="col-md-2-20 text-center position-relative   _desaparecer ">
                                        <img src="${_prefixUnidade}vegetaisestragados.png" class="img-fluid rounded"
                                            alt="Figura: Vegetais Estragados.">
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Imagem:
                                            Vegetais estragados. Fonte da imagem: Canva</p>
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

    // PÁGINA 8 Principais aplicações da tecnologia de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[8]
            ------> CM[Principais aplicações da tecnologia de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 8,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                                <div class="row">
                                     <div class="col-md-12 d-flex flex-column gap-1">

                                    <p>Normalmente as alterações citadas ocorrem de forma conjunta, isso faz demandar a adoção de técnicas
                                        que busquem prevenir e/ou retardar: a decomposição dos alimentos por agentes microbianos e a
                                        autodecomposição dos alimentos.</p>
                                    <p>Desta forma, a Ciência e a Tecnologia de Alimentos disponibiliza procedimentos que compreendem: aos
                                        métodos de assepsia que abrangem as formas de obtenção de matérias primas e os procedimentos de
                                        higienização dos ambientes agroindustriais, às Boas Práticas de Fabricação – BPF e aos métodos de
                                        conservação de alimentos.</p>
                                    <h4 style="color:#011c41; text-align:left;">Conservação de alimentos pelo uso de calor</h4>
                                    <p>O uso de calor na indústria de alimentos objetiva que por meio da exposição ao calor, os agentes como
                                        fungos e bactérias sejam destruídos parcialmente ou em sua totalidade. Os principais métodos dessa
                                        categoria são: pasteurização, apertização, esterilização, secagem e desidratação.</p>

                                
                                   <h4 style="color:#011c41; text-align:left;">Pasteurização</h4>
                                </div>
                                </div>

                                <div class="row align-items-center justify-content-center">
                                
                                    <div class="col-md-7-60 d-flex flex-column gap-1">

                                                <button class="buttonExplorar justify-content-center  shadow fs-5 rounded"
                                                    style="--clr: #0f407a;font-size:1rem;border-radius:0;"
                                                    onclick="customModal7b06b9cc60491458d7727bf8e05a0ce8()"
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
                                                    Entenda quando é empregada a pasteurização
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

    // PÁGINA 9 Principais aplicações da tecnologia de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[9]
            ------> CM[Principais aplicações da tecnologia de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 9,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                                <div class="row">

                                    <div class="col-md-12">
                                        <p>Os agentes indesejáveis podem causar doenças, ou então, prejudicar produção de alimentos, como por exemplo, a fabricação de iogurtes. Na pasteurização, é destruída parte da população de microrganismos presentes nos alimentos. Dentre estes microrganismos podem estra os que causam danos aos alimentos e os que podem causar algum tipo de doenças aos consumidores. O objetivo primeiro é eliminar os causadores de doenças. Após a aplicação da pasteurização, devem ser aplicados outros métodos de conservação, tais como: </p>
                                    </div>
                                     <div class="row justify-content-center gap-1 mt-3">
                                        <!-- Imagem 1: Maior em telas grandes -->
                                        <div class="col-6 col-md-2 cursor-pointer">
                                            <img src="${_prefixUnidade}leitepasteurizado.png" onclick="abrirZoomist(this)" class="img-fluid w-100 h-100 rounded tippy-nome-img" alt="Imagem:Refrigeração Leite pasteurizado." data-content-tippy="Refrigeração Leite pasteurizado.">
                                        </div>
                                        <!-- Imagem 2: Menor em telas grandes -->
                                        <div class="col-6 col-md-2 cursor-pointer">
                                            <img src="${_prefixUnidade}docesemmassa.png" onclick="abrirZoomist(this)" class="img-fluid w-100 h-100 rounded tippy-nome-img" alt="Imagem:Adição de açúcar Doces em massa." data-content-tippy="Adição de açúcar Doces em massa.">
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
                    "url": ``
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": `${_prefixConfJS}TooltipImg.js`
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

    // PÁGINA10 Principais aplicações da tecnologia de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[10]
            ------> CM[Principais aplicações da tecnologia de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 10,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                          <div class="container-fluid">
                                   <div class="row align-items-center rounded p-2">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-9 mt-2">
                                            <p><strong>Pasteurização rápida</strong> (HTST - high teperature and short time – alta temperatura em curto espaço de tempo) como exemplo pode ser citado o beneficiamento de leite. Neste caso, o produto é submetido à temperatura de 75˚C por 15 segundos e em sequência é refrigerado a temperatura inferior a 5˚C. Isto é possível pela passagem do líquido por trocadores de calor do pasteurizador (Figura 3) a uma vazão que permita ao leite ser exposto à temperatura 72˚C por 15 segundos. Observe ao lado uma imagem de Pasteurizador HTST.</p>
                                    </div>

                                    <div class="col-md-4 text-center position-relative   _desaparecer ">
                                        <img src="${_prefixUnidade}pasteurizadorhtst.png" class="img-fluid rounded" alt="Figura: Método de Pasteurização rápida. Pasteurizador HTST. Fonte: Inoxpa. " />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Figura: Método de Pasteurização rápida. Pasteurizador HTST. Fonte: Inoxpa.</p>    
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

    // PÁGINA 11 Principais aplicações da tecnologia de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[11]
            ------> CM[Principais aplicações da tecnologia de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 11,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                          <div class="container-fluid">
                                   <div class="row align-items-center rounded p-2" style="background: #f6d1d1;">
                                    
                                    <div class="col-md-4 text-center position-relative   _desaparecer ">
                                        <img src="${_prefixUnidade}pasteurizadorltlt.png" class="img-fluid rounded" alt="Figura: Método de Pasteurização rápida. Pasteurizador tipo LTLT. Fonte: Suck Milk." />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Figura: Método de Pasteurização rápida. Pasteurizador tipo LTLT. Fonte: Suck Milk.</p>    
                                    </div>

                                    <div class="col-md-9 mt-2">
                                            <p><strong>Pasteurização lenta</strong> (LTLT – low temperature and longe time – baixa temperatura e longo espaço de tempo) – para o leite um determinado um determinado volume é depositado em um recipiente onde permanece à temperatura de 62˚C por 30 minutos. Este tipo de tratamento é recomendado para pequenas unidades industriais de fabricação de queijos e iogurtes. Observe ao lado uma imagem de Pasteurizador tipo LTLT.</p>
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

    // PÁGINA 12 Principais aplicações da tecnologia de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[12]
            ------> CM[Principais aplicações da tecnologia de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 12,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                                <div class="row">

                                    <div class="col-md-12">
                                        <h4 style="color:#011c41; text-align:left;">Branqueamento</h4>
                                        <p>Para o caso de frutas e hortaliças, o branqueamento é indicado para desnaturar as enzimas dos alimentos que durante o período de armazenagem promovem descoloração e alterações de sabor e aroma. Nesse caso, o processo consiste em mergulhar o alimento em água aquecida ou insuflar vapor sobre o mesmo, por um curto espaço de tempo 2 a 10 minutos. Em seguida, é procedido o imediato resfriamento, geralmente em água fria, conforme mostrado nas imagens abaixo:</p>
                                    </div>
                                     <div class="row justify-content-center gap-1 mt-3">
                                        <!-- Imagem 1: Maior em telas grandes -->
                                        <div class="col-6 col-md-2 cursor-pointer">
                                            <img src="${_prefixUnidade}aguaaquecida.png" onclick="abrirZoomist(this)"  class="img-fluid w-100  h-100 rounded tippy-nome-img" alt="Imagem:Água aquecida" data-content-tippy="Água aquecida">
                                        </div>
                                        <!-- Imagem 2: Menor em telas grandes -->
                                        <div class="col-6 col-md-2 cursor-pointer">
                                            <img src="${_prefixUnidade}aguafria.png" onclick="abrirZoomist(this)"  class="img-fluid w-100 h-100 rounded tippy-nome-img" alt="Imagem:Água fria" data-content-tippy="Água fria">
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
                    "url": `${_prefixConfCss}Lista.css`
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": `${_prefixConfJS}TooltipImg.js`
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

    // PÁGINA 13 Principais aplicações da tecnologia de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[13]
            ------> CM[Principais aplicações da tecnologia de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 13,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                                <p>
                                    O branqueamento também é empregado no processo de apertização, produção de enlatados. Nesse caso os objetivos do branqueamento são:
                                </p>
                                <ol class="lista-customizada-ol">
                                    <li class="_sugirEsquerdaAndando_1" background: #8ebbf1;>
                                        <p>Remover gases dos tecidos dos alimentos elaborados e acondicionados em latas ou vidros de fechar;</p>
                                    </li>
                                    <li class="_sugirEsquerdaAndando_2">
                                        <p>Promover desinfecção externas das embalagens;</p>
                                    </li>
                                    <li class="_sugirEsquerdaAndando_3">
                                        <p>Pré-aquecer o produto, o que diminui o tempo do uso da autoclave durante a apertização.</p>
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

    // PÁGINA 14 Principais aplicações da tecnologia de alimentos
    /*
        FILTRO
            ------> pg[14]
            ------> CM[Principais aplicações da tecnologia de alimentos]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos
        
    */
    {
        "pagina": 14,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">

                          <div class="container-fluid">
                                <div class="row">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-12">

                                        <h4 style="color:#011c41; text-align:left;">Apertização</h4>
                                        <p>O processo de apertização foi inventado em 1809 pelo confeiteiro parisiense Nicolas Appert, que ganhou o prêmio de 12.000 francos em um concurso proposto pelo imperador Napoleão. A invenção consistia em um método para conservar alimentos por um longo período de tempo.</p>
                                        <p>A descoberta de Appert consistia em acondicionar os produtos elaborados em jarros hermeticamente fechados com rolhas, e então aplicar calor por meio de banho maria por um determinado período de tempo.</p>
                                        
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

    // PÁGINA 15 Principais aplicações da tecnologia de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[15]
            ------> CM[Principais aplicações da tecnologia de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Principais aplicações da tecnologia de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 15,
        "nome_page": `Principais aplicações da tecnologia de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                                <div class="row align-items-center rounded p-2" style="background:#f9e8cb;">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-8 mt-2">
                                        <p>Um grande impulso ao processo de apertização ocorreu em 1904 com a invenção das latas recravadas pela <i>empresa Sanitary Can Company</i>. Recravação é uma operação que consiste em lacrar as latas por meio mecânico. Para tanto são procedidas dobraduras das extremidades da tampa junto ao corpo das latas, sendo empregado o equipamento denominado recravadeira. Observe na imagem ao lado uma recravadeira automática.</p>
                                        

                                    </div>

                                    <div
                                        class="col-md-4 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}RecravadeiraAutomatica.png" class="img-fluid rounded"
                                            alt="Figura: Vegetais Estragados." />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Figura: Recravadeira automática.
Fonte: Máquinas Moreno.</p>
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

    // PÁGINA 16 Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[16]
            ------> CM[Métodos gerais de preservação e conservação de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 16,
        "nome_page": `Métodos gerais de preservação e conservação de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid d-flex flex-column gap-2">
                                <div class="row  ">
                                    <div class="col-md-12 d-flex flex-column gap-1">
                                        <h4 style="color:#011c41; text-align:left;">Métodos gerais de preservação e conservação de alimentos
                                        </h4>

                                        <p>Nas economias desenvolvidas, a qualidade e a frescura dos alimentos são uma grande preocupação há
                                            vários anos.</p>
                                        <p>Determinadas crises sanitárias mediáticas aumentaram ainda mais as expetativas dos consumidores
                                            em relação a produtos saudáveis, com qualidades nutricionais preservadas, mas que também
                                            satisfaçam os requisitos dos nossos estilos de vida: prontos a comer, prontos a cozinhar, fáceis
                                            de conservar, etc. Um verdadeiro desafio para os fabricantes de alimentos confrontados com
                                            temáticas que são agora uma questão de saúde pública e em que a higiene desempenha um papel
                                            fundamental.</p>
                                        <p>As técnicas de conservação dos alimentos permitem também distanciar ainda mais os locais de
                                            produção e consumo. Constituíram a base do setor das indústrias agroalimentares, que é
                                            atualmente o maior setor industrial da Europa. Os alimentos, quer sejam processados ou não, são
                                            sensíveis a vários tipos de degradações: físicas, enzimáticas, microbianas, bioquímicas, etc. Os
                                            tratamentos de conservação que lhes são aplicados destinam-se portanto, a preservar as suas
                                            qualidades gustativas e nutricionais, mas sobretudo a prolongar o seu prazo de conservação: quer
                                            limitando o desenvolvimento de microrganismos para evitar intoxicações alimentares, quer
                                            abrandando a oxidação das gorduras causadoras de ranço.</p>

                                    </div>
                                </div>
                                <div class="row align-items-center justify-content-center">
                                    <div class="col-md-7-60 d-flex flex-column gap-1">
                                        <button class="buttonExplorar justify-content-center  shadow fs-6 rounded"
                                            style="--clr: #0f407a;border-radius:0;padding:0.5rem 1.5rem;"
                                            onclick="abrirZoomist('${_prefixUnidade}tabelaConservacaodeAlimentos.png')"
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
                                            Veja a Tabela Aqui
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
                    "url": `` // Colocar o Estilo somente nessa Página
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

    // PÁGINA 17 Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[17]
            ------> CM[Métodos gerais de preservação e conservação de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 17,
        "nome_page": `Métodos gerais de preservação e conservação de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                                <p>
                                    Vários métodos estão hoje disponíveis e podem ser utilizados, dependendo dos produtos, para conservar os alimentos. Para evitar o desenvolvimento de microrganismos, é possível conservar:
                                </p>
                                <ol class="lista-customizada-ol" style="height:50%;">
                                    <li class="_sugirEsquerdaAndando_1" background: #8ebbf1;>
                                        <p>Pelo calor (cozedura, pasteurização, apertização ou esterilização, ultra-alta temperatura UHT);</p>
                                    </li>
                                    <li class="_sugirEsquerdaAndando_2">
                                        <p>Pelo frio (refrigeração, congelação e ultracongelação). </p>
                                    </li>
                                
                                </ol>
                                <p class="mb-3">
                                    Existem outras técnicas tais como:
                                </p>

                                <button class="buttonOfTwoText rounded"
                                onclick="customModale325dffcbe1b6e4684f61a4df66e0151()"
                                >
                                <div class="text">
                                    <span>clique</span>
                                    <span>aqui</span>

                                </div>
                                <div class="clone">
                                    <span>e</span>
                                    <span>veja</span>
                                    <span>as outras técnicas</span>
                                </div>
                                <svg
                                    stroke-width="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                >
                                    <path
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    ></path>
                                </svg>
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

    // PÁGINA 18 Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[18]
            ------> CM[Métodos gerais de preservação e conservação de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 18,
        "nome_page": `Métodos gerais de preservação e conservação de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                             
                                <div class="row">
                                    <div class="col-12 col-md-12">
                                        <p>
                                            Entre os mais recentes métodos de conservação, que surgiram nos anos 1985- 1990, o acondicionamento em atmosfera modificada (ou protetora) permite substituir o ar à volta de um produto por uma mistura gasosa ou um gás adequado. Esta técnica ajuda a eliminar ou reduzir a potencial deterioração dos produtos (oxidação, desenvolvimento de bactérias e outros micro-organismos). Permite preservar a qualidade e a frescura (aspecto, textura, sabor e cor) dos alimentos (por exemplo, salada, peixe, produtos preparados, massas frescas, carne, charcutaria, etc.). Inibe os desenvolvimentos microbianos, protege os componentes do alimento da oxidação e prolonga a sua data-limite de consumo. Em contrapartida, não tem qualquer efeito sobre o desenvolvimento de organismos patogénicos.  
                                        </p>

                                        <p>
                                            Portanto, existem várias soluções de conservação dos alimentos (refrigeração, pasteurização, esterilização, liofilização, etc.) que transformam, mais ou menos, o alimento. Mas, caso se pretenda ter um produto "fresco" e embalado, o acondicionamento em atmosfera modificada é uma ótima solução.
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

    // PÁGINA 19 Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[19]
            ------> CM[Métodos gerais de preservação e conservação de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
        
    */
    {
        "pagina": 19,
        "nome_page": `Métodos gerais de preservação e conservação de alimentos`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ">

                            <div class="container-fluid">
                                    <div class="vision-info-box">
                                        <img src="${_prefixAssetsIcons}lampada.png" alt="Ícone de lâmpada" class="icon _piscar">
                                        <div class="text-content">
                                            <h3>É importante saber que...</h3>
                                            <div class="d-flex flex-column gap-2">
                                                <p>Fala-se muito em reduzir o desperdício alimentar e conservar corretamente os seus produtos em casa, é um método fácil para limitar as perdas. </p>
                                                <ul class="lista-tipo-ul _descer text-light">
                                                    <li>É aconselhável colocar os alimentos no frigorífico nos compartimentos corretos, pois nem todos têm a mesma temperatura, ficando a zona mais fria imediatamente acima do compartimento dos legumes.</li>
                                                    <li>É importante proteger os alimentos uns dos outros, por exemplo, utilizando caixas herméticas para alimentos caseiros.</li>
                                                    <li>É também aconselhável não armazenar produtos que possam ser conservados à temperatura ambiente (por exemplo, ovos).</li>
                                                
                                                </ul>
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

    // PÁGINA 20 Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[20]
            ------> CM[Métodos gerais de preservação e conservação de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
    */
    {
        "pagina": 20,
        "nome_page": `Métodos gerais de preservação e conservação de alimentos `,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                                <div class="row align-items-center rounded p-2">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-9 mt-2 d-flex flex-column gap-2">
                                        
                                        <h4 style="color:#011c41; text-align:left;">Desidratação e secagem</h4>
                                        <p>As frutas secas são um sucesso, especialmente na época de natal, e o processo que as deixa com aquele aspecto e sabor característicos é justamente a desidratação e a secagem. O procedimento retira parte da água dos alimentos e, como consequência, os microrganismos que precisam dela para desempenharem suas funções vitais ficam paralisados. </p>
                                        <p>Além das frutas, esse método de conservação é muito comum com carnes e grãos. Um exemplo muito conhecido no Brasil é a carne seca.</p>

                                    </div>
                                    <div
                                        class="col-md-4 text-center position-relative  _desaparecer ">
                                        <img src="${_prefixUnidade}frutasSecas.png" class="img-fluid rounded"
                                            alt="Imagem: Frutas secas. Fonte da imagem: Canva" />
                                        <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Imagem: Frutas secas. Fonte da imagem: Canva</p>
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

    // PÁGINA 21 Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
    /*
        FILTRO
            ------> pg[21]
            ------> CM[Métodos gerais de preservação e conservação de alimentos - CONTINUACAO]
        AQUI ÉA PÁGINA DE Métodos gerais de preservação e conservação de alimentos - CONTINUACAO
    */
    {
        "pagina": 21,
        "nome_page": `Métodos gerais de preservação e conservação de alimentos `,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                    <div class="pagina-tipo-texto">
                            <div class="pagina-tipo-texto--box-texto ">
                                <div class="container-fluid">
                                    <div class="row align-items-center rounded p-2 ">
                                        <!-- Texto explicativo -->
                                        <div class="col-md-9-80 mt-2  d-flex flex-column gap-2">
                                           <h4 style="color:#011c41; text-align:left;">Sal e açúcar</h4>
                                            <p>O sal e o açúcar são, sem dúvidas, dois aliados antigos na conservação de alimentos. Nós já vimos que reduzir a quantidade de água é eficaz para a prolongação da validade, e essas duas especiarias agem justamente nesse sentido: ao entrar em contato com o produto, eles absorvem parte do líquido.</p>
                                            <p>Quem já comeu bacalhau sabe do que estamos falando - o sabor bastante salgado vem justamente dessa técnica.</p>
                                            <p>Os métodos de conservação de alimentos são fundamentais para o ramo da alimentação. Um tempo de vida maior para os itens armazenados reduz desperdícios, contribui para que a produção seja eficiente e evita que os clientes sejam afetados por produtos deteriorados. Então, planeje bem a sua estrutura de armazenamento e conservação para evitar problemas!</p>
    
                                        </div>
    
                                        <div
                                            class="col-md-2-20 text-center position-relative  _desaparecer ">
                                            <img src="${_prefixUnidade}bacalhau.png" class="img-fluid rounded"
                                                alt="Figura: Vegetais Estragados." />
                                            <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Imagem:
                                                Vegetais estragados. Fonte da imagem: Canva</p>
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

    // PÁGINA 22 Aditivos alimentares 
    /*
        FILTRO
            ------> pg[22]
            ------> CM[Aditivos alimentares]
        AQUI ÉA PÁGINA DE Aditivos alimentares
        
    */
    {
        "pagina": 22,
        "nome_page": `Aditivos alimentares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto">

                            <div class="container-fluid">
                                    <div class="row p-4 componenteLivro align-items-center">
                                       
                                        <div class="col-md-8">
                                            <div class="d-flex flex-column gap-2">
                                                <p>Aditivo alimentar é definido, pelo Ministério da Saúde (MS), como todo e qualquer ingrediente adicionado intencionalmente ao alimento, sem propósito de nutrir, com o objetivo de modificar as características físicas, químicas, biológicas ou sensoriais, durante a fabricação, processamento, preparação, tratamento, embalagem, acondicionamento, armazenagem, transporte ou manipulação de um alimento (Portaria nº 540, 1997, Secretaria de Vigilância Sanitária). Os aditivos podem ser obtidos tanto de fontes naturais, caso de boa parte dos espessantes, como sintetizados em laboratório.</p>
                                            </div>
                                        </div>

        
                                         <div class="col-md-4  ">
                                            <img src="${_prefixAssetsIcons}livro.png" alt="livro com lâmpada" class="icon _piscar img1 img-fluid">
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
            // "link":{
            //     "ativo":true,
            //     // "links_ativar":[]
            // },
            "lupa": {
                "ativo": false,
                // "imgs_ativas":[0,1]
            },
            // "tesseract": {
            //     "ativo": false,
            //     "ocr":
            //         [
            //             {
            //                 "_class": ".img1",
            //                 // "_btn": ['.buttonAnticorposMonoclonais'],
            //                 // "_link": `${_prefixUnidade}imgProducaoAnticorpos.png`,
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

    // PÁGINA 23 Aditivos alimentares  - CONTINUACAO
    /*
        FILTRO
            ------> pg[23]
            ------> CM[Aditivos alimentares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Aditivos alimentares - CONTINUACAO
        
    */
    {
        "pagina": 23,
        "nome_page": `Aditivos alimentares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                             
                                <div class="row">
                                    <div class="col-12 col-md-12 d-flex flex-column gap-2">
                                        <p>
                                           A avaliação da segurança de um aditivo para uso em alimentos envolve a realização de vários ensaios toxicológicos com animais experimentais para identificação de possíveis efeitos adversos decorrentes da exposição a estes compostos. 
                                        </p>

                                        <p>
                                            Comitês de Especialistas, entre eles o JECFA – Joint FAO/WHO Expert Committee on Food Additives (<a target="_blank" href="https://www.fao.org/food/food-safety-quality/scientific-advice/jecfa/en/">https://www.fao.org/food/food-safety-quality/scientific-advice/jecfa/en/</a>) avaliam regularmente os aditivos alimentares e estabelecem, quando apropriado, especificações de identidade e pureza e valores de Ingestão Diária Aceitável (IDA), com base em dados científicos adequados submetidos pelo interessado e outras partes, bem como em informações disponíveis na literatura científica. 
                                        </p>
                                        
                                        <p>
                                            O conceito de IDA se baseia na premissa de que todas as substâncias químicas são tóxicas, mas que suas toxicidades variam quanto à natureza do efeito e à quantidade que é necessária para produzir sinais e sintomas tóxicos.
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
            "link": {
                "ativo": true,
                // "links_ativar":[]
            },
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

    // PÁGINA 24 Aditivos alimentares  - CONTINUACAO
    /*
        FILTRO
            ------> pg[24]
            ------> CM[Aditivos alimentares  - CONTINUACAO]
        AQUI ÉA PÁGINA DE Aditivos alimentares  - CONTINUACAO
        
    */
    {
        "pagina": 24,
        "nome_page": `Aditivos alimentares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                              
                            <div class="container-fluid position-relative d-flex flex-column gap-2">
                                <div class="card card-saibamais">
                                    <!-- Título "Você sabia?" -->
                                    <div class="row">
                                        <div class="col-md-2">
                                            <img class="voce-sabia-img animationSaibamais" src="${_prefixAssetsIcons}interrogacao.png">
                                        </div>
                                        <div class="col-md-10 w-100">
                                            <h3>Você sabia?</h3>
                                        </div>
                                    </div>
                                    
                                    <!-- Texto informativo -->
                                    <div class="row w-100">
                                        <div class="col-md-12">
                                            <p>
                                                 A IDA é a quantidade de um aditivo, expressa em mg /kg de peso corpóreo, que pode ser consumida diariamente e por toda a vida, sem risco apreciável à saúde, à luz dos conhecimentos toxicológicos disponíveis na época da avaliação. A IDA é calculada através da divisão de uma dose sem efeito adverso, denominada NOAEL (No Observed Adverse Effect Level), geralmente obtida em estudos de toxicidade crônica com animais experimentais, por um fator de incerteza, que visa dar uma margem de segurança conservadora à extrapolação de dados em animais para efeitos potenciais em humanos e à variabilidade entre humanos (IPCS, 2009).
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
                    "url": `${_prefixConfCss}Cardsaibamais.css` // Colocar o Estilo somente nessa Página
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

    // PÁGINA 25 Aditivos alimentares  - CONTINUACAO
    /*
        FILTRO
            ------> pg[25]
            ------> CM[Aditivos alimentares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Aditivos alimentares - CONTINUACAO
        
    */
    {
        "pagina": 25,
        "nome_page": `Aditivos alimentares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                             
                                <div class="row">
                                    <div class="col-12 col-md-12 d-flex gap-2 flex-column">
                                            <p>De acordo com a pesquisadora Fabiana Hoffmann Sardá, do Centro de Pesquisa em Alimentos (Food Research Center - FoRC), o emprego dos aditivos alimentares justifica-se por razões tecnológicas, nutricionais ou sensoriais. <i class="destaque">“Eles são usados para proporcionar vantagens de ordem tecnológica para o alimento, tais como características sensoriais melhores ou diferenciadas, maior prazo de validade, maior segurança alimentar, diminuição ou troca de um ingrediente de interesse, por exemplo, para a redução de calorias. Mas jamais para encobrir falhas no processamento ou nas técnicas de manipulação. Ou seja: o objetivo do uso do aditivo é adicionar uma qualidade ou característica ao alimento, nunca encobrir um defeito”</i>, ressalta.</p>
                                            
                                            <p>Os aditivos são divididos em 23 classes funcionais. Antes de seu emprego ser autorizado, o aditivo deve ser submetido a uma avaliação toxicológica em que se leve em conta, entre outros aspectos, qualquer efeito acumulativo, sinérgico e de proteção decorrente do seu uso. Sua aprovação fica à cargo dos organismos de saúde e vigilância sanitária de cada país.</p>
                                            
                                            <p>No Brasil, Agência Nacional de Vigilância Sanitária (ANVISA) dispõe sobre os aditivos alimentares autorizados para uso segundo as boas práticas de fabricação e publica uma lista com os nomes e códigos dos aditivos alimentares, bem como dos alimentos em que eles podem ser utilizados (e os limites máximos), e aqueles nos quais existe restrição de uso.</p>
                                            
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

    // PÁGINA 26 Aditivos alimentares  - CONTINUACAO
    /*
        FILTRO
            ------> pg[26]
            ------> CM[Aditivos alimentares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Aditivos alimentares - CONTINUACAO
        
    */
    {
        "pagina": 26,
        "nome_page": `Aditivos alimentares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                                <div class="row align-items-center rounded p-2" style="background:#f9e8cb;">
                                    <!-- Texto explicativo -->
                                    <div class="col-md-9-80 mt-2">
                                        <p>
                                            Pela legislação brasileira, para que um aditivo alimentar ou coadjuvante de tecnologia possa ser aprovado, são consideradas referências internacionalmente reconhecidas, como o Codex Alimentarius, a Autoridade Europeia de Segurança Alimentar <i class="destaque">(European Food Safety Authority – EFSA)</i> e a Agência Americana para Administração de Alimentos e Medicamentos <i class="destaque">(US Food and Drug Administration - FDA)</i>.
                                        </p>

                                    </div>

                                    <div
                                        class="col-md-2-20 text-center position-relative   _desaparecer ">
                                        <img src="${_prefixUnidade}pergaminio.png" class="img-fluid rounded"
                                            alt="Figura: pergamino">
                          
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

    // PÁGINA 27 Aditivos alimentares  - CONTINUACAO
    /*
        FILTRO
            ------> pg[27]
            ------> CM[Aditivos alimentares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Aditivos alimentares - CONTINUACAO
        
    */
    {
        "pagina": 27,
        "nome_page": `Aditivos alimentares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                             
                                <div class="row">
                                    <div class="col-12 col-md-12 d-flex gap-2 flex-column">
                                            <p><i class="destaque">“É claro que, com o passar do tempo, essas substâncias devem ser reavaliadas quando necessário, à luz do conhecimento científico disponível e atualizado, e também, caso suas condições de uso se modifiquem. A segurança dos aditivos alimentares é primordial”</i>,reforça Fabiana.</p>
                                            
                                            <p>Segundo ela, o uso dos aditivos deve ser limitado a alimentos específicos, em condições estabelecidas e ao menor nível para alcançar o efeito desejado, de maneira que sua ingestão não supere os valores de ingestão diária aceitável (IDA), que variam conforme o tipo de aditivo.</p>
                                            
                                            <p>De acordo com relatório publicado pelo BNDES em 2014, o mercado mundial de aditivos alimentícios movimentou 33 bilhões de dólares em 2012. No Brasil, esse mercado atingiu 1,8 bilhão de dólares e, ao contrário do cenário mundial, apresentou maior participação dos aditivos para ração animal (63%) do que daqueles para alimentação humana.</p>
                                            
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

    // PÁGINA 28 Aditivos alimentares  - CONTINUACAO
    /*
        FILTRO
            ------> pg[28]
            ------> CM[Aditivos alimentares  - CONTINUACAO]
        AQUI ÉA PÁGINA DE Aditivos alimentares  - CONTINUACAO
        
    */
    {
        "pagina": 28,
        "nome_page": `Aditivos alimentares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid p-4 animate-info">
                                <h4  style="color:#011c41; text-align:left;font-style:italic;">Você sabe qual deve ser a dosagem e quais os riscos do uso de aditivos?</h4>
                                <!-- Cartão responsivo -->
                                <div class="container animate-info rounded ">
                            
                                    <div class="row d-flex flex-column flex-md-row align-items-start justify-content-start ">
                                        <div class="row w-100 position-relative container-modal-card-horizontal-text-img">
                                            <!-- Conteúdo do cartão -->
                                            <div class="col-12 col-md-9-5 d-flex flex-column gap-4 p-2 rounded text-justify"
                                                style="background: linear-gradient(90deg, rgba(192,40,39,1) 42%, rgba(237,119,118,1) 100%);">
                                                <p class="text-branco">O uso de aditivos em alimentos consumidos por humanos leva em consideração uma margem de segurança muito alta, de acordo com o pesquisador do FoRC, Uelinton Pinto. As avaliações toxicológicas são normalmente feitas em animais. Os avaliadores vão usando diferentes concentrações até chegarem, por exemplo, a uma concentração que levou ao aparecimento de algum efeito adverso que conseguem visualizar.</p>
                                 
                                            </div>
                                            <!-- Imagem que vai ao lado ou abaixo dependendo do dispositivo -->
                                            <div class="col-12 col-md-3 text-center imgCardFlutuante">
                                                <img src="${_prefixUnidade}imgDeAditivos.png"
                                                    alt="Imagem: pão sendo furado com espetos por formulas aditivas" class="rounded animationImg w-100">
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
                "ativo": false,
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

    // PÁGINA 29 Aditivos alimentares  - CONTINUACAO
    /*
        FILTRO
            ------> pg[29]
            ------> CM[Aditivos alimentares - CONTINUACAO]
        AQUI ÉA PÁGINA DE Aditivos alimentares - CONTINUACAO
        
    */
    {
        "pagina": 29,
        "nome_page": `Aditivos alimentares`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ">
                            <div class="container-fluid">
                             
                                <div class="row">
                                    <div class="col-12 col-md-12 d-flex gap-2 flex-column">
                                                <p>
                                                    <i class="destaque">“Os aditivos são testados em diversas espécies animais. O parâmetro para estipular margens
                                                        de segurança será aquela espécie que apresentou reação com a menor concentração utilizada. No final das
                                                        contas, a ingestão máxima permitida daquele aditivo será cem vezes menor do que aquela que causou algum
                                                        efeito adverso em alguma espécie animal. As concentrações utilizadas em alimentos consumidos por humanos
                                                        são muito baixas, sempre observando a margem de segurança”</i>, assegura Uelinton.
                                                </p>

                                                <p>
                                                    Os aditivos mais frequentemente encontrados nos alimentos que consumimos são: corantes, flavorizantes e
                                                    aromatizantes, conservantes, antioxidantes, edulcorantes, estabilizantes e espessantes.
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

    // PÁGINA 30 Video Disciplina
    /*
        FILTRO
            ------> pg[30]
            ------> CM[Video Disciplina]
        AQUI ÉA PÁGINA DE Video Disciplina
        
    */
    {
        "pagina": 30,
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

    // PÁGINA 31 Audio Disciplina
    /*
        FILTRO
            ------> pg[31]
            ------> CMAudio Disciplina]
        AQUI ÉA PÁGINA DE Audio Disciplina
        
    */
    {
        "pagina": 31,
        "nome_page": `Podcast`,
        "tipo": "Audio",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-audio",
        "data": {
            "container_render": `
                <div class="pagina-tipo-audio">
    
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
            "lupa": {
                "ativo": false,
                // "imgs_ativas":[0,1]
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

    // PÁGINA 32 Indicação de Leitura
    /*
        FILTRO
            ------> pg[32]
            ------> CM[Indicação de Leitura]
        AQUI ÉA PÁGINA DE Indicação de Leitura
        
    */
    {
        "pagina": 32,
        "nome_page": `Indicação de Leitura`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                        
                        <div class="pagina-tipo-texto">
                                <div class="pagina-tipo-texto--box-texto">
                                    <div class="container-fluid p-4 animate-info">
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
                                                    <div class="position-relative h-100" style="border:none;background:none;">
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
                "ativo": false,
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
                    "src": `${_prefixConfJS}IndicacaoLeitura.js`
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

    // PÁGINA 33 Saiba Mais
    /*
        FILTRO
            ------> pg[33]
            ------> CM[Saiba Mais]
        AQUI ÉA PÁGINA DE Saiba Mais
        
    */
    {
        "pagina": 33,
        "nome_page": `Saiba Mais`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `

               <div class="pagina-tipo-texto">
                    <div class="pagina-tipo-texto--box-texto">

                        <div class="container-saibamais--content">
                            <div class="container-saibamais w-100 h-100 ">
                                <!-- Seção 1 -->
                                <button class="accordion-saibamais">
                                    <i data-lucide="link"></i> Vídeo - Unidade II - Métodos de conservação dos alimentos.
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <div class="panel-saibamais">
                                    <p>
                                        Neste vídeo, você encontrará a seguinte informação: <strong>diferentes métodos de conservação que podem ser aplicado nos alimentos como pasteurização, branqueamento e esterelização</strong>.
                                    </p>
                                    <div class="video-container">
                                        <iframe src="https://www.youtube.com/embed/fij-aFo2ZiU" allowfullscreen></iframe>
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

    // PÁGINA 34 Página da Atividade
    /*
        FILTRO
            ------> pg[34]
            ------> CM[Página da Atividade]
        AQUI ÉA PÁGINA DE Página da Atividade
        
    */
    {
        "pagina": 34,
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
            "lupa": {
                "ativo": false,
                // "imgs_ativas":[0,1]
            },
            "handTap": {
                "ativo": false,
            },
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": `${_prefixConfCss}Lista.css`
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

    // PÁGINA 35 Síntese da Unidade
    /*
        FILTRO
            ------> pg[35]
            ------> CM[Síntese da Unidade]
        AQUI ÉA PÁGINA DE Síntese da Unidade
        
    */
    {
        "pagina": 35,
        "nome_page": `Síntese da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `

              <div class="pagina-tipo-texto p-3">
                <div class="pagina-tipo-texto--box-texto rounded-3 shadow-lg">
                    <div class="container container-sintese-unidade">
                        <!-- Carousel Bootstrap -->
                        <div id="carouselUnidade-sinteseUnidade" class="carousel slide" data-bs-ride="carousel" data-bs-interval="50000">
                            <div class="carousel-inner position-relative">
                                <!-- Slide 1 -->
                                <div class="carousel-item active">
                                    <div class="d-flex flex-column gap-2">
                                        <p>
                                            Nesta unidade, exploramos o processamento de alimentos e técnicas como pasteurização, esterilização, fermentação, secagem, entre outras, e como são utilizadas para transformar alimentos crus em produtos seguros e de alta qualidade sensorial.
                                        </p>
                                        <p>
                                            Além disso, abordamos a escolha adequada da embalagem, que desempenha um papel fundamental na preservação dos alimentos, bem como o processo de armazenamento. Discutimos também os aditivos alimentares, responsáveis por melhorar o sabor, a conservação e por manter as características organolépticas e nutricionais dos produtos.
                                        </p>
                                        <p>
                                            Além disso, abordamos a escolha adequada da embalagem, que desempenha um papel fundamental na preservação dos alimentos, bem como o processo de armazenamento. Discutimos também os aditivos alimentares, responsáveis por melhorar o sabor, a conservação e por manter as características organolépticas e nutricionais dos produtos.
                                        </p>
                                    </div>
                                </div>

                         
                                
                            </div>

                            <!-- Controles de navegação -->
                            <div class="btn-nav-carrosel-container gap-2">
                                <button class="btn-nav-carrosel-sintese-unidade prev-btn controll-carrosel-slider-sintese-unidade" 
                                        type="button" 
                                        data-bs-target="#carouselUnidade-sinteseUnidade" 
                                        data-bs-slide="prev">
                                    <i class="bi bi-chevron-left"></i>
                                    <span class="visually-hidden">Anterior</span>
                                </button>
                                <button class="btn-nav-carrosel-sintese-unidade next-btn controll-carrosel-slider-sintese-unidade" 
                                        type="button" 
                                        data-bs-target="#carouselUnidade-sinteseUnidade" 
                                        data-bs-slide="next">
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

    // PÁGINA 36 Referências
    /*
        FILTRO
            ------> pg[36]
            ------> CM[Referências]
        AQUI ÉA PÁGINA DE Referências
        
    */
    {
        "pagina": 36,
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
                                                <span class="d-block text-muted">CARELLE, Ana Cláudia. Tecnologia dos alimentos: principais etapas da cadeia produtiva. São Paulo: Érica, 2015.</span>
                                            </li>

                                            <li>
                                                <span class="d-block text-muted">GONÇALVES, ÉdiraCastello Branco de Andrade. Análise de alimentos: uma visão química da Nutrição. São Paulo: Varela, 2015.</span>
                                            </li>

                                            <li>
                                                <span class="d-block text-muted">MCWILLIAMS, Margaret. Alimentos:um guia completo para profissionais. São Paulo: Manole, 2016.</span>
                                            </li>

                                            <li>
                                                <span class="d-block text-muted">NESPOLO, CássiaRegina. Práticas em tecnologia de alimentos. PortoAlegre: Artmed, 2015.</span>                                   
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
            "handTap": {
                "ativo": false,
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
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
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