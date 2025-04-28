# Guia Completo do BootstrapCustomizer - Personalização Total

## Introdução

O BootstrapCustomizer é uma ferramenta poderosa que permite personalizar o Bootstrap de forma dinâmica e flexível. Este guia vai explicar como usar todas as funcionalidades disponíveis, incluindo como personalizar os nomes das classes para criar seu próprio sistema de design totalmente personalizado.

## Índice

1. [Configuração Básica](#configuração-básica)
2. [Estrutura da Configuração](#estrutura-da-configuração)
3. [Sistema de Grid](#sistema-de-grid)
4. [Espaçamentos](#espaçamentos)
5. [Cores](#cores)
6. [Opacidade](#opacidade)
7. [Gradientes](#gradientes)
8. [Efeitos Hover](#efeitos-hover)
9. [Tipografia](#tipografia)
10. [Bordas e Sombras](#bordas-e-sombras)
11. [Animações](#animações)
12. [Flexbox](#flexbox)
13. [Posicionamento e Display](#posicionamento-e-display)
14. [Dimensionamento](#dimensionamento)
15. [Alinhamento de Texto](#alinhamento-de-texto)
16. [Sistema de Prefixos](#sistema-de-prefixos)
17. [Personalização Completa dos Nomes de Classes](#personalização-completa-dos-nomes-de-classes)
18. [Exemplos Práticos](#exemplos-práticos)
19. [Dicas Avançadas](#dicas-avançadas)

## Configuração Básica

Para começar a usar o BootstrapCustomizer, você precisa incluir o arquivo JavaScript e inicializar o customizador com uma configuração:

```html
<!-- Incluir o script -->
<script src="./js/bootstrap-customizer.js"></script>

<!-- Inicializar o customizador -->
<script>
  // Carregar configuração (pode ser um arquivo JSON separado)
  const config = {
    bootstrap: {
      config: {
        // Configurações aqui...
      }
    }
  };
  
  // Inicializar e aplicar
  const customizer = new BootstrapCustomizer(config);
  customizer.apply();
</script>
```

## Estrutura da Configuração

A configuração do BootstrapCustomizer é organizada em seções, cada uma controlando um aspecto diferente do design:

```javascript
{
  "bootstrap": {
    "config": {
      "grid": { /* Configurações do grid */ },
      "spacing": { /* Configurações de espaçamento */ },
      "colors": { /* Configurações de cores */ },
      // ... outras seções
      "cssOptions": { /* Opções gerais de CSS */ }
    }
  }
}
```

## Sistema de Grid

O grid do Bootstrap pode ser completamente personalizado, incluindo larguras de coluna, breakpoints, tamanhos de container e gutters.

### Como Usar o Grid

O sistema de grid usa classes como `col-md-6` para definir larguras de coluna em diferentes tamanhos de tela:

```html
<div class="row">
  <div class="col-md-6">Coluna 50% em telas médias</div>
  <div class="col-md-6">Coluna 50% em telas médias</div>
</div>
```

### Como Personalizar o Grid

Você pode alterar os valores das colunas, breakpoints, containers e gutters na configuração:

```javascript
"grid": {
  "columns": {
    "col-xs-1": "8.33%",
    "col-xs-2": "16.66%",
    // ... outras colunas
  },
  "breakpoints": {
    "xs": "0px",
    "sm": "576px",
    // ... outros breakpoints
  },
  "containers": {
    "sm": "540px",
    // ... outros containers
  },
  "gutter": {
    "xs": "1.5rem",
    // ... outros gutters
  }
}
```

### Personalização Completa do Grid

Para mudar completamente os nomes das classes de grid, você precisará criar um gerador personalizado (explicado mais adiante) ou modificar o gerador existente:

```javascript
// Modificar o gerador de grid para usar nomes personalizados
customizer.generators.grid = function(sectionKey, sectionValue) {
  let css = '';
  if (sectionValue.columns) {
    Object.entries(sectionValue.columns).forEach(([className, width]) => {
      // Substitua "col" por seu nome personalizado (ex: "coluna")
      const customClassName = className.replace("col-", "coluna-");
      css += `.${customClassName} { width: ${width} !important; }\n`;
    });
    css += '\n';
  }
  return css;
};
```

## Espaçamentos

Os espaçamentos controlam margens e preenchimentos (padding) de forma consistente.

### Como Usar Espaçamentos

As classes de espaçamento seguem o padrão `{propriedade}{direção}-{tamanho}`:

```html
<!-- Margens -->
<div class="m-3">Margem em todos os lados</div>
<div class="mt-4">Margem superior</div>
<div class="mb-5">Margem inferior</div>

<!-- Paddings -->
<div class="p-3">Padding em todos os lados</div>
<div class="pt-4">Padding superior</div>
<div class="pb-5">Padding inferior</div>
```

### Personalização de Espaçamentos

Você pode personalizar os valores de espaçamento:

```javascript
"spacing": {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  // ... outros espaçamentos
}
```

### Personalização Completa de Espaçamentos

Para mudar os nomes das classes de espaçamento (por exemplo, usar "margem" em vez de "m" e "preenchimento" em vez de "p"):

```javascript
// Modificar o gerador de espaçamento para usar nomes personalizados
customizer.generators.spacing = function(sectionKey, sectionValue) {
  let css = '';
  Object.entries(sectionValue).forEach(([spacingKey, spacingValue]) => {
    // Margem (personalizado: "margem" em vez de "m")
    css += `.margem-${spacingKey} { margin: ${spacingValue} !important; }\n`;
    css += `.margem-topo-${spacingKey} { margin-top: ${spacingValue} !important; }\n`;
    css += `.margem-base-${spacingKey} { margin-bottom: ${spacingValue} !important; }\n`;
    css += `.margem-esquerda-${spacingKey} { margin-left: ${spacingValue} !important; }\n`;
    css += `.margem-direita-${spacingKey} { margin-right: ${spacingValue} !important; }\n`;
    css += `.margem-x-${spacingKey} { margin-left: ${spacingValue} !important; margin-right: ${spacingValue} !important; }\n`;
    css += `.margem-y-${spacingKey} { margin-top: ${spacingValue} !important; margin-bottom: ${spacingValue} !important; }\n`;
    
    // Padding (personalizado: "preenchimento" em vez de "p")
    css += `.preenchimento-${spacingKey} { padding: ${spacingValue} !important; }\n`;
    css += `.preenchimento-topo-${spacingKey} { padding-top: ${spacingValue} !important; }\n`;
    css += `.preenchimento-base-${spacingKey} { padding-bottom: ${spacingValue} !important; }\n`;
    css += `.preenchimento-esquerda-${spacingKey} { padding-left: ${spacingValue} !important; }\n`;
    css += `.preenchimento-direita-${spacingKey} { padding-right: ${spacingValue} !important; }\n`;
    css += `.preenchimento-x-${spacingKey} { padding-left: ${spacingValue} !important; padding-right: ${spacingValue} !important; }\n`;
    css += `.preenchimento-y-${spacingKey} { padding-top: ${spacingValue} !important; padding-bottom: ${spacingValue} !important; }\n`;
  });
  css += '\n';
  return css;
};
```

## Cores

O sistema de cores permite definir e usar cores consistentes em toda a aplicação.

### Como Usar Cores

As classes de cor seguem padrões como `bg-{cor}`, `text-{cor}` e `border-{cor}`:

```html
<div class="bg-primary">Fundo primário</div>
<p class="text-danger">Texto vermelho</p>
<div class="border border-success">Borda verde</div>
```

### Personalização de Cores

Você pode definir suas próprias cores na configuração:

```javascript
"colors": {
  "primary": {
    "hex": "#0d6efd",
    "rgb": "13, 110, 253"
  },
  "brand-blue": {
    "hex": "#5ba1c9",
    "rgb": "91, 161, 201"
  },
  // ... outras cores
}
```

### Personalização Completa de Cores

Para usar nomes personalizados para as classes de cor (por exemplo, "fundo" em vez de "bg" e "texto" em vez de "text"):

```javascript
// Modificar o gerador de cores para usar nomes personalizados
customizer.generators.colors = function(sectionKey, sectionValue) {
  let css = ':root {\n';
  
  // Definir variáveis CSS para cores
  Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
    if (typeof colorValue === 'object') {
      css += `  --bs-${colorName}: ${colorValue.hex || colorValue.value || '#000000'};\n`;
      if (colorValue.rgb) {
        css += `  --bs-${colorName}-rgb: ${colorValue.rgb};\n`;
      }
    } else {
      css += `  --bs-${colorName}: ${colorValue};\n`;
    }
  });
  css += '}\n\n';

  // Gerar classes para cada cor (com nomes personalizados)
  Object.entries(sectionValue).forEach(([colorName, colorValue]) => {
    // "fundo" em vez de "bg"
    css += `.fundo-${colorName} { background-color: var(--bs-${colorName}) !important; }\n`;
    
    // "texto" em vez de "text"
    css += `.texto-${colorName} { color: var(--bs-${colorName}) !important; }\n`;
    
    // "borda" em vez de "border"
    css += `.borda-${colorName} { border-color: var(--bs-${colorName}) !important; }\n`;
    
    // "botao" em vez de "btn"
    css += `.botao-${colorName} { background-color: var(--bs-${colorName}) !important; border-color: var(--bs-${colorName}) !important; }\n`;
  });
  css += '\n';
  
  return css;
};
```

## Opacidade

O sistema de opacidade controla a transparência dos elementos.

### Como Usar Opacidade

```html
<div class="opacity-50">50% de opacidade</div>
<div class="bg-primary-50">Fundo primário com 50% de opacidade</div>
```

### Personalização de Opacidade

Você pode definir seus próprios valores de opacidade:

```javascript
"opacity": {
  "0": "0",
  "25": "0.25",
  "50": "0.5",
  "75": "0.75",
  "100": "1"
}
```

### Personalização Completa de Opacidade

Para usar nomes personalizados para as classes de opacidade:

```javascript
// Modificar o gerador de opacidade para usar nomes personalizados
customizer.generators.opacity = function(sectionKey, sectionValue) {
  let css = '/* Classes de transparência */\n';
  Object.entries(sectionValue).forEach(([opacityName, opacityValue]) => {
    // "transparencia" em vez de "opacity"
    css += `.transparencia-${opacityName} { opacity: ${opacityValue} !important; }\n`;
  });
  css += '\n';
  return css;
};

// Também modificar a geração de variantes de opacidade
customizer.generateColorOpacityVariants = function(bootstrapConfig) {
  let css = '/* Variantes de cores com transparência */\n';
  
  Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
    let rgb = null;
    
    if (typeof colorValue === 'object' && colorValue.rgb) {
      rgb = colorValue.rgb;
    }
    
    if (rgb) {
      Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
        if (opacityName !== '100') {
          // Nomes personalizados para variantes de opacidade
          css += `.fundo-${colorName}-${opacityName} { background-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
          css += `.texto-${colorName}-${opacityName} { color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
          css += `.borda-${colorName}-${opacityName} { border-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
        }
      });
    }
  });
  
  return css;
};
```

## Gradientes

Os gradientes permitem criar transições suaves entre cores.

### Como Usar Gradientes

```html
<div class="bg-gradient-primary-to-info">Gradiente primário para info</div>
<h2 class="text-gradient-rainbow">Título com gradiente arco-íris</h2>
```

### Personalização Completa de Gradientes

Para usar nomes personalizados para gradientes:

```javascript
// Modificar o gerador de gradientes para usar nomes personalizados
customizer.generators.gradients = function(sectionKey, sectionValue) {
  let css = '/* Classes de degradê */\n';
  
  Object.entries(sectionValue).forEach(([gradientName, gradientConfig]) => {
    const direction = gradientConfig.direction || 'to right';
    const colors = gradientConfig.colors || ['#000', '#fff'];
    const colorString = colors.join(', ');
    
    // "degradê" em vez de "gradient"
    css += `.fundo-degradê-${gradientName} { background: linear-gradient(${direction}, ${colorString}) !important; }\n`;
    
    css += `.texto-degradê-${gradientName} { 
      background: linear-gradient(${direction}, ${colorString});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent; 
    }\n`;
    
    css += `.borda-degradê-${gradientName} { 
      border: 3px solid transparent;
      background: linear-gradient(${direction}, ${colorString}) border-box;
      -webkit-mask: 
         linear-gradient(#fff 0 0) padding-box, 
         linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }\n`;
  });
  
  css += '\n';
  return css;
};
```

## Efeitos Hover

Os efeitos hover adicionam interatividade quando o cursor passa sobre elementos.

### Como Usar Efeitos Hover

```html
<div class="hover-zoom">Elemento que aumenta no hover</div>
<div class="hover-shadow">Elemento que ganha sombra no hover</div>
```

### Personalização Completa de Efeitos Hover

Para usar nomes personalizados para efeitos hover:

```javascript
// Modificar o gerador de efeitos hover para usar nomes personalizados
customizer.generators.hoverEffects = function(sectionKey, sectionValue, bootstrapConfig) {
  let css = '/* Classes de efeito ao passar o mouse */\n';
  
  Object.entries(sectionValue).forEach(([effectName, effectConfig]) => {
    // "ao-passar" em vez de "hover"
    css += `.ao-passar-${effectName} {\n`;
    
    if (!effectConfig.transition) {
      css += `  transition: all 0.3s ease !important;\n`;
    } else {
      css += `  transition: ${effectConfig.transition} !important;\n`;
    }
    
    css += `}\n`;
    
    css += `.ao-passar-${effectName}:hover {\n`;
    Object.entries(effectConfig).forEach(([prop, value]) => {
      if (prop !== 'transition') {
        css += `  ${prop}: ${value} !important;\n`;
      }
    });
    css += `}\n`;
  });
  
  // Gerar variantes hover para cores se configurado
  if (bootstrapConfig.colors && bootstrapConfig.cssOptions?.generateHoverVariants) {
    css += '\n/* Variantes de fundo ao passar o mouse */\n';
    Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
      css += `.ao-passar-fundo-${colorName}:hover { background-color: var(--bs-${colorName}) !important; }\n`;
      
      // Variantes com opacidade
      if (bootstrapConfig.opacity) {
        Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
          if (opacityName !== "100") {
            const rgb = typeof colorValue === 'object' && colorValue.rgb ? colorValue.rgb : '0, 0, 0';
            css += `.ao-passar-fundo-${colorName}-${opacityName}:hover { background-color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
          }
        });
      }
    });
    
    // Variantes para texto
    css += '\n/* Variantes de texto ao passar o mouse */\n';
    Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
      css += `.ao-passar-texto-${colorName}:hover { color: var(--bs-${colorName}) !important; }\n`;
      
      if (bootstrapConfig.opacity) {
        Object.entries(bootstrapConfig.opacity).forEach(([opacityName, opacityValue]) => {
          if (opacityName !== "100") {
            const rgb = typeof colorValue === 'object' && colorValue.rgb ? colorValue.rgb : '0, 0, 0';
            css += `.ao-passar-texto-${colorName}-${opacityName}:hover { color: rgba(${rgb}, ${opacityValue}) !important; }\n`;
          }
        });
      }
    });
    
    // Variantes para bordas
    css += '\n/* Variantes de borda ao passar o mouse */\n';
    Object.entries(bootstrapConfig.colors).forEach(([colorName, colorValue]) => {
      css += `.ao-passar-borda-${colorName}:hover { border-color: var(--bs-${colorName}) !important; }\n`;
    });
  }
  
  css += '\n';
  return css;
};
```

## Tipografia

As configurações de tipografia controlam tamanhos de fonte, pesos, alturas de linha e espaçamento entre letras.

### Como Usar Tipografia

```html
<p class="fs-xl">Texto muito grande</p>
<p class="fontWeight-bold">Texto em negrito</p>
```

### Personalização Completa de Tipografia

Para usar nomes personalizados para tipografia:

```javascript
// Modificar os geradores relacionados à tipografia
customizer.generators.fontSize = function(sectionKey, sectionValue) {
  let css = '/* Classes de tamanho de fonte */\n';
  Object.entries(sectionValue).forEach(([sizeName, sizeValue]) => {
    // "fonte-tamanho" em vez de "fs"
    css += `.fonte-tamanho-${sizeName} { font-size: ${sizeValue} !important; }\n`;
  });
  css += '\n';
  return css;
};

// Repetir para outras propriedades tipográficas (fontWeight, lineHeight, letterSpacing)
```

## Bordas e Sombras

As configurações de borda controlam o raio e a largura das bordas, enquanto as sombras adicionam profundidade.

### Personalização Completa de Bordas e Sombras

```javascript
// Modificar os geradores relacionados a bordas e sombras
customizer.generators.borderRadius = function(sectionKey, sectionValue) {
  let css = '/* Classes de arredondamento de borda */\n';
  Object.entries(sectionValue).forEach(([radiusName, radiusValue]) => {
    // "borda-arredondada" em vez de "borderRadius"
    css += `.borda-arredondada-${radiusName} { border-radius: ${radiusValue} !important; }\n`;
  });
  css += '\n';
  return css;
};

customizer.generators.boxShadow = function(sectionKey, sectionValue) {
  let css = '/* Classes de sombra */\n';
  Object.entries(sectionValue).forEach(([shadowName, shadowValue]) => {
    // "sombra" em vez de "boxShadow"
    css += `.sombra-${shadowName} { box-shadow: ${shadowValue} !important; }\n`;
  });
  css += '\n';
  return css;
};
```

## Animações

As animações adicionam movimento e interesse visual aos elementos.

### Personalização Completa de Animações

Para criar classes de animação com nomes personalizados, você precisará primeiramente definir as keyframes e depois criar as classes que as utilizam:

```javascript
// Modificar o gerador de animações para usar nomes personalizados
customizer.addGenerator('animations', function(sectionKey, sectionValue) {
  let css = '/* Animações personalizadas */\n';
  
  // Primeiro definir as keyframes
  Object.entries(sectionValue).forEach(([animName, animConfig]) => {
    css += `@keyframes animacao-${animName} {\n`;
    
    Object.entries(animConfig.keyframes).forEach(([keyframe, styles]) => {
      css += `  ${keyframe} {\n`;
      Object.entries(styles).forEach(([prop, value]) => {
        css += `    ${prop}: ${value};\n`;
      });
      css += `  }\n`;
    });
    
    css += `}\n\n`;
    
    // Agora criar a classe que usa a animação
    css += `.animacao-${animName} {\n`;
    css += `  animation: animacao-${animName} ${animConfig.duration || '1s'} ${animConfig.timing || 'ease'} ${animConfig.iterations || '1'};\n`;
    css += `}\n\n`;
  });
  
  return css;
});
```

## Flexbox

As classes Flexbox permitem criar layouts flexíveis e responsivos.

### Personalização Completa de Flexbox

```javascript
// Modificar os geradores relacionados ao Flexbox
customizer.generators.flex = function(sectionKey, sectionValue) {
  let css = '/* Classes de flexbox */\n';
  Object.entries(sectionValue).forEach(([flexName, flexValue]) => {
    // "flex" permanece com o mesmo nome, mas poderia ser alterado
    css += `.flex-${flexName} { flex: ${flexValue} !important; }\n`;
  });
  css += '\n';
  return css;
};

customizer.generators.flexDirection = function(sectionKey, sectionValue) {
  let css = '/* Classes de direção flexbox */\n';
  Object.entries(sectionValue).forEach(([dirName, dirValue]) => {
    // "flex-direcao" em vez de "flexDirection"
    css += `.flex-direcao-${dirName} { flex-direction: ${dirValue} !important; }\n`;
  });
  css += '\n';
  return css;
};

// Repetir para outras propriedades flexbox (flexWrap, alignItems, justifyContent, alignContent)
```

## Posicionamento e Display

As classes de display e posicionamento controlam como os elementos são renderizados e posicionados.

### Personalização Completa de Posicionamento e Display

```javascript
// Modificar os geradores relacionados a posicionamento e display
customizer.generators.display = function(sectionKey, sectionValue) {
  let css = '/* Classes de exibição */\n';
  Object.entries(sectionValue).forEach(([displayName, displayValue]) => {
    // "exibicao" em vez de "display"
    css += `.exibicao-${displayName} { display: ${displayValue} !important; }\n`;
  });
  css += '\n';
  return css;
};

customizer.generators.position = function(sectionKey, sectionValue) {
  let css = '/* Classes de posicionamento */\n';
  Object.entries(sectionValue).forEach(([posName, posValue]) => {
    // "posicao" em vez de "position"
    css += `.posicao-${posName} { position: ${posValue} !important; }\n`;
  });
  css += '\n';
  return css;
};
```

## Dimensionamento

As classes de dimensionamento controlam a largura e altura dos elementos.

### Personalização Completa de Dimensionamento

```javascript
// Modificar os geradores relacionados ao dimensionamento
customizer.generators.width = function(sectionKey, sectionValue) {
  let css = '/* Classes de largura */\n';
  Object.entries(sectionValue).forEach(([widthName, widthValue]) => {
    // "largura" em vez de "width"
    css += `.largura-${widthName} { width: ${widthValue} !important; }\n`;
  });
  css += '\n';
  return css;
};

customizer.generators.height = function(sectionKey, sectionValue) {
  let css = '/* Classes de altura */\n';
  Object.entries(sectionValue).forEach(([heightName, heightValue]) => {
    // "altura" em vez de "height"
    css += `.altura-${heightName} { height: ${heightValue} !important; }\n`;
  });
  css += '\n';
  return css;
};
```

## Alinhamento de Texto

As classes de alinhamento de texto controlam como o texto é alinhado.

### Personalização Completa de Alinhamento de Texto

```javascript
// Modificar os geradores relacionados ao alinhamento de texto
customizer.generators.textAlign = function(sectionKey, sectionValue) {
  let css = '/* Classes de alinhamento de texto */\n';
  Object.entries(sectionValue).forEach(([alignName, alignValue]) => {
    // "texto-alinhamento" em vez de "textAlign"
    css += `.texto-alinhamento-${alignName} { text-align: ${alignValue} !important; }\n`;
  });
  css += '\n';
  return css;
};

// Repetir para outras propriedades de texto (verticalAlign, textTransform, textDecoration)
```

## Sistema de Prefixos

O sistema de prefixos permite adicionar um prefixo a todas as classes geradas, criando um namespace personalizado.

### Como Usar Prefixos

Para definir um prefixo global para todas as classes, use a opção `prefixClasses` em `cssOptions`:

```javascript
"cssOptions": {
  "prefixClasses": "meu-app",
  // outras opções...
}
```

Com esse prefixo, todas as classes terão o formato `meu-app-{classe}`, por exemplo: `meu-app-bg-primary`, `meu-app-m-3`.

### Combinando Prefixos com Nomes Personalizados

Você pode combinar o sistema de prefixos com a personalização de nomes de classes:

```javascript
// Definir o prefixo global
const config = {
  bootstrap: {
    config: {
      cssOptions: {
        prefixClasses: "meu-app",
        // outras opções...
      }
    }
  }
};

// Inicializar com o prefixo
const customizer = new BootstrapCustomizer(config);

// Modificar geradores para usar nomes personalizados
customizer.generators.colors = function(sectionKey, sectionValue) {
  // Implementação com nomes personalizados (fundo, texto, etc.)
  // O prefixo "meu-app" será adicionado automaticamente
};

// Aplicar as mudanças
customizer.apply();
```

O resultado serão classes como `meu-app-fundo-primary`, `meu-app-texto-danger`, etc.

## Personalização Completa dos Nomes de Classes

Para implementar uma personalização completa dos nomes de classes, você precisará modificar todos os geradores relevantes. Aqui está uma abordagem sistemática:

### 1. Criar um Objeto de Mapeamento

Defina um objeto que mapeia os nomes Bootstrap padrão para seus nomes personalizados:

```javascript
const classNameMapping = {
  // Prefixos de propriedades
  "bg": "fundo",
  "text": "texto",
  "border": "borda",
  "btn": "botao",
  "m": "margem",
  "p": "preenchimento",
  "fs": "fonte-tamanho",
  "fw": "fonte-peso",
  
  // Sufixos de direções
  "t": "topo",
  "b": "base",
  "s": "esquerda",
  "e": "direita",
  "x": "x",
  "y": "y",
  
  // Outros mapeamentos...
};
```

### 2. Modificar o Método de Geração CSS Principal

Você pode criar uma função de utilidade para substituir nomes de classes:

```javascript
function customizeClassName(className) {
  // Substituir componentes da classe com base no mapeamento
  let customized = className;
  
  for (const [original, custom] of Object.entries(classNameMapping)) {
    // Substituição com preservação de limites de palavras
    customized = customized.replace(
      new RegExp(`\\b${original}\\b`, 'g'), 
      custom
    );
  }