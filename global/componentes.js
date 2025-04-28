



async function openQuestionEva(elemento) {

    const configuracaoData = await global__Config();
    const config = configuracaoData.ceumaAI
    // console.log(config)
    const { contexto } = __configuracoesServidor__.disciplina
    const btn = document.querySelector(".resumo__eva_button____lista");

    const container = document.querySelector(elemento);
    // console.log(container.innerText)
    // Chama a função que gera o resumo
    resumoAI(container.innerText, contexto, "Explique cada item dessa lista de forma enumerada", "Estudante Leigo", 10, "2 linha", null, null, false).then(resumo => {

        container.innerHTML = ``;
        soundBipe();
        container.innerHTML = marked.parse(`${resumo}`);

    });

    container.innerHTML = `<div id="loading-resumo" style="display: block;"></div>`

}

async function openQuestionSingEva(elemento) {

    const configuracaoData = await global__Config();
    const config = configuracaoData.ceumaAI
    // console.log(config)
    const { contexto } = __configuracoesServidor__.disciplina

    const btnVoltar = document.querySelector(".voltar__eva_button____lista");
    const texto = elemento.innerText;
    const container = elemento.parentElement.parentElement;
    const refContainerContentOld = container.innerHTML;


    container.innerHTML = texto;

    if (btnVoltar.classList.contains("d-none")) {
        btnVoltar.classList.remove("d-none");
        btnVoltar.classList.add("d-block");
    }

    btnVoltar.addEventListener("click", function (event) {

        container.innerHTML = refContainerContentOld;
        btnVoltar.classList.add("d-none");
    });

    container.innerHTML = `<div id="loading-resumo" style="display: block;"></div>`;

    resumoAI(texto, contexto, "Explique esse item de forma clara.", "Estudante Leigo", 10, "2 linha", null, null, false).then(resumo => {

        container.innerHTML = ``;
        soundBipe();
        container.innerHTML = `
                    <div class="row justify-content-center gap-3 animationTesseract ">

                            ${resumo ?
                `
                                         ${marked.parse(resumo)}
                                        
                `
                :

                `
                                            <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading">Sobre ${reduzirTexto(texto, 10, 10)} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" class="lucide lucide-sparkles">
                                                        <path
                                                            d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                                        <path d="M20 3v4" />
                                                        <path d="M22 5h-4" />
                                                        <path d="M4 17v2" />
                                                        <path d="M5 18H3" /></svg>
                                                </h4>
                                                <p> Opa, aguarde alguns minutos. Se estiver tendo problemas, entre em contato com <a href='#'>@suporte.cead@ceuma.br </a> 😉. <code>Servidor Indisponível</code> </p>
                                                <hr>
                                                <div class="d-flex flex-column align-items-center justify-content-center"
                                                    style="padding:0.3rem;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="lucide lucide-brain-circuit">
                                                        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                                        <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                                                        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                                        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                                        <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                                        <path d="M12 13h4" />
                                                        <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                                                        <path d="M12 8h8" />
                                                        <path d="M16 8V5a2 2 0 0 1 2-2" />
                                                        <circle cx="16" cy="13" r=".5" />
                                                        <circle cx="18" cy="3" r=".5" />
                                                        <circle cx="20" cy="21" r=".5" />
                                                        <circle cx="20" cy="8" r=".5" /></svg>
                                                    <p style="font-size:0.8rem;">As informações são geradas por inteligência artificial. Algumas respostas podem ser
                                                        incorretas ou inadequadas.</p>
                                                    
                                                </div>
                                            </div>
                                        
                                    `
            }
                                    
                    </div>
        `


    });

}

