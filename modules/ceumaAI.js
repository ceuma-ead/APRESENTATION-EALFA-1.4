

// Função para limitar o texto e adicionar "..."
function reduzirTexto(texto, tamanhoMaximo) {
    if (texto.length > tamanhoMaximo) {
        return texto.substring(0, tamanhoMaximo) + '...';
    } else {
        return texto;
    }
}

// Função para verificar se o texto é um parágrafo válido
function validarParagrafo(tema) {
    return tema.trim().length > 0; // Verifica se o tema não está vazio ou só tem espaços
}

function addDataResumo() {
    document.getElementById('text-typing-ai').innerHTML = "Eva :"
    const data = document.querySelector('.data-generacao');

    if (data) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
        data.innerHTML = `${formattedToday}`;
    }


}

addDataResumo()

async function resumoConfig() {
    try {
        const data = await $.ajax({
            url: configURLsdjkwi84ew9oedusjkdlj3948wies?.urls?.config,
            method: "GET",
            cache: false,
        });
        return data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: `Erro Json Desativada`,
            heightAuto: false,
            footer: `<a href="#" onclick="">você acha que isso é um erro? @suporte</a>`
        });
        console.error('Erro:', error);
    }
}

async function bot() {
    const bot_service = await resumoConfig();

    const configuracoes = bot_service.ceumaAI;

    if (configuracoes) {


        const { nome_bot } = configuracoes;

        // console.log(configuracoes)
        const nomeBot = reduzirTexto(nome_bot, 10);

        $(".nome-avatar").html(`${nomeBot} :`);
        $(".avatar-img").attr("src", configuracoes.img_bot)
    }

}
// Configuração do BOT SERVIÇO //\\
bot()

