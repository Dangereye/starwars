import React from 'react';
import vehicle from '../images/vehicles.jpg';

const Vehicles = () => {
  return (
    <section id='vehicles'>
      <div className='container'>
        <div className='images'>
          <img src={vehicle} alt='AT-ST Walker' />
        </div>
        <div className='text'>
          <h2 className='page-title'>39 Vehicles</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptates aliquid debitis, rerum autem sequi velit dolorum rem
            neque quisquam soluta fuga aliquam in optio sapiente suscipit eaque
            quibusdam. Amet!
          </p>
          <button className='btn-dark'>View Vehicles</button>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
