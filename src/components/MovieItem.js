import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { MovieCovers } from "../data/MovieCovers";
import Year from "./Year";

const MovieItem = ({ url, path }) => {
  const { isLoading, error, data: movie } = useFetch(url);
  const id = url.match(/\d{1,2}/g);
  return (
    <Link className="list-item movie" to={`${path}/${id}`}>
      <div className="image">
        <img src={MovieCovers[id - 1]} alt={movie ? movie.title : ""} />
      </div>
      <div className="info">
        <h4>{error ? "" : movie ? movie.title : "loading name.."}</h4>
        <p>
          {error ? (
            "Error fetching data."
          ) : movie ? (
            <Year date={movie.release_date} />
          ) : (
            "loading release year.."
          )}
        </p>
      </div>
    </Link>
  );
};

export default MovieItem;
