import React from 'react'

const Card = props => {
  return (
    <div className='card'>
      <div className='card__wrapper'>
        <h1 className='card__title'>{props.item.name}</h1>
        <img
          src={`./images/${props.item.picNum}.jpg`}
          alt='restaurant img'
          className='card__img'
        />
        <p className='card__info'>
          Rated <span className='card__info--detail'>{props.item.rating}</span>
          ⭐ by{' '}
          <span className='card__info--detail'>
            {props.item.user_ratings_total}
          </span>{' '}
          people.
        </p>
        <p className='card__info'>Find it at {props.item.vicinity}</p>
      </div>
    </div>
  )
}

export default Card
