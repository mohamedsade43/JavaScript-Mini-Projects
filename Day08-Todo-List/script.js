// DOM elements
let inputTask = document.querySelector("#todo");
let btn = document.querySelector("#addTask");
let todoList = document.querySelector("#todoList");
let taskCount = document.querySelector("#taskCount");
let clearAllBtn = document.querySelector("#clearAll");

// Update task count
function updateCount(){
  taskCount.textContent = todoList.children.length
}

// Add task
btn.addEventListener("click", function () {
  let inputValue = inputTask.value.trim();
  if (inputValue === "") return alert("Please enter a task!");

  // Create list item
  let newTask = document.createElement("li");
  newTask.innerHTML = `
    ${inputValue}
    <button class="delete-btn">
      <i class="fa-solid fa-trash"></i>
    </button>
  `;

  // Append to list
  todoList.appendChild(newTask);

  // Clear input
  inputTask.value = "";

  // Update count
  updateCount();

  // Delete button event
  newTask.querySelector(".delete-btn").addEventListener("click", function () {
    newTask.remove();
    updateCount();
  });
});

// Clear all tasks
clearAllBtn.addEventListener("click",function(){
  todoList.innerHTML = "";
  updateCount();
})


