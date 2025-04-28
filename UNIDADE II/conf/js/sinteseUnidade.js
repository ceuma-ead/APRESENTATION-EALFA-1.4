$(document).ready(function () {
    // Função para reiniciar a animação removendo e re-adicionando a classe "rough-marcacao"
    function reiniciarAnimacaoRough($element) {

        roughNotationModules(savedPosition);
        $element.removeClass("rough-marcacao");
        requestAnimationFrame(function () {
            $element.addClass("rough-marcacao");
        });
    }

    // Função para verificar qual slide está ativo e aplicar a lógica de exibição/animacão
    function verificarSlideAtual(novoIndice) {
        const $carousel = $("#carouselUnidade-sinteseUnidade");
        const totalSlides = $carousel.find('.carousel-item').length;
        const $ateBreve = $("#roughAteBreve");
        const $strong = $ateBreve.find("strong");

        // Se não for passado um índice, pega o índice do slide ativo atual
        const indiceAtual = (typeof novoIndice === "undefined")
            ? $carousel.find(".carousel-item.active").index()
            : novoIndice;

        // Se o slide ativo for o último (indicado por totalSlides - 1)
        if (indiceAtual === totalSlides - 1) {
            $ateBreve.removeClass("d-none");
            reiniciarAnimacaoRough($strong);
        } else {
            $ateBreve.addClass("d-none");
        }
    }

    // Evento nativo do Bootstrap 5.3: disparado quando a transição de slide é concluída
    $("#carouselUnidade-sinteseUnidade").on("slid.bs.carousel", function (event) {
        // event.to contém o índice do novo slide ativo
        verificarSlideAtual(event.to);
    });

    // Verifica ao carregar a página
    verificarSlideAtual();
});
