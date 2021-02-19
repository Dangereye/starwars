import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import MovieHeader from "../components/movies/MovieHeader";
import GridList from "../components/GridList";
import useFetch from "../hooks/useFetch";

const Movie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(
    `https://swapi.dev/api/films/${id}`
  );
  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }
  if (movie) {
    return (
      <>
        <MovieHeader
          id={id}
          title={movie.title}
          year={movie.release_date}
          characters={movie.characters.length}
          species={movie.species.length}
          planets={movie.planets.length}
          starships={movie.starships.length}
          vehicles={movie.vehicles.length}
          crawl={movie.opening_crawl}
          director={movie.director}
          producer={movie.producer}
        />
        <GridList title="Characters" list={movie.characters} path="/person" />
      </>
    );
  }
};

export default Movie;
