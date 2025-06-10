import { useState, useEffect } from "react";
import fetchCharacters from "../../services/fetchCharacters";
import ls from "../../services/ls";
import Filters from "../Characters/Filters";
import CharactersList from "../Characters/CharactersList";

function Landing() {
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
      <Filters
        handleInputFilter={handleInputFilter}
        handleActorFilter={handleActorFilter}
        handleSelectFilter={handleSelectFilter}
        filterName={filterName}
        filterActor={filterActor}
        selectHouse={selectHouse}
        handleReset={handleReset}
      />
      <CharactersList filteredCharacters={filteredCharacters} />
    </div>
  );
}

export default Landing;
