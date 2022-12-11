export function saveNewClient(e) {
  e.preventDefault();

  const clientName = document.getElementById('save-client-name');
  const clientCurrency = document.getElementById('save-currency');
  const clientFullRate = document.getElementById('save-full-rate');
  const clientTMRange = document.querySelectorAll('.save-range-input');
  const clientRateDiscount = document.querySelectorAll('.save-rate-input');

  const newClient = {
    name: clientName,
    currency: clientCurrency,
    full_rate: clientFullRate,
    matrix: {},
  };

  clientTMRange.forEach((range, index) => {
    console.log(range.value);
    console.log(index);
  });
}
