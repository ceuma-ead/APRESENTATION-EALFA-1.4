# EventsTab - Documentação

## 📋 Índice

- [Instalação](#instalação)
- [Configuração Básica](#configuração-básica)
- [Métodos](#métodos)
- [Exemplos de Uso](#exemplos-de-uso)

## 💾 Instalação

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/js/bootstrap.bundle.min.js"></script>

<!-- EventsTab -->
<script src="path/to/events-tab.js"></script>
```

## ⚙️ Configuração Básica

### Estrutura HTML Necessária
```html
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="minhaTab" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">
            Home
        </button>
    </li>
</ul>

<!-- Conteúdo das tabs -->
<div class="tab-content" id="minhaTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel">
        Conteúdo Home
    </div>
</div>
```

### Inicialização
```javascript
const config = {
    fade: true,      // Efeito de transição fade
    keyboard: true,  // Controle por teclado
    autoInit: true   // Inicialização automática
};

const tab = new EventsTab('#minhaTab', config);
```

## 🛠️ Métodos

### constructor(elementoId, config)
Cria uma nova instância do EventsTab.
```javascript
const tab = new EventsTab('#minhaTab');
// ou
const tab = new EventsTab(document.querySelector('#minhaTab'));
```

### mostrar()
Exibe a tab atual.
```javascript
tab.mostrar();
```

### esconder()
Esconde a tab atual e mostra a próxima.
```javascript
tab.esconder();
```

### ativarPorIndice(index)
Ativa uma tab pelo seu índice.
```javascript
tab.ativarPorIndice(1); // Ativa a segunda tab
```

### ativarPorId(id)
Ativa uma tab específica pelo ID.
```javascript
tab.ativarPorId('perfil-tab');
```

### atualizarConteudo(tabId, novoConteudo)
Atualiza o conteúdo de uma tab.
```javascript
// Com string HTML
tab.atualizarConteudo('perfil', `
    <div class="card">
        <h5>Novo Conteúdo</h5>
        <p>Texto aqui</p>
    </div>
`);

// Com elemento HTML
const elemento = document.createElement('div');
elemento.innerHTML = 'Novo conteúdo';
tab.atualizarConteudo('perfil', elemento);
```

### destruir()
Remove a instância da tab e limpa recursos.
```javascript
tab.destruir();
```

## 🔧 Métodos Estáticos

### EventsTab.criar(elementoId, config)
Cria uma nova instância.
```javascript
const tab = EventsTab.criar('#minhaTab', {
    fade: true
});
```

### EventsTab.obterInstancia(id)
Obtém uma instância existente.
```javascript
const tab = EventsTab.obterInstancia('minhaTab');
```

### EventsTab.destruirTodas()
Destrói todas as instâncias.
```javascript
EventsTab.destruirTodas();
```

## 🚦 Eventos Personalizados

### Métodos de Evento
- `on('show', callback)`: Disparado antes da tab ser mostrada
- `on('shown', callback)`: Disparado após a tab ser mostrada
- `on('hide', callback)`: Disparado antes da tab ser ocultada

### Exemplo Completo
```javascript
const tab = new EventsTab('#minhaTab');

// Evento antes da mudança de tab
tab.on('show', (evento) => {
    const tabDestino = evento.target.id;
    console.log('Indo para:', tabDestino);
});

// Evento após a mudança de tab
tab.on('shown', (evento) => {
    const tabAtual = evento.target.id;
    
    // Lógica específica baseada na tab
    if (tabAtual === 'tutoriais-tab') {
        carregarConteudoTutoriais();
    }
});

## 📝 Exemplos de Uso

### 1. Tab Básica
```javascript
const tab = new EventsTab('#minhaTab');
tab.ativarPorId('perfil-tab');
```

### 2. Tab com Conteúdo Dinâmico
```javascript
const tab = new EventsTab('#minhaTab');

// Atualizar conteúdo e mostrar
tab.atualizarConteudo('perfil', `
    <div class="alert alert-success">
        Perfil atualizado!
    </div>
`).ativarPorId('perfil-tab');
```

### 3. Tab com Carregamento Assíncrono
```javascript
const tab = new EventsTab('#minhaTab');

async function carregarDados() {
    // Mostrar loading
    tab.atualizarConteudo('dados', `
        <div class="spinner-border"></div>
    `);

    try {
        const dados = await fetch('/api/dados');
        const html = await dados.text();
        
        tab.atualizarConteudo('dados', html);
    } catch (erro) {
        tab.atualizarConteudo('dados', `
            <div class="alert alert-danger">
                Erro ao carregar dados
            </div>
        `);
    }
}

// Carregar dados ao clicar na tab
document.querySelector('#dados-tab').addEventListener('click', carregarDados);
```

### 4. Tab com Formulário
```javascript
const tab = new EventsTab('#minhaTab');

tab.atualizarConteudo('form', `
    <form id="meuForm" class="p-3">
        <div class="mb-3">
            <label class="form-label">Nome</label>
            <input type="text" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">
            Salvar
        </button>
    </form>
`);

// Lidar com envio do formulário
document.getElementById('meuForm').onsubmit = async (e) => {
    e.preventDefault();
    await salvarDados();
    tab.ativarPorId('sucesso-tab');
};
```

## ⚠️ Boas Práticas

1. Sempre use IDs únicos para suas tabs e painéis de conteúdo
2. Destrua as instâncias quando não forem mais necessárias
3. Use o efeito fade com moderação em conteúdos dinâmicos
4. Mantenha a estrutura HTML consistente com o padrão Bootstrap
5. Gerencie adequadamente estados de loading em operações assíncronas

## 🔄 Ciclo de Vida da Tab

1. Criação (`new EventsTab()`)
2. Inicialização (automática ou manual)
3. Exibição/Ocultação
4. Atualização de conteúdo
5. Destruição

## 🎨 Personalização de Estilos

```css
/* Personalizar transição fade */
.tab-pane.fade {
    transition: opacity 0.3s ease;
}

/* Estilo para loading */
.tab-pane.loading {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}