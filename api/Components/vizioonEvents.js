async function EventosDisparadosGlider(classContainer , configuracoesPage , indexPage) {
    // console.log(configuracoesPage)


    // Verificação se a página é 0 ou 1 na 0 no glider e 1 na api
    if(indexPage === 0){
        // console.log("OK!!!")
        $(".container-footer").addClass("d-none");

    }else{
        // console.log("Não é")
        $(".container-footer").removeClass("d-none");

    }

}


function vizioonEvents(slideIndex) {

    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;

    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na api pegar informações
    const pageData = api[slideIndex];


    if (pageData) {
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // Pega o array links_ativar ou usa array vazio como fallback
                // console.log(container);

                EventosDisparadosGlider(container.className , pageData , slideIndex)

            }
        });
    }

};

vizioonEvents(savedPosition);