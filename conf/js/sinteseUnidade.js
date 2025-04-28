$(document).ready(function() {
    function verificarSlides() {
        const $carousel = $("#carouselUnidade-sinteseUnidade");
        const $controles = $(".btn-nav-carrosel-container");
        const totalSlides = $carousel.find('.carousel-item').length;

        if (totalSlides <= 1) {
            $controles.hide();
        } else {
            $controles.show();
        }
    }

    // Verifica ao carregar a página
    verificarSlides();

    // Verifica quando houver mudanças no carousel
    const observer = new MutationObserver(verificarSlides);
    observer.observe(document.querySelector('#carouselUnidade-sinteseUnidade'), {
        childList: true,
        subtree: true
    });
});