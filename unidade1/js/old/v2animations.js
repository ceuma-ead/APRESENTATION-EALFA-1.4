// Função para Criar animação no Paragrafo
function AnimatedParagrafos(slideIndex) {
    const pageData = api[slideIndex];

    if (pageData && pageData.paramentros && pageData.paramentros.animacao_texto) {
        const animacaoPadrao = {
            indice: "all",
            script_animation: "animate__animated animate__fadeInDown animate__slow"
        };

        const configurarAnimacao = pageData.paramentros.animacao_texto;
        configurarAnimacao.forEach((animation) => {
            const {
                script_animation = animacaoPadrao.script_animation,
                indice = animacaoPadrao.indice
            } = animation;

            const procurarParagrafo = pageData.paramentros.configuracoes_gerais._procurar_paragrafos;

            if (procurarParagrafo.status && procurarParagrafo.onde_procurar !== "") {
                // Seleciona todos os contêineres que possuem a mesma classe
                const procurarParagrafosNosContainers = document.querySelectorAll(procurarParagrafo.onde_procurar);

                procurarParagrafosNosContainers.forEach((container) => {
                    const paragrafos = container.querySelectorAll("p");

                    paragrafos.forEach((p, i) => {
                        if (indice === "all" || indice == i) {
                            // Remove as classes de animação existentes
                            p.className = p.className.replace(/\banimate__\S+/g, '').trim();

                            // Utiliza requestAnimationFrame para garantir que a animação seja reaplicada
                            requestAnimationFrame(() => {
                                // Adiciona novamente as classes de animação
                                script_animation.split(" ").forEach(cls => {
                                    if (cls.trim()) {
                                        p.classList.add(cls.trim());
                                    }
                                });
                            });
                        }
                    });
                });

            } else {
                handleErroAnimacao(procurarParagrafo);
            }
        });
    } else {
        if (typeof glider !== 'undefined') {
            glider.refresh(true);
            glider.updateControls();
        } else {
            console.error('O objeto glider não está definido.');
        }
    }
}

// como usava ? 
// "animacao_texto": [{
//                 "indice": "all", // 0 | all
//                 "script_animation": `
//                     animate__animated animate__fadeInDown animate__slow
//                 `
//             }],