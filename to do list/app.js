const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

let tasks = [];

// Add a new task
addTaskButton.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
});

// Render tasks to the list
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = task;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";
    editButton.addEventListener("click", () => editTask(index));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", () => deleteTask(index));

    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Edit a task
function editTask(index) {
  const newTask = prompt("Edit your task:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
