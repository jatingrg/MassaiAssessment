const tableBody = document.querySelector("#userTable tbody");
const errorDiv = document.getElementById("error");

const firebaseURL = `https://realtime-database-c8d75-default-rtdb.firebaseio.com//users.json`;

async function fetchUsers() {
  try {
    const res = await fetch(firebaseURL);

    if (!res.ok) {
      throw new Error("Failed to fetch user data.");
    }

    const data = await res.json();

    tableBody.innerHTML = "";

    if (data) {
      Object.values(data).forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
        `;
        tableBody.appendChild(row);
      });
    } else {
      tableBody.innerHTML = "<tr><td colspan='2'>No users found.</td></tr>";
    }
  } catch (err) {
    errorDiv.textContent = `Error: ${err.message}`;
  }
}

document.addEventListener("DOMContentLoaded", fetchUsers);
