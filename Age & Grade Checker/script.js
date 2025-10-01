const ageInput = document.getElementById('age');
const scoreInput = document.getElementById('score');
const btn = document.getElementById('checkBtn');
const message = document.getElementById('message');

btn.addEventListener('click', function() {
  const age = parseInt(ageInput.value, 10);
  const score = parseFloat(scoreInput.value);

  if (Number.isNaN(age) || Number.isNaN(score)) {
    message.innerText = "Please enter valid numbers.";
    return;
  }

  // Age check
  const ageMsg = age >= 18 ? "You are an Adult." : "You are a Minor.";

  // Grade check
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 75) {
    grade = "B";
  } else if (score >= 60) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  message.innerText = `${ageMsg} Your grade is: ${grade}`;
});
