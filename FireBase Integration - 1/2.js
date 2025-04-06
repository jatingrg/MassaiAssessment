
const firebaseURL = `https://realtime-database-c8d75-default-rtdb.firebaseio.com/users.json`;

const form = document.getElementById("userForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    messageDiv.textContent = "Please fill in both fields.";
    messageDiv.style.color = "red";
    return;
  }

  const userData = { name, email };

  try {
    const response = await fetch(firebaseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Failed to add user");

    form.reset();
    messageDiv.textContent = "User added successfully!";
    messageDiv.style.color = "green";
  } catch (error) {
    messageDiv.textContent = `Error: ${error.message}`;
    messageDiv.style.color = "red";
  }
});
