// Função global para parar o áudio
function pararOuvinte() {
    // Cancela qualquer síntese de voz em andamento
    if (window.speechSynthesis && (window.speechSynthesis.speaking || window.speechSynthesis.pending)) {
        window.speechSynthesis.cancel();
    }

    // Adicionar um pequeno intervalo para garantir que o `speechSynthesis` seja reinicializado
    const tentativaCancelamento = setInterval(() => {
        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
            console.warn("Tentando novamente cancelar o áudio...");
            window.speechSynthesis.cancel();
        } else {
            clearInterval(tentativaCancelamento); // Interrompe a verificação quando o áudio é cancelado
        }
    }, 100);

    // Redefine o botão de play
    const playBtn = $('.playOuvint-btn');
    if (playBtn.length) {
        playBtn.html('<i class="bi bi-play-fill"></i>')
            .removeClass('btn-warning')
            .addClass('btn-success');
    }

    // Esconde o indicador de carregamento
    $('.loading-voz').hide();

    // Remove os destaques do texto
    $('.leitor-tela').each(function () {
        $(this).contents().unwrap();
    });

    // console.log("Áudio interrompido e interface redefinida.");
}

async function verificarEstadoLeitor() {
    try {
        // Buscar as configurações mais recentes no banco de dados
        const bancoDadosConfiguracoes = await __configuracoesDb__.buscarPorId(1);
        // console.log(bancoDadosConfiguracoes.leitorTela);
        return bancoDadosConfiguracoes?.leitorTela ?? false;
    } catch (error) {
        console.error("Erro ao verificar estado do leitor:", error);
        return false;
    }
}

// Ferramentas de Audio dentro da modal
async function ferramentasModaAudio(languages = {}) {

    return `
            <div class="text-center d-flex justify-content-end gap-2 mt-3">
                <span class="loading-voz" style="display: none;"></span>
            </div>
            <div class="container-ferramenta-ouvinte">
                <button class="btn btn-success playOuvint-btn"><i class="bi bi-play-fill"></i></button>
                <button class="btn btn-danger stopOuvint-btn"><i class="bi bi-stop-fill"></i></button>
                <button class="btn btn-primary openDownload-btn d-flex justify-content-center align-items-center"><i
                        class="bi bi-download"></i></button>
            </div>
            <style>
                .preview-section {
                    border: 2px solid #f1f1f1;
                    border-radius: 12px;
                    padding: .5rem;
                    background-color: #f9fafc;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .preview-section[open] {
                    border-color: #a6dcef;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                }

                /* Estilo para o sumário */
                .preview-summary {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 18px;
                    font-weight: 600;
                    color: #333;
                    // padding-bottom: 10px;
                }

                .preview-title {
                    color: #0056b3;
                    font-size: 20px;
                }

                .preview-attempts {
                    background-color: #f1f3f4;
                    border-radius: 8px;
                    padding: 5px 10px;
                    font-size: 14px;
                    color: #444;
                }

                .attempts-counter {
                    font-weight: bold;
                    color: #e63946;
                }

                /* Estilo dos botões */
                .preview-controls {
                    display: flex;
                    gap: 10px;
                }

                .btn {
                    padding: 8px 16px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                    cursor: pointer;
                    border: none;
                }

                .btn-play {
                    font-size: 16px !important;
                    background-color: #f15f0e;
                    font-weight: 100;
                    color: white;
                }

                .btn-play:hover {
                    background-color: #f15f0e;
                    transform: scale(1.05);
                }

                .btn-pause {
                    font-size: 16px !important;
                    font-weight: 100;
                    background-color: #dc3545;
                    color: white;
                }

                .btn-pause:hover {
                    background-color: #c82333;
                    transform: scale(1.05);
                }

                /* Animação de abrir e fechar o <details> */
                details[open] .preview-controls {
                    opacity: 1;
                    max-height: 100px;
                    transition: opacity 0.5s ease, max-height 0.5s ease;
                }

                details .preview-controls {
                    opacity: 0;
                    max-height: 0;
                    transition: opacity 0.5s ease, max-height 0.5s ease;
                }
            </style>

            <div class="accordion mt-2 d-none configuracaoAccordionOuvinte" id="configuracao-ouvinte">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button d-flex flex-row gap-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Configurações de Áudio para download <i class="bi bi-soundwave"></i>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#configuracao-ouvinte">
                        <div class="accordion-body">

                            <div class="row w-100 mb-3">
                                <div class="col-md-6">
                                    <label for="voice-select">Selecione a voz:</label>
                                    <select id="voice-select" class="form-control changerVoice"></select>
                                </div>

                                <div class="col-md-6">
                                    <label for="language-select">Selecione o idioma:</label>
                                    <select id="language-select" class="form-control">
                                        ${Object.keys(languages).map(langCode => `<option value="${langCode}">
                                            ${languages[langCode].name}</option>`).join('')}
                                    </select>
                                </div>
                            
                            </div>

                            <div class="row w-100 mb-3">
                                <div class="col-md-6">
                                    <label for="speed-range">Velocidade (0 a 10):</label>
                                    <input type="range" class="form-range" id="speed-range" min="-10" max="10" value="0">
                                </div>

                           

                                <div class="col-md-6">
                                    <label for="pitch-range">Tom (grave/fino): <span class="text-danger">Indisponível</span></label>
                                    <input type="range" class="form-range" id="pitch-range" min="0.5" max="2" step="0.1" value="1">
                                </div>

                            </div>

                            

                            <div class="row">
                                        
                                <div class="col-md-12">
                                        <details class="preview-section mb-3 open">
                                            <summary class="preview-summary">
                                                <div class="preview-controls">
                                                    <button id="btnPlayPrevizualizar" class="btn btn-play">Pré-visualizar</button>
                                                    <button id="btnPausePrevizualizar" class="btn btn-pause align-items-center gap-3"
                                                        style="display:none;">Parar <div class="loader-speech"></div></button>
                                                </div>
                                                <!-- <span class="preview-title">Pré-visualizar</span> -->
                                                <span class="preview-attempts">Pré-visualizações : <span
                                                        class="attempts-counter border-danger">0/3</span></span>
                                            </summary>

                                        </details>
                                </div>
                                
                                <div class="col-md-12 d-flex justify-content-end gap-2">
                                
                                    <!-- Logs da Operação -->
                                    <div class="mb-3 d-none w-100">
                                        <textarea class="Texto-download form-control" style="resize:none;" rows="2" disabled
                                            placeholder="Logs de operação"></textarea>
                                    </div>
                                    
                                    <button id="button-Dowload-Ouvinte" class="btn btn-success download-btn d-flex align-items-center gap-2 justify-content-center">Baixar Áudio</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
    `
}

