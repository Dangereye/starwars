import React from "react";
import { MovieCovers } from "../../data/MovieCovers";
import { IoMdArrowRoundForward } from "react-icons/all";
import Button from "../Button";
import Year from "../Year";

const Card = ({ movie, id }) => {
  return (
    <div className="movie-card">
      <img src={MovieCovers[id - 1]} alt={movie.title} />
      <div className="movie-info">
        <h4>Episode {id}</h4>
        <h3>{movie.title}</h3>
        <Year date={movie.release_date} />
      </div>
      <Button
        iconEnd={<IoMdArrowRoundForward />}
        path={`/movie/${id}`}
        css="btn-dark btn-medium"
        text="Details"
      />
    </div>
  );
};

export default Card;
