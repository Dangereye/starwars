import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { GiRobotGolem } from "react-icons/gi";
import { RiGenderlessLine } from "react-icons/ri";
import Button from "../shared/Button";
import PersonSpecies from "./PersonSpecies";

const PersonCard = ({ person }) => {
  const id = person.url.match(/\d{1,2}/g);
  return (
    <div className="card">
      <div className={`icon ${person.gender}`}>
        {person.gender === "male" ? (
          <IoMdMale />
        ) : person.gender === "female" ? (
          <IoMdFemale />
        ) : person.gender === "hermaphrodite" ? (
          <RiGenderlessLine />
        ) : (
          <GiRobotGolem />
        )}
      </div>
      <div className="info">
        <PersonSpecies url={person.species} />
        <h3>{person.name}</h3>
        <span className="year">{person.birth_year}</span>
        <Button
          iconEnd={<IoMdArrowRoundForward />}
          path={`/person/${id}`}
          css="btn-dark btn-medium"
          text="Details"
        />
      </div>
    </div>
  );
};

export default PersonCard;
