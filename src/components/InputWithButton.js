import { WrapperInputText } from './Style.js';
import { Modal } from './Modal.js'

export const InputWithButton = ({ id, value, addInput, subtractInput, onChange,  modal, handleModal}) => {
  return (
    <>
      <WrapperInputText>
        <label htmlFor={id}> 
          {id} 
        </label>
        <button onClick={addInput}>+</button> 
        <input  
          type='text' 
          id={id} 
          name={id} 
          value={value} 
          onChange={onChange}
        />
        <button onClick={subtractInput}>-</button>
        <button onClick={handleModal}> Info</button>
      </WrapperInputText>
      {modal && 
        <Modal 
          textModal={id} 
          handleModal={handleModal}
        />
      }
    </>
    );
}