async function abrirResumoEva(elemento) {
    // abrirResumo()
    const configuracaoData = await global__Config();
    const config = configuracaoData.ceumaAI
    // console.log(config)
    const { contexto } = __configuracoesServidor__.disciplina


    try {
        // console.log(event)
        // typeof event !== "undefined" ? event.stopPropagation() : undefined;

        const modalBody = document.querySelector('#vizioonModal .vizioonModal-body');
        if (!modalBody) {
            console.error('Modal body não encontrado');
            return;
        }

        // console.log(document.querySelector(".vizioonModal-body"))

        const modalBodyVizioon = document.querySelector(".vizioonModal-body")
        // console.log(modalBodyVizioon.innerText);

        // Chama a função que gera o resumo
        resumoAI(modalBodyVizioon.innerText, contexto, "Faça esse Resumo bem siplificadinho pra uma pessoa leiga", "Estudante Leigo", 10, "1 linha").then(resumo => {
            const containerFlip = document.querySelector("#flip-container");
            // console.log(resumo)
            // Verifica se o container está mostrando o histórico (flipado)
            if (containerFlip.classList.contains('flip-active')) {
                // Se estiver no histórico, removemos o flip para voltar ao resumo
                containerFlip.classList.remove('flip-active');
            }

            // Processa o resumo e o exibe
            soundBipe();
            // console.log('Resumo retornado:', resumo);

            // Após gerar o resumo, você pode processar o resumo e exibir na tela
        });

        const verificarAberturaResumo = document.querySelector(".resumo-menu");

        // Verifica se o resumo está aberto ou não
        if (verificarAberturaResumo.classList.contains("open")) {
            // O menu já está aberto, então não precisamos fechá-lo, apenas atualizar
            // console.log("O menu de resumo já está aberto.");
        } else {
            // O menu está fechado, então fechamos e reabrimos para garantir atualização
            fecharResumo(); // Fecha o resumo, caso esteja parcialmente aberto
            abrirResumo(); // Reabre o menu de resumo
        }

        // Fecha o modal
        const modal = document.getElementById('vizioonModal');
        if (modal) {
            // Se você estiver usando Bootstrap
            if (typeof bootstrap !== 'undefined') {
                const bsModal = bootstrap.Modal.getInstance(modal);
                if (bsModal) {
                    bsModal.hide();
                }
            } else {
                // Fechamento manual do modal
                modal.style.display = 'none';
                // Remove a classe que mostra o backdrop (fundo escuro)
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
                // Remove o backdrop se existir
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.remove();
                }
            }
        }



    } catch (error) {
        console.error('Erro ao enviar anotação:', error);
    }

}

// Função para adicionar animação e alternar visibilidade de elementos
function adicionarAnimation(_elementoID, _classAnimation = [], OcultarElemento, itemsOcultar = []) {
    // Obter o botão de controle e o elemento alvo para mostrar/ocultar
    const elementoToggle = document.querySelector(_elementoID);
    const elementoParaMostrar = document.querySelector(OcultarElemento);

    // Verificar se os elementos existem
    if (elementoToggle && elementoParaMostrar) {
        // Ocultar o elemento inicialmente
        elementoParaMostrar.classList.add("d-none");

        // Adicionar evento de clique
        elementoToggle.addEventListener("click", () => {
            // Iterar sobre os itens a ocultar
            itemsOcultar.forEach(selector => {
                const elementoParaOcultar = document.querySelector(selector);
                if (elementoParaOcultar) {
                    elementoParaOcultar.classList.add("d-none");
                    elementoParaOcultar.classList.remove("d-block");
                }
            });

            // Alternar visibilidade do elemento atual
            elementoParaMostrar.classList.toggle("d-none");
            elementoParaMostrar.classList.toggle("d-block");

            // Adicionar classes de animação ao elemento atual
            _classAnimation.forEach(animation => {
                elementoParaMostrar.classList.add(...animation._class.split(" "));
            });
        });
    }
}

