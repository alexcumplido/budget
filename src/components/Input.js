import { InputForm } from './Style.js';

export const Input = ({ label, id, value, onChange}) => {
  return (
    <InputForm>
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
    </InputForm>
    );
}

