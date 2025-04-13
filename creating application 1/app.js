const apiUrl = "https://rickandmortyapi.com/api/character";
let currentPage = 1;

document.addEventListener("DOMContentLoaded", () => {
  fetchCharacters(currentPage);

  document.getElementById("next-btn").addEventListener("click", () => {
    currentPage++;
    fetchCharacters(currentPage);
  });

  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      fetchCharacters(currentPage);
    }
  });

  setInterval(updateClock, 1000);
});

function fetchCharacters(page) {
  fetch(`${apiUrl}?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      displayCharacters(data.results);
      document.getElementById("prev-btn").disabled = !data.info.prev;
      document.getElementById("next-btn").disabled = !data.info.next;
    });
}

function displayCharacters(characters) {
  const gallery = document.getElementById("character-gallery");
  gallery.innerHTML = "";
  characters.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("character-card");
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>${character.species}</p>
      <p>Status: ${character.status}</p>
      <a href="character-detail.html?id=${character.id}">View Details</a>
    `;
    gallery.appendChild(card);
  });
}

function updateClock() {
  const clockElement = document.getElementById("clock");
  const currentDate = new Date();
  const timeString = currentDate.toLocaleTimeString();
  const dayString = currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  clockElement.textContent = `${timeString} ${dayString}`;
}
