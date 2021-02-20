import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PersonHeader from "../components/movies/PersonHeader";
import PreviousPage from "../components/PreviousPage";
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
        {/* <GridList title="Characters" list={movie.characters} path="/person" />
            <GridList title="Planets" list={movie.planets} path="/planet" />
            <GridList title="Species" list={movie.species} path="/species" />
            <GridList title="Starships" list={movie.starships} path="/starship" />
            <GridList title="Vehicles" list={movie.vehicles} path="/vehicle" /> */}
      </>
    );
  }
};

export default Person;
