function Filters(props) {
  return (
    <form className="form" onSubmit={(ev) => ev.preventDefault()}>
      <label htmlFor="name">Search for a character:</label>
      <input
        onInput={props.handleInputFilter}
        value={props.filterName}
        type="text"
        name="name"
        id="name"
      />
      <label htmlFor="actor">Search by actor:</label>
      <input
        onInput={props.handleActorFilter}
        value={props.filterActor}
        type="text"
        name="actor"
        id="actor"
      />
      <label htmlFor="house">Select a house:</label>
      <select
        onChange={props.handleSelectFilter}
        value={props.selectHouse}
        name="house"
        id="house"
      >
        <option value="">All houses</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
      <button className="resetBtn" type="button" onClick={props.handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Filters;
