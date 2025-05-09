
// abrir menu anotação
const btn_abriranotacao = document.querySelector(".openAnnotation");

btn_abriranotacao.addEventListener("click", function (event) {
    // filtrarTitulo().destroy();
    event.stopPropagation();
    abrirAnotacoes();
})

function Update() {
    // Exemplo de uso
    const iconAnnotation = checkEmptyAnnotationsContainer();
    const ButtonMenuAnotacoes = document.querySelector(".openAnnotation");

    if (iconAnnotation) {
        // console.log("Container não está vazio");
        // console.log(ButtonMenuAnotacoes)
        ButtonMenuAnotacoes.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticker"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M14 3v4a2 2 0 0 0 2 2h4"/><path d="M8 13h.01"/><path d="M16 13h.01"/><path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"/></svg>`;
    } else {
        // console.log("Container está vazio");
        ButtonMenuAnotacoes.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg> `;
    }

}

function renderAnnotation(annotationItem) {
    const renderMenuDiv = document.querySelector('.render-menu-Annotation');

    // Cria o elemento para a nova anotação
    const newAnnotation = document.createElement('div');
    newAnnotation.classList.add('content-box-anotation');
    newAnnotation.dataset.id = annotationItem.id; // Armazena o ID da anotação

    // Cria a estrutura da anotação sem definir o conteúdo ainda
    newAnnotation.innerHTML = `
        <div class="ribbon rb d-inline-block text-truncate titulo-anotacao" style="max-width: 80%;" title='' contenteditable="true"></div>

        <p contenteditable="true"></p>
        <div class="line_anottation"></div>
        <div class="render-menu-Annotation--icons">
            <button class="delete-icon" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Excluir">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-trash-2">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" /></svg>

            </button>
            <button class="download-icon" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Baixar">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-cloud-download">
                    <path d="M12 13v8l-4-4" />
                    <path d="m12 21 4-4" />
                    <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" /></svg>

            </button>
            <button class="color-icon" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Colorir">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-palette">
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                    <path
                        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                    </svg>

            </button>
        </div>
    `;

    // Define o conteúdo da nova anotação usando textContent
    newAnnotation.querySelector('.ribbon').textContent = annotationItem.title; // Define o título
    newAnnotation.querySelector('p').textContent = annotationItem.Texto; // Define o texto

    // Aplica a cor salva na anotação, se existir -  Antigo
    // if (annotationItem.color) {
    //     newAnnotation.style.background = annotationItem.color.background;

    //     // Força a aplicação da cor do texto ao parágrafo
    //     const paragraph = newAnnotation.querySelector('p');
    //     paragraph.style.color = annotationItem.color.text;

    //     newAnnotation.dataset.colorIndex = annotationItem.color.index;

    //     // Aplica a cor salva nos botões
    //     const buttons = newAnnotation.querySelectorAll('button');
    //     buttons.forEach(button => {
    //         button.style.backgroundColor = annotationItem.color.buttonColor;
    //         button.style.color = annotationItem.color.textButtonColor;
    //     });
    // }

    // Aplica a cor salva na anotação, se existir
    if (annotationItem.color) {
        newAnnotation.style.background = annotationItem.color.background;

        // Força a aplicação da cor do texto ao parágrafo
        const paragraph = newAnnotation.querySelector('p');
        paragraph.style.color = annotationItem.color.text;

        // Aplica as cores do título ao elemento ribbon
        const ribbon = newAnnotation.querySelector('.ribbon');
        if (ribbon) {
            // Verifica se as propriedades tituloColorText e tituloColorIcon existem
            if (annotationItem.color.tituloColorText) {
                ribbon.style.color = annotationItem.color.tituloColorText;
            }
            if (annotationItem.color.tituloColorIcon) {

                ribbon.style.background = `radial-gradient(.2em 50% at left, #000a, #0000) border-box, ${annotationItem.color.tituloColorIcon} padding-box`;
            }
        }

        newAnnotation.dataset.colorIndex = annotationItem.color.index;

        // Aplica a cor salva nos botões
        const buttons = newAnnotation.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.backgroundColor = annotationItem.color.buttonColor;
            button.style.color = annotationItem.color.textButtonColor;
        });
    }

    // Evento para remover a anotação ao clicar no ícone de lixeira
    newAnnotation.querySelector('.delete-icon').addEventListener('click', function (event) {
        event.stopPropagation()
        abrirAnotacoes();
        removeAnnotation(annotationItem.id);
        checkEmptyAnnotationsContainer(); // Verifica se o contêiner está vazio após remover
    });

    // Evento para baixar a anotação como um arquivo .txt
    newAnnotation.querySelector('.download-icon').addEventListener('click', function (event) {
        event.stopPropagation()
        downloadAnnotation(annotationItem);
    });

    // Evento para alterar a cor da anotação ao clicar no ícone de paleta
    newAnnotation.querySelector('.color-icon').addEventListener('click', function (event) {
        event.stopPropagation()
        changeAnnotationColor(newAnnotation, annotationItem.id);
    });

    // Evento para salvar o novo título quando o usuário editar e sair do campo (blur)
    newAnnotation.querySelector('.ribbon').addEventListener('blur', function (event) {
        event.stopPropagation()
        const updatedTitle = this.textContent.trim();
        if (updatedTitle !== annotationItem.title) {
            // Atualiza o título da anotação
            updateAnnotationField(annotationItem.id, {
                title: updatedTitle
            });
        }
    });

    // Evento para salvar o texto quando o usuário editar e sair do campo (blur)
    newAnnotation.querySelector('p').addEventListener('blur', function (event) {
        const updatedText = this.textContent.trim();
        if (updatedText !== annotationItem.Texto) {
            // Atualiza o texto da anotação
            updateAnnotationField(annotationItem.id, {
                Texto: updatedText
            });
        }
    });

    // Adiciona a nova anotação na interface
    renderMenuDiv.appendChild(newAnnotation);

    // Verifica se o contêiner está vazio após adicionar a nova anotação
    checkEmptyAnnotationsContainer();
}

