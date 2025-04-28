class EventsModal {
    constructor(modalId, config = {}) {
        this.modalElement = document.getElementById(modalId);

        if (!this.modalElement) {
            throw new Error(`Modal com ID "${modalId}" não encontrado.`);
        }

        // Configurações padrão do modal
        const defaultConfig = {
            backdrop: config.backdrop !== undefined ? config.backdrop : true, // Controle do backdrop (padrão é true)
            keyboard: config.keyboard !== undefined ? config.keyboard : true, // Fechar com a tecla ESC (padrão é true)
        };

        // Instância do modal
        this.modalInstance = new bootstrap.Modal(this.modalElement, defaultConfig);

        // Estado para rastrear clique no backdrop
        this.clickedOnBackdrop = false;

        // Inicializar eventos padrão
        this.initEventos();
    }

    // Inicializar eventos padrão do modal
    initEventos() {
        // Detectar clique no backdrop
        this.modalElement.addEventListener("mousedown", (event) => {
            this.clickedOnBackdrop = event.target === this.modalElement;
        });

        this.modalElement.addEventListener("show.bs.modal", () => {
            // console.log("Modal está prestes a ser exibido.");
        });

        this.modalElement.addEventListener("shown.bs.modal", () => {
            // console.log("Modal foi exibido.");
        });

        this.modalElement.addEventListener("hide.bs.modal", () => {
            if (this.clickedOnBackdrop) {
                // console.log("Modal está sendo fechado por clique no backdrop.");
            } else {
                // console.log("Modal está sendo fechado por outro motivo.");
            }
        });

        this.modalElement.addEventListener("hidden.bs.modal", () => {
            // console.log("Modal foi ocultado.");
        });

        this.modalElement.addEventListener("hidePrevented.bs.modal", () => {
            // console.log("Fechamento do modal foi impedido devido ao backdrop estático.");
        });
    }

    // Método para simular clique fora da modal
    clicarFora() {
        if (this.modalInstance._isShown) {
            this.clickedOnBackdrop = true; // Marcar que foi clique no backdrop
            this.fechar(); // Fechar a modal
        }
    }

    // Abrir o modal
    abrir(dados = null) {
        if (dados) {
            this.atualizarConteudo(dados);
        }
        this.modalInstance.show();
    }

    // Fechar o modal
    fechar() {
        this.modalInstance.hide();
    }

    // Atualizar a posição do modal manualmente (se o conteúdo mudar dinamicamente)
    atualizarPosicao() {
        this.modalInstance.handleUpdate();
    }

    // Atualizar o conteúdo do modal
    atualizarConteudo(dados) {
        const { titulo, corpo, rodape } = dados;

        if (titulo) {
            const modalTitulo = this.modalElement.querySelector(".modal-title");
            if (modalTitulo) modalTitulo.innerHTML = titulo;
        }

        if (corpo) {
            const modalCorpo = this.modalElement.querySelector(".modal-body");
            if (modalCorpo) modalCorpo.innerHTML = corpo;
        }

        if (rodape) {
            const modalRodape = this.modalElement.querySelector(".modal-footer");
            if (modalRodape) modalRodape.innerHTML = rodape;
        }
    }

    // Limpar o conteúdo do modal
    limparConteudo() {
        const modalTitulo = this.modalElement.querySelector(".modal-title");
        const modalCorpo = this.modalElement.querySelector(".modal-body");
        const modalRodape = this.modalElement.querySelector(".modal-footer");

        if (modalTitulo) modalTitulo.innerHTML = "";
        if (modalCorpo) modalCorpo.innerHTML = "";
        if (modalRodape) modalRodape.innerHTML = "";
    }

    // Registrar eventos personalizados no modal
    on(evento, callback) {
        this.modalElement.addEventListener(evento, (event) => {
            if (evento === "hide.bs.modal") {
                callback({ event, foiCliqueFora: this.clickedOnBackdrop });
            } else {
                callback(event);
            }
        });
    }

    // Forçar a remoção do modal e backdrop (limpeza completa)
    destruir() {
        this.modalInstance.hide();
        this.modalElement.remove();
        document.querySelectorAll(".modal-backdrop").forEach((backdrop) => backdrop.remove());
    }
}

