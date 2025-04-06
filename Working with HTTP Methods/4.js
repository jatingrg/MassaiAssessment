const API_URL = `https://67f0577f2a80b06b88979bce.mockapi.io/productsfetching/Todos`;
const taskList = document.getElementById("task-list");
const modal = document.getElementById("edit-modal");
const titleInput = document.getElementById("edit-title");
const statusInput = document.getElementById("edit-status");
const saveBtn = document.getElementById("save-btn");

let currentTaskId = null;

async function fetchTasks() {
  try {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    taskList.innerHTML = "";
    tasks.forEach(task => renderTask(task));
  } catch (err) {
    taskList.innerHTML = `<p>Error loading tasks: ${err.message}</p>`;
  }
}

function renderTask(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.innerHTML = `
    <div>
      <strong>${task.todoname}</strong> - ${task.tododescription}
    </div>
    <div>
      <button onclick="editTask('${task.id}', '${task.todoname}', '${task.tododescription}',)">Edit</button>
      <button onclick="deleteTask('${task.id}')">Delete</button>
    </div>
  `;
  taskList.appendChild(taskDiv);
}

function editTask(id, name, description) {
  currentTaskId = id;
  titleInput.value = name;
  modal.style.display = "flex";
}

saveBtn.addEventListener("click", async () => {
  const updatedTask = {
    todoname: titleInput.value,
  };

  try {
    await fetch(`${API_URL}/${currentTaskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    modal.style.display = "none";
    fetchTasks();
  } catch (err) {
    alert("Error updating task.");
  }
});

function closeModal() {
  modal.style.display = "none";
}

async function deleteTask(id) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) return;

  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  } catch (err) {
    alert("Error deleting task.");
  }
}

document.addEventListener("DOMContentLoaded", fetchTasks);