// Função para atualizar campos específicos da anotação
function updateAnnotationField(id, updates) {
    // Implementar a lógica para atualizar o título ou texto da anotação no banco de dados
    annotation.update({
        id
    }, updates);
}

// Função para alterar as cores da anotação
function changeAnnotationColor(annotationElement, annotationId) {
    const colorConfigurations = [{
        background: '#5ac0e7',
        text: '#ffffff',
        buttonColor: '#ffffff00',
        textButtonColor: '#134b61',
        iconColor: '#134b61',
        tituloColorText: '#ffffff',
        tituloColorIcon: '#134b61'
    }, // Azul com texto branco e ícones pretos
    {
        background: '#6fd262',
        text: '#ffffff',
        buttonColor: '#ffffff00',
        textButtonColor: '#084100',
        iconColor: '#084100',
        tituloColorText: '#ffffff',
        tituloColorIcon: '#084100'
    }, // Verde com texto branco e ícones brancos
    {
        background: '#c78eff',
        text: '#ffffff',
        buttonColor: '#ffffff00',
        textButtonColor: '#4d1682',
        iconColor: '#4d1682',
        tituloColorText: '#ffffff',
        tituloColorIcon: '#4d1682'
    }, // Roxo com texto preto e ícones brancos
    {
        background: 'none',
        text: '#000000',
        buttonColor: '#ffffff00',
        textButtonColor: '#000000',
        iconColor: '#000000',
        tituloColorText: '#ffffff',
        tituloColorIcon: '#817206c2 '
    } // Sem fundo, texto preto, ícones pretos
    ];

    // Verifica o índice da cor atual e avança para a próxima configuração
    let currentColorIndex = annotationElement.dataset.colorIndex || 0;
    currentColorIndex = (parseInt(currentColorIndex) + 1) % colorConfigurations.length;

    // Aplica a nova cor de fundo à anotação
    annotationElement.style.background = colorConfigurations[currentColorIndex].background;

    // Atualiza a cor do texto especificamente no parágrafo
    const paragraph = annotationElement.querySelector('p');
    if (paragraph) {
        paragraph.style.color = colorConfigurations[currentColorIndex].text;
    }

    // Atualiza a cor do texto no titulo especificamente no ribbon da anotação
    const ribbon = annotationElement.querySelector('.ribbon');
    if (ribbon) {
        ribbon.style.color = colorConfigurations[currentColorIndex].tituloColorText;
        ribbon.style.background = `radial-gradient(.2em 50% at left, #000a, #0000) border-box, ${colorConfigurations[currentColorIndex].tituloColorIcon} padding-box`;
    }

    // Atualiza as cores dos botões e dos ícones SVG dentro da anotação
    const buttons = annotationElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.background = colorConfigurations[currentColorIndex].buttonColor;
        button.style.color = colorConfigurations[currentColorIndex].textButtonColor;

        // Atualiza a cor dos ícones SVG dentro do botão
        const svgIcon = button.querySelector('i[data-lucide]');
        if (svgIcon) {
            svgIcon.style.fill = colorConfigurations[currentColorIndex].iconColor;
        }
    });

    annotationElement.dataset.colorIndex = currentColorIndex; // Armazena o índice da cor atual

    // Salva a cor atualizada no banco de dados - Usando os nomes corretos dos campos
    annotation.update({
        id: annotationId
    }, {
        color: {
            background: colorConfigurations[currentColorIndex].background,
            text: colorConfigurations[currentColorIndex].text,
            buttonColor: colorConfigurations[currentColorIndex].buttonColor,
            textButtonColor: colorConfigurations[currentColorIndex].textButtonColor,
            iconColor: colorConfigurations[currentColorIndex].iconColor,
            tituloColorText: colorConfigurations[currentColorIndex].tituloColorText,
            tituloColorIcon: colorConfigurations[currentColorIndex].tituloColorIcon,
            index: currentColorIndex
        }
    });
}

// Função para abrir/fechar o menu de configurações de anotações automatico
// function abrirConfigurcoesBaseMenu() {
//     const menuAnotacoes = document.querySelector('.sidebar-menu-Annotation');
//     const ButtonMenuAnotacoes = document.querySelector(".openAnnotation");
//     const iconAnnotation = checkEmptyAnnotationsContainer();

//     if (!menuAnotacoes || !ButtonMenuAnotacoes) {
//         console.log(menuAnotacoes);
//         console.log(ButtonMenuAnotacoes);
//         console.error('abrirConfigurcoesBaseMenu: Elementos não encontrados.');
//         return;
//     }

//     menuAnotacoes.classList.toggle('open-annotation');

