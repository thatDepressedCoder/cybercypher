// Get the modal
var modal = document.getElementById("myModal");
const correctAnswer = "Firewall";

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("trash");
var captionText = document.getElementById("inside_trash");

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

  var giveUpButton = document.createElement("button");
  giveUpButton.textContent = "Give Up";

  var useHintButton = document.createElement("button");
  useHintButton.textContent = "Use a Hint";

  // Append the input box, check button, and result message to the modal
  modal.appendChild(inputBox);
  modal.appendChild(checkButton);
  modal.appendChild(resultMessage);
  modal.appendChild(giveUpButton);
  modal.appendChild(useHintButton);

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
    "I'm not made of brick or stone, Yet keep dangers far from home. Digital guard with an unseen wall, Holding back threats, big and small. Across networks, my vigil I keep, Answer me this: what am I, in this keep?";

  // Call the function to create the input box
  createInputBox();
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
