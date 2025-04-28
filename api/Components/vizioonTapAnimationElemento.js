/**
 * Script que adiciona em cada elemento alvo:
 *  - Uma bolinha (indicator) contendo um ícone,
 *  - Um tooltip via Tippy.js,
 *  - (Opcional) Reaplica animações usando requestAnimationFrame.
 *
 * Formato esperado em pageData.paramentros.hand:
 * {
 *   "ativar": true,
 *   "config": {
 *     "position": // "right" | "left" | "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right", || [top-left] || [top-left , top-right ],
 *     "size": "small" | "large"
 *   },
 *   "contrutor": [
 *     {
 *       "selector": ".classeOuId",  // Escolher a class ou ID
 *       "index": [ // Alternativa a class ou id
 *
 *           {
 *               elemento:"p",
 *               posicao : [0,1] || 1 || [1...]
 *           }
 *
 *      ],
 *       "icon": "<i class='fa fa-hand-pointer'></i>",
 *       "animation": "clicking-infinite || passing-hover || animate__animated animate__fadeInRight || custom", || [passing-hover] || [passing-hover , clicking-infinite] ||  clicking-infinite
 *       "animationTippy":"scale", // fadeInRight || tada || shift-toward || shift-away || perspective || scale
 *       "posicaoTippy":"left",  //  top || top-start || top-end || right || right-start || right-end || bottom || bottom-start || bottom-end || left || left-start || left-end || auto || auto-start || [top-start]  || [top-start , top-end ]
 *       "delay": "2s" , // ["1s","2s","3s","4s","5s"] = > ranger de elementos || 1s || 00.5ms  ou só "1.5s", ou 2000 em ms
 *       "hideEvent":"hover", // hover || click
 *       "msg": {
 *          "animation": "passing-hover ",
 *            "texto": ["passe o mouse" , "click o mouse"] ||  ["passe o mouse"] || passe o mouse
 *       }
 *     }
 *   ]
 * }
 */

// Função global para destruir todas as instâncias de Tippy.js
// function destroyVizioonTapTippy() {
//     // Selecionar apenas os elementos marcados com 'data-vizioon-tippy'
//     const elementsWithTippy = document.querySelectorAll('[data-vizioon-tippy="true"]');

//     // Destruir as instâncias de Tippy.js associadas
//     elementsWithTippy.forEach(element => {
//         if (element._tippy) {
//             const instance = element._tippy;

//             if (!instance.state.isDestroyed) {
//                 instance.hide();
//                 instance.destroy();
//             }
//         }
//     });

//     // Remover os elementos raiz do tooltip associados às instâncias marcadas
//     const tooltipRoots = document.querySelectorAll('[data-tippy-root]');
//     tooltipRoots.forEach(root => {
//         // Verificar se o root está associado a uma instância marcada
//         const reference = root._tippy?.reference;
//         if (reference && reference.hasAttribute('data-vizioon-tippy')) {
//             root.remove();
//         }
//     });

//     // console.log('Instâncias de Tippy criadas pelo script e raízes associadas foram removidas.');
// }

// "delayTippySlider": ["5s"], // ["1s" , "2s" , "3s"] || 1ms || 1s

// "hand": {
//     "ativar": true,
//     "config": {
//         "position": ["top-right"], // "right" | "left" | "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right", || [top-left] || [top-left , top-right ]
//         "size": "small" // "small" | "large"
//     },
//     // "timeDestruirOrdy":5000,
//     "contrutor": [
//         {
//             "selector": ".tapTeste",
//             "icon": "<i data-lucide='mouse-pointer'></i>",
//             "animation": ["passing-hover" , "clicking-infinite"], // clicking-infinite || passing-hover || animate__animated animate__fadeInRight || custom" || [passing-hover] || [passing-hover , licking-infinite]
//             "animationTippy": "scale", // fadeInRight || tada || shift-toward || shift-away || perspective || scale
//             "posicaoTippy": ["top" , "bottom"], // top || top-start || top-end || right || right-start || right-end || bottom || bottom-start || bottom-end || left || left-start || left-end || auto || auto-start ||  top || top-start || top-end || right || right-start || right-end || bottom || bottom-start || bottom-end || left || left-start || left-end || auto || auto-start || [top-start]  || [top-start , top-end ] || [top-start]  || [top-start , top-end ]
//             "hideEvent": "hover", // hover || click
//             "delay": ["2s", "4s"], // ["1s","2s","3s","4s","5s"] = > ranger de elementos || 1s || 00.5ms  ou só "1.5s", ou 2000 em ms
//             "msg": {
//                 "ativo": true,
//                 "texto": ["passe o mouse" , "click o mouse"]
//             }
//         },

