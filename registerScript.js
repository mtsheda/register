document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('nameInput').value;
  var surname = document.getElementById('surnameInput').value;
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;
  var contact = document.getElementById("contactInput").value;
  var confirmPassword = document.getElementById("confirmPasswordInput").value;

  var storedData = localStorage.getItem("userData");
  var users = storedData ? JSON.parse(storedData) : [];

  const userData = {
    name: name,
    email: email,
    password: password,
    contact: contact,
    confirmPassword: confirmPassword
  };

  
  users.push(userData);


  localStorage.setItem("userData", JSON.stringify(users));

  function addDataToTable(userData) {
    var table = document.getElementById('dataTable');
    var newRow = table.insertRow();

    let nameCell = newRow.insertCell();
    nameCell.textContent = userData.name;

    let surnameCell = newRow.insertCell();
    surnameCell.textContent = userData.surname;

    let emailCell = newRow.insertCell();
    emailCell.textContent = userData.email;

    let passwordCell = newRow.insertCell();
    passwordCell.textContent = userData.password;

    let contactCell = newRow.insertCell();
    contactCell.textContent = userData.contact;

    let confirmPasswordCell = newRow.insertCell();
    confirmPasswordCell.textContent = userData.confirmPassword;
  }

  addDataToTable(userData);
  document.getElementById('myForm').reset();
});

function removeLastEntry() {
  let table = document.getElementById('dataTable');
  let counter = table.rows.length;
  if (counter > 1) {
    table.deleteRow(counter - 1);
  }
}