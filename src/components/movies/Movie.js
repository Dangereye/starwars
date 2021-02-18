import React from "react";
import { useParams } from "react-router-dom";
import { MovieCovers } from "../../data/MovieCovers";
import Character from "../Character";
import Planet from "../Planet";
import SpeciesOne from "../SpeciesOne";
import Starship from "../Starship";
import Vehicle from "../Vehicle";

const Movie = ({ data }) => {
  const { id } = useParams();
  return (
    <section id="movie">
      <div className="container">
        <header>
          <div className="text">
            <h4>{`Episode ${data.episode_id}`}</h4>
            <h2>{data.title}</h2>
            <div>
              <strong>Director:</strong> {data.director}
            </div>
            <div>
              <strong>Producer(s):</strong> {data.producer}
            </div>
            <div>
              <strong>Release date:</strong> {data.release_date}
            </div>
            <p>{data.opening_crawl}</p>
          </div>
          <div className="images">
            <img src={MovieCovers[id - 1]} alt={data.title} />
          </div>
        </header>
        <div className="additional-info">
          <h3>Characters</h3>
          <div className="characters">
            {data.characters &&
              data.characters.map((character, index) => {
                return <Character data={character} key={index} />;
              })}
          </div>
          <h3>Planets</h3>
          <div className="planets">
            {data.planets &&
              data.planets.map((planet, index) => {
                return <Planet data={planet} key={index} />;
              })}
          </div>
          <h3>Species</h3>
          <div className="species">
            {data.species &&
              data.species.map((species, index) => {
                return <SpeciesOne data={species} key={index} />;
              })}
          </div>
          <h3>Starships</h3>
          <div className="starships">
            {data.starships &&
              data.starships.map((ship, index) => {
                return <Starship data={ship} key={index} />;
              })}
          </div>
          <h3>Vehicles</h3>
          <div className="vehicles">
            {data.vehicles &&
              data.vehicles.map((vehicle, index) => {
                return <Vehicle data={vehicle} key={index} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
