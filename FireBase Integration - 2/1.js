const firebaseURL = `https://library-managmentsystem-bb919-default-rtdb.firebaseio.com/`;

const booksTable = document.getElementById("booksTable");
const membersTable = document.getElementById("membersTable");
const filters = JSON.parse(localStorage.getItem("filters")) || { genre: "", available: "", sortBy: "title", order: "asc" };
const pagination = JSON.parse(localStorage.getItem("pagination")) || { page: 1, limit: 5 };

function saveState() {
  localStorage.setItem("filters", JSON.stringify(filters));
  localStorage.setItem("pagination", JSON.stringify(pagination));
}

async function fetchData(type) {
  try {
    const res = await fetch(`${firebaseURL}/${type}.json`);
    const data = await res.json();
    return Object.entries(data).map(([id, item]) => ({ id, ...item }));
  } catch (err) {
    alert("Error fetching data: " + err.message);
    return [];
  }
}

async function displayBooks() {
  let books = await fetchData("books");
  if (filters.genre) books = books.filter(b => b.genre === filters.genre);
  if (filters.available !== "") books = books.filter(b => b.available === (filters.available === "true"));
  books.sort((a, b) => {
    const valA = a[filters.sortBy];
    const valB = b[filters.sortBy];
    if (filters.order === "asc") return valA > valB ? 1 : -1;
    else return valA < valB ? 1 : -1;
  });
  const start = (pagination.page - 1) * pagination.limit;
  const paginated = books.slice(start, start + pagination.limit);
  booksTable.innerHTML = paginated.map(book => `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td>${book.publishedYear}</td>
      <td>${book.available ? "Available" : "Not Available"}</td>
      <td>
        <button onclick="editBook('${book.id}')">Edit</button>
        <button onclick="deleteItem('books', '${book.id}')">Delete</button>
      </td>
    </tr>
  `).join("");
}

async function displayMembers() {
  let members = await fetchData("members");
  members = members
    .filter(m => filters.active === undefined || m.active === filters.active)
    .filter(m => !filters.membershipDate || new Date(m.membershipDate) >= new Date(filters.membershipDate));
  members.sort((a, b) => {
    const valA = a[filters.sortBy];
    const valB = b[filters.sortBy];
    return filters.order === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });
  const start = (pagination.page - 1) * pagination.limit;
  const paginated = members.slice(start, start + pagination.limit);
  membersTable.innerHTML = paginated.map(member => `
    <tr>
      <td>${member.name}</td>
      <td>${member.membershipDate}</td>
      <td>${member.active ? "Active" : "Inactive"}</td>
      <td>
        <button onclick="editMember('${member.id}')">Edit</button>
        <button onclick="deleteItem('members', '${member.id}')">Delete</button>
      </td>
    </tr>
  `).join("");
}

async function addItem(type, item) {
  try {
    const res = await fetch(`${firebaseURL}/${type}.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error("Add failed");
    alert(`${type.slice(0, -1)} added successfully`);
    refresh();
  } catch (err) {
    alert("Error: " + err.message);
  }
}

async function updateItem(type, id, data) {
  try {
    await fetch(`${firebaseURL}/${type}/${id}.json`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Updated successfully");
    refresh();
  } catch (err) {
    alert("Update failed: " + err.message);
  }
}

async function deleteItem(type, id) {
  const confirmDel = confirm("Are you sure you want to delete?");
  if (!confirmDel) return;
  try {
    await fetch(`${firebaseURL}/${type}/${id}.json`, { method: "DELETE" });
    alert("Deleted successfully");
    refresh();
  } catch (err) {
    alert("Delete failed: " + err.message);
  }
}

function refresh() {
  saveState();
  displayBooks();
  displayMembers();
}

function nextPage() {
  pagination.page++;
  refresh();
}

function prevPage() {
  if (pagination.page > 1) pagination.page--;
  refresh();
}

function setLimit(limit) {
  pagination.limit = limit;
  pagination.page = 1;
  refresh();
}

refresh();
