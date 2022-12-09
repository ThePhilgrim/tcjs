import { selectedClientData, wordFields } from './handleClients';

const sumContainer = document.querySelector('.sum-container');

// selectedClientData = {
//   currency: currentClient['currency'],
//   full_rate: currentClient['full_rate'],
//   matrix: currentClient['matrix'],
// };

function populateSumContainer(num) {
  sumContainer.innerHTML = `<h3>${num} ${selectedClientData['currency']}</h3>`;
}

function roundToTwo(num) {
  return num.toFixed(2);
}

export function calculateRate() {
  let sum = 0;

  wordFields.forEach((field) => {
    sum += selectedClientData.full_rate * field.id * field.value;

    populateSumContainer(roundToTwo(sum));
  });
}
