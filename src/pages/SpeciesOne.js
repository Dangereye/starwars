import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import SpeciesHeader from "../components/species/SpeciesHeader";
import PreviousPage from "../components/shared/PreviousPage";
import GridList from "../components/shared/GridList";
import useFetch from "../hooks/useFetch";

const Planet = () => {
  const { id } = useParams();
  const { isLoading, error, data: species } = useFetch(
    `https://swapi.dev/api/species/${id}`
  );
  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }
  if (species) {
    return (
      <>
        {console.log("Species: ", species)}
        <PreviousPage />
        <SpeciesHeader
          movies={species.films.length}
          people={species.people.length}
          name={species.name}
          classification={species.classification}
          designation={species.designation}
          eyeColors={species.eye_colors}
          hairColors={species.hair_colors}
          skinColors={species.skin_colors}
          homeWorld={species.homeworld}
          language={species.language}
          avgHeight={species.average_height}
          avgLifespan={species.average_lifespan}
        />
        <GridList title="Movies" list={species.films} path="/movie" />
        <GridList title="Characters" list={species.people} path="/person" />
      </>
    );
  }
};

export default Planet;
