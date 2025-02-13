//                  _ _.-'`-._ _                 
//                 ;.'________'.;                
//      _________n.[____________].n_________     
//     |""_""_""_""||==||==||==||""_""_""_""]    
//     |"""""""""""||..||..||..||"""""""""""|    
//     |LI LI LI LI||LI||LI||LI||LI LI LI LI|    
//     |.. .. .. ..||..||..||..||.. .. .. ..|    
//     |LI LI LI LI||LI||LI||LI||LI LI LI LI|    
//  ,,;;,;;;,;;;,;;;,;;;,;;;,;;;,;;,;;;,;;;,;;,, 
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// Definir as configurações da unidade 

document.addEventListener("DOMContentLoaded", function (event) {
    configuracoesDaUnidade("./server.conf");
});


async function configuracoesDaUnidade(url) {
    // Cria o objeto de requisição
    var xhr = new XMLHttpRequest();

    // Abre a conexão de forma síncrona (terceiro parâmetro "false" torna a requisição síncrona)
    xhr.open("GET", url, false);

    // Envia a requisição
    xhr.send();

    // Verifica o status da resposta
    if (xhr.status === 200) {
        const configuracaoUnidade = parseConf(xhr.responseText);
        // console.log(configuracaoUnidade)

        const { title, sumario_header, sumario_unidade } = configuracaoUnidade.unidade;

        // console.log(title);
        // console.log(sumario_header);
        // console.log(sumario_unidade);
        document.title = title
        document.querySelector(".siderbar-head-p-323iusd8").innerText = sumario_header
        document.querySelector(".siderbar-subtitulo-p-23iuu238kj").innerText = sumario_unidade

        return configuracaoUnidade;

    } else {
        console.error("Erro na requisição:", xhr.status);
        return null;
    }
}

async function configGerarIDUnidade(url = './_prefix.json') {

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar dados.');
        }
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        // console.error('Erro:', error);
        return null;
    }
}


// Configuração do Slider
function configuracaoSlider() {
    // console.log(configuracoesIntraGlobais)
    const config = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = config.procurar_slider
    // console.log(sliderObject)
    return {
        _sliderClass,
        _attrActiver
    } = sliderObject
}

const velocity = () => {
    const configuracaoVelocidade = fazerRequisicaoParaServer("./server.conf")
    // console.log(configuracaoVelocidade)
    const velocidade = configuracaoVelocidade.configuracoes_slider
    // console.log( velocidade.velocidadeDoSlider)
    return velocidade.velocidadeDoSlider === "" ? 0.5 : velocidade.velocidadeDoSlider;

}
const velocidadeDoSlider = velocity();
// console.log(velocidadeDoSlider)
const gliderElement = document.querySelector('.c-carousel__slides');

// // Função para salvar a posição do slider no localStorage
// function saveSliderPosition(index) {
//     localStorage.setItem('sliderPosition', index);
// }

// // Recuperar a posição salva no localStorage
// function getSavedSliderPosition() {
//     return parseInt(localStorage.getItem('sliderPosition')) || 0;
//     // return 0;
// }

// Define a posição do slider como uma variável global
let savedPosition = 0;

// Função para salvar ou atualizar a posição do slider no banco de dados
function saveSliderPosition(index) {
    sliderPositionDB.find({}, function (results) {
        if (results.length > 0) {
            // Atualiza o valor se já existir uma posição salva
            results[0].slider = index;
            results[0].save(function () {
                // console.log('Posição do slider atualizada para:', index);
                savedPosition = index; // Atualiza a variável global
            });
        } else {
            // Cria uma nova entrada se não existir posição
            var positionSlider = { slider: index };
            sliderPositionDB.save(positionSlider, function (newItem) {
                // console.log('Nova posição do slider salva:', newItem.slider);
                savedPosition = newItem.slider; // Define a posição inicial
            });
        }
    });
}

// Função para recuperar a posição salva do slider no banco de dados
function getSavedSliderPosition(callback) {
    sliderPositionDB.find({}, function (results) {
        if (results.length > 0) {
            savedPosition = results[0].slider; // Atualiza a variável global
            // console.log('Posição do slider recuperada:', savedPosition);
            callback(savedPosition);
        } else {
            // console.log('Nenhuma posição do slider salva, retornando valor padrão (0)');
            savedPosition = 0; // Define o valor padrão
            callback(savedPosition);
        }
    });
}

// Exemplo de como usar getSavedSliderPosition corretamente
getSavedSliderPosition(function (position) {
    // console.log('Posição inicial do slider:', position);
    // Aqui você pode definir a posição inicial do slider na interface
});

// Exemplo de atualização da posição do slider e verificação do valor global
// console.log("Valor global de savedPosition:", savedPosition);

// Inicializa o Glider.js
const glider = new Glider(gliderElement, {
    slidesToShow: 1,
    slidesToScroll: 1,
    duration: velocidadeDoSlider,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    dots: '#dots'
});

// Obtém os botões de navegação
const nextButton = document.querySelector('.glider-next');
const prevButton = document.querySelector('.glider-prev');

// Adiciona ouvintes de eventos
// nextButton.addEventListener('click', (event) => {
//     console.log(event)
// });

// prevButton.addEventListener('click', (event) => {
//     console.log(event)
// });

// // Recupera e define a posição salva ao inicializar
// const savedPosition = getSavedSliderPosition();
// glider.scrollItem(savedPosition);

