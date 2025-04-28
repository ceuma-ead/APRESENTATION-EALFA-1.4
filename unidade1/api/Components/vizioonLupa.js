/**
 * Sistema de Lupa - Código Completo Final
 * Versão que respeita data-zoom independentemente das configurações
 */

/**
 * Função para adicionar funcionalidade de lupa às imagens
 * Agora respeita data-zoom="false" mesmo quando ativo=true
 * @param {string} containerClass - Classe do container que contém as imagens
 * @param {Array} imagensAtivas - Array de índices das imagens que devem ter lupa
 */
async function Lupa(containerClass, imagensAtivas = []) {
    // Função para encontrar todas as imagens no container
    function encontrarImagens() {
        if (containerClass) {
            const containers = document.getElementsByClassName(containerClass);
            return Array.from(containers).reduce((images, container) => {
                return [...images, ...container.getElementsByTagName('img')];
            }, []);
        }
        return [];
    }

    // Obter configurações para o nome do atributo
    const config = await global__Config();
    const { Lupa } = config;
    const zoomAttr = Lupa?.attr || 'data-zoom';

    // Pegar todas as imagens
    const allImages = encontrarImagens();

    // Validar os índices de imagensAtivas
    const validIndices = imagensAtivas.filter(index => index < allImages.length);

    // Selecionar imagens baseadas nos índices fornecidos ou todas se não houver índices
    let targetImages = validIndices.length > 0
        ? validIndices.map(index => allImages[index])
        : allImages;

    // NOVA VERIFICAÇÃO: Filtrar as imagens que têm data-zoom="false"
    targetImages = targetImages.filter(img => {
        // Verificar o atributo correto (data-zoom)
        const dataZoomValue = img.getAttribute(zoomAttr);
        
        // Verificar também o atributo com erro de digitação (data-zooom)
        const dataZooomValue = img.getAttribute('data-zooom');
        
        // Se qualquer um dos atributos for "false", excluir a imagem
        if (dataZoomValue === 'false' || dataZooomValue === 'false') {
            return false;
        }
        
        return true;
    });

    // Processar cada imagem
    targetImages.forEach(img => {
        // Criar wrapper se ainda não existir
        if (!img.parentElement.classList.contains('img-photo-actions')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'img-photo-actions';
            wrapper.style.cssText = `
                position: relative;
                display: inline-block;
                width: 100%;
            `;

            // Mover a imagem para o wrapper
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);

            // Adicionar botão de lupa
            wrapper.innerHTML += `
                <button class="toggle-lupa">
                    <i data-lucide="zoom-in"></i>
                </button>
            `;

            // Inicializar ícones
            lucide.createIcons();
        }
    });

    let zoomist;

    // Configurar os eventos dos botões
    const imgPhotoActions = document.querySelectorAll(".img-photo-actions");
    imgPhotoActions.forEach((item) => {
        const btns = item.querySelectorAll("button");
        const img = item.querySelector("img");
        const modal = document.getElementById("modal-imagem");
        const modal_imagem = modal.querySelector(".imagem-zoomist");

        btns.forEach((btn, idx) => {
            btn.id = "openImagem" + idx;
            btn.onclick = () => {
                modal_imagem.src = img.src;
                modal.style.display = "flex";

                if (zoomist) {
                    zoomist.update();
                } else {
                    zoomist = new Zoomist("#zoomist", {
                        slider: true,
                        zoomer: true,
                        draggable: true,
                        wheelable: true,
                    });
                }
            };
        });
    });

    // Configurar os eventos de clique na lupa
    const btn_lupa = document.querySelectorAll(".toggle-lupa");
    btn_lupa.forEach((btn) => {
        btn.onclick = (e) => {
            e.stopPropagation();

            const elementosPai = e.target.closest('.img-photo-actions') || e.target.parentNode;
            const link_da_img = elementosPai.querySelector("img");

            if (link_da_img) {
                const modal = document.getElementById("modal-imagem");
                const modal_imagem = modal.querySelector(".imagem-zoomist");
                modal_imagem.src = link_da_img.src;
                modal.style.display = "flex";

                if (zoomist) {
                    zoomist.update();
                } else {
                    zoomist = new Zoomist("#zoomist", {
                        slider: true,
                        zoomer: true,
                        draggable: true,
                        wheelable: true,
                    });
                }
            }
        };
    });

    // Configurar botão de fechar modal
    const closeBtn = document.querySelector(".close-imagem");
    if (closeBtn) {
        closeBtn.onclick = () => {
            const modal = document.getElementById("modal-imagem");
            modal.style.display = "none";
        };
    }
}

/**
 * Função para adicionar lupa às imagens baseada no atributo data-zoom
 * @param {string} containerClass - Classe do container que contém as imagens
 * @param {Array} imagensAtivas - Array de índices de imagens que devem ter lupa (caso não tenham data-zoom)
 */
