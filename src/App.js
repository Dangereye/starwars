import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Movies from './components/movies/Movies';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import People from './components/People';

const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = () => {
      Axios.get(`https://swapi.dev/api/films`).then(
        ({ data }) => {
          setMovies(data.results);
        },
        (error) => {
          console.log(error);
        }
      );
    };
    getData();
  }, []);

  return (
    <div id='app'>
      <Navbar />
      {movies.length ? (
        <Movies data={movies} />
      ) : (
        <Loader text='A long time ago in a galaxy far, far away..' />
      )}
      <People />
    </div>
  );
};

export default App;