// // Evento para salvar a posição atual sempre que o slider for alterado
// gliderElement.addEventListener('glider-slide-visible', function (event) {
//     saveSliderPosition(event.detail.slide);
//     //Atualizar titulo da Página
//     updatePageTitle(event.detail.slide);
//     //Atualizar Cores da Página
//     atualizarCoresdaNavegacao(event.detail.slide);
//     //Adicionar Logo a Página
//     adicionarLogo(event.detail.slide);
//     //Modificar fontes da Página
//     modificarFontes(event.detail.slide);
//     //Adcionar Marcadores ao Texto
//     adicionarMarcadores(event.detail.slide);
//     //Passa a Posição Atual da Pagina para o Menu
//     itemnsMenu('', event.detail.slide);
//     //Adcionar Fundo ao Slider Atual
//     adicionarFundo(event.detail.slide);
//     //Fazer a inserção de scripts na página
//     injectScriptPage(event.detail.slide);
//     //Fazer a inserção e Atualizaçaões de Animações na Página
//     AnimationVariablesUpPage(event.detail.slide);
//     //Fazer a inserção de Responsividade em uma Página ou Varias
//     responsivePage(event.detail.slide);
//     console.log("Está na Página 🎉 => " + event.detail.slide);
// });

// const savedPosition = getSavedSliderPosition();
const loadingSpinner = document.getElementById('loading-spinner');

function showLoading(time = 0) {
    loadingSpinner.style.display = 'flex';
    // Garantir que o loading desapareça após 3 segundos (ou ajuste conforme necessário)
    setTimeout(hideLoading, time);
}

function hideLoading() {
    loadingSpinner.style.display = 'none';
}

//Executar para rolar para o slider que está salvo

// recalculando o Layout com base no visibility dele
// resolvendo a questão de mostrar o loading enquando ele não está escondido na página

function iraoItemquandoCarregar() {

    gliderElement.addEventListener("glider-slide-hidden", (event) => {
        loadingSpinner.style.display = 'flex';
    });
}


document.addEventListener("DOMContentLoaded", function (event) {

    // fazer o scrool até esse item nesse mesmo time.
    iraoItemquandoCarregar()

    glider.scrollItem(savedPosition);

    //verificar se esse item já tá visivel 
    /*
        item Ativo ->
                    -- não <> sim --
                    |              |
        Show Loading   <-     -> Hide Loading 
    */
    gliderElement.addEventListener("glider-slide-visible", (event) => {

        // console.log(event.detail.slide)
        // showLoading(event.timeStamp);

        // // Mostrar o loading antes de iniciar a mudança de slide
        gliderElement.addEventListener('glider-slide-hidden', function (event) {
            showLoading(event.timeStamp);
            // console.log()
        });

    });
});

//Controlador de Filtragem do Sumario =================

let filtroDuplicadoSumario = true

//Controlador =================

gliderElement.addEventListener('glider-slide-visible', async function (event) {

    // const unidadeConfiguracao = configGerarIDUnidade();
    // // Filtra as unidades que têm "ativo: true"
    // const configuracaoUnidadeAtiva = unidadeConfiguracao
    //     .flatMap(item => item.unidades) // Pega todas as unidades
    //     .filter(unidade => unidade.ativo); // Filtra apenas as unidades ativas

    // hideLoading(); // Esconder o loading assim que o slide estiver visível
    showLoading()

    saveSliderPosition(event.detail.slide);
    //Atualizar titulo da Página
    updatePageTitle(event.detail.slide);
    //Atualizar Cores da Página
    atualizarCoresdaNavegacao(event.detail.slide);
    //Adicionar Logo a Página
    adicionarLogo(event.detail.slide);
    //Modificar fontes da Página
    modificarFontes(event.detail.slide);
    // Rendenrizar Eventos disparados Slider
    vizioonEvents(event.detail.slide)
    //Modificar setas da Página
    modificarArrows(event.detail.slide);
    //Adcionar Marcadores ao Texto
    adicionarMarcadores(event.detail.slide);
    //Passa a Posição Atual da Pagina para o Menu
    itemnsMenu('', event.detail.slide, filtroDuplicadoSumario);
    //Adcionar Fundo ao Slider Atual
    adicionarFundo(event.detail.slide);
    //Fazer a inserção de scripts na página
    injectScriptPage(event.detail.slide);
    //Fazer a inserção e Atualizaçaões de Animações na Página
    AnimationVariablesUpPage(event.detail.slide);
    //Fazer a inserção de Responsividade em uma Página ou Varias
    responsivePage(event.detail.slide);
    // Função para inserir a URL ná página
    injectEstiloRender(event.detail.slide);
    // Renderizar Ferramentas por Página
    renderTools(event.detail.slide);
    // renderizador de tooltips
    tooltipRender(event.detail.slide);
    // Renderizar Popover para criar tooltipo estilo popover na página
    renderPopover(event.detail.slide);
    // Renderizar Video
    renderVideo(event.detail.slide);
    // Renderizar Audio
    renderAudio(event.detail.slide);
    // Mapear as operações padrões 
    mapServerLoad();
    // Renderizar Links com Caixa de Ferramentas
    vizioonLink(event.detail.slide);
    // Renderizar Tesseract
    vizioonTesseract(event.detail.slide);
    // Renderizar Tesseract
    vizioonLupa(event.detail.slide);
    // Rendenrizar Ouvinte
    vizioonOuvinte(event.detail.slide);
    // Rendenrizar Toolbar
    vizioonToolbar(event.detail.slide);
    // Rendenrizar Animações de Texto
    vizioonAnimationText(event.detail.slide);
    // Rendenrizar Animações de Elementos
    vizioonAnimationElementos(event.detail.slide);
    // Rendenrizar click indicador
    vizioonTap(event.detail.slide);
    // Renderizar Configurações
    configuracoesRender(event.detail.slide);
    //Rougth JS is Module
    roughNotationModules(event.detail.slide);
    // Rendenrizar MathJax
    vizioonMathJAX(event.detail.slide);

    console.log("Está na Página 🎉 => " + event.detail.slide);
});

