let contacts = []; // Array to store contact objects

function addContact() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  if (name === "" || phone === "") {
    alert("Please fill in both fields!");
    return;
  }

  let contact = { name, phone }; // Create object
  contacts.push(contact); // Add to array

  displayContacts();

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}

function displayContacts() {
  let contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${contact.name} - ${contact.phone} 
      <button onclick="deleteContact(${index})">Delete</button>`;
    contactList.appendChild(li);
  });
}

function deleteContact(index) {
  contacts.splice(index, 1);
  displayContacts();
}
