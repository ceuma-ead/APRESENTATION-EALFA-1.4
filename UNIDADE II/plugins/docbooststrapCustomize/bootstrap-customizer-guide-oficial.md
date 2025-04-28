# Guia Completo do Bootstrap Customizer

## Índice
1. [Introdução](#introdução)
2. [Instalação](#instalação)
3. [Configuração Básica](#configuração-básica)
4. [Usando as Classes do Bootstrap Customizer](#usando-as-classes-do-bootstrap-customizer)
   - [Grid](#grid)
   - [Espaçamentos](#espaçamentos)
   - [Cores](#cores)
   - [Opacidade](#opacidade)
   - [Gradientes](#gradientes)
   - [Efeitos Hover](#efeitos-hover)
   - [Tamanhos de Fonte](#tamanhos-de-fonte)
   - [Peso de Fonte](#peso-de-fonte)
   - [Altura de Linha](#altura-de-linha)
   - [Espaçamento entre Letras](#espaçamento-entre-letras)
   - [Raio de Borda](#raio-de-borda)
   - [Largura de Borda](#largura-de-borda)
   - [Sombras](#sombras)
   - [Animações](#animações)
   - [Flex](#flex)
   - [Display](#display)
   - [Posicionamento](#posicionamento)
   - [Z-Index](#z-index)
   - [Largura e Altura](#largura-e-altura)
   - [Alinhamento de Texto](#alinhamento-de-texto)
   - [Alinhamento Vertical](#alinhamento-vertical)
   - [Transformação de Texto](#transformação-de-texto)
   - [Decoração de Texto](#decoração-de-texto)
5. [Personalizando o Bootstrap Customizer](#personalizando-o-bootstrap-customizer)
6. [Criando Novos Geradores](#criando-novos-geradores)
7. [Exemplos Práticos](#exemplos-práticos)
8. [Resolução de Problemas](#resolução-de-problemas)

## Introdução

O Bootstrap Customizer é uma ferramenta que permite personalizar e estender o Bootstrap de forma fácil e dinâmica. Você pode adicionar suas próprias classes, cores, espaçamentos e muito mais sem modificar o código original do Bootstrap.

## Instalação

1. Primeiro, adicione o arquivo JavaScript ao seu projeto. Salve-o como `bootstrap-customizer.js` em sua pasta de scripts:

```html
<script src="./js/bootstrap-customizer.js"></script>
```

2. Em seguida, crie seu arquivo de configuração personalizada ou adicione diretamente no seu código:

```html
<script>
const myConfig = {
  bootstrap: {
    config: {
      // Sua configuração aqui (veja exemplos abaixo)
    }
  }
};

// Inicializar o customizador
const customizer = new BootstrapCustomizer(myConfig);
customizer.apply();
</script>
```

## Configuração Básica

Aqui está um exemplo de uma configuração básica:

```javascript
const myConfig = {
  bootstrap: {
    config: {
      colors: {
        "brand-blue": {
          "hex": "#5ba1c9",
          "rgb": "91, 161, 201"
        },
        "brand-green": {
          "hex": "#4caf50",
          "rgb": "76, 175, 80"
        }
      },
      spacing: {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "1rem",
        "4": "1.5rem",
        "5": "3rem"
      },
      cssOptions: {
        "important": true,
        "generateOpacityVariants": true,
        "generateHoverVariants": true
      }
    }
  }
};
```

## Usando as Classes do Bootstrap Customizer

### Grid

O sistema de grid do Bootstrap é baseado em 12 colunas e diferentes breakpoints.

**Configuração:**
```javascript
grid: {
  columns: {
    "col-xs-1": "8.33%",
    "col-xs-2": "16.66%",
    // ...
    "col-xs-12": "100%",
    // Outros breakpoints: sm, md, lg, xl
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
  },
  gutter: {
    "xs": "1.5rem",
    "sm": "1.5rem",
    "md": "2rem",
    "lg": "2.5rem",
    "xl": "3rem"
  }
}
```

**Uso:**
```html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-6 col-lg-4">Coluna 1</div>
    <div class="col-xs-12 col-md-6 col-lg-4">Coluna 2</div>
    <div class="col-xs-12 col-md-12 col-lg-4">Coluna 3</div>
  </div>
</div>
```

### Espaçamentos

Defina espaçamentos para padding e margin.

**Configuração:**
```javascript
spacing: {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "1rem",
  "4": "1.5rem",
  "5": "3rem",
  "6": "4.5rem",
  "7": "6rem",
  "8": "9rem",
  "9": "12rem",
  "10": "15rem",
  "xs": "0.125rem",
  "sm": "0.375rem",
  "md": "2rem",
  "lg": "5rem",
  "xl": "10rem",
  "auto": "auto"
}
```

**Uso:**
```html
<!-- Margins -->
<div class="m-3">Margin em todos os lados</div>
<div class="mt-4">Margin-top</div>
<div class="mb-2">Margin-bottom</div>
<div class="ms-5">Margin-left (start)</div>
<div class="me-1">Margin-right (end)</div>
<div class="mx-3">Margin horizontal (left e right)</div>
<div class="my-4">Margin vertical (top e bottom)</div>

<!-- Paddings -->
<div class="p-3">Padding em todos os lados</div>
<div class="pt-4">Padding-top</div>
<div class="pb-2">Padding-bottom</div>
<div class="ps-5">Padding-left (start)</div>
<div class="pe-1">Padding-right (end)</div>
<div class="px-3">Padding horizontal (left e right)</div>
<div class="py-4">Padding vertical (top e bottom)</div>
```

### Cores

Defina cores personalizadas.

**Configuração:**
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
  "brand-blue": {
    "hex": "#5ba1c9",
    "rgb": "91, 161, 201"
  },
  // Outras cores...
}
```

**Uso:**
```html
<!-- Backgrounds -->
<div class="bg-primary">Fundo primário</div>
<div class="bg-brand-blue">Fundo personalizado</div>

<!-- Textos -->
<div class="text-primary">Texto primário</div>
<div class="text-brand-blue">Texto personalizado</div>

<!-- Bordas -->
<div class="border border-primary">Borda primária</div>
<div class="border border-brand-blue">Borda personalizada</div>

<!-- Botões -->
<button class="btn btn-primary">Botão primário</button>
<button class="btn btn-brand-blue">Botão personalizado</button>
```

### Opacidade

Defina valores de opacidade.

**Configuração:**
```javascript
opacity: {
  "0": "0",
  "5": "0.05",
  "10": "0.1",
  "20": "0.2",
  "25": "0.25",
  "50": "0.5",
  "75": "0.75",
  "100": "1"
}
```

**Uso:**
```html
<div class="opacity-50">Este elemento tem 50% de opacidade</div>
<div class="opacity-75">Este elemento tem 75% de opacidade</div>

<!-- Combinação com cores (se cssOptions.generateOpacityVariants for true) -->
<div class="bg-primary-50">Fundo primário com 50% de opacidade</div>
<div class="text-brand-blue-75">Texto personalizado com 75% de opacidade</div>
```

### Gradientes

Defina gradientes personalizados.

**Configuração:**
```javascript
gradients: {
  "primary-to-info": {
    "direction": "to right",
    "colors": ["var(--bs-primary)", "var(--bs-info)"]
  },
  "sunset": {
    "direction": "to bottom",
    "colors": ["#f83600", "#f9d423"]
  }
  // Outros gradientes...
}
```

**Uso:**
```html
<!-- Fundo com gradiente -->
<div class="bg-gradient-sunset">Fundo com gradiente sunset</div>

<!-- Texto com gradiente -->
<div class="text-gradient-primary-to-info">Texto com gradiente</div>

<!-- Borda com gradiente -->
<div class="border-gradient-sunset">Borda com gradiente</div>
```

### Efeitos Hover

Defina efeitos de hover.

**Configuração:**
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
  "grow": {
    "transform": "translateY(-5px)",
    "box-shadow": "0 10px 20px rgba(0,0,0,0.15)",
    "transition": "all 0.3s ease"
  }
  // Outros efeitos...
}
```

**Uso:**
```html
<div class="hover-zoom">Este elemento aumenta ao passar o mouse</div>
<div class="hover-brighten">Este elemento fica mais brilhante ao passar o mouse</div>
<div class="hover-grow">Este elemento cresce e ganha sombra ao passar o mouse</div>

<!-- Combinações de hover com cores (se cssOptions.generateHoverVariants for true) -->
<div class="hover-bg-primary">Muda para fundo primário ao passar o mouse</div>
<div class="hover-text-brand-blue">Muda para texto azul personalizado ao passar o mouse</div>
```

### Tamanhos de Fonte

Defina tamanhos de fonte.

**Configuração:**
```javascript
fontSize: {
  "xs": "0.75rem",
  "sm": "0.875rem",
  "md": "1rem",
  "lg": "1.25rem",
  "xl": "1.5rem",
  "2xl": "2rem",
  "3xl": "2.5rem",
  "4xl": "3rem"
  // Outros tamanhos...
}
```

**Uso:**
```html
<p class="fs-xs">Texto extra pequeno</p>
<p class="fs-sm">Texto pequeno</p>
<p class="fs-md">Texto médio</p>
<p class="fs-lg">Texto grande</p>
<p class="fs-xl">Texto extra grande</p>
<p class="fs-2xl">Texto 2x grande</p>
```

### Peso de Fonte

Defina pesos de fonte.

**Configuração:**
```javascript
fontWeight: {
  "thin": "100",
  "light": "300",
  "normal": "400",
  "medium": "500",
  "semibold": "600",
  "bold": "700",
  "black": "900"
}
```

**Uso (requer implementação do gerador específico):**
```html
<p class="fw-thin">Texto fino</p>
<p class="fw-light">Texto leve</p>
<p class="fw-normal">Texto normal</p>
<p class="fw-medium">Texto médio</p>
<p class="fw-bold">Texto negrito</p>
<p class="fw-black">Texto black</p>
```

### Altura de Linha

Defina alturas de linha.

**Configuração:**
```javascript
lineHeight: {
  "none": "1",
  "tight": "1.25",
  "normal": "1.5",
  "relaxed": "1.625",
  "loose": "2"
}
```

**Uso (requer implementação do gerador específico):**
```html
<p class="lh-none">Altura de linha: none</p>
<p class="lh-tight">Altura de linha: tight</p>
<p class="lh-normal">Altura de linha: normal</p>
<p class="lh-relaxed">Altura de linha: relaxed</p>
<p class="lh-loose">Altura de linha: loose</p>
```

### Espaçamento entre Letras

Defina espaçamentos entre letras.

**Configuração:**
```javascript
letterSpacing: {
  "tighter": "-0.05em",
  "tight": "-0.025em",
  "normal": "0",
  "wide": "0.025em",
  "wider": "0.05em",
  "widest": "0.1em"
}
```

**Uso (requer implementação do gerador específico):**
```html
<p class="ls-tighter">Espaçamento: tighter</p>
<p class="ls-tight">Espaçamento: tight</p>
<p class="ls-normal">Espaçamento: normal</p>
<p class="ls-wide">Espaçamento: wide</p>
<p class="ls-wider">Espaçamento: wider</p>
<p class="ls-widest">Espaçamento: widest</p>
```

### Raio de Borda

Defina raios de borda.

**Configuração:**
```javascript
borderRadius: {
  "none": "0",
  "sm": "0.125rem",
  "md": "0.25rem",
  "lg": "0.5rem",
  "xl": "1rem",
  "full": "9999px"
}
```

**Uso (requer implementação do gerador específico):**
```html
<div class="rounded-none border">Sem raio</div>
<div class="rounded-sm border">Raio pequeno</div>
<div class="rounded-md border">Raio médio</div>
<div class="rounded-lg border">Raio grande</div>
<div class="rounded-xl border">Raio extra grande</div>
<div class="rounded-full border">Raio completo (círculo)</div>
```

### Largura de Borda

Defina larguras de borda.

**Configuração:**
```javascript
borderWidth: {
  "0": "0",
  "1": "1px",
  "2": "2px",
  "3": "3px",
  "4": "4px",
  "8": "8px"
}
```

**Uso (requer implementação do gerador específico):**
```html
<div class="border-0">Sem borda</div>
<div class="border-1">Borda de 1px</div>
<div class="border-2">Borda de 2px</div>
<div class="border-3">Borda de 3px</div>
<div class="border-4">Borda de 4px</div>
<div class="border-8">Borda de 8px</div>
```

### Sombras

Defina sombras.

**Configuração:**
```javascript
boxShadow: {
  "none": "none",
  "sm": "0 1px 2px rgba(0, 0, 0, 0.05)",
  "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
}
```

**Uso (requer implementação do gerador específico):**
```html
<div class="shadow-none p-3 mb-3">Sem sombra</div>
<div class="shadow-sm p-3 mb-3">Sombra pequena</div>
<div class="shadow-md p-3 mb-3">Sombra média</div>
<div class="shadow-lg p-3 mb-3">Sombra grande</div>
<div class="shadow-xl p-3 mb-3">Sombra extra grande</div>
```

### Animações

Defina animações.

**Configuração:**
```javascript
animations: {
  "spin": {
    "keyframes": {
      "0%": { "transform": "rotate(0deg)" },
      "100%": { "transform": "rotate(360deg)" }
    },
    "duration": "1s",
    "timing": "linear",
    "iterations": "infinite"
  },
  "fadeIn": {
    "keyframes": {
      "0%": { "opacity": "0" },
      "100%": { "opacity": "1" }
    },
    "duration": "0.5s",
    "timing": "ease-in"
  }
  // Outras animações...
}
```

**Uso (requer implementação do gerador específico):**
```html
<div class="animate-spin">Elemento que gira</div>
<div class="animate-fadeIn">Elemento que aparece gradualmente</div>
```

### Flex

Defina propriedades flex.

**Configuração:**
```javascript
flex: {
  "1": "1 1 0%",
  "auto": "1 1 auto",
  "initial": "0 1 auto",
  "none": "none",
  "grow-0": "0",
  "grow": "1",
  "shrink-0": "0",
  "shrink": "1"
}
```

**Uso (requer implementação do gerador específico):**
```html
<div class="flex-1">Flex 1</div>
<div class="flex-auto">Flex auto</div>
<div class="flex-initial">Flex initial</div>
<div class="flex-none">Flex none</div>
<div class="flex-grow-0">Não cresce</div>
<div class="flex-grow">Cresce</div>
<div class="flex-shrink-0">Não encolhe</div>
<div class="flex-shrink">Encolhe</div>
```

### Display

Defina propriedades de display.

**Configuração:**
```javascript
display: {
  "none": "none",
  "block": "block",
  "inline-block": "inline-block",
  "inline": "inline",
  "flex": "flex",
  "inline-flex": "inline-flex",
  "grid": "grid",
  "hidden": "none"
}
```

**Uso (requer implementação do gerador específico):**
```html
<div class="d-none">Não exibido</div>
<div class="d-block">Exibido como bloco</div>
<div class="d-inline">Exibido como inline</div>
<div class="d-inline-block">Exibido como inline-block</div>
<div class="d-flex">Exibido como flex</div>
<div class="d-grid">Exibido como grid</div>
```

### Posicionamento

Defina propriedades de posicionamento.

**Configuração:**
```javascript
position: {
  "static": "static",
  "fixed": "fixed",
  "absolute": "absolute",
  "relative": "relative",
  "sticky": "sticky"
}
```

**Uso (requer implementação do gerador específico):**
```html
<div class="position-static">Posicionamento static</div>
<div class="position-fixed">Posicionamento fixed</div>
<div class="position-absolute">Posicionamento absolute</div>
<div class="position-relative">Posicionamento relative</div>
<div class="position-sticky">Posicionamento sticky</div>
```

### Z-Index

Defina valores de z-index.

**Configuração:**
```javascript
zIndex: {
  "0": "0",
  "10": "10",
  "20": "20",
  "30": "30",
  "40": "40",
  "50": "50",
  "auto": "auto"
}
```

**Uso (requer implementação do gerador específico):**
```html
<div class="z-0">Z-index 0</div>
<div class="z-10">Z-index 10</div>
<div class="z-20">Z-index 20</div>
<div class="z-30">Z-index 30</div>
<div class="z-40">Z-index 40</div>
<div class="z-50">Z-index 50</div>
<div class="z-auto">Z-index auto</div>
```

### Largura e Altura

Defina propriedades de largura e altura.

**Configuração:**
```javascript
width: {
  "auto": "auto",
  "0": "0px",
  "1/2": "50%",
  "1/3": "33.333333%",
  "full": "100%",
  "screen": "100vw"
},
height: {
  "auto": "auto",
  "0": "0px",
  "1/2": "50%",
  "full": "100%",
  "screen": "100vh"
}
```

**Uso (requer implementação do gerador específico):**
```html
<div class="w-auto">Largura automática</div>
<div class="w-1/2">Largura 50%</div>
<div class="w-full">Largura 100%</div>
<div class="w-screen">Largura da tela</div>

<div class="h-auto">Altura automática</div>
<div class="h-1/2">Altura 50%</div>
<div class="h-full">Altura 100%</div>
<div class="h-screen">Altura da tela</div>
```

### Alinhamento de Texto

Defina alinhamentos de texto.

**Configuração:**
```javascript
textAlign: {
  "left": "left",
  "center": "center",
  "right": "right",
  "justify": "justify"
}
```

**Uso (requer implementação do gerador específico):**
```html
<p class="text-left">Texto alinhado à esquerda</p>
<p class="text-center">Texto centralizado</p>
<p class="text-right">Texto alinhado à direita</p>
<p class="text-justify">Texto justificado</p>
```

### Alinhamento Vertical

Defina alinhamentos verticais.

**Configuração:**
```javascript
verticalAlign: {
  "baseline": "baseline",
  "top": "top",
  "middle": "middle",
  "bottom": "bottom",
  "text-top": "text-top",
  "text-bottom": "text-bottom"
}
```

**Uso (requer implementação do gerador específico):**
```html
<span class="align-baseline">Alinhado à baseline</span>
<span class="align-top">Alinhado ao topo</span>
<span class="align-middle">Alinhado ao meio</span>
<span class="align-bottom">Alinhado à base</span>
<span class="align-text-top">Alinhado ao topo do texto</span>
<span class="align-text-bottom">Alinhado à base do texto</span>
```

### Transformação de Texto

Defina transformações de texto.

**Configuração:**
```javascript
textTransform: {
  "uppercase": "uppercase",
  "lowercase": "lowercase",
  "capitalize": "capitalize",
  "normal-case": "none"
}
```

**Uso:**
```html
<p class="text-uppercase">Texto em maiúsculas</p>
<p class="text-lowercase">Texto em minúsculas</p>
<p class="text-capitalize">Texto com Iniciais Maiúsculas</p>
<p class="text-normal-case">Texto normal</p>
```

### Decoração de Texto

Defina decorações de texto.

**Configuração:**
```javascript
textDecoration: {
  "underline": "underline",
  "line-through": "line-through",
  "no-underline": "none"
}
```

**Uso:**
```html
<p class="text-underline">Texto sublinhado</p>
<p class="text-line-through">Texto riscado</p>
<p class="text-no-underline">Texto sem decoração</p>
```

## Personalizando o Bootstrap Customizer

Para personalizar o Bootstrap Customizer, você pode adicionar, modificar ou remover configurações.

**Exemplo de atualização:**
```javascript
// Atualizar a configuração existente
customizer.update({
  bootstrap: {
    config: {
      colors: {
        "new-color": {
          "hex": "#ff00ff",
          "rgb": "255, 0, 255"
        }
      }
    }
  }
});
```

## Criando Novos Geradores

Você pode criar geradores personalizados para tipos de propriedades específicas.

```javascript
// Adicionar um novo gerador
customizer.addGenerator('textTransform', function(sectionKey, sectionValue) {
  let css = '/* Text Transform classes */\n';
  Object.entries(sectionValue).forEach(([key, value]) => {
    css += `.text-${key} { text-transform: ${value} !important; }\n`;
  });
  css += '\n';
  return css;
});
```

## Exemplos Práticos

### Cartão de Produto

```html
<div class="p-3 bg-white rounded-lg shadow-md hover-grow">
  <img src="product.jpg" class="w-full h-40 mb-3 rounded-md" alt="Produto">
  <h3 class="text-dark fs-lg fw-bold mb-2">Nome do Produto</h3>
  <p class="text-gray-600 mb-3">Descrição curta do produto muito interessante.</p>
  <div class="d-flex justify-between align-items-center">
    <span class="text-primary fs-xl fw-bold">R$ 99,90</span>
    <button class="btn btn-primary hover-brighten">Comprar</button>
  </div>
</div>
```

### Banner com Gradiente

```html
<div class="p-5 bg-gradient-sunset text-white rounded-xl shadow-lg my-4">
  <h2 class="fs-2xl fw-bold mb-3">Título do Banner</h2>
  <p class="mb-4">Descrição interessante para capturar a atenção do usuário.</p>
  <button class="btn btn-light hover-grow">Saiba Mais</button>
</div>
```

## Resolução de Problemas

### Classes não estão funcionando

- Verifique se o arquivo `bootstrap-customizer.js` está sendo carregado corretamente.
- Verifique se você inicializou o customizador com `customizer.apply()`.
- Verifique o console do navegador para possíveis erros.

### Propriedades customizadas não estão gerando classes

- Verifique se você implementou o gerador específico para essa propriedade.
- Verifique se a configuração está correta.

### Conflitos com o Bootstrap original

- Use prefixos diferentes nas suas classes personalizadas.
- Configure `cssOptions.prefixClasses` para adicionar um prefixo a todas as classes geradas.
