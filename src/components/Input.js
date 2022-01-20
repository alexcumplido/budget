import { WrapperInputText } from './Style.js';

export const Input = ({ label, id, value, onChange}) => {
  return (
    <WrapperInputText>
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
    </WrapperInputText>
    );
}

