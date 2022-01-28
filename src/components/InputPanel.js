import { Modal } from './Modal.js'
import { 
  WrapperInputPanel, 
  ButtonPanel, 
  ButtonModal, } from './Style.js';


export const InputPanel = ({ id, value, addInput, subtractInput, onChange,  modal, handleModal}) => {
  return (
    <>
      <WrapperInputPanel>
        <label htmlFor={id}> 
          {id} 
        </label>
        <ButtonPanel onClick={addInput}>+</ButtonPanel> 
        <input  
          type='text' 
          id={id} 
          name={id} 
          value={value} 
          onChange={onChange}
        />
        <ButtonPanel onClick={subtractInput}>-</ButtonPanel>
         <ButtonModal onClick={handleModal}>  Inf.</ButtonModal> 
      </WrapperInputPanel>
       {modal && 
        <Modal 
          textModal={id} 
          handleModal={handleModal}
        />
        } 
    </>
    );
}

// import { Link } from "react-router-dom"/* <Link to="modal">Inf</Link> * Modal implementation via routes pending 