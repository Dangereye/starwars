import React from 'react';
import cover1 from '../../images/cover-1.jpg';
import cover2 from '../../images/cover-2.jpg';
import cover3 from '../../images/cover-3.jpg';
import cover4 from '../../images/cover-4.jpg';
import cover5 from '../../images/cover-5.jpg';
import cover6 from '../../images/cover-6.jpg';
import { IoMdArrowRoundForward } from 'react-icons/all';

const Card = ({ data }) => {
  const covers = [cover1, cover2, cover3, cover4, cover5, cover6];
  return (
    <div className='movie-card'>
      <img src={covers[data.episode_id - 1]} alt={data.title} />
      <div className='movie-info'>
        <h3>{data.title}</h3>
        <div className='episode'>Episode: {data.episode_id}</div>
        <div className='director'>Director: {data.director}</div>
        <div className='released'>Released: {data.release_date}</div>
      </div>
      <button className='btn-dark'>
        <span>Details</span>
        <IoMdArrowRoundForward />
      </button>
    </div>
  );
};

export default Card;
