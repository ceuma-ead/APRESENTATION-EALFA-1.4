
// Função para abrir o menu de anotações // version Antiga
// function abrirAnotacoes() {
//     const botaoAbrirAnotacoes = document.querySelector('.openAnnotation');
//     const menuAnotacoes = document.querySelector('.sidebar-menu-Annotation');

//     botaoAbrirAnotacoes.addEventListener('click', function (evento) {
//         evento.stopPropagation();

//         // verificar se container é vazio pra mudar o icon
//         const iconAnnotation = checkEmptyAnnotationsContainer();

//         // Verificar e remover a classe 'close-annotation' se ela existir pois ele fecha a 
//         // esquerda
//         if (menuAnotacoes.classList.contains('close-annotation')) {
//             menuAnotacoes.classList.remove('close-annotation');
//         }

//         // Verificar se está à esquerda e adicionar a classe 'close-annotation'
//         if (menuAnotacoes.classList.contains('left')) {
//             menuAnotacoes.classList.remove('left');
//             menuAnotacoes.classList.add('close-annotation');
//         }

//         // Fecha o menu de sumário, se estiver aberto
//         fecharMenuSumario();
//         fecharResumo();

//         // Chamando a função para fechar a caixa de ferramentas
//         // closeToggleBox(toolBox);

//         menuAnotacoes.classList.toggle('open-annotation');

//         // Pegar ID Personalizado para Mudar o Nome do Tooltip...


//         if (menuAnotacoes.classList.contains('open-annotation')) {
//             botaoAbrirAnotacoes.innerHTML = `<i class="bi bi-x-lg"></i>`
//         } else {



//             let iconHTML;

//             if (iconAnnotation) {
//                 filtrarTitulo().destroy(); // Chama a função que precisa ser executada
//                 iconHTML = `
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticker">
//                         <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/>
//                         <path d="M14 3v4a2 2 0 0 0 2 2h4"/>
//                         <path d="M8 13h.01"/>
//                         <path d="M16 13h.01"/>
//                         <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"/>
//                     </svg>`;
//             } else {
//                 iconHTML = `
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note">
//                         <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/>
//                         <path d="M15 3v4a2 2 0 0 0 2 2h4"/>
//                     </svg>`;
//             }

//             // Atualiza o conteúdo do botão
//             botaoAbrirAnotacoes.innerHTML = iconHTML;

//         }

//     });

//     document.addEventListener('click', function (evento) {
//         if (menuAnotacoes.classList.contains('open-annotation') && !menuAnotacoes.contains(evento.target) && evento.target !== botaoAbrirAnotacoes) {
//             // console.log(filtrarTitulo())
//             filtrarTitulo().destroy();
//             fecharMenuAnotacoes();
//         }
//     });
// }