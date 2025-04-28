document.addEventListener("DOMContentLoaded", function (event) {
  renderPopover();
});

function renderPopover() {
  // Seleciona todos os elementos com data-bs-toggle="popover"
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    // Pega o tipo de trigger do atributo data ou usa 'hover' como padrão
    const triggerType = popoverTriggerEl.getAttribute('data-trigger-type') || 'hover';
    
    return new bootstrap.Popover(popoverTriggerEl, {
      trigger: triggerType  // Pode ser: 'hover', 'focus', 'click', 'manual'
     
    });
  });
}