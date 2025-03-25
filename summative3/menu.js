let modals = {};

document.addEventListener('DOMContentLoaded', function () {
  ['mechadoModal', 'menudoModal', 'calderetaModal', 'afritadaModal'].forEach(id => {
    modals[id] = new bootstrap.Modal(document.getElementById(id), {
      backdrop: false,
      keyboard: false
    });
  });
});

function openMenuModal(modalId) {
  modals[modalId].show();
}

function closeAllModals() {
  Object.values(modals).forEach(modal => modal.hide());
}
