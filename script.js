function displayMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var displayArea = document.getElementById("displayArea");
  displayArea.innerHTML = `Name: ${name}<br>Email: ${email}<br>Message: ${message}`;
}
