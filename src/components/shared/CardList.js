import React from "react";
import { useLocation } from "react-router-dom";
import PersonCard from "../people/PersonCard";
import PlanetCard from "../planets/PlanetCard";
import MovieCard from "../movies/MovieCard";
import SpeciesCard from "../species/SpeciesCard";
import StarshipCard from "../starships/StarshipCard";
import VehicleCard from "../vehicles/VehicleCard";

const CardList = ({ title, list, size }) => {
  const { pathname } = useLocation();

  return (
    <section
      className="card-list"
      style={{ backgroundImage: `url(/img/movies.bg.jpg)` }}
      title="Background image by ParallelVision from Pixabay"
    >
      <div className="container">
        <span className="section-subtitle">Explore</span>
        <h2 className="section-title">{title}</h2>
        <div className={`items ${size}`}>
          {pathname === "/" &&
            list
              .sort((a, b) => a.episode_id - b.episode_id)
              .map((movie) => {
                return (
                  <MovieCard
                    movie={movie}
                    key={`movie-${movie.episode_id}`}
                    id={movie.episode_id}
                  />
                );
              })}
          {pathname === "/people" &&
            list.map((person, index) => {
              return <PersonCard person={person} key={index} />;
            })}
          {pathname === "/planets" &&
            list.map((planet, index) => {
              return <PlanetCard planet={planet} key={index} />;
            })}
          {pathname === "/species" &&
            list.map((species, index) => {
              return <SpeciesCard species={species} key={index} />;
            })}
          {pathname === "/starships" &&
            list.map((starship, index) => {
              return <StarshipCard starship={starship} key={index} />;
            })}
          {pathname === "/vehicles" &&
            list.map((vehicle, index) => {
              return <VehicleCard vehicle={vehicle} key={index} />;
            })}
        </div>
      </div>
    </section>
  );
};
export default CardList;
