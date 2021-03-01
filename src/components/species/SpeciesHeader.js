import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { AiFillBug } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import HomeWorld from "../shared/HomeWorld";
import DetailsGroup from "../shared/DetailsGroup";
import CommaSeparatedNumber from "../shared/CommaSeparatedNumber";
const PlanetHeader = ({
  movies,
  people,
  name,
  classification,
  designation,
  eyeColors,
  hairColors,
  skinColors,
  homeWorld,
  language,
  avgHeight,
  avgLifespan,
}) => {
  return (
    <header>
      <div className="container">
        <div className="icon icon-large species">
          <AiFillBug />
        </div>
        <div className="text">
          <h1>{name}</h1>
          <div className="stats">
            <div>
              <MdLocalMovies />
              <span>{movies}</span>
            </div>
            <div>
              <IoPeopleSharp />
              <span>{people}</span>
            </div>
          </div>
          <h4>Categories</h4>
          <div className="details">
            <DetailsGroup name="Class" value={classification} />
            <DetailsGroup name="Designation" value={designation} />
          </div>
          <h4>Appearance</h4>
          <div className="details">
            <DetailsGroup name="Hair Colour(s)" value={hairColors} />
            <DetailsGroup name="Skin Colour(s)" value={skinColors} />
            <DetailsGroup name="Eye Colour(s)" value={eyeColors} />
            <DetailsGroup
              name="Avg height"
              value={<CommaSeparatedNumber number={avgHeight} unit="cm" />}
            />
          </div>
          <h4>Average lifespan</h4>
          <span className="value">
            <CommaSeparatedNumber number={avgLifespan} unit="yrs" />
          </span>
          <h4>Language</h4>
          <span className="value">{language}</span>
          {homeWorld !== null && <HomeWorld url={homeWorld} />}
        </div>
      </div>
    </header>
  );
};

export default PlanetHeader;
