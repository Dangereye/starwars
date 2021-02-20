import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { IoPeopleSharp, IoPlanetSharp } from "react-icons/io5";
import { RiSpaceShipFill } from "react-icons/ri";
import { GiTank } from "react-icons/gi";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { RiGenderlessLine } from "react-icons/ri";
import { GiRobotGolem } from "react-icons/gi";
import PersonSpecies from "../PersonSpecies";
import PersonHomeWorld from "../PersonHomeWorld";
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
    <header id="person-header">
      <div className="container">
        <div className={`icon ${gender}`}>
          {gender === "male" ? (
            <IoMdMale />
          ) : gender === "female" ? (
            <IoMdFemale />
          ) : gender === "hermaphrodite" ? (
            <RiGenderlessLine />
          ) : (
            <GiRobotGolem />
          )}
        </div>
        <div className="text">
          <PersonSpecies url={species} />
          <h1>{name}</h1>
          <div className="stats">
            <div>
              <MdLocalMovies />
              <span>{movies}</span>
            </div>
            <div>
              <RiSpaceShipFill />
              <span>{starships}</span>
            </div>
            <div>
              <GiTank />
              <span>{vehicles}</span>
            </div>
          </div>
          <h4>Apperance</h4>
          <p>
            Height: {height}
            {height !== "unknown" ? "cm" : ""}
          </p>
          <p>
            Weight: {mass}
            {mass !== "unknown" ? "kg" : ""}
          </p>
          <p>Hair colour: {hairColor}</p>
          <p>Eye colour: {eyeColor}</p>
          <p>Skin colour: {skinColor}</p>
          <PersonHomeWorld url={homeWorld} />
          <h4>Birth year</h4>
          <p>
            {birthYear}{" "}
            {birthYear !== "unknown" ? "(Before the battle of Yavin)" : ""}
          </p>
        </div>
      </div>
    </header>
  );
};

export default PersonHeader;
