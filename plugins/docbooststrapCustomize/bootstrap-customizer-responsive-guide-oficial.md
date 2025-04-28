# BootstrapCustomizer: Documentação Completa

## Índice
1. [Introdução](#introdução)
2. [Instalação](#instalação)
3. [Configuração Básica](#configuração-básica)
4. [Sistema de Breakpoints Personalizados](#sistema-de-breakpoints-personalizados)
5. [Uso de Classes Responsivas](#uso-de-classes-responsivas)
6. [Personalizando Cores](#personalizando-cores)
7. [Personalizando Espaçamentos](#personalizando-espaçamentos)
8. [Outros Componentes Customizáveis](#outros-componentes-customizáveis)
9. [API Completa](#api-completa)
10. [Exemplos Práticos](#exemplos-práticos)
11. [Solução de Problemas](#solução-de-problemas)

## Introdução

BootstrapCustomizer é uma biblioteca JavaScript flexível que permite personalizar e estender o Bootstrap com configurações avançadas de responsividade, cores, espaçamentos e muito mais. Diferente do Bootstrap padrão, o BootstrapCustomizer oferece:

- Sistema de breakpoints totalmente personalizáveis com suporte a condições de media query complexas
- Classes responsivas independentes que não exigem classes base
- Geração dinâmica de CSS baseada em configuração JavaScript
- Personalização avançada de cores, gradientes, efeitos hover e mais

## Instalação

Para começar a usar o BootstrapCustomizer, inclua o arquivo JavaScript em seu projeto:

```html
<script src="path/to/bootstrap-customizer.js"></script>
```

Certifique-se de incluir o arquivo após carregar o Bootstrap, se estiver usando-o em conjunto.

## Configuração Básica

A configuração do BootstrapCustomizer é feita através de um objeto JavaScript. Aqui está um exemplo básico:

```javascript
const bootstrapConfig = {
  "bootstrap": {
    "config": {
      "grid": {
        "breakpoints": {
          "xs": "max-width: 599px",
          "sm": "(min-width: 600px) and (max-width: 767px)",
          "md": "min-width: 768px",
          "lg": "min-width: 992px",
          "xl": "min-width: 1200px"
        }
      },
      "colors": {
        "brand-primary": {
          "hex": "#3498db",
          "rgb": "52, 152, 219"
        },
        "brand-secondary": {
          "hex": "#2c3e50",
          "rgb": "44, 62, 80"
        }
        // Mais cores...
      },
      "spacing": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "1rem"
        // Mais espaçamentos...
      }
      // Outras configurações...
    }
  }
};

// Inicializar o customizador
const customizer = new BootstrapCustomizer(bootstrapConfig);
customizer.apply();
```

## Sistema de Breakpoints Personalizados

O BootstrapCustomizer permite definir breakpoints de forma muito flexível, suportando tanto a abordagem clássica "mobile-first" (com `min-width`) quanto a "desktop-first" (com `max-width`), ou até mesmo condições compostas.

### Definindo Breakpoints Simples

Para definir breakpoints simples, você pode usar valores de tamanho:

```javascript
"breakpoints": {
  "xs": "0px",
  "sm": "576px",
  "md": "768px",
  "lg": "992px",
  "xl": "1200px"
}
```

Com essa configuração, o sistema usa por padrão a abordagem "mobile-first" com `min-width`.

### Definindo Breakpoints com Condições Personalizadas

Para maior flexibilidade, você pode definir condições de media query completas para cada breakpoint:

```javascript
"breakpoints": {
  "xs": "max-width: 575px",  // Apenas dispositivos muito pequenos
  "sm": "(min-width: 576px) and (max-width: 767px)",  // Apenas dispositivos pequenos
  "md": "(min-width: 768px) and (max-width: 991px)",  // Apenas tablets
  "lg": "(min-width: 992px) and (max-width: 1199px)",  // Apenas desktops
  "xl": "min-width: 1200px"  // Desktops grandes e maiores
}
```

Esta abordagem permite que você defina exatamente quando cada classe responsiva será aplicada.

### Breakpoints para Casos Específicos

Você também pode definir breakpoints para situações específicas, como orientação do dispositivo:

```javascript
"breakpoints": {
  "portrait": "orientation: portrait",
  "landscape": "orientation: landscape",
  "small-height": "max-height: 700px"
}
```

## Uso de Classes Responsivas

Com o BootstrapCustomizer, há duas formas principais de usar classes responsivas:

### 1. Classes Base com Modificadores Responsivos

Semelhante ao Bootstrap padrão, você pode usar uma classe base e modificá-la nos diferentes breakpoints:

```html
<div class="bg-brand-primary bg-md-brand-secondary p-2 p-lg-4">
  Conteúdo
</div>
```

Neste exemplo:
- A cor de fundo será `brand-primary` por padrão
- A cor mudará para `brand-secondary` em telas médias (md) e maiores
- O padding será `p-2` (0.5rem) por padrão
- O padding aumentará para `p-4` (1.5rem) em telas grandes (lg) e maiores

### 2. Classes Responsivas Independentes

Diferente do Bootstrap padrão, o BootstrapCustomizer permite usar classes responsivas de forma independente, sem necessidade da classe base:

```html
<div class="bg-sm-brand-orange bg-md-brand-primary">
  Conteúdo
</div>
```

Neste exemplo:
- O elemento não terá cor de fundo por padrão
- A cor de fundo será `brand-orange` apenas quando a condição do breakpoint `sm` for atendida
- A cor de fundo será `brand-primary` apenas quando a condição do breakpoint `md` for atendida

Esta abordagem é particularmente útil quando você quer aplicar estilos apenas em determinados tamanhos de tela, sem afetar os outros.

## Personalizando Cores

O sistema de cores do BootstrapCustomizer permite definir cores com valores hexadecimais e RGB:

```javascript
"colors": {
  "brand-primary": {
    "hex": "#3498db",
    "rgb": "52, 152, 219"
  },
  "brand-green": {
    "hex": "#2ecc71",
    "rgb": "46, 204, 113"
  }
}
```

Definir o valor RGB é importante para suportar opacidade. Uma vez definidas, você pode usar as cores em suas classes:

```html
<div class="bg-brand-primary text-brand-green">
  Conteúdo com fundo azul e texto verde
</div>
```
## Dimensões: Largura e Altura

O BootstrapCustomizer oferece um sistema flexível para definir larguras e alturas através de classes intuitivas e responsivas.

### Classes de Largura

As classes de largura seguem o padrão `.w-{valor}`, permitindo definir a largura de elementos de forma simples e direta.

#### Valores Básicos

```html
<!-- Larguras fixas -->
<div class="w-25">25% de largura</div>
<div class="w-50">50% de largura</div>
<div class="w-75">75% de largura</div>
<div class="w-100">100% de largura</div>
<div class="w-auto">Largura automática</div>
```

#### Larguras Responsivas

```html
<!-- Larguras que mudam conforme o breakpoint -->
<div class="w-100 w-md-50 w-lg-25">
  Largura total em dispositivos pequenos,
  50% em dispositivos médios,
  25% em dispositivos grandes
</div>
```

### Classes de Altura

Semelhante às classes de largura, as classes de altura usam o padrão `.h-{valor}`.

#### Valores Básicos

```html
<!-- Alturas fixas -->
<div class="h-25">25% de altura</div>
<div class="h-50">50% de altura</div>
<div class="h-75">75% de altura</div>
<div class="h-100">100% de altura</div>
<div class="h-auto">Altura automática</div>
```

#### Alturas Responsivas

```html
<!-- Alturas que mudam conforme o breakpoint -->
<div class="h-100 h-md-50 h-lg-25">
  Altura total em dispositivos pequenos,
  50% em dispositivos médios,
  25% em dispositivos grandes
</div>
```

### Combinando Largura e Altura

```html
<!-- Elementos com dimensões específicas -->
<div class="w-50 h-50">Elemento com 50% de largura e altura</div>

<!-- Layout responsivo complexo -->
<div class="d-flex">
  <div class="w-25 h-100 bg-primary">Coluna lateral</div>
  <div class="w-75 h-100 bg-secondary">Conteúdo principal</div>
</div>
```

### Configuração Personalizada

No arquivo de configuração, você pode definir novos valores de largura e altura:

```javascript
const config = {
  width: {
    '1-3': '33.33%',
    '2-3': '66.66%',
    'custom': '300px'
  },
  height: {
    'banner': '400px',
    'full-screen': '100vh'
  }
}
```



### Variantes de Opacidade

Se você habilitar `generateOpacityVariants` nas opções, o sistema gerará automaticamente classes com opacidade:

```html
<div class="bg-brand-primary-50">
  Conteúdo com fundo azul com 50% de opacidade
</div>
```

## Personalizando Espaçamentos

O sistema de espaçamentos permite definir valores personalizados para margin e padding:

```javascript
"spacing": {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "1rem",
  "4": "1.5rem",
  "5": "3rem",
  "sm": "0.375rem",
  "md": "2rem",
  "lg": "5rem"
}
```

Esses valores são usados para gerar classes de espaçamento:

```html
<div class="p-3 m-2">
  Conteúdo com padding de 1rem e margin de 0.5rem
</div>
```

Também é possível usar essas classes de forma responsiva:

```html
<div class="p-2 p-md-4 m-1 m-lg-5">
  Conteúdo com espaçamento responsivo
</div>
```

## Outros Componentes Customizáveis

O BootstrapCustomizer suporta a personalização de muitos outros componentes:

### Gradientes

```javascript
"gradients": {
  "sunset": {
    "direction": "to bottom",
    "colors": ["#f83600", "#f9d423"]
  }
}
```

Uso:

```html
<div class="bg-gradient-sunset">
  Conteúdo com gradient sunset
</div>
```

### Efeitos Hover

```javascript
"hoverEffects": {
  "zoom": {
    "transform": "scale(1.05)",
    "transition": "transform 0.3s ease"
  }
}
```

Uso:

```html
<div class="hover-zoom">
  Conteúdo que aumenta ao passar o mouse
</div>
```

### Tamanhos de Fonte, Pesos e mais

Você pode personalizar praticamente qualquer propriedade CSS através da configuração.

## API Completa

### Métodos Principais

- `constructor(config)`: Inicializa o customizador com a configuração
- `apply()`: Aplica as customizações, gerando e injetando o CSS
- `update(newConfig)`: Atualiza a configuração existente e reaplicando as customizações
- `addGenerator(type, generator)`: Adiciona um novo gerador de CSS personalizado

### Estrutura de Configuração Completa

```javascript
{
  "bootstrap": {
    "config": {
      "grid": {
        "breakpoints": {...},
        "containers": {...},
        "gutter": {...}
      },
      "colors": {...},
      "spacing": {...},
      "fontSize": {...},
      "fontWeight": {...},
      "lineHeight": {...},
      "borderRadius": {...},
      "borderWidth": {...},
      "boxShadow": {...},
      "gradients": {...},
      "hoverEffects": {...},
      "opacity": {...},
      "animations": {...},
      "cssOptions": {
        "important": true,
        "generateOpacityVariants": true,
        "generateHoverVariants": true,
        "mediaQuerySupport": true
      }
    }
  }
}
```

## Exemplos Práticos

### Layout Responsivo Completo

```html
<div class="container">
  <div class="bg-brand-primary bg-md-brand-secondary p-2 p-md-4 text-white">
    <h1 class="fs-4 fs-lg-2xl">Título Responsivo</h1>
    <p class="d-none d-md-block">Este texto só aparece em telas médias ou maiores</p>
  </div>
  
  <div class="d-flex flex-col flex-md-row">
    <div class="bg-sm-brand-orange bg-lg-brand-green p-3 m-2">
      Seção 1
    </div>
    <div class="bg-brand-blue opacity-75 opacity-md-100 p-3 m-2">
      Seção 2
    </div>
  </div>
</div>
```

### Componente de Card com Hover

```html
<div class="bg-gray-100 p-4 border-1 rounded-lg hover-shadow">
  <h3 class="text-brand-primary">Título do Card</h3>
  <p class="text-gray-700">Conteúdo do card com efeito de sombra ao passar o mouse.</p>
  <button class="bg-brand-success text-white p-2 rounded-md hover-brighten">
    Ação
  </button>
</div>
```

## Solução de Problemas

### Classes responsivas não funcionam como esperado

Se suas classes responsivas (como `bg-sm-brand-primary`) não estão funcionando corretamente:

1. Verifique se seus breakpoints estão definidos corretamente
2. Utilize o inspetor de elementos do navegador para verificar se as media queries estão sendo geradas
3. Certifique-se de que não há conflitos de especificidade CSS

### Ordem de aplicação de estilos

Lembre-se que as media queries seguem a ordem definida em sua configuração. Se você está usando `min-width`, elas vão do menor para o maior breakpoint, então uma regra `md` pode sobrescrever uma regra `sm`.

### Debugging

Para verificar o CSS gerado:

```javascript
const customizer = new BootstrapCustomizer(config);
console.log(customizer.generateCSS()); // Ver o CSS antes de aplicá-lo
customizer.apply();
```

---

# Guia Completo do BootstrapCustomizer

## Sumário
1. [Introdução ao BootstrapCustomizer](#introdução-ao-bootstrapcustomizer)
2. [Instalação e Configuração Inicial](#instalação-e-configuração-inicial)
3. [Configuração de Breakpoints Personalizados](#configuração-de-breakpoints-personalizados)
4. [Trabalhando com Cores](#trabalhando-com-cores)
5. [Sistema de Responsividade Avançado](#sistema-de-responsividade-avançado)
6. [Espaçamentos e Tipografia](#espaçamentos-e-tipografia)
7. [Componentes Visuais: Sombras, Bordas e Gradientes](#componentes-visuais-sombras-bordas-e-gradientes)
8. [Efeitos Hover e Animações](#efeitos-hover-e-animações)
9. [Sistema de Layout Flexbox](#sistema-de-layout-flexbox)
10. [Exemplos Práticos e Use Cases](#exemplos-práticos-e-use-cases)
11. [API Completa](#api-completa)
12. [Solução de Problemas](#solução-de-problemas)

## Introdução ao BootstrapCustomizer

O BootstrapCustomizer é uma biblioteca JavaScript poderosa que permite personalizar praticamente todos os aspectos do CSS através de uma configuração JSON. Ela foi projetada para dar flexibilidade total na responsividade, paleta de cores, espaçamentos e muito mais, permitindo definir breakpoints e comportamentos responsivos de uma forma que o Bootstrap padrão não oferece.

### Principais Vantagens

- **Breakpoints totalmente customizáveis** com suporte para condições complexas de media queries
- **Classes responsivas independentes** que funcionam sem necessidade de classes base
- **Sistema de cores flexível** com suporte para variantes com opacidade
- **Efeitos visuais avançados** como gradientes, sombras e efeitos hover
- **Geração dinâmica de CSS** baseada em configuração JavaScript

## Instalação e Configuração Inicial

### Instalação

1. Faça o download do arquivo `bootstrap-customizer.js`
2. Inclua o arquivo no seu projeto HTML:

```html
<script src="caminho/para/bootstrap-customizer.js"></script>
```

### Configuração Básica

A configuração do BootstrapCustomizer é feita através de um objeto JavaScript. Aqui está um exemplo mínimo:

```javascript
const minhaConfig = {
  "bootstrap": {
    "config": {
      "grid": {
        "breakpoints": {
          "xs": "max-width: 599px",
          "sm": "min-width: 600px",
          "md": "min-width: 768px"
        }
      },
      "colors": {
        "primary": {
          "hex": "#0d6efd",
          "rgb": "13, 110, 253"
        },
        "secondary": {
          "hex": "#6c757d",
          "rgb": "108, 117, 125"
        }
      }
    }
  }
};

// Inicializar o customizador
const customizer = new BootstrapCustomizer(minhaConfig);
customizer.apply();
```

## Configuração de Breakpoints Personalizados

O BootstrapCustomizer revoluciona a forma como você trabalha com breakpoints, permitindo que cada breakpoint tenha sua própria condição de media query personalizada.

### Breakpoints com Condições Simples

```javascript
"breakpoints": {
  "xs": "0px",                 // O padrão sem media query
  "sm": "min-width: 576px",    // Mobile-first: telas >= 576px
  "md": "min-width: 768px",    // Mobile-first: telas >= 768px
  "lg": "min-width: 992px",    // Mobile-first: telas >= 992px
  "xl": "min-width: 1200px"    // Mobile-first: telas >= 1200px
}
```

### Breakpoints com Condições de Intervalo

```javascript
"breakpoints": {
  "xs": "max-width: 575px",                         // Apenas telas < 576px
  "sm": "(min-width: 576px) and (max-width: 767px)", // Apenas telas entre 576px e 767px
  "md": "(min-width: 768px) and (max-width: 991px)", // Apenas telas entre 768px e 991px
  "lg": "(min-width: 992px) and (max-width: 1199px)", // Apenas telas entre 992px e 1199px
  "xl": "min-width: 1200px"                          // Apenas telas >= 1200px
}
```

### Breakpoints para Condições Específicas

```javascript
"breakpoints": {
  "portrait": "orientation: portrait",     // Apenas dispositivos em modo retrato
  "landscape": "orientation: landscape",   // Apenas dispositivos em modo paisagem
  "mobile": "(max-width: 768px) and (hover: none)",  // Dispositivos móveis
  "desktop": "(min-width: 992px) and (hover)",       // Desktops com suporte a hover
  "print": "print"                         // Estilo para impressão
}
```

## Trabalhando com Cores

O sistema de cores do BootstrapCustomizer permite definir cores com valores hexadecimais e RGB, além de gerar variantes com opacidade.

### Definindo Cores Básicas

```javascript
"colors": {
  "primary": {
    "hex": "#0d6efd",  // Valor hexadecimal
    "rgb": "13, 110, 253"  // Importante para opacidade
  },
  "secondary": {
    "hex": "#6c757d",
    "rgb": "108, 117, 125"
  },
  "success": {
    "hex": "#198754",
    "rgb": "25, 135, 84"
  }
}
```

### Usando as Cores

```html
<!-- Cores de background -->
<div class="bg-primary">Conteúdo com fundo primário</div>
<div class="bg-success">Conteúdo com fundo verde</div>

<!-- Cores de texto -->
<p class="text-secondary">Texto em cor secundária</p>

<!-- Cores de borda -->
<div class="border border-primary">Borda em cor primária</div>

<!-- Cores em botões -->
<button class="btn-success">Botão de sucesso</button>
```

### Variantes com Opacidade

O BootstrapCustomizer gera automaticamente variantes de cor com diferentes níveis de opacidade:

```html
<!-- Background com 50% de opacidade -->
<div class="bg-primary-50">Fundo com 50% de opacidade</div>

<!-- Texto com 75% de opacidade -->
<p class="text-secondary-75">Texto com 75% de opacidade</p>
```

## Sistema de Responsividade Avançado

O grande diferencial do BootstrapCustomizer é seu sistema de responsividade avançado, que permite usar classes responsivas diretamente, sem a necessidade de classes base.

### Cores Responsivas

```html
<!-- Exemplo com breakpoints "mobile-first" -->
<div class="bg-primary bg-md-secondary bg-xl-success">
  Muda de cor conforme o tamanho da tela aumenta
</div>

<!-- Exemplo com breakpoints de intervalo específico -->
<div class="bg-xs-primary bg-sm-secondary bg-md-success bg-lg-warning bg-xl-danger">
  Cada tamanho de tela tem uma cor específica
</div>
```

### Opacidade Responsiva

```html
<div class="bg-primary opacity-25 opacity-md-50 opacity-lg-100">
  Aumenta a opacidade conforme a tela fica maior
</div>
```

### Espaçamento Responsivo

```html
<div class="p-2 p-md-4 p-xl-5 m-1 m-lg-3">
  Padding e margin aumentam em telas maiores
</div>
```

### Display Responsivo

```html
<div class="d-none d-md-block">
  Este conteúdo só aparece em telas médias e maiores
</div>

<div class="d-block d-lg-none">
  Este conteúdo só aparece em telas menores que lg
</div>
```

## Espaçamentos e Tipografia

### Configurando Espaçamentos

```javascript
"spacing": {
  "0": "0",
  "1": "0.25rem",    // 4px
  "2": "0.5rem",     // 8px
  "3": "1rem",       // 16px
  "4": "1.5rem",     // 24px
  "5": "3rem",       // 48px
  "auto": "auto",
  "xs": "0.125rem",  // 2px
  "sm": "0.375rem",  // 6px
  "md": "2rem",      // 32px
  "lg": "4rem"       // 64px
}
```

### Usando Espaçamentos

```html
<!-- Padding -->
<div class="p-3">Padding em todos os lados</div>
<div class="pt-2">Padding top</div>
<div class="pb-4">Padding bottom</div>
<div class="ps-2">Padding left (start)</div>
<div class="pe-2">Padding right (end)</div>
<div class="px-3">Padding horizontal</div>
<div class="py-4">Padding vertical</div>

<!-- Margin -->
<div class="m-3">Margin em todos os lados</div>
<div class="mt-3">Margin top</div>
<div class="mb-4">Margin bottom</div>
<div class="ms-auto">Margin left auto</div>
<div class="me-2">Margin right</div>
<div class="mx-auto">Centralizar horizontalmente</div>
<div class="my-4">Margin vertical</div>

<!-- Responsivo -->
<div class="p-2 p-md-3 p-lg-4">Padding responsivo</div>
```

### Configurando Tipografia

```javascript
"fontSize": {
  "xs": "0.75rem",    // 12px
  "sm": "0.875rem",   // 14px
  "md": "1rem",       // 16px
  "lg": "1.25rem",    // 20px
  "xl": "1.5rem",     // 24px
  "2xl": "2rem",      // 32px
  "3xl": "2.5rem"     // 40px
},
"fontWeight": {
  "light": "300",
  "normal": "400",
  "medium": "500",
  "semibold": "600",
  "bold": "700"
},
"lineHeight": {
  "none": "1",
  "tight": "1.25",
  "normal": "1.5",
  "loose": "2"
}
```

### Usando Tipografia

```html
<!-- Tamanho de fonte -->
<p class="fs-sm">Texto pequeno</p>
<p class="fs-md">Texto normal</p>
<p class="fs-xl">Texto grande</p>

<!-- Peso da fonte -->
<p class="fw-light">Texto leve</p>
<p class="fw-normal">Texto normal</p>
<p class="fw-bold">Texto negrito</p>

<!-- Altura de linha -->
<p class="lh-tight">Altura de linha apertada</p>
<p class="lh-normal">Altura de linha normal</p>
<p class="lh-loose">Altura de linha espaçada</p>

<!-- Combinações responsivas -->
<h1 class="fs-lg fs-md-xl fs-lg-2xl">Título responsivo</h1>
```

## Componentes Visuais: Sombras, Bordas e Gradientes

### Configurando Sombras e Bordas

```javascript
"borderRadius": {
  "none": "0",
  "sm": "0.125rem",
  "md": "0.25rem",
  "lg": "0.5rem",
  "xl": "1rem",
  "full": "9999px"
},
"borderWidth": {
  "0": "0",
  "1": "1px",
  "2": "2px",
  "4": "4px"
},
"boxShadow": {
  "none": "none",
  "sm": "0 1px 2px rgba(0, 0, 0, 0.05)",
  "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
}
```

### Usando Bordas e Sombras

```html
<!-- Bordas arredondadas -->
<div class="rounded-lg">Borda arredondada grande</div>
<div class="rounded-full">Forma circular/oval</div>

<!-- Espessura de borda -->
<div class="border-2 border-primary">Borda de 2px na cor primária</div>

<!-- Sombras -->
<div class="shadow-sm">Sombra pequena</div>
<div class="shadow-lg">Sombra grande</div>

<!-- Combinações -->
<div class="border-2 border-primary rounded-lg shadow-md">
  Cartão com borda, cantos arredondados e sombra
</div>
```

### Configurando e Usando Gradientes

```javascript
"gradients": {
  "primary-to-secondary": {
    "direction": "to right",
    "colors": ["var(--bs-primary)", "var(--bs-secondary)"]
  },
  "sunset": {
    "direction": "to bottom",
    "colors": ["#f83600", "#f9d423"]
  }
}
```

```html
<!-- Gradientes como fundo -->
<div class="bg-gradient-sunset">Fundo com gradiente sunset</div>

<!-- Gradientes em texto -->
<h2 class="text-gradient-primary-to-secondary">Texto com gradiente</h2>

<!-- Gradientes em bordas -->
<div class="border-gradient-sunset p-4">Borda com gradiente</div>
```

## Efeitos Hover e Animações

### Configurando Efeitos Hover

```javascript
"hoverEffects": {
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

### Usando Efeitos Hover

```html
<!-- Efeito zoom ao passar o mouse -->
<div class="hover-zoom p-4 bg-primary">
  Este elemento aumenta de tamanho no hover
</div>

<!-- Efeito de brilho ao passar o mouse -->
<img src="imagem.jpg" class="hover-brighten" alt="Imagem com efeito hover">

<!-- Efeito de sombra ao passar o mouse -->
<div class="bg-white p-4 hover-shadow">
  Este card ganha sombra no hover
</div>

<!-- Mudança de cor no hover (gerado automaticamente) -->
<button class="bg-primary hover-bg-secondary">
  Botão muda de cor no hover
</button>
```

### Configurando e Usando Animações

```javascript
"animations": {
  "fadeIn": {
    "keyframes": {
      "0%": { "opacity": "0" },
      "100%": { "opacity": "1" }
    },
    "duration": "1s",
    "timing": "ease-out"
  },
  "pulse": {
    "keyframes": {
      "0%, 100%": { "opacity": "1" },
      "50%": { "opacity": "0.5" }
    },
    "duration": "2s",
    "timing": "ease-in-out",
    "iterations": "infinite"
  }
}
```

```html
<!-- Animação única -->
<div class="animate-fadeIn">
  Este conteúdo aparece com fade-in
</div>

<!-- Animação infinita -->
<div class="animate-pulse bg-warning">
  Este elemento pulsa indefinidamente
</div>
```

## Sistema de Layout Flexbox

### Configurando Opções Flexbox

```javascript
"display": {
  "flex": "flex",
  "inline-flex": "inline-flex"
},
"flexDirection": {
  "row": "row",
  "col": "column"
},
"flexWrap": {
  "wrap": "wrap",
  "nowrap": "nowrap"
},
"alignItems": {
  "start": "flex-start",
  "center": "center",
  "end": "flex-end"
},
"justifyContent": {
  "start": "flex-start",
  "center": "center",
  "between": "space-between",
  "around": "space-around"
}
```

### Criando Layouts Flexbox

```html
<!-- Container flex básico -->
<div class="d-flex">
  Itens em linha
</div>

<!-- Flex vertical -->
<div class="d-flex flex-col">
  Itens em coluna
</div>

<!-- Centralização -->
<div class="d-flex justify-content-center align-items-center" style="height: 200px;">
  Perfeitamente centralizado
</div>

<!-- Layout responsivo -->
<div class="d-flex flex-col flex-md-row">
  <div class="p-3 bg-primary">Item 1</div>
  <div class="p-3 bg-secondary">Item 2</div>
  <div class="p-3 bg-success">Item 3</div>
</div>
```

## Exemplos Práticos e Use Cases

### Card Responsivo com Hover

```html
<div class="bg-white rounded-lg p-3 p-md-4 shadow-sm hover-shadow">
  <img src="produto.jpg" alt="Produto" class="w-full rounded-md hover-brighten">
  <h3 class="fs-lg mt-2 mb-1 text-primary">Nome do Produto</h3>
  <p class="text-gray-600 mb-2">Descrição curta do produto</p>
  <div class="d-flex justify-content-between align-items-center">
    <span class="fs-xl fw-bold">R$ 99,90</span>
    <button class="bg-primary text-white p-2 rounded-md hover-bg-secondary">
      Comprar
    </button>
  </div>
</div>
```
## Direção Flex (Flex Direction)

O sistema de direção flex no BootstrapCustomizer permite controlar facilmente o layout de elementos flexíveis, oferecendo opções para orientação horizontal e vertical.

### Conceitos Básicos de Flex Direction

A propriedade `flex-direction` determina como os itens flexíveis são organizados dentro de um container flex. Existem quatro direções principais:

1. **Linha (Row)**: Itens organizados horizontalmente da esquerda para a direita
2. **Coluna (Column)**: Itens organizados verticalmente de cima para baixo
3. **Linha Reversa (Row Reverse)**: Itens organizados horizontalmente da direita para a esquerda
4. **Coluna Reversa (Column Reverse)**: Itens organizados verticalmente de baixo para cima

### Classes de Direção Flex

#### Classes Básicas

```html
<!-- Linha (padrão) -->
<div class="d-flex flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Coluna -->
<div class="d-flex flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### Direções Reversas

```html
<!-- Linha reversa -->
<div class="d-flex flex-row-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Coluna reversa -->
<div class="d-flex flex-col-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Direções Flex Responsivas

```html
<!-- Layout que muda de coluna para linha em telas médias -->
<div class="d-flex flex-col flex-md-row">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Exemplos Práticos

#### Layout de Cartão Responsivo

```html
<div class="d-flex flex-col flex-md-row">
  <div class="w-100 w-md-50 p-3">
    <img src="imagem.jpg" alt="Imagem do Produto">
  </div>
  <div class="w-100 w-md-50 p-3">
    <h2>Título do Produto</h2>
    <p>Descrição detalhada</p>
    <button>Comprar</button>
  </div>
</div>
```

#### Navegação Responsiva

```html
<nav class="d-flex flex-col flex-md-row justify-content-between">
  <a href="#" class="p-2">Início</a>
  <a href="#" class="p-2">Produtos</a>
  <a href="#" class="p-2">Sobre</a>
  <a href="#" class="p-2">Contato</a>
</nav>
```

### Configuração Personalizada

No arquivo de configuração, você pode definir comportamentos personalizados:

```javascript
const config = {
  flexDirection: {
    'row': null,           // Direção padrão
    'col': null,           // Direção vertical
    'row-reverse': null,   // Linha invertida
    'col-reverse': null    // Coluna invertida
  },
  grid: {
    breakpoints: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px'
    }
  }
}
```

### Banner Hero Responsivo

```html
<div class="bg-gradient-sunset text-white p-4 p-md-6 p-lg-8">
  <div class="container">
    <div class="d-flex flex-col flex-md-row align-items-center">
      <div class="w-full w-md-1/2 mb-4 mb-md-0">
        <h1 class="fs-2xl fs-md-3xl fs-lg-4xl mb-2">Título Principal</h1>
        <p class="fs-md fs-md-lg mb-3 opacity-90">
          Subtítulo ou descrição que aparece em tamanhos diferentes dependendo da tela.
          Este texto também fica menor em telas menores.
        </p>
        <button class="bg-white text-primary p-2 p-md-3 rounded-md hover-shadow">
          Chame para ação
        </button>
      </div>
      <div class="w-full w-md-1/2 d-flex justify-content-center">
        <img src="hero-image.png" alt="Hero" class="w-full w-md-4/5 hover-zoom">
      </div>
    </div>
  </div>
</div>
```

### Tabela de Preços Responsiva

```html
<div class="d-flex flex-col flex-md-row justify-content-center gap-4">
  <!-- Plano Básico -->
  <div class="bg-white rounded-lg shadow-md p-4 w-full w-md-1/3 hover-shadow-lg">
    <h3 class="text-center fs-xl mb-2">Plano Básico</h3>
    <p class="text-center mb-4 text-gray-600">Para quem está começando</p>
    <div class="text-center mb-4">
      <span class="fs-3xl fw-bold">R$ 29,90</span>
      <span class="text-gray-500">/mês</span>
    </div>
    <ul class="mb-4">
      <li class="d-flex align-items-center mb-2">
        <span class="text-success me-2">✓</span> Recurso básico 1
      </li>
      <li class="d-flex align-items-center mb-2">
        <span class="text-success me-2">✓</span> Recurso básico 2
      </li>
      <li class="d-flex align-items-center mb-2 text-gray-500">
        <span class="me-2">✗</span> Recurso premium
      </li>
    </ul>
    <button class="w-full bg-secondary text-white p-2 rounded-md hover-bg-primary">
      Assinar Plano
    </button>
  </div>

  <!-- Plano Premium (destacado) -->
  <div class="bg-white rounded-lg shadow-lg p-4 w-full w-md-1/3 border-2 border-primary position-relative hover-shadow-lg">
    <div class="position-absolute bg-primary text-white py-1 px-2 rounded-full" style="top: -10px; right: 20px;">Popular</div>
    <h3 class="text-center fs-xl mb-2 text-primary">Plano Premium</h3>
    <p class="text-center mb-4 text-gray-600">Nossa melhor opção</p>
    <div class="text-center mb-4">
      <span class="fs-3xl fw-bold">R$ 59,90</span>
      <span class="text-gray-500">/mês</span>
    </div>
    <ul class="mb-4">
      <li class="d-flex align-items-center mb-2">
        <span class="text-success me-2">✓</span> Recurso básico 1
      </li>
      <li class="d-flex align-items-center mb-2">
        <span class="text-success me-2">✓</span> Recurso básico 2
      </li>
      <li class="d-flex align-items-center mb-2">
        <span class="text-success me-2">✓</span> Recurso premium
      </li>
    </ul>
    <button class="w-full bg-primary text-white p-2 rounded-md hover-brighten">
      Assinar Plano
    </button>
  </div>
</div>
```

### Navegação Responsiva

```html
<header class="bg-white shadow-sm p-3">
  <div class="container d-flex justify-content-between align-items-center">
    <!-- Logo -->
    <div class="fs-xl fw-bold text-primary">Logo</div>
    
    <!-- Menu Desktop -->
    <nav class="d-none d-md-flex">
      <ul class="d-flex gap-4">
        <li><a href="#" class="text-gray-800 hover-text-primary">Início</a></li>
        <li><a href="#" class="text-gray-800 hover-text-primary">Recursos</a></li>
        <li><a href="#" class="text-gray-800 hover-text-primary">Preços</a></li>
        <li><a href="#" class="text-gray-800 hover-text-primary">Contato</a></li>
      </ul>
    </nav>
    
    <!-- Botão para menu mobile -->
    <button class="d-md-none bg-transparent border-0">
      <span class="fs-lg">☰</span>
    </button>
  </div>
  
  <!-- Menu Mobile (expandido com JS) -->
  <div class="d-none bg-white w-full p-3">
    <ul class="d-flex flex-col gap-2">
      <li><a href="#" class="text-gray-800 hover-text-primary d-block p-2">Início</a></li>
      <li><a href="#" class="text-gray-800 hover-text-primary d-block p-2">Recursos</a></li>
      <li><a href="#" class="text-gray-800 hover-text-primary d-block p-2">Preços</a></li>
      <li><a href="#" class="text-gray-800 hover-text-primary d-block p-2">Contato</a></li>
    </ul>
  </div>
</header>
```

## API Completa

### Métodos Principais

```javascript
// Criação de uma instância
const customizer = new BootstrapCustomizer(configObject);

// Aplicar as customizações
customizer.apply();

// Atualizar configuração
customizer.update(newConfigObject);

// Adicionar gerador personalizado
customizer.addGenerator('myCustomProperty', function(sectionKey, sectionValue, bootstrapConfig) {
  // Lógica para gerar CSS
  return cssString;
});

// Ver o CSS gerado (para debug)
const generatedCSS = customizer.generateCSS();
console.log(generatedCSS);
```

### Estrutura de Configuração Completa

```javascript
{
  "bootstrap": {
    "config": {
      // Configuração de Grid
      "grid": {
        "breakpoints": { ... },  // Breakpoints personalizados
        "containers": { ... },   // Larguras de container
        "gutter": { ... }        // Espaçamento entre colunas
      },
      
      // Cores e Estilos
      "colors": { ... },         // Paleta de cores
      "opacity": { ... },        // Variantes de opacidade
      "spacing": { ... },        // Sistema de espaçamento
      
      // Tipografia
      "fontSize": { ... },       // Tamanhos de fonte
      "fontWeight": { ... },     // Pesos de fonte
      "lineHeight": { ... },     // Alturas de linha
      "letterSpacing": { ... },  // Espaçamento entre letras
      
      // Bordas e Sombras
      "borderRadius": { ... },   // Arredondamento de bordas
      "borderWidth": { ... },    // Espessuras de borda
      "boxShadow": { ... },      // Sombras
      
      // Efeitos Visuais
      "gradients": { ... },      // Gradientes
      "hoverEffects": { ... },   // Efeitos hover
      "animations": { ... },     // Animações
      
      // Layout Flexbox
      "display": { ... },        // Propriedades display
      "flex": { ... },           // Valores flex
      "flexDirection": { ... },  // Direções flex
      "flexWrap": { ... },       // Wrap de flex
      "alignItems": { ... },     // Alinhamento vertical
      "justifyContent": { ... }, // Alinhamento horizontal
      "alignContent": { ... },   // Alinhamento de linhas em flex
      
      // Posicionamento
      "position": { ... },       // Propriedades position
      "zIndex": { ... },         // Valores z-index
      
      // Dimensões
      "width": { ... },          // Larguras
      "height": { ... },         // Alturas
      
      // Alinhamento de Texto
      "textAlign": { ... },      // Alinhamento de texto
      "verticalAlign": { ... },  // Alinhamento vertical
      "textTransform": { ... },  // Transformação de texto
      "textDecoration": { ... }, // Decoração de texto
      
      // Configurações Gerais
      "cssOptions": {
        "important": true,                // Adicionar !important às regras
        "generateOpacityVariants": true,  // Gerar variantes com opacidade para cores
        "generateHoverVariants": true,    // Gerar variantes hover para cores
        "prefixClasses": "",              // Prefixo para todas as classes
        "mediaQuerySupport": true,        // Habilitar suporte a media queries
        "darkMode": "class",              // Tipo de detecção de modo escuro
        "purgeUnused": false              // Remover classes não utilizadas
      }
    }
  }
}
```

## Solução de Problemas

### Media Queries não aplicam corretamente

Se você estiver enfrentando problemas com suas media queries não aplicando corretamente:

1. **Verifique a configuração de breakpoints**:
   ```javascript
   "breakpoints": {
     "xs": "max-width: 599px",    // Apenas dispositivos muito pequenos
     "sm": "min-width: 600px",    // Dispositivos >= 600px
     "md": "min-width: 768px"     // Dispositivos >= 768px
   }
   ```

2. **Verifique a ordem de declaração das classes**:
   ```html
   <!-- Ordem correta: do menor para o maior breakpoint -->
   <div class="bg-primary bg-md-secondary bg-lg-success">
     Conteúdo
   </div>
   ```

3. **Use o inspetor do navegador** para verificar se as regras de media query estão sendo geradas e aplicadas corretamente. Você pode ver qual regra está sendo aplicada observando o painel de estilos.

### Classes não estão sendo aplicadas

Se suas classes não estiverem sendo aplicadas:

1. **Verifique se o BootstrapCustomizer foi inicializado corretamente**:
   ```javascript
   const customizer = new BootstrapCustomizer(config);
   customizer.apply(); // Importante chamar este método
   ```

2. **Verifique se as propriedades estão definidas na configuração**:
   Por exemplo, se você estiver tentando usar `bg-brand-custom` mas não definiu a cor `brand-custom` na configuração.

3. **Verifique a sintaxe das classes**:
   Certifique-se de que está usando o formato correto: `bg-md-primary` para cores responsivas, `p-sm-4` para espa