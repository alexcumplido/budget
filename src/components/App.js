import React, {useState} from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border: 2px solid #000000;
  border-radius: 10px;
`;

export function App() {

  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCheck1 = () => setCheckOne(!checkOne);
  const handleCheck2 = () => setCheckTwo(!checkTwo);
  const handleCheck3 = () => setCheckThree(!checkThree);

  const handleInput1 = (e) => setInputOne(e.target.value);
  const handleInput2 = (e) => setInputTwo(e.target.value);

  function handleTotal(event){
    let value = Number(event.target.value);
    (event.target.checked) ? setTotal(total+value) : setTotal(total-value)
  }

  return (
    <>
      <div>
        <h3>Services </h3>
        <Checkbox 
          label='Web deployment (400€)'
          check={checkOne} 
          onChange={handleCheck1}
          onClick={handleTotal}
          value={400} 
        />

        {checkOne && 
        <Panel>
          <Input label='num. pages' value={inputOne} onChange={handleInput1}/>
          <Input label='num. languages' value={inputTwo} onChange={handleInput2}/> 
        </Panel>}

        <Checkbox 
          label='Seo Analysis (300€)'
          check={checkTwo} 
          onChange={handleCheck2} 
          onClick={handleTotal}
          value={300}
        /> 

        <Checkbox 
          label='Google Adds action (200€)'
          check={checkThree} 
          onChange={handleCheck3} 
          onClick={handleTotal}
          value={200}
        />

    </div>
    <p>Total price is {total}</p>
  </>
  );
};

const Input = ({label, value, onChange}) => {
  return (
    <label>
      {label}
      <input  type='number' value={value} onChange={onChange} min="0"/>
    </label>
  );
}

const Checkbox = ({label ,check, onChange, onClick, value}) => {
  return (
    <label>
      <input type='checkbox' checked={check} onChange={onChange} onClick={onClick} value={value}/>
      {label}
    </label>
  );
}

  // const [inputs, setInputs] = useState({pages: '', languages: ''});

  // function handleInputs(evt) {
  //   setInputs({
  //     ...inputs, 
  //     [evt.target.name]: evt.target.value
  //   });
  // }