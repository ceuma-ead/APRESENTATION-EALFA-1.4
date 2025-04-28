

// Configurações do Cliente
async function vizioonConfiguracoes(classContainer, configuracoesSlider = {}, indexContainerAtual = 0) {

    const buttonSalvar = document.querySelector(".salvar-configuracoes");
    let novoValor;


    configTabs.on('show', (evento) => {
        const estaEmTutoriais = evento.target.id === 'tutorial-tab';
        // console.log('Está em tutoriais:', estaEmTutoriais);

        const $button = $(buttonSalvar);
        if (estaEmTutoriais) {
            // Faça algo específico para a tab de tutoriais
            // console.log('Navegando para tutoriais');
            $button.fadeOut(100, function () {
                $(this)
                    .addClass('d-none')
                    .fadeIn(100)
            });
        } else {
            $button.fadeOut(100, function () {
                $(this)
                    .removeClass('d-none')
                    .fadeIn(100)
            });
        }
    });

    const config = await global__Config();
    // console.log(config)

    // "tutoriais": [
    //         {
    //             "titulo": "Como Usar o Leitor de Tela",
    //             "descricao": "Aprenda como o leitor de tela acompanha sua navegação",
    //             "link": "https://ceuma-ead.github.io/SLDCEUMA/videos/SLCEUMA.mp4",
    //             "tipo": "video",
    //             "novaAba": true,
    //             "icone": "bi-play-circle-fill"
    //         },
    //         {
    //             "titulo": "Guia de Acessibilidade",
    //             "descricao": "Conheça os recursos de acessibilidade disponíveis",
    //             "link": "https://www.youtube.com/watch?v=xyz123",
    //             "tipo": "youtube",
    //             "novaAba": true,
    //             "icone": "bi-youtube"
    //         },
    //         {
    //             "titulo": "Documentação de Acessibilidade",
    //             "descricao": "Documentação completa sobre recursos de acessibilidade",
    //             "link": "https://docs.acessibilidade.com",
    //             "tipo": "texto",
    //             "novaAba": false,
    //             "icone": "bi-file-text"
    //         }
    //     ]


    const { tutoriais } = config

    //Atualizar conteúdo da tab Configurações
    configTabs.atualizarConteudo('projects', `
        <div class="p-3">
            <div class="mb-3">
                <label for="textReader" class="form-label fw-semibold">Ativar Leitor de Tela</label>
                <select class="form-select form-select-lg" id="textReader">
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                </select>
                <div class="form-text text-muted mt-2">
                    <i class="bi bi-info-circle me-1"></i>
                    O leitor de tela acompanha e narra o conteúdo...
                </div>
            </div>
        </div>
    `);

    //Atualizar conteúdo da tab Tutorial

    configTabs.atualizarConteudo('tutorial', `
    <div class="list-group">
        ${tutoriais && tutoriais.length > 0 ?
            tutoriais.map(tutorial => `
                <a href="${tutorial.link}" 
                   class="list-group-item list-group-item-action d-flex align-items-center"
                   ${tutorial.novaAba ? 'target="_blank"' : ''}>
                    <i class="bi ${tutorial.icone} text-danger me-3 fs-4"></i>
                    <div>
                        <h6 class="mb-1">${tutorial.titulo}</h6>
                        <p class="mb-1 text-muted">${tutorial.descricao}</p>
                    </div>
                </a>
            `).join('')
            :
            `<div class="alert alert-info m-3">
                <i class="bi bi-info-circle me-2"></i>
                Nenhum tutorial disponível no momento
            </div>`
        }
    </div>
 `);

    try {

        // Buscar dados existentes
        const dadosExistentes = await __configuracoesDb__.buscarPorId(1);

        // Se não existe o registro, criar
        if (!dadosExistentes) {
            await __configuracoesDb__.criar({
                id: 1,
                leitorTela: true,
                // dataCriacao: new Date()
            });
            novoValor = true;
        } else {
            // Atualizar o select com o valor existente
            const selectLeitor = document.getElementById('textReader');
            if (selectLeitor) {
                selectLeitor.value = dadosExistentes.leitorTela ? 'sim' : 'nao';
                novoValor = dadosExistentes.leitorTela;
            }
        }

        // Evento de mudança do select
        document.getElementById('textReader').addEventListener('change', (e) => {
            novoValor = e.target.value === 'sim' ? true : false;
        });



        // Evento do botão salvar (fora do evento change)
        buttonSalvar.addEventListener("click", async function () {

            try {
                const $button = $(buttonSalvar);
                const originalText = $button.html();


                async function AtualizarTela() {
                    setTimeout(() => { window.location.reload() }, 1000)
                }

                // Loading state
                // $button.prop('disabled', true)
                //     .html(`
                //         <div class="d-flex align-items-center gap-2">
                //             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                //             Salvando...
                //         </div>
                //     `);

                // Salvar dados
                await __configuracoesDb__.atualizarPorId(1, {
                    leitorTela: novoValor,
                    // dataAtualizacao: new Date()
                });

                // Sucesso com animação
                $button.fadeOut(200, function () {
                    $(this)
                        .removeClass('btn-primary')
                        .addClass('btn-success')
                        .html(`
                            <div class="d-flex gap-2">
                                <i class="bi bi-check-circle-fill"></i>
                                Salvo!
                            </div>
                        `)
                        .fadeIn(200);

                    // Reset com animação
                    setTimeout(() => {
                        $button.fadeOut(200, function () {
                            $(this)
                                .removeClass('btn-success')
                                .addClass('btn-primary')
                                .prop('disabled', false)
                                .html(originalText)
                                .fadeIn(200);
                        });
                    }, 1000);
                });


                AtualizarTela();


            } catch (erro) {
                const $button = $(buttonSalvar);

                // Erro com animação
                $button.fadeOut(200, function () {
                    $(this)
                        .removeClass('btn-primary')
                        .addClass('btn-danger')
                        .html(`
                            <div class="d-flex gap-2">
                                <i class="bi bi-x-circle-fill"></i>
                                Erro ao salvar
                            </div>
                        `)
                        .fadeIn(200);

                    // Reset com animação
                    setTimeout(() => {
                        $button.fadeOut(200, function () {
                            $(this)
                                .removeClass('btn-danger')
                                .addClass('btn-primary')
                                .prop('disabled', false)
                                .html(originalText)
                                .fadeIn(200);
                        });
                    }, 1000);
                });
            }
            // console.log(savedPosition)
            //Atualizar posição do Slider em relação ao ponteiro
            // glider.refresh(true);
            // glider.updateControls()

            // glider.scrollItem(Number(indexContainerAtual));



        });
    } catch (erro) {
        console.error("Erro ao manipular banco de dados:", erro);
        configTabs.atualizarConteudo('projects', `
            <div class="alert alert-danger m-3">
                <i class="bi bi-exclamation-circle-fill me-2"></i>
                Erro ao carregar configurações
            </div>
        `);
    }



}

// criar renderização da função do slider e verificar se existe o componente ouvinte referente a esse slider especifico
async function configuracoesRender(slideIndex) {
    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;


    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na api pegar informações
    const pageData = api[slideIndex];

    // Acessar Banco de Dados

    if (pageData) {

        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // Pega o array links_ativar ou usa array vazio como fallback
                // console.log(container);

                vizioonConfiguracoes(container.className, pageData, container.getAttribute(atributoSliderAtual));


            }
        });
    }
}


configuracoesRender(savedPosition)



