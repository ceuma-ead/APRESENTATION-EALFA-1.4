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

    // Pegar todas as imagens e filtrar se necessário
    const allImages = encontrarImagens();

    // Validar os índices de imagensAtivas
    const validIndices = imagensAtivas.filter(index => index < allImages.length);

    // Selecionar apenas a **primeira imagem** baseada no índice fornecido
    const targetImages = validIndices.length > 0
        ? validIndices.map(index => allImages[index]) // Todas as imagens válidas
        : allImages;


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

    // Configurar os eventos dos botões - primeiro bloco
    const imgPhotoActions = document.querySelectorAll(".img-photo-actions");
    imgPhotoActions.forEach((item, index) => {
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

    // Configurar os eventos dos botões - segundo bloco
    const btn_lupa = document.querySelectorAll(".toggle-lupa");
    btn_lupa.forEach((btn, index) => {
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
    // console.log(config)
    const { Lupa } = config;
    // console.log(Lupa)

    // Pegar todas as imagens e filtrar se necessário
    const allImages = encontrarImagens();

    // Filtrar imagens que possuem data-zoom="true"
    // const imagesWithZoom = allImages.filter(img => img.getAttribute(Lupa?.attr) === 'true');
    const imagesWithZoom = allImages.filter(img => img.getAttribute(Lupa?.attr));

    // Validar os índices de imagensAtivas APENAS se data-zoom não estiver definido
    const validIndices = imagensAtivas.filter(index => index < allImages.length);

    // Combinar critérios: data-zoom tem prioridade sobre índices
    const targetImages = imagesWithZoom.length > 0 
        ? imagesWithZoom 
        : validIndices.map(index => allImages[index]);

    // Processar cada imagem
    targetImages.forEach(img => {
        // Verificar novamente o data-zoom para garantir (caso tenha vindo de imagensAtivas)
        if (img.getAttribute('data-zoom') !== 'true') return;

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

    // Configurar eventos dos botões (versão simplificada)
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

    // Verificar se o parâmetro "lupa" está ativo
    if (pageData?.paramentros?.lupa?.ativo === true) {
        const imagensAtivas = pageData.paramentros.lupa.imgs_ativas || []; // Captura os índices
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // console.log(imagensAtivas)
                Lupa(container.className, imagensAtivas); // Passa os índices para a função Lupa
            }
        });
    } else if (pageData?.paramentros?.lupa?.ativo === false) {
        const imagensAtivas = pageData.paramentros.lupa.imgs_ativas || []; // Captura os índices
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // console.log(imagensAtivas)
                AtivarLupaAttr(container.className, imagensAtivas); // Passa os índices para a função Lupa
            }
        });
    }
}


vizioonLupa(savedPosition);
