import React from 'react';
import species1 from '../images/species-1.jpg';
import species2 from '../images/species-2.jpg';
import species3 from '../images/species-3.jpg';

const Species = () => {
  return (
    <section id='species'>
      <div className='container'>
        <div className='images'>
          <img src={species1} alt='Wookie species' />
          <img src={species3} alt='Twilek species' />
          <img src={species2} alt='Yodas species' />
        </div>
        <div className='text'>
          <h2 className='section-title'>37 Species</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            incidunt fugiat soluta odio eos eaque illo voluptatum debitis
            consequatur distinctio enim ducimus, repudiandae quaerat! Nihil,
            aperiam. Soluta corporis ipsa ipsum.
          </p>
          <button className='btn-dark'>View Species</button>
        </div>
      </div>
    </section>
  );
};

export default Species;
