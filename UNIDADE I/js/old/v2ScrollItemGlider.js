// Atualiza o slider do navegar para o mesmo componente sem a necessidade força um reload na página
/*



t.scrollItem = function (e, t, i) {
        i && i.preventDefault();
        var o, s = this,
            r = e,
            i = (++s.animate_id, s.slide);
    
        // Calcula o índice do slide de destino
        var targetSlide = e;
        if (t === true) {
            targetSlide = Math.round(e * s.containerWidth / s.itemWidth);
        } else if (typeof e === 'string') {
            var isNext = e === 'next';
            targetSlide = s.opt.slidesToScroll % 1 || s.opt.slidesToShow % 1 
                ? s.getCurrentSlide() 
                : s.slide;
            targetSlide = isNext 
                ? targetSlide + s.opt.slidesToScroll 
                : targetSlide - s.opt.slidesToScroll;
    
            if (s.opt.rewind) {
                var scrollLeft = s.ele.scrollLeft;
                targetSlide = isNext && !scrollLeft 
                    ? s.slides.length 
                    : !isNext && scrollLeft + s.containerWidth >= Math.floor(s.trackWidth) 
                        ? 0 
                        : targetSlide;
            }
        }
    
        // Ajusta o índice para os limites
        targetSlide = Math.max(Math.min(targetSlide, s.slides.length), 0);
    
        // Mesmo se for o mesmo slide, forçamos o scroll
        s.slide = targetSlide;
        var scrollDistance = s.itemWidth * targetSlide;
    
        s.emit("scroll-item", {
            prevSlide: i,
            slide: targetSlide
        });
    
        // Sempre executa o scroll, mesmo para o mesmo slide
        return s.scrollTo(
            scrollDistance, 
            s.opt.duration * Math.abs(s.ele.scrollLeft - scrollDistance), 
            function () {
                s.updateControls();
                s.emit("animated", {
                    value: r,
                    type: typeof r === "string" ? "arrow" : t ? "dot" : "slide"
                });
            }
        ), false;
    },










*/