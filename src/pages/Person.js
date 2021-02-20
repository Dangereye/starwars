import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PersonHeader from "../components/movies/PersonHeader";
import PreviousPage from "../components/PreviousPage";
import GridList from "../components/GridList";
import useFetch from "../hooks/useFetch";

const Person = () => {
  const { id } = useParams();
  const { isLoading, error, data: person } = useFetch(
    `https://swapi.dev/api/people/${id}`
  );
  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }
  if (person) {
    return (
      <>
        {console.log("Person: ", person)}
        <PreviousPage />
        <PersonHeader
          homeWorld={person.homeworld}
          name={person.name}
          gender={person.gender}
          hairColor={person.hair_color}
          eyeColor={person.eye_color}
          skinColor={person.skin_color}
          height={person.height}
          mass={person.mass}
          birthYear={person.birth_year}
          species={person.species}
          movies={person.films.length}
          starships={person.starships.length}
          vehicles={person.vehicles.length}
        />
        <GridList title="Movie credits" list={person.films} path="/movie" />
        {person.starships.length > 0 && (
          <GridList
            title="Starships piloted"
            list={person.starships}
            path="/starship"
          />
        )}
        {person.vehicles.length > 0 && (
          <GridList
            title="Vehicles piloted"
            list={person.vehicles}
            path="/vehicle"
          />
        )}
      </>
    );
  }
};

export default Person;
