function checkEligibility() {
  // Get user input
  var ageInput = document.getElementById("ageInput").value;
  // Convert input to a number
  var userAge = parseInt(ageInput);
  // Get the result element
  var resultElement = document.getElementById("result");

  // Check if the user is eligible to vote
  if (isNaN(userAge)) {
    resultElement.textContent = "Please enter a valid age.";
  } else if (userAge >= 18) {
    resultElement.textContent = "You are eligible to vote. Go ahead and cast your vote!";
  } else {
    resultElement.textContent = "Sorry, you are not eligible to vote. You must be 18 years or older.";
  }
}
