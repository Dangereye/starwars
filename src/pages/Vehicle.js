import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import PreviousPage from "../components/shared/PreviousPage";
import GridList from "../components/shared/GridList";
import useFetch from "../hooks/useFetch";
import VehicleHeader from "../components/vehicles/VehicleHeader";

const Vehicle = () => {
  const { id } = useParams();
  const { isLoading, error, data: vehicle } = useFetch(
    `https://swapi.dev/api/vehicles/${id}`
  );
  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }
  if (vehicle) {
    return (
      <>
        <PreviousPage />
        <VehicleHeader
          name={vehicle.name}
          movies={vehicle.films.length}
          people={vehicle.pilots.length}
          cargoCapacity={vehicle.cargo_capacity}
          consumables={vehicle.consumables}
          cost={vehicle.cost_in_credits}
          crew={vehicle.crew}
          manufacturer={vehicle.manufacturer}
          speed={vehicle.max_atmosphering_speed}
          model={vehicle.model}
          passengers={vehicle.passengers}
          classification={vehicle.vehicle_class}
        />
        <GridList
          title="Movies"
          type="movie"
          list={vehicle.films}
          path="/movie"
        />
        {vehicle.pilots.length > 0 && (
          <GridList
            title="Pilots"
            type="person"
            list={vehicle.pilots}
            path="/person"
          />
        )}
      </>
    );
  }
};

export default Vehicle;
