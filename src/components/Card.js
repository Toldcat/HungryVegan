import React from 'react'

const Card = props => {
  return (
    <div className='card'>
      <h1 className='card__title'>{props.item.name}</h1>
      <p>Paragraph1</p>
      <p>Paragraph2</p>
      <button className='card__button'>Some button </button>
    </div>
  )
}

export default Card
