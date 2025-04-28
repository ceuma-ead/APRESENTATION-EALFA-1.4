// Inicia o Tippy.js nos elementos com a classe tippy-nome-img
tippy('.tippy-nome-img', {
    placement: 'auto', // Posição automática do tooltip
    arrow: true, // Adiciona seta no tooltip
    theme: 'laranjado', // Tema personalizado
    interactive: true, // Torna o tooltip interativo
    delay: [200, 0], // Pequeno atraso para mostrar
    duration: [300, 200], // Duração da animação
    offset: [0, -30], // Ajuste de posicionamento
    allowHTML: true, // Permite HTML no conteúdo do tooltip
    content: (reference) => reference.getAttribute('data-content-tippy') // Pega o texto do atributo 'data-content-tippy'
});
