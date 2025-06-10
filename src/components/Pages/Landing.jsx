import CharactersList from "../Characters/CharactersList";
import Filters from "../Characters/Filters";
function Landing(props) {
  return (
    <div>
      <Filters
        handleInputFilter={props.handleInputFilter}
        handleActorFilter={props.handleActorFilter}
        handleSelectFilter={props.handleSelectFilter}
        filterName={props.filterName}
        filterActor={props.filterActor}
        selectHouse={props.selectHouse}
        handleReset={props.handleReset}
      />
      <CharactersList filteredCharacters={props.filteredCharacters} />
    </div>
  );
}

export default Landing;
