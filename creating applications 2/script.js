const apiUrl = 'https://rickandmortyapi.com/api/character';
let currentPage = 1;

function fetchCharacters(page = 1) {
  fetch(`${apiUrl}?page=${page}`)
    .then(response => response.json())
    .then(data => {
      displayCharacters(data.results);
      handlePagination(data.info);
    });
}

function displayCharacters(characters) {
  const grid = document.getElementById('character-grid');
  grid.innerHTML = '';

  characters.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('character-card');

    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p><strong>Species:</strong> ${character.species}</p>
      <p><strong>Status:</strong> ${character.status}</p>
      <a href="character-detail.html?id=${character.id}" target="_blank">View Details</a>
    `;
    
    grid.appendChild(card);
  });
}

function handlePagination(info) {
  const previousButton = document.getElementById('previous-button');
  const nextButton = document.getElementById('next-button');

  if (info.prev === null) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }

  if (info.next === null) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function changePage(direction) {
  currentPage += direction;
  fetchCharacters(currentPage);
}

function updateClock() {
  const date = new Date();
  const formattedTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  document.getElementById('footer-clock').textContent = formattedTime;
}

function initialize() {
  fetchCharacters(currentPage);
  setInterval(updateClock, 1000);
}

window.onload = initialize;
