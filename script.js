// Select the input, button, and display elements
const inputField = document.getElementById('userInput');
const submitButton = document.getElementById('btnSubmit');
const displayText = document.getElementById('displayText');

// Function to handle submission
function handleSubmit() {
  // Get the value of the input field
  const inputValue = inputField.value;

  // Display the value in the paragraph
  displayText.textContent = `You entered: ${inputValue}`;

  // Optional: Log the value to the console
  console.log(`User Input: ${inputValue}`);
}

// Add an event listener to the button for click event
submitButton.addEventListener('click', handleSubmit);

// Add an event listener to the input field for the Enter key
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSubmit();
  }
});
