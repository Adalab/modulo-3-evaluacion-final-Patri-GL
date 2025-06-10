function fetchCharacters() {
  return fetch(`https://hp-api.onrender.com/api/characters/`).then((res) =>
    res.json()
  );
}

export default fetchCharacters;