async function AtivarLupaAttr(containerClass, imagensAtivas = []) {
    // Função para encontrar todas as imagens no container
    function encontrarImagens() {
        if (containerClass) {
            const containers = document.getElementsByClassName(containerClass);
            return Array.from(containers).reduce((images, container) => {
                return [...images, ...container.getElementsByTagName('img')];
            }, []);
        }
        return [];
    }

    const config = await global__Config();
    const { Lupa } = config;
    const zoomAttr = Lupa?.attr || 'data-zoom'; // Nome do atributo a ser usado

    // Pegar todas as imagens do container
    const allImages = encontrarImagens();
    
    // Lógica para selecionar imagens baseada nos atributos data-zoom ou data-zooom
    const targetImages = allImages.filter(img => {
        // Verificar o atributo correto (data-zoom)
        const dataZoomValue = img.getAttribute(zoomAttr);
        
        // Verificar também o atributo com erro de digitação (data-zooom)
        const dataZooomValue = img.getAttribute('data-zooom');
        
        // Determinar o valor efetivo (prioriza data-zoom se ambos existirem)
        const effectiveValue = dataZoomValue !== null ? dataZoomValue : dataZooomValue;
        
        // Se data-zoom="true" (ou data-zooom="true"), incluir a imagem
        if (effectiveValue === 'true') return true;
        
        // Se data-zoom="false" (ou data-zooom="false"), excluir a imagem
        if (effectiveValue === 'false') return false;
        
        // Se não tem nenhum atributo ou tem outro valor, verifica se está em imagensAtivas
        const imgIndex = Array.from(allImages).indexOf(img);
        return imagensAtivas.includes(imgIndex);
    });

    // Processar cada imagem selecionada
    targetImages.forEach(img => {
        // Criar wrapper se ainda não existir
        if (!img.parentElement.classList.contains('img-photo-actions')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'img-photo-actions';
            wrapper.style.cssText = `
                position: relative;
                display: inline-block;
                width: 100%;
            `;

            // Mover a imagem para o wrapper
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);

            // Adicionar botão de lupa
            wrapper.innerHTML += `
                <button class="toggle-lupa">
                    <i data-lucide="zoom-in"></i>
                </button>
            `;

            // Inicializar ícones
            lucide.createIcons();
        }
    });

    let zoomist;

    // Configurar eventos dos botões
    document.querySelectorAll(".img-photo-actions").forEach(item => {
        const btn = item.querySelector(".toggle-lupa");
        const img = item.querySelector("img");
        const modal = document.getElementById("modal-imagem");
        const modal_imagem = modal.querySelector(".imagem-zoomist");

        btn.onclick = () => {
            modal_imagem.src = img.src;
            modal.style.display = "flex";

            if (zoomist) {
                zoomist.update();
            } else {
                zoomist = new Zoomist("#zoomist", {
                    slider: true,
                    zoomer: true,
                    draggable: true,
                    wheelable: true,
                });
            }
        };
    });

    // Configurar botão de fechar modal
    const closeBtn = document.querySelector(".close-imagem");
    if (closeBtn) {
        closeBtn.onclick = () => {
            document.getElementById("modal-imagem").style.display = "none";
        };
    }
}

/**
 * Função para ativar a lupa em um slide específico
 * @param {number} slideIndex - Índice do slide atual
 */
async function vizioonLupa(slideIndex) {
    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;

    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na API e pegar informações
    const pageData = api[slideIndex];

    // Verificar como as lupas devem ser ativadas
    if (pageData?.paramentros?.lupa?.ativo === true) {
        // Modo padrão: ativa lupas para todos ou para índices específicos
        // AGORA TAMBÉM RESPEITA data-zoom="false"
        const imagensAtivas = pageData.paramentros.lupa.imgs_ativas || [];
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                Lupa(container.className, imagensAtivas);
            }
        });
    } else if (pageData?.paramentros?.lupa?.ativo === false) {
        // Modo com atributo: usa data-zoom para determinar quais imagens terão lupa
        const imagensAtivas = pageData.paramentros.lupa.imgs_ativas || [];
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                AtivarLupaAttr(container.className, imagensAtivas);
            }
        });
    }
}

/**
 * HTML necessário para o modal de zoom
 * Adicione este HTML ao seu documento se ainda não existir
 */
function criarElementosHTML() {
    // Verifique se o modal já existe
    if (!document.getElementById('modal-imagem')) {
        const modalHTML = `
        <div id="modal-imagem" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; justify-content: center; align-items: center;">
            <div class="close-imagem" style="position: absolute; top: 20px; right: 30px; color: white; font-size: 30px; cursor: pointer;">
                <i data-lucide="x"></i>
            </div>
            <div id="zoomist" style="width: 80%; height: 80%;">
                <img class="imagem-zoomist" src="" style="max-width: 100%; max-height: 100%;">
            </div>
        </div>
        `;
        
        // Adicionar o modal ao final do body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Inicializar ícones
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Executar a criação dos elementos HTML necessários quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    criarElementosHTML();
    
    // Se você tiver a posição salva, ative a lupa para o slide atual
    if (typeof savedPosition !== 'undefined') {
        vizioonLupa(savedPosition);
    }
});

// Exportar as funções para uso global
if (typeof window !== 'undefined') {
    window.Lupa = Lupa;
    window.AtivarLupaAttr = AtivarLupaAttr;
    window.vizioonLupa = vizioonLupa;
}