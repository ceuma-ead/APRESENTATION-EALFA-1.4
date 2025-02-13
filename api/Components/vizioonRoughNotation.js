
async function roughNotationModules(slideIndex) {
    const config = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = config.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;

    // Carrega o mapa com as configurações
    const __map__ = await global__Config("./_map_.json");

    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Map para rastrear anotações já aplicadas
    const elementosAnotados = new Map();

    const pageData = api[slideIndex];

    if (pageData) {
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {

                function removerSVGsAssociados(elemento, configType) {
                    const svgs = elemento.parentNode.querySelectorAll('svg.rough-annotation');
                    svgs.forEach((svg) => {
                        if (svg.dataset.annotationType === configType) svg.remove();
                    });
                }

                function aplicarAnotacao(elemento, configuracao, deixarAtivo) {
                    const annotationKey = `${elemento}-${configuracao.type}`;

                    // Remove SVGs apenas se deixarAtivo for false
                    if (!deixarAtivo) {
                        removerSVGsAssociados(elemento, configuracao.type);
                        elementosAnotados.delete(annotationKey);
                    }

                    if (!elementosAnotados.has(annotationKey)) {
                        const delay = configuracao.delay || 0;

                        setTimeout(() => {
                            requestAnimationFrame(() => {
                                // Agora garantimos que RoughNotation está definido
                                const annotation = window.RoughNotation.annotate(elemento, configuracao);
                                annotation.show();

                                // Associa o tipo ao SVG
                                const svg = elemento.parentNode.querySelector('svg.rough-annotation');
                                if (svg) {
                                    svg.dataset.annotationType = configuracao.type;
                                }

                                elementosAnotados.set(annotationKey, annotation);
                            });
                        }, delay);
                    }
                }

                const roughAnotationMap = __map__._roughAnotation || [];
                roughAnotationMap.forEach(({ element, config, deixarAtivo }) => {
                    const elementos = container.querySelectorAll(element);
                    elementos.forEach((elemento) => aplicarAnotacao(elemento, config, deixarAtivo));
                });

            }
        });
    }
}


roughNotationModules(savedPosition);

