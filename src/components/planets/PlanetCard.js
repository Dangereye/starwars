import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoPlanetSharp } from "react-icons/io5";
import Button from "../shared/Button";

const PlanetCard = ({ planet }) => {
  const id = planet.url.match(/\d{1,2}/g);
  return (
    <div className="card small">
      <div className="icon icon-medium planet">
        <IoPlanetSharp />
      </div>
      <h3>{planet.name}</h3>
      <span>{planet.climate}</span>
      <Button
        iconEnd={<IoMdArrowRoundForward />}
        path={`/planet/${id}`}
        css="btn-dark btn-medium"
        text="Details"
      />
    </div>
  );
};

export default PlanetCard;
