import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { GiTank } from "react-icons/gi";
import Button from "../shared/Button";

const VehicleCard = ({ vehicle }) => {
  const id = vehicle.url.match(/\d{1,2}/g);
  return (
    <div className="card">
      <div className="icon vehicle">
        <GiTank />
      </div>
      <div className="info">
        <h4>{vehicle.model}</h4>
        <h3>{vehicle.name}</h3>
        <span>
          {vehicle.cost_in_credits !== "unknown"
            ? parseInt(vehicle.cost_in_credits).toLocaleString("en")
            : "unknown"}
          {vehicle.cost_in_credits !== "unknown" ? "gc" : ""}
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

export default VehicleCard;
