import React from "react";
import useFetch from "../hooks/useFetch";

const PersonHomeWorld = ({ url }) => {
  const { isLoading, error, data: homeworld } = useFetch(url);
  return (
    <div className="homeworld">
      <h4>Home world</h4>
      <p>
        {isLoading
          ? "Loading.."
          : homeworld
          ? `${homeworld.name} -  ${homeworld.climate}`
          : error
          ? "Failed to fetch data"
          : "Unknown"}
      </p>
    </div>
  );
};

export default PersonHomeWorld;
