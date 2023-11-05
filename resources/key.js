// Get the modal
var modal = document.getElementById("myModal");
const correctAnswer = "TCP/IP";

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("top_drawer");
var captionText = document.getElementById("use_key");

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
      navigateToDrawer(); // Call the navigation function
    } else {
      resultMessage.textContent = "Sorry, that's not the correct answer. Try again.";
    }
  });

  function navigateToDrawer() {
    // You can add the logic here to navigate to the "left_drawer" page
    // For example, you can use window.location.href to redirect to the desired page
    window.location.href = "wall1_left_drawer.html";
  }
}

img.onclick = function () {
  modal.style.display = "block";
  captionText.innerHTML =
    "Three letters stand guard in the digital domain, Preserving secrets, security their reign. Confidentiality, integrity, and availability, they say, Together they form a fort that keeps threats at bay. What am I, this digital protector, do you dare to say?";
  // Call the function to create the input box
  createInputBox();
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
