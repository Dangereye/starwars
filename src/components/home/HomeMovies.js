import React from "react";
import Loader from "../Loader";
import MovieCard from "../movies/MovieCard";
import background from "../../images/movies.bg.jpg";
import Message from "../Message";
import useFetch from "../../hooks/useFetch";

const Movies = () => {
  const { isLoading, error, data: movies } = useFetch(
    "https://swapi.dev/api/films"
  );

  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }
  if (movies) {
    return (
      <section
        className="card-list"
        style={{ backgroundImage: `url(${background})` }}
        title="Background image by ParallelVision from Pixabay"
      >
        <div className="container">
          <h4>Explore</h4>
          <h2>6 Movies</h2>
          <div className="items">
            {movies.results.map((movie, index) => {
              return <MovieCard movie={movie} key={index} id={index + 1} />;
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default Movies;
