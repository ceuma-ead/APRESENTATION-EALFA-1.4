function AnimarTextos(classContainer, configuracoesAnimaTexto, configuracoesSlider = {}, indexContainerAtual = 0) {
    const textoContainer = document.getElementsByClassName(classContainer)[0];
    
    if (!textoContainer) {
        console.error(`Elemento com a classe ${classContainer} não encontrado.`);
        return;
    }

    if (textoContainer) {
        configuracoesAnimaTexto.forEach((animation) => {
            const animationClass = "animate__animated animate__fadeInDown animate__slow_text";

            const animacoesPadroes = {
                animacoes_ativar: false,
                animacao: animationClass
            };

            const {
                animacoes_ativar = animacoesPadroes.animacoes_ativar,
                animacao = animacoesPadroes.animacao
            } = animation;

            const procurarTexto = textoContainer.querySelectorAll("p");
            
            procurarTexto.forEach((p, i) => {
                const deveAnimar = 
                    (Array.isArray(animacoes_ativar) && animacoes_ativar.includes(i)) ||
                    (animacoes_ativar === true) ||
                    (animacoes_ativar === false && i === 0 || animacoes_ativar === undefined);

                if (deveAnimar) {
                    // Remover animações existentes
                    p.className = p.className.replace(/\banimate__\S+/g, '').trim();

                    // Definir delay personalizado
                    p.style.setProperty('--animate-delay', i);

                    // Garantir que a animação seja reaplicada
                    requestAnimationFrame(() => {
                        animacao.split(" ").forEach(cls => {
                            if (cls.trim()) {
                                p.classList.add(cls.trim());
                            }
                        });
                    });
                }
            });
        });
    } else {
        console.error("Container não Existe");
    }
}
// criar renderização da função do slider e verificar se existe o componente AnimatedText referente a esse slider especifico
async function vizioonAnimationText(slideIndex) {
    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;


    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na api pegar informações
    const pageData = api[slideIndex];


    if (pageData && pageData.paramentros && pageData.paramentros.animacao_texto && pageData.paramentros.animacao_texto.ativo && pageData.paramentros.animacao_texto.ativo === true) {
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // Pega o array links_ativar ou usa array vazio como fallback
                // console.log(container);
                // console.log(container.getAttribute(atributoSliderAtual))

                const animaTexto = pageData.paramentros.animacao_texto.animacoes || [];
                // console.log(animaTexto)
                AnimarTextos(container.className, animaTexto, pageData, container.getAttribute(atributoSliderAtual));


            }
        });
    } else {
        if (typeof glider !== 'undefined') {
            glider.refresh(true);
            glider.updateControls();
        } else {
            console.error('O objeto glider não está definido.');

        }
    }
}

vizioonAnimationText(savedPosition)