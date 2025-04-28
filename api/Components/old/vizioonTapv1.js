function destroyVizioonTapTippy() {
    // Abordagem 1: Limpar pelo ID do Tippy
    const elementsWithTippy = document.querySelectorAll('[data-vizioon-tippy-id]');

    // Destruir as instâncias de Tippy.js associadas
    elementsWithTippy.forEach(element => {
        if (element._tippy) {
            const instance = element._tippy;

            if (!instance.state.isDestroyed) {
                instance.hide();
                instance.destroy();
            }
        }

        // Remover os atributos customizados para limpeza
        element.removeAttribute('data-vizioon-tippy-id');
        element.removeAttribute('data-vizioon-tippy-ref');
    });

    // Abordagem 2: Procurar todos os tippy-root e remover
    const allTippyRoots = document.querySelectorAll('[data-tippy-root]');
    allTippyRoots.forEach(root => {
        root.remove();
    });

    // Abordagem 3: Limpar pelo ID específico do popper
    const popperIds = Array.from(elementsWithTippy).map(el => el.getAttribute('data-vizioon-tippy-ref'));
    popperIds.forEach(id => {
        if (id) {
            const popperElement = document.getElementById(id);
            if (popperElement) {
                popperElement.remove();
            }
        }
    });

    // Abordagem 4: Verificar elementos por _tippy diretamente
    document.querySelectorAll('*').forEach(el => {
        if (el._tippy && !el._tippy.state.isDestroyed) {
            el._tippy.destroy();
        }
    });

    // console.log('Instâncias de Tippy e poppers criados pelo script foram removidos.');
}

// Variável global para rastrear tooltips criados
window.vizioonActiveTooltips = window.vizioonActiveTooltips || [];

class IndicadorClique {
    constructor(configuracao = {}) {
        this.config = {
            ativo: true,
            elementosPermitidosHandTap: [
                'button',
                '.cursor-pointer',
                '.btn',
                '.bt-1'
            ],
            elementosNaoPermitidosHandTap: [
                '.componente-link-vizioon-page-dro-icon-menu-item'
            ],
            tempoDeFechamento: 3000
        };

        // Mesclar configurações padrão com as configurações passadas
        this.config = { ...this.config, ...configuracao };

        // Limpar tooltips anteriores ao criar nova instância
        destroyVizioonTapTippy();
        window.vizioonActiveTooltips = [];
    }

    async inicializar(classContainer) {
        // Verificar se o indicador está ativo
        if (!this.config.ativo) {
            this.ocultarBotaoAjuda();
            return;
        }

        // Obter o container
        const container = document.getElementsByClassName(classContainer)[0];
        if (!container) {
            console.info(`Elemento com a classe ${classContainer} não encontrado.`);
            return;
        }

        // Configurar botão de ajuda
        this.configurarBotaoAjuda(container);
    }

    configurarBotaoAjuda(container) {
        const botaoAjuda = document.querySelector(".openHelpHand");
        if (!botaoAjuda) {
            console.warn('Botão ".openHelpHand" não encontrado.');
            return;
        }

        // Mostrar/ocultar botão baseado na presença de elementos
        this.verificarElementosPresentes(container);

        // Certificar-se de que apenas um event listener está ativo
        botaoAjuda.removeEventListener('click', this.handleBotaoAjudaClick);

        // Definir função de click
        this.handleBotaoAjudaClick = () => {
            destroyVizioonTapTippy();
            window.vizioonActiveTooltips = [];
            // Enviar Evento de click
            this.adicionarIndicadoresClique(container, {
                __btnClick: true
            });
        };

        const { abrirAutomaticamente } = this.config.abrirPage;

        // Verificar se é para abrir automaticamente
        if (abrirAutomaticamente) {
            destroyVizioonTapTippy();
            window.vizioonActiveTooltips = [];
            this.adicionarIndicadoresClique(container, {});

        }

        // Adicionar evento de clique
        botaoAjuda.addEventListener('click',this.handleBotaoAjudaClick);
    }

    verificarElementosPresentes(container) {
        const seletoresPermitidos = this.config.elementosPermitidosHandTap.join(',');
        const elementosPermitidos = container.querySelectorAll(seletoresPermitidos);

        // Mostrar/ocultar botão de ajuda
        const botaoAjuda = document.querySelector(".openHelpHand");
        if (elementosPermitidos.length === 0) {
            $(".openHelpHand").addClass("d-none")
        } else {
            $(".openHelpHand").removeClass("d-none");
        }
    }