// Função para obter o resumo usando a API de forma dinâmica
async function resumoAI(tema, analisarContexto = "", _temperado = "completo", _tipo = "um estudante leigo", tamanhoTexto = 10, paragrafos = "1 linha", apiUrl = null, apiKey = null,regras = true) {

    const configuracoesData = await resumoConfig();
    // console.log(configuracoesData)
    const config = configuracoesData.ceumaAI;

    const { token, https, nome_bot, voz_bot } = config;
    // console.log(voz_bot);

    const { contexto } = __configuracoesServidor__.disciplina

    const configuracoes = {
        temperado: _temperado, // completo || detalhado com referência
        tipo: _tipo,
        paragrafos: paragrafos,
        apiKey: apiKey || token, // Usa uma chave padrão se nenhuma chave for passada
    };

    const nomeBot = reduzirTexto(nome_bot, 4);

    // const question = `
    //     Analise o Sequinte tema "${analisarContexto}" veja se a palavra ou paragrafo que é esse aqui
    //     input:${tema}
    //     está no contexto.
    //     **Deverao ser Aceitos apenas Resumo no Contexto**
    //     *Analise a seguinte questão : ${configuracoes.temperado}*
    //         - com base nessa analise quero que vc criar o seguinte resumo quando criar se tiver referencia ou detlhes vc coloca os links pra 
    //           acesso.

    //     Faça um resumo sobre **${tema}** ${configuracoes.temperado} para ${configuracoes.tipo}.
    //     !importante - Os resumos devem ter no mínimo ${configuracoes.paragrafos}, não pode passar disso.
    //     se passar, encerre logo.

    //     *Observações obrigatórias*:
    //     1 - Não sair do contexto.
    //     2 - Não é permitido falar de outra coisa, apenas o conteúdo solicitado.

    //     !Importante: todo resumo deve ser colocado aqui: """ resumo que você fez """. 

    // `;

    const question = `
            Analise o contexto da disciplina "${contexto}" e verifique se a palavra ou parágrafo fornecido abaixo está no contexto:
            *Quero somente a resposta para Entrada , o usuário não precisa saber se está no contexto ou não.*

            **Entrada do usuário:** oq é ${tema}
            - Siga a ordem das instruções: primeiro as instruções primárias, depois as secundárias.


            **Instruções - primárias:**

            ${regras ? `- Se a seleção tiver menos de 3 palavras, exiba uma mensagem indicando que o usuário precisa selecionar mais de 3 palavras: 
            <p class="removerMenu">Você deve selecionar um texto apropriado para eu analisar e resumir. Tente selecionar o parágrafo inteiro.</p>
            - Se apenas uma palavra for selecionada, mesmo que no contexto, exiba uma mensagem solicitando a seleção de mais palavras: 
            <p class="removerMenu">A seleção não pode ser de apenas uma palavra. Se quiser saber o significado da palavra <span style="text-transform:uppercase; font-weight: 600">${tema}</span> utilize a ferramenta Dicionário.</p>` 
            
            : ``}
            
            - Apenas resumos **relevantes ao contexto =  "${contexto}" ** devem ser aceitos.
            - Crie um resumo sobre **"${tema}"** no estilo **${configuracoes.temperado}** para **${configuracoes.tipo}**.
            - Caso haja referências ou detalhes importantes, insira os links conforme o formato abaixo:
    
            Exemplo de links:
            - <a target="_blank" href="https://exemplo1.com">https://exemplo1.com</a>
            - <a target="_blank" href="https://exemplo2.com">https://exemplo2.com</a>

            **Importante:**
            - O resumo deve ter no mínimo **${configuracoes.paragrafos}** parágrafos. Se o texto exceder esse limite, finalize o resumo imediatamente.

            **Observações obrigatórias:**
            1. Mantenha o foco no contexto.
            2. Não inclua conteúdo irrelevante ao tema = oq é ${tema}.


    `;

    // console.log(question)

    const dynamicApiUrl = apiUrl || `${https}?key=${configuracoes.apiKey}`;



    const data = {
        contents: [
            {
                parts: [
                    { text: question }
                ]
            }
        ]
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };


    try {
        // Mostrando o loader enquanto o resumo está sendo gerado
        $(".render-resumo-result").html("");
        // document.getElementById('loading-resumo').style.display = 'block';
        const reloadButtonAi = document.querySelector('.reload-button-ai');



        document.getElementById('loading-resumo').style.display = 'block';
        document.getElementById('text-typing-ai').innerHTML = `${nomeBot} está digitando...`

        // Fazendo a requisição POST usando fetch e aguardando a resposta
        const response = await fetch(dynamicApiUrl, requestOptions);
        // const response = [{}]

        // Verificando se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const temaReduzido = reduzirTexto(tema, tamanhoTexto);

        // Extraindo e processando a resposta em JSON
        const responseData = await response.json();

        // Extraindo o texto do resumo gerado pela API
        const resumo = responseData.candidates[0].content.parts[0].text;

        // Regex para extrair o conteúdo entre aspas triplas
        const regex = /"""\s*([\s\S]*?)\s*"""/;

        // Certifique-se de que o conteúdo extraído está correto e sem parágrafos desnecessários
        const resumoTextual = resumo.match(regex) ? resumo.match(regex)[1].trim() : resumo.trim(); // Remove espaços e quebras de linha

        // Escondendo o loader
        

        const btnsFerramentas = `
            <div class="d-flex flex-column gap-1 align-items-center justify-content-center">
                <button class="btn btn-warning btn-dowload-resposta"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-arrow-down-to-line">
                        <path d="M12 17V3" />
                        <path d="m6 11 6 6 6-6" />
                        <path d="M19 21H5" /></svg>
                </button>
                <p class="text-mute">Baixar</p>
            </div>

            <div class="d-flex flex-column gap-1 align-items-center justify-content-center">
                <div class="btn-group dropup-center dropup">
                    <button id="btn-reprocessar-resposta" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-settings-2">
                            <path d="M20 7h-9" />
                            <path d="M14 17H5" />
                            <circle cx="17" cy="17" r="3" />
                            <circle cx="7" cy="7" r="3" />
                        </svg>
                    </button>
                    <ul class="dropdown-menu reflow-items dropdown-menu-dark" data-popper-placement="top-start">
                        <li><a class="dropdown-item reflow-item-ai"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-bot-message-square">
                                    <path d="M12 6V2H8" />
                                    <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
                                    <path d="M2 12h2" />
                                    <path d="M9 11v2" />
                                    <path d="M15 11v2" />
                                    <path d="M20 12h2" /></svg> Resumo Simplificado</a></li>
                        <hr class="dropdown-divider">
                        <!-- Modulo Desativado -->
                        <!--
                        <li><a class="dropdown-item reflow-item-ai"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-bot-message-square">
                                    <path d="M12 6V2H8" />
                                    <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
                                    <path d="M2 12h2" />
                                    <path d="M9 11v2" />
                                    <path d="M15 11v2" />
                                    <path d="M20 12h2" /></svg> Com Detalhamento</a></li>
                       
                        <hr class="dropdown-divider">
                        -->
                        <li><a class="dropdown-item reflow-item-ai"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-bot-message-square">
                                    <path d="M12 6V2H8" />
                                    <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
                                    <path d="M2 12h2" />
                                    <path d="M9 11v2" />
                                    <path d="M15 11v2" />
                                    <path d="M20 12h2" /></svg> Resumo Detalhado</a></li>
                    </ul>
                </div>
                <p class="text-mute">Categoria</p>
            </div>

            <div class="d-flex flex-column gap-1 align-items-center justify-content-center">
                <button id="btn-salvar-historico" class="btn btn-info"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-save">
                        <path
                            d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                        <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                        <path d="M7 3v4a1 1 0 0 0 1 1h7" /></svg></button>
                <p class="text-mute">Salvar</p>
            </div>

            <div class="d-flex flex-column gap-1 align-items-center justify-content-center">
                <button aria-label="play" id="btn-processar-audio" class="btn btn-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-speech"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"/><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"/><path d="M17 15a3.5 3.5 0 0 0-.025-4.975"/></svg>
                </button>
                <p class="text-mute label-audio-voice-recog">Áudio</p>
            </div>
            
        `;

        
        // Exibindo o resumo no lugar correto dentro da estrutura HTML
        document.querySelector('.render-resumo-result').innerHTML = `
            <div class="result-resumo-items">
            <!--
                <div class="mt-3 avatar-container d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex gap-2 align-items-center">
                        <div class="position-relative">
                            <div class="pulse position-relative ai-response-loading " style="display:none;">
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                            <img class="rounded-circle" style="width: 40px;" alt="Avatar" src="./assets/eva.jpg" />
                        </div>
                        <span><strong class="text-success border border-2 border-success p-1 rounded">Eva respondeu
                                :</strong></span>
                    </div>
                    <span><strong class="data-generacao">00/00/000</strong></span>
                </div>
            -->
                <p class="processamento-resposta-ai animate__animated ">
                    ${marked.parse(resumoTextual)}
                </p>

                <div class="container-tools-fast w-100 d-none justify-content-center align-items-center gap-2 p-2" style="display:flex;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw text-danger reload-container-ai " style="cursor:pointer;"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy text-success copy-container-ai" style="cursor:pointer;"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                </div>

                 <div class="d-flex flex-column align-items-center justify-content-center alert alert-warning" role="alert" style="padding:0.3rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>
                    <p style="font-size:0.8rem;">As informações são geradas por inteligência artificial. Algumas respostas podem ser incorretas ou inadequadas.</p>
                </div>
                    
                <span
                    class=" mt-2 title img-back-resumo d-flex flex-column border border-2 bg-dark text-light p-2 rounded justify-content-center align-items-center">
                    <span id="containerResumo-result-reprocessamento" style="display:none;">
                        <p>Sem Ferramentas Disponíveis ...</p>
                    </span>

                    <span class="items-action-btn-ai w-100 gap-2 justify-content-center align-items-center" style="display:flex;">
                        ${btnsFerramentas}
                    </span>
                </span>
            </div>
        `;


        // Verificar se Pode ativar o perfil da AI
        checkEmptyResumoContainer();

        document.getElementById('loading-resumo').style.display = 'none';
        document.getElementById('text-typing-ai').innerHTML = `${nomeBot} respondeu: `

        const noneToolbar = document.querySelector(".removerMenu");
        const titleResumo = document.querySelector(".titleResumo");

        if (noneToolbar) {
            const toolbarActions = document.querySelector(".items-action-btn-ai");
            const containerResumoResult = document.getElementById("containerResumo-result-reprocessamento");
            const containerToolsFast = document.querySelector(".container-tools-fast");
            toolbarActions.style.display = "none";
            containerResumoResult.style.display = "block";
            reloadButtonAi.innerHTML = ``;

        } else {
            const toolbarActions = document.querySelector(".items-action-btn-ai");
            reloadButtonAi.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw text-danger reload-container-ai " style="cursor:pointer;"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>`;

            const containerResumoResult = document.getElementById("containerResumo-result-reprocessamento");
            const containerToolsFast = document.querySelector(".container-tools-fast");
            toolbarActions.style.display = "flex";
            containerResumoResult.style.display = "none"
            // containerToolsFast.style.display = "flex";
        }


        // Configurando os botões de ação (download e salvar no histórico)
        document.querySelector('.btn-dowload-resposta').addEventListener('click', () => downloadResumo(resumoTextual, reduzirTexto( tema, 10)));
        document.getElementById('btn-salvar-historico').addEventListener('click', () => salvarHistoricoResumo(reduzirTexto( tema, 10), tema, resumoTextual));
        // document.getElementById('btn-processar-audio').addEventListener('click', () => gerarAudioResumo(resumoTextual, "Ligia"));


        // Controle de Play/Pause com base no aria-label
        document.getElementById("btn-processar-audio").addEventListener("click", () => {
            const button = document.getElementById("btn-processar-audio");
            const ariaLabel = button.getAttribute("aria-label");

            // Verifica o valor do aria-label para decidir se o áudio deve ser tocado ou pausado
            if (ariaLabel === "play") {
                if (audio) {
                    updateIcon('pause'); // Atualizar o ícone para "pause" imediatamente
                    audio.play();
                } else {

                    const obj = voz_bot;
                    const lang = Object.keys(obj);
                    const configVoz = Object.values(obj)
                    const voz = Object.assign({}, ...configVoz);
                    // console.log(voz.voices)


                    gerarAudioResumo(resumoTextual, voz.voices, lang[0], 0, 1);
                }
            } else if (ariaLabel === "pause") {
                updateIcon('play'); // Atualizar o ícone para "play"
                audio.pause();
            }
        });


        // paramentros para dar o reflow na AI
        reflowAI(".reflow-items", tema, analisarContexto, resumoTextual)


        return resumo;


    } catch (error) {
        // Escondendo o loader em caso de erro
        document.getElementById('loading-resumo').style.display = 'none';
        console.error('Erro:', error);
        // document.querySelector('.render-resumo-result').innerHTML = `Erro ao gerar o resumo: ${error.message}`;
        document.querySelector('.render-resumo-result').innerHTML = `
             <div class="alert alert-warning" role="alert">
                <h4 class="alert-heading">Sobre ${reduzirTexto(tema,10)} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-sparkles">
                        <path
                            d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                        <path d="M20 3v4" />
                        <path d="M22 5h-4" />
                        <path d="M4 17v2" />
                        <path d="M5 18H3" /></svg></h4>
                <p> Opa, aguarde alguns minutos. Se estiver tendo problemas, entre em contato com <a href='#'>@suporte.cead@ceuma.br </a> 😉 <code>Servidor Indisponível</code> </p>
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

        `;
        
    }
}

