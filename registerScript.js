  
  
  document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  

    var name = document.getElementById('nameInput').value;
    var surname = document.getElementById('surnameInput').value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var contact = document.getElementById("contactInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;

    

    const userData = {
      name: name,
      email: email,
      password: password,
      conatact:contact,
      confirmPassword:confirmPassword
    };
    
    localStorage.setItem("userData", JSON.stringify(userData));


  function addDataToTable(name,surname,email,password,contact,confirmPassword) {
    var table = document.getElementById('dataTable');
    var newRow = table.insertRow();
  
    let nameCell = newRow.insertCell();
    nameCell.textContent = name;
  
   var surnameCell = newRow.insertCell();
  surnameCell.textContent = surname;

  var emailCell = newRow.insertCell();
  emailCell.textContent = email;

  var passwordCell = newRow.insertCell();
  passwordCell.textContent = password;

  var contactCell = newRow.insertCell();
  contactCell.textContent = contact;

  var confirmPasswordCell = newRow.insertCell();
  confirmPasswordCell.textContent = confirmPassword;
  }
  

  
    
  

    addDataToTable(name,surname,email,password,contact,confirmPassword);
    document.getElementById('myForm').reset(); 
  });

  function removeLastEntry(){

    let table = document.getElementById('dataTable');
    let counter = table.rows.length;
    if (counter > 1){
        table.deleteRow(counter-1)
    }
};

  




