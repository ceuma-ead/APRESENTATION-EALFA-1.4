# Guia de Referência Rápida - BootstrapCustomizer

## Classes Disponíveis

### Sistema Grid
```
.col-xs-1 a .col-xs-12
.col-sm-1 a .col-sm-12
.col-md-1 a .col-md-12
.col-lg-1 a .col-lg-12
.col-xl-1 a .col-xl-12
```

### Cores
```
// Cores de fundo
.bg-primary
.bg-secondary
.bg-success
.bg-info
.bg-warning
.bg-danger
.bg-light
.bg-dark
.bg-[cor-personalizada]

// Cores de texto
.text-primary
.text-secondary
...etc

// Cores de borda
.border-primary
.border-secondary
...etc

// Cores de botões
.btn-primary
.btn-secondary
...etc
```

### Cores com Opacidade
```
// Fundos com opacidade
.bg-primary-10
.bg-primary-25
.bg-primary-50
.bg-primary-75
.bg-primary-90
...etc

// Textos com opacidade
.text-primary-10
.text-primary-25
...etc

// Bordas com opacidade
.border-primary-10
.border-primary-25
...etc
```

### Espaçamento
```
// Margens
.m-0, .m-1, .m-2, .m-3, .m-4, .m-5, .m-6, .m-7, .m-8, .m-auto
.mt-0, .mt-1, .mt-2...  (margin-top)
.mb-0, .mb-1, .mb-2...  (margin-bottom)
.ms-0, .ms-1, .ms-2...  (margin-left)
.me-0, .me-1, .me-2...  (margin-right)
.mx-0, .mx-1, .mx-2...  (margin horizontal)
.my-0, .my-1, .my-2...  (margin vertical)

// Padding
.p-0, .p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-auto
.pt-0, .pt-1, .pt-2...  (padding-top)
.pb-0, .pb-1, .pb-2...  (padding-bottom)
.ps-0, .ps-1, .ps-2...  (padding-left)
.pe-0, .pe-1, .pe-2...  (padding-right)
.px-0, .px-1, .px-2...  (padding horizontal)
.py-0, .py-1, .py-2...  (padding vertical)
```

### Opacidade
```
.opacity-0    (0%)
.opacity-10   (10%)
.opacity-25   (25%)
.opacity-50   (50%)
.opacity-75   (75%)
.opacity-90   (90%)
.opacity-100  (100%)
```

### Gradientes
```
// Fundo com gradiente
.bg-gradient-primary-to-info
.bg-gradient-success-to-warning
.bg-gradient-danger-to-dark
.bg-gradient-rainbow
.bg-gradient-sunset
.bg-gradient-ocean
...etc

// Texto com gradiente
.text-gradient-primary-to-info
.text-gradient-success-to-warning
...etc

// Borda com gradiente
.border-gradient-primary-to-info
.border-gradient-success-to-warning
...etc
```

### Efeitos Hover
```
// Efeitos básicos
.hover-zoom      (aumenta o elemento)
.hover-brighten  (torna mais brilhante)
.hover-darken    (torna mais escuro)
.hover-shadow    (adiciona sombra)
.hover-grow      (eleva o elemento)
.hover-rotate    (gira o elemento)
...etc

// Efeitos de cor no hover
.hover-bg-primary
.hover-bg-secondary
...etc

.hover-text-primary
.hover-text-secondary
...etc

.hover-border-primary
.hover-border-secondary
...etc

// Cores com opacidade no hover
.hover-bg-primary-50
.hover-text-danger-25
...etc
```

## Valores Padrão

### Espaçamento
```
0:     0
1:     0.25rem  (4px)
2:     0.5rem   (8px)
3:     1rem     (16px)
4:     1.5rem   (24px)
5:     3rem     (48px)
6:     4.5rem   (72px)
7:     6rem     (96px)
8:     9rem     (144px)
auto:  auto
```

### Opacidade
```
0:     0
10:    0.1
25:    0.25
50:    0.5
75:    0.75
90:    0.9
100:   1
```

### Cores Padrão
```
primary:   #0d6efd
secondary: #6c757d
success:   #198754
info:      #0dcaf0
warning:   #ffc107
danger:    #dc3545
light:     #f8f9fa
dark:      #212529
```

## Exemplos Comuns

### Card com Hover Efeitos
```html
<div class="card hover-shadow hover-bg-light-90">
  <div class="card-body">
    <h5 class="card-title">Título do Card</h5>
    <p class="card-text">Conteúdo do card com efeitos hover.</p>
  </div>
</div>
```

### Botão com Gradiente
```html
<button class="btn bg-gradient-primary-to-info text-white hover-brighten">
  Botão com Gradiente
</button>
```

### Texto com Gradiente
```html
<h2 class="text-gradient-rainbow">
  Título com Gradiente
</h2>
```

### Caixas com Gradiente e Opacidade
```html
<div class="bg-gradient-sunset p-4 mb-3 text-white">
  Box com gradiente sunset
</div>

<div class="bg-primary-50 p-4 text-dark">
  Box com cor primária a 50% de opacidade
</div>
```

### Elementos com Transformações no Hover
```html
<img src="imagem.jpg" class="img-fluid hover-zoom hover-shadow" alt="Imagem">

<div class="bg-light p-3 hover-bg-danger hover-text-white">
  Este elemento muda para fundo vermelho e texto branco no hover.
</div>
```

---

© BootstrapCustomizer v1.0.0
