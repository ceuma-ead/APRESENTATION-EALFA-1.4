// Fumção para Reduzi o Texto colocando o ... ou qualquer cript
function reduzirTexto(texto, tamanhoMaximo, cript = '...') {
  if (texto.length > tamanhoMaximo) {
    return texto.substring(0, tamanhoMaximo) + cript;
  } else {
    return texto;
  }
}

// Função para deixar a primeira letra maiúscula e o restante minúsculo
function primeiraLetraMaiusculaRestoMinuscula(text) {
  // Remove espaços em branco no início e no final e transforma o texto
  return text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase();
}


function parseConf(conteudo) {
  const linhas = conteudo.split('\n');
  const config = {};
  let secaoAtual = null;

  linhas.forEach(linha => {
    // Remove espaços e ignora linhas em branco ou comentários
    linha = linha.trim();

    if (linha.startsWith('[') && linha.endsWith(']')) {
      // Identifica uma nova seção
      secaoAtual = linha.slice(1, -1);
      config[secaoAtual] = {};  // Cria um objeto para a seção
    } else if (linha && !linha.startsWith('#') && secaoAtual) {
      // Processa chave=valor dentro da seção atual
      const [chave, valor] = linha.split('=');
      if (chave && valor !== undefined) {
        config[secaoAtual][chave.trim()] = parseValor(valor.trim());
      }
    }
  });

  return config;
}

function parseValor(valor) {
  // Verifica se é um booleano
  if (valor.toLowerCase() === 'true') return true;
  if (valor.toLowerCase() === 'false') return false;

  // Verifica se é um número
  if (!isNaN(valor) && !isNaN(parseFloat(valor))) return parseFloat(valor);

  // Se não for booleano ou número, retorna como string
  return valor;
}

// // Exemplo de uso
// const conteudo = `
// [disciplina]
// text = Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - Unidade I
// conv = false
// numero = 42
// `;

// const config = parseConf(conteudo);
// console.log("Configurações:", config);

function fazerRequisicaoParaServer(url) {
  // Cria o objeto de requisição
  var xhr = new XMLHttpRequest();

  // Abre a conexão de forma síncrona (terceiro parâmetro "false" torna a requisição síncrona)
  xhr.open("GET", url, false);

  // Envia a requisição
  xhr.send();

  // Verifica o status da resposta
  if (xhr.status === 200) {
    // console.log("Resposta:", xhr.responseText);
    return parseConf(xhr.responseText)
  } else {
    console.error("Erro na requisição:", xhr.status);
    return null;
  }
}

function axios({ url, method = 'GET', type = 'json', data = null }) {
  // Cria o objeto de requisição
  const xhr = new XMLHttpRequest();

  // Abre a conexão de forma síncrona
  xhr.open(method, url, false);

  // Configura o cabeçalho padrão para JSON (se necessário)
  if (data) {
    xhr.setRequestHeader('Content-Type', 'application/json');
  }

  // Envia a requisição (com ou sem dados)
  xhr.send(data ? JSON.stringify(data) : null);

  // Verifica o status da resposta
  if (xhr.status >= 200 && xhr.status < 300) {
    if (type === 'json') {
      try {
        // Retorna a resposta como JSON
        return JSON.parse(xhr.responseText);
      } catch (error) {
        throw new Error('Erro ao parsear JSON: ' + error.message);
      }
    } else if (type === 'txt') {
      // Retorna a resposta como texto
      return xhr.responseText;
    }
    else if (type === 'env') {
      // Retorna a resposta como texto
      return parseConf(xhr.responseText);
    } else {
      throw new Error(`Tipo de retorno não suportado: ${type}`);
    }
  } else {
    // Lança um erro caso a requisição falhe
    throw new Error(`Erro na requisição: ${xhr.status} - ${xhr.statusText}`);
  }
}


// // Exemplo de uso para GET
// try {
//   const resposta = axios({ url: 'https://jsonplaceholder.typicode.com/posts' });
//   console.log('Resposta:', resposta);
// } catch (error) {
//   console.error(error.message);
// }

