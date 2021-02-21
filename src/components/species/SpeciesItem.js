import React from "react";
import { Link } from "react-router-dom";
import { AiFillBug } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md";
import useFetch from "../../hooks/useFetch";

const SpeciesItem = ({ url, path }) => {
  const { isLoading, error, data: species } = useFetch(url);
  const id = url.match(/\d{1,2}/g);
  return (
    <Link className="list-item" to={`${path}/${id}`}>
      <div
        className={`icon ${isLoading ? "spinner" : species ? "species" : ""}`}
      >
        {isLoading ? (
          <ImSpinner9 />
        ) : error ? (
          <MdErrorOutline />
        ) : species ? (
          <AiFillBug />
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <h4>{error ? "" : species ? species.name : "loading name.."}</h4>
        <p>
          {error
            ? "Error fetching data."
            : species
            ? species.classification
            : "loading classification.."}
        </p>
      </div>
    </Link>
  );
};

export default SpeciesItem;
