import React from "react";
import MovieItem from "../movies/MovieItem";
import PersonItem from "../people/PersonItem";
import PlanetItem from "../planets/PlanetItem";
import SpeciesItem from "../species/SpeciesItem";
import StarshipItem from "../starships/StarshipItem";
import VehicleItem from "../vehicles/VehicleItem";

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
