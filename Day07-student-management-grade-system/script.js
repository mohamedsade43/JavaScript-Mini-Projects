let students = [];

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");
const addBtn = document.getElementById("addBtn");
const avgBtn = document.getElementById("avgBtn");
const searchInput = document.getElementById("searchInput");
const sortBtn = document.getElementById("sortBtn");
const tableBody = document.querySelector("#studentTable tbody");
const averageOutput = document.getElementById("averageOutput");

let isSorted = false;

// Add student
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const age = Number(ageInput.value);
  const grade = Number(gradeInput.value);

  if (!name || !age || !grade) {
    alert("Please fill all fields!");
    return;
  }

  students.push({ name, age, grade });
  displayStudents(students);

  nameInput.value = "";
  ageInput.value = "";
  gradeInput.value = "";
});

// Display students
function displayStudents(list) {
  tableBody.innerHTML = "";

  list.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td><button class="deleteBtn" data-index="${index}">❌</button></td>
    `;
    tableBody.appendChild(row);
  });

  document.querySelectorAll(".deleteBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      students.splice(index, 1);
      displayStudents(students);
    });
  });
}

// Average grade
avgBtn.addEventListener("click", () => {
  if (students.length === 0) {
    averageOutput.textContent = "No students yet!";
    return;
  }

  const total = students.reduce((sum, s) => sum + s.grade, 0);
  const avg = total / students.length;
  averageOutput.textContent = `📊 Average Grade: ${avg.toFixed(2)}`;
});

// Search students
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm)
  );
  displayStudents(filtered);
});

// Sort by grade
sortBtn.addEventListener("click", () => {
  isSorted = !isSorted;
  students.sort((a, b) => (isSorted ? a.grade - b.grade : b.grade - a.grade));
  sortBtn.textContent = isSorted ? "Sort by Grade ⬆️" : "Sort by Grade ⬇️";
  displayStudents(students);
});
