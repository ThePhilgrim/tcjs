import { clientDropdown, populateClientList, createMatrix } from './handleClients';
import { clearFields } from './buttons';

const clearBtn = document.getElementById('clear-fields-btn');

clearBtn.addEventListener('click', clearFields);
clientDropdown.onchange = createMatrix;
populateClientList();
