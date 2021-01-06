import React from 'react';
import starship from '../images/starships.jpg';

const Starships = () => {
  return (
    <section id='starships'>
      <div className='container'>
        <div className='text'>
          <h2>36 Starships</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            earum, harum libero eligendi animi veniam voluptatem? Cupiditate
            soluta, magni totam corrupti mollitia veniam aut voluptatum cumque
            consequatur reprehenderit recusandae! Voluptatem!
          </p>
          <button className='btn-dark'>View Starships</button>
        </div>
        <div className='images'>
          <img src={starship} alt='Millennium Falcon' />
        </div>
      </div>
    </section>
  );
};

export default Starships;