class EventsToast {
    static instances = new Map();

    static verificarExistencia(elementoOuId) {
        const id = elementoOuId instanceof HTMLElement ? elementoOuId.id : elementoOuId;
        return document.getElementById(id) !== null;
    }

    static criar(toastId, config = {}) {
        const existingInstance = EventsToast.instances.get(toastId);
        if (existingInstance && existingInstance.toastElement) {
            return existingInstance;
        }
        const instance = new EventsToast(toastId, config);
        EventsToast.instances.set(toastId, instance);
        return instance;
    }

    constructor(toastId, config = {}) {
        this.toastId = toastId;
        this.config = {
            animation: config.animation ?? true,
            autohide: config.autohide ?? false,
            delay: config.delay ?? 5000,
        };
        this.movable = false;
        this.collisionContainer = null;
        this.criarElementoToast(toastId);
    }

    criarElementoToast(toastId) {
        let container = document.querySelector(".toast-container");
        if (!container) {
            container = document.createElement("div");
            container.classList.add("toast-container", "position-fixed", "bottom-0", "end-0", "p-3");
            container.style.zIndex = 9999;
            document.body.appendChild(container);
        }

        const existingToast = document.getElementById(toastId);
        if (existingToast) {
            existingToast.remove();
        }

        const toastHTML = `
            <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header border-bottom bg-light">
                <i class="bi bi-info-circle me-2 text-primary"></i>
                <strong class="me-auto">Notificação</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body bg-white">
                Este é um Toast exemplo.
            </div>
        </div>
        `;

        container.insertAdjacentHTML("beforeend", toastHTML);
        this.toastElement = document.getElementById(toastId);
        this.toastInstance = new bootstrap.Toast(this.toastElement, this.config);
        this.initEventos();
    }

    initEventos() {
        const eventos = ["show", "shown", "hide", "hidden"];
        eventos.forEach((evento) => {
            this.toastElement.addEventListener(`${evento}.bs.toast`, () => { });
        });
    }

    initMoveButton() {
        const moveBtn = this.toastElement.querySelector('.move-toast');
        if (moveBtn) {
            moveBtn.addEventListener('click', () => {
                this.moverToast(!this.movable, this.collisionContainer);
            });
        }
    }

    moverToast(movable, collisionContainer = null) {
        this.movable = movable;
        this.collisionContainer = collisionContainer;

        const container = this.toastElement.parentElement;
        const moveBtn = this.toastElement.querySelector('.move-toast');

        if (movable) {
            container.classList.add('movable');
            moveBtn?.classList.replace('bi-arrows-move', 'bi-arrows-angle-contract');
        } else {
            container.classList.remove('movable');
            moveBtn?.classList.replace('bi-arrows-angle-contract', 'bi-arrows-move');
            container.style.transform = '';
            container.style.left = '';
            container.style.top = '';
        }
    }

