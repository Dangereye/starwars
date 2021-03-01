import React from "react";
import useFetch from "../../hooks/useFetch";
import { ImSpinner9 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import GenderIcon from "../shared/GenderIcon";

const PersonItem = ({ url, path }) => {
  const { isLoading, error, data: person } = useFetch(url);
  const id = url.match(/\d{1,2}/g);

  return (
    <Link className="list-item" to={`${path}/${id}`}>
      <div
        className={`icon icon-small ${
          isLoading ? "spinner" : person ? person.gender : ""
        }`}
      >
        {isLoading && <ImSpinner9 />}
        {error && <MdErrorOutline />}
        {person && <GenderIcon gender={person.gender} size="icon-small" />}
      </div>
      <div className="info">
        <h5>{error ? "" : person ? person.name : "loading name.."}</h5>
      </div>
    </Link>
  );
};

export default PersonItem;