//     // Atualiza o ícone e o texto com base no estado do menu
//     if (menuAnotacoes.classList.contains('open-annotation')) {
//         ButtonMenuAnotacoes.innerHTML = `
//                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
//             `
//         console.log('abrirConfigurcoesBaseMenu: Menu aberto.');
//     } else {
//         ButtonMenuAnotacoes.innerHTML = `
//         ${iconAnnotation ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticker"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M14 3v4a2 2 0 0 0 2 2h4"/><path d="M8 13h.01"/><path d="M16 13h.01"/><path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"/></svg>`
//                 :
//                 `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg> `}
//     `

//         console.log('abrirConfigurcoesBaseMenu: Menu fechado.');
//     }

// }

// if(typeof abrirConfigurcoesBaseMenu === "function" ){
//     abrirConfigurcoesBaseMenu()
// }

// Função para exibir o alerta com fechamento automático e logs

function showAutoCloseAlert(logs, id = "") {
    let timerInterval;
    Swal.fire({
        title: 'Escrevendo seu texto...',
        html: `
            <div>
                <p>Aguarde</p>
                <b></b>
                <!-- <textarea class="swal2-textarea" style="width:80%;" id="swal2-textarea" readonly>${logs}</textarea> -->
            </div>
        `,
        timer: 2000,
        heightAuto: false,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
            // const timer = Swal.getPopup().querySelector('b');
            // timerInterval = setInterval(() => {
            //     timer.textContent = `${Swal.getTimerLeft()}`;
            // }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            fecharMenuAnotacoes();
            console.log('showAutoCloseAlert: Alerta fechado pelo timer.');
            const searchInput = document.querySelector('#searchInput');
            searchInput.value = "";
            filterAnnotations(`id:${id}`);

            abrirAnotacoes()
        }
    }).catch((error) => {
        console.error('showAutoCloseAlert: Erro ao exibir alerta.', error);
    });
}
// Função para criar uma anotação
async function createAnnotation(_anotacoesTexto = "") {

    try {
        if (!_anotacoesTexto || _anotacoesTexto === "") {

            // Obtém o resultado do Swal.fire sem usar .then()
            const result = await Swal.fire({
                title: 'Tomar nota',
                input: 'textarea',
                inputLabel: '',
                inputPlaceholder: 'Faça sua anotação aqui...',
                inputAttributes: {
                    'aria-label': 'Faça sua anotação aqui'
                },
                showCancelButton: true,
                confirmButtonText: 'Anotar',
                cancelButtonText: 'Cancelar',
                heightAuto: false,
                stopKeydownPropagation: true
            });

            // Verifica se o usuário confirmou e forneceu texto
            if (result.isConfirmed && result.value) {
                const texto = String(result.value);
                console.log('createAnnotation: Texto fornecido para anotação.');
                const title = texto.split(' ')[0] || 'Anotação sem título';
                const newAnnotation = {
                    id: new Date().getTime().toString(),
                    title: title,
                    Texto: texto
                };

                console.log('createAnnotation: Criando nova anotação.', newAnnotation);
                annotation.save(newAnnotation, function (savedAnnotation) {
                    console.log(`createAnnotation: Anotação salva: ${savedAnnotation.id}`);
                    renderAnnotation(savedAnnotation);
                });

                const logs = `
                    ====== Anotação criada com sucesso =====
    
                    > ID: ${newAnnotation.id}
                    > Título: ${title}
                    > Texto: ${texto}
                `;

                showAutoCloseAlert(logs, newAnnotation.id);
                checkEmptyAnnotationsContainer();
            } else {
                console.log('createAnnotation: Nenhum texto fornecido.');
            }
        } else {
            // Garante que _anotacoesTexto seja uma string
            const textoAnotacao = String(_anotacoesTexto);
            console.log('createAnnotation: Texto fornecido para anotação.');
            const title = textoAnotacao.split(' ')[0] || 'Anotação sem título';
            const newAnnotation = {
                id: new Date().getTime().toString(),
                title: title,
                Texto: textoAnotacao
            };

            console.log('createAnnotation: Criando nova anotação.', newAnnotation);
            annotation.save(newAnnotation, function (savedAnnotation) {
                console.log(`createAnnotation: Anotação salva: ${savedAnnotation.id}`);
                renderAnnotation(savedAnnotation);
            });

            const logs = `
                ====== Anotação criada com sucesso =====

                > ID: ${newAnnotation.id}
                > Título: ${title}
                > Texto: ${textoAnotacao}
            `;
            showAutoCloseAlert(logs, newAnnotation.id);
            checkEmptyAnnotationsContainer();
        }
    } catch (error) {
        console.error('createAnnotation: Erro ao criar anotação.', error);
        Swal.fire({
            icon: 'error',
            title: 'Erro ao criar anotação',
            text: 'Não foi possível criar a anotação. Por favor, tente novamente.',
            heightAuto: false
        });
    }
}

document.querySelector(".abrirPlusAnnotation")?.addEventListener("click", function (event) {
    event.stopPropagation();
    createAnnotation();
});
// Adiciona o evento de clique no botão de adicionar anotação

