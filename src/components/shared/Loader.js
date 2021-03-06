import React from 'react';

const Loader = ({ text }) => {
  return (
    <div className='loader'>
      <div className='spinner'></div>
      <div className='text'>{text}</div>
    </div>
  );
};

export default Loader;
