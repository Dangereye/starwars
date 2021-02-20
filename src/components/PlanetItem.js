import React from "react";
import { Link } from "react-router-dom";
import { IoPlanetSharp } from "react-icons/io5";
import { ImSpinner9 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md";
import useFetch from "../hooks/useFetch";

const PlanetItem = ({ url, path }) => {
  const { isLoading, error, data: planet } = useFetch(url);
  const id = url.match(/\d{1,2}/g);
  return (
    <Link className="list-item" to={`${path}/${id}`}>
      <div className="icon planets">
        {isLoading ? (
          <ImSpinner9 />
        ) : error ? (
          <MdErrorOutline />
        ) : planet ? (
          <IoPlanetSharp />
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <h4>{error ? "" : planet ? planet.name : "loading name.."}</h4>
        <p>
          {error
            ? "Error fetching data."
            : planet
            ? planet.terrain
            : "loading terrain.."}
        </p>
      </div>
    </Link>
  );
};

export default PlanetItem;