// Função para remover uma anotação com confirmação
async function removeAnnotation(id) {
    try {
        // Exibe o SweetAlert2 para confirmação com ícone de perigo
        const result = await Swal.fire({
            title: 'Você tem certeza?',
            text: "Esta anotação será removida permanentemente.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, remover!',
            cancelButtonText: 'Cancelar',
            heightAuto: false,

        });

        if (result.isConfirmed) {
            // Se confirmado, encontra e remove a anotação
            annotation.find({
                id: id
            }, function (results) {
                if (results[0]) {
                    results[0].delete();
                    document.querySelector(`[data-id="${id}"]`).remove();
                    console.log(`removeAnnotation: Anotação removida: ${id}`);


                    // Abre o menu após a remoção

                    // Exibe um alerta de sucesso após a remoção
                    Swal.fire({
                        title: 'Removido!',
                        text: 'A anotação foi removida com sucesso.',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        heightAuto: false,
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            checkEmptyAnnotationsContainer();
                            Update();
                            abrirAnotacoes();
                        }
                    })

                } else {
                    console.log(`removeAnnotation: Anotação com ID ${id} não encontrada.`);
                }
            });
        } else {
            checkEmptyAnnotationsContainer();
            Update();
            abrirAnotacoes();
            console.log('removeAnnotation: Remoção da anotação cancelada.');
        }
    } catch (error) {
        console.error('removeAnnotation: Erro ao remover anotação.', error);
    }

}

// Função para baixar uma anotação como arquivo de texto (.txt)
function downloadAnnotation(annotationItem) {
    const element = document.createElement('a');
    const fileContent = `Título: ${annotationItem.title}\n\nTexto: ${annotationItem.Texto}`;
    const blob = new Blob([fileContent], {
        type: 'text/plain'
    });
    element.href = URL.createObjectURL(blob);
    element.download = `${annotationItem.title}.txt`;
    document.body.appendChild(element); // Adiciona temporariamente ao DOM
    element.click(); // Dispara o download
    document.body.removeChild(element); // Remove do DOM
}

function removeAnnotationFromUI(annotationId = []) {


    if (Array.isArray(annotationId)) {
        annotationId.map(_i => {
            // console.log(_i)
            // Busca a anotação pelo dataset-id
            const annotationToRemove = document.querySelector(`.content-box-anotation[data-id="${_i}"]`);

            if (annotationToRemove) {
                // Remove o elemento da interface
                annotationToRemove.remove();

                console.log(`Anotação com ID ${annotationId} removida da interface.`);

                // Verifica se o contêiner está vazio e toma ações apropriadas
                checkEmptyAnnotationsContainer();
                abrirAnotacoes()
            } else {
                console.warn(`Anotação com ID ${annotationId} não encontrada para remoção.`);
            }
        })
    }

}

// Funções para os comandos
function limparAnotacoes() {
    fecharMenuAnotacoes();
    Swal.fire({
        title: "Deseja Remover Tudo?",
        text: "Essa Ação Não pode ser Revestida",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim , Deletar agora!!!",
        heightAuto: false,
    }).then((result) => {
        if (result.isConfirmed) {
            const dropAnnotation = annotation.drop();
            // console.log(dropAnnotation)

            removeAnnotationFromUI(dropAnnotation)
            checkEmptyAnnotationsContainer();

            abrirAnotacoes();
        }
    });
}

const autoScrollEnabled = true

const comandos = [
    {
        _acionador: ":clear",
        _ajuda: false,
        funcao: limparAnotacoes
    },
    {
        _acionador: "t:",
        _ajuda: `
            <p class='w-100 d-flex justify-content-start gap-2'>  <i class="bi bi-arrow-right-short"></i> <span class='text-info'>Ex: ( <span class='text-warning'>t : </span>meu titulo )</span></p>
        `,
        funcao: (entrada) => filterAnnotations("", entrada.replace("t:", ""))
    },
    {
        _acionador: "c:",
        _ajuda: `
            <p class='w-100 d-flex justify-content-start gap-2'> <i class="bi bi-arrow-right-short"></i> <span class='text-info'>Ex: ( <span class='text-warning'>c : </span> meu conteudo )</span></p>
        `,
        funcao: (entrada) => filterAnnotations(entrada.replace("c:", ""), "")
    },
    {
        _acionador: "id:",
        _ajuda: `
            <p class='w-100 d-flex justify-content-start gap-2'>  <i class="bi bi-arrow-right-short"></i> <span class='text-info'>Ex: ( <span class='text-warning'>id : </span>2303498234 )</span></p>
        `,
        funcao: (entrada) => filterAnnotations(entrada.replace("id:", ""), "")
    }
];

const filtro_infor_annotation_ajuda = () => {
    const infoIcon = document.querySelector('._infoAnnotation');
    if (!infoIcon) return;

    const ajudaHTML = comandos
        .filter(cmd => cmd._ajuda)
        .map(cmd => cmd._ajuda)
        .join('<hr>');

    infoIcon.setAttribute('data-bs-toggle', 'tooltip');
    infoIcon.setAttribute('data-bs-html', 'true');
    infoIcon.setAttribute('data-bs-title', ajudaHTML);
}

filtro_infor_annotation_ajuda();

// Função para verificar e executar o comando
function verificarComando(inputValue) {
    const comandoEncontrado = comandos.find(comando => inputValue.startsWith(comando._acionador));
    if (comandoEncontrado) {
        comandoEncontrado.funcao(inputValue); // Passa o inputValue para a função
        return true;
    }
    return false;
}

function atualizarIcon() {
    const countFoundResult = document.querySelector('.countFoundResult');
    countFoundResult.innerHTML = `<i data-lucide="text-search" id="searcListKeyWord-icon"></i>`;
    lucide.createIcons();
}

