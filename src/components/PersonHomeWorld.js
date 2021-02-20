import React from "react";
import useFetch from "../hooks/useFetch";

const PersonHomeWorld = ({ url }) => {
  const { isLoading, error, data: homeworld } = useFetch(url);
  console.log("Home world", homeworld);
  return (
    <div className="homeworld">
      <h4>Home world</h4>
      <p>{isLoading ? "Loading.." : homeworld ? homeworld.name : "unknown"}</p>
    </div>
  );
};

export default PersonHomeWorld;