    adicionarIndicadoresClique(container , eventsDispatch = {}) {
        // Limpar todas as instâncias do Tippy antes de adicionar novas
        destroyVizioonTapTippy();
        window.vizioonActiveTooltips = [];

        const seletoresPermitidos = this.config.elementosPermitidosHandTap.join(',');
        const seletoresNaoPermitidos = this.config.elementosNaoPermitidosHandTap.join(',');

        // Selecionar elementos permitidos, excluindo os não permitidos
        const elementos = Array.from(container.querySelectorAll(seletoresPermitidos))
            .filter(elemento => !elemento.closest(seletoresNaoPermitidos));

        if (elementos.length === 0) {
            console.warn('Nenhum elemento permitido encontrado para adicionar indicadores.');
            return;
        }

        // Adicionar indicadores de clique COM ÍNDICE
        elementos.forEach((elemento, index) => {
            this.criarIndicadorClique(elemento, index , eventsDispatch);
        });

        // Recriar ícones do Lucide (se necessário)
        if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }
    }

    criarIndicadorClique(elemento, index , eventsDispatch = {}) {
        // Verificação de segurança para garantir que não há tooltips ativos neste elemento
        if (elemento._tippy) {
            elemento._tippy.destroy();
        }

        // console.log(eventsDispatch)
        // Remover quaisquer atributos anteriores
        elemento.removeAttribute('data-vizioon-tippy-id');
        elemento.removeAttribute('data-vizioon-tippy-ref');

        fecharMenuDicionario();
        fecharMenuAnotacoes();
        fecharMenuSumario();
        fecharMenuMarcacao();
        fecharResumo();


        const btnClick = eventsDispatch?.__btnClick
        // console.log(btnClick)

        const configuracaoTippy = this.config.abrirPage;
        const delay = parseTimeToMs(this.config.delay || "0s");

        // Calcular o delay baseado no índice do elemento
        const elementDelay = delay;

        // Função para criar o Tippy com delay
        const createTippyWithDelay = () => {
            // Verificar novamente se o elemento já possui instância de Tippy
            if (elemento._tippy) {
                elemento._tippy.destroy();
            }

            if (!!configuracaoTippy.msg) {
                // Criar uma única instância de Tippy
                const instance = tippy(elemento, {
                    content: configuracaoTippy?.msg?.texto || "<i data-lucide='pointer' class='animate__animated animate__heartBeat cursor-pointer'></i> Clique aqui",
                    allowHTML: true,
                    placement: configuracaoTippy?.msg?.positionTippy || "top",
                    animation: configuracaoTippy?.msg?.animationTippy || "scale",
                    arrow: true,
                    trigger: 'manual',
                    theme: configuracaoTippy?.msg?.theme || "material",
                    followCursor: configuracaoTippy?.msg?.followCursor || false,
                    interactive: true,
                    zIndex: 2,
                    onShow(instance) {
                        // Registro para depuração
                        // console.log(`Tippy ID ${instance.id} mostrado para elemento`, elemento);
                    },
                    popperOptions: {
                        strategy: 'absolute',
                        modifiers: [
                            { "name": "flip", "enabled": false },
                            { "name": "preventOverflow", "enabled": false },
                            { "name": "hide", "enabled": false },
                        ]
                    }
                });

                // Marcar o elemento com um atributo customizado
                elemento.setAttribute('data-vizioon-tippy-id', instance.id);
                elemento.setAttribute('data-vizioon-tippy-ref', instance.popper.id);

                // Adicionar à lista de tooltips ativos
                window.vizioonActiveTooltips.push(instance);

                // Exibir o tooltip
                instance.show();

                // Ocultar após o tempo configurado
                setTimeout(() => {
                    if (!instance.state.isDestroyed) {
                        instance.destroy();
                    }
                    elemento.removeAttribute('data-vizioon-tippy-id');
                    elemento.removeAttribute('data-vizioon-tippy-ref');

                    // Remover da lista de tooltips ativos
                    window.vizioonActiveTooltips = window.vizioonActiveTooltips.filter(t => t !== instance);
                }, this.config.tempoDeFechamento);
            }

            if (window.lucide && typeof lucide.createIcons === 'function') {
                lucide.createIcons();
            }
        };

        // Aplicar o delay
        // verificar se o botão foi click para ativar o event de abrir mais rápido
        setTimeout(createTippyWithDelay, btnClick ? 0 : elementDelay);
        
    }
    

    ocultarBotaoAjuda() {
        $(".openHelpHand").addClass("d-none")
    }
}

async function TapElementos(classContainer, configuracoesTapElemento = [], configuracoesSlider = {}, indexContainerAtual = 0) {
    try {
        // Garantir que todos os tooltips anteriores sejam removidos
        destroyVizioonTapTippy();
        window.vizioonActiveTooltips = [];

        // Obter configuração global (se necessário)
        const config = await global__Config();

        // Criar instância do indicador de clique
        const indicadorClique = new IndicadorClique(config.indicadorClick);

        // Inicializar no container especificado
        await indicadorClique.inicializar(classContainer);

    } catch (erro) {
        console.error('Erro ao configurar indicador de clique:', erro);
    }
}

async function vizioonTap(slideIndex) {
    // Destruir todas as instâncias existentes de Tippy ao iniciar
    destroyVizioonTapTippy();
    window.vizioonActiveTooltips = [];

    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;
    const config = await global__Config();
    const { ativo } = config.indicadorClick;

    // Se não estiver ativo, esconde o botão e retorna
    if (!ativo) {
        $(".openHelpHand").addClass("d-none");
        return;
    }

    const pageData = api[slideIndex];
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Se handTap está explicitamente desativado na página
    if (pageData?.paramentros?.handTap?.ativo === false) {
        $(".openHelpHand").addClass("d-none");
        return;
    }

    // Por padrão, esconde o botão
    $(".openHelpHand").addClass("d-none");

    containersSlider.forEach((container) => {
        if (pageData && pageData.paramentros && pageData.paramentros.handTap && pageData.paramentros.handTap.ativo === false) {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // Mostrar/ocultar botão de ajuda
                $(".openHelpHand").addClass("d-none");
            }
        }
        else if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
            // Verificar elementos clicáveis
            const elementosPermitidos = config.indicadorClick.elementosPermitidosHandTap.join(',');
            const elementosNaoPermitidos = config.indicadorClick.elementosNaoPermitidosHandTap.join(',');

            // Selecionar elementos permitidos e filtrar os não permitidos
            const elementos = Array.from(container.querySelectorAll(elementosPermitidos))
                .filter(elemento => !elemento.closest(elementosNaoPermitidos));

            // Só mostra o botão e inicia o TapElementos se houver elementos clicáveis
            if (elementos.length > 0) {
                $(".openHelpHand").removeClass("d-none");
                const tapElemento = pageData.paramentros?.handTap || [];
                TapElementos(container.className, tapElemento, pageData, container.getAttribute(atributoSliderAtual));
            }
        }
    });
}

vizioonTap(savedPosition);