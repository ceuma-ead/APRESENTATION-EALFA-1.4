# Guia de Responsividade do Bootstrap Customizer

## Índice
1. [Introdução à Responsividade](#introdução-à-responsividade)
2. [Breakpoints Padrão](#breakpoints-padrão)
3. [Como Usar Classes Responsivas](#como-usar-classes-responsivas)
   - [Sintaxe Básica](#sintaxe-básica)
   - [Classes Aninhadas](#classes-aninhadas)
4. [Exemplos por Categoria](#exemplos-por-categoria)
   - [Grid Responsivo](#grid-responsivo)
   - [Espaçamentos Responsivos](#espaçamentos-responsivos)
   - [Cores Responsivas](#cores-responsivas)
   - [Opacidade Responsiva](#opacidade-responsiva)
   - [Tamanhos de Texto Responsivos](#tamanhos-de-texto-responsivos)
   - [Display Responsivo](#display-responsivo)
   - [Flexbox Responsivo](#flexbox-responsivo)
   - [Alinhamento Responsivo](#alinhamento-responsivo)
   - [Bordas e Sombras Responsivas](#bordas-e-sombras-responsivas)
   - [Gradientes Responsivos](#gradientes-responsivos)
   - [Efeitos Hover Responsivos](#efeitos-hover-responsivos)
5. [Criando Novos Breakpoints](#criando-novos-breakpoints)
6. [Personalizando a Responsividade](#personalizando-a-responsividade)
7. [Dicas e Boas Práticas](#dicas-e-boas-práticas)
8. [Solução de Problemas](#solução-de-problemas)

## Introdução à Responsividade

O Bootstrap Customizer permite criar sites e aplicações totalmente responsivos, adaptando-se a diferentes tamanhos de tela. A responsividade é baseada no conceito de breakpoints - pontos específicos de largura da tela onde o layout pode mudar.

Cada propriedade CSS pode ter valores diferentes em diferentes breakpoints, permitindo criar uma experiência otimizada para dispositivos móveis, tablets e desktops.

## Breakpoints Padrão

Os breakpoints padrão no Bootstrap Customizer são:

| Breakpoint | Código | Largura mínima | Descrição |
|------------|--------|----------------|-----------|
| Extra pequeno | `xs` | 0px | Smartphones em modo retrato |
| Pequeno | `sm` | 576px | Smartphones em modo paisagem |
| Médio | `md` | 768px | Tablets |
| Grande | `lg` | 992px | Desktops |
| Extra grande | `xl` | 1200px | Desktops grandes |
| Extra extra grande | `xxl` | 1400px | Desktops muito grandes |

As classes responsivas sem prefixo de breakpoint (`xs`) sempre se aplicam primeiro, e depois são sobrescritas pelas classes de breakpoints maiores quando a largura da tela aumenta.

## Como Usar Classes Responsivas

### Sintaxe Básica

A sintaxe para usar classes responsivas segue o padrão:

```
propriedade-breakpoint-valor
```

- **propriedade**: O tipo de estilo (p, m, bg, text, etc.)
- **breakpoint**: O código do breakpoint (sm, md, lg, xl)
- **valor**: O valor ou variação da propriedade

Exemplos:
- `p-3`: Padding 1rem em todos os dispositivos
- `p-md-5`: Padding 3rem em tablets e acima
- `text-lg-center`: Texto centralizado em desktops e acima

### Classes Aninhadas

Você pode combinar várias classes responsivas no mesmo elemento:

```html
<div class="p-2 p-md-3 p-lg-5 m-1 m-md-3 text-center text-lg-left bg-light bg-md-primary">
  Conteúdo responsivo
</div>
```

Este elemento terá:
- Padding que aumenta gradualmente para telas maiores
- Margin que aumenta em tablets
- Texto centralizado por padrão, mas alinhado à esquerda em desktops
- Fundo claro por padrão, mas azul primário em tablets e acima

## Exemplos por Categoria

### Grid Responsivo

O sistema de grid permite criar layouts diferentes para cada tamanho de tela:

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <!-- Ocupa toda largura em mobile, metade em tablets, um terço em desktops -->
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <!-- Ocupa toda largura em mobile, metade em tablets, um terço em desktops -->
    </div>
    <div class="col-12 col-md-12 col-lg-4">
      <!-- Ocupa toda largura em mobile e tablets, um terço em desktops -->
    </div>
  </div>
</div>
```

### Espaçamentos Responsivos

Ajuste margens e paddings para diferentes tamanhos de tela:

```html
<!-- Padding que aumenta progressivamente -->
<div class="p-2 p-sm-3 p-md-4 p-lg-5">Conteúdo com padding responsivo</div>

<!-- Margens verticais maiores em telas maiores -->
<div class="my-2 my-md-4 my-lg-5">Conteúdo com margem vertical responsiva</div>

<!-- Padding horizontal que diminui em telas maiores -->
<div class="px-4 px-md-3 px-lg-2">Conteúdo com padding horizontal responsivo</div>
```

### Cores Responsivas

Mude cores de fundo, texto e bordas conforme o tamanho da tela:

```html
<!-- Fundo que muda de cor em diferentes tamanhos -->
<div class="bg-light bg-md-primary bg-lg-success">Conteúdo com fundo responsivo</div>

<!-- Texto que muda de cor em diferentes tamanhos -->
<p class="text-dark text-md-primary text-lg-white">Texto com cor responsiva</p>

<!-- Borda que muda de cor em diferentes tamanhos -->
<div class="border border-danger border-md-warning border-lg-success">
  Conteúdo com borda responsiva
</div>
```

### Opacidade Responsiva

Ajuste a opacidade em diferentes tamanhos de tela:

```html
<div class="opacity-50 opacity-md-75 opacity-lg-100">
  <!-- 50% opaco em mobile, 75% em tablets, 100% em desktops -->
</div>

<!-- Combinar com cores para criar efeitos de transparência -->
<div class="bg-primary-25 bg-md-primary-50 bg-lg-primary-75">
  <!-- Fundo azul com opacidade que aumenta progressivamente -->
</div>
```

### Tamanhos de Texto Responsivos

Ajuste o tamanho da fonte em diferentes dispositivos:

```html
<h1 class="fs-xl fs-md-2xl fs-lg-3xl">Título que aumenta em telas maiores</h1>

<p class="fs-sm fs-md-md fs-lg-lg">Texto que aumenta em telas maiores</p>

<!-- Combinar com peso da fonte -->
<p class="fs-md fw-normal fs-lg-lg fw-lg-bold">
  Texto que aumenta e fica em negrito em desktops
</p>
```

### Display Responsivo

Controle a visibilidade de elementos em diferentes tamanhos de tela:

```html
<!-- Oculto em mobile, visível a partir de tablets -->
<div class="d-none d-md-block">Visível apenas em tablets e acima</div>

<!-- Visível em mobile, oculto a partir de tablets -->
<div class="d-block d-md-none">Visível apenas em mobile</div>

<!-- Troca entre display block e flex -->
<div class="d-block d-lg-flex">
  Bloco em telas menores, flexbox em desktops
</div>
```

### Flexbox Responsivo

Ajuste propriedades de flexbox para diferentes tamanhos de tela:

```html
<!-- Direção de flex que muda em diferentes tamanhos -->
<div class="d-flex flex-column flex-md-row">
  <!-- Vertical em mobile, horizontal em tablets e acima -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Alinhamento que muda em diferentes tamanhos -->
<div class="d-flex justify-content-center justify-content-lg-between">
  <!-- Centralizado em telas menores, espaçado em desktops -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Alinhamento Responsivo

Ajuste alinhamento de texto e elementos em diferentes tamanhos:

```html
<!-- Texto centralizado em mobile, à esquerda em tablets, à direita em desktops -->
<p class="text-center text-md-left text-lg-right">Texto com alinhamento responsivo</p>

<!-- Alinhamento vertical -->
<div class="d-flex align-items-start align-items-md-center align-items-lg-end">
  <!-- Alinhado ao topo em mobile, centro em tablets, base em desktops -->
</div>
```

### Bordas e Sombras Responsivas

Ajuste bordas e sombras em diferentes tamanhos:

```html
<!-- Raio de borda que aumenta em telas maiores -->
<div class="rounded-sm rounded-md-md rounded-lg-lg">
  Elemento com bordas arredondadas responsivas
</div>

<!-- Sombra que aumenta em telas maiores -->
<div class="shadow-none shadow-md-sm shadow-lg-lg">
  Elemento com sombra responsiva
</div>
```

### Gradientes Responsivos

Mude gradientes em diferentes tamanhos de tela:

```html
<div class="bg-gradient-sunset bg-md-gradient-ocean bg-lg-gradient-forest">
  <!-- Gradiente sunset em mobile, ocean em tablets, forest em desktops -->
</div>
```

### Efeitos Hover Responsivos

Aplique diferentes efeitos hover em diferentes tamanhos:

```html
<div class="hover-brighten hover-md-zoom hover-lg-grow">
  <!-- Efeito brighten em mobile, zoom em tablets, grow em desktops -->
</div>
```

## Criando Novos Breakpoints

Você pode personalizar os breakpoints existentes ou adicionar novos na configuração:

```javascript
const config = {
  bootstrap: {
    config: {
      grid: {
        breakpoints: {
          xs: "0px",
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px",
          // Adicionar novo breakpoint
          xxxl: "1800px"
        }
      }
    }
  }
};
```

Depois de adicionar novos breakpoints, você poderá usar classes com esses prefixos, como `p-xxxl-10`.

## Personalizando a Responsividade

### Ajustando os Breakpoints

Para ajustar os breakpoints para seu projeto:

```javascript
const customizer = new BootstrapCustomizer({
  bootstrap: {
    config: {
      grid: {
        breakpoints: {
          xs: "0px",
          sm: "480px", // Modificado
          md: "720px", // Modificado
          lg: "960px",  // Modificado
          xl: "1140px"  // Modificado
        }
      }
    }
  }
});
```

### Adicionando Propriedades Responsivas Personalizadas

Você pode adicionar novos geradores para propriedades personalizadas:

```javascript
customizer.addGenerator('aspectRatio', function(sectionKey, sectionValue, bootstrapConfig) {
  // Função para gerar CSS de aspect-ratio com suporte a breakpoints
  const generateAspectRatioCSS = (ratioKey, ratioValue, breakpointPrefix) => {
    return `.aspect-${breakpointPrefix}${ratioKey} { aspect-ratio: ${ratioValue} !important; }\n`;
  };
  
  let css = '/* Aspect ratio classes */\n';
  css += this.generateResponsiveClasses(sectionKey, sectionValue, bootstrapConfig, generateAspectRatioCSS);
  css += '\n';
  
  return css;
});
```

Depois, adicione a configuração:

```javascript
customizer.update({
  bootstrap: {
    config: {
      aspectRatio: {
        "1-1": "1/1",
        "4-3": "4/3",
        "16-9": "16/9"
      }
    }
  }
});
```

## Dicas e Boas Práticas

### Mobile-First

Desenvolva sempre com a abordagem "mobile-first":
1. Comece definindo os estilos para dispositivos móveis (sem prefixo de breakpoint)
2. Depois, adicione classes com breakpoints maiores para ajustar o layout em telas maiores

```html
<!-- Bom (mobile-first) -->
<div class="col-12 col-md-6 col-lg-4">...</div>

<!-- Evite (não é mobile-first) -->
<div class="col-lg-4 col-md-6 col-12">...</div>
```

### Evite Muitos Breakpoints

Use apenas os breakpoints necessários. Muitos breakpoints podem complicar o código e a manutenção:

```html
<!-- Bom -->
<div class="p-2 p-md-4 p-lg-5">...</div>

<!-- Evite (muitos breakpoints) -->
<div class="p-2 p-sm-3 p-md-4 p-lg-4 p-xl-5">...</div>
```

### Organize por Propriedade

Ao combinar várias propriedades responsivas, organize-as por tipo para melhor legibilidade:

```html
<!-- Bom -->
<div class="p-2 p-md-4 m-2 m-md-3 text-center text-lg-left">...</div>

<!-- Evite (misturado) -->
<div class="p-2 m-2 text-center p-md-4 text-lg-left m-md-3">...</div>
```

## Solução de Problemas

### Classes Não Estão Funcionando

1. **Verifique a ordem de carregamento**:
   - Certifique-se de que o Bootstrap Customizer é carregado depois do Bootstrap (se estiver usando ambos)

2. **Verifique os breakpoints**:
   - Confirme se a tela está realmente no tamanho do breakpoint que você está usando

3. **Inspecione com DevTools**:
   - Use as ferramentas de desenvolvedor do navegador para verificar se as regras CSS estão sendo aplicadas e se não estão sendo sobrescritas

### Media Queries Não Estão Funcionando

1. **Verifique a meta tag viewport**:
   - Assegure-se de ter a meta tag viewport correta no seu HTML:
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     ```

2. **Verifique a configuração dos breakpoints**:
   - Confirme se os valores dos breakpoints estão configurados corretamente

### Conflitos com o Bootstrap Original

Se estiver usando junto com o Bootstrap original:

1. **Ordem de carregamento**:
   - Carregue o Bootstrap Customizer depois do Bootstrap original

2. **Prefixos personalizados**:
   - Use a opção `prefixClasses` para adicionar um prefixo às suas classes customizadas:
     ```javascript
     cssOptions: {
       prefixClasses: "custom-"
     }
     ```
   - Assim suas classes seriam como `custom-p-md-4` em vez de `p-md-4`

## Implementações Avançadas

### Combinando Responsividade com Temas

Você pode criar temas que se adaptam a diferentes tamanhos de tela combinando responsividade com configurações de cores:

```html
<!-- Elemento com cores diferentes para cada tamanho de tela -->
<div class="bg-light text-dark p-3 
            bg-md-primary text-md-white p-md-4 
            bg-lg-success text-lg-white p-lg-5">
  Conteúdo com tema responsivo
</div>
```

Para implementar isso de forma sistemática, você pode criar configurações de tema para cada breakpoint:

```javascript
const customizer = new BootstrapCustomizer({
  bootstrap: {
    config: {
      themes: {
        mobile: {
          background: "light",
          text: "dark",
          padding: "3"
        },
        tablet: {
          background: "primary",
          text: "white",
          padding: "4"
        },
        desktop: {
          background: "success",
          text: "white",
          padding: "5"
        }
      }
    }
  }
});

// Adicione um gerador de temas responsivos
customizer.addGenerator('themes', function(sectionKey, sectionValue, bootstrapConfig) {
  let css = '/* Responsive theme classes */\n';
  
  // Tema mobile (padrão)
  const mobileTheme = sectionValue.mobile;
  css += `.theme { 
    background-color: var(--bs-${mobileTheme.background}) !important;
    color: var(--bs-${mobileTheme.text}) !important;
    padding: ${bootstrapConfig.spacing[mobileTheme.padding]} !important;
  }\n`;
  
  // Tema tablet
  if (sectionValue.tablet && bootstrapConfig.grid.breakpoints.md) {
    const tabletTheme = sectionValue.tablet;
    css += `@media (min-width: ${bootstrapConfig.grid.breakpoints.md}) {
      .theme {
        background-color: var(--bs-${tabletTheme.background}) !important;
        color: var(--bs-${tabletTheme.text}) !important;
        padding: ${bootstrapConfig.spacing[tabletTheme.padding]} !important;
      }
    }\n`;
  }
  
  // Tema desktop
  if (sectionValue.desktop && bootstrapConfig.grid.breakpoints.lg) {
    const desktopTheme = sectionValue.desktop;
    css += `@media (min-width: ${bootstrapConfig.grid.breakpoints.lg}) {
      .theme {
        background-color: var(--bs-${desktopTheme.background}) !important;
        color: var(--bs-${desktopTheme.text}) !important;
        padding: ${bootstrapConfig.spacing[desktopTheme.padding]} !important;
      }
    }\n`;
  }
  
  return css;
});
```

Agora você pode simplesmente usar a classe `.theme` e ela aplicará estilos diferentes em cada breakpoint:

```html
<div class="theme">Conteúdo com tema responsivo</div>
```

### Animações Responsivas

Você pode criar animações que se comportam diferentemente em cada breakpoint:

```html
<div class="animate-fadeIn animate-md-slideUp animate-lg-bounce">
  <!-- Fade in em mobile, slide up em tablets, bounce em desktops -->
</div>
```

Para animações mais complexas que mudam de duração ou timing:

```javascript
customizer.addGenerator('animationSettings', function(sectionKey, sectionValue, bootstrapConfig) {
  let css = '';
  
  // Para cada animação existente
  Object.entries(bootstrapConfig.animations || {}).forEach(([animName, animConfig]) => {
    // Para cada breakpoint com configurações específicas
    Object.entries(bootstrapConfig.grid.breakpoints).forEach(([bpName, bpValue]) => {
      if (bpName === 'xs') return; // Pular xs, é o padrão
      
      // Se houver configurações para esta animação neste breakpoint
      if (sectionValue[animName] && sectionValue[animName][bpName]) {
        const settings = sectionValue[animName][bpName];
        
        css += `@media (min-width: ${bpValue}) {\n`;
        css += `  .animate-${bpName}-${animName} {\n`;
        
        if (settings.duration) {
          css += `    animation-duration: ${settings.duration} !important;\n`;
        }
        
        if (settings.timing) {
          css += `    animation-timing-function: ${settings.timing} !important;\n`;
        }
        
        if (settings.iterations) {
          css += `    animation-iteration-count: ${settings.iterations} !important;\n`;
        }
        
        css += `  }\n`;
        css += `}\n`;
      }
    });
  });
  
  return css;
});
```

Configuração:

```javascript
customizer.update({
  bootstrap: {
    config: {
      animationSettings: {
        fadeIn: {
          md: { duration: "0.8s", timing: "ease-in-out" },
          lg: { duration: "1.2s", timing: "ease" }
        },
        bounce: {
          md: { iterations: "2" },
          lg: { iterations: "infinite" }
        }
      }
    }
  }
});
```

### Container Responsivo Personalizado

Crie containers com larguras personalizadas para cada breakpoint:

```javascript
customizer.addGenerator('customContainers', function(sectionKey, sectionValue, bootstrapConfig) {
  let css = '/* Custom container classes */\n';
  
  Object.entries(sectionValue).forEach(([containerName, containerConfig]) => {
    css += `.${containerName} {\n`;
    css += `  width: 100%;\n`;
    css += `  margin-right: auto;\n`;
    css += `  margin-left: auto;\n`;
    css += `  padding-right: 15px;\n`;
    css += `  padding-left: 15px;\n`;
    css += `}\n`;
    
    // Gerar media queries para cada breakpoint
    Object.entries(bootstrapConfig.grid.breakpoints).forEach(([bpName, bpValue]) => {
      if (bpName === 'xs') return; // Pular xs
      
      if (containerConfig[bpName]) {
        css += `@media (min-width: ${bpValue}) {\n`;
        css += `  .${containerName} {\n`;
        css += `    max-width: ${containerConfig[bpName]};\n`;
        css += `  }\n`;
        css += `}\n`;
      }
    });
  });
  
  return css;
});
```

Configuração:

```javascript
customizer.update({
  bootstrap: {
    config: {
      customContainers: {
        "container-narrow": {
          sm: "500px",
          md: "680px",
          lg: "900px",
          xl: "1080px"
        },
        "container-wide": {
          sm: "560px",
          md: "760px",
          lg: "1040px",
          xl: "1280px"
        }
      }
    }
  }
});
```

Uso:

```html
<div class="container-narrow">Conteúdo com largura mais estreita</div>
<div class="container-wide">Conteúdo com largura mais ampla</div>
```

## Casos de Uso Responsivos

### Layout de Blog Responsivo

```html
<div class="container">
  <!-- Cabeçalho -->
  <header class="py-3 py-md-4 py-lg-5 bg-light bg-md-primary">
    <h1 class="fs-xl fs-md-2xl fs-lg-3xl text-center text-md-left text-dark text-md-white">
      Meu Blog
    </h1>
    <p class="d-none d-md-block text-md-white">Bem-vindo ao meu blog responsivo</p>
  </header>

  <!-- Layout principal -->
  <div class="row pt-3 pt-md-4">
    <!-- Conteúdo principal -->
    <main class="col-12 col-lg-8 px-2 px-md-3 px-lg-4">
      <!-- Artigo -->
      <article class="p-2 p-md-3 p-lg-4 mb-3 mb-md-4 shadow-sm shadow-md-md border rounded">
        <h2 class="fs-lg fs-md-xl fs-lg-2xl">Título do Artigo</h2>
        <p class="fs-sm fs-md-md text-muted">Publicado em 20/03/2025</p>
        <div class="mt-3">
          <p>Conteúdo do artigo...</p>
        </div>
        <button class="btn btn-primary hover-brighten hover-md-grow mt-3">
          Leia mais
        </button>
      </article>
    </main>

    <!-- Barra lateral -->
    <aside class="col-12 col-lg-4 mt-3 mt-lg-0 px-2 px-md-3">
      <div class="bg-light p-3 rounded shadow-sm d-none d-lg-block">
        <h3 class="fs-lg">Sobre</h3>
        <p>Informações sobre o blog...</p>
      </div>
      
      <div class="bg-light p-3 rounded shadow-sm mt-3">
        <h3 class="fs-lg">Categorias</h3>
        <ul class="mt-2">
          <li class="mb-1">Tecnologia</li>
          <li class="mb-1">Viagens</li>
          <li class="mb-1">Comida</li>
        </ul>
      </div>
    </aside>
  </div>

  <!-- Rodapé -->
  <footer class="py-3 py-md-4 mt-4 mt-md-5 bg-dark text-white text-center">
    &copy; 2025 Meu Blog Responsivo
  </footer>
</div>
```

### Card de Produto Responsivo

```html
<div class="card border rounded shadow-sm shadow-md-md hover-grow">
  <div class="d-flex flex-column flex-md-row">
    <!-- Imagem do produto -->
    <div class="w-full w-md-1/3">
      <img src="produto.jpg" class="w-full h-40 h-md-full object-cover rounded-top rounded-md-left rounded-md-top-0" alt="Produto">
    </div>
    
    <!-- Conteúdo do card -->
    <div class="p-3 p-md-4 w-full w-md-2/3">
      <h3 class="fs-lg fs-md-xl text-primary">Nome do Produto</h3>
      <p class="mt-2 d-none d-md-block">Descrição detalhada do produto que só aparece em telas maiores.</p>
      <p class="mt-2 d-block d-md-none">Descrição resumida.</p>
      
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-3">
        <span class="fs-lg fs-md-xl fw-bold text-success">R$ 99,90</span>
        <button class="btn btn-primary mt-2 mt-md-0">Comprar</button>
      </div>
    </div>
  </div>
</div>
```

### Formulário Responsivo

```html
<form class="p-3 p-md-4 border rounded shadow-sm shadow-md-md bg-light">
  <h2 class="fs-xl fs-md-2xl text-center text-md-left mb-3 mb-md-4">Formulário de Contato</h2>
  
  <div class="d-flex flex-column flex-lg-row mb-3">
    <!-- Nome e e-mail lado a lado em desktops -->
    <div class="w-full w-lg-1/2 pe-lg-2 mb-3 mb-lg-0">
      <label class="fw-medium mb-1">Nome</label>
      <input type="text" class="form-control p-2 p-md-3">
    </div>
    
    <div class="w-full w-lg-1/2 ps-lg-2">
      <label class="fw-medium mb-1">E-mail</label>
      <input type="email" class="form-control p-2 p-md-3">
    </div>
  </div>
  
  <div class="mb-3">
    <label class="fw-medium mb-1">Assunto</label>
    <input type="text" class="form-control p-2 p-md-3">
  </div>
  
  <div class="mb-4">
    <label class="fw-medium mb-1">Mensagem</label>
    <textarea class="form-control p-2 p-md-3" rows="4 row-md-6"></textarea>
  </div>
  
  <div class="d-flex justify-content-center justify-content-md-end">
    <button type="submit" class="btn btn-primary px-4 px-md-5 py-2 py-md-3 hover-grow">
      Enviar
    </button>
  </div>
</form>
```

## Recursos Adicionais

### Gerando Documentação das Classes Responsivas

Para gerar uma documentação das classes disponíveis em seu projeto:

```javascript
customizer.generateDocs = function() {
  const bootstrapConfig = this.getBootstrapConfig();
  let docs = '# Classes Responsivas Disponíveis\n\n';
  
  // Para cada breakpoint
  if (bootstrapConfig.grid && bootstrapConfig.grid.breakpoints) {
    docs += '## Breakpoints\n\n';
    docs += '| Código | Largura mínima | Descrição |\n';
    docs += '|--------|---------------|----------|\n';
    
    Object.entries(bootstrapConfig.grid.breakpoints).forEach(([bpName, bpValue]) => {
      let description = '';
      switch(bpName) {
        case 'xs': description = 'Smartphones em modo retrato'; break;
        case 'sm': description = 'Smartphones em modo paisagem'; break;
        case 'md': description = 'Tablets'; break;
        case 'lg': description = 'Desktops'; break;
        case 'xl': description = 'Desktops grandes'; break;
        case 'xxl': description = 'Desktops muito grandes'; break;
        default: description = 'Personalizado';
      }
      
      docs += `| ${bpName} | ${bpValue} | ${description} |\n`;
    });
    
    docs += '\n';
  }
  
  // Para cada tipo de propriedade
  Object.entries(bootstrapConfig).forEach(([sectionKey, sectionValue]) => {
    if (typeof sectionValue !== 'object' || sectionValue === null) return;
    
    // Pular seções não relevantes
    if (['grid', 'cssOptions'].includes(sectionKey)) return;
    
    docs += `## ${sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}\n\n`;
    docs += '| Classe Base | Valor | Classes Responsivas |\n';
    docs += '|-------------|-------|--------------------|\n';
    
    const classPrefix = getClassPrefix(sectionKey);
    
    Object.entries(sectionValue).forEach(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        // Pular objetos complexos
        return;
      }
      
      const baseClass = `${classPrefix}-${key}`;
      const shortValue = typeof value === 'string' && value.length > 20 
        ? value.substring(0, 20) + '...' 
        : value;
      
      const responsiveClasses = Object.keys(bootstrapConfig.grid.breakpoints)
        .filter(bp => bp !== 'xs')
        .map(bp => `${classPrefix}-${bp}-${key}`)
        .join(', ');
      
      docs += `| ${baseClass} | ${shortValue} | ${responsiveClasses} |\n`;
    });
    
    docs += '\n';
  });
  
  return docs;
  
  // Função auxiliar para obter o prefixo da classe
  function getClassPrefix(sectionKey) {
    switch(sectionKey) {
      case 'spacing': return 'm/p';
      case 'fontSize': return 'fs';
      case 'fontWeight': return 'fw';
      case 'lineHeight': return 'lh';
      case 'letterSpacing': return 'ls';
      case 'borderRadius': return 'rounded';
      case 'borderWidth': return 'border';
      case 'boxShadow': return 'shadow';
      case 'display': return 'd';
      case 'position': return 'position';
      case 'zIndex': return 'z';
      case 'width': return 'w';
      case 'height': return 'h';
      case 'textAlign': return 'text';
      case 'verticalAlign': return 'align';
      case 'textTransform': return 'text';
      case 'textDecoration': return 'text';
      default: return sectionKey;
    }
  }
};
```

Uso:

```javascript
const docs = customizer.generateDocs();
console.log(docs);
// Ou salve em um arquivo
```

### Ferramentas de Diagnóstico

Adicione funcionalidades para diagnosticar e debugar sua configuração responsiva:

```javascript
customizer.debug = function() {
  const bootstrapConfig = this.getBootstrapConfig();
  
  // Criar elemento de diagnóstico
  const debugDiv = document.createElement('div');
  debugDiv.id = 'bootstrap-customizer-debug';
  debugDiv.style.position = 'fixed';
  debugDiv.style.bottom = '0';
  debugDiv.style.right = '0';
  debugDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  debugDiv.style.color = 'white';
  debugDiv.style.padding = '10px';
  debugDiv.style.zIndex = '9999';
  debugDiv.style.fontSize = '12px';
  debugDiv.style.maxWidth = '300px';
  
  // Atualizar informações de breakpoint
  function updateDebugInfo() {
    const width = window.innerWidth;
    let currentBreakpoint = 'xs';
    
    // Determinar breakpoint atual
    Object.entries(bootstrapConfig.grid.breakpoints).forEach(([bpName, bpValue]) => {
      const bpWidth = parseInt(bpValue);
      if (width >= bpWidth) {
        currentBreakpoint = bpName;
      }
    });
    
    // Mostrar informações
    debugDiv.innerHTML = `
      <div><strong>Largura:</strong> ${width}px</div>
      <div><strong>Breakpoint atual:</strong> ${currentBreakpoint}</div>
      <div><strong>Próximo breakpoint:</strong> ${getNextBreakpoint(currentBreakpoint)}</div>
    `;
  }
  
  // Obter próximo breakpoint
  function getNextBreakpoint(current) {
    const breakpoints = Object.keys(bootstrapConfig.grid.breakpoints);
    const currentIndex = breakpoints.indexOf(current);
    if (currentIndex < breakpoints.length - 1) {
      const next = breakpoints[currentIndex + 1];
      return `${next} (${bootstrapConfig.grid.breakpoints[next]})`;
    }
    return 'Nenhum';
  }
  
  // Adicionar ao DOM
  document.body.appendChild(debugDiv);
  
  // Atualizar em tempo real
  updateDebugInfo();
  window.addEventListener('resize', updateDebugInfo);
  
  // Adicionar botão de toggle
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Ocultar';
  toggleButton.style.marginTop = '5px';
  toggleButton.style.padding = '2px 5px';
  toggleButton.style.fontSize = '10px';
  toggleButton.addEventListener('click', function() {
    if (debugDiv.style.maxHeight === '20px') {
      debugDiv.style.maxHeight = '';
      toggleButton.textContent = 'Ocultar';
    } else {
      debugDiv.style.maxHeight = '20px';
      toggleButton.textContent = 'Mostrar';
    }
  });
  
  debugDiv.appendChild(toggleButton);
  
  return {
    remove: function() {
      document.body.removeChild(debugDiv);
      window.removeEventListener('resize', updateDebugInfo);
    }
  };
};
```

Uso:

```javascript
// Iniciar debugger
const debugger = customizer.debug();

// Remover quando não precisar mais
// debugger.remove();
```

## Conclusão

O Bootstrap Customizer oferece um sistema poderoso e flexível para criar interfaces responsivas sem as limitações do Bootstrap padrão. Com a combinação de breakpoints bem definidos e classes responsivas para todas as propriedades, você pode criar interfaces que se adaptam perfeitamente a qualquer tamanho de tela.

Ao seguir as boas práticas de desenvolvimento mobile-first e utilizar as ferramentas apresentadas neste guia, você pode criar experiências responsivas de forma sistemática e consistente.

Lembre-se sempre de testar suas interfaces em vários dispositivos e tamanhos de tela para garantir que a responsividade esteja funcionando conforme o esperado.
