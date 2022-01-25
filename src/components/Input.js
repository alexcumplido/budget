import { InputStyled } from './Style.js';

export const Input = ({ label, id, value, onChange}) => {
  return (
    <InputStyled>
       <label htmlFor={id}> 
          {label} 
        </label>
        <input  
          type='text' 
          id={id} 
          name={id} 
          value={value} 
          onChange={onChange}
        />
    </InputStyled>
    );
}

