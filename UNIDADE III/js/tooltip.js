document.addEventListener("DOMContentLoaded", function(event) {
  // Initial check when page loads
  checkScreenSizeAndHandleTooltips();
  
  // Also check when window is resized
  window.addEventListener('resize', checkScreenSizeAndHandleTooltips);
});

function checkScreenSizeAndHandleTooltips() {
  if (window.innerWidth > 768) {
    // Desktop view - create tooltips
    console.log("Desktop view detected - enabling tooltips");
    tooltipRender();
  } else {
    // Mobile view - destroy tooltips if they exist
    console.log("Mobile view detected - disabling tooltips");
    destroyTooltips();
  }
}

function tooltipRender() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: 'hover'
    });
  });
}

function destroyTooltips() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function(tooltipTriggerEl) {
    var tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
    if (tooltip) {
      tooltip.dispose();
    }
  });
}