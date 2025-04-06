const firebaseURL = `https://realtime-database-c8d75-default-rtdb.firebaseio.com/users`;
const form = document.getElementById("userForm");
const messageDiv = document.getElementById("message");
const userTable = document.getElementById("userTable");
const editSection = document.getElementById("editSection");
const editName = document.getElementById("editName");
const editEmail = document.getElementById("editEmail");
const saveEditBtn = document.getElementById("saveEdit");

let editingKey = null;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  try {
    const res = await fetch(`${firebaseURL}.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (!res.ok) throw new Error("Failed to add user");

    showMessage("User added successfully!", "green");
    form.reset();
    fetchUsers();
  } catch (err) {
    showMessage("Error adding user: " + err.message, "red");
  }
});

async function fetchUsers() {
  try {
    const res = await fetch(`${firebaseURL}.json`);
    const data = await res.json();

    userTable.innerHTML = "";
    for (let key in data) {
      const tr = document.createElement("tr");
      tr.id = `user-${key}`;
      tr.innerHTML = `
      <td>${data[key].name}</td>
      <td>${data[key].email}</td>
      <td>
        <button data-key="${key}" class="edit-btn">Edit</button>
        <button data-key="${key}" class="edit-btn">Delete</button>
      </td>
    `;
      userTable.appendChild(tr);
    }
  } catch (err) {
    showMessage("Error loading users: " + err.message, "red");
  }
}

window.editUser = function (key, name, email) {
  editingKey = key;
  editName.value = name;
  editEmail.value = email;
  editSection.style.display = "block";
};

saveEditBtn.addEventListener("click", async () => {
  const name = editName.value.trim();
  const email = editEmail.value.trim();

  try {
    const res = await fetch(`${firebaseURL}/${editingKey}.json`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (!res.ok) throw new Error("Failed to update user");

    showMessage("User updated!", "green");
    editSection.style.display = "none";
    editingKey = null;
    fetchUsers();
  } catch (err) {
    showMessage("Error updating user: " + err.message, "red");
  }
});

window.deleteUser = async function (key) {
  const confirmDelete = confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;

  try {
    const res = await fetch(`${firebaseURL}/${key}.json`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete");

    showMessage("User deleted!", "green");

    const row = document.getElementById(`user-${key}`);
    if (row) row.remove();
  } catch (err) {
    showMessage("Error deleting user: " + err.message, "red");
  }
};

function showMessage(msg, color) {
  messageDiv.textContent = msg;
  messageDiv.style.color = color;
  setTimeout(() => (messageDiv.textContent = ""), 3000);
}

fetchUsers();
