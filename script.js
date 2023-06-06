// Get the input element
const inputValue = document.getElementById("inputValue");

// Get the display element
const displayValue = document.getElementById("displayValue");

// Add an event listener to the input element
inputValue.addEventListener("input", function() {
  // Update the display element with the entered value
  displayValue.textContent = inputValue.value;
});
