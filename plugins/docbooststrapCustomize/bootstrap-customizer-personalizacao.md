# Guia de Personalização e Extensão do BootstrapCustomizer

Este guia explica como personalizar completamente o BootstrapCustomizer para atender às suas necessidades específicas, desde a modificação da configuração JSON até a extensão do próprio framework.

## Índice

1. [Personalizando a Configuração JSON](#personalizando-a-configuração-json)
2. [Criando Estilos Personalizados](#criando-estilos-personalizados)
3. [Extendendo o BootstrapCustomizer](#extendendo-o-bootstrapcustomizer)
4. [Exemplos Práticos](#exemplos-práticos)
5. [Melhores Práticas](#melhores-práticas)

## Personalizando a Configuração JSON

A configuração JSON é o coração do BootstrapCustomizer. Você pode personalizar cada aspecto do framework modificando este objeto.

### Adicionando Cores Personalizadas

```javascript
"colors": {
  "primary": {
    "hex": "#0d6efd",
    "rgb": "13, 110, 253"
  },
  // Cores personalizadas
  "brand": {
    "hex": "#9b59b6",
    "rgb": "155, 89, 182"
  },
  "accent": {
    "hex": "#e74c3c",
    "rgb": "231, 76, 60"
  },
  "corporativa": {
    "hex": "#003366",
    "rgb": "0, 51, 102"
  }
}
```

Depois de definir essas cores, você automaticamente terá acesso a classes como `.bg-brand`, `.text-accent` e `.border-corporativa`.

### Criando Gradientes Personalizados

```javascript
"gradients": {
  // Gradientes padrão
  "primary-to-info": {
    "direction": "to right",
    "colors": ["var(--bs-primary)", "var(--bs-info)"]
  },
  // Gradientes personalizados
  "brand-identity": {
    "direction": "45deg",
    "colors": ["var(--bs-brand)", "var(--bs-accent)"]
  },
  "sunset": {
    "direction": "to bottom",
    "colors": ["#FF512F", "#F09819"]
  },
  "ocean": {
    "direction": "to right",
    "colors": ["#2E3192", "#1BFFFF"]
  },
  "deep-space": {
    "direction": "to bottom right",
    "colors": ["#000000", "#434343"]
  }
}
```

Você usará esses gradientes com classes como `.bg-gradient-sunset` e `.text-gradient-ocean`.

### Personalizando Opacidades

```javascript
"opacity": {
  "0": "0",
  "15": "0.15", // Personalizado
  "25": "0.25",
  "40": "0.4",  // Personalizado
  "50": "0.5",
  "75": "0.75",
  "85": "0.85", // Personalizado
  "100": "1"
}
```

### Criando Efeitos Hover Customizados

```javascript
"hoverEffects": {
  // Efeitos padrão
  "zoom": {
    "transform": "scale(1.05)",
    "transition": "transform 0.3s ease"
  },
  // Efeitos personalizados
  "pulse": {
    "animation": "pulse 1s infinite",
    "transition": "all 0.3s ease"
  },
  "blur-bg": {
    "backdrop-filter": "blur(5px)",
    "transition": "backdrop-filter 0.3s ease"
  },
  "glow": {
    "box-shadow": "0 0 15px rgba(var(--bs-primary-rgb), 0.7)",
    "transition": "box-shadow 0.3s ease"
  },
  "slide-up": {
    "transform": "translateY(-10px)",
    "transition": "transform 0.3s ease"
  }
}
```

Para usar os efeitos personalizados, adicione: `.hover-pulse`, `.hover-glow`, etc.

### Adicionando Classes de Espaçamento Personalizadas

```javascript
"spacing": {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "1rem",
  "4": "1.5rem",
  "5": "3rem",
  // Espaçamentos personalizados
  "6": "4.5rem",
  "7": "6rem",
  "8": "9rem",
  "9": "12rem", // Extra grande
  "sm": "0.75rem", // Pequeno customizado
  "md": "2rem",    // Médio customizado
  "lg": "5rem",    // Grande customizado
  "auto": "auto"
}
```

### Configurando Opções CSS

```javascript
"cssOptions": {
  "important": true, // Adiciona !important a todas as propriedades
  "generateOpacityVariants": true, // Gera classes com opacidade
  "generateHoverVariants": true, // Gera variantes de hover para cores
  "prefixClasses": "custom-", // Adiciona prefixo às classes (opcional)
  "mediaQuerySupport": true // Habilita suporte a consultas de mídia
}
```

## Criando Estilos Personalizados

Você pode adicionar seções personalizadas à sua configuração JSON para criar conjuntos inteiros de novas classes.

### Adicionando Tamanhos de Fonte Personalizados

```javascript
"fontSize": {
  "xs": "0.75rem",
  "sm": "0.875rem",
  "md": "1rem",
  "lg": "1.25rem",
  "xl": "1.5rem",
  "2xl": "2rem",
  "3xl": "3rem",
  "4xl": "4rem"
}
```

Isto gerará classes como `.fs-xs`, `.fs-lg`, etc.

### Criando Classes de Borda Personalizadas

```javascript
"borderRadius": {
  "none": "0",
  "sm": "0.25rem",
  "md": "0.5rem",
  "lg": "1rem",
  "xl": "2rem",
  "full": "9999px"
}
```

Gerará `.rounded-sm`, `.rounded-lg`, etc.

### Definindo Classes de Elevação (Sombras)

```javascript
"elevation": {
  "0": "none",
  "1": "0 2px 5px rgba(0,0,0,0.1)",
  "2": "0 4px 10px rgba(0,0,0,0.1)",
  "3": "0 8px 15px rgba(0,0,0,0.1)",
  "4": "0 12px 22px rgba(0,0,0,0.1)",
  "5": "0 15px 30px rgba(0,0,0,0.1)"
}
```

Gerará `.elevation-1`, `.elevation-2`, etc.

### Criando Animações Personalizadas

```javascript
"animations": {
  "fade": {
    "keyframes": {
      "0%": { "opacity": "0" },
      "100%": { "opacity": "1" }
    },
    "duration": "0.5s",
    "timing": "ease-in"
  },
  "slideIn": {
    "keyframes": {
      "0%": { "transform": "translateY(50px)", "opacity": "0" },
      "100%": { "transform": "translateY(0)", "opacity": "1" }
    },
    "duration": "0.7s",
    "timing": "ease-out"
  },
  "pulse": {
    "keyframes": {
      "0%": { "transform": "scale(1)" },
      "50%": { "transform": "scale(1.05)" },
      "100%": { "transform": "scale(1)" }
    },
    "duration": "1.5s",
    "iterations": "infinite"
  }
}
```

## Extendendo o BootstrapCustomizer

Para estender o BootstrapCustomizer com novas funcionalidades, você pode criar classes personalizadas que herdam da classe base ou adicionar geradores personalizados.

### Criando um Gerador Personalizado

```javascript
// Adicionar gerador para tamanhos de texto
customizer.addGenerator('fontSize', function(sectionKey, sectionValue) {
  let css = '/* Font size classes */\n';
  
  Object.entries(sectionValue).forEach(([sizeName, sizeValue]) => {
    css += `.fs-${sizeName} { font-size: ${sizeValue} !important; }\n`;
  });
  
  return css;
});
```

### Estendendo com uma Nova Classe

```javascript
class AdvancedBootstrapCustomizer extends BootstrapCustomizer {
  constructor(config) {
    super(config);
    
    // Adicionar geradores adicionais
    this.generators.typography = this.generateTypography.bind(this);
    this.generators.animations = this.generateAnimations.bind(this);
  }
  
  // Novo método para tipografia
  generateTypography(sectionKey, sectionValue) {
    let css = '/* Typography classes */\n';
    
    // Gerar classes de linha de altura
    if (sectionValue.lineHeight) {
      Object.entries(sectionValue.lineHeight).forEach(([name, value]) => {
        css += `.lh-${name} { line-height: ${value} !important; }\n`;
      });
    }
    
    // Gerar classes de tracking de texto
    if (sectionValue.letterSpacing) {
      Object.entries(sectionValue.letterSpacing).forEach(([name, value]) => {
        css += `.ls-${name} { letter-spacing: ${value} !important; }\n`;
      });
    }
    
    return css;
  }
  
  // Novo método para animações
  generateAnimations(sectionKey, sectionValue) {
    let css = '/* Animation classes */\n';
    
    Object.entries(sectionValue).forEach(([animName, animConfig]) => {
      // Definir keyframes
      css += `@keyframes ${animName} {\n`;
      
      Object.entries(animConfig.keyframes).forEach(([keyframe, props]) => {
        css += `  ${keyframe} {\n`;
        Object.entries(props).forEach(([prop, value]) => {
          css += `    ${prop}: ${value};\n`;
        });
        css += `  }\n`;
      });
      
      css += `}\n\n`;
      
      // Criar classe de animação
      css += `.anim-${animName} {\n`;
      css += `  animation-name: ${animName} !important;\n`;
      css += `  animation-duration: ${animConfig.duration || '1s'} !important;\n`;
      css += `  animation-timing-function: ${animConfig.timing || 'ease'} !important;\n`;
      css += `  animation-iteration-count: ${animConfig.iterations || '1'} !important;\n`;
      css += `  animation-fill-mode: ${animConfig.fillMode || 'forwards'} !important;\n`;
      css += `}\n`;
    });
    
    return css;
  }
}
```

## Exemplos Práticos

### Criando um Tema Personalizado

```javascript
// Configuração do tema
const themeConfig = {
  bootstrap: {
    config: {
      colors: {
        "primary": {
          "hex": "#4CAF50", // Verde
          "rgb": "76, 175, 80"
        },
        "secondary": {
          "hex": "#FF9800", // Laranja
          "rgb": "255, 152, 0"
        },
        // Outras cores...
      },
      gradients: {
        "brand": {
          "direction": "to right",
          "colors": ["var(--bs-primary)", "var(--bs-secondary)"]
        }
      },
      // Outras configurações...
    }
  }
};

// Aplicar tema
const themeCustomizer = new BootstrapCustomizer(themeConfig);
themeCustomizer.apply();
```

### Sistema de Cores para E-commerce

```javascript
const ecommerceConfig = {
  bootstrap: {
    config: {
      colors: {
        "discount": {
          "hex": "#E53935",
          "rgb": "229, 57, 53"
        },
        "new-arrival": {
          "hex": "#43A047",
          "rgb": "67, 160, 71"
        },
        "rating": {
          "hex": "#FFC107",
          "rgb": "255, 193, 7"
        },
        "sold-out": {
          "hex": "#9E9E9E",
          "rgb": "158, 158, 158"
        }
      },
      // Criar gradientes para banners promocionais
      gradients: {
        "sale": {
          "direction": "45deg",
          "colors": ["#E53935", "#D32F2F"]
        },
        "summer": {
          "direction": "to right",
          "colors": ["#FF9800", "#FFC107"]
        }
      }
    }
  }
};
```

Uso:

```html
<div class="product-card">
  <span class="badge bg-discount">30% OFF</span>
  <div class="product-image">
    <img src="product.jpg" alt="Produto">
    <div class="rating">
      <span class="text-rating">★★★★☆</span>
    </div>
  </div>
  <div class="product-info">
    <h5>Nome do Produto</h5>
    <p class="original-price text-sold-out-50"><s>R$ 199,90</s></p>
    <p class="price text-discount">R$ 139,90</p>
  </div>
  <button class="btn bg-gradient-sale text-white hover-shadow">Comprar</button>
</div>
```

### Sistema para Dashboard Administrativo

```javascript
const dashboardConfig = {
  bootstrap: {
    config: {
      colors: {
        "critical": {
          "hex": "#D32F2F",
          "rgb": "211, 47, 47"
        },
        "important": {
          "hex": "#F57C00",
          "rgb": "245, 124, 0"
        },
        "normal": {
          "hex": "#0288D1",
          "rgb": "2, 136, 209"
        },
        "low": {
          "hex": "#388E3C",
          "rgb": "56, 142, 60"
        }
      },
      // Adicionar espaçamentos específicos para dashboard
      spacing: {
        "card": "1.25rem",
        "grid-gap": "1rem",
        "chart": "2.5rem"
      },
      // Elevações para cards
      elevation: {
        "card": "0 2px 10px rgba(0,0,0,0.1)",
        "sidebar": "2px 0 10px rgba(0,0,0,0.1)",
        "dropdown": "0 5px 15px rgba(0,0,0,0.1)"
      }
    }
  }
};
```

## Melhores Práticas

### Organizando sua Configuração

Para projetos maiores, mantenha sua configuração organizada:

```javascript
// Config base - cores.js
const colorsConfig = {
  "primary": { "hex": "#0d6efd", "rgb": "13, 110, 253" },
  "secondary": { "hex": "#6c757d", "rgb": "108, 117, 125" },
  // Outras cores...
};

// Config base - spacing.js
const spacingConfig = {
  "0": "0",
  "1": "0.25rem",
  // Outros espaçamentos...
};

// Config principal
const bootstrapConfig = {
  bootstrap: {
    config: {
      colors: colorsConfig,
      spacing: spacingConfig,
      // Outras seções...
    }
  }
};

// Inicializar
const customizer = new BootstrapCustomizer(bootstrapConfig);
customizer.apply();
```

### Padronizando Nomes

Mantenha um padrão consistente para nomes:

- Use kebab-case para nomes com múltiplas palavras: `"primary-light"`, `"brand-dark"`
- Use nomes descritivos: `"success"` em vez de `"green"`
- Use nomes semânticos para gradientes: `"sunset"` em vez de `"orange-to-red"`

### Debug e Desenvolvimento

Para depurar seu CSS gerado:

```javascript
// Exibir CSS gerado no console
const customizer = new BootstrapCustomizer(config);
const generatedCSS = customizer.generateCSS();
console.log(generatedCSS);

// Ou exportar para um arquivo (em ambiente Node.js)
const fs = require('fs');
fs.writeFileSync('bootstrap-custom.css', generatedCSS);
```

---

Este guia abrange as principais técnicas de personalização do BootstrapCustomizer. Lembre-se que você pode combinar todas estas abordagens para criar um sistema de design totalmente personalizado que atenda às necessidades específicas do seu projeto.