let audio = null; // Variável global para armazenar a instância do áudio
let pauseTimeout = null; // Timer para o tempo de pausa
let countdownInterval = null; // Intervalo para o contador regressivo
const tempoAudio = 60000; // 3 segundos em milissegundos
let tempoRestante = tempoAudio / 1000; // Tempo restante em segundos
let reiniciarAudio = false; // Controla se o áudio deve ser reiniciado
let pulseLoadingAi = document.querySelector(".ai-response-loading ");
// Função para trocar os ícones entre "play" e "pause"

function updateIcon(state) {
    const button = document.getElementById("btn-processar-audio");
    button.innerHTML = ``;
    if (state === 'play') {
        button.setAttribute("aria-label", "play");
        pulseLoadingAi.style.display = "none";

        button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-speech">
        <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"/>
        <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"/>
        <path d="M17 15a3.5 3.5 0 0 0-.025-4.975"/>
        </svg>`;
    } else {
        pulseLoadingAi.style.display = "block";
        button.setAttribute("aria-label", "pause");
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause">
                <rect x="14" y="4" width="4" height="16" rx="1" />
                <rect x="6" y="4" width="4" height="16" rx="1" />
            </svg>`;
    }
}

function gerarAudioResumo(resumo, voz = "Ligia", langCode = "pt-br", velocidade = 0, tom = 1) {

    const labelTempo = document.querySelector(".label-audio-voice-recog"); // Elemento que será atualizado com o tempo
    // console.log(labelTempo)
    // Função para gerar e tocar o áudio
    function AudioResumo(resumo, voz = "Ligia", langCode = "pt-br", velocidade = 0, tom = 1) {
        const tokens = [];
        const languages = {};

        // Requisição AJAX para carregar as configurações
        $.ajax({
            url: configURLsdjkwi84ew9oedusjkdlj3948wies?.urls?.config,
            method: "GET",
            cache: false,
            success: (data) => {
                if (data.voiceSSR && data.voiceSSR.tokens) {
                    tokens.length = 0;
                    data.voiceSSR.tokens.forEach(token => tokens.push(token));
                }

                if (data.voiceSSR && data.voiceSSR.config) {
                    Object.keys(data.voiceSSR.config).forEach(lang => {
                        languages[lang] = data.voiceSSR.config[lang];
                    });
                }

                function sintetizarAudio(apiKey, texto, velocidade, tom, langCode, voz) {
                    const apiUrl = `https://api.voicerss.org/`;
                    const params = new URLSearchParams({
                        key: apiKey,
                        src: texto,
                        hl: langCode,
                        v: voz,
                        r: velocidade,
                        c: 'MP3',
                        f: '44khz_16bit_stereo'
                    });

                    return fetch(`${apiUrl}?${params.toString()}`, {
                        method: 'GET',
                    })
                        .then(response => {
                            if (response.ok) {
                                return response.blob();
                            } else {
                                throw new Error('Erro ao gerar áudio');
                            }
                        });
                }



                const buttonProcessAudio = document.getElementById("btn-processar-audio");
                buttonProcessAudio.innerHTML = `
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>`;

                sintetizarAudio(tokens[0], resumo, velocidade, tom, langCode, voz)
                    .then(blob => {
                        const audioURL = URL.createObjectURL(blob);
                        if (audio) {
                            audio.pause();
                        }

                        audio = new Audio(audioURL);
                        updateIcon('pause'); // Atualizar o ícone para "pause"
                        limparTempoLabel(); // Limpar o tempo exibido ao reiniciar o áudio
                        audio.play();

                        audio.addEventListener("timeupdate", updateTempoLabel); // Atualiza o label com o tempo decorrido

                        audio.onended = () => {
                            updateIcon('play'); // Voltar para o ícone "play" quando o áudio terminar
                        };

                        audio.onpause = () => {
                            updateIcon('play'); // Atualizar o ícone para "play" ao pausar
                            iniciarContagemRegressiva(); // Iniciar a contagem regressiva ao pausar
                        };

                        audio.onplay = () => {
                            updateIcon('pause'); // Atualizar o ícone para "pause" ao tocar
                            cancelarContagemRegressiva(); // Cancelar a contagem regressiva se o áudio for retomado
                            if (reiniciarAudio) {
                                audio.currentTime = 0; // Reinicia o áudio se pausado por mais de 3 segundos
                                limparTempoLabel(); // Limpar a exibição de tempo ao reiniciar o áudio
                                reiniciarAudio = false; // Reseta a flag de reinício
                            }
                        };
                    })
                    .catch(error => {
                        console.error('Erro:', error);
                    });
            },
            error: (error) => {
                console.error('Erro ao carregar as configurações:', error);
            }
        });
    }


    // Retirando Titulo desse Resumo
    function removerPartes(texto) {
        // Expressão regular para encontrar e remover todas as tags <span> e seu conteúdo
        const textoLimpo = texto.replace(/<span.*?>.*?<\/span>/gi, '');
        // console.log(textoLimpo);
        return textoLimpo;  // Retorna o texto limpo, caso precise usar em outra parte do código
    }


    AudioResumo(removerPartes(resumo), voz, langCode, velocidade, tom);

    // Função para iniciar a contagem regressiva quando o áudio for pausado
    function iniciarContagemRegressiva() {
        limparTempoLabel(); // Limpar o label quando começar a contagem regressiva
        tempoRestante = tempoAudio / 1000; // Definir o tempo restante em segundos

        countdownInterval = setInterval(() => {
            tempoRestante -= 1;
            updateLabelTempoRestante(tempoRestante);

            if (tempoRestante <= 0) {
                limparTempoLabel()
                clearInterval(countdownInterval); // Parar o intervalo quando chegar a 0
                reiniciarAudio = true; // Indicar que o áudio deve ser reiniciado quando o usuário apertar "play"
            }
        }, 1000); // Contagem regressiva de 1 em 1 segundo
    }

    // Função para cancelar a contagem regressiva se o áudio for retomado
    function cancelarContagemRegressiva() {
        if (countdownInterval) {
            clearInterval(countdownInterval); // Cancelar a contagem regressiva
            countdownInterval = null;
        }
    }



    // Função para limpar o tempo no label
    function limparTempoLabel() {
        if (labelTempo) {
            labelTempo.innerHTML = 'Áudio'; // Limpar o tempo quando o áudio reiniciar
        }
    }

    // Função para mostrar o tempo restante no label
    function updateLabelTempoRestante(tempoRestante) {
        if (labelTempo) {
            const currentTime = formatTime(tempoRestante);
            labelTempo.innerHTML = `
                ${currentTime}s         
            `;
        }
    }

    // Função para atualizar o tempo decorrido no label
    function updateTempoLabel() {
        if (audio && labelTempo) {
            // const currentTime = formatTime(audio.currentTime);
            // labelTempo.innerHTML = `
            //     ${currentTime}s         
            // `;
        }
    }

    // Função auxiliar para formatar o tempo em mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
}

