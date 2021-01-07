import React from 'react';
import Movies from '../components/movies/Movies';
import People from '../components/People';
import Planets from '../components/Planets';
import Species from '../components/Species';
import Starships from '../components/Starships';
import Vehicles from '../components/Vehicles';

const HomePage = () => {
  return (
    <>
      <Movies />
      <People />
      <Planets />
      <Species />
      <Starships />
      <Vehicles />
    </>
  );
};

export default HomePage;
