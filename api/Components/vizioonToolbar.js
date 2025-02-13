
async function Toolbar(classContainer, configuracoesToolbar, configuracoesSlider = {} , indexContainerAtual = 0) {

    // console.log(classContainer);
    // console.log(configuracoesToolbar);
    // console.log(configuracoesSlider);

    const {ativo , toolbarHtml , refTools} = configuracoesToolbar;

    // Verifica se a configuração da toolbar está ativa
    if (!!configuracoesToolbar) {
        // Pegar todos os elementos correspondentes a `classContainer`
        const containerElements = document.getElementsByClassName(classContainer);

        // console.log(containerElements);

        // Verifica se encontrou algum elemento
        if (containerElements.length > 0) {
            // Iterar sobre cada elemento correspondente e processar cada um
            Array.from(containerElements).forEach((containerPage, index) => {
                // Criar um marcador de referência para a página com IDs únicos
                const uniqueId = `${refTools}-${index}`;
                containerPage.classList.add(refTools);
                containerPage.id = uniqueId; // Atribuir um ID único

                // Atribuir o atributo "toolbar-index" com o índice da página
                containerPage.setAttribute("toolbar-index", index);

                // Remover qualquer classe anterior que use .div-render-toolbar se o Toolbar já
                // tiver sido renderizado no DOM ele remove para não duplicar
                const divRenderToolbar = document.querySelector(".div-render-toolbar");
                if (divRenderToolbar) {
                    divRenderToolbar.innerHTML = "";
                }
                // console.log(toolbarHtml)
                // Inserir o conteúdo da toolbar no novo div
                divRenderToolbar.innerHTML = toolbarHtml;
                // console.log(divRenderToolbar.innerHTML)

                // Passar as configurações para o toolbarRender
                if (typeof toolbarRender === "function") {
                    toolbarRender(containerPage, indexContainerAtual, refTools, ativo);
                }
            });
        } else {
            console.log("Nenhum container encontrado para a toolbar.");
        }
    } else {
        $(".div-render-toolbar").html(``);
        // Atualiza o controle do glider se estiver definido
        if (typeof glider !== 'undefined') {
            glider.refresh(true);
            glider.updateControls();
        } else {
            console.error("O objeto glider não está definido.");
        }
    }

}

// criar renderização da função do slider e verificar se existe o componente ouvinte referente a esse slider especifico
async function vizioonToolbar(slideIndex) {
    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;


    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na api pegar informações
    const pageData = api[slideIndex];


    if (pageData && pageData.paramentros && pageData.paramentros.toolbar && pageData.paramentros.toolbar.ativo && pageData.paramentros.toolbar.ativo === true) {
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // Pega o array links_ativar ou usa array vazio como fallback
                // console.log(container);

                const toolbar = pageData.paramentros.toolbar || {};
                // console.log(toolbar)
                Toolbar(container.className, toolbar, pageData , slideIndex );


            }
        });
    }
}

vizioonToolbar(savedPosition) 