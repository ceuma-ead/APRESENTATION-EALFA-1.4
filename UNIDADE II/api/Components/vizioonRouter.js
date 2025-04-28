

async function voltarParaPaginaAnterior(oldIndex) {
    _toastRouter_.fechar();
    glider.scrollItem(oldIndex - 1);
}

async function navegarParaRota(classContainer, rotaNew, rotaOld, configuracaoSlider = {}) {
    const containerElements = document.getElementsByClassName(classContainer);

    if (containerElements.length > 0) {
        Array.from(containerElements).forEach((containerPage) => {
            glider.scrollItem(rotaNew);

            _toastRouter_.fechar();

            _toastRouter_.adicionarConteudo(`
                <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 9999;">
                    <div id="navigationToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header gap-2">
                            <i class="bi bi-arrow-right-circle"></i>
                            <strong><span class="badge bg-primary rounded-pill">${rotaNew + 1}</span></strong>
                            <strong class="me-auto">${configuracaoSlider.nome_page}</strong>
                            <small class="text-muted">Agora</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            <i class="bi bi-info-circle me-2"></i>
                            Você navegou para o slide ${rotaNew + 1}
                        </div>
                        <div class="p-1 border-top d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-primary btn-sm p-1" onclick="voltarParaPaginaAnterior(${rotaOld});">
                                <i class="bi bi-arrow-left me-1"></i>Voltar para ${rotaOld}
                            </button>
                        </div>
                    </div>
                </div>
            `)

            document.getElementById('navigationToast').addEventListener('hidden.bs.toast', function () {
                _toastRouter_.fechar();
            });

            _toastRouter_.abrir();
        });
    }
}


function vizioonRouter(rotaOld = "", slideIndex) {

    const rotaIndex = Number(slideIndex - 1)
    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;

    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na api pegar informações
    const pageData = api[rotaIndex];


    if (pageData) {
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex - 1)) {
                // Pega o array links_ativar ou usa array vazio como fallback
                // console.log(container);

                navegarParaRota(container.className, rotaIndex, rotaOld, pageData);


            }
        });
    }

};

/*
    vizioonRouter(
        -> rota de inda = página que vai dar o scroll se a página é 6 então como na programação começa em 0 é 6 - 1 que é 5 // automatizado
        -> rota antiga = de partida pode manter a lógica tá automatizada
    )
*/
// vizioonRouter(3, 6)