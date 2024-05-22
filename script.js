'use strict';

// ---------- Variables ----------
const btnShowModal = document.querySelectorAll('.show-modal');
const modal_el = document.querySelector('.modal');

// ---------- Functions ----------

function revealModal() {
  modal_el.classList.remove('hidden');
}

// // ---------- Event Handlers ----------
btnShowModal.forEach(function (button) {
  button.addEventListener('click', revealModal);
});