// // Exemplo de uso para POST
// try {
//   const novaPostagem = axios({
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     method: 'POST',
//     data: { title: 'Teste', body: 'Conteúdo de teste', userId: 1 },
//   });
//   console.log('Nova Postagem:', novaPostagem);
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   const jsonData = axios({
//     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     type: 'json',
//   });
//   console.log('Resposta JSON:', jsonData);
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   const texto = axios({
//     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     type: 'txt',
//   });
//   console.log('Resposta Texto:', texto);
// } catch (error) {
//   console.error(error.message);
// }


// try {
//   const texto = axios({
//     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     type: 'env',
//   });
//   console.log('Resposta Texto:', texto);
// } catch (error) {
//   console.error(error.message);
// }




function efeitoDigitacao(tempoPiscar, elemento = "", quantidadeElementos = 3, tipoEfeito = "digitacao", container = "", logsAtividade = []) {

  if (container === "") alert("Definir Container para Digitacão...");

  const logTextContainer = document.querySelector(container);
  let index = 0;

  // Adiciona a transição de opacidade para a animação de entrada e saída
  logTextContainer.style.transition = "opacity 0.5s";

  function aplicarEfeito() {
    if (elemento === "") {
      // Anima a saída do log atual
      logTextContainer.style.opacity = 0;

      // Troca o texto após a animação de saída e anima a entrada
      setTimeout(() => {
        logTextContainer.innerHTML = logsAtividade[index];
        logTextContainer.style.opacity = 1;
      }, 500); // Tempo igual ao da transição de opacidade
    } else {
      if (tipoEfeito === "digitacao") {
        logTextContainer.innerHTML = `${logsAtividade[index]} ${elemento.repeat((Date.now() / 200 % quantidadeElementos) + 1)}`;
      } else if (tipoEfeito === "piscar") {
        logTextContainer.innerHTML = `${logsAtividade[index]} ${elemento.repeat(quantidadeElementos)}`;
        logTextContainer.style.opacity = (Date.now() / tempoPiscar % 2) < 1 ? 1 : 0.3;
      }
    }
  }

  // Troca para o próximo log em intervalos regulares
  setInterval(() => {
    index = (index + 1) % logsAtividade.length;
    aplicarEfeito();
  }, tempoPiscar * logsAtividade.length);

  // Aplica o efeito no intervalo de exibição se `elemento` não estiver vazio
  if (elemento !== "") {
    setInterval(aplicarEfeito, tempoPiscar);
  }
}


const bitlockerTemplate = (_cf = []) => {

  // console.log(_cf)
  const logsGerados = ["Recurso protegido ✅", "Recurso não Editável ❌"];

  document.body.innerHTML = `
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #2d2d2d;
          margin: 0;
        }
  
        .lock-screen {
          text-align: center;
          max-width: 500px;
          padding: 20px;
          border-radius: 10px;
        }
  
        .lock-icon {
          font-size: 5rem;
          color: #00d1b2;
        }
  
        .message {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 20px;
        }
  
        .logs-list {
          color: #ffffff;
          font-size: 18px;
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          flex-direction: column;
          width: 100%;
        }
  
        .logs-list li {
          padding: 10px;
          background-color: #4a4a4a;
          border-radius: 5px;
          width: 100%;
        }
  
        button {
          background-color: #4a4a4a;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          transition: transform 0.3s;
          width: 100%;
        }
  
        button:hover {
          transform: scale(1.05);
        }

        /* Modal Styling */
        .modal-body {
          display: flex;
          gap: 1rem;
        }

        .button-list {
          flex: 1;
          width: 100%;
          max-height: 200px;
          overflow: hidden;
          overflow-y: scroll;
          padding:1rem;
        }

         .button-list button {

          width: 100%;
        }

        .animation-box {
          flex: 1;
          background: #4a4a4a;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          color: #fff;
          font-size: 1.5rem;
          overflow:hidden;
        }

         .animation-box img {
          width:200px;
        }
      </style>
  
      <div class="lock-screen">
        <div class="lock-icon">🔒</div>
        <div class="message">BitLocker Ativado</div>
        <ul class="logs-list">
          ${Array.isArray(_cf).length !== 0 ? ` <button id="showModalButton">Ver Animações</button>` : ``}
          ${logsGerados.map(log => `<li>${log}</li>`).join('')}
        </ul>
      </div>


      ${Array.isArray(_cf).length !== 0 ? ` 
      <!-- Modal Bootstrap -->
      <div class="modal fade" id="animationModal" tabindex="-1" aria-labelledby="animationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="animationModalLabel">Animações Mapeadas 🗺 </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="button-list">
                ${[..._cf].map(
    (_, i) => `<button class="btn btn-secondary ${_._class} animation-button" data-animation="${_._animation}">${_._class.replace(".", "")}</button>`
  ).join('')}
              </div>
              
              <div class="animation-box" ><img src='https://www.extranet.ceuma.br/assets/images/grupo-ceuma/ceuma.png' id="animationBox" /></div>
            </div>
          </div>
        </div>
      </div> ` : ``}
  
    `;

  const showModalButton = document.getElementById("showModalButton");
  const animationModal = new bootstrap.Modal(document.getElementById("animationModal"));
  const animationBox = document.getElementById("animationBox");

  // Exibe o modal
  showModalButton.addEventListener("click", () => {
    animationModal.show();
  });




  document.querySelectorAll(".animation-button").forEach(button => {
    button.addEventListener("click", () => {
      const animation = button.getAttribute("data-animation");
      if (!animation) return;

      // Remove as classes atuais de animação (mantém animation-box)
      [...animationBox.classList].forEach(className => {
        if (className !== 'animation-box') {
          animationBox.classList.remove(className);
        }
      });

      // Força um reflow para reiniciar a animação
      void animationBox.offsetWidth;

      // Adiciona as classes novamente
      requestAnimationFrame(() => {
        animation.split(' ').forEach(className => {
          if (className.trim()) {
            animationBox.classList.add(className.trim());
          }
        });
      });
    });
  });
};


const configURLsdjkwi84ew9oedusjkdlj3948wies = axios({
  url: "../urlsMap.json",
  method: "GET",
});

const __configuracoesServidor__ = axios({
  url: "../server.conf",
  method: "GET",
  type: "env"
});

// console.log(configURLsdjkwi84ew9oedusjkdlj3948wies)
// console.log(__configuracoesServidor__);
// const { contexto } = __configuracoesServidor__.disciplina
// console.log(contexto);


// Função assíncrona para carregar a configuração
const global__Config = async (url = configURLsdjkwi84ew9oedusjkdlj3948wies?.urls?.config) => {
  try {
    if (!url) {
      throw new Error("URL de configuração não encontrada.");
    }

    const response = await fetch(url); // Faz a requisição do arquivo JSON
    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo: ${response.status}`);
    }

    const data = await response.json(); // Parseia o arquivo JSON
    return data; // Retorna os dados carregados
  } catch (error) {
    console.error("Erro ao carregar a configuração da toolbar:", error);
    return null;
  }
};

// // Exemplo de uso
// (async () => {
//   const config = await global__Config();
//   console.log("Configuração carregada:", config);
// })();


/**
 * @type (Object)
*/

const configuracoesIntraGlobais = {
  "configuracoesSliderAll": {
    "procurar_slider": {
      "_sliderClass": ".glider-slide",
      "_attrActiver": "data-gslide"
    },
  }
}

// Função para definir um cookie com expiração em minutos
function setCookie(name, value, minutes) {
  const date = new Date();
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

// Função para obter o valor de um cookie
function getCookie(name) {
  const cname = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArr = decodedCookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();
    if (cookie.indexOf(cname) === 0) {
      return cookie.substring(cname.length, cookie.length);
    }
  }
  return "";
}

// Função para apagar o cookie (opcional)
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}


