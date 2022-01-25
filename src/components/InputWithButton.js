import { WrapperInputsWeb } from './Style.js';
import { ButtonStyled } from './Style.js';
import { ButtonModal } from './Style.js';
import { Modal } from './Modal.js'

export const InputWithButton = ({ id, value, addInput, subtractInput, onChange,  modal, handleModal}) => {
  return (
    <>
      <WrapperInputsWeb>
        <label htmlFor={id}> 
          {id} 
        </label>
        <ButtonStyled onClick={addInput}>+</ButtonStyled> 
        <input  
          type='text' 
          id={id} 
          name={id} 
          value={value} 
          onChange={onChange}
        />
        <ButtonStyled onClick={subtractInput}>-</ButtonStyled>
        <ButtonModal onClick={handleModal}> Inf.</ButtonModal>
      </WrapperInputsWeb>
      {modal && 
        <Modal 
          textModal={id} 
          handleModal={handleModal}
        />
      }
    </>
    );
}