function paraAudioResumo() {
    const labelTempo = document.querySelector(".label-audio-voice-recog"); // Elemento que será atualizado com o tempo

    // Pausa o áudio, destrói o objeto e limpa o estado
    if (audio) {
        audio.pause(); // Pausa o áudio atual
        audio.src = ""; // Remove a referência ao arquivo de áudio
        audio.load(); // Reinicia o elemento de áudio
        audio = null; // Remove o objeto de áudio para gerar um novo posteriormente
        // console.log("Áudio pausado e destruído.");
        limparTempoLabel(); // Limpa o label de tempo
    } else {
        // console.log("Nenhum áudio está em execução.");
    }

    // Função para limpar o tempo no label
    function limparTempoLabel() {
        if (labelTempo) {
            labelTempo.innerHTML = 'Áudio'; // Texto padrão quando o áudio for destruído
        }
    }
}

// Função para desabilitar o botão e mostrar o tooltip com o tempo restante
 function disableButton(duration,elemento) {
    const button = document.querySelector(elemento);
    let timeRemaining = duration;

    // Desabilitar o botão
    button.disabled = true;
    button.setAttribute('data-time-remaining', timeRemaining);

    // Atualizar o tooltip
    const interval = setInterval(() => {
        timeRemaining--;
        button.setAttribute('data-time-remaining', timeRemaining);

        // Quando o tempo acabar, reabilitar o botão e limpar o tooltip
        if (timeRemaining <= 0) {
            clearInterval(interval);
            button.disabled = false;
            button.removeAttribute('data-time-remaining');
        }
    }, 1000);
}

