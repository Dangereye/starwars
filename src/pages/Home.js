import React from "react";
import { HomePageSectionsData as data } from "../data/HomePageSectionsData";
import HomePlanets from "../components/home/HomePlanets";
import HomeSection from "../components/home/HomeSection";
import HomeSpecies from "../components/home/HomeSpecies";
import CardList from "../components/CardList";

const HomePage = () => {
  const { characters, vehicles, starships } = data;
  return (
    <>
      <CardList title="Movies" defaultURL="https://swapi.dev/api/films" />
      <HomeSection
        src={characters.image.src}
        alt={characters.image.alt}
        thanks={characters.image.thanks}
        title={characters.text.title}
        paragraph={characters.text.paragraph}
        path={characters.button.path}
        css={characters.button.css}
        text={characters.button.text}
      />
      <HomeSpecies />
      <HomeSection
        src={vehicles.image.src}
        alt={vehicles.image.alt}
        thanks={vehicles.image.thanks}
        title={vehicles.text.title}
        paragraph={vehicles.text.paragraph}
        path={vehicles.button.path}
        css={vehicles.button.css}
        text={vehicles.button.text}
      />
      <HomePlanets />
      <HomeSection
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
};

export default HomePage;
