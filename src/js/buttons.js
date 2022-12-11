import { wordFields } from './handleClients';
import { populateSumContainer } from './calculateRate';
import { splitSum } from './helpers';
import { saveNewClient } from './addClient';

export const clipboardBtn = document.getElementById('clipboard-btn');
const addClientBtn = document.querySelector('.add-client-btn');
const closeModalBtn = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const saveClientSubmit = document.getElementById('save-client-submit');

export function clearFields(e) {
  e.preventDefault();

  wordFields.forEach((field) => {
    field.value = '';
  });

  populateSumContainer();

  wordFields[0].focus();
}

export function copyToClipboard(e) {
  e.preventDefault();

  let sum = splitSum();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(sum).catch((err) => {
      alert('Failed to copy the text to clipboard.', err);
    });
  } else if (window.clipboardData) {
    window.clipboardData.setData('Text', sum);
  }
}

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal);
addClientBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
saveClientSubmit.addEventListener('click', saveNewClient);
