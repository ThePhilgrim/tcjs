const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

export const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

export const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
