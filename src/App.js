import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Movies from './components/movies/Movies';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';

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
      <Planets />
      <Species />
      <Starships />
      <Vehicles />
      <Footer />
    </div>
  );
};

export default App;
