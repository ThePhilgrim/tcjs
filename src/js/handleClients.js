import { calculateRate } from './calculateRate';

export const clientDropdown = document.getElementById('clientlist');
const rowContainer = document.getElementById('row-container');
export let selectedClientData;
export let wordFields;

async function getClients(id = null) {
  if (!id) {
    return fetch('http://localhost:3000/clients').then((res) => res.json());
  } else {
    return fetch(`http://localhost:3000/clients/${id}`).then((res) => res.json());
  }
}

export async function populateClientList() {
  const clients = await getClients();

  clients.forEach((client) => {
    clientDropdown.insertAdjacentHTML('beforeend', `<option value="${client.id}">${client.name}</option>`);
  });

  createMatrix();
}

export async function createMatrix() {
  const selectedClient = clientDropdown.options[clientDropdown.selectedIndex].value;
  const client = await getClients(selectedClient);

  const clientMatrix = Object.entries(client['matrix']);

  const matrixRows = document.getElementsByClassName('matrix-row');
  while (matrixRows.length > 0) {
    matrixRows[0].parentNode.removeChild(matrixRows[0]);
  }

  clientMatrix.forEach((matrixRow) => {
    rowContainer.insertAdjacentHTML(
      'beforeend',
      `<li class="matrix-row"><h5 class="col-1">${matrixRow[0]}</h5><input type="number" class="word-input" id="${
        matrixRow[1]
      }"/><h5 class="col-3">${matrixRow[1] * 100}%</h5></li>`
    );
  });

  cacheCurrentClient(client);

  wordFields = document.querySelectorAll('.word-input');

  wordFields.forEach((field) => {
    field.oninput = calculateRate;
  });
}

function cacheCurrentClient(currentClient) {
  selectedClientData = {
    currency: currentClient['currency'],
    full_rate: currentClient['full_rate'],
    matrix: currentClient['matrix'],
  };
}
