

// <div>
//    <p>{{1}}</p>
//    <p>{{2}}</p>
// </div>
// "mathJax":{
//  "ativo": true,
//     "formulas":[
//        [` S_n = \\frac{a_1(1 - r^n)}{1 - r}, \\quad r \\neq 1 d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} `],
//        [` \det(A) = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc`]
//     ]
//  },


async function MathJaxModulo(classContainer, configuracoesMathJax, configuracoesSlider = {}, indexContainerAtual = 0) {
    // Pegar o container pela classe
    const textoContainer = document.getElementsByClassName(classContainer)[0];

    if (!textoContainer) {
        console.error(`Elemento com a classe ${classContainer} não encontrado.`);
        return;
    }

    if (textoContainer) {
        // Verifica se tem fórmulas MathJax
        if (configuracoesMathJax?.formulas && Array.isArray(configuracoesMathJax.formulas)) {
            // Array de Fórmulas
            const formulas = configuracoesMathJax.formulas;
            // console.log(formulas)

            // Pega todo o conteúdo HTML do container
            let conteudoHTML = textoContainer.innerHTML;

            // Substitui todos os marcadores {{n}} pelas fórmulas correspondentes
            conteudoHTML = conteudoHTML.replace(/\{\{(\d+)\}\}/g, (match, numero) => {
                const index = parseInt(numero) - 1;
                if (index >= 0 && index < formulas.length) {
                    // Retorna a fórmula envolta em delimitadores TeX ($$)
                    return `$$${formulas[index][0]}$$`;
                }
                return '{{ não foi possível renderizar }}';
            });

            // Atualiza o HTML do container
            textoContainer.innerHTML = conteudoHTML;

            // Renderiza as fórmulas usando MathJax
            if (window.MathJax) {
                await window.MathJax.typesetPromise([textoContainer]);
            }
        }
    }
}

async function vizioonMathJAX(slideIndex) {
    const configContainer = configuracoesIntraGlobais.configuracoesSliderAll;
    const sliderObject = configContainer.procurar_slider;

    // Configurações do slider
    const classeSliderAtual = sliderObject._sliderClass;
    const atributoSliderAtual = sliderObject._attrActiver;

    // Arquivo de Configuração 
    const configuracao = await global__Config();

    // Seleciona todos os containers do slider na página
    const containersSlider = document.querySelectorAll(classeSliderAtual);

    // Acessar a posição da página na api pegar informações
    const pageData = api[slideIndex];
    


    if (pageData && pageData.paramentros && pageData.paramentros.mathJax && pageData.paramentros.mathJax.ativo && pageData.paramentros.ouvinte.ativo === true) {
        containersSlider.forEach((container) => {
            if (container.getAttribute(atributoSliderAtual) === String(slideIndex)) {
                // Pega o array links_ativar ou usa array vazio como fallback
                // console.log(container);
                // console.log(container.getAttribute(atributoSliderAtual))


                const mathJax = pageData.paramentros.mathJax || {};
                // console.log(mathJax);
                MathJaxModulo(container.className, mathJax, pageData, container.getAttribute(atributoSliderAtual));


            }
        });
    }
}

vizioonMathJAX(savedPosition);