//=================
// Esconder Loading
gliderElement.addEventListener("glider-slide-visible", (event) => {
    // console.log(event.detail.slide)
    // showLoading(event.timeStamp);
    // // Mostrar o loading antes de iniciar a mudança de slide
    gliderElement.addEventListener('glider-slide-hidden', function (event) {
        showLoading(event.timeStamp);
        // console.log()
    });

});
hideLoading()
//=================


// Função para atualizar o título da página ao carregar
function updatePageTitle(slideIndex) {
    const pageData = api[slideIndex];
    const titulo = document.querySelector(".header-title p");
    if (titulo && pageData) {
        titulo.textContent = pageData.nome_page;
    }
}

// Função para Ativar Fundo no Slider
function adicionarFundo(slideIndex) {
    const pageData = api[slideIndex];
    // console.log(pageData)

    // Criar um padrão para Logo
    const LogoPadrao = {
        ativar: true,
        img: getComputedStyle(document.documentElement).getPropertyValue('--imgem-fundo-carrosel').trim(),
        posicaoY: getComputedStyle(document.documentElement).getPropertyValue('--imgem-fundo-carrosel-posicao-y-imagem').trim(),
        posicaoX: getComputedStyle(document.documentElement).getPropertyValue('--imgem-fundo-carrosel-posicao-x-imagem').trim(),
        tamanho: getComputedStyle(document.documentElement).getPropertyValue('--imgem-fundo-tamanho-x-y-imagem').trim(),
        fundoCapa: getComputedStyle(document.documentElement).getPropertyValue('--imgem-fundo-carrosel-sub-capa-default'),
    };

    if (pageData && pageData.paramentros && pageData.paramentros.cores.imagemFundo) {
        const {
            ativar = LogoPadrao.ativar, // Valores padrão em caso de ausência
            Capa = LogoPadrao.img,
            subCapa = LogoPadrao.fundoCapa,
            posicaoY = LogoPadrao.posicaoY,
            posicaoX = LogoPadrao.posicaoX,
            tamanho = LogoPadrao.tamanho

        } = pageData.paramentros.cores.imagemFundo;


        // console.log(pageData.paramentros.logo)
        const verificarItem = pageData.paramentros.cores
        if (Object.values(verificarItem).length === 0) {
            document.documentElement.style.setProperty('--imgem-fundo-carrosel', "url()");
            document.documentElement.style.setProperty('--imgem-fundo-carrosel-sub-capa', subCapa);

            return;
        } else {
            if (!Capa || Capa === "") {
                document.documentElement.style.setProperty('--imgem-fundo-carrosel', "url()");
            }

            if (!subCapa || subCapa === "") {
                document.documentElement.style.setProperty('--imgem-fundo-carrosel-sub-capa', subCapa);
            }
        }

        if (ativar) {
            // console.log(img)
            // console.log(document.documentElement.style.getPropertyValue('--imgem-fundo-carrosel'))

            document.documentElement.style.setProperty('--imgem-fundo-carrosel', Capa);
            document.documentElement.style.setProperty('--imgem-fundo-carrosel-posicao-y-imagem', posicaoY);
            document.documentElement.style.setProperty('--imgem-fundo-carrosel-posicao-x-imagem', posicaoX);
            document.documentElement.style.setProperty('--imgem-fundo-tamanho-x-y-imagem', tamanho);
            document.documentElement.style.setProperty('--imgem-fundo-carrosel-sub-capa', subCapa);
        } else {
            document.documentElement.style.setProperty('--imgem-fundo-carrosel', "url()");
            document.documentElement.style.setProperty('--imgem-fundo-carrosel-sub-capa', LogoPadrao.fundoCapa);
        }
    } else {

        if (typeof glider !== 'undefined') {
            glider.refresh(true);
            glider.updateControls();
        } else {
            console.error('O objeto glider não está definido.');
        }
        // Mantém os estilos padrão e atualiza o glider
        document.documentElement.style.setProperty('--imgem-fundo-carrosel', 'url()');
        document.documentElement.style.setProperty('--imgem-fundo-carrosel-posicao-y-imagem', LogoPadrao.posicaoY);
        document.documentElement.style.setProperty('--imgem-fundo-carrosel-posicao-x-imagem', LogoPadrao.posicaoX);
        document.documentElement.style.setProperty('--imgem-fundo-carrosel-sub-capa', LogoPadrao.fundoCapa);

    }
}

