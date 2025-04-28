// Função para configurar o modal dinamicamente ao clicar no botão
function vizioonModal(titulo, conteudoHtml, botoes = [], seletorClick = null, configModal = ["modal-dialog"], animationSelectors = [], ativarModalSemButton = false) {
    if (ativarModalSemButton) {
        renderizarModal(titulo, conteudoHtml, botoes, configModal, animationSelectors);
    } else {
        if (seletorClick) {
            const clickElement = document.querySelector(seletorClick);
            if (clickElement) {
                clickElement.addEventListener('click', () => {
                    renderizarModal(titulo, conteudoHtml, botoes, configModal, animationSelectors);
                });
            } else {
                console.warn(`Elemento com o seletor "${seletorClick}" não encontrado.`);
            }
        }
    }
}

function renderizarModal(titulo, conteudoHtml, botoes = [], configModal = ["modal-dialog"], animationSelectors = []) {
    // Define o título do modal
    const modalTitle = document.querySelector('#vizioonModal .vizioonModal-title');
    if (modalTitle) {
        let botaoTituloHtml = '';
        if (botoes.title) {
            botoes.title.forEach(({ label, classe, acao }) => {
                botaoTituloHtml += `<button class="${classe}" onclick="${acao}">${label}</button>`;
            });
        }

        // Verifica se o título é válido
        if (titulo && titulo !== "") {
            modalTitle.innerHTML = `
                <div class="d-flex gap-2 align-items-center">
                    ${botaoTituloHtml}
                    <span>${titulo}</span>
                </div>
            `;
        } else {
            // Se o título for vazio ou false, limpa o título
            modalTitle.innerHTML = '';
        }

    } else {
        console.error("Elemento .vizioonModal-title não encontrado.");
    }

    // Define o conteúdo HTML do corpo do modal
    const modalBody = document.querySelector('#vizioonModal .vizioonModal-body');
    if (modalBody) {
        modalBody.innerHTML = conteudoHtml;
    } else {
        console.error("Elemento .vizioonModal-body não encontrado.");
    }

    // Insere os botões no rodapé
    const modalFooter = document.querySelector('#vizioonModal .modal-footer');
    if (modalFooter) {
        // Se o rodapé for `false`, não insere nenhum botão
        if (botoes.footer === false) {
            modalFooter.innerHTML = '';
        } 
        // Se o rodapé for vazio ou não definido, insere o botão padrão
        else if (!botoes.footer || botoes.footer.length === 0) {
            modalFooter.innerHTML = `<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>`;
        } 
        // Caso contrário, insere os botões fornecidos
        else {
            let botaoFooterHtml = '';
            botoes.footer.forEach(({ label, classe, acao }) => {
                botaoFooterHtml += `<button class="${classe}" onclick="${acao}">${label}</button>`;
            });
            modalFooter.innerHTML = botaoFooterHtml;
        }
    } else {
        console.error("Elemento .modal-footer não encontrado.");
    }

    // Configura o tamanho do modal
    const modalDialog = document.querySelector('#vizioonModal .modal-dialog');
    if (modalDialog) {
        modalDialog.className = "modal-dialog"; // Remove todas as classes anteriores
        modalDialog.classList.add(...configModal);
    }

    // Reinicia as animações para os elementos especificados
    animationSelectors.forEach(({ _class, _animation }) => {
        const animatedElement = document.querySelector(_class);
        if (animatedElement) {
            _animation.split(" ").forEach(animClass => animatedElement.classList.remove(animClass));
            void animatedElement.offsetWidth; // Força o reflow
            _animation.split(" ").forEach(animClass => animatedElement.classList.add(animClass));
        }
    });

    // Inicializa e exibe o modal
    const vizioonModal = new bootstrap.Modal(document.getElementById('vizioonModal'));
    vizioonModal.show();
}


// document.addEventListener("DOMContentLoaded", () => {
//     vizioonModal(
//         "Configuração de Modal",
//         "<p>Este é um exemplo de modal com botões dinâmicos no título e no rodapé.</p>",
//         {
//             title: [
//                 { label: "🔵", classe: "btn btn-outline-primary", acao: "alert('Botão no título clicado!')" },
//                 { label: "🟢", classe: "btn btn-outline-success", acao: "alert('Outro botão no título clicado!')" }
//             ],
//             footer: [
//                 { label: "Salvar", classe: "btn btn-success", acao: "alert('Salvo com sucesso!')" },
//                 { label: "Excluir", classe: "btn btn-danger", acao: "alert('Excluído!')" }
//             ]
//         },
//         "#botaoAbrirModal", // Seletor do botão que ativa o modal,
//         [],
//         [],
//         true
//     );
// });

