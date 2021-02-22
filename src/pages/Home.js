import React from "react";
import { HomePageSectionsData as data } from "../data/HomePageSectionsData";
import PlanetsSection from "../components/home/PlanetsSection";
import GenericSection from "../components/home/GenericSection";
import SpeciesSection from "../components/home/SpeciesSection";
import CardList from "../components/shared/CardList";
import useFetch from "../hooks/useFetch";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";

const HomePage = () => {
  const { characters, vehicles, starships } = data;
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
      <>
        <CardList title="Movies" list={movies.results} />
        <GenericSection
          src={characters.image.src}
          alt={characters.image.alt}
          thanks={characters.image.thanks}
          title={characters.text.title}
          paragraph={characters.text.paragraph}
          path={characters.button.path}
          css={characters.button.css}
          text={characters.button.text}
        />
        <SpeciesSection />
        <GenericSection
          src={vehicles.image.src}
          alt={vehicles.image.alt}
          thanks={vehicles.image.thanks}
          title={vehicles.text.title}
          paragraph={vehicles.text.paragraph}
          path={vehicles.button.path}
          css={vehicles.button.css}
          text={vehicles.button.text}
        />
        <PlanetsSection />
        <GenericSection
          src={starships.image.src}
          alt={starships.image.alt}
          thanks={starships.image.thanks}
          title={starships.text.title}
          paragraph={starships.text.paragraph}
          path={starships.button.path}
          css={starships.button.css}
          text={starships.button.text}
        />
      </>
    );
  }
};

export default HomePage;
