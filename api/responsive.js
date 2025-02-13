const responsivo = [
    {
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media": "(min-width: 1520px)", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous": `

        #pprancheta {
        margin-top: .5rem;
        font-size: 1.2rem !important;
        }

        #prancheta {
        width: 500px;
        height: 540px;
        max-width: 170%;
        }

        #important-saber{
        position: absolute;
        width: 32%;
        left: -17%;
        top: -3%;
        z-index: 100;
        }

        #para-pensar{
        left: -10%;
        }

        a.btn.btn-outline-secondary.d-inline-flex.align-items-center.gap-2 {
        font-size: 2rem !important;
        }

        .accordion-saibamais {
        font-size: 2rem;
        }

        `,

        // Atualização Forçada onde ele está aparecendo
        "variantes": `
        --tamanho-de-font-para-paragrafo-sidebar=[1rem];
        --tamanho-dos-icones-siderbar=[2rem];
        --tamanho-x-y-imagem=[7%];
        // --tamanho-do-texto-do-paragrafo-header=[1.2rem];
        // --font-para-paragrafos=[1rem];
        // Tamanho do container LogoCeuma;
        --logo-div-y=[6rem];
        --logo-div-x=[6rem];

        `,
        "atualizacaoBrutaElementos": [
            // Exemplos de atualizações brutas de elementos
            // {
            // "Elemento":"p",
            // "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            // "scriptAtualizacao":`
            // [document.querySelectorAll(p)] => var[p] {
            // p.fontSize = 2rem;
            // }
            // `
            // }
        ]
    },
    {
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media": "(min-width: 1248px) and (max-width: 1366px)  ", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous": `

                .pagina-tipo-texto--box-texto p {
                font-size: 1.5rem !important;
                }
        `,

        // Atualização Forçada onde ele está aparecendo
        "variantes": `
        --tamanho-de-font-para-paragrafo-sidebar=[1rem];
        --tamanho-dos-icones-siderbar=[2rem];
        --tamanho-x-y-imagem=[7%];
        
        // Tamanho do container LogoCeuma;
        --logo-div-y=[4rem];
        --logo-div-x=[4rem];

        `,
        "atualizacaoBrutaElementos": [
            // Exemplos de atualizações brutas de elementos
            // {
            // "Elemento":"p",
            // "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            // "scriptAtualizacao":`
            // [document.querySelectorAll(p)] => var[p] {
            // p.fontSize = 2rem;
            // }
            // `
            // }
        ]
    },
    {
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media": "(min-width: 1366px) and (max-width: 1248px) ", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous": `

                .pagina-tipo-texto--box-texto p {
                font-size: 2rem !important;
                }
        `,

        // Atualização Forçada onde ele está aparecendo
        "variantes": `
        --tamanho-de-font-para-paragrafo-sidebar=[1rem];
        --tamanho-dos-icones-siderbar=[2rem];
        --tamanho-x-y-imagem=[7%];
        --width=[40px];
        --height=[40px];
        // --tamanho-do-texto-do-paragrafo-header=[1.2rem];
        // --font-para-paragrafos=[1rem];
        --imgem-fundo-tamanho-x-y-imagem=[260%];
        --imgem-fundo-carrosel-posicao-x-imagem=[left 31.5%];
        
        // Tamanho do container LogoCeuma;
        --logo-div-y=[6rem];
        --logo-div-x=[6rem];

        `,
        "atualizacaoBrutaElementos": [
            // Exemplos de atualizações brutas de elementos
            // {
            // "Elemento":"p",
            // "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            // "scriptAtualizacao":`
            // [document.querySelectorAll(p)] => var[p] {
            // p.fontSize = 2rem;
            // }
            // `
            // }
        ]
    },
    {
        // Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        // Que tipo de quebra Tem que Fazer
        "media": "(max-width: 1248px)", // Apenas a condição dentro dos parênteses
        // Estilos que podem vir adicionais
        "synchronous": `
        .pagina-tipo-texto--box-texto p{
         /* margin-bottom: 0.3rem !important; */
         /*font-size: 1rem !important; */
        /* background-color: aqua;*/
        }

        .header-title p {
        margin-bottom: 0.3rem !important;

        }

        .carrosel--container {
        background-position-x: 50%;
        background-position-y: 50%;
        }

        svg {
        padding: 2px !important;

        }

        #dots {
        bottom: 8%;
        align-items: normal;
        position: relative !important;
        left: 0% !important;
        }

        .animated-text {
        font-size: 4vw;
        }

        #second-text {
        font-size: 2.5vw;
        }

        #animated-button {
        margin-top: 15px;
        font-size: 1.8vw;
        }

        .sidebar-menu {
        width: 300px;
        height: 21rem;
        padding: 0.8rem;
        }

        .sidebar-menu header {
        padding: 0.2rem;
        }

        .mola-encardernamento {
        width: 9%;
        height: 92%;
        margin-left: -1.85rem;
        background-size: 100%;
        }

        .render-menu a {
        height: 35px;
        font-size: 13px !important;
        }

        .searcListMateria {
        margin: 0.3rem 0;
        }

        .sidebar-menu-Annotation {
        width: 300px;
        height: 20rem;
        }

        .sidebar-menu-Annotation header {
        padding: 0.2rem;
        }

        hr {
        margin: 0.2rem 0;
        }

        .searcListKeyWord {
        margin: 0.1rem 0;
        }

        .searcListKeyWord span {
       /* padding: 0 0.5rem; */
        }

        .container-searcListKeyWord button {
        margin: 0.2rem;
        }

        .render-menu-Annotation {
        padding-right: 0;
        }

        .sidebar-menu header p:nth-of-type(1){
        font-size:1rem;
        }

        .sidebar-menu header p:nth-of-type(2){
        font-size:1rem;
        }

        #image-capaOverlay {
        /*
        max-width: 10% !important; 
        */
        }

        .olcards li .content .text {
        font-size: 0.8rem !important;
        text-align: justify;
        }

        .olcards, .olcards * {
        margin: -1px 0 !important;
        }

        .olcards li .content {
        padding: 0.6rem !important;
        }

        .message-text {
        font-size: 18px;
        }

        .dicionario-menu {
        width: 300px;
        height: 21rem;
        padding: 0.8rem;
        gap: 0.5rem;
        }
        .dicionario-menu header {
        padding: 0.2rem;
        }

        .dicionario-menu header p:nth-of-type(1) {
        font-size: calc(var(--tamanho-do-texto-do-paragrafo-header) - 0.2rem);
        }

        .marcacao-menu {
        width: 300px;
        height: 21rem;
        padding: 0.8rem;
        gap: 0.5rem;
        }
        .marcacao-menu header {
        padding: 0.2rem;
        }

        .marcacao-menu header p:nth-of-type(1) {
        font-size: calc(var(--tamanho-do-texto-do-paragrafo-header) - 0.2rem);
        }

        .marcacao-button{
        width: 100px;
        height: 1rem;
        font-size:0.7rem;
        padding: 10px 5px;
        gap: 0.2rem;
        }

        .accordionMarcacao-button{
        font-size:0.9rem;
        }

        #accordionMarcacao{
        font-size:0.9rem;
        }

        .counter-marcacao-button{
        background-color: red; /* Cor de fundo da bolinha */
        color: white; /* Cor do texto da bolinha */
        border-radius: 50%; /* Forma de bolinha */
        width: 15px; /* Largura da bolinha */
        height: 15px; /* Altura da bolinha */
        display: flex; /* Flex para centralizar o texto */
        justify-content: center; /* Centraliza horizontalmente */
        align-items: center; /* Centraliza verticalmente */
        position: absolute; /* Posição absoluta para posicionamento */
        top: -5px; /* Ajusta a posição para cima */
        right: -5px; /* Ajusta a posição para a direita */
        font-size: 9px; /* Tamanho do texto na bolinha */
        }


        .btn {

        font-size: 0.8rem !important;


        }

        .titulo {
        font-size: 1.2rem;
        }

        .searchDicionario {
        margin: 0;
        }

        .form-select {
        padding: .275rem 2.25rem .275rem .30rem !important;
        font-size: 0.85rem !important;

        }

        label {
        font-size: 0.8rem;
        }

        .accordion-body {
        gap: 0 1rem !important;
        display: flex !important;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        }

        /*
        .modal-content{
        width: 81% !important;
        }

        */

        #button-Dowload-Ouvinte{
        max-width: 82%;
        height: 2rem !important;
        }

        .resumo-menu {
        width: 375px;
        height: 21rem;
        padding: 0.8rem;
        gap: 0.5rem;
        }



        .text-success {
        font-size: 0.8rem;
        }

        strong.data-generacao {
        font-size: 0.8rem;
        }

        .resumo-menu header p:nth-of-type(1) {
        font-size: 1rem !important;
        }
        .result-resumo-items p {
        font-size: calc(var(--font-para-paragrafos) - 4px) !important;
        }

        .dropdown-item {
        font-size: .8rem;

        }

        .modal-content-imagem {
        max-width: 100%;
        }
    `,



        // Atualização Forçada onde ele está aparecendo
        "variantes": `
            --tamanho-de-font-para-paragrafo-sidebar=[1rem];
            --tamanho-dos-icones-siderbar=[2rem];
            --tamanho-x-y-imagem=[7%];
        `,
        "atualizacaoBrutaElementos": [
            // Exemplos de atualizações brutas de elementos
            // {
            //     "Elemento":"p",
            //     "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            //      "scriptAtualizacao":`
            //          [document.querySelectorAll(p)] => var[p] {
            //              p.fontSize = 2rem;
            //          }
            //      `
            // }
        ]
    },
    {
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media": "(max-width: 980px)", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous": `

        .message-box {
        display: block !important;
        }

        .olcards--divisor {
        display: contents !important;
        }

        .olcards {
        align-items: flex-start !important;
        }

        .olcards li .content {
        text-align: justify !important;
        }

        #accordionApresentacao {
        display: block !important;
        }

        .accordion-flush .accordion-item {
        margin-top: 0.5rem !important;
        }

        .marca-da-agua {
        display:none !important;
        }

        .glider-prev {
        left: 0px !important;
        }

        .glider-next {
        right: 0px !important;
        }

        #accordionApresentacao {
        display: block !important;
        font-size: 1.5rem !important;
        }

        .accordion-flush .accordion-item {
        margin-top: 0.5rem !important;
        }

        .pagina-tipo-texto--box-texto p {
        font-size: 1.5rem !important;
        }

        .olcards li .content .text {
        font-size: 1.5rem !important;
        text-align: left !important;

        }

        .message-text {
        font-size: 1.5rem !important;
        }

        .accordion-button {
        font-size: 1.5rem !important;
        }

        .message-box--divisor {
        justify-content: center;
        }

        .container-img-lightbox-fluid {
        padding: 8rem;
        flex-direction: column;
        width: 80%;
        height: auto;
        }

        .modal-content-imagem {
        max-width: 700px !important;
        }
        `,

        // Atualização Forçada onde ele está aparecendo
        "variantes": `
        --tamanho-de-font-para-paragrafo-sidebar=[1rem];
        --tamanho-dos-icones-siderbar=[2rem];
        --tamanho-x-y-imagem=[7%];
        `,
        "atualizacaoBrutaElementos": [
            // Exemplos de atualizações brutas de elementos
            // {
            // "Elemento":"p",
            // "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            // "scriptAtualizacao":`
            // [document.querySelectorAll(p)] => var[p] {
            // p.fontSize = 2rem;
            // }
            // `
            // }
        ]
    },
    {
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media": "(max-width: 480px)", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous": `
        .message-box {
        display: block !important;
        }

        .olcards--divisor {
        display: contents !important;
        }

        .olcards {
        align-items: flex-start !important;
        }

        .olcards li .content {
        text-align: justify !important;
        }

        #accordionApresentacao {
        display: block !important;
        }

        .accordion-flush .accordion-item {
        margin-top: 0.5rem !important;
        }

        .marca-da-agua {
        display:none !important;

        }

        .glider-prev {
        left: 0px !important;
        }

        .glider-next {
        right: 0px !important;
        }

        .pagina-tipo-texto--box-texto p {
        font-size: 1rem !important;
        }

        .carrosel--container {

        background-size: 370% !important;
        background-position-x: 36% !important;
        }

        .container-img-lightbox-fluid {
        flex-direction: column !important;
        height: auto !important;
        padding: 4rem !important;

        }

        .transcritor--box-audio {
        display: none;

        }

        .container-audio-render-result {
        flex-direction: column;
        }

        #carrosel-audio {
        height: auto;
        }

        .plyr{
        min-width: 280px;
        }

        .container-toools-info-audio {
        width: 85% !important;
        }

        .pagina-tipo-video--box-video{
        height: 30%;
        width: 100%;
        flex-wrap: wrap;
        }

        .f-thumbs__track {
        flex-direction: row
        }

        .f-carousel__thumbs {
        width: 100%
        }

    `,

        // Atualização Forçada onde ele está aparecendo
        "variantes": `
            --tamanho-de-font-para-paragrafo-sidebar=[1rem];
            --tamanho-dos-icones-siderbar=[2rem];
        `,
        "atualizacaoBrutaElementos": [
            // Exemplos de atualizações brutas de elementos
            // {
            //     "Elemento":"p",
            //     "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            //      "scriptAtualizacao":`
            //          [document.querySelectorAll(p)] => var[p] {
            //              p.fontSize = 2rem;
            //          }
            //      `
            // }
        ]
    },
    {
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media": "(min-width: 481px) and (max-width: 980px)", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous": `

        .message-box {
        display: block !important;
        }

        .olcards--divisor {
        display: contents !important;
        }

        .olcards {
        align-items: flex-start !important;
        }

        .olcards li .content {
        text-align: justify !important;
        }

        #accordionApresentacao {
        display: block !important;
        }

        .accordion-flush .accordion-item {
        margin-top: 0.5rem !important;
        }

        .marca-da-agua {
        display:none !important;
        }

        .glider-prev {
        left: 0px !important;
        }

        .glider-next {
        right: 0px !important;
        }

        #accordionApresentacao {
        display: block !important;
        font-size: 2rem !important;
        }

        .accordion-flush .accordion-item {
        margin-top: 0.5rem !important;
        }

        .pagina-tipo-texto--box-texto p {
        font-size: 2rem !important;
        }

        .olcards li .content .text {
        font-size: 2rem !important;
        text-align: left !important;

        }

        .message-text {
        font-size: 2rem !important;
        }

        .accordion-button {
        font-size: 2rem !important;
        }

        .message-box--divisor {
        justify-content: center;
        }

        .container-img-lightbox-fluid {
        padding: 8rem;
        flex-direction: column;
        width: 80%;
        height: auto;
        }

        .modal-content-imagem {
        max-width: 700px !important;
        }

        .objetivo-aprendizagem-elemento img {
        width: 31% !important;
        }

        .h4, h4 {
        font-size: 2.2rem !important;
        }

        .col-md-8 {
        width: 100% !important;
        }

        .col-md-4 {
        width: 50%;
        }

       

                .row {
        position: relative;
        // top: 6%;
        flex-direction: column;
        justify-content: center;
        }

        .list-group-numbered {
        font-size: 2rem;
        }

       
        #important-saber {
        width: 80%;
        left: auto;
        top: -33%;
        }

        .important-saber-elemento--box {
        width: 100%;
        padding: 10px;
        text-align: justify;
        }

        .col-12.col-md-4-5.text-center.position-absolute {
        top: 90%;
        }   

        .col-md-9-5 {
        width: 100%;
        }

        .col-md-4-5 {
        width: 100%;
        }

        .accordion section:target h2 {
        width: 50%;
        font-size: 2rem !important;
        } 
        
        .align-accordion { 
        height: 100% !important;
        
        }

        .accordion section .box {
        height: max-content !important;
        }

         .accordion section h2 {
            width: 20rem !important; 
            font-size: 2rem !important;
        }  

        pdestaque {
        font-size: 2rem !important;
        }

            .pagina-tipo-texto--box-texto {
              justify-content: center !important;
        }

        .pagina-tipo-video--box-video {
        width: 100% !important;
        }

        li {
        font-size: 2rem !important        
        }

        .col-md-6 {
        width: 100%;
        }

        .btn {
        font-size: 2rem !important;
        }

        .accordion-saibamais {
        font-size: 2rem;    
        }


        
        `,

        // Atualização Forçada onde ele está aparecendo
        "variantes": `
        --tamanho-de-font-para-paragrafo-sidebar=[1rem];
        --tamanho-dos-icones-siderbar=[2rem];

        `,
        "atualizacaoBrutaElementos": [
            // Exemplos de atualizações brutas de elementos
            // {
            // "Elemento":"p",
            // "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            // "scriptAtualizacao":`
            // [document.querySelectorAll(p)] => var[p] {
            // p.fontSize = 2rem;
            // }
            // `
            // }
        ]
    },
];

