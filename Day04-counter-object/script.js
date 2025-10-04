
//dom

const btnAdd = document.getElementById("add");
const btnSub = document.getElementById("sub");
const btnReset = document.getElementById("reset");
const result = document.getElementById("result");


//objects

const count = {
  value: 0,
  add: function() {
    this.value++;
  },
  subtract: function() {
    this.value--;
  },
  reset: function() {
    this.value = 0;
  } 
}


// fucntions 

function add() {
  count.add();
  result.innerText = count.value;
}


// subtract

function subtract() {
  count.subtract();
  result.innerText = count.value;
}

//reset

function reset() {
  count.reset();
  result.innerText = count.value;
}

//event listeners
btnAdd.addEventListener("click", add);

btnSub.addEventListener("click", subtract);


btnReset.addEventListener("click", reset);
 
