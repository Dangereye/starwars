import React, { useState, useEffect } from 'react';
import { getData } from '../../http/Axios';
import Loader from '../Loader';
import Card from './Card';
import background from '../../images/movies.bg.jpg';

const Movies = ({ data }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getData('/films').then(
      ({ data }) => {
        setMovies(data.results);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  if (movies.length) {
    return (
      <section id='movies' style={{ backgroundImage: `url(${background})` }}>
        <div className='container'>
          <h2 className='section-title'>6 Movies</h2>
          <div className='movies'>
            {movies.map((movie, index) => {
              return <Card data={movie} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
  return <Loader text='A long time ago in a galaxy far, far away..' />;
};

export default Movies;
