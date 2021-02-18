import React from "react";
import { movieCovers } from "../../data/MovieCovers";
import { IoMdArrowRoundForward } from "react-icons/all";
import { Link } from "react-router-dom";
import Button from "../Button";

const Card = ({ data, id }) => {
  return (
    <div className="movie-card">
      <img src={movieCovers[id - 1]} alt={data.title} />
      <div className="movie-info">
        <h3>{data.title}</h3>
        <div className="episode">Episode: {data.episode_id}</div>
        <div className="director">Director: {data.director}</div>
        <div className="released">Released: {data.release_date}</div>
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
