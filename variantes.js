const variantes_globais = {

    Ferramentas: function (config = null) {
        
        // Templates dos botões com seus respectivos ícones
        const templates = {
            Podcast: (name) => `<button class="btn-podcast" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast"><i data-lucide="audio-lines"></i>${name || ""}</button>`,
            Videoaula: (name) => `<button class="btn-videoaula" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula"><i data-lucide="video"></i>${name || ""}</button>`,
            Ferramentas: (name) => `<button class="btn-ferramentas" aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas"><i data-lucide="pencil-ruler"></i>${name || ""}</button>`,
            FullScreen: (name) => `<button class="btn-fullscreen" aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen"><i data-lucide="maximize-2"></i>${name || ""}</button>`,
            Resumo: (name) => `<button class="abrir-resumo"><i data-lucide="file-text"></i>${name || ""}</button>`,
            Destacar: (name) => `<button class="abrir-destacar"><i data-lucide="pencil"></i>${name || ""}</button>`,
            Notas: (name) => `<button class="abrir-annotation"><i data-lucide="sticky-note"></i>${name || ""}</button>`,
            Ouvinte: (name) => `<button class="btn-ouvinte"><i data-lucide="ear"></i>${name || ""}</button>`,
            Download: (name) => `<button class="baixar-pdf"><i data-lucide="download"></i>${name || ""}</button>`,
            Dicionario: (name) => `<button class="abrir-dicionario"><i data-lucide="search"></i>${name || ""}</button>`,
            close: (name) => `<button id="close_box"><i data-lucide="x"></i>${name || ""}</button>`,
        };

        // Configurações padrão
        const defaultConfig = [
            {
                container: "icons-action--container",
                Podcast: true,
                Videoaula: true,
                Ferramentas: true,
                FullScreen: true,
            },
            {
                container: "icons-action--container-mobile",
                Podcast: true,
                Videoaula: true,
                FullScreen: true,
                Ferramentas: true,
            },
            {
                container: "box-tools-inline",
                Resumo: {
                    ativo: true,
                    nome: "Resumo",
                },
                Destacar: {
                    ativo: true,
                    nome: "Destacar",
                },
                Notas: {
                    ativo: true,
                    nome: "Notas",
                },
                Ouvinte: {
                    ativo: true,
                    nome: "Ouvinte",
                },
                Download: {
                    ativo: true,
                    nome: "Download",
                },
                Dicionario: {
                    ativo: true,
                    nome: "Dicionário",
                },
                close: {
                    ativo: true,
                },
            },
        ];

        // Lógica para determinar a configuração final
        const finalConfig = !config ? defaultConfig :
            Array.isArray(config) ? config :
                [config];

        // Processa cada grupo de configurações
        return finalConfig.map((group) => {
            const { container, ...tools } = group;

            // Processa cada ferramenta do grupo
            const detailedTools = Object.keys(tools).reduce((acc, toolKey) => {
                const toolConfig = tools[toolKey];

                // Verifica o tipo de configuração para cada ferramenta
                if (typeof toolConfig === "object" && toolConfig.ativo !== undefined) {
                    acc[toolKey] = {
                        ativa: toolConfig.ativo,
                        html: templates[toolKey](toolConfig.nome),
                    };
                } else if (toolConfig === true) {
                    acc[toolKey] = {
                        ativa: true,
                        html: templates[toolKey](),
                    };
                } else {
                    acc[toolKey] = {
                        ativa: false,
                        html: ""
                    };
                }

                return acc;
            }, {});
            lucide.createIcons();
            // Retorna o objeto processado com container e ferramentas
            return {
                container: container || "icons-action--container",
                ...detailedTools,
            };
        });
    },

    Toolbar: function () {
        // console.log("Toolbar");

        return `
    
                <div id="toolbar" style="display: none; position: absolute;">
                    <div class="toolbar-container">
                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                            <div class="cores-destaque">
                                <div class="div-cores-buttons-destaque-cores-palheta">
                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754" data-color="white"></span>
                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd" data-color="white"></span>
                                </div>
                                <div class="div-cores-buttons-destaque">
                                    <button class="toolbar-button" id="limpar">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-eraser">
                                            <path
                                                d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
                                            <path d="M22 21H7" />
                                            <path d="m5 11 9 9" /></svg>
                                        Limpar
                                    </button>
                                </div>

                            </div>
                        </div>
                        <button class="toolbar-button" id="resumo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-file-text">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" /></svg>
                            Resumo
                        </button>
                        <button class="toolbar-button" id="destacar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-pencil">
                                <path
                                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                <path d="m15 5 4 4" /></svg>
                            Destacar
                        </button>
                        <button class="toolbar-button" id="dicionario-toolbar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-text-search">
                                <path d="M21 6H3" />
                                <path d="M10 12H3" />
                                <path d="M10 18H3" />
                                <circle cx="17" cy="15" r="3" />
                                <path d="m21 19-1.9-1.9" /></svg>
                            Dicionário
                        </button>

                    </div>
                </div>
        
        `
    },

    LogoMarca: function (config = {}) {
        const defaultConfig = {
            ativar: true,
            logo_img: 'url(../assets/logopreta1.png)',
            logo_posicao_y: 'bottom 1.8%',
            logo_posicao_x: 'left 0.5%',
            logo_tamanho_y: '100%',
            logo_tamanho_x: '100%',
            div_y_logo: '3rem',
            div_x_logo: '3rem'
        };

        // Verifica se config é um objeto simples com ativar ou possui logo
        const finalConfig = config.logo ? config.logo : config;

        return {
            ativar: finalConfig.ativar ?? defaultConfig.ativar,
            logo_img: finalConfig.logo_img ?? defaultConfig.logo_img,
            logo_posicao_y: finalConfig.logo_posicao_y ?? defaultConfig.logo_posicao_y,
            logo_posicao_x: finalConfig.logo_posicao_x ?? defaultConfig.logo_posicao_x,
            logo_tamanho_y: finalConfig.logo_tamanho_y ?? defaultConfig.logo_tamanho_y,
            logo_tamanho_x: finalConfig.logo_tamanho_x ?? defaultConfig.logo_tamanho_x,
            div_y_logo: finalConfig.div_y_logo ?? defaultConfig.div_y_logo,
            div_x_logo: finalConfig.div_x_logo ?? defaultConfig.div_x_logo
        };
    },


    async VerificarFerramentasAtivas() {
        try {
          const configuracao = await global__Config();
          if (!configuracao || !configuracao.modulosAtivos) {
            console.error("Configuração ou módulos ativos não encontrados.");
            return;
          }
      
          const { modulosAtivos } = configuracao;
      
          // Função para ativar/desativar módulos dinamicamente
          const processarModulo = ({ ativo, dynamicClass, action }) => {
            if (ativo) return; // Se o módulo está ativo, não precisa modificar nada
      
            dynamicClass.forEach((_class) => {
              const elementos = document.querySelectorAll(_class);
      
              elementos.forEach((el) => {
                el.classList.add(`d-${action}`);
                el.removeAttribute("style");
                el.setAttribute("style", `display:${action}`);
              });
            });
          };
      
          // Itera sobre os módulos configurados
          Object.keys(modulosAtivos).forEach((modulo) => {
            processarModulo(modulosAtivos[modulo]);
          });
          
          return modulosAtivos; // Retorna os módulos ativos

        } catch (error) {
          console.error("Erro ao verificar ferramentas ativas:", error);
        }
      }
      ,


    Debug: function () {
        console.info(`
        ================ Toolbar ===============

        ${this.Toolbar()}

        ========================================
        `)

        console.info(`
        ================ Ferramentas ===============
    
        ${this.Ferramentas()}
    
        ========================================
        `)

        console.info(`
        ================ Logomarca ===============
        
        ${this.LogoMarca()}
        
        ========================================
        `)

        console.info(`
        ================ Logomarca ===============
            
        ${this.VerificarFerramentasAtivas()}
            
        ========================================
        `)
    },

};

