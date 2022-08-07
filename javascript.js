let password_field = document.getElementById("field_password");
console.log(password_field);

document.getElementById("password-message").style.display = "none";

// When the user clicks on the password field, show the message box
password_field.onfocus = function(){
    document.getElementById("password-message").style.display = "block";
}
  
  // When the user clicks outside of the password field, hide the message box
  password_field.onblur = function() {
    document.getElementById("password-message").style.display = "none";
  }