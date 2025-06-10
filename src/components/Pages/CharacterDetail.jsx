import { Link, useParams } from "react-router";
function CharacterDetail({ characters }) {
  const { nameCharacter } = useParams();
  const characterFound = characters.find(
    (eachCharacter) => eachCharacter.name === nameCharacter
  );
  const { name, alive, species, actor, house } = characterFound;

  return (
    <>
      <h2>Details of {characterFound.name}</h2>
      <div className="detail">
        <img
          className="characterImage"
          src={
            characterFound.image ||
            "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Missing+Image"
          }
          alt={characterFound.name || "Character"}
        />
        <div className="detailData">
          <dl>
            <dt>Name:{characterFound.name}</dt>
          </dl>
          <dl>
            <dt>Status:{characterFound.alive}</dt>
          </dl>
          <dl>
            <dt>Species:{characterFound.species}</dt>
          </dl>
          <dl>
            <dt>Actor:{characterFound.actor}</dt>
          </dl>
          <dl>
            <dt>House:{characterFound.house}</dt>
          </dl>
        </div>
      </div>
      <div>
        <Link to="/" className="btn link">
          Return
        </Link>
      </div>
    </>
  );
}

export default CharacterDetail;
