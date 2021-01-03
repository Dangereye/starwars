import React from 'react';
import Card from './Card';
import background from '../../images/movies.bg.jpg';

const Movies = ({ data }) => {
  return (
    <section id='movies' style={{ backgroundImage: `url(${background})` }}>
      <div className='container'>
        <h1 className='section-title'>Movies</h1>
        <div className='movies'>
          {data.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Movies;
