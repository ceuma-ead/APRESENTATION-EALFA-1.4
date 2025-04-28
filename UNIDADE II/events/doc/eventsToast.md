# Events E-alfa

Biblioteca JavaScript para gerenciamento de notificações toast com recursos avançados de interatividade e personalização.

## 📋 Índice

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Uso Básico](#uso-básico)
- [Documentação](#documentação)
- [Exemplos](#exemplos)
- [Contribuição](#contribuição)

## 🚀 Recursos

- ✨ Interface intuitiva e moderna
- 🎯 Toasts arrastáveis com suporte a container de colisão
- ⚡ Sistema de eventos personalizáveis
- 🔄 Gerenciamento automático de instâncias
- 🎨 Totalmente personalizável
- 🔌 Integração com Bootstrap

## 💻 Instalação

1. Inclua as dependências necessárias:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.x.x/font/bootstrap-icons.css" rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/js/bootstrap.bundle.min.js"></script>
```

2. Adicione o arquivo EventsToast:

```html
<script src="path/to/events-toast.js"></script>
```

## 🎈 Uso Básico

```javascript
// Criar uma instância do toast
const toast = EventsToast.criar('meuToast', {
    animation: true,
    autohide: false,
    delay: 5000
});

// Adicionar conteúdo
toast.adicionarConteudo(`
    <div class="toast-header">
        <strong>Notificação</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
        Sua mensagem aqui!
    </div>
`);

// Mostrar o toast
toast.abrir();
```

## 📖 Documentação

### Configuração

```javascript
const config = {
    animation: true,    // Habilita/desabilita animações
    autohide: false,    // Controle de fechamento automático
    delay: 5000        // Tempo para autohide (ms)
};
```

### Métodos Principais

#### `criar(toastId, config)`
Cria uma nova instância do toast.

```javascript
const toast = EventsToast.criar('meuToastId', {
    autohide: true,
    delay: 3000
});
```

#### `abrir()`
Exibe o toast.

```javascript
toast.abrir();
```

#### `fechar()`
Fecha o toast.

```javascript
toast.fechar();
```

#### `destruir()`
Remove o toast do DOM e limpa a instância.

```javascript
toast.destruir();
```

#### `recriar()`
Recria o toast após ter sido destruído.

```javascript
toast.recriar();
```

#### `moverToast(movable, collisionContainer)`
Habilita/desabilita a funcionalidade de arrastar.

```javascript
// Habilitar movimento
toast.moverToast(true);

// Com container de colisão
toast.moverToast(true, '.meu-container');
```

## 💡 Exemplos

### Toast Básico
```javascript
const toastBasico = EventsToast.criar('toastBasico');
toastBasico.adicionarConteudo(`
    <div class="toast-header">
        <strong>Sucesso!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
        Operação realizada com sucesso!
    </div>
`);
toastBasico.abrir();
```

### Toast Móvel
```javascript
const toastMovel = EventsToast.criar('toastMovel');
toastMovel.adicionarConteudo(`
    <div class="toast-header">
        <strong>Toast Móvel</strong>
        <button class="move-toast bi bi-arrows-move mx-2"></button>
        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
        Arraste-me pela header!
    </div>
`);
toastMovel.moverToast(true);
toastMovel.abrir();
```

### Toast com Eventos
```javascript
const toastEventos = EventsToast.criar('toastEventos');
toastEventos.on('shown.bs.toast', () => console.log('Toast mostrado'));
toastEventos.on('hidden.bs.toast', () => console.log('Toast escondido'));
toastEventos.abrir();
```

## 🤝 Contribuição

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.