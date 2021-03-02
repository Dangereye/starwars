import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import StarshipHeader from "../components/starships/StarshipHeader";
import PreviousPage from "../components/shared/PreviousPage";
import GridList from "../components/shared/GridList";
import useFetch from "../hooks/useFetch";

const Planet = () => {
  const { id } = useParams();
  const { isLoading, error, data: starship } = useFetch(
    `https://swapi.dev/api/starships/${id}`
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
  if (starship) {
    return (
      <>
        <PreviousPage />
        <StarshipHeader
          name={starship.name}
          movies={starship.films.length}
          people={starship.pilots.length}
          speed={starship.MGLT}
          cargoCapacity={starship.cargo_capacity}
          consumables={starship.consumables}
          cost={starship.cost_in_credits}
          crew={starship.crew}
          hyperdrive={starship.hyperdrive_rating}
          manufacturer={starship.manufacturer}
          model={starship.model}
          passengers={starship.passengers}
          classification={starship.starship_class}
        />
        <GridList
          title="Movies"
          type="movie"
          list={starship.films}
          path="/movie"
        />
        {starship.pilots.length > 0 && (
          <GridList
            title="Pilots"
            type="person"
            list={starship.pilots}
            path="/person"
          />
        )}
      </>
    );
  }
};

export default Planet;