// Função para remover todos os highlights das anotações
function removeAllHighlights() {
    // Seleciona todos os parágrafos dentro das anotações
    const paragraphs = document.querySelectorAll('.content-box-anotation p');
    
    // Para cada parágrafo, remove os spans de highlight
    paragraphs.forEach(p => {
        // Preserva o texto original removendo os destaques
        const originalText = p.textContent;
        p.innerHTML = originalText;
    });
}

// function filterAnnotations(searchTerm = "", procurarTitulo = "") {
//     if (verificarComando(searchTerm)) return;

//     const annotations = document.querySelectorAll('.content-box-anotation');
//     const searchIcon = document.querySelector('#searcListKeyWord-icon');
//     const countFoundResult = document.querySelector('.countFoundResult');
//     let matchingElements = [];

//     annotations.forEach(annotation => {
//         const textElement = annotation.querySelector('p');
//         const titleElement = annotation.querySelector('.titulo-anotacao');
//         let matched = false;

//         // Remover destaque antigo
//         if (textElement) {
//             textElement.innerHTML = textElement.innerHTML.replace(/<\/?span class="highlight-text-annotation">/g, '');
//         }

//         // Busca por ID
//         if (searchTerm) {
//             const idToSearch = searchTerm.trim().toLowerCase();
//             if (annotation.getAttribute("data-id") === idToSearch) {
//                 matched = true;
//                 matchingElements.push(annotation);
//                 return;
//             }
//         }

//         // Busca no conteúdo
//         if (searchTerm && textElement) {
//             const searchText = searchTerm.trim().toLowerCase();
//             const contentText = textElement.textContent.toLowerCase();

//             if (contentText.includes(searchText)) {
//                 matched = true;
//                 const regex = new RegExp(searchText, 'gi');
//                 textElement.innerHTML = textElement.innerHTML.replace(regex, '<span class="highlight-text-annotation">$&</span>');
//             }
//         }

//         // Busca no título
//         if (procurarTitulo && titleElement) {
//             const titleKeywords = procurarTitulo.trim().toLowerCase().split(/\s+/);
//             titleKeywords.forEach(keyword => {
//                 if (titleElement.textContent.toLowerCase().includes(keyword)) {
//                     matched = true;
//                 }
//             });
//         }

//         if (matched) {
//             matchingElements.push(annotation);
//         }
//     });

//     // Atualizar os resultados encontrados globalmente
//     lastMatchedElements = matchingElements; // Importante: atualizar a variável global

//     function updateSearchIcon(found, searchTerm, countFoundResult, matchedElements) {
//         // Criar um dropdown no estilo do filtro existente
//         countFoundResult.innerHTML = `
//             <div class="dropup-left dropup">
//                 <button class="text-light  p-1  dropdown-toggle countFoundResultButton"
//                     type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     ${found ? found > 100 ? "99+" : found : 0}
//                 </button>
//                 <ul class="dropdown-menu dropdown-menu-dark">
//                     <li class="dropdown-header">${found} resultado(s) encontrado(s)</li>
//                     <li><hr class="dropdown-divider"></li>
//                 </ul>
//             </div>
//         `;

//         // Obter a lista para adicionar os itens
//         const dropdownMenu = countFoundResult.querySelector('.dropdown-menu');

//         // Adicionar os resultados como itens de lista
//         matchedElements.forEach((element, index) => {
//             const title = element.querySelector('.ribbon').textContent || 'Sem título';
//             let snippet = '';

//             if (element.querySelector('p')) {
//                 snippet = element.querySelector('p').textContent;
//                 snippet = snippet.length > 30 ? snippet.substring(0, 30) + '...' : snippet;
//             }

//             // Criar item de lista
//             const listItem = document.createElement('li');

//             // Criar link dentro do item
//             const link = document.createElement('a');
//             link.className = 'dropdown-item d-flex align-items-center gap-1 justify-content-between';
//             link.href = '#';

//             // Criar div para o conteúdo (título e snippet)
//             const contentDiv = document.createElement('div');
//             contentDiv.className = 'flex-grow-1';

//             // Criar div para o título
//             const titleDiv = document.createElement('div');
//             titleDiv.className = 'fw-bold';
//             titleDiv.textContent = title;
//             contentDiv.appendChild(titleDiv);

//             // Criar small para o snippet
//             const snippetSmall = document.createElement('small');
//             snippetSmall.className = 'text-muted';
//             snippetSmall.textContent = snippet;
//             contentDiv.appendChild(snippetSmall);

//             // Adicionar conteúdo ao link
//             link.appendChild(contentDiv);

//             // Criar ícone
//             const icon = document.createElement('span');
//             icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;
//             link.appendChild(icon);

//             // Adicionar evento de clique para navegar até o resultado
//             link.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                 currentScrollIndex = (index + 1) % matchedElements.length;
//             });

//             // Adicionar link ao item e item à lista
//             listItem.appendChild(link);
//             dropdownMenu.appendChild(listItem);
//         });

//         // Inicializar ícones Lucide
//         if (typeof lucide !== 'undefined') {
//             lucide.createIcons();
//         }
//     }

//     // Atualizar o contador visual com o número exato de resultados encontrados
//     if (matchingElements.length > 0) {
//         updateSearchIcon(matchingElements.length, searchTerm || procurarTitulo, countFoundResult, matchingElements);
//     } else {
//         atualizarIcon();
//     }

