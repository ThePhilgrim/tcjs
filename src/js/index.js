import { clientDropdown, populateClientList, createMatrix } from './handleClients';

clientDropdown.onchange = createMatrix;
populateClientList();
