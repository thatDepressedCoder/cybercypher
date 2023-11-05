// Get the modal
var modal = document.getElementById("myModal");
const correctTrashAnswer = "Firewall";

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("trash");
var captionText = document.getElementById("inside_trash");

// Function to create and display the input box
function createInputBox() {
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
    // Get the user's input from the input field
    const userAnswer = inputBox.value.trim();

    // Check if the user's answer is correct
    if (userAnswer === correctTrashAnswer) {
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
