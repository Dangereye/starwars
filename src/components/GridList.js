import React from "react";
import MovieItem from "./MovieItem";
import PersonItem from "./PersonItem";
import PlanetItem from "./PlanetItem";
import SpeciesItem from "./SpeciesItem";
import StarshipItem from "./StarshipItem";
import VehicleItem from "./VehicleItem";

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
          {path === "/starship" &&
            list.map((starship, index) => {
              return (
                <StarshipItem
                  key={`starship-${index}`}
                  url={starship}
                  path={path}
                />
              );
            })}
          {path === "/vehicle" &&
            list.map((vehicle, index) => {
              return (
                <VehicleItem
                  key={`vehicle-${index}`}
                  url={vehicle}
                  path={path}
                />
              );
            })}
          {path === "/movie" &&
            list.map((movie, index) => {
              return (
                <MovieItem key={`movie-${index}`} url={movie} path={path} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default GridList;