// Função para aplicar variantes CSS dinamicamente
function aplicarVariantes(variantes, media) {
    // Verificar se a condição da media query é verdadeira
    if (window.matchMedia(media).matches) {
        // Dividir as variantes por ponto e vírgula
        const variaveis = variantes.split(';');

        variaveis.forEach(variavel => {
            if (variavel.trim()) {
                // Remover espaços em branco
                variavel = variavel.trim();

                // Encontrar o índice do símbolo '=' para separar o nome e o valor
                const index = variavel.indexOf('=');

                if (index !== -1) {
                    // Extrair o nome da variável
                    const nomeVariavel = variavel.substring(0, index).trim();

                    // Extrair o valor da variável, removendo os colchetes
                    const valorVariavel = variavel.substring(index + 1).replace('[', '').replace(']', '').trim();

                    // Aplicar a variável CSS dinamicamente
                    document.documentElement.style.setProperty(nomeVariavel, valorVariavel);
                }
            }
        });
    }
}

// Função para processar as configurações responsivas da página
function responsivePage(slideIndex) {
    const pageData = api[slideIndex];

    // Página para Exibir Estilos
    const idPage = pageData.pagina;

    // Remove os estilos anteriores antes de aplicar novos
    removerEstilosAnteriores();

    // Verificar se é para todas as páginas ou uma página específica
    responsivo.forEach(config => {
        // Se for "All", aplica para todas as páginas
        if (config.Tipo === "All") {
            aplicarVariantes(config.variantes, config.media);
            adicionarEstilos(config.media, config.synchronous, slideIndex);
        }
        // Senão, aplica apenas para a página especificada
        else if (config.Tipo === idPage) {
            aplicarVariantes(config.variantes, config.media);
            adicionarEstilos(config.media, config.synchronous, slideIndex);
        }
    });
}

// Função para adicionar estilos com base na media query
function adicionarEstilos(media, estilos, slideIndex) {
    // Gera um ID único para cada combinação de slideIndex e media query
    const styleId = `style-slide-${slideIndex}-${media.replace(/\W+/g, '-')}`;
    const existingStyle = document.querySelector(`#${styleId}`);

    if (!existingStyle) {
        // Cria um elemento de estilo com ID único
        const estilo = document.createElement('style');
        estilo.type = 'text/css';
        estilo.id = styleId; // Atribui um ID ao estilo

        // Adiciona os estilos dentro da media query especificada
        estilo.innerHTML = `@media screen and ${media} { ${estilos} }`;

        document.head.appendChild(estilo);
    }
}

// Função para remover os estilos anteriores ao mudar de slide
function removerEstilosAnteriores() {
    const oldStyles = document.querySelectorAll('style[id^="style-slide-"]');
    oldStyles.forEach(style => {
        style.remove();
    });
}

// Chama a função responsiva para o slide atual
responsivePage(savedPosition);

