/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calculateRate.js":
/*!*********************************!*\
  !*** ./src/js/calculateRate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateRate\": () => (/* binding */ calculateRate)\n/* harmony export */ });\n/* harmony import */ var _handleClients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClients */ \"./src/js/handleClients.js\");\n\n\n// selectedClientData = {\n//   currency: currentClient['currency'],\n//   full_rate: currentClient['full_rate'],\n//   matrix: currentClient['matrix'],\n// };\n\nfunction roundToTwo(num) {\n  return num.toFixed(2);\n}\n\nfunction calculateRate() {\n  let sum = 0;\n\n  _handleClients__WEBPACK_IMPORTED_MODULE_0__.wordFields.forEach((field) => {\n    sum += _handleClients__WEBPACK_IMPORTED_MODULE_0__.selectedClientData.full_rate * field.id * field.value;\n    let roundedSum = roundToTwo(sum);\n    console.log(roundedSum);\n  });\n}\n\n\n//# sourceURL=webpack://tcjs/./src/js/calculateRate.js?");

/***/ }),

/***/ "./src/js/handleClients.js":
/*!*********************************!*\
  !*** ./src/js/handleClients.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clientDropdown\": () => (/* binding */ clientDropdown),\n/* harmony export */   \"createMatrix\": () => (/* binding */ createMatrix),\n/* harmony export */   \"populateClientList\": () => (/* binding */ populateClientList),\n/* harmony export */   \"selectedClientData\": () => (/* binding */ selectedClientData),\n/* harmony export */   \"wordFields\": () => (/* binding */ wordFields)\n/* harmony export */ });\n/* harmony import */ var _calculateRate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateRate */ \"./src/js/calculateRate.js\");\n\n\nconst clientDropdown = document.getElementById('clientlist');\nconst rowContainer = document.getElementById('row-container');\nlet selectedClientData;\nlet wordFields;\n\nasync function getClients(id = null) {\n  if (!id) {\n    return fetch('http://localhost:3000/clients').then((res) => res.json());\n  } else {\n    return fetch(`http://localhost:3000/clients/${id}`).then((res) => res.json());\n  }\n}\n\nasync function populateClientList() {\n  const clients = await getClients();\n\n  clients.forEach((client) => {\n    clientDropdown.insertAdjacentHTML('beforeend', `<option value=\"${client.id}\">${client.name}</option>`);\n  });\n\n  createMatrix();\n}\n\nasync function createMatrix() {\n  const selectedClient = clientDropdown.options[clientDropdown.selectedIndex].value;\n  const client = await getClients(selectedClient);\n\n  const clientMatrix = Object.entries(client['matrix']);\n\n  const matrixRows = document.getElementsByClassName('matrix-row');\n  while (matrixRows.length > 0) {\n    matrixRows[0].parentNode.removeChild(matrixRows[0]);\n  }\n\n  clientMatrix.forEach((matrixRow) => {\n    rowContainer.insertAdjacentHTML(\n      'beforeend',\n      `<li class=\"matrix-row\"><h5 class=\"col-1\">${matrixRow[0]}</h5><input type=\"number\" class=\"word-input\" id=\"${\n        matrixRow[1]\n      }\"/><h5 class=\"col-3\">${matrixRow[1] * 100}%</h5></li>`\n    );\n  });\n\n  cacheCurrentClient(client);\n\n  wordFields = document.querySelectorAll('.word-input');\n\n  wordFields.forEach((field) => {\n    field.oninput = _calculateRate__WEBPACK_IMPORTED_MODULE_0__.calculateRate;\n  });\n}\n\nfunction cacheCurrentClient(currentClient) {\n  selectedClientData = {\n    currency: currentClient['currency'],\n    full_rate: currentClient['full_rate'],\n    matrix: currentClient['matrix'],\n  };\n}\n\n\n//# sourceURL=webpack://tcjs/./src/js/handleClients.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleClients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClients */ \"./src/js/handleClients.js\");\n\n\n_handleClients__WEBPACK_IMPORTED_MODULE_0__.clientDropdown.onchange = _handleClients__WEBPACK_IMPORTED_MODULE_0__.createMatrix;\n(0,_handleClients__WEBPACK_IMPORTED_MODULE_0__.populateClientList)();\n\n\n//# sourceURL=webpack://tcjs/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;