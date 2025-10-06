// Constructor Function (Template)
function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
  this.history = [];
}

// Shared methods using Prototype
BankAccount.prototype.deposit = function (amount) {
  if (amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }
  this.balance += amount;
  this.history.push(`Deposited $${amount}`);
  showMessage(`${this.owner} deposited $${amount}`);
  updateUI();
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    alert("Insufficient balance!");
    return;
  }
  this.balance -= amount;
  this.history.push(`Withdrew $${amount}`);
  showMessage(`${this.owner} withdrew $${amount}`);
  updateUI();
};

BankAccount.prototype.checkBalance = function () {
  showMessage(`Balance for ${this.owner}: $${this.balance}`);
  updateUI();
};

// 👇 Create Account
const myAccount = new BankAccount("Yusuf", 0);

// 💻 DOM Elements
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdraw");
const checkBtn = document.getElementById("check");
const balanceEl = document.getElementById("balance");
const historyEl = document.getElementById("history");

// 🧠 Event Listeners
depositBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  myAccount.deposit(amount);
  amountInput.value = "";
});

withdrawBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  myAccount.withdraw(amount);
  amountInput.value = "";
});

checkBtn.addEventListener("click", () => {
  myAccount.checkBalance();
});

// 📋 Helper Functions
function updateUI() {
  balanceEl.textContent = `Balance: $${myAccount.balance}`;
  historyEl.innerHTML = "";
  for (let record of myAccount.history) {
    const li = document.createElement("li");
    li.textContent = record;
    historyEl.appendChild(li);
  }
}

function showMessage(msg) {
  console.log(msg);
}
