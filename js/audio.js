
document.addEventListener("DOMContentLoaded", function (event) {
    renderAudio(savedPosition);
    // checkEmptyTranscritorAudioContainer();
})

async function audioApi() {

    try {
        const data = await $.ajax({
            url: "./modules/audio.json",
            method: "GET",
            cache: false,
        });

        return data;

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: `Erro Json Desativada`,
            heightAuto: false,
            footer: `<a href="#" onclick="">você acha que isso é um erro? @suporte</a>`
        });
        console.error('Erro:', error);
    }

}

// Função para verificar se o contêiner de resumo histórico está vazio
function checkEmptyTranscritorAudioContainer() {
    const resumoTranscritorContainer = document.querySelector('.body-transcritor-audio');
    const footerTranscritor = document.querySelector('.footer-transcritor-audio');
    // Verifica se o contêiner existe
    if (!resumoTranscritorContainer) return;

    // Verifica se o conteúdo do contêiner está vazio
    if (!resumoTranscritorContainer.children.length || resumoTranscritorContainer.innerHTML.trim() === '') {
        footerTranscritor.style.display = "none";
        // Adiciona a mensagem de "vazio" se não houver conteúdo visível
        let emptyMessage = document.querySelector('.empty-transcritor-message');
        if (!emptyMessage) {
            emptyMessage = document.createElement('div');
            emptyMessage.classList.add('empty-transcritor-message');
            emptyMessage.innerHTML = `
                <div class="d-flex align-items-center justify-content-center h-100">
                    <div class="text-center p-4">
                        <img src="./assets/transcritorGold.png" alt="list-is-empty" class="img-fluid mb-3" style="max-width: 150px;">
                        <h4 class="text-light">Não Há descrição disponiveis...</h4>
                    </div>
                </div>
            `;
            resumoTranscritorContainer.appendChild(emptyMessage);
        }
    } else {
        // Remove a mensagem de "vazio" se houver conteúdo
        const emptyMessage = document.querySelector('.empty-transcritor-message');
        if (emptyMessage) {
            footerTranscritor.style.display = "block";
            emptyMessage.remove();
        }
    }
}



async function moduloTranscritorAudio(conf = {}) {
    $.ajax({
        url: "./modules/audio.json",
        method: "GET",
        cache: false,
        success: (data) => {

            if (data && Array.isArray(data) && Array.isArray(data).length !== 0) {
                const dadosFiltrados = data.filter((item, index) => item.configuracao)
                const configuracao = Object.assign({}, ...dadosFiltrados);
                const configuracaoAudio = configuracao.configuracao;


                if (!!configuracaoAudio && Object.values(configuracaoAudio).length !== 0) {
                    //Onde procurar o Transcritor Audio
                    const containerRenderConfig = conf.paramentros.configuracoes_gerais._procurar_paragrafos;
                    const moduloTranscritor = containerRenderConfig.onde_procurar;
                    const containerAudio = document.querySelector(moduloTranscritor);


                    // Ativar ou destativar o transcritor Audio

                    const transcritor = configuracaoAudio.moduloTranscritor;
                    if (transcritor) {
                        return transcritor
                    } else {
                        containerAudio.style.display = "none";
                    }

                }
            }

            return data;
        },
        error: (error) => {
            console.error('Erro:', error);
            Swal.fire({
                icon: "error",
                title: `Erro Json Desativada`,
                heightAuto: false,
                footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
            });
        }
    });
}



// async function moduloListaAudio() {
//     $.ajax({
//         url: "./modules/audio.json",
//         method: "GET",
//         cache: false,
//         success: (data) => {

//             if (data && Array.isArray(data) && Array.isArray(data).length !== 0) {
//                 const dadosFiltrados = data.filter((item, index) => item.configuracao)
//                 const configuracao = Object.assign({}, ...dadosFiltrados);
//                 const configuracaoAudio = configuracao.configuracao;


//                 if (!!configuracaoAudio && Object.values(configuracaoAudio).length !== 0) {

//                     // console.log(configuracaoAudio);
//                     const containerLista = document.querySelector("#plwrap");
//                     // console.log(containerLista)
//                     // Ativar ou destativar o transcritor Audio

