// // Função para Criar animação no Elemento
// function AnimatedElementos(slideIndex) {
//     const pageData = api[slideIndex];

//     if (!pageData) {
//         console.error('pageData não está definido.');
//         return;
//     }

//     if (!pageData.paramentros) {
//         console.error('pageData.paramentros não está definido.');
//         return;
//     }

//     if (!pageData.paramentros.animacao_elemento) {
//         console.error('pageData.paramentros.animacao_elemento não está definido.');
//         return;
//     }

//     const animacaoPadrao = {
//         elemento: "all",
//         script_animation: "animate__animated animate__fadeInRight animate__slow"
//     };

//     const configurarAnimacao = pageData.paramentros.animacao_elemento;

//     configurarAnimacao.forEach((animation) => {
//         const {
//             script_animation = animacaoPadrao.script_animation,
//             elemento = animacaoPadrao.elemento
//         } = animation;

//         const elementos = document.querySelectorAll(elemento);

//         if (elementos.length > 0) {
//             elementos.forEach((el) => {
//                 // Remove as classes de animação existentes
//                 el.className = el.className.replace(/\banimate__\S+/g, '').trim();

//                 // Aguarda o próximo ciclo de renderização para adicionar a animação
//                 requestAnimationFrame(() => {
//                     script_animation.split(" ").forEach(cls => {
//                         if (cls.trim()) {
//                             el.classList.add(cls.trim());
//                         }
//                     });
//                 });
//             });
//         } else {
//             console.warn(`Nenhum elemento encontrado para a animação: ${elemento}`);
//         }
//     });
// }


// como usava? 
// "animacao_elemento": [{
//                 "elemento": ".animation", // 0 | all
//                 "script_animation": `
//                     animate__animated animate__fadeInDown animate__slow
//                 `
//             }],