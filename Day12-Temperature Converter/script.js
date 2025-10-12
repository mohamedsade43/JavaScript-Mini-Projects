// DOM Elements
const amount = document.querySelector("#amount");
const option_values = document.querySelector("#option_values");
const convertBtn = document.querySelector("#convertBtn");
const resultP = document.querySelector("#result");

// Event listener
convertBtn.addEventListener("click", function () {
  let amountValue = parseFloat(amount.value.trim());
  let unit = option_values.value; // get selected unit

  if (isNaN(amountValue)) {
    resultP.textContent = "⚠️ Please enter a valid number!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  // Convert based on chosen unit
  if (unit === "celsius") {
    celsius = amountValue;
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = celsius + 273.15;
  } else if (unit === "fahrenheit") {
    fahrenheit = amountValue;
    celsius = ((fahrenheit - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else if (unit === "kelvin") {
    kelvin = amountValue;
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  // Show result
  resultP.innerHTML = `
    <strong>Converted Values:</strong><br>
    Celsius: ${celsius.toFixed(2)}°C<br>
    Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>
    Kelvin: ${kelvin.toFixed(2)}K
  `;
});
