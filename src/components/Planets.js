import React from 'react';
import background from '../images/planets.jpg';

const Planets = () => {
  return (
    <section id='planets' style={{ backgroundImage: `url(${background})` }}>
      <div className='container'>
        <h2>60 Planets</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          nihil mollitia perspiciatis, soluta nobis fuga exercitationem
          doloremque vero provident obcaecati debitis! Molestias, nobis amet
          explicabo voluptates aut excepturi cumque aspernatur.
        </p>
        <button className='btn-red'>View Planets</button>
      </div>
    </section>
  );
};

export default Planets;
