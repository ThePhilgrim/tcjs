import { wordFields } from './handleClients';
import { populateSumContainer } from './calculateRate';

export function clearFields(e) {
  e.preventDefault();

  wordFields.forEach((field) => {
    field.value = '';
  });

  populateSumContainer();

  wordFields[0].focus();
}
