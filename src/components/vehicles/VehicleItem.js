import React from "react";
import useFetch from "../../hooks/useFetch";
import { GiTank } from "react-icons/gi";
import { ImSpinner9 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const VehicleItem = ({ url, path }) => {
  const { isLoading, error, data: vehicle } = useFetch(url);
  const id = url.match(/\d{1,2}/g);
  return (
    <Link className="list-item" to={`${path}/${id}`}>
      <div
        className={`icon ${isLoading ? "spinner" : vehicle ? "vehicle" : ""}`}
      >
        {isLoading ? (
          <ImSpinner9 />
        ) : error ? (
          <MdErrorOutline />
        ) : vehicle ? (
          <GiTank />
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <h4>{error ? "" : vehicle ? vehicle.name : "loading name.."}</h4>
        <p>
          {error
            ? "Error fetching data."
            : vehicle
            ? vehicle.model
            : "loading climate.."}
        </p>
      </div>
    </Link>
  );
};

export default VehicleItem;
