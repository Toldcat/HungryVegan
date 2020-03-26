import React from 'react'
import { Link } from 'react-router-dom'

const HungryVegan = () => {
  return (
    <div className='landing'>
      <div className='landing__container'>
        <h1 className='landing__title'>Hungry?</h1>
        <h1 className='landing__title'>Vegan?</h1>
        <h3 className='landing__subtitle'>Can never decide where to eat?</h3>
        <h3 className='landing__subtitle'>We've got you covered!</h3>

        <Link className='btn' to='/spin'>
          Pick a restaurant nearby
        </Link>
      </div>
    </div>
  )
}

export default HungryVegan