// Função para Ativar logo no Slider
function adicionarLogo(slideIndex) {
    const pageData = api[slideIndex];
    // console.log(pageData)

    // Criar um padrão para Logo
    const LogoPadrao = {
        logo_ativo: true,
        logo_slider_marca: getComputedStyle(document.documentElement).getPropertyValue('--logo-slider-marca-default').trim(),
        logo_posicao_y_default: getComputedStyle(document.documentElement).getPropertyValue('--logo-posicao-y-default').trim(),
        logo_posicao_x_default: getComputedStyle(document.documentElement).getPropertyValue('--logo-posicao-x-default').trim(),
        logo_tamanho_y_default: getComputedStyle(document.documentElement).getPropertyValue('--logo-tamanho-y-default').trim(),
        logo_tamanho_x_default: getComputedStyle(document.documentElement).getPropertyValue('--logo-tamanho-x-default').trim(),
        logo_div_y_default: getComputedStyle(document.documentElement).getPropertyValue('--logo-div-y-default').trim(),
        logo_div_x_default: getComputedStyle(document.documentElement).getPropertyValue('--logo-div-x-default').trim(),

    };

    if (pageData && pageData.paramentros && pageData.paramentros.logo) {
        const {
            ativar = LogoPadrao.logo_ativo,
            logo_img = LogoPadrao.logo_slider_marca,
            logo_posicao_y = LogoPadrao.logo_posicao_y_default,
            logo_posicao_x = LogoPadrao.logo_posicao_x_default,
            logo_tamanho_y = LogoPadrao.logo_tamanho_y_default, // x e y
            logo_tamanho_x = LogoPadrao.logo_tamanho_x_default, // x e y
            div_y_logo = LogoPadrao.logo_div_y_default,
            div_x_logo = LogoPadrao.logo_div_x_default,

        } = pageData.paramentros.logo;

        // console.log(pageData.paramentros.logo)

        // // console.log(pageData.paramentros.logo)
        const verificarItem = pageData.paramentros.logo
        if (Object.values(verificarItem).length === 0) {
            document.documentElement.style.setProperty('--logo-slider-marca',  LogoPadrao.logo_slider_marca);
            document.documentElement.style.setProperty('--logo-posicao-y', LogoPadrao.logo_posicao_y_default);
            document.documentElement.style.setProperty('--logo-posicao-x', LogoPadrao.logo_posicao_x_default);
            document.documentElement.style.setProperty('--logo-tamanho-y', LogoPadrao.logo_tamanho_y_default);
            document.documentElement.style.setProperty('--logo-tamanho-x', LogoPadrao.logo_tamanho_x_default);
            document.documentElement.style.setProperty('--logo-div-y', LogoPadrao.logo_div_y_default);
            document.documentElement.style.setProperty('--logo-div-x', LogoPadrao.logo_div_x_default);
            return;
        }

        if (ativar) {
            document.documentElement.style.setProperty('--logo-slider-marca', logo_img);
            document.documentElement.style.setProperty('--logo-posicao-y', logo_posicao_y);
            document.documentElement.style.setProperty('--logo-posicao-x', logo_posicao_x);
            document.documentElement.style.setProperty('--logo-tamanho-y', logo_tamanho_y);
            document.documentElement.style.setProperty('--logo-tamanho-x', logo_tamanho_x);
            document.documentElement.style.setProperty('--logo-div-y', div_y_logo);
            document.documentElement.style.setProperty('--logo-div-x', div_x_logo);

        } else {
            document.documentElement.style.setProperty('--logo-slider-marca', LogoPadrao.logo_slider_marca);
            document.documentElement.style.setProperty('--logo-posicao-y', LogoPadrao.logo_posicao_y_default);
            document.documentElement.style.setProperty('--logo-posicao-x', LogoPadrao.logo_posicao_x_default);
            document.documentElement.style.setProperty('--logo-tamanho-y', LogoPadrao.logo_tamanho_y_default);
            document.documentElement.style.setProperty('--logo-tamanho-x', LogoPadrao.logo_tamanho_x_default);
            document.documentElement.style.setProperty('--logo-div-y', LogoPadrao.logo_div_y_default);
            document.documentElement.style.setProperty('--logo-div-x', LogoPadrao.logo_div_x_default);
        }
    } else {

        if (typeof glider !== 'undefined') {
            glider.refresh(true);
            glider.updateControls();
        } else {
            console.error('O objeto glider não está definido.');
        }
        // Mantém os estilos padrão e atualiza o glider
        document.documentElement.style.setProperty('--logo-slider-marca',  LogoPadrao.logo_slider_marca);
        document.documentElement.style.setProperty('--logo-posicao-y', LogoPadrao.logo_posicao_y_default);
        document.documentElement.style.setProperty('--logo-posicao-x', LogoPadrao.logo_posicao_x_default);
        document.documentElement.style.setProperty('--logo-tamanho-y', LogoPadrao.logo_tamanho_y_default);
        document.documentElement.style.setProperty('--logo-tamanho-x', LogoPadrao.logo_tamanho_x_default);
        document.documentElement.style.setProperty('--logo-div-y', LogoPadrao.logo_div_y_default);
        document.documentElement.style.setProperty('--logo-div-x', LogoPadrao.logo_div_x_default);


    }
}

