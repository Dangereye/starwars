import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import CommaSeparatedNumber from "../shared/CommaSeparatedNumber";
import DetailsGroup from "../shared/DetailsGroup";
import Icon from "../shared/Icon";
const StarshipHeader = ({
  name,
  movies,
  people,
  speed,
  cargoCapacity,
  consumables,
  cost,
  crew,
  hyperdrive,
  manufacturer,
  model,
  passengers,
  classification,
}) => {
  return (
    <header>
      <div className="container">
        <Icon icon="starship" size="icon-large" />
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
            <DetailsGroup name="manufacturer" value={manufacturer} />
          </div>

          <div className="header-subtitle">Drive</div>
          <div className="details">
            <DetailsGroup name="Hyperdrive rating" value={hyperdrive} />
            <DetailsGroup
              name="Max speed"
              value={<CommaSeparatedNumber number={speed} unit="mglt" />}
            />
          </div>

          <div className="header-subtitle">Hull</div>
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
            <DetailsGroup name="Consumable supply" value={consumables} />
          </div>
          <div className="header-subtitle">Cost</div>
          <CommaSeparatedNumber number={cost} credits={true} />
        </div>
      </div>
    </header>
  );
};

export default StarshipHeader;
