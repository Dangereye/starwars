import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import MovieHeader from "../components/movies/MovieHeader";
import GridList from "../components/shared/GridList";
import useFetch from "../hooks/useFetch";
import PreviousPage from "../components/shared/PreviousPage";

const Movie = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: movie,
  } = useFetch(`https://swapi.dev/api/films/${id}`);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
          id={movie.episode_id}
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
        <GridList
          title="Characters"
          type="person"
          list={movie.characters}
          path="/person"
        />
        <GridList
          title="Planets"
          type="planet"
          list={movie.planets}
          path="/planet"
        />
        <GridList
          title="Species"
          type="species"
          list={movie.species}
          path="/species"
        />
        <GridList
          title="Starships"
          type="starship"
          list={movie.starships}
          path="/starship"
        />
        <GridList
          title="Vehicles"
          type="vehicle"
          list={movie.vehicles}
          path="/vehicle"
        />
      </>
    );
  }
};

export default Movie;
