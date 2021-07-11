import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import HomeWorld from "../shared/HomeWorld";
import DetailsGroup from "../shared/DetailsGroup";
import CommaSeparatedNumber from "../shared/CommaSeparatedNumber";
import Icon from "../shared/Icon";
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
        <Icon icon="species" size="icon-large" />
        <div className="text">
          <h2 className="header-title">{name}</h2>
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
          <div className="header-subtitle">Categories</div>
          <div className="details">
            <DetailsGroup name="Class" value={classification} />
            <DetailsGroup name="Designation" value={designation} />
          </div>
          <div className="header-subtitle">Appearance</div>
          <div className="details">
            <DetailsGroup name="Hair Colour(s)" value={hairColors} />
            <DetailsGroup name="Skin Colour(s)" value={skinColors} />
            <DetailsGroup name="Eye Colour(s)" value={eyeColors} />
            <DetailsGroup
              name="Avg height"
              value={<CommaSeparatedNumber number={avgHeight} unit="cm" />}
            />
          </div>
          <div className="header-subtitle">Average lifespan</div>
          <span className="value">
            <CommaSeparatedNumber number={avgLifespan} unit="yrs" />
          </span>
          <div className="header-subtitle">Language</div>
          <span className="value">{language}</span>
          {homeWorld !== null && <HomeWorld url={homeWorld} />}
        </div>
      </div>
    </header>
  );
};

export default PlanetHeader;
