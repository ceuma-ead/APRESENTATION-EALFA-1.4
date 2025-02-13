# Events Accordion

Biblioteca JavaScript para gerenciar accordions com funcionalidades avançadas.

## 📋 Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Métodos](#métodos)
- [Eventos](#eventos)
- [Exemplos](#exemplos)

## 🛠️ Métodos

### constructor(elementoOuId)
Inicializa o accordion.

```javascript
const accordion = new EventsAccordion('#meuAccordion');
// ou
const elemento = document.querySelector('.accordion');
const accordion = new EventsAccordion(elemento);
```

### abrir()
Exibe o accordion.

```javascript
accordion.abrir();
```

### fechar()
Oculta o accordion.

```javascript
accordion.fechar();
```

### alternar()
Alterna entre exibir e ocultar o accordion.

```javascript
accordion.alternar();
```

### atualizar(novoConteudo)
Atualiza o conteúdo do accordion.

```javascript
// Com string
accordion.atualizar('<div>Novo conteúdo</div>');

// Com elemento HTML
const novoElemento = document.createElement('div');
novoElemento.textContent = 'Conteúdo dinâmico';
accordion.atualizar(novoElemento);
```

### destruir()
Remove eventos, classes e conteúdo do accordion.

```javascript
accordion.destruir();
```

### recriar()
Restaura o accordion ao seu estado inicial.

```javascript
accordion.recriar();
```

### on(evento, callback)
Adiciona um listener de evento ao accordion.

```javascript
accordion.on('click', () => {
    console.log('Accordion clicado');
});
```

## 📝 Exemplos de Uso

### 1. Accordion Básico
```javascript
const accordion = new EventsAccordion('#accordion');

document.querySelector('#btnAbrir').onclick = () => accordion.abrir();
document.querySelector('#btnFechar').onclick = () => accordion.fechar();
document.querySelector('#btnAlternar').onclick = () => accordion.alternar();
```

### 2. Accordion com Atualização Dinâmica
```javascript
const accordionDinamico = new EventsAccordion('#accordionDinamico');

async function atualizarConteudo() {
    try {
        const dados = await fetch('/api/dados');
        const html = await dados.text();
        accordionDinamico
            .abrir()
            .atualizar(html);
    } catch (erro) {
        console.error('Erro:', erro);
    }
}
```

### 3. Accordion com Destruição e Recriação
```javascript
const accordionResetavel = new EventsAccordion('#accordionResetavel');

// Botão de reset
document.querySelector('#btnReset').onclick = () => {
    accordionResetavel
        .destruir()
        .recriar()
        .abrir();
};
```

### 4. Accordion com Eventos
```javascript
const accordionEventos = new EventsAccordion('#accordionEventos');

accordionEventos
    .on('click', () => {
        console.log('Accordion clicado');
    })
    .on('mouseenter', () => {
        accordionEventos.abrir();
    })
    .on('mouseleave', () => {
        accordionEventos.fechar();
    });
```

### 5. Accordion com Estado Persistente
```javascript
const accordionPersistente = new EventsAccordion('#accordionPersistente');

// Salvar estado
function salvarEstado() {
    const estaAberto = !accordion.elemento.classList.contains('d-none');
    localStorage.setItem('accordionEstado', estaAberto);
}

// Restaurar estado
function restaurarEstado() {
    const estaAberto = localStorage.getItem('accordionEstado') === 'true';
    if (estaAberto) {
        accordionPersistente.abrir();
    } else {
        accordionPersistente.fechar();
    }
}

// Aplicar
accordionPersistente.on('click', () => {
    accordionPersistente.alternar();
    salvarEstado();
});

// Restaurar ao carregar
restaurarEstado();
```

### 6. Accordion com Reset Automático
```javascript
const accordionAuto = new EventsAccordion('#accordionAuto');

// Auto-reset após 5 segundos
accordionAuto.on('click', () => {
    accordionAuto.abrir();
    
    setTimeout(() => {
        accordionAuto
            .destruir()
            .recriar();
    }, 5000);
});
```

### 7. Accordion com Conteúdo Dinâmico e Reset
```javascript
const accordionDinamicoReset = new EventsAccordion('#accordionDinamicoReset');

async function carregarEResetar() {
    try {
        // Destruir estado atual
        accordionDinamicoReset.destruir();
        
        // Carregar novo conteúdo
        const resposta = await fetch('/api/dados');
        const dados = await resposta.text();
        
        // Recriar e atualizar
        accordionDinamicoReset
            .recriar()
            .atualizar(dados)
            .abrir();
            
    } catch (erro) {
        console.error('Erro:', erro);
        // Em caso de erro, apenas recria
        accordionDinamicoReset.recriar();
    }
}
```