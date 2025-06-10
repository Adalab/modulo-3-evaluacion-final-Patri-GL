import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
//Layout
import Header from "./Layout/Header";
import Landing from "./Pages/Landing";
import CharacterDetail from "./Pages/CharacterDetail";
//Services
import fetchCharacters from "../services/fetchCharacters";
import ls from "../services/ls";

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
  {
    return (
      <>
        <Header />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Landing
                  handleInputFilter={handleInputFilter}
                  handleActorFilter={handleActorFilter}
                  handleSelectFilter={handleSelectFilter}
                  filterName={filterName}
                  filterActor={filterActor}
                  selectHouse={selectHouse}
                  handleReset={handleReset}
                  filteredCharacters={filteredCharacters}
                />
              }
            ></Route>
            <Route
              path="/characterDetail/:nameCharacter"
              element={<CharacterDetail characters={characters} />}
            ></Route>
          </Routes>
        </main>
      </>
    );
  }
}
export default App;