// Função para realizar o download do resumo
function downloadResumo(resumo, nomeArquivo = 'resumo.txt') {
    const blob = new Blob([resumo], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nomeArquivo;
    link.click();
}

function reflowAI(_class, tema, analisarContexto = "", _reprocessar = null) {
    // Limpar Container
    const clearContainer = document.querySelector('.render-resumo-result')

    const reflow = document.querySelector(_class);

    const reflowItems = reflow.querySelectorAll("li > a");
    reflowItems.forEach(btn => {
        btn.addEventListener("click", function (event) {
            // console.log(event.target.innerText)
            // console.log(tema, analisarContexto)

            const prompt = event.target.innerText.trim();
            // console.log(prompt)

            if (prompt === "Resumo Detalhado") {

                clearContainer.innerHTML = ``;
                resumoAI(tema, analisarContexto, "Faça um resumo bem detalhado com links e referências pra me clicar gera no minimo 10 links em forma de lista enumerada", "Universitario", 10, "1 linhas").then(resumo => {
                    soundBipe()
                    paraAudioResumo()
                    // console.log('Resumo retornado:', resumo);
                });
            } else if (prompt === "Com Detalhamento") {

                clearContainer.innerHTML = ``;
                resumoAI(tema, analisarContexto, "Faça um Resumo detalhado", "Universitario avançado", 10, "3 paragrafos").then(resumo => {
                    soundBipe()
                    paraAudioResumo()
                    // console.log('Resumo retornado:', resumo);
                });
            } else if (prompt === "Resumo Simplificado") {

                clearContainer.innerHTML = ``;
                resumoAI(tema, analisarContexto, "Faça um Resumo bem siplificadinho pra uma pessoa leiga", "Estudante Leigo", 10, "1 linha").then(resumo => {
                    soundBipe()
                    paraAudioResumo()
                    // console.log('Resumo retornado:', resumo);
                });
            }

        })
    });

    const refreshContainerAi = document.querySelector(".reload-container-ai");

    refreshContainerAi.addEventListener("click", function (event) {
        // Verificar se o botão já está desabilitado
        if (refreshContainerAi.disabled) {
            const remainingTime = refreshContainerAi.getAttribute('data-time-remaining');
    
            // Criando o tooltip usando Tippy.js
            const tooltipInstance = tippy(refreshContainerAi, {
                content: `Aguarde ${remainingTime}s`,
                placement: 'left', // Exibe o tooltip acima do botão
                arrow: false, // Exibe uma seta no tooltip
                theme: 'dark', // Define o tema claro para o tooltip
                interactive: true, // Permite interação com o tooltip
                trigger: 'manual', // Tooltip será acionado manualmente
                showOnCreate: true, // Exibe o tooltip imediatamente após criação
                maxWidth: 'none',
                offset: [0, 10],
                onShown(instance) {
                    // Atualiza o tooltip com o tempo restante a cada segundo
                    const interval = setInterval(() => {
                        const updatedTime = refreshContainerAi.getAttribute('data-time-remaining');
                        instance.setContent(`Aguarde ${updatedTime}s`);
    
                        // Se o tempo acabar, destrói o tooltip e limpa o intervalo
                        if (updatedTime <= 0) {
                            clearInterval(interval);
                            instance.destroy();
                        }
                    }, 1000);
                }
            });
    
            return; // Evitar reprocessamento enquanto o botão estiver desabilitado
        }

        // Limpar o conteúdo do container
        clearContainer.innerHTML = ``;

        // Desabilitar o botão e iniciar o processo de resumo
        resumoAI(tema, analisarContexto, _reprocessar ?
            `Refaça pra me esse resumo de outra forma mais no mesmo contexto :${_reprocessar}` :
            `Faça um Resumo bem simplificado novamente`, "Estudante Leigo", 10, "1 linha").then(resumo => {

                // Aqui o processo do resumo termina
                soundBipe();
                paraAudioResumo();

                // Desabilitar o botão por 2 segundos
                disableButton(6,".reload-container-ai"); // Chama a função para desabilitar o botão por 5 segundos

            });
    });

   
    const copyContainerAi = document.querySelector(".copy-container-ai");

    copyContainerAi.addEventListener('click', function () {

        // Usa a API de Clipboard para copiar o texto
        navigator.clipboard.writeText(tema)
            .then(() => {

                // Configura o tippy no ícone de histórico para aparecer automaticamente
                const tooltipInstance = tippy(copyContainerAi, {
                    content: 'Copiado com Sucesso ✅',
                    placement: 'top',
                    arrow: true, // Exibe uma seta no tooltip
                    theme: 'light', // Define o tema claro para o tooltip
                    // duration: [300, 200], // Define a duração da animação de entrada e saída
                    // delay: [200, 0], // Define o atraso para mostrar o tooltip
                    interactive: true, // Torna o tooltip interativo
                    allowHTML: true, // Permite HTML no conteúdo
                    trigger: 'manual', // Define o trigger manual (sem precisar de interação do usuário)
                    showOnCreate: true, // Mostra o tooltip imediatamente ao ser criado
                    hideOnClick: 'toggle',
                    onShown(instance) {
                        // Tooltip é mostrado uma vez e depois destruído
                        setTimeout(() => {
                            instance.destroy(); // Destroi o tooltip após ser mostrado por 3 segundos
                        }, 2000); // Tempo de exibição do tooltip (3 segundos)
                    }
                });

            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    });

};

// Adicionar verificação se o elemento existe antes de adicionar o event listener
const mudarPosicaoBtn = document.querySelector('.mudarPosicaoResumo');
if (mudarPosicaoBtn) {
    mudarPosicaoBtn.addEventListener('click', function () {
        const sidebarMenu = document.querySelector('.resumo-menu');

        if (sidebarMenu.classList.contains('left')) {
            sidebarMenu.classList.remove('left');
            sidebarMenu.classList.add('right');
        } else {
            sidebarMenu.classList.remove('right');
            sidebarMenu.classList.add('left');
        }

        // Corrigir a referência à variável e remover verificação redundante
        document.addEventListener('click', function (evento) {
            const target = evento.target;
            if (!sidebarMenu.contains(target) && target !== document.querySelector('.resumo-menu')) {
                fecharMenuAnotacoes();
            }
        });
    });
}


const sidebar = document.querySelector('.resumo-menu');