//     // Rolar para os elementos encontrados
//     if (autoScrollEnabled && matchingElements.length > 0) {
//         scrollToMatchingElements(matchingElements);
//     }

//     return matchingElements;
// }

// function verificarComando(inputValue) {
//     const comando = comandos.find(cmd => inputValue.startsWith(cmd._acionador));
//     if (comando) {
//         comando.funcao(inputValue);
//         return true;
//     }
//     return false;
// }

// verificarComando("t:soluto")

// function updateSearchIcon(searchIcon, found, searchTerm, countFoundResult) {
//     if (!searchIcon) return;

//     if (found) {
//         searchIcon.setAttribute('data-lucide', 'search-check');
//     } else if (searchTerm.trim() !== '') {
//         searchIcon.setAttribute('data-lucide', 'search-x');
//     } else {
//         countFoundResult.classList.remove("d-flex");
//         countFoundResult.classList.add("d-none");
//         searchIcon.setAttribute('data-lucide', 'search');
//     }

//     lucide.createIcons();
// }



// ================= CONTROLES PARA FAZER ANOTAÇOES SCROLAR E PESQUISAR  ==================== // 

function filterAnnotations(searchTerm = "", procurarTitulo = "") {
    if (verificarComando(searchTerm)) return;

    const annotations = document.querySelectorAll('.content-box-anotation');
    const searchIcon = document.querySelector('#searcListKeyWord-icon');
    const countFoundResult = document.querySelector('.countFoundResult');
    let matchingElements = [];

    // Se temos um termo de busca geral e não especificamos título
    if (searchTerm && !procurarTitulo) {
        // Vamos buscar tanto no título quanto no conteúdo
        annotations.forEach(annotation => {
            const textElement = annotation.querySelector('p');
            const titleElement = annotation.querySelector('.titulo-anotacao');
            let matched = false;
            let matchedInContent = false;

            // Limpar destaques anteriores
            if (textElement) {
                textElement.innerHTML = textElement.innerHTML.replace(/<\/?span class="highlight-text-annotation">/g, '');
            }

            // Busca por ID
            const idToSearch = searchTerm.trim().toLowerCase();
            if (annotation.getAttribute("data-id") === idToSearch) {
                matched = true;
                matchingElements.push(annotation);
                return;
            }

            // Busca no conteúdo
            if (textElement) {
                const searchText = searchTerm.trim().toLowerCase();
                const contentText = textElement.textContent.toLowerCase();

                if (contentText.includes(searchText)) {
                    matched = true;
                    matchedInContent = true;
                    const regex = new RegExp(searchText, 'gi');
                    textElement.innerHTML = textElement.innerHTML.replace(regex, '<span class="highlight-text-annotation">$&</span>');
                }
            }

            // Busca no título se não encontrou no conteúdo ou queremos buscar em ambos
            if (titleElement && (!matchedInContent || procurarTitulo)) {
                const titleText = titleElement.textContent.toLowerCase();
                const searchText = (procurarTitulo ? procurarTitulo : searchTerm).trim().toLowerCase();

                if (titleText.includes(searchText)) {
                    matched = true;
                }
            }

            if (matched) {
                matchingElements.push(annotation);
            }
        });
    }
    // Caso específico para busca apenas no título
    else if (procurarTitulo) {
        annotations.forEach(annotation => {
            const titleElement = annotation.querySelector('.titulo-anotacao');
            let matched = false;

            if (titleElement) {
                const titleKeywords = procurarTitulo.trim().toLowerCase().split(/\s+/);
                titleKeywords.forEach(keyword => {
                    if (titleElement.textContent.toLowerCase().includes(keyword)) {
                        matched = true;
                    }
                });
            }

            if (matched) {
                matchingElements.push(annotation);
            }
        });
    }

    // Atualizar os resultados encontrados globalmente
    lastMatchedElements = matchingElements;

    function updateSearchIcon(found, searchTerm, countFoundResult, matchedElements) {
        // Criar um dropdown no estilo do filtro existente
        countFoundResult.innerHTML = `
            <div class="dropup-left dropup" id="lista-resultados-pesquisa-annotation">
                <button class="text-light badge bg-secondary p-1 dropdown-toggle countFoundResultButton"
                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${found ? found > 100 ? "99+" : found : 0}
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" style="max-height: 300px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #6c757d #343a40;">
                    <li class="dropdown-header position-sticky top-0 bg-dark">${found} resultado(s) encontrado(s)</li>
                    <li><hr class="dropdown-divider"></li>
                </ul>
            </div>
        `;
    
        // Obter a lista para adicionar os itens
        const dropdownMenu = countFoundResult.querySelector('.dropdown-menu');
    
        // Adicionar os resultados como itens de lista
        matchedElements.forEach((element, index) => {
            // renderizar tooltips
            if (typeof tooltipRender === 'function') {
                tooltipRender();
            }
    
            const dropdownElementListSearchKey = document.getElementById('lista-resultados-pesquisa-annotation');
            const dropdownListKey = new bootstrap.Dropdown(dropdownElementListSearchKey);
    
            const title = element.querySelector('.ribbon').textContent || 'Sem título';
            let snippet = '';
            let idSnippet = element.getAttribute('data-id');
            
            if (element.querySelector('p')) {
                snippet = element.querySelector('p').textContent;
                snippet = snippet.length > 30 ? snippet.substring(0, 30) + '...' : snippet;
            }
    
            // Criar item de lista
            const listItem = document.createElement('li');
            
            // Criar link dentro do item
            const link = document.createElement('a');
            link.className = 'dropdown-item d-flex align-items-center gap-1 justify-content-between';
            link.href = '#';
    
            // Criar div para o conteúdo (título e snippet)
            const contentDiv = document.createElement('div');
            contentDiv.className = 'flex-grow-1';
    
            // Criar div para o título
            const titleDiv = document.createElement('div');
            titleDiv.className = 'fw-bold';
            titleDiv.textContent = title;
            contentDiv.appendChild(titleDiv);
    
            // Criar small para o snippet
            const snippetSmall = document.createElement('div');
            snippetSmall.innerHTML = `
            <div class="text-light opacity-1 d-flex gap-2 text-light text-opacity-75 mt-2">
                <!-- <i class="bi bi-info-circle text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="${idSnippet}"></i> -->
                <i class="bi bi-book"></i>
                <span class="small w-100 " style="background:none;all:unset;">${typeof reduzirTexto === 'function' ? reduzirTexto(snippet, 10, '...') : snippet.substring(0, 10) + '...'}</span>
            </div>
            `;
            contentDiv.appendChild(snippetSmall);
    
            // Adicionar conteúdo ao link
            link.appendChild(contentDiv);
    
            // Criar botão para ir ao item com estilo melhorado
            const goToButton = document.createElement('button');
            goToButton.className = 'result-go-btn';
            goToButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;
            goToButton.title = "Ir para o resultado";
            link.appendChild(goToButton);
    
            // Adicionar evento de clique para navegar até o resultado
            link.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                currentScrollIndex = (index + 1) % matchedElements.length;
                // Atualização do Annotation
                dropdownListKey.hide();
            });
    
            // Adicionar separador antes do item (exceto para o primeiro)
            if (index > 0) {
                const separator = document.createElement('li');
                separator.innerHTML = '<hr class="dropdown-divider">';
                dropdownMenu.appendChild(separator);
            }
    
            // Adicionar link ao item e item à lista
            listItem.appendChild(link);
            dropdownMenu.appendChild(listItem);
        });
    
        // Inicializar ícones Lucide
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Atualizar o contador visual com o número exato de resultados encontrados
    if (matchingElements.length > 0) {
        updateSearchIcon(matchingElements.length, searchTerm || procurarTitulo, countFoundResult, matchingElements);
    } else {
        atualizarIcon();
    }

    // Rolar para os elementos encontrados
    if (autoScrollEnabled && matchingElements.length > 0) {
        scrollToMatchingElements(matchingElements);
    }

    return matchingElements;
}

