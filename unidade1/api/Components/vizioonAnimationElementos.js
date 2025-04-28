// Função para Criar animação nos Elementos
async function AnimarElementos(classContainer, configuracoesAnimaElemento, configuracoesSlider = {}, indexContainerAtual = 0) {

    // Pegar o container pela classe
    const textoContainer = document.getElementsByClassName(classContainer)[0]; // Obtém o primeiro elemento
    // console.log(textoContainer)
    if (!textoContainer) {
        console.error(`Elemento com a classe ${classContainer} não encontrado.`);
        return;
    }



    // verificar se existe algum container
    if (textoContainer) {

        // console.log(configuracoesAnimaElemento)
        configuracoesAnimaElemento.forEach((animation, index) => {
            // console.log(animation)

            //Animação Padrão
            const animationClass = "animate__animated animate__fadeInDown animate__slow";

            const animacoesPadroes = {
                construir_animacao: ".animation",
                animation: 'animate__animated animate__fadeInDown animate__slow'
            };

            const {
                construir_animacao = animacoesPadroes?.construir_animacao || ".animation",
                animacao = animacoesPadroes?.animation || 'animate__animated animate__jello animate__slow'
            } = animation;

            // console.log(animation)
            // console.log(contruir_animacao)
            // console.log(animacao)

            const elementos = textoContainer.querySelectorAll(construir_animacao);
            // console.log(textoContainer);
            // console.log(elementos);
            const textoContainerGlobal = textoContainer
            // console.log(textoContainerGlobal)


            // Remove animações existentes
            textoContainerGlobal.className = textoContainerGlobal.className.replace(/\banimate__\S+/g, '').trim();

            // Aguarda o próximo ciclo de renderização para adicionar a animação
            requestAnimationFrame(() => {
                animationClass.split(" ").forEach(cls => {
                    if (cls.trim()) {
                        textoContainerGlobal.classList.add(cls.trim());
                    }
                });
            });

            if (elementos.length > 0) {
                elementos.forEach((el) => {
                    // console.log(el)
                    // Remove as classes de animação existentes
                    el.className = el.className.replace(/\banimate__\S+/g, '').trim();

                    // Aguarda o próximo ciclo de renderização para adicionar a animação
                    requestAnimationFrame(() => {
                        animacao.split(" ").forEach(cls => {
                            if (cls.trim()) {
                                el.classList.add(cls.trim());
                            }
                        });
                    });
                });
            } else {
                // console.warn(`Nenhum elemento encontrado para a animação: ${elementos}`);
            }

        })

    } else {
        console.error("Container não Existe");
    }


}


// criar renderização da função do slider e verificar se existe o componente AnimatedText referente a esse slider especifico
async function vizioonAnimationElementos(slideIndex) {
    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;


    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na api pegar informações
    const pageData = api[slideIndex];


    if (pageData && pageData.paramentros && pageData.paramentros.animacao_elemento && pageData.paramentros.animacao_elemento.ativo && pageData.paramentros.animacao_elemento.ativo === true) {
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // Pega o array links_ativar ou usa array vazio como fallback
                // console.log(container);
                // console.log(container.getAttribute(atributoSliderAtual))

                const animaElemento = pageData.paramentros.animacao_elemento.animacoes || [];
                // console.log(animaElemento)
                AnimarElementos(container.className, animaElemento, pageData, container.getAttribute(atributoSliderAtual));


            }
        });
    }
}

vizioonAnimationElementos(savedPosition)