import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const PersonSpecies = ({ url = "https://swapi.dev/api/species/1", link }) => {
  const { isLoading, error, data: species } = useFetch(url);
  let id;
  if (species) {
    id = species.url.match(/\d{1,2}/g);
  }

  return (
    <>
      {isLoading && <span className="key">Loading..</span>}
      {error && <span className="value">n/a</span>}

      {species && (
        <>
          {link ? (
            <Link to={`/species/${id}`} className="value">
              {species.name}
            </Link>
          ) : (
            <span>{species.name}</span>
          )}
        </>
      )}
    </>
  );
};

export default PersonSpecies;
