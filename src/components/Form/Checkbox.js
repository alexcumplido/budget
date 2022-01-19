import { WrapperInputCheckbox } from '../Style.js';

export const Checkbox = ({label, id, check, onChange}) => {
  return (
    <WrapperInputCheckbox>  
        <input 
          type='checkbox' 
          id={id} 
          name={id} 
          checked={check} 
          onChange={onChange} 
        />
        <label htmlFor={id} > 
          {label} 
        </label>
    </WrapperInputCheckbox>
  );
}