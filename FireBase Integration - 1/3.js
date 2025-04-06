const firebaseURL = `https://realtime-database-c8d75-default-rtdb.firebaseio.com/users`;

const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");
const message = document.getElementById("message");

const editSection = document.getElementById("editSection");
const editName = document.getElementById("editName");
const editEmail = document.getElementById("editEmail");
const saveEdit = document.getElementById("saveEdit");

let currentEditKey = null;

userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    const res = await fetch(`${firebaseURL}.json`, {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) throw new Error("Failed to add user.");
    message.innerText = "User added successfully!";
    userForm.reset();
    fetchUsers();
  } catch (err) {
    message.innerText = err.message;
  }
});

async function fetchUsers() {
  try {
    const res = await fetch(`${firebaseURL}.json`);
    const data = await res.json();
    userTable.innerHTML = "";

    for (let key in data) {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${data[key].name}</td>
        <td>${data[key].email}</td>
        <td><button onclick="editUser('${key}', '${data[key].name}', '${data[key].email}')">Edit</button></td>
      `;

      userTable.appendChild(tr);
    }
  } catch (err) {
    message.innerText = "Error fetching users.";
  }
}

window.editUser = function (key, name, email) {
  currentEditKey = key;
  editName.value = name;
  editEmail.value = email;
  editSection.style.display = "block";
};

saveEdit.addEventListener("click", async () => {
  const updatedName = editName.value;
  const updatedEmail = editEmail.value;

  try {
    const res = await fetch(`${firebaseURL}/${currentEditKey}.json`, {
      method: "PATCH",
      body: JSON.stringify({ name: updatedName, email: updatedEmail }),
      headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) throw new Error("Update failed.");
    message.innerText = "User updated successfully!";
    editSection.style.display = "none";
    fetchUsers();
  } catch (err) {
    message.innerText = err.message;
  }
});

fetchUsers();
