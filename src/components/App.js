import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  gap: 1rem;
  border: 1px solid #000000;
  border-radius: 10px;
`;

const Form = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const InputBotones = styled.div`
  display: flex;
`;

export function App() {
  let [total, setTotal] = useState(0);

  //checkbox useState and handlers
  const [maquetar, setMaquetar] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAdds, setGoogleAdds] = useState(false);

  //Inputs useState and handlers
  let [paginas, setPaginas] = useState(0);
  let [idiomas, setIdiomas] = useState(0);

  //handle Checks
  const handleMaquetar = () => setMaquetar(!maquetar);
  const handleSeo = () => setSeo(!seo);
  const handleGoogleAdds = () => setGoogleAdds(!googleAdds);

  // handle Inputs
  const handlePaginas = (evt) => setPaginas(Number(evt.target.value));
  const handleIdiomas = (evt) => setIdiomas(Number(evt.target.value));

  //Checkbox summation
  function totalChecks(evt){
    let name = evt.target.name;
    let chekced = evt.target.checked;
    
    if(name === 'maquetar' && chekced) {
      setTotal(total+400);
    } else if (name === 'maquetar' && !chekced) {
      setTotal(total-400);
    }

    if(name === 'seo' && chekced ) {
      setTotal(total+300)
    } else if (name === 'seo' && !chekced) {
      setTotal(total-300)
    }

    if(name === 'googleAdds' && chekced) {
      setTotal(total+200)
    } else if (name === 'googleAdds' && !chekced) {
      setTotal(total-200)
    }
  }
  

  useEffect(() => {
    const costoMaquetar = () => {
      let costoTotal = 0;
      let costoChecks = 0;

      costoTotal = (Number(paginas) * Number(idiomas))*30;

      if(maquetar) costoChecks += 400;
      if(seo) costoChecks += 300
      if(googleAdds) costoChecks += 200;
      setTotal(costoTotal+costoChecks);
    }

     costoMaquetar();
  }, [paginas, idiomas]);

  //web paginas and idiomas inputs
  const sumarPaginas = () => {
    setPaginas(++paginas);  
  } 
  const restarPaginas = () => {
    (paginas===0) ? setPaginas(paginas) : setPaginas(--paginas);
  } 

  const sumarIdiomas = () => {
    setIdiomas(++idiomas);
  } 
  const restarIdiomas = () => {
    (idiomas===0) ? setIdiomas(idiomas) : setIdiomas(--idiomas);
  } 

  return (
    <Form>
      <h3>Services </h3>
      <Checkbox 
        label='Web deployment (400€)'
        name='maquetar' 
        check={maquetar} 
        onChange={handleMaquetar}
        onClick={totalChecks}
      />
    
      {maquetar && 
      <Panel>
          
      <InputBotones>
        <label htmlFor='paginas'>num páginas</label>
       <button onClick={sumarPaginas}>+</button>
        <Input
          id='paginas' 
          value={paginas} 
          onChange={handlePaginas} 
        />
        <button onClick={restarPaginas}>-</button>
        
      </InputBotones>

      <InputBotones>
        <label htmlFor='idiomas'>num. idiomas</label>
        <button onClick={sumarIdiomas}>+</button>
        <Input 
          id='idiomas'
          value={idiomas} 
          onChange={handleIdiomas}
        /> 
        <button onClick={restarIdiomas}>-</button>
      </InputBotones>

      </Panel>}

      <Checkbox 
        label='Seo Analysis (300€)'
        name='seo' 
        check={seo} 
        onChange={handleSeo} 
        onClick={totalChecks}
      /> 
      <Checkbox 
        label='Google Adds action (200€)'
        name='googleAdds' 
        check={googleAdds} 
        onChange={handleGoogleAdds} 
        onClick={totalChecks}
      />
      <p>Total price is {total}</p>
    </Form>
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

const Input = ({onChange}) => {
  return (
    <label>
      <input  type='text' onChange={onChange}/>
    </label>
  );
}


  