    initDraggable() {
        const header = this.toastElement.querySelector('.toast-header');
        if (!header) return;

        let isDragging = false;
        let currentX, currentY, initialX, initialY;
        const container = this.toastElement.parentElement;

        // Log inicial para verificar configurações
        // console.log('Configuração de Movimento:', {
        //     movable: this.movable,
        //     collisionContainer: this.collisionContainer
        // });

        header.addEventListener('mousedown', (e) => {
            if (!this.movable) {
                console.log('Movimento não permitido');
                return;
            }

            isDragging = true;
            initialX = e.clientX - container.offsetLeft;
            initialY = e.clientY - container.offsetTop;

            // console.log('Início do Arrasto:', {
            //     initialX,
            //     initialY,
            //     clientX: e.clientX,
            //     clientY: e.clientY
            // });
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging || !this.movable) return;

            e.preventDefault();

            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            // console.log('Movimento em Progresso:', {
            //     currentX,
            //     currentY,
            //     movable: this.movable
            // });

            // Verificação de container
            if (this.collisionContainer) {
                // console.log('Container de Colisão:', this.collisionContainer);

                let containerElement;

                // Tratamento para diferentes tipos de entrada
                if (typeof this.collisionContainer === 'string') {
                    containerElement = document.querySelector(this.collisionContainer);
                } else if (typeof this.collisionContainer === 'object') {
                    const containerSelector = this.collisionContainer.container;
                    const containerIndex = this.collisionContainer.index || 0;

                    const containerList = document.querySelectorAll(`.${containerSelector}`);
                    containerElement = containerList[containerIndex];
                }

                if (containerElement) {
                    const bounds = containerElement.getBoundingClientRect();
                    const toast = this.toastElement.getBoundingClientRect();

                    // console.log('Limites do Container:', bounds);
                    // console.log('Limites do Toast:', toast);

                    // Cálculo de restrição de movimento
                    currentX = Math.max(bounds.left, Math.min(bounds.right - toast.width, currentX));
                    currentY = Math.max(bounds.top, Math.min(bounds.bottom - toast.height, currentY));

                    // console.log('Posição Ajustada:', { currentX, currentY });
                } else {
                    console.warn('Container não encontrado');
                }
            }

            // Aplicar movimento
            container.style.position = 'fixed';
            container.style.left = `${currentX}px`;
            container.style.top = `${currentY}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                // console.log('Arrasto Finalizado');
            }
            isDragging = false;
        });
    }

    adicionarConteudo(conteudo) {
        if (!conteudo) return;
        if (typeof conteudo === "string") {
            this.toastElement.innerHTML = conteudo;
        } else if (conteudo instanceof HTMLElement) {
            this.toastElement.innerHTML = "";
            this.toastElement.appendChild(conteudo);
        }
        requestAnimationFrame(() => {
            this.toastInstance = new bootstrap.Toast(this.toastElement, this.config);
            this.initDraggable();
            this.initMoveButton();
        });
    }

    fechar() {
        if (this.toastInstance) {
            this.toastInstance.hide();
            this.toastElement.removeEventListener('hidden.bs.toast', this.destruir);
            setTimeout(() => {
                this.toastInstance = new bootstrap.Toast(this.toastElement, this.config);
            }, 150);
        }
    }

    abrir() {
        if (!this.toastInstance) {
            this.toastInstance = new bootstrap.Toast(this.toastElement, this.config);
        }
        this.toastInstance.show();
    }

    destruir() {
        // Verifica se o elemento do toast ainda existe no DOM
        if (this.toastElement && document.body.contains(this.toastElement)) {
            // Dispose da instância do toast
            this.toastInstance?.dispose();
        }
        // Remove o elemento do DOM
        this.toastElement?.remove();
        // Remove a instância do Map
        EventsToast.instances.delete(this.toastId);
    }

    recriar() {
        this.destruir(); // Destrói o toast atual
        this.criarElementoToast(this.toastId); // Recria o elemento do toast
        this.toastInstance = new bootstrap.Toast(this.toastElement, this.config); // Cria uma nova instância do Bootstrap Toast
        this.initEventos(); // Reinicializa os eventos
        this.initDraggable(); // Reinicializa a funcionalidade de arrastar
        this.initMoveButton(); // Reinicializa o botão de mover
        EventsToast.instances.set(this.toastId, this); // Atualiza o Map com a nova instância
        return this;
    }

    on(evento, callback) {
        this.toastElement?.addEventListener(evento, callback);
    }
}

class EventsCollapsed {
    static instances = new Map();

    constructor(elementoOuId, config = {}) {
        // Verificar se já existe uma instância
        const existingInstance = EventsCollapsed.getInstance(elementoOuId);
        if (existingInstance) {
            return existingInstance;
        }

        this.elemento = typeof elementoOuId === 'string'
            ? document.querySelector(elementoOuId)
            : elementoOuId;

        this.config = {
            parent: config.parent || null,
            toggle: config.toggle ?? true
        };

        this.instancia = new bootstrap.Collapse(this.elemento, this.config);
        EventsCollapsed.instances.set(this.elemento, this);
    }

    // Métodos principais
    abrir() {
        this.instancia.show();
        return this;
    }

    fechar() {
        this.instancia.hide();
        return this;
    }

    alternar() {
        this.instancia.toggle();
        return this;
    }

    atualizar(novoConteudo) {
        if (typeof novoConteudo === 'string') {
            this.elemento.innerHTML = novoConteudo;
        } else if (novoConteudo instanceof HTMLElement) {
            this.elemento.innerHTML = '';
            this.elemento.appendChild(novoConteudo);
        }
        return this;
    }

    destruir() {
        this.instancia.dispose();
        EventsCollapsed.instances.delete(this.elemento);
        return this;
    }

    recriar() {
        this.destruir();
        this.instancia = new bootstrap.Collapse(this.elemento, this.config);
        EventsCollapsed.instances.set(this.elemento, this);
        return this;
    }

    // Gerenciamento de eventos
    on(evento, callback) {
        this.elemento.addEventListener(`${evento}.bs.collapse`, callback);
        return this;
    }

    // Métodos estáticos
    static criar(elementoOuId, config = {}) {
        return new EventsCollapsed(elementoOuId, config);
    }

    static getInstance(elementoOuId) {
        const elemento = typeof elementoOuId === 'string'
            ? document.querySelector(elementoOuId)
            : elementoOuId;
        return EventsCollapsed.instances.get(elemento);
    }
}

class EventsAccordion {
    constructor(elementoOuId) {
        this.elemento = typeof elementoOuId === 'string'
            ? document.querySelector(elementoOuId)
            : elementoOuId;

        // Salvar estado inicial
        this.estadoInicial = {
            classes: [...this.elemento.classList],
            conteudo: this.elemento.innerHTML
        };
    }

    abrir() {
        if (this.elemento) {
            this.elemento.classList.remove('d-none');
            this.elemento.classList.add('d-block');
        }
        return this;
    }

    fechar() {
        if (this.elemento) {
            this.elemento.classList.add('d-none');
            this.elemento.classList.remove('d-block');
        }
        return this;
    }

    alternar() {
        if (this.elemento.classList.contains('d-none')) {
            this.abrir();
        } else {
            this.fechar();
        }
        return this;
    }

    atualizar(novoConteudo) {
        if (this.elemento) {
            if (typeof novoConteudo === 'string') {
                this.elemento.innerHTML = novoConteudo;
            } else if (novoConteudo instanceof HTMLElement) {
                this.elemento.innerHTML = '';
                this.elemento.appendChild(novoConteudo);
            }
        }
        return this;
    }

    destruir() {
        if (this.elemento) {
            // Remove eventos se existirem
            this.elemento.replaceWith(this.elemento.cloneNode(true));
            // Remove classes adicionadas
            this.elemento.className = '';
            // Limpa conteúdo
            this.elemento.innerHTML = '';
        }
        return this;
    }

    recriar() {
        if (this.elemento) {
            // Restaura classes originais
            this.elemento.className = this.estadoInicial.classes.join(' ');
            // Restaura conteúdo original
            this.elemento.innerHTML = this.estadoInicial.conteudo;
        }
        return this;
    }

    on(evento, callback) {
        if (this.elemento) {
            this.elemento.addEventListener(evento, callback);
        }
        return this;
    }
}

class EventsTippy {
    static instances = new Map();
    static activeTooltip = null;

    constructor(targets = null, config = {}) {
        // Se já existe um tooltip dinâmico ativo, destrua-o
        if (!targets && EventsTippy.activeTooltip) {
            EventsTippy.activeTooltip.destruir();
        }

        // Se não houver alvo, criar elemento para tooltip
        if (!targets) {
            const tooltipElement = this.criarTooltipFlutuante();
            this.targets = [tooltipElement];
            EventsTippy.instances.set(tooltipElement.id, this);
            EventsTippy.activeTooltip = this;
        } else {
            this.targets = typeof targets === "string"
                ? Array.from(document.querySelectorAll(targets))
                : Array.isArray(targets)
                    ? targets
                    : [targets];
        }

        // Configuração padrão
        this.config = {
            content: "Tooltip dinâmico!",
            allowHTML: true,
            placement: "top",
            animation: "fade",
            arrow: true,
            trigger: "manual",
            theme: "light",
            interactive: true,
            ...config
        };

        this.instances = this.criarTippy();

        if (targets) {
            this.initEventos();
        }
    }

    initEventos() {
        this.targets.forEach(target => {
            target.addEventListener('click', () => {
                const instance = target._tippy;
                if (instance.state.isVisible) {
                    this.esconder();
                } else {
                    const rect = target.getBoundingClientRect();
                    this.mostrar(this.config.content, rect.left + rect.width / 2, rect.bottom + 10);
                }
            });
        });
    }

    criarTooltipFlutuante() {
        const id = `tippy-${Date.now()}`;
        const tooltip = document.createElement("div");

        tooltip.id = id;
        tooltip.classList.add("tippy-dinamico");
        tooltip.style.cssText = `
            position: fixed;
            z-index: 9999;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        `;

        document.body.appendChild(tooltip);
        return tooltip;
    }

    criarTippy() {
        return this.targets.map(target => {
            if (target._tippy) {
                target._tippy.destroy();
            }
            return tippy(target, this.config);
        });
    }

    mostrar(conteudo = "", x = null, y = null) {
        if (conteudo) {
            this.atualizarConteudo(conteudo);
        }

        this.instances.forEach(instance => {
            instance.show();

            if (x !== null && y !== null && instance.popper) {
                instance.popper.style.left = `${x}px`;
                instance.popper.style.top = `${y}px`;
                instance.popper.style.transform = 'translate(-50%, 0)';
            }
        });
        return this;
    }

    esconder() {
        this.instances.forEach(instance => instance.hide());
        return this;
    }

    atualizarConteudo(novoConteudo) {
        this.instances.forEach(instance => instance.setContent(novoConteudo));
        return this;
    }

    mover(x, y) {
        if (x !== null && y !== null) {
            this.instances.forEach(instance => {
                if (instance.popper) {
                    instance.popper.style.left = `${x}px`;
                    instance.popper.style.top = `${y}px`;
                    instance.popper.style.transform = 'translate(-50%, 0)';
                }
            });
        }
        return this;
    }

    destruir() {
        this.instances.forEach(instance => instance.destroy());
        this.targets.forEach(target => {
            if (target.classList.contains('tippy-dinamico')) {
                target.remove();
            }
            EventsTippy.instances.delete(target.id);
        });

        if (EventsTippy.activeTooltip === this) {
            EventsTippy.activeTooltip = null;
        }

        return this;
    }

    static criar(config = {}) {
        return new EventsTippy(null, config);
    }

    static obterInstancia(id) {
        return EventsTippy.instances.get(id);
    }

    static destruirTodas() {
        EventsTippy.instances.forEach(instance => instance.destruir());
        EventsTippy.instances.clear();
        EventsTippy.activeTooltip = null;
    }
}

class EventsTab {
    static instances = new Map();

    constructor(elementoId, config = {}) {
        this.elemento = typeof elementoId === 'string'
            ? document.querySelector(elementoId)
            : elementoId;

        if (!this.elemento) {
            throw new Error(`Tab com ID "${elementoId}" não encontrado.`);
        }

        this.config = {
            fade: config.fade ?? true,
            keyboard: config.keyboard ?? true,
            autoInit: config.autoInit ?? true,
            ...config
        };

        this.tabInstance = null;
        this.activeTab = null;

        if (this.config.autoInit) {
            this.inicializar();
        }

        this.eventos = new Map();

        EventsTab.instances.set(this.elemento.id, this);
    }

    inicializar() {
        this.tabInstance = new bootstrap.Tab(this.elemento);
        this.initEventos();
        return this;
    }

    // Método para adicionar eventos personalizados
    on(evento, callback) {
        if (!this.eventos.has(evento)) {
            this.eventos.set(evento, []);
        }
        this.eventos.get(evento).push(callback);
        return this;
    }

    // Método para disparar eventos personalizados
    dispararEvento(evento, dados) {
        if (this.eventos.has(evento)) {
            this.eventos.get(evento).forEach(callback => {
                callback(dados);
            });
        }
        return this;
    }
    
    initEventos() {
        this.elemento.addEventListener('show.bs.tab', (e) => {
            this.activeTab = e.target;
            this.dispararEvento('show', e);
        });

        this.elemento.addEventListener('shown.bs.tab', (e) => {
            this.dispararEvento('shown', e);
        });

        this.elemento.addEventListener('hide.bs.tab', (e) => {
            this.dispararEvento('hide', e);
        });

        return this;
    }

    mostrar() {
        this.tabInstance.show();
        return this;
    }

    esconder() {
        if (this.activeTab) {
            const proximaTab = this.getProximaTab();
            if (proximaTab) {
                new bootstrap.Tab(proximaTab).show();
            }
        }
        return this;
    }

    getProximaTab() {
        const tabs = Array.from(this.elemento.closest('[role="tablist"]').querySelectorAll('[role="tab"]'));
        const currentIndex = tabs.indexOf(this.activeTab);
        return tabs[currentIndex + 1] || tabs[0];
    }

    destruir() {
        if (this.tabInstance) {
            this.tabInstance.dispose();
            EventsTab.instances.delete(this.elemento.id);
        }
        return this;
    }

    ativarPorIndice(index) {
        const tabs = this.elemento.closest('[role="tablist"]').querySelectorAll('[role="tab"]');
        if (tabs[index]) {
            new bootstrap.Tab(tabs[index]).show();
        }
        return this;
    }

    ativarPorId(id) {
        const tab = document.querySelector(`#${id}`);
        if (tab) {
            new bootstrap.Tab(tab).show();
        }
        return this;
    }

    atualizarConteudo(tabId, novoConteudo) {
        const tabPane = document.querySelector(`#${tabId}`);

        if (!tabPane) {
            console.warn(`Tab pane com ID "${tabId}" não encontrado.`);
            return this;
        }

        if (typeof novoConteudo === 'string') {
            tabPane.innerHTML = novoConteudo;
        } else if (novoConteudo instanceof HTMLElement) {
            tabPane.innerHTML = '';
            tabPane.appendChild(novoConteudo);
        }

        return this;
    }

    static criar(elementoId, config = {}) {
        return new EventsTab(elementoId, config);
    }

    static obterInstancia(id) {
        return EventsTab.instances.get(id);
    }

    static destruirTodas() {
        EventsTab.instances.forEach(instance => instance.destruir());
        EventsTab.instances.clear();
    }
}

// Modal de Emissão de Eventos
const _modalOuvinte_ = new EventsModal("modal-ouvinte");
const _modalConfiguracao_ = new EventsModal("configModal");

// Toast Emissão de Eventos
const _toastOuvinte_ = EventsToast.criar("toastOuvinteControllerMinimized", { autohide: false });
const _toastRouter_ = EventsToast.criar("toast-container", { autohide: false });

// Tab de Emissão de Eventos
const configTabs = new EventsTab('#configTabs', {
    fade: true,
    autoInit: true
});

