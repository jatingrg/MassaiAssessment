const container = document.getElementById("todo-container");
const paginationDiv = document.getElementById("pagination");
let limit = 6;
let currentPage = 1;

async function fetchTodos(page = 1) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
    );
    const data = await res.json();
    displayTodos(data);
  } catch (err) {
    container.innerHTML = `<p>Error loading todos: ${err.message}</p>`;
  }
}

function displayTodos(users) {
  container.innerHTML = "";
  users.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${user.name}</h3>
      <h6>${user.username}</h6>
      <h6>${user.email}</h6>
      <h6>${user.address.street}</h6>
      <h6>${user.address.suite}</h6>
      <h6>${user.address.city}</h6>
      <h6>${user.address.zipcode}</h6>
       <h6>${user.address.geo.lat}</h6>
       <h6>${user.address.geo.lng}</h6>
       <h6>${user.phone}
      <h6>${user.website}</h6>
        <h6>${user.company.name}</h6>
        <h6>${user.company.catchParse}</h6>
        <h6>${user.company.bs}</h6>







                                                      <h6>${user.address.street}</h6>


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
