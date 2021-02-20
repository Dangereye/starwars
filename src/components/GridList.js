import React from "react";
import PersonItem from "./PersonItem";
import PlanetItem from "./PlanetItem";
import SpeciesItem from "./SpeciesItem";

const GridList = ({ title, list, path }) => {
  return (
    <section>
      <div className="container">
        <h2>{title}</h2>
        <div className="grid-list">
          {path === "/person" &&
            list.map((person, index) => {
              return (
                <PersonItem key={`person-${index}`} url={person} path={path} />
              );
            })}
          {path === "/planet" &&
            list.map((planet, index) => {
              return (
                <PlanetItem key={`planet-${index}`} url={planet} path={path} />
              );
            })}
          {path === "/species" &&
            list.map((species, index) => {
              return (
                <SpeciesItem
                  key={`species-${index}`}
                  url={species}
                  path={path}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default GridList;
