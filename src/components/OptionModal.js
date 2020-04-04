import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

const OptionModal = props => (
  <Modal isOpen={props.modalIsOpen} ariaHideApp={false} className='modal'>
    <h1 className='modal__heading'>Why Not Try {props.modalPick.name}?</h1>
    <p className='card__info modal__info'>
      Rated{' '}
      <span className='card__info--detail modal__detail'>
        {props.modalPick.rating}
      </span>
      ⭐ by{' '}
      <span className='card__info--detail modal__detail'>
        {props.modalPick.user_ratings_total}
      </span>{' '}
      people.
    </p>

    <a
      className='modal__link'
      href={`https://www.google.com/maps/search/?api=1&query=Hungry+Vegan&query_place_id=${props.modalPick.place_id}`}
    >
      <img className='modal__icon' src='./images/mapsicon.png' />
      Find it on Google Maps
    </a>
    <Link className='modal__link--small' to='/'>
      Back to homepage
    </Link>
  </Modal>
)

export default OptionModal