// baixar ouvinte e previzualizar
async function previzualizarAudioOuvinte(modalOuvinte, languages = {}, tokens = [], textoOuvinte = "", events = {}, configuracoesSlider = {}, configuracoesOuvinte = {}, indexContainerAtual = 0) {

    const eventosAccordions = events
    const { abrirAccordion, fecharAccordion } = eventosAccordions

    const configuracaoOuvinte = configuracoesOuvinte
    const { leitor } = configuracaoOuvinte

    // Buscar dados existentes
    const bancoDadosConfiguracoes = await __configuracoesDb__.buscarPorId(1);;
    // console.log(bancoDadosConfiguracoes)

    // const leitorAtivo = bancoDadosConfiguracoes?.leitorTela ?? leitor;
    const leitorAtivo = await verificarEstadoLeitor() ?? leitor;

    // ========================================== | Previzualizar Áudio | ========================================= //

    const maxTentativas = 2; // Limite máximo de tentativas
    const tentativasSpan = document.querySelector(".attempts-counter"); // Elemento que exibe as tentativas
    const containerTentativas = document.querySelector(".preview-controls"); // Container para exibir o relógio
    const previewSection = document.querySelector(".preview-section");
    let tentativas = 0; // Variável para controlar o número de tentativas
    const playBtnPrevizualizar = document.getElementById("btnPlayPrevizualizar");
    const pauseBtnPrevizualizar = document.getElementById("btnPausePrevizualizar");
    const loaderSpeech = document.getElementById("loader-speech");
    let audioOuvinte = null;  // Variável global para armazenar a instância atual do áudio
    let audioBlobUrl = null;  // Variável para armazenar o URL do blob atual
    let audioGerado = false;  // Variável para verificar se o áudio já foi gerado
    previewSection.setAttribute('open', true)
    const logPre = modalOuvinte.querySelector(".Texto-download");
    // Tempo de expiração do chave cookie para reinicar tentativas api
    const expiracaoChaveCookie = 60

    function habilitarMinimizarModalOuvinte() {
        $(".btn-minimizar-modal-ouvinte").removeClass("d-none"); // Remove a classe que oculta o botão
    }

    function desabilitarMinimizarModalOuvinte() {
        $(".btn-minimizar-modal-ouvinte").addClass("d-none"); // Adiciona a classe para ocultar o botão
    }

    // Função para verificar e atualizar as tentativas
    function verificarTentativas() {
        tentativas = getCookie("tentativasAudio");
        tentativas = tentativas ? parseInt(tentativas) : 0; // Se não existir, começa com 0
        tentativasSpan.textContent = `${tentativas}/${maxTentativas}`; // Atualiza o contador na UI

        // Se já alcançou o limite de tentativas, desabilita o botão Play
        if (tentativas >= maxTentativas) {
            const expiracao = getCookie("expiracaoAudio");
            if (expiracao) {
                iniciarRelogio(new Date(expiracao));
            } else {
                const novaExpiracao = new Date();
                novaExpiracao.setTime(novaExpiracao.getTime() + expiracaoChaveCookie * 60 * 1000); // 30 minutos
                setCookie("expiracaoAudio", novaExpiracao.toUTCString(), expiracaoChaveCookie);
                iniciarRelogio(novaExpiracao);
            }

        }
    }

    // Função para incrementar as tentativas
    function incrementarTentativas() {
        tentativas++;
        setCookie("tentativasAudio", tentativas, 30); // Expira em 30 minutos
        tentativasSpan.textContent = ` ${tentativas}/${maxTentativas}`;
    }

    // Função para iniciar o relógio de contagem regressiva
    function iniciarRelogio(dataExpiracao) {
        const intervalo = setInterval(() => {
            const agora = new Date().getTime();
            const distancia = new Date(dataExpiracao).getTime() - agora;

            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
            if (audioOuvinte) {
                audioOuvinte.pause();
            }

            containerTentativas.innerHTML = `
                <div class="relogio-container" style="display: flex; align-items: center; gap: 10px;">
                    <img src="https://img.icons8.com/ios-filled/50/000000/hourglass--v1.png" alt="Relógio ícone" style="width: 30px; height: 30px;">
                    <div style="font-size: 14px; font-weight: bold;">
                            Tente Novamente em <span style="color: red;">${minutos}m ${segundos}s</span>
                    </div>
                </div>
            `;

            // Se o tempo acabar, permite novas tentativas
            if (distancia < 0) {
                clearInterval(intervalo);
                deleteCookie("tentativasAudio");
                deleteCookie("expiracaoAudio");
                containerTentativas.innerHTML = "Acesso liberado recarregue a página!";
                tentativasSpan.textContent = `Tentativas 0/${maxTentativas}`;
                playBtnPrevizualizar.disabled = false; // Reabilita o botão "Play"
                verificarTentativas();
            }
        }, 1000);
    }

    // Chama a função ao carregar a página para verificar as tentativas atuais
    verificarTentativas();

    let velocidadeAtual = document.getElementById("speed-range").value;
    let tomAtual = document.getElementById("pitch-range").value;
    let langCodeAtual = document.getElementById("language-select").value;
    let vozAtual = document.getElementById("voice-select").value;

    // Atualiza as variáveis de controle sem regenerar o áudio imediatamente

    document.getElementById("speed-range").addEventListener("change", (e) => {
        velocidadeAtual = e.target.value;
        localStorage.setItem('velocidade', velocidadeAtual); // Salva no localStorage
    });

    document.getElementById("pitch-range").addEventListener("change", (e) => {
        tomAtual = e.target.value;
        localStorage.setItem('tom', tomAtual); // Salva no localStorage
    });

    document.getElementById("language-select").addEventListener("change", (e) => {
        langCodeAtual = e.target.value;
        localStorage.setItem('langCode', langCodeAtual); // Salva no localStorage
        popularVozes(langCodeAtual);
    });

    document.getElementById("voice-select").addEventListener("change", (e) => {
        vozAtual = e.target.value;
        localStorage.setItem('voz', vozAtual); // Salva no localStorage
    });

    // Carrega os valores do localStorage ao iniciar a página
    if (localStorage.getItem('velocidade')) {
        velocidadeAtual = localStorage.getItem('velocidade');
        document.getElementById("speed-range").value = velocidadeAtual;
    }

    if (localStorage.getItem('tom')) {
        tomAtual = localStorage.getItem('tom');
        document.getElementById("pitch-range").value = tomAtual;
    }

    if (localStorage.getItem('langCode')) {
        langCodeAtual = localStorage.getItem('langCode');
        document.getElementById("language-select").value = langCodeAtual;
    }

    if (localStorage.getItem('voz')) {
        vozAtual = localStorage.getItem('voz');
        document.getElementById("voice-select").value = vozAtual;
    }

    let chavePreview = 0; // Começar pela primeira chave
    // Função para sintetizar e gerar o áudio sempre que "Play" é clicado
    function gerarAudio() {

        console.log(textoOuvinte)

        playBtnPrevizualizar.innerHTML = `
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Play
        `;

        sintetizarAudio(tokens[chavePreview], textoOuvinte, velocidadeAtual, tomAtual, langCodeAtual, vozAtual, "")
            .then(blob => {

                // Libera o URL anterior do blob para liberar recursos
                if (audioBlobUrl) {
                    URL.revokeObjectURL(audioBlobUrl);
                }

                audioBlobUrl = URL.createObjectURL(blob);
                audioOuvinte = new Audio(audioBlobUrl); // Define o novo áudio gerado
                audioGerado = true;  // Marca que o áudio foi gerado

                playBtnPrevizualizar.innerHTML = `Pré-visualizar`;

                // Quando o áudio estiver pronto, atualiza a interface
                audioOuvinte.addEventListener("loadeddata", () => {
                    const durationElement = document.querySelector(".time .length");
                    if (durationElement) {
                        durationElement.textContent = getTimeCodeFromNum(audioOuvinte.duration);
                    }
                    audioOuvinte.volume = 0.75;
                });

                // Tocar o áudio gerado
                audioOuvinte.play();

                // Alternar entre os botões "Play" e "Pause"
                playBtnPrevizualizar.style.display = "none";
                pauseBtnPrevizualizar.style.display = "flex";

                // Quando o áudio parar, volta para o botão "Play"
                audioOuvinte.onended = () => {
                    playBtnPrevizualizar.style.display = "inline-block";
                    pauseBtnPrevizualizar.style.display = "none";
                };
            })
            .catch(error => {
                const novaChave = usarOutraChave(chaveAtual);
                if (novaChave) {
                    chavePreview += 1
                    gerarAudio(); // Tentar novamente com outra chave
                }
                console.error("Erro ao gerar o áudio", error);
            });
    }

    // Evento para o botão de "Play"
    playBtnPrevizualizar.addEventListener("click", () => {

        verificarTentativas();
        if (tentativas < maxTentativas) {
            incrementarTentativas(); // Incrementa as tentativas ao clicar em "Play"
            gerarAudio(); // Sempre gera o áudio com os valores atualizados ao clicar em "Play"
        }
    });

    // Evento para o botão de "Pause"
    pauseBtnPrevizualizar.addEventListener("click", () => {
        verificarTentativas();
        if (audioOuvinte) {
            audioOuvinte.pause();
            playBtnPrevizualizar.style.display = "inline-block";
            pauseBtnPrevizualizar.style.display = "none";
        }
    });

    if (!leitorAtivo) {
        // Registrar evento de fechar a modal por fora modalOuvinte

        _modalOuvinte_.on("hide.bs.modal", ({ foiCliqueFora }) => {
            if (foiCliqueFora) {
                // Verificar se audioOuvinte está definido antes de chamar pause()
                if (audioOuvinte && typeof audioOuvinte.pause === "function") {
                    audioOuvinte.pause(); // Pausa o áudio
                } else {
                    console.error("audioOuvinte não está definido ou não é válido.");
                }

                // Atualizar botões
                if (playBtnPrevizualizar && pauseBtnPrevizualizar) {
                    playBtnPrevizualizar.style.display = "inline-block";
                    pauseBtnPrevizualizar.style.display = "none";
                } else {
                    console.warn("Os botões de controle do áudio não foram encontrados.");
                }

                _toastOuvinte_.fechar();
            }
        });

    } else {
        _modalOuvinte_.on("hide.bs.modal", ({ foiCliqueFora }) => {
            if (foiCliqueFora) {
                // Verificar se audioOuvinte está definido antes de chamar pause()
                // console.log(`Leitor ${leitor} Modal Clicada Fora`);
            }
        });
    }

    // Função para alternar entre as chaves de API
    function usarOutraChave(indexAtual) {
        if (indexAtual < tokens.length - 1) {
            return tokens[indexAtual + 1];
        } else {
            return null; // Se não houver mais chaves
        }
    }

    // Função de síntese de voz
    function sintetizarAudio(apiKey, texto, velocidade, tom, langCode, voz, logPre) {
        const apiUrl = `https://api.voicerss.org/`;
        const params = new URLSearchParams({
            key: apiKey,
            src: texto,
            hl: langCode,  // Idioma selecionado
            v: voz,        // Voz selecionada
            r: velocidade,  // Velocidade escolhida
            c: 'MP3',  // Formato do áudio
            f: '44khz_16bit_stereo'  // Qualidade do áudio
        });

        logPre.textContent += `Chave Validada!...\n`;

        return fetch(`${apiUrl}?${params.toString()}`, {
            method: 'GET',
        })
            .then(response => {
                logPre.textContent += `Criando Ponto de Transmissão\n`;

                if (response.ok) {
                    logPre.textContent += `${response.status}\n`;
                    logPre.textContent += 'Áudio gerado com sucesso!\n';
                    return response.blob();
                } else {
                    logPre.textContent += `Erro com a chave ${apiKey}: ${response.statusText}\n`;
                    throw new Error('Erro ao gerar áudio');
                }
            });
    }

    // Adicionar evento ao botão de download e reprodução
    const downloadBtn = modalOuvinte.querySelector(".download-btn");
    downloadBtn.addEventListener('click', function () {

        const velocidade = document.getElementById("speed-range").value;  // Pegar a velocidade
        const tom = document.getElementById("pitch-range").value;  // Pegar o tom
        const langCode = document.getElementById("language-select").value;  // Pegar o idioma
        const voz = document.getElementById("voice-select").value;  // Pegar a voz
        const sppinnerButton = document.querySelector(".download-btn");

        // sppinnerButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`
        // sppinnerButton.innerHTML = `Sucesso <i class="bi bi-check-circle"></i>`

        sppinnerButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`
        logPre.textContent = ''; // Limpar logs anteriores
        let chaveAtual = 0; // Começar pela primeira chave

        // console.log(configuracoesSlider)
        function tentarProximaChave() {
            sintetizarAudio(tokens[chaveAtual], textoOuvinte, velocidade, tom, langCode, voz, logPre)
                .then(blob => {
                    sppinnerButton.innerHTML = `Sucesso <i class="bi bi-check-circle"></i>`
                    const url = URL.createObjectURL(blob);
                    // Criar link para baixar o arquivo de áudio
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `${configuracoesSlider.nome_page}.mp3`;
                    link.click();

                })
                .catch(error => {
                    logPre.textContent += `Erro: ${error.message}\n`;
                    chaveAtual += 1;
                    const novaChave = usarOutraChave(chaveAtual);
                    if (novaChave) {
                        logPre.textContent += `Tentando com a próxima chave...\n`;
                        tentarProximaChave(); // Tentar novamente com outra chave
                    } else {
                        logPre.textContent += 'Todas as chaves falharam.\n';
                    }
                });
        }

        tentarProximaChave(); // Iniciar a tentativa com a primeira chave



    })

}

// eventos de disparo dos botões principais
async function playAudioEPauseModalAudio(modalOuvinte, events = {}, textoOuvinte, configuracoesSlider = {}, classContainer, configuracoesOuvinte = {}, indexContainerAtual = 0) {
    // console.log(textoOuvinte)
    // console.log(classContainer)
    // console.log(configuracoesOuvinte)
    // console.log(indexContainerAtual)

    const config = await global__Config();
    // console.log(config)
    const { voiceSSR } = config;
    // console.log(voiceSSR.tagsOuvinte.elementosPermitidos)

    // Buscar dados existentes
    const bancoDadosConfiguracoes = await __configuracoesDb__.buscarPorId(1);;
    // console.log(bancoDadosConfiguracoes)


    _toastOuvinte_.recriar();

    const configuracaoOuvinte = configuracoesOuvinte
    const { leitor } = configuracaoOuvinte

    const leitorAtivo = await verificarEstadoLeitor() ?? leitor;
    // const leitorAtivo = bancoDadosConfiguracoes?.leitorTela ?? leitor;
    // console.log(leitorAtivo)

    // Pegar o container pela classe
    const textoContainer = document.getElementsByClassName(classContainer)[0]; // Obtém o primeiro elemento
    // console.log(textoContainer)
    if (!textoContainer) {
        console.error(`Elemento com a classe ${classContainer} não encontrado.`);
        return;
    }

    // console.log(textoContainer)
    // console.log(textoContainer.querySelectorAll(".pagina-tipo-texto--box-texto"))

    // Variáveis para controle
    let isPlaying = false; // Variável para controlar o estado de reprodução
    let textoAtual = ''; // Texto que está sendo lido
    let textoRestante = ''; // Parte restante do texto após a pausa
    let posicaoAtual = 0; // Posição atual da leitura do texto

    // Função para iniciar a leitura de voz (SpeechSynthesis)
    const loadingVoz = document.querySelector(".loading-voz");

    // Elementos de controle do áudio na ModalOuvinte
    const playBtn = modalOuvinte.querySelector(".playOuvint-btn");
    const stopBtn = modalOuvinte.querySelector(".stopOuvint-btn");

    const eventosAccordions = events
    const { abrirAccordion, fecharAccordion } = eventosAccordions
    // console.log(fecharAccordion)

    // console.log(playBtn)
    // console.log(stopBtn)

    function habilitarMinimizarModalOuvinte() {
        // console.log(leitor);
        if (!leitorAtivo) {
            $(".btn-minimizar-modal-ouvinte").addClass("d-none"); // Adiciona a classe para ocultar o botão
        } else {

            $(".btn-minimizar-modal-ouvinte").removeClass("d-none"); // Remove a classe que oculta o botão
        }
    }

    function desabilitarMinimizarModalOuvinte() {
        $(".btn-minimizar-modal-ouvinte").addClass("d-none"); // Adiciona a classe para ocultar o botão
    }

    function removerLeitor() {
        // Seleciona todos os elementos com a classe 'leitor-tela' dentro do container
        const destaques = textoContainer.querySelectorAll(".leitor-tela");

        // Remove a classe 'leitor-tela' e restaura o texto original
        destaques.forEach((span) => {
            span.outerHTML = span.innerText; // Substitui o elemento <span> pelo seu texto interno
        });
    }

    function lerTextoOuvinte(texto, posicaoInicial = 0) {

        // Mostra o loading enquanto a voz está sendo carregada ou processada
        loadingVoz.style.display = 'block';

        // Verifica se o navegador suporta SpeechSynthesis
        if (!window.speechSynthesis) {
            loadingVoz.style.display = "none";
            alert("Seu navegador não suporta a síntese de voz.");
            return;
        }

        // Configurando a voz padrão (pode ser ajustada conforme desejado) 
        // const voz = window.speechSynthesis.getVoices().find(voice => voice.voiceURI === "Google português do Brasil");
        const voz = window.speechSynthesis.getVoices().find(voice => voice.lang === "pt-Br");

        // Criar a síntese de fala a partir da posição inicial
        const utterance = new SpeechSynthesisUtterance(texto.substring(posicaoInicial));
        utterance.voice = voz || window.speechSynthesis.getVoices()[0];
        utterance.pitch = 1; // Padrão de tom
        utterance.rate = 1;  // Padrão de velocidade

        // se o leitor for true ele vai permitir o audio se guiado pela span aparti do cha-index
        if (leitorAtivo) {
            // Acompanhar o progresso da fala e salvar a posição atual
            // utterance.onboundary = function (event) {
            //     const containerTexto = textoContainer; // O container principal

            //     const paragrafos = containerTexto.querySelectorAll("p"); // Selecionar todos os <p> dentro do container

            //     if (!paragrafos.length) return;

            //     let charCount = 0; // Contador global de caracteres para localizar o parágrafo correto

            //     for (let p of paragrafos) {
            //         const textoOriginal = p.innerText; // Texto original do parágrafo
            //         const palavras = textoOriginal.split(" "); // Divide o texto em palavras

            //         const inicioParagrafo = charCount; // Posição inicial do parágrafo no texto completo
            //         const fimParagrafo = charCount + textoOriginal.length; // Posição final do parágrafo no texto completo

            //         if (event.charIndex >= inicioParagrafo && event.charIndex < fimParagrafo) {
            //             // Índice atual está dentro do parágrafo
            //             const palavraAtualIndex = palavras.findIndex((_, index) => {
            //                 const textoAtéAqui = palavras.slice(0, index + 1).join(" ").length;
            //                 return textoAtéAqui + inicioParagrafo > event.charIndex;
            //             });

            //             // Atualiza o parágrafo com destaque
            //             if (palavraAtualIndex !== -1) {
            //                 p.innerHTML = palavras
            //                     .map((palavra, index) =>
            //                         index === palavraAtualIndex
            //                             ? `<span class="leitor-tela">${palavra}</span>` // Adiciona destaque
            //                             : palavra
            //                     )
            //                     .join(" ");
            //             }
            //         } else {
            //             // Restaura o texto original caso o parágrafo não seja o atual
            //             p.innerHTML = palavras.join(" ");
            //         }

            //         // Incrementa o contador de caracteres com o tamanho do texto atual + espaço
            //         charCount += textoOriginal.length + 1;
            //     }
            // };

            // Acompanhar o progresso da fala e salvar a posição atual
            utterance.onboundary = function (event) {
                const containerTexto = textoContainer; // O container principal
                const paragrafos = Array.from(
                    containerTexto.querySelectorAll(voiceSSR.tagsOuvinte.elementosPermitidosLeitor.join(", "))
                );


                if (!paragrafos.length) return;

                let charCount = 0; // Contador global de caracteres para localizar o parágrafo correto

                for (let p of paragrafos) {
                    const textoOriginal = p.innerText.trim();
                    const palavras = textoOriginal.split(/\s+/); // Divide o texto em palavras

                    const inicioParagrafo = charCount; // Posição inicial do parágrafo no texto completo
                    const fimParagrafo = charCount + textoOriginal.length; // Posição final do parágrafo no texto completo

                    if (event.charIndex >= inicioParagrafo && event.charIndex < fimParagrafo) {
                        // Índice atual está dentro do parágrafo
                        const charRelativo = event.charIndex - inicioParagrafo;

                        // Localiza a palavra diretamente com base no índice de caracteres
                        let acumulado = 0;
                        let palavraAtualIndex = -1;
                        for (let i = 0; i < palavras.length; i++) {
                            acumulado += palavras[i].length + 1; // Inclui o espaço
                            if (acumulado > charRelativo) {
                                palavraAtualIndex = i;
                                break;
                            }
                        }

                        if (palavraAtualIndex !== -1) {
                            // Atualiza o parágrafo com a palavra destacada
                            p.innerHTML = palavras
                                .map((palavra, index) =>
                                    index === palavraAtualIndex
                                        ? `<span class="leitor-tela">${palavra}</span>` // Adiciona destaque
                                        : palavra
                                )
                                .join(" ");
                        }
                    } else {
                        // Restaura o texto original caso o parágrafo não seja o atual
                        p.innerHTML = palavras.join(" ");
                    }

                    // Incrementa o contador de caracteres com o tamanho do texto atual + espaço
                    charCount += textoOriginal.length + 1;
                }
            };


        }


        // Quando a fala terminar, esconde o loading e reseta o botão
        utterance.onend = function () {
            loadingVoz.style.display = 'none';
            isPlaying = false;
            posicaoAtual = 0;
            removerLeitor(); // Remove os destaques
            mudarIconParaPlay();
            mudarIconParaPlayToast();
        };
        // criar um modulo de Erro para analizar a Voz

        utterance.onerror = (event) => {
            // console.log(event)
            // stopAudio();
        }
        // Iniciar a fala
        window.speechSynthesis.speak(utterance);
    }

    function mudarIconParaPlay(button = playBtn) {
        if (button) {
            button.innerHTML = '<i class="bi bi-play-fill"></i>';
            button.classList.remove('btn-warning');
            button.classList.add('btn-success');

            isPlaying = false;
            loadingVoz.style.display = "none"; // Esconde o loading
            desabilitarMinimizarModalOuvinte();
        }

    }

    function mudarIconParaPause(button = playBtn) {
        if (button) {
            button.innerHTML = '<i class="bi bi-pause-fill"></i>';
            button.classList.remove('btn-success');
            button.classList.add('btn-warning');
            isPlaying = true;
            loadingVoz.style.display = "block"; // Esconde o loading
            habilitarMinimizarModalOuvinte();
        }
    }

    // function lerTextoOuvinte(texto, posicaoInicial = 0) {
    //     // Mostra o loading enquanto a voz está sendo carregada ou processada
    //     loadingVoz.style.display = 'block';

    //     // Verifica se o navegador suporta SpeechSynthesis
    //     if (!window.speechSynthesis) {
    //         loadingVoz.style.display = "none";
    //         alert("Seu navegador não suporta a síntese de voz.");
    //         return;
    //     }

    //     // Configurando a voz padrão (pode ser ajustada conforme desejado)
    //     const voz = window.speechSynthesis.getVoices().find(voice => voice.lang === "pt-Br");

    //     // Criar a síntese de fala a partir da posição inicial
    //     const utterance = new SpeechSynthesisUtterance(texto.substring(posicaoInicial));
    //     utterance.voice = voz || window.speechSynthesis.getVoices()[0];
    //     utterance.pitch = 1; // Padrão de tom
    //     utterance.rate = 1;  // Padrão de velocidade

    //     // Acompanhar o progresso da fala e salvar a posição atual
    //     utterance.onboundary = function (event) {
    //         const containerTexto = textoContainer; // O container principal
    //         const paragrafos = containerTexto.querySelectorAll("p"); // Selecionar todos os <p> dentro do container

    //         if (!paragrafos.length) return;

    //         let charCount = 0; // Contador global de caracteres para localizar o parágrafo correto

    //         for (let p of paragrafos) {
    //             const textoOriginal = p.innerText; // Texto original do parágrafo
    //             const palavras = textoOriginal.split(" "); // Divide o texto em palavras

    //             const inicioParagrafo = charCount; // Posição inicial do parágrafo no texto completo
    //             const fimParagrafo = charCount + textoOriginal.length; // Posição final do parágrafo no texto completo

    //             if (event.charIndex >= inicioParagrafo && event.charIndex < fimParagrafo) {
    //                 // Índice atual está dentro do parágrafo
    //                 const palavraAtualIndex = palavras.findIndex((_, index) => {
    //                     const textoAtéAqui = palavras.slice(0, index + 1).join(" ").length;
    //                     return textoAtéAqui + inicioParagrafo > event.charIndex;
    //                 });

    //                 // Atualiza o parágrafo com destaque
    //                 if (palavraAtualIndex !== -1) {
    //                     p.innerHTML = palavras
    //                         .map((palavra, index) =>
    //                             index === palavraAtualIndex
    //                                 ? `<span class="leitor-tela">${palavra}</span>` // Adiciona destaque
    //                                 : palavra
    //                         )
    //                         .join(" ");
    //                 }

    //                 // Atualiza a posição atual para retomar corretamente
    //                 posicaoAtual = event.charIndex;
    //             } else {
    //                 // Restaura o texto original caso o parágrafo não seja o atual
    //                 p.innerHTML = palavras.join(" ");
    //             }

    //             // Incrementa o contador de caracteres com o tamanho do texto atual + espaço
    //             charCount += textoOriginal.length + 1;
    //         }
    //     };

    //     // Quando a fala terminar, esconde o loading e reseta o botão
    //     utterance.onend = function () {
    //         loadingVoz.style.display = 'none';
    //         isPlaying = false;
    //         resetPlayButton(); // Reseta o botão para "Play"
    //         removerLeitor(); // Remove os destaques
    //     };

    //     // Tratar erros na síntese de voz
    //     utterance.onerror = (event) => {
    //         console.error("Erro na síntese de voz:", event);
    //     };

    //     // Iniciar a fala
    //     window.speechSynthesis.speak(utterance);
    // }


    // Função para alternar entre "Play" e "Pause" versão do resumir funcionando de forma adquada
    // playBtn.addEventListener('click', () => {
    //     // se as Configurações do audio Estiverem abertas fechar pra começar a reprodução
    //     fecharAccordion();


    //     if (!isPlaying) {
    //         // Iniciar ou retomar reprodução
    //         lerTextoOuvinte(textoOuvinte, posicaoAtual); // Chama a função para ler o texto
    //         playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>'; // Atualiza ícone para "Pause"
    //         playBtn.classList.remove('btn-success'); // Atualiza cor para "Pause"
    //         playBtn.classList.add('btn-warning');
    //         isPlaying = true;

    //         // Fecha o accordion explicitamente ao iniciar a reprodução
    //         fecharAccordion();

    //     } else {
    //         // Pausar reprodução
    //         window.speechSynthesis.cancel(); // Pausa a síntese de voz
    //         textoRestante = textoOuvinte.substring(posicaoAtual); // Salva o texto restante
    //         playBtn.innerHTML = '<i class="bi bi-play-fill"></i>'; // Atualiza ícone para "Play"
    //         playBtn.classList.remove('btn-warning'); // Atualiza cor para "Play"
    //         playBtn.classList.add('btn-success');
    //         isPlaying = false;
    //         loadingVoz.style.display = "none"; // Esconder o loading
    //         // Fecha o accordion também ao pausar, se necessário
    //         fecharAccordion();
    //     }
    // });



    // Botão "Fechar" (X)
    document.querySelector(".btn-close-ouvinte").addEventListener("click", () => {
        stopAudio();
    });

    // Botão "Play/Pause"
    playBtn.addEventListener("click", () => {
        fecharAccordion(); // Fecha qualquer accordion aberto

        if (!isPlaying) {
            if (window.speechSynthesis.paused) {
                // Retomar a leitura se estiver pausada
                window.speechSynthesis.resume();
            } else {
                // Inicia a leitura ou retoma de onde parou
                lerTextoOuvinte(textoOuvinte, posicaoAtual);
            }

            // Atualiza botão para "Pause"
            mudarIconParaPause();
            mudarIconParaPauseToast();
        } else {
            // Pausar leitura
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.pause();
            }

            // Atualiza botão para "Play"
            mudarIconParaPlay();
            mudarIconParaPlayToast();

        }
    });

    // Botão "Stop"
    stopBtn.addEventListener("click", () => {
        stopAudio();
    });

    _toastOuvinte_.adicionarConteudo(`
        <div class="toast-header border-bottom bg-primary text-white">
        <i class="bi bi-music-note-beamed me-2"></i>
        <strong class="me-auto">Áudio em execução</strong>
    
        <i class="bi bi-arrows-move movimentar-toast cursor-pointer" aria-label="Move"></i>
    
        <button type="button" class="btn-close  btn-close-white btn-close-toast-ouvinte" data-bs-dismiss="toast" aria-label="Close"></button>
         </div>
         <div class="toast-body d-flex gap-3 align-items-center ">
         <div class="btn-group shadow-sm w-100 container-toast-ouvinte">
             <button type="button" class="btn btn-sm" id="togglePlayBtnOuvinteToast">
                 <i class="bi bi-pause-fill"></i>
             </button>
             <button type="button" class="btn btn-sm " id="stopToastBtn">
                 <i class="bi bi-stop-fill"></i>
             </button>
             <button type="button" class="btn " id="refreshToastBtn">
                 <i class="bi bi-arrow-clockwise"></i>
             </button>
         </div>
         </div>
    `);

    // console.log(textoContainer)
    // console.log( document.querySelectorAll(".pagina-tipo-texto--box-texto")[Number(indexContainerAtual - 1)])

    // Seleciona o ícone de movimentação do toast
    const moveButtonToastOuvinte = document.querySelector('.movimentar-toast');

    moveButtonToastOuvinte.addEventListener('click', () => {
        const isMovable = !_toastOuvinte_.movable;

        // Use o seletor completo com ponto (.) no início
        _toastOuvinte_.moverToast(isMovable, {
            container: 'pagina-tipo-texto--box-texto',
            index: Number(indexContainerAtual - 1)
        });

        const toastHeader = moveButtonToastOuvinte.closest('.toast-header');

        if (isMovable) {
            moveButtonToastOuvinte.classList.replace('bi-arrows-move', 'bi-arrows-angle-contract');
            moveButtonToastOuvinte.style.cursor = 'grabbing';
            toastHeader.classList.add('cursor-grabbing');
        } else {
            moveButtonToastOuvinte.classList.replace('bi-arrows-angle-contract', 'bi-arrows-move');
            moveButtonToastOuvinte.style.cursor = 'pointer';
            toastHeader.classList.remove('cursor-grabbing');
        }
    });

    const togglePlayBtn = document.getElementById('togglePlayBtnOuvinteToast');
    const stopToastBtn = document.getElementById('stopToastBtn');
    const refreshToastBtn = document.getElementById('refreshToastBtn');
    const icon = togglePlayBtn.querySelector('i');

    function mudarIconParaPlayToast() {
        icon.classList.remove('bi-pause-fill');
        icon.classList.add('bi-play-fill');
    }

    function mudarIconParaPauseToast() {
        // Atualizar o ícone para "Pause"
        icon.classList.remove('bi-play-fill');
        icon.classList.add('bi-pause-fill');
    }

    // Função para parar o áudio e atualizar o estado
    window.stopAudio = function () {
        // Cancela a fala atual
        window.speechSynthesis.cancel();

        // Adicionar um pequeno atraso para garantir que o `speechSynthesis` seja reinicializado
        setTimeout(() => {
            if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
                console.warn("Tentando novamente cancelar o áudio...");
                window.speechSynthesis.cancel();
            }
        }, 100);

        // Resetar estados internos e visuais
        removerLeitor();
        posicaoAtual = 0;
        isPlaying = false;

        // Atualizar ícones para o estado "Play"
        mudarIconParaPlay();
        mudarIconParaPlayToast();

        // Fechar Accodion Configurações de Download
        fecharAccordion();

        // Garantir que o áudio possa ser reiniciado na próxima tentativa
        loadingVoz.style.display = "none";
    };


    // Registrar evento de fechar a modal por fora modalOuvinte
    if (!leitorAtivo) {
        _modalOuvinte_.on("hide.bs.modal", ({ foiCliqueFora }) => {
            if (foiCliqueFora) {
                if (window.speechSynthesis.speaking) {
                    // Pausar a fala, em vez de cancelar
                    stopAudio();
                }

                _toastOuvinte_.fechar();
            }
        });
    } else {

        _modalOuvinte_.on("hide.bs.modal", ({ foiCliqueFora }) => {
            if (foiCliqueFora) {

                // _toastOuvinte_.recriar();
                _toastOuvinte_.abrir();

                // _toastOuvinte_.on("show.bs.toast", (event) => {
                //     // console.log("O Toast está prestes a ser exibido.");
                //     const icon = togglePlayBtn.querySelector('i');
                //     icon.classList.remove('bi-play-fill');
                //     icon.classList.add('bi-pause-fill');
                // });

                // Botão Play/Pause no Toast
                togglePlayBtn.addEventListener("click", () => {
                    const icon = togglePlayBtn.querySelector('i'); // Seleciona o ícone dentro do botão

                    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
                        // Pausar a leitura
                        window.speechSynthesis.pause();
                        isPlaying = false;

                        // Atualizar o ícone para "Play"
                        mudarIconParaPlayToast();
                        mudarIconParaPlay();
                    } else {
                        // Retomar ou iniciar o áudio
                        if (window.speechSynthesis.paused) {
                            window.speechSynthesis.resume();
                        } else {
                            // Certifique-se de limpar qualquer estado anterior antes de iniciar novamente
                            window.speechSynthesis.cancel();
                            setTimeout(() => {
                                lerTextoOuvinte(textoOuvinte, posicaoAtual);
                            }, 100); // Aguarde antes de reiniciar
                        }
                        isPlaying = true;

                        // Atualizar o ícone para "Pause"
                        mudarIconParaPauseToast();
                        mudarIconParaPause();
                    }
                });

                // Função para reiniciar o áudio
                refreshToastBtn.addEventListener("click", () => {
                    // Parar qualquer áudio em execução
                    window.speechSynthesis.cancel();
                    removerLeitor();

                    // Reiniciar variáveis
                    posicaoAtual = 0;
                    isPlaying = true;

                    // Atualizar o ícone para "Pause"
                    mudarIconParaPauseToast();
                    mudarIconParaPause();

                    // Reiniciar a leitura
                    lerTextoOuvinte(textoOuvinte, posicaoAtual);
                });

                // Botão Stop no Toast
                stopToastBtn.addEventListener("click", () => {
                    stopAudio();
                });

                // Evento de fechar o Toast
                document.querySelector('.btn-close-toast-ouvinte').addEventListener("click", (event) => {
                    _toastOuvinte_.fechar();
                    stopAudio();
                });


            }

        });
    }

}

// criar eventos sobre para o butões da modal Ouvinte
async function EventosModalAudio(modalOuvinte, languages = {}, tokens = [], textoOuvinte = "", configuracoesSlider = {}, classContainer, ouvinteConfiguracoes = {}, indexContainerAtual = 0) {

    const _accordionConfiguracoesDownloadOuvinte_ = new EventsAccordion('.configuracaoAccordionOuvinte');
    // console.log(_accordionConfiguracoesDownloadOuvinte_)


    // Função para popular vozes com base no idioma selecionado
    function popularVozes(langCode) {
        const voiceSelect = document.getElementById('voice-select');
        voiceSelect.innerHTML = ''; // Limpar vozes anteriores

        if (languages[langCode]) {
            const voices = languages[langCode].voices;
            voices.forEach(voice => {
                const option = document.createElement('option');
                option.value = voice;
                option.textContent = voice;
                voiceSelect.appendChild(option);
            });
        }
    }

    // Inicialmente popular com o primeiro idioma
    const languageSelect = document.getElementById('language-select');
    popularVozes(languageSelect.value);

    // Mudar vozes ao mudar o idioma
    languageSelect.addEventListener('change', (e) => {
        popularVozes(e.target.value);
    });


    // abrir accordion do Download
    function addAccordionConfigDownload() {
        const configuracaoDownload = document.getElementById("configuracao-ouvinte");
        const openCollapeseDownload = document.getElementById("collapseOne");

        if (configuracaoDownload.classList.contains("d-none")) {
            configuracaoDownload.classList.remove("d-none")
            openCollapeseDownload.classList.add("show")
            configuracaoDownload.classList.add("d-block")

        }

        return _accordionConfiguracoesDownloadOuvinte_.abrir();
    }

    // fechar accordion do Download
    function removeAccordionConfigDownload() {

        return _accordionConfiguracoesDownloadOuvinte_.fechar();
    }

    // Ferramenta de abrir Accordion pra baixar o áudio
    const abrirOuvinteDownload = document.querySelector(".openDownload-btn")
    abrirOuvinteDownload.addEventListener('click', () => {
        addAccordionConfigDownload()

    })


    // Configurar os plays de Audio no Modal Ouvinte
    playAudioEPauseModalAudio(modalOuvinte, events = {
        "abrirAccordion": addAccordionConfigDownload,
        "fecharAccordion": removeAccordionConfigDownload
    }, textoOuvinte, configuracoesSlider, classContainer, ouvinteConfiguracoes, indexContainerAtual)

    // console.log(addAccordionConfigDownload());
    // console.log(removeAccordionConfigDownload());
    // console.log(classContainer)
    // console.log(ouvinteConfiguracoes)

    // Previzualizar Audio Ouvinte
    previzualizarAudioOuvinte(modalOuvinte, languages, tokens, textoOuvinte, events = {
        "abrirAccordion": addAccordionConfigDownload,
        "fecharAccordion": removeAccordionConfigDownload
    }, configuracoesSlider, ouvinteConfiguracoes, indexContainerAtual)

}

// função modal ouvinte
async function Ouvinte(classContainer, configuracoesOuvinte, configuracoesSlider = {}, indexContainerAtual = 0) {


    // Configuração config
    const configuracao = await global__Config();

    // Configuração do Ouvinte
    const configuracaoOuvinte = configuracoesOuvinte;

    const tokens = [];
    const languages = {};

    // console.log(configuracao)
    // console.log(configuracaoOuvinte)

    // Sobrescrever a lista de tokens com os tokens do JSON retornado
    if (configuracao.voiceSSR && configuracao.voiceSSR.tokens) {
        tokens.length = 0; // Limpa o array atual, sem mudar a posição
        configuracao.voiceSSR.tokens.forEach(token => tokens.push(token)); // Adiciona os novos tokens
    }

    // Atualizar as informações de idiomas e vozes
    if (configuracao.voiceSSR && configuracao.voiceSSR.config) {
        Object.keys(configuracao.voiceSSR.config).forEach(lang => {
            languages[lang] = configuracao.voiceSSR.config[lang]; // Atualiza a lista de idiomas
        });
    }

    // console.log(tokens)
    // console.log(languages)


    // verificar se o Texto tem 
    // console.log(configuracaoOuvinte.ativo)

    const modalAudio = document.querySelector(".audio-convertido-ouvinte");

    if (configuracaoOuvinte.ativo) {
        if (modalAudio) {
            modalAudio.innerHTML = ""; // Limpar modal

            const audioFerramentas = await ferramentasModaAudio(languages);
            modalAudio.innerHTML += audioFerramentas;

            const textoContainers = document.getElementsByClassName(classContainer);

            const elementosPermitidos = configuracao?.voiceSSR?.tagsOuvinte?.elementosPermitidos || [];
            const elementosIgnorados = configuracao?.voiceSSR?.tagsOuvinte?.elementosIgnorados || [];
            const classesIgnoradas = configuracao?.voiceSSR?.tagsOuvinte?.classesIgnoradas || [];

            if (textoContainers.length > 0) {
                let textoOuvinte = "";

                const isIgnoradoPorHierarquia = (elemento) => {
                    while (elemento) {
                        const tag = elemento.tagName?.toLowerCase();
                        const classes = Array.from(elemento.classList || []);
                        if (
                            elementosIgnorados.includes(tag) || // Ignorar por tag
                            classes.some((classe) => classesIgnoradas.includes(classe)) // Ignorar por classe
                        ) {
                            return true;
                        }
                        elemento = elemento.parentElement; // Subir na hierarquia
                    }
                    return false;
                };

                // Array.from(textoContainers).forEach((container) => {
                //     const elementos = container.querySelectorAll("*");

                //     elementos.forEach((elemento) => {
                //         const tag = elemento.tagName.toLowerCase();
                //         const classes = Array.from(elemento.classList);

                //         // Ignorar se o elemento ou seus ancestrais são excluídos
                //         if (isIgnoradoPorHierarquia(elemento)) {
                //             return;
                //         }

                //         // Capturar texto apenas de elementos finais permitidos
                //         const isPermitidoPorTag = elementosPermitidos.includes(tag);

                //         if (isPermitidoPorTag && elemento.children.length === 0) {
                //             const texto = elemento.innerText.trim(); // Capturar texto
                //             if (texto) {
                //                 textoOuvinte += texto + " ";
                //             }
                //         }
                //     });
                // });

                // textoOuvinte = textoOuvinte.trim();

                Array.from(textoContainers).forEach((container) => {
                    const elementos = container.querySelectorAll("*");

                    elementos.forEach((elemento) => {
                        const tag = elemento.tagName.toLowerCase();
                        const classes = Array.from(elemento.classList);

                        // Ignorar elementos ou hierarquias com tags/classes não permitidas
                        if (isIgnoradoPorHierarquia(elemento)) {
                            return;
                        }

                        // Verifica se o elemento é permitido por tag
                        if (elementosPermitidos.includes(tag)) {
                            // Se o elemento não tem filhos ou os filhos são ignorados
                            const texto = elemento.textContent.trim(); // Captura todo o texto, incluindo filhos
                            if (texto) {
                                textoOuvinte += texto + " "; // Concatena o texto
                            }

                            // Evita processar filhos se o pai já foi processado
                            elemento.querySelectorAll("*").forEach((child) => {
                                elementosIgnorados.push(child.tagName.toLowerCase()); // Marca como ignorado
                            });
                        }
                    });
                });

                textoOuvinte = textoOuvinte.trim(); // Remove espaços adicionais


                if (textoOuvinte === "") {
                    modalAudio.innerHTML = `<div class="alert alert-warning" role="alert">Nenhum texto foi encontrado.</div>`;
                } else {
                    // console.log(textoOuvinte)
                    EventosModalAudio(
                        modalAudio,
                        languages,
                        tokens,
                        textoOuvinte,
                        configuracoesSlider,
                        classContainer,
                        configuracoesOuvinte,
                        indexContainerAtual
                    );
                }
            } else {
                modalAudio.innerHTML = `<div class="alert alert-warning" role="alert">Nenhum texto foi encontrado.</div>`;
            }
        }
    } else {

        modalAudio.innerHTML = `<div class="alert alert-warning" role="alert">Ouvinte está desativado para essa página.</div>`;
    }



}

// criar renderização da função do slider e verificar se existe o componente ouvinte referente a esse slider especifico
async function vizioonOuvinte(slideIndex) {
    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;

    // Arquivo de Configuração 
    const configuracao = await global__Config();

    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na api pegar informações
    const pageData = api[slideIndex];

    // Acessar Banco de Dados

    if (pageData && pageData.paramentros && pageData.paramentros.ouvinte && pageData.paramentros.ouvinte.ativo && pageData.paramentros.ouvinte.ativo === true) {
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // Pega o array links_ativar ou usa array vazio como fallback
                // console.log(container);
                // console.log(container.getAttribute(atributoSliderAtual))
                pararOuvinte();
                _toastOuvinte_.fechar();

                const ouvinte = pageData.paramentros.ouvinte || {};
                // console.log(ouvinte)
                Ouvinte(container.className, ouvinte, pageData, container.getAttribute(atributoSliderAtual));


            }
        });
    } else {

        try {

            if (!configuracao || !configuracao.modulosAtivos) {
                console.error("Configuração ou módulos ativos não encontrados.");
                return;
            }

            const { modulosAtivos } = configuracao;

            const processarModulo = (voiceSSR) => {
                // Extrair `dynamicClass` do módulo `voiceSSR`
                const { dynamicClass } = voiceSSR;

                // Verificar se `dynamicClass` existe e é um array
                if (!dynamicClass || !Array.isArray(dynamicClass)) {
                    console.warn("O módulo ativo não contém dynamicClass ou não é um array.");
                    return; // Ignorar esse módulo
                }

                // console.log("Classes dinâmicas:", dynamicClass);

                // Aplicar as alterações para cada classe
                dynamicClass.forEach((_class) => {
                    pararOuvinte()
                    _toastOuvinte_.fechar();
                    const elementos = document.querySelectorAll(_class);
                    elementos.forEach((el) => {
                        el.classList.add("d-none");
                        el.removeAttribute("style");
                        el.setAttribute("style", "display:none;");
                    });
                });
            };

            // Processar o módulo `voiceSSR`
            processarModulo(modulosAtivos.voiceSSR);

            return modulosAtivos; // Retorna os módulos ativos

        } catch (error) {
            console.error("Erro ao verificar ferramentas ativas:", error);
        }



    }
}


vizioonOuvinte(savedPosition) 
