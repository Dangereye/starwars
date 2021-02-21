import React from "react";
import { useLocation } from "react-router-dom";
import background from "../../images/movies.bg.jpg";
import PersonCard from "../people/PersonCard";
import MovieCard from "../movies/MovieCard";

const CardList = ({ title, list }) => {
  const { pathname } = useLocation();

  return (
    <section
      className="card-list"
      style={{ backgroundImage: `url(${background})` }}
      title="Background image by ParallelVision from Pixabay"
    >
      <div className="container">
        <h4>Explore</h4>
        <h2 className="section-title">{title}</h2>
        <div className="items">
          {pathname === "/" &&
            list.map((movie, index) => {
              return <MovieCard movie={movie} key={index} id={index + 1} />;
            })}
          {pathname === "/people" &&
            list.map((person, index) => {
              return <PersonCard person={person} key={index} />;
            })}
        </div>
      </div>
    </section>
  );
};
export default CardList;
