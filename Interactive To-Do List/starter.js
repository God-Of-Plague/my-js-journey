function changeText() {
  const newText = document.getElementById("inputText").value;

  const paragraph = document.getElementById("paragraph");
  const addele = document.getElementById("hmm");
  const hi = document.createElement("li");

  hi.innerHTML = `${newText} <button onclick="remove(this)">-</button>`;
  addele.appendChild(hi);
}

function remove(button) {
  if (button && button.parentElement) {
    const todoItem = button.parentElement; 
    todoItem.remove(); 
  } else {
    console.error("Button or parent element not found!");
  }
}
