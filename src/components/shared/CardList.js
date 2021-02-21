import React, { useState } from "react";
import background from "../../images/movies.bg.jpg";
import Loader from "./Loader";
import Message from "./Message";
import useFetch from "../../hooks/useFetch";
import PersonCard from "../people/PersonCard";
import { useLocation } from "react-router-dom";
import MovieCard from "../movies/MovieCard";

const CardList = ({ title, defaultURL }) => {
  const { pathname } = useLocation();
  console.log("Card list: ", pathname);
  const [url, setUrl] = useState(defaultURL);
  const { isLoading, error, data } = useFetch(url);
  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }
  if (data) {
    console.log(data);
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
              data.results.map((movie, index) => {
                return <MovieCard movie={movie} key={index} id={index + 1} />;
              })}
            {pathname === "/people" &&
              data.results.map((person, index) => {
                return <PersonCard person={person} key={index} />;
              })}
          </div>
        </div>
      </section>
    );
  }
};
export default CardList;
