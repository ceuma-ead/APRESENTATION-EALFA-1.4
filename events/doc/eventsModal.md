# EventsModal - Documentação de Métodos

## Sumário
- [Construtor](#construtor)
- [Métodos de Controle](#métodos-de-controle)
- [Métodos de Conteúdo](#métodos-de-conteúdo)
- [Métodos de Eventos](#métodos-de-eventos)
- [Exemplos de Uso](#exemplos-de-uso)

## Construtor

### new EventsModal(modalId, config)
Cria uma nova instância do modal.

```javascript
const modal = new EventsModal('meuModal', {
    backdrop: true,    // true, false, ou 'static'
    keyboard: true     // true ou false para tecla ESC
});
```

## Métodos de Controle

### abrir(dados)
Abre o modal e opcionalmente atualiza seu conteúdo.

```javascript
// Abrir simples
modal.abrir();

// Abrir com dados
modal.abrir({
    titulo: 'Meu Modal',
    corpo: 'Conteúdo do modal',
    rodape: '<button class="btn btn-primary">OK</button>'
});
```

### fechar()
Fecha o modal atual.

```javascript
modal.fechar();
```

### clicarFora()
Simula um clique fora do modal para fechá-lo.

```javascript
// Simula clique fora quando necessário
modal.clicarFora();

// Exemplo prático
const btnSimularCliqueFora = document.getElementById('btnSimular');
btnSimularCliqueFora.addEventListener('click', () => {
    modal.clicarFora();
});
```

### destruir()
Remove completamente o modal e seu backdrop.

```javascript
// Remove o modal e limpa recursos
modal.destruir();

// Exemplo com confirmação
if (confirm('Deseja remover o modal?')) {
    modal.destruir();
}
```

## Métodos de Conteúdo

### atualizarConteudo(dados)
Atualiza o conteúdo do modal.

```javascript
modal.atualizarConteudo({
    titulo: 'Novo Título',
    corpo: 'Novo conteúdo',
    rodape: 'Novo rodapé'
});

// Exemplo com HTML complexo
modal.atualizarConteudo({
    titulo: '<i class="bi bi-info-circle"></i> Informação',
    corpo: `
        <div class="alert alert-info">
            Mensagem importante aqui!
        </div>
        <form>
            <input type="text" class="form-control">
        </form>
    `,
    rodape: `
        <button class="btn btn-secondary">Cancelar</button>
        <button class="btn btn-primary">Salvar</button>
    `
});
```

### limparConteudo()
Limpa todo o conteúdo do modal.

```javascript
// Limpa todo o conteúdo
modal.limparConteudo();

// Exemplo prático
modal.on('hidden.bs.modal', () => {
    modal.limparConteudo(); // Limpa após fechar
});
```

### atualizarPosicao()
Atualiza a posição do modal após mudanças dinâmicas.

```javascript
// Atualiza posição após mudar conteúdo
modal.atualizarConteudo({ corpo: 'Novo conteúdo grande...' });
modal.atualizarPosicao();

// Exemplo com conteúdo dinâmico
const atualizarConteudoDinamico = async () => {
    modal.atualizarConteudo({ corpo: 'Carregando...' });
    const novoConteudo = await buscarDados();
    modal.atualizarConteudo({ corpo: novoConteudo });
    modal.atualizarPosicao();
};
```

## Métodos de Eventos

### initEventos()
Inicializa os eventos padrão do modal (chamado internamente).

Eventos disponíveis:
- show.bs.modal
- shown.bs.modal
- hide.bs.modal
- hidden.bs.modal
- hidePrevented.bs.modal

### on(evento, callback)
Registra eventos personalizados no modal.

```javascript
// Monitorar abertura
modal.on('show.bs.modal', (event) => {
    console.log('Modal abrindo');
});

// Monitorar clique fora
modal.on('hide.bs.modal', ({ event, foiCliqueFora }) => {
    if (foiCliqueFora) {
        console.log('Clicou fora do modal');
    }
});

// Exemplo completo de monitoramento
modal.on('shown.bs.modal', () => console.log('Abriu'));
modal.on('hidden.bs.modal', () => console.log('Fechou'));
```

## Exemplos de Uso

### Modal com Confirmação de Clique Fora
```javascript
const modalConfirm = new EventsModal('modalConfirm');

modalConfirm.on('hide.bs.modal', ({ foiCliqueFora }) => {
    if (foiCliqueFora) {
        const confirmar = confirm('Deseja realmente fechar?');
        if (!confirmar) return false;
    }
});

modalConfirm.abrir({
    titulo: 'Confirmação',
    corpo: 'Clique fora para testar!'
});
```

### Modal com Atualização Automática
```javascript
const modalAuto = new EventsModal('modalAuto');

// Atualização a cada 5 segundos
let contador = 0;
modalAuto.abrir({
    titulo: 'Atualizando...',
    corpo: 'Contador: 0'
});

const interval = setInterval(() => {
    contador++;
    modalAuto.atualizarConteudo({
        corpo: `Contador: ${contador}`
    });
    modalAuto.atualizarPosicao();
}, 5000);

modalAuto.on('hidden.bs.modal', () => {
    clearInterval(interval);
});
```

### Modal com Form e Validação
```javascript
const modalForm = new EventsModal('modalForm', {
    backdrop: 'static'
});

modalForm.abrir({
    titulo: 'Cadastro',
    corpo: `
        <form id="formCadastro">
            <input required type="text" class="form-control">
        </form>
    `,
    rodape: '<button type="submit" form="formCadastro">Enviar</button>'
});

document.getElementById('formCadastro').onsubmit = (e) => {
    e.preventDefault();
    modalForm.fechar();
};

modalForm.on('hide.bs.modal', ({ foiCliqueFora }) => {
    if (foiCliqueFora) return false; // Impede fechamento
});
```

### Modal com Auto-Destruição
```javascript
const modalTemp = new EventsModal('modalTemp');

modalTemp.abrir({
    titulo: 'Auto-destruição',
    corpo: 'Este modal será destruído em 5 segundos'
});

setTimeout(() => {
    modalTemp.destruir();
}, 5000);
```

### Modal com Conteúdo Dinâmico e Posicionamento
```javascript
const modalDinamico = new EventsModal('modalDinamico');

modalDinamico.abrir({
    titulo: 'Carregando...',
    corpo: '<div class="spinner-border"></div>'
});

async function carregarConteudo() {
    const dados = await fetchDados();
    modalDinamico.atualizarConteudo({
        titulo: 'Dados Carregados',
        corpo: dados
    });
    modalDinamico.atualizarPosicao();
}

carregarConteudo();
```