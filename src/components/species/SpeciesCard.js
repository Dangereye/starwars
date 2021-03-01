import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { AiFillBug } from "react-icons/ai";
import Button from "../shared/Button";

const SpeciesCard = ({ species }) => {
  const id = species.url.match(/\d{1,2}/g);
  return (
    <div className="card small">
      <div className="icon icon-medium species">
        <AiFillBug />
      </div>
      <h3>{species.name}</h3>
      <span>{species.classification}</span>
      <Button
        iconEnd={<IoMdArrowRoundForward />}
        path={`/species/${id}`}
        css="btn-dark btn-medium"
        text="Details"
      />
    </div>
  );
};

export default SpeciesCard;
