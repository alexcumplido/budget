import { useState } from 'react';
import { WrapperInputText } from '../Style.js';
import { Modal } from './Modal.js'


export const InputWithButton = ({ id, onChange, inputsWeb, setInputsWeb}) => {
  
  let [showModal, setShowModal] = useState(false);
  
  const handleModal = ()=> setShowModal(!showModal)

  const addPage = ()=>  {
    setInputsWeb({
      ...inputsWeb, 
      paginas: ++inputsWeb.paginas
    });  
  } 

  const addLanguage = ()=> {
    setInputsWeb({
      ...inputsWeb, 
      idiomas: ++inputsWeb.idiomas}); 
  }

  const subtractPage = ()=> {
    if(inputsWeb.paginas>1) setInputsWeb({
      ...inputsWeb,
      paginas: --inputsWeb.paginas})
  }

  const subtractLanguage = ()=> {
    if(inputsWeb.idiomas>1) setInputsWeb({
      ...inputsWeb, 
      idiomas: --inputsWeb.idiomas
    })
  }

  return (
    <>
      <WrapperInputText>
        <label htmlFor={id}> 
          {id} 
        </label>
        <button onClick={ id === 'paginas'? addPage : addLanguage }>+</button> 
        <input  
          type='text' 
          id={id} 
          name={id} 
          value={ id === 'paginas'? inputsWeb.paginas : inputsWeb.idiomas } 
          onChange={onChange}
        />
        <button onClick={ id ==='paginas'? subtractPage : subtractLanguage }>-</button>
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

