
// Função global para destruir todas as instâncias de Tippy.js
function destroyVizioonTapTippy() {
    const elementsWithTippy = document.querySelectorAll('[data-tippy-instance]');

    elementsWithTippy.forEach(element => {
        if (element._tippy) {
            const instance = element._tippy;

            if (!instance.state.isDestroyed) {
                instance.hide();
                instance.destroy();
            }
        }
    });

    const tooltipRoots = document.querySelectorAll('[data-tippy-root]');
    tooltipRoots.forEach(root => root.remove());

    // console.log('Todas as instâncias de Tippy e raízes associadas foram removidas.');
}

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
            // console.error(`Elemento com a classe ${classContainer} não encontrado.`);
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

        // Adicionar evento de clique
        botaoAjuda.onclick = () => {
            this.adicionarIndicadoresClique(container);
        };
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

    adicionarIndicadoresClique(container) {
        const seletoresPermitidos = this.config.elementosPermitidosHandTap.join(',');
        const seletoresNaoPermitidos = this.config.elementosNaoPermitidosHandTap.join(',');

        // Selecionar elementos permitidos, excluindo os não permitidos
        const elementos = Array.from(container.querySelectorAll(seletoresPermitidos))
            .filter(elemento => !elemento.closest(seletoresNaoPermitidos));

        if (elementos.length === 0) {
            console.warn('Nenhum elemento permitido encontrado para adicionar indicadores.');
            return;
        }

        // Adicionar indicadores de clique
        elementos.forEach((elemento) => {
            this.criarIndicadorClique(elemento);
        });

        // Recriar ícones do Lucide (se necessário)
        if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }
    }

    criarIndicadorClique(elemento) {
        // Usar Tippy para criar o indicador
        const instance = tippy(elemento, {
            content: `<i data-lucide="pointer" class="animate__animated animate__heartBeat  cursor-pointer"></i> Clique aqui`,
            allowHTML: true,
            placement: 'top',
            animation: 'tada',
            arrow: true,
            trigger: 'manual',
            theme: 'material',
        });

        // Exibir o tooltip
        instance.show();

        // Ocultar após o tempo configurado
        setTimeout(() => {
            instance.hide();
        }, this.config.tempoDeFechamento);
    }

    ocultarBotaoAjuda() {
        $(".openHelpHand").addClass("d-none")
    }
}

async function TapElementos(classContainer, configuracoesTapElemento = [], configuracoesSlider = {}, indexContainerAtual = 0) {
    try {
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
    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;
    const config = await global__Config();
    const { ativo } = config.indicadorClick;

    // Destruir instâncias Tippy existentes
    destroyVizioonTapTippy();

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
        // console.log(pageData);
        if (pageData && pageData.paramentros && pageData.paramentros.handTap && pageData.paramentros.handTap.ativo === false) {
            containersSlider.forEach((container) => {
                if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                    // Pega o array links_ativar ou usa array vazio como fallback
                    // console.log(container);
                    // console.log(container.getAttribute(atributoSliderAtual))

                    // Mostrar/ocultar botão de ajuda
                    $(".openHelpHand").addClass("d-none")

                    // const tapElemento = pageData.paramentros.handTap || [];
                    // console.log(tapElemento)
                    // TapElementos(container.className, tapElemento, pageData, container.getAttribute(atributoSliderAtual));

                }
            });
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