let currentScrollIndex = 0;
let lastMatchedElements = [];

function scrollToMatchingElements(elements) {
    lastMatchedElements = elements;
    if (elements.length > 0) {
        elements[0].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        currentScrollIndex = 1; // Prepara para o próximo elemento
    }
}

function manualScrollToNext() {
    if (lastMatchedElements.length > 0) {
        lastMatchedElements[currentScrollIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        currentScrollIndex = (currentScrollIndex + 1) % lastMatchedElements.length;
    }
}

// Clicar no butão de Anotação
// function onSearchButtonClick(event) {
//     event.stopPropagation();

//     const searchInput = document.querySelector('#searchInput');

//     // Verificar se o input está vazio
//     if (!searchInput.value.trim()) {
//         lastMatchedElements = [];
//         currentScrollIndex = 0; // Reiniciar índice
//         atualizarIcon();
//         return; // Interromper execução
//     }

//     // Continuar somente se houver valor no input
//     if (lastMatchedElements.length > 0) {
//         manualScrollToNext();

//     } else {
//         filterAnnotations(`c:${searchInput.value}`);
//     }
// }


// document.querySelector('#searchButton').addEventListener('click', onSearchButtonClick);
// Evento de entrada no campo de busca
// document.querySelector('#searchInput').addEventListener('input', function () {
//     currentScrollIndex = 0;

//     if (this.value === "") {
//         lastMatchedElements = [];
//         atualizarIcon();
//     } else {
//         const results = filterAnnotations(this.value);
//         // console.log(`Resultados encontrados: ${results.length}`);
//     }
// });
document.querySelector('#searchInput').addEventListener('input', function () {
    currentScrollIndex = 0;

    if (this.value === "") {
        removeAllHighlights();
        lastMatchedElements = [];
        atualizarIcon();
    } else {
        const results = filterAnnotations(this.value);
        // console.log(`Resultados encontrados: ${results.length}`);
    }
});





// const filterConfig = {
//     fields: [
//       {
//         name: 'search',
//         type: 'text',
//         placeholder: 'Buscar...'
//       },
//       {
//         name: 'category',
//         type: 'select',
//         options: [
//           { value: '', label: 'Todas categorias' },
//           { value: '1', label: 'Categoria 1' },
//           { value: '2', label: 'Categoria 2' }
//         ]
//       }
//     ],
//     onChange: (values) => {
//       console.log('Valores atualizados:', values);
//       // Faça algo com os valores
//     }
//   };



// function filtrarTitulo(event = null) {

//     const buttonFilter = document.querySelector("._dropPlushAnnotation");
//     const containerFiltroChanger = document.querySelector('.filtros-input-mod');

//     buttonFilter.addEventListener("click", function (event) {
//         event.stopPropagation();
//         event.preventDefault();
//     })

//     // // Criar instância
//     // const filtro = new FilterVision('root', {
//     //     instanceId: 'filtro-principal',
//     //     position: 'center',
//     //     fields: [
//     //         {
//     //             name: 'titulo',
//     //             type: 'text',
//     //             placeholder: 'Buscar por Título...'
//     //         },
//     //         {
//     //             name: 'conteudo',
//     //             type: 'text',
//     //             placeholder: 'Buscar no Conteúdo...'
//     //         }
//     //     ],
//     // });

//     // filtro
//     // .on('input', 'titulo', (valor) => {
//     //     // console.log('Título digitado:', valor);
//     //     // if(valor === ""){
//     //     //     atualizarIcon();
//     //     // }
//     //     atualizarIcon();
//     //     filterAnnotations(`t:${valor}`);

//     // })
//     // .on('input', 'conteudo', (valor) => {
//     //     // console.log('Conteúdo digitado:', valor);
//     //     // if(valor === ""){
//     //     //     atualizarIcon();
//     //     // }
//     //     atualizarIcon();
//     //     filterAnnotations(`c:${valor}`);


//     // })

//     // // filtro.show();
//     // return filtro

//     const filtrar = {
//         titulo: (event) => {
//             // console.log(event)

//             const idNewFilter = `searchInput-${event.textContent.trim()}`;
//             // console.log(buttonFilter.textContent)
//             buttonFilter.textContent = event.textContent;
//             containerFiltroChanger.innerHTML = `<input type="search" placeholder="#${event.textContent}..." id="${idNewFilter}">`


//             const newElementoFiltro = document.getElementById(idNewFilter);
//             // console.log(newElementoFiltro)

//             newElementoFiltro.addEventListener("input", function () {
//                 // console.log('Título digitado:', valor);
//                 if (this.value === "") {
//                     atualizarIcon();
//                 }

//                 filterAnnotations(`t:${this.value}`);
//             })

//         },
//         conteudo: (event) => {

//             const idNewFilter = `searchInput-${event.textContent.trim()}`;
//             // console.log(buttonFilter.textContent)
//             buttonFilter.textContent = reduzirTexto(event.textContent, 4);
//             containerFiltroChanger.innerHTML = `<input type="search" placeholder="#${event.textContent}..." id="${idNewFilter}">`


//             const newElementoFiltro = document.getElementById(idNewFilter);
//             // console.log(newElementoFiltro)

//             newElementoFiltro.addEventListener("input", function () {
//                 // console.log('Título digitado:', valor);
//                 if (this.value === "") {
//                     atualizarIcon();
//                 }

//                 filterAnnotations(`c:${this.value}`);
//             })
//         },

//         destroy: (event) => {

//             const idNewFilter = `searchInput`;
//             buttonFilter.textContent = "Filtrar";
//             atualizarIcon();
//             // console.log(buttonFilter)
//             containerFiltroChanger.innerHTML = `<input type="search" placeholder="#Buscar..." id="${idNewFilter}">`
//             const newElementoFiltro = document.getElementById(idNewFilter);
//             newElementoFiltro.addEventListener('input', function () {

//                 currentScrollIndex = 0;
//                 if (this.value === "") {
//                     atualizarIcon();
//                 }
//                 filterAnnotations(this.value);
//             });


//         }
//     }

//     return filtrar
// }

// ===================================== // 

// Carrega as anotações existentes do banco de dados e as renderiza
annotation.find({}, function (results) {
    results.forEach(renderAnnotation);
});


document.querySelector('.mudarPosicaoAnnotation').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar-menu-Annotation');

    if (sidebar.classList.contains('left')) {
        sidebar.classList.remove('left');
        sidebar.classList.add('right');
    } else {
        sidebar.classList.remove('right');
        sidebar.classList.add('left');
    }

    // Atualizar a lógica de clique fora ao mudar a posição
    document.addEventListener('click', function (evento) {
        if (sidebar.classList.contains('open-annotation') && !sidebar.contains(evento.target) && evento.target !== document.querySelector('.openAnnotation')) {
            // filtrarTitulo().destroy();
            fecharMenuAnotacoes();
        }
    });
});

const title_rb = document.querySelector('.rb');

if (title_rb) {
    let limiteCaracteres = 21; // Limite de caracteres
    const teclasPermitidas = [8, 46, 37, 38, 39, 40]; // Backspace, Delete e setas de navegação

    // Evento keydown para bloquear novas entradas
    title_rb.addEventListener('keydown', function (event) {
        const tamanhoDoTexto = title_rb.innerText.length; // Pega o tamanho do texto atualizado

        // Se o texto for igual ou maior que o limite, bloquear todas as teclas exceto backspace, delete e setas
        if (tamanhoDoTexto >= limiteCaracteres && !teclasPermitidas.includes(event.keyCode)) {
            event.preventDefault(); // Bloqueia todas as outras teclas
        }
    });

    // Evento input para monitorar o texto em tempo real
    title_rb.addEventListener('input', function (event) {
        const tamanhoDoTexto = event.target.innerText.length; // Pega o tamanho do texto

        // Verifica o número de caracteres e alerta se o limite for atingido
        if (tamanhoDoTexto >= limiteCaracteres) {
            console.log("Limite de caracteres atingido: " + tamanhoDoTexto);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    Update();
    checkEmptyAnnotationsContainer();
});