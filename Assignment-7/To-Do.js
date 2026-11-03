
function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    // Check if the task is empty
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = task + " ";

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Delete the task when clicked
    deleteButton.onclick = function () {
        li.remove();
    };

    // Add the button to the task
    li.appendChild(deleteButton);

    // Add the task to the list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    input.value = "";
    input.focus();
}
