import { populateClientList } from './handleClients';

async function postNewClientToServer(newClient) {
  await fetch('http://localhost:3000/clients', {
    method: 'POST',
    body: JSON.stringify(newClient),
    headers: { 'Content-Type': 'application/json' },
  });

  populateClientList();
}

export function saveNewClient(e) {
  e.preventDefault();

  const newClientForm = document.querySelector('.add-client-form');

  const clientTMRange = document.querySelectorAll('.save-range-input');
  const clientRateDiscount = document.querySelectorAll('.save-rate-input');

  const newClient = {
    name: newClientForm.name.value,
    currency: newClientForm.currency.value,
    full_rate: newClientForm.full_rate.value,
    matrix: [],
  };

  clientTMRange.forEach((tmRange, index) => {
    newClient.matrix.push({ range: tmRange.value, discount: clientRateDiscount[index].value / 100 });
  });

  postNewClientToServer(newClient);
}
