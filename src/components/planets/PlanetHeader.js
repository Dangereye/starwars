import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { IoPlanetSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
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
        <div className="icon planet">
          <IoPlanetSharp />
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
          <h4>Time</h4>
          <p>Day: {rotationalPeriod} hrs</p>
          <p>
            Year: {orbitalPeriod} {orbitalPeriod !== "unknown" ? "days" : ""}
          </p>
          <h4>Population</h4>
          <p>
            {population !== "unknown"
              ? parseInt(population).toLocaleString("en")
              : "unknown"}
          </p>
          <h4>Attributes</h4>
          <p>Diameter: {parseInt(diameter).toLocaleString("en")}km</p>
          <p>Gravity: {gravity}</p>
          <p>Climate: {climate}</p>
          <p>Terrain: {terrain}</p>
          <p>Surface water: {surfaceWater}%</p>
        </div>
      </div>
    </header>
  );
};

export default PlanetHeader;
