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

  let [total, setTotal] = useState(0);

  const [maquetar, setMaquetar] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAdds, setGoogleAdds] = useState(false);

  const handleMaquetar = () => setMaquetar(!maquetar);
  const handleSeo = () => setSeo(!seo);
  const handleGoogleAdds = () => setGoogleAdds(!googleAdds);

  const [paginas, setPaginas] = useState(0);
  const [idiomas, setIdiomas] = useState(0);
  let [inputs, setInputs] = useState(0);

  const handlePaginas = (e) => setPaginas(e.target.value);
  const handleIdiomas = (e) => setIdiomas(e.target.value);

  function handleInputs () {
    setInputs((Number(paginas)*Number(idiomas))*30);
    setTotal(total+inputs);
  }

  function handleChecks(event){
    let checkName = event.target.name;
    let isCheck = event.target.checked;

    if(checkName === 'maquetar' && isCheck) {
      setTotal(total+400);
    } else if (checkName === 'maquetar' && !isCheck) {
      setTotal(total-400);
    }

    if(checkName === 'seo' && isCheck ) {
      setTotal(total+300)
    } else if (checkName === 'seo' && !isCheck) {
      setTotal(total-300)
    }

    if(checkName === 'googleAdds' && isCheck) {
      setTotal(total+200)
    } else if (checkName === 'googleAdds' && !isCheck) {
      setTotal(total-200)
    }

  }

  return (
    <form>
      <h3>Services </h3>
      <Checkbox 
        label='Web deployment (400€)'
        name='maquetar' 
        check={maquetar} 
        onChange={handleMaquetar}
        onClick={handleChecks}
      />
    
      {maquetar && 
      <Panel>
        <Input label='num. pages' value={paginas} onChange={handlePaginas} onClick={handleInputs}/>
        <Input label='num. languages' value={idiomas} onChange={handleIdiomas} onClick={handleInputs}/> 
      </Panel>}

      <Checkbox 
        label='Seo Analysis (300€)'
        name='seo' 
        check={seo} 
        onChange={handleSeo} 
        onClick={handleChecks}
      /> 

      <Checkbox 
        label='Google Adds action (200€)'
        name='googleAdds' 
        check={googleAdds} 
        onChange={handleGoogleAdds} 
        onClick={handleChecks}
        value={200}
      />
      <p>Total price is {total}</p>
    </form>
  );
};

const Checkbox = ({label, name, check, onChange, onClick,}) => {
  return (
    <label>
      <input type='checkbox' name={name} checked={check} onChange={onChange} onClick={onClick}/>
      {label}
    </label>
  );
}

const Input = ({label, onChange, onClick}) => {
  return (
    <label>
      {label}
      <input  type='text' onChange={onChange} onClick={onClick} min="0"/>
    </label>
  );
}

  // let webDeployValue = Number(inputOne)*Number(inputTwo)*30; 

  // const [inputs, setInputs] = useState({pages: '', languages: ''});

  // function handleInputs(evt) {
  //   setInputs({
  //     ...inputs, 
  //     [evt.target.name]: evt.target.value
  //   });
  // }



  