# Events Collapsed

Biblioteca JavaScript para gerenciar elementos colapsáveis com recursos avançados de controle e eventos.

## 📋 Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Métodos](#métodos)
- [Eventos](#eventos)
- [Exemplos](#exemplos)

## 💻 Instalação

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/js/bootstrap.bundle.min.js"></script>

<!-- Events Collapsed -->
<script src="path/to/events-collapsed.js"></script>
```

## ⚙️ Configuração

### Estrutura HTML Básica
```html
<button data-bs-toggle="collapse" data-bs-target="#meuCollapseId">
    Alternar Collapse
</button>

<div class="collapse" id="meuCollapseId">
    <div class="card card-body">
        Conteúdo colapsável aqui
    </div>
</div>
```

### Inicialização
```javascript
const config = {
    parent: '#accordionParent',  // Elemento pai (opcional)
    toggle: true                 // Habilita/desabilita toggle
};

const collapse = new EventsCollapsed('#meuCollapseId', config);
```

## 🛠️ Métodos

### Métodos de Instância

#### constructor(elementoOuId, config)
Cria uma nova instância do EventsCollapsed.
```javascript
// Com ID
const collapse1 = new EventsCollapsed('#meuCollapse');

// Com elemento HTML
const elemento = document.querySelector('.collapse');
const collapse2 = new EventsCollapsed(elemento);
```

#### abrir()
Abre o elemento colapsável.
```javascript
collapse.abrir();

// Encadeamento
collapse.abrir().on('shown.bs.collapse', () => {
    console.log('Aberto!');
});
```

#### fechar()
Fecha o elemento colapsável.
```javascript
collapse.fechar();

// Com callback
collapse.fechar().on('hidden.bs.collapse', () => {
    console.log('Fechado!');
});
```

#### alternar()
Alterna o estado do elemento colapsável.
```javascript
collapse.alternar();

// Em resposta a um evento
btnToggle.addEventListener('click', () => {
    collapse.alternar();
});
```

#### atualizar(novoConteudo)
Atualiza o conteúdo do elemento colapsável.
```javascript
// Com string
collapse.atualizar('Novo conteúdo aqui');

// Com elemento HTML
const novoElemento = document.createElement('div');
novoElemento.textContent = 'Conteúdo dinâmico';
collapse.atualizar(novoElemento);
```

#### destruir()
Remove a instância e limpa recursos.
```javascript
collapse.destruir();

// Exemplo com confirmação
if(confirm('Deseja remover?')) {
    collapse.destruir();
}
```

#### recriar()
Recria a instância após destruição.
```javascript
collapse.recriar();

// Exemplo prático
collapse.destruir().recriar().abrir();
```

#### on(evento, callback)
Registra eventos no elemento colapsável.
```javascript
collapse.on('show.bs.collapse', () => {
    console.log('Iniciando abertura');
});

collapse.on('hidden.bs.collapse', () => {
    console.log('Completamente fechado');
});
```

### Métodos Estáticos

#### criar(elementoOuId, config)
Cria uma nova instância de forma estática.
```javascript
const collapse = EventsCollapsed.criar('#meuCollapse', {
    parent: '#accordion'
});
```

#### getInstance(elementoOuId)
Obtém uma instância existente.
```javascript
const instancia = EventsCollapsed.getInstance('#meuCollapse');
if (instancia) {
    instancia.abrir();
}
```

## 🎯 Eventos

### Eventos Disponíveis
- `show.bs.collapse` - Antes de abrir
- `shown.bs.collapse` - Após abrir
- `hide.bs.collapse` - Antes de fechar
- `hidden.bs.collapse` - Após fechar

## 📝 Exemplos

### 1. Collapse Básico
```javascript
const collapseBasico = EventsCollapsed.criar('#collapseBasico');

// Controles básicos
document.querySelector('#btnAbrir').onclick = () => collapseBasico.abrir();
document.querySelector('#btnFechar').onclick = () => collapseBasico.fechar();
document.querySelector('#btnAlternar').onclick = () => collapseBasico.alternar();
```

### 2. Collapse com Atualização Dinâmica
```javascript
const collapseDinamico = EventsCollapsed.criar('#collapseDinamico');

collapseDinamico.on('show.bs.collapse', async () => {
    // Atualiza conteúdo ao abrir
    const dados = await fetchDados();
    collapseDinamico.atualizar(`
        <div class="card">
            <div class="card-body">
                ${dados.map(item => `<p>${item}</p>`).join('')}
            </div>
        </div>
    `);
});
```

### 3. Collapse em Accordion
```javascript
const accordion = document.querySelector('#accordion');
const collapses = [];

// Criar múltiplos collapses
['item1', 'item2', 'item3'].forEach(id => {
    const collapse = EventsCollapsed.criar(`#collapse${id}`, {
        parent: '#accordion'
    });
    
    collapses.push(collapse);
    
    collapse.on('shown.bs.collapse', () => {
        console.log(`${id} aberto`);
    });
});
```

### 4. Collapse com Gerenciamento de Estado
```javascript
const collapseEstado = EventsCollapsed.criar('#collapseEstado');

// Monitorar estado
collapseEstado
    .on('show.bs.collapse', () => {
        localStorage.setItem('collapseEstado', 'aberto');
    })
    .on('hide.bs.collapse', () => {
        localStorage.setItem('collapseEstado', 'fechado');
    });

// Restaurar estado
const estadoSalvo = localStorage.getItem('collapseEstado');
if (estadoSalvo === 'aberto') {
    collapseEstado.abrir();
}
```

### 5. Collapse com Conteúdo Assíncrono
```javascript
const collapseAsync = EventsCollapsed.criar('#collapseAsync');

collapseAsync
    .on('show.bs.collapse', async () => {
        try {
            collapseAsync.atualizar('<div class="spinner-border"></div>');
            const resposta = await fetch('api/dados');
            const dados = await resposta.json();
            collapseAsync.atualizar(criarConteudo(dados));
        } catch (erro) {
            collapseAsync.atualizar('<div class="alert alert-danger">Erro ao carregar</div>');
        }
    })
    .on('hide.bs.collapse', () => {
        collapseAsync.atualizar(''); // Limpa conteúdo ao fechar
    });
```