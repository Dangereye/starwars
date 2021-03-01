import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const PersonHomeWorld = ({ url }) => {
  const { isLoading, error, data: homeworld } = useFetch(url);
  const id = url ? url.match(/\d{1,2}/g) : "";

  return (
    <>
      <h4>Homeworld</h4>
      {isLoading && <span className="key">Loading..</span>}
      {error && <span className="value">n/a</span>}
      {homeworld && (
        <Link to={`/planet/${id}`} className="value">
          {homeworld.name}
        </Link>
      )}
    </>
  );
};

export default PersonHomeWorld;
