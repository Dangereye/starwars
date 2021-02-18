import React from "react";
import { MovieCovers } from "../../data/MovieCovers";
import { AiFillBug } from "react-icons/ai";
import { GiTank } from "react-icons/gi";
import { IoPeopleSharp, IoPlanetSharp } from "react-icons/io5";
import { RiSpaceShipFill } from "react-icons/ri";

const MovieHeader = ({
  id,
  title,
  characters,
  species,
  planets,
  starships,
  vehicles,
  crawl,
  director,
  producer,
}) => {
  return (
    <header id="movie-header">
      <div className="container">
        <div className="image">
          <img src={MovieCovers[id - 1]} alt={title} />
        </div>
        <div className="text">
          <h4>Episode {id}</h4>
          <h1>{title}</h1>
          <div className="stats">
            <div>
              <IoPeopleSharp />
              <span>{characters}</span>
            </div>
            <div>
              <AiFillBug />
              <span>{species}</span>
            </div>
            <div>
              <IoPlanetSharp />
              <span>{planets}</span>
            </div>
            <div>
              <RiSpaceShipFill />
              <span>{starships}</span>
            </div>
            <div>
              <GiTank />
              <span>{vehicles}</span>
            </div>
          </div>
          <h4>Opening crawl</h4>
          <p>{crawl}</p>
          <div className="production">
            <div className="production-group">
              <h4>Director</h4>
              <p>{director}</p>
            </div>
            <div className="production-group">
              <h4>Producer(s)</h4>
              <p>{producer}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MovieHeader;
