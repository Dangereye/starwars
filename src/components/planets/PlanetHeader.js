import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import DetailsGroup from "../shared/DetailsGroup";
import CommaSeparatedNumber from "../shared/CommaSeparatedNumber";
import Icon from "../shared/Icon";
const PlanetHeader = ({
  climate,
  diameter,
  name,
  movies,
  people,
  gravity,
  orbitalPeriod,
  population,
  rotationalPeriod,
  surfaceWater,
  terrain,
}) => {
  return (
    <header>
      <div className="container">
        <Icon icon="planet" size="icon-large" />
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
          <h4>Population</h4>
          <CommaSeparatedNumber number={population} />
          <h4>Time</h4>
          <div className="details">
            <DetailsGroup
              name="Day"
              value={
                <CommaSeparatedNumber number={rotationalPeriod} unit="hrs" />
              }
            />
            <DetailsGroup
              name="Year"
              value={
                <CommaSeparatedNumber number={orbitalPeriod} unit=" days" />
              }
            />
          </div>
          <h4>Attributes</h4>
          <div className="details">
            <DetailsGroup
              name="Diameter"
              value={<CommaSeparatedNumber number={diameter} unit="km" />}
            />
            <DetailsGroup name="Gravity" value={gravity} />
            <DetailsGroup name="Climate" value={climate} />
            <DetailsGroup name="Terrain" value={terrain} />
            <DetailsGroup
              name="Surface water"
              value={surfaceWater}
              conditional={surfaceWater !== "unknown" && "%"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default PlanetHeader;
