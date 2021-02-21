import React from "react";
import CardList from "../components/shared/CardList";

const People = () => {
  return (
    <>
      <CardList title="Characters" defaultURL="https://swapi.dev/api/people" />
    </>
  );
};

export default People;