//     ]
// },

function destroyVizioonTapTippy() {

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


/**
 * Função para converter string de tempo (ex: '1.5s') para milissegundos
 */
function parseTimeToMs(timeStr) {
    if (typeof timeStr === 'number') return timeStr;

    if (typeof timeStr !== 'string') return 0;

    // Remover espaços
    timeStr = timeStr.trim();

    // Se já é número em ms
    if (/^\d+$/.test(timeStr)) {
        return parseInt(timeStr, 10);
    }

    // Se tem 's' (segundos) - ex: '1.5s' ou '1s'
    if (/^\d+(\.\d+)?s$/.test(timeStr)) {
        const seconds = parseFloat(timeStr.replace('s', ''));
        return seconds * 1000;
    }

    // Se tem 'ms' (milissegundos) - ex: '500ms'
    if (/^\d+(\.\d+)?ms$/.test(timeStr)) {
        return parseFloat(timeStr.replace('ms', ''));
    }

    // Formato não reconhecido
    console.warn(`Formato de tempo não reconhecido: ${timeStr}`);
    return 0;
}

/**
 * Função auxiliar para obter valor baseado no índice de um array
 * Se o valor não for array, retorna o próprio valor
 * Se for array, retorna o valor correspondente ao índice ou o último valor se o índice ultrapassar
 */
function getValueByIndex(value, index) {
    if (!Array.isArray(value)) {
        return value;
    }

    if (value.length === 0) {
        return undefined;
    }

    if (index < value.length) {
        return value[index];
    }

    return value[value.length - 1]; // Retorna o último item se o índice ultrapassar
}

/**
 * Cria o indicador (bolinha) com tooltip
 */
async function criarHandTapIndicator(elemento, item, config, delayForThisEl, index = 0) {
    const configGlobal = await (typeof global__Config === 'function' ? global__Config() : {});

    // Verificar se o elemento ainda existe no DOM
    if (!elemento || !document.body.contains(elemento)) {
        console.warn('Elemento não encontrado ou não está mais no DOM');
        return;
    }

    // Remove indicador antigo se existir
    const oldIndicator = elemento.querySelector('.handTap-indicator');
    if (oldIndicator) {
        oldIndicator.remove();
    }

    // Cria novo indicador
    const indicator = document.createElement('div');
    indicator.className = 'handTap-indicator';

    // Suporte a arrays para animações
    if (item.animation) {
        indicator.className = indicator.className.replace(/\banimate__\S+/g, '').trim();

        // Usar a função helper para obter o valor baseado no índice
        const animation = getValueByIndex(item.animation, index);

        const animClasses = animation.split(/\s+/).filter(Boolean);
        requestAnimationFrame(() => {
            animClasses.forEach(cls => indicator.classList.add(cls));
        });
    }

    // Ícone
    indicator.innerHTML = item.icon || '<i class="fa fa-hand-pointer"></i>';
    elemento.appendChild(indicator);

    // Tooltip
    let textoTooltip = '';
    let msgAtivo = false;
    if (item.msg) {
        if (typeof item.msg === 'object') {
            // Suporte a array para textos usando a função helper
            if (Array.isArray(item.msg.texto)) {
                textoTooltip = getValueByIndex(item.msg.texto, index);
            } else {
                textoTooltip = item.msg.texto || '';
            }
            msgAtivo = !!item.msg.ativo;
        } else if (typeof item.texto === 'string') {
            textoTooltip = item.texto;
        }
    }

    // Se não tem texto no tooltip, não cria Tippy
    if (!textoTooltip) return;

    // Verificar se o elemento ainda está no DOM antes de criar o Tippy
    if (!document.body.contains(elemento)) {
        console.warn('Elemento removido do DOM antes de criar Tippy');
        return;
    }

    // Suporte a arrays para posição do Tippy usando a função helper
    const posicaoTippy = getValueByIndex(item.posicaoTippy || 'left', index);

    // Suporte a arrays para animação do Tippy usando a função helper
    const animationTippy = getValueByIndex(item.animationTippy || 'fade', index);

    const tippyInstance = tippy(indicator, {
        content: textoTooltip,
        allowHTML: true,
        placement: posicaoTippy,
        theme: 'material',
        trigger: 'manual',
        interactive: true,
        arrow: true,
        zIndex: 2,
        animation: animationTippy,

        // Adicionar manipulador de erro (onHidden)
        onHidden(instance) {
            // Limpar recursos quando o tooltip é escondido
        }
    });

    indicator.setAttribute('data-vizioon-tippy-id', tippyInstance.id);
    indicator.setAttribute('data-vizioon-tippy-ref', tippyInstance.popper.id);

    // Referência para controlar se o tippy foi destruído
    let isDestroyed = false;

    // Se msgAtivo => exibir após delay
    if (msgAtivo) {
        const timeoutId = setTimeout(() => {
            // Verificar novamente se o elemento ainda está no DOM e se o Tippy não foi destruído
            if (document.body.contains(elemento) && document.body.contains(indicator) && !isDestroyed) {
                try {
                    if (msgAtivo) {
                        tippyInstance.show();
                    }
                } catch (e) {
                    console.warn('Erro ao mostrar tippy:', e);
                }

                // Destrói Tippy depois de X tempo
                // Suporte a array para timeDestruirOrdy
                let tempoFechamento = getValueByIndex(item.timeDestruirOrdy, index) ||
                    (configGlobal?.indicadorClick?.tempoDeFechamento) ||
                    3000;

                setTimeout(() => {
                    if (!isDestroyed) {
                        try {
                            tippyInstance.destroy();
                            isDestroyed = true;
                        } catch (e) {
                            console.warn('Erro ao destruir tippy:', e);
                        }
                    }
                }, tempoFechamento);
            }
        }, delayForThisEl);

        // Guardar o ID do timeout para possível cancelamento
        elemento.setAttribute('data-tippy-timeout', timeoutId);
    }

    // Função segura para acessar o tippy
    const safeTippy = {
        hide: () => {
            if (!isDestroyed && document.body.contains(elemento)) {
                try {
                    tippyInstance.hide();
                } catch (e) {
                    console.warn('Erro ao esconder tippy:', e);
                }
            }
        },
        show: () => {
            if (!isDestroyed && document.body.contains(elemento)) {
                try {
                    if (msgAtivo) {
                        tippyInstance.show();
                    }
                } catch (e) {
                    console.warn('Erro ao mostrar tippy:', e);
                }
            }
        },
        destroy: () => {
            if (!isDestroyed) {
                try {
                    if (msgAtivo) {
                        tippyInstance.destroy();
                        isDestroyed = true;
                    }
                } catch (e) {
                    console.warn('Erro ao destruir tippy:', e);
                }
            }
        }
    };

    // Suporte a array para hideEvent
    const hideEvent = getValueByIndex(item.hideEvent, index) || 'hover';

    // hideEvent => hover ou click
    if (hideEvent === 'hover') {
        $(elemento).hover(
            () => { // mouseenter
                if (msgAtivo) {
                    safeTippy.hide();
                }
                $(indicator).fadeOut(300);
            },
            () => { // mouseleave
                if (document.body.contains(indicator)) {
                    if (msgAtivo) {
                        safeTippy.show();
                    }
                    $(indicator).fadeIn(300);
                }
            }
        );
    }
    else if (hideEvent === 'click') {
        $(elemento).on('click', () => {
            safeTippy.hide();
            $(indicator).fadeOut(300);
        });

        $(elemento).on('mouseleave', () => {
            if (document.body.contains(indicator)) {
                safeTippy.show();
                $(indicator).fadeIn(300);
            }
        });
    }

    // Função de limpeza que pode ser chamada quando o componente for desmontado
    const cleanup = () => {
        const timeoutId = elemento.getAttribute('data-tippy-timeout');
        if (timeoutId) {
            clearTimeout(parseInt(timeoutId));
        }
        safeTippy.destroy();
        $(elemento).off('mouseenter mouseleave click');
    };

    // Opcionalmente, armazenar a função de limpeza para chamada posterior
    elemento.setAttribute('data-tippy-cleanup', 'true');
    elemento._tippyCleanup = cleanup;

    // Recriar ícones se usar Lucide
    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }

    return { cleanup };
}

