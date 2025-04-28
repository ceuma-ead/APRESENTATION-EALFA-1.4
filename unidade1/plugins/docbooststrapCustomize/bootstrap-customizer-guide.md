# Guia Completo do BootstrapCustomizer

O BootstrapCustomizer é uma ferramenta JavaScript poderosa que permite personalizar e estender o Bootstrap de forma dinâmica, sem precisar modificar os arquivos originais do framework. Este guia explicará como configurar e utilizar todas as funcionalidades disponíveis.

## Índice

1. [Introdução](#introdução)
2. [Configuração Inicial](#configuração-inicial)
3. [Sistema de Grid](#sistema-de-grid)
4. [Espaçamento](#espaçamento)
5. [Cores](#cores)
6. [Opacidade](#opacidade)
7. [Gradientes](#gradientes)
8. [Efeitos Hover](#efeitos-hover)
9. [Tipografia](#tipografia)
10. [Bordas](#bordas)
11. [Sombras](#sombras)
12. [Animações](#animações)
13. [Flexbox](#flexbox)
14. [Display e Posicionamento](#display-e-posicionamento)
15. [Dimensionamento](#dimensionamento)
16. [Alinhamento de Texto](#alinhamento-de-texto)
17. [Métodos Avançados](#métodos-avançados)
18. [Exemplos Práticos](#exemplos-práticos)

## Introdução

O BootstrapCustomizer trabalha convertendo um objeto de configuração JSON em regras CSS personalizadas que são injetadas dinamicamente na página. Isso permite:

- Personalizar o Bootstrap sem modificar seus arquivos fonte
- Atualizar estilos dinamicamente durante a execução
- Adicionar novas funcionalidades mantendo a compatibilidade com o Bootstrap
- Criar temas personalizados facilmente

## Configuração Inicial

### Incluindo o Script

Primeiro, inclua o arquivo JavaScript no seu HTML:

```html
<script src="./js/bootstrap-customizer.js"></script>
```

### Criando e Aplicando a Configuração

Em seguida, crie uma instância com sua configuração e aplique-a:

```html
<script>
  // Configuração (pode ser carregada de um arquivo JSON)
  const config = {
    bootstrap: {
      config: {
        // Suas configurações aqui
      }
    }
  };

  // Inicializar e aplicar
  const customizer = new BootstrapCustomizer(config);
  customizer.apply();
</script>
```

## Sistema de Grid

O BootstrapCustomizer permite personalizar completamente o sistema de grid, incluindo colunas, breakpoints, containers e gutters.

### Uso das Colunas

```html
<div class="row">
  <div class="col-md-6">Coluna de 50% em telas médias</div>
  <div class="col-md-6">Coluna de 50% em telas médias</div>
</div>
```

### Breakpoints Disponíveis

- `xs`: Dispositivos muito pequenos (< 576px)
- `sm`: Dispositivos pequenos (≥ 576px)
- `md`: Dispositivos médios (≥ 768px)
- `lg`: Dispositivos grandes (≥ 992px)
- `xl`: Dispositivos extra grandes (≥ 1200px)
- `xxl`: Dispositivos muito grandes (≥ 1400px)

## Espaçamento

O sistema de espaçamento permite controlar margens e preenchimentos de forma consistente.

### Classes de Margem (m)

```html
<div class="m-3">Margem em todos os lados (1rem)</div>
<div class="mt-4">Margem superior (1.5rem)</div>
<div class="mb-5">Margem inferior (3rem)</div>
<div class="ms-2">Margem à esquerda (0.5rem)</div>
<div class="me-1">Margem à direita (0.25rem)</div>
<div class="mx-3">Margens laterais (1rem)</div>
<div class="my-4">Margens superior e inferior (1.5rem)</div>
```

### Classes de Preenchimento (p)

```html
<div class="p-3">Preenchimento em todos os lados (1rem)</div>
<div class="pt-4">Preenchimento superior (1.5rem)</div>
<div class="pb-5">Preenchimento inferior (3rem)</div>
<div class="ps-2">Preenchimento à esquerda (0.5rem)</div>
<div class="pe-1">Preenchimento à direita (0.25rem)</div>
<div class="px-3">Preenchimentos laterais (1rem)</div>
<div class="py-4">Preenchimentos superior e inferior (1.5rem)</div>
```

### Valores de Espaçamento Disponíveis

- `0`: 0
- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 1rem (16px)
- `4`: 1.5rem (24px)
- `5`: 3rem (48px)
- `6`: 4.5rem (72px)
- `7`: 6rem (96px)
- `8`: 9rem (144px)
- `9`: 12rem (192px)
- `10`: 15rem (240px)
- `xs`: 0.125rem (2px)
- `sm`: 0.375rem (6px)
- `md`: 2rem (32px)
- `lg`: 5rem (80px)
- `xl`: 10rem (160px)
- `auto`: auto

## Cores

O sistema de cores permite definir e usar cores consistentes em toda a aplicação.

### Classes Básicas de Cor

```html
<!-- Cores de fundo -->
<div class="bg-primary">Fundo primário</div>
<div class="bg-success">Fundo de sucesso</div>
<div class="bg-brand-blue">Fundo azul personalizado</div>

<!-- Cores de texto -->
<div class="text-primary">Texto primário</div>
<div class="text-danger">Texto de erro</div>
<div class="text-brand-teal">Texto teal personalizado</div>

<!-- Cores de borda -->
<div class="border border-warning">Borda de alerta</div>
<div class="border border-brand-purple">Borda roxa personalizada</div>

<!-- Botões coloridos -->
<button class="btn btn-primary">Botão primário</button>
<button class="btn btn-brand-orange">Botão laranja personalizado</button>
```

### Cores com Opacidade

```html
<div class="bg-primary-50">Fundo primário com 50% de opacidade</div>
<div class="text-danger-75">Texto de erro com 75% de opacidade</div>
<div class="border border-brand-blue-25">Borda azul com 25% de opacidade</div>
```

### Cores Personalizadas Disponíveis

- Cores padrão do Bootstrap: `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `light`, `dark`, `white`, `black`
- Cores personalizadas: `brand-blue`, `brand-green`, `brand-purple`, `brand-orange`, `brand-teal`
- Tons de cinza: `gray-100` até `gray-900`

## Opacidade

As classes de opacidade permitem controlar a transparência dos elementos.

```html
<div class="opacity-100">Totalmente visível</div>
<div class="opacity-75">75% de opacidade</div>
<div class="opacity-50">50% de opacidade</div>
<div class="opacity-25">25% de opacidade</div>
<div class="opacity-0">Invisível (mas ainda no DOM)</div>
```

## Gradientes

Os gradientes permitem criar transições suaves entre cores.

### Classes de Gradiente de Fundo

```html
<div class="bg-gradient-primary-to-info">Gradiente do primário para info</div>
<div class="bg-gradient-success-to-warning">Gradiente do sucesso para alerta</div>
<div class="bg-gradient-sunset">Gradiente pôr do sol personalizado</div>
<div class="bg-gradient-ocean">Gradiente oceano personalizado</div>
```

### Texto com Gradiente

```html
<h2 class="text-gradient-rainbow">Título com gradiente arco-íris</h2>
<p class="text-gradient-cosmic">Texto com gradiente cósmico</p>
```

### Bordas com Gradiente

```html
<div class="border-gradient-fire p-3">
  Elemento com borda gradiente de fogo
</div>
```

## Efeitos Hover

Os efeitos hover adicionam interatividade aos elementos quando o cursor passa sobre eles.

### Efeitos Básicos

```html
<div class="hover-zoom p-3 bg-light">
  Este elemento aumenta de tamanho no hover
</div>

<div class="hover-shadow p-3 bg-light">
  Este elemento ganha sombra no hover
</div>

<div class="hover-brighten p-3 bg-light">
  Este elemento fica mais brilhante no hover
</div>

<div class="hover-grow p-3 bg-light">
  Este elemento flutua e ganha sombra no hover
</div>
```

### Hover com Cores

```html
<button class="hover-bg-primary p-2">
  Muda para a cor primária no hover
</button>

<span class="hover-text-danger">
  O texto muda para vermelho no hover
</span>

<div class="border p-3 hover-border-success">
  A borda muda para verde no hover
</div>
```

### Efeitos Hover com Opacidade

```html
<div class="hover-bg-primary-50 p-3">
  Fundo primário com 50% de opacidade no hover
</div>
```

## Tipografia

As configurações de tipografia controlam o tamanho, peso, altura da linha e espaçamento entre letras.

### Tamanho da Fonte

```html
<p class="fs-xs">Texto muito pequeno (0.75rem)</p>
<p class="fs-sm">Texto pequeno (0.875rem)</p>
<p class="fs-md">Texto médio (1rem)</p>
<p class="fs-lg">Texto grande (1.25rem)</p>
<p class="fs-xl">Texto muito grande (1.5rem)</p>
<p class="fs-2xl">Texto enorme (2rem)</p>
```

### Peso da Fonte

```html
<p class="fontWeight-light">Texto leve (300)</p>
<p class="fontWeight-normal">Texto normal (400)</p>
<p class="fontWeight-medium">Texto médio (500)</p>
<p class="fontWeight-semibold">Texto semi-negrito (600)</p>
<p class="fontWeight-bold">Texto negrito (700)</p>
```

### Altura da Linha

```html
<p class="lineHeight-none">Altura de linha 1 (sem espaço)</p>
<p class="lineHeight-tight">Altura de linha 1.25 (apertada)</p>
<p class="lineHeight-normal">Altura de linha 1.5 (normal)</p>
<p class="lineHeight-loose">Altura de linha 2 (solta)</p>
```

### Espaçamento entre Letras

```html
<p class="letterSpacing-tight">Espaçamento entre letras apertado (-0.025em)</p>
<p class="letterSpacing-normal">Espaçamento entre letras normal (0)</p>
<p class="letterSpacing-wide">Espaçamento entre letras amplo (0.025em)</p>
```

## Bordas

As configurações de borda controlam o raio e a largura das bordas.

### Raio de Borda

```html
<div class="borderRadius-none bg-light p-3">Sem arredondamento</div>
<div class="borderRadius-sm bg-light p-3">Arredondamento pequeno (0.125rem)</div>
<div class="borderRadius-md bg-light p-3">Arredondamento médio (0.25rem)</div>
<div class="borderRadius-lg bg-light p-3">Arredondamento grande (0.5rem)</div>
<div class="borderRadius-xl bg-light p-3">Arredondamento muito grande (1rem)</div>
<div class="borderRadius-full bg-light p-3">Totalmente arredondado (círculo/elipse)</div>
```

### Largura de Borda

```html
<div class="border borderWidth-1 p-3">Borda fina (1px)</div>
<div class="border borderWidth-2 p-3">Borda média (2px)</div>
<div class="border borderWidth-4 p-3">Borda grossa (4px)</div>
<div class="border borderWidth-8 p-3">Borda muito grossa (8px)</div>
```

## Sombras

As classes de sombra adicionam profundidade e elevação aos elementos.

```html
<div class="boxShadow-none p-3 m-3">Sem sombra</div>
<div class="boxShadow-sm p-3 m-3">Sombra pequena</div>
<div class="boxShadow-md p-3 m-3">Sombra média</div>
<div class="boxShadow-lg p-3 m-3">Sombra grande</div>
<div class="boxShadow-xl p-3 m-3">Sombra muito grande</div>
<div class="boxShadow-2xl p-3 m-3">Sombra enorme</div>
<div class="boxShadow-inner p-3 m-3">Sombra interna</div>
<div class="boxShadow-outline p-3 m-3">Contorno</div>
```

## Animações

As animações adicionam movimento e interesse visual aos elementos.

```html
<div class="m-3 p-3 bg-light" style="animation: spin 1s linear infinite;">
  Elemento girando
</div>

<div class="m-3 p-3 bg-light" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;">
  Elemento pulsando
</div>

<div class="m-3 p-3 bg-light" style="animation: bounce 1s infinite;">
  Elemento pulando
</div>

<div class="m-3 p-3 bg-light" style="animation: float 3s ease-in-out infinite;">
  Elemento flutuando
</div>

<div class="m-3 p-3 bg-light" style="animation: fadeIn 0.5s ease-in;">
  Elemento aparecendo
</div>
```

## Flexbox

As classes Flexbox permitem criar layouts flexíveis e responsivos.

### Flex Container

```html
<div class="display-flex">
  Container flex com direção padrão (row)
</div>

<div class="display-flex flexDirection-col">
  Container flex vertical (column)
</div>

<div class="display-flex flexWrap-wrap">
  Container flex com quebra (wrap)
</div>
```

### Alinhamento de Itens

```html
<div class="display-flex alignItems-center">
  Itens alinhados ao centro verticalmente
</div>

<div class="display-flex justifyContent-between">
  Itens distribuídos uniformemente
</div>

<div class="display-flex alignItems-center justifyContent-center">
  Itens centralizados vertical e horizontalmente
</div>
```

### Propriedades de Itens Flex

```html
<div class="display-flex">
  <div class="flex-1">
    Este item cresce e encolhe (flex: 1)
  </div>
  <div class="flex-auto">
    Este item ajusta seu tamanho automaticamente
  </div>
  <div class="flex-none">
    Este item não flexiona
  </div>
</div>
```

## Display e Posicionamento

As classes de display e posicionamento controlam como os elementos são renderizados e posicionados.

### Display

```html
<span class="display-block">Span renderizado como bloco</span>
<div class="display-inline">Div renderizado como inline</div>
<div class="display-flex">Container flexível</div>
<div class="display-grid">Container grid</div>
<div class="display-none">Este elemento fica oculto</div>
```

### Posicionamento

```html
<div class="position-relative">
  Elemento com posição relativa
  <div class="position-absolute" style="top: 0; right: 0;">
    Elemento posicionado no canto superior direito
  </div>
</div>

<div class="position-fixed" style="bottom: 20px; right: 20px;">
  Botão fixo no canto inferior direito
</div>

<div class="position-sticky" style="top: 0;">
  Cabeçalho que gruda ao rolar
</div>
```

### Z-Index

```html
<div class="position-relative">
  <div class="position-absolute zIndex-10">Elemento na frente</div>
  <div class="position-absolute zIndex-0">Elemento atrás</div>
</div>
```

## Dimensionamento

As classes de dimensionamento controlam a largura e altura dos elementos.

### Largura

```html
<div class="width-full">Largura 100%</div>
<div class="width-1/2">Largura 50%</div>
<div class="width-1/3">Largura 33.33%</div>
<div class="width-2/3">Largura 66.67%</div>
<div class="width-screen">Largura da viewport</div>
<div class="width-auto">Largura automática</div>
<div class="width-64">Largura fixa (16rem)</div>
```

### Altura

```html
<div class="height-full">Altura 100%</div>
<div class="height-1/2">Altura 50%</div>
<div class="height-screen">Altura da viewport</div>
<div class="height-auto">Altura automática</div>
<div class="height-64">Altura fixa (16rem)</div>
```

## Alinhamento de Texto

As classes de alinhamento de texto controlam como o texto é alinhado.

```html
<p class="textAlign-left">Texto alinhado à esquerda</p>
<p class="textAlign-center">Texto centralizado</p>
<p class="textAlign-right">Texto alinhado à direita</p>
<p class="textAlign-justify">Texto justificado</p>
```

### Alinhamento Vertical

```html
<span class="verticalAlign-baseline">Linha de base</span>
<span class="verticalAlign-top">Alinhado ao topo</span>
<span class="verticalAlign-middle">Alinhado ao meio</span>
<span class="verticalAlign-bottom">Alinhado ao fundo</span>
```

### Transformação de Texto

```html
<p class="textTransform-uppercase">TEXTO EM MAIÚSCULAS</p>
<p class="textTransform-lowercase">texto em minúsculas</p>
<p class="textTransform-capitalize">Texto Com Iniciais Maiúsculas</p>
```

### Decoração de Texto

```html
<p class="textDecoration-underline">Texto sublinhado</p>
<p class="textDecoration-line-through">Texto riscado</p>
<p class="textDecoration-no-underline">Texto sem decoração</p>
```

## Métodos Avançados

O BootstrapCustomizer oferece métodos avançados para manipulação dinâmica dos estilos.

### Atualizando Configurações

Você pode atualizar a configuração dinamicamente:

```javascript
// Atualiza apenas algumas propriedades
customizer.update({
  bootstrap: {
    config: {
      colors: {
        // Adiciona ou modifica cores
        "brand-red": {
          hex: "#e74c3c",
          rgb: "231, 76, 60"
        }
      }
    }
  }
});
```

### Adicionando Geradores Personalizados

Você pode adicionar seus próprios geradores para tipos de propriedades personalizadas:

```javascript
customizer.addGenerator('minhaPropriedade', function(sectionKey, sectionValue, bootstrapConfig) {
  let css = '/* Meu gerador personalizado */\n';
  // Lógica para gerar CSS
  return css;
});
```

## Exemplos Práticos

### Cartão com Efeitos de Hover

```html
<div class="bg-white borderRadius-lg boxShadow-md p-4 hover-grow">
  <h3 class="fs-xl textAlign-center">Título do Cartão</h3>
  <p class="textAlign-center mb-4">Conteúdo do cartão com algum texto descritivo.</p>
  <button class="bg-primary text-white borderRadius-md p-2 px-4 mx-auto display-block hover-brightness">
    Botão de Ação
  </button>
</div>
```

### Layout Responsivo com Flexbox

```html
<div class="display-flex flexDirection-col flexDirection-row m-3">
  <div class="flex-1 p-3 bg-light m-2">
    Barra lateral
  </div>
  <div class="flex-3 p-3 bg-light m-2">
    Conteúdo principal
  </div>
</div>
```

### Cabeçalho com Gradiente e Animação

```html
<header class="p-4 bg-gradient-deep-blue textAlign-center">
  <h1 class="text-white fs-4xl" style="animation: fadeIn 1s ease-in;">
    Meu Site Incrível
  </h1>
  <p class="text-white-75 fs-lg" style="animation: slideUp 0.5s ease-out;">
    Bem-vindo ao meu site com Bootstrap personalizado
  </p>
</header>
```

### Botão Animado com Efeitos

```html
<button class="bg-primary text-white p-3 borderRadius-md hover-grow hover-brighten">
  <span style="animation: pulse 2s infinite;">Clique Aqui</span>
</button>
```

---

Este guia cobre as principais funcionalidades do BootstrapCustomizer. Com ele, você pode criar designs altamente personalizados enquanto mantém a familiaridade e consistência do Bootstrap.
