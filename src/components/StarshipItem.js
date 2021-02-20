import React from "react";
import useFetch from "../hooks/useFetch";
import { RiSpaceShipFill } from "react-icons/ri";
import { ImSpinner9 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const StarshipItem = ({ url, path }) => {
  const { isLoading, error, data: starship } = useFetch(url);
  const id = url.match(/\d{1,2}/g);
  return (
    <Link className="list-item" to={`${path}/${id}`}>
      <div className="icon starship">
        {isLoading ? (
          <ImSpinner9 />
        ) : error ? (
          <MdErrorOutline />
        ) : starship ? (
          <RiSpaceShipFill />
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <h4>{error ? "" : starship ? starship.name : "loading name.."}</h4>
        <p>
          {error
            ? "Error fetching data."
            : starship
            ? starship.model
            : "loading climate.."}
        </p>
      </div>
    </Link>
  );
};

export default StarshipItem;
