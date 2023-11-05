// Get the modal
var modal = document.getElementById("myModal");
const correctAnswer = "TCP/IP";

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("robot");
var captionText = document.getElementById("take_robot");

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
"In the realm where security reigns, I'm the shield against digital pains. I am a duo that stands as one,An extra layer when danger's begun. Hacking attempts may cause frustration, Tell me now, what is my designation?";
  // Call the function to create the input box
  createInputBox();
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
