function validateUser(user) {
  let errors = [];

  if (typeof user.firstName !== "string" || user.firstName.trim().length === 0) {
    errors.push("First name is required");
  }

  if (typeof user.age !== "number" || user.age < 13) {
    errors.push("Age must be a number and at least 13");
  }

  if (typeof user.email !== "string" || !user.email.includes("@")) {
    errors.push("Valid email is required");
  }

  return errors;
}

function validateForm() {
  const userData = {
    firstName: document.querySelector("#firstName").value.trim(),
    lastName: document.querySelector("#lastName").value.trim(),
    email: document.querySelector("#email").value.trim(),
    age: Number(document.querySelector("#age").value),
    isActive: document.querySelector("#isActive").value === "true"
  };

  const errors = validateUser(userData);
  const resultDiv = document.querySelector("#result");

  if (errors.length > 0) {
    resultDiv.innerHTML = `<div class="error">Validation Errors:<br>${errors.join("<br>")}</div>`;
  } else {
    resultDiv.innerHTML = `<div class="success">✅ User data is valid!</div>`;
    console.log("User Data:", userData);
  }
}
