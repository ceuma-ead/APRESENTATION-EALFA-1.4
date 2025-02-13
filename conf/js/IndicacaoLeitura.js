

async function initLivros() {

    const config = await global__Config();
    // console.log(config)
    const { Lupa } = config;
    // console.log(Lupa)

    const livros = [
        {
            titulo: "Livro 1: Tecnologia dos alimentos",
            descricao: "Capítulo 1, 2 e 3: Tecnologia dos alimentos.",
            imagem: "./assets/unidade/livro.png",
            thumbnail: "./assets/unidade/Livro.png",
            content: `
                <p>Leia o capítulo 2 do livro: CARELLE, Ana Cláudia.<strong>Tecnologia dos alimentos: principais etapas da cadeia produtiva. </strong> São Paulo: Érica, 2015.</p>
                <p>Neste capítulo, você encontrará informações sobre:</p>
                 <ul class="p-2">
                    <li>Conservação dos alimentos.</li>
                </ul>

                <div class="row justify-content-center">
                    <div class="col-12 text-center my-2">
                        <a target="_blank" href="https://pergamum.grupoceuma.com.br/"
                        class="btn btn-outline-secondary d-inline-flex align-items-center gap-2" 
                        style="border:1px dashed #ccc;font-size:1rem !important;">
                        <i data-lucide="album" style="color:#FF8A00;"></i> Ir para o acervo</a>
                    </div>
                </div>`
        }

    ];

    // Função para scroll
    function scrollThumbnails(direction) {
        const container = document.getElementById('thumbnails-container');
        const scrollAmount = 85;

        if (direction === 'up') {
            container.scrollBy({
                top: -scrollAmount,
                behavior: 'smooth'
            });
        } else {
            container.scrollBy({
                top: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    let currentIndex = 0;

    // Função atualizada para scroll
    function scrollThumbnails(direction) {
        const container = document.getElementById('thumbnails-container');
        const thumbnails = container.getElementsByClassName('thumbnail');
        const totalItems = thumbnails.length;

        // Remove borda de todos os items
        Array.from(thumbnails).forEach(thumb => {
            thumb.style.border = 'none';
            thumb.classList.remove('thumbnail-active');
        });

        // Atualiza o índice baseado na direção
        if (direction === 'up') {
            currentIndex = Math.max(0, currentIndex - 1);
        } else {
            currentIndex = Math.min(totalItems - 1, currentIndex + 1);
        }

        // Pega o thumbnail atual
        const currentThumbnail = thumbnails[currentIndex];

        // Adiciona borda e classe ativa

        currentThumbnail.classList.add('thumbnail-active');

        // Scroll até o item
        currentThumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Carrega o preview do item atual
        const livroAtual = livros[currentIndex];
        carregarPreview(livroAtual);
        aplicarClasseAnimada(previewImg, "_sugirEsquerdaAndando_1");
    }


    const thumbnailsContainer = document.getElementById("thumbnails-container");
    const previewImg = document.getElementById("preview-img");
    const contentAction = document.getElementById("content-livro-action");
    const containerWrapper = document.querySelector('.thumbnails-container-render-content');

    // Função para criar thumbnails
    function criarThumbnail(livro) {
        const imgElement = document.createElement("img");
        imgElement.src = livro.thumbnail;
        imgElement.alt = livro.titulo;
        imgElement.className = "thumbnail img-thumbnail";
        imgElement.style.width = "50px";
        imgElement.style.height = "75px";
        imgElement.style.cursor = "pointer";

        // Adiciona evento de clique
        imgElement.addEventListener("click", () => {
            // Remove a classe ativa de todas as thumbnails
            const allThumbnails = document.querySelectorAll('.thumbnail');
            allThumbnails.forEach(thumb => {
                thumb.classList.remove("thumbnail-active");
            });

            // Adiciona a classe ativa apenas na thumbnail clicada
            imgElement.classList.add("thumbnail-active");

            carregarPreview(livro);
            aplicarClasseAnimada(previewImg, "_sugirEsquerdaAndando_1");
        });

        return imgElement;
    }

    // Função para atualizar o preview
    function carregarPreview(livro) {
        previewImg.src = livro.imagem; // Atualiza a imagem principal
        previewImg.setAttribute(Lupa?.attr,true)
        contentAction.innerHTML = livro.content; // Carrega o conteúdo dinâmico
    }

    // Função genérica para reaplicar classe de animação
    function aplicarClasseAnimada(elemento, classeAnimacao) {
        if (!elemento) return;

        // Remove a classe de animação existente
        elemento.classList.remove(classeAnimacao);

        // Reaplica a animação utilizando requestAnimationFrame
        requestAnimationFrame(() => {
            elemento.classList.add(classeAnimacao);
        });
    }

    // Função para verificar se as thumbnails já existem
    function renderizarThumbnails() {
        if (thumbnailsContainer.childElementCount === 0) {
            containerWrapper.innerHTML = "";

            // Criar botões
            const upButton = document.createElement('button');
            upButton.className = 'scroll-button scroll-up';
            upButton.innerHTML = '<i data-lucide="chevron-up"></i>';
            upButton.onclick = () => scrollThumbnails('up');

            const downButton = document.createElement('button');
            downButton.className = 'scroll-button scroll-down';
            downButton.innerHTML = '<i data-lucide="chevron-down"></i>';
            downButton.onclick = () => scrollThumbnails('down');


            // Ocultar botões se houver apenas um livro
            if (livros.length === 1) {
                upButton.classList.add("d-none");
                downButton.classList.add("d-none");
            }


            // Adicionar estrutura
            containerWrapper.appendChild(upButton);
            containerWrapper.appendChild(thumbnailsContainer);
            containerWrapper.appendChild(downButton);

            if (livros.length > 1) {
                livros.forEach((livro, index) => {
                    const thumbnail = criarThumbnail(livro);
                    thumbnailsContainer.appendChild(thumbnail);


                    // Adiciona classe ativa ao primeiro item (index 0)
                    if (index === 0) {
                        thumbnail.classList.add('thumbnail-active');
                    }
                });
            }
        }

        lucide.createIcons();
    }

    // Renderizar thumbnails uma única vez
    renderizarThumbnails();

    // Carregar o primeiro livro como padrão
    carregarPreview(livros[0]);

    lucide.createIcons();
}

// Inicia o sistema de livros
initLivros();
