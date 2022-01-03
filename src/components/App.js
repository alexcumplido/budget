  import React, {useState} from 'react';

  export function App() {

  const [checkOne, setcheckOne] = useState(false);
  const [checkTwo, setcheckTwo] = useState(false);
  const [checkThree, setcheckThree] = useState(false);

  const handleChangeOne = () => setcheckOne(!checkOne);
  const handleChangeTwo = () => setcheckTwo(!checkTwo);
  const handleChangeThree = () => setcheckThree(!checkThree);

 
  return (

    <div>
      <Checkbox label='Layout (400€)' check={checkOne} onChange={handleChangeOne} value={400}/>
      
      <Checkbox label='Seo(300€)' check={checkTwo} onChange={handleChangeTwo} value={300}/>

      <Checkbox label='GoogleAdds(200€)' check={checkThree} onChange={handleChangeThree} value={200}/>
    </div>

  );
};

const Checkbox = ({label, check, onChange, value}) => {
  return (
    <label>
      <input type='checkbox' checked={check} onChange={onChange} value={value}/>
      {label}
    </label>
  );
}

