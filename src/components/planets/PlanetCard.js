import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoPlanetSharp } from "react-icons/io5";
import Button from "../shared/Button";

const PlanetCard = ({ planet }) => {
  const id = planet.url.match(/\d{1,2}/g);
  return (
    <div className="card">
      <div className="icon planet">
        <IoPlanetSharp />
      </div>
      <div className="info">
        <h4>{planet.climate}</h4>
        <h3>{planet.name}</h3>
        <span>
          {planet.diameter !== "unknown"
            ? parseInt(planet.diameter).toLocaleString("en")
            : "unknown"}
          {planet.diameter !== "unknown" ? "km" : ""}
        </span>
        <Button
          iconEnd={<IoMdArrowRoundForward />}
          path={`/planet/${id}`}
          css="btn-dark btn-medium"
          text="Details"
        />
      </div>
    </div>
  );
};

export default PlanetCard;
