# FilterVision

FilterVision é um componente JavaScript para criação de filtros dinâmicos e arrastáveis em aplicações web. Desenvolvido como parte do Projeto Vizion.

## 🚀 Características

- Filtros dinâmicos e arrastáveis
- Múltiplos campos e tipos de entrada
- Sistema de eventos personalizáveis
- Posicionamento flexível
- Gerenciamento de instâncias únicas
- Totalmente customizável via CSS

## 📦 Instalação

1. Inclua o CSS necessário:
```css
.filterVision {
    position: absolute;
    width: 300px;
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    user-select: none;
    display: none;
    z-index: 1000;
}
.filterVision.active { display: block; }
.filterVision-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    cursor: grab;
}
.filterVision-field { margin-bottom: 1rem; }
.filterVision-input,
.filterVision-select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
}
```

2. Importe a classe FilterVision

## 🔨 Uso Básico

```javascript
const filtro = new FilterVision('container-id', {
    instanceId: 'meu-filtro',
    position: 'center',
    fields: [
        {
            name: 'busca',
            type: 'text',
            placeholder: 'Buscar...'
        }
    ]
});

// Registrar eventos
filtro.on('input', 'busca', (valor) => {
    console.log('Valor digitado:', valor);
});

// Mostrar filtro
filtro.show();
```

## 🎯 Opções de Configuração

### Posições Disponíveis
- `center`: Centro do container
- `left`: Lado esquerdo
- `right`: Lado direito
- `top`: Topo centralizado
- `bottom`: Base centralizada
- `top-left`: Canto superior esquerdo
- `top-right`: Canto superior direito
- `bottom-left`: Canto inferior esquerdo
- `bottom-right`: Canto inferior direito

### Tipos de Campos
```javascript
// Campo de Texto
{
    name: 'busca',
    type: 'text',
    placeholder: 'Buscar...'
}

// Campo Select
{
    name: 'categoria',
    type: 'select',
    options: [
        { value: '1', label: 'Opção 1' },
        { value: '2', label: 'Opção 2' }
    ]
}
```

## 📊 Eventos

### Eventos Disponíveis
- `input`: Durante digitação
- `change`: Quando valor é confirmado
- `blur`: Quando campo perde foco

### Exemplo de Eventos
```javascript
filtro
    .on('input', 'campo', (valor) => {
        console.log('Digitando:', valor);
    })
    .on('blur', 'campo', (valor) => {
        console.log('Foco perdido:', valor);
    });
```

## 🛠️ API

### Métodos Principais
```javascript
// Exibir/Ocultar
filtro.show();
filtro.hide();

// Atualizar Label
filtro.updateLabel('campo', 'Novo Placeholder');

// Destruir Instância
filtro.destroy();

// Obter Valores
const valores = filtro.getValues();
```

## 👥 Contribuidores Vizion

- Gabriel Lopes (Desenvolvedor Principal)
- Renan Santos

## 📄 Licença

Este projeto é parte do Vizion e está sob a licença [Vizion License].

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📚 Exemplo Completo

```javascript
const filtro = new FilterVision('root', {
    instanceId: 'filtro-principal',
    position: 'center',
    fields: [
        {
            name: 'titulo',
            type: 'text',
            placeholder: 'Buscar por Título...'
        },
        {
            name: 'conteudo',
            type: 'text',
            placeholder: 'Buscar no Conteúdo...'
        }
    ]
});

if (!filtro.hasEvents) {
    filtro
        .on('input', 'titulo', (valor) => {
            console.log('Título:', valor);
        })
        .on('input', 'conteudo', (valor) => {
            console.log('Conteúdo:', valor);
        });
    
    filtro.hasEvents = true;
}

filtro.show();
```

## 🔍 Observações
- Cada instância do filtro possui ID único
- Eventos podem ser encadeados
- Posicionamento é relativo ao container
- Filtros são arrastáveis pelo cabeçalho
- Todo posicionamento e arrasto é contido dentro do container especificado

---
Desenvolvido com 💙 pela  Dvizioon