export const Input = ({id, value, onChange}) => {
  return (
    <label htmlFor={id}>
      <input  type='text' id={id} name={id} value={value} onChange={onChange}/>
    </label>
  );
}