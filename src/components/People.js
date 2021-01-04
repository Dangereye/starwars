import React from 'react';
import people from '../images/people.jpg';

const People = () => {
  return (
    <section id='people'>
      <div className='container'>
        <div className='text'>
          <h2>Characters</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            saepe laboriosam enim minus porro veritatis, provident mollitia
            voluptates doloribus!?
          </p>
          <button className='btn-primary'>View Characters</button>
        </div>
        <div className='image'>
          <img src={people} alt='Characters' />
        </div>
      </div>
    </section>
  );
};

export default People;
