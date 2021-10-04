import React from 'react';

const Card = ({ image, title, year, addFavorite, isFavorite }) => {
  return (
    <div className='card'>
      <div className='icon' onClick={addFavorite}>

      </div>
      {image === 'N/A' ? (
        <img src="" alt={title} />
      ) : (
        <img src={image} alt={title} />
      )}

      <div className='info'>
        <span className='title'>{title}</span>
        <span className='year'>{year}</span>
      </div>
    </div>
  );
};

export default Card;