import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import Button from "../shared/Button";
import PersonSpecies from "../shared/PersonSpecies";
import Icon from "../shared/Icon";

const PersonCard = ({ person }) => {
  const id = person.url.match(/\d{1,2}/g);
  return (
    <div className="card small">
      <Icon icon={person.gender} size="icon-medium" />
      <h3>{person.name}</h3>
      <PersonSpecies url={person.species[0]} />
      <Button
        iconEnd={<IoMdArrowRoundForward />}
        path={`/person/${id}`}
        css="btn-dark btn-medium"
        text="Details"
      />
    </div>
  );
};

export default PersonCard;