//                     const lista = configuracaoAudio.AtivarLista;
//                     // console.log(lista)
//                     if (lista) {
//                         containerLista.style.display = "block";
//                         return lista
//                     } else {
//                         containerLista.style.display = "none";
//                     }
//                 }
//             }

//             return data;
//         },
//         error: (error) => {
//             console.error('Erro:', error);
//             Swal.fire({
//                 icon: "error",
//                 title: `Erro Json Desativada`,
//                 heightAuto: false,
//                 footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
//             });
//         }
//     });
// }






async function renderAudio(slideIndex = null) {
    const pageData = api[slideIndex];  // Assume que a variável `api` já esteja definida
    const audioRender = await audioApi();  // Chama a função `audioRender` para obter os audio da API

    // console.log(audioRender)

    function pausarTodosAudios() {
        // Seleciona todos os elementos de áudio na página
        const audios = document.querySelectorAll('audio');

        // Pausa todos os áudios
        audios.forEach(audio => {
            if (!audio.paused) {
                audio.pause();
            }
        });
    }

    if (pageData && pageData.tipo === "Audio") {
        const containerRenderConfig = pageData.paramentros.configuracoes_gerais._renderizar_audio;
        const containerRenderAudio = containerRenderConfig.onde_colocar_audio;
        const containerAudio = document.querySelector(containerRenderAudio);  // Seleciona o contêiner de audio

        // Inicializar as configurações do modulo de Transcrição
        const configuracoesAudio = await moduloTranscritorAudio(pageData);

        const configuracoesAudioApi = audioRender.filter(audio => audio.configuracao).map(audio => audio.configuracao);
        // console.log(configuracoesAudioApi)

        const { ativarAudio } = Object.assign({}, ...configuracoesAudioApi);



        if (!containerAudio) {
            return;
        }

        if (ativarAudio) {
            containerAudio.innerHTML = `
        
            <div id="mainwrap" class="container-audio-render-result">
               <div id="plwrap">
                    <ul id="plList"></ul>
                </div>
                <div class="container-toools-info-audio">
                   <div id="nowPlay">
                       <!--
                           <span id="npAction">Pausado...</span>
                       -->

                       <div class="d-flex align-items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-audio-lines text-light"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg></i><span id="npTitle">
                           </span>
                       </div>

                   </div>
                   <div id="audiowrap">
                       <div id="audio0">
                           <audio id="podcast" preload controls>Your browser does not support HTML5 Audio! 😢</audio>
                       </div>
                       <div id="tracks">
                           <a id="btnPrev">&larr;</a><a id="btnNext">&rarr;</a>
                       </div>
                   </div>
                </div>
                
            </div>
    
   `;
        }
        else {

            const containerAudio = document.querySelector(".pagina-tipo-audio--box-audio")
            containerAudio.innerHTML = `
           <div class="container w-md-75">
                <div class="alert alert-warning text-center d-flex flex-column align-items-center" role="alert">
                    <img src="../assets/prohibition.png" class="img-fluid w-25 w-md-25 mb-3" alt="Ícone de audio não disponível">
                    <h4 class="alert-heading">Oops!</h4>
                    <p>Esta unidade não possui áudio ativo.</p>
                </div>
            </div>

        `;
        }


        // console.log(containerAudio)
        var supportsAudio = !!document.createElement('audio').canPlayType;
        if (supportsAudio) {
            // Inicializar Plyr
            var player = new Plyr('#podcast', {
                controls: [
                    'restart',
                    'play',
                    'progress',
                    'current-time',
                    'duration',
                    'mute',
                    'volume',
                    // 'download'
                ]
            });

            // Playlist e controles
            var index = 0;
            playing = false;


            //Api de Audio
            const audioApi = audioRender
                .filter((item, index) => item._ativo === true && index > 0) // Filtra só os que estão ativos e remove o primeiro
                .map(item => item);

            if (Array.isArray(audioApi).length === 0) {
                alert("Sem audios para rendenrizar");
                return;
            }
            // console.log(audioApi)
            tracks = audioApi;

            trackCount = tracks.length,
                npAction = document.getElementById('npAction');
            npTitle = document.getElementById('npTitle');
            audio = document.getElementById('podcast');
            const containerLista = document.querySelector("#plwrap");
            const tracksButton = document.querySelector("#tracks");
            const podcastAudio = document.querySelector(".container-toools-info-audio");
            // console.log(tracks.length)
            //Função para verificar se a lista contem mais de 3 - true > ele vai ficar justifyContent:start

            function verificarLista() {

                if (tracks.length > 2) {
                    const podcastList = document.querySelector("#plList");
                    podcastList.style.justifyContent = "start"
                } else {
                    const podcastList = document.querySelector("#plList");
                    podcastList.style.justifyContent = "center"
                }
            }

            verificarLista()

            // Lista de Sons
            var plList = document.getElementById('plList');

            if (tracks.length > 1) {
                podcastAudio.style = `
                    width:var(--largura-dos-container-audio-e-lista);
                
                `
                tracksButton.style.display = "block";
                containerLista.style.display = "block";

            } else {
                podcastAudio.style = `
                    width:50%;
                
                `
                tracksButton.style.display = "none";
                containerLista.style.display = "none";
            };

            tracks.forEach(function (track, key) {

                // Cria um elemento de lista para cada faixa
                var li = document.createElement('li');

                const trackName = reduzirTexto(track.name, 15);

                li.innerHTML = `
                <div class="plItem"> 
                    <span><img class="rounded-circle img-tracker" alt="Avatar" src="https://placehold.co/600x600?text=${key < 9 ? `0${key + 1}` : key + 1}" /></span>
                    <span class="plTitle">${trackName}</span> 
                    <span class="plLength" id="duration-${key}">${track.duration}</span> 
                </div>
            `;
                plList.appendChild(li);

                li.addEventListener('click', function () {
                    if (key !== index) {
                        // Condição para rolar a lista se o item não estiver visível
                        if (key >= 1) { // A partir do 4º item, executa o scroll
                            li.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        } else if (key <= 1) {
                            li.scrollIntoView({ behavior: 'smooth', block: 'center' });

                        }

                        // Tocar a faixa clicada
                        playTrack(key);
                    }
                });

                // Carregar temporariamente a faixa para obter os metadados de duração
                const tempAudio = new Audio();
                tempAudio.src = track.audioSrc;
                tempAudio.onloadedmetadata = function () {
                    const formattedTime = formatTime(tempAudio.duration);
                    document.getElementById('duration-' + key).textContent = formattedTime;
                };


            });


            // Função para carregar uma faixa
            // function loadTrack(id) {
            //     // TrackName 
            //     const trackName = reduzirTexto(tracks[id].name, 15);

            //     // Remover 'plSel' do item previamente selecionado
            //     var selected = document.querySelector('.plSel');
            //     if (selected) selected.classList.remove('plSel');

            //     // Ativar a novar cor do Hover so para esse elemento com a class .plSel
            //     const corHover = getComputedStyle(document.documentElement).getPropertyValue('--cor-quando-ativar-a-lista').trim()
            //     const corOldHover = getComputedStyle(document.documentElement).getPropertyValue('--cor-quando-hover-a-lista-default').trim()
            //     document.documentElement.style.setProperty('--cor-quando-hover-a-lista', corHover);

            //     // Adicionar 'plSel' ao item atual
            //     plList.children[id].classList.add('plSel');

            //     // Remover 'plSelText' de todos os itens previamente
            //     const allItems = document.querySelectorAll('.plItem');
            //     allItems.forEach(item => item.classList.remove('plSelText'));

            //     // Adicionar 'plSelText' ao item atual
            //     const addClassActive = plList.children[id].querySelector(".plItem");
            //     if (addClassActive) {
            //         addClassActive.classList.add("plSelText");
            //     }

            //     // Atualizar título e carregar nova faixa de áudio
            //     npTitle.textContent = trackName;
            //     index = id;
            //     audio.src = tracks[id].audioSrc; // Carregar diretamente do atributo audioSrc
            //     updateDownload(id, audio.src);

            //     return audio;
            // }

            // Função para carregar uma faixa
            function loadTrack(id) {
                // TrackName 
                const trackName = reduzirTexto(tracks[id].name, 60);

                // Remover 'plSel' do item previamente selecionado
                var selected = document.querySelector('.plSel');
                if (selected) {
                    // Voltar a cor de hover original para o item desativado
                    selected.classList.remove('plSel');
                    selected.style.setProperty('--cor-quando-hover-a-lista', ''); // Reseta para o valor original
                }

                // Adicionar 'plSel' ao item atual
                const currentItem = plList.children[id];
                currentItem.classList.add('plSel');

                // Alterar a cor do hover para o item atual
                const corHover = getComputedStyle(document.documentElement).getPropertyValue('--cor-quando-ativar-a-lista').trim();
                currentItem.style.setProperty('--cor-quando-hover-a-lista', corHover); // Define a cor de hover do item ativo

                // Remover 'plSelText' de todos os itens previamente
                const allItems = document.querySelectorAll('.plItem');
                allItems.forEach(item => item.classList.remove('plSelText'));

                // Adicionar 'plSelText' ao item atual
                const addClassActive = currentItem.querySelector(".plItem");
                if (addClassActive) {
                    addClassActive.classList.add("plSelText");
                }

                // Atualizar título e carregar nova faixa de áudio
                npTitle.textContent = trackName;
                index = id;
                audio.src = tracks[id].audioSrc; // Carregar diretamente do atributo audioSrc
                updateDownload(id, audio.src);

                return audio;
            }


            // Função para formatar o tempo em MM:SS
            function formatTime(seconds) {
                const minutes = Math.floor(seconds / 60); // Calcula os minutos
                const secs = Math.floor(seconds % 60); // Calcula os segundos restantes
                return minutes + ':' + (secs < 10 ? '0' + secs : secs); // Formata como MM:SS
            }


            // Atualizar link de download
            function updateDownload(id, source) {
                player.on('loadedmetadata', function () {
                    var downloadLink = document.querySelector('a[data-plyr="download"]');
                    if (downloadLink) {
                        downloadLink.setAttribute('href', source);
                    }
                });
            }

            // Função para tocar uma faixa
            function playTrack(id) {
                loadTrack(id);
                audio.play();
            }

            // Controles de reprodução (play/pause)
            audio.addEventListener('play', function () {
                playing = true;
                // npAction.textContent = 'Now Playing...';
            });

            audio.addEventListener('pause', function () {
                playing = false;
                // npAction.textContent = 'Paused...';
            });

            audio.addEventListener('ended', function () {
                // npAction.textContent = 'Paused...';
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            });

            // Botão Anterior
            // document.getElementById('btnPrev').addEventListener('click', function () {
            //     if ((index - 1) > -1) {
            //         index--;
            //         loadTrack(index);
            //         if (playing) {
            //             audio.play();
            //         }
            //     } else {
            //         audio.pause();
            //         index = 0;
            //         loadTrack(index);
            //     }
            // });

            // Botão Próximo
            // document.getElementById('btnNext').addEventListener('click', function () {
            //     if ((index + 1) < trackCount) {
            //         index++;

            //         loadTrack(index);
            //         if (playing) {
            //             audio.play();
            //         }
            //     } else {
            //         audio.pause();
            //         index = 0;
            //         loadTrack(index);
            //     }
            // });

            // Botão Anterior
            document.getElementById('btnPrev').addEventListener('click', function () {
                if ((index - 1) > -1) {
                    index--;
                } else {
                    index = 0; // Garante que o index não seja menor que 0
                }

                loadTrack(index);

                // Realiza o scroll para o item atual, mesmo que seja o primeiro
                var li = plList.children[index];
                li.scrollIntoView({ behavior: 'smooth', block: 'center' });

                if (playing) {
                    audio.play();
                }
            });


            // Botão Próximo
            document.getElementById('btnNext').addEventListener('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                } else {
                    index = 0; // Volta para o primeiro item se passar do último
                }

                loadTrack(index);

                // Realiza o scroll para o item atual
                var li = plList.children[index];
                li.scrollIntoView({ behavior: 'smooth', block: 'center' });

                if (playing) {
                    audio.play();
                }
            });



            loadTrack(index); // Carregar a primeira faixa ao iniciar

            // Modulos de Ativação de Lista 
            // moduloListaAudio();
        } else {
            // Sem suporte a áudio
            document.querySelector('.column').classList.add('hidden');
            document.querySelector('.container').innerHTML = '<p class="no-support">Your browser does not support the audio tag.</p>';
        };
    } else {
        pausarTodosAudios()
        console.warn("O slideIndex fornecido não corresponde a uma página de audio.");
    }

}

