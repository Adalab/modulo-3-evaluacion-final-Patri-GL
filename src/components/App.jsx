import "../styles/App.scss";
import { useState, useEffect } from "react";
import ls from "../services/ls";
import fetchCharacters from "../services/fetchContacts";

function App() {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState("");
  const [filterActor, setFilterActor] = useState("");
  const [selectHouse, setSelectHouse] = useState("");

  useEffect(() => {
    if (characters.length === 0) {
      fetchCharacters().then((data) => {
        setCharacters(data);
        ls.set("characters", data);
      });
    }
  }, []);

  const handleInputFilter = (ev) => {
    setFilterName(ev.target.value);
  };
  const handleActorFilter = (ev) => {
    setFilterActor(ev.target.value);
  };
  const handleSelectFilter = (ev) => {
    setSelectHouse(ev.target.value);
  };

  const filteredCharacters = characters
    .filter((eachCharacter) =>
      (eachCharacter.name || "")
        .toLowerCase()
        .includes(filterName.trim().toLowerCase())
    )
    .filter((eachCharacter) =>
      (eachCharacter.actor || "")
        .toLowerCase()
        .includes(filterActor.trim().toLowerCase())
    )
    .filter(
      (eachCharacter) =>
        selectHouse === "" || (eachCharacter.house || "").includes(selectHouse)
    );

  const handleReset = () => {
    setFilterName("");
    setFilterActor("");
    setSelectHouse("");
  };
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
      </header>
      <main className="main">
        <form className="form" onSubmit={(ev) => ev.preventDefault()}>
          <label htmlFor="name">Search for a character:</label>
          <input
            onInput={handleInputFilter}
            value={filterName}
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="actor">Search by actor:</label>
          <input
            onInput={handleActorFilter}
            value={filterActor}
            type="text"
            name="actor"
            id="actor"
          />
          <label htmlFor="house">Select a house:</label>
          <select
            onChange={handleSelectFilter}
            value={selectHouse}
            name="house"
            id="house"
          >
            <option value="">All houses</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
          <button className="resetBtn" type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
        <ul className="list">
          {filteredCharacters.length === 0 ? (
            <li className="noResults">
              <p>No characters found matching your search criteria</p>
            </li>
          ) : (
            filteredCharacters.map((character, index) => (
              <li key={character.id || index} className="cardContainer">
                <figure className="card">
                  <img
                    className="characterImage"
                    src={
                      character.image ||
                      "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Missing+Image"
                    }
                    alt={character.name || "Character"}
                  />
                  <figcaption>
                    {character.name || "Unknown"} <br />
                    {character.species || "Unknown species"} <br />
                    {character.actor || "Unknown"}
                  </figcaption>
                </figure>
              </li>
            ))
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
