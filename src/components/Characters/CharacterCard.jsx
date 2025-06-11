import { Link } from "react-router";

function CharacterCard({ character, index }) {
  return (
    <Link className="cardContainer" to={"/characterDetail/" + character.name}>
      <li key={character.id || index}>
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
    </Link>
  );
}

export default CharacterCard;
