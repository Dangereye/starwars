import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import CommaSeparatedNumber from "../shared/CommaSeparatedNumber";
import DetailsGroup from "../shared/DetailsGroup";
import Icon from "../shared/Icon";
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
        <Icon icon="vehicle" size="icon-large" />
        <div className="text">
          <h2 className="header-title">{name}</h2>
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
          <div className="header-subtitle">Type</div>
          <div className="details">
            <DetailsGroup name="Class" value={classification} />
            <DetailsGroup name="Model" value={model} />
            <DetailsGroup name="Manufacturer" value={manufacturer} />
          </div>
          <div className="header-subtitle">Engine</div>
          <div className="details">
            <DetailsGroup
              name="Max speed"
              value={<CommaSeparatedNumber number={speed} />}
            />
          </div>
          <div className="header-subtitle">Capacity</div>
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
          <div className="header-subtitle">Cost</div>
          <CommaSeparatedNumber number={cost} credits={true} />
        </div>
      </div>
    </header>
  );
};

export default VehicleHeader;
