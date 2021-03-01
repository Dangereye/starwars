import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { RiSpaceShipFill } from "react-icons/ri";
import { GiTank } from "react-icons/gi";
import PersonSpecies from "../shared/PersonSpecies";
import HomeWorld from "../shared/HomeWorld";
import BgImage from "../../images/people.jpg";
import GenderIcon from "../shared/GenderIcon";
import CommaSeparatedNumber from "../shared/CommaSeparatedNumber";
import DetailsGroup from "../shared/DetailsGroup";
const PersonHeader = ({
  homeWorld,
  name,
  gender,
  hairColor,
  eyeColor,
  skinColor,
  height,
  mass,
  birthYear,
  species,
  movies,
  starships,
  vehicles,
}) => {
  return (
    <header style={{ background: `url(${BgImage})` }}>
      <div className="container">
        <GenderIcon gender={gender} size="icon-large" />
        <div className="text">
          <h1>{name}</h1>
          <div className="stats">
            <div>
              <MdLocalMovies />
              <span className="value">{movies}</span>
            </div>
            <div>
              <RiSpaceShipFill />
              <span className="value">{starships}</span>
            </div>
            <div>
              <GiTank />
              <span className="value">{vehicles}</span>
            </div>
          </div>
          <h4>Species</h4>
          <PersonSpecies url={species[0]} link={true} />
          <h4>Appearance</h4>
          <div className="details">
            <DetailsGroup
              name="Height"
              value={<CommaSeparatedNumber number={height} unit="cm" />}
            />
            <DetailsGroup
              name="Weight"
              value={<CommaSeparatedNumber number={mass} unit="kg" />}
            />
            <DetailsGroup name="Hair colour(s)" value={hairColor} />
            <DetailsGroup name="Eye colour(s)" value={eyeColor} />
            <DetailsGroup name="Skin colour(s)" value={skinColor} />
          </div>
          <HomeWorld url={homeWorld} />
          <h4>Birth year</h4>
          <span className="value">
            {birthYear}{" "}
            {birthYear !== "unknown" && "(Years before the battle of Yavin)"}
          </span>
        </div>
      </div>
    </header>
  );
};

export default PersonHeader;
