const container = document.getElementById("todo-container");
const paginationDiv = document.getElementById("pagination");
let limit = 25;
let currentPage = 1;

async function fetchTodos(page = 1) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
    const data = await res.json();
    displayTodos(data);
  } catch (err) {
    container.innerHTML = `<p>Error loading todos: ${err.message}</p>`;
  }
}

function displayTodos(todos) {
  container.innerHTML = "";
  todos.forEach(todo => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
      <hr />
    `;
    container.appendChild(div);
  });
}

function setupPagination(total = 200) {
  const totalPages = Math.ceil(total / limit);
  paginationDiv.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => {
      currentPage = i;
      fetchTodos(i);
    };
    if (i === currentPage) {
      btn.style.backgroundColor = "lightblue";
    }
    paginationDiv.appendChild(btn);
  }
}

fetchTodos(currentPage);
setupPagination(); 
