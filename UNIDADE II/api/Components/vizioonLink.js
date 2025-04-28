

async function vizioonLink(slideIndex) {
    // console.log(slideIndex)

    const config = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = config.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;


    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na api pegar informações
    const pageData = api[slideIndex];


    // Array com as configurações dos botões
    const arrayButtonsActionsLink = [
        {
            icon: `<svg class="componente-link-vizioon-page-dro-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>`,
            text: 'Abrir na página',
            action: 'vizioonAbrirPagina'
        },
        {
            icon: `<svg class="componente-link-vizioon-page-dro-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>`,
            text: 'Abrir em nova aba',
            action: 'vizioonAbrirExterno'
        }
    ];

    // Função que cria o wrapper e o menu para cada link
    function transformarLink(link) {
        if (link.classList.contains('componente-link-vizioon-page-drop')) return;

        link.className += ' componente-link-vizioon-page-drop';

        const parentDiv = link.closest('div');
        if (!parentDiv) return;

        if (getComputedStyle(parentDiv).position === 'static') {
            parentDiv.style.position = 'relative';
        }

        const menu = document.createElement('div');
        menu.className = 'menu';

        menu.innerHTML = arrayButtonsActionsLink.map(button => `
            <button class="componente-link-vizioon-page-dro-icon-menu-item" onclick="${button.action}('${link.href}')">
                ${button.icon}
                <span>${button.text}</span>
            </button>
        `).join('');

        parentDiv.appendChild(menu);

        // Variável para controlar o estado do menu
        let menuTimeout;

        // Função para atualizar posição do menu
        function updateMenuPosition(e) {
            const linkRect = link.getBoundingClientRect();
            const parentRect = parentDiv.getBoundingClientRect();

            // Posição do mouse relativa ao pai
            const mouseX = e.clientX - parentRect.left;
            const mouseY = e.clientY - parentRect.top;

            // Ajuste para manter o menu próximo ao mouse
            menu.style.left = `${mouseX}px`;
            menu.style.top = `${mouseY + 20}px`; // 20px abaixo do cursor
        }

        // Mostrar menu e começar a seguir o mouse
        link.addEventListener('mouseenter', (e) => {
            clearTimeout(menuTimeout);
            updateMenuPosition(e);
            menu.classList.add('visible');
        });

        // Atualizar posição do menu enquanto move o mouse
        link.addEventListener('mousemove', (e) => {
            if (menu.classList.contains('visible')) {
                updateMenuPosition(e);
            }
        });

        // Impedir comportamento padrão do link ao clicar
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão de navegação
            e.stopPropagation(); // Impede que eventos se propaguem para outros manipuladores
            menu.classList.add('visible'); // Abre o menu ou modal
        });

        // Eventos do menu
        menu.addEventListener('mouseenter', () => {
            clearTimeout(menuTimeout);
        });

        // Função compartilhada para esconder o menu
        function hideMenu() {
            menuTimeout = setTimeout(() => {
                if (!menu.matches(':hover')) {
                    menu.classList.remove('visible');
                }
            }, 100);
        }

        // Eventos de saída
        link.addEventListener('mouseleave', hideMenu);
        menu.addEventListener('mouseleave', hideMenu);
    }


    window.vizioonAbrirPagina = function (url) {
        // Função para extrair o ID do vídeo do YouTube
        function getYouTubeVideoId(url) {
            // Regex para diferentes formatos de URL do YouTube
            const patterns = [
                /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i,    // Normal youtube.com/watch?v=ID
                /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^/?]+)/i,      // Embed youtube.com/embed/ID
                /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^/?]+)/i                 // Short youtu.be/ID
            ];

            for (const pattern of patterns) {
                const match = url.match(pattern);
                if (match) return match[1];
            }

            return null;
        }

        // Verifica se é um link do YouTube
        const videoId = getYouTubeVideoId(url);
        let iframeContent;

        if (videoId) {
            // Se for YouTube, usa o formato de embed
            iframeContent = `
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}"
                    class="w-100 h-100 rounded"
                    style="min-height: 80vh; border: none;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>`;
        } else {
            // Se não for YouTube, usa o iframe normal
            iframeContent = `
                <iframe 
                    src="${url}"
                    class="w-100 h-100 rounded"
                    style="min-height: 80vh; border: none;"
                    onload="this.style.height = '80vh';"
                    onerror="window.location.href = '${url}'"
                ></iframe>`;
        }

        const modalContent = `
            <div class="card h-100 border-0">
                <div class="card-body p-0 animation_modal">
                    ${iframeContent}
                </div>
            </div>
        `;

        try {
            vizioonModal(
                false,
                modalContent,
                {
                    title: [
                        {
                            label: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>`,
                            classe: "text-primary",
                            acao: `window.open('${url}', '_blank')`
                        }
                    ],
                    footer: false
                },
                null,
                ["modal-dialog-centered", "modal-fullscreen"],
                [
                    {
                        _class: ".animation_modal",
                        _animation: "animate__animated animate__fadeIn"
                    }
                ],
                true
            );

            // Adiciona handler para erro do iframe
            const iframe = document.querySelector('.animation_modal iframe');
            iframe.addEventListener('error', () => {
                window.location.href = url;
            });

        } catch (error) {
            // Fallback: se algo der errado, redireciona para a URL
            console.warn('Não foi possível abrir no modal, redirecionando...', error);
            window.location.href = url;
        }
    };

    window.vizioonAbrirExterno = function (url) {
        window.open(url, '_blank');
    };

    // Modifique a função inicializarVizioonLinks para aceitar o array de índices
    function inicializarVizioonLinks(containerClass = '', linksAtivar = []) {
        function encontrarLinks() {
            if (containerClass) {
                const containers = document.getElementsByClassName(containerClass);
                // console.log(containers )
                return Array.from(containers).reduce((links, container) => {
                    return [...links, ...container.getElementsByTagName('a')];
                }, []);
            }
            return Array.from(document.getElementsByTagName('a'));
        }

        // Transformar links existentes
        const links = encontrarLinks();
        // console.log(links)
        links.forEach((link, index) => {
            // Se linksAtivar está vazio ou contém o índice atual, transforma o link
            if (linksAtivar.length === 0 || linksAtivar.includes(index)) {
                transformarLink(link);
            }
        });

        // Observar mudanças no DOM
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        if (containerClass) {
                            if (node.classList.contains(containerClass)) {
                                const novosLinks = Array.from(node.getElementsByTagName('a'));
                                novosLinks.forEach((link, index) => {
                                    if (linksAtivar.length === 0 || linksAtivar.includes(index)) {
                                        transformarLink(link);
                                    }
                                });
                            }
                        } else {
                            const novosLinks = Array.from(node.getElementsByTagName('a'));
                            novosLinks.forEach((link, index) => {
                                if (linksAtivar.length === 0 || linksAtivar.includes(index)) {
                                    transformarLink(link);
                                }
                            });
                        }
                    }
                });
            });
        });

        const elementoObservado = containerClass
            ? document.getElementsByClassName(containerClass)[0]?.parentElement || document.body
            : document.body;

        observer.observe(elementoObservado, {
            childList: true,
            subtree: true
        });
    }


    // // Iniciar quando o DOM estiver pronto
    // document.addEventListener('DOMContentLoaded', () => {
    //     // Você pode passar a classe do container ou deixar vazio para todos os links
    //     inicializarVizioonLinks('sua-classe-aqui');
    //     // ou inicializarVizioonLinks(); para todos os links
    // });

    if (pageData && pageData.paramentros && pageData.paramentros.link && pageData.paramentros.link.ativo && pageData.paramentros.link.ativo === true) {
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // Pega o array links_ativar ou usa array vazio como fallback
                // console.log(container)
                const linksAtivar = pageData.paramentros.link.links_ativar || [];

                inicializarVizioonLinks(container.className, linksAtivar);
            }
        });
    }



}

vizioonLink(savedPosition)

