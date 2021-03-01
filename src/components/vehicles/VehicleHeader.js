import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { GiTank } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import CommaSeparatedNumber from "../shared/CommaSeparatedNumber";
import DetailsGroup from "../shared/DetailsGroup";
const VehicleHeader = ({
  name,
  movies,
  people,
  cargoCapacity,
  consumables,
  cost,
  crew,
  manufacturer,
  speed,
  model,
  passengers,
  classification,
}) => {
  return (
    <header>
      <div className="container">
        <div className="icon icon-large vehicle">
          <GiTank />
        </div>
        <div className="text">
          <h1>{name}</h1>
          <div className="stats">
            <div>
              <MdLocalMovies />
              <span>{movies}</span>
            </div>
            <div>
              <IoPeopleSharp />
              <span>{people}</span>
            </div>
          </div>
          <h4>Type</h4>
          <div className="details">
            <DetailsGroup name="Class" value={classification} />
            <DetailsGroup name="Model" value={model} />
            <DetailsGroup name="Manufacturer" value={manufacturer} />
          </div>
          <h4>Engine</h4>
          <div className="details">
            <DetailsGroup
              name="Max speed"
              value={<CommaSeparatedNumber number={speed} />}
            />
          </div>
          <h4>Capacity</h4>
          <div className="details">
            <DetailsGroup name="Crew" value={crew} />
            <DetailsGroup
              name="Cargo capacity"
              value={<CommaSeparatedNumber number={cargoCapacity} unit="kg" />}
            />
            <DetailsGroup
              name="Passengers"
              value={<CommaSeparatedNumber number={passengers} />}
            />
            <DetailsGroup name="Consumables supply" value={consumables} />
          </div>
          <h4>Cost</h4>
          <CommaSeparatedNumber number={cost} credits={true} />
        </div>
      </div>
    </header>
  );
};

export default VehicleHeader;
