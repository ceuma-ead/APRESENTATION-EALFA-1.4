# Documentação do BootstrapCustomizer

O BootstrapCustomizer é uma ferramenta JavaScript que permite personalizar facilmente os estilos do Bootstrap através de configurações JSON, sem precisar escrever CSS manualmente.

## Índice

1. [Instalação](#instalação)
2. [Uso Básico](#uso-básico)
3. [Configuração Completa](#configuração-completa)
4. [Sistema de Grid](#sistema-de-grid)
5. [Cores](#cores)
6. [Espaçamento](#espaçamento)
7. [Opacidade](#opacidade)
8. [Gradientes](#gradientes)
9. [Efeitos Hover](#efeitos-hover)
10. [Extensões](#extensões)
11. [Exemplos](#exemplos)
12. [API de Referência](#api-de-referência)

## Instalação

1. Adicione o arquivo `bootstrap-customizer.js` ao seu projeto:

```html
<script src="js/bootstrap-customizer.js"></script>
```

2. Crie um arquivo de configuração ou defina a configuração diretamente no JavaScript:

```html
<script>
  // Configuração base
  const bootConfig = {
    bootstrap: {
      config: {
        // Configurações aqui...
      }
    }
  };
  
  // Inicie o customizador
  const customizer = new BootstrapCustomizer(bootConfig);
  customizer.apply();
</script>
```

## Uso Básico

Para começar a usar o BootstrapCustomizer, você precisa criar uma instância do customizador e aplicar uma configuração:

```javascript
// Configuração mínima
const config = {
  bootstrap: {
    config: {
      colors: {
        "primary": {
          "hex": "#0d6efd",
          "rgb": "13, 110, 253"
        },
        "success": {
          "hex": "#198754",
          "rgb": "25, 135, 84"
        }
      }
    }
  }
};

// Inicializar e aplicar
const customizer = new BootstrapCustomizer(config);
customizer.apply();
```

Isso gerará classes CSS para as cores definidas, como `.bg-primary`, `.text-success`, etc.

## Configuração Completa

Uma configuração completa inclui vários tipos de customizações:

```javascript
const bootConfig = {
  bootstrap: {
    config: {
      grid: { ... },     // Sistema de grid
      spacing: { ... },  // Espaçamentos
      colors: { ... },   // Cores
      opacity: { ... },  // Opacidades
      gradients: { ... }, // Gradientes
      hoverEffects: { ... }, // Efeitos hover
      cssOptions: { ... } // Opções gerais
    }
  }
};
```

## Sistema de Grid

Configure o sistema de grid com colunas, breakpoints e containers:

```javascript
grid: {
  columns: {
    "col-xs-1": "8.33%",
    "col-xs-2": "16.66%",
    // ... outras colunas
    "col-xl-12": "100%"
  },
  
  breakpoints: {
    "xs": "0px",
    "sm": "576px",
    "md": "768px",
    "lg": "992px",
    "xl": "1200px",
    "xxl": "1400px"
  },
  
  containers: {
    "sm": "540px",
    "md": "720px",
    "lg": "960px",
    "xl": "1140px",
    "xxl": "1320px"
  }
}
```

## Cores

Configure as cores principais e suas variantes:

```javascript
colors: {
  "primary": {
    "hex": "#0d6efd",
    "rgb": "13, 110, 253"
  },
  "secondary": {
    "hex": "#6c757d",
    "rgb": "108, 117, 125"
  },
  // Adicione cores personalizadas
  "brand": {
    "hex": "#8b5cf6",
    "rgb": "139, 92, 246"
  }
}
```

Isso gerará:
- `.bg-primary`, `.bg-secondary`, `.bg-brand` (cores de fundo)
- `.text-primary`, `.text-secondary`, `.text-brand` (cores de texto)
- `.border-primary`, `.border-secondary`, `.border-brand` (cores de borda)
- `.btn-primary`, `.btn-secondary`, `.btn-brand` (cores de botão)

## Espaçamento

Configure os valores de espaçamento:

```javascript
spacing: {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "1rem",
  "4": "1.5rem",
  "5": "3rem",
  "auto": "auto"
}
```

Isso gerará:
- `.m-0`, `.m-1`, ... (margin)
- `.p-0`, `.p-1`, ... (padding)
- `.mt-0`, `.mt-1`, ... (margin-top)
- `.mb-0`, `.mb-1`, ... (margin-bottom)
- `.ms-0`, `.ms-1`, ... (margin-start/left)
- `.me-0`, `.me-1`, ... (margin-end/right)
- `.mx-0`, `.mx-1`, ... (margin horizontal)
- `.my-0`, `.my-1`, ... (margin vertical)
- E equivalentes para padding (`.p-*`, `.pt-*`, etc.)

## Opacidade

Configure os valores de opacidade:

```javascript
opacity: {
  "0": "0",
  "10": "0.1",
  "25": "0.25",
  "50": "0.5",
  "75": "0.75",
  "90": "0.9",
  "100": "1"
}
```

Isso gerará:
- `.opacity-0`, `.opacity-10`, ... (classes de opacidade)

Combinado com `generateOpacityVariants: true`, também gerará:
- `.bg-primary-50`, `.bg-primary-75`, ... (cores de fundo com opacidade)
- `.text-primary-50`, `.text-primary-75`, ... (cores de texto com opacidade)

## Gradientes

Configure gradientes personalizados:

```javascript
gradients: {
  "primary-to-info": {
    "direction": "to right",
    "colors": ["var(--bs-primary)", "var(--bs-info)"]
  },
  "success-to-warning": {
    "direction": "45deg",
    "colors": ["var(--bs-success)", "var(--bs-warning)"]
  },
  "sunset": {
    "direction": "to bottom",
    "colors": ["#FF512F", "#F09819"]
  }
}
```

Isso gerará:
- `.bg-gradient-primary-to-info`, `.bg-gradient-success-to-warning`, ... (fundos com gradientes)
- `.text-gradient-primary-to-info`, `.text-gradient-success-to-warning`, ... (textos com gradientes)
- `.border-gradient-primary-to-info`, `.border-gradient-success-to-warning`, ... (bordas com gradientes)

## Efeitos Hover

Configure efeitos que são aplicados no hover:

```javascript
hoverEffects: {
  "zoom": {
    "transform": "scale(1.05)",
    "transition": "transform 0.3s ease"
  },
  "brighten": {
    "filter": "brightness(1.2)",
    "transition": "filter 0.3s ease"
  },
  "shadow": {
    "box-shadow": "0 5px 15px rgba(0,0,0,0.2)",
    "transition": "box-shadow 0.3s ease"
  }
}
```

Isso gerará:
- `.hover-zoom`, `.hover-brighten`, `.hover-shadow` (classes que aplicam efeitos no hover)

Combinado com `generateHoverVariants: true`, também gerará:
- `.hover-bg-primary`, `.hover-bg-secondary`, ... (mudança de cor de fundo no hover)
- `.hover-text-primary`, `.hover-text-secondary`, ... (mudança de cor de texto no hover)
- `.hover-bg-primary-50`, ... (cores com opacidade no hover)

## Extensões

Você pode adicionar dinamicamente novos geradores:

```javascript
// Adicionar um gerador personalizado
customizer.addGenerator('borderRadius', function(sectionKey, sectionValue) {
  let css = '/* Border radius classes */\n';
  Object.entries(sectionValue).forEach(([name, value]) => {
    css += `.rounded-${name} { border-radius: ${value} !important; }\n`;
  });
  return css;
});

// Atualizar com a nova configuração
customizer.update({
  bootstrap: {
    config: {
      borderRadius: {
        "0": "0",
        "sm": "0.2rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "pill": "50rem"
      }
    }
  }
});
```

## Exemplos

### Uso de Cores

```html
<div class="bg-primary text-white p-3">
  Fundo azul primário com texto branco
</div>

<div class="bg-success-50 text-dark p-3">
  Fundo verde com 50% de opacidade
</div>
```

### Uso de Gradientes

```html
<div class="bg-gradient-primary-to-info text-white p-3">
  Fundo com gradiente do azul primário para azul info
</div>

<h2 class="text-gradient-rainbow">
  Texto com gradiente arco-íris
</h2>

<div class="border-gradient-sunset p-3">
  Elemento com borda gradiente
</div>
```

### Uso de Efeitos Hover

```html
<div class="card hover-zoom">
  <div class="card-body">
    <h5 class="card-title">Efeito Zoom</h5>
    <p class="card-text">Passe o mouse para ver o efeito.</p>
  </div>
</div>

<button class="btn btn-primary hover-brighten">
  Botão com Brilho no Hover
</button>

<div class="card hover-bg-danger hover-text-white">
  <div class="card-body">
    <h5 class="card-title">Mudança de Cor</h5>
    <p class="card-text">Este card muda para vermelho no hover.</p>
  </div>
</div>
```

## API de Referência

### BootstrapCustomizer

```javascript
// Construtor
const customizer = new BootstrapCustomizer(config);

// Aplicar estilos
customizer.apply();

// Atualizar configuração
customizer.update(newConfig);

// Adicionar gerador personalizado
customizer.addGenerator(type, generatorFunction);
```

### Opções CSS

```javascript
cssOptions: {
  // Adicionar !important a todas as propriedades
  "important": true,
  
  // Gerar variantes com opacidade para cores
  "generateOpacityVariants": true,
  
  // Gerar variantes hover para cores
  "generateHoverVariants": true
}
```

---

Esta documentação foi gerada para o BootstrapCustomizer v1.0.0
