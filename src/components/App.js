import React, {useState} from 'react';

export function App() {

  const [checkOne, setcheckOne] = useState(false);
  const [checkTwo, setcheckTwo] = useState(false);
  const [checkThree, setcheckThree] = useState(false);
  const [total, setTotal] = useState(0);

  const handleCheck1 = () => setcheckOne(!checkOne);
  const handleCheck2 = () => setcheckTwo(!checkTwo);
  const handleCheck3 = () => setcheckThree(!checkThree);
  
  function handleTotal(event){
    let evtValue = Number(event.target.value);
    (event.target.checked) ? setTotal(total+evtValue) : setTotal(total-evtValue)
  }

  return (
    <>
    <div>
      <Checkbox 
        check={checkOne} 
        onChange={handleCheck1}
        onClick={handleTotal}
        value={400} 
      >
      Layout (400€)
      </Checkbox>
      
      <Checkbox 
        check={checkTwo} 
        onChange={handleCheck2} 
        onClick={handleTotal}
        value={300}
      > 
      Seo (300€)
      </Checkbox>

      <Checkbox 
        check={checkThree} 
        onChange={handleCheck3} 
        onClick={handleTotal}
        value={200}
      >
      GoogleAdds (200€)
      </Checkbox>
    </div>
  <p>Total price is {total}</p>
  </>
  );
};

const Checkbox = ({check, onChange, onClick, value, children}) => {
  return (
    <label>
      <input type='checkbox' checked={check} onChange={onChange} onClick={onClick} value={value}/>
      {children}
    </label>
  );
}