// Configura os modais ao clicar nos botões específicos
document.addEventListener("DOMContentLoaded", function () {


    // vizioonModal(
    //     `<div class="d-flex  align-items-center gap-2"><p class="d-flex message-box-info rounded align-items-center p-2 gap-2 warnAnimation">Soros policlonais <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg></p></div>`,
    //     `
    //         <div class="card">
    //             <div class="card-body">
    //                 <p class="card-text">Contêm uma grande variedade de anticorpos diferentes para o mesmo antígeno. São geralmente obtidos a partir de animais previamente imunizados com o antígeno de interesse. Podem ser homólogos, quando produzidos e utilizados pela mesma espécie, ou heterólogos, quando produzidos em uma espécie e utilizados em outra.</p>
    //             </div>
    //         </div>
    //     `,
    //     null,
    //     ".Sorospoliclonais",
    //     [],
    //     [
    //         {
    //             _class: ".warnAnimation",
    //             _animation: "animate__animated animate__fadeIn"
    //         }
    //     ],
    //     false
    // );

    // vizioonModal(
    //     `<div class="d-flex  align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Soros monoclonais <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg></p></div>`,
    //     `
    //         <div class="card">
    //             <div class="card-body">
    //                 <p class="card-text">Derivam de um único clone de células produtoras de anticorpos e são específicos para um único epítopo do antígeno. São preferíveis em muitas aplicações de pesquisa, diagnóstico e terapêutica devido à sua alta especificidade e pureza.</p>
    //             </div>
    //         </div>
    //     `,
    //     null,
    //     ".Sorosmonoclonais",
    //     [],
    //     [
    //         {
    //             _class: ".warnAnimation",
    //             _animation: "animate__animated animate__fadeIn"
    //         }
    //     ],
    //     false
    // );

    // vizioonModal(
    //     `<div class="d-flex  align-items-center gap-2"><p class="d-flex message-box-info rounded align-items-center p-2 gap-2 warnAnimation">Sensibilidade (S) <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg></p></div>`,
    //     `
    //         <div class="card">
    //             <div class="card-body">
    //                     <p class="card-text">
    //                         Calculada como a proporção de verdadeiros positivos sobre o total de doentes (S = VP / (VP + FN)).
    //                     </p>
    //                 </div>
    //         </div>
    //     `,
    //     null,
    //     ".Sensibilidadeasp23odsdjsndp",
    //     [],
    //     [
    //         {
    //             _class: ".warnAnimation",
    //             _animation: "animate__animated animate__fadeIn"
    //         }
    //     ],
    //     false
    // );

    // vizioonModal(
    //     `<div class="d-flex  align-items-center gap-2"><p class="d-flex message-box-success rounded align-items-center p-2 gap-2 warnAnimation">Especificidade (E) <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg></p></div>`,
    //     `
    //         <div class="card">
    //              <div class="card-body">
    //                     <p class="card-text">
    //                         Calculada como a proporção de verdadeiros negativos sobre o total de não-doentes (E = VN / (FP + VN)).
    //                     </p>
    //                 </div>
    //         </div>
    //     `,
    //     null,
    //     ".Especificidade23098aslk2wzx",
    //     [],
    //     [
    //         {
    //             _class: ".warnAnimation",
    //             _animation: "animate__animated animate__fadeIn"
    //         }
    //     ],
    //     false
    // );

    // vizioonModal(
    //     `<div class="d-flex  align-items-center gap-2"><p class="d-flex message-box-info rounded align-items-center p-2 gap-2 warnAnimation">Aglutinação Direta <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg></p></div>`,
    //     `
    //         <div class="card">
    //              <div class="card-body">
    //                     <p class="card-text">
    //                         Utilizada para a classificação sanguínea e hemaglutinação direta. Um exemplo clássico de aglutinação direta é o teste de tipagem sanguínea (ou teste de hemaglutinação direta).
    //                 Veja na imagem ao lado a representação esquemática de reação de aglutinação direta.
    //                     </p>
    //                 </div>
    //         </div>
    //     `,
    //     null,
    //     ".AglutinacaoDireta23098aslk2wzx",
    //     [],
    //     [
    //         {
    //             _class: ".warnAnimation",
    //             _animation: "animate__animated animate__fadeIn"
    //         }
    //     ],
    //     false
    // );

    // vizioonModal(
    //     `<div class="d-flex  align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Aglutinação Indireta <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg></p></div>`,
    //     `
    //         <div class="card">
    //              <div class="card-body">
    //                     <p class="card-text">
    //                    Envolve a fixação de anticorpos ou antígenos a uma célula ou partícula inerte.
    //                 Exemplos incluem sorologia para anticorpos anti-Treponema pallidum e Toxoplasma gondii. É teste usado com partículas de látex para detectar a proteína C reativa, fator reumatoide e anti-estreptolisina O (ASO).
    //                 Veja na imagem ao lado a representação esquemática de reação de aglutinação direta.
    //                     </p>
    //                 </div>
    //         </div>
    //     `,
    //     null,
    //     ".AglutinacaoIndireta23098aslk2wzx",
    //     [],
    //     [
    //         {
    //             _class: ".warnAnimation",
    //             _animation: "animate__animated animate__fadeIn"
    //         }
    //     ],
    //     false
    // );







    // vizioonModal(
    //     `<div class="d-flex  align-items-center gap-2"><button type="button" class="d-none btn btn-success voltar__eva_button____lista " ><svg xmlns="http://www.w3.org/2000/svg" style="width:30px;height:30px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg></button><p class="d-flex message-box-warn align-items-center p-2 gap-2 warnAnimation">Ingredientes <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></p></div>`,
    //     `   
    //     <div class="container d-flex flex-column justify-content-center align-items-center">

    //         <div class="row text-center justify-content-center gap-3 animationIngredientes">

    //             <div class="col-6 col-md-4 col-lg-2 info-item nome-imagem"  onclick="openQuestionSingEva(this)" data-tippy-content="Ferro heme" >ALBUMINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">MERENGUE</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">OVOALBUMINA</div> 
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">CONALBUMINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">MAIONESE</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">OVOTRANSFERRINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">GLOBULINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">SÓLIDOS DE OVOS</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">FLAVOPROTEÍNA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">OVOMUCINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">FOSVITINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">OVOGLOBULINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">LIPOPROTEÍNA DE BAIXA DENSIDADE</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">PLASMA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">LISOZIMA</div>
    //         </div>
    //     </div>
    //     `,
    //     ``, // <button type="button" class="btn btn-success text-light resumo__eva_button____lista d-flex align-items-center" onclick="openQuestionEva('.animationIngredientes')">Gera Resumo da Lista com Eva <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></button>
    //     ".buttonIngredientes",
    //     ["modal-fullscreen"],
    //     [
    //         {
    //             _class: ".animationIngredientes",
    //             _animation: "animate__animated animate__backInDown"
    //         },
    //         {
    //             _class: ".warnAnimation",
    //             _animation: "animate__animated animate__flash animate__infinite animate__slow"
    //         },
    //     ],
    //     false
    // );










});


