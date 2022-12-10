import { wordFields } from './handleClients';
import { populateSumContainer } from './calculateRate';
import { splitSum } from './helpers';
import { openModal, closeModal } from './addClient';

export const clipboardBtn = document.getElementById('clipboard-btn');
const addClientBtn = document.querySelector('.add-client-btn');
const closeModalBtn = document.querySelector('.btn-close');

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

addClientBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
