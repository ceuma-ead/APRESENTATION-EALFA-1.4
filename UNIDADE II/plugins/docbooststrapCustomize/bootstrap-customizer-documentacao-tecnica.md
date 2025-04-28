# Documentação Técnica Completa - BootstrapCustomizer

## Índice

1. [Estrutura Básica de Classes](#estrutura-básica-de-classes)
2. [Sistema de Cores](#sistema-de-cores)
3. [Sistema de Gradientes](#sistema-de-gradientes)
4. [Sistema de Opacidade](#sistema-de-opacidade)
5. [Sistema de Espaçamento](#sistema-de-espaçamento)
6. [Sistema de Hover](#sistema-de-hover)
7. [Classes Aninhadas e Combinações](#classes-aninhadas-e-combinações)
8. [Variáveis Internas](#variáveis-internas)
9. [Criação de Classes Personalizadas](#criação-de-classes-personalizadas)
10. [Modos Internos e Extensões](#modos-internos-e-extensões)
11. [Referência de Prefixos](#referência-de-prefixos)
12. [Solução de Problemas](#solução-de-problemas)

## Estrutura Básica de Classes

O BootstrapCustomizer segue uma estrutura de nomenclatura consistente:

```
[prefixo]-[nome]-[modificador]
```

Onde:
- **prefixo**: indica o tipo de estilo (bg, text, border, etc)
- **nome**: o nome da cor ou funcionalidade
- **modificador**: (opcional) um valor específico, como nível de opacidade

### Prefixos Principais

| Prefixo   | Função                 | Exemplo              |
|-----------|------------------------|----------------------|
| `bg-`     | Cor de fundo           | `bg-primary`         |
| `text-`   | Cor de texto           | `text-secondary`     |
| `border-` | Cor de borda           | `border-danger`      |
| `hover-`  | Efeito ao passar mouse | `hover-shadow`       |
| `fs-`     | Tamanho de fonte       | `fs-lg`              |
| `m-`      | Margem                 | `m-3`                |
| `p-`      | Padding                | `p-4`                |

## Sistema de Cores

### Definindo Cores

```javascript
"colors": {
  "primary": {
    "hex": "#0d6efd",
    "rgb": "13, 110, 253"
  },
  "brand-blue": {
    "hex": "#003366",
    "rgb": "0, 51, 102"
  }
}
```

### Usando Cores

```html
<!-- Cores de fundo -->
<div class="bg-primary">Fundo primário</div>
<div class="bg-brand-blue">Fundo azul personalizado</div>

<!-- Cores de texto -->
<p class="text-primary">Texto primário</p>
<p class="text-brand-blue">Texto azul personalizado</p>

<!-- Cores de borda -->
<div class="border border-primary">Borda primária</div>
<div class="border border-brand-blue">Borda azul personalizada</div>

<!-- Botões coloridos -->
<button class="btn btn-primary">Botão primário</button>
<button class="btn btn-brand-blue">Botão azul personalizado</button>
```

### Cores em Variáveis CSS

Cada cor definida gera automaticamente variáveis CSS que podem ser usadas em estilos personalizados:

```css
:root {
  --bs-primary: #0d6efd;
  --bs-primary-rgb: 13, 110, 253;
  --bs-brand-blue: #003366;
  --bs-brand-blue-rgb: 0, 51, 102;
}
```

Para usar estas variáveis em um estilo inline:

```html
<div style="background-color: var(--bs-primary);">
  Usando variável CSS diretamente
</div>

<div style="box-shadow: 0 0 15px rgba(var(--bs-primary-rgb), 0.5);">
  Usando valores RGB com opacidade personalizada
</div>
```

## Sistema de Gradientes

### Definindo Gradientes

```javascript
"gradients": {
  "primary-to-info": {
    "direction": "to right",
    "colors": ["var(--bs-primary)", "var(--bs-info)"]
  },
  "sunset": {
    "direction": "45deg",
    "colors": ["#FF512F", "#F09819"]
  },
  "tri-color": {
    "direction": "to bottom right",
    "colors": ["red", "green", "blue"]
  }
}
```

### Usando Gradientes

As classes de gradiente usam sempre o prefixo `bg-gradient-`, `text-gradient-` ou `border-gradient-`:

```html
<!-- Fundos com gradiente -->
<div class="bg-gradient-primary-to-info">
  Gradiente de fundo usando variáveis CSS
</div>

<div class="bg-gradient-sunset">
  Gradiente com cores hexadecimais
</div>

<div class="bg-gradient-tri-color">
  Gradiente com múltiplas cores
</div>

<!-- Textos com gradiente -->
<h1 class="text-gradient-primary-to-info">
  Texto com gradiente
</h1>

<h2 class="text-gradient-sunset">
  Outro texto com gradiente
</h2>

<!-- Bordas com gradiente -->
<div class="border-gradient-primary-to-info p-3">
  Elemento com borda gradiente
</div>
```

### Propriedades de Direção do Gradiente

As direções válidas para gradientes são:

- `to right`: da esquerda para a direita
- `to left`: da direita para a esquerda
- `to top`: de baixo para cima
- `to bottom`: de cima para baixo
- `to top right`: da esquerda inferior para a direita superior
- `to top left`: da direita inferior para a esquerda superior
- `to bottom right`: da esquerda superior para a direita inferior
- `to bottom left`: da direita superior para a esquerda inferior
- `Xdeg`: ângulo em graus (ex: `45deg`, `90deg`, `180deg`)

### Gradientes Avançados

Para casos especiais, você pode definir gradientes mais complexos:

```javascript
"special-gradient": {
  "direction": "to right",
  "colors": ["var(--bs-primary) 0%", "var(--bs-secondary) 50%", "var(--bs-success) 100%"]
}
```

Isso permite controlar exatamente onde cada cor começa e termina no gradiente.

## Sistema de Opacidade

### Definindo Níveis de Opacidade

```javascript
"opacity": {
  "0": "0",
  "10": "0.1",
  "25": "0.25",
  "50": "0.5",
  "75": "0.75",
  "90": "0.9",
  "100": "1"
}
```

### Usando Opacidade Direta

Para definir a opacidade de um elemento inteiro:

```html
<div class="opacity-0">Invisível (0%)</div>
<div class="opacity-25">25% de opacidade</div>
<div class="opacity-50">50% de opacidade</div>
<div class="opacity-75">75% de opacidade</div>
<div class="opacity-100">100% visível</div>
```

### Combinando Cores com Opacidade

Para aplicar uma cor com um nível específico de opacidade:

```html
<!-- Fundos com opacidade -->
<div class="bg-primary-10">Fundo primário 10%</div>
<div class="bg-primary-25">Fundo primário 25%</div>
<div class="bg-primary-50">Fundo primário 50%</div>
<div class="bg-primary-75">Fundo primário 75%</div>
<div class="bg-primary-90">Fundo primário 90%</div>

<!-- Textos com opacidade -->
<p class="text-primary-50">Texto primário 50%</p>
<p class="text-danger-25">Texto vermelho 25%</p>

<!-- Bordas com opacidade -->
<div class="border border-primary-50">Borda primária 50%</div>
```

### Casos Especiais de Opacidade

Se você precisar de níveis de opacidade que não estão definidos, pode usar variáveis CSS com o valor RGB:

```html
<div style="background-color: rgba(var(--bs-primary-rgb), 0.33);">
  Opacidade personalizada de 33%
</div>
```

## Sistema de Espaçamento

### Definindo Espaçamentos

```javascript
"spacing": {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "1rem",
  "4": "1.5rem",
  "5": "3rem",
  "auto": "auto"
}
```

### Usando Classes de Margem

- `m-*`: margem em todos os lados
- `mt-*`: margem superior (top)
- `mb-*`: margem inferior (bottom)
- `ms-*`: margem esquerda (start)
- `me-*`: margem direita (end)
- `mx-*`: margens horizontais (esquerda e direita)
- `my-*`: margens verticais (superior e inferior)

Exemplos:
```html
<div class="m-0">Sem margem</div>
<div class="m-3">Margem média (1rem) em todos os lados</div>
<div class="mt-2 mb-4">Margem superior pequena e inferior grande</div>
<div class="mx-auto">Centralizar horizontalmente (margens automáticas)</div>
<div class="ms-2 me-3">Margem esquerda e direita diferentes</div>
```

### Usando Classes de Padding

- `p-*`: padding em todos os lados
- `pt-*`: padding superior (top)
- `pb-*`: padding inferior (bottom)
- `ps-*`: padding esquerdo (start)
- `pe-*`: padding direito (end)
- `px-*`: paddings horizontais (esquerdo e direito)
- `py-*`: paddings verticais (superior e inferior)

Exemplos:
```html
<div class="p-3">Padding médio em todos os lados</div>
<div class="pt-0 pb-5">Sem padding superior, padding inferior grande</div>
<div class="px-2 py-3">Padding horizontal pequeno, vertical médio</div>
```

### Espaçamentos Personalizados

Você pode definir valores personalizados e usá-los da mesma forma:

```javascript
"spacing": {
  // Valores padrão
  "0": "0",
  "1": "0.25rem",
  // Valores personalizados
  "xs": "0.125rem",
  "sm": "0.375rem",
  "lg": "4rem",
  "xl": "8rem"
}
```

```html
<div class="m-xs">Margem extra pequena</div>
<div class="p-lg">Padding grande personalizado</div>
```

## Sistema de Hover

### Definindo Efeitos Hover

```javascript
"hoverEffects": {
  "zoom": {
    "transform": "scale(1.05)",
    "transition": "transform 0.3s ease"
  },
  "glow": {
    "box-shadow": "0 0 15px rgba(var(--bs-primary-rgb), 0.7)",
    "transition": "box-shadow 0.3s ease"
  }
}
```

### Usando Efeitos Hover

Para aplicar um efeito hover pré-definido:

```html
<div class="hover-zoom">
  Este elemento aumenta quando o mouse passa sobre ele
</div>

<button class="hover-glow">
  Este botão brilha quando o mouse passa sobre ele
</button>
```

### Hover para Alteração de Cores

Quando a opção `generateHoverVariants` está ativada, são geradas classes para mudar cores no hover:

```html
<!-- Mudar cor de fundo no hover -->
<div class="hover-bg-primary">
  Muda para fundo azul no hover
</div>

<!-- Mudar cor de texto no hover -->
<p class="hover-text-danger">
  Muda para texto vermelho no hover
</p>

<!-- Mudar cor de borda no hover -->
<div class="border hover-border-success">
  Muda para borda verde no hover
</div>
```

### Hover com Opacidade

Combinando hover com opacidade:

```html
<div class="hover-bg-primary-50">
  Muda para fundo azul 50% no hover
</div>

<p class="hover-text-danger-75">
  Muda para texto vermelho 75% no hover
</p>
```

### Encadeando Múltiplos Efeitos Hover

Você pode combinar vários efeitos hover em um único elemento:

```html
<div class="hover-zoom hover-shadow hover-bg-primary hover-text-white">
  Este elemento tem múltiplos efeitos hover
</div>
```

## Classes Aninhadas e Combinações

### Combinando Diferentes Tipos de Classes

```html
<!-- Cor + Opacidade + Espaçamento -->
<div class="bg-primary-50 text-dark p-3 m-2">
  Fundo azul com 50% opacidade, texto escuro, padding médio e margem pequena
</div>

<!-- Gradiente + Espaçamento + Hover -->
<div class="bg-gradient-sunset text-white p-4 hover-shadow">
  Fundo com gradiente, texto branco, padding grande e sombra no hover
</div>

<!-- Borda + Cor + Opacidade + Hover -->
<div class="border border-primary-25 p-3 hover-border-primary hover-bg-light">
  Borda azul com 25% opacidade que fica mais escura e ganha fundo claro no hover
</div>
```

### Estruturas Aninhadas

Você pode aplicar diferentes classes em elementos aninhados:

```html
<div class="bg-light p-4">
  <h2 class="text-primary mb-3">Título Colorido</h2>
  <div class="bg-primary-10 p-3 mb-3">
    <p class="text-dark mb-0">Conteúdo com fundo azul claro</p>
  </div>
  <div class="bg-success-10 p-3">
    <p class="text-dark mb-0">Conteúdo com fundo verde claro</p>
  </div>
</div>
```

### Padrões Comuns de Combinação

#### Cards com Hover

```html
<div class="bg-white border p-3 hover-shadow hover-border-primary">
  <h4 class="text-primary">Card com Hover</h4>
  <p class="text-secondary mb-0">Conteúdo do card</p>
</div>
```

#### Botões com Gradiente e Hover

```html
<button class="btn bg-gradient-primary-to-info text-white py-2 px-4 hover-shadow hover-grow">
  Botão com Gradiente
</button>
```

#### Badges/Tags

```html
<span class="bg-success-25 text-success py-1 px-2 rounded-pill">
  Tag Verde
</span>
```

## Variáveis Internas

### Acessando Variáveis CSS Geradas

O BootstrapCustomizer gera automaticamente variáveis CSS para cada cor. Você pode usá-las em seus próprios estilos:

```html
<style>
  .elemento-personalizado {
    /* Usando variável de cor diretamente */
    color: var(--bs-primary);
    
    /* Usando variável RGB para criar opacidade personalizada */
    background-color: rgba(var(--bs-primary-rgb), 0.15);
    
    /* Usando variáveis para criar um gradiente personalizado */
    background-image: linear-gradient(
      45deg, 
      var(--bs-primary), 
      rgba(var(--bs-secondary-rgb), 0.7)
    );
    
    /* Bordas com cor variável */
    border: 2px solid var(--bs-success);
  }
</style>
```

### Definindo e Usando Variáveis Personalizadas

Você pode adicionar suas próprias variáveis CSS ao sistema:

```javascript
// No seu objeto de configuração
{
  "bootstrap": {
    "config": {
      "customVariables": {
        "--header-height": "60px",
        "--sidebar-width": "250px",
        "--transition-speed": "0.3s ease-in-out"
      }
    }
  }
}
```

Acesse essas variáveis em seu HTML:

```html
<div style="height: var(--header-height); transition: all var(--transition-speed);">
  Elemento com altura e transição personalizadas
</div>
```

## Criação de Classes Personalizadas

### Adicionando Tipos de Propriedades

Para adicionar novos tipos de classes, como tamanhos de fonte ou raios de borda:

```javascript
// Config
{
  "bootstrap": {
    "config": {
      // Outras configurações...
      
      "fontSize": {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "2rem"
      },
      
      "borderRadius": {
        "none": "0",
        "sm": "0.25rem",
        "md": "0.5rem",
        "lg": "1rem",
        "full": "9999px"
      }
    }
  }
}

// Adicionar o gerador para essas novas propriedades
customizer.addGenerator('fontSize', function(sectionKey, sectionValue) {
  let css = '/* Font size classes */\n';
  
  Object.entries(sectionValue).forEach(([sizeName, sizeValue]) => {
    css += `.fs-${sizeName} { font-size: ${sizeValue} !important; }\n`;
  });
  
  return css;
});

customizer.addGenerator('borderRadius', function(sectionKey, sectionValue) {
  let css = '/* Border radius classes */\n';
  
  Object.entries(sectionValue).forEach(([sizeName, sizeValue]) => {
    css += `.rounded-${sizeName} { border-radius: ${sizeValue} !important; }\n`;
  });
  
  return css;
});
```

Uso:

```html
<h1 class="fs-2xl">Título Grande</h1>
<p class="fs-sm">Texto pequeno</p>

<div class="rounded-lg">Bordas arredondadas grandes</div>
<button class="rounded-full">Botão totalmente arredondado</button>
```

### Criando Componentes Personalizados

Você pode estender a classe BootstrapCustomizer para adicionar componentes completos:

```javascript
class ComponentsBootstrapCustomizer extends BootstrapCustomizer {
  constructor(config) {
    super(config);
    
    // Adicionar gerador de componentes
    this.generators.components = this.generateComponents.bind(this);
  }
  
  generateComponents(sectionKey, sectionValue) {
    let css = '/* Custom components */\n';
    
    // Adicionar um componente de badge personalizado
    css += `
.badge-custom {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}

.badge-custom-pill {
  border-radius: 50rem;
}
    `;
    
    // Adicionar mais componentes conforme necessário...
    
    return css;
  }
}

// Usar a versão estendida
const componentsCustomizer = new ComponentsBootstrapCustomizer(config);
componentsCustomizer.apply();
```

Uso:

```html
<span class="badge-custom bg-success">Novo</span>
<span class="badge-custom badge-custom-pill bg-warning">99+</span>
```

## Modos Internos e Extensões

### Modo de Debug

Você pode ativar o modo de depuração para ver o CSS gerado e solucionar problemas:

```javascript
const config = {
  bootstrap: {
    config: {
      // Suas configurações...
      
      debug: {
        enabled: true,
        logToConsole: true,
        showGeneratedClasses: true
      }
    }
  }
};

// O customizador mostrará informações detalhadas no console
const customizer = new BootstrapCustomizer(config);
customizer.apply();
```

### Uso de Plugins

O sistema suporta plugins para estender funcionalidades:

```javascript
// Definir um plugin
const animationsPlugin = {
  name: 'animations',
  init: function(customizer) {
    // Adicionar gerador de animações
    customizer.addGenerator('animations', function(sectionKey, sectionValue) {
      // Código para gerar classes de animação...
    });
  }
};

// Registrar plugin
BootstrapCustomizer.registerPlugin('animations', animationsPlugin);

// Usar o plugin
const customizer = BootstrapCustomizer.create(config, ['animations']);
customizer.apply();
```

### Sistema de Temas

Você pode implementar um sistema de temas light/dark:

```javascript
class ThemeBootstrapCustomizer extends BootstrapCustomizer {
  constructor(config) {
    super(config);
    this.themes = config.bootstrap.themes || {};
  }
  
  switchTheme(themeName) {
    // Remover classes de tema anteriores
    document.body.className = document.body.className
      .split(' ')
      .filter(cls => !cls.startsWith('theme-'))
      .join(' ');
    
    // Aplicar novo tema
    if (this.themes[themeName]) {
      document.body.classList.add(`theme-${themeName}`);
      localStorage.setItem('current-theme', themeName);
    }
  }
  
  initTheme(defaultTheme = 'light') {
    const savedTheme = localStorage.getItem('current-theme') || defaultTheme;
    this.switchTheme(savedTheme);
  }
  
  generateCSS() {
    let css = super.generateCSS();
    
    // Adicionar CSS para temas
    if (this.themes) {
      Object.entries(this.themes).forEach(([themeName, themeConfig]) => {
        css += `.theme-${themeName} {\n`;
        
        // Adicionar variáveis de cor específicas do tema
        if (themeConfig.colors) {
          Object.entries(themeConfig.colors).forEach(([colorName, colorValue]) => {
            css += `  --bs-${colorName}: ${colorValue.hex || colorValue};\n`;
            if (colorValue.rgb) {
              css += `  --bs-${colorName}-rgb: ${colorValue.rgb};\n`;
            }
          });
        }
        
        // Adicionar outras propriedades do tema
        if (themeConfig.styles) {
          Object.entries(themeConfig.styles).forEach(([prop, value]) => {
            css += `  ${prop}: ${value};\n`;
          });
        }
        
        css += `}\n\n`;
      });
    }
    
    return css;
  }
}
```

## Referência de Prefixos

Aqui está uma lista completa dos prefixos de classe e seu significado:

| Prefixo           | Significado                   | Exemplo                      |
|-------------------|------------------------------|------------------------------|
| `bg-`             | Cor de fundo                 | `bg-primary`                 |
| `bg-gradient-`    | Gradiente de fundo           | `bg-gradient-sunset`         |
| `text-`           | Cor de texto                 | `text-danger`                |
| `text-gradient-`  | Gradiente em texto           | `text-gradient-rainbow`      |
| `border-`         | Cor de borda                 | `border-success`             |
| `border-gradient-`| Gradiente em borda           | `border-gradient-primary-to-info` |
| `hover-`          | Efeito ao passar o mouse     | `hover-shadow`               |
| `hover-bg-`       | Mudar fundo no hover         | `hover-bg-primary`           |
| `hover-text-`     | Mudar texto no hover         | `hover-text-white`           |
| `hover-border-`   | Mudar borda no hover         | `hover-border-primary`       |
| `opacity-`        | Opacidade direta             | `opacity-50`                 |
| `m-`              | Margem em todos os lados     | `m-3`                        |
| `mt-`             | Margem superior              | `mt-2`                       |
| `mb-`             | Margem inferior              | `mb-4`                       |
| `ms-`             | Margem esquerda              | `ms-auto`                    |
| `me-`             | Margem direita               | `me-2`                       |
| `mx-`             | Margens horizontais          | `mx-auto`                    |
| `my-`             | Margens verticais            | `my-3`                       |
| `p-`              | Padding em todos os lados    | `p-3`                        |
| `pt-`             | Padding superior             | `pt-0`                       |
| `pb-`             | Padding inferior             | `pb-5`                       |
| `ps-`             | Padding esquerdo             | `ps-2`                       |
| `pe-`             | Padding direito              | `pe-3`                       |
| `px-`             | Paddings horizontais         | `px-4`                       |
| `py-`             | Paddings verticais           | `py-2`                       |
| `fs-`             | Tamanho de fonte             | `fs-lg`                      |
| `rounded-`        | Raio de borda                | `rounded-lg`                 |
| `anim-`           | Animação                     | `anim-fade`                  |
| `elevation-`      | Nível de sombra              | `elevation-3`                |

## Solução de Problemas

### Classes Não Aplicadas

Se suas classes não estiverem sendo aplicadas:

1. Verifique se o customizador foi inicializado corretamente: `customizer.apply()`
2. Verifique se o nome da classe está correto (incluindo prefixos)
3. Verifique se a propriedade está definida na configuração
4. Inspecione o elemento com as ferramentas de desenvolvedor para ver se há conflitos de CSS

### Gradientes Não Funcionando

Se os gradientes não estiverem sendo exibidos:

1. Verifique se está usando o prefixo correto: `bg-gradient-nome` (não apenas `bg-nome`)
2. Verifique se o gradiente está definido na configuração
3. Se estiver usando variáveis CSS, certifique-se de que elas existem e estão corretas
4. Certifique-se de que as cores no gradiente são válidas

### Opacidade com Cores

Se as combinações de cor com opacidade não funcionarem:

1. Verifique se `generateOpacityVariants: true` está na configuração
2. Verifique se a cor tem a propriedade `rgb` definida
3. Certifique-se de usar o formato correto: `bg-primary-50` (não `bg-primary-opacity-50`)

### Efeitos Hover Não Funcionando

Se os efeitos hover não estiverem funcionando:

1. Verifique se o efeito hover está definido na configuração
2. Para cores hover, verifique se `generateHoverVariants: true` está ativado
3. Certifique-se de usar o prefixo `hover-` antes do nome do efeito

### Conflitos de CSS

Caso haja conflitos com outros estilos:

1. Verifique se a opção `important: true` está ativada
2. Tente aumentar a especificidade do seletor
3. Use `!important` em estilos inline para sobrescrever (último recurso)

---

Esta documentação abrange todos os aspectos técnicos do BootstrapCustomizer. Use-a como referência para implementar e personalizar o sistema em seus projetos.
