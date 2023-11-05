// Get the modal
var modal = document.getElementById("myModal");
const correctAnswer = "Threat, Vulnerability, Risk";

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("computer_monitor");
var captionText = document.getElementById("view_monitor");

// Function to create and display the input box
function createInputBox() {
  // Check if the input box already exists
  if (modal.querySelector("input[type='text']")) {
    return; // Input box already exists, so don't create it again
  }

  // Create an input element
  var inputBox = document.createElement("input");
  inputBox.type = "text";
  inputBox.placeholder = "Enter your answer";

  // Create a "Check" button
  var checkButton = document.createElement("button");
  checkButton.textContent = "Check";

  // Create a result message element
  var resultMessage = document.createElement("p");

  // Append the input box, check button, and result message to the modal
  modal.appendChild(inputBox);
  modal.appendChild(checkButton);
  modal.appendChild(resultMessage);

  // Add an event listener to the "Check" button
  checkButton.addEventListener("click", function () {
    // Get the user's input from the input field and convert it to lowercase
    const userAnswer = inputBox.value.trim().toLowerCase();

    // Convert the correct answer to lowercase
    const correctAnswerLower = correctAnswer.toLowerCase();

    // Check if the user's answer is correct (case-insensitive)
    if (userAnswer === correctAnswerLower) {
      resultMessage.textContent = "Correct! You guessed the answer!";
    } else {
      resultMessage.textContent = "Sorry, that's not the correct answer. Try again.";
    }
  });
}

img.onclick = function () {
  modal.style.display = "block";
  captionText.innerHTML =
"I am the trio of digital woes, In security realms, my presence grows. First, the potential harm looming near, Second, the weakness invites fear. Combined they birth the specter grim, Answer me this: what am I, on a whim?";
  // Call the function to create the input box
  createInputBox();
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
