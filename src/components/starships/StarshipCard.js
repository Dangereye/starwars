import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiSpaceShipFill } from "react-icons/ri";
import Button from "../shared/Button";

const StarshipCard = ({ starship }) => {
  const id = starship.url.match(/\d{1,2}/g);
  return (
    <div className="card small">
      <div className="icon icon-medium starship">
        <RiSpaceShipFill />
      </div>
      <h3>{starship.name}</h3>
      <span>{starship.model}</span>
      <Button
        iconEnd={<IoMdArrowRoundForward />}
        path={`/starship/${id}`}
        css="btn-dark btn-medium"
        text="Details"
      />
    </div>
  );
};

export default StarshipCard;
