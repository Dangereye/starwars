import React from "react";
import { IoMdArrowRoundForward } from "react-icons/all";
import Button from "../shared/Button";
import Year from "../shared/Year";

const MovieCard = ({ movie, id }) => {
  const path_id = movie.url.replace(/\D+/g, "");
  return (
    <div className="card large">
      <div className="image">
        <picture>
          <source srcset={`/img/ep${[id]}@400.jpg`} media="(max-width:528px)" />
          <source srcset={`/img/ep${[id]}@270.jpg`} media="(min-width:529px)" />
        </picture>
        <img
          width="400px"
          height="600px"
          src={`/img/ep${[id]}@400.jpg`}
          alt={movie.title}
        />
      </div>
      <span className="episode">Episode {id}</span>
      <h3>{movie.title}</h3>
      <Year date={movie.release_date} />
      <Button
        iconEnd={<IoMdArrowRoundForward />}
        path={`/movie/${path_id}`}
        css="btn-dark btn-medium"
        text="Details"
      />
    </div>
  );
};

export default MovieCard;
