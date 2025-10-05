 const btn = document.querySelector('#btnDisplay');
const numInput = document.querySelector('#number');
const tableBody = document.querySelector('#tableResult tbody');



btn.addEventListener('click', () => {
  const num = parseInt(numInput.value);
  tableBody.innerHTML = ""; // Clear old results

  if (isNaN(num)) {
    alert("Please enter a valid number!");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${num} x ${i}</td>
      <td>${num * i}</td>
    `;
    tableBody.appendChild(row);
  }
});