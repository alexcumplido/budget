import { useState } from 'react';
import { WrapperInputText } from './Style.js';
import { Modal } from './Modal.js'


export const InputWithButton = ({ id, value, onChange, onClickSuma, onClickResta }) => {
  
// Puc carregar el Modal desde App ?
let [showModal, setShowModal] = useState(false);
  function handleModal (){
    setShowModal(!showModal);
  }

  return (
    <>
      <WrapperInputText>
        <label htmlFor={id}> 
          {id} 
        </label>
        <button onClick={onClickSuma}>+</button> 
        <input  
          type='text' 
          id={id} 
          name={id} 
          value={value} 
          onChange={onChange}
        />
        <button onClick={onClickResta}>-</button>
        <button onClick={handleModal}> Info</button>
      </WrapperInputText>
      
      {showModal && 
        <Modal 
          inputHelper={id} 
          handleModal={handleModal}
        />
      }
    </>
    );
}

