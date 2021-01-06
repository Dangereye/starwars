import React from 'react';
import people from '../images/people.jpg';

const People = () => {
  return (
    <section id='people'>
      <div className='container'>
        <div className='text'>
          <h2>82 Characters</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            corporis in accusamus reprehenderit, possimus provident unde! Harum,
            explicabo? Fuga consectetur vel dolores cum quaerat quod dolore
            corporis. Officia, in rem?
          </p>
          <button className='btn-dark'>View Characters</button>
        </div>
        <div className='image'>
          <img src={people} alt='Characters' />
        </div>
      </div>
    </section>
  );
};

export default People;
