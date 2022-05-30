let password = document.getElementById("password") 
let confirmPassword = document.getElementById("confirmPassword") 
let reminder = document.getElementById("reminder") 


password.addEventListener("input", function (event) {
  
  if (confirmPassword.value === password.value) {
    //password.setCustomValidity("");
    reminder.innerText="Passwords match."
    document.getElementById("submit").disabled = false;
    password.style.borderColor="green";
    confirmPassword.style.borderColor="green";
    
  } else {
    //password.setCustomValidity("Passwords do not match");
    reminder.innerText="Passwords do not match."
    document.getElementById("submit").disabled = true;
    password.style.borderColor="red";
    confirmPassword.style.borderColor="red";
  }
});

confirmPassword.addEventListener("input", function (event) {
  
  if (confirmPassword.value === password.value) {
    //confirmPassword.setCustomValidity("");
    reminder.innerText="Passwords match."
    document.getElementById("submit").disabled = false;
    password.style.borderColor="green";
    confirmPassword.style.borderColor="green";
    
  } else {
    //confirmPassword.setCustomValidity("Passwords do not match");
    reminder.innerText="Passwords do not match."
    document.getElementById("submit").disabled = true;
    password.style.borderColor="red";
    confirmPassword.style.borderColor="red";
  }
});                          
       