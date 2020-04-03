import React from 'react'
import Modal from 'react-modal'

const OptionModal = props => (
  <Modal isOpen={props.modalIsOpen} ariaHideApp={false} className='modal'>
    <h1> HELLO </h1>
    <p>You picked {props.modalPick.name}</p>
    <button>Back</button>
  </Modal>
)

export default OptionModal
