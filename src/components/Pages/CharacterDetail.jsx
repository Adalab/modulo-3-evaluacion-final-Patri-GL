import { Link, useParams } from "react-router";

function CharacterDetail({ characters }) {
  const { nameCharacter } = useParams();
  const characterFound = characters.find((c) => c.name === nameCharacter);

  if (!characterFound) {
    return <p className="noResults">This character does not exist</p>;
  }
  return (
    <>
      <h2>Details of {characterFound.name}</h2>
      <Link to="/" className="btn link">
        Return
      </Link>
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
            <dt>
              Status:{characterFound.alive ? "Alive" : "Deceased"}
              {characterFound.status && ` (${characterFound.status})`}
            </dt>
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
      <div></div>
    </>
  );
}

export default CharacterDetail;
