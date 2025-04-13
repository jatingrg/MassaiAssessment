document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get("id");
    if (characterId) {
      fetchCharacterDetail(characterId);
    }
  });
  
  function fetchCharacterDetail(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((character) => {
        displayCharacterDetail(character);
      });
  }
  
  function displayCharacterDetail(character) {
    const detailSection = document.getElementById("character-detail");
    detailSection.innerHTML = `
      <div class="character-detail">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p><strong>Status:</strong> ${character.status}</p>
        <p><strong>Species:</strong> ${character.species}</p>
        <p><strong>Type:</strong> ${character.type || "N/A"}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Origin:</strong> ${character.origin.name}</p>
        <p><strong>Location:</strong> ${character.location.name}</p>
        <p><strong>Episodes:</strong> ${character.episode.length}</p>
      </div>
    `;
  }
  