/**
* Função que processa todos os itens do contrutor e cria a bolinha.
*/
async function vizioonTapElementsClickOrHover(
    classContainer,
    configuracoesTapElemento = {},
    configuracoesSlider = {},
    indexContainerAtual = 0
) {
    // Localiza container principal
    function encontrarContainer() {
        if (!classContainer) return null;
        const containers = document.getElementsByClassName(classContainer);
        return containers.length ? containers[0] : null;
    }

    const container = encontrarContainer();
    if (!container) return;

    // Posição e tamanho (bolinha)
    const configObj = configuracoesTapElemento.config || {
        position: "right",
        size: "small"
    };

    // Lista de itens
    const elementos = configuracoesTapElemento.contrutor || [];

    elementos.forEach((item, idxItem) => {
        // 1) Convert item.delay
        let arrayDelays = [];
        if (item.delay) {
            if (Array.isArray(item.delay)) {
                arrayDelays = item.delay.map(str => parseTimeToMs(str));
            } else {
                arrayDelays = [parseTimeToMs(item.delay)];
            }
        }

        // 2) Selecionar nós
        const allEls = container.querySelectorAll('*');
        const alvoEls = [];

        if (item.selector) {
            container.querySelectorAll(item.selector).forEach(el => alvoEls.push(el));
        } else if (item.index !== undefined) {
            // Suporte a arrays para index
            if (Array.isArray(item.index)) {
                item.index.forEach(indexObj => {
                    if (typeof indexObj === 'object' && indexObj.elemento && indexObj.posicao) {
                        // Seletor baseado em tipo de elemento e posição
                        const elementosSelecionados = container.querySelectorAll(indexObj.elemento);
                        if (Array.isArray(indexObj.posicao)) {
                            indexObj.posicao.forEach(pos => {
                                if (pos < elementosSelecionados.length) {
                                    alvoEls.push(elementosSelecionados[pos]);
                                }
                            });
                        } else if (typeof indexObj.posicao === 'number' && indexObj.posicao < elementosSelecionados.length) {
                            alvoEls.push(elementosSelecionados[indexObj.posicao]);
                        }
                    } else if (typeof indexObj === 'number' && indexObj < allEls.length) {
                        alvoEls.push(allEls[indexObj]);
                    }
                });
            } else if (typeof item.index === 'number' && item.index < allEls.length) {
                alvoEls.push(allEls[item.index]);
            }
        } else if (allEls.length > idxItem) {
            alvoEls.push(allEls[idxItem]);
        }

        // 3) Para cada nó encontrado, define um *delay específico*
        alvoEls.forEach((el, idxEl) => {
            if (!el) return;

            // Aplica classes
            el.classList.add('handTap');

            // Suporte a arrays para posição usando a função helper
            const position = getValueByIndex(configObj.position || 'right', idxEl);

            // Suporte a arrays para tamanho
            const size = getValueByIndex(configObj.size || 'small', idxEl);

            el.classList.add(`handTap-${position}`);
            el.classList.add(`handTap-${size}`);

            // Se temos arrayDelays, cada elemento vai pegar arrayDelays[idxEl].
            // Se idxEl >= arrayDelays.length, usamos o último valor do array.
            let delayForThisEl = 0;
            if (arrayDelays.length > 0) {
                if (idxEl < arrayDelays.length) {
                    delayForThisEl = arrayDelays[idxEl];
                } else {
                    delayForThisEl = arrayDelays[arrayDelays.length - 1];
                }
            }

            criarHandTapIndicator(el, item, configObj, delayForThisEl, idxEl);
        });
    });
}

/**
 * 3) Função principal. Busca config "hand" em pageData e, se "ativar" = true,
 *    chama vizioonTapElementsClickOrHover para aquele slide.
 */
async function vizioonTapElements(slideIndex) {
    // Ajuste conforme suas variáveis globais
    const configContainer = configuracoesIntraGlobais?.configuracoesSliderAll || {};
    const sliderObject = configContainer.procurar_slider || {
        _sliderClass: '.slider-container',
        _attrActiver: 'data-slide-index'
    };

    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;

    // Seleciona todos os containers do slider
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    const configGlobal = await (typeof global__Config === 'function' ? global__Config() : {});

    // Pega data do slide
    const pageData = typeof api !== 'undefined' && api[slideIndex] ? api[slideIndex] : null;

    if (pageData?.paramentros?.hand?.ativar === true) {
        containersSlider.forEach(container => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                const handTapConfig = pageData.paramentros.hand || {};
                vizioonTapElementsClickOrHover(
                    container.className,
                    handTapConfig,
                    pageData,
                    container.getAttribute(atributoSliderAtual)
                );
            }
        });
    }
}

// Exemplo de como usar:
// destroyVizioonTapTippy();
// vizioonTapElements(savedPosition);