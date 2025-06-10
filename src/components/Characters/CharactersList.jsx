import CharacterCard from "./CharacterCard";

function CharactersList({ filteredCharacters }) {
  return (
    <>
      <ul className="list">
        {filteredCharacters.length === 0 ? (
          <li className="noResults">
            <p>No characters found matching your search criteria</p>
          </li>
        ) : (
          filteredCharacters.map((character, index) => (
            <CharacterCard character={character} index={index} />
          ))
        )}
      </ul>
    </>
  );
}

export default CharactersList;
