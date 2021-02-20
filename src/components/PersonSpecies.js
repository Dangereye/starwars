import React from "react";
import useFetch from "../hooks/useFetch";

const PersonSpecies = ({ url }) => {
  const { isLoading, error, data: species } = useFetch(url);
  console.log("Person species: ", species);
  return <h4></h4>;
};

export default PersonSpecies;
