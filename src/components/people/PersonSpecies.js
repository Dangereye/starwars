import React from "react";
import useFetch from "../../hooks/useFetch";

const PersonSpecies = ({ url }) => {
  const { isLoading, error, data: species } = useFetch(url);
  return (
    <h4>
      {isLoading && "Loading.."}
      {error && ""}
      {species
        ? `${species.name} / ${species.classification}`
        : "Human / mammal"}
    </h4>
  );
};

export default PersonSpecies;