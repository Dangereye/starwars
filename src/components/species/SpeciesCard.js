import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { AiFillBug } from "react-icons/ai";
import Button from "../shared/Button";

const SpeciesCard = ({ species }) => {
  const id = species.url.match(/\d{1,2}/g);
  return (
    <div className="card">
      <div className="icon species">
        <AiFillBug />
      </div>
      <div className="info">
        <h4>{species.classification}</h4>
        <h3>{species.name}</h3>
        <span>{species.language}</span>
        <Button
          iconEnd={<IoMdArrowRoundForward />}
          path={`/species/${id}`}
          css="btn-dark btn-medium"
          text="Details"
        />
      </div>
    </div>
  );
};

export default SpeciesCard;
