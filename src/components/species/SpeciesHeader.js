import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { AiFillBug } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import PersonHomeWorld from "../people/PersonHomeWorld";
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
        <div className="icon species">
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
          <p>Classification: {classification}</p>
          <p>Designation: {designation}</p>
          <h4>Appearance</h4>
          <p>Hair colors: {hairColors}</p>
          <p>Skin colors: {skinColors}</p>
          <p>Eye colors: {eyeColors}</p>
          <p>
            Average height: {avgHeight}
            {avgHeight !== "n/a" ? "cm" : ""}
          </p>
          <h4>Average lifespan</h4>
          <p>
            {" "}
            {avgLifespan}
            {avgLifespan === "unknown"
              ? ""
              : avgLifespan === "indefinite"
              ? ""
              : " yrs"}
          </p>
          <h4>Language</h4>
          <p>{language}</p>
          <PersonHomeWorld url={homeWorld} />
        </div>
      </div>
    </header>
  );
};

export default PlanetHeader;
