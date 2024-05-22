'use strict';

// ---------- Variables ----------
// ----- Buttons -----
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// ----- DOM Elements -----
const modal_el = document.querySelector('.modal');
const overlay_el = document.querySelector('.overlay');

// ---------- Functions ----------

function revealModal() {
  modal_el.classList.remove('hidden');
  overlay_el.classList.remove('hidden');
}

function hideModal() {
  modal_el.classList.add('hidden');
  overlay_el.classList.add('hidden');
}

// // ---------- Event Handlers ----------
btnShowModal.forEach(function (button) {
  button.addEventListener('click', revealModal);
});

btnCloseModal.addEventListener('click', hideModal);

overlay_el.addEventListener('click', hideModal); // Closes modal if you click outside of the main modal window
