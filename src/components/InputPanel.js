import { WrapperInputPanel } from './Style.js';
import { ButtonPanel } from './Style.js';
import { ButtonModal } from './Style.js';
import { Modal } from './Modal.js'

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
        <ButtonModal onClick={handleModal}> Inf.</ButtonModal>
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

