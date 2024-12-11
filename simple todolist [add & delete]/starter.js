function changeText() {
  // Get the value from the input field
  const newText = document.getElementById('inputText').value;
 

  // Get the paragraph element
  const paragraph = document.getElementById('paragraph');
  const addele = document.getElementById('hmm');
  const hi = document.createElement('li');
  
  // Add the new text and the remove button
  hi.innerHTML = `${newText} <button onclick="remove(this)">-</button>`;
  addele.appendChild(hi);
}

function remove(button) {
  // Ensure the button is valid and part of the DOM
  if (button && button.parentElement) {
      const todoItem = button.parentElement; // Get the parent element of the button
      todoItem.remove(); // Remove the <li> element
  } else {
      console.error("Button or parent element not found!");
  }
}
