// dom 

const addtask = document.querySelector("#addtask")
const deletetask = document.querySelector("#deletetask")
const updateTask = document.querySelector("#updateTask")
const newTask = document.querySelector("#newTask")
const main = document.querySelector("#main")



addtask.addEventListener("click",function(){
  //create new task 
  newTask.style.visibility = "visible";
  //create other lement

  newTask.innerHTML = "hello world"
  console.log(newTask)


})

deletetask.addEventListener("click",function(){
  newTask.style.visibility = "hidden";
})



updateTask.addEventListener("click",function(){
  newTask.style.visibility = "visible";
  
})