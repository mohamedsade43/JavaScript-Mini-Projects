// DOM elements
const subject1 = document.querySelector("#subject1");
const subject2 = document.querySelector("#subject2");
const subject3 = document.querySelector("#subject3");
const subject4 = document.querySelector("#subject4");
const calculateBtn = document.querySelector("#calculate");
const resultP = document.querySelector("#result");

calculateBtn.addEventListener("click", function () {
  // Convert input values to numbers
  let subject1value = parseInt(subject1.value.trim());
  let subject2value = parseInt(subject2.value.trim());
  let subject3value = parseInt(subject3.value.trim());
  let subject4value = parseInt(subject4.value.trim());
 
  
  // Store them in an array
  const subjects = [subject1value, subject2value, subject3value, subject4value];

  // Check for invalid or empty inputs
  if (subjects.some(isNaN)) {
    resultP.innerHTML = "⚠️ Please enter all subject marks!";
    return;
  }
   // Check for range limits (0–100)
  if (subjects.some(mark => mark < 0 || mark > 100)) {
    resultP.innerHTML = "⚠️ Marks must be between 0 and 100 only!";
    return;
  }

  // Calculate total using reduce
  let total = subjects.reduce((sum, mark) => sum + mark, 0);

  // Average
  let average = total / subjects.length;

  // Find max and min
  let maxValue = Math.max(...subjects);
  let minValue = Math.min(...subjects);

  // Sort ascending
  let sortedMarks = [...subjects].sort((a, b) => a - b);

  // Display results
  resultP.innerHTML = `
    Total Marks: <b>${total}</b> <br>
    Average: <b>${average.toFixed(2)}%</b> <br>
    Highest Mark: <b>${maxValue}</b> <br>
    Lowest Mark: <b>${minValue}</b> <br>
    Sorted Marks: [${sortedMarks.join(", ")}]
  `;

  // Clear inputs
  subject1.value = "";
  subject2.value = "";
  subject3.value = "";
  subject4.value = "";
});
