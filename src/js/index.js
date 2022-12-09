import { clientDropdown, populateClientList, createMatrix } from './handleClients';
import { clearFields, copyToClipboard } from './buttons';
import { clipboardBtn } from './buttons';

const clearBtn = document.getElementById('clear-fields-btn');

clearBtn.addEventListener('click', clearFields);
clipboardBtn.addEventListener('click', copyToClipboard);
clientDropdown.onchange = createMatrix;
populateClientList();
