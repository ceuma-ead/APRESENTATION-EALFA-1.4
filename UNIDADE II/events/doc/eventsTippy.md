# EventsTippy - Documentação Completa

## 📋 Índice

- [Instalação](#instalação)
- [Configuração Básica](#configuração-básica)
- [Métodos](#métodos)
- [Métodos Estáticos](#métodos-estáticos)
- [Exemplos de Uso](#exemplos-de-uso)
- [Casos de Uso Avançados](#casos-de-uso-avançados)

## 💾 Instalação

```html
<!-- Dependências necessárias -->
<link rel="stylesheet" href="https://unpkg.com/tippy.js@6/dist/tippy.css" />
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
<script src="events-tippy.js"></script>
```

## ⚙️ Configuração Básica

### Opções de Configuração
```javascript
const config = {
    content: "Tooltip dinâmico!",  // Texto ou HTML do tooltip
    allowHTML: true,               // Permite conteúdo HTML
    placement: "top",              // Posicionamento (top, bottom, left, right)
    animation: "fade",             // Tipo de animação
    arrow: true,                   // Mostra seta indicadora
    trigger: "manual",             // Controle manual do tooltip
    theme: "light",                // Tema do tooltip
    interactive: true              // Permite interação com o conteúdo
};
```

## 🛠️ Métodos

### constructor(targets, config)
Cria uma nova instância do EventsTippy.
```javascript
// Com seletor
const tooltip1 = new EventsTippy('#meuBotao');

// Com elemento DOM
const elemento = document.querySelector('.meuElemento');
const tooltip2 = new EventsTippy(elemento);

// Com configuração personalizada
const tooltip3 = new EventsTippy('#meuBotao', {
    content: 'Meu tooltip',
    placement: 'bottom'
});
```

### mostrar(conteudo, x, y)
Exibe o tooltip.
```javascript
// Mostrar simples
tooltip.mostrar();

// Mostrar com novo conteúdo
tooltip.mostrar("Novo conteúdo");

// Mostrar em posição específica
tooltip.mostrar("Conteúdo", 100, 200);
```

### esconder()
Oculta o tooltip.
```javascript
tooltip.esconder();
```

### atualizarConteudo(novoConteudo)
Atualiza o conteúdo do tooltip.
```javascript
tooltip.atualizarConteudo("Novo conteúdo");

// Com HTML
tooltip.atualizarConteudo(`
    <div class="tooltip-custom">
        <h5>Título</h5>
        <p>Conteúdo</p>
    </div>
`);
```

### mover(x, y)
Move o tooltip para uma nova posição.
```javascript
tooltip.mover(200, 300);
```

### destruir()
Remove o tooltip e limpa recursos.
```javascript
tooltip.destruir();
```

## 🔧 Métodos Estáticos

### EventsTippy.criar(config)
Cria um tooltip dinâmico.
```javascript
const tooltip = EventsTippy.criar({
    content: "Tooltip dinâmico"
});
```

### EventsTippy.obterInstancia(id)
Recupera uma instância existente pelo ID.
```javascript
const tooltip = EventsTippy.obterInstancia('tippy-123');
```

### EventsTippy.destruirTodas()
Destrói todas as instâncias ativas.
```javascript
EventsTippy.destruirTodas();
```

## 📝 Exemplos de Uso

### 1. Tooltip Básico em Botão
```javascript
const tooltipBotao = new EventsTippy('#btnAjuda', {
    content: "Clique para mais informações",
    placement: "top"
});
```

### 2. Tooltip Dinâmico Central
```javascript
const tooltipDinamico = EventsTippy.criar({
    content: "Tooltip centralizado"
});

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
tooltipDinamico.mostrar(null, centerX, centerY);
```

### 3. Tooltip com HTML Interativo
```javascript
const tooltipHTML = new EventsTippy('#btnAcoes', {
    content: `
        <div class="p-3">
            <h5>Ações Disponíveis</h5>
            <div class="btn-group">
                <button onclick="editar()">Editar</button>
                <button onclick="excluir()">Excluir</button>
            </div>
        </div>
    `,
    interactive: true,
    placement: "bottom"
});
```

### 4. Tooltip que Segue o Mouse
```javascript
document.addEventListener('mousemove', (e) => {
    tooltip.mover(e.clientX + 10, e.clientY + 10);
});
```

## 🎯 Casos de Uso Avançados

### Tooltip como Sistema de Notificação
```javascript
class NotificationSystem {
    constructor() {
        this.tooltip = EventsTippy.criar({
            theme: 'notification'
        });
    }

    showNotification(message, type = 'info') {
        const content = `
            <div class="notification ${type}">
                ${message}
            </div>
        `;
        
        const x = window.innerWidth - 20;
        const y = 20;
        
        this.tooltip.mostrar(content, x, y);
        setTimeout(() => this.tooltip.esconder(), 3000);
    }
}

const notifications = new NotificationSystem();
notifications.showNotification('Operação realizada com sucesso!', 'success');
```

### Tooltip com Loading State
```javascript
const tooltipLoading = EventsTippy.criar({
    content: '<div class="spinner-border"></div>'
});

async function carregarDados() {
    tooltipLoading.mostrar();
    try {
        const dados = await fetchDados();
        tooltipLoading.atualizarConteudo(`
            <div class="dados-carregados">
                ${dados.map(d => `<div>${d}</div>`).join('')}
            </div>
        `);
    } catch (error) {
        tooltipLoading.atualizarConteudo('Erro ao carregar dados');
    }
}
```

### Tooltip em Grupo de Elementos
```javascript
const tooltipsGrupo = new EventsTippy('.item-ajuda', {
    content: function(reference) {
        return reference.getAttribute('data-tooltip');
    }
});
```

## 🎨 Estilos Personalizados

```css
/* Tema personalizado */
.tippy-box[data-theme~='custom'] {
    background-color: #fff;
    color: #333;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border-radius: 4px;
}

/* Animação personalizada */
.tippy-box[data-animation='custom'] {
    transition: all 0.3s ease;
}
```

## ⚠️ Boas Práticas

1. Sempre destrua tooltips que não estão mais em uso
2. Use `interactive: true` quando o tooltip tiver elementos clicáveis
3. Evite criar múltiplos tooltips dinâmicos simultaneamente
4. Utilize o método `destruirTodas()` ao fazer navegação SPA
5. Gerencie estados de loading adequadamente em tooltips assíncronos

## 🔄 Fluxo de Vida do Tooltip

1. Criação (`new EventsTippy()` ou `EventsTippy.criar()`)
2. Configuração (via objeto config)
3. Exibição (`mostrar()`)
4. Atualização (`atualizarConteudo()`, `mover()`)
5. Ocultação (`esconder()`)
6. Destruição (`destruir()`)