import { selectedClientData, wordFields } from './handleClients';

// selectedClientData = {
//   currency: currentClient['currency'],
//   full_rate: currentClient['full_rate'],
//   matrix: currentClient['matrix'],
// };

function roundToTwo(num) {
  return num.toFixed(2);
}

export function calculateRate() {
  let sum = 0;

  wordFields.forEach((field) => {
    sum += selectedClientData.full_rate * field.id * field.value;
    let roundedSum = roundToTwo(sum);
    console.log(roundedSum);
  });
}
