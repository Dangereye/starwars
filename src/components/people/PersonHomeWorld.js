import React from "react";
import useFetch from "../../hooks/useFetch";

const PersonHomeWorld = ({ url }) => {
  const { isLoading, error, data: homeworld } = useFetch(url);
  return (
    <div className="homeworld">
      <h4>Homeworld</h4>
      <p>
        {isLoading
          ? "Loading.."
          : homeworld
          ? `${homeworld.name}`
          : error
          ? "n/a"
          : "Unknown"}
      </p>
    </div>
  );
};

export default PersonHomeWorld;
