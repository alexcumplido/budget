import { CheckboxStyed } from './Style.js';

export const Checkbox = ({id, check, onChange, label }) => {
  return (
    <CheckboxStyed>  
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
    </CheckboxStyed>
  );
}