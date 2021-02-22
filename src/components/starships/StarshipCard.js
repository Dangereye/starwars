import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiSpaceShipFill } from "react-icons/ri";
import Button from "../shared/Button";

const StarshipCard = ({ starship }) => {
  const id = starship.url.match(/\d{1,2}/g);
  return (
    <div className="card">
      <div className="icon starship">
        <RiSpaceShipFill />
      </div>
      <div className="info">
        <h4>{starship.model}</h4>
        <h3>{starship.name}</h3>
        <span>
          {starship.cost_in_credits !== "unknown"
            ? parseInt(starship.cost_in_credits).toLocaleString("en")
            : "unknown"}
          {starship.cost_in_credits !== "unknown" ? "gc" : ""}
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

export default StarshipCard;
