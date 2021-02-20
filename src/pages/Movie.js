import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import MovieHeader from "../components/movies/MovieHeader";
import GridList from "../components/GridList";
import useFetch from "../hooks/useFetch";
import PreviousPage from "../components/PreviousPage";

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
        <PreviousPage />
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
        <GridList title="Planets" list={movie.planets} path="/planet" />
        <GridList title="Species" list={movie.species} path="/species" />
        <GridList title="Starships" list={movie.starships} path="/starship" />
        <GridList title="Vehicles" list={movie.vehicles} path="/vehicle" />
      </>
    );
  }
};

export default Movie;
