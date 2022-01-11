import { InputWrapper } from './Style.js';

export const InputButton = ({id, label, value, sumarInput, restarInput, onChange}) => {
  return (
      <InputWrapper>
        <label htmlFor={id}>{label} </label>
        <button onClick={sumarInput}>+</button> 
        <input  type='text' id={id} name={id} value={value} onChange={onChange}/>
        <button onClick={restarInput}>-</button>  
      </InputWrapper>
    );
}