// Função para lidar com o evento de pesquisa
function itemnsMenu(filtro = '', slideIndex, ocultarDuplicados = true) {
    const renderMenuDiv = document.querySelector('.render-menu');
    renderMenuDiv.innerHTML = ''; // Limpa o menu atual

    const tamanhoMaximoTexto = 25;
    let encontrouItem = false;
    let paginaEncontrada = null;

    const titulosExibidos = new Map(); // Map para armazenar títulos e seus índices

    api.forEach(item => {
        const titulo = item.nome_page.trim();

        // Verifica se o item corresponde ao filtro de pesquisa
        if (
            filtro === '' ||
            titulo.toLowerCase().includes(filtro.toLowerCase()) ||
            `#${item.pagina}` === filtro ||
            item.pagina.toString() === filtro
        ) {
            if (ocultarDuplicados && titulosExibidos.has(titulo)) {
                // Se o item atual corresponde ao slideIndex, transfere a marcação para o primeiro item
                if (slideIndex + 1 === item.pagina) {
                    const menuItemAnterior = titulosExibidos.get(titulo);
                    menuItemAnterior.querySelector('.horizontal-menu-activer').classList.add('active-menu');
                }
                return;
            }

            encontrouItem = true;
            paginaEncontrada = item.pagina;

            const textoReduzido = reduzirTexto(titulo, tamanhoMaximoTexto);

            const menuItem = document.createElement('a');
            menuItem.innerHTML = `
                <span title="${titulo}">${textoReduzido}</span>
                <span class="horizontal-menu-activer ${slideIndex + 1 === item.pagina ? "active-menu" : ""}"></span>
            `;

            menuItem.onclick = () => {
                fecharMenuSumario();
                glider.scrollItem(item.pagina - 1); // Subtrai 1 para ajustar o índice
            }

            renderMenuDiv.appendChild(menuItem);
            titulosExibidos.set(titulo, menuItem); // Armazena o menuItem criado
        }
    });

    if (!encontrouItem) {
        const menuItemErro = document.createElement('div');
        menuItemErro.className = `erro-notfound-menu`;
        menuItemErro.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
            <p style="color:#000;">Erro: Nenhum item encontrado para "${filtro}"</p>
        `;
        renderMenuDiv.appendChild(menuItemErro);
    }

    return paginaEncontrada;
}

// Função para habilitar/desabilitar a exibição de duplicados e realizar pesquisa
function handleSearch() {
    const searchInput = document.querySelector('.searcListMateria input');
    searchInput.addEventListener('input', () => {
        const filtro = searchInput.value.trim();
        itemnsMenu(filtro, savedPosition, filtroDuplicadoSumario);
    });

    const butaoIr = document.querySelector('.searcListMateria span');
    butaoIr.onclick = () => {
        const filtro = searchInput.value.trim();
        const irItem = itemnsMenu(filtro, savedPosition, filtroDuplicadoSumario);
        if (irItem !== null) {
            glider.scrollItem(irItem);
        }
    };
}

function modificarFontes(slideIndex) {
    const pageData = api[slideIndex];

    // Criar um Font padrão para Página
    const FontPadrao = {
        titulo: getComputedStyle(document.documentElement).getPropertyValue('--tamanho-de-font-para-paragrafo-sidebar-default:').trim(),
        paragrafos: getComputedStyle(document.documentElement).getPropertyValue('--font-para-paragrafos-default').trim(),
        font_familly: getComputedStyle(document.documentElement).getPropertyValue('--familia-da-font-paragrafo-default').trim(),
        cor_fonte: getComputedStyle(document.documentElement).getPropertyValue('--cor-da-font-paragrafo-default').trim(),
        alinhamento_texto: getComputedStyle(document.documentElement).getPropertyValue('--alinhamento-do-texto-paragrafo-default').trim(),
        hifens: getComputedStyle(document.documentElement).getPropertyValue('--hifens-da-fonte-paragrafo-default').trim()
    };

    if (pageData && pageData.paramentros && pageData.paramentros.fonte) {
        const {
            titulo = FontPadrao.titulo,
            paragrafos = FontPadrao.paragrafos,
            font_familly = FontPadrao.font_familly,
            cor_fonte = FontPadrao.cor_fonte,
            alinhamento_texto = FontPadrao.alinhamento_texto,
            hifens = FontPadrao.hifens
        } = pageData.paramentros.fonte;

        const verificarItem = pageData.paramentros.logo;
        if (Object.values(verificarItem).length === 0) {
            // Reverter para as fontes padrão
            document.documentElement.style.setProperty('--tamanho-de-font-para-paragrafo-sidebar-default', FontPadrao.titulo);
            document.documentElement.style.setProperty('--font-para-paragrafos-default', FontPadrao.paragrafos);
            document.documentElement.style.setProperty('--familia-da-font-paragrafo-default', FontPadrao.font_familly);
            document.documentElement.style.setProperty('--cor-da-font-paragrafo-default', FontPadrao.cor_fonte);
            document.documentElement.style.setProperty('--alinhamento-do-texto-paragrafo-default', FontPadrao.alinhamento_texto);
            document.documentElement.style.setProperty('--hifens-da-fonte-paragrafo-default', FontPadrao.hifens);

            return;
        }

        // Selecionar o contêiner correto para o slide atual
        const slider_container = document.querySelector(pageData.id_component);

        // console.log(cor_fonte)

        if (slider_container) {
            // Selecionar todos os parágrafos dentro do contêiner
            const paragrafos_slider = slider_container.querySelectorAll("p") ? slider_container.querySelectorAll("p") : slider_container.querySelectorAll("span");

            paragrafos_slider.forEach((p) => {
                p.style.fontSize = paragrafos;
                p.style.fontFamily = font_familly;
                p.style.color = cor_fonte;
                p.style.textAlign = alinhamento_texto;
                p.style.hyphens = hifens;
            });

            // Aplicar estilos globais para a página atual
            document.documentElement.style.setProperty('--tamanho-de-font-para-paragrafo-sidebar', titulo);
            document.documentElement.style.setProperty('--font-para-paragrafos', paragrafos);
            document.documentElement.style.setProperty('--familia-da-font-paragrafo', font_familly);
            document.documentElement.style.setProperty('--cor-da-font-paragrafo', cor_fonte);
            document.documentElement.style.setProperty('--alinhamento-do-texto-paragrafo', alinhamento_texto);
            document.documentElement.style.setProperty('--hifens-da-fonte-paragrafo', hifens);
        } else {
            console.error('O contêiner do slider não foi encontrado.');
        }

    } else {
        // Se não houver dados ou fontes personalizadas, reverter para as fontes padrão
        document.documentElement.style.setProperty('--tamanho-de-font-para-paragrafo-sidebar', FontPadrao.titulo);
        document.documentElement.style.setProperty('--font-para-paragrafos', FontPadrao.paragrafos);
        document.documentElement.style.setProperty('--familia-da-font-paragrafo', FontPadrao.font_familly);
        document.documentElement.style.setProperty('--cor-da-font-paragrafo', FontPadrao.cor_fonte);
        document.documentElement.style.setProperty('--alinhamento-do-texto-paragrafo', FontPadrao.alinhamento_texto);
        document.documentElement.style.setProperty('--hifens-da-fonte-paragrafo', FontPadrao.hifens);

        if (typeof glider !== 'undefined') {
            glider.refresh(true);
            glider.updateControls();
        } else {
            console.error('O objeto glider não está definido.');
        }
    }
}

function modificarArrows(slideIndex) {
    const pageData = api[slideIndex];

    // Criar um Font padrão para Página
    const SetaPadrao = {
        corSetas: getComputedStyle(document.documentElement).getPropertyValue('--cor-das-setas-default').trim(),
        corFundo: getComputedStyle(document.documentElement).getPropertyValue('--cor-de-fundo-seta-default').trim(),
    };

    // console.log(SetaPadrao);

    if (pageData && pageData.paramentros && pageData.paramentros.setas) {

        const {
            corSetas = SetaPadrao.corSetas,
            corFundo = SetaPadrao.corFundo
        } = pageData.paramentros.setas;


        const verificarItem = pageData.paramentros.setas
        if (Object.values(verificarItem).length === 0) {

            document.documentElement.style.setProperty('--cor-das-setas', corSetas);
            document.documentElement.style.setProperty('--cor-de-fundo-seta', corFundo);
            return;
        }

        document.documentElement.style.setProperty('--cor-das-setas', corSetas);
        document.documentElement.style.setProperty('--cor-de-fundo-seta', corFundo);


    } else {

        document.documentElement.style.setProperty('--cor-das-setas', SetaPadrao.corSetas);
        document.documentElement.style.setProperty('--cor-de-fundo-seta', SetaPadrao.corFundo);

        if (typeof glider !== 'undefined') {
            glider.refresh(true);
            glider.updateControls();
        } else {
            console.error('O objeto glider não está definido.');
        }
    }
}

// Funçao Marcador
function adicionarMarcadores(slideIndex) {
    const dadosPagina = api[slideIndex]; // Obtenha os dados da página para o slide atual

    // console.log("Índice do Slide Atual:", slideIndex);

    // Verifica se os dados de configuração e marcadores estão disponíveis
    if (dadosPagina && dadosPagina.paramentros && dadosPagina.paramentros.marcador) {

        // Obtém configurações do slider como a classe do container e o atributo identificador do slider ativo
        const { _sliderClass, _attrActiver } = configuracaoSlider();
        // console.log(`Classe do Slider: ${_sliderClass} | Atributo Ativo: ${_attrActiver}`);

        // Seleciona todos os containers do slider na página
        const containersSlider = document.querySelectorAll(_sliderClass);

        if (containersSlider.length > 0) {
            // Itera sobre cada container do slider
            containersSlider.forEach((container) => {

                // Verifica se o container atual corresponde ao slideIndex fornecido
                if (container.getAttribute(_attrActiver) === String(slideIndex)) {
                    // console.log("Container correspondente encontrado:", container);

                    // Itera sobre cada marcador fornecido na API
                    dadosPagina.paramentros.marcador.forEach((marcador) => {
                        const {
                            tipo,
                            posicao,
                            palavras,
                            attr,
                            estilo_marcador_inject,
                            attr_inline,
                            attr_unitario,
                            fundo,
                            corTexto,
                            padding,
                            onclick,
                            palavrasIndex = [] // Lista de índices específicos para marcar (vazio para marcar todas)
                        } = marcador;

                        // Injeta estilo global se ainda não foi adicionado
                        if (estilo_marcador_inject) {
                            let tagEstilo = document.querySelector('#style-geral-marcador');
                            if (!tagEstilo) {
                                tagEstilo = document.createElement('style');
                                tagEstilo.id = 'style-geral-marcador';
                                document.head.appendChild(tagEstilo);
                            }
                            tagEstilo.textContent += estilo_marcador_inject.trim();
                        }

                        // Seleciona o parágrafo específico com base no tipo e posição
                        const paragrafo = container.querySelectorAll(tipo)[posicao];
                        if (paragrafo) {
                            const palavrasArray = palavras.split('|');

                            // Itera sobre cada palavra para aplicar marcações
                            palavrasArray.forEach((palavra) => {
                                // Encontra o índice para a palavra específica em `palavrasIndex`
                                const indicesParaMarcar = palavrasIndex.find(item => item[palavra])?.[palavra] || [];

                                // Configura atributos e estilos específicos para a palavra
                                let atributosInline = '';
                                let estilosEspecificos = '';

                                if (attr_unitario && attr_unitario[palavra]) {
                                    const atributosUnicos = attr_unitario[palavra];
                                    if (atributosUnicos.attr) {
                                        atributosUnicos.attr.split(',').forEach(attribute => {
                                            const [chave, valor] = attribute.split('=');
                                            if (chave && valor) {
                                                estilosEspecificos += `${chave.trim()}:${valor.replace(/\[|\]/g, '').trim()};`;
                                            }
                                        });
                                    }
                                    if (atributosUnicos.attr_inline) {
                                        atributosUnicos.attr_inline.split(',').forEach(attribute => {
                                            const [chave, valor] = attribute.split('=');
                                            if (chave && valor) {
                                                atributosInline += `${chave.trim()}="${valor.replace(/\[|\]/g, '').trim()}" `;
                                            }
                                        });
                                    }
                                }

                                // Adiciona atributos genéricos
                                let estilos = '';
                                if (attr) {
                                    attr.split(',').forEach(attribute => {
                                        const [chave, valor] = attribute.split('=');
                                        if (chave && valor) {
                                            estilos += `${chave.trim()}:${valor.replace(/\[|\]/g, '').trim()};`;
                                        }
                                    });
                                }

                                // Inclui estilo de fundo, cor e padding se definidos
                                estilos += `${fundo ? `background-color:${fundo}` : ""};${corTexto ? `color:${corTexto}` : ""};${padding ? `padding:${padding}` : ""}`;
                                estilos += estilosEspecificos;

                                // Cria uma expressão regular para encontrar a palavra exata (sem a flag "i" para sensibilidade a maiúsculas)
                                const regex = new RegExp(`(?!<span[^>]*>)(${palavra})(?!</span>)`, 'g');

                                let atributosInlineTodos = '';
                                if (attr_inline) {
                                    attr_inline.split(',').forEach(attribute => {
                                        const [chave, valor] = attribute.split('=');
                                        if (chave && valor) {
                                            atributosInlineTodos += `${chave.trim()}="${valor.replace(/\[|\]/g, '').trim()}" `;
                                        }
                                    });
                                }

                                // Armazena o conteúdo original para aplicar marcações específicas
                                let conteudoAtual = paragrafo.innerHTML;
                                let ocorrenciaIndex = 0;

                                // Substitui apenas as ocorrências específicas conforme o índice fornecido
                                conteudoAtual = conteudoAtual.replace(regex, (match) => {
                                    // Verifica se a ocorrência atual deve ser marcada
                                    if (indicesParaMarcar.includes(ocorrenciaIndex)) {
                                        let eventos = '';

                                        // Configura eventos de clique para palavras com `onclick`
                                        if (onclick) {
                                            onclick.forEach(evento => {
                                                if (evento.palavra === palavra) {
                                                    const nomeEvento = evento.acao;
                                                    const nomeFuncao = evento.funcao.split('(')[0];

                                                    // Cria a função no escopo global, se não existir
                                                    if (!window[nomeFuncao]) {
                                                        const tagScript = document.createElement('script');
                                                        tagScript.textContent = evento.funcao_script.trim();
                                                        document.body.appendChild(tagScript);
                                                    }
                                                    eventos += `${nomeEvento}="${nomeFuncao}()" `;
                                                }
                                            });
                                        }

                                        ocorrenciaIndex++;
                                        return `<span  ${atributosInline} ${atributosInlineTodos} style="${estilos}" ${eventos}>${match}</span>`;
                                    }

                                    // Incrementa o índice da ocorrência sem marcar, caso não esteja nos índices especificados
                                    ocorrenciaIndex++;
                                    return match;
                                });

                                paragrafo.innerHTML = conteudoAtual;
                            });
                        } else {
                            console.warn(`Elemento ${tipo} na posição ${posicao} não encontrado.`);
                        }
                    });

                }
            });

        } else {
            console.warn("Nenhum Slider Encontrado...");
        }

    } else {
        console.warn(`Dados do marcador não encontrados para o slide ${slideIndex}.`);
    }
}

// Atualiza as cores da página visível
function atualizarCoresdaNavegacao(slideIndex) {
    const pageData = api[slideIndex];

    // cores padroes que já vem definidas nas variaveis
    const defaultCores = {
        sidebar: getComputedStyle(document.documentElement).getPropertyValue('--fundo-siderbar-js-default'),
        fundo: getComputedStyle(document.documentElement).getPropertyValue('--fundo-carrosel-js-default'),
        icones: getComputedStyle(document.documentElement).getPropertyValue('--cor-dos-icones-siderbar-js-default'),
        anotacao: getComputedStyle(document.documentElement).getPropertyValue('--cor-dos-icones-de-anotacao-default'),
    };

    // console.log(defaultCores.sidebar)
    // console.log(defaultCores.fundo)
    // console.log(defaultCores.icones)

    if (pageData && pageData.paramentros && pageData.paramentros.cores) {
        const {
            sidebar = defaultCores.sidebar,
            fundo = defaultCores.fundo,
            icones = defaultCores.icones,
            iconesEspecificos = {},
        } = pageData.paramentros.cores;

        // deixa as variaveis de cores especificas...
        if (Object.values(iconesEspecificos).length === 0) {
            document.documentElement.style.setProperty('--cor-dos-icones-de-anotacao', defaultCores.anotacao);
        }

        //Cores personalizadas

        const _classCustom = Object.keys(iconesEspecificos);

        _classCustom.forEach(className => {
            const _elementoCustom = document.querySelector(className);
            // console.log(_elementoCustom);

            if (_elementoCustom) {
                // Aqui você pode aplicar a cor personalizada
                // _elementoCustom.style.color = iconesEspecificos[className].cor;
                document.documentElement.style.setProperty('--cor-dos-icones-de-anotacao', iconesEspecificos[className].cor);
            } else {
                // console.warn("Elemento não encontrado", className);
            }
        });


        const verificarItem = pageData.paramentros.cores;
        if (Object.values(verificarItem).length === 0) {
            document.documentElement.style.setProperty('--fundo-siderbar', defaultCores.sidebar);
            document.documentElement.style.setProperty('--fundo-carrosel', defaultCores.fundo);
            document.documentElement.style.setProperty('--cor-dos-icones-siderbar', defaultCores.icones);
            document.documentElement.style.setProperty('--cor-dos-icones-de-anotacao', defaultCores.anotacao);

            return;
        }


        document.documentElement.style.setProperty('--fundo-siderbar', sidebar);
        document.documentElement.style.setProperty('--fundo-carrosel', fundo);



        document.documentElement.style.setProperty('--cor-dos-icones-siderbar', icones);
    } else {

        glider.refresh(true);
        glider.updateControls()
        // console.log(defaultCores.sidebar)
        // console.log(defaultCores.fundo)
        // console.log(defaultCores.icones)
        // Se não há parâmetros, mantém os estilos padrão
        document.documentElement.style.setProperty('--fundo-siderbar', defaultCores.sidebar);
        document.documentElement.style.setProperty('--fundo-carrosel', defaultCores.fundo);
        document.documentElement.style.setProperty('--cor-dos-icones-siderbar', defaultCores.icones);
        document.documentElement.style.setProperty('--cor-dos-icones-de-anotacao', defaultCores.anotacao);

    }
}

// Função para injetar scripts na página
function injectScriptPage(slideIndex) {
    const pageData = api[slideIndex];

    // Remove scripts antigos antes de adicionar novos
    removeScriptsAnteriores();

    // Verifica se existe a chave "inserir_escript_pagina" na estrutura de parâmetros
    if (pageData && pageData.paramentros && pageData.paramentros.inserir_escript_pagina) {
        const scripts = pageData.paramentros.inserir_escript_pagina;

        scripts.forEach((scriptItem, index) => {
            // Verifica se o script já existe na página
            const existingScript = document.querySelector(`script[src="${scriptItem.src}"]`);
            if (!existingScript) {
                // Cria um elemento de script
                const scriptElement = document.createElement('script');
                scriptElement.src = scriptItem.src;

                // Atribui um ID único ao script
                scriptElement.id = `slide-script-${slideIndex}-${index}`;

                // Verifica a posição do script (head, body, etc.)
                let parentElement;
                switch (scriptItem.onde) {
                    case 'head':
                        parentElement = document.head;
                        break;
                    case 'body':
                        parentElement = document.body;
                        break;
                    case 'footer':
                        parentElement = document.querySelector('footer');
                        break;
                    default:
                        parentElement = document.body;
                }

                // Insere o script na posição especificada dentro do elemento pai
                const insertPosition = scriptItem.posicao || 'beforeend';
                parentElement.insertAdjacentElement(insertPosition, scriptElement);
            }
        });
    } else {

        // Atualiza o controle do glider caso não haja scripts
        glider.refresh(true);
        glider.updateControls();
    }
}

// Função para remover scripts antigos ao navegar para outro slide
function removeScriptsAnteriores() {
    const oldScripts = document.querySelectorAll('script[id^="slide-script-"]');
    oldScripts.forEach(script => {
        script.remove();
    });
}

// Função para forçar atualização das variáveis de animação
function AnimationVariablesUpPage(slideIndex) {
    const pageData = api[slideIndex];
    const variaveis = pageData?.forcarAtualizacao?.variaveis || [];

    // Atualiza o controle do glider se estiver definido
    if (typeof glider !== 'undefined') {

        glider.refresh(true);
        glider.updateControls();
    } else {
        console.error('O objeto glider não está definido.');
    }

    // Se houver variáveis para atualizar, aplica o reflow
    if (variaveis.length > 0) {
        aplicarReflowVariaveis(variaveis);
    }
}

// Função para aplicar o reflow e atualizar as variáveis de animação
function aplicarReflowVariaveis(variaveis) {
    // Define os valores de 'Entrada' e forçam o reflow


    variaveis.forEach(variable => {
        document.documentElement.style.setProperty(variable.Nome, variable.Entrada);
    });

    // Força o reflow
    void document.documentElement.offsetWidth;

    // Define os valores de 'Saida' após o reflow
    variaveis.forEach(variable => {
        document.documentElement.style.setProperty(variable.Nome, variable.Saida);
    });
}

// Função para injetar Estilo na página
function injectEstiloRender(slideIndex) {
    const pageData = api[slideIndex];

    // Remove links antigos antes de adicionar novos
    removeEstilosAnteriores();

    // Verifica se as URLs de estilos existem na estrutura de parâmetros
    if (pageData && pageData.paramentros && pageData.paramentros.inserir_estilo_pagina) {
        const urls = pageData.paramentros.inserir_estilo_pagina;

        urls.forEach((styleObj, index) => {
            if (styleObj.url) {
                // Cria um novo elemento <link> para o estilo
                const linkElement = document.createElement('link');
                linkElement.rel = 'stylesheet';
                linkElement.href = styleObj.url;
                linkElement.type = "text/css";

                // Atribui um ID único para o link
                linkElement.id = `slide-style-${slideIndex}-${index}`;

                // Adiciona o <link> ao head do documento
                document.head.appendChild(linkElement);
            }
        });
    } else {
        // Atualiza o controle do glider caso não haja estilos para injetar
        glider.refresh(true);
        glider.updateControls();
    }
}

// Função para remover estilos anteriores ao navegar para outro slide
function removeEstilosAnteriores() {
    const oldLinks = document.querySelectorAll('link[id^="slide-style-"]');
    oldLinks.forEach(link => {
        link.remove();
    });
}



// Atualiza o título e as cores ao inicializar
updatePageTitle(savedPosition);
atualizarCoresdaNavegacao(savedPosition);
adicionarLogo(savedPosition);
modificarFontes(savedPosition);
modificarArrows(savedPosition);
adicionarMarcadores(savedPosition);
adicionarFundo(savedPosition)
injectScriptPage(savedPosition);
AnimationVariablesUpPage(savedPosition);
injectEstiloRender(savedPosition);

// Rederizar Menu
const irItem = itemnsMenu('', savedPosition, filtroDuplicadoSumario);
// console.log(irItem)
// Pesquisar Item Menu
handleSearch();

// console.log(api[savedPosition]);



