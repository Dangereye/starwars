import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { GiTank } from "react-icons/gi";
import Button from "../shared/Button";

const VehicleCard = ({ vehicle }) => {
  const id = vehicle.url.match(/\d{1,2}/g);
  return (
    <div className="card small">
      <div className="icon icon-medium vehicle">
        <GiTank />
      </div>
      <h3>{vehicle.name}</h3>
      <span>{vehicle.model}</span>
      <Button
        iconEnd={<IoMdArrowRoundForward />}
        path={`/vehicle/${id}`}
        css="btn-dark btn-medium"
        text="Details"
      />
    </div>
  );
};

export default VehicleCard;
