import { 
  WrapperInputPanel, 
  ButtonPanel, 
  LinkButtonModal
  } from './Style.js';

export const InputPanel = ({id, value, addInput, subtractInput, onChange}) => {
  return (
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
        <LinkButtonModal to={`modal/${id}`}>Inf</LinkButtonModal> 
      </WrapperInputPanel>
    );
}
