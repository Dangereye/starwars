import React from "react";
import { IoMdArrowRoundForward } from "react-icons/all";
import Button from "../shared/Button";
import Year from "../shared/Year";

const MovieCard = ({ movie, id }) => {
  const link = movie.url.split("https://swapi.dev/api/films/")[1];
  return (
    <div className="card large">
      <div className="image">
        <img width="300px" src={`/img/ep${[id]}.jpg`} alt={movie.title} />
      </div>
      <h4 className="episode">Episode {id}</h4>
      <h3>{movie.title}</h3>
      <Year date={movie.release_date} />
      <Button
        iconEnd={<IoMdArrowRoundForward />}
        path={`/movie/${link}`}
        css="btn-dark btn-medium"
        text="Details"
      />
    </div>
  );
};

export default MovieCard;
