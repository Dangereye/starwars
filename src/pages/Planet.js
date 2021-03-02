import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import PlanetHeader from "../components/planets/PlanetHeader";
import PreviousPage from "../components/shared/PreviousPage";
import GridList from "../components/shared/GridList";
import useFetch from "../hooks/useFetch";

const Planet = () => {
  const { id } = useParams();
  const { isLoading, error, data: planet } = useFetch(
    `https://swapi.dev/api/planets/${id}`
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }
  if (planet) {
    return (
      <>
        <PreviousPage />
        <PlanetHeader
          climate={planet.climate}
          diameter={planet.diameter}
          name={planet.name}
          movies={planet.films.length}
          people={planet.residents.length}
          gravity={planet.gravity}
          orbitalPeriod={planet.orbital_period}
          population={planet.population}
          rotationalPeriod={planet.rotation_period}
          surfaceWater={planet.surface_water}
          terrain={planet.terrain}
        />
        {planet.films.length > 0 && (
          <GridList
            title="Movies"
            type="movie"
            list={planet.films}
            path="/movie"
          />
        )}
        {planet.residents.length > 0 && (
          <GridList
            title="Residents"
            type="planet"
            list={planet.residents}
            path="/person"
          />
        )}
      </>
    );
  }
};

export default Planet;
