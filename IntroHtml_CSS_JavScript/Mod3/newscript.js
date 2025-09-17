function addTask() {
  //To convert celsius to farenheit
  //(CEL * 9/5) + 32
  var c = document.getElementById("taskInput").value;

  const task = input.value.trim();

  if (task !== "") {
    const ul = document.getElementById("todoList");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(span);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.onclick = () => removeTask(li);

    // Append buttons and text to the list item
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    // Append list item to the list
    ul.appendChild(li);
    // Clear the input field
    input.value = "";
  } else {
    alert("Please enter a valid task.");
  }
}
