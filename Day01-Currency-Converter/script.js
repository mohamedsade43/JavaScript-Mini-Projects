// Constant exchange rate
const RATE_USD_TO_SOS = 30000;

// DOM elements
const amountInput = document.getElementById('amount');
const directionSelect = document.getElementById('direction');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const resultP = document.getElementById('result');

// Convert function
function convert() {
  let raw = amountInput.value;
  let num = parseFloat(raw);

  if (isNaN(num) || num <= 0) {
    resultP.innerText = "Please enter a valid positive number.";
    return;
  }

  let direction = directionSelect.value;
  let converted;

  if (direction === 'usd-to-sos') {
    converted = num * RATE_USD_TO_SOS;
    resultP.innerText = `${num} USD = ${converted.toLocaleString()} SOS`;
  } else {
    converted = num / RATE_USD_TO_SOS;
    resultP.innerText = `${num.toLocaleString()} SOS = ${converted.toFixed(4)} USD`;
  }
}

// Reset function
function reset() {
  amountInput.value = "";
  resultP.innerText = "";
  directionSelect.value = "usd-to-sos";
}

// Events
convertBtn.addEventListener('click', convert);
resetBtn.addEventListener('click', reset);
