const ferramentas = [
    {
        "container": "icons-action--container",
        "Podcast": {
            "ativa": true,
            "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
        },
        "Videoaula": {
            "ativa": true,
            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
        },
        "Ferramentas": {
            "ativa": true,
            "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
        },
        "FullScreen": {
            "ativa": true,
            "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
        },

    },
    {
        "container": "icons-action--container-mobile",
        "Podcast": {
            "ativa": true,
            "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
        },
        "Videoaula": {
            "ativa": true,
            "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
        },
        "Ferramentas": {
            "ativa": true,
            "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
        },

    },
    {
        "container": "box-tools-inline",
        "Resulmo": {
            "ativa": true,
            "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                
                            `
        },
        "Destacar": {
            "ativa": true,
            "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
            "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
        },
        "Notas": {
            "ativa": true,
            "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
        },
        "Ouvinte": {
            "ativa": true,
            "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
        },
        "Download": {
            "ativa": true,
            "html": `
                                <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
        },
        "Dicionario": {
            "ativa": true,
            "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
        },
        "close": {
            "ativa": true,
            "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
        },
    }
]