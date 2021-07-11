import React from "react";
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
    <header>
      <div className="container">
        <div className="image">
          <picture>
            <source
              srcSet={`/img/ep${[id]}@600.jpg`}
              media="(min-width:1080px)"
            />
            <source
              srcSet={`/img/ep${[id]}@400.jpg`}
              media="(min-width:730px) and (max-width:1079px)"
            />
            <source
              srcSet={`/img/ep${[id]}@270.jpg`}
              media="(min-width:569px) and (max-width:729px)"
            />
            <img
              width="600px"
              height="900px"
              src={`/img/ep${[id]}@600.jpg`}
              alt={title}
            />
          </picture>
        </div>
        <div className="text">
          <div className="header-subtitle">Episode {id}</div>
          <h2 className="header-title">{title}</h2>
          <div className="stats">
            <div>
              <IoPeopleSharp />
              <span>{characters}</span>
            </div>
            <div>
              <IoPlanetSharp />
              <span>{planets}</span>
            </div>
            <div>
              <AiFillBug />
              <span>{species}</span>
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
          <div className="header-subtitle">Opening crawl</div>
          <p>{crawl}</p>
          <div className="header-subtitle">Director</div>
          <p>{director}</p>
          <div className="header-subtitle">Producer(s)</div>
          <p>{producer}</p>
        </div>
      </div>
    </header>
  );
};

export default MovieHeader;
