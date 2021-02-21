import React from "react";
import { MovieCovers } from "../../data/MovieCovers";
import { IoMdArrowRoundForward } from "react-icons/all";
import Button from "../shared/Button";
import Year from "../shared/Year";

const MovieCard = ({ movie, id }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={MovieCovers[id - 1]} alt={movie.title} />
      </div>
      <div className="info">
        <h4>Episode {id}</h4>
        <h3>{movie.title}</h3>
        <Year date={movie.release_date} />
        <Button
          iconEnd={<IoMdArrowRoundForward />}
          path={`/movie/${id}`}
          css="btn-dark btn-medium"
          text="Details"
        />
      </div>
    </div>
  );
};

export default MovieCard;
