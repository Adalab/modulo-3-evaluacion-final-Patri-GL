import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faSkull,
  faPaw,
  faStaffSnake,
  faCrow,
  faCircleNotch,
  faOtter,
} from "@fortawesome/free-solid-svg-icons";

function CharacterDetail({ characters }) {
  const { nameCharacter } = useParams();
  const characterFound = characters.find((c) => c.name === nameCharacter);
  const HouseIcon = ({ house }) => {
    const icons = {
      Gryffindor: faPaw,
      Slytherin: faStaffSnake,
      Ravenclaw: faCrow,
      Hufflepuff: faOtter,
      default: faCircleNotch,
    };
    return <FontAwesomeIcon icon={icons[house] || icons.default} />;
  };

  if (!characterFound) {
    return <p className="noResults">This character does not exist</p>;
  }
  return (
    <>
      <h2>Details of {characterFound.name}</h2>
      <Link to="/" className="btn">
        Return
      </Link>
      <div className="detail">
        <div>
          <img
            className="characterImage"
            src={
              characterFound.image ||
              "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Missing+Image"
            }
            alt={characterFound.name || "Character"}
          />
        </div>
        <div className="detailData">
          <dl>
            <dt>Name: {characterFound.name}</dt>
          </dl>
          <dl>
            <dt>
              Status:{" "}
              {characterFound.alive ? (
                <>
                  <FontAwesomeIcon icon={faHeartPulse} />
                  Alive
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faSkull} /> Deceased
                </>
              )}
              {characterFound.status && ` (${characterFound.status})`}
            </dt>
          </dl>
          <dl>
            <dt>Species: {characterFound.species}</dt>
          </dl>
          <dl>
            <dt>Actor: {characterFound.actor}</dt>
          </dl>
          <dl>
            <dt>
              House: <HouseIcon house={characterFound.house} />
              {characterFound.house}
            </dt>
          </dl>
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
